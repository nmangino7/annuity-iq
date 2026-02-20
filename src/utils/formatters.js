export function pct(value, decimals = 2) {
  if (value == null) return 'N/A';
  return `${Number(value).toFixed(decimals)}%`;
}

export function currency(value) {
  if (value == null) return 'N/A';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
}

export function currencyFull(value) {
  if (value == null) return 'N/A';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function number(value, decimals = 0) {
  if (value == null) return 'N/A';
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

export function ratingClass(rating) {
  if (!rating) return 'rating-fair';
  const r = rating.toUpperCase().replace(/[^A-Z+\-]/g, '');
  if (['A++', 'A+', 'AA+', 'AAA', 'AA', 'AAA', 'AA1', 'AA2'].some(x => r.includes(x) || r === x)) return 'rating-superior';
  if (['A', 'A-', 'A1', 'A2', 'A3'].some(x => r === x)) return 'rating-excellent';
  if (['B++', 'B+', 'BBB+', 'BBB', 'BAA1', 'BAA2', 'BAA3'].some(x => r === x)) return 'rating-good';
  return 'rating-fair';
}

export function comdexClass(score) {
  if (score >= 90) return 'rating-superior';
  if (score >= 80) return 'rating-excellent';
  if (score >= 70) return 'rating-good';
  return 'rating-fair';
}

export function ratingBadge(rating, type = 'amBest') {
  if (!rating) return '<span class="text-xs text-slate-400">N/R</span>';
  const cls = type === 'comdex' ? comdexClass(rating) : ratingClass(rating);
  return `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${cls}">${rating}</span>`;
}

export function sortCompare(a, b, key, dir = 'asc') {
  let va = a[key], vb = b[key];
  if (va == null) va = dir === 'asc' ? Infinity : -Infinity;
  if (vb == null) vb = dir === 'asc' ? Infinity : -Infinity;
  if (typeof va === 'string') va = va.toLowerCase();
  if (typeof vb === 'string') vb = vb.toLowerCase();
  if (va < vb) return dir === 'asc' ? -1 : 1;
  if (va > vb) return dir === 'asc' ? 1 : -1;
  return 0;
}

export function benchmarkGauge(value, min, max, label = '') {
  if (value == null) return '';
  const pctPos = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const color = pctPos >= 75 ? 'bg-emerald-500' : pctPos >= 50 ? 'bg-teal-500' : pctPos >= 25 ? 'bg-amber-500' : 'bg-red-500';
  return `
    <div class="tooltip">
      <div class="benchmark-gauge bg-slate-200 dark:bg-slate-600 w-20">
        <div class="benchmark-marker ${color}" style="left: ${pctPos}%"></div>
      </div>
      <span class="tooltip-text">${label ? label + ': ' : ''}${pct(value)} (${Math.round(pctPos)}th percentile)</span>
    </div>`;
}

export function truncate(str, len = 30) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '...' : str;
}

export function getTopRate(strategies, field = 'capRate') {
  if (!strategies || !strategies.length) return null;
  const rates = strategies.map(s => s[field]).filter(r => r != null);
  return rates.length ? Math.max(...rates) : null;
}

export function getTopParticipation(strategies) {
  if (!strategies || !strategies.length) return null;
  const rates = strategies.map(s => s.participationRate).filter(r => r != null);
  return rates.length ? Math.max(...rates) : null;
}
