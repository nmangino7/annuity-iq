// =============================================================================
// FundExplorer.js - Subaccount / Fund Research Tool with Live Market Data
// =============================================================================

import { getSubaccounts, getVAProducts, getVULProducts } from '../data/index.js';
import { pct, currency } from '../utils/formatters.js';
import { marketData, formatDailyChange, liveBadge, getRetailEquivalent } from '../services/marketData.js';
import { enrichFund } from '../utils/fundEnrichment.js';

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
  const rawFund = allFunds.find(f => f.id === id);
  if (!rawFund) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Fund not found</h2><a href="#/funds" class="text-purple-500 hover:underline mt-2 inline-block">&larr; Back to Fund Research</a></div>`;

  // Enrich with auto-generated description, sector allocation, risk metrics
  const fund = enrichFund(rawFund);

  // Get live data and retail equivalent
  const liveChange = marketData.getDailyChange(fund.id, fund.assetClass, fund.style);
  const retail = getRetailEquivalent(fund);

  // Find which VA and VUL products include this fund
  const vaProducts = getVAProducts().filter(p => (p.subaccountIds || []).includes(id));
  const vulProducts = getVULProducts().filter(p => (p.subaccountIds || []).includes(id));

  const classColors = {
    'Equity': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Fixed Income': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'Balanced': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    'Money Market': 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300',
    'Alternative': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Target Date': 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
    'Real Assets': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    'International': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
    'Commodities': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  };

  // Style Box — Morningstar-style 3x3 grid
  const sizeMap = { 'Large Cap': 0, 'Mid Cap': 1, 'Small Cap': 2 };
  const styleMap = { 'Value': 0, 'Blend': 1, 'Core': 1, 'Growth': 2 };
  const sizeIdx = Object.keys(sizeMap).find(k => (fund.category || '').includes(k)) ? sizeMap[Object.keys(sizeMap).find(k => (fund.category || '').includes(k))] : null;
  const styleIdx = styleMap[fund.style] ?? null;
  const hasStyleBox = sizeIdx != null && styleIdx != null && fund.assetClass === 'Equity';

  // Risk metrics (from fund.riskMetrics or defaults)
  const rm = fund.riskMetrics || {};

  // Sector allocation
  const sectors = fund.sectorAllocation || {};
  const sectorEntries = Object.entries(sectors).sort((a, b) => b[1] - a[1]);
  const sectorColors = {
    // camelCase keys (legacy format from some funds)
    technology: '#8B5CF6', healthcare: '#10B981', financials: '#3B82F6', consumer: '#F59E0B',
    industrials: '#6366F1', energy: '#EF4444', materials: '#14B8A6', utilities: '#F97316',
    realEstate: '#EC4899', communication: '#06B6D4', consumerStaples: '#84CC16',
    consumerDiscretionary: '#F59E0B', informationTechnology: '#8B5CF6',
    // Proper case keys (enrichment format)
    'Technology': '#8B5CF6', 'Healthcare': '#10B981', 'Financials': '#3B82F6',
    'Consumer Discretionary': '#F59E0B', 'Consumer Staples': '#84CC16',
    'Communication Services': '#06B6D4', 'Industrials': '#6366F1', 'Energy': '#EF4444',
    'Materials': '#14B8A6', 'Utilities': '#F97316', 'Real Estate': '#EC4899',
    // Bond sectors
    'U.S. Treasury': '#3B82F6', 'Corporate Investment Grade': '#6366F1',
    'Mortgage-Backed': '#10B981', 'Government Agency': '#8B5CF6',
    'Asset-Backed': '#F59E0B', 'Municipal': '#14B8A6', 'International': '#EC4899',
    'Cash': '#94A3B8', 'BB-Rated': '#EF4444', 'B-Rated': '#F97316',
    'CCC & Below': '#DC2626', 'Not Rated': '#6B7280', 'Investment Grade': '#3B82F6',
    // Sector-specific (Technology sub)
    'Software': '#8B5CF6', 'Semiconductors': '#6366F1', 'IT Services': '#A78BFA',
    'Hardware': '#7C3AED', 'Internet': '#818CF8',
    // Healthcare sub
    'Pharmaceuticals': '#10B981', 'Biotechnology': '#34D399', 'Medical Devices': '#6EE7B7',
    'Healthcare Services': '#059669', 'Managed Care': '#047857', 'Life Sciences Tools': '#065F46',
    // Other
    'Other': '#94A3B8', 'GIC Contracts': '#3B82F6', 'Synthetic GICs': '#6366F1',
    'Government Bonds': '#8B5CF6', 'Corporate Bonds': '#6366F1',
    'Specialized REITs': '#EC4899', 'Residential': '#F472B6', 'Industrial': '#6366F1',
    'Retail': '#F59E0B', 'Office': '#14B8A6', 'Healthcare Facilities': '#10B981',
    'Data Centers': '#8B5CF6', 'Self-Storage': '#F97316',
  };

  // Relationship label
  const relLabel = { mirror: 'Mirrors', similar: 'Similar to', 'index-proxy': 'Tracks index of' };

  return `
    <div class="space-y-5">
      <!-- Header -->
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/funds" class="text-sm text-slate-500 hover:text-purple-500 transition-colors">&larr; All Funds</a>
          <h1 class="text-2xl font-bold mt-1">${fund.name}</h1>
          <p class="text-slate-500 dark:text-slate-400 flex items-center flex-wrap gap-x-2 gap-y-1 mt-1">
            <span>${fund.manager || ''}</span>
            ${fund.ticker ? `<span class="font-mono text-xs bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">${fund.ticker}</span>` : ''}
            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${classColors[fund.assetClass] || 'bg-slate-100 text-slate-700'}">${fund.assetClass}</span>
            <span class="text-xs">${fund.category || ''}</span>
            ${fund.style ? `<span class="text-xs text-slate-400">&middot; ${fund.style}</span>` : ''}
          </p>
          ${fund.description ? `<p class="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">${fund.description}</p>` : ''}
        </div>
        ${liveChange ? `
        <div class="bg-white dark:bg-slate-800 rounded-xl border ${liveChange.dailyChange >= 0 ? 'border-emerald-200 dark:border-emerald-800' : 'border-red-200 dark:border-red-800'} p-3 text-center min-w-[130px]">
          <div class="text-xl font-bold font-mono ${liveChange.dailyChange >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${liveChange.dailyChange >= 0 ? '+' : ''}${liveChange.dailyChange.toFixed(2)}%</div>
          <div class="text-[10px] text-slate-400 mt-0.5">Today's Change</div>
          <div class="text-[9px] text-slate-300 mt-0.5">${liveChange.proxyType === 'direct' ? `via ${liveChange.source}` : `est. via ${liveChange.indexName || liveChange.source}`}</div>
        </div>
        ` : ''}
      </div>

      <!-- Retail Equivalent Tracking -->
      ${retail ? `
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-200 dark:border-purple-800 p-4">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            <div>
              <div class="text-xs font-medium text-purple-600 dark:text-purple-400">Retail Equivalent</div>
              <div class="text-sm font-semibold text-slate-800 dark:text-slate-200">${relLabel[retail.relationship] || 'Tracks'} <span class="font-mono text-purple-700 dark:text-purple-300">${retail.ticker}</span></div>
            </div>
          </div>
          <div class="text-sm text-slate-600 dark:text-slate-300">${retail.name}</div>
          <div class="ml-auto flex items-center gap-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${retail.relationship === 'mirror' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : retail.relationship === 'similar' ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}">${retail.relationship === 'mirror' ? 'MIRROR FUND' : retail.relationship === 'similar' ? 'SIMILAR FUND' : 'INDEX PROXY'}</span>
          </div>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">This insurance subaccount ${retail.relationship === 'mirror' ? 'mirrors the strategy and holdings of' : retail.relationship === 'similar' ? 'follows a similar strategy to' : 'tracks the same index as'} the publicly-traded <span class="font-semibold">${retail.name}</span> (${retail.ticker}). Daily returns and market data are sourced from the retail equivalent.</p>
      </div>
      ` : ''}

      <!-- Key Metrics Row -->
      <div class="grid grid-cols-3 md:grid-cols-6 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold"><span class="text-amber-500">${'★'.repeat(fund.morningstarRating || 0)}<span class="text-slate-200 dark:text-slate-600">${'★'.repeat(5 - (fund.morningstarRating || 0))}</span></span></div>
          <div class="text-[10px] text-slate-500 mt-1">Morningstar</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold text-purple-600 dark:text-purple-400">${pct(fund.expenseRatio)}</div>
          <div class="text-[10px] text-slate-500 mt-1">Expense Ratio</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold ${(fund.ytdReturn || 0) > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${fund.ytdReturn != null ? pct(fund.ytdReturn) : 'N/A'}</div>
          <div class="text-[10px] text-slate-500 mt-1">YTD Return</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold ${(fund.oneYearReturn || 0) > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${fund.oneYearReturn != null ? pct(fund.oneYearReturn) : 'N/A'}</div>
          <div class="text-[10px] text-slate-500 mt-1">1-Year</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold">${fund.fiveYearReturn != null ? pct(fund.fiveYearReturn) : 'N/A'}</div>
          <div class="text-[10px] text-slate-500 mt-1">5-Year Ann.</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-center">
          <div class="text-xl font-bold text-blue-600 dark:text-blue-400">${(vaProducts.length + vulProducts.length)}</div>
          <div class="text-[10px] text-slate-500 mt-1">Products</div>
        </div>
      </div>

      <!-- Three Column: Performance | Risk & Style | Details -->
      <div class="grid md:grid-cols-3 gap-4">

        <!-- Col 1: Performance -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Performance</h3>
          <dl class="space-y-1.5 text-sm">
            ${liveChange ? `
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500 flex items-center gap-1">
                Daily
                <span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute h-full w-full rounded-full ${liveChange.proxyType === 'direct' ? 'bg-emerald-400' : 'bg-sky-400'} opacity-75"></span><span class="relative rounded-full h-1.5 w-1.5 ${liveChange.proxyType === 'direct' ? 'bg-emerald-500' : 'bg-sky-500'}"></span></span>
              </dt>
              <dd class="font-medium font-mono ${liveChange.dailyChange >= 0 ? 'text-emerald-600' : 'text-red-600'}">${liveChange.dailyChange >= 0 ? '+' : ''}${liveChange.dailyChange.toFixed(2)}%</dd>
            </div>
            ` : ''}
            ${[
              ['YTD', fund.ytdReturn],
              ['1-Year', fund.oneYearReturn],
              ['3-Year Ann.', fund.threeYearReturn],
              ['5-Year Ann.', fund.fiveYearReturn],
              ['10-Year Ann.', fund.tenYearReturn],
            ].map(([label, val], i, arr) => `
            <div class="flex justify-between py-1 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700' : ''}">
              <dt class="text-slate-500">${label}</dt>
              <dd class="font-medium font-mono ${val != null && val > 0 ? 'text-emerald-600' : val != null && val < 0 ? 'text-red-600' : ''}">${val != null ? pct(val) : 'N/A'}</dd>
            </div>
            `).join('')}
          </dl>
        </div>

        <!-- Col 2: Risk & Style -->
        <div class="space-y-4">
          <!-- Risk Metrics -->
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Risk Analysis</h3>
            <dl class="space-y-1.5 text-sm">
              ${[
                ['Std Deviation', fund.standardDeviation, v => v?.toFixed(1)],
                ['Sharpe Ratio', fund.sharpeRatio, v => v?.toFixed(2)],
                ['Sortino Ratio', rm.sortinoRatio, v => v?.toFixed(2)],
                ['Alpha', rm.alpha, v => (v >= 0 ? '+' : '') + v?.toFixed(2)],
                ['Beta', rm.beta, v => v?.toFixed(2)],
                ['R-Squared', rm.rSquared, v => v?.toFixed(0) + '%'],
                ['Max Drawdown', rm.maxDrawdown, v => v?.toFixed(1) + '%'],
              ].filter(([, val]) => val != null).map(([label, val, fmt], i, arr) => `
              <div class="flex justify-between py-1 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700' : ''}">
                <dt class="text-slate-500">${label}</dt>
                <dd class="font-medium font-mono">${fmt(val)}</dd>
              </div>
              `).join('')}
              ${!fund.standardDeviation && !rm.sortinoRatio ? '<div class="text-xs text-slate-400 italic">Risk metrics not available</div>' : ''}
            </dl>
          </div>

          <!-- Style Box (Morningstar 3x3) -->
          ${hasStyleBox ? `
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Style Box</h3>
            <div class="flex items-center gap-4">
              <div class="grid grid-cols-3 gap-0.5 w-20 h-20">
                ${[0,1,2].flatMap(row => [0,1,2].map(col => {
                  const active = row === sizeIdx && col === styleIdx;
                  return `<div class="w-full h-full ${active ? 'bg-purple-600 dark:bg-purple-500' : 'bg-slate-100 dark:bg-slate-700'} ${row === 0 && col === 0 ? 'rounded-tl' : ''} ${row === 0 && col === 2 ? 'rounded-tr' : ''} ${row === 2 && col === 0 ? 'rounded-bl' : ''} ${row === 2 && col === 2 ? 'rounded-br' : ''}"></div>`;
                })).join('')}
              </div>
              <div class="text-xs text-slate-500">
                <div class="flex gap-4 mb-1"><span class="w-12">Value</span><span class="w-12">Blend</span><span class="w-12">Growth</span></div>
                <div class="space-y-0.5">
                  <div class="text-[10px]">Large</div>
                  <div class="text-[10px]">Mid</div>
                  <div class="text-[10px]">Small</div>
                </div>
              </div>
            </div>
          </div>
          ` : ''}

          <!-- Capture Ratios -->
          ${rm.upCaptureRatio != null ? `
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Capture Ratios</h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="text-center">
                <div class="text-lg font-bold text-emerald-600 dark:text-emerald-400">${rm.upCaptureRatio?.toFixed(0)}%</div>
                <div class="text-[10px] text-slate-500">Up Capture</div>
                <div class="mt-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-emerald-500 rounded-full" style="width: ${Math.min(rm.upCaptureRatio, 150) / 1.5}%"></div></div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-red-600 dark:text-red-400">${rm.downCaptureRatio?.toFixed(0)}%</div>
                <div class="text-[10px] text-slate-500">Down Capture</div>
                <div class="mt-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-red-500 rounded-full" style="width: ${Math.min(rm.downCaptureRatio, 150) / 1.5}%"></div></div>
              </div>
            </div>
            <p class="text-[10px] text-slate-400 mt-2">vs. benchmark. Lower down capture = better downside protection.</p>
          </div>
          ` : ''}
        </div>

        <!-- Col 3: Fund Details -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Fund Details</h3>
          <dl class="space-y-1.5 text-sm">
            ${[
              ['Manager', fund.manager],
              ['Category', fund.category],
              ['Style', fund.style],
              ['Expense Ratio', fund.expenseRatio != null ? pct(fund.expenseRatio) : null],
              ['Total Assets', fund.totalAssets],
              ['Inception', fund.inceptionDate],
              ['Turnover Rate', fund.turnoverRate != null ? fund.turnoverRate + '%' : null],
            ].filter(([, val]) => val != null).map(([label, val], i, arr) => `
            <div class="flex justify-between py-1 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700' : ''}">
              <dt class="text-slate-500">${label}</dt>
              <dd class="font-medium">${label === 'Category' ? `<span class="px-2 py-0.5 rounded text-xs font-medium ${classColors[fund.assetClass] || 'bg-slate-100 text-slate-700'}">${val}</span>` : val}</dd>
            </div>
            `).join('')}
            ${retail ? `
            <div class="flex justify-between py-1 border-t border-slate-100 dark:border-slate-700 mt-2 pt-2">
              <dt class="text-slate-500">Retail Ticker</dt>
              <dd class="font-medium font-mono text-purple-600 dark:text-purple-400">${retail.ticker}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">Relationship</dt>
              <dd class="font-medium text-xs"><span class="px-2 py-0.5 rounded ${retail.relationship === 'mirror' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400'}">${retail.relationship === 'mirror' ? 'Mirror Fund' : retail.relationship === 'similar' ? 'Similar Fund' : 'Index Proxy'}</span></dd>
            </div>
            ` : ''}
          </dl>
        </div>

      </div>

      <!-- Sector Allocation -->
      ${sectorEntries.length > 0 ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-4">Sector Allocation</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-2">
            ${sectorEntries.map(([sector, pctVal]) => {
              const label = sector.includes(' ') ? sector : sector.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim();
              const color = sectorColors[sector] || '#94A3B8';
              return `
              <div>
                <div class="flex justify-between text-xs mb-0.5">
                  <span class="text-slate-600 dark:text-slate-300">${label}</span>
                  <span class="font-mono font-medium">${pctVal.toFixed(1)}%</span>
                </div>
                <div class="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all" style="width: ${pctVal}%; background-color: ${color}"></div>
                </div>
              </div>`;
            }).join('')}
          </div>
          <div class="flex items-center justify-center">
            <div class="relative w-40 h-40">
              ${(() => {
                let cumulative = 0;
                return sectorEntries.slice(0, 8).map(([sector, pctVal]) => {
                  const start = cumulative;
                  cumulative += pctVal;
                  const color = sectorColors[sector] || '#94A3B8';
                  const startAngle = (start / 100) * 360;
                  const endAngle = (cumulative / 100) * 360;
                  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                  const x1 = 80 + 70 * Math.cos((startAngle - 90) * Math.PI / 180);
                  const y1 = 80 + 70 * Math.sin((startAngle - 90) * Math.PI / 180);
                  const x2 = 80 + 70 * Math.cos((endAngle - 90) * Math.PI / 180);
                  const y2 = 80 + 70 * Math.sin((endAngle - 90) * Math.PI / 180);
                  return `<svg class="absolute inset-0 w-full h-full" viewBox="0 0 160 160"><path d="M80,80 L${x1},${y1} A70,70 0 ${largeArc},1 ${x2},${y2} Z" fill="${color}" opacity="0.85"/></svg>`;
                }).join('');
              })()}
              <div class="absolute inset-0 flex items-center justify-center"><div class="w-16 h-16 rounded-full bg-white dark:bg-slate-800"></div></div>
            </div>
          </div>
        </div>
      </div>
      ` : ''}

      <!-- Top Holdings -->
      ${fund.topHoldings?.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Top Holdings</h3>
        <div class="flex flex-wrap gap-2">
          ${fund.topHoldings.map((h, i) => `<span class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm flex items-center gap-1.5"><span class="text-[10px] text-slate-400 font-mono">${i + 1}</span> ${h}</span>`).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Available In Products -->
      ${(vaProducts.length + vulProducts.length) > 0 ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400">Available In These Products</h3>
          <p class="text-xs text-slate-500 mt-0.5">${vaProducts.length} VA products &middot; ${vulProducts.length} VUL products</p>
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
