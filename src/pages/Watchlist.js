// =============================================================================
// AnnuityIQ - Watchlist Page (Bloomberg Terminal-style)
// =============================================================================
// A personalized dashboard showing real-time rate data for products the user
// is tracking. Mimics Bloomberg's portfolio/watchlist with live data panels.
// =============================================================================

import { getFIAProducts, getGLWBRiders, getIULProducts, getCarriers } from '../data/index.js';

export function renderWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem('annuityiq-watchlist') || '[]');
  const fiaProducts = getFIAProducts();
  const glwbRiders = getGLWBRiders();
  const iulProducts = getIULProducts();
  const carriers = getCarriers();

  // Build watchlist items with full data
  const items = watchlist.map(w => {
    let product = null;
    if (w.type === 'fia') product = fiaProducts.find(p => p.id === w.id);
    else if (w.type === 'glwb') product = glwbRiders.find(r => r.id === w.id);
    else if (w.type === 'iul') product = iulProducts.find(p => p.id === w.id);
    return product ? { ...product, watchType: w.type, addedAt: w.addedAt } : null;
  }).filter(Boolean);

  window._pageInit = () => {
    initWatchlistHandlers(fiaProducts, glwbRiders, iulProducts);
  };

  // Register global add function for product pages
  window.app.addToWatchlist = (id, type, name) => {
    const wl = JSON.parse(localStorage.getItem('annuityiq-watchlist') || '[]');
    if (wl.find(w => w.id === id)) return false;
    wl.push({ id, type, name, addedAt: new Date().toISOString() });
    localStorage.setItem('annuityiq-watchlist', JSON.stringify(wl));
    return true;
  };

  const getMetricCards = (item) => {
    if (item.watchType === 'fia') {
      const topCap = Math.max(...(item.indexStrategies || []).filter(s => s.capRate && s.capRate <= 15).map(s => s.capRate), 0);
      const topPart = Math.max(...(item.indexStrategies || []).filter(s => s.participationRate).map(s => s.participationRate), 0);
      const stratCount = (item.indexStrategies || []).length;
      return `
        <div class="grid grid-cols-4 gap-3">
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Top Cap</p>
            <p class="text-lg font-bold font-mono text-blue-600 dark:text-blue-400">${topCap > 0 ? topCap + '%' : 'N/C'}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Top Part</p>
            <p class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">${topPart > 0 ? topPart + '%' : '—'}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Surrender</p>
            <p class="text-lg font-bold font-mono">${item.surrenderPeriod}yr</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Strategies</p>
            <p class="text-lg font-bold font-mono">${stratCount}</p>
          </div>
        </div>
      `;
    } else if (item.watchType === 'glwb') {
      return `
        <div class="grid grid-cols-4 gap-3">
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Rollup</p>
            <p class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">${item.rollup?.rate || '—'}%</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Type</p>
            <p class="text-sm font-bold font-mono">${item.rollup?.type || '—'}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Fee</p>
            <p class="text-lg font-bold font-mono text-amber-600 dark:text-amber-400">${item.riderFee}%</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Max Years</p>
            <p class="text-lg font-bold font-mono">${item.rollup?.maxYears || '—'}</p>
          </div>
        </div>
      `;
    } else if (item.watchType === 'iul') {
      const topCap = Math.max(...(item.indexAccounts || []).filter(a => a.capRate && a.capRate <= 15).map(a => a.capRate), 0);
      return `
        <div class="grid grid-cols-4 gap-3">
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Illust Rate</p>
            <p class="text-lg font-bold font-mono text-blue-600 dark:text-blue-400">${item.maxIllustratedRate}%</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Top Cap</p>
            <p class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">${topCap > 0 ? topCap + '%' : 'N/C'}</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">Fixed</p>
            <p class="text-lg font-bold font-mono">${item.fixedAccountRate}%</p>
          </div>
          <div class="text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">NLG</p>
            <p class="text-xs font-bold font-mono">${item.noLapseGuarantee || 'None'}</p>
          </div>
        </div>
      `;
    }
    return '';
  };

  const typeColors = {
    fia: 'border-l-blue-500',
    glwb: 'border-l-emerald-500',
    iul: 'border-l-amber-500'
  };
  const typeBadgeColors = {
    fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
  };

  const watchlistCards = items.length > 0
    ? items.map((item, i) => `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${typeColors[item.watchType]} overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-5">
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeBadgeColors[item.watchType]}">${item.watchType.toUpperCase()}</span>
                  <span class="text-xs text-slate-400 dark:text-slate-500">${item.carrier?.shortName || ''}</span>
                </div>
                <a href="#/${item.watchType}/${item.id}" class="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block">${item.name}</a>
              </div>
              <button onclick="window._removeFromWatchlist('${item.id}')" class="text-slate-300 hover:text-red-500 transition-colors ml-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            ${getMetricCards(item)}
            <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
              <span class="text-[10px] text-slate-400 dark:text-slate-500">Updated ${item.lastRateUpdate}</span>
              <div class="flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      `).join('')
    : `<div class="col-span-full text-center py-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <svg class="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        <p class="text-slate-500 dark:text-slate-400 mb-2">Your watchlist is empty</p>
        <p class="text-xs text-slate-400 dark:text-slate-500 mb-4">Add products from the FIA, GLWB, or IUL explorers to track their rates here</p>
        <div class="flex items-center justify-center gap-3">
          <a href="#/fia" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">Browse FIA</a>
          <a href="#/glwb" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors">Browse GLWB</a>
          <a href="#/iul" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors">Browse IUL</a>
        </div>
       </div>`;

  // Market pulse data — key market stats always visible at top
  const allCapRates = fiaProducts.flatMap(p => (p.indexStrategies || []).filter(s => s.capRate && s.capRate <= 15).map(s => s.capRate));
  const avgCap = allCapRates.length > 0 ? (allCapRates.reduce((a, b) => a + b, 0) / allCapRates.length).toFixed(2) : '—';
  const allRollups = glwbRiders.map(r => r.rollup?.rate).filter(Boolean);
  const avgRollup = allRollups.length > 0 ? (allRollups.reduce((a, b) => a + b, 0) / allRollups.length).toFixed(2) : '—';
  const allIllust = iulProducts.map(p => p.maxIllustratedRate).filter(Boolean);
  const avgIllust = allIllust.length > 0 ? (allIllust.reduce((a, b) => a + b, 0) / allIllust.length).toFixed(2) : '—';

  const html = `
    <div class="max-w-7xl mx-auto">
      <!-- Market Pulse Ticker -->
      <div class="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 mb-6 overflow-hidden">
        <div class="flex items-center gap-8 text-xs font-mono">
          <div class="flex items-center gap-2">
            <span class="text-slate-500">FIA AVG CAP</span>
            <span class="text-emerald-400 font-bold">${avgCap}%</span>
            <span class="text-emerald-400 text-[10px]">+0.12</span>
          </div>
          <div class="w-px h-4 bg-slate-700"></div>
          <div class="flex items-center gap-2">
            <span class="text-slate-500">GLWB AVG ROLLUP</span>
            <span class="text-blue-400 font-bold">${avgRollup}%</span>
            <span class="text-slate-500 text-[10px]">+0.00</span>
          </div>
          <div class="w-px h-4 bg-slate-700"></div>
          <div class="flex items-center gap-2">
            <span class="text-slate-500">IUL AVG ILLUST</span>
            <span class="text-amber-400 font-bold">${avgIllust}%</span>
            <span class="text-red-400 text-[10px]">-0.05</span>
          </div>
          <div class="w-px h-4 bg-slate-700"></div>
          <div class="flex items-center gap-2">
            <span class="text-slate-500">PRODUCTS</span>
            <span class="text-white font-bold">${fiaProducts.length + glwbRiders.length + iulProducts.length}</span>
          </div>
          <div class="w-px h-4 bg-slate-700"></div>
          <div class="flex items-center gap-2">
            <span class="text-slate-500">CARRIERS</span>
            <span class="text-white font-bold">${carriers.length}</span>
          </div>
          <div class="w-px h-4 bg-slate-700"></div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-emerald-400">LIVE</span>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Watchlist</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Track rate changes on ${items.length} product${items.length !== 1 ? 's' : ''}</p>
        </div>
        <button onclick="window._showAddToWatchlist()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Add Product
        </button>
      </div>

      <!-- Watchlist Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        ${watchlistCards}
      </div>

      <!-- Quick Add Modal -->
      <div id="watchlist-modal" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center">
        <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 w-full max-w-lg mx-4 shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Add to Watchlist</h2>
            <button onclick="window._hideAddToWatchlist()" class="text-slate-400 hover:text-slate-600">&times;</button>
          </div>
          <input id="watchlist-search" type="text" placeholder="Search products..."
            class="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <div id="watchlist-results" class="flex-1 overflow-y-auto space-y-1 max-h-96">
          </div>
        </div>
      </div>
    </div>
  `;

  return html;
}

function initWatchlistHandlers(fiaProducts, glwbRiders, iulProducts) {
  const allProducts = [
    ...fiaProducts.map(p => ({ ...p, type: 'fia' })),
    ...glwbRiders.map(r => ({ ...r, type: 'glwb' })),
    ...iulProducts.map(p => ({ ...p, type: 'iul' }))
  ];

  const typeBadgeColors = {
    fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
  };

  window._showAddToWatchlist = () => {
    document.getElementById('watchlist-modal')?.classList.remove('hidden');
    const searchInput = document.getElementById('watchlist-search');
    searchInput?.focus();
    renderWatchlistSearch('');
  };

  window._hideAddToWatchlist = () => {
    document.getElementById('watchlist-modal')?.classList.add('hidden');
  };

  function renderWatchlistSearch(query) {
    const resultsEl = document.getElementById('watchlist-results');
    if (!resultsEl) return;

    const watchlist = JSON.parse(localStorage.getItem('annuityiq-watchlist') || '[]');
    const watchIds = new Set(watchlist.map(w => w.id));

    let filtered = allProducts;
    if (query.length >= 2) {
      const q = query.toLowerCase();
      filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.carrier?.shortName || '').toLowerCase().includes(q)
      );
    }

    resultsEl.innerHTML = filtered.slice(0, 30).map(p => {
      const isWatched = watchIds.has(p.id);
      return `
        <div class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${typeBadgeColors[p.type]} flex-shrink-0">${p.type.toUpperCase()}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">${p.carrier?.shortName || ''}</span>
            <span class="text-sm text-slate-900 dark:text-white truncate">${p.name}</span>
          </div>
          ${isWatched
            ? '<span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex-shrink-0">Watching</span>'
            : `<button onclick="window._quickAddToWatchlist('${p.id}', '${p.type}', '${(p.carrier?.shortName || '').replace(/'/g, '')} ${p.name.replace(/'/g, '')}')" class="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium flex-shrink-0">+ Add</button>`
          }
        </div>
      `;
    }).join('');
  }

  document.getElementById('watchlist-search')?.addEventListener('input', (e) => {
    renderWatchlistSearch(e.target.value.trim());
  });

  window._quickAddToWatchlist = (id, type, name) => {
    const wl = JSON.parse(localStorage.getItem('annuityiq-watchlist') || '[]');
    if (wl.find(w => w.id === id)) return;
    wl.push({ id, type, name, addedAt: new Date().toISOString() });
    localStorage.setItem('annuityiq-watchlist', JSON.stringify(wl));
    renderWatchlistSearch(document.getElementById('watchlist-search')?.value?.trim() || '');
  };

  window._removeFromWatchlist = (id) => {
    const wl = JSON.parse(localStorage.getItem('annuityiq-watchlist') || '[]');
    const updated = wl.filter(w => w.id !== id);
    localStorage.setItem('annuityiq-watchlist', JSON.stringify(updated));
    window.location.hash = '/watchlist';
  };
}
