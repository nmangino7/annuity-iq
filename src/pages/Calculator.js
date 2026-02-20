import { getGLWBRiders } from '../data/index.js';
import { pct, currency, currencyFull } from '../utils/formatters.js';
import { incomeProjection } from '../utils/calculations.js';

export function renderCalculator() {
  const riders = getGLWBRiders();

  const html = `
    <div class="space-y-6 max-w-5xl">
      <div>
        <h1 class="text-2xl font-bold">Income Calculator</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Project guaranteed income from GLWB riders</p>
      </div>

      <!-- Input Form -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h3 class="font-semibold mb-4">Client Scenario</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Initial Premium</label>
            <input type="number" id="calc-premium" value="100000" step="10000" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-mono">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Client Age Now</label>
            <input type="number" id="calc-age" value="55" min="40" max="80" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-mono">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Income Start Age</label>
            <input type="number" id="calc-startAge" value="65" min="50" max="85" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-mono">
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Life Type</label>
            <select id="calc-lifeType" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm">
              <option value="single">Single Life</option>
              <option value="joint">Joint Life</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Est. Account Growth</label>
            <select id="calc-growth" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm">
              <option value="3">3% (Conservative)</option>
              <option value="4" selected>4% (Moderate)</option>
              <option value="5">5% (Optimistic)</option>
              <option value="6">6% (Aggressive)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Select Rider</label>
            <select id="calc-rider" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm">
              ${riders.map(r => `<option value="${r.id}">${r.carrier?.shortName || ''} - ${r.name}</option>`).join('')}
            </select>
          </div>
        </div>
        <button onclick="window._runCalc()" class="mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">Calculate Income</button>
      </div>

      <!-- Results -->
      <div id="calc-results" class="hidden space-y-6">
        <!-- Summary Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4" id="calc-summary"></div>

        <!-- Chart -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold mb-4">Income Projection</h3>
          <div id="calc-chart"></div>
        </div>

        <!-- Year-by-Year Table -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-700">
            <h3 class="font-semibold">Year-by-Year Breakdown</h3>
          </div>
          <div class="overflow-x-auto max-h-96">
            <table class="w-full text-xs" id="calc-table"></table>
          </div>
        </div>
      </div>
    </div>
  `;

  window._runCalc = () => {
    const premium = parseFloat(document.getElementById('calc-premium').value);
    const purchaseAge = parseInt(document.getElementById('calc-age').value);
    const incomeStartAge = parseInt(document.getElementById('calc-startAge').value);
    const lifeType = document.getElementById('calc-lifeType').value;
    const growth = parseFloat(document.getElementById('calc-growth').value);
    const riderId = document.getElementById('calc-rider').value;

    const rider = riders.find(r => r.id === riderId);
    if (!rider || isNaN(premium)) return;

    const projection = incomeProjection({
      premium, purchaseAge, incomeStartAge, rider, lifeType, estimatedGrowthRate: growth
    });

    const incomeStart = projection.find(y => y.annualIncome > 0);
    const lastYear = projection[projection.length - 1];

    document.getElementById('calc-results').classList.remove('hidden');

    // Summary
    document.getElementById('calc-summary').innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <p class="text-xs text-slate-500 uppercase">Benefit Base at ${incomeStartAge}</p>
        <p class="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">${currency(incomeStart?.benefitBase || 0)}</p>
        <p class="text-xs text-slate-400 mt-1">${rider.rollUp.rate}% ${rider.rollUp.type} rollup</p>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <p class="text-xs text-slate-500 uppercase">Annual Income</p>
        <p class="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">${currency(incomeStart?.annualIncome || 0)}</p>
        <p class="text-xs text-slate-400 mt-1">Starting age ${incomeStartAge}</p>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <p class="text-xs text-slate-500 uppercase">Monthly Income</p>
        <p class="text-2xl font-bold font-mono mt-1">${currency(Math.round((incomeStart?.annualIncome || 0) / 12))}</p>
        <p class="text-xs text-slate-400 mt-1">${lifeType === 'joint' ? 'Joint life' : 'Single life'}</p>
      </div>
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <p class="text-xs text-slate-500 uppercase">Total Income to 95</p>
        <p class="text-2xl font-bold font-mono mt-1">${currency(lastYear.totalIncome)}</p>
        <p class="text-xs text-slate-400 mt-1">Guaranteed for life</p>
      </div>
    `;

    // Chart
    const chartEl = document.getElementById('calc-chart');
    chartEl.innerHTML = '';
    const isDark = document.documentElement.classList.contains('dark');

    new ApexCharts(chartEl, {
      chart: { type: 'area', height: 320, toolbar: { show: false }, background: 'transparent',
        foreColor: isDark ? '#94a3b8' : '#64748b', stacked: false },
      series: [
        { name: 'Account Value', data: projection.map(y => y.accountValue), type: 'area' },
        { name: 'Benefit Base', data: projection.map(y => y.benefitBase), type: 'line' },
        { name: 'Cumulative Income', data: projection.map(y => y.totalIncome), type: 'line' }
      ],
      xaxis: { categories: projection.map(y => y.age), title: { text: 'Age' }, tickAmount: 10 },
      yaxis: { labels: { formatter: v => '$' + (v / 1000).toFixed(0) + 'K' } },
      colors: ['#3b82f6', '#f59e0b', '#10b981'],
      stroke: { width: [0, 2, 2], curve: 'smooth', dashArray: [0, 4, 0] },
      fill: { type: ['gradient', 'solid', 'solid'], gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 } },
      legend: { position: 'top' },
      tooltip: { y: { formatter: v => currency(v) } },
      grid: { borderColor: isDark ? '#334155' : '#e2e8f0' },
      theme: { mode: isDark ? 'dark' : 'light' },
      annotations: {
        xaxis: [{ x: incomeStartAge, borderColor: '#ef4444', label: { text: 'Income Starts', style: { color: '#fff', background: '#ef4444' } } }]
      }
    }).render();

    // Table
    document.getElementById('calc-table').innerHTML = `
      <thead><tr class="bg-slate-50 dark:bg-slate-700/50 sticky top-0">
        <th class="px-3 py-2 text-left font-medium text-slate-500">Age</th>
        <th class="px-3 py-2 text-left font-medium text-slate-500">Phase</th>
        <th class="px-3 py-2 text-right font-medium text-slate-500">Account Value</th>
        <th class="px-3 py-2 text-right font-medium text-slate-500">Benefit Base</th>
        <th class="px-3 py-2 text-right font-medium text-slate-500">Annual Income</th>
        <th class="px-3 py-2 text-right font-medium text-slate-500">Total Income</th>
      </tr></thead>
      <tbody>
        ${projection.map(y => `
          <tr class="border-t border-slate-100 dark:border-slate-700 ${y.age === incomeStartAge ? 'bg-blue-50 dark:bg-blue-900/20 font-medium' : ''}">
            <td class="px-3 py-1.5 font-mono">${y.age}</td>
            <td class="px-3 py-1.5">${y.phase === 'deferral' ? '<span class="text-blue-500">Deferral</span>' : '<span class="text-emerald-500">Income</span>'}</td>
            <td class="px-3 py-1.5 text-right font-mono">${currency(y.accountValue)}</td>
            <td class="px-3 py-1.5 text-right font-mono">${currency(y.benefitBase)}</td>
            <td class="px-3 py-1.5 text-right font-mono ${y.annualIncome > 0 ? 'text-emerald-600 dark:text-emerald-400' : ''}">${y.annualIncome > 0 ? currency(y.annualIncome) : '-'}</td>
            <td class="px-3 py-1.5 text-right font-mono">${y.totalIncome > 0 ? currency(y.totalIncome) : '-'}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  };

  return html;
}
