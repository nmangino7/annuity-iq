// =============================================================================
// FundExplorer.js - Subaccount / Fund Research Tool
// =============================================================================
// Shows only stored, sourced fund facts. The previous build synthesized live
// "daily change" data (an index ETF return x a made-up style beta), fabricated
// sector allocations and risk metrics (alpha/beta/capture computed from category
// templates), and a "retail equivalent" proxy panel — all removed. Returns are
// proxy-sourced but disclosed via the returnsVerified / verificationNote fields,
// surfaced through fundDataNote().
// =============================================================================

import { getSubaccounts, getVAProducts, getVULProducts } from '../data/index.js';
import { pct, currency } from '../utils/formatters.js';

let sortKey = 'morningstarRating';
let sortDir = 'desc';
let filters = { assetClass: 'all', style: 'all', minRating: 0, maxExpense: 5, search: '' };
let pageSize = 50;
let currentPage = 1;

// Honest provenance line driven by the record's existing verification metadata.
function fundDataNote(fund) {
  const note = fund.verificationNote || '';
  const date = fund.lastVerifiedDate ? ` (as of ${fund.lastVerifiedDate})` : '';
  if (fund.returnsVerified === true) {
    return `<div class="flex items-start gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm text-emerald-700 dark:text-emerald-300">
      <span class="font-semibold">Verified returns</span> &mdash; ${note || 'confirmed from fund source'}${date}</div>`;
  }
  if (fund.returnsVerified === 'partial') {
    return `<div class="flex items-start gap-2 px-3 py-2 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg text-sm text-sky-700 dark:text-sky-300">
      <span class="font-semibold">Proxy data</span> &mdash; ${note || 'returns approximated from a retail-equivalent fund'}${date}</div>`;
  }
  return `<div class="flex items-start gap-2 px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-700 dark:text-amber-300">
    <span class="font-semibold">Unverified</span> &mdash; returns are estimates and may not reflect the actual subaccount${date}</div>`;
}

function getFilteredFunds() {
  let funds = getSubaccounts();

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

  funds = [...funds].sort((a, b) => {
    let va = a[sortKey] ?? '';
    let vb = b[sortKey] ?? '';
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

      <!-- Data provenance -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-xs text-slate-500 dark:text-slate-400">
        Subaccount returns are sourced from fund prospectuses, fact sheets, or a disclosed retail-equivalent proxy, as of each fund's verification date. Figures are point-in-time and may differ from the current contract subaccount.
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

  window._pageInit = () => { renderFundTable(); };

  return html;
}

export function renderFundDetail(id) {
  const allFunds = getSubaccounts();
  const fund = allFunds.find(f => f.id === id);
  if (!fund) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Fund not found</h2><a href="#/funds" class="text-purple-500 hover:underline mt-2 inline-block">&larr; Back to Fund Research</a></div>`;

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

  // Style Box — Morningstar-style 3x3 grid, derived from real category/style (not invented)
  const sizeMap = { 'Large Cap': 0, 'Mid Cap': 1, 'Small Cap': 2 };
  const styleMap = { 'Value': 0, 'Blend': 1, 'Core': 1, 'Growth': 2 };
  const sizeKey = Object.keys(sizeMap).find(k => (fund.category || '').includes(k));
  const sizeIdx = sizeKey ? sizeMap[sizeKey] : null;
  const styleIdx = styleMap[fund.style] ?? null;
  const hasStyleBox = sizeIdx != null && styleIdx != null && fund.assetClass === 'Equity';

  const hasRisk = fund.standardDeviation != null || fund.sharpeRatio != null;

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
      </div>

      <!-- Data provenance -->
      ${fundDataNote(fund)}

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
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-3">Risk Analysis</h3>
            <dl class="space-y-1.5 text-sm">
              ${[
                ['Std Deviation', fund.standardDeviation, v => v.toFixed(1)],
                ['Sharpe Ratio', fund.sharpeRatio, v => v.toFixed(2)],
              ].filter(([, val]) => val != null).map(([label, val, fmt], i, arr) => `
              <div class="flex justify-between py-1 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700' : ''}">
                <dt class="text-slate-500">${label}</dt>
                <dd class="font-medium font-mono">${fmt(val)}</dd>
              </div>
              `).join('')}
              ${!hasRisk ? '<div class="text-xs text-slate-400 italic">Risk metrics not available</div>' : ''}
            </dl>
          </div>

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
          </dl>
        </div>

      </div>

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
  const allFunds = getSubaccounts();
  const funds = getFilteredFunds();
  const displayed = funds.slice(0, currentPage * pageSize);
  const hasMore = displayed.length < funds.length;
  const tbody = document.getElementById('fund-table-body');
  const countEl = document.getElementById('fund-count');
  const summaryEl = document.getElementById('fund-summary-cards');
  if (!tbody) return;

  if (summaryEl) {
    const avgExpense = allFunds.length ? (allFunds.reduce((s, f) => s + (f.expenseRatio || 0), 0) / allFunds.length) : 0;
    const equityCount = allFunds.filter(f => f.assetClass === 'Equity').length;
    const bondCount = allFunds.filter(f => f.assetClass === 'Fixed Income').length;
    const oneYrFunds = allFunds.filter(f => f.oneYearReturn != null);
    const avg1yr = oneYrFunds.length ? (oneYrFunds.reduce((s, f) => s + f.oneYearReturn, 0) / oneYrFunds.length) : 0;
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
        <div class="font-medium text-purple-600 dark:text-purple-400 hover:underline">${f.name}</div>
        <div class="text-xs text-slate-400">${f.manager || ''} ${f.ticker ? '&middot; ' + f.ticker : ''}</div>
      </td>
      <td class="px-3 py-2.5 text-xs">${f.category || ''}</td>
      <td class="px-3 py-2.5 text-right font-mono ${f.expenseRatio <= 0.25 ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}">${pct(f.expenseRatio)}</td>
      <td class="px-3 py-2.5 text-center"><span class="text-amber-500 text-xs">${'★'.repeat(f.morningstarRating || 0)}</span><span class="text-slate-300 text-xs">${'★'.repeat(5 - (f.morningstarRating || 0))}</span></td>
      <td class="px-3 py-2.5 text-right font-mono ${(f.ytdReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${f.ytdReturn != null ? pct(f.ytdReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono ${(f.oneYearReturn || 0) > 0 ? 'text-emerald-600' : 'text-red-600'}">${f.oneYearReturn != null ? pct(f.oneYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${f.threeYearReturn != null ? pct(f.threeYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${f.fiveYearReturn != null ? pct(f.fiveYearReturn) : '—'}</td>
      <td class="px-3 py-2.5 text-center"><span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">${(f.availableIn || []).length}</span></td>
    </tr>
  `).join('');

  if (countEl) {
    countEl.innerHTML = `Showing ${displayed.length} of ${funds.length} funds` +
      (hasMore ? ` <button onclick="window._loadMoreFunds()" class="ml-2 text-purple-600 dark:text-purple-400 hover:underline font-medium">Show More</button>` : '');
  }
}
