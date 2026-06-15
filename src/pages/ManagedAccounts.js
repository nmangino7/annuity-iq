import { getManagedAccounts } from '../data/index.js';
import { pct, currency, verifyBadge, verifyBanner } from '../utils/formatters.js';

// Managed Accounts (SMA / model portfolios). Owner-provided strategist menu —
// no carrier, returns-based (gross & net). Functional explorer + detail; the
// data set is large (800+ models) so the table is filterable and sortable.

let sortKey = 'netY1';
let sortDir = 'desc';
let filters = { q: '', assetClass: 'all', modelType: 'all', category: 'all', esg: false, taxAware: false };

const num = (v) => (v == null ? '—' : pct(v));        // value already in percent
const rat = (v) => (v == null ? '—' : (+v).toFixed(2)); // raw ratio (beta/corr)

function rows() {
  return getManagedAccounts().map(a => ({
    ...a,
    netYtd: a.returnsNet?.ytd, netY1: a.returnsNet?.y1, netY3: a.returnsNet?.y3,
    netY5: a.returnsNet?.y5, grossY1: a.returnsGross?.y1,
  }));
}

function distinct(field) {
  return [...new Set(getManagedAccounts().map(a => a[field]).filter(Boolean))].sort();
}

function getFiltered() {
  let list = rows();
  const q = filters.q.trim().toLowerCase();
  if (q) list = list.filter(a => (`${a.firm} ${a.modelName}`).toLowerCase().includes(q));
  if (filters.assetClass !== 'all') list = list.filter(a => a.assetClass === filters.assetClass);
  if (filters.modelType !== 'all') list = list.filter(a => a.modelType === filters.modelType);
  if (filters.category !== 'all') list = list.filter(a => a.investmentCategory === filters.category);
  if (filters.esg) list = list.filter(a => a.esg);
  if (filters.taxAware) list = list.filter(a => a.taxAware);

  list.sort((x, y) => {
    let a = x[sortKey], b = y[sortKey];
    if (typeof a === 'string') { a = a.toLowerCase(); b = (b || '').toLowerCase(); }
    if (a == null) a = -Infinity;
    if (b == null) b = -Infinity;
    if (a < b) return sortDir === 'asc' ? -1 : 1;
    if (a > b) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });
  return list;
}

const opts = (arr, sel) => ['<option value="all">All</option>']
  .concat(arr.map(v => `<option value="${v}"${v === sel ? ' selected' : ''}>${v}</option>`)).join('');

export function renderManagedAccountsExplorer() {
  const all = getManagedAccounts();
  const html = `
    <div class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 class="text-2xl font-bold">Managed Accounts <span class="text-base font-normal text-slate-500 dark:text-slate-400">(SMA / Model Portfolios)</span></h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">${all.length} strategist models across ${distinct('firm').length} firms · gross &amp; net performance as of Apr 30, 2026</p>
        </div>
        <button onclick="document.getElementById('ma-filters').classList.toggle('hidden')" class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filters
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3" id="ma-summary"></div>

      <div id="ma-filters" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hidden">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="lg:col-span-2">
            <label class="block text-xs font-medium text-slate-500 mb-1">Search firm / model</label>
            <input id="maf-q" type="text" placeholder="e.g. Vanguard, BlackRock, Income…" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Asset Class</label>
            <select id="maf-asset" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">${opts(distinct('assetClass'), filters.assetClass)}</select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Model Type</label>
            <select id="maf-type" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">${opts(distinct('modelType'), filters.modelType)}</select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Investment Category</label>
            <select id="maf-cat" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm">${opts(distinct('investmentCategory'), filters.category)}</select>
          </div>
          <div class="flex items-end gap-4">
            <label class="flex items-center gap-2 text-sm"><input id="maf-esg" type="checkbox" class="rounded border-slate-300 dark:border-slate-600"> ESG</label>
            <label class="flex items-center gap-2 text-sm"><input id="maf-tax" type="checkbox" class="rounded border-slate-300 dark:border-slate-600"> Tax-Aware</label>
          </div>
        </div>
        <button onclick="window._applyManaged()" class="mt-3 px-4 py-1.5 bg-fuchsia-600 text-white text-sm rounded-lg hover:bg-fuchsia-700 transition-colors">Apply Filters</button>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('modelName')">Model</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('firm')">Firm</th>
                <th class="text-left px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Asset Class</th>
                <th class="text-center px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Type</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('riskScore')">Risk</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('netYtd')">Net YTD</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('netY1')">Net 1Y <span class="text-[10px]">&#9660;</span></th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('netY3')">Net 3Y</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('netY5')">Net 5Y</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400 sortable" onclick="window._sortManaged('expenseRatio')">Exp</th>
                <th class="text-right px-3 py-3 font-medium text-slate-500 dark:text-slate-400">Min</th>
              </tr>
            </thead>
            <tbody id="ma-body"></tbody>
          </table>
        </div>
        <div class="px-4 py-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400" id="ma-count"></div>
      </div>
      <p class="text-xs text-slate-400">Performance is owner-provided (OPS Strategist Lookup), net = after model/strategist fees, as of Apr 30, 2026. Past performance does not guarantee future results.</p>
    </div>
  `;

  window._sortManaged = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = (key === 'modelName' || key === 'firm') ? 'asc' : 'desc'; }
    renderManagedTable();
  };
  window._applyManaged = () => {
    filters.q = document.getElementById('maf-q').value;
    filters.assetClass = document.getElementById('maf-asset').value;
    filters.modelType = document.getElementById('maf-type').value;
    filters.category = document.getElementById('maf-cat').value;
    filters.esg = document.getElementById('maf-esg').checked;
    filters.taxAware = document.getElementById('maf-tax').checked;
    renderManagedTable();
  };
  window._pageInit = () => renderManagedTable();
  return html;
}

function renderManagedTable() {
  const list = getFiltered();
  const tbody = document.getElementById('ma-body');
  const countEl = document.getElementById('ma-count');
  const summaryEl = document.getElementById('ma-summary');
  if (!tbody) return;

  if (summaryEl) {
    const all = getManagedAccounts();
    const y1 = all.map(a => a.returnsNet?.y1).filter(v => v != null);
    const avg = y1.length ? (y1.reduce((s, v) => s + v, 0) / y1.length) : 0;
    summaryEl.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"><div class="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400">${all.length}</div><div class="text-xs text-slate-500 mt-1">Models</div></div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"><div class="text-2xl font-bold">${distinct('firm').length}</div><div class="text-xs text-slate-500 mt-1">Strategist Firms</div></div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"><div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${pct(avg)}</div><div class="text-xs text-slate-500 mt-1">Avg Net 1Y</div></div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"><div class="text-2xl font-bold">${all.filter(a => a.esg).length} / ${all.filter(a => a.taxAware).length}</div><div class="text-xs text-slate-500 mt-1">ESG / Tax-Aware</div></div>
    `;
  }

  tbody.innerHTML = list.map(a => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30">
      <td class="px-3 py-2.5 cursor-pointer max-w-xs" onclick="location.hash='/managed/${a.id}'">
        <div class="font-medium text-fuchsia-600 dark:text-fuchsia-400 hover:underline truncate">${a.modelName}${verifyBadge(a)}</div>
        <div class="text-[11px] text-slate-400">${[a.esg ? 'ESG' : '', a.taxAware ? 'Tax-Aware' : ''].filter(Boolean).join(' · ')}</div>
      </td>
      <td class="px-3 py-2.5 text-slate-600 dark:text-slate-300">${a.firm}</td>
      <td class="px-3 py-2.5 text-slate-500 text-xs">${a.assetClass || '—'}</td>
      <td class="px-3 py-2.5 text-center text-xs">${a.modelType || '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono">${a.riskScore ?? '—'}</td>
      <td class="px-3 py-2.5 text-right font-mono ${a.netYtd < 0 ? 'text-red-600 dark:text-red-400' : ''}">${num(a.netYtd)}</td>
      <td class="px-3 py-2.5 text-right font-mono font-semibold ${a.netY1 < 0 ? 'text-red-600 dark:text-red-400' : ''}">${num(a.netY1)}</td>
      <td class="px-3 py-2.5 text-right font-mono ${a.netY3 < 0 ? 'text-red-600 dark:text-red-400' : ''}">${num(a.netY3)}</td>
      <td class="px-3 py-2.5 text-right font-mono ${a.netY5 < 0 ? 'text-red-600 dark:text-red-400' : ''}">${num(a.netY5)}</td>
      <td class="px-3 py-2.5 text-right font-mono text-slate-500">${num(a.expenseRatio)}</td>
      <td class="px-3 py-2.5 text-right font-mono text-slate-500">${a.minimumPurchase != null ? currency(a.minimumPurchase) : '—'}</td>
    </tr>
  `).join('');
  if (countEl) countEl.textContent = `Showing ${list.length} of ${getManagedAccounts().length} models`;
}

export function renderManagedAccountDetail(id) {
  const a = getManagedAccounts().find(x => x.id === id);
  if (!a) return `<div class="text-center py-20"><h2 class="text-xl font-bold">Model not found</h2><a href="#/managed" class="text-fuchsia-500 hover:underline mt-2 inline-block">← Back to Managed Accounts</a></div>`;

  const chip = (t) => `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${t}</span>`;
  const PERIODS = [['ytd','YTD'],['m1','1 Mo'],['m3','3 Mo'],['m6','6 Mo'],['y1','1 Yr'],['y2','2 Yr'],['y3','3 Yr'],['y5','5 Yr'],['y10','10 Yr'],['sinceInception','Since Incept']];
  const g = a.returnsGross || {}, n = a.returnsNet || {}, rk = a.risk || {}, cal = a.calendarNet || {};
  const years = Object.keys(cal).sort();

  const perfRows = PERIODS.map(([k, lbl]) => `
    <tr class="border-t border-slate-100 dark:border-slate-700">
      <td class="px-4 py-2 text-slate-600 dark:text-slate-300">${lbl}</td>
      <td class="px-4 py-2 text-right font-mono ${g[k] < 0 ? 'text-red-500' : ''}">${num(g[k])}</td>
      <td class="px-4 py-2 text-right font-mono font-semibold ${n[k] < 0 ? 'text-red-500' : ''}">${num(n[k])}</td>
    </tr>`).join('');

  return `
    <div class="space-y-6">
      <div>
        <a href="#/managed" class="text-sm text-slate-500 hover:text-fuchsia-500 transition-colors">← All Managed Accounts</a>
        <div class="flex items-center gap-2 mt-1 flex-wrap">
          <h1 class="text-2xl font-bold">${a.modelName}${verifyBadge(a)}</h1>
          ${a.esg ? chip('ESG') : ''}${a.taxAware ? chip('Tax-Aware') : ''}
        </div>
        <p class="text-slate-500 dark:text-slate-400">${a.firm}${a.investmentCategory ? ` · ${a.investmentCategory}` : ''}</p>
      </div>

      ${verifyBanner(a)}

      <!-- Key metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center"><div class="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400">${num(n.y1)}</div><div class="text-xs text-slate-500 mt-1">Net 1-Year</div></div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center"><div class="text-2xl font-bold">${num(n.y5)}</div><div class="text-xs text-slate-500 mt-1">Net 5-Year (ann.)</div></div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center"><div class="text-2xl font-bold">${a.riskScore ?? '—'}</div><div class="text-xs text-slate-500 mt-1">Risk Score</div></div>
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center"><div class="text-2xl font-bold">${num(a.estimatedYield)}</div><div class="text-xs text-slate-500 mt-1">Est. Yield</div></div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <!-- Performance -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700"><h3 class="font-semibold">Performance <span class="text-xs font-normal text-slate-400">as of ${a.asOfDate}</span></h3></div>
          <table class="w-full text-sm">
            <thead><tr class="bg-slate-50 dark:bg-slate-700/50"><th class="text-left px-4 py-2 font-medium text-slate-500">Period</th><th class="text-right px-4 py-2 font-medium text-slate-500">Gross</th><th class="text-right px-4 py-2 font-medium text-slate-500">Net</th></tr></thead>
            <tbody>${perfRows}</tbody>
          </table>
        </div>

        <!-- Risk + details -->
        <div class="space-y-4">
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold mb-3">Risk Statistics</h3>
            <dl class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Std Dev 3Y</dt><dd class="font-mono">${num(rk.stdDev3y)}</dd></div>
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Std Dev 5Y</dt><dd class="font-mono">${num(rk.stdDev5y)}</dd></div>
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Beta 3Y</dt><dd class="font-mono">${rat(rk.beta3y)}</dd></div>
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Beta 5Y</dt><dd class="font-mono">${rat(rk.beta5y)}</dd></div>
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Correlation 3Y</dt><dd class="font-mono">${rat(rk.corr3y)}</dd></div>
              <div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">Return ÷ Risk 5Y</dt><dd class="font-mono">${rat(rk.retRisk5y)}</dd></div>
            </dl>
          </div>
          <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 class="font-semibold mb-3">Details</h3>
            <dl class="space-y-1.5 text-sm">
              ${[
                ['Asset Class', a.assetClass], ['Morningstar Category', a.morningstarCategory],
                ['Benchmark', a.benchmark], ['Firm Type', a.firmType], ['Model Type', a.modelType],
                ['Minimum', a.minimumPurchase != null ? currency(a.minimumPurchase) : null],
                ['Strategist Fee', a.strategistFee != null ? num(a.strategistFee) : null],
                ['Expense Ratio', a.expenseRatio != null ? num(a.expenseRatio) : null],
                ['Morningstar ID', a.morningstarId], ['Inception', a.inceptionDate],
              ].filter(([, v]) => v != null && v !== '').map(([k, v]) =>
                `<div class="flex justify-between border-b border-slate-100 dark:border-slate-700 py-1"><dt class="text-slate-500">${k}</dt><dd class="font-medium text-right">${v}</dd></div>`).join('')}
            </dl>
          </div>
        </div>
      </div>

      ${years.length ? `
      <!-- Calendar returns (net) -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-200 dark:border-slate-700"><h3 class="font-semibold">Calendar-Year Returns <span class="text-xs font-normal text-slate-400">(net)</span></h3></div>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="bg-slate-50 dark:bg-slate-700/50">${years.map(y => `<th class="px-3 py-2 text-right font-medium text-slate-500">${y}</th>`).join('')}</tr></thead>
          <tbody><tr>${years.map(y => `<td class="px-3 py-2 text-right font-mono ${cal[y] < 0 ? 'text-red-500' : ''}">${num(cal[y])}</td>`).join('')}</tr></tbody>
        </table></div>
      </div>` : ''}

      ${a.verificationSource ? `<p class="text-xs text-slate-400">Source: ${a.verificationSource}. Past performance does not guarantee future results.</p>` : ''}
    </div>
  `;
}
