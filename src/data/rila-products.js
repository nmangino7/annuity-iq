export const rilaProducts = [
  // ── 1. Allianz Index Advantage NF (6yr) ──
  {
    id: 'allianz-index-advantage-nf-6',
    carrierId: 'allianz-life',
    name: 'Index Advantage NF (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 110, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['10% and 20% buffer options', 'Uncapped participation available', '6-year term', 'Multiple index choices'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 2. Allianz Index Advantage NF (3yr) ──
  {
    id: 'allianz-index-advantage-nf-3',
    carrierId: 'allianz-life',
    name: 'Index Advantage NF (3-Year)',
    term: 3,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['3-year commitment', 'Lower surrender charges', 'Uncapped S&P 500 with 20% buffer'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 3. Allianz Index Advantage+ NF ──
  {
    id: 'allianz-index-advantage-plus-nf',
    carrierId: 'allianz-life',
    name: 'Index Advantage+ NF',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 115, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'S&P 500', creditingMethod: 'Performance Trigger', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 120, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Enhanced cap rates vs standard NF', 'Return of Premium death benefit', 'Dual uncapped options'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 4. Brighthouse Shield Level 6 (1yr) ──
  {
    id: 'brighthouse-shield-6-1yr',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 6 (1-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['10%, 15%, and 20% buffer options', '1-year point-to-point crediting', '6-year contract term'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 5. Brighthouse Shield Level 6 (3yr) ──
  {
    id: 'brighthouse-shield-6-3yr',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 6 (3-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 38.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 32.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 55.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['3-year point-to-point crediting', 'Higher caps for longer term', 'Up to 25% buffer'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 6. Brighthouse Shield Level 10 ──
  {
    id: 'brighthouse-shield-10',
    carrierId: 'brighthouse-financial',
    name: 'Shield Level 10',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Step Rate crediting method', 'Dual Direction option', 'Multiple crediting approaches'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 7. Equitable SCS PLUS (6yr, 10% buffer) ──
  {
    id: 'equitable-scs-plus-6yr',
    carrierId: 'equitable',
    name: 'Structured Capital Strategies PLUS (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.25, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['10%, 20%, and 30% buffer options', 'Largest RILA in the market', '6 index choices'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 8. Equitable SCS PLUS (3yr) ──
  {
    id: 'equitable-scs-plus-3yr',
    carrierId: 'equitable',
    name: 'Structured Capital Strategies PLUS (3-Year)',
    term: 3,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 40.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 60.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['3-year crediting period', 'Higher caps for multi-year', 'Up to 20% buffer'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 9. Equitable SCS Income ──
  {
    id: 'equitable-scs-income',
    carrierId: 'equitable',
    name: 'SCS Income',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Lifetime income benefit included', 'Buffer protection with income', 'Return of Premium death benefit'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 10. Lincoln Level Advantage (6yr) ──
  {
    id: 'lincoln-level-advantage-6yr',
    carrierId: 'lincoln-financial',
    name: 'Level Advantage (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 95, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Uncapped S&P 500 with 20% buffer', '6-year contract term', 'Strong carrier ratings'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 11. Lincoln Level Advantage (1yr) ──
  {
    id: 'lincoln-level-advantage-1yr',
    carrierId: 'lincoln-financial',
    name: 'Level Advantage (1-Year)',
    term: 1,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 },
    deathBenefit: 'Account Value',
    highlights: ['1-year term — no long commitment', 'Annual reset of buffer', 'No surrender charges'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 12. Lincoln Level Advantage B-Share ──
  {
    id: 'lincoln-level-advantage-b',
    carrierId: 'lincoln-financial',
    name: 'Level Advantage B-Share',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 10000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Lower minimum premium ($10K)', 'B-Share pricing', 'Standard buffer options'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 13. Nationwide Defined Protection (6yr) ──
  {
    id: 'nationwide-defined-protection-6yr',
    carrierId: 'nationwide',
    name: 'Defined Protection (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.75, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Up to 25% buffer protection', '5 index options', 'A+ rated carrier'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 14. Nationwide Defined Protection (3yr) ──
  {
    id: 'nationwide-defined-protection-3yr',
    carrierId: 'nationwide',
    name: 'Defined Protection (3-Year)',
    term: 3,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 48.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 38.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 56.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 },
    deathBenefit: 'Account Value',
    highlights: ['3-year term with higher caps', 'Buffer and floor options', 'Shorter commitment period'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 15. Nationwide Monument Advisor ──
  {
    id: 'nationwide-monument-advisor',
    carrierId: 'nationwide',
    name: 'Monument Advisor',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 85, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Fee-based (advisory) product', 'Return of Premium death benefit', 'Uncapped participation option'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 16. Jackson Market Link Pro II (6yr) ──
  {
    id: 'jackson-market-link-pro-ii-6yr',
    carrierId: 'jackson-national',
    name: 'Market Link Pro II (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: -10, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: null, bufferLevel: 20, bufferType: 'Floor', floorLevel: -20, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Both buffer and floor options', '20% floor option available', 'Multiple index strategies'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 17. Jackson Market Link Pro II (1yr) ──
  {
    id: 'jackson-market-link-pro-ii-1yr',
    carrierId: 'jackson-national',
    name: 'Market Link Pro II (1-Year)',
    term: 1,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.75, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 },
    deathBenefit: 'Account Value',
    highlights: ['1-year renewable contract', 'No surrender charges', 'Annual buffer reset'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 18. Pacific Life Pacific Odyssey ──
  {
    id: 'pacific-life-odyssey',
    carrierId: 'pacific-life',
    name: 'Pacific Odyssey',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 105, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Uncapped S&P 500 option', 'A+ rated carrier', 'Multiple index choices'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 19. Pacific Life Pacific Index ──
  {
    id: 'pacific-life-index',
    carrierId: 'pacific-life',
    name: 'Pacific Index',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.25, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['15% buffer option', 'Lower minimum premium', 'International index access'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 20. Prudential FlexGuard (6yr) ──
  {
    id: 'prudential-flexguard-6yr',
    carrierId: 'prudential',
    name: 'FlexGuard (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.75, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI Emerging Markets', creditingMethod: 'Point-to-Point', term: 1, capRate: 22.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['10%, 15%, 20% buffer options', 'Emerging Markets index', 'One of the largest RILA providers'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 21. Prudential FlexGuard (3yr) ──
  {
    id: 'prudential-flexguard-3yr',
    carrierId: 'prudential',
    name: 'FlexGuard (3-Year)',
    term: 3,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 47.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 38.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 58.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 },
    deathBenefit: 'Account Value',
    highlights: ['3-year crediting with higher caps', 'Up to 20% buffer on 3yr', 'Shorter commitment'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 22. Prudential FlexGuard Income ──
  {
    id: 'prudential-flexguard-income',
    carrierId: 'prudential',
    name: 'FlexGuard Income',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Built-in lifetime income benefit', 'Buffer protection with income', 'ROP death benefit'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 23. Great-American Index Protector 7 ──
  {
    id: 'great-american-index-protector-7',
    carrierId: 'great-american',
    name: 'Index Protector 7',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 10000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Low $10K minimum', 'A+ rated carrier', 'Simple buffer structure'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 24. Global Atlantic ForeAccumulation II ──
  {
    id: 'global-atlantic-foreaccumulation-ii',
    carrierId: 'global-atlantic',
    name: 'ForeAccumulation II',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 110, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Competitive cap rates', 'Uncapped participation with 20% buffer', '4 index options'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 25. Athene Amplify ──
  {
    id: 'athene-amplify',
    carrierId: 'athene',
    name: 'Amplify',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Backed by Apollo', 'Competitive rates', 'International index access'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 26. Transamerica Structured Index Advantage ──
  {
    id: 'transamerica-structured-index-advantage',
    carrierId: 'transamerica',
    name: 'Structured Index Advantage',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Aegon-backed strength', '15% buffer option', 'Simple product design'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 27. Symetra Accumulator RILA ──
  {
    id: 'symetra-accumulator-rila',
    carrierId: 'symetra',
    name: 'Accumulator RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 95, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 15000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Uncapped S&P 500 option', '$15K minimum', 'Sumitomo-backed carrier'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 28. Protective Structured Solutions ──
  {
    id: 'protective-structured-solutions',
    carrierId: 'protective-life',
    name: 'Structured Solutions',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Dai-ichi Life-backed', '10% and 20% buffer options', 'Solid carrier ratings'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 29. Corebridge PersistGuard RILA ──
  {
    id: 'corebridge-persistguard-rila',
    carrierId: 'corebridge-financial',
    name: 'PersistGuard RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Former AIG platform', 'Competitive cap rates', '4 index options'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 30. North American Charter Plus RILA ──
  {
    id: 'north-american-charter-plus-rila',
    carrierId: 'north-american',
    name: 'Charter Plus RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Sammons Financial Group', 'Uncapped participation option', 'A+ rated'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 31. Midland National RetireVantage RILA ──
  {
    id: 'midland-national-retirevantage-rila',
    carrierId: 'midland-national',
    name: 'RetireVantage RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 15000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['$15K minimum', 'Sammons Financial Group', 'Simple two-buffer design'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 32. MassMutual Structured Settlement RILA ──
  {
    id: 'massmutual-structured-rila',
    carrierId: 'massmutual',
    name: 'Structured Settlement RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Greater of AV or ROP',
    highlights: ['Mutual company strength', 'A++ AM Best rating', 'ROP death benefit'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 33. John Hancock Protected Growth RILA ──
  {
    id: 'john-hancock-protected-growth',
    carrierId: 'john-hancock',
    name: 'Protected Growth RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 85, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Manulife-backed carrier', 'Uncapped participation', 'International index'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 34. Principal Structured Index ──
  {
    id: 'principal-structured-index',
    carrierId: 'principal-financial',
    name: 'Structured Index',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.75, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Principal Financial Group', 'Solid A+ rated', 'Simple structure'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 35. Securian Buffer Shield 6 ──
  {
    id: 'securian-buffer-shield-6',
    carrierId: 'securian',
    name: 'Buffer Shield 6',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 85,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Strong Midwest carrier', 'Nasdaq-100 index', 'Competitive caps'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 36. Mutual of Omaha Indexed Shield ──
  {
    id: 'mutual-of-omaha-indexed-shield',
    carrierId: 'mutual-of-omaha',
    name: 'Indexed Shield',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.25, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 20000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['Mutual company', 'Conservative buffer design', 'Trusted brand'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 37. American National Value Index RILA ──
  {
    id: 'american-national-value-index-rila',
    carrierId: 'american-national',
    name: 'Value Index RILA',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 15000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 },
    deathBenefit: 'Account Value',
    highlights: ['$15K minimum', 'Brookfield-backed', 'Value-oriented design'],
    lastRateUpdate: '2025-01-15'
  },
  // ── 38–42. Delaware Life RILA variants ──
  { id: 'delaware-life-target-income-rila', carrierId: 'delaware-life', name: 'Target Income RILA', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Greater of AV or ROP', highlights: ['Income-focused RILA', 'ROP death benefit', 'Delaware Life'], lastRateUpdate: '2025-01-15' },
  { id: 'delaware-life-target-growth-rila', carrierId: 'delaware-life', name: 'Target Growth RILA', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Growth-focused design', 'Nasdaq-100 access', '3 equity indices'], lastRateUpdate: '2025-01-15' },
  // ── 40–41. F&G Confidence Builder RILA ──
  { id: 'fandg-confidence-builder-6', carrierId: 'fandg', name: 'Confidence Builder (6-Year)', term: 6, accountOptions: [
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
  // ── 42–50. Additional carrier products ──
  { id: 'american-equity-shield-value', carrierId: 'american-equity', name: 'ShieldValue RILA', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 10000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Low $10K minimum', 'American Equity', '10% and 20% buffers'], lastRateUpdate: '2025-01-15' },
  { id: 'american-equity-shield-value-3yr', carrierId: 'american-equity', name: 'ShieldValue RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 44.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 52.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 10000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year crediting', 'Low minimum', 'American Equity'], lastRateUpdate: '2025-01-15' },
  { id: 'athene-amplify-3yr', carrierId: 'athene', name: 'Amplify (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 46.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 37.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 55.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year crediting period', 'Higher caps', 'Apollo-backed'], lastRateUpdate: '2025-01-15' },
  { id: 'global-atlantic-foreaccumulation-1yr', carrierId: 'global-atlantic', name: 'ForeAccumulation II (1-Year)', term: 1, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 }, deathBenefit: 'Account Value', highlights: ['1-year renewable', 'No surrender charges', 'Annual reset'], lastRateUpdate: '2025-01-15' },
  { id: 'transamerica-structured-3yr', carrierId: 'transamerica', name: 'Structured Index Advantage (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 44.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 53.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year term', 'Higher cap potential', 'Transamerica strength'], lastRateUpdate: '2025-01-15' },
  { id: 'symetra-accumulator-rila-3yr', carrierId: 'symetra', name: 'Accumulator RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: null, participationRate: 130, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 54.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 15000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year uncapped option', '$15K minimum', 'Symetra strength'], lastRateUpdate: '2025-01-15' },
  // ── 49–55. Floor-type products ──
  { id: 'jackson-market-link-floor-6yr', carrierId: 'jackson-national', name: 'Market Link Pro II Floor (6-Year)', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -20, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Floor-based downside protection', 'Known maximum loss', 'Loss capped at floor level'], lastRateUpdate: '2025-01-15' },
  { id: 'equitable-scs-floor-6yr', carrierId: 'equitable', name: 'SCS PLUS Floor (6-Year)', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -20, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },{ indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Floor protection strategy', 'Maximum loss known upfront', '4 index choices'], lastRateUpdate: '2025-01-15' },
  { id: 'prudential-flexguard-floor', carrierId: 'prudential', name: 'FlexGuard Floor', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.25, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -15, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.00, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Floor strategy from Prudential', 'Max loss of 10% or 15%', 'Complementary to buffer products'], lastRateUpdate: '2025-01-15' },
  { id: 'brighthouse-shield-floor-6', carrierId: 'brighthouse-financial', name: 'Shield Level Floor 6', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.75, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.75, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -20, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.25, participationRate: null, bufferLevel: null, bufferType: 'Floor', floorLevel: -10, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Floor-based Brighthouse product', '-10% and -20% floor levels', 'Known max downside'], lastRateUpdate: '2025-01-15' },
  // ── 53–60. Dual Direction and Step Rate products ──
  { id: 'allianz-index-advantage-dual', carrierId: 'allianz-life', name: 'Index Advantage Dual Direction', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Dual Direction — earn on down markets too', 'Earn cap even if market is negative', 'Unique crediting approach'], lastRateUpdate: '2025-01-15' },
  { id: 'nationwide-step-rate-rila', carrierId: 'nationwide', name: 'Defined Protection Step Rate', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Step Rate', term: 1, capRate: null, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Step Rate crediting method', 'Earn set rate if index is positive', 'Nationwide backing'], lastRateUpdate: '2025-01-15' },
  { id: 'equitable-scs-dual-direction', carrierId: 'equitable', name: 'SCS Dual Direction', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Dual Direction', term: 1, capRate: 10.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Dual Direction', term: 1, capRate: 13.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'MSCI EAFE', creditingMethod: 'Dual Direction', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Earn returns in up AND down markets', 'Dual Direction across 3 indices', 'Equitable brand strength'], lastRateUpdate: '2025-01-15' },
  // ── 56–62. ESG and specialty index products ──
  { id: 'lincoln-level-advantage-esg', carrierId: 'lincoln-financial', name: 'Level Advantage ESG', term: 6, accountOptions: [{ indexName: 'S&P 500 ESG', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500 ESG', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['ESG-focused index strategy', 'S&P 500 ESG Index', 'Socially responsible investing'], lastRateUpdate: '2025-01-15' },
  { id: 'pacific-life-odyssey-esg', carrierId: 'pacific-life', name: 'Pacific Odyssey ESG', term: 6, accountOptions: [{ indexName: 'S&P 500 ESG', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Bloomberg US Aggregate Bond', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['ESG and Bond index options', 'Lower volatility Bond strategy', 'Pacific Life strength'], lastRateUpdate: '2025-01-15' },
  { id: 'brighthouse-shield-bond-index', carrierId: 'brighthouse-financial', name: 'Shield Bond Index', term: 6, accountOptions: [{ indexName: 'Bloomberg US Aggregate Bond', creditingMethod: 'Point-to-Point', term: 1, capRate: 9.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Bloomberg US Aggregate Bond', creditingMethod: 'Point-to-Point', term: 1, capRate: 7.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Bond index buffer strategy', 'Lower volatility option', 'Conservative allocation'], lastRateUpdate: '2025-01-15' },
  // ── 59–65. More term/buffer combos ──
  { id: 'protective-structured-1yr', carrierId: 'protective-life', name: 'Structured Solutions (1-Year)', term: 1, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 }, deathBenefit: 'Account Value', highlights: ['1-year renewable', 'No surrender charge', 'Annual flexibility'], lastRateUpdate: '2025-01-15' },
  { id: 'corebridge-persistguard-3yr', carrierId: 'corebridge-financial', name: 'PersistGuard RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 47.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 38.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 56.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 20000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year crediting', 'Higher caps on multi-year', 'Corebridge Financial'], lastRateUpdate: '2025-01-15' },
  { id: 'great-american-index-protector-3yr', carrierId: 'great-american', name: 'Index Protector (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 43.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 34.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 10000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['Low $10K minimum', '3-year term', 'Great-American strength'], lastRateUpdate: '2025-01-15' },
  { id: 'north-american-charter-plus-3yr', carrierId: 'north-american', name: 'Charter Plus RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 42.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['Sammons Financial', '3-year commitment', 'Higher potential returns'], lastRateUpdate: '2025-01-15' },
  { id: 'midland-national-retirevantage-3yr', carrierId: 'midland-national', name: 'RetireVantage RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 41.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 49.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 15000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['$15K minimum', '3-year term', 'Midland National'], lastRateUpdate: '2025-01-15' },
  // ── 64–70. Participation rate focused products ──
  { id: 'allianz-index-advantage-uncapped', carrierId: 'allianz-life', name: 'Index Advantage Uncapped', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 105, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 125, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 115, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 120, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['All uncapped strategies', 'Participation rates 105-125%', 'Maximum upside potential'], lastRateUpdate: '2025-01-15' },
  { id: 'equitable-scs-uncapped', carrierId: 'equitable', name: 'SCS PLUS Uncapped', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 120, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 110, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Uncapped growth potential', 'Multiple buffer levels', 'Leading RILA provider'], lastRateUpdate: '2025-01-15' },
  { id: 'pacific-life-odyssey-uncapped', carrierId: 'pacific-life', name: 'Pacific Odyssey Uncapped', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 115, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 105, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['All uncapped options', 'Nasdaq-100 access', 'Pacific Life backing'], lastRateUpdate: '2025-01-15' },
  { id: 'global-atlantic-fore-uncapped', carrierId: 'global-atlantic', name: 'ForeAccumulation Uncapped', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 120, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },{ indexName: 'MSCI Emerging Markets', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 130, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Uncapped with EM exposure', 'Up to 130% participation', 'Global Atlantic backing'], lastRateUpdate: '2025-01-15' },
  // ── 68–75. More carrier combos ──
  { id: 'securian-buffer-shield-3', carrierId: 'securian', name: 'Buffer Shield 3', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 44.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 20000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year term', 'Nasdaq exposure', 'Securian Financial'], lastRateUpdate: '2025-01-15' },
  { id: 'john-hancock-protected-growth-3yr', carrierId: 'john-hancock', name: 'Protected Growth RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 43.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 51.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year crediting', 'Manulife-backed', 'Higher potential returns'], lastRateUpdate: '2025-01-15' },
  { id: 'principal-structured-index-3yr', carrierId: 'principal-financial', name: 'Structured Index (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 40.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 32.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['Principal Financial', '3-year multi-year caps', 'Up to 20% buffer'], lastRateUpdate: '2025-01-15' },
  { id: 'massmutual-structured-rila-3yr', carrierId: 'massmutual', name: 'Structured RILA (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 42.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Greater of AV or ROP', highlights: ['MassMutual mutual company', 'A++ AM Best', '3-year ROP death benefit'], lastRateUpdate: '2025-01-15' },
  { id: 'mutual-of-omaha-indexed-shield-3yr', carrierId: 'mutual-of-omaha', name: 'Indexed Shield (3-Year)', term: 3, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 39.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 47.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year Mutual of Omaha', 'Trusted brand', 'Conservative approach'], lastRateUpdate: '2025-01-15' },
  { id: 'american-national-value-index-1yr', carrierId: 'american-national', name: 'Value Index RILA (1-Year)', term: 1, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 15000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 0 }, deathBenefit: 'Account Value', highlights: ['1-year renewable', 'No surrender charges', '$15K minimum'], lastRateUpdate: '2025-01-15' },
  // ── 74-78. Additional high-buffer products ──
  { id: 'equitable-scs-plus-30-buffer', carrierId: 'equitable', name: 'SCS PLUS 30% Buffer', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.25, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 30, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Maximum 30% buffer protection', 'Conservative with upside', 'Industry-leading buffer'], lastRateUpdate: '2025-01-15' },
  { id: 'nationwide-defined-protection-25-buffer', carrierId: 'nationwide', name: 'Defined Protection 25% Buffer', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['25% buffer for conservative clients', 'Nationwide strength', 'Meaningful downside protection'], lastRateUpdate: '2025-01-15' },
  { id: 'prudential-flexguard-25-buffer', carrierId: 'prudential', name: 'FlexGuard 25% Buffer', term: 6, accountOptions: [{ indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.50, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false },{ indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.25, participationRate: null, bufferLevel: 25, bufferType: 'Buffer', floorLevel: null, isUncapped: false }], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['25% buffer from Prudential', '3 index choices at 25%', 'Lower cap, more protection'], lastRateUpdate: '2025-01-15' },
  // ── RiverSource Structured Solutions 2 ──
  { id: 'riversource-structured-solutions-6yr', carrierId: 'riversource', name: 'Structured Solutions 2 (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 10.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 10000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['100+ indexed account options', 'Dual direction strategies available', 'Automatic & elective lock features', 'Ameriprise advisor distribution', '2.40% minimum guaranteed interim rate'], lastRateUpdate: '2026-02-01' },
  { id: 'riversource-structured-solutions-3yr', carrierId: 'riversource', name: 'Structured Solutions 2 (3-Year)', term: 3, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.00, participationRate: null, bufferLevel: 15, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 45.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 10000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year commitment option', 'Lower surrender charges', 'Dual direction and contingent return options', 'Ameriprise advisor distribution'], lastRateUpdate: '2026-02-01' },
  // ── Prudential FlexGuard 2.0 ──
  { id: 'prudential-flexguard-2', carrierId: 'prudential', name: 'FlexGuard 2.0', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 21.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 10000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Fastest-growing RILA in history ($20B+ sales)', 'Uncapped option available', 'Capped and participation strategies', 'Launched December 2025'], lastRateUpdate: '2026-02-01' },
  // ── Lincoln Level Advantage 2 Income ──
  { id: 'lincoln-level-advantage-2-income', carrierId: 'lincoln-financial', name: 'Level Advantage 2 Income', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Greater of AV or ROP', highlights: ['First RILA with built-in income benefit', 'Estate Lock death benefit', 'Secure Lock+ in-term lock feature', 'Launched September 2025'], lastRateUpdate: '2026-02-01' },
  // ── Equitable SCS Premier ──
  { id: 'equitable-scs-premier', carrierId: 'equitable', name: 'SCS Premier', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 115, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 135, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 125, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 130, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
  ], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['All uncapped participation options', 'Enhanced participation rates vs SCS PLUS', 'Equitable — #1 RILA provider 14 of 15 years', 'Launched September 2025'], lastRateUpdate: '2026-02-01' },

  // ── Global Atlantic ForeStructured Growth II ──
  {
    id: 'global-atlantic-forestructured-growth-ii-6',
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
    lastRateUpdate: '2026-01-15'
  },
  {
    id: 'global-atlantic-forestructured-growth-ii-3',
    carrierId: 'global-atlantic',
    name: 'ForeStructured Growth II (3-Year)',
    term: 3,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 14.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Dual Directional', term: 1, capRate: 10.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 6 },
    deathBenefit: 'Account Value',
    highlights: ['3-year commitment option', 'Dual Directional available', 'Lower surrender charges', 'Part of ForeStructured Growth II suite'],
    lastRateUpdate: '2026-01-15'
  },

  // ── Transamerica Structured Index Advantage ──
  {
    id: 'transamerica-structured-index-advantage-6',
    carrierId: 'transamerica',
    name: 'Structured Index Advantage (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 25000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['5 index choices including Nasdaq-100', 'Uncapped S&P 500 with 20% buffer', 'Transamerica financial strength', '10% and 20% buffer levels'],
    lastRateUpdate: '2026-01-15'
  },

  // ── Symetra Accumulator RILA ──
  {
    id: 'symetra-accumulator-rila-6',
    carrierId: 'symetra',
    name: 'Accumulator RILA (6-Year)',
    term: 6,
    accountOptions: [
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 90, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
      { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
      { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
    ],
    minimumPremium: 10000, maximumIssueAge: 80,
    withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 },
    deathBenefit: 'Account Value',
    highlights: ['Low $10K minimum premium', 'Uncapped S&P 500 with 20% buffer', 'Symetra — Sumitomo Life subsidiary', '4 index options'],
    lastRateUpdate: '2026-01-15'
  },

  // ── Jackson National Market Link Pro II (3-Year) ──────────────────
  { id: 'jackson-market-link-3yr', carrierId: 'jackson-national', name: 'Market Link Pro II (3-Year)', term: 3, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 55.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 42.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 65.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year multi-year caps for higher potential', 'Jackson #1 VA/RILA provider', '10% and 20% buffer options', '4 index choices'], lastRateUpdate: '2026-02-01' },

  // ── North American Charter Plus RILA (6-Year) ──────────────────────
  { id: 'north-american-charter-plus-6yr', carrierId: 'north-american', name: 'Charter Plus RILA (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
  ], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['6-year commitment period', 'Uncapped S&P with 20% buffer', 'Sammons Financial Group', 'Higher caps than 3-year version'], lastRateUpdate: '2026-02-01' },

  // ── Transamerica Structured Index Advantage (6-Year) ────────────────
  { id: 'transamerica-structured-6yr', carrierId: 'transamerica', name: 'Structured Index Advantage (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.75, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['5 index choices including Nasdaq-100', '6-year surrender period', '10% and 20% buffer options', 'Transamerica brand strength'], lastRateUpdate: '2026-02-01' },

  // ── Pacific Life Pacific Odyssey (3-Year) ──────────────────────────
  { id: 'pacific-life-odyssey-3yr', carrierId: 'pacific-life', name: 'Pacific Odyssey (3-Year)', term: 3, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 50.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 3, capRate: 40.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 3, capRate: 60.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 3, capRate: 48.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 5 }, deathBenefit: 'Account Value', highlights: ['3-year multi-year caps', 'Pacific Life A+ rated', '4 index options', 'Higher potential returns with 3-year commitment'], lastRateUpdate: '2026-02-01' },

  // ── Pacific Life Pacific Odyssey (6-Year) ──────────────────────────
  { id: 'pacific-life-odyssey-6yr', carrierId: 'pacific-life', name: 'Pacific Odyssey (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 13.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Pacific Life flagship RILA', 'Uncapped S&P option', '5 index choices including Nasdaq-100', 'A+ AM Best rated carrier'], lastRateUpdate: '2026-02-01' },

  // ── Athene Amplify (6-Year) ────────────────────────────────────────
  { id: 'athene-amplify-6yr', carrierId: 'athene', name: 'Amplify (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 100, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Nasdaq-100', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Apollo-backed carrier', 'Uncapped S&P option', '5 index choices', 'Nasdaq-100 access'], lastRateUpdate: '2026-02-01' },

  // ── Corebridge Index Frontier 7 ────────────────────────────────────
  { id: 'corebridge-index-frontier-7', carrierId: 'corebridge-financial', name: 'Index Frontier 7', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Corebridge (formerly AIG)', '4 index options', '10% and 20% buffer levels', '$25K minimum'], lastRateUpdate: '2026-02-01' },

  // ── Corebridge PersistGuard 6 ──────────────────────────────────────
  { id: 'corebridge-persistguard-6yr', carrierId: 'corebridge-financial', name: 'PersistGuard RILA (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 105, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 20.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 17.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 20000, maximumIssueAge: 85, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 8 }, deathBenefit: 'Account Value', highlights: ['Uncapped option with 20% buffer', '105% S&P participation', '6-year commitment', 'Corebridge Financial strength'], lastRateUpdate: '2026-02-01' },

  // ── American Equity ShieldValue (6-Year) ───────────────────────────
  { id: 'american-equity-shield-value-6yr', carrierId: 'american-equity', name: 'ShieldValue RILA (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.25, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.75, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 19.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: null, participationRate: 95, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: true }
  ], minimumPremium: 10000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Low $10K minimum', '#1 FIA seller entering RILA', 'Uncapped option available', '6-year commitment period'], lastRateUpdate: '2026-02-01' },

  // ── Delaware Life Target Balanced RILA ─────────────────────────────
  { id: 'delaware-life-target-balanced', carrierId: 'delaware-life', name: 'Target Balanced RILA', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Bloomberg US Aggregate Bond', creditingMethod: 'Point-to-Point', term: 1, capRate: 8.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 25000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Greater of AV or ROP', highlights: ['Bond index option for conservative allocation', 'Return of Premium death benefit', 'Balanced growth and protection', 'Delaware Life strength'], lastRateUpdate: '2026-02-01' },

  // ── Midland National RetireVantage (6-Year) ────────────────────────
  { id: 'midland-national-retirevantage-6yr', carrierId: 'midland-national', name: 'RetireVantage RILA (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.75, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 12.00, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 15000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Sammons Financial Group', '$15K minimum', '6-year commitment', 'Sister to North American'], lastRateUpdate: '2026-02-01' },

  // ── Mutual of Omaha Indexed Shield (6-Year) ────────────────────────
  { id: 'mutual-of-omaha-indexed-shield-6yr', carrierId: 'mutual-of-omaha', name: 'Indexed Shield (6-Year)', term: 6, accountOptions: [
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 15.50, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'S&P 500', creditingMethod: 'Point-to-Point', term: 1, capRate: 11.50, participationRate: null, bufferLevel: 20, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'Russell 2000', creditingMethod: 'Point-to-Point', term: 1, capRate: 18.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false },
    { indexName: 'MSCI EAFE', creditingMethod: 'Point-to-Point', term: 1, capRate: 16.00, participationRate: null, bufferLevel: 10, bufferType: 'Buffer', floorLevel: null, isUncapped: false }
  ], minimumPremium: 20000, maximumIssueAge: 80, withdrawalProvisions: { freeWithdrawalPercent: 10, penaltyRate: 7 }, deathBenefit: 'Account Value', highlights: ['Mutual company trusted brand', '4 index options', '10% and 20% buffers', '6-year surrender period'], lastRateUpdate: '2026-02-01' }
];
