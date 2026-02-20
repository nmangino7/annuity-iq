import { getFIAProducts, getGLWBRiders, getIULProducts, getBenchmarks } from '../data/index.js';
import { pct, getTopRate } from '../utils/formatters.js';
import { distributionStats, percentileRank } from '../utils/calculations.js';

export function renderBenchmark() {
  const html = `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl font-bold">Rate Benchmarking</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">See how a specific rate compares to the market</p>
      </div>

      <!-- Controls -->
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Product Category</label>
            <select id="bm-category" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm">
              <option value="fia">Fixed Indexed Annuities</option>
              <option value="glwb">Income Riders (GLWB)</option>
              <option value="iul">Indexed Universal Life</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Metric</label>
            <select id="bm-metric" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm">
              <option value="capRate">S&P 500 Cap Rate</option>
              <option value="participation">Participation Rate</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-500 mb-1">Your Client's Rate (%)</label>
            <input type="number" id="bm-value" step="0.25" placeholder="e.g. 8.50" class="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm font-mono">
          </div>
        </div>
        <button onclick="window._runBenchmark()" class="mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">Analyze Rate</button>
      </div>

      <!-- Results -->
      <div id="bm-results" class="hidden space-y-6">
        <!-- Percentile Result -->
        <div id="bm-percentile-card" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center">
        </div>

        <!-- Distribution Chart -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold mb-4">Rate Distribution</h3>
          <div id="bm-chart"></div>
        </div>

        <!-- Stats Table -->
        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
          <h3 class="font-semibold mb-3">Market Statistics</h3>
          <div id="bm-stats"></div>
        </div>
      </div>
    </div>
  `;

  window._runBenchmark = () => {
    const category = document.getElementById('bm-category').value;
    const metric = document.getElementById('bm-metric').value;
    const value = parseFloat(document.getElementById('bm-value').value);

    if (isNaN(value)) return;

    let values = [];
    let metricLabel = '';

    if (category === 'fia') {
      const products = getFIAProducts();
      if (metric === 'capRate') {
        values = products.map(p => getTopRate(p.indexStrategies)).filter(v => v != null);
        metricLabel = 'FIA Cap Rate';
      } else {
        values = products.map(p => {
          const parts = p.indexStrategies.map(s => s.participationRate).filter(v => v != null);
          return parts.length ? Math.max(...parts) : null;
        }).filter(v => v != null);
        metricLabel = 'FIA Participation Rate';
      }
    } else if (category === 'glwb') {
      const riders = getGLWBRiders();
      if (metric === 'capRate') {
        values = riders.map(r => r.rollUp.rate);
        metricLabel = 'GLWB Rollup Rate';
      } else {
        values = riders.map(r => r.withdrawalRates.single['65-69'] || 0);
        metricLabel = 'GLWB WD% at 65';
      }
    } else {
      const products = getIULProducts();
      if (metric === 'capRate') {
        values = products.map(p => getTopRate(p.indexAccounts)).filter(v => v != null);
        metricLabel = 'IUL Cap Rate';
      } else {
        values = products.map(p => {
          const parts = p.indexAccounts.map(a => a.participationRate).filter(v => v != null);
          return parts.length ? Math.max(...parts) : null;
        }).filter(v => v != null);
        metricLabel = 'IUL Participation Rate';
      }
    }

    const pRank = percentileRank(value, values);
    const stats = distributionStats(values);

    document.getElementById('bm-results').classList.remove('hidden');

    // Percentile card
    const color = pRank >= 75 ? 'text-emerald-600 dark:text-emerald-400' : pRank >= 50 ? 'text-blue-600 dark:text-blue-400' : pRank >= 25 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400';
    const verdict = pRank >= 75 ? 'Excellent - Top quartile!' : pRank >= 50 ? 'Above average' : pRank >= 25 ? 'Below average' : 'Bottom quartile - consider shopping';

    document.getElementById('bm-percentile-card').innerHTML = `
      <p class="text-sm text-slate-500 mb-2">${metricLabel}: <span class="font-mono font-bold">${pct(value)}</span></p>
      <p class="text-5xl font-bold ${color} mb-2">${pRank}<sup class="text-2xl">th</sup> <span class="text-3xl">percentile</span></p>
      <p class="text-lg text-slate-600 dark:text-slate-300">Better than <span class="font-bold">${pRank}%</span> of ${values.length} products tracked</p>
      <p class="mt-3 text-sm font-medium ${color}">${verdict}</p>
    `;

    // Stats
    if (stats) {
      document.getElementById('bm-stats').innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">Min</p><p class="font-mono font-semibold mt-1">${pct(stats.min)}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">25th %ile</p><p class="font-mono font-semibold mt-1">${pct(stats.q1)}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">Median</p><p class="font-mono font-semibold mt-1">${pct(stats.median)}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">Mean</p><p class="font-mono font-semibold mt-1">${pct(stats.mean)}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">75th %ile</p><p class="font-mono font-semibold mt-1">${pct(stats.q3)}</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
            <p class="text-xs text-slate-400">Max</p><p class="font-mono font-semibold mt-1">${pct(stats.max)}</p>
          </div>
        </div>
      `;
    }

    // Chart
    const sorted = [...values].sort((a, b) => a - b);
    const binCount = 12;
    const binSize = (stats.max - stats.min) / binCount;
    const bins = [];
    for (let i = 0; i < binCount; i++) {
      const lo = stats.min + i * binSize;
      const hi = lo + binSize;
      const count = sorted.filter(v => v >= lo && (i === binCount - 1 ? v <= hi : v < hi)).length;
      bins.push({ x: `${lo.toFixed(1)}-${hi.toFixed(1)}`, y: count });
    }

    const chartEl = document.getElementById('bm-chart');
    if (chartEl) {
      chartEl.innerHTML = '';
      const chart = new ApexCharts(chartEl, {
        chart: { type: 'bar', height: 280, toolbar: { show: false }, background: 'transparent',
          foreColor: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b' },
        series: [{ name: 'Products', data: bins.map(b => b.y) }],
        xaxis: { categories: bins.map(b => b.x), labels: { rotate: -45, style: { fontSize: '10px' } } },
        yaxis: { title: { text: 'Number of Products' } },
        colors: ['#3b82f6'],
        plotOptions: { bar: { borderRadius: 4, columnWidth: '80%' } },
        annotations: {
          xaxis: [{
            x: bins.findIndex(b => {
              const [lo, hi] = b.x.split('-').map(Number);
              return value >= lo && value <= hi;
            }),
            borderColor: '#ef4444',
            label: { text: `Your Rate: ${pct(value)}`, style: { color: '#fff', background: '#ef4444' } }
          }]
        },
        grid: { borderColor: document.documentElement.classList.contains('dark') ? '#334155' : '#e2e8f0' },
        theme: { mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light' }
      });
      chart.render();
    }
  };

  // Update metric options when category changes
  window._pageInit = () => {
    document.getElementById('bm-category')?.addEventListener('change', (e) => {
      const metricSelect = document.getElementById('bm-metric');
      const cat = e.target.value;
      if (cat === 'fia') {
        metricSelect.innerHTML = '<option value="capRate">S&P 500 Cap Rate</option><option value="participation">Participation Rate</option>';
      } else if (cat === 'glwb') {
        metricSelect.innerHTML = '<option value="capRate">Rollup Rate</option><option value="participation">WD% at Age 65</option>';
      } else {
        metricSelect.innerHTML = '<option value="capRate">S&P 500 Cap Rate</option><option value="participation">Participation Rate</option>';
      }
    });
  };

  return html;
}
