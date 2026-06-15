// =============================================================================
// Government Bonds — US Treasury nominal (constant-maturity) and TIPS real-yield
// benchmarks. These are the most widely reported yields in the world, so nearly
// every point is a `true` value dated to a late-May-2026 business day (most-recent
// sessions 2026-05-26…05-29; 05-25 was Memorial Day). Values are per public
// reporting of the Fed H.15 / FRED constant-maturity series (direct fetch of the
// government pages is blocked here). Only the 7yr TIPS point is interpolated. As-of refs.
// =============================================================================

const H15 = 'https://www.federalreserve.gov/releases/h15/';

// [id suffix, label, maturityBand, yield, asOf, FRED series, verified, note]
const nominal = [
  ['1mo',  '1-Month',  '1 mo',  3.72, '2026-05-28', 'DGS1MO', true,  null],
  ['3mo',  '3-Month',  '3 mo',  3.60, '2026-05-28', 'DGS3MO', true,  null],
  ['6mo',  '6-Month',  '6 mo',  3.75, '2026-05-29', 'DGS6MO', true,  null],
  ['1yr',  '1-Year',   '1 yr',  3.80, '2026-05-28', 'DGS1',   true,  null],
  ['2yr',  '2-Year',   '2 yr',  3.99, '2026-05-28', 'DGS2',   true,  null],
  ['3yr',  '3-Year',   '3 yr',  4.07, '2026-05-28', 'DGS3',   true,  null],
  ['5yr',  '5-Year',   '5 yr',  4.15, '2026-05-28', 'DGS5',   true,  null],
  ['7yr',  '7-Year',   '7 yr',  4.29, '2026-05-29', 'DGS7',   true,  null],
  ['10yr', '10-Year',  '10 yr', 4.45, '2026-05-29', 'DGS10',  true,  null],
  ['20yr', '20-Year',  '20 yr', 4.98, '2026-05-28', 'DGS20',  true,  null],
  ['30yr', '30-Year',  '30 yr', 4.99, '2026-05-29', 'DGS30',  true,  null],
];

const tips = [
  ['tips-5yr',  '5-Year TIPS (real)',  '5 yr',  1.62, '2026-05-27', 'DFII5',  true,
    null],
  ['tips-7yr',  '7-Year TIPS (real)',  '7 yr',  1.80, '2026-05-27', 'DFII7',  'partial',
    'Estimate interpolated between the verified 5yr (1.62%) and 10yr (2.04%) real yields; the DFII7 daily series was not published to late-May 2026 (monthly FII7 ≈ 1.65% for Apr 2026).'],
  ['tips-10yr', '10-Year TIPS (real)', '10 yr', 2.04, '2026-05-29', 'DFII10', true,
    null],
  ['tips-20yr', '20-Year TIPS (real)', '20 yr', 2.51, '2026-05-26', 'DFII20', true,
    null],
  ['tips-30yr', '30-Year TIPS (real)', '30 yr', 2.72, '2026-05-29', 'DFII30', true,
    null],
];

export const treasuryBonds = [
  ...nominal.map(([sfx, label, band, y, asOf, series, v, note]) => ({
    id: `ust-${sfx}`,
    name: `US Treasury ${label}`,
    category: 'US Treasury',
    rating: 'US Treasury (AA+)',
    maturityBand: band,
    currentYield: y,
    yieldVerified: v,
    lastVerifiedDate: '2026-06-01',
    asOfDate: asOf,
    ...(note ? { verificationNote: note } : {}),
    verificationSource: `US Treasury ${label} constant-maturity yield (Fed H.15 / FRED ${series}) — ${y.toFixed(2)}% on ${asOf}, per public reporting (YCharts/TradingEconomics)`,
    sourceUrl: `https://fred.stlouisfed.org/series/${series}`,
    highlights: ['Backed by the full faith and credit of the US government', 'Benchmark risk-free rate']
  })),
  ...tips.map(([id, label, band, y, asOf, series, v, note]) => ({
    id: `ust-${id}`,
    name: `US Treasury ${label}`,
    category: 'US TIPS',
    rating: 'US TIPS (real)',
    maturityBand: band,
    currentYield: y,
    yieldVerified: v,
    lastVerifiedDate: '2026-06-01',
    asOfDate: asOf,
    ...(note ? { verificationNote: note } : {}),
    verificationSource: `US ${label} inflation-indexed real yield (Fed H.15 / FRED ${series})${v === true ? ` — ${y.toFixed(2)}% on ${asOf}, per public reporting` : ''}`,
    sourceUrl: `https://fred.stlouisfed.org/series/${series}`,
    highlights: ['Inflation-protected real yield (TIPS)', 'Backed by the US government']
  }))
];
