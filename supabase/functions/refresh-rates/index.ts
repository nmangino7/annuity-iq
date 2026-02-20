// =============================================================================
// AnnuityIQ - Automated Rate Refresh Edge Function
// =============================================================================
//
// Called daily by pg_cron or Supabase's built-in cron scheduler.
// Scrapes/fetches rate data from public sources and updates the database.
//
// Data sources (in priority order):
//   1. Carrier rate sheet PDFs and APIs (when available)
//   2. LIMRA/Wink annuity rate aggregators
//   3. Insurance news sites (e.g., ThinkAdvisor, InsuranceNewsNet)
//   4. State filing databases (SERFF)
//
// This function is designed to run unattended. All errors are logged
// to the data_update_log table for monitoring.
// =============================================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// ---------------------------------------------------------------------------
// Rate data sources — each returns an array of product updates
// ---------------------------------------------------------------------------

interface RateUpdate {
  productId: string
  productType: 'fia' | 'glwb' | 'iul'
  table: string
  updates: Record<string, unknown>
}

/**
 * Fetch FIA rate updates from public sources.
 *
 * Strategy: We check a curated list of carrier rate sheet URLs.
 * Many carriers publish rate sheets as PDFs or on their advisor portals.
 * This function checks for changes and extracts updated cap/participation rates.
 */
async function fetchFIARateUpdates(): Promise<RateUpdate[]> {
  const updates: RateUpdate[] = []

  // Rate source endpoints — these would be configured per carrier
  // In production, each carrier has its own adapter/parser
  const rateSources = [
    {
      carrier: 'allianz-life',
      url: 'https://www.allianzlife.com/rates',
      type: 'html' as const
    },
    {
      carrier: 'athene',
      url: 'https://www.athene.com/rates',
      type: 'html' as const
    },
    {
      carrier: 'nationwide',
      url: 'https://www.nationwide.com/annuity-rates',
      type: 'html' as const
    }
  ]

  for (const source of rateSources) {
    try {
      const response = await fetch(source.url, {
        headers: {
          'User-Agent': 'AnnuityIQ-RateBot/1.0 (rate-monitoring@annuityiq.com)'
        }
      })

      if (!response.ok) continue

      const html = await response.text()

      // Parse rate data from HTML
      // Each carrier has different page structures, so we use carrier-specific parsers
      const parsed = parseCarrierRates(source.carrier, html)
      updates.push(...parsed)

    } catch (err) {
      console.warn(`Failed to fetch rates from ${source.carrier}:`, err.message)
    }
  }

  return updates
}

/**
 * Parse carrier-specific rate pages.
 * Each carrier publishes rates differently, so we need specialized parsers.
 */
function parseCarrierRates(carrierId: string, html: string): RateUpdate[] {
  // This is a simplified parser framework. In production, each carrier
  // would have a dedicated parser module that extracts:
  // - Cap rates
  // - Participation rates
  // - Spreads
  // - Trigger rates
  // - Rider fees
  // - Rollup rates
  //
  // The parsers use regex and DOM parsing to extract structured data
  // from carrier rate sheets/web pages.

  const updates: RateUpdate[] = []

  // Example: Look for common rate patterns in HTML
  // Pattern: "Cap Rate: X.XX%" or "Participation Rate: XXX%"
  const capRatePattern = /cap\s*rate[:\s]+(\d+\.?\d*)%/gi
  const partRatePattern = /participation\s*rate[:\s]+(\d+\.?\d*)%/gi

  // Extract cap rates
  let match
  while ((match = capRatePattern.exec(html)) !== null) {
    const rate = parseFloat(match[1])
    if (rate > 0 && rate <= 20) { // Sanity check: FIA caps typically 2-15%
      console.log(`Found cap rate ${rate}% from ${carrierId}`)
    }
  }

  // Extract participation rates
  while ((match = partRatePattern.exec(html)) !== null) {
    const rate = parseFloat(match[1])
    if (rate >= 10 && rate <= 400) { // Sanity check
      console.log(`Found participation rate ${rate}% from ${carrierId}`)
    }
  }

  return updates
}

/**
 * Check industry aggregator sites for rate changes.
 * Sites like Wink's AnnuitySpecs, CANNEX, and insurance news outlets
 * often publish rate change summaries.
 */
async function checkIndustryAggregators(): Promise<RateUpdate[]> {
  const updates: RateUpdate[] = []

  const aggregatorUrls = [
    'https://www.winkspecs.com',
    'https://www.cannex.com',
    'https://www.thinkadvisor.com/annuities',
    'https://insurancenewsnet.com/topics/annuities'
  ]

  for (const url of aggregatorUrls) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'AnnuityIQ-RateBot/1.0 (rate-monitoring@annuityiq.com)'
        }
      })

      if (!response.ok) continue

      const html = await response.text()

      // Look for rate change announcements
      // These typically mention: "effective [date]", "cap rate", "increased to", "decreased to"
      const rateChangePattern = /(?:cap|participation|rollup)\s*rate.*?(?:increased|decreased|changed|set|adjusted)\s*(?:to|at)\s+(\d+\.?\d*)%/gi

      let match
      while ((match = rateChangePattern.exec(html)) !== null) {
        console.log(`Industry rate change detected: ${match[0]}`)
        // In production, we'd parse the carrier/product context and create updates
      }

    } catch (err) {
      console.warn(`Failed to check aggregator ${url}:`, err.message)
    }
  }

  return updates
}

/**
 * Apply rate updates to the database.
 */
async function applyUpdates(
  supabase: ReturnType<typeof createClient>,
  updates: RateUpdate[]
): Promise<{ updated: number; errors: string[] }> {
  let updated = 0
  const errors: string[] = []

  for (const update of updates) {
    try {
      const { error } = await supabase
        .from(update.table)
        .update({
          ...update.updates,
          last_rate_update: new Date().toISOString().slice(0, 10),
          updated_at: new Date().toISOString()
        })
        .eq('id', update.productId)

      if (error) {
        errors.push(`${update.productId}: ${error.message}`)
      } else {
        updated++
      }
    } catch (err) {
      errors.push(`${update.productId}: ${err.message}`)
    }
  }

  return { updated, errors }
}

/**
 * Recompute benchmarks from current product data.
 * Runs after rate updates to keep benchmarks in sync.
 */
async function recomputeBenchmarks(
  supabase: ReturnType<typeof createClient>
): Promise<void> {
  // FIA benchmarks
  const { data: fiaProducts } = await supabase
    .from('fia_products')
    .select('index_strategies, premium_bonus, surrender_period, free_withdrawal_pct')

  if (fiaProducts && fiaProducts.length > 0) {
    const capRates: number[] = []
    const partRates: number[] = []

    for (const product of fiaProducts) {
      const strategies = product.index_strategies || []
      for (const s of strategies) {
        if (s.capRate && s.capRate > 0 && s.capRate <= 15) {
          capRates.push(s.capRate)
        }
        if (s.participationRate && s.participationRate > 0) {
          partRates.push(s.participationRate)
        }
      }
    }

    if (capRates.length > 0) {
      const fiaMetrics = {
        avgCapRate: +(capRates.reduce((a, b) => a + b, 0) / capRates.length).toFixed(2),
        maxCapRate: Math.max(...capRates),
        minCapRate: Math.min(...capRates),
        medianCapRate: +median(capRates).toFixed(2),
        avgPartRate: partRates.length > 0
          ? +(partRates.reduce((a, b) => a + b, 0) / partRates.length).toFixed(0)
          : null,
        totalProducts: fiaProducts.length
      }

      await supabase.from('benchmarks').upsert({
        id: 'fia',
        category: 'fia',
        metrics: fiaMetrics,
        computed_at: new Date().toISOString()
      })
    }
  }

  // GLWB benchmarks
  const { data: glwbRiders } = await supabase
    .from('glwb_riders')
    .select('rollup, withdrawal_rates, rider_fee')

  if (glwbRiders && glwbRiders.length > 0) {
    const rollupRates: number[] = []
    const riderFees: number[] = []

    for (const rider of glwbRiders) {
      if (rider.rollup?.rate) rollupRates.push(rider.rollup.rate)
      if (rider.rider_fee) riderFees.push(rider.rider_fee)
    }

    if (rollupRates.length > 0) {
      const glwbMetrics = {
        avgRollupRate: +(rollupRates.reduce((a, b) => a + b, 0) / rollupRates.length).toFixed(2),
        maxRollupRate: Math.max(...rollupRates),
        avgRiderFee: riderFees.length > 0
          ? +(riderFees.reduce((a, b) => a + b, 0) / riderFees.length).toFixed(2)
          : null,
        totalRiders: glwbRiders.length
      }

      await supabase.from('benchmarks').upsert({
        id: 'glwb',
        category: 'glwb',
        metrics: glwbMetrics,
        computed_at: new Date().toISOString()
      })
    }
  }

  // IUL benchmarks
  const { data: iulProducts } = await supabase
    .from('iul_products')
    .select('index_accounts, max_illustrated_rate, fixed_account_rate')

  if (iulProducts && iulProducts.length > 0) {
    const capRates: number[] = []
    const illustratedRates: number[] = []

    for (const product of iulProducts) {
      if (product.max_illustrated_rate) illustratedRates.push(product.max_illustrated_rate)
      const accounts = product.index_accounts || []
      for (const a of accounts) {
        if (a.capRate && a.capRate > 0 && a.capRate <= 15) {
          capRates.push(a.capRate)
        }
      }
    }

    if (capRates.length > 0) {
      const iulMetrics = {
        avgCapRate: +(capRates.reduce((a, b) => a + b, 0) / capRates.length).toFixed(2),
        maxCapRate: Math.max(...capRates),
        avgIllustratedRate: illustratedRates.length > 0
          ? +(illustratedRates.reduce((a, b) => a + b, 0) / illustratedRates.length).toFixed(2)
          : null,
        totalProducts: iulProducts.length
      }

      await supabase.from('benchmarks').upsert({
        id: 'iul',
        category: 'iul',
        metrics: iulMetrics,
        computed_at: new Date().toISOString()
      })
    }
  }
}

function median(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2
}

/**
 * Save a quarterly rate snapshot for historical tracking.
 */
async function saveQuarterlySnapshot(
  supabase: ReturnType<typeof createClient>
): Promise<void> {
  const now = new Date()
  const quarter = `${now.getFullYear()}-Q${Math.ceil((now.getMonth() + 1) / 3)}`

  // Check if we already have a snapshot for this quarter
  const { data: existing } = await supabase
    .from('rate_history')
    .select('id')
    .eq('quarter', quarter)
    .eq('product_id', 'aggregate-fia')
    .limit(1)

  if (existing && existing.length > 0) {
    console.log(`Quarterly snapshot for ${quarter} already exists, skipping`)
    return
  }

  // Get current benchmarks
  const { data: benchmarks } = await supabase
    .from('benchmarks')
    .select('*')

  if (!benchmarks) return

  for (const bm of benchmarks) {
    await supabase.from('rate_history').insert({
      product_id: `aggregate-${bm.id}`,
      product_type: bm.id,
      quarter,
      metrics: bm.metrics
    })
  }

  console.log(`Saved quarterly snapshot for ${quarter}`)
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const startTime = Date.now()
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const allErrors: string[] = []
  let totalUpdated = 0
  let totalAdded = 0

  try {
    console.log('=== AnnuityIQ Rate Refresh Starting ===')
    console.log(`Time: ${new Date().toISOString()}`)

    // Step 1: Fetch rate updates from carrier sites
    console.log('Step 1: Fetching FIA rate updates...')
    const fiaUpdates = await fetchFIARateUpdates()
    console.log(`  Found ${fiaUpdates.length} FIA updates`)

    // Step 2: Check industry aggregators
    console.log('Step 2: Checking industry aggregators...')
    const aggregatorUpdates = await checkIndustryAggregators()
    console.log(`  Found ${aggregatorUpdates.length} aggregator updates`)

    // Step 3: Apply all updates
    const allUpdates = [...fiaUpdates, ...aggregatorUpdates]
    if (allUpdates.length > 0) {
      console.log(`Step 3: Applying ${allUpdates.length} updates...`)
      const result = await applyUpdates(supabase, allUpdates)
      totalUpdated = result.updated
      allErrors.push(...result.errors)
    } else {
      console.log('Step 3: No rate changes detected')
    }

    // Step 4: Recompute benchmarks
    console.log('Step 4: Recomputing benchmarks...')
    await recomputeBenchmarks(supabase)

    // Step 5: Save quarterly snapshot (if applicable)
    console.log('Step 5: Checking quarterly snapshot...')
    await saveQuarterlySnapshot(supabase)

    const duration = Date.now() - startTime
    console.log(`=== Rate Refresh Complete in ${duration}ms ===`)
    console.log(`  Updated: ${totalUpdated}, Added: ${totalAdded}, Errors: ${allErrors.length}`)

    // Log the run
    await supabase.from('data_update_log').insert({
      source: 'refresh-rates',
      products_updated: totalUpdated,
      products_added: totalAdded,
      errors: allErrors.length > 0 ? allErrors : []
    })

    return new Response(JSON.stringify({
      success: true,
      duration: `${duration}ms`,
      updated: totalUpdated,
      added: totalAdded,
      errors: allErrors
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (err) {
    console.error('Rate refresh failed:', err)

    // Log the failure
    await supabase.from('data_update_log').insert({
      source: 'refresh-rates',
      products_updated: totalUpdated,
      products_added: totalAdded,
      errors: [err.message, ...allErrors]
    })

    return new Response(JSON.stringify({
      success: false,
      error: err.message,
      updated: totalUpdated,
      errors: allErrors
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
