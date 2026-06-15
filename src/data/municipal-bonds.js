// =============================================================================
// Municipal Bonds — benchmark muni YIELD references by rating tier and maturity,
// not individual CUSIPs. Anchored to the AAA municipal curve reported in the
// Raymond James Municipal Bond Investor Weekly (2026-05-26): the 10yr (3.10%) and
// 20yr (4.10%) points are directly confirmed (`true`); other curve points and the
// AA/A tiers are interpolated/spread estimates anchored to those points and are
// `'partial'` with the basis noted. Tax-exempt rows carry a taxable-equivalent
// yield at a 32% marginal bracket; the taxable-muni index does not. As-of refs.
// =============================================================================

const TAX_BRACKET = 0.32;
const teq = y => +(y / (1 - TAX_BRACKET)).toFixed(2);

const RJ_WEEKLY = 'https://www.raymondjames.com/-/media/rj/dotcom/files/wealth-management/market-commentary-and-insights/bond-market-commentary/bond_investor.pdf';
const FMS = 'https://www.fmsbonds.com/market-yields/';

// AAA general-obligation curve. 10yr & 20yr are verified anchors; the rest are
// interpolated from those anchors + the published curve shape (partial).
const aaa = [
  { band: '1 yr',  y: 2.50, v: 'partial', note: 'Interpolated short-end estimate anchored to the verified 10yr point and the published AAA curve (BVAL 1yr ≈ 2.26% on 2026-04-20, +~25bp into late May).' },
  { band: '2 yr',  y: 2.55, v: 'partial', note: 'Interpolated from the verified 10yr anchor and AAA curve shape; per-maturity print not retrievable.' },
  { band: '3 yr',  y: 2.60, v: 'partial', note: 'Interpolated from the verified 10yr anchor and AAA curve shape.' },
  { band: '5 yr',  y: 2.70, v: 'partial', note: 'Interpolated estimate consistent with the steep AAA curve (30yr ≈ ~200bp over 5yr) and the verified 10yr=3.10%.' },
  { band: '7 yr',  y: 2.90, v: 'partial', note: 'Interpolated between the 5yr estimate and the verified 10yr anchor.' },
  { band: '10 yr', y: 3.10, v: true,      note: null },
  { band: '15 yr', y: 3.65, v: 'partial', note: 'Interpolated between the verified 10yr (3.10%) and 20yr (4.10%) anchors.' },
  { band: '20 yr', y: 4.10, v: true,      note: null },
  { band: '25 yr', y: 4.25, v: 'partial', note: 'Estimate; long end is nearly flat past 20yr (~26bp of slope 21–30yr per HJ Sims curve commentary).' },
  { band: '30 yr', y: 4.32, v: 'partial', note: 'Estimate; BVAL 30yr ≈ 4.25% on 2026-04-20, near-flat long end + slight late-May rise.' },
];

// AA and single-A tiers — AAA anchor plus a typical credit spread (FMSbonds
// publishes these points as of 2026-05-30 but the decimals weren't retrievable).
const tiers = [
  { id: 'muni-aa-5yr',  name: 'AA Municipal — 5 Year',  rating: 'AA', band: '5 yr',  y: 2.85, note: 'Estimate: AAA 5yr + ~15bp typical AA spread; FMSbonds lists an AA point for this date but the figure was not machine-extractable.' },
  { id: 'muni-aa-10yr', name: 'AA Municipal — 10 Year', rating: 'AA', band: '10 yr', y: 3.27, note: 'Estimate: verified AAA 10yr (3.10%) + ~17bp typical AA spread.' },
  { id: 'muni-aa-20yr', name: 'AA Municipal — 20 Year', rating: 'AA', band: '20 yr', y: 4.28, note: 'Estimate: verified AAA 20yr (4.10%) + ~18bp typical AA spread.' },
  { id: 'muni-a-5yr',   name: 'A Municipal — 5 Year',   rating: 'A',  band: '5 yr',  y: 3.05, note: 'Estimate: AAA 5yr + ~35bp typical single-A spread.' },
  { id: 'muni-a-10yr',  name: 'A Municipal — 10 Year',  rating: 'A',  band: '10 yr', y: 3.50, note: 'Estimate: verified AAA 10yr (3.10%) + ~40bp single-A spread; consistent with RJ note that A-or-better 20–30yr yields ~4.56% YTW.' },
  { id: 'muni-a-20yr',  name: 'A Municipal — 20 Year',  rating: 'A',  band: '20 yr', y: 4.50, note: 'Estimate aligning with RJ (2026-05-26): A-or-better 20–30yr portfolio ~4.56% federal tax-free YTW.' },
];

export const municipalBonds = [
  ...aaa.map(r => ({
    id: `muni-aaa-${r.band.replace(' ', '')}`,
    name: `AAA Municipal — ${r.band.replace(' yr', '')} Year`,
    category: 'General Obligation / Benchmark',
    rating: 'AAA',
    maturityBand: r.band,
    currentYield: r.y,
    taxableEquivalentYield: teq(r.y),
    taxBracket: TAX_BRACKET,
    yieldVerified: r.v,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    ...(r.note ? { verificationNote: r.note } : {}),
    verificationSource: r.v === true
      ? `AAA municipal ${r.band} benchmark, Raymond James Municipal Bond Investor Weekly, 2026-05-26`
      : `Anchored to the AAA municipal curve in the Raymond James Municipal Bond Investor Weekly, 2026-05-26`,
    sourceUrl: RJ_WEEKLY,
    highlights: ['Federally tax-exempt', 'High-grade GO benchmark']
  })),
  ...tiers.map(t => ({
    id: t.id,
    name: t.name,
    category: 'General Obligation / Benchmark',
    rating: t.rating,
    maturityBand: t.band,
    currentYield: t.y,
    taxableEquivalentYield: teq(t.y),
    taxBracket: TAX_BRACKET,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-30',
    verificationNote: t.note,
    verificationSource: 'FMSbonds.com municipal market yields (AA/A tiers, as of 2026-05-30); value estimated from the AAA curve + typical tier spread',
    sourceUrl: FMS,
    highlights: ['Federally tax-exempt', `${t.rating}-tier muni`]
  })),
  {
    id: 'muni-hy-broad',
    name: 'High-Yield Municipal (broad index)',
    category: 'High Yield',
    rating: 'Below IG',
    maturityBand: 'Broad index',
    currentYield: 5.50,
    taxableEquivalentYield: teq(5.50),
    taxBracket: TAX_BRACKET,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    verificationNote: 'Estimate ~5.4–5.6%: Bloomberg HY Muni Index was >5.5% on 2026-01-31 (Lord Abbett) with HY spreads rangebound (~188bp end-Apr); no fresh dated print retrievable.',
    verificationSource: 'Bloomberg High Yield Municipal Bond Index (via Lord Abbett commentary)',
    sourceUrl: 'https://www.lordabbett.com/en-us/financial-advisor/insights/investment-objectives/2026/high-yield-municipal-bonds-an-attractive-choice-for-risk-adjusted-return.html',
    highlights: ['Federally tax-exempt', 'Below-investment-grade muni, higher yield/risk']
  },
  {
    id: 'muni-taxable-broad',
    name: 'Taxable Municipal (broad index)',
    category: 'Taxable Municipal',
    rating: 'IG (mixed)',
    maturityBand: 'Broad index',
    currentYield: 4.94,
    // Taxable munis (e.g. BABs) are federally taxable — no tax-equivalent uplift.
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    verificationSource: 'Bloomberg Taxable Municipal Bond Index ≈ 4.94% (vs US Aggregate 4.57%), late-May 2026 commentary (Dividend.com)',
    sourceUrl: 'https://www.dividend.com/fixed-income-channel/taxable-municipal-bonds-are-emerging-as-a-high-yielding-safe-harbor/',
    highlights: ['Federally taxable (e.g. Build America Bonds)', 'Higher stated yield than tax-exempt munis']
  }
];
