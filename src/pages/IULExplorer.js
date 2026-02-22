import { getIULProducts, getBenchmarks } from '../data/index.js';
import { pct, ratingBadge, benchmarkGauge, getTopRate, getTopParticipation, verifyBadge } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'topCap';
let sortDir = 'desc';
let filters = { minCap: 0, minPart: 0, minIllustrated: 0, zeroLoan: 'all', minRating: 'all' };
let pageSize = 50;
let currentPage = 1;

function getAnnualTopCap(accounts) {
  if (!accounts || !accounts.length) return 0;
  const annualCaps = accounts.filter(s => s.capRate && s.capRate <= 15).map(s => s.capRate);
  return annualCaps.length ? Math.max(...annualCaps) : 0;
}

function getFiltered() {
  let products = getIULProducts().map(p => ({
    ...p,
    topCap: getAnnualTopCap(p.indexAccounts),
    topParticipation: getTopParticipation(p.indexAccounts) || 0,
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.minCap > 0) products = products.filter(p => p.topCap >= filters.minCap);
  if (filters.minPart > 0) products = products.filter(p => p.topParticipation >= filters.minPart);
  if (filters.minIllustrated > 0) products = products.filter(p => p.maxIllustratedRate >= filters.minIllustrated);
  if (filters.zeroLoan === 'yes') products = products.filter(p => p.loanProvisions?.zeroNetCostLoanAvailable);
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

export function renderIULExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Indexed Universal Life</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare cap rates, illustrated rates, and policy features</p>
        </div>
        <button onclick="document.getElementById('iul-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filters
        </button>
      </div>

      <div id="iul-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Cap Rate</label>
            <select id="if-minCap" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option><option value="9">9%+</option><option value="10">10%+</option><option value="11">11%+</option><option value="12">12%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Participation</label>
            <select id="if-minPart" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option><option value="100">100%+</option><option value="150">150%+</option><option value="200">200%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Illustrated Rate</label>
            <select id="if-minIll" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option><option value="6">6%+</option><option value="6.25">6.25%+</option><option value="6.5">6.5%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Zero-Cost Loan</label>
            <select id="if-loan" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="yes">Available</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="if-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyIULFilters()" class="mt-3 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">Apply Filters</button>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('amBest')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('topCap')">Cap Rate</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('topParticipation')">Participation</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('maxIllustratedRate')">AG49-B Rate</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortIUL('fixedAccountRate')">Fixed Rate</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500">0-Cost Loan</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500">No-Lapse</th>
                <th class="px-3 py-3 font-medium text-slate-500 text-center">vs Market</th>
              </tr>
            </thead>
            <tbody id="iul-table-body"></tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="iul-count"></div>
      </div>
    </div>
  `;

  window._sortIUL = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderTable();
  };

  window._applyIULFilters = () => {
    filters.minCap = parseFloat(document.getElementById('if-minCap').value);
    filters.minPart = parseFloat(document.getElementById('if-minPart').value);
    filters.minIllustrated = parseFloat(document.getElementById('if-minIll').value);
    filters.zeroLoan = document.getElementById('if-loan').value;
    filters.minRating = document.getElementById('if-rating').value;
    currentPage = 1;
    renderTable();
  };

  window._pageInit = () => renderTable();
  return html;
}

function renderTable() {
  const allProducts = getFiltered();
  const bm = getBenchmarks().iul;
  const tbody = document.getElementById('iul-table-body');
  if (!tbody) return;

  const totalProducts = allProducts.length;
  const products = allProducts.slice(0, currentPage * pageSize);
  const hasMore = products.length < totalProducts;

  tbody.innerHTML = products.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${p.id}"
          ${state.compareItems.find(i => i.id === p.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'iul'}) : window.app.removeFromCompare('${p.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/iul/${p.id}'">
        <div class="font-medium text-blue-600 dark:text-blue-400 hover:underline">${p.name}${verifyBadge(p)}</div>
      </td>
      <td class="px-3 py-2.5">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${p.topCap >= bm.sp500CapRate.q3 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${pct(p.topCap)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(p.topParticipation, 0)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(p.maxIllustratedRate)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(p.fixedAccountRate)}</td>
      <td class="px-3 py-2.5 text-center">${p.loanProvisions?.zeroNetCostLoanAvailable ? '<span class="text-emerald-500">Yes</span>' : '<span class="text-slate-400">No</span>'}</td>
      <td class="px-3 py-2.5 text-center text-xs">${p.noLapseGuarantee || '<span class="text-slate-400">None</span>'}</td>
      <td class="px-3 py-2.5">${benchmarkGauge(p.topCap, bm.sp500CapRate.min, bm.sp500CapRate.max, 'Cap Rate')}</td>
    </tr>
  `).join('');

  const countEl = document.getElementById('iul-count');
  if (countEl) {
    countEl.innerHTML = `Showing ${products.length} of ${totalProducts} products` +
      (hasMore ? ` <button onclick="window._loadMoreIUL()" class="ml-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">Show More</button>` : '');
  }
}

window._loadMoreIUL = () => {
  currentPage++;
  renderTable();
};
