import { getCarriers } from '../data/index.js';
import { ratingBadge } from '../utils/formatters.js';

let sortKey = 'comdex';
let sortDir = 'desc';

export function renderCarriers() {
  const html = `
    <div class="space-y-4">
      <div>
        <h1 class="text-2xl font-bold">Carrier Directory</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Insurance company ratings and profiles</p>
      </div>

      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm data-table">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-700/50">
                <th class="text-left px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('shortName')">Company</th>
                <th class="text-center px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('amBest')">AM Best</th>
                <th class="text-center px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('sAndP')">S&P</th>
                <th class="text-center px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('moodys')">Moody's</th>
                <th class="text-center px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('comdex')">COMDEX</th>
                <th class="text-center px-4 py-3 font-medium text-slate-500 sortable" onclick="window._sortCarriers('foundedYear')">Founded</th>
                <th class="text-left px-4 py-3 font-medium text-slate-500">HQ</th>
                <th class="text-left px-4 py-3 font-medium text-slate-500">Products</th>
              </tr>
            </thead>
            <tbody id="carriers-body"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  window._sortCarriers = (key) => {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = key === 'shortName' ? 'asc' : 'desc'; }
    renderTable();
  };

  window._pageInit = () => renderTable();
  return html;
}

function renderTable() {
  const carriers = getCarriers().map(c => ({
    ...c,
    amBest: c.ratings?.amBest?.rating || '',
    sAndP: c.ratings?.sAndP?.rating || '',
    moodys: c.ratings?.moodys?.rating || '',
    comdex: c.ratings?.comdex || 0
  }));

  carriers.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const tbody = document.getElementById('carriers-body');
  if (!tbody) return;

  const catLabels = { fia: 'FIA', glwb: 'GLWB', iul: 'IUL', va: 'VA', myga: 'MYGA', spia: 'SPIA', term: 'Term', 'whole-life': 'WL' };
  const catColors = { fia: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300', glwb: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300', iul: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300', va: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300', myga: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300', spia: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300', term: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300', 'whole-life': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' };

  tbody.innerHTML = carriers.map(c => `
    <tr class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer" onclick="location.hash='/carriers/${c.id}'">
      <td class="px-4 py-3">
        <div class="font-medium text-blue-600 dark:text-blue-400">${c.shortName}</div>
        <div class="text-xs text-slate-400">${c.name}</div>
      </td>
      <td class="px-4 py-3 text-center">${ratingBadge(c.amBest)}</td>
      <td class="px-4 py-3 text-center">${c.sAndP ? ratingBadge(c.sAndP) : '<span class="text-xs text-slate-400">N/R</span>'}</td>
      <td class="px-4 py-3 text-center">${c.moodys ? ratingBadge(c.moodys) : '<span class="text-xs text-slate-400">N/R</span>'}</td>
      <td class="px-4 py-3 text-center">${c.comdex > 0 ? ratingBadge(c.comdex, 'comdex') : '<span class="text-xs text-slate-400">N/A</span>'}</td>
      <td class="px-4 py-3 text-center font-mono text-xs">${c.foundedYear}</td>
      <td class="px-4 py-3 text-xs text-slate-500">${c.headquarters}</td>
      <td class="px-4 py-3">
        <div class="flex gap-1 flex-wrap">
          ${(c.productCategories || []).map(cat => `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${catColors[cat]}">${catLabels[cat]}</span>`).join('')}
        </div>
      </td>
    </tr>
  `).join('');
}
