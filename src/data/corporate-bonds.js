// =============================================================================
// Corporate Bonds — benchmark YIELD references by credit tier, not individual
// CUSIPs (those reprice continuously and can't be held accurate in a static
// file). Values are the Moody's Seasoned series (FRED DAAA/DBAA) and the ICE BofA
// US Corporate / High Yield effective-yield indices, with the observation date
// recorded. A row is `true` only where a specific dated value was confirmed from
// a current source; index points that surfaced only as monthly averages / stale
// readings are `'partial'` with a note. Yields move daily — as-of references.
// =============================================================================

export const corporateBonds = [
  // ── Moody's seasoned (long-dated) — verified anchors ──────────────────────
  {
    id: 'corp-aaa-seasoned',
    name: "Moody's Seasoned Aaa Corporate",
    category: 'Investment Grade',
    rating: 'Aaa',
    maturityBand: '20+ yr (seasoned)',
    currentYield: 5.50,
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-28',
    verificationSource: "Moody's Seasoned Aaa Corporate Bond Yield (FRED: DAAA) — 5.50% on 2026-05-28, per public FRED reporting",
    sourceUrl: 'https://fred.stlouisfed.org/series/DAAA',
    highlights: ['Highest-quality corporate credit', 'Long-dated seasoned issues']
  },
  {
    id: 'corp-baa-seasoned',
    name: "Moody's Seasoned Baa Corporate",
    category: 'Investment Grade',
    rating: 'Baa',
    maturityBand: '20+ yr (seasoned)',
    currentYield: 6.02,
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-28',
    verificationSource: "Moody's Seasoned Baa Corporate Bond Yield (FRED: DBAA) — 6.02% on 2026-05-28, per public FRED reporting",
    sourceUrl: 'https://fred.stlouisfed.org/series/DBAA',
    highlights: ['Lowest investment-grade tier', 'Higher yield than Aaa for added credit risk']
  },
  // ── ICE BofA US Corporate (investment grade) effective yields ─────────────
  {
    id: 'corp-ice-ig-master',
    name: 'ICE BofA US Corporate (All IG)',
    category: 'Investment Grade',
    rating: 'AAA–BBB',
    maturityBand: 'Broad index',
    currentYield: 5.30,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-31',
    verificationNote: 'May-2026 monthly average per public reporting of FRED BAMLC0A0CMEY; exact latest daily value not confirmed (sources block direct fetch)',
    verificationSource: 'ICE BofA US Corporate Index Effective Yield (FRED: BAMLC0A0CMEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLC0A0CMEY',
    highlights: ['Broad investment-grade benchmark', 'All maturities, AAA–BBB']
  },
  {
    id: 'corp-ice-aa',
    name: 'ICE BofA AA US Corporate',
    category: 'Investment Grade',
    rating: 'AA',
    maturityBand: 'Broad index',
    currentYield: 4.90,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-31',
    verificationNote: 'May-2026 monthly average per public reporting of FRED BAMLC0A2CAAEY; exact latest daily value not confirmed',
    verificationSource: 'ICE BofA AA US Corporate Index Effective Yield (FRED: BAMLC0A2CAAEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLC0A2CAAEY',
    highlights: ['High-grade corporate', 'All maturities']
  },
  {
    id: 'corp-ice-a',
    name: 'ICE BofA Single-A US Corporate',
    category: 'Investment Grade',
    rating: 'A',
    maturityBand: 'Broad index',
    currentYield: 5.01,
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-27',
    verificationSource: 'ICE BofA Single-A US Corporate Index Effective Yield (FRED: BAMLC0A3CAEY) — 5.01% on 2026-05-27',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLC0A3CAEY',
    highlights: ['Mid/upper investment-grade', 'All maturities']
  },
  {
    id: 'corp-ice-bbb',
    name: 'ICE BofA BBB US Corporate',
    category: 'Investment Grade',
    rating: 'BBB',
    maturityBand: 'Broad index',
    currentYield: 5.30,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-31',
    verificationNote: 'May-2026 reading per public reporting of FRED BAMLC0A4CBBBEY (snippets ranged ~5.27%–5.43%); exact latest daily value not confirmed',
    verificationSource: 'ICE BofA BBB US Corporate Index Effective Yield (FRED: BAMLC0A4CBBBEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLC0A4CBBBEY',
    highlights: ['Lowest investment-grade tier', 'All maturities']
  },
  {
    id: 'corp-ice-ig-1-3yr',
    name: 'ICE BofA 1–3 Year US Corporate',
    category: 'Investment Grade',
    rating: 'AAA–BBB',
    maturityBand: '1–3 yr',
    currentYield: 4.49,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-07',
    verificationNote: 'Value 4.49% as of 2026-05-07 per public reporting of FRED BAMLC1A0C13YEY; a later-May daily value was not confirmed',
    verificationSource: 'ICE BofA 1–3 Year US Corporate Index Effective Yield (FRED: BAMLC1A0C13YEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLC1A0C13YEY',
    highlights: ['Short-duration investment grade', 'Lower rate risk']
  },
  // ── ICE BofA US High Yield effective yields ───────────────────────────────
  {
    id: 'corp-ice-hy-master',
    name: 'ICE BofA US High Yield (All HY)',
    category: 'High Yield',
    rating: 'BB–CCC',
    maturityBand: 'Broad index',
    currentYield: 6.87,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-04-30',
    verificationNote: 'End-Apr-2026 monthly reading (ICE Data Indices via public reporting of FRED BAMLH0A0HYM2EY); late-May daily value not confirmed (snippets 6.77%–6.87%)',
    verificationSource: 'ICE BofA US High Yield Master II Effective Yield (FRED: BAMLH0A0HYM2EY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLH0A0HYM2EY',
    highlights: ['Broad below-investment-grade benchmark', 'Higher yield for credit risk']
  },
  {
    id: 'corp-ice-hy-bb',
    name: 'ICE BofA BB US High Yield',
    category: 'High Yield',
    rating: 'BB',
    maturityBand: 'Broad index',
    currentYield: 5.80,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-04-30',
    verificationNote: 'End-Apr-2026 monthly reading per public reporting of FRED BAMLH0A1HYBBEY; latest daily value not confirmed',
    verificationSource: 'ICE BofA BB US High Yield Index Effective Yield (FRED: BAMLH0A1HYBBEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLH0A1HYBBEY',
    highlights: ['Top high-yield tier', 'Crossover credit quality']
  },
  {
    id: 'corp-ice-hy-b',
    name: 'ICE BofA Single-B US High Yield',
    category: 'High Yield',
    rating: 'B',
    maturityBand: 'Broad index',
    currentYield: 7.01,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-06',
    verificationNote: 'Value ~7.01% as of 2026-05-06 per public reporting of FRED BAMLH0A2HYBEY (snippets conflicted 7.01%–7.31%); not confirmed to latest daily',
    verificationSource: 'ICE BofA Single-B US High Yield Index Effective Yield (FRED: BAMLH0A2HYBEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLH0A2HYBEY',
    highlights: ['Mid high-yield tier', 'Elevated credit risk']
  },
  {
    id: 'corp-ice-hy-ccc',
    name: 'ICE BofA CCC & Lower US High Yield',
    category: 'High Yield',
    rating: 'CCC & lower',
    maturityBand: 'Broad index',
    currentYield: 12.97,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-04-30',
    verificationNote: 'End-Apr-2026 monthly reading per public reporting of FRED BAMLH0A3HYCEY; latest daily value not confirmed',
    verificationSource: 'ICE BofA CCC & Lower US High Yield Index Effective Yield (FRED: BAMLH0A3HYCEY)',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAMLH0A3HYCEY',
    highlights: ['Deepest high-yield tier', 'Highest yield, highest default risk']
  }
];
