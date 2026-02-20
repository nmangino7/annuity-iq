import { getFIAProducts, getBenchmarks } from '../data/index.js';
import { pct, ratingBadge, benchmarkGauge, getTopRate, getTopParticipation, currency } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'topCap';
let sortDir = 'desc';
let filters = { minCap: 0, minParticipation: 0, maxSurrender: 20, incomeRider: 'all', minRating: 'all' };
let pageSize = 50;
let currentPage = 1;

function getFilteredProducts() {
  let products = getFIAProducts().map(p => ({
    ...p,
    topCap: getTopRate(p.indexStrategies) || 0,
    topParticipation: getTopParticipation(p.indexStrategies) || 0,
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.minCap > 0) products = products.filter(p => p.topCap >= filters.minCap);
  if (filters.minParticipation > 0) products = products.filter(p => p.topParticipation >= filters.minParticipation);
  if (filters.maxSurrender < 20) products = products.filter(p => p.surrenderPeriod <= filters.maxSurrender);
  if (filters.incomeRider === 'yes') products = products.filter(p => p.incomeRiderAvailable);
  if (filters.incomeRider === 'no') products = products.filter(p => !p.incomeRiderAvailable);
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

export function renderFIAExplorer() {
  const bm = getBenchmarks().fia;

  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Fixed Indexed Annuities</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare cap rates, participation rates, and index strategies</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="document.getElementById('fia-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filters
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div id="fia-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Cap Rate</label>
            <select id="f-minCap" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="5">5%+</option><option value="6">6%+</option><option value="7">7%+</option><option value="8">8%+</option><option value="9">9%+</option><option value="10">10%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Participation</label>
            <select id="f-minPart" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="50">50%+</option><option value="100">100%+</option><option value="150">150%+</option><option value="200">200%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Surrender</label>
            <select id="f-maxSurr" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="20">Any</option>
              <option value="7">7yr or less</option><option value="10">10yr or less</option><option value="12">12yr or less</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Income Rider</label>
            <select id="f-income" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="yes">Available</option><option value="no">Not Available</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="f-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A++">A++</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyFIAFilters()" class="mt-3 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('amBest')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('topCap')">Cap Rate <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('topParticipation')">Participation</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('surrenderPeriod')">Term</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortFIA('premiumBonus')">Bonus</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Income Rider</th>
                <th class="px-3 py-3 font-medium text-slate-500 dark:text-slate-400 text-center">vs Market</th>
              </tr>
            </thead>
            <tbody id="fia-table-body">
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="fia-count"></div>
      </div>
    </div>
  `;

  window._sortFIA = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderFIATable();
  };

  window._applyFIAFilters = () => {
    filters.minCap = parseFloat(document.getElementById('f-minCap').value);
    filters.minParticipation = parseFloat(document.getElementById('f-minPart').value);
    filters.maxSurrender = parseFloat(document.getElementById('f-maxSurr').value);
    filters.incomeRider = document.getElementById('f-income').value;
    filters.minRating = document.getElementById('f-rating').value;
    currentPage = 1;
    renderFIATable();
  };

  window._pageInit = () => renderFIATable();

  return html;
}

function renderFIATable() {
  const allProducts = getFilteredProducts();
  const bm = getBenchmarks().fia;
  const tbody = document.getElementById('fia-table-body');
  const countEl = document.getElementById('fia-count');
  if (!tbody) return;

  const totalProducts = allProducts.length;
  const products = allProducts.slice(0, currentPage * pageSize);
  const hasMore = products.length < totalProducts;

  tbody.innerHTML = products.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${p.id}" data-name="${p.name}" data-type="fia"
          ${state.compareItems.find(i => i.id === p.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'fia'}) : window.app.removeFromCompare('${p.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/fia/${p.id}'">
        <div class="font-medium text-blue-600 dark:text-blue-400 hover:underline">${p.name}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${p.topCap >= bm.sp500CapRate.q3 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${pct(p.topCap)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(p.topParticipation, 0)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.surrenderPeriod}yr</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.premiumBonus > 0 ? pct(p.premiumBonus, 0) : '-'}</td>
      <td class="px-3 py-2.5 text-center">${p.incomeRiderAvailable ? '<span class="text-emerald-500">Yes</span>' : '<span class="text-slate-400">No</span>'}</td>
      <td class="px-3 py-2.5">${benchmarkGauge(p.topCap, bm.sp500CapRate.min, bm.sp500CapRate.max, 'Cap Rate')}</td>
    </tr>
  `).join('');

  if (countEl) {
    countEl.innerHTML = `Showing ${products.length} of ${totalProducts} products` +
      (hasMore ? ` <button onclick="window._loadMoreFIA()" class="ml-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">Show More</button>` : '');
  }
}

window._loadMoreFIA = () => {
  currentPage++;
  renderFIATable();
};
