// =============================================================================
// AnnuityIQ - API Layer (Supabase-backed, drop-in replacement for data/index.js)
// =============================================================================
//
// Every exported function has the SAME signature and return shape as the
// original static-data module so pages require minimal rewrites.
// The only difference: all functions are now async (return Promises).
// =============================================================================

import { supabase } from './supabase.js';

// ---------------------------------------------------------------------------
// Snake-case to camelCase conversion utility
// ---------------------------------------------------------------------------

/**
 * Convert a snake_case string to camelCase.
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
  return str.replace(/_([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/**
 * Recursively convert all keys of an object (or array of objects) from
 * snake_case to camelCase.  Leaves non-plain-object values untouched.
 *
 * @param {*} data
 * @returns {*}
 */
function camelCaseKeys(data) {
  if (Array.isArray(data)) {
    return data.map(camelCaseKeys);
  }
  if (data !== null && typeof data === 'object' && !(data instanceof Date)) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        toCamelCase(key),
        camelCaseKeys(value)
      ])
    );
  }
  return data;
}

// ---------------------------------------------------------------------------
// Cache infrastructure
// ---------------------------------------------------------------------------

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

/** @type {{ data: any, fetchedAt: number } | null} */
let _carriersCache = null;
let _fiaCache = null;
let _glwbCache = null;
let _iulCache = null;
let _benchmarksCache = null;
let _historicalCache = null;

/**
 * Return cached value if still fresh, otherwise null.
 */
function readCache(cache) {
  if (!cache) return null;
  if (Date.now() - cache.fetchedAt > CACHE_TTL_MS) return null;
  return cache.data;
}

/**
 * Invalidate all caches. Useful after a data update or when forcing a refresh.
 */
export function clearCache() {
  _carriersCache = null;
  _fiaCache = null;
  _glwbCache = null;
  _iulCache = null;
  _benchmarksCache = null;
  _historicalCache = null;
}

// ---------------------------------------------------------------------------
// Internal fetch helpers
// ---------------------------------------------------------------------------

async function fetchCarriersRaw() {
  const cached = readCache(_carriersCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('carriers')
    .select('*')
    .order('short_name');

  if (error) {
    console.error('Error fetching carriers:', error);
    throw error;
  }

  const carriers = camelCaseKeys(data);

  // Compute yearsInBusiness from foundedYear (matches the static data shape)
  const currentYear = new Date().getFullYear();
  for (const c of carriers) {
    if (c.foundedYear) {
      c.yearsInBusiness = currentYear - c.foundedYear;
    }
  }

  _carriersCache = { data: carriers, fetchedAt: Date.now() };
  return carriers;
}

/**
 * Build a carrier lookup map keyed by carrier id.
 */
async function getCarrierMap() {
  const carriers = await fetchCarriersRaw();
  return new Map(carriers.map(c => [c.id, c]));
}

async function fetchFIARaw() {
  const cached = readCache(_fiaCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('fia_products')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching FIA products:', error);
    throw error;
  }

  const products = camelCaseKeys(data);

  // Normalize DB column names to match frontend expectations
  // DB: free_withdrawal_pct -> freeWithdrawalPct, frontend expects freeWithdrawalPercent
  // DB: guaranteed_min_rate -> guaranteedMinRate, frontend expects guaranteedMinimumRate
  for (const p of products) {
    if ('freeWithdrawalPct' in p) {
      p.freeWithdrawalPercent = p.freeWithdrawalPct;
      delete p.freeWithdrawalPct;
    }
    if ('guaranteedMinRate' in p) {
      p.guaranteedMinimumRate = p.guaranteedMinRate;
      delete p.guaranteedMinRate;
    }
  }

  _fiaCache = { data: products, fetchedAt: Date.now() };
  return products;
}

async function fetchGLWBRaw() {
  const cached = readCache(_glwbCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('glwb_riders')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching GLWB riders:', error);
    throw error;
  }

  const riders = camelCaseKeys(data);
  _glwbCache = { data: riders, fetchedAt: Date.now() };
  return riders;
}

async function fetchIULRaw() {
  const cached = readCache(_iulCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('iul_products')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching IUL products:', error);
    throw error;
  }

  const products = camelCaseKeys(data);

  // Normalize DB column names to match frontend expectations
  // DB: guaranteed_min_crediting_rate -> guaranteedMinCreditingRate
  // DB: minimum_face_amount -> minimumFaceAmount
  // (these already convert correctly via camelCaseKeys, no extra mapping needed)

  _iulCache = { data: products, fetchedAt: Date.now() };
  return products;
}

// ---------------------------------------------------------------------------
// Public API - mirrors src/data/index.js exports
// ---------------------------------------------------------------------------

/**
 * @returns {Promise<Array>} Array of carrier objects
 */
export async function getCarriers() {
  return fetchCarriersRaw();
}

/**
 * @param {string} id - Carrier ID (kebab-case slug)
 * @returns {Promise<object|undefined>}
 */
export async function getCarrier(id) {
  const map = await getCarrierMap();
  return map.get(id);
}

/**
 * @returns {Promise<Array>} FIA products, each enriched with `.carrier` object
 */
export async function getFIAProducts() {
  const [products, carrierMap] = await Promise.all([
    fetchFIARaw(),
    getCarrierMap()
  ]);

  return products.map(p => ({
    ...p,
    carrier: carrierMap.get(p.carrierId)
  }));
}

/**
 * @returns {Promise<Array>} GLWB riders, each enriched with `.carrier` object
 */
export async function getGLWBRiders() {
  const [riders, carrierMap] = await Promise.all([
    fetchGLWBRaw(),
    getCarrierMap()
  ]);

  return riders.map(r => ({
    ...r,
    carrier: carrierMap.get(r.carrierId)
  }));
}

/**
 * @returns {Promise<Array>} IUL products, each enriched with `.carrier` object
 */
export async function getIULProducts() {
  const [products, carrierMap] = await Promise.all([
    fetchIULRaw(),
    getCarrierMap()
  ]);

  return products.map(p => ({
    ...p,
    carrier: carrierMap.get(p.carrierId)
  }));
}

/**
 * @returns {Promise<object>} Benchmarks object with `fia`, `glwb`, `iul` keys
 */
export async function getBenchmarks() {
  const cached = readCache(_benchmarksCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('benchmarks')
    .select('*');

  if (error) {
    console.error('Error fetching benchmarks:', error);
    throw error;
  }

  // Reconstruct the shape the frontend expects:
  // { fia: { ...metrics }, glwb: { ...metrics }, iul: { ...metrics }, asOfDate }
  const benchmarks = {};
  let latestDate = null;

  for (const row of data) {
    benchmarks[row.id] = row.metrics;
    if (row.computed_at && (!latestDate || row.computed_at > latestDate)) {
      latestDate = row.computed_at;
    }
  }

  // Include asOfDate matching the static data format
  if (latestDate) {
    benchmarks.asOfDate = latestDate.slice(0, 10);
  }

  _benchmarksCache = { data: benchmarks, fetchedAt: Date.now() };
  return benchmarks;
}

/**
 * @returns {Promise<Array>} Array of quarterly historical data points
 */
export async function getHistorical() {
  const cached = readCache(_historicalCache);
  if (cached) return cached;

  const { data, error } = await supabase
    .from('rate_history')
    .select('quarter, product_type, metrics')
    .order('quarter');

  if (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }

  // The static data is an array of objects keyed by quarter:
  // [{ quarter: "2021-Q1", fia: {...}, glwb: {...}, iul: {...} }, ...]
  //
  // The DB stores one row per (quarter, product_type).  Pivot into the
  // frontend shape.
  const byQuarter = new Map();

  for (const row of data) {
    if (!byQuarter.has(row.quarter)) {
      byQuarter.set(row.quarter, { quarter: row.quarter });
    }
    byQuarter.get(row.quarter)[row.product_type] = row.metrics;
  }

  const historical = Array.from(byQuarter.values());

  _historicalCache = { data: historical, fetchedAt: Date.now() };
  return historical;
}

/**
 * Find a single product by ID across all product types.
 * Returns the product enriched with `.type` and `.carrier`.
 *
 * @param {string} id - Product ID (kebab-case slug)
 * @returns {Promise<object|null>}
 */
export async function getProduct(id) {
  const carrierMap = await getCarrierMap();

  // Check FIA
  const fiaProducts = await fetchFIARaw();
  const fia = fiaProducts.find(p => p.id === id);
  if (fia) return { ...fia, type: 'fia', carrier: carrierMap.get(fia.carrierId) };

  // Check GLWB
  const glwbRiders = await fetchGLWBRaw();
  const glwb = glwbRiders.find(r => r.id === id);
  if (glwb) return { ...glwb, type: 'glwb', carrier: carrierMap.get(glwb.carrierId) };

  // Check IUL
  const iulProducts = await fetchIULRaw();
  const iul = iulProducts.find(p => p.id === id);
  if (iul) return { ...iul, type: 'iul', carrier: carrierMap.get(iul.carrierId) };

  return null;
}

/**
 * Get all products belonging to a specific carrier, grouped by type.
 *
 * @param {string} carrierId
 * @returns {Promise<{ fia: Array, glwb: Array, iul: Array }>}
 */
export async function getCarrierProducts(carrierId) {
  const [fiaProducts, glwbRiders, iulProducts, carrierMap] = await Promise.all([
    fetchFIARaw(),
    fetchGLWBRaw(),
    fetchIULRaw(),
    getCarrierMap()
  ]);

  return {
    fia: fiaProducts
      .filter(p => p.carrierId === carrierId)
      .map(p => ({ ...p, type: 'fia', carrier: carrierMap.get(p.carrierId) })),
    glwb: glwbRiders
      .filter(r => r.carrierId === carrierId)
      .map(r => ({ ...r, type: 'glwb', carrier: carrierMap.get(r.carrierId) })),
    iul: iulProducts
      .filter(p => p.carrierId === carrierId)
      .map(p => ({ ...p, type: 'iul', carrier: carrierMap.get(p.carrierId) }))
  };
}

/**
 * Search across carriers and products. Returns results with route info,
 * limited to 20 items.
 *
 * @param {string} query - Search term (minimum 2 characters)
 * @returns {Promise<Array<{ id: string, name: string, type: string, route: string }>>}
 */
export async function searchAll(query) {
  if (!query || query.length < 2) return [];

  const q = query.toLowerCase();

  const [carriers, fiaProducts, glwbRiders, iulProducts] = await Promise.all([
    fetchCarriersRaw(),
    fetchFIARaw(),
    fetchGLWBRaw(),
    fetchIULRaw()
  ]);

  const carrierMap = new Map(carriers.map(c => [c.id, c]));
  const results = [];

  // Search carriers
  for (const c of carriers) {
    if (
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q)
    ) {
      results.push({
        id: c.id,
        name: c.shortName,
        type: 'carrier',
        route: `/carriers/${c.id}`
      });
    }
  }

  // Search FIA products
  for (const p of fiaProducts) {
    const carrierName = carrierMap.get(p.carrierId)?.shortName || '';
    if (
      p.name.toLowerCase().includes(q) ||
      carrierName.toLowerCase().includes(q)
    ) {
      results.push({
        id: p.id,
        name: `${carrierName} ${p.name}`,
        type: 'fia',
        route: `/fia/${p.id}`
      });
    }
  }

  // Search GLWB riders
  for (const r of glwbRiders) {
    const carrierName = carrierMap.get(r.carrierId)?.shortName || '';
    if (
      r.name.toLowerCase().includes(q) ||
      carrierName.toLowerCase().includes(q)
    ) {
      results.push({
        id: r.id,
        name: `${carrierName} ${r.name}`,
        type: 'glwb',
        route: `/glwb/${r.id}`
      });
    }
  }

  // Search IUL products
  for (const p of iulProducts) {
    const carrierName = carrierMap.get(p.carrierId)?.shortName || '';
    if (
      p.name.toLowerCase().includes(q) ||
      carrierName.toLowerCase().includes(q)
    ) {
      results.push({
        id: p.id,
        name: `${carrierName} ${p.name}`,
        type: 'iul',
        route: `/iul/${p.id}`
      });
    }
  }

  return results.slice(0, 20);
}

// ---------------------------------------------------------------------------
// User profile & subscription helpers
// ---------------------------------------------------------------------------

/**
 * Fetch the current authenticated user's profile.
 *
 * @returns {Promise<object|null>} Profile with camelCase keys, or null
 */
export async function getProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return camelCaseKeys(data);
}

/**
 * Check whether the current user has active access (active subscription
 * or within the 7-day trial window).
 *
 * @returns {Promise<boolean>}
 */
export async function isSubscriptionActive() {
  const profile = await getProfile();
  if (!profile) return false;

  if (profile.subscriptionStatus === 'active') return true;

  if (profile.subscriptionStatus === 'trialing' && profile.trialStart) {
    const trialStart = new Date(profile.trialStart);
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return trialStart > sevenDaysAgo;
  }

  return false;
}
