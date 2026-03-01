export const iulProducts = [

  // 2. Nationwide IUL Accumulator II
  {
    id: "nationwide-iul-accumulator-ii",
    carrierId: "nationwide",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: nationwide.com AG-1895 rate sheet, lifeinsurancerecommendations.com (S&P 500 cap 10.25% confirmed)',
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
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        fixedCredit: 0.60
      },
      {
        indexName: "BNP Paribas Global H-Factor Plus",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 235,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        fixedCredit: 0.60
      },
      {
        indexName: "1-Year High-Cap Multi-Index Monthly Avg",
        creditingMethod: "Monthly Average",
        capRate: 25.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        strategyFee: 0.85
      },
      {
        indexName: "1-Year High-Cap S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 13.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        strategyFee: 1.00
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
    riders: ["Accelerated Benefit Rider", "BenefitAccess Rider", "Overloan Protection", "VUL Rewards (0.20% yr 16+)"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: ["15% Nationwide Multiplier (year 6+)", "50% Advanced Multiplier (year 1+)", "235% BNP Paribas participation", "25% High-Cap MIMA (0.85% fee)", "185% JP Morgan Mercury"],
    sourceUrl: "https://nationwidefinancial.com/products/life/indexed-universal/indexed-ul-accumulator-ii",
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

  // 5. Securian Eclipse Accumulator II IUL
  {
    id: "securian-eclipse-accumulator-ii",
    carrierId: "securian",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-22",
    verificationSource: "securian.com product page + LifeInsuranceRecommendations.com + BusinessWire announcement",
    name: "Eclipse Accumulator II IUL",
    maxIllustratedRate: 6.55,
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
        multiplierValue: null,
        accountLabel: "Indexed Account A"
      },
      {
        indexName: "S&P 500 Low Volatility",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 65,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        accountLabel: "Indexed Account G"
      },
      {
        indexName: "S&P PRISM",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 215,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        accountLabel: "Indexed Account O"
      },
      {
        indexName: "Hindsight (S&P 500/Nasdaq 100/Russell 2000)",
        creditingMethod: "Annual Best-of-3 Indices",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        accountLabel: "Hindsight Indexed Account"
      },
      {
        indexName: "S&P 500 Performance Trigger",
        creditingMethod: "Annual Performance Trigger",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        triggerRate: 8.25,
        accountLabel: "Performance Trigger Indexed Account"
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 4.0,
      fixedLoanCreditRate: 3.5,
      variableLoanAvailable: true,
      indexedLoanRate: 5.0,
      zeroNetCostLoanAvailable: true,
      shortTermLoanInterestWaiver: 90
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Overloan Protection", "Supplemental Term Rider", "WriteFit Underwriting (no-exam)"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: [
      "S&P PRISM with 215% participation rate — uncapped upside",
      "Hindsight Account selects best of 3 indices (S&P/Nasdaq/Russell)",
      "5 distinct indexed accounts with 0% floor on all",
      "WriteFit Underwriting — no medical exam, 24hr decisions",
      "Securian — AA- (S&P), A+ (AM Best)"
    ],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life/eclipse-accumulator.html",
    lastRateUpdate: "2026-02-22"
  },

  // 7. Lincoln WealthBuilder IUL
  {
    id: "lincoln-wealthbuilder-iul",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: lincolnfinancial.com, lifeinsurancerecommendations.com (S&P 500 cap 10.50% confirmed)',
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

  // 11. John Hancock Accumulation IUL 20
  {
    id: "john-hancock-accumulation-iul-20",
    carrierId: "john-hancock",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    discontinuedDate: '2021-06', // No longer offered for new sales — replaced by Accumulation IUL 21
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
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: pennmutual.com rate sheet, lifeinsurancerecommendations.com (S&P 500 cap corrected 10.00%→10.25%, fixed corrected 3.25%→3.50%)',
    name: "Accumulation Builder IUL",
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
    fixedAccountRate: 3.50,
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

  // 18. Protective Indexed Choice UL
  {
    id: "protective-indexed-choice-ul",
    carrierId: "protective-life",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Cross-verified: protective.com official rate sheet (effective 3/15/2025) (S&P 500 cap corrected 9.00%→8.50%)',
    name: "Indexed Choice UL",
    maxIllustratedRate: 6.08,
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

  // ── 31. Corebridge Max Accumulator+ III IUL ──
  {
    id: "corebridge-max-accumulator-iii",
    carrierId: "corebridge-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-22",
    verificationSource: "LifeInsuranceRecommendations.com (S&P 500 cap 11.50% confirmed) + Corebridge QoL partners page + BUA Web rate bulletin",
    name: "Max Accumulator+ III IUL",
    maxIllustratedRate: 7.10,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: 0.25,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Franklin Quality Dividend Index",
        creditingMethod: "Dividend Blend Participation",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0.25,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Strategic Balanced Index",
        creditingMethod: "Blend Participation",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0.25,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Global Optima Index",
        creditingMethod: "Global Blend Participation",
        capRate: null,
        participationRate: 75,
        spread: 0,
        floor: 0.25,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 0.25,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Select Income Rider", "Income for Life Rider", "Dollar Cost Averaging Rider"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: [
      "Industry-leading 11.50% S&P 500 cap rate",
      "0.25% floor — positive crediting even in flat markets",
      "100% participation on Franklin Quality Dividend Index",
      "Accumulation-focused with Select Income and Income for Life riders",
      "Corebridge (formerly AIG) — A AM Best, A+ S&P"
    ],
    sourceUrl: "https://www.corebridgefinancial.com/financial-professionals/products/life-insurance/indexed-universal-life",
    lastRateUpdate: "2026-02-22"
  },

  // ── 32. Pacific Life PDX IUL 2 ──
  {
    id: "pacific-life-pdx-iul-2",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-22",
    verificationSource: "LifeInsuranceRecommendations.com (uncapped 10% threshold confirmed) + InsuranceNewsNet product announcement + PacificLife.com",
    name: "Pacific Discovery Xelerator IUL 2",
    maxIllustratedRate: 7.50,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (Capped)",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "High Cap Annual Point-to-Point",
        capRate: 14.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        strategyFee: 0.80
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        thresholdRate: 10.00
      },
      {
        indexName: "Multi-Index (5-Year High Par)",
        creditingMethod: "5-Year High Par",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: [
      "Enhanced Performance Factor Rider (Classic/Performance/Performance Plus)",
      "Accelerated Benefit Rider",
      "Overloan Protection"
    ],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: [
      "Uncapped S&P 500 account — 100% participation above 10% threshold",
      "Enhanced Performance Factor Rider can amplify returns up to 2.70x",
      "High Cap account: 14% cap (0.80% strategy fee)",
      "5-Year High Par account: 200% participation",
      "Pacific Life — A+ AM Best, AA- S&P"
    ],
    sourceUrl: "https://lifeinsurance.pacificlife.com/pdx2",
    lastRateUpdate: "2026-02-22"
  },

  // ── 33. North American Builder Plus IUL 4 ──
  {
    id: "north-american-builder-plus-iul-4",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-22",
    verificationSource: "NFG Brokerage product announcement + North American consumer brochure + Ogletree Financial review",
    name: "Builder Plus IUL 4",
    maxIllustratedRate: 6.80,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "S&P MidCap 400",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "Fidelity Multifactor Yield Index 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        indexBonus: { years1to10: 1.00, years11plus: 1.50, guaranteed: 0.50 }
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true,
      fixedInterestParticipatingLoan: true,
      loanInterestBonus: 2.0
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Overloan Protection"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: [
      "Exclusive Fidelity Multifactor Index with 1.50% bonus (yr 11+)",
      "10% Account Index Multiplier guaranteed from year 6+",
      "S&P 500, S&P MidCap 400, Russell 2000 — all capped at 10.50%",
      "Fixed Interest Participating Loan with 2% interest bonus",
      "North American — A+ AM Best, A+ S&P, A+ Fitch"
    ],
    sourceUrl: "https://www.northamericancompany.com/life-insurance/iul",
    lastRateUpdate: "2026-02-22"
  },

  // ── 34. Prudential Momentum IUL ──
  {
    id: "prudential-momentum-iul",
    carrierId: "prudential",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-22",
    verificationSource: "LifeInsuranceRecommendations.com (cap 10.25% confirmed) + Prudential.com + FMI Agent",
    name: "Momentum IUL",
    maxIllustratedRate: 6.50,
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
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Goldman Sachs Voyager Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.00,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 100000,
    maximumIssueAge: 80,
    highlights: [
      "Exclusive Goldman Sachs Voyager Index — uncapped participation",
      "10.25% S&P 500 cap rate — competitive in market",
      "60% uncapped S&P 500 participation — unlimited upside",
      "Replaces PruLife Index Advantage UL (being phased out)",
      "Prudential — AA- S&P, A1 Moody's, Aa3 Fitch"
    ],
    sourceUrl: "https://www.prudential.com/personal/life-insurance/find-life-insurance-policy/indexed-universal-life-insurance",
    lastRateUpdate: "2026-02-22"
  },
  // ── 20. Allianz Life Accumulator IUL ──
  {
    id: "allianz-accumulator-iul",
    carrierId: "allianz-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    verificationSource: "Allianz Life official rate sheet dated 2/3/2026, OgletreeFinancial.com, CPS Insurance, FMI Agent",
    name: "Allianz Life Accumulator IUL",
    maxIllustratedRate: null,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
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
        creditingMethod: "Monthly Sum",
        capRate: 3.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Bloomberg US Dynamic Balance III ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "PIMCO Tactical Balanced ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 180,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Blended Futures Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 95,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Futures Index ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 5.30,
    guaranteedMinCreditingRate: 0.25,
    loanProvisions: {
      fixedLoanRate: 1.96,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing", "Return of Premium"],
    riders: ["Chronic Illness Accelerated Benefit Rider", "Terminal Illness Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: [
      "Bloomberg US Dynamic Balance III — 185% uncapped participation",
      "PIMCO Tactical Balanced — 180% uncapped participation",
      "S&P 500 trigger at 8.00% — earns 8% if index is flat or positive",
      "5.30% fixed account rate — highest in IUL market",
      "Three bonus tiers: Classic (1%), Bonused (15% multiplier), Select (40% multiplier)",
      "Allianz Life — A+ AM Best, AA S&P, A1 Moody's"
    ],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/life-insurance/accumulator-indexed-universal-life",
    lastRateUpdate: "2026-02-27"
  },

  // ── 21. Mutual of Omaha Income Advantage IUL ──
  {
    id: "mutual-of-omaha-income-advantage-iul",
    carrierId: "mutual-of-omaha",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "Watermark Life rate update (Feb 2025 max illustrated rates), BUA Web (fixed account & loan rate changes April 2024), Mutual of Omaha historical crediting rate PDF, lifeinsurancerecommendations.com (cap 10.00% confirmed)",
    name: "Income Advantage IUL",
    maxIllustratedRate: 6.33,
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
        creditingMethod: "Annual Point-to-Point (High Participation)",
        capRate: 7.00,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BofA US Agility Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 4.00,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.00,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "Guaranteed Refund Option (GRO)"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: [
      "S&P 500 cap rate of 10.00% with 100% participation",
      "BofA US Agility Index — 185% uncapped participation",
      "Guaranteed Refund Option — return of premiums paid (100% at year 20–25)",
      "Identical cap/par rates for new and in-force policyholders",
      "4.00% fixed account rate",
      "Mutual of Omaha — A+ AM Best, AA- S&P, A1 Moody's"
    ],
    sourceUrl: "https://www.mutualofomaha.com/life-insurance",
    lastRateUpdate: "2026-02-01"
  },

  // ── 22. American National Signature Performance IUL ──
  {
    id: "american-national-signature-performance-iul",
    carrierId: "american-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "LifeInsuranceRecommendations.com (cap 10.25%, uncapped 8.00% spread confirmed), American National product announcement, industry comparison data",
    name: "Signature Performance IUL",
    maxIllustratedRate: 6.20,
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
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 8.00,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P MARC 5% Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Nasdaq-100",
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
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Chronic Illness Accelerated Benefit Rider", "Critical Illness Rider", "Terminal Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: [
      "10.25% S&P 500 cap rate with 100% participation",
      "Uncapped S&P 500 with 8.00% spread — unlimited upside above spread",
      "S&P MARC 5% low-volatility index — uncapped participation",
      "Nasdaq-100 index account for large-cap growth exposure",
      "Living benefits for chronic, critical, and terminal illness included",
      "American National — A AM Best, A S&P"
    ],
    sourceUrl: "https://www.americannational.com/home/newsroom/2021/-american-national-universal-life-enhancements",
    lastRateUpdate: "2026-02-01"
  },

  // ── 23. Symetra Accumulator Ascent IUL ──
  {
    id: "symetra-accumulator-ascent-iul",
    carrierId: "symetra",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "LifeInsuranceRecommendations.com (cap 10.50%, uncapped 5.00% spread confirmed), Symetra.com product pages, Symetra May 2023 press release (fixed 5.25%, Putnam bonus 1%), Premier Brokerage cap/par rate sheet",
    name: "Accumulator Ascent IUL",
    maxIllustratedRate: 6.50,
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
        creditingMethod: "Uncapped Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 5.00,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "JPMorgan ETF Efficiente 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Putnam Dynamic Low Volatility ER Index",
        creditingMethod: "Annual Point-to-Point (with Bonus)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        indexBonus: { bonusRate: 1.00, guaranteed: true }
      }
    ],
    fixedAccountRate: 5.25,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Chronic Illness Rider", "Terminal Illness Rider", "Cancer Care Compass Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: [
      "10.50% S&P 500 cap rate — among highest in IUL market",
      "Uncapped S&P 500 with 5.00% spread",
      "5.25% fixed account rate — highest tier in IUL market",
      "Putnam Dynamic Low Volatility Index with 1.00% guaranteed bonus",
      "Eight-year lookback guarantee on minimum cash value growth",
      "Cancer Care Compass rider with early detection test",
      "Symetra — A AM Best, A S&P"
    ],
    sourceUrl: "https://www.symetra.com/our-products/individuals/life-insurance/permanent-life-insurance/accumulator-ascent-IUL",
    lastRateUpdate: "2026-02-01"
  },

  // ── 24. F&G Pathsetter IUL ──
  {
    id: "fg-pathsetter-iul",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "F&G sample illustration (S&P 500 cap 12.00% confirmed), F&G Pathsetter Diversification Brochure (Barclays 170% par), fglife.com historic rates tool, InsuranceGeek 2025 IUL comparison",
    name: "Pathsetter IUL",
    maxIllustratedRate: 9.00,
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
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (High Participation)",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Point-to-Point",
        capRate: 4.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Trailblazer Sectors 5 Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        indexBonus: { bonusRate: 1.00, startYear: 2 }
      },
      {
        indexName: "BlackRock Market Advantage Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Morgan Stanley US Equity Allocator Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 0.25,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "Overloan Protection"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: [
      "Industry-leading 12.00% S&P 500 cap rate with 100% participation",
      "Barclays Trailblazer Sectors 5 — 170% uncapped participation with 1% bonus",
      "Six diverse index crediting options including BlackRock and Morgan Stanley",
      "S&P 500 cap rate stability — less than 0.50% annual change since 2020",
      "0.25% guaranteed minimum annual interest on all accounts",
      "F&G — A AM Best, A- S&P"
    ],
    sourceUrl: "https://www.fglife.com/life-insurance/historic-rates?product=pathsetter",
    lastRateUpdate: "2026-02-01"
  },

  // ── 25. Midland National Strategic Accumulator IUL 3 ──
  {
    id: "midland-national-strategic-accumulator-iul-3",
    carrierId: "midland-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "Midland National product announcement + PR Newswire (Fidelity 125% par, 1.65% bonus), midlandnational.com index selections guide, NFG Brokerage product details, lifeinsurancerecommendations.com cap rate listing",
    name: "Strategic Accumulator IUL 3",
    maxIllustratedRate: 6.80,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "S&P MidCap 400",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: true,
        multiplierValue: 1.10,
        multiplierStartYear: 6
      },
      {
        indexName: "Fidelity Multifactor Yield Index 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 125,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null,
        indexBonus: { years1to10: 1.65, years11plus: 2.65, guaranteed: 0.50 }
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 1.5,
    loanProvisions: {
      fixedLoanRate: 6.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true,
      fixedInterestParticipatingLoan: true,
      loanInterestBonus: 0.50
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Overloan Protection", "Waiver of Surrender Charge"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 75,
    highlights: [
      "Exclusive Fidelity Multifactor Yield Index — 125% uncapped participation",
      "Fidelity Index bonus: 1.65% (yr 1-10), 2.65% (yr 11+) non-guaranteed",
      "S&P 500, S&P MidCap 400, Russell 2000 — all capped at 10.50%",
      "10% Account Index Multiplier from year 6+",
      "Guaranteed 0.50% loan interest bonus on borrowed cash value",
      "Minimum account value guarantee — 2.5% average annual return",
      "Midland National (Sammons) — A+ AM Best, A+ S&P"
    ],
    sourceUrl: "https://www.midlandnational.com/indexed-ul-performance",
    lastRateUpdate: "2026-02-01"
  },

  // ── 26. Ameritas Growth IUL II ──
  {
    id: "ameritas-growth-iul-ii",
    carrierId: "ameritas",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "Ameritas.com product page, FMI Agent rate sheet (effective 05/01/2025), Ameritas marketing guide (cap 9.50% confirmed), LifeInsuranceRecommendations.com, Ameritas AG49-A compliance notice",
    name: "Growth IUL II",
    maxIllustratedRate: 6.10,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (1-Year)",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (2-Year)",
        capRate: 19.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Sector Rotator Daily RC2 5% Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BNP Paribas Momentum Multi-Asset 5 Index",
        creditingMethod: "Annual Point-to-Point (1-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "BNP Paribas Momentum Multi-Asset 5 Index",
        creditingMethod: "Annual Point-to-Point (2-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    accountValueBonus: { currentRate: 0.45, guaranteedMinimum: 0.10, startYear: 11 },
    highlights: [
      "9.50% S&P 500 cap — strong rate parity between new and in-force policies",
      "2-Year S&P 500 account with 19.00% cap for extended crediting periods",
      "S&P 500 Sector Rotator RC2 5% — uncapped volatility-managed index",
      "BNP Paribas Momentum Multi-Asset 5 — uncapped 1-year and 2-year options",
      "Account value bonus of 0.45% starting year 11 (0.10% guaranteed minimum)",
      "Ameritas in-force parity — treats existing policyholders same as new business",
      "Ameritas — A AM Best"
    ],
    sourceUrl: "https://www.ameritas.com/industry-professionals/life-insurance/index-universal/",
    lastRateUpdate: "2026-02-01"
  },

  // ── 27. Equitable BrightLife Grow IUL ──
  {
    id: "equitable-brightlife-grow-iul",
    carrierId: "equitable",
    ratesVerified: 'partial',
    lastVerifiedDate: "2026-02-28",
    verificationSource: "Equitable.com product pages (index options, floor, guaranteed interest confirmed), Premier Brokerage product announcement, NerdWallet 2026 review. Note: Equitable removed from lifeinsurancerecommendations.com cap rate comparison 1/21/2025 — specific cap rates not publicly disclosed.",
    name: "BrightLife Grow IUL (Series 159)",
    maxIllustratedRate: null,
    indexAccounts: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (1-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        capRateNote: "Cap declared periodically — not publicly disclosed"
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point (1-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        capRateNote: "Cap declared periodically — not publicly disclosed"
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point (1-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        capRateNote: "Cap declared periodically — not publicly disclosed"
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point (3-Year)",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        capRateNote: "Cap declared periodically — not publicly disclosed"
      }
    ],
    fixedAccountRate: 2.00,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "Long-Term Care Rider"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: [
      "Four indexed options: S&P 500 (1-yr & 3-yr), Russell 2000, MSCI EAFE",
      "International diversification with MSCI EAFE index option",
      "3-Year S&P 500 term for extended market exposure",
      "100% participation up to cap on all indexed accounts",
      "Guaranteed Interest Account floor of 2.00%",
      "Cap rates declared periodically by Equitable — not publicly posted",
      "Equitable — A+ AM Best, A+ S&P, A1 Moody's"
    ],
    sourceUrl: "https://equitable.com/products/life-insurance/indexed-universal-life-insurance/brightlife-grow-159",
    lastRateUpdate: "2026-02-01"
  },

  // ── 28. Protective Indexed Choice UL (2025 Update) ──
  {
    id: "protective-indexed-choice-ul-2025",
    carrierId: "protective-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "Protective.com rate update notice (March 2025 effective), comparion.protective.com product update page, lifeinsurancerecommendations.com (cap 9.00% pre-update, 8.50% post-update confirmed)",
    name: "Indexed Choice UL (2025 Rates)",
    maxIllustratedRate: 5.55,
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
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 2.0,
    loanProvisions: {
      fixedLoanRate: 5.05,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: false
    },
    noLapseGuarantee: "To Age 121",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "Waiver of Premium"],
    minimumFaceAmount: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Strong no-lapse guarantee to age 121 — best-in-class for protection",
      "8.50% S&P 500 cap rate (updated March 2025)",
      "Fixed account rate of 3.50% — unchanged",
      "Lower minimum face amount of $25,000 — accessible entry point",
      "2.00% guaranteed minimum crediting rate",
      "Simple single-index design focused on protection with accumulation potential",
      "Protective Life — A+ AM Best, AA- S&P, A1 Moody's"
    ],
    sourceUrl: "https://comparion.protective.com/about-us/news/life-insurance/product-updates/2025/were-updating-rates-on-select-products",
    lastRateUpdate: "2025-03-15"
  },

  // ── 29. Securian Eclipse Accumulator II IUL (2025 Enhanced) ──
  {
    id: "securian-eclipse-accumulator-ii-2025",
    carrierId: "securian",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "BusinessWire press release (Feb 2025 launch, Hindsight account details), lifeinsurancerecommendations.com (cap 10.00%, PRISM 200% participation confirmed), Securian.com financial professional page, WinkIntel product announcement",
    name: "Eclipse Accumulator II IUL (2025 Enhanced)",
    maxIllustratedRate: 6.55,
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
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        triggerRate: 8.00,
        guaranteedMinTriggerRate: 2.00
      },
      {
        indexName: "S&P PRISM Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "S&P 500 Low Volatility Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 65,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Hindsight Index (S&P 500 / Nasdaq-100 / Russell 2000)",
        creditingMethod: "Performance-Weighted Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null,
        hindsightWeighting: "60% highest / 40% second / 0% third performing index",
        capRateNote: "Subject to a cap — declared periodically"
      }
    ],
    fixedAccountRate: 3.25,
    guaranteedMinCreditingRate: 1.0,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: null,
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Overloan Protection", "Waiver of Premium"],
    minimumFaceAmount: 50000,
    maximumIssueAge: 80,
    highlights: [
      "NEW 2025 enhanced version — five diverse indexed account options",
      "S&P PRISM Index — 200% uncapped participation (current 215%)",
      "Unique Hindsight Index blends S&P 500, Nasdaq-100, Russell 2000",
      "Performance Trigger — earns 8.00% if S&P 500 is flat or positive",
      "Transparent charges with consumer-friendly design",
      "Available in all states except CA, FL, OR, NY (CA available Feb 2026)",
      "Securian — A+ AM Best, AA- S&P"
    ],
    sourceUrl: "https://www.securian.com/financial-professionals/products/individual-life-insurance/indexed-universal-life/eclipse-accumulator.html",
    lastRateUpdate: "2025-02-10"
  },

  // ── 30. F&G Everlast IUL ──
  {
    id: "fg-everlast-iul",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    verificationSource: "F&G Everlast vs Pathsetter comparison brochure (ADV5572), fglife.com historic rates tool, F&G product page, FinalExpenseBrokerage IUL guide",
    name: "Everlast IUL",
    maxIllustratedRate: 6.50,
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
        capRate: 3.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        hasMultiplier: false,
        multiplierValue: null
      },
      {
        indexName: "Barclays Trailblazer Sectors 5 Index",
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
        indexName: "BlackRock Market Advantage Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true,
        hasMultiplier: false,
        multiplierValue: null
      }
    ],
    fixedAccountRate: 3.50,
    guaranteedMinCreditingRate: 0.25,
    loanProvisions: {
      fixedLoanRate: 5.0,
      variableLoanAvailable: true,
      zeroNetCostLoanAvailable: true
    },
    noLapseGuarantee: "To Age 90",
    deathBenefitOptions: ["Level", "Increasing"],
    riders: ["Accelerated Benefit Rider", "Chronic Illness Rider", "Terminal Illness Rider", "No-Lapse Guarantee Rider"],
    minimumFaceAmount: 25000,
    maximumIssueAge: 80,
    highlights: [
      "Protection-focused IUL with no-lapse guarantee to age 90",
      "10.00% S&P 500 cap rate with 100% participation",
      "Barclays Trailblazer Sectors 5 — 150% uncapped participation",
      "Lower minimum face amount of $25,000 for accessible entry",
      "0.25% guaranteed minimum annual interest",
      "F&G — A AM Best, A- S&P"
    ],
    sourceUrl: "https://www.fglife.com/life-insurance/historic-rates?product=Execudex,pathsetter,everlast",
    lastRateUpdate: "2026-02-01"
  }
];
