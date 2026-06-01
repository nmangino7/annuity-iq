// =============================================================================
// Corporate Bonds — benchmark YIELD references by credit tier, not individual
// CUSIPs (those reprice continuously and can't be held accurate in a static
// file). Anchor yields are the Moody's Seasoned Aaa/Baa series (FRED DAAA/DBAA)
// with the observation date recorded; the intermediate tier is interpolated from
// the same dated points. Yields move daily — treat as as-of references.
// =============================================================================

export const corporateBonds = [
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
  {
    id: 'corp-ig-intermediate',
    name: 'Investment-Grade Corporate (A-tier, interpolated)',
    category: 'Investment Grade',
    rating: 'A (approx.)',
    maturityBand: '5–10 yr',
    currentYield: 5.76,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-28',
    verificationNote: 'Interpolated midpoint of the verified Aaa (5.50%) and Baa (6.02%) points — a derived A-tier proxy, not a directly quoted index',
    verificationSource: 'Derived from FRED DAAA (5.50%) and DBAA (6.02%), both observed 2026-05-28',
    sourceUrl: 'https://fred.stlouisfed.org/series/BAA10Y',
    highlights: ['Mid-grade credit proxy', 'Interpolated, not a quoted benchmark']
  }
];
