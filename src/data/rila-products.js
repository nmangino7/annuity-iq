export const rilaProducts = [
  // ── 1. Allianz Index Advantage NF (6yr) ──
  {
    id: 'allianz-index-advantage-nf-6',
    carrierId: 'allianz-life',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    name: 'Index Advantage+ NF (6-Year)',
    term: 6,
    accountOptions: [
      // 1-Year Performance (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'EURO STOXX 50', creditingMethod: 'Point-to-Point', term: 1, capRate: 26.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance (30% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.75, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.25, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Dual Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 8.70 },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.20 },
      // 1-Year Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.30 },
      { indexName: 'Russell 2000', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.70 },
      // 1-Year Guard (-10% Floor)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      // 1-Year Protection w/ Trigger (100% protection)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 100, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 5.50 },
      { indexName: 'Russell 2000', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 100, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 6.00 },
      // 6-Year Performance (10% Buffer) — UNCAPPED
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 6-Year Performance (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: 100.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: 100.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 6-Year Performance (30% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: 65.00, participationRate: 100, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: 75.00, participationRate: 100, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 6-Year Dual Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 6, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 39.00 },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 6, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 43.00 }
    ],
    minimumPremium: 10000, maximumIssueAge: 85,
    surrenderSchedule: [8, 8, 7, 6, 5, 4],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['No product fee', '10%, 20%, 30% buffer options', 'Uncapped 6-year strategies', '1-year and 6-year crediting terms'],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates",
    lastRateUpdate: '2026-02-03'
  },
  // ── 2. Allianz Index Advantage NF (3yr) ──
  {
    id: 'allianz-index-advantage-nf-3',
    carrierId: 'allianz-life',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    name: 'Index Advantage+ NF (3-Year)',
    term: 3,
    accountOptions: [
      // 3-Year Performance (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 85.00, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 70.00, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year Performance (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 40.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year Performance (30% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 28.00, participationRate: 100, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 37.00, participationRate: 100, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year Dual Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 3, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 23.00 },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 3, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 27.00 },
      // 3-Year Dual Precision (20% Buffer Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 3, capRate: null, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 19.00 },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 3, capRate: null, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 21.00 }
    ],
    minimumPremium: 10000, maximumIssueAge: 85,
    surrenderSchedule: [8, 8, 7, 6, 5, 4],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['3-year crediting terms', 'No product fee', 'Up to 85% S&P 500 3-year cap', 'Dual Precision trigger strategies'],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities/index-advantage-plus-nf/rates",
    lastRateUpdate: '2026-02-03'
  },
  // ── 3. Allianz Index Advantage+ NF ──
  {
    id: 'allianz-index-advantage-plus-nf',
    carrierId: 'allianz-life',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    name: 'Index Advantage+ NF',
    term: 6,
    accountOptions: [
      // 1-Year Performance (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares MSCI EM ETF', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'EURO STOXX 50', creditingMethod: 'Point-to-Point', term: 1, capRate: 26.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance (30% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.75, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Dual Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 8.70 },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.20 },
      // 1-Year Precision (Trigger)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.30 },
      // 1-Year Guard (-10% Floor)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      // 1-Year Protection w/ Trigger
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 100, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 5.50 }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Enhanced cap rates vs standard NF', 'Return of Premium death benefit', 'Dual uncapped options'],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/registered-index-linked-annuities",
    lastRateUpdate: '2026-02-03'
  },
  // ── 4. Brighthouse Shield Level 6 (1yr) ──
{
    id: 'brighthouse-shield-6-1yr',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com carrier-authorized data and independent research (S&P 500 Shield 10 cap 15.50% confirmed Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 6 (1-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.25, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.75, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.25, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 23.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['12 account options across 4 indices', 'MSCI EAFE cap 23.00% (10% shield)', 'Russell 2000 cap 22.00%', '10%, 15%, 25% shield levels'],
    sourceUrl: "https://www.brighthousefinancial.com/products/annuities/shield-annuities",
    lastRateUpdate: '2026-02-08'
  },
  // ── 5. Brighthouse Shield Level 6 (3yr) ──
{
    id: 'brighthouse-shield-6-3yr',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com carrier-authorized data (S&P 500 3yr Shield 10 cap 100% confirmed Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 6 (3-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 100.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 70.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 90.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 65.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 3, capRate: 65.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 3, capRate: 140.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 3, capRate: 100.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['3-year point-to-point crediting', 'S&P 500 3yr cap 100%', 'MSCI EAFE 3yr cap 140%', '4 indices with 2 shield levels each'],
    lastRateUpdate: '2026-02-08'
  },
  // ── 6. Brighthouse Shield Level 10 ──
{
    id: 'brighthouse-shield-10',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com carrier-authorized data and Brighthouse rate flyer (Step Rate Edge and PTP caps confirmed Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 10',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 8.25 },
      { indexName: 'S&P 500', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 7.25 },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.50 },
      { indexName: 'Nasdaq-100', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 9.25 },
      { indexName: 'MSCI EAFE', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 7.50 }
    ],
    minimumPremium: 20000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Step Rate Edge: earn set rate if index >= 0%', 'S&P 500 step rate 8.25% (Shield 10)', 'Russell 2000 step rate 10.50%', 'Multiple crediting approaches'],
    sourceUrl: "https://www.brighthousefinancial.com/products/annuities/shield-annuities",
    lastRateUpdate: '2026-02-08'
  },
  // ── 7. Equitable SCS PLUS (6yr, 10% buffer) ──
{
    id: 'equitable-scs-plus-6yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    carrierId: 'equitable',
    name: 'Structured Capital Strategies PLUS 21 (Series B)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 6.50, participationRate: null, bufferLevel: 40, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.00, participationRate: null, bufferLevel: 40, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 7.00, participationRate: null, bufferLevel: 40, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 6.00, participationRate: null, bufferLevel: 40, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI Emerging Markets', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI Emerging Markets', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'EURO STOXX 50', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'EURO STOXX 50', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500 Enhanced', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: 125, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['21 account options across 7 indices', '#1 RILA provider — $50B+ in sales', '10-40% buffer levels', 'Enhanced 125% participation option', 'MSCI Emerging Markets and EURO STOXX 50 access'],
    sourceUrl: "https://annuityeducator.com/reviews/equitable-financial-life-insurance-company/fixed-index/structured-capital-strategies-plus-21-series-b",
    lastRateUpdate: '2026-02-08'
  },
  // ── 12. Lincoln Level Advantage B-Share ──
{
    id: 'lincoln-level-advantage-b',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    carrierId: 'lincoln-financial',
    name: 'Level Advantage 2 B-Share',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 7.00, participationRate: null, bufferLevel: 100, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Strength Net Fee', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Strength Net Fee', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.75, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'First Trust American Leadership', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'First Trust American Leadership', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Group Global Growth Equity ETF', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Group Global Growth Equity ETF', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Group Growth ETF', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Capital Group Growth ETF', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 10000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 cap 16.00% (10% buffer)', 'MSCI EAFE cap 20.00%', '100% full protection option at 7.00%', '6 index families including Capital Group ETFs', 'Low $10K minimum premium'],
    sourceUrl: "https://annuityeducator.com/reviews/lincoln-national-life-insurance-company/fixed-index/lincoln-level-advantage-2-b-share",
    lastRateUpdate: '2026-02-08'
  },
  // ── 13. Nationwide Defined Protection (6yr) ──
{
    id: 'nationwide-defined-protection-6yr',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com and Nationwide Defender advisory product data (rates cross-referenced Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'nationwide',
    name: 'Defined Protection (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P MidCap 400', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['S&P MidCap 400 cap 22.00%', 'Russell 2000 cap 19.50%', '6 index choices', 'A+ rated carrier'],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/registered-index-linked",
    lastRateUpdate: '2026-02-08'
  },
  // ── 16. Jackson Market Link Pro II (6yr) ──
  {
    id: 'jackson-market-link-pro-ii-6yr',
    carrierId: 'jackson-national',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    name: 'Market Link Pro II (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.40 },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 15.90 },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 13.00 },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: 75.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 1yr cap 11.50%, Performance Trigger 12.40%', 'Russell 2000 1yr cap 14.75%, Trigger 15.90%', '6-year S&P 500 cap 75% (Performance Boost)', 'Fixed account 3.00%'],
    sourceUrl: "https://www.jackson.com/annuities/registered-index-linked-annuities",
    lastRateUpdate: '2026-02-21'
  },
  // ── 17. Jackson Market Link Pro II (1yr) ──
  {
    id: 'jackson-market-link-pro-ii-1yr',
    carrierId: 'jackson-national',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-21',
    name: 'Market Link Pro II (1-Year)',
    term: 1,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.40 },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 cap 11.50% (10% buffer)', 'Performance Trigger 12.40%', 'Russell 2000 cap 14.75%', 'No surrender charges'],
    sourceUrl: "https://www.jackson.com/annuities/registered-index-linked-annuities",
    lastRateUpdate: '2026-02-21'
  },
  // ── 25. Athene Amplify ──
  {
    id: 'athene-amplify',
    ratesVerified: true, lastVerifiedDate: '2026-02-22', verificationSource: 'Cross-verified: athene.com Amplify 2.0 NF rate sheet (S&P 500 10% buffer cap corrected 16.50%→17.00%)',
    carrierId: 'athene',
    name: 'Amplify',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Backed by Apollo', 'Competitive rates', 'International index access'],
    sourceUrl: "https://www.athene.com/products/rila/amplify2",
    lastRateUpdate: '2025-01-15'
  },
  // ── 26. Transamerica Structured Index Advantage ──
  {
    id: 'transamerica-structured-index-advantage',
    ratesVerified: true, lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: transamerica.com rate center, industry research (S&P 500 10% buffer cap 15.75% confirmed), application form T-AP-VIA15FL-1124 (user-provided PDF), SEC EDGAR S-1 filing',
    carrierId: 'transamerica',
    name: 'Structured Index Advantage',
    term: 6,
    surrenderSchedule: [8, 8, 7, 6, 5, 4],
    accountOptions: [
      // S&P 500 — Cap strategies (1yr, 2yr)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: 10.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point Cap', term: 2, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // S&P 500 — Participation strategies (6yr)
      { indexName: 'S&P 500', creditingMethod: 'Participation', term: 6, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: true, creditAdvantageFee: 1.25, description: 'Credit Advantage fee applies' },
      // S&P 500 — Triple Edge Advantage (no fee, 10% buffer)
      { indexName: 'S&P 500', creditingMethod: 'Triple Edge Advantage', term: 6, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true, description: 'No Credit Advantage fee' },
      // S&P 500 — Best Entry (6yr, 10% buffer)
      { indexName: 'S&P 500', creditingMethod: 'Best Entry', term: 6, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // Russell 2000 ETF — Cap strategies
      { indexName: 'iShares Russell 2000 ETF', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: 18.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares Russell 2000 ETF', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares Russell 2000 ETF', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // iShares U.S. Technology ETF — Cap strategies
      { indexName: 'iShares U.S. Technology ETF', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares U.S. Technology ETF', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // Fidelity World Factor Leaders Index — Cap strategies
      { indexName: 'Fidelity World Factor Leaders', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Fidelity World Factor Leaders', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // First Trust Equity Edge Index — Cap strategies
      { indexName: 'First Trust Equity Edge', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'First Trust Equity Edge', creditingMethod: 'Point-to-Point Cap', term: 1, capRate: null, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // Fixed Account
      { indexName: 'Fixed Account', creditingMethod: 'Fixed', term: 1, capRate: null, participationRate: null, bufferLevel: null, bufferType: null, floorLevel: null, isUncapped: false, fixedRate: null, description: 'Guaranteed fixed rate of return' }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    maximumPremium: 1000000,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7, minimumWithdrawal: 500 },
    deathBenefit: 'Account Value',
    stateAvailability: 'All states except NY and OR',
    nursingCareWaiver: true,
    performanceLock: true,
    creditAdvantageFee: 1.25,
    highlights: [
      'A+ (Stable) AM Best carrier — Aegon/Transamerica $250B+ assets',
      '5 indices: S&P 500, Russell 2000 ETF, U.S. Tech ETF, Fidelity World, First Trust Equity Edge',
      'Unique strategy types: Triple Edge Advantage, Best Entry, Participation with Credit Advantage',
      '10%/15%/20% buffer options across 1yr, 2yr, and 6yr crediting periods',
      'Performance Lock feature — lock in gains before crediting period ends',
      'No annual contract or administrative fees'
    ],
    sourceUrl: "https://www.transamerica.com/annuities/transamerica-structured-index-advantage-annuity",
    lastRateUpdate: '2025-01-15'
  },
  // ── 34. Principal Structured Index ──
{
    id: 'principal-structured-index',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com carrier-authorized data (S&P 500 caps and participation rates confirmed Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'principal-financial',
    name: 'Strategic Outcomes',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.50, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 70, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 80, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 60, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: true },
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 7.00, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 102, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 105, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 130, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 90, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 1yr cap 13.00% (10% buffer)', 'MSCI EAFE 130% 6yr participation', 'Dual Directional option', 'Floor strategy with -10% floor', 'Principal Financial Group A+ rated'],
    sourceUrl: "https://annuityeducator.com/reviews/principal-life-insurance-company/fixed-index/principal-strategic-outcomes-annuity",
    lastRateUpdate: '2026-02-08'
  },
  // ── 40–41. F&G Confidence Builder RILA ──
  { id: 'fandg-confidence-builder-6', ratesVerified: true, lastVerifiedDate: '2026-02-22', verificationSource: 'Cross-verified: fglife.com rate sheet, annuityeducator.com, industry research (S&P 500 10% buffer cap 20.25% confirmed)', carrierId: 'fandg', name: 'Confidence Builder (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 25.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 24.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.75 },
    { indexName: 'MSCI EAFE', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.00 },
    { indexName: 'Russell 2000', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 14.25 },
    { indexName: 'Nasdaq-100', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 12.00 },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 100.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 100.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 55.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 3, capRate: 75.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Annual Lock', term: 6, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: 500.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Annual Lock', term: 6, capRate: 14.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: 500.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Annual Lock', term: 6, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 6, capRate: 500.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Hindsight 20/20 (BofA Best-of-3)', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
  ], minimumPremium: 25000, maximumIssueAge: 80, surrenderSchedule: [7, 7, 6, 5, 4, 3, 0], withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['F&G first-ever RILA launched Feb 2024', 'Innovative Hindsight 20/20 best-of-3 strategy', '4 equity indices: S&P 500, Nasdaq-100, Russell 2000, MSCI EAFE', '1-year, 3-year, and 6-year crediting periods', '10% and 20% buffer options', 'Annual Lock strategy with guaranteed caps', 'Up to 500% cap on 6-year PTP strategies'], lastRateUpdate: '2026-02-01' },
  // ── 49–55. Floor-type products ──
{ id: 'jackson-market-link-floor-6yr',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com and Jackson National Market Link Pro III data (floor rates confirmed Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'jackson-national', name: 'Market Link Pro Floor (6-Year)', term: 6, accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.75, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'MSCI Emerging Markets', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.25, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }
    ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Floor-based downside protection', 'Maximum loss limited to -10%', '5 index options including EM', 'MSCI EAFE floor cap 19.50%'], lastRateUpdate: '2026-02-08' },
{ id: 'equitable-scs-dual-direction',
    ratesVerified: true,
    verificationSource: 'Cross-verified: annuityeducator.com and independent research confirmed S&P 500 DD 10% buffer cap 11.00%, S&P 500 DD 15% buffer cap 7.50% (Feb 2026)',
    lastVerifiedDate: '2026-02-22',
    carrierId: 'equitable', name: 'SCS Dual Direction', term: 6, accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 7.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: 9.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Dual Direction', term: 1, capRate: 13.20, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Dual Direction', term: 1, capRate: 9.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Dual Direction', term: 1, capRate: 10.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Dual Direction', term: 1, capRate: 5.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Earn returns in up AND down markets', 'Dual Direction across 4 indices', '10% and 15% buffer options', 'Russell 2000 dual cap 15.00%'], lastRateUpdate: '2026-02-08' },

  // ── Global Atlantic ForeStructured Growth II ──
  {
    id: 'global-atlantic-forestructured-growth-ii-6',
    ratesVerified: true, lastVerifiedDate: '2026-02-22', verificationSource: 'Cross-verified: globalatlantic.com product page, industry research (S&P 500 10% buffer cap 17.00% confirmed)',
    carrierId: 'global-atlantic',
    name: 'ForeStructured Growth II (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 105, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'S&P 500', creditingMethod: 'Dual Directional', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Launched January 2025', '50+ index-linked strategies', 'Unique Dual Directional — positive credit even in some down markets', 'Buffer, Floor, and Adaptive Floor protection'],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: '2026-01-15'
  },

  // ── Athene Amplify (6-Year) ────────────────────────────────────────
  { id: 'athene-amplify-6yr', ratesVerified: true, lastVerifiedDate: '2026-02-22', verificationSource: 'Cross-verified: athene.com Amplify 2.0 NF rate sheet (S&P 500 10% buffer cap corrected 16.50%→17.00%)', carrierId: 'athene', name: 'Amplify (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Apollo-backed carrier', 'Uncapped S&P option', '5 index choices', 'Nasdaq-100 access'], lastRateUpdate: '2026-02-01' },

  // ── Corebridge Index Frontier 7 ────────────────────────────────────
  { id: 'corebridge-index-frontier-7', ratesVerified: true, lastVerifiedDate: '2026-02-22', verificationSource: 'Cross-verified: corebridgefinancial.com, annuityeducator.com (S&P 500 10% buffer cap 16.00% confirmed)', carrierId: 'corebridge-financial', name: 'Index Frontier 7', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Corebridge (formerly AIG)', '4 index options', '10% and 20% buffer levels', '$25K minimum'], lastRateUpdate: '2026-02-01' },
  // ── Pacific Life Protective Growth (from official rate sheet 02/16/2026) ──
  {
    id: 'pacific-protective-growth',
    carrierId: 'pacific-life',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Pacific Life official rate sheet (rates effective 02/16/2026)',
    name: 'Protective Growth',
    term: 6,
    accountOptions: [
      // 1-Year Cap Rate (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Invesco QQQ Trust', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'First Trust Growth Strength', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Cap Rate (15% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Invesco QQQ Trust', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.25, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Cap Rate (-10% Floor)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'Invesco QQQ Trust', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },
      // 1-Year Dual Direction (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Invesco QQQ Trust', creditingMethod: 'Dual Direction', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance Trigger (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.50 },
      { indexName: 'MSCI EAFE', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 9.00 },
      { indexName: 'Invesco QQQ Trust', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 11.25 },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 11.50 },
      // 6-Year Participation (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'iShares Russell 2000', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    fixedAccountRate: 3.25,
    minimumPremium: 25000, maximumIssueAge: 80,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Pacific Life A+ rated carrier', '5 equity indices including QQQ and Russell 2000', '10% and 15% buffer options plus -10% floor', 'Dual Direction and Performance Trigger strategies', '6-year uncapped participation options', 'Tiered participation rate feature'],
    sourceUrl: 'https://www.annuities.pacificlife.com/home/annuities.html',
    lastRateUpdate: '2026-02-22'
  },
  // ── 22. Prudential FlexGuard 2.0 ──
  {
    id: 'prudential-flexguard-2',
    carrierId: 'prudential',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'FlexGuard 2.0',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (15% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Nasdaq-100 (10% Buffer)
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 3-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 40.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 6-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year Dual Direction (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 9.50 },
      // 1-Year Shield (100% Protection, S&P 500)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 100, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 5.00 }
    ],
    fixedAccountRate: null,
    minimumPremium: 25000, maximumIssueAge: 85,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 1-year cap up to 17.50% with 10% buffer', 'Russell 2000 cap 21.00% — highest in class', 'Dual Direction and 100% Shield strategies', '3-year and 6-year uncapped participation', 'Prudential A+ financial strength'],
    sourceUrl: 'https://www.prudential.com/financial-professionals/products/annuities/flexguard',
    lastRateUpdate: '2026-02-27'
  },
  // ── 23. Prudential FlexGuard 2.0 Income ──
  {
    id: 'prudential-flexguard-2-income',
    carrierId: 'prudential',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'FlexGuard 2.0 Income',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (15% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year Dual Direction (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 8.50 }
    ],
    fixedAccountRate: null,
    minimumPremium: 25000, maximumIssueAge: 85,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Built-in FlexGuard Income benefit at no additional charge', 'S&P 500 cap 15.00% with 10% buffer', 'Guaranteed lifetime income withdrawal benefit included', 'Lower caps vs FlexGuard 2.0 due to embedded income benefit'],
    sourceUrl: 'https://www.prudential.com/financial-professionals/products/annuities/flexguard',
    lastRateUpdate: '2026-02-27'
  },
  // ── 24. Great American (MassMutual Ascend) Index Summit 6 ──
  {
    id: 'great-american-index-summit-6',
    carrierId: 'great-american',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'MassMutual Ascend Index Summit 6',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (30% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.00, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance Trigger (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 10.50 },
      // 6-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 6-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: 80.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    fixedAccountRate: 3.50,
    minimumPremium: 25000, maximumIssueAge: 80,
    surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['Backed by Great American/MassMutual financial strength', 'S&P 500 cap 16.25% with 10% buffer', 'Performance Trigger 10.50% — one of the highest', '6-year uncapped S&P 500 participation', 'MSCI EAFE cap 21.00% for international exposure'],
    sourceUrl: 'https://www.massmutualascend.com/products/rila',
    lastRateUpdate: '2026-02-27'
  },
  // ── 25. Great American (MassMutual Ascend) Index Summit 6 Pro ──
  {
    id: 'great-american-index-summit-6-pro',
    carrierId: 'great-american',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'MassMutual Ascend Index Summit 6 Pro',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 80, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year Russell 2000 (10% Buffer) — Uncapped
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 75, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year MSCI EAFE (10% Buffer) — Uncapped
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 85, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year Performance Trigger (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 11.00 },
      // 6-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    fixedAccountRate: 3.25,
    minimumPremium: 25000, maximumIssueAge: 80,
    surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['All participation-rate-based — no caps on upside', 'S&P 500 80% uncapped participation with 10% buffer', '100% uncapped participation with 20% buffer', 'Performance Trigger 11.00%', 'Pro version for advisors seeking uncapped growth'],
    sourceUrl: 'https://www.massmutualascend.com/products/rila',
    lastRateUpdate: '2026-02-27'
  },
  // ── 26. Symetra Trek Plus ──
  {
    id: 'symetra-trek-plus',
    carrierId: 'symetra',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'Trek Plus',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (20% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 23.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Performance Trigger (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 11.00 },
      // 6-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    fixedAccountRate: 3.75,
    minimumPremium: 25000, maximumIssueAge: 85,
    surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['S&P 500 cap 18.00% — competitive with top-tier RILAs', 'MSCI EAFE cap 23.00% — highest international RILA cap', 'Russell 2000 cap 22.00%', 'Performance Trigger 11.00%', 'Symetra A rated carrier backed by Sumitomo Life'],
    sourceUrl: 'https://www.symetra.com/products/annuities',
    lastRateUpdate: '2026-02-27'
  },
  // ── 27. RiverSource Structured Solutions 2 (6-Year) ──
  {
    id: 'riversource-structured-solutions-2-6yr',
    carrierId: 'riversource',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'Structured Solutions 2.0 (6-Year)',
    term: 6,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (15% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (25% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 6-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 6, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      // 1-Year Dual Direction (S&P 500, 10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false, triggerRate: 9.00 }
    ],
    fixedAccountRate: null,
    minimumPremium: 25000, maximumIssueAge: 85,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Greater of Account Value or Purchase Payments',
    highlights: ['Ameriprise/RiverSource A+ rated carrier', 'S&P 500 cap 15.50% with 10% buffer', 'Dual Direction strategy available', '25% deep buffer option for conservative investors', 'Enhanced death benefit — return of purchase payments'],
    sourceUrl: 'https://www.riversource.com/annuities',
    lastRateUpdate: '2026-02-27'
  },
  // ── 28. RiverSource Structured Solutions 2 (3-Year) ──
  {
    id: 'riversource-structured-solutions-2-3yr',
    carrierId: 'riversource',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    name: 'Structured Solutions 2.0 (3-Year)',
    term: 3,
    accountOptions: [
      // 1-Year S&P 500 (10% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year S&P 500 (15% Buffer)
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year Russell 2000 (10% Buffer)
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 1-Year MSCI EAFE (10% Buffer)
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      // 3-Year S&P 500 (10% Buffer) — Uncapped
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    fixedAccountRate: null,
    minimumPremium: 25000, maximumIssueAge: 85,
    surrenderSchedule: [5, 4, 3, 0],
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 },
    deathBenefit: 'Greater of Account Value or Purchase Payments',
    highlights: ['Shorter 3-year surrender for more liquidity', 'S&P 500 cap 14.50% with 10% buffer', '3-year uncapped participation option', 'Lower surrender charges — max 5%', 'Ameriprise/RiverSource A+ financial strength'],
    sourceUrl: 'https://www.riversource.com/annuities',
    lastRateUpdate: '2026-02-27'
  }
];
