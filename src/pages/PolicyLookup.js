// =============================================================================
// Policy Lookup — Search carrier APIs for live contract data
// =============================================================================

import {
  searchContracts,
  getNWConfig,
  saveNWConfig,
  clearNWConfig,
  testConnection,
  NationwideApiError
} from '../lib/nationwide-api.js';

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let searchResults = [];
let totalResults = 0;
let currentPage = 0;
let pageSize = 20;
let isLoading = false;
let errorMessage = '';
let showSettings = false;

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

export function renderPolicyLookup() {
  const app = document.getElementById('app');
  const config = getNWConfig();
  const isConfigured = !!(config && config.clientId);

  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Policy Lookup</h1>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Search carrier APIs for live contract data</p>
        </div>
        <button id="settings-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors
          ${isConfigured
            ? 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40'
            : 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/40'
          }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${isConfigured ? 'API Connected' : 'Configure API'}
        </button>
      </div>

      <!-- Settings Panel (collapsible) -->
      <div id="settings-panel" class="${showSettings ? '' : 'hidden'} mb-8">
        ${renderSettingsPanel(config)}
      </div>

      <!-- Carrier Tabs -->
      <div class="mb-6">
        <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
          <button class="px-4 py-2.5 text-sm font-medium border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              Nationwide
            </span>
          </button>
          <span class="px-4 py-2.5 text-sm text-slate-400 dark:text-slate-500 cursor-default">More carriers coming soon...</span>
        </div>
      </div>

      ${!isConfigured ? renderSetupPrompt() : renderSearchForm()}

      <!-- Results -->
      <div id="results-container">
        ${renderResults()}
      </div>
    </div>
  `;

  attachEventListeners();
}

// ---------------------------------------------------------------------------
// Sub-renderers
// ---------------------------------------------------------------------------

function renderSetupPrompt() {
  return `
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8 text-center">
      <svg class="w-16 h-16 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
      </svg>
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">Connect Your Nationwide API</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
        Enter your Nationwide Developer Portal credentials to search live contract data directly from the Nationwide API.
      </p>
      <button id="setup-btn" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Configure API Credentials
      </button>
    </div>
  `;
}

function renderSettingsPanel(config) {
  const c = config || { clientId: '', environment: 'api', authToken: '', authType: 'apikey', isInternal: false };

  return `
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Nationwide API Configuration</h3>
        <button id="close-settings" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Client ID (API Key)</label>
          <input id="nw-client-id" type="text" value="${c.clientId}" placeholder="Your Nationwide client_id"
            class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Environment</label>
          <select id="nw-environment" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500">
            <option value="api" ${c.environment === 'api' ? 'selected' : ''}>Production (api.nationwide.com)</option>
            <option value="api-stage" ${c.environment === 'api-stage' ? 'selected' : ''}>Staging (api-stage.nationwide.com)</option>
            <option value="api-int" ${c.environment === 'api-int' ? 'selected' : ''}>Internal (api-int.nwie.net)</option>
            <option value="api-int-stage" ${c.environment === 'api-int-stage' ? 'selected' : ''}>Internal Staging (api-int-stage.nwie.net)</option>
            <option value="api-int-test" ${c.environment === 'api-int-test' ? 'selected' : ''}>Internal Test (api-int-test.nwie.net)</option>
            <option value="api-int-dev" ${c.environment === 'api-int-dev' ? 'selected' : ''}>Internal Dev (api-int-dev.nwie.net)</option>
            <option value="api-dev" ${c.environment === 'api-dev' ? 'selected' : ''}>Dev (api-dev.nwie.net)</option>
            <option value="api-test" ${c.environment === 'api-test' ? 'selected' : ''}>Test (api-test.nwie.net)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Auth Type</label>
          <select id="nw-auth-type" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500">
            <option value="apikey" ${c.authType === 'apikey' ? 'selected' : ''}>API Key Only</option>
            <option value="oauth" ${c.authType === 'oauth' ? 'selected' : ''}>OAuth 2.0 Bearer Token</option>
            <option value="saml" ${c.authType === 'saml' ? 'selected' : ''}>SAML Bearer (JWT)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bearer Token <span class="text-slate-400 text-xs">(if OAuth/SAML)</span></label>
          <input id="nw-auth-token" type="password" value="${c.authToken}" placeholder="Bearer token (optional)"
            class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div class="flex items-center gap-3 mt-4">
        <label class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
          <input id="nw-is-internal" type="checkbox" ${c.isInternal ? 'checked' : ''} class="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500" />
          Use internal network (nwie.net)
        </label>
      </div>

      <div class="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <button id="save-config-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Save & Connect
        </button>
        <button id="test-config-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Test Connection
        </button>
        <button id="clear-config-btn" class="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          Clear Credentials
        </button>
      </div>

      <div id="config-status" class="mt-3 hidden"></div>
    </div>
  `;
}

function renderSearchForm() {
  return `
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name / Company</label>
          <input id="search-last-name" type="text" placeholder="Enter last name or company name"
            class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <p class="mt-1 text-xs text-slate-400">Fuzzy search supported</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
          <input id="search-first-name" type="text" placeholder="Enter first name (optional)"
            class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div class="flex items-end">
          <button id="search-btn" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            Search Contracts
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderResults() {
  if (isLoading) {
    return `
      <div class="flex items-center justify-center py-16">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-sm text-slate-500 dark:text-slate-400">Searching Nationwide contracts...</span>
      </div>
    `;
  }

  if (errorMessage) {
    return `
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
        <svg class="w-10 h-10 mx-auto text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="text-sm text-red-700 dark:text-red-300 font-medium">${errorMessage}</p>
      </div>
    `;
  }

  if (searchResults.length === 0) {
    return ''; // Empty state handled by search form
  }

  const statusColors = {
    ACTIVE: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    ACTNOBAL: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    PAYING: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  };

  return `
    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
          ${totalResults} Contract${totalResults !== 1 ? 's' : ''} Found
        </h3>
        <span class="text-xs text-slate-500 dark:text-slate-400">
          Showing ${currentPage * pageSize + 1}–${Math.min((currentPage + 1) * pageSize, totalResults)} of ${totalResults}
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-700/50">
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">Contract #</th>
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">Owner</th>
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">Product</th>
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">Status</th>
              <th class="px-4 py-3 text-right font-medium text-slate-600 dark:text-slate-300">Contract Value</th>
              <th class="px-4 py-3 text-right font-medium text-slate-600 dark:text-slate-300">Daily Tracking</th>
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">Issue Date</th>
              <th class="px-4 py-3 text-left font-medium text-slate-600 dark:text-slate-300">State</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-700">
            ${searchResults.map(c => `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors${c.contractSummaryHref ? ' cursor-pointer contract-row' : ''}" data-href="${c.contractSummaryHref || ''}">
                <td class="px-4 py-3 font-mono text-xs text-blue-600 dark:text-blue-400 font-medium">${c.contractNumber || '—'}</td>
                <td class="px-4 py-3">
                  <div class="text-slate-900 dark:text-white">${formatName(c.owner)}</div>
                  ${c.annuitant ? `<div class="text-xs text-slate-500 dark:text-slate-400">Annuitant: ${formatName(c.annuitant)}</div>` : ''}
                </td>
                <td class="px-4 py-3">
                  <div class="text-slate-900 dark:text-white">${c.productName || '—'}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">${c.productType || ''} ${c.taxQualification ? `· ${c.taxQualification}` : ''}</div>
                </td>
                <td class="px-4 py-3">
                  <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[c.contractStatus] || 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}">
                    ${c.contractStatus || '—'}
                  </span>
                </td>
                <td class="px-4 py-3 text-right font-medium text-slate-900 dark:text-white">${formatCurrency(c.totalContractValue)}</td>
                <td class="px-4 py-3 text-right text-slate-600 dark:text-slate-400">${formatCurrency(c.dailyTrackingValue)}</td>
                <td class="px-4 py-3 text-slate-600 dark:text-slate-400">${c.issueDate || '—'}</td>
                <td class="px-4 py-3 text-slate-600 dark:text-slate-400">${c.issueState || '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${totalResults > pageSize ? `
        <div class="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <button id="prev-page" class="px-3 py-1.5 rounded-lg border text-sm ${currentPage === 0 ? 'border-slate-200 text-slate-400 cursor-not-allowed' : 'border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'}" ${currentPage === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <span class="text-sm text-slate-500 dark:text-slate-400">Page ${currentPage + 1} of ${Math.ceil(totalResults / pageSize)}</span>
          <button id="next-page" class="px-3 py-1.5 rounded-lg border text-sm ${(currentPage + 1) * pageSize >= totalResults ? 'border-slate-200 text-slate-400 cursor-not-allowed' : 'border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'}" ${(currentPage + 1) * pageSize >= totalResults ? 'disabled' : ''}>
            Next →
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatName(nameObj) {
  if (!nameObj) return '—';
  const { firstName, lastName } = nameObj;
  if (firstName && lastName) return `${firstName} ${lastName}`;
  return lastName || firstName || '—';
}

function formatCurrency(val) {
  if (!val && val !== 0) return '—';
  const num = parseFloat(val);
  if (isNaN(num)) return val;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(num);
}

// ---------------------------------------------------------------------------
// Event Listeners
// ---------------------------------------------------------------------------

function attachEventListeners() {
  // Settings toggle
  document.getElementById('settings-btn')?.addEventListener('click', () => {
    showSettings = !showSettings;
    const panel = document.getElementById('settings-panel');
    if (panel) panel.classList.toggle('hidden');
  });

  document.getElementById('setup-btn')?.addEventListener('click', () => {
    showSettings = true;
    const panel = document.getElementById('settings-panel');
    if (panel) panel.classList.remove('hidden');
  });

  document.getElementById('close-settings')?.addEventListener('click', () => {
    showSettings = false;
    const panel = document.getElementById('settings-panel');
    if (panel) panel.classList.add('hidden');
  });

  // Save config
  document.getElementById('save-config-btn')?.addEventListener('click', () => {
    const config = readConfigFromForm();
    saveNWConfig(config);
    showConfigStatus('Credentials saved!', 'success');
    // Re-render to show search form
    setTimeout(() => renderPolicyLookup(), 800);
  });

  // Test connection
  document.getElementById('test-config-btn')?.addEventListener('click', async () => {
    const config = readConfigFromForm();
    saveNWConfig(config);
    showConfigStatus('Testing connection...', 'info');
    const result = await testConnection();
    showConfigStatus(result.message, result.success ? 'success' : 'error');
  });

  // Clear config
  document.getElementById('clear-config-btn')?.addEventListener('click', () => {
    clearNWConfig();
    showConfigStatus('Credentials cleared', 'info');
    setTimeout(() => renderPolicyLookup(), 800);
  });

  // Search
  document.getElementById('search-btn')?.addEventListener('click', doSearch);

  // Enter key on search fields
  document.getElementById('search-last-name')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
  document.getElementById('search-first-name')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });

  // Pagination
  document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      doSearch(true);
    }
  });
  document.getElementById('next-page')?.addEventListener('click', () => {
    if ((currentPage + 1) * pageSize < totalResults) {
      currentPage++;
      doSearch(true);
    }
  });
}

function readConfigFromForm() {
  const env = document.getElementById('nw-environment')?.value || 'api';
  return {
    clientId: document.getElementById('nw-client-id')?.value?.trim() || '',
    environment: env,
    authToken: document.getElementById('nw-auth-token')?.value?.trim() || '',
    authType: document.getElementById('nw-auth-type')?.value || 'apikey',
    isInternal: env.includes('int') || document.getElementById('nw-is-internal')?.checked || false,
  };
}

function showConfigStatus(message, type) {
  const el = document.getElementById('config-status');
  if (!el) return;
  const colors = {
    success: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    error: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    info: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  };
  el.className = `mt-3 px-4 py-2 rounded-lg border text-sm ${colors[type] || colors.info}`;
  el.textContent = message;
  el.classList.remove('hidden');
}

async function doSearch(isPagination = false) {
  const lastName = document.getElementById('search-last-name')?.value?.trim();
  const firstName = document.getElementById('search-first-name')?.value?.trim();

  if (!isPagination) {
    currentPage = 0;
  }

  isLoading = true;
  errorMessage = '';
  updateResults();

  try {
    const result = await searchContracts({
      lastName,
      firstName,
      offset: currentPage * pageSize,
      limit: pageSize,
    });
    searchResults = result.contracts;
    totalResults = result.totalCount;
  } catch (err) {
    searchResults = [];
    totalResults = 0;
    if (err instanceof NationwideApiError) {
      errorMessage = `Nationwide API Error (${err.status}): ${err.message}`;
    } else {
      errorMessage = err.message;
    }
  } finally {
    isLoading = false;
    updateResults();
  }
}

function updateResults() {
  const container = document.getElementById('results-container');
  if (container) {
    container.innerHTML = renderResults();
    // Re-attach pagination listeners
    document.getElementById('prev-page')?.addEventListener('click', () => {
      if (currentPage > 0) { currentPage--; doSearch(true); }
    });
    document.getElementById('next-page')?.addEventListener('click', () => {
      if ((currentPage + 1) * pageSize < totalResults) { currentPage++; doSearch(true); }
    });
  }
}
