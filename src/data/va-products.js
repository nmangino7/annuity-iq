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
  }
];
