#!/usr/bin/env node
// generate-seed.mjs  –  reads the static JS data and writes 003_seed.sql
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── helpers ────────────────────────────────────────────────────────
function esc(v) {
  if (v === null || v === undefined) return 'NULL';
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v)) return `ARRAY[${v.map(i => `'${String(i).replace(/'/g, "''")}'`).join(', ')}]`;
  if (typeof v === 'object') return `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;
  return `'${String(v).replace(/'/g, "''")}'`;
}

function numOrNull(v) {
  return v === null || v === undefined ? 'NULL' : String(v);
}

function dateOrNull(v) {
  return v ? `'${v}'` : 'NULL';
}

function textArr(arr) {
  if (!arr || arr.length === 0) return "'{}'";
  return `ARRAY[${arr.map(s => `'${String(s).replace(/'/g, "''")}'`).join(', ')}]`;
}

function jsonb(v) {
  if (v === null || v === undefined) return 'NULL';
  return `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;
}

// ── dynamic import of JS data files ────────────────────────────────
const { carriers } = await import(resolve(ROOT, 'src/data/carriers.js'));
const { fiaProducts } = await import(resolve(ROOT, 'src/data/fia-products.js'));
const { glwbRiders } = await import(resolve(ROOT, 'src/data/glwb-riders.js'));
const { iulProducts } = await import(resolve(ROOT, 'src/data/iul-products.js'));
const { benchmarks } = await import(resolve(ROOT, 'src/data/benchmarks.js'));
const { historicalRates } = await import(resolve(ROOT, 'src/data/historical.js'));

// ── Stub carriers for IDs referenced by products but missing from carriers.js
// These exist because the product JS files use slightly different carrier IDs
// than the carriers.js file.  We insert minimal rows so FK constraints pass.
const stubCarriers = [
  { id: 'fidelity-and-guaranty', name: 'Fidelity & Guaranty Life Insurance Company', shortName: 'F&G', ratings: {}, foundedYear: 1959, headquarters: 'Des Moines, IA', totalAssets: '$50B', website: 'https://www.fglife.com', productCategories: ['fia', 'glwb'] },
  { id: 'securian-financial', name: 'Securian Financial Group', shortName: 'Securian Financial', ratings: {}, foundedYear: 1880, headquarters: 'St. Paul, MN', totalAssets: '$95B', website: 'https://www.securian.com', productCategories: ['fia', 'iul'] },
  { id: 'national-western', name: 'National Western Life Insurance Company', shortName: 'National Western', ratings: {}, foundedYear: 1956, headquarters: 'Austin, TX', totalAssets: '$12B', website: 'https://www.nationalwesternlife.com', productCategories: ['fia'] },
  { id: 'great-west', name: 'Great-West Life & Annuity Insurance Company', shortName: 'Great-West', ratings: {}, foundedYear: 1907, headquarters: 'Greenwood Village, CO', totalAssets: '$60B', website: 'https://www.greatwest.com', productCategories: ['fia', 'glwb'] },
  { id: 'galic', name: 'Great American Life Insurance Company (GALIC)', shortName: 'GALIC', ratings: {}, foundedYear: 1872, headquarters: 'Cincinnati, OH', totalAssets: '$55B', website: 'https://www.greatamericaninsurancegroup.com', productCategories: ['fia', 'glwb'] },
  { id: 'jackson', name: 'Jackson National Life Insurance Company', shortName: 'Jackson', ratings: {}, foundedYear: 1961, headquarters: 'Lansing, MI', totalAssets: '$340B', website: 'https://www.jackson.com', productCategories: ['fia', 'glwb'] },
  { id: 'protective', name: 'Protective Life Insurance Company', shortName: 'Protective', ratings: {}, foundedYear: 1907, headquarters: 'Birmingham, AL', totalAssets: '$120B', website: 'https://www.protective.com', productCategories: ['fia', 'glwb'] },
  { id: 'corebridge', name: 'Corebridge Financial (formerly AIG)', shortName: 'Corebridge', ratings: {}, foundedYear: 1921, headquarters: 'Houston, TX', totalAssets: '$380B', website: 'https://www.corebridgefinancial.com', productCategories: ['fia', 'glwb'] },
  { id: 'brighthouse', name: 'Brighthouse Life Insurance Company', shortName: 'Brighthouse', ratings: {}, foundedYear: 2017, headquarters: 'Charlotte, NC', totalAssets: '$240B', website: 'https://www.brighthousefinancial.com', productCategories: ['fia', 'glwb'] },
  { id: 'allianz', name: 'Allianz Life Insurance Company of North America', shortName: 'Allianz', ratings: {}, foundedYear: 1896, headquarters: 'Minneapolis, MN', totalAssets: '$260B', website: 'https://www.allianzlife.com', productCategories: ['fia', 'glwb'] },
  { id: 'sammons', name: 'Sammons Financial Group', shortName: 'Sammons', ratings: {}, foundedYear: 1886, headquarters: 'Cedar Rapids, IA', totalAssets: '$58B', website: 'https://www.sammonsfinancialgroup.com', productCategories: ['fia', 'glwb'] },
  { id: 'integrity', name: 'Integrity Life Insurance Company', shortName: 'Integrity', ratings: {}, foundedYear: 1966, headquarters: 'Cincinnati, OH', totalAssets: '$12B', website: 'https://www.integritylife.com', productCategories: ['fia', 'glwb'] },
  { id: 'united-home-life', name: 'United Home Life Insurance Company', shortName: 'United Home Life', ratings: {}, foundedYear: 1948, headquarters: 'Indianapolis, IN', totalAssets: '$1B', website: 'https://www.unitedhomelife.com', productCategories: ['fia', 'glwb'] },
  { id: 'guggenheim', name: 'Guggenheim Life and Annuity Company', shortName: 'Guggenheim', ratings: {}, foundedYear: 2004, headquarters: 'Indianapolis, IN', totalAssets: '$30B', website: 'https://www.guggenheiminsurance.com', productCategories: ['fia', 'glwb'] },
  { id: 'liberty-bankers', name: 'Liberty Bankers Life Insurance Company', shortName: 'Liberty Bankers', ratings: {}, foundedYear: 1952, headquarters: 'Dallas, TX', totalAssets: '$5B', website: 'https://www.libertybankerslife.com', productCategories: ['fia', 'glwb'] },
];

// Merge: put stub carriers first, then real carriers (real will overwrite stubs via ON CONFLICT)
const allCarriers = [...stubCarriers, ...carriers];

const lines = [];
const w = (s) => lines.push(s);

w(`-- ============================================================================`);
w(`-- AnnuityIQ Seed Data`);
w(`-- Migration 003: Insert all product data`);
w(`-- Auto-generated by scripts/generate-seed.mjs`);
w(`-- ============================================================================`);
w(``);
w(`BEGIN;`);
w(``);

// ── 1. CARRIERS ────────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- Carriers (${allCarriers.length} rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const c of allCarriers) {
  w(`INSERT INTO public.carriers (id, name, short_name, ratings, founded_year, headquarters, total_assets, website, product_categories)`);
  w(`VALUES (`);
  w(`  ${esc(c.id)},`);
  w(`  ${esc(c.name)},`);
  w(`  ${esc(c.shortName)},`);
  w(`  ${jsonb(c.ratings)},`);
  w(`  ${numOrNull(c.foundedYear)},`);
  w(`  ${esc(c.headquarters)},`);
  w(`  ${esc(c.totalAssets)},`);
  w(`  ${esc(c.website)},`);
  w(`  ${textArr(c.productCategories)}`);
  w(`) ON CONFLICT (id) DO UPDATE SET`);
  w(`  name = EXCLUDED.name,`);
  w(`  short_name = EXCLUDED.short_name,`);
  w(`  ratings = EXCLUDED.ratings,`);
  w(`  founded_year = EXCLUDED.founded_year,`);
  w(`  headquarters = EXCLUDED.headquarters,`);
  w(`  total_assets = EXCLUDED.total_assets,`);
  w(`  website = EXCLUDED.website,`);
  w(`  product_categories = EXCLUDED.product_categories;`);
  w(``);
}

// ── 2. FIA PRODUCTS ────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- FIA Products (${fiaProducts.length} rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const p of fiaProducts) {
  w(`INSERT INTO public.fia_products (id, carrier_id, name, surrender_period, surrender_schedule, minimum_premium, maximum_issue_age, guaranteed_min_rate, premium_bonus, free_withdrawal_pct, index_strategies, income_rider_available, highlights, last_rate_update)`);
  w(`VALUES (`);
  w(`  ${esc(p.id)},`);
  w(`  ${esc(p.carrierId)},`);
  w(`  ${esc(p.name)},`);
  w(`  ${numOrNull(p.surrenderPeriod)},`);
  w(`  ${jsonb(p.surrenderSchedule)},`);
  w(`  ${numOrNull(p.minimumPremium)},`);
  w(`  ${numOrNull(p.maximumIssueAge)},`);
  w(`  ${numOrNull(p.guaranteedMinimumRate)},`);
  w(`  ${numOrNull(p.premiumBonus)},`);
  w(`  ${numOrNull(p.freeWithdrawalPercent)},`);
  w(`  ${jsonb(p.indexStrategies)},`);
  w(`  ${esc(p.incomeRiderAvailable)},`);
  w(`  ${textArr(p.highlights)},`);
  w(`  ${dateOrNull(p.lastRateUpdate)}`);
  w(`) ON CONFLICT (id) DO UPDATE SET`);
  w(`  carrier_id = EXCLUDED.carrier_id,`);
  w(`  name = EXCLUDED.name,`);
  w(`  surrender_period = EXCLUDED.surrender_period,`);
  w(`  surrender_schedule = EXCLUDED.surrender_schedule,`);
  w(`  minimum_premium = EXCLUDED.minimum_premium,`);
  w(`  maximum_issue_age = EXCLUDED.maximum_issue_age,`);
  w(`  guaranteed_min_rate = EXCLUDED.guaranteed_min_rate,`);
  w(`  premium_bonus = EXCLUDED.premium_bonus,`);
  w(`  free_withdrawal_pct = EXCLUDED.free_withdrawal_pct,`);
  w(`  index_strategies = EXCLUDED.index_strategies,`);
  w(`  income_rider_available = EXCLUDED.income_rider_available,`);
  w(`  highlights = EXCLUDED.highlights,`);
  w(`  last_rate_update = EXCLUDED.last_rate_update;`);
  w(``);
}

// ── 3. GLWB RIDERS ─────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- GLWB Riders (${glwbRiders.length} rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const r of glwbRiders) {
  w(`INSERT INTO public.glwb_riders (id, carrier_id, name, attached_product, rider_fee, rollup, withdrawal_rates, step_up_available, rmd_friendly, nursing_home_benefit, nursing_home_multiplier, minimum_premium, maximum_issue_age, highlights, last_rate_update)`);
  w(`VALUES (`);
  w(`  ${esc(r.id)},`);
  w(`  ${esc(r.carrierId)},`);
  w(`  ${esc(r.name)},`);
  w(`  ${esc(r.attachedProduct)},`);
  w(`  ${numOrNull(r.riderFee)},`);
  w(`  ${jsonb(r.rollUp)},`);
  w(`  ${jsonb(r.withdrawalRates)},`);
  w(`  ${esc(r.stepUpAvailable)},`);
  w(`  ${esc(r.rmdFriendly)},`);
  w(`  ${esc(r.nursingHomeBenefit)},`);
  w(`  ${numOrNull(r.nursingHomeMultiplier)},`);
  w(`  ${numOrNull(r.minimumPremium)},`);
  w(`  ${numOrNull(r.maximumIssueAge)},`);
  w(`  ${textArr(r.highlights)},`);
  w(`  ${dateOrNull(r.lastRateUpdate)}`);
  w(`) ON CONFLICT (id) DO UPDATE SET`);
  w(`  carrier_id = EXCLUDED.carrier_id,`);
  w(`  name = EXCLUDED.name,`);
  w(`  attached_product = EXCLUDED.attached_product,`);
  w(`  rider_fee = EXCLUDED.rider_fee,`);
  w(`  rollup = EXCLUDED.rollup,`);
  w(`  withdrawal_rates = EXCLUDED.withdrawal_rates,`);
  w(`  step_up_available = EXCLUDED.step_up_available,`);
  w(`  rmd_friendly = EXCLUDED.rmd_friendly,`);
  w(`  nursing_home_benefit = EXCLUDED.nursing_home_benefit,`);
  w(`  nursing_home_multiplier = EXCLUDED.nursing_home_multiplier,`);
  w(`  minimum_premium = EXCLUDED.minimum_premium,`);
  w(`  maximum_issue_age = EXCLUDED.maximum_issue_age,`);
  w(`  highlights = EXCLUDED.highlights,`);
  w(`  last_rate_update = EXCLUDED.last_rate_update;`);
  w(``);
}

// ── 4. IUL PRODUCTS ────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- IUL Products (${iulProducts.length} rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const p of iulProducts) {
  w(`INSERT INTO public.iul_products (id, carrier_id, name, max_illustrated_rate, index_accounts, fixed_account_rate, guaranteed_min_crediting_rate, loan_provisions, no_lapse_guarantee, death_benefit_options, riders, minimum_face_amount, maximum_issue_age, highlights, last_rate_update)`);
  w(`VALUES (`);
  w(`  ${esc(p.id)},`);
  w(`  ${esc(p.carrierId)},`);
  w(`  ${esc(p.name)},`);
  w(`  ${numOrNull(p.maxIllustratedRate)},`);
  w(`  ${jsonb(p.indexAccounts)},`);
  w(`  ${numOrNull(p.fixedAccountRate)},`);
  w(`  ${numOrNull(p.guaranteedMinCreditingRate)},`);
  w(`  ${jsonb(p.loanProvisions)},`);
  w(`  ${esc(p.noLapseGuarantee)},`);
  w(`  ${textArr(p.deathBenefitOptions)},`);
  w(`  ${jsonb(p.riders)},`);
  w(`  ${numOrNull(p.minimumFaceAmount)},`);
  w(`  ${numOrNull(p.maximumIssueAge)},`);
  w(`  ${textArr(p.highlights)},`);
  w(`  ${dateOrNull(p.lastRateUpdate)}`);
  w(`) ON CONFLICT (id) DO UPDATE SET`);
  w(`  carrier_id = EXCLUDED.carrier_id,`);
  w(`  name = EXCLUDED.name,`);
  w(`  max_illustrated_rate = EXCLUDED.max_illustrated_rate,`);
  w(`  index_accounts = EXCLUDED.index_accounts,`);
  w(`  fixed_account_rate = EXCLUDED.fixed_account_rate,`);
  w(`  guaranteed_min_crediting_rate = EXCLUDED.guaranteed_min_crediting_rate,`);
  w(`  loan_provisions = EXCLUDED.loan_provisions,`);
  w(`  no_lapse_guarantee = EXCLUDED.no_lapse_guarantee,`);
  w(`  death_benefit_options = EXCLUDED.death_benefit_options,`);
  w(`  riders = EXCLUDED.riders,`);
  w(`  minimum_face_amount = EXCLUDED.minimum_face_amount,`);
  w(`  maximum_issue_age = EXCLUDED.maximum_issue_age,`);
  w(`  highlights = EXCLUDED.highlights,`);
  w(`  last_rate_update = EXCLUDED.last_rate_update;`);
  w(``);
}

// ── 5. BENCHMARKS ──────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- Benchmarks (3 rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const cat of ['fia', 'glwb', 'iul']) {
  w(`INSERT INTO public.benchmarks (id, category, metrics, computed_at)`);
  w(`VALUES (`);
  w(`  ${esc(cat)},`);
  w(`  ${esc(cat)},`);
  w(`  ${jsonb(benchmarks[cat])},`);
  w(`  '${benchmarks.asOfDate}'::timestamptz`);
  w(`) ON CONFLICT (id) DO UPDATE SET`);
  w(`  category = EXCLUDED.category,`);
  w(`  metrics = EXCLUDED.metrics,`);
  w(`  computed_at = EXCLUDED.computed_at;`);
  w(``);
}

// ── 6. RATE HISTORY ────────────────────────────────────────────────
w(`-- --------------------------------------------------------------------------`);
w(`-- Rate History (${historicalRates.length * 3} rows)`);
w(`-- --------------------------------------------------------------------------`);
for (const h of historicalRates) {
  for (const ptype of ['fia', 'glwb', 'iul']) {
    const pid = `aggregate-${ptype}`;
    w(`INSERT INTO public.rate_history (product_id, product_type, quarter, metrics)`);
    w(`VALUES (`);
    w(`  ${esc(pid)},`);
    w(`  ${esc(ptype)},`);
    w(`  ${esc(h.quarter)},`);
    w(`  ${jsonb(h[ptype])}`);
    w(`) ON CONFLICT DO NOTHING;`);
    w(``);
  }
}

w(`COMMIT;`);

// ── write file ─────────────────────────────────────────────────────
const outPath = resolve(ROOT, 'supabase/migrations/003_seed.sql');
writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Wrote ${outPath} (${lines.length} lines)`);
