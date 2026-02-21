import { getGLWBRiders, getBenchmarks } from '../data/index.js';
import { pct, ratingBadge, benchmarkGauge } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'wd65';
let sortDir = 'desc';
let filters = { minRollup: 0, rollupType: 'all', minWD65: 0, maxFee: 5, minRating: 'all' };
let pageSize = 50;
let currentPage = 1;

function getFiltered() {
  let riders = getGLWBRiders().map(r => ({
    ...r,
    wd65: r.withdrawalRates.single['65-69'] || 0,
    wd70: r.withdrawalRates.single['70-74'] || 0,
    amBest: r.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: r.carrier?.ratings?.comdex || 0,
    carrierName: r.carrier?.shortName || ''
  }));

  if (filters.minRollup > 0) riders = riders.filter(r => r.rollUp.rate >= filters.minRollup);
  if (filters.rollupType !== 'all') riders = riders.filter(r => r.rollUp.type === filters.rollupType);
  if (filters.minWD65 > 0) riders = riders.filter(r => r.wd65 >= filters.minWD65);
  if (filters.maxFee < 5) riders = riders.filter(r => r.riderFee <= filters.maxFee);
  if (filters.minRating !== 'all') {
    const order = ['A++', 'A+', 'A', 'A-', 'B++', 'B+'];
    const minIdx = order.indexOf(filters.minRating);
    riders = riders.filter(r => { const idx = order.indexOf(r.amBest); return idx >= 0 && idx <= minIdx; });
  }

  riders.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (sortKey === 'rollupRate') { va = a.rollUp.rate; vb = b.rollUp.rate; }
    if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb || '').toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });
  return riders;
}

export function renderGLWBExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Income Riders (GLWB)</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare guaranteed lifetime withdrawal benefits</p>
        </div>
        <button onclick="document.getElementById('glwb-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filters
        </button>
      </div>

      <div id="glwb-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Rollup Rate</label>
            <select id="gf-minRollup" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option><option value="5">5%+</option><option value="6">6%+</option><option value="7">7%+</option><option value="8">8%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Rollup Type</label>
            <select id="gf-type" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="Simple">Simple</option><option value="Compound">Compound</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min WD% at 65</label>
            <select id="gf-minWD" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option><option value="4.5">4.5%+</option><option value="5">5%+</option><option value="5.5">5.5%+</option><option value="6">6%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Rider Fee</label>
            <select id="gf-maxFee" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="5">Any</option><option value="1.5">1.5% or less</option><option value="1.25">1.25% or less</option><option value="1">1% or less</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="gf-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyGLWBFilters()" class="mt-3 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">Apply Filters</button>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('name')">Rider</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('amBest')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('rollupRate')">Rollup</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('wd65')">WD @65</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('wd70')">WD @70</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 sortable" onclick="window._sortGLWB('riderFee')">Fee</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500">Step-Up</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500">NH Benefit</th>
                <th class="px-3 py-3 font-medium text-slate-500 text-center">vs Market</th>
              </tr>
            </thead>
            <tbody id="glwb-table-body"></tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="glwb-count"></div>
      </div>
    </div>
  `;

  window._sortGLWB = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' ? 'asc' : 'desc'; }
    currentPage = 1;
    renderTable();
  };

  window._applyGLWBFilters = () => {
    filters.minRollup = parseFloat(document.getElementById('gf-minRollup').value);
    filters.rollupType = document.getElementById('gf-type').value;
    filters.minWD65 = parseFloat(document.getElementById('gf-minWD').value);
    filters.maxFee = parseFloat(document.getElementById('gf-maxFee').value);
    filters.minRating = document.getElementById('gf-rating').value;
    currentPage = 1;
    renderTable();
  };

  window._pageInit = () => renderTable();
  return html;
}

function renderTable() {
  const allRiders = getFiltered();
  const bm = getBenchmarks().glwb;
  const tbody = document.getElementById('glwb-table-body');
  if (!tbody) return;

  const totalRiders = allRiders.length;
  const riders = allRiders.slice(0, currentPage * pageSize);
  const hasMore = riders.length < totalRiders;

  tbody.innerHTML = riders.map(r => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${r.id}"
          ${state.compareItems.find(i => i.id === r.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${r.id}',name:'${r.name}',type:'glwb'}) : window.app.removeFromCompare('${r.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/glwb/${r.id}'">
        <div class="font-medium text-blue-600 dark:text-blue-400 hover:underline">${r.name}${r.ratesVerified ? ' <span title="Rates verified from carrier source" class="inline-flex items-center ml-1 px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold rounded-full align-middle">Verified</span>' : ''}</div>
        <div class="text-xs text-slate-400">${r.attachedProduct}</div>
      </td>
      <td class="px-3 py-2.5">${r.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(r.amBest)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold">${r.rollUp.rate}% <span class="text-xs text-slate-400">${r.rollUp.type[0]}</span></td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${r.wd65 >= bm.withdrawalRate65.q3 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${pct(r.wd65)}</td>
      <td class="px-3 py-2.5 text-right font-mono">${pct(r.wd70)}</td>
      <td class="px-3 py-2.5 text-right font-mono ${r.riderFee <= bm.riderFee.q1 ? 'text-emerald-600' : r.riderFee >= bm.riderFee.q3 ? 'text-red-500' : ''}">${pct(r.riderFee)}</td>
      <td class="px-3 py-2.5 text-center">${r.stepUpAvailable ? '<span class="text-emerald-500">Yes</span>' : '<span class="text-slate-400">No</span>'}</td>
      <td class="px-3 py-2.5 text-center">${r.nursingHomeBenefit ? '<span class="text-emerald-500">' + r.nursingHomeMultiplier + 'x</span>' : '<span class="text-slate-400">No</span>'}</td>
      <td class="px-3 py-2.5">${benchmarkGauge(r.wd65, bm.withdrawalRate65.min, bm.withdrawalRate65.max, 'WD @65')}</td>
    </tr>
  `).join('');

  const countEl = document.getElementById('glwb-count');
  if (countEl) {
    countEl.innerHTML = `Showing ${riders.length} of ${totalRiders} riders` +
      (hasMore ? ` <button onclick="window._loadMoreGLWB()" class="ml-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">Show More</button>` : '');
  }
}

window._loadMoreGLWB = () => {
  currentPage++;
  renderTable();
};
