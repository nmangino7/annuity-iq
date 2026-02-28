// =============================================================================
// Variable Annuity (VA) Products Database
// =============================================================================
// Sources: Transamerica application forms (user-provided PDFs), SEC EDGAR
// prospectus filings, Transamerica.com, Jackson.com, annuityedu.com
// =============================================================================

export const vaProducts = [
  // ── 1. Transamerica B-Share VA ──
  {
    id: 'transamerica-b-share',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Application form ICC25 T-AP-VA10IC-1125 (user-provided PDF) + Transamerica prospectus + SEC EDGAR',
    carrierId: 'transamerica',
    name: 'Transamerica B-Share',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3],
    meCharge: 1.15,
    adminFee: 0,
    totalAnnualCharge: 1.15,
    annualServiceCharge: 35,
    meChargeByDeathBenefit: { policyValue: 1.15, returnOfPremium: 1.30, annualStepUp: 1.50 },
    fundFacilitationFee: 0.30,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 5000,
    minimumPremiumQualified: 1000,
    maximumIssueAge: 89,
    maximumIssueAgeByDB: { policyValue: 89, returnOfPremium: 85, annualStepUp: 75 },
    subaccountCount: 77,
    subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-blackrock-intl', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced'],
    livingBenefits: [
      {
        name: 'Transamerica Income Edge 1.2 (Single)',
        type: 'GMWB',
        annualCost: 1.45,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.5, age65: 6.0, age70: 6.5, age75: 7.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '6.0% at 65 requires no withdrawals prior to 10th living benefit anniversary. Requires 25% Stable Account allocation.'
      },
      {
        name: 'Transamerica Income Edge 1.2 (Joint)',
        type: 'GMWB',
        annualCost: 1.55,
        rollupRate: null,
        withdrawalRates: { age55: 3.0, age60: 4.0, age65: 5.5, age70: 6.0, age75: 6.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '5.5% at 65 requires no withdrawals prior to 10th living benefit anniversary. Requires 25% Stable Account allocation.'
      },
      {
        name: 'Transamerica Principal Optimizer 10-Year',
        type: 'GMAB',
        annualCost: 1.35,
        description: '110% protection of premium + earnings after 10 years. 100% protection on 7-year option. Requires 25% Stable Account allocation.'
      }
    ],
    deathBenefits: [
      { name: 'Policy Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death. M&E&A: 1.15%. Max issue age: 89.' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.15, description: 'Total premiums less adjusted withdrawals. M&E&A: 1.30%. Max issue age: 85.' },
      { name: 'Annual Step-Up', type: 'Enhanced', annualCost: 0.35, description: 'Highest anniversary value plus premiums less withdrawals. M&E&A: 1.50%. Max issue age: 75. Step-ups cease at age 81.' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'A+ (Stable) AM Best rated carrier with $250B+ in assets',
      'Income Edge 1.2 offers up to 6.0% single withdrawal rate at age 65',
      'Principal Optimizer provides 110% protection of premium + earnings',
      '77 investment options from top fund managers',
      'Liquidity Rider option available to eliminate surrender charges'
    ],
    sourceUrl: 'https://www.transamerica.com/financial-pro/annuities/b-share',
    lastRateUpdate: '2025-11-01'
  },

  // ── 2. Transamerica Axiom III VA ──
  {
    id: 'transamerica-axiom-iii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Application form VA-APP R1122 NIC (user-provided PDF) + Transamerica prospectus + SEC EDGAR',
    carrierId: 'transamerica',
    name: 'Transamerica Axiom III',
    contractType: 'B-Share',
    surrenderPeriod: 5,
    surrenderSchedule: [5, 4, 3, 2, 1],
    meCharge: 1.15,
    adminFee: 0,
    totalAnnualCharge: 1.15,
    annualServiceCharge: 35,
    meChargeByDeathBenefit: { policyValue: 1.00, returnOfPremium: 1.15, annualStepUp: 1.35 },
    fundFacilitationFee: 0.60,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 5000,
    minimumPremiumQualified: 1000,
    maximumIssueAge: 89,
    maximumIssueAgeByDB: { policyValue: 89, returnOfPremium: 85, annualStepUp: 75 },
    subaccountCount: 70,
    subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-blackrock-intl', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced'],
    livingBenefits: [
      {
        name: 'Transamerica Income Edge 1.2 (Single)',
        type: 'GMWB',
        annualCost: 1.45,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.5, age65: 6.0, age70: 6.5, age75: 7.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '6.0% at 65 requires no withdrawals prior to 10th anniversary. Requires 25% Stable Account.'
      },
      {
        name: 'Transamerica Income Edge 1.2 (Joint)',
        type: 'GMWB',
        annualCost: 1.55,
        rollupRate: null,
        withdrawalRates: { age55: 3.0, age60: 4.0, age65: 5.5, age70: 6.0, age75: 6.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '5.5% at 65 requires no withdrawals prior to 10th anniversary. Requires 25% Stable Account.'
      },
      {
        name: 'Transamerica Principal Optimizer 10-Year',
        type: 'GMAB',
        annualCost: 1.35,
        description: '110% protection of premium + earnings after 10 years. Requires 25% Stable Account.'
      }
    ],
    deathBenefits: [
      { name: 'Policy Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death. M&E&A: 1.00%. Max issue age: 89.' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.15, description: 'Total premiums less adjusted withdrawals. M&E&A: 1.15%. Max issue age: 85.' },
      { name: 'Annual Step-Up', type: 'Enhanced', annualCost: 0.35, description: 'Highest anniversary value plus premiums less withdrawals. M&E&A: 1.35%. Max issue age: 75. Step-ups cease at age 81.' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Tiered M&E&A pricing: 1.00% (PV DB) to 1.35% (Step-Up DB)',
      'Access Rider option eliminates all surrender charges',
      '70+ investment options from top managers',
      '5-year surrender with low charges (5%/4%/3%/2%/1%)',
      'Same TIE/TPO riders as B-Share at same cost'
    ],
    sourceUrl: 'https://www.transamerica.com/financial-pro/annuities/variable-annuities',
    lastRateUpdate: '2025-02-01'
  },

  // ── 3. Transamerica Principium IV VA ──
  {
    id: 'transamerica-principium-iv',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Application form ICC25 T-AP-VA10IC-1125 (user-provided PDF) + Transamerica prospectus + SEC EDGAR',
    carrierId: 'transamerica',
    name: 'Transamerica Principium IV',
    contractType: 'B-Share',
    surrenderPeriod: 5,
    surrenderSchedule: [8, 7, 6, 5, 4],
    meCharge: 1.00,
    adminFee: 0,
    totalAnnualCharge: 1.00,
    annualServiceCharge: 35,
    meChargeByDeathBenefit: { policyValue: 0.85, returnOfPremium: 1.00, annualStepUp: 1.20 },
    fundFacilitationFee: 0.60,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 5000,
    minimumPremiumQualified: 1000,
    maximumIssueAge: 89,
    maximumIssueAgeByDB: { policyValue: 89, returnOfPremium: 85, annualStepUp: 75 },
    subaccountCount: 36,
    subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced'],
    livingBenefits: [
      {
        name: 'Transamerica Income Edge 1.2 (Single)',
        type: 'GMWB',
        annualCost: 1.45,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.5, age65: 6.0, age70: 6.5, age75: 7.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '6.0% at 65 requires no withdrawals prior to 10th anniversary. Requires 25% Stable Account.'
      },
      {
        name: 'Transamerica Income Edge 1.2 (Joint)',
        type: 'GMWB',
        annualCost: 1.55,
        rollupRate: null,
        withdrawalRates: { age55: 3.0, age60: 4.0, age65: 5.5, age70: 6.0, age75: 6.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '5.5% at 65 requires no withdrawals prior to 10th anniversary. Requires 25% Stable Account.'
      },
      {
        name: 'Transamerica Principal Optimizer 10-Year',
        type: 'GMAB',
        annualCost: 1.35,
        description: '110% protection of premium + earnings after 10 years. Requires 25% Stable Account.'
      }
    ],
    deathBenefits: [
      { name: 'Policy Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death. M&E&A: 0.85%' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.15, description: 'Total premiums less adjusted withdrawals. M&E&A: 1.00%' },
      { name: 'Annual Step-Up', type: 'Enhanced', annualCost: 0.35, description: 'Highest anniversary value plus premiums less withdrawals. M&E&A: 1.20%. Step-ups cease at age 81.' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Streamlined 36-fund lineup for simplified investment selection',
      'Same tiered M&E&A pricing as Axiom III: 0.85%-1.20%',
      'Access Rider option eliminates all surrender charges',
      '5-year surrender period',
      'TIE/TPO riders available at same cost'
    ],
    sourceUrl: 'https://www.transamerica.com/financial-pro/annuities/variable-annuities',
    lastRateUpdate: '2025-11-01'
  },

  // ── 4. Transamerica I-Share II VA (NY) ──
  {
    id: 'transamerica-i-share-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Application form F-AP-VA11NY-1125 (user-provided PDF) + Transamerica prospectus + SEC EDGAR + dplfp.com',
    carrierId: 'transamerica',
    name: 'Transamerica I-Share II',
    contractType: 'I-Share',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.30,
    adminFee: 0,
    totalAnnualCharge: 0.30,
    annualServiceCharge: 35,
    meChargeByDeathBenefit: { policyValue: 0.20, returnOfPremium: 0.30, annualStepUp: 0.60 },
    fundFacilitationFee: 0.60,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 5000,
    minimumPremiumQualified: 1000,
    maximumIssueAge: 90,
    subaccountCount: 77,
    subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-blackrock-intl', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced'],
    livingBenefits: [
      {
        name: 'Transamerica Income Edge 1.2 (Single)',
        type: 'GMWB',
        annualCost: 1.45,
        rollupRate: null,
        withdrawalRates: { age55: 4.0, age60: 5.0, age65: 8.5, age70: 8.5, age75: 8.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Enhanced rates — up to 8.5% at age 65. Requires 20% Stable Account allocation (vs 25% for B-Share).'
      },
      {
        name: 'Transamerica Income Edge 1.2 (Joint)',
        type: 'GMWB',
        annualCost: 1.55,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.5, age65: 7.5, age70: 7.5, age75: 7.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Enhanced rates. Requires 20% Stable Account allocation.'
      },
      {
        name: 'Transamerica Principal Optimizer 10-Year',
        type: 'GMAB',
        annualCost: 1.35,
        description: '110% protection after 10 years. Requires 15% Stable Account allocation (vs 25% for B-Share).'
      }
    ],
    deathBenefits: [
      { name: 'Policy Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death. M&E&A: 0.20%' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.10, description: 'Total premiums less adjusted withdrawals. M&E&A: 0.30%' },
      { name: 'Annual Step-Up', type: 'Enhanced', annualCost: 0.40, description: 'Highest anniversary value plus premiums less withdrawals. M&E&A: 0.60%. Step-ups cease at age 81.' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'New York only',
    highlights: [
      'Ultra-low 0.20% M&E&A with Policy Value death benefit (I-Share = no load)',
      'Enhanced Income Edge rates — up to 8.5% withdrawal at age 65',
      'Lower Stable Account requirement (20% vs 25% for B-Share)',
      'No surrender charges — full liquidity from day one',
      'Issued by Transamerica Financial Life Insurance Company (NY)'
    ],
    sourceUrl: 'https://www.dplfp.com/advisor/products-annuities/variable-annuity-i-share-ii',
    lastRateUpdate: '2025-11-01'
  },

  // ── 5. Transamerica Advisory Annuity ──
  {
    id: 'transamerica-advisory',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Application form VA-APP R1119 FL (user-provided PDF) + SEC EDGAR N-4 filing + Transamerica prospectus',
    carrierId: 'transamerica',
    name: 'Transamerica Advisory Annuity',
    contractType: 'Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.27,
    adminFee: 0,
    totalAnnualCharge: 0.27,
    meChargeBreakdown: { meRisk: 0.17, admin: 0.10 },
    annualServiceCharge: 25,
    fundExpenseRange: { min: 0.11, max: 0.49 },
    minimumPremium: 5000,
    minimumPremiumQualified: 1000,
    maximumIssueAge: 95,
    maximumIssueAgeByDB: { policyValue: 95, returnOfPremium: 75 },
    subaccountCount: 26,
    subaccountFamilies: '18 Vanguard + 8 DFA (Dimensional Fund Advisors)',
    subaccountIds: ['ta-sp500-idx'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Policy Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death. M&E&A: 0.27%. Available through age 95.' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0, description: 'Total premiums less adjusted withdrawals. M&E&A: 0.47%. Available through age 75 only.' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY (separate NY version available)',
    highlights: [
      'Ultra-low 0.27% M&E&A — fee-based advisory with no commissions or surrender charges',
      '26 institutional-quality subaccounts (18 Vanguard + 8 DFA)',
      'Fund expenses 0.11%–0.49% — among lowest in the VA market',
      'Policy Value death benefit available through age 95',
      'Up to $5 million premium without prior approval'
    ],
    sourceUrl: 'https://www.transamerica.com/annuities/advisory-annuity',
    lastRateUpdate: '2025-02-01'
  },

  // ── 6. Jackson Perspective II ──
  {
    id: 'jackson-perspective-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: Jackson.com prospectus, SEC EDGAR N-4 filing, annuityedu.com, annuityexpertadvice.com',
    carrierId: 'jackson-national',
    name: 'Perspective II',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8.5, 7.5, 6.5, 5.5, 5, 4, 2],
    meCharge: 1.15,
    adminFee: 0.15,
    totalAnnualCharge: 1.30,
    annualServiceCharge: 35,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.52, max: 2.28 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    maximumAnnuitizationAge: 95,
    subaccountCount: 110,
    subaccountIds: ['pro-sp500-idx', 'pro-pimco-income', 'pro-fid-growth', 'pro-trp-bluechip', 'pro-vanguard-total'],
    livingBenefits: [
      {
        name: 'LifeGuard Freedom Flex (Single)',
        type: 'GMWB',
        annualCost: 1.50,
        maxAnnualCost: 3.00,
        rollupRate: 7.0,
        withdrawalRates: { age55: 3.75, age60: 4.00, age65: 4.75, age70: 4.75, age75: 5.50 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '7% annual rollup on benefit base. 200% income base guarantee (doubles if no withdrawals for 12 years or age 70). Fee may increase up to 0.20% on step-up.'
      },
      {
        name: 'LifeGuard Freedom Flex (Joint)',
        type: 'GMWB',
        annualCost: 1.50,
        maxAnnualCost: 3.00,
        rollupRate: 7.0,
        withdrawalRates: { age55: 3.25, age60: 3.50, age65: 4.25, age70: 4.25, age75: 5.00 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '7% annual rollup with joint spousal coverage. 200% income base guarantee.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: '5% Rollup', type: 'Enhanced', annualCost: 0.40, description: '5% annual rollup on death benefit base, rolled up through age 80' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value plus premiums less withdrawals' },
      { name: 'Combination', type: 'Enhanced', annualCost: 0.80, description: 'Greater of 5% rollup or highest anniversary value' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      '#1 selling VA in the industry for multiple years',
      'LifeGuard Freedom Flex with 7% rollup and annual step-up',
      '130 sub-account options from top fund families',
      'Multiple death benefit options including Combination rider',
      '$340B+ total Jackson National assets under management'
    ],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities/perspective-ii-disclosure.html',
    lastRateUpdate: '2026-02-22'
  },

  // ── 7. Jackson Elite Access Advisory II ──
  {
    id: 'jackson-elite-access-advisory',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Jackson Elite Access fund performance XLS (user-provided 02/22/2026) + jackson.com + BusinessWire press release + annuityedu.com + SEC EDGAR',
    carrierId: 'jackson-national',
    name: 'Elite Access Advisory II',
    contractType: 'Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0,
    adminFee: 0,
    totalAnnualCharge: 0,
    monthlyContractCharge: 20,
    annualContractCharge: 240,
    contractChargeWaivedAt: 250000,
    fundExpenseRange: { min: 0.52, max: 2.28 },
    minimumPremium: 10000,
    maximumIssueAge: 85,
    subaccountCount: 134,
    subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap', 'jn-vanguard-growth', 'jn-invesco-comstock', 'jn-mid-cap-gr', 'jn-am-europac', 'jn-dfa-intl', 'jn-goldman-strat', 'jn-pimco-total', 'jn-blackrock-bond'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'NO M&E charges — $0 asset-based fees; flat $20/month contract charge only',
      'Contract charge waived at $250,000+ account value',
      '134 sub-account options — one of the broadest fund lineups available',
      'No surrender charges — full liquidity from day one',
      'Top-performing JNL/Mellon S&P 500 Index fund (19.31% 3yr avg)'
    ],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities/elite-access-suite.html',
    lastRateUpdate: '2026-02-22'
  },

  // ── 8. Jackson Elite Access II (Commission) ──
  {
    id: 'jackson-elite-access-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SEC EDGAR N-4 filing + jackson.com prospectus + annuityedu.com + annuitygator.com',
    carrierId: 'jackson-national',
    name: 'Elite Access II',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8.25, 7.25, 6.50, 5.50, 4.50, 3.75],
    meCharge: 0.85,
    adminFee: 0.15,
    totalAnnualCharge: 1.00,
    totalAnnualChargeReduced: 0.85,
    reducedAt: 250000,
    annualContractMaintenanceCharge: 50,
    maintenanceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.52, max: 2.28 },
    minimumPremium: 5000,
    maximumIssueAge: 85,
    subaccountCount: 134,
    subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap', 'jn-vanguard-growth', 'jn-invesco-comstock', 'jn-mid-cap-gr', 'jn-am-europac', 'jn-dfa-intl', 'jn-goldman-strat', 'jn-pimco-total', 'jn-blackrock-bond'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: '5% Rollup', type: 'Enhanced', annualCost: 0.40, description: '5% annual rollup on death benefit base' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value plus premiums less withdrawals' },
      { name: 'Combination', type: 'Enhanced', annualCost: 0.80, description: 'Greater of 5% rollup or highest anniversary value' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      '1.00% M&E+Admin — reduces to 0.85% at $250K+',
      '134 sub-account options — broadest fund lineup in the Jackson suite',
      'Multiple death benefit options including Combination rider',
      '$50/yr maintenance charge waived at $50K account value',
      'Jackson National — A+ (S&P), A1 (Moody\'s), $340B total assets'
    ],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities/elite-access-suite.html',
    lastRateUpdate: '2026-02-22'
  },

  // ── 9. Jackson Perspective Advisory II ──
  {
    id: 'jackson-perspective-advisory-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'jackson.com fee-based solutions page + BusinessWire press release + AnnuityEdu review + SEC EDGAR N-4',
    carrierId: 'jackson-national',
    name: 'Perspective Advisory II',
    contractType: 'Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.45,
    adminFee: 0,
    totalAnnualCharge: 0.45,
    totalAnnualChargeReduced: 0.40,
    reducedAt: 1000000,
    annualServiceCharge: 35,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.26, max: 2.10 },
    minimumPremium: 25000,
    maximumIssueAge: 85,
    maximumAnnuitizationAge: 95,
    subaccountCount: 130,
    subaccountIds: ['pro-sp500-idx', 'pro-pimco-income', 'pro-fid-growth', 'pro-trp-bluechip', 'pro-vanguard-total'],
    livingBenefits: [
      {
        name: 'LifeGuard Freedom Accelerator (Single)',
        type: 'GMWB',
        annualCost: 1.55,
        maxAnnualCost: 3.00,
        rollupRate: null,
        withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Higher guaranteed withdrawal levels for each year of deferral. Fee may increase up to 0.20% on step-up.'
      },
      {
        name: 'LifeGuard Freedom Accelerator (Joint)',
        type: 'GMWB',
        annualCost: 1.55,
        maxAnnualCost: 3.00,
        rollupRate: null,
        withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Joint spousal coverage with guaranteed withdrawal levels.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: '5% Rollup', type: 'Enhanced', annualCost: 0.50, description: '5% annual rollup on death benefit base' },
      { name: 'Highest Quarterly Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest quarterly anniversary value plus premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states except NY (NY version has 7yr surrender)',
    highlights: [
      'Fee-based advisory product — 0.45% core charge (no commissions)',
      'LifeGuard Freedom Accelerator income rider available',
      '130+ sub-account options from top fund families',
      'No surrender charges outside NY — full liquidity',
      'Advisory fees deducted directly from contract'
    ],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities/perspective-advisory-ii-disclosure.html',
    lastRateUpdate: '2026-02-22'
  },

  // ── 10. Lincoln ChoicePlus Assurance ──
  {
    id: 'lincoln-choiceplus-assurance',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SEC EDGAR CIK 1093278 (485BPOS) + lincolnfinancial.com prospectus + annuityedu.com',
    carrierId: 'lincoln-financial',
    name: 'ChoicePlus Assurance',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3],
    meCharge: 1.10,
    adminFee: 0.10,
    totalAnnualCharge: 1.20,
    meChargeByDeathBenefit: { standard: 0.75, enhanced: 1.25 },
    annualServiceCharge: 50,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.46, max: 1.95 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 80,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Lincoln Lifetime Income Advantage 2.0 (Single)',
        type: 'GMWB',
        annualCost: 1.25,
        maxAnnualCost: 2.10,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.0, age65: 5.0, age70: 5.5, age75: 6.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Automatic annual step-up of income base. Withdrawal rates increase with each year of deferral.'
      },
      {
        name: 'Lincoln Lifetime Income Advantage 2.0 (Joint)',
        type: 'GMWB',
        annualCost: 1.50,
        maxAnnualCost: 2.10,
        rollupRate: null,
        withdrawalRates: { age55: 3.0, age60: 3.5, age65: 4.5, age70: 5.0, age75: 5.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Joint spousal coverage with lifetime income guarantee.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value locked in annually' },
      { name: 'Earnings Enhancement', type: 'Enhanced', annualCost: 0.40, description: 'Enhanced death benefit based on earnings' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Lincoln Lifetime Income Advantage 2.0 — flexible withdrawal rates that increase with deferral',
      'B-Share, L-Share, and C-Share variants available',
      '80+ sub-account options from top fund managers',
      'Lincoln Financial Group — A+ AM Best, A+ S&P, $300B+ AUM',
      '$50 service charge waived at $50K+'
    ],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variable',
    lastRateUpdate: '2025-11-01'
  },

  // ── 11. Nationwide Destination Navigator 2.0 ──
  {
    id: 'nationwide-destination-navigator',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SEC EDGAR CIK 356514 (485BPOS) + nationwide.com prospectus + annuitybroker.org',
    carrierId: 'nationwide',
    name: 'Destination Navigator 2.0',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 6, 5, 4, 3, 2],
    meCharge: 1.10,
    adminFee: 0.20,
    totalAnnualCharge: 1.30,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.40, max: 1.80 },
    minimumPremium: 10000,
    minimumPremiumQualified: 3000,
    maximumIssueAge: 85,
    subaccountCount: 100,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Nationwide Lifetime Income Rider+ (Single)',
        type: 'GMWB',
        annualCost: 1.20,
        rollupRate: 7.0,
        withdrawalRates: { age55: 3.5, age60: 4.0, age65: 5.0, age70: 5.5, age75: 6.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '7% annual rollup on benefit base with annual step-up.'
      },
      {
        name: 'Nationwide Lifetime Income Rider+ (Joint)',
        type: 'GMWB',
        annualCost: 1.50,
        rollupRate: 7.0,
        withdrawalRates: { age55: 3.0, age60: 3.5, age65: 4.5, age70: 5.0, age75: 5.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '7% annual rollup with joint spousal coverage.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Spousal Protection', type: 'Standard', annualCost: 0, description: 'Spousal continuation benefit' },
      { name: 'Highest Anniversary Value (Annual)', type: 'Enhanced', annualCost: 0.20, description: 'Highest annual anniversary value' },
      { name: 'Highest Anniversary Value (Monthly)', type: 'Enhanced', annualCost: 0.35, description: 'Highest monthly anniversary value — more frequent lock-ins' },
      { name: 'Beneficiary Protector II', type: 'Enhanced', annualCost: 0.30, description: 'Enhanced beneficiary protection' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    terminalIllnessWaiver: true,
    stateAvailability: 'All states',
    highlights: [
      'Lifetime Income Rider+ with 7% rollup and annual step-up',
      '100+ sub-account options including target-date and managed portfolios',
      'Liquidity Option variant: 4yr surrender at +0.50% M&E',
      'Terminal illness enhanced surrender value included',
      'Nationwide — A+ AM Best, A1 Moody\'s'
    ],
    sourceUrl: 'https://www.nationwide.com/personal/insurance/annuities/variable/',
    lastRateUpdate: '2025-11-01'
  },

  // ── 12. Pacific Life Pacific Odyssey ──
  {
    id: 'pacific-life-odyssey',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'PacificLife.com fact sheet + SEC EDGAR CIK 1074486 + schwab.com',
    carrierId: 'pacific-life',
    name: 'Pacific Odyssey',
    contractType: 'Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.15,
    adminFee: 0.15,
    totalAnnualCharge: 0.30,
    totalAnnualChargeReduced: 0.20,
    reducedAt: 1000000,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 25000,
    maximumIssueAge: 85,
    subaccountCount: 80,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Enhanced Income Select 22',
        type: 'GMWB',
        annualCost: 1.00,
        rollupRate: null,
        withdrawalRates: { age55: 3.5, age60: 4.0, age65: 5.0, age70: 5.5 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Guaranteed lifetime withdrawal benefit with annual step-up.'
      },
      {
        name: 'Future Income Generator',
        type: 'GMWB',
        annualCost: 0.85,
        rollupRate: null,
        withdrawalRates: { age60: 3.5, age65: 4.5, age70: 5.0 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: 'Designed for future income planning with competitive withdrawal rates.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Stepped-Up Death Benefit', type: 'Enhanced', annualCost: 0.20, description: 'Enhanced death benefit with annual step-ups' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Ultra-low 0.30% total charge — reduces to 0.20% at $1M+',
      'No surrender charges — 100% liquidity from day one',
      '80+ sub-account options with institutional share classes',
      'Multiple living benefit options (income riders at 0.75%–1.00%)',
      'Pacific Life — A+ AM Best, AA- S&P, $200B+ AUM'
    ],
    sourceUrl: 'https://www.pacificlife.com/home/products/variable-annuities/pacific-odyssey.html',
    lastRateUpdate: '2025-11-01'
  },

  // ── 13. Corebridge Polaris Platinum III ──
  {
    id: 'corebridge-polaris-platinum-iii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SEC EDGAR CIK 1070231 + corebridgefinancial.com + annuitybroker.org + Primerica VA comparison',
    carrierId: 'corebridge-financial',
    name: 'Polaris Platinum III',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2],
    meCharge: 1.30,
    adminFee: 0,
    totalAnnualCharge: 1.30,
    meChargeByDeathBenefit: { contractValue: 1.15, returnOfPremium: 1.30 },
    annualServiceCharge: 50,
    serviceChargeWaivedAt: 75000,
    fundExpenseRange: { min: 0.43, max: 1.43 },
    minimumPremium: 10000,
    minimumPremiumQualified: 4000,
    maximumIssueAge: 85,
    subaccountCount: 90,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Polaris Income Plus Daily (Single)',
        type: 'GMWB',
        annualCost: 1.25,
        maxAnnualCost: 2.20,
        rollupRate: null,
        withdrawalRates: { age45: 4.00, age55: 4.50, age65: 5.20, age75: 5.50 },
        stepUpFrequency: 'Daily',
        waitingPeriod: 0,
        description: 'Daily lock-in of benefit base with VIX-adjusted fee. Auto step-up every day.'
      },
      {
        name: 'Polaris Income Plus Daily (Joint)',
        type: 'GMWB',
        annualCost: 1.45,
        maxAnnualCost: 2.70,
        rollupRate: null,
        withdrawalRates: { age45: 3.50, age55: 4.00, age65: 4.70, age75: 5.00 },
        stepUpFrequency: 'Daily',
        waitingPeriod: 0,
        description: 'Joint daily lock-in with VIX-adjusted fee.'
      },
      {
        name: 'Polaris Income Plus',
        type: 'GMWB',
        annualCost: 1.10,
        maxAnnualCost: 2.20,
        rollupRate: null,
        incomeCredit: 6.0,
        incomeCreditYears: 12,
        withdrawalRates: { age55: 4.00, age65: 5.20, age75: 5.50 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '6% income credit for 12 years on benefit base. Annual step-up.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Contract Value (Lower M&E)', type: 'Basic', annualCost: -0.15, description: 'Reduces M&E by 0.15% — policy value only death benefit' },
      { name: 'Max Anniversary Value', type: 'Enhanced', annualCost: 0.15, description: 'Highest anniversary value locked in annually' },
      { name: 'Family Protection', type: 'Enhanced', annualCost: 0.25, description: 'Enhanced family protection death benefit' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Polaris Income Plus Daily — industry-unique daily benefit base lock-in',
      '6% income credit for 12 years on Income Plus rider',
      'Early Access Rider: reduces surrender to 4yr at +0.40% M&E',
      '90+ sub-account options from top managers',
      'Corebridge Financial (formerly AIG) — A AM Best, A+ S&P'
    ],
    sourceUrl: 'https://www.corebridgefinancial.com/rs/variable-annuities/polaris',
    lastRateUpdate: '2025-11-01'
  },

  // ── 14. Prudential Premier Retirement B Series ──
  {
    id: 'prudential-premier-retirement-b',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    discontinuedDate: '2016-08', // No longer offered for new sales — Prudential lists as legacy/discontinued product
    verificationSource: 'SEC EDGAR (Pruco Life) + Prudential.com prospectus + annuitygator.com',
    carrierId: 'prudential',
    name: 'Premier Retirement B Series',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 6, 5, 4.5, 4, 0],
    meCharge: 1.30,
    adminFee: 0.15,
    totalAnnualCharge: 1.45,
    annualServiceCharge: 50,
    fundExpenseRange: { min: 0.59, max: 2.11 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 61,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Highest Daily Lifetime Income (Single)',
        type: 'GMWB',
        annualCost: 1.00,
        maxAnnualCost: 1.50,
        rollupRate: null,
        withdrawalRates: { age55: 3.50, age60: 4.00, age65: 5.00, age70: 5.50, age75: 6.00 },
        stepUpFrequency: 'Daily',
        waitingPeriod: 0,
        description: 'Patented Highest Daily benefit base lock-in. Auto-steps up to highest daily value.'
      },
      {
        name: 'Highest Daily Lifetime Income (Joint)',
        type: 'GMWB',
        annualCost: 1.20,
        maxAnnualCost: 1.50,
        rollupRate: null,
        withdrawalRates: { age55: 3.00, age60: 3.50, age65: 4.50, age70: 5.00, age75: 5.50 },
        stepUpFrequency: 'Daily',
        waitingPeriod: 0,
        description: 'Joint daily lock-in with spousal continuation.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest annual anniversary value' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Patented Highest Daily benefit base — locks in gains every trading day',
      'Low 1.00% base rider cost for single Highest Daily Lifetime Income',
      '7-year surrender with 0% in final year',
      '61+ sub-account options from top Prudential fund managers',
      'Prudential Financial — AA- S&P, A1 Moody\'s, Aa3 Fitch'
    ],
    sourceUrl: 'https://www.prudential.com/financial-professionals/variable-annuities',
    lastRateUpdate: '2025-11-01'
  },

  // ── 15. Brighthouse FlexChoice Access ──
  {
    id: 'brighthouse-flexchoice-access',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SEC EDGAR CIK 356475 + brighthousefinancial.com fact cards + annuityedu.com',
    carrierId: 'brighthouse-financial',
    name: 'Series VA with FlexChoice Access',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 6, 5, 4, 3, 2],
    meCharge: 1.25,
    adminFee: 0.05,
    totalAnnualCharge: 1.30,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.51, max: 1.21 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 75,
    subaccountIds: [],
    nursingHomeWaiver: true,
    terminalIllnessWaiver: true,
    livingBenefits: [
      {
        name: 'FlexChoice Access (Single)',
        type: 'GMWB',
        annualCost: 1.35,
        maxAnnualCost: 2.00,
        rollupRate: 5.0,
        withdrawalRates: { age55: 3.50, age60: 4.00, age65: 5.00, age70: 5.50, age75: 6.00 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '5% rollup on benefit base with annual step-up.'
      },
      {
        name: 'FlexChoice Access (Joint)',
        type: 'GMWB',
        annualCost: 1.50,
        maxAnnualCost: 2.00,
        rollupRate: 5.0,
        withdrawalRates: { age55: 3.00, age60: 3.50, age65: 4.50, age70: 5.00, age75: 5.50 },
        stepUpFrequency: 'Annual',
        waitingPeriod: 0,
        description: '5% rollup with joint spousal coverage.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of policy value or total premiums less withdrawals' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest anniversary value locked in annually' },
      { name: 'FlexChoice Access DB', type: 'Enhanced', annualCost: 0.65, maxAnnualCost: 1.20, description: 'Enhanced death benefit with FlexChoice Access feature' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'FlexChoice Access with 5% rollup and nursing home/terminal illness waivers',
      '100% of earnings available penalty-free at any time',
      'VA-4 variant available: 4yr surrender at higher M&E',
      '75+ sub-account options with low average expense (0.89%)',
      'Brighthouse Financial — A AM Best, A+ S&P'
    ],
    sourceUrl: 'https://www.brighthousefinancial.com/products/annuities/variable-annuities/',
    lastRateUpdate: '2025-11-01'
  },

  // ── 16. Security Benefit EliteDesigns II ──
  {
    id: 'security-benefit-elitedesigns-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'SecurityBenefit.com + SEC EDGAR CIK 1091459 + Primerica VA comparison',
    carrierId: 'security-benefit',
    name: 'EliteDesigns II',
    contractType: 'B-Share',
    surrenderPeriod: 5,
    surrenderSchedule: [7, 6, 5, 4, 3],
    meCharge: 1.20,
    adminFee: 0.25,
    totalAnnualCharge: 1.45,
    totalAnnualChargeReduced: 1.25,
    reducedAt: 500000,
    fundExpenseRange: { min: 0.50, max: 2.00 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 80,
    subaccountCount: 40,
    subaccountIds: [],
    nursingHomeWaiver: true,
    terminalIllnessWaiver: true,
    livingBenefits: [],
    deathBenefits: [
      { name: 'Contract Value', type: 'Standard', annualCost: 0, description: 'Policy value at time of death' },
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.35, description: 'Guaranteed ROP for owners age 80 and under at purchase' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Accumulation-focused VA — no income riders, low 5-year surrender',
      'Includes Dimensional (DFA) and Vanguard sub-accounts',
      'M&E reduces to 1.00% at $500K+',
      'Nursing home and terminal illness waivers included',
      'Security Benefit — A AM Best, managed by Guggenheim'
    ],
    sourceUrl: 'https://www.securitybenefit.com/individual/annuities/variable-annuities',
    lastRateUpdate: '2025-11-01'
  },
  // ── 17. Fidelity Personal Retirement Annuity (FPRA) ──
  {
    id: 'fidelity-fpra',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-27',
    verificationSource: 'Fidelity.com, SEC EDGAR prospectus, SmartAsset, AnnuityGator',
    carrierId: 'fidelity-life',
    name: 'Fidelity Personal Retirement Annuity (FPRA)',
    contractType: 'No-Load / Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.25,
    adminFee: 0,
    totalAnnualCharge: 0.25,
    annualServiceCharge: 0,
    meChargeByDeathBenefit: null,
    fundFacilitationFee: 0,
    fundExpenseRange: { min: 0.10, max: 2.07 },
    minimumPremium: 10000,
    minimumPremiumQualified: 10000,
    maximumIssueAge: 90,
    maximumIssueAgeByDB: null,
    subaccountCount: 65,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Contract Value', type: 'Standard', annualCost: 0, description: 'Current contract value — no guaranteed minimum death benefit' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Lowest-cost VA on the market — only 0.25% M&E (0.10% at $1M+)',
      'No surrender charges — 100% liquidity from day one',
      '65+ Fidelity investment options including index funds',
      'No income riders — pure accumulation and tax-deferral vehicle',
      'Fidelity Investments — one of the largest financial services firms'
    ],
    sourceUrl: 'https://www.fidelity.com/annuities/personal-retirement-annuity/overview',
    lastRateUpdate: '2026-02-27'
  },

  // ── 18. Vanguard Variable Annuity ──
  {
    id: 'vanguard-variable-annuity',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'SEC EDGAR CIK 866252, Vanguard.com, Kiplinger, Morningstar',
    carrierId: 'vanguard',
    name: 'Vanguard Variable Annuity',
    contractType: 'No-Load / Direct',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.20,
    adminFee: 0.10,
    totalAnnualCharge: 0.30,
    annualServiceCharge: 25,
    serviceChargeWaivedAt: 25000,
    fundExpenseRange: { min: 0.15, max: 0.44 },
    minimumPremium: 5000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 30,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of contract value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Ultra-low 0.30% total annual charge (M&E 0.20% + admin 0.10%)',
      'No surrender charges — full liquidity from day one',
      'No commissions — sold direct by Vanguard',
      'Low-cost Vanguard index funds with expenses 0.15%-0.44%',
      'Among the lowest-cost VAs in the industry'
    ],
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/866252/000119312520257572/d75620dn4.htm',
    lastRateUpdate: '2025-01-01'
  },

  // ── 19. Nationwide Monument Advisor ──
  {
    id: 'nationwide-monument-advisor',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'SEC EDGAR CIK 1005336, Nationwide/JeffNat.com, prospectus',
    carrierId: 'nationwide',
    name: 'Nationwide Monument Advisor',
    contractType: 'No-Load / IOVA',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0,
    adminFee: 0,
    totalAnnualCharge: 0,
    annualServiceCharge: 240,
    flatMonthlyFee: 20,
    fundExpenseRange: { min: 0.03, max: 1.50 },
    minimumPremium: 25000,
    minimumPremiumQualified: 10000,
    maximumIssueAge: 85,
    subaccountCount: 350,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Contract Value', type: 'Standard', annualCost: 0, description: 'Current contract value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Industry first flat-fee Investment Only Variable Annuity (IOVA)',
      'No M&E charge — flat $20/month ($240/year) regardless of balance',
      'No surrender charges — full liquidity',
      '350+ investment options — largest fund lineup in VA market',
      'Originally Jefferson National — acquired by Nationwide in 2017'
    ],
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1005336/000119312521133206/d109569d485bpos.htm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 20. TIAA Intelligent Variable Annuity ──
  {
    id: 'tiaa-intelligent-va',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'SEC EDGAR CIK 1067490, TIAA.org, SmartAsset, AnnuityDigest',
    carrierId: 'tiaa',
    name: 'TIAA Intelligent Variable Annuity',
    contractType: 'No-Load / Direct',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.40,
    adminFee: 0,
    totalAnnualCharge: 0.40,
    meChargeByBalance: { under100k: 0.40, over100k: 0.25, over250k: 0.20, over500k: 0.15 },
    annualServiceCharge: 15,
    fundExpenseRange: { min: 0.20, max: 1.10 },
    minimumPremium: 2500,
    minimumPremiumQualified: 2500,
    maximumIssueAge: 85,
    subaccountCount: 45,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'GLWB Rider',
        type: 'GMWB',
        annualCost: 1.20,
        description: 'Guaranteed Lifetime Withdrawal Benefit — 1.20% annual charge'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of contract value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'M&E charge tiers by balance: 0.40% (<$100K) down to 0.15% ($500K+)',
      'No surrender charges — full liquidity from day one',
      'Low minimum premium of $2,500',
      'Optional GLWB rider available at 1.20%',
      'Issued by TIAA-CREF Life Insurance Company'
    ],
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1067490/000119312514076820/d681776d485apos.htm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 21. Equitable Investment Edge (Series B) ──
  {
    id: 'equitable-investment-edge-b',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'SEC EDGAR CIK 1537470, Equitable.com, SmartAsset prospectus review',
    carrierId: 'equitable',
    name: 'Equitable Investment Edge (Series B)',
    contractType: 'B-Share',
    surrenderPeriod: 6,
    surrenderSchedule: [6, 5, 4, 3, 2, 1],
    meCharge: 1.10,
    adminFee: 0,
    totalAnnualCharge: 1.10,
    annualServiceCharge: 50,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.71, max: 1.00 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 80,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.20, description: 'Return of purchase payments less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Combined M&E&A of 1.10% — competitive for B-share class',
      'Segment investment options lower all-in costs vs traditional subaccounts',
      'Optional Return of Premium death benefit at 0.20%',
      '$50 annual contract fee waived at $100K+',
      'Part of Equitable\'s Investment Edge family of products'
    ],
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1537470/000119312521135891/d109166d497vpi.htm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 22. Equitable Investment Edge ADV ──
  {
    id: 'equitable-investment-edge-adv',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Equitable.com prospectus, SEC EDGAR CIK 1537470',
    carrierId: 'equitable',
    name: 'Equitable Investment Edge ADV',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.35,
    adminFee: 0,
    totalAnnualCharge: 0.35,
    annualServiceCharge: 50,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.71, max: 1.00 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 80,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Enhanced', annualCost: 0.20, description: 'Return of purchase payments less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Advisory/fee-based version — ultra-low 0.35% M&E',
      'No surrender charges — 100% liquidity',
      'Designed for fee-based RIA and advisory practices',
      'Same fund lineup as Series B at lower insurance cost',
      'Segment investment options for downside protection without M&E'
    ],
    sourceUrl: 'https://equitable.com/financial-professionals/annuities/investment-edge-variable-annuity',
    lastRateUpdate: '2025-05-01'
  },

  // ── 23. MassMutual Transitions Select II ──
  {
    id: 'massmutual-transitions-select-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'MassMutual.com, SmartAsset review, SEC EDGAR prospectus',
    carrierId: 'massmutual',
    name: 'MassMutual Transitions Select II',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2],
    meCharge: 1.30,
    adminFee: 0,
    totalAnnualCharge: 1.30,
    annualServiceCharge: 40,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.54, max: 2.59 },
    minimumPremium: 10000,
    minimumPremiumQualified: 10000,
    maximumIssueAge: 75,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Issued by Massachusetts Mutual Life Insurance Company',
      '1.30% combined M&E and administrative charge',
      '$40 annual contract fee waived at $100K+',
      'Max issue age 75',
      '10% annual free withdrawal'
    ],
    sourceUrl: 'https://www.massmutual.com/product-performance/massmutual-transitions-select-ii',
    lastRateUpdate: '2025-05-01'
  },

  // ── 24. Schwab Genesis Variable Annuity (Protective Life) ──
  {
    id: 'schwab-genesis-va',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Schwab.com, Protective Life prospectus, BusinessWire announcement',
    carrierId: 'protective',
    name: 'Schwab Genesis Variable Annuity',
    contractType: 'B-Share (Low-Cost)',
    surrenderPeriod: 5,
    surrenderSchedule: [5, 4, 3, 2, 1],
    meCharge: 0.45,
    adminFee: 0,
    totalAnnualCharge: 0.45,
    meChargeByBalance: { under500k: 0.45, over500k: 0.40, over1m: 0.35 },
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.03, max: 0.75 },
    minimumPremium: 5000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'SecurePay Life (Single)',
        type: 'GMWB',
        annualCost: 1.10,
        maxAnnualCost: 2.00,
        description: 'Guaranteed lifetime withdrawal benefit — 1.10% of benefit base annually'
      }
    ],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Enhanced', annualCost: 0.20, description: 'Total purchase payments less adjusted withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Among lowest-cost B-share VAs — only 0.45% M&E&A',
      'Tiered pricing: 0.40% at $500K+, 0.35% at $1M+',
      'Issued by Protective Life (PLICO) — distributed through Schwab',
      'SecurePay Life GLWB available at 1.10%',
      '5-year surrender period with low charges'
    ],
    sourceUrl: 'https://www.schwab.com/annuities/variable-annuities/schwab-genesis-variable-annuity',
    lastRateUpdate: '2025-01-01'
  },

  // ── 25. Schwab Genesis Advisory Variable Annuity ──
  {
    id: 'schwab-genesis-advisory-va',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Schwab.com, Protective Life prospectus, BusinessWire',
    carrierId: 'protective',
    name: 'Schwab Genesis Advisory Variable Annuity',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.25,
    adminFee: 0,
    totalAnnualCharge: 0.25,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.03, max: 0.75 },
    minimumPremium: 5000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'SecurePay Life (Single)',
        type: 'GMWB',
        annualCost: 1.10,
        maxAnnualCost: 2.00,
        description: 'Guaranteed lifetime withdrawal benefit — 1.10% of benefit base annually'
      }
    ],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Enhanced', annualCost: 0.20, description: 'Total purchase payments less adjusted withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Ultra-low 0.25% M&E&A — among cheapest VAs available',
      'No surrender charges — 100% liquidity',
      'Fee-based advisory version of Schwab Genesis',
      'Issued by Protective Life (PLICO) — designed for RIAs',
      'Morningstar average VA fee is 1.29% — this is 80% cheaper'
    ],
    sourceUrl: 'https://schwab.protective.com/annuities/variable-annuities/schwab-genesis-advisory',
    lastRateUpdate: '2025-01-01'
  },

  // ── 26. RiverSource RAVA 5 Advantage (7-Year) ──
  {
    id: 'riversource-rava5-advantage-7yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'RiverSource.com prospectus, Ameriprise, SEC EDGAR',
    carrierId: 'riversource',
    name: 'RiverSource RAVA 5 Advantage (7-Year)',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2],
    meCharge: 1.10,
    adminFee: 0,
    totalAnnualCharge: 1.10,
    annualServiceCharge: 50,
    fundExpenseRange: { min: 0.30, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 2000,
    maximumIssueAge: 85,
    subaccountCount: 70,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'M&E of 1.10% for 7-year surrender class',
      'Issued by RiverSource Life Insurance Company (Ameriprise)',
      'Contracts offered on/after April 29, 2019',
      'Optional death benefit riders available at additional cost',
      '70+ sub-account investment options'
    ],
    sourceUrl: 'https://www.riversource.com/binaries/content/assets/riversource/1/6720.pdf',
    lastRateUpdate: '2025-05-01'
  },

  // ── 27. RiverSource RAVA 5 Advantage (10-Year) ──
  {
    id: 'riversource-rava5-advantage-10yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'RiverSource.com prospectus, Ameriprise, SEC EDGAR',
    carrierId: 'riversource',
    name: 'RiverSource RAVA 5 Advantage (10-Year)',
    contractType: 'B-Share',
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 2, 1, 1],
    meCharge: 0.95,
    adminFee: 0,
    totalAnnualCharge: 0.95,
    annualServiceCharge: 50,
    fundExpenseRange: { min: 0.30, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 2000,
    maximumIssueAge: 85,
    subaccountCount: 70,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Lower M&E of 0.95% in exchange for 10-year surrender period',
      'Issued by RiverSource Life Insurance Company (Ameriprise)',
      'Same fund lineup as 7-year version at lower annual cost',
      'Optional death benefit riders available',
      'Better for long-term accumulation strategies'
    ],
    sourceUrl: 'https://www.riversource.com/binaries/content/assets/riversource/1/6720.pdf',
    lastRateUpdate: '2025-05-01'
  },

  // ── 28. Corebridge/VALIC Portfolio Director ──
  {
    id: 'corebridge-valic-portfolio-director',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'SEC EDGAR CIK 354912, Corebridge Financial, 403bCompare',
    carrierId: 'corebridge',
    name: 'Corebridge Portfolio Director (VALIC)',
    contractType: 'Group VA / Employer Plan',
    surrenderPeriod: 5,
    surrenderSchedule: [5, 5, 5, 5, 5],
    meCharge: 1.00,
    adminFee: 0,
    totalAnnualCharge: 1.00,
    annualServiceCharge: 15,
    meChargeByFund: { valicCompanyI: 1.00, valicCompanyII: 0.75, publicFunds: 1.00 },
    fundExpenseRange: { min: 0.12, max: 1.15 },
    minimumPremium: 0,
    minimumPremiumQualified: 0,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Interest Guaranteed', type: 'Standard', annualCost: 0, description: 'Death benefit guaranteed by contract during purchase period' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Group variable annuity for 401(a), 403(b), 457(b) plans',
      'M&E varies by fund family: 0.75% (VALIC II) to 1.25%',
      'Issued by The Variable Annuity Life Insurance Company (VALIC)',
      'Now administered under Corebridge Financial (former AIG)',
      '5% surrender charge on contributions within 60 months'
    ],
    sourceUrl: 'https://www.corebridgefinancial.com/rs/pd/portfolio-director',
    lastRateUpdate: '2025-01-01'
  },

  // ── 29. MetLife Preference Plus ──
  {
    id: 'metlife-preference-plus',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2013-10', // No longer offered for new sales — closed to new group sales 10/4/2013
    verificationSource: 'SEC EDGAR, MetLife prospectus, Bogleheads review, SmartAsset',
    carrierId: 'metlife',
    name: 'MetLife Preference Plus Account',
    contractType: 'Group VA / Employer Plan',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 1.25,
    adminFee: 0,
    totalAnnualCharge: 1.25,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 25000,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 0,
    minimumPremiumQualified: 0,
    maximumIssueAge: 85,
    subaccountCount: 40,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Account value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      '1.25% annual Separate Account charge (M&E)',
      'No surrender charges — group annuity for employer plans',
      'Issued by Metropolitan Life Insurance Company',
      '$30 annual contract fee waived at $25K+',
      'Available through employer-sponsored retirement plans'
    ],
    sourceUrl: 'https://www.metlife.com/ppa/',
    lastRateUpdate: '2025-01-01'
  },

  // ── 30. MetLife Financial Freedom Account ──
  {
    id: 'metlife-financial-freedom-account',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2013-10', // No longer offered for new sales — MetLife exited individual/retail VA market
    verificationSource: 'SEC EDGAR CIK 744043, MetLife prospectus, 403bCompare',
    carrierId: 'metlife',
    name: 'MetLife Financial Freedom Account',
    contractType: 'Group VA / Employer Plan',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.95,
    adminFee: 0,
    totalAnnualCharge: 0.95,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 25000,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 0,
    minimumPremiumQualified: 0,
    maximumIssueAge: 85,
    subaccountCount: 40,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Account value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      '0.95% annual Separate Account charge — lower than Preference Plus',
      'No surrender charges — group variable annuity',
      'Issued by Metropolitan Life Insurance Company',
      'Available through employer-sponsored 403(b) and 457(b) plans',
      '$30 annual contract fee waived at $25K+'
    ],
    sourceUrl: 'https://www.metlife.com/ffa/',
    lastRateUpdate: '2025-01-01'
  },

  // ── 31. Sun Life Masters (7-Year) ──
  {
    id: 'sun-life-masters-7yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2011-12', // No longer offered for new sales — Sun Life exited US VA market effective 12/30/2011
    verificationSource: 'SunLifeDistributors.com, SEC EDGAR CIK 853285, prospectus',
    carrierId: 'sun-life',
    name: 'Sun Life Masters Variable Annuity (7-Year)',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 5, 4, 3, 2, 1],
    meCharge: 1.35,
    adminFee: 0,
    totalAnnualCharge: 1.35,
    annualServiceCharge: 30,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Sun Income Maximizer (Single)',
        type: 'GMWB',
        annualCost: 1.10,
        maxAnnualCost: 1.75,
        description: 'Guaranteed lifetime withdrawal benefit with annual step-up'
      },
      {
        name: 'Sun Income Maximizer (Joint)',
        type: 'GMWB',
        annualCost: 1.30,
        maxAnnualCost: 1.95,
        description: 'Joint spousal GLWB coverage'
      }
    ],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' },
      { name: 'Maximum Anniversary Value', type: 'Enhanced', annualCost: 0.40, description: 'Highest anniversary account value' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      '1.35% insurance charge for 7-year surrender option',
      'Sun Income Maximizer GLWB at 1.10% (1.75% max)',
      'Maximum Anniversary Value death benefit at 0.40%',
      'Issued by Sun Life Assurance Company of Canada (U.S.)',
      'Distributed through Sun Life Financial Distributors'
    ],
    sourceUrl: 'https://www.sunlifedistributors.com/prodline/public/annuity/va/masters/en/masters_home.cfm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 32. Sun Life Masters (4-Year) ──
  {
    id: 'sun-life-masters-4yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2011-12', // No longer offered for new sales — Sun Life exited US VA market effective 12/30/2011
    verificationSource: 'SunLifeDistributors.com, SEC EDGAR CIK 853285, prospectus',
    carrierId: 'sun-life',
    name: 'Sun Life Masters Variable Annuity (4-Year)',
    contractType: 'L-Share',
    surrenderPeriod: 4,
    surrenderSchedule: [8, 6, 4, 2],
    meCharge: 1.65,
    adminFee: 0,
    totalAnnualCharge: 1.65,
    annualServiceCharge: 30,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Sun Income Maximizer (Single)',
        type: 'GMWB',
        annualCost: 1.10,
        maxAnnualCost: 1.75,
        description: 'Guaranteed lifetime withdrawal benefit with annual step-up'
      }
    ],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' },
      { name: 'Maximum Anniversary Value', type: 'Enhanced', annualCost: 0.40, description: 'Highest anniversary account value' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      '1.65% insurance charge — higher M&E for shorter surrender',
      'Only 4-year surrender period (L-Share class)',
      'Same riders and death benefits as 7-year version',
      'Better for clients who want liquidity sooner',
      'Issued by Sun Life Assurance Company of Canada (U.S.)'
    ],
    sourceUrl: 'https://www.sunlifedistributors.com/prodline/public/annuity/va/masters/en/masters_home.cfm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 33. Global Atlantic ForeInvestors Choice (B-Share) ──
  {
    id: 'global-atlantic-foreinvestors-choice-b',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'GlobalAtlantic.com, AnnuityEdu review, SEC EDGAR prospectus',
    carrierId: 'global-atlantic',
    name: 'Global Atlantic ForeInvestors Choice (B-Share)',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 5, 4, 3, 2, 1],
    meCharge: 1.00,
    adminFee: 0,
    totalAnnualCharge: 1.00,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 95,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      '1.00% combined M&E&A — below industry average of 1.25%',
      'Nearly 100 investment options from top fund managers',
      'B-Share, C-Share, and I-Share classes available',
      'Issued by Forethought Life Insurance Company (Global Atlantic)',
      '7-year declining surrender charge schedule'
    ],
    sourceUrl: 'https://www.globalatlantic.com/retirement-annuities/variable-annuities/foreinvestors-choice',
    lastRateUpdate: '2025-01-01'
  },

  // ── 34. Prudential FlexGuard ──
  {
    id: 'prudential-flexguard',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Prudential.com prospectus, SEC EDGAR, Bogleheads review',
    carrierId: 'prudential',
    name: 'Prudential FlexGuard Indexed Variable Annuity',
    contractType: 'RILA / B-Share',
    surrenderPeriod: 6,
    surrenderSchedule: [6, 5, 4, 3, 2, 1],
    meCharge: 1.30,
    adminFee: 0,
    totalAnnualCharge: 1.30,
    meChargeNote: 'M&E&A applies only to variable subaccount allocations, not index-linked segments',
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.40, max: 1.20 },
    minimumPremium: 10000,
    minimumPremiumQualified: 10000,
    maximumIssueAge: 85,
    subaccountCount: 25,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Registered index-linked annuity (RILA) with buffer protection',
      'M&E&A of 1.30% applies only to variable subaccounts — not index segments',
      'Multiple index strategies with 10%/15%/20% buffer options',
      'FlexGuard 2.0 launched Dec 2025 with new allocation options',
      'Issued by Pruco Life Insurance Company (Prudential subsidiary)'
    ],
    sourceUrl: 'https://www.prudential.com/advisors/annuities/annuity-strategies/flexguard-indexed-variable-annuity',
    lastRateUpdate: '2025-12-15'
  },

  // ── 35. Pacific Life Pacific Choice (5-Year) ──
  {
    id: 'pacific-life-pacific-choice-5yr',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'PacificLife.com prospectus PDF, BusinessWire launch announcement',
    carrierId: 'pacific-life',
    name: 'Pacific Life Pacific Choice (5-Year)',
    contractType: 'B-Share',
    surrenderPeriod: 5,
    surrenderSchedule: [8, 7, 6, 5, 4],
    meCharge: 1.20,
    adminFee: 0,
    totalAnnualCharge: 1.20,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.30, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 90,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      '1.20% M&E&A for 5-year withdrawal charge option',
      '90+ investment options from top fund managers',
      'Balance tier discounts at $500K+',
      'Issued by Pacific Life Insurance Company',
      '3-year and no-surrender options also available at higher M&E'
    ],
    sourceUrl: 'https://www.pacificlife.com/content/dam/paclife/rsd/annuities/public/prospectuses-and-supplements/prospectus/pacific_choice_prospectus.pdf',
    lastRateUpdate: '2025-05-01'
  },

  // ── 36. Pacific Life Pacific Choice (No Surrender) ──
  {
    id: 'pacific-life-pacific-choice-nosurrender',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'PacificLife.com prospectus PDF, BusinessWire launch announcement',
    carrierId: 'pacific-life',
    name: 'Pacific Life Pacific Choice (No Surrender)',
    contractType: 'C-Share / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 1.60,
    adminFee: 0,
    totalAnnualCharge: 1.60,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.30, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 90,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      'No withdrawal charges — 100% liquidity from day one',
      'Higher M&E of 1.60% is trade-off for no surrender period',
      '90+ investment options from top fund managers',
      'Same product family as Pacific Choice 5-Year',
      'Issued by Pacific Life Insurance Company'
    ],
    sourceUrl: 'https://www.pacificlife.com/content/dam/paclife/rsd/annuities/public/prospectuses-and-supplements/prospectus/pacific_choice_prospectus.pdf',
    lastRateUpdate: '2025-05-01'
  },

  // ── 37. New York Life Premier Plus Variable Annuity II ──
  {
    id: 'nyl-premier-plus-va-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'NewYorkLife.com, SEC EDGAR CIK 1209501, prospectus performance summary',
    carrierId: 'new-york-life',
    name: 'New York Life Premier Plus Variable Annuity II',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 5, 4, 3, 2, 1],
    meCharge: 1.60,
    adminFee: 0,
    totalAnnualCharge: 1.60,
    meChargeAfterSurrender: 1.40,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 75,
    subaccountCount: 40,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'M&E 1.60% during surrender period, drops to 1.40% after',
      'Unique M&E structure — can be based on premiums or accumulation value',
      'Issued by New York Life Insurance and Annuity Corporation (NYLIAC)',
      '$30 annual service fee waived at $100K+',
      'Max issue age 75 (nonqualified)'
    ],
    sourceUrl: 'https://www.newyorklife.com/products/investments/annuities/variable-annuities/nyl-premier-plus-va-ii-prospectus',
    lastRateUpdate: '2025-05-01'
  },

  // ── 38. Lincoln American Legacy (B-Share) ──
  {
    id: 'lincoln-american-legacy-b',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'LincolnFinancial.com, AnnuityGator review, SEC EDGAR prospectus',
    carrierId: 'lincoln',
    name: 'Lincoln American Legacy (B-Share)',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2],
    meCharge: 1.15,
    adminFee: 0.10,
    totalAnnualCharge: 1.25,
    annualServiceCharge: 35,
    serviceChargeWaivedAt: 50000,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 60,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      '1.25% total Separate Account expense (1.15% M&E + 0.10% admin)',
      'Part of Lincoln American Legacy Suite — 7 versions available',
      'Issued by The Lincoln National Life Insurance Company',
      'Optional living benefit riders available at additional cost',
      'One of the largest VA lineups in the industry'
    ],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities/americanlegacy',
    lastRateUpdate: '2025-05-01'
  },

  // ── 39. Symetra True Variable Annuity ──
  {
    id: 'symetra-true-va',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2020-01', // No longer offered for new sales — Symetra exited VA market; not in current product lineup
    verificationSource: 'Symetra.com, SEC EDGAR CIK 912869, Symetra press release',
    carrierId: 'symetra',
    name: 'Symetra True Variable Annuity',
    contractType: 'No-Load / Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.60,
    adminFee: 0,
    totalAnnualCharge: 0.60,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.30, max: 1.20 },
    minimumPremium: 25000,
    minimumPremiumQualified: 25000,
    maximumIssueAge: 85,
    subaccountCount: 45,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      'Total M&E + admin + distribution fees of only 0.60% — lowest quartile',
      'No surrender charges — full liquidity from day one',
      'No front-end or back-end sales charges',
      '$25,000 minimum investment',
      'Issued by Symetra Life Insurance Company'
    ],
    sourceUrl: 'https://investors.symetra.com/news-releases/news-release-details/symetra-true-variable-annuity-offers-low-fees-tax-deferral-and',
    lastRateUpdate: '2025-01-01'
  },

  // ── 40. Protective Aspirations Variable Annuity ──
  {
    id: 'protective-aspirations-va',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Protective Life prospectus, Allstate/Protective website, 2024 product updates',
    carrierId: 'protective',
    name: 'Protective Aspirations Variable Annuity',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2],
    meCharge: 1.25,
    adminFee: 0,
    totalAnnualCharge: 1.25,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 55,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'SecurePay Protector (Single)',
        type: 'GMWB',
        annualCost: 1.50,
        maxAnnualCost: 2.50,
        rollupRate: 7.0,
        description: '7% compounding rollup during accumulation. Fee increased to 1.50% effective Oct 2024.'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' },
      { name: 'Maximum Daily Value', type: 'Enhanced', annualCost: 0.50, description: 'Highest daily account value — available up to age 77' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'SecurePay Protector with 7% compounding rollup at 1.50%',
      'Maximum Daily Value death benefit at 0.50% — unique to market',
      '2024 enhancements: advance payout options, SecurePay NH cap to 15%',
      'Issued by Protective Life Insurance Company (PLICO)',
      'Distributed through Allstate financial services'
    ],
    sourceUrl: 'https://allstate.protective.com/retirement/variable-annuities/protective-aspirations',
    lastRateUpdate: '2024-10-07'
  },

  // ── 41. Protective Investors Benefit Advisory ──
  {
    id: 'protective-investors-benefit-advisory',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Protective Life website, SEC EDGAR, prospectus',
    carrierId: 'protective',
    name: 'Protective Investors Benefit Advisory Variable Annuity',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.40,
    adminFee: 0,
    totalAnnualCharge: 0.40,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 55,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'SecurePay Pro',
        type: 'GMWB',
        annualCost: 1.20,
        description: 'Allows 1% additional withdrawal for advisory fees without impacting benefit base'
      }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      'Low 0.40% M&E — designed for fee-based advisory practices',
      'No surrender charges — 100% liquidity',
      'SecurePay Pro allows 1% advisory fee withdrawal without GLWB impact',
      'Issued by Protective Life Insurance Company (PLICO)',
      'SecurePay Life also available at 1.10% rider fee'
    ],
    sourceUrl: 'https://finpro.protective.com/retirement/variable-annuities/protective-investors-benefit-advisory',
    lastRateUpdate: '2025-01-01'
  },

  // ── 42. Allianz Index Advantage+ NY ──
  {
    id: 'allianz-index-advantage-plus-ny',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Allianz Life prospectus INYP-002, SEC EDGAR CIK 845775',
    carrierId: 'allianz',
    name: 'Allianz Index Advantage+ New York Variable Annuity',
    contractType: 'RILA / B-Share',
    surrenderPeriod: 6,
    surrenderSchedule: [8, 7, 6, 5, 4, 3],
    meCharge: 1.25,
    adminFee: 0,
    totalAnnualCharge: 1.25,
    meChargeNote: 'M&E applies to variable investment option only — not index strategies',
    annualServiceCharge: 50,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.50, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 10000,
    maximumIssueAge: 85,
    subaccountCount: 30,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Standard', annualCost: 0, description: 'Total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'New York only',
    highlights: [
      'Registered index-linked annuity (RILA) with index strategies',
      '1.25% M&E charge applies to variable option only',
      '6-year withdrawal charge schedule',
      '$50 contract maintenance charge waived at $100K+',
      'Issue ages 0-85'
    ],
    sourceUrl: 'https://www.allianzlife.com/new-york/annuities/registered-index-linked-annuities/index-advantage-plus-new-york',
    lastRateUpdate: '2025-05-01'
  },

  // ── 43. Protective Variable Annuity Investors Series ──
  {
    id: 'protective-va-investors-series',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Protective Life website, SEC EDGAR, prospectus',
    carrierId: 'protective',
    name: 'Protective Variable Annuity Investors Series',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2],
    meCharge: 1.00,
    adminFee: 0,
    totalAnnualCharge: 1.00,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'Most states',
    highlights: [
      'Low 1.00% total annual charge — competitive base pricing',
      'Manage volatility with managed risk investment options',
      'Issued by Protective Life Insurance Company (PLICO)',
      'Part of Protective\'s VA Investors family',
      '7-year surrender period'
    ],
    sourceUrl: 'https://finpro.protective.com/retirement/variable-annuities/protective-variable-annuity-investors-series',
    lastRateUpdate: '2025-01-01'
  },

  // ── 44. Nationwide Destination Navigator 2.0 ──
  {
    id: 'nationwide-destination-navigator-2',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Nationwide.com, SEC EDGAR prospectus, NARIA product pages',
    carrierId: 'nationwide',
    name: 'Nationwide Destination Navigator 2.0',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.20,
    adminFee: 0.05,
    totalAnnualCharge: 0.25,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.15, max: 1.20 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 60,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Ultra-low 0.25% total M&E + admin (0.20% M&E + 0.05% admin)',
      'No surrender charges — full liquidity',
      'Advisory/fee-based version from Nationwide Advisory Solutions',
      'Lifetime income guarantee available as optional rider',
      '60+ investment options'
    ],
    sourceUrl: 'https://www.nationwide.com/nationwide-advisory/products/annuities/',
    lastRateUpdate: '2025-01-01'
  },

  // ── 45. Jackson Elite Access Advisory II ──
  {
    id: 'jackson-market-link-pro-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Jackson.com, SEC EDGAR CIK 927730, Morningstar comparison',
    carrierId: 'jackson',
    name: 'Jackson Market Link Pro II',
    contractType: 'RILA',
    surrenderPeriod: 6,
    surrenderSchedule: [6, 6, 5, 4, 3, 2],
    meCharge: 0.90,
    adminFee: 0.15,
    totalAnnualCharge: 1.05,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.45, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 20,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Total premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states except NY',
    highlights: [
      'Registered index-linked annuity with buffer protection',
      '1.05% total base charge (0.90% M&E + 0.15% admin)',
      'Multiple index strategies with various buffer levels',
      'Issued by Jackson National Life Insurance Company',
      '6-year surrender period'
    ],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities.html',
    lastRateUpdate: '2025-10-01'
  },

  // ── 46. Lincoln Investor Advantage (Advisory) ──
  {
    id: 'lincoln-investor-advantage',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'LincolnFinancial.com, SEC EDGAR, fact sheet',
    carrierId: 'lincoln',
    name: 'Lincoln Investor Advantage Variable Annuity',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.35,
    adminFee: 0.10,
    totalAnnualCharge: 0.45,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 60,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Low 0.45% total annual charge for advisory/fee-based practices',
      'No surrender charges — 100% liquidity from day one',
      'Designed for RIAs and fee-based financial advisors',
      'Issued by The Lincoln National Life Insurance Company',
      'Part of Lincoln\'s broad VA product suite'
    ],
    sourceUrl: 'https://www.lincolnfinancial.com/public/microsite/lincolninvestoradvantage',
    lastRateUpdate: '2025-05-01'
  },

  // ── 47. RiverSource Retirement Advisor Advantage ──
  {
    id: 'riversource-retirement-advisor-advantage',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'RiverSource.com prospectus PDF, Ameriprise, SEC EDGAR',
    carrierId: 'riversource',
    name: 'RiverSource Retirement Advisor Advantage',
    contractType: 'Advisory / No-Load',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.40,
    adminFee: 0,
    totalAnnualCharge: 0.40,
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.30, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 2000,
    maximumIssueAge: 85,
    subaccountCount: 70,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Account value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Advisory/fee-based VA with 0.40% M&E charge',
      'No surrender charges — 100% liquidity',
      'Same RiverSource fund lineup as RAVA products',
      'Issued by RiverSource Life Insurance Company (Ameriprise)',
      'May 1, 2025 prospectus — actively sold'
    ],
    sourceUrl: 'https://www.riversource.com/binaries/content/assets/riversource/1/6406.pdf',
    lastRateUpdate: '2025-05-01'
  },

  // ── 48. Empower SecureFoundation II ──
  {
    id: 'empower-securefoundation-ii',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Empower/Great-West prospectus, SEC EDGAR, IRI Council fact sheet',
    carrierId: 'empower',
    name: 'Empower SecureFoundation II Variable Annuity',
    contractType: 'Group VA / Employer Plan',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.46,
    adminFee: 0.02,
    totalAnnualCharge: 0.48,
    guaranteeBenefitFee: { current: 0.90, min: 0.70, max: 1.50 },
    annualServiceCharge: 0,
    fundExpenseRange: { min: 0.92, max: 1.00 },
    minimumPremium: 0,
    minimumPremiumQualified: 0,
    maximumIssueAge: 85,
    subaccountCount: 12,
    subaccountIds: [],
    livingBenefits: [
      {
        name: 'Guaranteed Lifetime Withdrawal Benefit',
        type: 'GMWB',
        annualCost: 0.90,
        maxAnnualCost: 1.50,
        description: 'Built-in guarantee benefit — income for life at 0.90% current (0.70%-1.50% range)'
      }
    ],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Account value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'Group VA for 401(a), 403(b), 457(b) employer-sponsored plans',
      'Built-in GLWB at 0.90% current (max 1.50%)',
      'Low 0.48% M&E + admin charge',
      'Formerly Great-West SecureFoundation — rebranded under Empower',
      'Target-date fund structure with built-in income guarantee'
    ],
    sourceUrl: 'https://iricouncil.org/wp-content/uploads/2018/10/Great-West-SFII-Fact-Sheet-August-2018.pdf',
    lastRateUpdate: '2025-01-01'
  },

  // ── 49. MetLife Financial Freedom Select (e-Class) ──
  {
    id: 'metlife-financial-freedom-select-e',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    discontinuedDate: '2013-10', // No longer offered for new sales — closed to new group sales 10/4/2013
    verificationSource: 'SEC EDGAR CIK 744043, MetLife prospectus, 403bCompare',
    carrierId: 'metlife',
    name: 'MetLife Financial Freedom Select (e-Class)',
    contractType: 'No-Load / Advisory',
    surrenderPeriod: 0,
    surrenderSchedule: [],
    meCharge: 0.75,
    adminFee: 0,
    totalAnnualCharge: 0.75,
    annualServiceCharge: 30,
    serviceChargeWaivedAt: 25000,
    fundExpenseRange: { min: 0.40, max: 1.50 },
    minimumPremium: 0,
    minimumPremiumQualified: 0,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Standard', type: 'Standard', annualCost: 0, description: 'Account value at time of death' }
    ],
    freeWithdrawalPercent: 100,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      'e-Class — no withdrawal charge version of Financial Freedom Select',
      '0.75% Separate Account charge — lowest among MFFS share classes',
      'No surrender charges — full liquidity',
      'Issued by Metropolitan Life Insurance Company',
      'Available through employer-sponsored 403(b) and TSA plans'
    ],
    sourceUrl: 'https://www.sec.gov/Archives/edgar/data/744043/000119312522118861/d265216d497vpi.htm',
    lastRateUpdate: '2025-05-01'
  },

  // ── 50. Protective Dimensions V Variable Annuity ──
  {
    id: 'protective-dimensions-v',
    ratesVerified: true,
    lastVerifiedDate: '2026-02-28',
    verificationSource: 'Protective Life/Edward Jones website, SEC EDGAR, prospectus May 2024',
    carrierId: 'protective',
    name: 'Protective Dimensions V Variable Annuity',
    contractType: 'B-Share',
    surrenderPeriod: 7,
    surrenderSchedule: [7, 6, 5, 4, 3, 2, 1],
    meCharge: 1.20,
    adminFee: 0,
    totalAnnualCharge: 1.20,
    annualServiceCharge: 35,
    serviceChargeWaivedAt: 100000,
    fundExpenseRange: { min: 0.35, max: 1.50 },
    minimumPremium: 10000,
    minimumPremiumQualified: 5000,
    maximumIssueAge: 85,
    subaccountCount: 50,
    subaccountIds: [],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of account value or premiums less withdrawals' }
    ],
    freeWithdrawalPercent: 10,
    rmdFriendly: true,
    stateAvailability: 'All states',
    highlights: [
      '1.20% total base contract charge',
      'Distributed through Edward Jones financial advisors',
      'Issued by Protective Life Insurance Company (PLICO)',
      'May 2024 prospectus with rate sheet supplements',
      '7-year declining surrender charge schedule'
    ],
    sourceUrl: 'https://edward-jones.protective.com/retirement/variable-annuities/protective-dimensions-v-variable-annuity',
    lastRateUpdate: '2024-05-01'
  }
];
