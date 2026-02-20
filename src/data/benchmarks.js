export const benchmarks = {
  fia: {
    sp500CapRate: { min: 4.00, q1: 6.50, median: 8.25, q3: 9.50, max: 10.75, mean: 7.80 },
    participationRate: { min: 25, q1: 50, median: 100, q3: 200, max: 460, mean: 120 },
    spread: { min: 0, q1: 0, median: 0.5, q3: 1.5, max: 3.0, mean: 0.7 },
    surrenderPeriod: { min: 5, q1: 7, median: 10, q3: 12, max: 14, mean: 9.2 },
    premiumBonus: { min: 0, q1: 0, median: 5, q3: 10, max: 25, mean: 5.5 },
    guaranteedMinRate: { min: 0, q1: 0, median: 0.5, q3: 1.0, max: 3.0, mean: 0.45 }
  },
  glwb: {
    rollUpRate: { min: 4.0, q1: 5.5, median: 7.0, q3: 8.5, max: 10.0, mean: 6.8 },
    withdrawalRate65: { min: 4.0, q1: 4.75, median: 5.25, q3: 5.75, max: 7.0, mean: 5.15 },
    riderFee: { min: 0.0, q1: 0.85, median: 1.10, q3: 1.35, max: 1.75, mean: 1.05 },
    withdrawalRate70: { min: 4.5, q1: 5.25, median: 5.75, q3: 6.25, max: 7.5, mean: 5.65 }
  },
  iul: {
    sp500CapRate: { min: 8.0, q1: 9.50, median: 10.50, q3: 11.50, max: 12.50, mean: 10.20 },
    participationRate: { min: 50, q1: 100, median: 130, q3: 175, max: 200, mean: 130 },
    illustratedRate: { min: 5.50, q1: 6.00, median: 6.47, q3: 6.75, max: 7.00, mean: 6.35 },
    fixedAccountRate: { min: 2.5, q1: 3.0, median: 3.5, q3: 4.5, max: 5.5, mean: 3.6 }
  },
  asOfDate: '2026-02-01'
};
