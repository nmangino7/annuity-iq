// =============================================================================
// Nationwide Deferred Annuity Contract List API Client
// =============================================================================
// OpenAPI 3.0.0 — Policy Management / Deferred Annuity Contract List v1
// Base: https://{env}.nationwide.com/policy-management/deferred-annuity-contract-list/v1
// =============================================================================

const CONFIG_KEY = 'annuityiq_nw_api_config';

/**
 * Get saved Nationwide API configuration from localStorage
 */
export function getNWConfig() {
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Save Nationwide API configuration to localStorage
 */
export function saveNWConfig(config) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify({
    clientId: config.clientId || '',
    environment: config.environment || 'api',       // api, api-stage
    authToken: config.authToken || '',
    authType: config.authType || 'apikey',           // apikey, oauth, saml
    isInternal: config.isInternal || false,          // true = nwie.net, false = nationwide.com
  }));
}

/**
 * Clear saved configuration
 */
export function clearNWConfig() {
  localStorage.removeItem(CONFIG_KEY);
}

/**
 * Build the base URL from config
 */
function buildBaseUrl(config) {
  const host = config.isInternal
    ? `${config.environment}.nwie.net`
    : `${config.environment}.nationwide.com`;
  return `https://${host}/policy-management/deferred-annuity-contract-list/v1`;
}

/**
 * Generate a unique message ID for X-NW-Message-ID header
 */
function generateMessageId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

/**
 * Build headers for Nationwide API requests
 */
function buildHeaders(config) {
  const headers = {
    'X-NW-Message-ID': generateMessageId(),
    'client_id': config.clientId,
    'Accept': 'application/json',
  };

  // Add auth header based on auth type
  if (config.authType === 'oauth' || config.authType === 'saml') {
    if (config.authToken) {
      headers['Authorization'] = `Bearer ${config.authToken}`;
    }
  }

  return headers;
}

// =============================================================================
// API Methods
// =============================================================================

/**
 * Search for contracts by owner name
 *
 * @param {Object} params
 * @param {string} [params.lastName] - Primary owner/annuitant last name (fuzzy search)
 * @param {string} [params.firstName] - Primary owner/annuitant first name (fuzzy search)
 * @param {number} [params.offset=0] - Pagination offset
 * @param {number} [params.limit=20] - Results per page (max 100)
 * @returns {Promise<{contracts: Array, totalCount: number}>}
 */
export async function searchContracts({ lastName, firstName, offset = 0, limit = 20 } = {}) {
  const config = getNWConfig();
  if (!config || !config.clientId) {
    throw new Error('Nationwide API not configured. Please enter your API credentials in Settings.');
  }

  const baseUrl = buildBaseUrl(config);
  const queryParams = new URLSearchParams();
  if (offset > 0) queryParams.set('offset', offset);
  if (limit !== 20) queryParams.set('limit', Math.min(limit, 100));

  const url = `${baseUrl}/contracts${queryParams.toString() ? '?' + queryParams.toString() : ''}`;

  const headers = buildHeaders(config);
  if (lastName) headers['lastName'] = lastName;
  if (firstName) headers['firstName'] = firstName;

  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const msg = errorBody?.developerMessage || errorBody?.userMessage || response.statusText;
    throw new NationwideApiError(response.status, msg, errorBody);
  }

  const contracts = await response.json();
  const totalCount = parseInt(response.headers.get('x-total-count') || '0', 10);

  return {
    contracts: Array.isArray(contracts) ? contracts : [],
    totalCount: totalCount || (Array.isArray(contracts) ? contracts.length : 0),
  };
}

/**
 * Get contract summary by following the contractSummaryHref
 *
 * @param {string} href - The contractSummaryHref URL from a contract result
 * @returns {Promise<Object>}
 */
export async function getContractSummary(href) {
  const config = getNWConfig();
  if (!config || !config.clientId) {
    throw new Error('Nationwide API not configured.');
  }

  const headers = buildHeaders(config);

  const response = await fetch(href, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const msg = errorBody?.developerMessage || errorBody?.userMessage || response.statusText;
    throw new NationwideApiError(response.status, msg, errorBody);
  }

  return response.json();
}

// =============================================================================
// Error class
// =============================================================================

export class NationwideApiError extends Error {
  constructor(status, message, body) {
    super(message);
    this.name = 'NationwideApiError';
    this.status = status;
    this.body = body;
  }
}

// =============================================================================
// Connection test
// =============================================================================

/**
 * Test the API connection with current config
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function testConnection() {
  try {
    const config = getNWConfig();
    if (!config || !config.clientId) {
      return { success: false, message: 'No API credentials configured' };
    }

    // Try a minimal request
    await searchContracts({ limit: 1 });
    return { success: true, message: 'Connected to Nationwide API' };
  } catch (err) {
    if (err instanceof NationwideApiError) {
      if (err.status === 401) return { success: false, message: 'Authentication failed — check your credentials' };
      if (err.status === 403) return { success: false, message: 'Access denied — check your permissions' };
      if (err.status === 429) return { success: false, message: 'Rate limited — too many requests' };
      return { success: false, message: `API error (${err.status}): ${err.message}` };
    }
    return { success: false, message: `Connection failed: ${err.message}` };
  }
}
