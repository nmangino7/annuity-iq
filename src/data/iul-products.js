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
];
