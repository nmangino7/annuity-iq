// =============================================================================
// Fund Enrichment Utility — Auto-generates Morningstar-quality data from metadata
// Generates descriptions, sector allocations, and risk metrics for any subaccount
// =============================================================================

// ─── Description Templates ───────────────────────────────────────────────────
const OBJECTIVES = {
  'Large Cap Growth': 'long-term capital appreciation by investing primarily in large-capitalization U.S. growth companies',
  'Large Cap Blend': 'long-term capital appreciation and income by investing in a diversified portfolio of large-cap U.S. stocks',
  'Large Cap Value': 'long-term capital appreciation with income by investing in undervalued large-cap U.S. companies',
  'Mid Cap Growth': 'capital appreciation by investing in medium-capitalization companies with above-average growth potential',
  'Mid Cap Blend': 'long-term growth by investing in a diversified portfolio of mid-cap U.S. stocks',
  'Mid Cap Value': 'capital appreciation by investing in undervalued medium-capitalization companies',
  'Small Cap Growth': 'aggressive growth by investing in small-capitalization companies with high growth potential',
  'Small Cap Blend': 'long-term growth by investing in a broad portfolio of small-cap U.S. equities',
  'Small Cap Value': 'capital appreciation by investing in undervalued small-capitalization companies',
  'International Growth': 'long-term capital appreciation by investing in growth-oriented companies outside the United States',
  'International Value': 'capital appreciation by investing in undervalued international companies across developed markets',
  'International Blend': 'long-term growth by investing in a diversified portfolio of international equities',
  'World Allocation': 'total return through a global allocation across equities, bonds, and alternative assets',
  'Emerging Markets': 'long-term capital appreciation by investing in companies located in developing economies worldwide',
  'Bond': 'current income and capital preservation by investing in a diversified portfolio of investment-grade bonds',
  'Core Bond': 'current income and capital preservation by investing in a diversified portfolio of investment-grade bonds',
  'High Yield Bond': 'high current income by investing primarily in below-investment-grade corporate bonds',
  'Government Bond': 'current income and capital preservation through U.S. government and agency securities',
  'Short Duration': 'current income with limited interest rate risk through short-term fixed income securities',
  'TIPS': 'inflation-protected real returns through Treasury Inflation-Protected Securities',
  'International Bond': 'current income and diversification through non-U.S. fixed income securities',
  'REIT': 'total return through real estate investment trusts and real estate-related securities',
  'Technology': 'capital appreciation by investing in technology and technology-related companies',
  'Healthcare': 'long-term capital appreciation by investing in healthcare, pharmaceutical, and biotech companies',
  'Financials': 'capital appreciation by investing in banks, insurance companies, and financial services firms',
  'Energy': 'capital appreciation by investing in energy exploration, production, and services companies',
  'Money Market': 'current income and capital preservation through high-quality short-term money market instruments',
  'Stable Value': 'capital preservation and steady returns through high-quality fixed income and insurance contracts',
  'Balanced': 'growth and income through a balanced allocation of equities and fixed income securities',
  'Target Date': 'long-term retirement growth with a glide path that becomes more conservative over time',
  'ESG': 'long-term returns while investing in companies meeting environmental, social, and governance criteria',
  'Alternatives': 'risk-adjusted returns through non-traditional strategies including long/short, managed futures, and real assets',
  'Natural Resources': 'capital appreciation by investing in natural resource and commodity-related companies',
  'Commodities': 'total return through commodity-linked investments and real asset exposure',
};

const STYLE_DESCRIPTIONS = {
  'Index': 'The fund employs a passive indexing strategy, seeking to replicate the performance of its benchmark index with minimal tracking error and very low turnover.',
  'Growth': 'The fund employs an active growth strategy, seeking companies with above-average earnings growth, strong competitive positions, and expanding market opportunities.',
  'Value': 'The fund employs an active value discipline, seeking companies trading below intrinsic value with catalysts for price appreciation and margin of safety.',
  'Blend': 'The fund employs a blend approach, combining growth and value characteristics to build a diversified portfolio across investment styles.',
};

// ─── Sector Allocation Templates ─────────────────────────────────────────────
const SECTOR_TEMPLATES = {
  'Large Cap Growth': { Technology: 38.5, 'Consumer Discretionary': 14.2, 'Communication Services': 12.8, Healthcare: 10.5, Financials: 6.2, Industrials: 5.8, 'Consumer Staples': 3.5, Energy: 2.8, Materials: 2.2, Utilities: 1.5, 'Real Estate': 2.0 },
  'Large Cap Blend': { Technology: 32.5, Healthcare: 12.1, Financials: 13.4, 'Consumer Discretionary': 10.2, 'Communication Services': 8.9, Industrials: 8.5, 'Consumer Staples': 5.8, Energy: 3.5, Utilities: 2.4, 'Real Estate': 2.2, Materials: 2.5 },
  'Large Cap Value': { Financials: 22.5, Healthcare: 16.2, 'Consumer Staples': 11.8, Industrials: 10.5, Energy: 9.2, Utilities: 7.5, 'Communication Services': 5.8, Technology: 5.5, Materials: 4.2, 'Real Estate': 3.8, 'Consumer Discretionary': 3.0 },
  'Mid Cap Growth': { Technology: 28.5, Healthcare: 18.2, Industrials: 14.5, 'Consumer Discretionary': 13.8, 'Communication Services': 6.5, Financials: 5.8, Materials: 4.2, Energy: 3.5, 'Consumer Staples': 2.5, 'Real Estate': 1.5, Utilities: 1.0 },
  'Mid Cap Blend': { Industrials: 18.5, Technology: 16.2, Financials: 14.5, Healthcare: 12.8, 'Consumer Discretionary': 11.2, Materials: 6.5, Energy: 5.8, 'Real Estate': 5.5, Utilities: 4.0, 'Consumer Staples': 3.0, 'Communication Services': 2.0 },
  'Mid Cap Value': { Financials: 20.5, Industrials: 16.8, 'Real Estate': 10.2, Healthcare: 9.5, Energy: 9.0, Materials: 8.2, Utilities: 7.5, 'Consumer Discretionary': 6.8, Technology: 5.5, 'Consumer Staples': 4.0, 'Communication Services': 2.0 },
  'Small Cap Growth': { Healthcare: 22.5, Technology: 21.8, Industrials: 16.2, 'Consumer Discretionary': 14.5, 'Communication Services': 5.8, Financials: 5.2, Materials: 4.5, Energy: 3.8, 'Real Estate': 2.5, 'Consumer Staples': 1.7, Utilities: 1.5 },
  'Small Cap Blend': { Industrials: 18.5, Financials: 16.2, Healthcare: 14.8, Technology: 13.5, 'Consumer Discretionary': 11.2, Energy: 6.5, Materials: 5.8, 'Real Estate': 5.0, Utilities: 3.5, 'Consumer Staples': 3.0, 'Communication Services': 2.0 },
  'Small Cap Value': { Financials: 22.5, Industrials: 16.5, 'Real Estate': 10.8, Energy: 9.5, Materials: 8.2, Healthcare: 7.5, 'Consumer Discretionary': 7.0, Utilities: 6.5, Technology: 5.5, 'Consumer Staples': 3.5, 'Communication Services': 2.5 },
  'International Growth': { Technology: 22.5, Healthcare: 16.8, 'Consumer Discretionary': 14.5, Industrials: 12.2, Financials: 10.5, 'Communication Services': 7.5, 'Consumer Staples': 5.8, Materials: 4.2, Energy: 3.0, Utilities: 1.5, 'Real Estate': 1.5 },
  'International Value': { Financials: 25.5, Energy: 12.8, Industrials: 12.2, Healthcare: 10.5, Materials: 8.5, 'Consumer Staples': 8.0, Utilities: 6.5, 'Consumer Discretionary': 5.5, Technology: 4.5, 'Communication Services': 3.5, 'Real Estate': 2.5 },
  'International Blend': { Financials: 20.5, Technology: 14.8, Healthcare: 12.5, Industrials: 12.0, 'Consumer Discretionary': 10.2, 'Consumer Staples': 8.5, Energy: 6.5, Materials: 5.8, 'Communication Services': 4.2, Utilities: 3.0, 'Real Estate': 2.0 },
  'Emerging Markets': { Technology: 22.0, Financials: 20.5, 'Consumer Discretionary': 13.5, 'Communication Services': 10.5, Materials: 7.8, Energy: 6.5, Industrials: 6.0, Healthcare: 4.5, 'Consumer Staples': 4.2, Utilities: 2.5, 'Real Estate': 2.0 },
  'World Allocation': { Technology: 18.5, Financials: 14.2, Healthcare: 10.5, Industrials: 9.5, 'Consumer Discretionary': 8.5, 'Government Bonds': 12.0, 'Corporate Bonds': 8.5, 'Consumer Staples': 5.5, Energy: 4.8, 'Communication Services': 4.0, Other: 4.0 },
  'Technology': { 'Software': 32.5, 'Semiconductors': 28.2, 'IT Services': 14.5, 'Hardware': 10.8, 'Internet': 8.5, 'Telecom Equipment': 3.5, Other: 2.0 },
  'Healthcare': { 'Pharmaceuticals': 35.5, 'Biotechnology': 22.8, 'Medical Devices': 18.2, 'Healthcare Services': 12.5, 'Managed Care': 7.0, 'Life Sciences Tools': 4.0 },
  'Financials': { 'Banks': 35.5, 'Insurance': 22.0, 'Capital Markets': 18.5, 'Diversified Financial': 12.0, 'Fintech': 8.0, 'Real Estate Finance': 4.0 },
  'Energy': { 'Integrated Oil & Gas': 35.5, 'Exploration & Production': 22.0, 'Refining & Marketing': 12.5, 'Pipeline': 15.0, 'Equipment & Services': 10.0, 'Renewable Energy': 5.0 },
  'REIT': { 'Specialized REITs': 22.5, 'Residential': 18.0, 'Industrial': 16.5, 'Retail': 12.0, 'Office': 10.5, 'Healthcare Facilities': 8.5, 'Data Centers': 7.0, 'Self-Storage': 5.0 },
  'Natural Resources': { 'Energy': 35.0, 'Metals & Mining': 22.5, 'Agriculture': 15.0, 'Timber': 10.0, 'Water': 8.5, 'Chemicals': 9.0 },
};

// Bond-specific sector allocations
const BOND_SECTORS = {
  'Bond': { 'U.S. Treasury': 28.5, 'Corporate Investment Grade': 25.0, 'Mortgage-Backed': 22.5, 'Government Agency': 10.0, 'Asset-Backed': 5.5, 'Municipal': 3.5, 'International': 3.0, 'Cash': 2.0 },
  'Core Bond': { 'U.S. Treasury': 28.5, 'Corporate Investment Grade': 25.0, 'Mortgage-Backed': 22.5, 'Government Agency': 10.0, 'Asset-Backed': 5.5, 'Municipal': 3.5, 'International': 3.0, 'Cash': 2.0 },
  'High Yield Bond': { 'BB-Rated': 38.5, 'B-Rated': 32.0, 'CCC & Below': 12.5, 'Not Rated': 8.0, 'Investment Grade': 5.0, 'Cash': 4.0 },
  'Government Bond': { 'U.S. Treasury': 55.0, 'Government Agency': 22.5, 'Mortgage-Backed (Agency)': 15.0, 'TIPS': 5.0, 'Cash': 2.5 },
  'Short Duration': { 'Short-Term Corporate': 35.5, 'U.S. Treasury (1-3yr)': 25.0, 'Commercial Paper': 15.0, 'Floating Rate': 12.5, 'Asset-Backed': 8.0, 'Cash': 4.0 },
  'TIPS': { 'TIPS 1-5yr': 30.0, 'TIPS 5-10yr': 35.0, 'TIPS 10-20yr': 20.0, 'TIPS 20+yr': 10.0, 'Cash': 5.0 },
  'International Bond': { 'Developed Market Govt': 35.0, 'EM Sovereign': 22.5, 'Global Corporate': 20.0, 'Supranational': 10.0, 'EM Corporate': 8.5, 'Cash': 4.0 },
  'Money Market': { 'U.S. Treasury Bills': 40.0, 'Commercial Paper': 25.0, 'Certificates of Deposit': 15.0, 'Repurchase Agreements': 12.0, 'Government Agency': 8.0 },
  'Stable Value': { 'GIC Contracts': 35.0, 'Synthetic GICs': 25.0, 'Corporate Bonds': 20.0, 'Government Bonds': 12.0, 'Mortgage-Backed': 5.0, 'Cash': 3.0 },
};

// ─── Risk Metrics Generation ─────────────────────────────────────────────────
// Category-based beta defaults
const CATEGORY_BETA = {
  'Large Cap Growth': 1.08, 'Large Cap Blend': 1.0, 'Large Cap Value': 0.90,
  'Mid Cap Growth': 1.15, 'Mid Cap Blend': 1.05, 'Mid Cap Value': 0.95,
  'Small Cap Growth': 1.22, 'Small Cap Blend': 1.12, 'Small Cap Value': 1.02,
  'International Growth': 0.92, 'International Value': 0.82, 'International Blend': 0.88,
  'Emerging Markets': 1.05, 'World Allocation': 0.65,
  'Technology': 1.25, 'Healthcare': 0.95, 'Financials': 1.10, 'Energy': 1.15,
  'REIT': 0.75, 'Natural Resources': 1.0, 'Commodities': 0.55,
  'Bond': 0.0, 'Core Bond': 0.0, 'High Yield Bond': 0.25,
  'Government Bond': 0.0, 'Short Duration': 0.0, 'TIPS': 0.0,
  'International Bond': 0.0, 'Money Market': 0.0, 'Stable Value': 0.0,
  'Balanced': 0.60, 'Target Date': 0.70, 'ESG': 0.98, 'Alternatives': 0.45,
};

const CATEGORY_RSQUARED = {
  'Large Cap Growth': 88, 'Large Cap Blend': 98, 'Large Cap Value': 85,
  'Mid Cap Growth': 78, 'Mid Cap Blend': 90, 'Mid Cap Value': 80,
  'Small Cap Growth': 72, 'Small Cap Blend': 82, 'Small Cap Value': 75,
  'International Growth': 68, 'International Value': 65, 'International Blend': 72,
  'Emerging Markets': 55, 'World Allocation': 60,
  'Technology': 75, 'Healthcare': 62, 'Financials': 70, 'Energy': 45,
  'REIT': 42, 'Bond': 5, 'Core Bond': 5, 'High Yield Bond': 35,
  'Balanced': 72, 'Target Date': 80, 'ESG': 95, 'Alternatives': 30,
};

// ─── Main Enrichment Function ────────────────────────────────────────────────
export function enrichFund(fund) {
  // If fund already has all enriched fields, return as-is
  if (fund.description && fund.sectorAllocation && fund.riskMetrics) {
    return fund;
  }

  const enriched = { ...fund };

  // Generate description
  if (!enriched.description) {
    enriched.description = generateDescription(fund);
  }

  // Generate sector allocation
  if (!enriched.sectorAllocation) {
    enriched.sectorAllocation = generateSectorAllocation(fund);
  }

  // Generate risk metrics
  if (!enriched.riskMetrics) {
    enriched.riskMetrics = generateRiskMetrics(fund);
  }

  return enriched;
}

function generateDescription(fund) {
  const cat = fund.category || 'Large Cap Blend';
  const objective = OBJECTIVES[cat] || OBJECTIVES['Large Cap Blend'];
  const styleDesc = STYLE_DESCRIPTIONS[fund.style] || '';
  const manager = fund.manager || 'the investment team';

  let desc = `Seeks ${objective}. Managed by ${manager}`;

  if (fund.totalAssets) {
    desc += ` with ${fund.totalAssets} in total assets`;
  }

  desc += '.';

  if (styleDesc) {
    desc += ' ' + styleDesc;
  }

  return desc;
}

function generateSectorAllocation(fund) {
  const cat = fund.category || 'Large Cap Blend';
  const assetClass = fund.assetClass || 'Equity';

  // Check bond-specific allocations first
  if (assetClass === 'Fixed Income' || BOND_SECTORS[cat]) {
    return BOND_SECTORS[cat] || BOND_SECTORS['Bond'];
  }

  // Check for specific category match
  if (SECTOR_TEMPLATES[cat]) {
    return addVariation(SECTOR_TEMPLATES[cat], fund.id);
  }

  // Fallback: use the closest matching category
  const simpleCat = cat.includes('Growth') ? 'Large Cap Growth' :
    cat.includes('Value') ? 'Large Cap Value' :
    cat.includes('International') || cat.includes('Global') ? 'International Blend' :
    cat.includes('Bond') || cat.includes('Fixed') ? 'Bond' :
    cat.includes('REIT') || cat.includes('Real Estate') ? 'REIT' :
    'Large Cap Blend';

  return addVariation(SECTOR_TEMPLATES[simpleCat] || SECTOR_TEMPLATES['Large Cap Blend'], fund.id);
}

// Add slight variation to sector allocations so funds don't look identical
function addVariation(template, id) {
  const seed = hashCode(id || 'default');
  const result = {};
  const keys = Object.keys(template);
  let total = 0;

  keys.forEach((key, i) => {
    const base = template[key];
    // Add ±2% variation based on fund ID
    const variation = ((seed * (i + 1)) % 40 - 20) / 10;
    const adjusted = Math.max(0.1, +(base + variation).toFixed(1));
    result[key] = adjusted;
    total += adjusted;
  });

  // Normalize to 100%
  const factor = 100 / total;
  Object.keys(result).forEach(key => {
    result[key] = +(result[key] * factor).toFixed(1);
  });

  return result;
}

function generateRiskMetrics(fund) {
  const cat = fund.category || 'Large Cap Blend';
  const sd = fund.standardDeviation || 15.0;
  const sharpe = fund.sharpeRatio || 0.5;
  const oneYr = fund.oneYearReturn || 10;
  const isIndex = fund.style === 'Index';

  // Beta: category default, adjusted for index funds
  let beta = CATEGORY_BETA[cat] ?? 1.0;
  if (isIndex && cat.includes('Large Cap')) beta = 1.0;

  // R-Squared: higher for index funds
  let rSquared = CATEGORY_RSQUARED[cat] ?? 80;
  if (isIndex) rSquared = Math.min(99, rSquared + 10);

  // Alpha: estimated from returns vs expected
  const riskFreeRate = 4.5; // Current T-bill rate
  const marketReturn = 17.88; // S&P 500 2025 return
  const expectedReturn = riskFreeRate + beta * (marketReturn - riskFreeRate);
  let alpha = +(oneYr - expectedReturn).toFixed(2);
  if (isIndex) alpha = +(alpha * 0.1).toFixed(2); // Index funds have near-zero alpha

  // Sortino: typically 1.2-1.5x Sharpe for good funds
  const sortinoRatio = +(sharpe * 1.35).toFixed(2);

  // Max Drawdown: based on standard deviation and asset class
  const drawdownMultiplier = (fund.assetClass === 'Fixed Income') ? -0.8 : -1.55;
  const maxDrawdown = +(sd * drawdownMultiplier).toFixed(1);

  // Capture ratios
  let upCapture, downCapture;
  if (isIndex && cat.includes('S&P') || (isIndex && cat.includes('Large Cap'))) {
    upCapture = 100;
    downCapture = 100;
  } else if (fund.assetClass === 'Fixed Income') {
    upCapture = Math.round(15 + beta * 40);
    downCapture = Math.round(10 + beta * 30);
  } else {
    upCapture = Math.round(85 + (alpha > 0 ? alpha * 2 : alpha) + beta * 15);
    downCapture = Math.round(80 + beta * 15 - (alpha > 0 ? alpha * 1.5 : 0));
    upCapture = Math.min(130, Math.max(60, upCapture));
    downCapture = Math.min(120, Math.max(50, downCapture));
  }

  return {
    alpha,
    beta: +beta.toFixed(2),
    rSquared,
    sortinoRatio,
    maxDrawdown,
    upCaptureRatio: upCapture,
    downCaptureRatio: downCapture,
  };
}

// Simple hash function for deterministic variation
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
