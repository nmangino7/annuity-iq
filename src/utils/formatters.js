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

export function verifyBadge(product) {
  if (product.ratesVerified === true) {
    return ' <span title="Rates verified from carrier source" class="inline-flex items-center ml-1 px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold rounded-full align-middle">Verified</span>';
  }
  if (product.ratesVerified === 'partial') {
    return ` <span title="${product.verificationNote || 'Key rates partially verified'}" class="inline-flex items-center ml-1 px-1.5 py-0.5 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-[10px] font-semibold rounded-full align-middle">Partial</span>`;
  }
  return '';
}

export function verifyBanner(product) {
  if (product.ratesVerified === true) {
    return `<div class="flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
      <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      <span class="text-sm text-emerald-700 dark:text-emerald-300"><strong>Verified</strong> &mdash; Rates confirmed from carrier source on ${product.lastVerifiedDate || 'N/A'}</span>
    </div>`;
  }
  if (product.ratesVerified === 'partial') {
    return `<div class="flex items-center gap-2 px-3 py-2 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg">
      <svg class="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      <span class="text-sm text-sky-700 dark:text-sky-300"><strong>Partially Verified</strong> &mdash; ${product.verificationNote || 'Key rates confirmed'} (${product.lastVerifiedDate || 'N/A'})</span>
    </div>`;
  }
  return `<div class="flex items-start gap-2 px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
    <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
    <span class="text-sm text-amber-700 dark:text-amber-300"><strong>Unverified</strong> &mdash; Rates are estimated and may not reflect current carrier offerings</span>
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
