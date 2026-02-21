export const fiaProducts = [
  // ── 1. Allianz 222+ ──────────────────────────────────────────────────
  {
    id: "allianz-222-plus",
    carrierId: "allianz-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Allianz 222+ Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [9.3, 9.3, 8.3, 7.3, 6.25, 5.25, 4.2, 3.15, 2.1, 1.05, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.8,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 4.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 1.70,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 3.65
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 85,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "PIMCO Tactical Balanced",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 80,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BlackRock iBLD Claria",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Futures Daily RC 5%",
        creditingMethod: "2-Year Multi-Year Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["PIV bonus structure (45% premium + 150% interest)", "60-day rate lock feature", "Multiple uncapped index strategies"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/222/rates",
    lastRateUpdate: "2026-02-21"
  },

  // ── 2. Allianz Benefit Control+ ──────────────────────────────────────
  {
    id: "allianz-benefit-control-plus",
    carrierId: "allianz-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Allianz Benefit Control+ Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [9.3, 9.3, 8.3, 7.3, 6.25, 5.25, 4.2, 3.15, 2.1, 1.05, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.5,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 4.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 1.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 3.15
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 75,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "PIMCO Tactical Balanced",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 70,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BlackRock iBLD Claria",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 90,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Futures Daily RC 5%",
        creditingMethod: "2-Year Multi-Year Point-to-Point",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Lifetime income benefit rider", "PIV bonus options (Accelerated or Balanced)", "Multiple uncapped index strategies"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities/benefit-control/rates",
    lastRateUpdate: "2026-02-21"
  },

  // ── 3. Athene Ascent Pro 10 ───────────────────────────────────────────
  {
    id: "athene-ascent-pro-10",
    carrierId: "athene",
    name: "Athene Ascent Pro 10 (Bonus)",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.85,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.50,
        participationRate: 62,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "2-Year Point-to-Point",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "AI Powered US Equity",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 112,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Built-in Ascent Income Rider (1.00% fee)", "Uncapped volatility-controlled indices"],
    sourceUrl: "https://www.athene.com/products/fia/ascent-pro",
    lastRateUpdate: "2026-02-21"
  },

  // ── 3b. Athene Accumulator 10 ──────────────────────────────────────────
  {
    id: "athene-accumulator-10",
    carrierId: "athene",
    name: "Athene Accumulator 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 100000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 5.10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "2-Year Point-to-Point",
        capRate: null,
        participationRate: 380,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["12.25% S&P 500 cap — among the highest", "380% BNP 2-year participation", "No additional fees, no rider charges", "$100K minimum for top-tier rates"],
    sourceUrl: "https://www.athene.com/products/fia/accumulator",
    lastRateUpdate: "2026-02-21"
  },

  // ── 4. Athene Agility 10 ─────────────────────────────────────────────
  {
    id: "athene-agility-10",
    carrierId: "athene",
    name: "Athene Agility 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.90,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.25,
        participationRate: 57,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "2-Year Point-to-Point",
        capRate: 10.75,
        participationRate: 78,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "2-Year Point-to-Point",
        capRate: null,
        participationRate: 180,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "AI Powered US Equity",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Enhanced Income Benefit Rider included at no cost", "Multiple 2-year strategies", "Uncapped volatility-controlled indices"],
    sourceUrl: "https://www.athene.com/products/fia/agility",
    lastRateUpdate: "2026-02-21"
  },

  // ── 5. Nationwide New Heights Select 12 ──────────────────────────────
  {
    id: "nationwide-new-heights-select-12",
    carrierId: "nationwide",
    name: "Nationwide New Heights Select 12",
    surrenderPeriod: 12,
    surrenderSchedule: [10, 10, 10, 10, 10, 9.5, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 7,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "3-Year Point-to-Point",
        capRate: null,
        participationRate: 50,
        spread: 1.95,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 35,
        spread: 1.95,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "3-Year Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0.75,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 115,
        spread: 0.75,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus (with High Point Select EDBR)", "9.5% compound annual roll-up for 12 years", "Income rider fee 1.10%"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/new-heights-select-12",
    lastRateUpdate: "2026-02-21"
  },

  // ── 6. Nationwide Peak 10 ────────────────────────────────────────────
  {
    id: "nationwide-peak-10",
    carrierId: "nationwide",
    name: "Nationwide Peak 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.00,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 55,
        spread: 1.00,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Global H-Factor",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Global H-Factor",
        creditingMethod: "2-Year Point-to-Point",
        capRate: null,
        participationRate: 295,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "JP Morgan Cycle",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Cycle",
        creditingMethod: "2-Year Point-to-Point",
        capRate: null,
        participationRate: 265,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Guaranteed Income Solution (free, 4% simple roll-up)", "Optional Bonus Income+ Rider available", "Strong 2-year participation rates"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/nationwide-peak-10",
    lastRateUpdate: "2026-02-21"
  },

  // ── 7. North American Performance Choice ─────────────────────────────
  {
    id: "north-american-performance-choice",
    carrierId: "north-american",
    name: "North American Performance Choice",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["High cap rate without bonus", "Monthly sum strategy available"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 8. North American SafeGuard Plus ─────────────────────────────────
  {
    id: "north-american-safeguard-plus",
    carrierId: "north-american",
    name: "North American SafeGuard Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1% guaranteed minimum rate", "5% premium bonus"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 9. F&G Safe Income Plus ──────────────────────────────────────────
  {
    id: "fg-safe-income-plus",
    carrierId: "fandg",
    name: "F&G Safe Income Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Income-focused design"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 10. F&G Accumulator Plus ─────────────────────────────────────────
  {
    id: "fg-accumulator-plus",
    carrierId: "fandg",
    name: "F&G Accumulator Plus",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 260,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Accumulation focused", "7-year surrender period"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 11. Pacific Index Foundation 2 ───────────────────────────────────
  {
    id: "pacific-index-foundation-2",
    carrierId: "pacific-life",
    name: "Pacific Index Foundation 2",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Credit Suisse Momentum",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Monthly average strategy available", "No premium bonus - higher caps"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 12. Pacific Index Protector ──────────────────────────────────────
  {
    id: "pacific-index-protector",
    carrierId: "pacific-life",
    name: "Pacific Index Protector",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 4.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["0.5% guaranteed minimum", "4% premium bonus"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 13. Midland National Endeavor 8 ──────────────────────────────────
  {
    id: "midland-national-endeavor-8",
    carrierId: "midland-national",
    name: "MNL Endeavor 8",
    surrenderPeriod: 8,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "8-year surrender period", "Uncapped volatility-controlled indices"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 13b. Midland National IndexBuilder 10 ──────────────────────────────
  {
    id: "midland-national-indexbuilder-10",
    carrierId: "midland-national",
    name: "MNL IndexBuilder 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 14.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["14% upfront bonus (up to 17% with ABR)", "10-year surrender", "High participation uncapped indices"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 14. Midland National RetireVantage 10 ────────────────────────────
  {
    id: "midland-national-retirevantage-10",
    carrierId: "midland-national",
    name: "Midland National RetireVantage 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 25.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["25% premium bonus", "Income rider with rollup"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 15. American Equity AssetShield 10 ───────────────────────────────
  {
    id: "american-equity-assetshield-10",
    carrierId: "american-equity",
    name: "American Equity AssetShield 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "First Trust Barclays Edge",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 400,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Daily Average",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10.50% S&P 500 cap", "Multiple crediting methods"],
    sourceUrl: "https://www.american-equity.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 16. American Equity BonusMax ─────────────────────────────────────
  {
    id: "american-equity-bonusmax",
    carrierId: "american-equity",
    name: "American Equity BonusMax",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 83,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "First Trust Barclays Edge",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Strong income rider"],
    sourceUrl: "https://www.american-equity.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 17. Great American Legend 7 ──────────────────────────────────────
  {
    id: "great-american-legend-7",
    carrierId: "great-american",
    name: "Great American Legend 7",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender period", "High cap rates"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 18. Great American Safe Return ───────────────────────────────────
  {
    id: "great-american-safe-return",
    carrierId: "great-american",
    name: "Great American Safe Return",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "0.5% guaranteed minimum"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 19. Lincoln OptiBlend 10 ─────────────────────────────────────────
  {
    id: "lincoln-optiblend-10",
    carrierId: "lincoln-financial",
    name: "Lincoln OptiBlend 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "BlackRock Dynamic Diversified",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["6% premium bonus", "Lincoln i4LIFE income rider available"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 20. Lincoln OptiBlend 7 ──────────────────────────────────────────
  {
    id: "lincoln-optiblend-7",
    carrierId: "lincoln-financial",
    name: "Lincoln OptiBlend 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender", "No bonus for higher caps"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 21. Securian EndureMark ──────────────────────────────────────────
  {
    id: "securian-enduremark",
    carrierId: "securian",
    name: "Securian EndureMark",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Monthly average strategy"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 22. Global Atlantic ForeSight ────────────────────────────────────
  {
    id: "global-atlantic-foresight",
    carrierId: "global-atlantic",
    name: "Global Atlantic ForeSight",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Dual uncapped strategies"],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 23. Protective Indexed Annuity ───────────────────────────────────
  {
    id: "protective-indexed-annuity",
    carrierId: "protective-life",
    name: "Protective Indexed Annuity",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Simple design", "7-year surrender period"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 24. Corebridge Polaris Platinum ──────────────────────────────────
  {
    id: "corebridge-polaris-platinum",
    carrierId: "corebridge-financial",
    name: "Corebridge Polaris Platinum",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.25
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["15% premium bonus", "Income rider with guaranteed rollup"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 25. Jackson MarketProtector III ──────────────────────────────────
  {
    id: "jackson-marketprotector-iii",
    carrierId: "jackson-national",
    name: "Jackson MarketProtector III",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Accumulation focused", "Multiple index options", "No premium bonus — higher caps"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 25b. Jackson Income Assurance ──────────────────────────────────────
  {
    id: "jackson-income-assurance",
    carrierId: "jackson-national",
    name: "Jackson Income Assurance",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Built-in GMWB income rider", "5% premium bonus", "Launched August 2025"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 26. Symetra Accumulation Edge ────────────────────────────────────
  {
    id: "symetra-accumulation-edge",
    carrierId: "symetra",
    name: "Symetra Accumulation Edge",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["10.75% S&P 500 cap - among the highest", "Accumulation only"],
    sourceUrl: "https://www.symetra.com/our-products/individuals/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 27. Eagle Life Eagle Select 10 ───────────────────────────────────
  {
    id: "eagle-life-eagle-select-10",
    carrierId: "eagle-life",
    name: "Eagle Life Eagle Select 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 40,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["High accumulation potential", "No premium bonus for higher rates"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 28. Eagle Life Eagle Advantage ───────────────────────────────────
  {
    id: "eagle-life-eagle-advantage",
    carrierId: "eagle-life",
    name: "Eagle Life Eagle Advantage",
    surrenderPeriod: 5,
    surrenderSchedule: [7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["5-year surrender period", "Short commitment"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 29. Delaware Life Target Growth 10 ───────────────────────────────
  {
    id: "delaware-life-target-growth-10",
    carrierId: "delaware-life",
    name: "Delaware Life Target Growth 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 12.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["12% premium bonus", "Four strategy options"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 30. Transamerica Secure Retirement Index ─────────────────────────
  {
    id: "transamerica-secure-retirement-index",
    carrierId: "transamerica",
    name: "Transamerica Secure Retirement Index",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 7.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7% premium bonus", "International index option"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index",
    lastRateUpdate: "2026-02-01"
  },

  // ── 31. Corebridge Index Frontier 7 ──────────────────────────────────
  {
    id: "corebridge-index-frontier-7",
    carrierId: "corebridge-financial",
    name: "Corebridge Index Frontier 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender period", "No premium bonus — higher caps", "Accumulation focused"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 32. Integrity Secure Edge ────────────────────────────────────────
  {
    id: "integrity-secure-edge",
    carrierId: "integrity-life",
    name: "Integrity Secure Edge",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["6% premium bonus", "Competitive cap rates"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 33. Ameritas Accumulation 7 ──────────────────────────────────────
  {
    id: "ameritas-accumulation-7",
    carrierId: "ameritas",
    name: "Ameritas Accumulation 7",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year surrender", "Accumulation focused with high caps"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 34. MassMutual Stable Voyage ─────────────────────────────────────
  {
    id: "massmutual-stable-voyage",
    carrierId: "massmutual",
    name: "MassMutual Stable Voyage",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.00
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1% guaranteed minimum rate", "MassMutual financial strength"],
    sourceUrl: "https://www.massmutual.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 35. Athene Performance Elite Plus 10 ─────────────────────────────
  {
    id: "athene-performance-elite-plus-10",
    carrierId: "athene",
    name: "Athene Performance Elite Plus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 18.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.75
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["18% premium bonus — among highest in industry", "Income rider available", "Lower caps offset by bonus"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 36. National Western Flex Growth ─────────────────────────────────
  {
    id: "national-western-flex-growth",
    carrierId: "corebridge-financial",
    name: "National Western Flex Growth",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Simple accumulation design", "Two major index choices"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 37. Great-West Lifetime Income ───────────────────────────────────
  {
    id: "great-west-lifetime-income",
    carrierId: "empower",
    name: "Great-West Lifetime Income",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Lifetime income focus", "5% premium bonus"],
    sourceUrl: "https://www.empower.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 38. Sammons Financial Pinnacle ───────────────────────────────────
  {
    id: "sammons-financial-pinnacle",
    carrierId: "sammons-financial",
    name: "Sammons Financial Pinnacle",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Two uncapped index strategies"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 39. American National Palladium MYG ──────────────────────────────
  {
    id: "american-national-palladium-myg",
    carrierId: "american-national",
    name: "American National Palladium MYG",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Competitive caps", "Monthly average option"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 40. GALIC American Freedom 10 ────────────────────────────────────
  {
    id: "galic-american-freedom-10",
    carrierId: "great-american",
    name: "GALIC American Freedom 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "DJIA",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["High caps without bonus", "DJIA index option"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 41. Athene Ascent Pro 10 ─────────────────────────────────────────
  {
    id: "athene-ascent-pro-10",
    carrierId: "athene",
    name: "Athene Ascent Pro 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 50000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 375,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.75
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["15% premium bonus", "High minimum premium for best rates"],
    sourceUrl: "https://www.athene.com/products/fia/ascent-pro",
    lastRateUpdate: "2026-02-01"
  },

  // ── 42. North American Charter Plus 14 ───────────────────────────────
  {
    id: "north-american-charter-plus-14",
    carrierId: "north-american",
    name: "North American Charter Plus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 75,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 25.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 460,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["25% premium bonus", "14-year surrender period", "460% participation rate"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 43. Allianz Core Income 7 ────────────────────────────────────────
  {
    id: "allianz-core-income-7",
    carrierId: "allianz-life",
    name: "Allianz Core Income 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender with income focus", "Performance trigger option"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 44. Nationwide Defined Protection ────────────────────────────────
  {
    id: "nationwide-defined-protection",
    carrierId: "nationwide",
    name: "Nationwide Defined Protection",
    surrenderPeriod: 8,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Daily Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8-year surrender period", "Daily average strategy"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed",
    lastRateUpdate: "2026-02-01"
  },

  // ── 45. F&G Performance Pro 10 ───────────────────────────────────────
  {
    id: "fg-performance-pro-10",
    carrierId: "fandg",
    name: "F&G Performance Pro 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 12.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["12% premium bonus", "Four strategy options"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 46. Global Atlantic ForeAccumulation ─────────────────────────────
  {
    id: "global-atlantic-foreaccumulation",
    carrierId: "global-atlantic",
    name: "Global Atlantic ForeAccumulation",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 325,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year accumulation focus", "High cap and participation rates"],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 47. Corebridge Index Advantage+ ──────────────────────────────────
  {
    id: "corebridge-index-advantage-plus",
    carrierId: "corebridge-financial",
    name: "Corebridge Index Advantage+",
    surrenderPeriod: 8,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 35,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8-year surrender", "5% premium bonus"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 48. Jackson Pinnacle Prime ───────────────────────────────────────
  {
    id: "jackson-pinnacle-prime",
    carrierId: "jackson-national",
    name: "Jackson Pinnacle Prime",
    surrenderPeriod: 8,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "International index diversification"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 49. Protective Dimensions ────────────────────────────────────────
  {
    id: "protective-dimensions",
    carrierId: "protective-life",
    name: "Protective Dimensions",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.25
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Daily Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Five strategy options"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 50. Delaware Life Achiever 7 ─────────────────────────────────────
  {
    id: "delaware-life-achiever-7",
    carrierId: "delaware-life",
    name: "Delaware Life Achiever 7",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year accumulation", "High cap rates without bonus"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 51. Allianz Benefit Control Annuity ─────────────────────────────
  {
    id: "allianz-benefit-control",
    carrierId: "allianz-life",
    name: "Allianz Benefit Control Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 180,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Lifetime income rider included", "No premium bonus for higher caps"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 52. Allianz 360 Annuity ─────────────────────────────────────────
  {
    id: "allianz-360-annuity",
    carrierId: "allianz-life",
    name: "Allianz 360 Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.75
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["360-degree strategy approach", "Four index strategies included"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 53. Athene Performance Elite Plus ────────────────────────────────
  {
    id: "athene-performance-elite-plus",
    carrierId: "athene",
    name: "Athene Performance Elite Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 340,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "High participation on volatility-controlled indices"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 54. Athene Benefit 10 ───────────────────────────────────────────
  {
    id: "athene-benefit-10",
    carrierId: "athene",
    name: "Athene Benefit 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.25
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "Income-focused with performance trigger"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 55. Nationwide Monument Advisor ──────────────────────────────────
  {
    id: "nationwide-monument-advisor",
    carrierId: "nationwide",
    name: "Nationwide Monument Advisor",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 50000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 280,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Daily Average",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Advisory channel product", "No bonus for highest possible caps"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed",
    lastRateUpdate: "2026-02-01"
  },

  // ── 56. North American BenefitSolutions II ──────────────────────────
  {
    id: "north-american-benefitsolutions-ii",
    carrierId: "north-american",
    name: "North American BenefitSolutions II",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 325,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Income rider with rollup benefit"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 57. North American ChartPath ────────────────────────────────────
  {
    id: "north-american-chartpath",
    carrierId: "north-american",
    name: "North American ChartPath",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Accumulation-focused design", "No bonus for maximum cap rates"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 58. Midland National RetireVantage Select ───────────────────────
  {
    id: "midland-national-retirevantage-select",
    carrierId: "midland-national",
    name: "Midland National RetireVantage Select",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 20.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 280,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["20% premium bonus", "Select series with enhanced income rider"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 59. Midland National RetireVantage 14 ───────────────────────────
  {
    id: "midland-national-retirevantage-14",
    carrierId: "midland-national",
    name: "Midland National RetireVantage 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 75,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 30.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 5.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 400,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["30% premium bonus", "14-year surrender with highest bonus tier"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 60. F&G Performance Pro Plus ────────────────────────────────────
  {
    id: "fg-performance-pro-plus",
    carrierId: "fandg",
    name: "F&G Performance Pro Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 325,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["15% premium bonus", "Enhanced performance tier"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 61. Pacific Index Choice ────────────────────────────────────────
  {
    id: "pacific-index-choice",
    carrierId: "pacific-life",
    name: "Pacific Index Choice",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Flexible choice of strategies", "Monthly average for smooth returns"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 62. Pacific Odyssey ─────────────────────────────────────────────
  {
    id: "pacific-odyssey",
    carrierId: "pacific-life",
    name: "Pacific Odyssey",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Credit Suisse Momentum",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["6% premium bonus", "International and domestic index options"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 63. Lincoln MYGuarantee Plus ────────────────────────────────────
  {
    id: "lincoln-myguarantee-plus",
    carrierId: "lincoln-financial",
    name: "Lincoln MYGuarantee Plus",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1% guaranteed minimum rate", "Multi-year guarantee with index upside"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 64. Great American Legend III ────────────────────────────────────
  {
    id: "great-american-legend-iii",
    carrierId: "great-american",
    name: "Great American Legend III",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Third generation Legend series", "Four index strategy options"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 65. Great American IndexMark 7 ──────────────────────────────────
  {
    id: "great-american-indexmark-7",
    carrierId: "great-american",
    name: "Great American IndexMark 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Accumulation product", "Monthly average strategy for consistent growth"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 66. Jackson Rally III ───────────────────────────────────────────
  {
    id: "jackson-rally-iii",
    carrierId: "jackson-national",
    name: "Jackson Rally III",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 260,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Third generation Rally series", "No bonus for highest caps"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 67. Global Atlantic ForeAccumulation II ─────────────────────────
  {
    id: "global-atlantic-foreaccumulation-ii",
    carrierId: "global-atlantic",
    name: "Global Atlantic ForeAccumulation II",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Second generation accumulation product", "Among highest cap rates in market"],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 68. Global Atlantic ForeIncome II ───────────────────────────────
  {
    id: "global-atlantic-foreincome-ii",
    carrierId: "global-atlantic",
    name: "Global Atlantic ForeIncome II",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Income rider with guaranteed rollup"],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 69. Protective Indexed Annuity II ───────────────────────────────
  {
    id: "protective-indexed-annuity-ii",
    carrierId: "protective-life",
    name: "Protective Indexed Annuity II",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "BlackRock iBLD Claria",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Second generation product", "BlackRock volatility-controlled index"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 70. Brighthouse Shield Level Pay Plus ───────────────────────────
  {
    id: "brighthouse-shield-level-pay-plus",
    carrierId: "brighthouse-financial",
    name: "Brighthouse Shield Level Pay Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 15.00,
        participationRate: 100,
        spread: 0,
        floor: -20,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Buffer product with income rider", "Higher caps with -10% and -20% buffers"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 71. Brighthouse Shield Annuity 10 ───────────────────────────────
  {
    id: "brighthouse-shield-annuity-10",
    carrierId: "brighthouse-financial",
    name: "Brighthouse Shield Annuity 10",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 1.25,
        floor: -10,
        isUncapped: true
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Buffer annuity design", "Uncapped with spread option available"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 72. Transamerica Index 7 ────────────────────────────────────────
  {
    id: "transamerica-index-7",
    carrierId: "transamerica",
    name: "Transamerica Index 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year surrender period", "No bonus for higher cap rates"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index",
    lastRateUpdate: "2026-02-01"
  },

  // ── 73. Transamerica EliteEdge Plus ─────────────────────────────────
  {
    id: "transamerica-eliteedge-plus",
    carrierId: "transamerica",
    name: "Transamerica EliteEdge Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Elite tier with enhanced strategies"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index",
    lastRateUpdate: "2026-02-01"
  },

  // ── 74. Corebridge Polaris Income Plus ──────────────────────────────
  {
    id: "corebridge-polaris-income-plus",
    carrierId: "corebridge-financial",
    name: "Corebridge Polaris Income Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 12.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["12% premium bonus", "Designed for retirement income"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 75. Corebridge Polaris Choice ───────────────────────────────────
  {
    id: "corebridge-polaris-choice",
    carrierId: "corebridge-financial",
    name: "Corebridge Polaris Choice",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 4.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 38,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender with 4% bonus", "Flexible strategy selection"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 76. Symetra LifeStream Select ───────────────────────────────────
  {
    id: "symetra-lifestream-select",
    carrierId: "symetra",
    name: "Symetra LifeStream Select",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "Income rider with competitive rollup"],
    sourceUrl: "https://www.symetra.com/our-products/individuals/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 77. Symetra LifeStream Plus ─────────────────────────────────────
  {
    id: "symetra-lifestream-plus",
    carrierId: "symetra",
    name: "Symetra LifeStream Plus",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["No bonus for highest caps", "Simple accumulation design"],
    sourceUrl: "https://www.symetra.com/our-products/individuals/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 78. Securian SecureHorizon ──────────────────────────────────────
  {
    id: "securian-securehorizon",
    carrierId: "securian",
    name: "Securian SecureHorizon",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Income-focused with trigger strategy"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 79. Securian FlexGuard Indexed ──────────────────────────────────
  {
    id: "securian-flexguard-indexed",
    carrierId: "securian",
    name: "Securian FlexGuard Indexed",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year accumulation focused", "Monthly average option"],
    sourceUrl: "https://www.securian.com/financial-professionals/products/annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 80. Eagle Life Eagle Select 14 ──────────────────────────────────
  {
    id: "eagle-life-eagle-select-14",
    carrierId: "eagle-life",
    name: "Eagle Life Eagle Select 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["12% S&P 500 cap - among the highest", "14-year surrender for maximum rates"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 81. Integrity Pinnacle Select ───────────────────────────────────
  {
    id: "integrity-pinnacle-select",
    carrierId: "integrity-life",
    name: "Integrity Pinnacle Select",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Select series with enhanced benefits"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 82. American National Palladium MYG Select ──────────────────────
  {
    id: "american-national-palladium-myg-select",
    carrierId: "american-national",
    name: "American National Palladium MYG Select",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1% guaranteed minimum rate", "Multi-year guarantee with index participation"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 83. American National Freedom 10 ────────────────────────────────
  {
    id: "american-national-freedom-10",
    carrierId: "american-national",
    name: "American National Freedom 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "Multiple major index options"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 84. Sammons Accumulation Protector ──────────────────────────────
  {
    id: "sammons-accumulation-protector",
    carrierId: "sammons-financial",
    name: "Sammons Accumulation Protector",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["High caps with no premium bonus", "Accumulation-focused design"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 85. Principal Indexed Choice ────────────────────────────────────
  {
    id: "principal-indexed-choice",
    carrierId: "principal-financial",
    name: "Principal Indexed Choice",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "Principal financial strength backing"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 86. Principal Grow & Protect ────────────────────────────────────
  {
    id: "principal-grow-and-protect",
    carrierId: "principal-financial",
    name: "Principal Grow & Protect",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["0.5% guaranteed minimum", "Growth and protection balanced approach"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 87. Equitable Structured Capital Strategies PLUS ────────────────
  {
    id: "equitable-scs-plus",
    carrierId: "equitable",
    name: "Equitable Structured Capital Strategies PLUS",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 11.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 1.50,
        floor: -20,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Structured buffer product", "Higher caps with defined downside buffers"],
    sourceUrl: "https://equitable.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 88. Equitable SCS Income ────────────────────────────────────────
  {
    id: "equitable-scs-income",
    carrierId: "equitable",
    name: "Equitable SCS Income",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Buffer product with income rider", "Structured approach to retirement income"],
    sourceUrl: "https://equitable.com/annuities/variable-annuities/performance-cap-rates",
    lastRateUpdate: "2026-02-01"
  },

  // ── 89. New York Life Secure Term FIA II ────────────────────────────
  {
    id: "nyl-secure-term-fia-ii",
    carrierId: "new-york-life",
    name: "New York Life Secure Term FIA II",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.75
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1% guaranteed minimum", "New York Life AAA-rated financial strength"],
    sourceUrl: "https://www.newyorklife.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 90. American General Power Index Plus ───────────────────────────
  {
    id: "american-general-power-index-plus",
    carrierId: "american-general",
    name: "American General Power Index Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.25
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Four strategy options"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 91. American General AG Select ──────────────────────────────────
  {
    id: "american-general-ag-select",
    carrierId: "american-general",
    name: "American General AG Select",
    surrenderPeriod: 7,
    surrenderSchedule: [7, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["7-year accumulation focus", "No bonus for higher cap rates"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 92. Athene AccuMax 7 ────────────────────────────────────────────
  {
    id: "athene-accumax-7",
    carrierId: "athene",
    name: "Athene AccuMax 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "7-year surrender with strong rates"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 93. North American NAC BenefitSolutions ─────────────────────────
  {
    id: "north-american-nac-benefitsolutions",
    carrierId: "north-american",
    name: "North American NAC BenefitSolutions",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 375,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 4.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["15% premium bonus", "Strong income rider with rollup"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 94. F&G Safe Income Advantage ───────────────────────────────────
  {
    id: "fg-safe-income-advantage",
    carrierId: "fandg",
    name: "F&G Safe Income Advantage",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 4.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["4% premium bonus", "Income rider with 7-year surrender"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 95. Lincoln OptiBlend 5 ─────────────────────────────────────────
  {
    id: "lincoln-optiblend-5",
    carrierId: "lincoln-financial",
    name: "Lincoln OptiBlend 5",
    surrenderPeriod: 5,
    surrenderSchedule: [7, 6, 5, 4, 3, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["5-year surrender - shortest commitment", "Competitive rates for short term"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 96. Nationwide New Heights 7 ────────────────────────────────────
  {
    id: "nationwide-new-heights-7",
    carrierId: "nationwide",
    name: "Nationwide New Heights 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "7-year surrender New Heights series"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed",
    lastRateUpdate: "2026-02-01"
  },

  // ── 97. John Hancock Protection Indexed Plus ────────────────────────
  {
    id: "john-hancock-protection-indexed-plus",
    carrierId: "john-hancock",
    name: "John Hancock Protection Indexed Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["0.5% guaranteed minimum", "John Hancock brand strength"],
    sourceUrl: "https://www.johnhancock.com/annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── 98. MassMutual Stable Voyage Plus ───────────────────────────────
  {
    id: "massmutual-stable-voyage-plus",
    carrierId: "massmutual",
    name: "MassMutual Stable Voyage Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 1.5,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.50
      },
      {
        indexName: "Bloomberg US Dynamic Balance II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 180,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["1.5% guaranteed minimum - among the highest", "MassMutual A++ rated carrier"],
    sourceUrl: "https://www.massmutual.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 99. Prudential FlexGuard Income ─────────────────────────────────
  {
    id: "prudential-flexguard-income",
    carrierId: "prudential",
    name: "Prudential FlexGuard Income",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 1.25,
        floor: -10,
        isUncapped: true
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Buffer product with income benefit", "Uncapped with spread strategy available"],
    sourceUrl: "https://www.prudential.com/personal/annuities/flexguard-rate-center",
    lastRateUpdate: "2026-02-01"
  },

  // ── 100. American Equity IncomeShield 10 ────────────────────────────
  {
    id: "american-equity-incomeshield-10",
    carrierId: "american-equity",
    name: "American Equity IncomeShield 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "First Trust Barclays Edge",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 350,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Income-focused design"],
    sourceUrl: "https://www.american-equity.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 101. Delaware Life Momentum 10 ──────────────────────────────────
  {
    id: "delaware-life-momentum-10",
    carrierId: "delaware-life",
    name: "Delaware Life Momentum 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 300,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "Momentum-driven growth strategy"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 102. Jackson Pinnacle Bonus ─────────────────────────────────────
  {
    id: "jackson-pinnacle-bonus",
    carrierId: "jackson-national",
    name: "Jackson Pinnacle Bonus",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "JP Morgan Mozaic II",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Jackson financial strength backing"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 103. Great American Safe Return Plus ────────────────────────────
  {
    id: "great-american-safe-return-plus",
    carrierId: "great-american",
    name: "Great American Safe Return Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.75,
    premiumBonus: 7.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 5.25
      },
      {
        indexName: "BlackRock iBLD Claria",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["0.75% guaranteed minimum", "7% premium bonus with income focus"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 104. Ameritas Accumulation 10 ───────────────────────────────────
  {
    id: "ameritas-accumulation-10",
    carrierId: "ameritas",
    name: "Ameritas Accumulation 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 2.50,
        participationRate: 100,
        spread: 0,
        floor: -10,
        isUncapped: false
      },
      {
        indexName: "Russell 2000",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Nasdaq-100",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus", "Four major index options"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 105. Midland National Endeavor 7 ────────────────────────────────
  {
    id: "midland-national-endeavor-7",
    carrierId: "midland-national",
    name: "Midland National Endeavor 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 250,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi Asset Diversified 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 275,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "7-year Endeavor series"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Insurance Company ─────────────────────────────────────────────

  // ── SILAC Teton 5 (Accumulation) ───────────────────────────────────────
  {
    id: "silac-teton-5",
    carrierId: "silac",
    name: "SILAC Teton 5",
    surrenderPeriod: 5,
    surrenderSchedule: [12, 12, 11, 10, 9, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.65,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 95,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 70,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.25
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "5-year short surrender period",
      "Max issue age 90",
      "No premium bonus — higher caps and participation rates",
      "Multiple uncapped volatility-controlled index strategies"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton 7 (Accumulation) ───────────────────────────────────────
  {
    id: "silac-teton-7",
    carrierId: "silac",
    name: "SILAC Teton 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.65,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 95,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 70,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.25
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "No premium bonus — higher raw rates",
      "Multiple uncapped volatility-controlled index strategies",
      "Max issue age 90"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton 10 (Accumulation) ──────────────────────────────────────
  {
    id: "silac-teton-10",
    carrierId: "silac",
    name: "SILAC Teton 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.65,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 95,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 70,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.50
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "No premium bonus — highest raw cap and participation rates",
      "Multiple uncapped strategies over 185% participation",
      "4.50% fixed rate option"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton 14 (Accumulation) ──────────────────────────────────────
  {
    id: "silac-teton-14",
    carrierId: "silac",
    name: "SILAC Teton 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.50
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "14-year term — longest accumulation period",
      "Uncapped volatility-controlled index strategies",
      "No premium bonus for higher crediting rates"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton Bonus 5 (Accumulation with Bonus) ─────────────────────
  {
    id: "silac-teton-bonus-5",
    carrierId: "silac",
    name: "SILAC Teton Bonus 5",
    surrenderPeriod: 5,
    surrenderSchedule: [12, 12, 11, 10, 9, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 7.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 40,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.15,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.75
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "7% premium bonus on 5-year term",
      "Short surrender with bonus — rare combination",
      "Slightly lower caps/participation vs non-bonus Teton"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton Bonus 7 (Accumulation with Bonus) ─────────────────────
  {
    id: "silac-teton-bonus-7",
    carrierId: "silac",
    name: "SILAC Teton Bonus 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 40,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.15,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.75
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "10% premium bonus",
      "Slightly lower caps/participation vs non-bonus Teton",
      "Cumulative free withdrawals up to 30%"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton Bonus 10 (Accumulation with Bonus) ────────────────────
  {
    id: "silac-teton-bonus-10",
    carrierId: "silac",
    name: "SILAC Teton Bonus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 40,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.15,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 2.75,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 2.50,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 2.50,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.75
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "15% premium bonus — among highest in industry",
      "13 crediting strategies across 6 indexes",
      "Boost spread strategies available"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Teton Bonus 14 (Accumulation with Bonus) ────────────────────
  {
    id: "silac-teton-bonus-14",
    carrierId: "silac",
    name: "SILAC Teton Bonus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 135,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.75
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "15% premium bonus on 14-year term",
      "Longest accumulation window",
      "Highest surrender charges (up to 14.75%)"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali 7 (Accumulation + Lifetime Income) ───────────────────
  {
    id: "silac-denali-7",
    carrierId: "silac",
    name: "SILAC Denali 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 57,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.85,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 77,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 207,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "Built-in lifetime withdrawal benefit at no fee",
      "200%+ participation on multiple volatility-controlled indexes",
      "Wellness withdrawal doubles income for up to 5 years",
      "No annual contract fees"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali 10 (Accumulation + Lifetime Income) ──────────────────
  {
    id: "silac-denali-10",
    carrierId: "silac",
    name: "SILAC Denali 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 57,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.85,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 77,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 207,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 5.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "Built-in lifetime withdrawal benefit at no fee",
      "5.25% fixed rate option",
      "200%+ participation on volatility-controlled indexes",
      "Wellness withdrawal doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali 14 (Accumulation + Lifetime Income) ──────────────────
  {
    id: "silac-denali-14",
    carrierId: "silac",
    name: "SILAC Denali 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 207,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 5.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "14-year term with built-in lifetime income",
      "No annual fees on base product",
      "Uncapped volatility-controlled indexes above 200% participation"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali Bonus 7 (Accumulation + Bonus + Lifetime Income) ─────
  {
    id: "silac-denali-bonus-7",
    carrierId: "silac",
    name: "SILAC Denali Bonus 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 45,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 3.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "10% premium bonus with built-in lifetime income",
      "No annual fees on base product",
      "Wellness withdrawal doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali Bonus 10 (Accumulation + Bonus + Lifetime Income) ────
  {
    id: "silac-denali-bonus-10",
    carrierId: "silac",
    name: "SILAC Denali Bonus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 45,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 80,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 3.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "15% premium bonus — among highest in industry",
      "Built-in lifetime withdrawal benefit at no fee",
      "Wellness withdrawal doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Denali Bonus 14 (Accumulation + Bonus + Lifetime Income) ────
  {
    id: "silac-denali-bonus-14",
    carrierId: "silac",
    name: "SILAC Denali Bonus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 15.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 6.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 165,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 3.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "15% premium bonus on 14-year term",
      "Built-in lifetime income at no additional cost",
      "Longest surrender with highest bonus"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Evolve 7 (Income-Focused FIA) ───────────────────────────────
  {
    id: "silac-evolve-7",
    carrierId: "silac",
    name: "SILAC Evolve 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 3.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.0,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 57,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.85,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 77,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 207,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.50
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "Income-focused FIA with 3% premium bonus",
      "6% guaranteed rollup PLUS positive interest credits",
      "Built-in ELWB — Level or Increasing lifetime withdrawals",
      "Wellness/ADL benefit doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Evolve 10 (Income-Focused FIA) ──────────────────────────────
  {
    id: "silac-evolve-10",
    carrierId: "silac",
    name: "SILAC Evolve 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 3.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 82,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 220,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 4.50,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 4.25,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 4.25,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "Income-focused FIA with 5% premium bonus",
      "6% guaranteed rollup PLUS positive interest credits",
      "Highest caps and participation rates in SILAC lineup",
      "Built-in ELWB — Level or Increasing lifetime withdrawals",
      "Wellness/ADL benefit doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Evolve 14 (Income-Focused FIA) ──────────────────────────────
  {
    id: "silac-evolve-14",
    carrierId: "silac",
    name: "SILAC Evolve 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 9.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 220,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 4.75
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "14-year income-focused FIA with 5% premium bonus",
      "6% guaranteed rollup PLUS positive interest credits",
      "Longest deferral period for maximum income accumulation"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega 7 (Legacy / Wealth Transfer) ──────────────────────────
  {
    id: "silac-vega-7",
    carrierId: "silac",
    name: "SILAC Vega 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 2.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "275% benefit multiplier on index credits (before withdrawals)",
      "Enhanced death benefit based on Benefit Value",
      "Increasing, Level, or Accelerated lifetime withdrawal options",
      "Wellness benefit doubles single income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega 10 (Legacy / Wealth Transfer) ─────────────────────────
  {
    id: "silac-vega-10",
    carrierId: "silac",
    name: "SILAC Vega 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 2.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 52,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "275% benefit multiplier on index credits (before withdrawals)",
      "Enhanced death benefit based on Benefit Value",
      "Three withdrawal options: Increasing, Level, Accelerated"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega 14 (Legacy / Wealth Transfer) ─────────────────────────
  {
    id: "silac-vega-14",
    carrierId: "silac",
    name: "SILAC Vega 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 2.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 8.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 187,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "14-year legacy product with 275% benefit multiplier",
      "Enhanced death benefit for wealth transfer",
      "Longest deferral maximizes Benefit Value growth"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega Bonus 7 (Legacy / Wealth Transfer with Bonus) ─────────
  {
    id: "silac-vega-bonus-7",
    carrierId: "silac",
    name: "SILAC Vega Bonus 7",
    surrenderPeriod: 7,
    surrenderSchedule: [12, 12, 11, 10, 9, 7, 4, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    benefitValueBonus: 50.0,
    benefitValueBonusOver80: 10.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 1.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 4.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 30,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 1.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 0.50,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 0.25,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "50% bonus applied to Benefit Value (ages 0-80)",
      "175% benefit multiplier on index credits",
      "Enhanced death benefit paid over 5 years based on Benefit Value",
      "Three withdrawal options: Increasing, Level, Accelerated"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega Bonus 10 (Legacy / Wealth Transfer with Bonus) ────────
  {
    id: "silac-vega-bonus-10",
    carrierId: "silac",
    name: "SILAC Vega Bonus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 10, 9, 8, 7, 6, 4, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    benefitValueBonus: 50.0,
    benefitValueBonusOver80: 10.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 1.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 4.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 30,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 1.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 0.50,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Boost Spread",
        capRate: null,
        participationRate: null,
        spread: 0.25,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "50% bonus applied to Benefit Value (ages 0-80)",
      "175% benefit multiplier on index credits",
      "Enhanced death benefit based on Benefit Value",
      "Three withdrawal options: Increasing, Level, Accelerated"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Vega Bonus 14 (Legacy / Wealth Transfer with Bonus) ────────
  {
    id: "silac-vega-bonus-14",
    carrierId: "silac",
    name: "SILAC Vega Bonus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumPremium: 1000000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    benefitValueBonus: 50.0,
    benefitValueBonusOver80: 10.0,
    freeWithdrawalPercent: 5,
    mvAdjustment: true,
    benefitValueMultiplier: 1.75,
    benefitValueMultiplierAfterWithdrawals: 1.75,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Cap",
        capRate: 4.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 105,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fixed Rate",
        creditingMethod: "Fixed",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        fixedRate: 2.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "50% Benefit Value bonus (ages 0-80); 10% (ages 81-85)",
      "14-year legacy product for maximum wealth transfer",
      "Enhanced death benefit distributed over 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G 1-2-3 (Anytime Income) ──────────────────────────────────────
  {
    id: "fg-123-anytime-income",
    carrierId: "fandg",
    name: "F&G 1-2-3 (Anytime Income)",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 10, 9, 8, 6, 5, 4, 3, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 4.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.40, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 85, spread: 5.5, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 2.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Built-in Anytime Income rider", "12 index crediting strategies", "6 index options including CIBC, BlackRock, Morgan Stanley", "Biennial strategies for higher participation"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G 1-2-3 (Future Income) ───────────────────────────────────────
  {
    id: "fg-123-future-income",
    carrierId: "fandg",
    name: "F&G 1-2-3 (Future Income)",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 10, 8.75, 7.50, 6.25, 5, 3.75, 2.50, 1.25, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 4.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.45, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 5.5, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 3.00 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Built-in Future Income rider (10-yr wait)", "Higher rates than Anytime Income version", "12 index crediting strategies", "Enhanced income with 10-year deferral"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Flex Accumulator ────────────────────────────────────────────
  {
    id: "fg-flex-accumulator",
    carrierId: "fandg",
    name: "F&G Flex Accumulator",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Point-to-Point", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["Accumulation-focused with no rider fees", "Enhanced death benefit at no cost", "7 indexed strategies across 4 indices", "Performance enhancement charge option available"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Accelerator Plus 10 ──────────────────────────────────────────
  {
    id: "fg-accelerator-plus-10",
    carrierId: "fandg",
    name: "F&G Accelerator Plus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [14, 13, 12, 11, 10, 8, 6, 4, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.50 },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 80, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 210, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus", "19 indexed strategies plus fixed", "Performance multiplier up to 175% of account value for income", "7 index options"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Accelerator Plus 14 ──────────────────────────────────────────
  {
    id: "fg-accelerator-plus-14",
    carrierId: "fandg",
    name: "F&G Accelerator Plus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14.75, 13.75, 12.75, 11.75, 10.75, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 10.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 230, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["10% premium bonus vested over 14 years", "14-year surrender period", "Performance multiplier up to 175% for income", "Higher participation rates than 10-year version"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 7 (Enhancement) ─────────────────────────────
  {
    id: "fg-prosperity-elite-7-enhancement",
    carrierId: "fandg",
    name: "F&G Prosperity Elite 7 (Enhancement)",
    surrenderPeriod: 7,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 4.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Average", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Gold Commodity", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.25 }
    ],
    incomeRiderAvailable: false,
    highlights: ["4% premium bonus", "GMDB rider at 0.60% annual fee", "Death benefit base grows at 5% simple interest", "Gold commodity index available"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 10 (Enhancement) ────────────────────────────
  {
    id: "fg-prosperity-elite-10-enhancement",
    carrierId: "fandg",
    name: "F&G Prosperity Elite 10 (Enhancement)",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.30, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 210, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 195, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Gold Commodity", creditingMethod: "Annual Point-to-Point", capRate: 8.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.50 }
    ],
    incomeRiderAvailable: false,
    highlights: ["6% premium bonus", "GMDB rider at 0.60% annual fee", "Death benefit base grows at 5% simple interest", "Gold commodity and biennial strategies"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 14 (Enhancement) ────────────────────────────
  {
    id: "fg-prosperity-elite-14-enhancement",
    carrierId: "fandg",
    name: "F&G Prosperity Elite 14 (Enhancement)",
    surrenderPeriod: 14,
    surrenderSchedule: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 7.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.35, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 265, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 230, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Gold Commodity", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 }
    ],
    incomeRiderAvailable: false,
    highlights: ["7% premium bonus", "14-year surrender period with highest participation rates", "GMDB rider at 0.60% annual fee", "Up to 265% participation on GS Global Factor"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 10 (Protection) ─────────────────────────────
  {
    id: "fg-prosperity-elite-10-protection",
    carrierId: "fandg",
    name: "F&G Prosperity Elite 10 (Protection)",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.50,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 190, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Gold Commodity", creditingMethod: "Annual Point-to-Point", capRate: 8.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.25 }
    ],
    incomeRiderAvailable: true,
    highlights: ["6.50% premium bonus", "EGMWB income rider at 0.90% annual fee", "EGMDB death benefit at 0.60% annual fee", "Protection Package with income + death benefit"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 14 (Protection) ─────────────────────────────
  {
    id: "fg-prosperity-elite-14-protection",
    carrierId: "fandg",
    name: "F&G Prosperity Elite 14 (Protection)",
    surrenderPeriod: 14,
    surrenderSchedule: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 7.50,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 255, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Gold Commodity", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["7.50% premium bonus", "14-year surrender period", "EGMWB income rider + EGMDB death benefit", "Highest bonus in Prosperity Elite series"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American Control X 10 ──────────────────────────────────────
  {
    id: "nac-control-x-10",
    carrierId: "north-american",
    name: "NAC Control X 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.50 }
    ],
    incomeRiderAvailable: true,
    highlights: ["NAC's flagship accumulation FIA", "BNP Paribas volatility-controlled index", "130% uncapped participation", "5.50% performance trigger rate"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American Guaranteed Allocation 5 ──────────────────────────
  {
    id: "nac-guaranteed-allocation-5",
    carrierId: "north-american",
    name: "NAC Guaranteed Allocation 5",
    surrenderPeriod: 5,
    surrenderSchedule: [8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["Short 5-year surrender period", "Lower minimum at $10K", "Simple product design", "Best for near-term accumulation"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American Guaranteed Allocation 7 ──────────────────────────
  {
    id: "nac-guaranteed-allocation-7",
    carrierId: "north-american",
    name: "NAC Guaranteed Allocation 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.85, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 85, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 110, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year surrender period", "Higher rates than 5-year version", "BNP Paribas index option", "Income rider available"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American Secure Horizon Accelerator ─────────────────────
  {
    id: "nac-secure-horizon-accelerator",
    carrierId: "north-american",
    name: "NAC Secure Horizon Accelerator",
    surrenderPeriod: 10,
    surrenderSchedule: [14, 13, 12, 11, 10, 8, 6, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 17.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 35, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 3.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Industry-leading 17% premium bonus", "Bonus vested over 10 years", "Income-focused with high rollup", "BNP Paribas index with 95% participation"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American PrimePath Pro 10 ────────────────────────────────
  {
    id: "nac-primepath-pro-10",
    carrierId: "north-american",
    name: "NAC PrimePath Pro 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Strong accumulation product", "120% BNP Paribas participation", "No bonus — cleaner cap rates", "Income rider available"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American PrimePath Pro 12 ────────────────────────────────
  {
    id: "nac-primepath-pro-12",
    carrierId: "north-american",
    name: "NAC PrimePath Pro 12",
    surrenderPeriod: 12,
    surrenderSchedule: [10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.25 }
    ],
    incomeRiderAvailable: true,
    highlights: ["12-year surrender for higher rates", "135% BNP Paribas participation", "Highest trigger rate in NAC lineup", "Enhanced cap rates vs 10-year"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American VersaChoice ──────────────────────────────────────
  {
    id: "nac-versachoice",
    carrierId: "north-american",
    name: "NAC VersaChoice",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "BNP Paribas Multi Asset Diversified 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.00 }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Versatile product with income + accumulation", "100% BNP Paribas participation", "Income rider available"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── Jackson National Rally IV ─────────────────────────────────────
  {
    id: "jackson-rally-iv",
    carrierId: "jackson-national",
    name: "Jackson Rally IV",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "MSCI KLD 400 Social", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JPMorgan Mozaic II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 110, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Next-gen Rally series", "JPMorgan Mozaic II index with 110% participation", "ESG index option (MSCI KLD 400)", "Income rider available"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── Jackson National PathBuilder ────────────────────────────────────
  {
    id: "jackson-pathbuilder",
    carrierId: "jackson-national",
    name: "Jackson PathBuilder",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "JPMorgan Mozaic II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.00 }
    ],
    incomeRiderAvailable: true,
    highlights: ["7-year shorter surrender period", "Simplified product design", "JPMorgan Mozaic II index", "Income rider compatible"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── Transamerica Index 10 ─────────────────────────────────────────
  {
    id: "transamerica-index-10",
    carrierId: "transamerica",
    name: "Transamerica Index 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.10, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Merrill Lynch RPM Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.50 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Companion to Index 7", "Longer 10-year surrender for better rates", "Merrill Lynch RPM index option", "Income rider available"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index",
    lastRateUpdate: "2026-02-01"
  },

  // ── Transamerica Elite Edge Pro ────────────────────────────────────
  {
    id: "transamerica-elite-edge-pro",
    carrierId: "transamerica",
    name: "Transamerica Elite Edge Pro",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 35, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Merrill Lynch RPM Index", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 3.75 }
    ],
    incomeRiderAvailable: true,
    highlights: ["8% premium bonus", "Nasdaq-100 index option", "Merrill Lynch RPM index with 100% participation", "Income rider compatible"],
    sourceUrl: "https://www.transamerica.com/individual/what-we-offer/products/annuities/fixed-index",
    lastRateUpdate: "2026-02-01"
  },

  // ── Pacific Life Pacific Index Choice ──────────────────────────────
  {
    id: "pacific-life-index-choice",
    carrierId: "pacific-life",
    name: "Pacific Index Choice",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Credit Suisse Momentum Allocator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Pacific Life flagship accumulation FIA", "150% Bloomberg Dynamic Balance participation", "Credit Suisse Momentum Allocator index", "Income rider available"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  },

  // ── Pacific Life Pacific Secure Income ──────────────────────────────
  {
    id: "pacific-life-secure-income",
    carrierId: "pacific-life",
    name: "Pacific Secure Income",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.25 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Income-focused design", "Built-in income benefit", "Bloomberg Dynamic Balance 135% participation", "Pacific Life A+ AM Best rated"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-01"
  }
];
