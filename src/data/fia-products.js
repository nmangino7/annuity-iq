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
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
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
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
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
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
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
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Nationwide New Heights Select 12",
    surrenderPeriod: 12,
    surrenderSchedule: [10, 10, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 7,
    indexStrategies: [
      { indexName: "Goldman Sachs New Horizons", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Goldman Sachs New Horizons", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG Macro Compass", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG Macro Compass", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "NYSE Zebra Edge II", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "NYSE Zebra Edge II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 115, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan Mozaic II", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan Mozaic II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "3-Year Point-to-Point", capRate: null, participationRate: 30, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 20, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Loomis Sayles Discovery", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["GS New Horizons 225% PR (3yr), SG Macro 150% PR (3yr)", "NYSE Zebra Edge II 185% PR, JP Mozaic II 160% PR", "12-year surrender, Option B (no spread) rates shown", "High Point 365 Select w/Bonus rider 1.10% fee"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/new-heights-select-12",
    lastRateUpdate: "2026-02-21"
  },

  // ── 6. Nationwide Peak 10 ────────────────────────────────────────────
  {
    id: "nationwide-peak-10",
    carrierId: "nationwide",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Nationwide Peak 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.55,
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
    highlights: ["Fixed account 3.55%", "S&P 500 cap 6.25%, BNP/JP Morgan caps 10.00%", "Strong 2-year participation rates"],
    sourceUrl: "https://www.nationwide.com/personal/investing/annuities/fixed-indexed/types/nationwide-peak-10",
    lastRateUpdate: "2026-02-21"
  },

  // ── 10. F&G Accumulator Plus ─────────────────────────────────────────
  {
    id: "fg-accumulator-plus",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Accumulator Plus",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.75,
    indexStrategies: [
      { indexName: "iShares Core S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "iShares Core S&P 500", creditingMethod: "Biennial Point-to-Point", capRate: 14.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 285, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Balanced Asset 10", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 180, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 220, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 115, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["iShares S&P 500 cap 7.25% (annual), 14.25% (biennial)", "Balanced Asset 5 PR 225/285%, BlackRock MA 180/220% PR", "Fixed 3.75%, no bonus, $10K minimum", "7-year surrender, accumulation-focused"],
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
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Pacific Life official rate sheet - Pacific Index Foundation 2 NEW (rates effective 02/16/2026)',
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.55,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Triggered",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.65
      },
      {
        indexName: "Invesco QQQ Trust",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.55,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "iShares Russell 2000 ETF",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.55,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.55,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Large Cap Intraday VC10",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "SG Nasdaq-100 Edge VC10",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    fixedAccountRate: 3.80,
    incomeRiderAvailable: true,
    highlights: ["6 index strategies + fixed account", "Barclays VC10 and SG Nasdaq Edge uncapped", "QQQ and Russell 2000 options", "MSCI EAFE international exposure"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-22"
  },

  // ── 13. Midland National Endeavor 8 ──────────────────────────────────
  {
    id: "midland-national-endeavor-8",
    carrierId: "midland-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "MNL Endeavor 8",
    surrenderPeriod: 8,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 8.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.30,
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
        capRate: 2.05,
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
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fidelity Multifactor Yield 5% ER",
        creditingMethod: "Biennial Point-to-Point",
        capRate: null,
        participationRate: 205,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 8.00%, Monthly Sum 2.05%", "S&P MARC 5% ER 140% PR, Fidelity MFY 205% PR (biennial)", "8-year surrender, $20K minimum", "Inverse Performance Trigger 9.00%"],
    sourceUrl: "https://www.midlandnational.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 13b. Midland National IndexBuilder 10 ──────────────────────────────
  {
    id: "midland-national-indexbuilder-10",
    carrierId: "midland-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "MNL IndexBuilder 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 14.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.70,
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
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 115,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Fidelity Multifactor Yield 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 115,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["14% upfront bonus (up to 17% with ABR)", "10-year surrender", "Enhanced participation with 0.95% annual charge"],
    sourceUrl: "https://annuityeducator.com/reviews/midland-national-life-insurance-company/fixed-index/mnl-indexbuilder-10-high-band-most-states",
    lastRateUpdate: "2026-02-21"
  },

  // ── 15. American Equity AssetShield 10 ───────────────────────────────
  {
    id: "american-equity-assetshield-10",
    carrierId: "american-equity",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "American Equity AssetShield 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.80,
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
        capRate: 2.00,
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
        participationRate: 40,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 9.25%, Fixed 3.80%", "Growth Accelerator option: S&P cap 11.75% (0.95% fee)", "Performance Trigger 5.75%, Advantage 15% Trigger 8.25%", "10-year surrender, $25K minimum"],
    sourceUrl: "https://annuityeducator.com/reviews/american-equity-investment-life-insurance-company/fixed-index/assetshield-10",
    lastRateUpdate: "2026-02-21"
  },

  // ── 17. Great American Legend 7 ──────────────────────────────────────
  {
    id: "great-american-legend-7",
    carrierId: "great-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Great American Legend 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.15,
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
        indexName: "First Trust Barclays Edge",
        creditingMethod: "Annual Point-to-Point",
        capRate: 14.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "iShares US Real Estate",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "SPDR Gold",
        creditingMethod: "Annual Point-to-Point",
        capRate: 12.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 9.25%, Fixed 4.15%", "First Trust Barclays Edge cap 14.25%", "Real Estate & Gold indexes available", "7-year surrender, $10K minimum"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 18. Great American Safe Return ───────────────────────────────────
  {
    id: "great-american-safe-return",
    carrierId: "great-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Great American Safe Return",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.25,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "iShares US Real Estate", creditingMethod: "Annual Point-to-Point", capRate: 10.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Average DRC", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "First Trust Barclays Edge", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 6.75%, iShares Real Estate cap 10.00%", "First Trust Barclays Edge 145% PR", "Fixed account 4.25% — among highest available", "Income Ascender rider 1.10% fee, $25K minimum"],
    sourceUrl: "https://www.massmutualascend.com/products/fixed-indexed-annuity",
    lastRateUpdate: "2026-02-01"
  },

  // ── 19. Lincoln OptiBlend 10 ─────────────────────────────────────────
  {
    id: "lincoln-optiblend-10",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Lincoln OptiBlend 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.10,
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
        participationRate: 200,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 55,
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
        triggerRate: 7.55
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["6% premium bonus", "Lincoln i4LIFE income rider available"],
    sourceUrl: "https://annuityeducator.com/reviews/lincoln-national-life-insurance-company/fixed-index/lincoln-optiblend-10",
    lastRateUpdate: "2026-02-21"
  },

  // ── 20. Lincoln OptiBlend 7 ──────────────────────────────────────────
  {
    id: "lincoln-optiblend-7",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Lincoln OptiBlend 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.90,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.55, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.30 },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq Privia", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 113, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 8.55% (Band 2), trigger 7.30%", "BlackRock Dynamic Allocation 200% PR", "Fixed account 3.90%", "7-year surrender, no bonus"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 25b. Jackson Income Assurance ──────────────────────────────────────
  {
    id: "jackson-income-assurance",
    carrierId: "jackson-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Jackson Income Assurance",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 8, 7, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.65,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 4.75,
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
        triggerRate: 4.40
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Built-in GMWB income rider (1.10% fee)", "5% premium bonus", "S&P 500 cap 4.75%, Performance Trigger 4.40%"],
    sourceUrl: "https://www.jackson.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 26. Symetra Accumulation Edge ────────────────────────────────────
  {
    id: "symetra-accumulation-edge",
    carrierId: "symetra",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Symetra Edge Elite 5",
    surrenderPeriod: 5,
    surrenderSchedule: [9, 9, 8, 7, 6, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.30,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.25 },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 9.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.75 },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Annual Point-to-Point", capRate: 18.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 220, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Putnam Dynamic Low Volatility", creditingMethod: "Annual Point-to-Point", capRate: 18.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Putnam Dynamic Low Volatility", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Putnam Dynamic Low Volatility", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 265, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["S&P 500 cap 9.25%, Nasdaq-100 cap 9.75%", "JP Morgan Efficiente cap 18%, Putnam cap 18%", "Putnam 2yr PR 265%, JP Morgan 2yr PR 220%", "Fixed 4.30%, 5-year surrender, $25K minimum"],
    sourceUrl: "https://annuityeducator.com/reviews/symetra-life-insurance-company/fixed-index/symetra-edge-elite-5",
    lastRateUpdate: "2026-02-21"
  },

  // ── 29. Delaware Life Target Growth 10 ───────────────────────────────
  {
    id: "delaware-life-target-growth-10",
    carrierId: "delaware-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Delaware Life Target Growth 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 12.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.60,
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
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 55,
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
        triggerRate: 7.25
      },
      {
        indexName: "Goldman Sachs Canopy",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "First Trust Capital Strength Barclays 10%",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 95,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["12% premium bonus", "S&P 500 Bailout cap 9.50%", "Goldman Sachs Canopy 110% PR", "Fixed account 4.60%", "Precision Portfolio option available (higher caps with fee)"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 33. Ameritas Accumulation 7 ──────────────────────────────────────
  {
    id: "ameritas-accumulation-7",
    carrierId: "ameritas",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Ameritas Accumulation 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.85,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Average", capRate: 10.80, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 3.05, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 9.70, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Monthly Average", capRate: 11.80, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 8.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Monthly Average", capRate: 15.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Sector Rotator DRC2 5%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Sector Rotator DRC2 5%", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["S&P 500 cap 9.00%, Russell 2000 cap 9.70%", "MSCI EAFE Monthly Avg 15.50% cap", "Sector Rotator PR 175/225%", "Fixed 4.85%, 7-year surrender, $10K minimum"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 35. Athene Performance Elite Plus 10 ─────────────────────────────
  {
    id: "athene-performance-elite-plus-10",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Athene Performance Elite Plus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 12, 11, 10, 9, 8, 7, 6, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 22.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.90,
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
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BNP Paribas Multi-Asset",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 130,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "AI Powered US Equity",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 107,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 77,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["22% premium bonus — among highest in industry", "S&P cap 5.50% (base), 8.00% (enhanced, 0.95% fee)", "BNP Paribas Multi-Asset 130% PR (base)", "Fixed account 2.90%"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 42. North American Charter Plus 14 ───────────────────────────────
  {
    id: "north-american-charter-plus-14",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "North American Charter Plus 14",
    surrenderPeriod: 14,
    surrenderSchedule: [14, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 75000,
    maximumIssueAge: 75,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 17.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.80,
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
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 20,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P MARC 5% ER",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 90,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Morgan Stanley Dynamic Global Enhanced",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 140,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["17% premium bonus (High Band)", "14-year surrender period", "Morgan Stanley Dynamic Global 140% PR", "S&P MARC 5% ER 90% PR"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 43. Allianz Core Income 7 ────────────────────────────────────────
  {
    id: "allianz-core-income-7",
    carrierId: "allianz-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Allianz Core Income 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.60,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 4.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 4.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 4.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "Annual Point-to-Point", capRate: 3.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "2-Year Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["Income-focused — Core Income Benefit rider 1.25% fee", "S&P 500 cap 4.00%, Russell 2000 cap 4.25%", "Bloomberg 2yr 135% PR, fixed 2.60%", "Low caps reflect built-in income rider cost"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 51. Allianz Benefit Control Annuity ─────────────────────────────
  {
    id: "allianz-benefit-control",
    carrierId: "allianz-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Allianz Benefit Control Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 25.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.50,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 4.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 3.50 },
      { indexName: "BlackRock iBld Claria", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 75, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "2-Year Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Bloomberg US Dynamic Balance II", creditingMethod: "5-Year Point-to-Point", capRate: null, participationRate: 210, spread: 0, floor: 0, isUncapped: true },
      { indexName: "PIMCO Tactical Balanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "PIMCO Tactical Balanced", creditingMethod: "2-Year Point-to-Point", capRate: null, participationRate: 115, spread: 0, floor: 0, isUncapped: true },
      { indexName: "PIMCO Tactical Balanced", creditingMethod: "5-Year Point-to-Point", capRate: null, participationRate: 205, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Futures Daily RC 5%", creditingMethod: "2-Year Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Futures Daily RC 5%", creditingMethod: "5-Year Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["25% PIV premium bonus — #1 selling FIA in market", "Income-focused design (S&P cap 4.00%, fixed 2.50%)", "Bloomberg 5yr 210% PR, PIMCO 5yr 205% PR", "0% allocation charge, S&P Futures 5yr 225% PR"],
    sourceUrl: "https://www.allianzlife.com/what-we-offer/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 53. Athene Performance Elite Plus ────────────────────────────────
  {
    id: "athene-performance-elite-plus",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Athene Performance Elite Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 12, 11, 10, 9, 8, 7, 6, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 16.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.90,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BNP Paribas Multi-Asset", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BNP Paribas Multi-Asset", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 180, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AI Powered US Equity", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 107, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AI Powered US Equity", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq FC", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 77, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq FC", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 FC", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 FC", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 80, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["16% premium bonus — one of the highest available", "S&P 500 cap 5.50% (base), 8.00% (with 0.95% fee)", "BNP Paribas Multi-Asset 130/180% PR (base)", "Fixed 2.90%, MVA, $10K minimum"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 67. Global Atlantic ForeAccumulation II ─────────────────────────
  {
    id: "global-atlantic-foreaccumulation-ii",
    carrierId: "global-atlantic",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Global Atlantic ForeAccumulation II 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.00,
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
        creditingMethod: "Performance Trigger",
        capRate: null,
        participationRate: null,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.50
      },
      {
        indexName: "BlackRock Diversa",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "PIMCO Balanced",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: false,
    highlights: ["Fixed account 4.00%", "BlackRock Diversa 145% PR, PIMCO Balanced 190% PR", "Growth Accelerator option available (1.25% fee)"],
    sourceUrl: "https://professionals.globalatlantic.com/products/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 70. Brighthouse Shield Level Pay Plus ───────────────────────────
  {
    id: "brighthouse-shield-level-pay-plus",
    carrierId: "brighthouse-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Brighthouse Shield Level Pay Plus",
    surrenderPeriod: 10,
    surrenderSchedule: [8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 12.00, participationRate: 100, spread: 0, floor: -10, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 10.00, participationRate: 100, spread: 0, floor: -15, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.50, participationRate: 100, spread: 0, floor: -25, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 14.00, participationRate: 100, spread: 0, floor: -10, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 12.00, participationRate: 100, spread: 0, floor: -15, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: -25, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 13.00, participationRate: 100, spread: 0, floor: -10, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 10.50, participationRate: 100, spread: 0, floor: -15, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 8.00, participationRate: 100, spread: 0, floor: -25, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 12.00, participationRate: 100, spread: 0, floor: -10, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: -15, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: -25, isUncapped: false }
    ],
    incomeRiderAvailable: true,
    highlights: ["RILA — S&P 500 cap 12% (10% buffer), 10% (15% buffer)", "Russell 2000 cap 14% (10% buffer)", "Nasdaq-100 cap 13% (10% buffer)", "SEC EDGAR verified rates (Dec 2024 filing)"],
    lastRateUpdate: "2026-02-01"
  },

  // ── 92. Athene AccuMax 7 ────────────────────────────────────────────
  {
    id: "athene-accumax-7",
    carrierId: "athene",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Athene AccuMax 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.10,
    indexStrategies: [
      { indexName: "AI Powered Multi-Asset", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AI Powered Multi-Asset", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 305, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Shiller Barclays CAPE Allocator 6", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Shiller Barclays CAPE Allocator 6", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 380, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 78, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 (-10% Floor)", creditingMethod: "7-Year Point-to-Point", capRate: null, participationRate: 73, spread: 0, floor: -10, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["Unique 7-year PTP design — Shiller CAPE 380% PR", "AI Powered Multi-Asset 305% PR (7yr)", "No premium bonus, fixed 3.10%", "7-year surrender, $10K minimum"],
    sourceUrl: "https://www.athene.com/products/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 93. North American NAC BenefitSolutions ─────────────────────────
  {
    id: "north-american-nac-benefitsolutions",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "North American NAC BenefitSolutions",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 9, 8, 8, 7, 6, 4, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 5,
    fixedAccountRate: 2.30,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.85, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Transitions 6", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Transitions 6", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["Income-focused with 1.20% rider fee", "S&P 500 cap 5.00%, Monthly Sum 1.85%", "Fidelity MFY 100% PR, MS Dynamic Global 100% PR", "Fixed 2.30%, $20K minimum, 5% free withdrawal"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 94. F&G Safe Income Advantage ───────────────────────────────────
  {
    id: "fg-safe-income-advantage",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Safe Income Advantage",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.50,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 3.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum",
        capRate: 1.20,
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
        triggerRate: 2.25
      },
      {
        indexName: "CIBC Balanced Asset 5",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "BlackRock Market Advantage",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    incomeRiderAvailable: true,
    highlights: ["Income-focused design (S&P cap 3.00%)", "EGMWB rider included (1.15% fee)", "CIBC Balanced Asset 5 PR 120%", "10-year surrender, $10K minimum"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── 95. Lincoln OptiBlend 5 ─────────────────────────────────────────
  {
    id: "lincoln-optiblend-5",
    carrierId: "lincoln-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Lincoln OptiBlend 5",
    surrenderPeriod: 5,
    surrenderSchedule: [9, 8, 7, 6, 5, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.90,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.25 },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Dynamic Allocation", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq Privia", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 110, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["S&P 500 cap 8.50% (Band 2), trigger 7.25%", "BlackRock Dynamic Allocation 200% PR", "Fixed account 3.90%", "5-year surrender — shortest commitment"],
    sourceUrl: "https://www.lincolnfinancial.com/public/individuals/products/annuities/fixedindexedannuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 100. American Equity IncomeShield 10 ────────────────────────────
  {
    id: "american-equity-incomeshield-10",
    carrierId: "american-equity",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "American Equity IncomeShield 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 5000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.50,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 5.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 },
      { indexName: "S&P 500", creditingMethod: "Biennial Point-to-Point", capRate: 12.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Advantage 15%", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.00 },
      { indexName: "BlackRock Adaptive", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 165, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Adaptive", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 245, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Dividend Aristocrats", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Dividend Aristocrats", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Advantage", creditingMethod: "Annual Point-to-Point", capRate: 9.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Advantage", creditingMethod: "Biennial Point-to-Point", capRate: 25.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false }
    ],
    incomeRiderAvailable: true,
    highlights: ["Income-focused — IncomeShield LIBR rider 1.20% fee", "S&P 500 cap 5.75%, Advantage 15% trigger 7.00%", "BlackRock Adaptive 165/245% PR, Dividend Aristocrats 160/225% PR", "Fixed 3.50%, $5K minimum — lowest entry point"],
    sourceUrl: "https://www.american-equity.com/annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── 101. Delaware Life Momentum 10 ──────────────────────────────────
  {
    id: "delaware-life-momentum-10",
    carrierId: "delaware-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "Delaware Life Momentum 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.50,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.30, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100 Volatility Control 12%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Aries", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock US Equity Bitcoin Balanced Risk 12%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 9.30% — strong accumulation", "Bitcoin-linked index: BlackRock BTC Balanced 55% PR", "Barclays Aries 95% PR, Nasdaq-100 Vol Control 70% PR", "Fixed 4.50%, no bonus, $25K minimum"],
    lastRateUpdate: "2026-02-01"
  },

  // ── SILAC Insurance Company ─────────────────────────────────────────────

  // ── SILAC Teton 5 (Accumulation) ───────────────────────────────────────
  {
    id: "silac-teton-5",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 50,
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
        participationRate: 90,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 175,
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
        fixedRate: 4.00
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton 7 (Accumulation) ───────────────────────────────────────
  {
    id: "silac-teton-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 50,
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
        participationRate: 90,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 175,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton 10 (Accumulation) ──────────────────────────────────────
  {
    id: "silac-teton-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 50,
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
        participationRate: 90,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 67,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 175,
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
      "No premium bonus — highest raw cap and participation rates",
      "Multiple uncapped strategies over 185% participation",
      "4.50% fixed rate option"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton 14 (Accumulation) ──────────────────────────────────────
  {
    id: "silac-teton-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 7.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 50,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 185,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 175,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 175,
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
      "14-year term — longest accumulation period",
      "Uncapped volatility-controlled index strategies",
      "No premium bonus for higher crediting rates"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton Bonus 5 (Accumulation with Bonus) ─────────────────────
  {
    id: "silac-teton-bonus-5",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 5.75,
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
        participationRate: 52,
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
        participationRate: 65,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton Bonus 7 (Accumulation with Bonus) ─────────────────────
  {
    id: "silac-teton-bonus-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 6.00,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton Bonus 10 (Accumulation with Bonus) ────────────────────
  {
    id: "silac-teton-bonus-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 6.00,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Teton Bonus 14 (Accumulation with Bonus) ────────────────────
  {
    id: "silac-teton-bonus-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 150,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 140,
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
        fixedRate: 3.00
      }
    ],
    incomeRiderAvailable: false,
    highlights: [
      "15% premium bonus on 14-year term",
      "Longest accumulation window",
      "Highest surrender charges (up to 14.75%)"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali 7 (Accumulation + Lifetime Income) ───────────────────
  {
    id: "silac-denali-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 75,
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
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 195,
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
      "Built-in lifetime withdrawal benefit at no fee",
      "200%+ participation on multiple volatility-controlled indexes",
      "Wellness withdrawal doubles income for up to 5 years",
      "No annual contract fees"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali 10 (Accumulation + Lifetime Income) ──────────────────
  {
    id: "silac-denali-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
      "Built-in lifetime withdrawal benefit at no fee",
      "5.25% fixed rate option",
      "200%+ participation on volatility-controlled indexes",
      "Wellness withdrawal doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali 14 (Accumulation + Lifetime Income) ──────────────────
  {
    id: "silac-denali-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
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
        fixedRate: 5.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "14-year term with built-in lifetime income",
      "No annual fees on base product",
      "Uncapped volatility-controlled indexes above 200% participation"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali Bonus 7 (Accumulation + Bonus + Lifetime Income) ─────
  {
    id: "silac-denali-bonus-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 6.25,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 42,
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
        participationRate: 155,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 145,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 150,
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
        fixedRate: 3.25
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "10% premium bonus with built-in lifetime income",
      "No annual fees on base product",
      "Wellness withdrawal doubles income for up to 5 years"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali Bonus 10 (Accumulation + Bonus + Lifetime Income) ────
  {
    id: "silac-denali-bonus-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Denali Bonus 14 (Accumulation + Bonus + Lifetime Income) ────
  {
    id: "silac-denali-bonus-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 7.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 170,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 160,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 165,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Evolve 7 (Income-Focused FIA) ───────────────────────────────
  {
    id: "silac-evolve-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 8.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 55,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "S&P 500 Duo Swift",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 75,
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
        participationRate: 190,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 195,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Evolve 10 (Income-Focused FIA) ──────────────────────────────
  {
    id: "silac-evolve-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Evolve 14 (Income-Focused FIA) ──────────────────────────────
  {
    id: "silac-evolve-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 9.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 225,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 210,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 215,
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
        fixedRate: 5.00
      }
    ],
    incomeRiderAvailable: true,
    highlights: [
      "14-year income-focused FIA with 5% premium bonus",
      "6% guaranteed rollup PLUS positive interest credits",
      "Longest deferral period for maximum income accumulation"
    ],
    sourceUrl: "https://www.silacins.com/products/annuities",
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega 7 (Legacy / Wealth Transfer) ──────────────────────────
  {
    id: "silac-vega-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 4.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 32,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 115,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega 10 (Legacy / Wealth Transfer) ─────────────────────────
  {
    id: "silac-vega-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 4.75,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 32,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 110,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 115,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega 14 (Legacy / Wealth Transfer) ─────────────────────────
  {
    id: "silac-vega-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega Bonus 7 (Legacy / Wealth Transfer with Bonus) ─────────
  {
    id: "silac-vega-bonus-7",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 5.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 35,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Average with Participation Rate",
        capRate: null,
        participationRate: 60,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Monthly Sum with Cap",
        capRate: 2.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 125,
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
        participationRate: 115,
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
        participationRate: 120,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Bloomberg Versa 10",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 57,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega Bonus 10 (Legacy / Wealth Transfer with Bonus) ────────
  {
    id: "silac-vega-bonus-10",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        participationRate: 100,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── SILAC Vega Bonus 14 (Legacy / Wealth Transfer with Bonus) ────────
  {
    id: "silac-vega-bonus-14",
    carrierId: "silac",
    ratesVerified: true,
    lastVerifiedDate: "2025-12-10",
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
        capRate: 3.50,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500 RavenPack AI",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 92,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Barclays Atlas 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 87,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "Nasdaq Generations 5",
        creditingMethod: "Annual Point-to-Point with Participation Rate",
        capRate: null,
        participationRate: 90,
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
    lastRateUpdate: "2025-12-10"
  },

  // ── F&G Accelerator Plus 10 ──────────────────────────────────────────
  {
    id: "fg-accelerator-plus-10",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Accelerator Plus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [14, 13, 12, 11, 10, 8, 6, 4, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 11.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.75,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 45, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.00 },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 210, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BlackRock Market Advantage", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley US Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["11% premium bonus", "S&P 500 cap 7.25% (base), 10.25% (enhanced)", "CIBC Balanced Asset 5 PR 210% (biennial)", "EGMWB rider 0.95% fee"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 7 (Enhancement) ─────────────────────────────
  {
    id: "fg-prosperity-elite-7-enhancement",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Prosperity Elite 7 (Enhancement)",
    surrenderPeriod: 7,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 4.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.75,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.25 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 7.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 255, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 190, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["4% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.25%, Gold cap 7.75%", "GS Global Factor 145/255% PR, CIBC 140/240% PR", "Fixed 3.75%, 7-year surrender"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 10 (Enhancement) ────────────────────────────
  {
    id: "fg-prosperity-elite-10-enhancement",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Prosperity Elite 10 (Enhancement)",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 6.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.75,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.30, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.50 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 8.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 260, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 145, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 245, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 195, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["6% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.50%, Gold cap 8.25%", "GS Global Factor 150/260% PR, CIBC 145/245% PR", "Fixed 3.75%, 10-year surrender"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── F&G Prosperity Elite 14 (Enhancement) ────────────────────────────
  {
    id: "fg-prosperity-elite-14-enhancement",
    carrierId: "fandg",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "F&G Prosperity Elite 14 (Enhancement)",
    surrenderPeriod: 14,
    surrenderSchedule: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 7.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.75,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.35, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.75 },
      { indexName: "Gold", creditingMethod: "Annual Point-to-Point", capRate: 8.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "GS Global Factor", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Global Factor", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 265, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "CIBC Balanced Asset 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Trailblazer Sectors 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 200, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["7% premium bonus, GMDB rider 0.60% fee", "S&P 500 cap 6.75%, Gold cap 8.50%", "GS Global Factor 155/265% PR, CIBC 150/250% PR", "Fixed 3.75%, 14-year surrender — highest PRs"],
    sourceUrl: "https://www.fglife.com/annuities/fia",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American PrimePath Pro 10 ────────────────────────────────
  {
    id: "nac-primepath-pro-10",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "NAC PrimePath Pro 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 10, 10, 10, 9, 8, 7, 6, 4, 0],
    minimumPremium: 20000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 7,
    fixedAccountRate: 3.15,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.20, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 25, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Contribution", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Contribution", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 160, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 225, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 190, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 7.25%, Monthly Sum 2.20%", "MS Dynamic Global Enhanced 170/240% PR", "S&P MARC 5% Enhanced 160/225% PR", "Fixed 3.15%, 7% free withdrawal, $20K minimum"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── North American VersaChoice ──────────────────────────────────────
  {
    id: "nac-versachoice",
    carrierId: "north-american",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-21",
    name: "NAC VersaChoice",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 9, 8, 8, 7, 6, 4, 2, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 8.80, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 1.90, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 30, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Dynamic Global", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Enhanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Enhanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P MARC 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 170, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Fidelity Multifactor Yield 5% ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 8.80% — highest in NAC lineup", "Fidelity MFY 170/250% PR, MS Enhanced 175/250% PR", "Fixed 3.10%, no bonus, $20K minimum", "Versatile accumulation + income product"],
    sourceUrl: "https://www.northamericancompany.com/annuities/fixed-index-annuities",
    lastRateUpdate: "2026-02-01"
  },

  // ── Pacific Index Foundation (10yr) — from official rate sheet 02/16/2026 ──
  {
    id: "pacific-index-foundation-10",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Pacific Life official rate sheet - Pacific Index Foundation (rates effective 02/16/2026)',
    name: "Pacific Index Foundation (10-Year)",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 0.0,
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
        indexName: "S&P 500",
        creditingMethod: "Performance Triggered",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.50
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 6.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Performance Triggered",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 6.25
      }
    ],
    fixedAccountRate: 3.50,
    incomeRiderAvailable: true,
    highlights: ["Pacific Life A+ rated carrier", "Simple 2-index design (S&P 500 + MSCI EAFE)", "Performance Triggered option", "Low minimum premium", "Fixed account at 3.50%"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-22"
  },

  // ── Pacific Index Foundation 2 (10yr) — from official rate sheet 02/16/2026 ──
  {
    id: "pacific-index-foundation-2-10yr",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Pacific Life official rate sheet - Pacific Index Foundation 2 NEW (rates effective 02/16/2026)',
    name: "Pacific Index Foundation 2 (10-Year)",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.5,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    indexStrategies: [
      {
        indexName: "S&P 500",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Invesco QQQ Trust",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "iShares Russell 2000 ETF",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "MSCI EAFE",
        creditingMethod: "Annual Point-to-Point",
        capRate: 7.60,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "Barclays Large Cap Intraday VC10",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      },
      {
        indexName: "SG Nasdaq-100 Edge VC10",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    fixedAccountRate: 3.85,
    incomeRiderAvailable: true,
    highlights: ["Pacific Life A+ rated carrier", "6 index strategies including QQQ and Russell 2000", "Barclays VC10 and SG Nasdaq Edge uncapped strategies", "10-year higher cap rates", "MSCI EAFE international exposure"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-22"
  },

  // ── Pacific Index Edge (10yr) — from official rate sheet 02/16/2026 ──
  {
    id: "pacific-index-edge-10",
    carrierId: "pacific-life",
    ratesVerified: true,
    lastVerifiedDate: '2026-02-22',
    verificationSource: 'Pacific Life official rate sheet - Pacific Index Edge (rates effective 02/16/2026)',
    name: "Pacific Index Edge (10-Year)",
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
        capRate: 10.00,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false
      },
      {
        indexName: "S&P 500",
        creditingMethod: "Performance Triggered",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: false,
        triggerRate: 8.50
      },
      {
        indexName: "BlackRock Endura Index",
        creditingMethod: "Annual Point-to-Point",
        capRate: null,
        participationRate: 100,
        spread: 0,
        floor: 0,
        isUncapped: true
      }
    ],
    fixedAccountRate: 4.75,
    incomeRiderAvailable: true,
    highlights: ["Pacific Life A+ rated carrier", "Highest S&P 500 cap in Pacific Life lineup at 10.00%", "BlackRock Endura uncapped strategy", "High 4.75% fixed account rate", "Performance Triggered alternative"],
    sourceUrl: "https://www.annuities.pacificlife.com/home/annuities/fixed-annuities.html",
    lastRateUpdate: "2026-02-22"
  },
  // ── 66. Protective Asset Builder II (10-Year) ──
  {
    id: "protective-asset-builder-ii-10",
    carrierId: "protective-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Protective Asset Builder II 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.55,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.40, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Guaranteed)", capRate: 7.15, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 42, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 6.20 },
      { indexName: "J.P. Morgan Mojave", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Citi Flexible Allocation 6 ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 180, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["S&P 500 cap up to 7.40% (or 7.15% guaranteed for full term)", "J.P. Morgan Mojave 140% participation uncapped", "Citi Flexible Allocation 180% biennial participation", "MVA applies; $10K minimum premium"],
    sourceUrl: "https://allstate.protective.com/retirement/indexed-annuities/protective-asset-builder-ii",
    lastRateUpdate: "2026-02-27"
  },
  // ── 67. Protective Indexed Annuity II (10-Year) ──
  {
    id: "protective-indexed-annuity-ii-10",
    carrierId: "protective-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Protective Indexed Annuity II 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.10,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Tiered Annual", capRate: null, participationRate: 100, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.10 }
    ],
    incomeRiderAvailable: true,
    highlights: ["Optional SecurePay SE rider (0.85% annual cost)", "SecurePay provides 7% simple interest rollup for up to 10 years", "Nursing facility and terminal illness waivers included", "Rates set every 2 weeks by Protective"],
    sourceUrl: "https://schwab.protective.com/annuities/indexed-annuities/protective-indexed-annuity-ii",
    lastRateUpdate: "2026-02-27"
  },
  // ── 68. Security Benefit TopRidge Bonus Annuity ──
  {
    id: "security-benefit-topridge-bonus",
    carrierId: "security-benefit",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Security Benefit TopRidge Bonus Annuity",
    surrenderPeriod: 10,
    surrenderSchedule: [12, 12, 11, 11, 10, 9, 8, 7, 6, 4, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 20.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.25,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 6.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 38, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 6.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "MSCI EAFE", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Russell 2000", creditingMethod: "Annual Point-to-Point", capRate: 6.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Morgan Stanley Global Equity Allocator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 105, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Morgan Stanley Global Equity Allocator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 150, spread: 0, floor: 0, isUncapped: true },
      { indexName: "MSCI BofA US Dualcast", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 90, spread: 0, floor: 0, isUncapped: true },
      { indexName: "MSCI BofA US Dualcast", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 125, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG AI Navigator", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 80, spread: 0, floor: 0, isUncapped: true },
      { indexName: "SG AI Navigator", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 120, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["20% premium bonus on first-year premiums", "12 index strategies across 6 indices including international & small cap", "Nursing home and terminal illness waivers", "MVA applies during surrender period"],
    sourceUrl: "https://www.securitybenefit.com/product/topridge-bonus-annuity",
    lastRateUpdate: "2026-02-27"
  },
  // ── 69. American National Rate Certainty 7 ──
  {
    id: "american-national-rate-certainty-7",
    carrierId: "american-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "American National Rate Certainty 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.65,
    indexStrategies: [
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Enhanced Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 8.95 },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.20 },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Protected Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.70 }
    ],
    incomeRiderAvailable: false,
    highlights: ["Index parameters GUARANTEED for full 7-year contract term", "Enhanced Performance Trigger 8.95%", "Protected Performance Trigger: 2% fixed floor + 5.70% trigger", "Terminal illness, disability, and confinement waivers"],
    sourceUrl: "https://www.americannational.com/home/insurance/annuities",
    lastRateUpdate: "2026-02-27"
  },
  // ── 70. American National Rate Certainty 10 ──
  {
    id: "american-national-rate-certainty-10",
    carrierId: "american-national",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "American National Rate Certainty 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0],
    minimumPremium: 10000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.65,
    indexStrategies: [
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Enhanced Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 9.50 },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.45 },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Protected Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 5.70 }
    ],
    incomeRiderAvailable: false,
    highlights: ["Index parameters GUARANTEED for full 10-year contract term", "Enhanced Performance Trigger 9.50% — highest in class", "Protected Performance Trigger: 2% fixed floor + 5.70% trigger", "Unique guarantee — rates locked for full 10 years"],
    sourceUrl: "https://www.americannational.com/home/insurance/annuities",
    lastRateUpdate: "2026-02-27"
  },
  // ── 71. Integrity Life Indextra 7 ──
  {
    id: "integrity-indextra-7",
    carrierId: "integrity-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-27",
    name: "Integrity Life Indextra 7",
    surrenderPeriod: 7,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 0],
    minimumPremium: 15000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.05,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 7.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Cap Lock)", capRate: 6.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.15 },
      { indexName: "J.P. Morgan Strategic Balanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 112, spread: 0, floor: 0, isUncapped: true },
      { indexName: "J.P. Morgan Strategic Balanced", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 155, spread: 0, floor: 0, isUncapped: true },
      { indexName: "J.P. Morgan Strategic Balanced", creditingMethod: "Triennial Point-to-Point", capRate: null, participationRate: 185, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Momentum Builder Multi-Asset", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 135, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Momentum Builder Multi-Asset", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 195, spread: 0, floor: 0, isUncapped: true },
      { indexName: "GS Momentum Builder Multi-Asset", creditingMethod: "Triennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["S&P 500 cap 7.25% with 7.15% performance trigger", "GS Momentum Builder 250% participation on 3-year term (uncapped)", "4.05% fixed account rate — one of the highest", "Optional GLWB rider (0.95% annual cost)", "107% Guaranteed Minimum Account Value"],
    sourceUrl: "https://www.westernsouthern.com/distributors/products/annuities/indexed-annuities",
    lastRateUpdate: "2026-02-27"
  },

  // ── 72. Sagicor Sage Accumulator 5 ──
  {
    id: "sagicor-sage-accumulator-5",
    carrierId: "sagicor",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Sagicor Sage Accumulator 5",
    surrenderPeriod: 5,
    surrenderSchedule: [9, 8, 7, 6, 5, 0],
    minimumPremium: 20000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 5.00,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 10.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "iShares MSCI EAFE ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "iShares MSCI Emerging Markets ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 60, spread: 0, floor: 0, isUncapped: true },
      { indexName: "iShares ESG Aware MSCI USA ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 51, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["10.50% S&P 500 cap rate — among the highest for 5-year products", "5.00% fixed account rate", "International index exposure via iShares EAFE (65%) and Emerging Markets (60%)", "No annual fees or contract charges", "ESG-aware index option available"],
    sourceUrl: "https://myannuitystore.com/annuity-rates/fixed-index-annuity-rates/",
    lastRateUpdate: "2026-02-28"
  },

  // ── 73. Sagicor Sage Accumulator 10 ──
  {
    id: "sagicor-sage-accumulator-10",
    carrierId: "sagicor",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Sagicor Sage Accumulator 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 90,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 5.00,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 10.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 56, spread: 0, floor: 0, isUncapped: true },
      { indexName: "iShares MSCI EAFE ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 64, spread: 0, floor: 0, isUncapped: true },
      { indexName: "iShares MSCI Emerging Markets ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 57, spread: 0, floor: 0, isUncapped: true },
      { indexName: "iShares ESG Aware MSCI USA ETF", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 51, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["10.00% S&P 500 cap rate on 10-year term", "5.00% fixed account rate", "Broad international diversification via iShares ETFs", "No annual fees or contract charges", "Market value adjustment applies"],
    sourceUrl: "https://annuityeducator.com/reviews/sagicor-life-insurance-company/fixed-index/sage-accumulator-10-fia",
    lastRateUpdate: "2026-02-28"
  },

  // ── 74. Corebridge Power 5 Protector ──
  {
    id: "corebridge-power-5-protector",
    carrierId: "corebridge-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Corebridge Power 5 Protector",
    surrenderPeriod: 5,
    surrenderSchedule: [8, 7, 6, 5, 4, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.30,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 55, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.40 },
      { indexName: "S&P 500", creditingMethod: "5-Year Point-to-Point", capRate: 65.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "PIMCO Global Optima", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 95, spread: 0, floor: 0, isUncapped: true },
      { indexName: "ML Strategic Balanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AQR DynamiQ Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 235, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["9.50% S&P 500 annual cap with 7.40% performance trigger", "65% S&P 500 5-year point-to-point cap", "AQR DynamiQ Allocation 235% uncapped participation", "4.30% fixed account rate", "Short 5-year surrender period with no income rider fee"],
    sourceUrl: "https://annuityeducator.com/reviews/american-general-life-insurance-company/fixed-index/power-5-protector",
    lastRateUpdate: "2026-02-28"
  },

  // ── 75. Corebridge Power 10 Protector Plus Income ──
  {
    id: "corebridge-power-10-protector-plus-income",
    carrierId: "corebridge-financial",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Corebridge Power 10 Protector Plus Income",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 2.65,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 4.90, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 18, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 4.15 },
      { indexName: "PIMCO Global Optima", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 34, spread: 0, floor: 0, isUncapped: true },
      { indexName: "ML Strategic Balanced", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 47, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AQR DynamiQ Allocation", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 123, spread: 0, floor: 0, isUncapped: true },
      { indexName: "AQR DynamiQ Allocation", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 168, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["Lifetime Income Choice rider available (1.10% annual fee)", "AQR DynamiQ Allocation 123% annual / 168% biennial participation (uncapped)", "10% annual penalty-free withdrawal", "87.5% minimum guaranteed surrender value", "Issued by American General Life Insurance Company (Corebridge)"],
    sourceUrl: "https://annuityeducator.com/reviews/american-general-life-insurance-company/fixed-index/power-10-protector-plus-income",
    lastRateUpdate: "2026-02-28"
  },

  // ── 76. Ibexis FIA Plus 10 ──
  {
    id: "ibexis-fia-plus-10",
    carrierId: "ibexis",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Ibexis FIA Plus 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 82,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.50,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (0% Floor)", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (-5% Floor)", capRate: 12.75, participationRate: 100, spread: 0, floor: -5, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (-10% Floor)", capRate: 16.50, participationRate: 100, spread: 0, floor: -10, isUncapped: false },
      { indexName: "HSBC AI Global Tactical", creditingMethod: "Annual Point-to-Point (0% Floor)", capRate: null, participationRate: 122, spread: 0, floor: 0, isUncapped: true },
      { indexName: "HSBC AI Global Tactical", creditingMethod: "Annual Point-to-Point (-5% Floor)", capRate: null, participationRate: 171, spread: 0, floor: -5, isUncapped: true },
      { indexName: "BofA U.S. Strength", creditingMethod: "Annual Point-to-Point (0% Floor)", capRate: null, participationRate: 106, spread: 0, floor: 0, isUncapped: true },
      { indexName: "BofA U.S. Strength", creditingMethod: "Annual Point-to-Point (-5% Floor)", capRate: null, participationRate: 151, spread: 0, floor: -5, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["Unique adjustable floor structure (-2.5%, -5%, -10%, -15%)", "S&P 500 cap up to 20.25% with -15% floor", "HSBC AI Global Tactical uncapped 122%+ participation", "Bailout provision if S&P 500 cap falls below declared bailout rate", "4.50% fixed account rate with annual declared rate option"],
    sourceUrl: "https://annuityeducator.com/reviews/ibexis-life-annuity-insurance-company/fixed-index/fia-plus-10",
    lastRateUpdate: "2026-02-28"
  },

  // ── 77. Ibexis WealthDefender 10 ──
  {
    id: "ibexis-wealthdefender-10",
    carrierId: "ibexis",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Ibexis WealthDefender 10",
    surrenderPeriod: 10,
    surrenderSchedule: [9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 25000,
    maximumIssueAge: 82,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.60,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Cap with Bailout)", capRate: 9.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Nasdaq-100 Engle 10%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 93, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100 Engle 10%", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 130, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Tactical Growth", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 96, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Tactical Growth", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["9.25% S&P 500 cap with bailout provision for rate protection", "Nasdaq-100 Engle 10% index with 130% biennial participation (uncapped)", "Barclays Tactical Growth 140% biennial participation (uncapped)", "4.60% fixed account rate", "Guaranteed participation rates available for full withdrawal charge period"],
    sourceUrl: "https://annuityeducator.com/reviews/ibexis-life-annuity-insurance-company/fixed-index/wealthdefender-10",
    lastRateUpdate: "2026-02-28"
  },

  // ── 78. Symetra Edge Elite 7 ──
  {
    id: "symetra-edge-elite-7",
    carrierId: "symetra",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Symetra Edge Elite 7",
    surrenderPeriod: 7,
    surrenderSchedule: [8, 8, 7, 6, 5, 4, 3, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 4.30,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point", capRate: 9.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 50, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 70, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.25 },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point", capRate: 9.75, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Nasdaq-100", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 7.75 },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Annual Point-to-Point", capRate: 18.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 175, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JP Morgan ETF Efficiente 5", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 260, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Putnam Dynamic Low Volatility ER", creditingMethod: "Annual Point-to-Point", capRate: 18.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Putnam Dynamic Low Volatility ER", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 220, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Putnam Dynamic Low Volatility ER", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 320, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["Putnam Dynamic Low Vol 320% biennial participation (uncapped)", "JP Morgan ETF Efficiente 5 — 260% biennial participation (uncapped)", "9.25% S&P 500 cap with 7.25% performance trigger", "9.75% Nasdaq-100 cap with 7.75% performance trigger", "97% Guardrail protection on enhanced participation strategies"],
    sourceUrl: "https://annuityeducator.com/reviews/symetra-life-insurance-company/fixed-index/symetra-edge-elite-7",
    lastRateUpdate: "2026-02-28"
  },

  // ── 79. GILICO WealthChoice 10 ──
  {
    id: "gilico-wealthchoice-10",
    carrierId: "gilico",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "GILICO WealthChoice 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 20000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 5.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 5.00,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Cap with Bailout)", capRate: 10.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 40, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Monthly Sum", capRate: 2.25, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Performance Trigger", capRate: null, participationRate: null, spread: 0, floor: 0, isUncapped: false, triggerRate: 6.70 },
      { indexName: "S&P 500 Dynamic Intraday TCA", creditingMethod: "Annual Point-to-Point", capRate: 11.00, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "Horizon Ascend 5%", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 140, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Barclays Global Quality", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 165, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["5% premium bonus on 10-year term", "10.00% S&P 500 cap with bailout provision", "S&P 500 Dynamic Intraday TCA 11.00% cap", "Barclays Global Quality 165% uncapped participation", "Optional GLWB rider (0.95% annual fee)"],
    sourceUrl: "https://annuityeducator.com/reviews/guaranty-income-life-insurance-company/fixed-index/wealthchoice-10-1",
    lastRateUpdate: "2026-02-28"
  },

  // ── 80. Delaware Life Peak 10 ──
  {
    id: "delaware-life-peak-10",
    carrierId: "delaware-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Delaware Life Peak 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0],
    minimumPremium: 25000,
    maximumIssueAge: 85,
    guaranteedMinimumRate: 1.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 3.95,
    indexStrategies: [
      { indexName: "Avg Daily Risk Control", creditingMethod: "Annual Point-to-Point", capRate: 9.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "AB Growth & Value", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 240, spread: 0, floor: 0, isUncapped: true },
      { indexName: "JPM Cycle", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 250, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Avg Daily Risk Control", creditingMethod: "Biennial Point-to-Point", capRate: null, participationRate: 205, spread: 0, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: false,
    highlights: ["JPM Cycle 250% biennial participation (uncapped)", "AB Growth & Value 240% biennial participation (uncapped)", "9.50% annual cap on Avg Daily Risk Control index", "1.00% minimum guaranteed rate on 87.5% of premium", "3.95% fixed account rate"],
    sourceUrl: "https://myannuitystore.com/annuity-rates/fixed-index-annuity-rates/",
    lastRateUpdate: "2026-02-28"
  },

  // ── 81. Nassau Personal Income Annuity 10 ──
  {
    id: "nassau-personal-income-annuity-10",
    carrierId: "nassau-life",
    ratesVerified: true,
    lastVerifiedDate: "2026-02-28",
    name: "Nassau Personal Income Annuity 10",
    surrenderPeriod: 10,
    surrenderSchedule: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    minimumPremium: 15000,
    maximumIssueAge: 80,
    guaranteedMinimumRate: 0.0,
    premiumBonus: 0.0,
    freeWithdrawalPercent: 10,
    fixedAccountRate: 1.50,
    indexStrategies: [
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Cap)", capRate: 4.50, participationRate: 100, spread: 0, floor: 0, isUncapped: false },
      { indexName: "S&P 500", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 25, spread: 0, floor: 0, isUncapped: true },
      { indexName: "S&P 500", creditingMethod: "Biennial Point-to-Point (Participation)", capRate: null, participationRate: 41, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Nasdaq-100", creditingMethod: "Annual Point-to-Point (Participation)", capRate: null, participationRate: 22, spread: 0, floor: 0, isUncapped: true },
      { indexName: "Smart Passage SG", creditingMethod: "Sunrise Annual Point-to-Point", capRate: null, participationRate: 65, spread: 0, floor: 0, isUncapped: true },
      { indexName: "UBS Tactical Multi-Asset", creditingMethod: "Annual Point-to-Point", capRate: null, participationRate: 100, spread: 4.75, floor: 0, isUncapped: true }
    ],
    incomeRiderAvailable: true,
    highlights: ["Mandatory income rider (0.95% annual fee) with two strategy options", "Income Strategy: Tomorrow offers 14% simple annual growth on income base for 10 years", "Income Strategy: Today offers 30%-45% initial bonus on income base", "16 indexed accounts across S&P 500, Nasdaq-100, Smart Passage SG, UBS Tactical", "$15,000 minimum premium — one of the lowest in class"],
    sourceUrl: "https://annuityrateshq.com/annuity-reviews/nassau-personal-income-indexed-annuity-review",
    lastRateUpdate: "2026-02-28"
  }
];
