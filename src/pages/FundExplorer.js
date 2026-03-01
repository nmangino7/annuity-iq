// =============================================================================
// FundExplorer.js - Subaccount / Fund Research Tool with Live Market Data
// =============================================================================

import { getSubaccounts, getVAProducts, getVULProducts } from '../data/index.js';
import { pct, currency } from '../utils/formatters.js';
import { marketData, formatDailyChange, liveBadge } from '../services/marketData.js';

let sortKey = 'morningstarRating';
let sortDir = 'desc';
let filters = { assetClass: 'all', style: 'all', minRating: 0, maxExpense: 5, search: '' };
let pageSize = 50;
let currentPage = 1;
let enrichedFunds = null; // Cache for live-enriched fund data

function getFilteredFunds() {
  let funds = enrichedFunds || getSubaccounts();

  if (filters.assetClass !== 'all') funds = funds.filter(f => f.assetClass === filters.assetClass);
  if (filters.style !== 'all') funds = funds.filter(f => f.style === filters.style);
  if (filters.minRating > 0) funds = funds.filter(f => (f.morningstarRating || 0) >= filters.minRating);
  if (filters.maxExpense < 5) funds = funds.filter(f => f.expenseRatio <= filters.maxExpense);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    funds = funds.filter(f =>
      f.name.toLowerCase().includes(q) ||
      (f.manager || '').toLowerCase().includes(q) ||
      (f.category || '').toLowerCase().includes(q) ||
      (f.ticker || '').toLowerCase().includes(q)
    );
  }

  // Support sorting by daily change
  funds.sort((a, b) => {
    let va, vb;
    if (sortKey === '_dailyChange') {
      va = a._live?.dailyChange ?? null;
      vb = b._live?.dailyChange ?? null;
      if (va == null) va = sortDir === 'asc' ? Infinity : -Infinity;
      if (vb == null) vb = sortDir === 'asc' ? Infinity : -Infinity;
    } else {
      va = a[sortKey] ?? '';
      vb = b[sortKey] ?? '';
    }
    if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb + '').toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return funds;
}

export function renderFundExplorer() {
  const allFunds = getSubaccounts();
  const assetClasses = [...new Set(allFunds.map(f => f.assetClass).filter(Boolean))].sort();
  const styles = [...new Set(allFunds.map(f => f.style).filter(Boolean))].sort();
  const stats = marketData.getStats();
  const ms = marketData.getMarketStatus();

  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Fund Research <span class="text-base font-normal text-slate-500 dark:text-slate-400">(Subaccounts)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Research subaccount performance, expenses, and availability across VA and VUL products</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="#/va" class="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-lg text-sm hover:bg-violet-200 transition-colors">VAs</a>
          <a href="#/vul" class="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-sm hover:bg-teal-200 transition-colors">VULs</a>
          <button onclick="document.getElementById('fund-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filters
          </button>
        </div>
      </div>

      <!-- Market Status Banner -->
      <div id="market-status-banner" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1.5">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full ${ms.status === 'open' ? 'bg-emerald-400' : 'bg-slate-400'} opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 ${ms.status === 'open' ? 'bg-emerald-500' : ms.status === 'pre' || ms.status === 'after' ? 'bg-amber-500' : 'bg-slate-400'}"></span>
              </span>
              <span class="text-sm font-medium ${ms.color}">${ms.label}</span>
            </div>
            <span class="text-xs text-slate-400" id="market-last-updated">
              ${stats.lastUpdated ? `Updated ${marketData.formatTimestamp()}` : 'No live data loaded'}
            </span>
            ${stats.cachedQuotes > 0 ? `<span class="text-xs text-slate-400">· ${stats.cachedQuotes} quotes cached</span>` : ''}
          </div>
          <div class="flex items-center gap-2">
            ${!stats.hasApiKey ? `
              <button onclick="window._showApiKeyModal()" class="px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-lg text-xs font-medium hover:bg-amber-200 transition-colors flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
                Setup API Key
              </button>
            ` : `
              <button onclick="window._refreshMarketData()" id="refresh-btn" class="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors flex items-center gap-1">
                <svg class="w-3.5 h-3.5" id="refresh-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                Refresh
              </button>
            `}
          </div>
        </div>
      </div>

      <!-- API Key Modal (hidden) -->
      <div id="api-key-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 max-w-md w-full shadow-2xl">
          <h3 class="text-lg font-bold mb-2">Connect Live Market Data</h3>
          <p class="text-sm text-slate-500 mb-4">Enter your <a href="https://site.financialmodelingprep.com/register" target="_blank" class="text-purple-500 hover:underline">Financial Modeling Prep</a> API key to enable live daily returns. The free tier provides 250 API calls/day.</p>
          <input id="fmp-key-input" type="text" placeholder="Your FMP API key..." class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm mb-3 font-mono">
          <div class="flex gap-2 justify-end">
            <button onclick="window._closeApiKeyModal()" class="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">Cancel</button>
            <button onclick="window._saveApiKey()" class="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors font-medium">Save & Refresh</button>
          </div>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3" id="fund-summary-cards"></div>

      <!-- Filters -->
      <div id="fund-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Search Funds</label>
            <input id="ff-search" type="text" placeholder="Name, ticker, manager..." class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Asset Class</label>
            <select id="ff-asset" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Classes</option>
              ${assetClasses.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Style</label>
            <select id="ff-style" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All Styles</option>
              ${styles.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Rating</label>
            <select id="ff-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="3">3+ Stars</option><option value="4">4+ Stars</option><option value="5">5 Stars</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Expense</label>
            <select id="ff-expense" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="5">Any</option>
              <option value="0.25">Under 0.25%</option><option value="0.50">Under 0.50%</option><option value="0.75">Under 0.75%</option><option value="1.00">Under 1.00%</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyFundFilters()" class="mt-3 px-4 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('name')">Fund Name</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('category')">Category</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('expenseRatio')">Expense</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('morningstarRating')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('_dailyChange')">
                  <span class="flex items-center justify-end gap-1">Day
                    <span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span></span>
                  </span>
                </th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('ytdReturn')">YTD</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('oneYearReturn')">1Y</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('threeYearReturn')">3Y</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFunds('fiveYearReturn')">5Y</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Avail.</th>
              </tr>
            </thead>
            <tbody id="fund-table-body">
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="fund-count"></div>
      </div>
    </div>
  `;

  window._sortFunds = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'category' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderFundTable();
  };

  window._applyFundFilters = () => {
    filters.search = document.getElementById('ff-search')?.value?.trim() || '';
    filters.assetClass = document.getElementById('ff-asset').value;
    filters.style = document.getElementById('ff-style').value;
    filters.minRating = parseInt(document.getElementById('ff-rating').value);
    filters.maxExpense = parseFloat(document.getElementById('ff-expense').value);
    currentPage = 1;
    renderFundTable();
  };

  window._loadMoreFunds = () => { currentPage++; renderFundTable(); };

  window._refreshMarketData = async () => {
    const btn = document.getElementById('refresh-btn');
    const icon = document.getElementById('refresh-icon');
    if (btn) btn.disabled = true;
    if (icon) icon.classList.add('animate-spin');
    const statusEl = document.getElementById('market-last-updated');
    if (statusEl) statusEl.textContent = 'Refreshing...';

    try {
      await marketData.refresh();
      enrichedFunds = marketData.enrichSubaccounts(getSubaccounts());
      renderFundTable();
      if (statusEl) statusEl.textContent = `Updated ${marketData.formatTimestamp()}`;
    } catch (e) {
      if (statusEl) statusEl.textContent = 'Refresh failed — check API key';
    } finally {
      if (btn) btn.disabled = false;
      if (icon) icon.classList.remove('animate-spin');
    }
  };

  window._showApiKeyModal = () => {
    document.getElementById('api-key-modal')?.classList.remove('hidden');
  };
  window._closeApiKeyModal = () => {
    document.getElementById('api-key-modal')?.classList.add('hidden');
  };
  window._saveApiKey = async () => {
    const key = document.getElementById('fmp-key-input')?.value?.trim();
    if (!key) return;
    marketData.setApiKey(key);
    window._closeApiKeyModal();
    // Re-render banner to show refresh button instead of setup button
    const banner = document.getElementById('market-status-banner');
    if (banner) {
      banner.querySelector('.flex.items-center.gap-2:last-child').innerHTML = `
        <button onclick="window._refreshMarketData()" id="refresh-btn" class="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors flex items-center gap-1">
          <svg class="w-3.5 h-3.5" id="refresh-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          Refresh
        </button>
      `;
    }
    await window._refreshMarketData();
  };

  window._pageInit = () => {
    // Enrich with cached data if available
    if (marketData.hasApiKey() && marketData.cache) {
      enrichedFunds = marketData.enrichSubaccounts(getSubaccounts());
    } else {
      enrichedFunds = getSubaccounts();
    }
    renderFundTable();

    // Auto-refresh if API key exists and cache is stale
    if (marketData.hasApiKey() && !marketData.cache) {
      window._refreshMarketData();
    }
  };

  return html;
}

export function renderFundDetail(id) {
  const allFunds = getSubaccounts();
  const fund = allFunds.find(f => f.id === id);
  if (!fund) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Fund not found</h2><a href="#/funds" class="text-purple-500 hover:underline mt-2 inline-block">&larr; Back to Fund Research</a></div>`;

  // Get live data for this fund
  const liveChange = marketData.getDailyChange(fund.id, fund.assetClass, fund.style);

  // Find which VA and VUL products include this fund
  const vaProducts = getVAProducts().filter(p => (p.subaccountIds || []).includes(id));
  const vulProducts = getVULProducts().filter(p => (p.subaccountIds || []).includes(id));

  const classColors = {
    'Equity': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Fixed Income': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'Balanced': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    'Money Market': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300',
    'Alternative': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Target Date': 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300'
  };

  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/funds" class="text-sm text-slate-500 hover:text-purple-500 transition-colors">&larr; All Funds</a>
          <h1 class="text-2xl font-bold mt-1">${fund.name}</h1>
          <p class="text-slate-500 dark:text-slate-400">
            ${fund.manager || ''} ${fund.ticker ? `&middot; <span class="font-mono text-xs">${fund.ticker}</span>` : ''}
            &middot; <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${classColors[fund.assetClass] || 'bg-slate-100 text-slate-700'}">${fund.assetClass}</span>
            &middot; <span class="text-xs">${fund.category || ''}</span>
          </p>
        </div>
        ${liveChange ? `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center min-w-[120px]">
          <div class="text-xl font-bold font-mono ${liveChange.dailyChange >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${liveChange.dailyChange >= 0 ? '+' : ''}${liveChange.dailyChange.toFixed(2)}%</div>
          <div class="text-[10px] text-slate-400 mt-0.5">
            Today ${liveChange.proxyType === 'direct' ? `via ${liveChange.source}` : `est. via ${liveChange.indexName || liveChange.source}`}
          </div>
        </div>
        ` : ''}
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-${liveChange ? '7' : '6'} gap-3">
        ${liveChange ? `
        <div class="bg-white dark:bg-slate-800 rounded-xl border ${liveChange.dailyChange >= 0 ? 'border-emerald-200 dark:border-emerald-800' : 'border-red-200 dark:border-red-800'} p-4 text-center">
          <div class="text-2xl font-bold font-mono ${liveChange.dailyChange >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${liveChange.dailyChange >= 0 ? '+' : ''}${liveChange.dailyChange.toFixed(2)}%</div>
          <div class="text-xs text-slate-500 mt-1">Daily Change <span class="inline-flex ml-0.5 w-1.5 h-1.5 rounded-full ${liveChange.proxyType === 'direct' ? 'bg-emerald-500' : 'bg-sky-500'}"></span></div>
        </div>
        ` : ''}
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold"><span class="text-amber-500">${'★'.repeat(fund.morningstarRating || 0)}</span></div>
          <div class="text-xs text-slate-500 mt-1">Morningstar Rating</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">${pct(fund.expenseRatio)}</div>
          <div class="text-xs text-slate-500 mt-1">Expense Ratio</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold ${(fund.oneYearReturn || 0) > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${fund.oneYearReturn != null ? pct(fund.oneYearReturn) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">1-Year Return</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${fund.fiveYearReturn != null ? pct(fund.fiveYearReturn) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">5-Year Return</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${fund.sharpeRatio != null ? fund.sharpeRatio.toFixed(2) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Sharpe Ratio</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${(vaProducts.length + vulProducts.length)}</div>
          <div class="text-xs text-slate-500 mt-1">Products Available</div>
        </div>
      </div>

      <!-- Performance & Details Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Performance Table -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Performance</h3>
          <dl class="space-y-2 text-sm">
            ${liveChange ? `
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500 flex items-center gap-1">Daily Change <span class="inline-flex w-1.5 h-1.5 rounded-full ${liveChange.proxyType === 'direct' ? 'bg-emerald-500' : 'bg-sky-500'}"></span></dt>
              <dd class="font-medium font-mono ${liveChange.dailyChange >= 0 ? 'text-emerald-600' : 'text-red-600'}">${liveChange.dailyChange >= 0 ? '+' : ''}${liveChange.dailyChange.toFixed(2)}%</dd>
            </div>
            ` : ''}
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">YTD Return</dt>
              <dd class="font-medium font-mono ${(fund.ytdReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${fund.ytdReturn != null ? pct(fund.ytdReturn) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">1-Year Return</dt>
              <dd class="font-medium font-mono ${(fund.oneYearReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${fund.oneYearReturn != null ? pct(fund.oneYearReturn) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">3-Year Return (Ann.)</dt>
              <dd class="font-medium font-mono">${fund.threeYearReturn != null ? pct(fund.threeYearReturn) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">5-Year Return (Ann.)</dt>
              <dd class="font-medium font-mono">${fund.fiveYearReturn != null ? pct(fund.fiveYearReturn) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">10-Year Return (Ann.)</dt>
              <dd class="font-medium font-mono">${fund.tenYearReturn != null ? pct(fund.tenYearReturn) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Standard Deviation</dt>
              <dd class="font-medium font-mono">${fund.standardDeviation != null ? fund.standardDeviation.toFixed(1) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">Sharpe Ratio</dt>
              <dd class="font-medium font-mono">${fund.sharpeRatio != null ? fund.sharpeRatio.toFixed(2) : 'N/A'}</dd>
            </div>
          </dl>
        </div>

        <!-- Fund Details -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Fund Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Manager</dt>
              <dd class="font-medium">${fund.manager || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Category</dt>
              <dd class="font-medium">${fund.category || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Asset Class</dt>
              <dd class="font-medium"><span class="px-2 py-0.5 rounded text-xs font-medium ${classColors[fund.assetClass] || ''}">${fund.assetClass}</span></dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Style</dt>
              <dd class="font-medium">${fund.style || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Expense Ratio</dt>
              <dd class="font-medium">${pct(fund.expenseRatio)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Total Assets</dt>
              <dd class="font-medium">${fund.totalAssets || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Inception</dt>
              <dd class="font-medium">${fund.inceptionDate || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1${liveChange ? ' border-b border-slate-100 dark:border-slate-700' : ''}">
              <dt class="text-slate-500">Turnover Rate</dt>
              <dd class="font-medium">${fund.turnoverRate != null ? fund.turnoverRate + '%' : 'N/A'}</dd>
            </div>
            ${liveChange ? `
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">Data Source</dt>
              <dd class="font-medium text-xs">
                ${liveChange.proxyType === 'direct'
                  ? `<span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Direct: ${liveChange.source}</span>`
                  : `<span class="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400">Index proxy: ${liveChange.source}</span>`
                }
              </dd>
            </div>
            ` : ''}
          </dl>
        </div>
      </div>

      <!-- Top Holdings -->
      ${fund.topHoldings?.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Top Holdings</h3>
        <div class="flex flex-wrap gap-2">
          ${fund.topHoldings.map(h => `<span class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm">${h}</span>`).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Available In Products -->
      ${(vaProducts.length + vulProducts.length) > 0 ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-lg">Available In These Products</h3>
          <p class="text-xs text-slate-500">${vaProducts.length} VA products &middot; ${vulProducts.length} VUL products</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Product</th>
                <th class="text-left px-4 py-2 font-medium text-slate-500">Carrier</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Type</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">M&E + Admin</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Total Funds</th>
              </tr>
            </thead>
            <tbody>
              ${vaProducts.map(p => `
                <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/va/${p.id}'">
                  <td class="px-4 py-2 font-medium text-violet-600 dark:text-violet-400">${p.name}</td>
                  <td class="px-4 py-2 text-slate-600 dark:text-slate-300">${p.carrier?.shortName || ''}</td>
                  <td class="px-4 py-2 text-center"><span class="px-2 py-0.5 rounded text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">VA</span></td>
                  <td class="px-4 py-2 text-right font-mono">${pct(p.totalAnnualCharge)}</td>
                  <td class="px-4 py-2 text-right font-mono">${p.subaccountCount}</td>
                </tr>
              `).join('')}
              ${vulProducts.map(p => `
                <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/vul/${p.id}'">
                  <td class="px-4 py-2 font-medium text-teal-600 dark:text-teal-400">${p.name}</td>
                  <td class="px-4 py-2 text-slate-600 dark:text-slate-300">${p.carrier?.shortName || ''}</td>
                  <td class="px-4 py-2 text-center"><span class="px-2 py-0.5 rounded text-xs font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">VUL</span></td>
                  <td class="px-4 py-2 text-right font-mono">${pct(p.meCharge)}</td>
                  <td class="px-4 py-2 text-right font-mono">${p.subaccountCount}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

function renderFundTable() {
  const allFunds = enrichedFunds || getSubaccounts();
  const funds = getFilteredFunds();
  const displayed = funds.slice(0, currentPage * pageSize);
  const hasMore = displayed.length < funds.length;
  const tbody = document.getElementById('fund-table-body');
  const countEl = document.getElementById('fund-count');
  const summaryEl = document.getElementById('fund-summary-cards');
  if (!tbody) return;

  // Summary
  if (summaryEl) {
    const avgExpense = allFunds.length ? (allFunds.reduce((s, f) => s + (f.expenseRatio || 0), 0) / allFunds.length) : 0;
    const equityCount = allFunds.filter(f => f.assetClass === 'Equity').length;
    const bondCount = allFunds.filter(f => f.assetClass === 'Fixed Income').length;
    const avg1yr = allFunds.filter(f => f.oneYearReturn != null).length ? (allFunds.filter(f => f.oneYearReturn != null).reduce((s, f) => s + f.oneYearReturn, 0) / allFunds.filter(f => f.oneYearReturn != null).length) : 0;
    const liveCount = allFunds.filter(f => f._live).length;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">${allFunds.length}</div>
        <div class="text-xs text-slate-500 mt-1">Total Funds</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${equityCount}</div>
        <div class="text-xs text-slate-500 mt-1">Equity Funds</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${bondCount}</div>
        <div class="text-xs text-slate-500 mt-1">Bond Funds</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">${pct(avgExpense)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Expense Ratio</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold ${avg1yr > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600'}">${pct(avg1yr)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg 1Y Return</div>
      </div>
    `;
  }

  tbody.innerHTML = displayed.map(f => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/funds/${f.id}'">
      <td class="px-3 py-2.5">
        <div class="font-medium text-purple-600 dark:text-purple-400 hover:underline">${f.name}${liveBadge(f)}</div>
        <div class="text-xs text-slate-400">${f.manager || ''} ${f.ticker ? '&middot; ' + f.ticker : ''}${f._live?.source ? ' &middot; <span class="font-mono text-[10px] text-slate-300">' + f._live.source + '</span>' : ''}</div>
      </td>
      <td class="px-3 py-2.5 text-xs">${f.category || ''}</td>
      <td class="px-3 py-2.5 text-right font-mono ${f.expenseRatio <= 0.25 ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}">${pct(f.expenseRatio)}</td>
      <td class="px-3 py-2.5 text-center"><span class="text-amber-500 text-xs">${'★'.repeat(f.morningstarRating || 0)}</span><span class="text-slate-300 text-xs">${'★'.repeat(5 - (f.morningstarRating || 0))}</span></td>
      <td class="px-3 py-2.5 text-right">${f._live ? formatDailyChange(f._live.dailyChange) : '<span class="text-slate-300 text-xs">—</span>'}</td>
      <td class="px-3 py-2.5 text-right font-mono ${(f.ytdReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${f.ytdReturn != null ? pct(f.ytdReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono ${(f.oneYearReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${f.oneYearReturn != null ? pct(f.oneYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${f.threeYearReturn != null ? pct(f.threeYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${f.fiveYearReturn != null ? pct(f.fiveYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-center"><span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">${(f.availableIn || []).length}</span></td>
    </tr>
  `).join('');

  if (countEl) {
    const liveCount = displayed.filter(f => f._live).length;
    const liveLabel = liveCount > 0 ? ` · <span class="text-emerald-500">${liveCount} with live data</span>` : '';
    countEl.innerHTML = `Showing ${displayed.length} of ${funds.length} funds${liveLabel}` +
      (hasMore ? ` <button onclick="window._loadMoreFunds()" class="ml-2 text-purple-600 dark:text-purple-400 hover:underline font-medium">Show More</button>` : '');
  }
}
