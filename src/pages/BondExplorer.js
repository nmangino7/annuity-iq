import { getBonds } from '../data/index.js';
import { pct, verifyBadge, verifyBanner } from '../utils/formatters.js';

// Bonds are benchmark YIELD references (corporate + municipal), not carrier
// products — so this explorer has no carrier column and no index-strategy/cap
// columns. Corporate and municipal records share one table, distinguished by a
// type badge and a type filter. Muni rows additionally show a taxable-equivalent
// yield. Detail lookups resolve across both kinds via getBonds().

let sortKey = 'currentYield';
let sortDir = 'desc';
let filters = { type: 'all', minYield: 0 };

const typeBadge = (bondType) => bondType === 'muni'
  ? '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Muni</span>'
  : '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">Corp</span>';

function getFilteredBonds() {
  let bonds = getBonds();
  if (filters.type !== 'all') bonds = bonds.filter(b => b.bondType === filters.type);
  if (filters.minYield > 0) bonds = bonds.filter(b => (b.currentYield || 0) >= filters.minYield);

  bonds.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb || '').toLowerCase(); }
    if (va == null) va = -Infinity;
    if (vb == null) vb = -Infinity;
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });
  return bonds;
}

export function renderBondExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Bond Yields <span class="text-base font-normal text-slate-500 dark:text-slate-400">(Corporate &amp; Municipal)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Benchmark yields by credit tier and maturity — as-of references, not individual securities</p>
        </div>
        <button onclick="document.getElementById('bond-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filters
        </button>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="bond-summary-cards"></div>

      <!-- Filters -->
      <div id="bond-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Type</label>
            <select id="bf-type" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">All</option><option value="corp">Corporate</option><option value="muni">Municipal</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Yield</label>
            <select id="bf-minYield" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="3">3%+</option><option value="4">4%+</option><option value="5">5%+</option><option value="6">6%+</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyBondFilters()" class="mt-3 px-4 py-1.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortBond('name')">Benchmark</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortBond('bondType')">Type</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortBond('rating')">Rating</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Maturity</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortBond('currentYield')">Yield <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Taxable-Equiv*</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400">As Of</th>
              </tr>
            </thead>
            <tbody id="bond-table-body"></tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="bond-count"></div>
      </div>
      <p class="text-xs text-slate-400">*Taxable-equivalent yield shown for tax-exempt municipals at a 32% marginal bracket. Yields move daily — treat as as-of references.</p>
    </div>
  `;

  window._sortBond = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = (key === 'name' || key === 'bondType' || key === 'rating') ? 'asc' : 'desc'; }
    renderBondTable();
  };

  window._applyBondFilters = () => {
    filters.type = document.getElementById('bf-type').value;
    filters.minYield = parseFloat(document.getElementById('bf-minYield').value);
    renderBondTable();
  };

  window._pageInit = () => renderBondTable();

  return html;
}

export function renderBondDetail(id) {
  const b = getBonds().find(x => x.id === id);
  if (!b) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Benchmark not found</h2><a href="#/bonds" class="text-emerald-500 hover:underline mt-2 inline-block">← Back to Bond Yields</a></div>`;

  return `
    <div class="space-y-6">
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/bonds" class="text-sm text-slate-500 hover:text-emerald-500 transition-colors">← All Bond Yields</a>
          <div class="flex items-center gap-2 mt-1">
            <h1 class="text-2xl font-bold">${b.name}</h1>
            ${typeBadge(b.bondType)}
          </div>
          <p class="text-slate-500 dark:text-slate-400">${b.category || ''}${b.maturityBand ? ` · ${b.maturityBand}` : ''}</p>
        </div>
      </div>

      ${b.sourceUrl ? `
      <div>
        <a href="${b.sourceUrl}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View Yield Source
        </a>
      </div>
      ` : ''}

      ${verifyBanner(b)}

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${b.currentYield != null ? pct(b.currentYield) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Current Yield</div>
        </div>
        ${b.taxableEquivalentYield != null ? `
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${pct(b.taxableEquivalentYield)}</div>
          <div class="text-xs text-slate-500 mt-1">Taxable-Equiv (${b.taxBracket != null ? Math.round(b.taxBracket * 100) + '%' : ''} bracket)</div>
        </div>` : ''}
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${b.rating || 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Credit Rating</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${b.maturityBand || 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Maturity</div>
        </div>
      </div>

      <!-- Details + Highlights -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Reference Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Category</dt>
              <dd class="font-medium text-right">${b.category || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Rating</dt>
              <dd class="font-medium">${b.rating || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Maturity Band</dt>
              <dd class="font-medium">${b.maturityBand || 'N/A'}</dd>
            </div>
            ${b.taxBracket != null ? `
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Tax Treatment</dt>
              <dd class="font-medium">Federally tax-exempt</dd>
            </div>` : ''}
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">As-Of Date</dt>
              <dd class="font-medium">${b.asOfDate || 'N/A'}</dd>
            </div>
          </dl>
          ${b.verificationSource ? `<p class="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">Source: ${b.verificationSource}</p>` : ''}
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Highlights</h3>
          ${b.highlights && b.highlights.length ? `
            <ul class="space-y-2">
              ${b.highlights.map(h => `
                <li class="flex items-start gap-2 text-sm">
                  <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          ` : '<p class="text-sm text-slate-400">No highlights available</p>'}
        </div>
      </div>
    </div>
  `;
}

function renderBondTable() {
  const bonds = getFilteredBonds();
  const tbody = document.getElementById('bond-table-body');
  const countEl = document.getElementById('bond-count');
  const summaryEl = document.getElementById('bond-summary-cards');
  if (!tbody) return;

  if (summaryEl) {
    const all = getBonds();
    const corp = all.filter(b => b.bondType === 'corp');
    const muni = all.filter(b => b.bondType === 'muni');
    const yields = all.map(b => b.currentYield).filter(y => y != null);
    const topYield = yields.length ? Math.max(...yields) : 0;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${all.length}</div>
        <div class="text-xs text-slate-500 mt-1">Benchmarks</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-slate-600 dark:text-slate-300">${corp.length}</div>
        <div class="text-xs text-slate-500 mt-1">Corporate</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${muni.length}</div>
        <div class="text-xs text-slate-500 mt-1">Municipal</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${pct(topYield)}</div>
        <div class="text-xs text-slate-500 mt-1">Top Yield</div>
      </div>
    `;
  }

  tbody.innerHTML = bonds.map(b => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/bonds/${b.id}'">
        <div class="font-medium text-emerald-600 dark:text-emerald-400 hover:underline">${b.name}${verifyBadge(b)}</div>
      </td>
      <td class="px-3 py-2.5 text-center">${typeBadge(b.bondType)}</td>
      <td class="px-3 py-2.5 text-center font-medium">${b.rating || '-'}</td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${b.maturityBand || '-'}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold text-emerald-600 dark:text-emerald-400">${b.currentYield != null ? pct(b.currentYield) : '-'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${b.taxableEquivalentYield != null ? pct(b.taxableEquivalentYield) : '—'}</td>
      <td class="px-3 py-2.5 text-slate-500 text-xs">${b.asOfDate || '-'}</td>
    </tr>
  `).join('');

  if (countEl) countEl.textContent = `Showing ${bonds.length} of ${getBonds().length} benchmarks`;
}
