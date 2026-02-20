import { getHistorical } from '../data/index.js';

export function renderHistory() {
  const historical = getHistorical();

  const html = `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl font-bold">Historical Rate Tracker</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Track how annuity and IUL rates have changed over the past 5 years</p>
      </div>

      <!-- FIA Rates -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold mb-4">FIA Cap Rates (S&P 500)</h3>
        <div id="hist-fia-chart"></div>
      </div>

      <!-- GLWB Rates -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold mb-4">GLWB Rollup Rates & Withdrawal Rates</h3>
        <div id="hist-glwb-chart"></div>
      </div>

      <!-- IUL Rates -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 class="font-semibold mb-4">IUL Cap Rates</h3>
        <div id="hist-iul-chart"></div>
      </div>

      <!-- Data Table -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
          <h3 class="font-semibold">Historical Data Table</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs">
            <thead><tr class="bg-slate-50 dark:bg-slate-700/50">
              <th class="px-3 py-2 text-left font-medium text-slate-500">Quarter</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">FIA Avg Cap</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">FIA Top Cap</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">GLWB Avg Rollup</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">GLWB Avg WD@65</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">IUL Avg Cap</th>
              <th class="px-3 py-2 text-right font-medium text-slate-500">IUL Top Cap</th>
            </tr></thead>
            <tbody>
              ${historical.map(h => `
                <tr class="border-t border-slate-100 dark:border-slate-700">
                  <td class="px-3 py-2 font-mono font-medium">${h.quarter}</td>
                  <td class="px-3 py-2 text-right font-mono">${h.fia.avgCapRate.toFixed(2)}%</td>
                  <td class="px-3 py-2 text-right font-mono">${h.fia.topCapRate.toFixed(2)}%</td>
                  <td class="px-3 py-2 text-right font-mono">${h.glwb.avgRollup.toFixed(2)}%</td>
                  <td class="px-3 py-2 text-right font-mono">${h.glwb.avgWD65.toFixed(2)}%</td>
                  <td class="px-3 py-2 text-right font-mono">${h.iul.avgCapRate.toFixed(2)}%</td>
                  <td class="px-3 py-2 text-right font-mono">${h.iul.topCapRate.toFixed(2)}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const isDark = document.documentElement.classList.contains('dark');
  const chartOpts = {
    foreColor: isDark ? '#94a3b8' : '#64748b',
    grid: isDark ? '#334155' : '#e2e8f0',
    mode: isDark ? 'dark' : 'light'
  };

  window._pageInit = () => {
    const cats = historical.map(h => h.quarter);

    // FIA Chart
    new ApexCharts(document.getElementById('hist-fia-chart'), {
      chart: { type: 'line', height: 280, toolbar: { show: false }, background: 'transparent', foreColor: chartOpts.foreColor },
      series: [
        { name: 'Average Cap Rate', data: historical.map(h => h.fia.avgCapRate) },
        { name: 'Top Cap Rate', data: historical.map(h => h.fia.topCapRate) }
      ],
      xaxis: { categories: cats, labels: { rotate: -45, style: { fontSize: '10px' } } },
      yaxis: { labels: { formatter: v => v.toFixed(1) + '%' }, min: 3 },
      colors: ['#3b82f6', '#10b981'],
      stroke: { width: [2.5, 2], curve: 'smooth', dashArray: [0, 4] },
      legend: { position: 'top' },
      tooltip: { y: { formatter: v => v.toFixed(2) + '%' } },
      grid: { borderColor: chartOpts.grid },
      theme: { mode: chartOpts.mode }
    }).render();

    // GLWB Chart
    new ApexCharts(document.getElementById('hist-glwb-chart'), {
      chart: { type: 'line', height: 280, toolbar: { show: false }, background: 'transparent', foreColor: chartOpts.foreColor },
      series: [
        { name: 'Avg Rollup Rate', data: historical.map(h => h.glwb.avgRollup) },
        { name: 'Avg WD% @65', data: historical.map(h => h.glwb.avgWD65) },
        { name: 'Avg Rider Fee', data: historical.map(h => h.glwb.avgFee) }
      ],
      xaxis: { categories: cats, labels: { rotate: -45, style: { fontSize: '10px' } } },
      yaxis: { labels: { formatter: v => v.toFixed(1) + '%' } },
      colors: ['#8b5cf6', '#10b981', '#ef4444'],
      stroke: { width: 2.5, curve: 'smooth' },
      legend: { position: 'top' },
      tooltip: { y: { formatter: v => v.toFixed(2) + '%' } },
      grid: { borderColor: chartOpts.grid },
      theme: { mode: chartOpts.mode }
    }).render();

    // IUL Chart
    new ApexCharts(document.getElementById('hist-iul-chart'), {
      chart: { type: 'line', height: 280, toolbar: { show: false }, background: 'transparent', foreColor: chartOpts.foreColor },
      series: [
        { name: 'Average Cap Rate', data: historical.map(h => h.iul.avgCapRate) },
        { name: 'Top Cap Rate', data: historical.map(h => h.iul.topCapRate) },
        { name: 'Avg Illustrated Rate', data: historical.map(h => h.iul.avgIllustrated) }
      ],
      xaxis: { categories: cats, labels: { rotate: -45, style: { fontSize: '10px' } } },
      yaxis: { labels: { formatter: v => v.toFixed(1) + '%' }, min: 5 },
      colors: ['#f59e0b', '#10b981', '#6366f1'],
      stroke: { width: [2.5, 2, 2], curve: 'smooth', dashArray: [0, 4, 0] },
      legend: { position: 'top' },
      tooltip: { y: { formatter: v => v.toFixed(2) + '%' } },
      grid: { borderColor: chartOpts.grid },
      theme: { mode: chartOpts.mode }
    }).render();
  };

  return html;
}
