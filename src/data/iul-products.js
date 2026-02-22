export const iulProducts = [
  // 1. North American Builder Plus IUL 4
  {
    id: "north-american-builder-plus-4",
    carrierId: "north-american",
    name: "Builder Plus IUL 4",
    maxIllustratedRate: 6.47,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Highest S&P 500 cap rate in class", "Rate Lock feature", "Multiple volatility-controlled index options"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // 2. Nationwide IUL Accumulator II
  {
    id: "nationwide-iul-accumulator-ii",
    carrierId: "nationwide",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate and uncapped spread verified via lifeinsurancerecommendations.com',
    name: "IUL Accumulator II 2020",
    maxIllustratedRate: 6.42,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.15
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 6.00,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Multi-Index Monthly Average",
        creditingMethod: "Monthly Average",
        capRate: 13.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.15
      },
      {
        indexName: "JP Morgan Mercury",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BNP Paribas Global H-Factor",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 220,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["15% Nationwide Multiplier (year 6+)", "50% Advanced Multiplier (year 1+)", "220% BNP Paribas participation", "10.25% S&P 500 cap"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal/indexed-ul-accumulator-ii",
    lastRateUpdate: "2026-02-01"
  },

  // 3. Pacific Life Discovery Xelerator IUL
  {
    id: "pacific-life-discovery-xelerator",
    carrierId: "pacific-life",
    name: "Pacific Discovery Xelerator IUL",
    maxIllustratedRate: 6.58,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 75,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.50
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection Rider", "Pacific Income Provider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Pacific Dynamix proprietary index with 1.50x multiplier", "Industry-leading no-lapse to 95", "Strong accumulation focus"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 4. Transamerica Financial Choice IUL
  {
    id: "transamerica-financial-choice-iul",
    carrierId: "transamerica",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Financial Choice IUL",
    maxIllustratedRate: 6.22,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.5,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Merrill Lynch RPM Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Living Benefit Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Flexible premium design", "Multiple index choices", "Competitive Russell 2000 cap"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 5. Securian Eclipse Accumulator IUL
  {
    id: "securian-eclipse-accumulator",
    carrierId: "securian",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Eclipse Accumulator IUL",
    maxIllustratedRate: 6.41,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Supplemental Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Eclipse Index Shield with 1.25x multiplier", "Strong AA- rated carrier", "Overloan Protection included"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life/eclipse-accumulator.html",
    lastRateUpdate: "2026-02-01"
  },

  // 6. Allianz Life Accumulator IUL
  {
    id: "allianz-life-accumulator",
    carrierId: "allianz-life",
    name: "Life Accumulator IUL",
    maxIllustratedRate: 6.75,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Trigger Rate",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        triggerRate: 8.00
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum Cap",
        capRate: 3.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "PIMCO Tactical Balanced ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "S&P 500 Futures ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      }
    ],
    fixedAccountRate: 5.30,
    guaranteedMinCreditingRate: 0.25,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Index Lock", "Loan Protection Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["40% Select multiplier (contractually guaranteed)", "175% Bloomberg participation with 1.40x multiplier", "5.30% fixed account rate", "8.00% S&P 500 trigger rate"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life/Allianz-Life-Accumulator/Rates",
    lastRateUpdate: "2026-02-21"
  },

  // 7. Lincoln WealthBuilder IUL
  {
    id: "lincoln-wealthbuilder-iul",
    carrierId: "lincoln-financial",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate verified via lifeinsurancerecommendations.com (WealthAccumulator 2)',
    name: "WealthBuilder IUL 2.0",
    maxIllustratedRate: 6.35,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Lincoln LifeAssure", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Return of Premium option", "Lincoln LifeAssure living benefits", "Multi-Asset index with 1.20x multiplier"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 8. F&G Life Pathfinder IUL
  {
    id: "fandg-pathfinder-iul",
    carrierId: "fandg",
    name: "Pathfinder IUL",
    maxIllustratedRate: 6.15,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Trailblazer Sector 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Barclays Trailblazer index with 150% participation", "Competitive pricing", "Strong accumulation chassis"],
    sourceUrl: "https://www.fglife.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 9. Prudential PruLife Index Advantage
  {
    id: "prudential-prulife-index-advantage",
    carrierId: "prudential",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "PruLife Index Advantage",
    maxIllustratedRate: 6.28,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pru Dynamic Multi-Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "IncomeFlex", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Top-tier carrier financial strength", "NASDAQ-100 index option", "IncomeFlex guaranteed income rider"],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 10. Mutual of Omaha Indexed UL
  {
    id: "mutual-of-omaha-indexed-ul",
    carrierId: "mutual-of-omaha",
    name: "Indexed Universal Life",
    maxIllustratedRate: 6.05,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Terminal Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Simple product design", "Strong mutual company", "Competitive S&P 500 cap rate"],
    sourceUrl: "https://www.mutualofomaha.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 11. John Hancock Accumulation IUL 20
  {
    id: "john-hancock-accumulation-iul-20",
    carrierId: "john-hancock",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Accumulation IUL 20",
    maxIllustratedRate: 6.50,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "John Hancock Dimensional Multi-Factor Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Vitality Program", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Vitality wellness program with rewards", "Dimensional Multi-Factor Index with 1.40x multiplier", "170% participation rate"],
    sourceUrl: "https://www.johnhancock.com/life-insurance.html",
    lastRateUpdate: "2026-02-01"
  },

  // 12. Penn Mutual Accumulation Builder IUL
  {
    id: "penn-mutual-accumulation-builder",
    carrierId: "penn-mutual",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate verified via lifeinsurancerecommendations.com',
    name: "Accumulation Builder IUL",
    maxIllustratedRate: 6.18,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Fidelity AIM Dividend Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Protection Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Mutual company dividend philosophy", "Strong financial stability", "Fidelity AIM Dividend Index option"],
    sourceUrl: "https://www.pennmutual.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 13. Midland National LifeMark IUL
  {
    id: "midland-national-lifemark",
    carrierId: "midland-national",
    name: "LifeMark IUL",
    maxIllustratedRate: 6.38,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Second highest S&P 500 cap rate at 11.75%", "Sammons Financial Group backing", "Three uncapped index options"],
    sourceUrl: "https://www.midlandnational.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 14. Global Atlantic Lifetime Builder IUL
  {
    id: "global-atlantic-lifetime-builder",
    carrierId: "global-atlantic",
    name: "Lifetime Builder IUL",
    maxIllustratedRate: 6.12,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["KKR-backed carrier with growing market share", "JPMorgan Mozaic II index", "Competitive accumulation design"],
    sourceUrl: "https://professionals.globalatlantic.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 15. MassMutual Whole Life IUL Alternative
  {
    id: "massmutual-wl-iul-alternative",
    carrierId: "massmutual",
    name: "Whole Life with Index-Linked Dividends",
    maxIllustratedRate: 5.85,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 4.00,
    guaranteedMinCreditingRate: 2.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "Lifetime",
    deathBenefitOptions: ["Level"],
    riders: ["Accelerated Benefit Rider", "Paid-Up Additions Rider"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 70,
    highlights: ["A++ rated mutual company", "Highest guaranteed minimum crediting rate", "Lifetime no-lapse guarantee"],
    sourceUrl: "https://www.massmutual.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 16. American General Max Accumulator+ IUL
  {
    id: "american-general-max-accumulator-plus",
    carrierId: "american-general",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate verified via lifeinsurancerecommendations.com',
    name: "Max Accumulator+ III IUL",
    maxIllustratedRate: 6.52,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Tactical Balanced ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.45
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Premium Deposit Fund"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["PIMCO index with 1.45x multiplier", "Premium Deposit Fund feature", "Three death benefit options"],
    lastRateUpdate: "2026-02-01"
  },

  // 17. Corebridge Index Advantage IUL
  {
    id: "corebridge-index-advantage-iul",
    carrierId: "corebridge-financial",
    name: "Index Advantage IUL",
    maxIllustratedRate: 6.30,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Corebridge Strategic Allocation Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Formerly AIG - large carrier backing", "International index option", "Competitive accumulation design"],
    lastRateUpdate: "2026-02-01"
  },

  // 18. Protective Indexed Choice UL
  {
    id: "protective-indexed-choice-ul",
    carrierId: "protective-life",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate verified via lifeinsurancerecommendations.com',
    name: "Indexed Choice UL",
    maxIllustratedRate: 6.08,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 22.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Estate Protection Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 95", "2-Year point-to-point option", "Competitive fixed loan rate at 4.5%"],
    lastRateUpdate: "2026-02-01"
  },

  // 19. Symetra Accumulation IUL
  {
    id: "symetra-accumulation-iul",
    carrierId: "symetra",
    name: "Accumulation IUL",
    maxIllustratedRate: 5.92,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Sumitomo Life backing", "Clean product design", "Competitive pricing for healthy applicants"],
    sourceUrl: "https://www.symetra.com/our-products/individuals/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 20. Minnesota Life Eclipse Accumulator IUL
  {
    id: "minnesota-life-eclipse-accumulator",
    carrierId: "minnesota-life",
    name: "Eclipse Accumulator IUL",
    maxIllustratedRate: 6.41,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Children's Insurance Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Minnesota Life subsidiary of Securian Financial", "Eclipse Index Shield with multiplier", "Strong AA- S&P rating"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html",
    lastRateUpdate: "2026-02-01"
  },

  // 21. Ameritas NoLapse IUL
  {
    id: "ameritas-nolapse-iul",
    carrierId: "ameritas",
    name: "NoLapse Guarantee IUL",
    maxIllustratedRate: 5.75,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Term Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Industry-leading no-lapse guarantee to age 100", "Strong protection focus", "Competitive cost structure"],
    lastRateUpdate: "2026-02-01"
  },

  // 22. Principal Indexed UL Accumulation
  {
    id: "principal-indexed-ul-accumulation",
    carrierId: "principal-financial",
    name: "Indexed UL Accumulation",
    maxIllustratedRate: 6.20,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Business Owners Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Strong employer/business market expertise", "Bloomberg Dynamic Balance index option", "Business planning rider available"],
    lastRateUpdate: "2026-02-01"
  },

  // 23. Pacific Life PIA 7
  {
    id: "pacific-life-pia-7",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Pacific Indexed Accumulator 7",
    maxIllustratedRate: 6.45,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.45
      },
      {
        indexName: "Hang Seng",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Pacific Income Provider", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Pacific Dynamix with 1.45x multiplier", "International Hang Seng index option", "Low 4.0% fixed loan rate"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 24. Equitable Indexed UL Optimizer
  {
    id: "equitable-indexed-ul-optimizer",
    carrierId: "equitable",
    name: "Indexed UL Optimizer",
    maxIllustratedRate: 6.25,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "5-Year Point-to-Point",
        capRate: 55.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Equitable Multi-Strategy Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Market Stabilizer Option"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["5-Year point-to-point option", "Market Stabilizer Option for downside protection", "Strong legacy carrier"],
    sourceUrl: "https://equitable.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 25. New York Life Indexed UL
  {
    id: "new-york-life-indexed-ul",
    carrierId: "new-york-life",
    name: "Custom Indexed UL",
    maxIllustratedRate: 5.80,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 4.25,
    guaranteedMinCreditingRate: 2.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "Lifetime",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Paid-Up Insurance Rider"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 70,
    highlights: ["Highest-rated carrier (Aaa/AAA)", "Lifetime no-lapse guarantee", "Highest fixed account rate at 4.25%"],
    sourceUrl: "https://www.newyorklife.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 26. Allianz Life Pro+ Advantage IUL
  {
    id: "allianz-life-pro-plus-advantage",
    carrierId: "allianz-life",
    name: "Life Pro+ Advantage IUL",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.55
      }
    ],
    fixedAccountRate: 2.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Index Lock", "Cash Value Enhancement Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["185% participation rate on Bloomberg index", "Cash Value Enhancement Rider bonus", "Index Lock feature for market timing"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life",
    lastRateUpdate: "2026-02-01"
  },

  // 27. North American IUL Rapid Builder
  {
    id: "north-american-rapid-builder",
    carrierId: "north-american",
    name: "IUL Rapid Builder",
    maxIllustratedRate: 6.60,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Rate Lock Feature"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["170% participation on Barclays Atlas 5", "Dual multiplier strategies", "Premium accumulation focused design"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // 28. Nationwide IUL Protector II
  {
    id: "nationwide-iul-protector-ii",
    carrierId: "nationwide",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "IUL Protector II",
    maxIllustratedRate: 5.50,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Protection-focused design", "BenefitAccess chronic illness rider"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal",
    lastRateUpdate: "2026-02-01"
  },

  // 29. Lincoln MoneyGuard IUL
  {
    id: "lincoln-moneyguard-iul",
    carrierId: "lincoln-financial",
    name: "MoneyGuard Market Advantage IUL",
    maxIllustratedRate: 5.95,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level"],
    riders: ["Accelerated Benefit Rider", "Long-Term Care Benefit Rider", "Extension of Benefits Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Linked-benefit LTC product with index upside", "Long-term care protection focus", "Single or limited premium options"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 30. Transamerica Accumulation IUL II
  {
    id: "transamerica-accumulation-iul-ii",
    carrierId: "transamerica",
    name: "Accumulation IUL II",
    maxIllustratedRate: 6.33,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Merrill Lynch RPM Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Income Rider", "Overloan Protection"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["NASDAQ-100 index option", "Merrill Lynch RPM with 1.25x multiplier", "Income rider for retirement planning"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 31. Securian Eclipse Protector IUL
  {
    id: "securian-eclipse-protector",
    carrierId: "securian",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Eclipse Protector IUL",
    maxIllustratedRate: 5.65,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Children's Insurance Rider"],
    minimumFaceAmount: 25000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Low $25k minimum face amount", "Protection-first design with index upside"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html",
    lastRateUpdate: "2026-02-01"
  },

  // 32. Prudential PruLife Survivorship Index UL
  {
    id: "prudential-prulife-survivorship-index",
    carrierId: "prudential",
    name: "PruLife Survivorship Index UL",
    maxIllustratedRate: 6.10,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pru Dynamic Multi-Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level"],
    riders: ["Accelerated Benefit Rider", "Estate Planning Rider"],
    minimumFaceAmount: 250000,
    maximumIssueAge: 80,
    highlights: ["Survivorship (second-to-die) product", "Estate planning focused", "Top-tier carrier for large face amounts"],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 33. F&G Pathfinder Pro IUL
  {
    id: "fandg-pathfinder-pro-iul",
    carrierId: "fandg",
    name: "Pathfinder Pro IUL",
    maxIllustratedRate: 6.40,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Trailblazer Sector 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Enhanced Cash Value Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Barclays Trailblazer with 1.35x multiplier", "Enhanced Cash Value Rider bonus", "Two uncapped index options"],
    sourceUrl: "https://www.fglife.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 34. John Hancock Protection IUL
  {
    id: "john-hancock-protection-iul",
    carrierId: "john-hancock",
    name: "Protection IUL",
    maxIllustratedRate: 5.60,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.5,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Vitality Program", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Vitality wellness program with premium discounts", "Protection-focused chassis"],
    sourceUrl: "https://www.johnhancock.com/life-insurance.html",
    lastRateUpdate: "2026-02-01"
  },

  // 35. Penn Mutual Diversified Income IUL
  {
    id: "penn-mutual-diversified-income",
    carrierId: "penn-mutual",
    name: "Diversified Income IUL",
    maxIllustratedRate: 6.00,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Fidelity AIM Dividend Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Protection Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Income-focused distribution design", "Low 4.5% fixed loan rate", "Mutual company stability"],
    sourceUrl: "https://www.pennmutual.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 36. American National IUL Elite
  {
    id: "american-national-iul-elite",
    carrierId: "american-national",
    name: "IUL Elite",
    maxIllustratedRate: 6.18,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 20.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["2-Year point-to-point with 20% cap", "Three market index options", "Strong Texas-based carrier"],
    lastRateUpdate: "2026-02-01"
  },

  // 37. Midland National LifeMark Accumulator IUL
  {
    id: "midland-national-lifemark-accumulator",
    carrierId: "midland-national",
    name: "LifeMark Accumulator IUL",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.45
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Premium Bonus Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["12.00% S&P 500 cap rate", "Barclays Atlas 5 with 1.45x multiplier", "Premium Bonus Rider for additional accumulation"],
    sourceUrl: "https://www.midlandnational.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 38. Protective Indexed Choice VUL
  {
    id: "protective-indexed-choice-vul",
    carrierId: "protective-life",
    name: "Indexed Choice VUL",
    maxIllustratedRate: 6.70,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Variable Subaccount",
        creditingMethod: "Daily Variable",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: null,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Variable Investment Options"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Hybrid indexed/variable product", "Full market participation in variable account", "Three death benefit options"],
    lastRateUpdate: "2026-02-01"
  },

  // 39. Corebridge Max Accumulator+ IUL II
  {
    id: "corebridge-max-accumulator-plus-ii",
    carrierId: "corebridge-financial",
    name: "Max Accumulator+ IUL II",
    maxIllustratedRate: 6.48,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Tactical Balanced ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.50
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Premium Deposit Fund"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["PIMCO index with 1.50x multiplier and 175% participation", "Next-gen of popular Max Accumulator line", "Three death benefit options"],
    lastRateUpdate: "2026-02-01"
  },

  // 40. Global Atlantic ForeAccumulator IUL
  {
    id: "global-atlantic-foreaccumulator",
    carrierId: "global-atlantic",
    name: "ForeAccumulator IUL",
    maxIllustratedRate: 6.28,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum Cap",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["JPMorgan Mozaic II with 1.20x multiplier", "Monthly sum cap S&P 500 option", "KKR-backed carrier strength"],
    sourceUrl: "https://professionals.globalatlantic.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 41. Sammons Financial IUL Growth
  {
    id: "sammons-financial-iul-growth",
    carrierId: "sammons-financial",
    name: "IUL Growth",
    maxIllustratedRate: 6.35,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Parent company of North American and Midland National", "Competitive S&P 500 cap rate", "S&P MARC 5 uncapped strategy"],
    lastRateUpdate: "2026-02-01"
  },

  // 42. Equitable Incentive Life Accumulator IUL
  {
    id: "equitable-incentive-life-accumulator",
    carrierId: "equitable",
    name: "Incentive Life Accumulator IUL",
    maxIllustratedRate: 6.42,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Equitable Multi-Strategy Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Trigger Strategy",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Incentive Bonus"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Incentive Bonus for premium persistency", "Trigger strategy crediting method", "Equitable Multi-Strategy Index with 1.35x multiplier"],
    sourceUrl: "https://equitable.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 43. Pacific Life PDX Protector IUL
  {
    id: "pacific-life-pdx-protector",
    carrierId: "pacific-life",
    name: "Pacific Discovery Protector IUL",
    maxIllustratedRate: 5.70,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Estate Protection Rider", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Protection-focused design", "Low 4.5% fixed loan rate"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 44. Allianz Life Pro+ Income IUL
  {
    id: "allianz-life-pro-plus-income",
    carrierId: "allianz-life",
    name: "Life Pro+ Income IUL",
    maxIllustratedRate: 6.35,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.45
      }
    ],
    fixedAccountRate: 2.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 3.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Index Lock", "Income Multiplier Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Income distribution focused design", "Lowest fixed loan rate at 3.75%", "Income Multiplier Rider for retirement"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life",
    lastRateUpdate: "2026-02-01"
  },

  // 45. Brighthouse Financial Shield Level IUL
  {
    id: "brighthouse-shield-level-iul",
    carrierId: "brighthouse-financial",
    name: "Shield Level Indexed UL",
    maxIllustratedRate: 6.15,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Buffer",
        capRate: 15.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Shield Buffer Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Unique buffer/shield protection strategy", "Higher cap with -10% buffer floor", "MetLife legacy carrier strength"],
    lastRateUpdate: "2026-02-01"
  },

  // 46. Nationwide IUL Flex Accumulator
  {
    id: "nationwide-iul-flex-accumulator",
    carrierId: "nationwide",
    name: "IUL Flex Accumulator",
    maxIllustratedRate: 6.45,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider", "Overloan Protection", "Premium Flexibility Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["Premium Flexibility Rider for skip-premium years", "Bloomberg Dynamic Balance with 1.30x multiplier", "Three death benefit options"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal",
    lastRateUpdate: "2026-02-01"
  },

  // 47. Lincoln Accumulation Builder IUL
  {
    id: "lincoln-accumulation-builder",
    carrierId: "lincoln-financial",
    name: "Accumulation Builder IUL",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Lincoln LifeAssure", "Overloan Protection", "Cash Value Plus Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Lincoln Multi-Asset Index with 1.35x multiplier and 155% participation", "Cash Value Plus Rider for bonus credits", "Strong accumulation chassis"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 48. North American IUL Protector
  {
    id: "north-american-iul-protector",
    carrierId: "north-american",
    name: "IUL Protector",
    maxIllustratedRate: 5.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Term Rider"],
    minimumFaceAmount: 25000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Lowest S&P 500 cap but strongest guarantee", "Low $25k minimum face amount"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // 49. Mutual of Omaha Income Advantage IUL
  {
    id: "mutual-of-omaha-income-advantage",
    carrierId: "mutual-of-omaha",
    ratesVerified: 'partial',
    lastVerifiedDate: '2026-02-21',
    verificationNote: 'S&P 500 cap rate verified via lifeinsurancerecommendations.com',
    name: "Income Advantage IUL",
    maxIllustratedRate: 6.20,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Income Rider", "Overloan Protection", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Income distribution focused design", "International MSCI EAFE index option", "Strong mutual company backing"],
    sourceUrl: "https://www.mutualofomaha.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 50. Ameritas Accumulation IUL
  {
    id: "ameritas-accumulation-iul",
    carrierId: "ameritas",
    name: "Accumulation IUL",
    maxIllustratedRate: 6.10,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Three index options including international", "Competitive accumulation design", "Barclays Global MA uncapped strategy"],
    lastRateUpdate: "2026-02-01"
  },

  // 51. Pacific Life Discovery Xelerator Plus IUL
  {
    id: "pacific-life-discovery-xelerator-plus",
    carrierId: "pacific-life",
    name: "Pacific Discovery Xelerator Plus IUL",
    maxIllustratedRate: 6.82,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 195,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.55
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 80,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BlackRock iBLD Claria Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection Rider", "Pacific Income Provider", "Premium Deposit Account"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Pacific Dynamix with 1.55x multiplier and 195% participation", "BlackRock iBLD index option", "Industry-leading no-lapse to 95"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 52. Pacific Life Index Protector IUL
  {
    id: "pacific-life-index-protector",
    carrierId: "pacific-life",
    name: "Pacific Index Protector IUL",
    maxIllustratedRate: 5.65,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 121",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Estate Protection Rider", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 85,
    highlights: ["Lifetime no-lapse guarantee to age 121", "Protection-first design with index upside", "Highest maximum issue age at 85"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 53. Lincoln WealthAccumulate IUL
  {
    id: "lincoln-wealthaccumulate-iul",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "WealthAccumulate IUL",
    maxIllustratedRate: 6.68,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.5,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.45
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 21.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BlackRock iBLD Claria Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Lincoln LifeAssure", "Overloan Protection", "Cash Value Plus Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Lincoln Multi-Asset with 1.45x multiplier and 170% participation", "2-Year P2P with 21% cap", "Four index account options"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 54. Lincoln AssetEdge VUL
  {
    id: "lincoln-assetedge-vul",
    carrierId: "lincoln-financial",
    name: "AssetEdge VUL",
    maxIllustratedRate: 7.10,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Variable Subaccount",
        creditingMethod: "Daily Variable",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: null,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Option A", "Option B", "Option C"],
    riders: ["Accelerated Benefit Rider", "Lincoln LifeAssure", "Variable Investment Options", "Overloan Protection"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 80,
    highlights: ["Hybrid indexed/variable product with full market access", "Multiple variable subaccounts available", "Highest max illustrated rate in class"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 55. Allianz Life Pro+ Advantage Plus IUL
  {
    id: "allianz-accumulation-advantage-plus",
    carrierId: "allianz-life",
    name: "Accumulation Advantage Plus IUL",
    maxIllustratedRate: 6.90,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.85
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum Cap",
        capRate: 3.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 2.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Index Lock", "Premium Bonus", "Cash Value Enhancement Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["225% participation with 1.85x multiplier on Bloomberg index", "NASDAQ-100 index option", "Premium bonus for early cash value growth"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life",
    lastRateUpdate: "2026-02-01"
  },

  // 56. Nationwide VUL Protector
  {
    id: "nationwide-vul-protector",
    carrierId: "nationwide",
    name: "VUL Protector",
    maxIllustratedRate: 6.95,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Variable Subaccount",
        creditingMethod: "Daily Variable",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: null,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Option A", "Option B"],
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider", "Variable Investment Options"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Hybrid indexed/variable universal life", "BenefitAccess chronic illness rider", "Full variable subaccount market participation"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal",
    lastRateUpdate: "2026-02-01"
  },

  // 57. Prudential FlexGuard Indexed VUL
  {
    id: "prudential-flexguard-indexed-vul",
    carrierId: "prudential",
    name: "FlexGuard Indexed VUL",
    maxIllustratedRate: 7.25,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Variable Subaccount",
        creditingMethod: "Daily Variable",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: null,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pru Dynamic Multi-Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.15
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Option A", "Option B", "Option C"],
    riders: ["Accelerated Benefit Rider", "IncomeFlex", "Overloan Protection", "FlexGuard Buffer Options"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 80,
    highlights: ["FlexGuard buffer protection on variable accounts", "Highest VUL illustrated rate at 7.25%", "Full variable and indexed options in one product"],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 58. PruLife Custom Premier III
  {
    id: "prudential-prulife-custom-premier-iii",
    carrierId: "prudential",
    name: "PruLife Custom Premier III",
    maxIllustratedRate: 6.45,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pru Dynamic Multi-Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 19.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "IncomeFlex", "Overloan Protection", "Terminal Illness Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Third generation Custom Premier with enhanced features", "2-Year P2P with 19.5% cap", "Pru Dynamic Multi-Index with 1.20x multiplier"],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 59. Protective Indexed Choice UL II
  {
    id: "protective-indexed-choice-ul-ii",
    carrierId: "protective-life",
    name: "Indexed Choice UL II",
    maxIllustratedRate: 6.22,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 22.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Estate Protection Rider", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Enhanced next-gen of popular Indexed Choice UL", "No-lapse guarantee to age 95", "JPMorgan Mozaic uncapped index added"],
    lastRateUpdate: "2026-02-01"
  },

  // 60. Protective Custom Choice UL II
  {
    id: "protective-custom-choice-ul-ii",
    carrierId: "protective-life",
    name: "Custom Choice UL II",
    maxIllustratedRate: 5.85,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Monthly Deductions", "Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Simple dual-index design", "Strong protection focus with competitive fixed rate"],
    lastRateUpdate: "2026-02-01"
  },

  // 61. Transamerica Financial Foundation IUL II
  {
    id: "transamerica-financial-foundation-iul-ii",
    carrierId: "transamerica",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Financial Foundation IUL II",
    maxIllustratedRate: 6.38,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Merrill Lynch RPM Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.30
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Income Rider", "Overloan Protection", "Living Benefit Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Enhanced second generation Financial Foundation", "Merrill Lynch RPM with 1.30x multiplier", "NASDAQ-100 index option"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 62. Transamerica IUL Secure
  {
    id: "transamerica-iul-secure",
    carrierId: "transamerica",
    name: "IUL Secure",
    maxIllustratedRate: 5.72,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Protection-focused design", "Clean two-index product structure"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 63. John Hancock Accumulation IUL 21
  {
    id: "john-hancock-accumulation-iul-21",
    carrierId: "john-hancock",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Accumulation IUL 21",
    maxIllustratedRate: 6.72,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "John Hancock Dimensional Multi-Factor Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.50
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 20.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Vitality Program", "Overloan Protection", "Premium Flexibility Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Latest generation with enhanced Dimensional Multi-Factor Index", "1.50x multiplier with 185% participation", "Vitality wellness discounts"],
    sourceUrl: "https://www.johnhancock.com/life-insurance.html",
    lastRateUpdate: "2026-02-01"
  },

  // 64. John Hancock Protection IUL 21
  {
    id: "john-hancock-protection-iul-21",
    carrierId: "john-hancock",
    name: "Protection IUL 21",
    maxIllustratedRate: 5.70,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.5,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Vitality Program", "Waiver of Monthly Deductions", "Children's Insurance Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Vitality wellness program with premium discounts", "Protection-focused with competitive guarantees"],
    sourceUrl: "https://www.johnhancock.com/life-insurance.html",
    lastRateUpdate: "2026-02-01"
  },

  // 65. John Hancock Vitality IUL
  {
    id: "john-hancock-vitality-iul",
    carrierId: "john-hancock",
    name: "Vitality IUL",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "John Hancock Dimensional Multi-Factor Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Vitality PLUS Program", "Overloan Protection", "Healthy Living Bonus"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["Enhanced Vitality PLUS wellness rewards", "Healthy Living Bonus for active policyholders", "International MSCI EAFE index option"],
    sourceUrl: "https://www.johnhancock.com/life-insurance.html",
    lastRateUpdate: "2026-02-01"
  },

  // 66. Penn Mutual Accumulation Builder Plus IUL
  {
    id: "penn-mutual-accumulation-builder-plus",
    carrierId: "penn-mutual",
    name: "Accumulation Builder Plus IUL",
    maxIllustratedRate: 6.38,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Fidelity AIM Dividend Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.15
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 18.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Protection Rider", "Cash Value Enhancement"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Enhanced Accumulation Builder with Plus features", "Fidelity AIM Dividend with 1.15x multiplier", "Mutual company dividend philosophy"],
    sourceUrl: "https://www.pennmutual.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 67. Penn Mutual Diversified Income Optimizer IUL
  {
    id: "penn-mutual-diversified-income-optimizer",
    carrierId: "penn-mutual",
    name: "Diversified Income Optimizer IUL",
    maxIllustratedRate: 6.15,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Fidelity AIM Dividend Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.25,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Protection Rider", "Distribution Enhancement Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Optimized for retirement income distribution", "Lowest fixed loan rate at 4.25%", "Four index account diversification"],
    sourceUrl: "https://www.pennmutual.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 68. Securian Accumulation Builder Plus IUL
  {
    id: "securian-accumulation-builder-plus",
    carrierId: "securian",
    name: "Accumulation Builder Plus IUL",
    maxIllustratedRate: 6.58,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Premium Bonus Rider", "Supplemental Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Securian Index Shield with 1.35x multiplier and 175% participation", "Premium Bonus for early cash value enhancement", "AA- rated carrier"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html",
    lastRateUpdate: "2026-02-01"
  },

  // 69. MassMutual Altus IUL
  {
    id: "massmutual-altus-iul",
    carrierId: "massmutual",
    name: "Altus IUL",
    maxIllustratedRate: 6.05,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 4.00,
    guaranteedMinCreditingRate: 2.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "Lifetime",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Paid-Up Additions Rider", "Waiver of Premium"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 70,
    highlights: ["A++ rated mutual company with lifetime guarantee", "Highest guaranteed minimum crediting rate at 2.5%", "Strong fixed account rate at 4.0%"],
    sourceUrl: "https://www.massmutual.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 70. New York Life Custom IUL II
  {
    id: "new-york-life-custom-iul-ii",
    carrierId: "new-york-life",
    name: "Custom IUL II",
    maxIllustratedRate: 5.95,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 115,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 4.00,
    guaranteedMinCreditingRate: 2.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "Lifetime",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Paid-Up Insurance Rider", "Living Benefits Rider"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 70,
    highlights: ["Highest-rated carrier (Aaa/AAA) with lifetime guarantee", "Bloomberg Dynamic Balance uncapped option added", "Enhanced second generation"],
    sourceUrl: "https://www.newyorklife.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 71. New York Life Wealth Builder IUL
  {
    id: "new-york-life-wealth-builder",
    carrierId: "new-york-life",
    name: "Wealth Builder IUL",
    maxIllustratedRate: 6.15,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Overloan Protection", "Estate Planning Rider"],
    minimumFaceAmount: 200000,
    maximumIssueAge: 75,
    highlights: ["Four index options for maximum diversification", "Highest-rated carrier with strong no-lapse to 95", "Accumulation-focused NYL product"],
    sourceUrl: "https://www.newyorklife.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 72. Equitable BrightLife Grow IUL
  {
    id: "equitable-brightlife-grow",
    carrierId: "equitable",
    name: "BrightLife Grow IUL",
    maxIllustratedRate: 6.52,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Equitable Multi-Strategy Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 20.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Market Stabilizer Option", "BrightLife Growth Bonus"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["BrightLife Growth Bonus for premium persistency", "Equitable Multi-Strategy with 1.40x multiplier", "2-Year P2P with 20.5% cap"],
    sourceUrl: "https://equitable.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 73. Equitable BrightLife Protect IUL
  {
    id: "equitable-brightlife-protect",
    carrierId: "equitable",
    name: "BrightLife Protect IUL",
    maxIllustratedRate: 5.68,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Equitable Multi-Strategy Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Monthly Deductions", "Estate Protection Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["No-lapse guarantee to age 100", "Protection-focused BrightLife product", "Strong legacy carrier backing"],
    sourceUrl: "https://equitable.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 74. Mutual of Omaha Income Advantage IUL II
  {
    id: "mutual-of-omaha-income-advantage-ii",
    carrierId: "mutual-of-omaha",
    name: "Income Advantage IUL II",
    maxIllustratedRate: 6.35,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.15
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Income Rider", "Overloan Protection", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Enhanced second generation Income Advantage", "JPMorgan Mozaic uncapped with 1.15x multiplier", "Strong mutual company backing"],
    sourceUrl: "https://www.mutualofomaha.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 75. Mutual of Omaha Wealth Builder IUL
  {
    id: "mutual-of-omaha-wealth-builder",
    carrierId: "mutual-of-omaha",
    name: "Wealth Builder IUL",
    maxIllustratedRate: 6.48,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider", "Terminal Illness Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["Four index choices including NASDAQ-100", "Accumulation-focused design", "Strong mutual company financial stability"],
    sourceUrl: "https://www.mutualofomaha.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 76. American National Signature Performance Elite IUL
  {
    id: "american-national-signature-performance-elite",
    carrierId: "american-national",
    name: "Signature Performance Elite IUL",
    maxIllustratedRate: 6.42,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 21.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Overloan Protection", "Waiver of Premium"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Four market index options", "2-Year P2P with 21.5% cap", "NASDAQ-100 and Russell 2000 options"],
    lastRateUpdate: "2026-02-01"
  },

  // 77. American National Value IUL
  {
    id: "american-national-value-iul",
    carrierId: "american-national",
    name: "American Value IUL",
    maxIllustratedRate: 5.88,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.5,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Terminal Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Value-oriented IUL with competitive pricing", "Simple dual-index design", "Strong no-lapse guarantee to age 90"],
    lastRateUpdate: "2026-02-01"
  },

  // 78. Principal IUL Accumulator Plus
  {
    id: "principal-iul-accumulator-plus",
    carrierId: "principal-financial",
    name: "IUL Accumulator Plus",
    maxIllustratedRate: 6.45,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Business Owners Rider", "Cash Value Enhancement"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Enhanced accumulation focus with Plus features", "Bloomberg Dynamic Balance with 1.20x multiplier", "Strong business market rider options"],
    lastRateUpdate: "2026-02-01"
  },

  // 79. Principal IUL Legacy
  {
    id: "principal-iul-legacy",
    carrierId: "principal-financial",
    name: "IUL Legacy",
    maxIllustratedRate: 5.78,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Estate Planning Rider", "Waiver of Premium"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 80,
    highlights: ["Legacy/estate planning focused design", "No-lapse guarantee to age 100", "Strong fixed account rate"],
    lastRateUpdate: "2026-02-01"
  },

  // 80. Corebridge Index Protector IUL
  {
    id: "corebridge-index-protector-iul",
    carrierId: "corebridge-financial",
    name: "Index Protector IUL",
    maxIllustratedRate: 5.75,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Corebridge Strategic Allocation Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Protection-focused with no-lapse to age 100", "Formerly AIG large carrier backing", "Clean product design"],
    lastRateUpdate: "2026-02-01"
  },

  // 81. Ameritas Value+ IUL
  {
    id: "ameritas-value-plus-iul",
    carrierId: "ameritas",
    name: "Value+ IUL",
    maxIllustratedRate: 6.25,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Global MA Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.10
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider", "Value Enhancement Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Value-oriented with competitive cap rates", "Barclays Global MA with 1.10x multiplier", "Three index options for diversification"],
    lastRateUpdate: "2026-02-01"
  },

  // 82. Ameritas No-Lapse Guarantee IUL
  {
    id: "ameritas-no-lapse-guarantee-iul",
    carrierId: "ameritas",
    name: "No-Lapse Guarantee IUL II",
    maxIllustratedRate: 5.65,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 121",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Term Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Industry-best no-lapse guarantee to age 121", "Strongest guaranteed death benefit product", "Competitive cost structure"],
    lastRateUpdate: "2026-02-01"
  },

  // 83. North American Builder Plus 3.0 IUL
  {
    id: "north-american-builder-plus-3-0",
    carrierId: "north-american",
    name: "Builder Plus 3.0 IUL",
    maxIllustratedRate: 6.65,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      },
      {
        indexName: "BlackRock iBLD Claria Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Waiver of Monthly Deductions", "Rate Lock Feature"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Highest S&P 500 cap at 12.50%", "Four uncapped/capped index strategies", "Latest generation with BlackRock iBLD added"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // 84. North American Growth Max IUL
  {
    id: "north-american-growth-max",
    carrierId: "north-american",
    name: "Growth Max IUL",
    maxIllustratedRate: 6.78,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 180,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.50
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 22.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Rate Lock Feature", "Premium Bonus Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Maximum growth focused design", "Barclays Atlas 5 with 1.50x multiplier and 180% participation", "2-Year P2P with 22% cap"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // 85. Minnesota Life SecureHorizon IUL
  {
    id: "minnesota-life-securehorizon",
    carrierId: "minnesota-life",
    name: "SecureHorizon IUL",
    maxIllustratedRate: 6.18,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider", "Children's Insurance Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Securian Financial subsidiary with AA- rating", "Securian Index Shield with 1.20x multiplier", "International MSCI EAFE option"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html",
    lastRateUpdate: "2026-02-01"
  },

  // 86. Allianz Life Pro+ Advantage IUL II
  {
    id: "allianz-life-pro-plus-advantage-ii",
    carrierId: "allianz-life",
    name: "Life Pro+ Advantage IUL II",
    maxIllustratedRate: 6.62,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.65
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum Cap",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 2.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Index Lock", "Cash Value Enhancement Rider", "Premium Bonus"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["200% participation with 1.65x multiplier on Bloomberg", "Enhanced second generation with NASDAQ-100", "Strong accumulation focus"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/Life-Insurance/Indexed-Universal-Life",
    lastRateUpdate: "2026-02-01"
  },

  // 87. Lincoln Financial Protection UL IUL
  {
    id: "lincoln-financial-protection-ul",
    carrierId: "lincoln-financial",
    name: "Lincoln Protection UL with Index",
    maxIllustratedRate: 5.62,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Lincoln Multi-Asset Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Lincoln LifeAssure", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 85,
    highlights: ["No-lapse guarantee to age 100", "Protection-focused with index upside", "Maximum issue age of 85"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/lifeinsurance/permanentlife/indexeduniversallife",
    lastRateUpdate: "2026-02-01"
  },

  // 88. Nationwide IUL Accumulator Plus II
  {
    id: "nationwide-iul-accumulator-plus-ii",
    carrierId: "nationwide",
    name: "IUL Accumulator Plus II",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider", "Overloan Protection", "Premium Flexibility Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Enhanced Plus II with four index options", "Bloomberg Dynamic Balance with 1.35x multiplier", "Return of Premium death benefit option"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal",
    lastRateUpdate: "2026-02-01"
  },

  // 89. F&G Pathfinder Accumulator IUL
  {
    id: "fandg-pathfinder-accumulator",
    carrierId: "fandg",
    name: "Pathfinder Accumulator IUL",
    maxIllustratedRate: 6.50,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Trailblazer Sector 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 19.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Enhanced Cash Value Rider", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Barclays Trailblazer with 1.40x multiplier and 175% participation", "Four index strategies", "2-Year P2P option"],
    sourceUrl: "https://www.fglife.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 90. Midland National LifeMark Legacy IUL
  {
    id: "midland-national-lifemark-legacy",
    carrierId: "midland-national",
    name: "LifeMark Legacy IUL",
    maxIllustratedRate: 5.82,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Estate Protection Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["Estate/legacy planning focused product", "No-lapse guarantee to age 100", "Sammons Financial Group backing"],
    sourceUrl: "https://www.midlandnational.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 91. Sammons Financial IUL Protector
  {
    id: "sammons-financial-iul-protector",
    carrierId: "sammons-financial",
    name: "IUL Protector",
    maxIllustratedRate: 5.72,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 115,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 100",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Monthly Deductions", "Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Protection-focused with no-lapse to age 100", "Parent of North American and Midland National", "Clean two-index design"],
    lastRateUpdate: "2026-02-01"
  },

  // 92. Brighthouse Financial Shield Accumulator IUL
  {
    id: "brighthouse-shield-accumulator-iul",
    carrierId: "brighthouse-financial",
    name: "Shield Accumulator Indexed UL",
    maxIllustratedRate: 6.38,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Buffer",
        capRate: 16.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 0.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Shield Buffer Rider", "Overloan Protection"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Unique buffer/shield strategy with higher caps", "Four index options including international", "MetLife legacy carrier"],
    lastRateUpdate: "2026-02-01"
  },

  // 93. Prudential PruLife Custom Premier Survivorship
  {
    id: "prudential-prulife-custom-premier-survivorship",
    carrierId: "prudential",
    name: "PruLife Custom Premier Survivorship IUL",
    maxIllustratedRate: 6.30,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "NASDAQ-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pru Dynamic Multi-Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.15
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level"],
    riders: ["Accelerated Benefit Rider", "Estate Planning Rider", "Survivorship Benefit Rider"],
    minimumFaceAmount: 250000,
    maximumIssueAge: 80,
    highlights: ["Survivorship (second-to-die) Custom Premier design", "Estate tax planning focused", "Pru Dynamic Multi-Index with multiplier"],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 94. Symetra Wealth Builder IUL
  {
    id: "symetra-wealth-builder-iul",
    carrierId: "symetra",
    name: "Wealth Builder IUL",
    maxIllustratedRate: 6.08,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 65,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Waiver of Monthly Deductions"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Sumitomo Life backing for financial stability", "Three index options including international", "Competitive accumulation design"],
    sourceUrl: "https://www.symetra.com/our-products/individuals/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 95. Corebridge Max Accumulator+ Income IUL
  {
    id: "corebridge-max-accumulator-plus-income",
    carrierId: "corebridge-financial",
    name: "Max Accumulator+ Income IUL",
    maxIllustratedRate: 6.35,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Tactical Balanced ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Enhancement Rider", "Chronic Illness Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["Income distribution optimized Max Accumulator+", "PIMCO index with 1.35x multiplier", "Low 4.5% fixed loan rate for income efficiency"],
    lastRateUpdate: "2026-02-01"
  },

  // 96. Global Atlantic ForeProtector IUL
  {
    id: "global-atlantic-foreprotector",
    carrierId: "global-atlantic",
    name: "ForeProtector IUL",
    maxIllustratedRate: 5.68,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Protection-focused with no-lapse to age 95", "KKR-backed carrier strength", "JPMorgan Mozaic uncapped strategy"],
    sourceUrl: "https://professionals.globalatlantic.com/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 97. American General Index Advantage+ IUL
  {
    id: "american-general-index-advantage-plus",
    carrierId: "american-general",
    name: "Index Advantage+ IUL",
    maxIllustratedRate: 6.42,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Tactical Balanced ER Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.40
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Premium Deposit Fund", "Chronic Illness Rider"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 80,
    highlights: ["PIMCO index with 1.40x multiplier", "Four crediting strategies", "Three death benefit options"],
    lastRateUpdate: "2026-02-01"
  },

  // 98. Securian Eclipse Income IUL
  {
    id: "securian-eclipse-income-iul",
    carrierId: "securian",
    name: "Eclipse Income IUL",
    maxIllustratedRate: 6.22,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Securian Index Shield",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.5,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Distribution Rider", "Supplemental Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Income distribution optimized Eclipse design", "Low 4.5% fixed loan rate", "Securian Index Shield with 1.20x multiplier"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life.html",
    lastRateUpdate: "2026-02-01"
  },

  // 99. Jackson National IUL Accumulator
  {
    id: "jackson-national-iul-accumulator",
    carrierId: "jackson-national",
    name: "IUL Accumulator",
    maxIllustratedRate: 6.28,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan Mozaic II Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.20
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Jackson National entering IUL market", "JPMorgan Mozaic with 1.20x multiplier", "Russell 2000 index option"],
    sourceUrl: "https://www.jackson.com",
    lastRateUpdate: "2026-02-01"
  },

  // 100. Delaware Life Accumulation Builder IUL
  {
    id: "delaware-life-accumulation-builder",
    carrierId: "delaware-life",
    name: "Accumulation Builder IUL",
    maxIllustratedRate: 6.15,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 75000,
    maximumIssueAge: 75,
    highlights: ["Delaware Life IUL with competitive accumulation design", "Three index options including international", "Bloomberg uncapped strategy"],
    lastRateUpdate: "2026-02-01"
  },

  // 101. Integrity Life Indexed UL
  {
    id: "integrity-life-indexed-ul",
    carrierId: "integrity-life",
    name: "Indexed Universal Life",
    maxIllustratedRate: 6.02,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.5,
      variableLoanAvailable: false,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Simple two-strategy product design", "Great American Insurance Group subsidiary", "Competitive pricing"],
    lastRateUpdate: "2026-02-01"
  },

  // 102. Sammons Financial IUL Income Builder
  {
    id: "sammons-financial-iul-income-builder",
    carrierId: "sammons-financial",
    name: "IUL Income Builder",
    maxIllustratedRate: 6.25,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.15
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Income Distribution Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Income distribution focused design", "S&P MARC 5 with 1.15x multiplier", "Low 4.75% fixed loan rate"],
    lastRateUpdate: "2026-02-01"
  },

  // 103. Equitable BrightLife Income IUL
  {
    id: "equitable-brightlife-income",
    carrierId: "equitable",
    name: "BrightLife Income IUL",
    maxIllustratedRate: 6.18,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Equitable Multi-Strategy Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.25
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Trigger Strategy",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.25,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "BrightLife Income Rider", "Market Stabilizer Option"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Income-optimized BrightLife design", "Lowest fixed loan rate at 4.25%", "Trigger strategy for downside years"],
    sourceUrl: "https://equitable.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // 104. Pacific Life Discovery Income IUL
  {
    id: "pacific-life-discovery-income",
    carrierId: "pacific-life",
    name: "Pacific Discovery Income IUL",
    maxIllustratedRate: 6.32,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Pacific Dynamix Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.35
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 70,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 3.75,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Pacific Income Provider", "Overloan Protection Rider", "Premium Deposit Account"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["Income distribution focused Pacific Life product", "Lowest fixed loan rate at 3.75%", "Pacific Dynamix with 1.35x multiplier"],
    sourceUrl: "https://www.pacificlife.com/home/individuals/life-insurance/life-rates.html",
    lastRateUpdate: "2026-02-01"
  },

  // 105. MassMutual Altus Accumulator IUL
  {
    id: "massmutual-altus-accumulator",
    carrierId: "massmutual",
    name: "Altus Accumulator IUL",
    maxIllustratedRate: 6.20,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance II ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: true,
        multiplierValue: 1.10
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 17.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.75,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 95",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Paid-Up Additions Rider", "Waiver of Premium"],
    minimumFaceAmount: 150000,
    maximumIssueAge: 70,
    highlights: ["A++ rated mutual company accumulation product", "Four index strategies including 2-Year P2P", "No-lapse guarantee to age 95"],
    sourceUrl: "https://www.massmutual.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // ── Jackson National IUL Protector ────────────────────────────────
  {
    id: "jackson-iul-protector",
    carrierId: "jackson-national",
    name: "IUL Protector",
    maxIllustratedRate: 5.85,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 8.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "JPMorgan Mozaic II Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: false },
    noLapseGuarantee: "To Age 121",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Waiver of Premium", "Children's Term Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: ["Lifetime no-lapse guarantee to age 121", "Protection-focused design", "Lower cost of insurance", "JPMorgan Mozaic II index option"],
    sourceUrl: "https://www.jackson.com",
    lastRateUpdate: "2026-02-01"
  },

  // ── Jackson National IUL Income Max ────────────────────────────────
  {
    id: "jackson-iul-income-max",
    carrierId: "jackson-national",
    name: "IUL Income Max",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 10.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.35 },
      { indexName: "JPMorgan Mozaic II Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.25 },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: true },
    noLapseGuarantee: "To Age 85",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider", "Premium Deposit Fund"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 75,
    highlights: ["Income distribution-focused IUL", "1.35x multiplier on uncapped S&P", "160% JPMorgan Mozaic participation", "Zero net cost loans available"],
    sourceUrl: "https://www.jackson.com",
    lastRateUpdate: "2026-02-01"
  },

  // ── Transamerica Financial Foundation IUL ──────────────────────────
  {
    id: "transamerica-financial-foundation-iul",
    carrierId: "transamerica",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Financial Foundation IUL Plus",
    maxIllustratedRate: 6.40,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 12.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.25 },
      { indexName: "Merrill Lynch RPM Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: true },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Overloan Protection", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Transamerica flagship IUL product", "140% Merrill Lynch RPM participation", "1.25x S&P multiplier", "No-lapse guarantee to age 90"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // ── Transamerica Index UL Growth ──────────────────────────────────
  {
    id: "transamerica-index-ul-growth",
    carrierId: "transamerica",
    name: "Index UL Growth",
    maxIllustratedRate: 6.72,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 11.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.40 },
      { indexName: "Merrill Lynch RPM Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 10.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: true },
    noLapseGuarantee: "None",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 70,
    highlights: ["Accumulation-focused IUL", "1.40x S&P multiplier — highest in lineup", "155% Merrill Lynch RPM participation", "Nasdaq-100 index option"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American IUL Builder Plus 5 ──────────────────────────────
  {
    id: "nac-iul-builder-plus-5",
    carrierId: "north-american",
    name: "Builder Plus IUL 5",
    maxIllustratedRate: 6.85,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 11.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.45 },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 10.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: true },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Latest generation Builder Plus", "1.45x S&P multiplier", "155% BNP Paribas participation", "No-lapse guarantee to age 90"],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G IUL Accumulator ──────────────────────────────────────────
  {
    id: "fg-iul-accumulator",
    carrierId: "fandg",
    name: "F&G IUL Accumulator",
    maxIllustratedRate: 6.55,
    indexAccounts: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 10.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false, hasMultiplier: false, multiplierValue: null },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true, hasMultiplier: true, multiplierValue: 1.30 },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true, hasMultiplier: false, multiplierValue: null }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: { fixedLoanRate: 5.0, variableLoanAvailable: true, zeroNetCostLoanAvailable: true },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Chronic Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: ["Cash accumulation-focused IUL", "1.30x S&P multiplier", "135% CIBC Balanced Asset participation", "Zero net cost loans available"],
    sourceUrl: "https://www.fglife.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  }
];
