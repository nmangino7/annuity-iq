// =============================================================================
// AnnuityIQ - Rate Screener (Bloomberg Terminal-style)
// =============================================================================
// Multi-criteria product screener with real-time filtering.
// Filter across cap rates, participation rates, surrender periods, carriers,
// premium bonuses, and more. Results update instantly like a terminal.
// =============================================================================

import { getFIAProducts, getGLWBRiders, getIULProducts, getRILAProducts, getVAProducts, getVULProducts, getCarriers } from '../data/index.js';

export function renderScreener() {
  const fiaProducts = getFIAProducts();
  const glwbRiders = getGLWBRiders();
  const iulProducts = getIULProducts();
  const rilaProducts = getRILAProducts();
  const vaProducts = getVAProducts();
  const vulProducts = getVULProducts();
  const carriers = getCarriers();

  window._pageInit = () => {
    initScreenerHandlers(fiaProducts, glwbRiders, iulProducts, rilaProducts, vaProducts, vulProducts, carriers);
  };

  // Build carrier options
  const carrierOptions = carriers.map(c => `<option value="${c.id}">${c.shortName}</option>`).join('');

  const html = `
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            Rate Screener
            <span class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">PRO</span>
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Filter ${fiaProducts.length + glwbRiders.length + iulProducts.length + rilaProducts.length + vaProducts.length + vulProducts.length} products across ${carriers.length} carriers</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window._resetScreener()" class="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">Reset Filters</button>
          <button onclick="window._exportScreenerCSV()" class="px-4 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Export
          </button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 mb-6">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <!-- Product Type -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Type</label>
            <select id="scr-type" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="all">All Products</option>
              <option value="fia">FIA Only</option>
              <option value="glwb">GLWB Only</option>
              <option value="iul">IUL Only</option>
              <option value="rila">RILA Only</option>
              <option value="va">VA Only</option>
              <option value="vul">VUL Only</option>
            </select>
          </div>

          <!-- Carrier -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Carrier</label>
            <select id="scr-carrier" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="all">All Carriers</option>
              ${carrierOptions}
            </select>
          </div>

          <!-- Min Cap Rate -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Min Cap Rate</label>
            <input id="scr-min-cap" type="number" step="0.5" placeholder="e.g. 8.0" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Max Surrender Period -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Max Surrender</label>
            <select id="scr-max-surrender" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="any">Any</option>
              <option value="5">5 years</option>
              <option value="7">7 years</option>
              <option value="10">10 years</option>
              <option value="14">14 years</option>
            </select>
          </div>

          <!-- Min Participation Rate -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Min Part Rate</label>
            <input id="scr-min-part" type="number" step="10" placeholder="e.g. 150" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Has Premium Bonus -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Bonus</label>
            <select id="scr-bonus" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="any">Any</option>
              <option value="yes">Has Bonus</option>
              <option value="no">No Bonus</option>
            </select>
          </div>
        </div>

        <!-- Second row of filters -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          <!-- AM Best Rating -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">AM Best Min</label>
            <select id="scr-am-best" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="any">Any</option>
              <option value="A++">A++ (Superior)</option>
              <option value="A+">A+ (Superior)</option>
              <option value="A">A (Excellent)</option>
              <option value="A-">A- (Excellent)</option>
            </select>
          </div>

          <!-- COMDEX Min -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Min COMDEX</label>
            <input id="scr-min-comdex" type="number" step="5" placeholder="e.g. 85" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Income Rider -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Income Rider</label>
            <select id="scr-income" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="any">Any</option>
              <option value="yes">Available</option>
              <option value="no">Not Available</option>
            </select>
          </div>

          <!-- Min Rollup (GLWB) -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Min Rollup %</label>
            <input id="scr-min-rollup" type="number" step="0.5" placeholder="e.g. 6.0" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Max Rider Fee -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Max Rider Fee</label>
            <input id="scr-max-fee" type="number" step="0.1" placeholder="e.g. 1.2" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500">
          </div>

          <!-- Sort By -->
          <div>
            <label class="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Sort By</label>
            <select id="scr-sort" onchange="window._applyScreener()"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
              <option value="cap-desc">Cap Rate (High → Low)</option>
              <option value="cap-asc">Cap Rate (Low → High)</option>
              <option value="part-desc">Part Rate (High → Low)</option>
              <option value="surrender-asc">Surrender (Short → Long)</option>
              <option value="carrier-asc">Carrier (A → Z)</option>
              <option value="comdex-desc">COMDEX (High → Low)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results count -->
      <div class="flex items-center justify-between mb-4">
        <p id="scr-count" class="text-sm text-slate-500 dark:text-slate-400 font-mono"></p>
        <div class="flex items-center gap-2">
          <button id="scr-view-table" onclick="window._setScreenerView('table')" class="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <svg class="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </button>
          <button id="scr-view-cards" onclick="window._setScreenerView('cards')" class="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <svg class="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </button>
        </div>
      </div>

      <!-- Results Table -->
      <div id="scr-results" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="p-12 text-center text-slate-500">
          <p>Adjust filters above to screen products</p>
        </div>
      </div>
    </div>
  `;

  return html;
}

function initScreenerHandlers(fiaProducts, glwbRiders, iulProducts, rilaProducts, vaProducts, vulProducts, carriers) {
  const carrierMap = new Map(carriers.map(c => [c.id, c]));

  const amBestRanking = { 'A++': 1, 'A+': 2, 'A': 3, 'A-': 4, 'B++': 5, 'B+': 6, 'B': 7 };

  let currentView = 'table';

  window._setScreenerView = (view) => {
    currentView = view;
    window._applyScreener();
  };

  window._resetScreener = () => {
    document.getElementById('scr-type').value = 'all';
    document.getElementById('scr-carrier').value = 'all';
    document.getElementById('scr-min-cap').value = '';
    document.getElementById('scr-max-surrender').value = 'any';
    document.getElementById('scr-min-part').value = '';
    document.getElementById('scr-bonus').value = 'any';
    document.getElementById('scr-am-best').value = 'any';
    document.getElementById('scr-min-comdex').value = '';
    document.getElementById('scr-income').value = 'any';
    document.getElementById('scr-min-rollup').value = '';
    document.getElementById('scr-max-fee').value = '';
    document.getElementById('scr-sort').value = 'cap-desc';
    window._applyScreener();
  };

  window._applyScreener = () => {
    const type = document.getElementById('scr-type')?.value || 'all';
    const carrierId = document.getElementById('scr-carrier')?.value || 'all';
    const minCap = parseFloat(document.getElementById('scr-min-cap')?.value) || 0;
    const maxSurrender = document.getElementById('scr-max-surrender')?.value || 'any';
    const minPart = parseFloat(document.getElementById('scr-min-part')?.value) || 0;
    const bonus = document.getElementById('scr-bonus')?.value || 'any';
    const amBest = document.getElementById('scr-am-best')?.value || 'any';
    const minComdex = parseFloat(document.getElementById('scr-min-comdex')?.value) || 0;
    const income = document.getElementById('scr-income')?.value || 'any';
    const minRollup = parseFloat(document.getElementById('scr-min-rollup')?.value) || 0;
    const maxFee = parseFloat(document.getElementById('scr-max-fee')?.value) || 999;
    const sort = document.getElementById('scr-sort')?.value || 'cap-desc';

    // Build unified product list
    let products = [];

    if (type === 'all' || type === 'fia') {
      products.push(...fiaProducts.map(p => {
        const topCap = Math.max(...(p.indexStrategies || []).filter(s => s.capRate && s.capRate <= 15).map(s => s.capRate), 0);
        const topPart = Math.max(...(p.indexStrategies || []).filter(s => s.participationRate).map(s => s.participationRate), 0);
        return { ...p, productType: 'fia', topCap, topPart, rollupRate: null, fee: null };
      }));
    }

    if (type === 'all' || type === 'glwb') {
      products.push(...glwbRiders.map(r => ({
        ...r,
        productType: 'glwb',
        topCap: 0,
        topPart: 0,
        rollupRate: r.rollup?.rate || 0,
        fee: r.riderFee || 0,
        surrenderPeriod: null,
        premiumBonus: 0
      })));
    }

    if (type === 'all' || type === 'iul') {
      products.push(...iulProducts.map(p => {
        const topCap = Math.max(...(p.indexAccounts || []).filter(a => a.capRate && a.capRate <= 15).map(a => a.capRate), 0);
        const topPart = Math.max(...(p.indexAccounts || []).filter(a => a.participationRate).map(a => a.participationRate), 0);
        return { ...p, productType: 'iul', topCap, topPart, rollupRate: null, fee: null, surrenderPeriod: null, premiumBonus: 0 };
      }));
    }

    if (type === 'all' || type === 'rila') {
      products.push(...rilaProducts.map(p => {
        const topCap = Math.max(...(p.accountOptions || []).filter(o => o.capRate && o.capRate <= 30).map(o => o.capRate), 0);
        const topPart = Math.max(...(p.accountOptions || []).filter(o => o.participationRate).map(o => o.participationRate), 0);
        const maxBuffer = Math.max(...(p.accountOptions || []).filter(o => o.bufferLevel).map(o => o.bufferLevel), 0);
        return { ...p, productType: 'rila', topCap, topPart, maxBuffer, rollupRate: null, fee: null, surrenderPeriod: p.term || null, premiumBonus: 0 };
      }));
    }

    if (type === 'all' || type === 'va') {
      products.push(...vaProducts.map(p => ({
        ...p, productType: 'va', topCap: 0, topPart: 0, rollupRate: null,
        fee: p.totalAnnualCharge || p.meCharge || 0,
        surrenderPeriod: p.surrenderPeriod || null, premiumBonus: 0
      })));
    }

    if (type === 'all' || type === 'vul') {
      products.push(...vulProducts.map(p => ({
        ...p, productType: 'vul', topCap: 0, topPart: 0, rollupRate: null,
        fee: p.meCharge || 0,
        surrenderPeriod: p.surrenderPeriod || null, premiumBonus: 0
      })));
    }

    // Apply filters
    products = products.filter(p => {
      const carrier = carrierMap.get(p.carrierId);

      if (carrierId !== 'all' && p.carrierId !== carrierId) return false;
      if (minCap > 0 && p.topCap < minCap) return false;
      if (maxSurrender !== 'any' && p.surrenderPeriod && p.surrenderPeriod > parseInt(maxSurrender)) return false;
      if (minPart > 0 && p.topPart < minPart) return false;
      if (bonus === 'yes' && (!p.premiumBonus || p.premiumBonus <= 0)) return false;
      if (bonus === 'no' && p.premiumBonus > 0) return false;
      if (amBest !== 'any' && carrier) {
        const rating = carrier.ratings?.amBest?.rating;
        if (!rating || (amBestRanking[rating] || 99) > (amBestRanking[amBest] || 99)) return false;
      }
      if (minComdex > 0 && carrier) {
        if (!carrier.ratings?.comdex || carrier.ratings.comdex < minComdex) return false;
      }
      if (income === 'yes' && p.productType === 'fia' && !p.incomeRiderAvailable) return false;
      if (income === 'no' && p.productType === 'fia' && p.incomeRiderAvailable) return false;
      if (minRollup > 0 && p.productType === 'glwb' && (p.rollupRate || 0) < minRollup) return false;
      if (maxFee < 999 && p.productType === 'glwb' && (p.fee || 0) > maxFee) return false;

      return true;
    });

    // Sort
    switch (sort) {
      case 'cap-desc': products.sort((a, b) => b.topCap - a.topCap); break;
      case 'cap-asc': products.sort((a, b) => a.topCap - b.topCap); break;
      case 'part-desc': products.sort((a, b) => b.topPart - a.topPart); break;
      case 'surrender-asc': products.sort((a, b) => (a.surrenderPeriod || 99) - (b.surrenderPeriod || 99)); break;
      case 'carrier-asc': products.sort((a, b) => (a.carrier?.shortName || '').localeCompare(b.carrier?.shortName || '')); break;
      case 'comdex-desc': products.sort((a, b) => {
        const aComdex = carrierMap.get(a.carrierId)?.ratings?.comdex || 0;
        const bComdex = carrierMap.get(b.carrierId)?.ratings?.comdex || 0;
        return bComdex - aComdex;
      }); break;
    }

    // Update count
    const countEl = document.getElementById('scr-count');
    if (countEl) countEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''} found`;

    // Render results
    const resultsEl = document.getElementById('scr-results');
    if (!resultsEl) return;

    if (products.length === 0) {
      resultsEl.innerHTML = '<div class="p-12 text-center text-slate-500"><p>No products match your criteria</p><p class="text-xs mt-2">Try relaxing your filters</p></div>';
      return;
    }

    const typeBadgeColors = {
      fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
      rila: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300',
      va: 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300',
      vul: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300'
    };

    // Table view
    const rows = products.slice(0, 100).map(p => {
      const carrier = carrierMap.get(p.carrierId);
      return `
        <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <td class="py-2.5 px-3">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeBadgeColors[p.productType]}">${p.productType.toUpperCase()}</span>
          </td>
          <td class="py-2.5 px-3 text-xs text-slate-500 dark:text-slate-400">${carrier?.shortName || ''}</td>
          <td class="py-2.5 px-3">
            <a href="#/${p.productType}/${p.id}" class="text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${p.name}</a>
          </td>
          <td class="py-2.5 px-3 text-sm font-mono font-bold ${p.topCap > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}">${p.topCap > 0 ? p.topCap + '%' : '—'}</td>
          <td class="py-2.5 px-3 text-sm font-mono ${p.topPart > 0 ? '' : 'text-slate-400'}">${p.topPart > 0 ? p.topPart + '%' : '—'}</td>
          <td class="py-2.5 px-3 text-sm font-mono">${p.surrenderPeriod ? p.surrenderPeriod + 'yr' : '—'}</td>
          <td class="py-2.5 px-3 text-sm font-mono">${p.rollupRate ? p.rollupRate + '%' : p.productType === 'iul' ? (p.maxIllustratedRate ? p.maxIllustratedRate + '%' : '—') : '—'}</td>
          <td class="py-2.5 px-3 text-xs text-slate-400 dark:text-slate-500">${carrier?.ratings?.amBest?.rating || '—'}</td>
          <td class="py-2.5 px-3 text-xs font-mono text-slate-500 dark:text-slate-400">${carrier?.ratings?.comdex || '—'}</td>
        </tr>
      `;
    }).join('');

    resultsEl.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full data-table">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase w-16">Type</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Carrier</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Product</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Cap</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Part</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Term</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Rate</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">AM Best</th>
              <th class="text-left py-2.5 px-3 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">COMDEX</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${products.length > 100 ? '<div class="p-3 text-center text-xs text-slate-400">Showing first 100 of ' + products.length + ' results</div>' : ''}
    `;

    // Store for export
    window._screenerResults = products;
  };

  window._exportScreenerCSV = () => {
    const products = window._screenerResults || [];
    if (products.length === 0) return;

    let csv = 'Type,Carrier,Product,Cap Rate,Part Rate,Surrender,Rate/Rollup,AM Best,COMDEX\n';
    products.forEach(p => {
      const carrier = carrierMap.get(p.carrierId);
      csv += `${p.productType.toUpperCase()},"${carrier?.shortName || ''}","${p.name}",${p.topCap || ''},${p.topPart || ''},${p.surrenderPeriod || ''},${p.rollupRate || p.maxIllustratedRate || ''},"${carrier?.ratings?.amBest?.rating || ''}",${carrier?.ratings?.comdex || ''}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `annuityiq-screener-${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  // Auto-run screener on load
  window._applyScreener();
}
