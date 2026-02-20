import { getRILAProducts, getBenchmarks } from '../data/index.js';
import { pct, ratingBadge, benchmarkGauge, currency } from '../utils/formatters.js';
import { state, addToCompare, removeFromCompare } from '../state.js';

let sortKey = 'topCap';
let sortDir = 'desc';
let filters = { minCap: 0, minBuffer: 0, maxTerm: 20, bufferType: 'all', minRating: 'all' };

function getTopCap(options) {
  if (!options || !options.length) return null;
  const rates = options.map(o => o.capRate).filter(r => r != null);
  return rates.length ? Math.max(...rates) : null;
}

function getTopParticipation(options) {
  if (!options || !options.length) return null;
  const rates = options.map(o => o.participationRate).filter(r => r != null);
  return rates.length ? Math.max(...rates) : null;
}

function getMaxBuffer(options) {
  if (!options || !options.length) return null;
  const buffers = options.map(o => o.bufferLevel).filter(b => b != null);
  return buffers.length ? Math.max(...buffers) : null;
}

function getBufferLevels(options) {
  if (!options || !options.length) return [];
  const levels = [...new Set(options.map(o => o.bufferLevel).filter(b => b != null))].sort((a, b) => a - b);
  return levels;
}

function hasUncapped(options) {
  if (!options || !options.length) return false;
  return options.some(o => o.isUncapped);
}

function getIndexCount(options) {
  if (!options || !options.length) return 0;
  return new Set(options.map(o => o.indexName)).size;
}

function getFilteredProducts() {
  let products = getRILAProducts().map(p => ({
    ...p,
    topCap: getTopCap(p.accountOptions) || 0,
    topParticipation: getTopParticipation(p.accountOptions) || 0,
    maxBuffer: getMaxBuffer(p.accountOptions) || 0,
    bufferLevels: getBufferLevels(p.accountOptions),
    uncapped: hasUncapped(p.accountOptions),
    indexCount: getIndexCount(p.accountOptions),
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.minCap > 0) products = products.filter(p => p.topCap >= filters.minCap);
  if (filters.minBuffer > 0) products = products.filter(p => p.maxBuffer >= filters.minBuffer);
  if (filters.maxTerm < 20) products = products.filter(p => p.term <= filters.maxTerm);
  if (filters.bufferType !== 'all') {
    products = products.filter(p =>
      p.accountOptions?.some(o =>
        filters.bufferType === 'uncapped' ? o.isUncapped :
        o.bufferType?.toLowerCase() === filters.bufferType.toLowerCase()
      )
    );
  }
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

export function renderRILAExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">RILAs <span class="text-base font-normal text-slate-500 dark:text-slate-400">(Buffer Annuities)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare buffer levels, cap rates, and index-linked strategies across registered products</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="document.getElementById('rila-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filters
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="rila-summary-cards"></div>

      <!-- Filters -->
      <div id="rila-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Cap Rate</label>
            <select id="rf-minCap" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="8">8%+</option><option value="10">10%+</option><option value="12">12%+</option><option value="15">15%+</option><option value="18">18%+</option><option value="20">20%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Buffer</label>
            <select id="rf-minBuffer" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="10">10%+</option><option value="15">15%+</option><option value="20">20%+</option><option value="25">25%+</option><option value="30">30%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Term</label>
            <select id="rf-maxTerm" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="20">Any</option>
              <option value="1">1yr</option><option value="3">3yr or less</option><option value="6">6yr or less</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Buffer Type</label>
            <select id="rf-bufferType" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="Buffer">Buffer</option><option value="Floor">Floor</option><option value="uncapped">Uncapped Only</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="rf-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A++">A++</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyRILAFilters()" class="mt-3 px-4 py-1.5 bg-rose-600 text-white text-sm rounded-lg hover:bg-rose-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="px-3 py-3 w-10"></th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('amBest')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('topCap')">Cap Rate <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('topParticipation')">Participation</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('maxBuffer')">Max Buffer</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortRILA('term')">Term</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Indices</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Uncapped</th>
              </tr>
            </thead>
            <tbody id="rila-table-body">
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="rila-count"></div>
      </div>
    </div>
  `;

  window._sortRILA = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'name' || key === 'carrierName' ? 'asc' : 'desc'; }
    renderRILATable();
  };

  window._applyRILAFilters = () => {
    filters.minCap = parseFloat(document.getElementById('rf-minCap').value);
    filters.minBuffer = parseFloat(document.getElementById('rf-minBuffer').value);
    filters.maxTerm = parseFloat(document.getElementById('rf-maxTerm').value);
    filters.bufferType = document.getElementById('rf-bufferType').value;
    filters.minRating = document.getElementById('rf-rating').value;
    renderRILATable();
  };

  window._pageInit = () => renderRILATable();

  return html;
}

export function renderRILADetail(id) {
  const products = getRILAProducts();
  const p = products.find(x => x.id === id);
  if (!p) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Product not found</h2><a href="#/rila" class="text-rose-500 hover:underline mt-2 inline-block">← Back to RILA Explorer</a></div>`;

  const carrier = p.carrier;
  const topCap = getTopCap(p.accountOptions);
  const topPart = getTopParticipation(p.accountOptions);
  const maxBuf = getMaxBuffer(p.accountOptions);
  const bufLevels = getBufferLevels(p.accountOptions);
  const uncapped = hasUncapped(p.accountOptions);

  return `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/rila" class="text-sm text-slate-500 hover:text-rose-500 transition-colors">← All RILAs</a>
          <h1 class="text-2xl font-bold mt-1">${p.name}</h1>
          <p class="text-slate-500 dark:text-slate-400">
            ${carrier ? `<a href="#/carriers/${carrier.id}" class="text-rose-600 dark:text-rose-400 hover:underline">${carrier.shortName}</a>` : 'Unknown Carrier'}
            ${p.term ? ` · ${p.term}-Year Term` : ''}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.app.addToWatchlist('${p.id}','rila','${p.name}')" class="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-lg text-sm hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
            Watch
          </button>
          <button onclick="window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'rila'})" class="px-3 py-1.5 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded-lg text-sm hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Compare
          </button>
        </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-rose-600 dark:text-rose-400">${topCap != null ? pct(topCap) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Top Cap Rate</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${topPart != null ? pct(topPart, 0) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Top Participation</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${maxBuf != null ? pct(maxBuf, 0) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Max Buffer</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${p.term ? p.term + 'yr' : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Contract Term</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${carrier ? ratingBadge(carrier.ratings?.amBest?.rating) : 'N/R'}</div>
          <div class="text-xs text-slate-500 mt-1">AM Best</div>
        </div>
      </div>

      <!-- Product Details Grid -->
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Left Column: Product Info -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Product Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Minimum Premium</dt>
              <dd class="font-medium">${p.minimumPremium ? currency(p.minimumPremium) : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Maximum Issue Age</dt>
              <dd class="font-medium">${p.maximumIssueAge || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Buffer Levels</dt>
              <dd class="font-medium">${bufLevels.length ? bufLevels.map(b => b + '%').join(', ') : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Uncapped Options</dt>
              <dd class="font-medium">${uncapped ? '<span class="text-emerald-600">Yes</span>' : '<span class="text-slate-400">No</span>'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Death Benefit</dt>
              <dd class="font-medium">${p.deathBenefit || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Free Withdrawal</dt>
              <dd class="font-medium">${p.withdrawalProvisions?.freeWithdrawalPercent ? p.withdrawalProvisions.freeWithdrawalPercent + '%' : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">Surrender Penalty</dt>
              <dd class="font-medium">${p.withdrawalProvisions?.penaltyRate ? p.withdrawalProvisions.penaltyRate + '%' : 'N/A'}</dd>
            </div>
          </dl>
        </div>

        <!-- Right Column: Highlights -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Highlights</h3>
          ${p.highlights && p.highlights.length ? `
            <ul class="space-y-2">
              ${p.highlights.map(h => `
                <li class="flex items-start gap-2 text-sm">
                  <svg class="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          ` : '<p class="text-sm text-slate-400">No highlights available</p>'}
        </div>
      </div>

      <!-- Account Options Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold text-lg">Index Account Options</h3>
          <p class="text-xs text-slate-500 mt-0.5">${p.accountOptions?.length || 0} strategies available</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-2 font-medium text-slate-500">Index</th>
                <th class="text-left px-4 py-2 font-medium text-slate-500">Method</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Term</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Cap Rate</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Participation</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Buffer</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Type</th>
                <th class="text-right px-4 py-2 font-medium text-slate-500">Floor</th>
                <th class="text-center px-4 py-2 font-medium text-slate-500">Uncapped</th>
              </tr>
            </thead>
            <tbody>
              ${(p.accountOptions || []).map(opt => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-4 py-2 font-medium">${opt.indexName}</td>
                  <td class="px-4 py-2 text-slate-600 dark:text-slate-300">${opt.creditingMethod}</td>
                  <td class="px-4 py-2 text-right font-mono">${opt.term ? opt.term + 'yr' : '-'}</td>
                  <td class="px-4 py-2 text-right font-mono font-semibold ${opt.capRate && opt.capRate >= 15 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${opt.capRate ? pct(opt.capRate) : '-'}</td>
                  <td class="px-4 py-2 text-right font-mono ${opt.participationRate && opt.participationRate >= 100 ? 'text-indigo-600 dark:text-indigo-400' : ''}">${opt.participationRate ? pct(opt.participationRate, 0) : '-'}</td>
                  <td class="px-4 py-2 text-right font-mono font-semibold text-rose-600 dark:text-rose-400">${opt.bufferLevel ? pct(opt.bufferLevel, 0) : '-'}</td>
                  <td class="px-4 py-2 text-center"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${opt.bufferType === 'Buffer' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'}">${opt.bufferType || '-'}</span></td>
                  <td class="px-4 py-2 text-right font-mono">${opt.floorLevel ? pct(opt.floorLevel, 0) : '-'}</td>
                  <td class="px-4 py-2 text-center">${opt.isUncapped ? '<span class="text-emerald-500 font-semibold">✓</span>' : '<span class="text-slate-400">—</span>'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      ${carrier ? `
      <!-- Carrier Info -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Carrier: ${carrier.name}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span class="text-slate-500">AM Best</span>
            <div class="font-medium mt-0.5">${ratingBadge(carrier.ratings?.amBest?.rating)}</div>
          </div>
          <div>
            <span class="text-slate-500">COMDEX</span>
            <div class="font-medium mt-0.5">${carrier.ratings?.comdex || 'N/A'}</div>
          </div>
          <div>
            <span class="text-slate-500">Total Assets</span>
            <div class="font-medium mt-0.5">${carrier.totalAssets || 'N/A'}</div>
          </div>
          <div>
            <span class="text-slate-500">Founded</span>
            <div class="font-medium mt-0.5">${carrier.foundedYear || 'N/A'}</div>
          </div>
        </div>
        <a href="#/carriers/${carrier.id}" class="inline-block mt-3 text-sm text-rose-600 dark:text-rose-400 hover:underline">View full carrier profile →</a>
      </div>
      ` : ''}
    </div>
  `;

  return html;
}

function renderRILATable() {
  const products = getFilteredProducts();
  const tbody = document.getElementById('rila-table-body');
  const countEl = document.getElementById('rila-count');
  const summaryEl = document.getElementById('rila-summary-cards');
  if (!tbody) return;

  // Summary cards
  if (summaryEl) {
    const allProducts = getRILAProducts();
    const allCaps = allProducts.flatMap(p => (p.accountOptions || []).map(o => o.capRate).filter(r => r != null));
    const allBuffers = allProducts.flatMap(p => (p.accountOptions || []).map(o => o.bufferLevel).filter(b => b != null));
    const avgCap = allCaps.length ? (allCaps.reduce((a, b) => a + b, 0) / allCaps.length) : 0;
    const avgBuffer = allBuffers.length ? (allBuffers.reduce((a, b) => a + b, 0) / allBuffers.length) : 0;
    const uncappedCount = allProducts.filter(p => (p.accountOptions || []).some(o => o.isUncapped)).length;

    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-rose-600 dark:text-rose-400">${allProducts.length}</div>
        <div class="text-xs text-slate-500 mt-1">Total Products</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${pct(avgCap)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Cap Rate</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${pct(avgBuffer, 0)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Buffer Level</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">${uncappedCount}</div>
        <div class="text-xs text-slate-500 mt-1">With Uncapped Options</div>
      </div>
    `;
  }

  tbody.innerHTML = products.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5">
        <input type="checkbox" class="compare-checkbox rounded border-slate-300 dark:border-slate-600" data-id="${p.id}" data-name="${p.name}" data-type="rila"
          ${state.compareItems.find(i => i.id === p.id) ? 'checked' : ''}
          onchange="this.checked ? window.app.addToCompare({id:'${p.id}',name:'${p.name}',type:'rila'}) : window.app.removeFromCompare('${p.id}')">
      </td>
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/rila/${p.id}'">
        <div class="font-medium text-rose-600 dark:text-rose-400 hover:underline">${p.name}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${p.topCap >= 15 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${p.topCap ? pct(p.topCap) : 'N/A'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.topParticipation ? pct(p.topParticipation, 0) : 'N/A'}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold text-rose-600 dark:text-rose-400">${p.maxBuffer ? pct(p.maxBuffer, 0) : 'N/A'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.term ? p.term + 'yr' : '-'}</td>
      <td class="px-3 py-2.5 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700">${p.indexCount}</span></td>
      <td class="px-3 py-2.5 text-center">${p.uncapped ? '<span class="text-emerald-500 font-semibold">✓</span>' : '<span class="text-slate-400">—</span>'}</td>
    </tr>
  `).join('');

  if (countEl) countEl.textContent = `Showing ${products.length} of ${getRILAProducts().length} RILA products`;
}
