import { getMYGAProducts } from '../data/index.js';
import { pct, currency, ratingBadge, verifyBadge, verifyBanner, statusBadge, statusBanner } from '../utils/formatters.js';

// MYGAs are carrier-issued fixed annuities (a single guaranteed rate for the
// term), so this explorer mirrors the FIA/RILA pattern but keys on guaranteedRate
// / termYears rather than index strategies.

let sortKey = 'guaranteedRate';
let sortDir = 'desc';
let filters = { minRate: 0, maxTerm: 20, maxSurrender: 20, minRating: 'all' };

const RATING_ORDER = ['A++', 'A+', 'A', 'A-', 'B++', 'B+'];

function getFilteredProducts() {
  let products = getMYGAProducts().map(p => ({
    ...p,
    amBest: p.carrier?.ratings?.amBest?.rating || 'NR',
    comdex: p.carrier?.ratings?.comdex || 0,
    carrierName: p.carrier?.shortName || ''
  }));

  if (filters.minRate > 0) products = products.filter(p => (p.guaranteedRate || 0) >= filters.minRate);
  if (filters.maxTerm < 20) products = products.filter(p => (p.termYears || 0) <= filters.maxTerm);
  if (filters.maxSurrender < 20) products = products.filter(p => (p.surrenderPeriod || 0) <= filters.maxSurrender);
  if (filters.minRating !== 'all') {
    const minIdx = RATING_ORDER.indexOf(filters.minRating);
    products = products.filter(p => { const idx = RATING_ORDER.indexOf(p.amBest); return idx >= 0 && idx <= minIdx; });
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

export function renderMYGAExplorer() {
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">MYGAs <span class="text-base font-normal text-slate-500 dark:text-slate-400">(Multi-Year Guaranteed Annuities)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Compare locked guaranteed rates, terms, and liquidity across fixed annuities</p>
        </div>
        <button onclick="document.getElementById('myga-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filters
        </button>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="myga-summary-cards"></div>

      <!-- Filters -->
      <div id="myga-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min Rate</label>
            <select id="mf-minRate" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="0">Any</option>
              <option value="4">4%+</option><option value="4.5">4.5%+</option><option value="5">5%+</option><option value="5.5">5.5%+</option><option value="6">6%+</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Term</label>
            <select id="mf-maxTerm" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="20">Any</option>
              <option value="3">3yr or less</option><option value="5">5yr or less</option><option value="7">7yr or less</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Max Surrender</label>
            <select id="mf-maxSurrender" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="20">Any</option>
              <option value="3">3yr or less</option><option value="5">5yr or less</option><option value="7">7yr or less</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Min AM Best</label>
            <select id="mf-rating" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
              <option value="all">Any</option><option value="A++">A++</option><option value="A+">A+ or better</option><option value="A">A or better</option><option value="A-">A- or better</option>
            </select>
          </div>
        </div>
        <button onclick="window._applyMYGAFilters()" class="mt-3 px-4 py-1.5 bg-cyan-600 text-white text-sm rounded-lg hover:bg-cyan-700 transition-colors">Apply Filters</button>
      </div>

      <!-- Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('name')">Product</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('carrierName')">Carrier</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('amBest')">Rating</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('guaranteedRate')">Guaranteed Rate <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('termYears')">Term</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('minimumPremium')">Min Premium</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortMYGA('surrenderPeriod')">Surrender</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">MVA</th>
              </tr>
            </thead>
            <tbody id="myga-table-body"></tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="myga-count"></div>
      </div>
    </div>
  `;

  window._sortMYGA = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = (key === 'name' || key === 'carrierName') ? 'asc' : 'desc'; }
    renderMYGATable();
  };

  window._applyMYGAFilters = () => {
    filters.minRate = parseFloat(document.getElementById('mf-minRate').value);
    filters.maxTerm = parseFloat(document.getElementById('mf-maxTerm').value);
    filters.maxSurrender = parseFloat(document.getElementById('mf-maxSurrender').value);
    filters.minRating = document.getElementById('mf-rating').value;
    renderMYGATable();
  };

  window._pageInit = () => renderMYGATable();

  return html;
}

export function renderMYGADetail(id) {
  const p = getMYGAProducts().find(x => x.id === id);
  if (!p) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Product not found</h2><a href="#/myga" class="text-cyan-500 hover:underline mt-2 inline-block">← Back to MYGA Explorer</a></div>`;

  const carrier = p.carrier;
  const schedule = Array.isArray(p.surrenderSchedule) ? p.surrenderSchedule.map(v => v + '%').join(', ') : 'N/A';

  return `
    <div class="space-y-6">
      <div class="flex items-start justify-between flex-wrap gap-3">
        <div>
          <a href="#/myga" class="text-sm text-slate-500 hover:text-cyan-500 transition-colors">← All MYGAs</a>
          <h1 class="text-2xl font-bold mt-1">${p.name}</h1>
          <p class="text-slate-500 dark:text-slate-400">
            ${carrier ? `<a href="#/carriers/${carrier.id}" class="text-cyan-600 dark:text-cyan-400 hover:underline">${carrier.shortName}</a>` : 'Unknown Carrier'}
            ${p.termYears ? ` · ${p.termYears}-Year Guarantee` : ''}
          </p>
        </div>
      </div>

      ${p.sourceUrl ? `
      <div>
        <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View Rate Source
        </a>
      </div>
      ` : ''}

      ${verifyBanner(p)}
      ${statusBanner(p)}

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold text-cyan-600 dark:text-cyan-400">${p.guaranteedRate != null ? pct(p.guaranteedRate) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Guaranteed Rate</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${p.termYears ? p.termYears + 'yr' : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Guarantee Term</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${p.minimumPremium ? currency(p.minimumPremium) : 'N/A'}</div>
          <div class="text-xs text-slate-500 mt-1">Min Premium</div>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
          <div class="text-2xl font-bold">${carrier ? ratingBadge(carrier.ratings?.amBest?.rating) : 'N/R'}</div>
          <div class="text-xs text-slate-500 mt-1">AM Best</div>
        </div>
      </div>

      <!-- Details + Highlights -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Product Details</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Maximum Issue Age</dt>
              <dd class="font-medium">${p.maximumIssueAge || 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Surrender Period</dt>
              <dd class="font-medium">${p.surrenderPeriod ? p.surrenderPeriod + ' yr' : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Surrender Schedule</dt>
              <dd class="font-medium text-right">${schedule}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Free Withdrawal</dt>
              <dd class="font-medium">${p.freeWithdrawalPercent ? p.freeWithdrawalPercent + '%' : 'N/A'}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-700">
              <dt class="text-slate-500">Market Value Adjustment</dt>
              <dd class="font-medium">${p.marketValueAdjustment ? 'Yes' : 'No'}</dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-slate-500">RMD-Friendly</dt>
              <dd class="font-medium">${p.rmdFriendly ? '<span class="text-emerald-600">Yes</span>' : 'No'}</dd>
            </div>
          </dl>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold text-lg mb-3">Highlights</h3>
          ${p.highlights && p.highlights.length ? `
            <ul class="space-y-2">
              ${p.highlights.map(h => `
                <li class="flex items-start gap-2 text-sm">
                  <svg class="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          ` : '<p class="text-sm text-slate-400">No highlights available</p>'}
          ${p.verificationSource ? `<p class="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">Source: ${p.verificationSource}</p>` : ''}
        </div>
      </div>

      ${carrier ? `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold text-lg mb-3">Carrier: ${carrier.name}</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><span class="text-slate-500">AM Best</span><div class="font-medium mt-0.5">${ratingBadge(carrier.ratings?.amBest?.rating)}</div></div>
          <div><span class="text-slate-500">COMDEX</span><div class="font-medium mt-0.5">${carrier.ratings?.comdex || 'N/A'}</div></div>
          <div><span class="text-slate-500">Total Assets</span><div class="font-medium mt-0.5">${carrier.totalAssets || 'N/A'}</div></div>
          <div><span class="text-slate-500">Founded</span><div class="font-medium mt-0.5">${carrier.foundedYear || 'N/A'}</div></div>
        </div>
        <a href="#/carriers/${carrier.id}" class="inline-block mt-3 text-sm text-cyan-600 dark:text-cyan-400 hover:underline">View full carrier profile →</a>
      </div>
      ` : ''}
    </div>
  `;
}

function renderMYGATable() {
  const products = getFilteredProducts();
  const tbody = document.getElementById('myga-table-body');
  const countEl = document.getElementById('myga-count');
  const summaryEl = document.getElementById('myga-summary-cards');
  if (!tbody) return;

  if (summaryEl) {
    const all = getMYGAProducts();
    const rates = all.map(p => p.guaranteedRate).filter(r => r != null);
    const topRate = rates.length ? Math.max(...rates) : 0;
    const avgRate = rates.length ? rates.reduce((a, b) => a + b, 0) / rates.length : 0;
    const carriersCount = new Set(all.map(p => p.carrierId)).size;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-cyan-600 dark:text-cyan-400">${all.length}</div>
        <div class="text-xs text-slate-500 mt-1">Total Products</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${pct(topRate)}</div>
        <div class="text-xs text-slate-500 mt-1">Top Rate</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${pct(avgRate)}</div>
        <div class="text-xs text-slate-500 mt-1">Avg Rate</div>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div class="text-2xl font-bold text-amber-600 dark:text-amber-400">${carriersCount}</div>
        <div class="text-xs text-slate-500 mt-1">Carriers</div>
      </div>
    `;
  }

  tbody.innerHTML = products.map(p => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5 cursor-pointer" onclick="location.hash='/myga/${p.id}'">
        <div class="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">${p.name}${verifyBadge(p)}${statusBadge(p)}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${p.carrierName}</td>
      <td class="px-3 py-2.5 text-center">${ratingBadge(p.amBest)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${p.guaranteedRate >= 5.5 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${p.guaranteedRate != null ? pct(p.guaranteedRate) : 'N/A'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.termYears ? p.termYears + 'yr' : '-'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.minimumPremium ? currency(p.minimumPremium) : '-'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${p.surrenderPeriod ? p.surrenderPeriod + 'yr' : '-'}</td>
      <td class="px-3 py-2.5 text-center">${p.marketValueAdjustment ? '<span class="text-amber-500 font-semibold">Yes</span>' : '<span class="text-slate-400">No</span>'}</td>
    </tr>
  `).join('');

  if (countEl) countEl.textContent = `Showing ${products.length} of ${getMYGAProducts().length} MYGA products`;
}
