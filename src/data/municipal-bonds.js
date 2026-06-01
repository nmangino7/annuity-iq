// =============================================================================
// Municipal Bonds — benchmark AAA-muni YIELD references by maturity, not
// individual CUSIPs. Anchored to the publicly reported AAA municipal yield curve
// with the as-of date recorded. Muni yields are federally tax-exempt; the
// taxableEquivalentYield shown is at a 32% marginal bracket (yield / (1 - 0.32)).
// Yields move daily — treat as as-of references.
// =============================================================================

const TAX_BRACKET = 0.32;
const teq = y => +(y / (1 - TAX_BRACKET)).toFixed(2);

export const municipalBonds = [
  {
    id: 'muni-aaa-5yr',
    name: 'AAA Municipal — 5 Year',
    category: 'General Obligation / Benchmark',
    rating: 'AAA',
    maturityBand: '5 yr',
    currentYield: 2.55,
    taxableEquivalentYield: teq(2.55),
    taxBracket: TAX_BRACKET,
    yieldVerified: 'partial',
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    verificationNote: 'Short-end estimate from the AAA curve (below the verified 10-yr point); the 5-yr point was not individually confirmed',
    verificationSource: 'Estimated from the AAA municipal curve reported in the Raymond James Municipal Bond Investor Weekly, 2026-05-26',
    sourceUrl: 'https://www.raymondjames.com/wealth-management/advice-products-and-services/investment-solutions/fixed-income/municipal-bonds',
    highlights: ['Shorter-duration tax-exempt', 'Lower rate risk than 10/20-yr']
  },
  {
    id: 'muni-aaa-10yr',
    name: 'AAA Municipal — 10 Year',
    category: 'General Obligation / Benchmark',
    rating: 'AAA',
    maturityBand: '10 yr',
    currentYield: 3.10,
    taxableEquivalentYield: teq(3.10),
    taxBracket: TAX_BRACKET,
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    verificationSource: 'AAA municipal 10-yr benchmark ≈ 3.10%, Raymond James Municipal Bond Investor Weekly, 2026-05-26',
    sourceUrl: 'https://www.raymondjames.com/wealth-management/advice-products-and-services/investment-solutions/fixed-income/municipal-bonds',
    highlights: ['Federally tax-exempt', 'Benchmark high-grade GO yield']
  },
  {
    id: 'muni-aaa-20yr',
    name: 'AAA Municipal — 20 Year',
    category: 'General Obligation / Benchmark',
    rating: 'AAA',
    maturityBand: '20 yr',
    currentYield: 4.10,
    taxableEquivalentYield: teq(4.10),
    taxBracket: TAX_BRACKET,
    yieldVerified: true,
    lastVerifiedDate: '2026-06-01',
    asOfDate: '2026-05-26',
    verificationSource: 'AAA municipal 20-yr benchmark ≈ 4.10%, Raymond James Municipal Bond Investor Weekly, 2026-05-26',
    sourceUrl: 'https://www.raymondjames.com/wealth-management/advice-products-and-services/investment-solutions/fixed-income/municipal-bonds',
    highlights: ['Federally tax-exempt', 'Long-dated high-grade muni']
  }
];
