// =============================================================================
// Variable Annuity (VA) Products Database — ~70 products
// =============================================================================

export const vaProducts = [
  // ── Jackson National (12 products) ─────────────────────────────────
  {
    id: 'jackson-perspective-ii', carrierId: 'jackson-national', name: 'Perspective II',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.15, adminFee: 0.15, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.15, max: 2.25 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 104, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-am-europac', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap', 'jn-invesco-comstock', 'jn-dfa-intl', 'jn-blackrock-bond'],
    livingBenefits: [
      { name: 'LifeGuard Freedom Flex', type: 'GMWB', annualCost: 1.50, rollupRate: 7.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 },
      { name: 'LifeGuard Freedom 6 Net', type: 'GMWB', annualCost: 1.05, rollupRate: 6.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid less withdrawals or account value' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest contract anniversary value, adjusted for withdrawals' },
      { name: '5% Rollup', type: 'Enhanced', annualCost: 0.40, description: '5% annual compound rollup of premiums for 10 years' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Industry-leading GMWB riders', '95 subaccount options', 'Free annual step-up'],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'jackson-elite-access', carrierId: 'jackson-national', name: 'Elite Access',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    meCharge: 1.40, adminFee: 0.15, totalAnnualCharge: 1.55,
    fundExpenseRange: { min: 0.20, max: 2.40 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 112, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-am-europac', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap', 'jn-invesco-comstock', 'jn-dfa-intl', 'jn-blackrock-bond', 'jn-goldman-strat', 'jn-mid-cap-gr'],
    livingBenefits: [
      { name: 'LifeGuard Freedom Flex DB', type: 'GMWB', annualCost: 1.35, rollupRate: 7.0, withdrawalRates: { age59: 4.5, age65: 5.5, age70: 6.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value adjusted for withdrawals' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['112 subaccount choices', 'Enhanced living benefit riders', 'Premium brand fund managers'],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'jackson-perspective-advisory', carrierId: 'jackson-national', name: 'Perspective Advisory',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.60, adminFee: 0.10, totalAnnualCharge: 0.70,
    fundExpenseRange: { min: 0.10, max: 1.80 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 88, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-am-europac', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap', 'jn-blackrock-bond'],
    livingBenefits: [
      { name: 'LifeGuard Freedom Flex', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['No surrender charges', 'Low 0.70% total charge', 'Fee-based advisor friendly'],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'jackson-marker-plus', carrierId: 'jackson-national', name: 'Marker Plus',
    contractType: 'L-Share', surrenderPeriod: 4, surrenderSchedule: [8, 7, 6, 5, 0],
    meCharge: 1.55, adminFee: 0.15, totalAnnualCharge: 1.70,
    fundExpenseRange: { min: 0.15, max: 2.25 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 80, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap'],
    livingBenefits: [
      { name: 'LifeGuard Freedom 6 Net', type: 'GMWB', annualCost: 1.05, rollupRate: 6.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['4-year surrender period', 'L-share liquidity', 'Full living benefit suite'],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Lincoln National (10 products) ─────────────────────────────────
  {
    id: 'lincoln-choiceplus-assurance', carrierId: 'lincoln-financial', name: 'ChoicePlus Assurance',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.10, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.10, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 102, subaccountIds: ['ln-sp500-idx', 'ln-am-growth', 'ln-bond-core', 'ln-fid-contrafund', 'ln-pimco-income', 'ln-trp-growth', 'ln-vanguard-midcap', 'ln-jpmorgan-value', 'ln-blackrock-global', 'ln-invesco-div'],
    livingBenefits: [
      { name: 'i4LIFE Advantage', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 },
      { name: 'Lincoln Lifetime Income Advantage', type: 'GMWB', annualCost: 1.15, rollupRate: 6.5, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Return of net premiums' },
      { name: 'Estate Enhancement', type: 'Enhanced', annualCost: 0.30, description: 'Higher of AV, net premiums, or highest anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['102 subaccount options', 'Multiple living benefit choices', 'Estate enhancement rider'],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'lincoln-american-legacy', carrierId: 'lincoln-financial', name: 'American Legacy',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [7, 7, 6, 5, 4, 3, 0],
    meCharge: 1.20, adminFee: 0.10, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.12, max: 2.00 }, minimumPremium: 25000, maximumIssueAge: 80,
    subaccountCount: 85, subaccountIds: ['ln-sp500-idx', 'ln-am-growth', 'ln-bond-core', 'ln-fid-contrafund', 'ln-pimco-income', 'ln-trp-growth', 'ln-vanguard-midcap'],
    livingBenefits: [
      { name: 'i4LIFE Advantage', type: 'GMWB', annualCost: 0.95, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Competitive M&E charge', '6-year surrender', 'Strong brand fund lineup'],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'lincoln-choice-advisory', carrierId: 'lincoln-financial', name: 'ChoicePlus Advisory',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.55, adminFee: 0.10, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.08, max: 1.80 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 90, subaccountIds: ['ln-sp500-idx', 'ln-am-growth', 'ln-bond-core', 'ln-fid-contrafund', 'ln-pimco-income', 'ln-trp-growth'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Lowest-cost Lincoln VA', 'No surrender charges', 'Fee-based advisor platform'],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'lincoln-investor-advantage', carrierId: 'lincoln-financial', name: 'Investor Advantage',
    contractType: 'I-Share', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.65, adminFee: 0.10, totalAnnualCharge: 0.75,
    fundExpenseRange: { min: 0.10, max: 1.90 }, minimumPremium: 50000, maximumIssueAge: 80,
    subaccountCount: 78, subaccountIds: ['ln-sp500-idx', 'ln-am-growth', 'ln-bond-core', 'ln-fid-contrafund', 'ln-pimco-income'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Account value at death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['I-share pricing', 'No surrender charges', '$50K minimum for institutional pricing'],
    sourceUrl: 'https://www.lincolnfinancial.com/public/individuals/products/annuities/variableannuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Prudential (8 products) ────────────────────────────────────────
  {
    id: 'prudential-premier-investment', carrierId: 'prudential', name: 'Premier Investment',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    meCharge: 0.95, adminFee: 0.15, totalAnnualCharge: 1.10,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 82, subaccountIds: ['pru-sp500-idx', 'pru-growth-alloc', 'pru-bond-total', 'pru-jenni-equity', 'pru-intl-growth', 'pru-small-value', 'pru-pimco-realret', 'pru-balanced'],
    livingBenefits: [
      { name: 'Highest Daily Lifetime Income', type: 'GMWB', annualCost: 1.10, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Daily', waitingPeriod: 0 },
      { name: 'HD Lifetime 6 Plus', type: 'GMWB', annualCost: 1.30, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Daily', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' },
      { name: 'Highest Daily Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest daily account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Unique daily step-up on income benefit', 'Split fee structure — lower total cost', 'Highest Daily Lifetime Income rider'],
    sourceUrl: 'https://www.prudential.com/personal/annuities/products/premier-investment',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'prudential-defined-income', carrierId: 'prudential', name: 'Defined Income',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.15, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 70, subaccountIds: ['pru-sp500-idx', 'pru-growth-alloc', 'pru-bond-total', 'pru-jenni-equity', 'pru-intl-growth', 'pru-balanced'],
    livingBenefits: [
      { name: 'Defined Income Benefit', type: 'GMWB', annualCost: 1.05, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Income-focused design', '70 subaccounts', 'Prudential financial strength'],
    sourceUrl: 'https://www.prudential.com/personal/annuities/products/premier-investment',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'prudential-b-share-advantage', carrierId: 'prudential', name: 'B-Share Advantage',
    contractType: 'B-Share', surrenderPeriod: 5, surrenderSchedule: [6, 5, 4, 3, 2, 0],
    meCharge: 1.35, adminFee: 0.15, totalAnnualCharge: 1.50,
    fundExpenseRange: { min: 0.15, max: 2.20 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 65, subaccountIds: ['pru-sp500-idx', 'pru-growth-alloc', 'pru-bond-total', 'pru-jenni-equity', 'pru-balanced'],
    livingBenefits: [
      { name: 'HD Lifetime Income', type: 'GMWB', annualCost: 1.10, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Daily', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP death benefit' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Low $5K minimum', '5-year surrender', 'Daily step-up income benefit'],
    sourceUrl: 'https://www.prudential.com/personal/annuities/products/premier-investment',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'prudential-advisory-va', carrierId: 'prudential', name: 'Advisory VA',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.55, adminFee: 0.10, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.08, max: 1.75 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 70, subaccountIds: ['pru-sp500-idx', 'pru-growth-alloc', 'pru-bond-total', 'pru-jenni-equity', 'pru-intl-growth'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Account value at death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Ultra-low 0.65% total charge', 'No surrender', 'Fee-based advisor only'],
    sourceUrl: 'https://www.prudential.com/personal/annuities/products/premier-investment',
    lastRateUpdate: '2026-02-01'
  },

  // ── Pacific Life (6 products) ──────────────────────────────────────
  {
    id: 'pacific-odyssey', carrierId: 'pacific-life', name: 'Pacific Odyssey',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.15, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 90, subaccountIds: ['pl-sp500-idx', 'pl-fid-growth', 'pl-pimco-total', 'pl-am-europac', 'pl-trp-equity', 'pl-blackrock-ga', 'pl-vanguard-bal', 'pl-intl-small'],
    livingBenefits: [
      { name: 'Pacific Life Income Provider', type: 'GMWB', annualCost: 1.05, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' },
      { name: 'Estate Enhancer', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['90 subaccount options', 'Strong income rider', 'Estate enhancement available'],
    sourceUrl: 'https://www.annuities.pacificlife.com/home/annuities/variable-annuities.html',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'pacific-choice', carrierId: 'pacific-life', name: 'Pacific Choice',
    contractType: 'L-Share', surrenderPeriod: 4, surrenderSchedule: [8, 7, 6, 5, 0],
    meCharge: 1.45, adminFee: 0.15, totalAnnualCharge: 1.60,
    fundExpenseRange: { min: 0.15, max: 2.20 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 75, subaccountIds: ['pl-sp500-idx', 'pl-fid-growth', 'pl-pimco-total', 'pl-am-europac', 'pl-trp-equity', 'pl-blackrock-ga'],
    livingBenefits: [
      { name: 'Pacific Life Income Provider', type: 'GMWB', annualCost: 1.05, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP death benefit' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['4-year L-share liquidity', 'Same rider suite as Odyssey', 'Lower entry point'],
    sourceUrl: 'https://www.annuities.pacificlife.com/home/annuities/variable-annuities.html',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'pacific-frontiers-ii', carrierId: 'pacific-life', name: 'Pacific Frontiers II',
    contractType: 'B-Share', surrenderPeriod: 8, surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.15, adminFee: 0.10, totalAnnualCharge: 1.25,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 25000, maximumIssueAge: 80,
    subaccountCount: 105, subaccountIds: ['pl-sp500-idx', 'pl-fid-growth', 'pl-pimco-total', 'pl-am-europac', 'pl-trp-equity', 'pl-blackrock-ga', 'pl-vanguard-bal', 'pl-intl-small', 'pl-small-cap-val', 'pl-reit-fund'],
    livingBenefits: [
      { name: 'CoreIncome Advantage', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: 'Highest Anniversary', type: 'Enhanced', annualCost: 0.20, description: 'HAV death benefit' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['105 subaccounts — one of largest shelves', 'Competitive 1.25% total charge', '6% rollup income rider'],
    sourceUrl: 'https://www.annuities.pacificlife.com/home/annuities/variable-annuities.html',
    lastRateUpdate: '2026-02-01'
  },

  // ── Nationwide (6 products) ────────────────────────────────────────
  {
    id: 'nationwide-destination-navigator', carrierId: 'nationwide', name: 'Destination Navigator 2.0',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.10, adminFee: 0.20, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.15, max: 2.25 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 85, subaccountIds: ['nw-sp500-idx', 'nw-fid-contrafund', 'nw-am-growth', 'nw-pimco-total', 'nw-trp-bluechip', 'nw-vanguard-intl', 'nw-blackrock-eq', 'nw-jpmorgan-mid'],
    livingBenefits: [
      { name: 'Nationwide Lifetime Income Rider', type: 'GMWB', annualCost: 1.10, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: 'Spousal Protection', type: 'Enhanced', annualCost: 0.15, description: 'Spousal continuation with step-up' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['6% rollup rate', 'Spousal protection rider', '85 subaccounts'],
    sourceUrl: 'https://www.nationwide.com/personal/investing/annuities/variable',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'nationwide-monument-advisor', carrierId: 'nationwide', name: 'Monument Advisor',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.65, adminFee: 0.10, totalAnnualCharge: 0.75,
    fundExpenseRange: { min: 0.08, max: 1.80 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 80, subaccountIds: ['nw-sp500-idx', 'nw-fid-contrafund', 'nw-am-growth', 'nw-pimco-total', 'nw-trp-bluechip', 'nw-vanguard-intl'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV at death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Low-cost advisory platform', 'No surrender charges', '80 subaccounts'],
    sourceUrl: 'https://www.nationwide.com/personal/investing/annuities/variable',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'nationwide-destination-b-20', carrierId: 'nationwide', name: 'Destination B 2.0',
    contractType: 'B-Share', surrenderPeriod: 5, surrenderSchedule: [6, 5, 4, 3, 2, 0],
    meCharge: 1.40, adminFee: 0.15, totalAnnualCharge: 1.55,
    fundExpenseRange: { min: 0.15, max: 2.20 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 70, subaccountIds: ['nw-sp500-idx', 'nw-fid-contrafund', 'nw-am-growth', 'nw-pimco-total', 'nw-trp-bluechip'],
    livingBenefits: [
      { name: 'Lifetime Income Rider 2.0', type: 'GMWB', annualCost: 1.05, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Low $5K minimum', '5-year surrender', 'Solid living benefit'],
    sourceUrl: 'https://www.nationwide.com/personal/investing/annuities/variable',
    lastRateUpdate: '2026-02-01'
  },

  // ── Brighthouse Financial (5 products) ─────────────────────────────
  {
    id: 'brighthouse-series-va', carrierId: 'brighthouse-financial', name: 'Series VA with FlexChoice Access',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.15, totalAnnualCharge: 1.40,
    fundExpenseRange: { min: 0.12, max: 2.10 }, minimumPremium: 25000, maximumIssueAge: 80,
    subaccountCount: 68, subaccountIds: ['bh-sp500-idx', 'bh-fid-growth', 'bh-pimco-bond', 'bh-trp-equity', 'bh-jpmorgan-intl', 'bh-blackrock-alloc'],
    livingBenefits: [
      { name: 'FlexChoice Access', type: 'GMWB', annualCost: 1.15, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: 'Enhanced DB', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value to age 80' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['FlexChoice Access living benefit', 'Enhanced death benefit option', '68 subaccounts'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'brighthouse-shield-va', carrierId: 'brighthouse-financial', name: 'Shield Level VA',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    meCharge: 1.15, adminFee: 0.10, totalAnnualCharge: 1.25,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['bh-sp500-idx', 'bh-fid-growth', 'bh-pimco-bond', 'bh-trp-equity', 'bh-jpmorgan-intl'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Low 1.25% total charge', 'Buffer-like shield options', 'Accumulation-focused'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica (5 products) ──────────────────────────────────────
  {
    id: 'transamerica-financial-foundation', carrierId: 'transamerica', name: 'Financial Foundation',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.15, totalAnnualCharge: 1.40,
    fundExpenseRange: { min: 0.15, max: 2.15 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 78, subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced', 'ta-blackrock-intl'],
    livingBenefits: [
      { name: 'Retirement Income Max', type: 'GMWB', annualCost: 1.10, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Solid fund lineup', '5.5% rollup rate', '78 subaccounts'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'transamerica-monument-ii', carrierId: 'transamerica', name: 'Monument II',
    contractType: 'L-Share', surrenderPeriod: 3, surrenderSchedule: [7, 5, 3, 0],
    meCharge: 1.55, adminFee: 0.15, totalAnnualCharge: 1.70,
    fundExpenseRange: { min: 0.15, max: 2.30 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 65, subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-pimco-total', 'ta-fid-equity', 'ta-am-balanced'],
    livingBenefits: [
      { name: 'Income Edge', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['3-year L-share — fastest liquidity', 'Full rider suite available', '65 subaccounts'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'transamerica-advisor-elite', carrierId: 'transamerica', name: 'Advisor Elite',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.60, adminFee: 0.10, totalAnnualCharge: 0.70,
    fundExpenseRange: { min: 0.10, max: 1.85 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 72, subaccountIds: ['ta-sp500-idx', 'ta-trp-growth', 'ta-pimco-total', 'ta-fid-equity', 'ta-blackrock-intl'],
    livingBenefits: [],
    deathBenefits: [{ name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV at death' }],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Low-cost advisory wrapper', 'No surrender charges', '72 subaccounts'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Protective (4 products) ────────────────────────────────────────
  {
    id: 'protective-investment-series', carrierId: 'protective-life', name: 'Investment Series',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.15, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.05 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 72, subaccountIds: ['pro-sp500-idx', 'pro-fid-growth', 'pro-pimco-income', 'pro-trp-bluechip', 'pro-vanguard-total'],
    livingBenefits: [
      { name: 'SecurePay Lifetime', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Competitive total charge', 'SecurePay income rider', '72 subaccounts'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'protective-dimensions-gold', carrierId: 'protective-life', name: 'Dimensions Gold',
    contractType: 'B-Share', surrenderPeriod: 5, surrenderSchedule: [6, 5, 4, 3, 2, 0],
    meCharge: 1.35, adminFee: 0.15, totalAnnualCharge: 1.50,
    fundExpenseRange: { min: 0.15, max: 2.15 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 60, subaccountIds: ['pro-sp500-idx', 'pro-fid-growth', 'pro-pimco-income', 'pro-trp-bluechip'],
    livingBenefits: [
      { name: 'SecurePay 5', type: 'GMWB', annualCost: 0.95, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Low $5K minimum', '5-year surrender', 'Protective brand strength'],
    lastRateUpdate: '2026-02-01'
  },

  // ── John Hancock (4 products) ──────────────────────────────────────
  {
    id: 'john-hancock-vitality-va', carrierId: 'john-hancock', name: 'Vitality VA',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.30, adminFee: 0.15, totalAnnualCharge: 1.45,
    fundExpenseRange: { min: 0.15, max: 2.20 }, minimumPremium: 10000, maximumIssueAge: 80,
    subaccountCount: 82, subaccountIds: ['jh-sp500-idx', 'jh-small-cap', 'jh-intl-equity', 'jh-bond-core', 'jh-growth-large', 'jh-mid-blend', 'jh-emerging-mkt'],
    livingBenefits: [
      { name: 'Guaranteed Lifetime Income Plus', type: 'GMWB', annualCost: 1.15, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: 'Highest Anniversary', type: 'Enhanced', annualCost: 0.20, description: 'HAV to age 80' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Vitality wellness rewards', '82 subaccounts', '5.5% rollup'],
    sourceUrl: 'https://www.johnhancock.com/annuities.html',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'john-hancock-accumulation-va', carrierId: 'john-hancock', name: 'Accumulation VA',
    contractType: 'I-Share', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.65, adminFee: 0.10, totalAnnualCharge: 0.75,
    fundExpenseRange: { min: 0.10, max: 1.80 }, minimumPremium: 50000, maximumIssueAge: 85,
    subaccountCount: 75, subaccountIds: ['jh-sp500-idx', 'jh-small-cap', 'jh-intl-equity', 'jh-bond-core', 'jh-growth-large'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV at death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Low 0.75% total charge', 'No surrender charges', 'Accumulation focus'],
    sourceUrl: 'https://www.johnhancock.com/annuities.html',
    lastRateUpdate: '2026-02-01'
  },

  // ── Mass Mutual (4 products) ───────────────────────────────────────
  {
    id: 'massmutual-transitions-select-ii', carrierId: 'massmutual', name: 'Transitions Select II',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.10, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 92, subaccountIds: ['mm-sp500-idx', 'mm-oppenheimer-intl', 'mm-fid-growth', 'mm-pimco-total', 'mm-trp-value', 'mm-am-balanced', 'mm-blackrock-eq', 'mm-small-cap'],
    livingBenefits: [
      { name: 'RetireEase Choice', type: 'GMWB', annualCost: 1.10, rollupRate: 5.5, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['92 subaccounts', 'Mutual company strength', '5.5% rollup income rider'],
    sourceUrl: 'https://www.massmutual.com/annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'massmutual-encore', carrierId: 'massmutual', name: 'Encore Retirement',
    contractType: 'L-Share', surrenderPeriod: 4, surrenderSchedule: [7, 6, 5, 4, 0],
    meCharge: 1.50, adminFee: 0.15, totalAnnualCharge: 1.65,
    fundExpenseRange: { min: 0.15, max: 2.25 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 70, subaccountIds: ['mm-sp500-idx', 'mm-oppenheimer-intl', 'mm-fid-growth', 'mm-pimco-total', 'mm-trp-value'],
    livingBenefits: [
      { name: 'RetireEase', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['4-year L-share', 'MassMutual financial strength', '70 subaccounts'],
    sourceUrl: 'https://www.massmutual.com/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Corebridge/AIG (4 products) ────────────────────────────────────
  {
    id: 'corebridge-polaris-platinum', carrierId: 'corebridge-financial', name: 'Polaris Platinum III',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.35, adminFee: 0.15, totalAnnualCharge: 1.50,
    fundExpenseRange: { min: 0.15, max: 2.20 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 108, subaccountIds: ['cb-sp500-idx', 'cb-fid-contrafund', 'cb-pimco-total', 'cb-am-growth', 'cb-trp-growth', 'cb-vanguard-midcap', 'cb-blackrock-intl', 'cb-jpmorgan-value', 'cb-invesco-equity', 'cb-small-growth'],
    livingBenefits: [
      { name: 'Polaris Income Plus', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: '6% Rollup DB', type: 'Enhanced', annualCost: 0.35, description: '6% compound rollup for 20 years' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['108 subaccounts — massive shelf', '6% rollup income & DB riders', 'Low $5K minimum'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'corebridge-polaris-choice-iv', carrierId: 'corebridge-financial', name: 'Polaris Choice IV',
    contractType: 'L-Share', surrenderPeriod: 4, surrenderSchedule: [8, 6, 4, 2, 0],
    meCharge: 1.55, adminFee: 0.15, totalAnnualCharge: 1.70,
    fundExpenseRange: { min: 0.15, max: 2.30 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 90, subaccountIds: ['cb-sp500-idx', 'cb-fid-contrafund', 'cb-pimco-total', 'cb-am-growth', 'cb-trp-growth', 'cb-vanguard-midcap', 'cb-blackrock-intl'],
    livingBenefits: [
      { name: 'Polaris Income Plus', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['4-year L-share liquidity', '90 subaccounts', '6% rollup income rider'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Great American (3 products) ────────────────────────────────────
  {
    id: 'great-american-legend-7', carrierId: 'great-american', name: 'Legend 7',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.30, adminFee: 0.15, totalAnnualCharge: 1.45,
    fundExpenseRange: { min: 0.15, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['ga-sp500-idx', 'ga-fid-growth', 'ga-pimco-total', 'ga-trp-equity', 'ga-am-balanced'],
    livingBenefits: [
      { name: 'Lifetime Income Advantage', type: 'GMWB', annualCost: 1.05, rollupRate: 5.5, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Solid 5.5% rollup', 'Great American financial strength', '55 subaccounts'],
    sourceUrl: 'https://www.massmutualascend.com/products',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'great-american-legend-advisory', carrierId: 'great-american', name: 'Legend Advisory',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.60, adminFee: 0.10, totalAnnualCharge: 0.70,
    fundExpenseRange: { min: 0.10, max: 1.80 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 50, subaccountIds: ['ga-sp500-idx', 'ga-fid-growth', 'ga-pimco-total', 'ga-trp-equity'],
    livingBenefits: [],
    deathBenefits: [{ name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV' }],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Low 0.70% total charge', 'No surrender charges', 'Fee-based platform'],
    sourceUrl: 'https://www.massmutualascend.com/products',
    lastRateUpdate: '2026-02-01'
  },

  // ── Security Benefit (3 products) ──────────────────────────────────
  {
    id: 'security-benefit-tpfg-va', carrierId: 'security-benefit', name: 'TPFG VA',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.55, adminFee: 0.10, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.08, max: 1.50 }, minimumPremium: 5000, maximumIssueAge: 90,
    subaccountCount: 120, subaccountIds: ['sb-sp500-idx', 'sb-dfa-value', 'sb-pimco-total', 'sb-vanguard-growth', 'sb-dimensional-intl', 'sb-small-value', 'sb-reit-idx', 'sb-emerging-mkt', 'sb-tips-bond', 'sb-target-2040'],
    livingBenefits: [],
    deathBenefits: [{ name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV at death' }],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Lowest M&E in industry (0.55%)', '120 subaccounts', 'Third-party model portfolios', 'DFA funds available'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'security-benefit-total-value', carrierId: 'security-benefit', name: 'Total Value',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.15, totalAnnualCharge: 1.40,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 95, subaccountIds: ['sb-sp500-idx', 'sb-dfa-value', 'sb-pimco-total', 'sb-vanguard-growth', 'sb-dimensional-intl', 'sb-small-value', 'sb-reit-idx'],
    livingBenefits: [
      { name: 'Income Flex', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [{ name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['DFA & Dimensional funds', '95 subaccounts', '5% rollup income rider'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Global Atlantic (2 products) ───────────────────────────────────
  {
    id: 'global-atlantic-flexshield-va', carrierId: 'global-atlantic', name: 'FlexShield VA',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.15, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 58, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-trp-bluechip'],
    livingBenefits: [
      { name: 'Lifetime Income Select', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [{ name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Competitive 1.35% total charge', '58 subaccounts', 'Growing VA platform'],
    sourceUrl: 'https://professionals.globalatlantic.com/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── New York Life (2 products) ─────────────────────────────────────
  {
    id: 'nyl-premier-variable-annuity', carrierId: 'new-york-life', name: 'Premier Variable Annuity',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.10, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.10, max: 1.95 }, minimumPremium: 25000, maximumIssueAge: 80,
    subaccountCount: 68, subaccountIds: ['nyl-sp500-idx', 'nyl-mainstay-growth', 'nyl-pimco-bond', 'nyl-am-europac', 'nyl-trp-equity'],
    livingBenefits: [
      { name: 'Lifetime Income Guarantee', type: 'GMWB', annualCost: 1.10, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' },
      { name: 'Enhanced DB', type: 'Enhanced', annualCost: 0.20, description: 'Highest anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['NYL AAA financial strength', 'Competitive 1.30% total charge', 'MainStay fund family access'],
    sourceUrl: 'https://www.newyorklife.com/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Principal (2 products) ─────────────────────────────────────────
  {
    id: 'principal-variable-annuity', carrierId: 'principal-financial', name: 'Principal Variable Annuity',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.10, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.12, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 75, subaccountIds: ['pri-sp500-idx', 'pri-mid-blend', 'pri-bond-core', 'pri-intl-growth', 'pri-small-cap'],
    livingBenefits: [
      { name: 'Guaranteed Minimum Income', type: 'GMWB', annualCost: 1.05, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [{ name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Principal fund family', '75 subaccounts', 'Competitive pricing'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'principal-advisory-va', carrierId: 'principal-financial', name: 'Principal Advisory VA',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.60, adminFee: 0.10, totalAnnualCharge: 0.70,
    fundExpenseRange: { min: 0.08, max: 1.75 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 65, subaccountIds: ['pri-sp500-idx', 'pri-mid-blend', 'pri-bond-core', 'pri-intl-growth'],
    livingBenefits: [],
    deathBenefits: [{ name: 'Account Value', type: 'Standard', annualCost: 0, description: 'AV' }],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Low 0.70% total charge', 'No surrender', 'Fee-based platform'],
    lastRateUpdate: '2026-02-01'
  },

  // ── F&G (2 products) ──────────────────────────────────────────────
  {
    id: 'fandg-performance-va', carrierId: 'fandg', name: 'Performance Variable Annuity',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.30, adminFee: 0.15, totalAnnualCharge: 1.45,
    fundExpenseRange: { min: 0.15, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 52, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-trp-bluechip'],
    livingBenefits: [
      { name: 'F&G Lifetime Income', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [{ name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['F&G insurance backing', '52 subaccounts', '5% rollup income rider'],
    sourceUrl: 'https://www.fglife.com/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Symetra (2 products) ──────────────────────────────────────────
  {
    id: 'symetra-va-select', carrierId: 'symetra', name: 'VA Select',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.10, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.12, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 48, subaccountIds: ['jn-sp500-idx', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-trp-bluechip'],
    livingBenefits: [
      { name: 'Symetra Income Edge', type: 'GMWB', annualCost: 0.95, rollupRate: 5.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [{ name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'ROP' }],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Competitive 1.30% total charge', '48 subaccounts', 'Symetra financial backing'],
    sourceUrl: 'https://www.symetra.com/our-products/individuals/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── RiverSource (Ameriprise) (3 products) ────────────────────────────
  {
    id: 'riversource-rava-apex', carrierId: 'riversource', name: 'RAVA Apex',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 7, 6, 5, 4, 2, 0],
    meCharge: 1.05, adminFee: 0.00, totalAnnualCharge: 1.05,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 5000, maximumIssueAge: 90,
    subaccountCount: 120, subaccountIds: ['rs-sp500-idx', 'rs-threadneedle-intl', 'rs-columbia-bond', 'rs-columbia-growth', 'rs-columbia-balanced', 'rs-pn-conservative', 'rs-pn-moderate', 'rs-pn-growth', 'rs-ps-income', 'rs-ps-growth'],
    livingBenefits: [
      { name: 'SecureSource Tempo', type: 'GMWB', annualCost: 1.25, rollupRate: 6.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV (issue age 80 or younger)' },
      { name: 'Maximum Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest contract anniversary value adjusted for withdrawals' },
      { name: '5% Accumulation', type: 'Enhanced', annualCost: 0.30, description: '5% annual compound accumulation on premiums' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['120+ subaccount options', 'Low 1.05% M&E (no separate admin fee)', 'SecureSource Tempo living benefit', '$50 annual fee waived at $50K+ AV', 'Ameriprise advisor distribution'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'riversource-rava-vista', carrierId: 'riversource', name: 'RAVA Vista',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 7, 6, 5, 4, 2, 0],
    meCharge: 1.20, adminFee: 0.00, totalAnnualCharge: 1.20,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 5000, maximumIssueAge: 90,
    subaccountCount: 120, subaccountIds: ['rs-sp500-idx', 'rs-threadneedle-intl', 'rs-columbia-bond', 'rs-columbia-growth', 'rs-columbia-balanced', 'rs-pn-conservative', 'rs-pn-moderate', 'rs-pn-growth'],
    livingBenefits: [
      { name: 'SecureSource Tempo', type: 'GMWB', annualCost: 1.25, rollupRate: 6.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' },
      { name: 'Maximum Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['120+ subaccount options', 'Full rider suite', 'Ameriprise advisor distribution', 'Zero NAIC complaints in 2023'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'riversource-rava-5-advantage', carrierId: 'riversource', name: 'RAVA 5 Advantage',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 7, 6, 5, 4, 2, 0],
    meCharge: 1.10, adminFee: 0.00, totalAnnualCharge: 1.10,
    fundExpenseRange: { min: 0.10, max: 2.00 }, minimumPremium: 5000, maximumIssueAge: 90,
    subaccountCount: 120, subaccountIds: ['rs-sp500-idx', 'rs-threadneedle-intl', 'rs-columbia-bond', 'rs-columbia-growth', 'rs-columbia-balanced', 'rs-pn-conservative', 'rs-pn-moderate', 'rs-pn-growth', 'rs-ps-income', 'rs-ps-growth'],
    livingBenefits: [
      { name: 'SecureSource 4 Plus', type: 'GMWB', annualCost: 1.50, rollupRate: 7.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Purchase Payments', type: 'Standard', annualCost: 0, description: 'Greater of premiums or AV' },
      { name: 'Enhanced Legacy', type: 'Enhanced', annualCost: 0.25, description: 'Enhanced death benefit with growth features' },
      { name: '5% Accumulation', type: 'Enhanced', annualCost: 0.30, description: '5% compound accumulation' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['7% SecureSource 4 Plus rollup', '120+ fund options', 'Multiple enhanced death benefits', 'Legacy product — no longer sold to new customers'],
    lastRateUpdate: '2026-02-01'
  },

  // ── TIAA (3 products) ─────────────────────────────────────────────
  {
    id: 'tiaa-intelligent-va', carrierId: 'tiaa', name: 'Intelligent Variable Annuity',
    contractType: 'No-Load', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.50, adminFee: 0.00, totalAnnualCharge: 0.50,
    fundExpenseRange: { min: 0.10, max: 0.85 }, minimumPremium: 2500, maximumIssueAge: 90,
    subaccountCount: 48, subaccountIds: ['tiaa-nuveen-growth', 'tiaa-nuveen-bond', 'tiaa-dimensional-stf', 'tiaa-real-estate', 'tiaa-nuveen-midcap', 'tiaa-nuveen-intl'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid or account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['No surrender charges — fully liquid', 'Among lowest VA fees in industry (0.50%)', 'Nuveen & Dimensional fund families', 'Available through TIAA IRA'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'tiaa-cref-variable-annuity', carrierId: 'tiaa', name: 'CREF Variable Annuity',
    contractType: 'No-Load', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.24, adminFee: 0.00, totalAnnualCharge: 0.24,
    fundExpenseRange: { min: 0.16, max: 0.44 }, minimumPremium: 0, maximumIssueAge: 99,
    subaccountCount: 8, subaccountIds: ['tiaa-cref-sp500-idx', 'tiaa-cref-global-stock', 'tiaa-cref-growth', 'tiaa-cref-responsible-bal', 'tiaa-cref-bond', 'tiaa-cref-inflation', 'tiaa-cref-money-mkt', 'tiaa-cref-social'],
    livingBenefits: [
      { name: 'TIAA Lifetime Income', type: 'Annuitization', annualCost: 0, rollupRate: null, withdrawalRates: { age59: null, age65: null, age70: null }, stepUpFrequency: 'N/A', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Current account value at time of death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Lowest VA expense ratio in industry (0.24%)', 'Employer-plan access — expanding to IRA', 'CREF S&P 500 Index Account available', 'Lifetime annuitization option'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'tiaa-real-estate-account', carrierId: 'tiaa', name: 'TIAA Real Estate Account',
    contractType: 'No-Load', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.52, adminFee: 0.00, totalAnnualCharge: 0.52,
    fundExpenseRange: { min: 0.52, max: 0.52 }, minimumPremium: 0, maximumIssueAge: 99,
    subaccountCount: 1, subaccountIds: ['tiaa-real-estate-acct'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Current account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Direct real estate investment in VA wrapper', '75-85% of net assets in real estate', 'Inflation hedge — rents rise with costs', 'Low correlation to stock market'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Fidelity (2 products) ─────────────────────────────────────────
  {
    id: 'fidelity-personal-retirement-annuity', carrierId: 'fidelity-life', name: 'Personal Retirement Annuity (FPRA)',
    contractType: 'No-Load', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.25, adminFee: 0.00, totalAnnualCharge: 0.25,
    fundExpenseRange: { min: 0.10, max: 1.20 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['fid-vip-sp500', 'fid-vip-contrafund', 'fid-vip-growth', 'fid-vip-bond', 'fid-vip-intl', 'fid-vip-balanced', 'fid-vip-target2030', 'fid-vip-target2040'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid less withdrawals or account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['0.25% annual charge — far below 1.02% industry average', 'No surrender charges', '55 Fidelity VIP funds', 'Unlimited contributions allowed'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'fidelity-retirement-reserves', carrierId: 'fidelity-life', name: 'Retirement Reserves',
    contractType: 'No-Load', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.50, adminFee: 0.00, totalAnnualCharge: 0.50,
    fundExpenseRange: { min: 0.15, max: 1.35 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 48, subaccountIds: ['fid-vip-sp500', 'fid-vip-contrafund', 'fid-vip-growth', 'fid-vip-bond', 'fid-vip-intl'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value through age 80' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['No surrender charges', 'Enhanced death benefit option available', '48 Fidelity VIP fund options', 'Tax-deferred growth'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Empower / Great-West (2 products) ─────────────────────────────
  {
    id: 'empower-securefoundation-ii', carrierId: 'empower', name: 'SecureFoundation II',
    contractType: 'Group VA', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.65, adminFee: 0.00, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.15, max: 1.50 }, minimumPremium: 0, maximumIssueAge: 99,
    subaccountCount: 80, subaccountIds: ['emp-vanguard-500', 'emp-am-cent-bal', 'emp-pimco-bond', 'emp-tiaa-secure', 'emp-trp-growth', 'emp-fid-contrafund'],
    livingBenefits: [
      { name: 'SecureFoundation GLWB', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Current account value at death' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Available in 401(k), 403(b), 457 plans', 'Guaranteed lifetime income stream', 'Participate in positive investment experience', '$1.5T in assets under administration'],
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'empower-managed-income', carrierId: 'empower', name: 'Managed Income VA',
    contractType: 'Group VA', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.55, adminFee: 0.10, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.10, max: 1.25 }, minimumPremium: 0, maximumIssueAge: 99,
    subaccountCount: 60, subaccountIds: ['emp-vanguard-500', 'emp-am-cent-bal', 'emp-pimco-bond', 'emp-trp-growth'],
    livingBenefits: [
      { name: 'Managed Spend-Down', type: 'GMWB', annualCost: 0.75, rollupRate: 4.0, withdrawalRates: { age59: 3.5, age65: 4.5, age70: 5.0 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Account Value', type: 'Standard', annualCost: 0, description: 'Current account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Managed spend-down strategy', 'Low-cost group VA structure', 'Partnership with American Funds & TIAA', 'Part of 2024 retirement income suite launch'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Equitable (2 more products) ───────────────────────────────────
  {
    id: 'equitable-accumulator-select', carrierId: 'equitable', name: 'Accumulator Select',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [6, 6, 5, 4, 3, 2, 0],
    meCharge: 1.10, adminFee: 0.00, totalAnnualCharge: 1.10,
    fundExpenseRange: { min: 0.15, max: 2.10 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 90, subaccountIds: ['eq-sp500-idx', 'eq-trp-growth', 'eq-pimco-total', 'eq-am-europac', 'eq-fid-contrafund', 'eq-invesco-divg', 'eq-jpmorgan-mid'],
    livingBenefits: [
      { name: 'Retirement Cornerstone', type: 'GMWB', annualCost: 1.25, rollupRate: 6.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest anniversary value adjusted for withdrawals' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['90 subaccount options', 'Retirement Cornerstone GLWB', '6-year surrender period', 'Market Stabilizer Option available'],
    sourceUrl: 'https://equitable.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },
  {
    id: 'equitable-investment-edge', carrierId: 'equitable', name: 'Investment Edge',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.55, adminFee: 0.10, totalAnnualCharge: 0.65,
    fundExpenseRange: { min: 0.10, max: 1.50 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 100, subaccountIds: ['eq-sp500-idx', 'eq-trp-growth', 'eq-pimco-total', 'eq-am-europac', 'eq-fid-contrafund', 'eq-vanguard-bal', 'eq-blackrock-glb'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Advisory/fee-based — no surrender charges', '100+ investment options', 'Low 0.65% total annual charge', 'Designed for RIA/fee-based advisors'],
    sourceUrl: 'https://equitable.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica B-Share Variable Annuity ──────────────────────────
  {
    id: 'transamerica-bshare-va', carrierId: 'transamerica', name: 'Transamerica Variable Annuity B-Share',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.15, adminFee: 0.15, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.20, max: 2.00 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 80, subaccountIds: ['ta-sp500-idx', 'ta-trp-bluechip', 'ta-pimco-total', 'ta-blackrock-equity', 'ta-jpmorgan-growth', 'ta-fidelity-growth', 'ta-am-europac'],
    livingBenefits: [
      { name: 'Transamerica Income Edge', type: 'GMWB', annualCost: 1.20, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid or account value' },
      { name: 'Enhanced Death Benefit', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value or 5% annual increase' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['80 subaccount options', 'Income Edge GMWB with 6% rollup', 'Enhanced death benefit option', 'Standard B-Share with 7-year surrender'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica Principium IV ─────────────────────────────────────
  {
    id: 'transamerica-principium-iv', carrierId: 'transamerica', name: 'Principium IV',
    contractType: 'B-Share', surrenderPeriod: 5, surrenderSchedule: [6, 5, 4, 3, 2, 0],
    meCharge: 0.85, adminFee: 0.10, totalAnnualCharge: 0.95,
    fundExpenseRange: { min: 0.15, max: 1.80 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 60, subaccountIds: ['ta-sp500-idx', 'ta-pimco-total', 'ta-trp-bluechip', 'ta-vanguard-growth', 'ta-fidelity-growth'],
    livingBenefits: [
      { name: 'Retirement Income Max', type: 'GMWB', annualCost: 1.00, rollupRate: 5.0, withdrawalRates: { age59: 3.50, age65: 4.75, age70: 5.25 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Low 0.95% total annual charge', '5-year shorter surrender period', '60 subaccount options', 'Lower-cost alternative to standard VA'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica Axiom III ─────────────────────────────────────────
  {
    id: 'transamerica-axiom-iii', carrierId: 'transamerica', name: 'Axiom III',
    contractType: 'B-Share', surrenderPeriod: 5, surrenderSchedule: [5, 5, 4, 3, 2, 0],
    meCharge: 1.00, adminFee: 0.10, totalAnnualCharge: 1.10,
    fundExpenseRange: { min: 0.15, max: 1.90 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 70, subaccountIds: ['ta-sp500-idx', 'ta-trp-bluechip', 'ta-pimco-total', 'ta-am-europac', 'ta-jpmorgan-growth', 'ta-blackrock-equity'],
    livingBenefits: [
      { name: 'Income Edge', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid or account value' },
      { name: 'Highest Anniversary Value', type: 'Enhanced', annualCost: 0.20, description: 'Highest contract anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['$5,000 minimum premium', '70 subaccount choices', '5-year surrender period', 'Highest Anniversary Value death benefit option'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica I-Share II ────────────────────────────────────────
  {
    id: 'transamerica-ishare-ii', carrierId: 'transamerica', name: 'I-Share II',
    contractType: 'I-Share', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.20, adminFee: 0.05, totalAnnualCharge: 0.25,
    fundExpenseRange: { min: 0.10, max: 1.50 }, minimumPremium: 25000, maximumIssueAge: 85,
    subaccountCount: 65, subaccountIds: ['ta-sp500-idx', 'ta-pimco-total', 'ta-vanguard-growth', 'ta-trp-bluechip', 'ta-fidelity-growth'],
    livingBenefits: [],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums paid or account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Ultra-low 0.25% total annual charge', 'No surrender charges', 'Fee-based advisor product', 'I-Share commission-free structure'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Transamerica Inspire Variable Annuity ──────────────────────────
  {
    id: 'transamerica-inspire', carrierId: 'transamerica', name: 'Inspire Variable Annuity',
    contractType: 'Advisory', surrenderPeriod: 0, surrenderSchedule: [],
    meCharge: 0.45, adminFee: 0.10, totalAnnualCharge: 0.55,
    fundExpenseRange: { min: 0.10, max: 1.60 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['ta-sp500-idx', 'ta-pimco-total', 'ta-trp-bluechip', 'ta-blackrock-equity', 'ta-am-europac'],
    livingBenefits: [
      { name: 'Inspire Income', type: 'GMWB', annualCost: 0.95, rollupRate: 5.0, withdrawalRates: { age59: 3.50, age65: 4.75, age70: 5.25 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 100, rmdFriendly: true,
    highlights: ['Advisory no-load VA', 'Low 0.55% total annual charge', 'Inspire Income GMWB available', '55 subaccount options'],
    sourceUrl: 'https://www.transamerica.com/individual/what-we-offer/products/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Jackson National Perspective L-Flex ─────────────────────────────
  {
    id: 'jackson-perspective-l-flex', carrierId: 'jackson-national', name: 'Perspective L-Flex',
    contractType: 'L-Share', surrenderPeriod: 3, surrenderSchedule: [8, 6, 4, 0],
    meCharge: 1.65, adminFee: 0.15, totalAnnualCharge: 1.80,
    fundExpenseRange: { min: 0.15, max: 2.25 }, minimumPremium: 5000, maximumIssueAge: 85,
    subaccountCount: 90, subaccountIds: ['jn-sp500-idx', 'jn-fid-contrafund', 'jn-pimco-total', 'jn-vanguard-growth', 'jn-am-europac', 'jn-trp-bluechip', 'jn-jpmorgan-lgcap'],
    livingBenefits: [
      { name: 'LifeGuard Freedom Flex', type: 'GMWB', annualCost: 1.50, rollupRate: 7.0, withdrawalRates: { age59: 4.0, age65: 5.0, age70: 5.5 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Highest Quarterly Anniversary Value', type: 'Enhanced', annualCost: 0.30, description: 'Highest quarterly anniversary value through age 80' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Short 3-year L-Share surrender period', '90 subaccount options', 'LifeGuard Freedom Flex available', 'Highest quarterly anniversary death benefit option'],
    sourceUrl: 'https://www.jackson.com/annuities/variable-annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── North American Charter Plus VA ──────────────────────────────────
  {
    id: 'nac-charter-plus-va', carrierId: 'north-american', name: 'Charter Plus Variable Annuity',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.25, adminFee: 0.15, totalAnnualCharge: 1.40,
    fundExpenseRange: { min: 0.20, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 50, subaccountIds: ['nac-sp500-idx', 'nac-trp-bluechip', 'nac-pimco-total', 'nac-am-europac', 'nac-vanguard-growth'],
    livingBenefits: [
      { name: 'NAC Lifetime Income', type: 'GMWB', annualCost: 1.10, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Sammons Financial Group backing', '50 subaccount options', '6% rollup income rider', 'A+ AM Best rated carrier'],
    sourceUrl: 'https://www.northamericancompany.com/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Allianz Life Variable Annuity ──────────────────────────────────
  {
    id: 'allianz-life-va', carrierId: 'allianz-life', name: 'Allianz Index Advantage VA',
    contractType: 'B-Share', surrenderPeriod: 6, surrenderSchedule: [7, 6, 5, 4, 3, 2, 0],
    meCharge: 0.95, adminFee: 0.10, totalAnnualCharge: 1.05,
    fundExpenseRange: { min: 0.15, max: 1.85 }, minimumPremium: 10000, maximumIssueAge: 80,
    subaccountCount: 60, subaccountIds: ['al-sp500-idx', 'al-fid-growth', 'al-pimco-total', 'al-trp-equity', 'al-blackrock-bond'],
    livingBenefits: [
      { name: 'Index Advantage Income', type: 'GMWB', annualCost: 1.25, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Allianz brand — #1 in FIA sales', 'Indexed crediting options within VA', '60 subaccount choices', '6-year surrender period'],
    sourceUrl: 'https://www.allianzlife.com/what-we-offer/annuities',
    lastRateUpdate: '2026-02-01'
  },

  // ── Athene VA ──────────────────────────────────────────────────────
  {
    id: 'athene-agility-va', carrierId: 'athene', name: 'Athene Agility',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.10, adminFee: 0.15, totalAnnualCharge: 1.25,
    fundExpenseRange: { min: 0.15, max: 1.90 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['ath-sp500-idx', 'ath-pimco-total', 'ath-trp-growth', 'ath-am-europac', 'ath-vanguard-bal'],
    livingBenefits: [
      { name: 'Athene Income Benefit', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Enhanced Death Benefit', type: 'Enhanced', annualCost: 0.25, description: 'Highest anniversary value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Apollo-backed carrier', '55 subaccount options', 'Enhanced death benefit available', 'Strong financial ratings'],
    sourceUrl: 'https://www.athene.com/products',
    lastRateUpdate: '2026-02-01'
  },

  // ── American Equity VA ─────────────────────────────────────────────
  {
    id: 'american-equity-advantage-va', carrierId: 'american-equity', name: 'AE Advantage VA',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.20, adminFee: 0.15, totalAnnualCharge: 1.35,
    fundExpenseRange: { min: 0.20, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 45, subaccountIds: ['ae-sp500-idx', 'ae-pimco-total', 'ae-fid-growth', 'ae-trp-bluechip'],
    livingBenefits: [
      { name: 'Income Protector', type: 'GMWB', annualCost: 1.20, rollupRate: 7.0, withdrawalRates: { age59: 4.00, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['7% rollup rate — industry leading', '45 subaccount options', 'American Equity #1 FIA seller', '$10K minimum premium'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Securian VA ────────────────────────────────────────────────────
  {
    id: 'securian-eclipse-va', carrierId: 'securian', name: 'Eclipse VA',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 6, 5, 4, 3, 2, 1, 0],
    meCharge: 1.05, adminFee: 0.10, totalAnnualCharge: 1.15,
    fundExpenseRange: { min: 0.15, max: 1.85 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 60, subaccountIds: ['sec-sp500-idx', 'sec-fid-contrafund', 'sec-pimco-total', 'sec-trp-growth', 'sec-vanguard-growth'],
    livingBenefits: [
      { name: 'Lifetime Income Benefit', type: 'GMWB', annualCost: 1.10, rollupRate: 5.5, withdrawalRates: { age59: 3.50, age65: 4.75, age70: 5.25 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Minnesota Life subsidiary', '60 subaccount options', 'Low 1.15% total annual charge', 'Strong midwestern carrier'],
    sourceUrl: 'https://www.securian.com/financial-professionals/products/annuities.html',
    lastRateUpdate: '2026-02-01'
  },

  // ── Midland National VA ────────────────────────────────────────────
  {
    id: 'midland-national-va', carrierId: 'midland-national', name: 'Midland Variable Annuity',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.15, adminFee: 0.15, totalAnnualCharge: 1.30,
    fundExpenseRange: { min: 0.20, max: 2.00 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 50, subaccountIds: ['mn-sp500-idx', 'mn-pimco-total', 'mn-fid-growth', 'mn-trp-equity', 'mn-vanguard-bal'],
    livingBenefits: [
      { name: 'Income Advantage', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['Sammons Financial Group', '50 subaccount options', '6% income rollup', 'Sister company to North American'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Delaware Life VA ───────────────────────────────────────────────
  {
    id: 'delaware-life-va', carrierId: 'delaware-life', name: 'Retirement Income Secure VA',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 6, 5, 4, 3, 2, 1, 0],
    meCharge: 1.10, adminFee: 0.10, totalAnnualCharge: 1.20,
    fundExpenseRange: { min: 0.15, max: 1.90 }, minimumPremium: 15000, maximumIssueAge: 85,
    subaccountCount: 55, subaccountIds: ['dl-sp500-idx', 'dl-pimco-total', 'dl-trp-growth', 'dl-fid-contrafund', 'dl-am-europac'],
    livingBenefits: [
      { name: 'Guaranteed Income Benefit', type: 'GMWB', annualCost: 1.20, rollupRate: 6.5, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' },
      { name: 'Enhanced Death Benefit', type: 'Enhanced', annualCost: 0.20, description: '5% annual step-up' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['6.5% rollup rate', '55 subaccount options', 'Enhanced death benefit option', 'Group One Thousand affiliate'],
    lastRateUpdate: '2026-02-01'
  },

  // ── Global Atlantic VA ─────────────────────────────────────────────
  {
    id: 'global-atlantic-forefront-va', carrierId: 'global-atlantic', name: 'ForeFront VA',
    contractType: 'B-Share', surrenderPeriod: 7, surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    meCharge: 1.10, adminFee: 0.10, totalAnnualCharge: 1.20,
    fundExpenseRange: { min: 0.15, max: 1.85 }, minimumPremium: 10000, maximumIssueAge: 85,
    subaccountCount: 50, subaccountIds: ['ga-sp500-idx', 'ga-pimco-total', 'ga-fid-growth', 'ga-trp-equity', 'ga-vanguard-bal'],
    livingBenefits: [
      { name: 'ForeFront Income', type: 'GMWB', annualCost: 1.15, rollupRate: 6.0, withdrawalRates: { age59: 3.75, age65: 5.00, age70: 5.50 }, stepUpFrequency: 'Annual', waitingPeriod: 0 }
    ],
    deathBenefits: [
      { name: 'Return of Premium', type: 'Standard', annualCost: 0, description: 'Greater of premiums or account value' }
    ],
    freeWithdrawalPercent: 10, rmdFriendly: true,
    highlights: ['KKR-backed carrier', '50 subaccount options', '6% rollup income rider', 'Fast-growing carrier'],
    sourceUrl: 'https://professionals.globalatlantic.com/products/annuities',
    lastRateUpdate: '2026-02-01'
  }
];
