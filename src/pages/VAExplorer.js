// =============================================================================
// VAExplorer.js - Variable Annuity Explorer & Detail View
// =============================================================================

import { getVAProducts, getSubaccounts } from '../data/index.js';
import { pct, ratingBadge, currency } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'subaccountCount';
let sortDir = 'desc';
let filters = { maxME: 5, contractType: 'all', hasLivingBenefit: 'all', minSubaccounts: 0, minRating: 'all' };
let pageSize = 50;
let currentPage = 1;

function getFilteredProducts() {
  let products = getVAProducts().map(p => ({
    ...p,
    topRollup: p.livingBenefits?.length ? Math.max(...p.livingBenefits.map(b => b.rollupRate || 0)) : 0,
    topWithdrawal65: p.livingBenefits?.length ? Math.max(...p.livingBenefits.map(b => b.withdrawalRates?.age65 || 0)) : 0,
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.maxME < 5) products = products.filter(p => p.totalAnnualCharge <= filters.maxME);
  if (filters.contractType !== 'all') products = products.filter(p => p.contractType === filters.contractType);
  if (filters.hasLivingBenefit === 'yes') products = products.filter(p => p.livingBenefits?.length > 0);
  if (filters.hasLivingBenefit === 'no') products = products.filter(p => !p.livingBenefits?.length);
  if (filters.minSubaccounts > 0) products = products.filter(p => p.subaccountCount >= filters.minSubaccounts);
  if (filters.minRating !== 'all') {
    const order = ['A++', 'A+', 'A', 'A-', 'B++', 'B+'];
    const minIdx = order.indexOf(filters.minRating);
    products = products.filter(p => { const idx = order.indexOf(p.amBest); return idx >= 0 && idx <= minIdx; });
  }

  products.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb || '').toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return products;
}

export function renderVAExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Variable Annuities <span class="text-base font-normal text-slate-500 dark:text-slate-400">(VA)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare fees, subaccount options, living benefits, and death benefits across variable annuity contracts</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="#/funds" class="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            Fund Research
          </a>
          <button onclick="document.getElementById('va-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filters
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="va-summary-cards"></div>

      <!-- Filters -->
      <div id="va-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Total Charge</label>
            <select id="vaf-maxME" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="5">Any</option>
              <option value="1.0">Under 1.0%</option><option value="1.25">Under 1.25%</option><option value="1.5">Under 1.50%</option><option value="2.0">Under 2.0%</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Contract Type</label>
            <select id="vaf-type" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option>
              <option value="B-Share">B-Share</option><option value="L-Share">L-Share</option><option value="C-Share">C-Share</option><option value="I-Share">I-Share</option><option value="Advisory">Advisory</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Living Benefit</label>
            <select id="vaf-living" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="yes">Has Living Benefit</option><option value="no">No Living Benefit</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Subaccounts</label>
            <select id="vaf-subs" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="50">50+</option><option value="75">75+</option><option value="100">100+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="vaf-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A++">A++</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyVAFilters()" class="mt-3 px-4 py-1.5 bg-violet-600 text-white text-sm rounded-lg hover:bg-violet-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('amBest')">Rating</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('contractType')">Type</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('totalAnnualCharge')">M&E + Admin</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('subaccountCount')">Funds <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('topRollup')">Rollup</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortVA('surrenderPeriod')">Surrender</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Living Benefit</th>
              </tr>
            </thead>
            <tbody id="va-table-body">
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="va-count"></div>
      </div>
    </div>
  `;

  window._sortVA = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' || key === 'contractType' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderVATable();
  };

  window._applyVAFilters = () => {
    filters.maxME = parseFloat(document.getElementById('vaf-maxME').value);
    filters.contractType = document.getElementById('vaf-type').value;
    filters.hasLivingBenefit = document.getElementById('vaf-living').value;
    filters.minSubaccounts = parseInt(document.getElementById('vaf-subs').value);
    filters.minRating = document.getElementById('vaf-rating').value;
    currentPage = 1;
    renderVATable();
  };

  window._loadMoreVA = () => { currentPage++; renderVATable(); };
  window._pageInit = () => renderVATable();

  return html;
}

export function renderVADetail(id) {
  const products = getVAProducts();
  const p = products.find(x => x.id === id);
  if (!p) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Product not found</h2><a href="#/va" class="text-violet-500 hover:underline mt-2 inline-block">← Back to VA Explorer</a></div>`;

  const carrier = p.carrier;
  const allSubs = getSubaccounts();
  const productSubs = (p.subaccountIds || []).map(sid => allSubs.find(s => s.id === sid)).filter(Boolean);
  const equitySubs = productSubs.filter(s => s.assetClass === 'Equity');
  const bondSubs = productSubs.filter(s => s.assetClass === 'Fixed Income');
  const balancedSubs = productSubs.filter(s => s.assetClass === 'Balanced' || s.assetClass === 'Target Date');
  const altSubs = productSubs.filter(s => s.assetClass === 'Alternative' || s.assetClass === 'Money Market');

  const typeColors = {
    'B-Share': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'L-Share': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    'C-Share': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'I-Share': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Advisory': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
  };

  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/va" class="text-sm text-slate-500 hover:text-violet-500 transition-colors">← All Variable Annuities</a>
          <h1 class="text-2xl font-bold mt-1">${p.name}</h1>
          <p class="text-slate-500 dark:text-slate-400">
            ${carrier ? `<a href="#/carriers/${carrier.id}" class="text-violet-600 dark:text-violet-400 hover:underline">${carrier.shortName}</a>` : 'Unknown Carrier'}
            · <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${typeColors[p.contractType] || 'bg-slate-100 text-slate-700'}">${p.contractType}</span>
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'va'})" class="px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-lg text-sm hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Compare
          </button>
        </div>
      </div>

      ${p.sourceUrl ? `
      <div>
        <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View Official Carrier Rate Sheet
        </a>
      </div>
      ` : ''}

      ${p.ratesVerified ? `
        <div class="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
          <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          <span class="text-sm text-emerald-700 dark:text-emerald-300"><strong>Verified</strong> &mdash; Rates confirmed from carrier source on ${p.lastVerifiedDate || 'N/A'}</span>
        </div>
      ` : `
        <div class="flex items-start gap-2 px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
          <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
          <span class="text-sm text-amber-700 dark:text-amber-300"><strong>Unverified Rates</strong> &mdash; Rates shown are estimates based on publicly available data and may not reflect current carrier rates. Verify with your carrier or financial advisor before making decisions.</span>
        </div>
      `}

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-violet-600 dark:text-violet-400">${pct(p.totalAnnualCharge)}</div>
          <div class="text-xs text-slate-500 mt-1">Total Annual Charge</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${p.subaccountCount}</div>
          <div class="text-xs text-slate-500 mt-1">Subaccounts</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${p.livingBenefits?.length ? pct(Math.max(...p.livingBenefits.map(b => b.rollupRate || 0))) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Top Rollup Rate</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${p.surrenderPeriod ? p.surrenderPeriod + 'yr' : 'None'}</div>
          <div class="text-xs text-slate-500 mt-1">Surrender Period</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${currency(p.minimumPremium)}</div>
          <div class="text-xs text-slate-500 mt-1">Min Premium</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${carrier ? ratingBadge(carrier.ratings?.amBest?.rating) : 'N/R'}</div>
          <div class="text-xs text-slate-500 mt-1">AM Best</div>
        </div>
      </div>

      <!-- Details Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Product Info -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Contract Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Contract Type</dt>
              <dd class="font-medium"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${typeColors[p.contractType] || ''}">${p.contractType}</span></dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">M&E Charge</dt>
              <dd class="font-medium">${pct(p.meCharge)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Admin Fee</dt>
              <dd class="font-medium">${pct(p.adminFee)}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Fund Expense Range</dt>
              <dd class="font-medium">${p.fundExpenseRange ? pct(p.fundExpenseRange.min) + ' – ' + pct(p.fundExpenseRange.max) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Surrender Schedule</dt>
              <dd class="font-medium font-mono text-xs">${p.surrenderSchedule ? p.surrenderSchedule.join(', ') + '%' : 'None'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Free Withdrawal</dt>
              <dd class="font-medium">${p.freeWithdrawalPercent ? p.freeWithdrawalPercent + '%' : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Maximum Issue Age</dt>
              <dd class="font-medium">${p.maximumIssueAge || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">RMD Friendly</dt>
              <dd class="font-medium">${p.rmdFriendly ? '<span class="text-emerald-600">Yes</span>' : '<span class="text-slate-400">No</span>'}</dd>
            </div>
          </dl>
        </div>

        <!-- Highlights -->
        <div class="space-y-4">
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-lg mb-3">Highlights</h3>
            ${p.highlights?.length ? `<ul class="space-y-2">${p.highlights.map(h => `
              <li class="flex items-start gap-2 text-sm">
                <svg class="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>${h}</span>
              </li>`).join('')}</ul>` : '<p class="text-sm text-slate-400">No highlights</p>'}
          </div>

          <!-- Subaccount Breakdown -->
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold text-lg mb-3">Subaccount Breakdown</h3>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="flex justify-between"><span class="text-slate-500">Equity Funds</span><span class="font-semibold">${equitySubs.length}</span></div>
              <div class="flex justify-between"><span class="text-slate-500">Bond Funds</span><span class="font-semibold">${bondSubs.length}</span></div>
              <div class="flex justify-between"><span class="text-slate-500">Balanced/Target Date</span><span class="font-semibold">${balancedSubs.length}</span></div>
              <div class="flex justify-between"><span class="text-slate-500">Alternative/Money Market</span><span class="font-semibold">${altSubs.length}</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Living Benefits -->
      ${p.livingBenefits?.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-lg">Living Benefits (GMWB/GMIB)</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Rider Name</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Type</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Annual Cost</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Rollup Rate</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Age 59</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Age 65</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Age 70</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Step-Up</th>
              </tr>
            </thead>
            <tbody>
              ${p.livingBenefits.map(b => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-4 py-2 font-medium">${b.name}</td>
                  <td class="px-4 py-2 text-center"><span class="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">${b.type}</span></td>
                  <td class="px-4 py-2 text-right font-mono">${pct(b.annualCost)}</td>
                  <td class="px-4 py-2 text-right font-mono font-semibold text-emerald-600 dark:text-emerald-400">${b.rollupRate ? pct(b.rollupRate) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${b.withdrawalRates?.age59 ? pct(b.withdrawalRates.age59) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${b.withdrawalRates?.age65 ? pct(b.withdrawalRates.age65) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${b.withdrawalRates?.age70 ? pct(b.withdrawalRates.age70) : '—'}</td>
                  <td class="px-4 py-2 text-center text-xs">${b.stepUpFrequency || '—'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ` : ''}

      <!-- Death Benefits -->
      ${p.deathBenefits?.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-lg">Death Benefits</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Benefit Name</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Type</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Annual Cost</th>
                <th class="text-left px-4 py-2 font-medium text-slate-500">Description</th>
              </tr>
            </thead>
            <tbody>
              ${p.deathBenefits.map(d => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-4 py-2 font-medium">${d.name}</td>
                  <td class="px-4 py-2 text-center"><span class="px-2 py-0.5 rounded text-xs font-medium ${d.type === 'Standard' ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'}">${d.type}</span></td>
                  <td class="px-4 py-2 text-right font-mono">${d.annualCost > 0 ? pct(d.annualCost) : 'Included'}</td>
                  <td class="px-4 py-2 text-slate-600 dark:text-slate-300 text-xs">${d.description || ''}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ` : ''}

      <!-- Top Subaccounts -->
      ${productSubs.length ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div>
            <h3 class="font-semibold text-lg">Available Subaccounts</h3>
            <p class="text-xs text-slate-500">${productSubs.length} funds linked · <a href="#/funds" class="text-violet-600 dark:text-violet-400 hover:underline">Research all funds →</a></p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Fund Name</th>
                <th class="text-left px-4 py-2 font-medium text-slate-500">Category</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Expense</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">1Y Return</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">3Y Return</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">5Y Return</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Rating</th>
              </tr>
            </thead>
            <tbody>
              ${productSubs.sort((a, b) => (b.morningstarRating || 0) - (a.morningstarRating || 0)).slice(0, 20).map(s => `
                <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/funds/${s.id}'">
                  <td class="px-4 py-2">
                    <div class="font-medium text-violet-600 dark:text-violet-400">${s.name}</div>
                    <div class="text-xs text-slate-400">${s.manager || ''}</div>
                  </td>
                  <td class="px-4 py-2 text-xs">${s.category || ''}</td>
                  <td class="px-4 py-2 text-right font-mono">${pct(s.expenseRatio)}</td>
                  <td class="px-4 py-2 text-right font-mono ${(s.oneYearReturn || 0) > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}">${s.oneYearReturn != null ? pct(s.oneYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${s.threeYearReturn != null ? pct(s.threeYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-right font-mono">${s.fiveYearReturn != null ? pct(s.fiveYearReturn) : '—'}</td>
                  <td class="px-4 py-2 text-center"><span class="text-amber-500">${'★'.repeat(s.morningstarRating || 0)}</span><span class="text-slate-300">${'★'.repeat(5 - (s.morningstarRating || 0))}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${productSubs.length > 20 ? `<div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400">Showing top 20 of ${productSubs.length} subaccounts by Morningstar rating</div>` : ''}
      </div>
      ` : ''}

      ${carrier ? `
      <!-- Carrier Info -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Carrier: ${carrier.name}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><span class="text-slate-500">AM Best</span><div class="font-medium mt-0.5">${ratingBadge(carrier.ratings?.amBest?.rating)}</div></div>
          <div><span class="text-slate-500">COMDEX</span><div class="font-medium mt-0.5">${carrier.ratings?.comdex || 'N/A'}</div></div>
          <div><span class="text-slate-500">Total Assets</span><div class="font-medium mt-0.5">${carrier.totalAssets || 'N/A'}</div></div>
          <div><span class="text-slate-500">Founded</span><div class="font-medium mt-0.5">${carrier.foundedYear || 'N/A'}</div></div>
        </div>
        <a href="#/carriers/${carrier.id}" class="inline-block mt-3 text-sm text-violet-600 dark:text-violet-400 hover:underline">View full carrier profile →</a>
      </div>
      ` : ''}
    </div>
  `;
}

function renderVATable() {
  const allProducts = getVAProducts();
  const products = getFilteredProducts();
  const displayed = products.slice(0, currentPage * pageSize);
  const hasMore = displayed.length < products.length;
  const tbody = document.getElementById('va-table-body');
  const countEl = document.getElementById('va-count');
  const summaryEl = document.getElementById('va-summary-cards');
  if (!tbody) return;

  // Summary cards
  if (summaryEl) {
    const avgME = allProducts.length ? (allProducts.reduce((s, p) => s + (p.totalAnnualCharge || 0), 0) / allProducts.length) : 0;
    const avgSubs = allProducts.length ? Math.round(allProducts.reduce((s, p) => s + (p.subaccountCount || 0), 0) / allProducts.length) : 0;
    const withLiving = allProducts.filter(p => p.livingBenefits?.length > 0).length;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-violet-600 dark:text-violet-400">${allProducts.length}</div>
        <div class="text-xs text-slate-500 mt-1">Total VA Products</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${pct(avgME)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg M&E + Admin</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${avgSubs}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Subaccounts</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">${withLiving}</div>
        <div class="text-xs text-slate-500 mt-1">With Living Benefits</div>
      </div>
    `;
  }

  const typeColors = {
    'B-Share': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    'L-Share': 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    'C-Share': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
    'I-Share': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    'Advisory': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
  };

  tbody.innerHTML = displayed.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${p.id}" data-name="${p.name}" data-type="va"
          ${state.compareItems.find(i => i.id === p.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'va'}) : window.app.removeFromCompare('${p.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/va/${p.id}'">
        <div class="font-medium text-violet-600 dark:text-violet-400 hover:underline">${p.name}${p.ratesVerified ? ' <span title="Rates verified from carrier source" class="inline-flex items-center ml-1 px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold rounded-full align-middle">Verified</span>' : ''}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-center"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeColors[p.contractType] || ''}">${p.contractType}</span></td>
      <td class="px-3 py-2.5 text-right font-mono ${p.totalAnnualCharge <= 1.0 ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}">${pct(p.totalAnnualCharge)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold">${p.subaccountCount}</td>
      <td class="px-3 py-2.5 text-right font-mono ${p.topRollup >= 5 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${p.topRollup > 0 ? pct(p.topRollup) : '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.surrenderPeriod ? p.surrenderPeriod + 'yr' : 'None'}</td>
      <td class="px-3 py-2.5 text-center">${p.livingBenefits?.length ? '<span class="text-emerald-500 font-semibold">✓</span>' : '<span class="text-slate-400">—</span>'}</td>
    </tr>
  `).join('');

  if (countEl) {
    countEl.innerHTML = `Showing ${displayed.length} of ${products.length} VA products` +
      (hasMore ? ` <button onclick="window._loadMoreVA()" class="ml-2 text-violet-600 dark:text-violet-400 hover:underline font-medium">Show More</button>` : '');
  }
}
