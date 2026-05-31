export const glwbRiders = [
  {
    id: "fg-income-choice-select",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "F&G Income Choice Select",
    attachedProduct: "F&G Safe Income Plus 10",
    riderFee: 0.90,
    rollUp: {
      rate: 5.0,
      type: "Compound",
      maxYears: 15
    },
    withdrawalRates: {
      single: { "55-59": 3.25, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 },
      joint: { "55-59": 2.75, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 15000,
    maximumIssueAge: 85,
    highlights: ["Low 0.90% rider fee", "15-year compound rollup", "Issue age up to 85"],
    sourceUrl: "https://www.fglife.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "jackson-lifeguard-freedom-flex-db",
    carrierId: "jackson-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "LifeGuard Freedom Flex DB",
    attachedProduct: "Jackson Perspective II",
    riderFee: 1.50,
    rollUp: {
      rate: 7.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 },
      joint: { "55-59": 3.50, "60-64": 4.00, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.00 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 5000,
    maximumIssueAge: 85,
    highlights: ["Industry-leading VA GMWB rider", "7% simple rollup for 10 years", "Annual step-up to lock in gains", "Available on all Jackson VA contracts"],
    sourceUrl: "https://www.jackson.com/annuities/variable-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "jackson-lifeguard-freedom-6-net",
    carrierId: "jackson-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "LifeGuard Freedom 6 Net",
    attachedProduct: "Jackson Perspective Advisory",
    riderFee: 1.10,
    rollUp: {
      rate: 6.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.25, "65-69": 5.00, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 },
      joint: { "55-59": 3.25, "60-64": 3.75, "65-69": 4.50, "70-74": 4.75, "75-79": 5.25, "80+": 5.75 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 5000,
    maximumIssueAge: 85,
    highlights: ["Lower-cost advisory version", "6% simple rollup for 10 years", "Net-of-fee benefit base calculation", "Designed for fee-based advisors"],
    sourceUrl: "https://www.jackson.com/annuities/variable-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "jackson-life-pay",
    carrierId: "jackson-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Life Pay",
    attachedProduct: "Jackson Perspective II",
    riderFee: 0.60,
    rollUp: {
      rate: 0.0,
      type: "None",
      maxYears: 0
    },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 5.75, "80+": 6.00 },
      joint: { "55-59": 3.25, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.25, "80+": 5.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 5000,
    maximumIssueAge: 85,
    highlights: ["Low-cost GMWB at 0.60%", "No rollup — income based on account value", "Annual step-up available", "Best for clients near retirement"],
    sourceUrl: "https://www.jackson.com/annuities/variable-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "jackson-income-accelerator",
    carrierId: "jackson-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "IncomeAccelerator",
    attachedProduct: "Jackson MarketProtector III",
    riderFee: 0.95,
    rollUp: {
      rate: 8.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 7.00 },
      joint: { "55-59": 3.00, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: ["8% simple interest rollup", "Nursing home benefit doubler", "Available on Jackson FIA products", "Highest rollup rate in Jackson lineup"],
    sourceUrl: "https://www.jackson.com/annuities/variable-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nac-income-pay-pro",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Pay Pro",
    attachedProduct: "NAC Performance Choice",
    riderFee: 1.00,
    rollUp: {
      rate: 7.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.75, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.00 },
      joint: { "55-59": 3.25, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: ["7% simple rollup for 10 years", "Nursing home doubler", "Available on most NAC FIA products", "Sammons Financial Group backing"],
    sourceUrl: "https://www.northamericancompany.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nac-income-pay-select",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Pay Select",
    attachedProduct: "NAC Safeguard Plus",
    riderFee: 0.75,
    rollUp: {
      rate: 5.0,
      type: "Compound",
      maxYears: 15
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 1.5,
    minimumPremium: 10000,
    maximumIssueAge: 85,
    highlights: ["5% compound rollup for 15 years", "Lower-cost income option at 0.75%", "Nursing home benefit at 1.5x", "15-year compound accumulation"],
    sourceUrl: "https://www.northamericancompany.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nac-benefit-solutions-lifetime",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Benefit Solutions Lifetime Income",
    attachedProduct: "NAC Benefit Solutions II",
    riderFee: 1.10,
    rollUp: {
      rate: 8.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 5.00, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.25 },
      joint: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: ["8% simple rollup — highest in NAC lineup", "2x nursing home doubler", "Attached to Benefit Solutions II FIA", "Premium bonus product"],
    sourceUrl: "https://www.northamericancompany.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "pacific-life-coreincome-5",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "CoreIncome 5",
    attachedProduct: "Pacific Index Choice",
    riderFee: 0.95,
    rollUp: { rate: 7.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.75, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 7.00 },
      joint: { "55-59": 3.25, "60-64": 4.25, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.50 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 15000, maximumIssueAge: 80,
    highlights: ["7% simple rollup", "Nursing home doubler", "Available on Pacific FIA products", "Pacific Life A+ rated"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities.html",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "pacific-life-coreincome-advantage",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "CoreIncome Advantage",
    attachedProduct: "Pacific Secure Income",
    riderFee: 1.15,
    rollUp: { rate: 8.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 5.00, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.25 },
      joint: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 15000, maximumIssueAge: 80,
    highlights: ["8% simple rollup — highest in Pacific lineup", "2x nursing home benefit", "Premium rider for maximum income", "Annual step-up feature"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities.html",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "transamerica-income-edge-fia",
    carrierId: "transamerica",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Edge",
    attachedProduct: "Transamerica Secure Retirement Index",
    riderFee: 1.05,
    rollUp: { rate: 7.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.75, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 7.00 },
      joint: { "55-59": 3.25, "60-64": 4.25, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.50 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 1.5,
    minimumPremium: 10000, maximumIssueAge: 80,
    highlights: ["7% simple rollup", "1.5x nursing home benefit", "Available on Transamerica FIA products", "Transamerica brand strength"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "transamerica-income-accelerator",
    carrierId: "transamerica",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Accelerator",
    attachedProduct: "Transamerica Elite Edge Plus",
    riderFee: 1.20,
    rollUp: { rate: 8.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 5.00, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.25 },
      joint: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 15000, maximumIssueAge: 80,
    highlights: ["8% simple rollup — highest in Transamerica", "2x nursing home doubler", "Attached to bonus FIA product", "Maximum income potential"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "fg-safe-income-rider",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Safe Income Rider",
    attachedProduct: "F&G Safe Income Plus",
    riderFee: 0.95,
    rollUp: { rate: 7.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.75, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 6.75 },
      joint: { "55-59": 3.25, "60-64": 4.25, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: false, nursingHomeMultiplier: null,
    minimumPremium: 10000, maximumIssueAge: 80,
    highlights: ["7% simple rollup", "Low 0.95% rider fee", "Available on Safe Income Plus FIA", "F&G AM Best A rated"],
    sourceUrl: "https://www.fglife.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "fg-accelerator-income-rider",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Accelerator Income Rider",
    attachedProduct: "F&G Accelerator Plus 10",
    riderFee: 1.10,
    rollUp: { rate: 8.0, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 5.00, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.00 },
      joint: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 10000, maximumIssueAge: 80,
    highlights: ["8% rollup with 10% premium bonus", "Performance multiplier up to 175%", "2x nursing home benefit", "Maximum income power with bonus"],
    sourceUrl: "https://www.fglife.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "athene-income-shield",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Shield",
    attachedProduct: "Athene Agility FIA",
    riderFee: 1.00,
    rollUp: { rate: 7.5, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.75, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.00 },
      joint: { "55-59": 3.25, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 15000, maximumIssueAge: 80,
    highlights: ["7.5% simple rollup", "2x nursing home doubler", "Apollo-backed financial strength", "Available on Athene FIA products"],
    sourceUrl: "https://www.athene.com/products",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "athene-income-advantage",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Advantage Plus",
    attachedProduct: "Athene Performance Elite",
    riderFee: 0.85,
    rollUp: { rate: 6.0, type: "Compound", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: false, nursingHomeMultiplier: null,
    minimumPremium: 10000, maximumIssueAge: 85,
    highlights: ["6% COMPOUND rollup — grows faster over time", "Low 0.85% rider fee", "Issue age up to 85", "Compound growth advantage"],
    sourceUrl: "https://www.athene.com/products",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "american-equity-incomeshield",
    carrierId: "american-equity",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "IncomeShield Plus",
    attachedProduct: "AE AssetShield",
    riderFee: 1.05,
    rollUp: { rate: 7.5, type: "Simple", maxYears: 10 },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 5.00, "65-69": 5.50, "70-74": 6.00, "75-79": 6.50, "80+": 7.00 },
      joint: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 2.0,
    minimumPremium: 10000, maximumIssueAge: 80,
    highlights: ["7.5% simple rollup", "2x nursing home doubler", "#1 FIA seller", "Low $10K minimum"],
    sourceUrl: "https://www.american-equity.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "mutual-of-omaha-income-protector",
    carrierId: "mutual-of-omaha",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Income Protector",
    attachedProduct: "Mutual of Omaha SecureAdvantage",
    riderFee: 0.95,
    rollUp: { rate: 6.5, type: "Simple", maxYears: 12 },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 }
    },
    stepUpAvailable: true, rmdFriendly: true,
    nursingHomeBenefit: true, nursingHomeMultiplier: 1.5,
    minimumPremium: 10000, maximumIssueAge: 85,
    highlights: ["12-year rollup period — longest available", "1.5x nursing home benefit", "Trusted Mutual of Omaha brand", "Issue age up to 85"],
    sourceUrl: "https://www.mutualofomaha.com/annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "equitrust-marketearly-income",
    carrierId: "equitrust",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "MarketEarly Income Benefit Rider",
    attachedProduct: "EquiTrust MarketEarly Income Index",
    riderFee: 1.25,
    rollUp: {
      rate: 7.0,
      type: "Compound",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 5.60, "60-64": 6.10, "65-69": 6.60, "70-74": 7.10, "75-79": 7.60, "80+": 8.10 },
      joint: { "55-59": 4.60, "60-64": 5.10, "65-69": 5.60, "70-74": 6.10, "75-79": 6.60, "80+": 7.10 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "7% compound rollup years 1–5, 4% compound years 6–10",
      "15% first-year benefit base bonus on premiums",
      "2x chronic illness income doubler for up to 5 years",
      "Single payout starts at 5.10% age 50, increases 0.10% per year",
      "Joint payout 1.00% lower than single at every age"
    ],
    sourceUrl: "https://agents.equitrust.com/products/product-offerings/income-focused-annuities/marketearly-income-index/",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "aspida-synergy-choice-income",
    carrierId: "aspida",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Synergy Choice Income GLWB",
    attachedProduct: "Aspida Synergy Choice Income 10",
    riderFee: 0.50,
    rollUp: {
      rate: 12.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.30, "60-64": 5.05, "65-69": 5.75, "70-74": 6.15, "75-79": 6.75, "80+": 7.65 },
      joint: { "55-59": 3.80, "60-64": 4.55, "65-69": 5.25, "70-74": 5.65, "75-79": 6.25, "80+": 7.15 }
    },
    stepUpAvailable: false,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Industry-low 0.50% rider fee (1.50% max)",
      "12% simple rollup for 10 years — among highest available",
      "25% benefit base bonus on initial premium",
      "2x nursing home multiplier (single) / 1.5x (joint) for up to 60 months",
      "Backed by Ares Management ($400B+ AUM), A- AM Best"
    ],
    sourceUrl: "https://aspida.com/documents/fia/synergy-income/30042-Synergy-Choice-Income-Fact-Sheet.pdf",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "eagle-life-select-income-focus-7",
    carrierId: "eagle-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Select Income Focus 7 LIBR Option 1",
    attachedProduct: "Eagle Select Income Focus 7",
    riderFee: 1.00,
    rollUp: {
      rate: 14.0,
      type: "Simple",
      maxYears: 5
    },
    withdrawalRates: {
      single: { "55-59": 5.50, "60-64": 6.15, "65-69": 6.70, "70-74": 7.00, "75-79": 7.40, "80+": 7.60 },
      joint: { "55-59": 5.00, "60-64": 5.65, "65-69": 6.20, "70-74": 6.50, "75-79": 6.90, "80+": 7.10 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "14% simple daily rollup for 5 years — highest short-term rollup",
      "2x Wellbeing Benefit income doubler (single) / 1.5x (joint)",
      "Daily-credited rollup grows Income Account Value every day",
      "7-year surrender period — shorter than most income FIAs",
      "Payout percentage increases every year of age from 50–79+"
    ],
    sourceUrl: "https://eagle-lifeco.com/eagle-select-income-focus",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "eagle-life-select-income-focus-10",
    carrierId: "eagle-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Select Income Focus 10 LIBR Option 2",
    attachedProduct: "Eagle Select Income Focus 10",
    riderFee: 1.00,
    rollUp: {
      rate: 12.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 5.50, "60-64": 6.15, "65-69": 6.70, "70-74": 7.00, "75-79": 7.40, "80+": 7.60 },
      joint: { "55-59": 5.00, "60-64": 5.65, "65-69": 6.20, "70-74": 6.50, "75-79": 6.90, "80+": 7.10 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "12% simple daily rollup for 10 years — longer accumulation period",
      "Surpasses Option 1 IAV after 5 years 10 months of deferral",
      "2x Wellbeing Benefit income doubler (single) / 1.5x (joint)",
      "10-year surrender period with greater interest-crediting potential",
      "Same high payout percentages as 7-year version"
    ],
    sourceUrl: "https://eagle-lifeco.com/eagle-select-income-focus",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nassau-amplified-income-plus",
    carrierId: "nassau-life",
    ratesVerified: "partial",
    lastVerifiedDate: "2026-02-28",
    name: "Amplified Income Plus",
    attachedProduct: "Nassau Bonus Annuity",
    riderFee: 0.95,
    rollUp: {
      rate: 3.0,
      type: "Simple",
      maxYears: 15
    },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.25, "80+": 6.75 },
      joint: { "55-59": 3.25, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 5.75, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "3% guaranteed rollup PLUS 150% of annual index performance credits",
      "15-year rollup period — among the longest available",
      "Low 0.95% rider fee (max 1.50% after year 15)",
      "Steady guaranteed income — amount does not decrease once elected",
      "Available on Nassau Bonus Annuity with premium bonus"
    ],
    sourceUrl: "https://salesnet.nfg.com/rider-options-for-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nassau-amplified-income-plus-rio",
    carrierId: "nassau-life",
    ratesVerified: "partial",
    lastVerifiedDate: "2026-02-28",
    name: "Amplified Income Plus with Rising Income Opportunity",
    attachedProduct: "Nassau Bonus Annuity",
    riderFee: 0.95,
    rollUp: {
      rate: 3.0,
      type: "Simple",
      maxYears: 15
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.00 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Rising Income Opportunity — income can increase after rider exercise",
      "3% guaranteed rollup + 150% index credits, continues through year 15",
      "Lower initial payout vs. base version, but income may grow over time",
      "0.95% rider fee (max 1.50% after year 15)",
      "Performance-based roll-up continues even after income starts"
    ],
    sourceUrl: "https://salesnet.nfg.com/rider-options-for-annuities",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "sentinel-security-gia-glwb",
    carrierId: "sentinel-security-life",
    ratesVerified: "partial",
    lastVerifiedDate: "2026-02-28",
    name: "Guaranteed Income Annuity GLWB Rider",
    attachedProduct: "Sentinel Security Life Guaranteed Income Annuity 10",
    riderFee: 1.25,
    rollUp: {
      rate: 8.5,
      type: "Compound",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.75, "60-64": 4.50, "65-69": 5.25, "70-74": 5.75, "75-79": 6.50, "80+": 7.00 },
      joint: { "55-59": 3.25, "60-64": 4.00, "65-69": 4.75, "70-74": 5.25, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: false,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "8.5% COMPOUND rollup for 10 years — highest compound rollup available",
      "11% one-time premium bonus credited at issue",
      "Tiered rider fee: 1.25% years 1–5, 1.60% years 6–10",
      "2.75% minimum guaranteed interest rate on accumulation value",
      "Income payments can be monthly, quarterly, semi-annual, or annual"
    ],
    sourceUrl: "https://www.sslco.com/products/guaranteed-income-annuity",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "trustage-zone-income-glwb",
    carrierId: "trustage",
    ratesVerified: "partial",
    lastVerifiedDate: "2026-02-28",
    name: "Zone Income GLWB Rider",
    attachedProduct: "TruStage Zone Income Annuity",
    riderFee: 1.00,
    rollUp: {
      rate: 0.0,
      type: "None",
      maxYears: 0
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.00 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Registered index-linked annuity (RILA) with built-in GLWB",
      "Selectable downside floor from 0% to -10% with positive cap",
      "Income payments guaranteed for life even if contract value hits zero",
      "Barron's 100 Best Annuities recognized",
      "Additional 0.75% contract fee (total cost 1.75% with rider)"
    ],
    sourceUrl: "https://www.trustage.com/annuities/zone-income-annuity",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "fg-safe-income-advantage-egmwb",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Safe Income Advantage EGMWB",
    attachedProduct: "F&G Safe Income Advantage",
    riderFee: 1.15,
    rollUp: {
      rate: 7.2,
      type: "Compound",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "7.20% COMPOUND rollup — grows faster than simple interest riders",
      "Three EGMWB options: Level, Increasing, and Inflation-Adjusted income",
      "2x impairment income multiplier (single) / 1.5x (joint)",
      "Minimum age 60 to begin EGMWB withdrawals",
      "F&G rated A (Excellent) by AM Best"
    ],
    sourceUrl: "https://success.fglife.com/fg-safe-income-advantage",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "equitrust-marketseven-income",
    carrierId: "equitrust",
    ratesVerified: "partial",
    lastVerifiedDate: "2026-02-28",
    name: "MarketSeven Income Benefit Rider",
    attachedProduct: "EquiTrust MarketSeven Index",
    riderFee: 1.25,
    rollUp: {
      rate: 7.0,
      type: "Compound",
      maxYears: 7
    },
    withdrawalRates: {
      single: { "55-59": 5.00, "60-64": 5.50, "65-69": 6.00, "70-74": 6.50, "75-79": 7.00, "80+": 7.50 },
      joint: { "55-59": 4.00, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 10000,
    maximumIssueAge: 80,
    highlights: [
      "25% first-year benefit base bonus on premiums",
      "7% compound rollup for 7 years — shorter accumulation period",
      "Income withdrawals may begin after 2nd contract year and age 50",
      "Withdrawals can be stopped and restarted without penalty",
      "Income continues even if accumulation value reaches zero"
    ],
    sourceUrl: "https://www.equitrust.com/modals/marketseven-modals/income-rider-marketseven/",
    lastRateUpdate: "2026-02-01"
  },
  {
    id: "nationwide-peak-10-bonus-income-plus",
    carrierId: "nationwide",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Nationwide Peak 10 Bonus Income+ Rider",
    attachedProduct: "Nationwide Peak 10",
    riderFee: 1.00,
    rollUp: {
      rate: 8.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.05, "60-64": 5.35, "65-69": 6.25, "70-74": 6.85, "75-79": 7.35, "80+": 7.65 },
      joint: { "55-59": 3.75, "60-64": 5.05, "65-69": 5.95, "70-74": 6.55, "75-79": 7.05, "80+": 7.35 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 85,
    highlights: [
      "25% day-one bonus credit to Income Benefit Base",
      "8% simple rollup for 10 years — among the highest available",
      "Single-life withdrawal rates reach 7.65% at age 81+",
      "Lifetime withdrawals can begin as early as age 45",
      "Nationwide A+ (AM Best) / A+ (S&P) rated carrier"
    ],
    sourceUrl: "https://nationwidefinancial.com/media/pdf/FAM-1166AO-AL.pdf",
    lastRateUpdate: "2026-01-15"
  },
  {
    id: "athene-ascent-pro-10-income",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Athene Ascent Pro 10 Income Rider",
    attachedProduct: "Athene Ascent Pro 10",
    riderFee: 1.00,
    rollUp: {
      rate: 10.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.10, "65-69": 5.55, "70-74": 7.35, "75-79": 7.50, "80+": 8.50 },
      joint: { "55-59": 3.00, "60-64": 3.60, "65-69": 5.05, "70-74": 6.85, "75-79": 7.00, "80+": 8.00 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "10% simple rollup for 10 years — highest guaranteed rollup in market",
      "20% day-one income base bonus on premium",
      "Level, earnings-indexed, and accelerated income options available",
      "Enhanced Income Benefit doubles income if ADL conditions met",
      "Athene A+ (S&P) / A1 (Moody's) rated carrier"
    ],
    sourceUrl: "https://www.athene.com/products/fia/ascent-pro",
    lastRateUpdate: "2026-01-07"
  },
  {
    id: "global-atlantic-income-150-se-10",
    carrierId: "global-atlantic",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Global Atlantic Income 150+ SE GLWB",
    attachedProduct: "Global Atlantic Income 150+ SE 10",
    riderFee: 1.20,
    rollUp: {
      rate: 7.5,
      type: "Simple",
      maxYears: 5
    },
    withdrawalRates: {
      single: { "55-59": 3.60, "60-64": 4.10, "65-69": 4.60, "70-74": 5.10, "75-79": 5.60, "80+": 6.10 },
      joint: { "55-59": 3.10, "60-64": 3.60, "65-69": 4.10, "70-74": 4.60, "75-79": 5.10, "80+": 5.60 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "20% day-one Income Boost to Withdrawal Base",
      "7.5% annual Income Boosts in years 2-5 if income not activated",
      "Withdrawal % increases 0.10% per attained age from 60-85",
      "Level and Lifestyle payment options available",
      "KKR-backed Global Atlantic — A (AM Best) / A (S&P) rated"
    ],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities/income-150-fixed-index-annuity",
    lastRateUpdate: "2026-01-15"
  },
  {
    id: "pacific-life-index-income-lic",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Pacific Life Lifetime Income Creator",
    attachedProduct: "Pacific Life Pacific Index Income",
    riderFee: 1.00,
    rollUp: {
      rate: 8.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.50, "60-64": 5.00, "65-69": 5.00, "70-74": 6.00, "75-79": 6.00, "80+": 7.00 },
      joint: { "55-59": 4.00, "60-64": 4.50, "65-69": 4.50, "70-74": 5.50, "75-79": 5.50, "80+": 6.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Built-in GLWB — no separate rider election required",
      "8% Annual Deferral Credit increases withdrawal % each year deferred up to 20 years",
      "Replaces Pacific Index Foundation in new sales (launched Sept 2025)",
      "Pacific Life AA- (S&P) / A+ (AM Best) — among highest-rated FIA carriers",
      "Protected Payment Base may step up on contract anniversaries"
    ],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities/pacific-index-income.html",
    lastRateUpdate: "2026-01-20"
  },
  {
    id: "midland-national-capital-income-glwb",
    carrierId: "midland-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Midland National Capital Income GLWB",
    attachedProduct: "Midland National Capital Income",
    riderFee: 1.00,
    rollUp: {
      rate: 7.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 15000,
    maximumIssueAge: 80,
    highlights: [
      "Low 1.00% rider fee assessed on accumulation value (not benefit base)",
      "Advisory-channel FIA designed for fee-based advisors",
      "7-year surrender charge period — shorter than most FIA income products",
      "Midland National A+ (AM Best) / A+ (S&P) rated — Sammons Financial backing",
      "Lower $15,000 minimum premium for broader accessibility"
    ],
    sourceUrl: "https://www.midlandnational.com/capitalincome",
    lastRateUpdate: "2026-01-15"
  },
  {
    id: "north-american-income-pay-pro-compound",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "North American Income Pay Pro (Compound)",
    attachedProduct: "North American Income Pay Pro FIA",
    riderFee: 1.20,
    rollUp: {
      rate: 8.0,
      type: "Compound",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "8% COMPOUND rollup for 10 years — powerful benefit base growth",
      "Level and increasing income payment options available",
      "Nursing home / LTC multiplier doubles lifetime payments for up to 5 years",
      "Income available as early as age 50",
      "North American A+ (AM Best) / A+ (S&P) — Sammons Financial Group"
    ],
    sourceUrl: "https://www.northamericancompany.com/incomepaypro",
    lastRateUpdate: "2026-01-15"
  },
  {
    id: "nac-benefitsolutions-10-benefit-rider",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "NAC BenefitSolutions 10 Benefit Rider",
    attachedProduct: "NAC BenefitSolutions 10",
    riderFee: 1.20,
    rollUp: {
      rate: 1.5,
      type: "Simple",
      maxYears: 20
    },
    withdrawalRates: {
      single: { "55-59": 3.25, "60-64": 4.25, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.75 },
      joint: { "55-59": 2.75, "60-64": 3.75, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.25 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 2.0,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Triple benefit: lifetime income + nursing home multiplier + enhanced death benefit",
      "Benefit base floor: 125% at issue, 150% at year 5, 175% at year 10",
      "1.50% GLWB stacking rollup PLUS interest credits applied to benefit base",
      "Nursing home multiplier doubles payments for up to 5 annual payments",
      "20% day-one benefit base bonus on premium"
    ],
    sourceUrl: "https://www.northamericancompany.com/benefitsolutions",
    lastRateUpdate: "2026-01-15"
  },
  {
    id: "corebridge-polaris-income-plus",
    carrierId: "corebridge-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Corebridge Polaris Income Plus",
    attachedProduct: "Corebridge Polaris Variable Annuity",
    riderFee: 1.25,
    rollUp: {
      rate: 6.0,
      type: "Simple",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.00, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.00 },
      joint: { "55-59": 3.25, "60-64": 3.75, "65-69": 4.25, "70-74": 4.75, "75-79": 5.25, "80+": 5.75 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Daily step-up captures highest daily value — 252 opportunities per year",
      "6% simple minimum income base rollup guarantee",
      "Post-age-65 PIP automatically increases to 4.50% (single) / 4.25% (joint)",
      "Formerly AIG — Corebridge A+ (S&P) / A2 (Moody's) rated",
      "Three different income options available at purchase"
    ],
    sourceUrl: "https://www.corebridgefinancial.com/what-we-offer/annuities/variable-annuities",
    lastRateUpdate: "2026-01-20"
  },
  {
    id: "lincoln-lifetime-income-edge",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Lincoln Lifetime Income Edge",
    attachedProduct: "Lincoln OptiBlend 7",
    riderFee: 0.95,
    rollUp: {
      rate: 5.0,
      type: "Compound",
      maxYears: 10
    },
    withdrawalRates: {
      single: { "55-59": 4.00, "60-64": 4.50, "65-69": 5.00, "70-74": 5.50, "75-79": 6.00, "80+": 6.50 },
      joint: { "55-59": 3.50, "60-64": 4.00, "65-69": 4.50, "70-74": 5.00, "75-79": 5.50, "80+": 6.00 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: true,
    nursingHomeMultiplier: 1.1,
    minimumPremium: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Low 0.95% rider fee — among the lowest GLWB rider charges available",
      "5% compound enhancement grows income base even in flat markets",
      "Income Bonus Rate adds +0.75% after 5 years, +1.25% after 10 years of deferral",
      "10% nursing home enhancement for ages 65+ (not a full doubler)",
      "Lincoln Financial A+ (AM Best) / A+ (S&P) rated carrier"
    ],
    sourceUrl: "https://www.lfg.com/public/individual/exploreinsuranceannuities/annuities/fixedannuities/lincolnlietimeincomeedge",
    lastRateUpdate: "2026-01-01"
  },
  {
    id: "midland-national-incomevantage-pro-rider",
    carrierId: "midland-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-03-01",
    name: "Midland National IncomeVantage Pro",
    attachedProduct: "Midland National IncomeVantage Pro FIA",
    riderFee: 0.00,
    rollUp: {
      rate: 0.0,
      type: "None",
      maxYears: 0
    },
    withdrawalRates: {
      single: { "55-59": 3.50, "60-64": 4.25, "65-69": 5.00, "70-74": 5.75, "75-79": 6.25, "80+": 7.00 },
      joint: { "55-59": 3.00, "60-64": 3.75, "65-69": 4.50, "70-74": 5.25, "75-79": 5.75, "80+": 6.50 }
    },
    stepUpAvailable: true,
    rmdFriendly: true,
    nursingHomeBenefit: false,
    nursingHomeMultiplier: null,
    minimumPremium: 15000,
    maximumIssueAge: 80,
    highlights: [
      "ZERO rider fee — no annual GLWB charge deducted from account value",
      "Payout increases 10% for each year income is deferred (up to 10 years)",
      "Income can begin immediately or be deferred up to 20 years",
      "Higher potential growth with no fee drag on accumulation value",
      "Midland National A+ (AM Best) / A+ (S&P) — Sammons Financial Group"
    ],
    sourceUrl: "https://www.midlandnational.com/income-calculator",
    lastRateUpdate: "2026-01-15"
  }
];
