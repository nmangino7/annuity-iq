/**
 * Calculate benefit base after deferral period
 */
export function calcBenefitBase(premium, rollupRate, rollupType, years) {
  if (rollupType === 'Compound') {
    return premium * Math.pow(1 + rollupRate / 100, years);
  }
  // Simple
  return premium * (1 + (rollupRate / 100) * years);
}

/**
 * Calculate annual income from a GLWB rider
 */
export function calcAnnualIncome(benefitBase, withdrawalRate) {
  return benefitBase * (withdrawalRate / 100);
}

/**
 * Get withdrawal rate for a given age from the withdrawal schedule
 */
export function getWithdrawalRate(rates, age) {
  if (age >= 80) return rates['80+'] || rates['80+'] || 0;
  if (age >= 75) return rates['75-79'] || 0;
  if (age >= 70) return rates['70-74'] || 0;
  if (age >= 65) return rates['65-69'] || 0;
  if (age >= 60) return rates['60-64'] || 0;
  return rates['55-59'] || rates['50-54'] || 0;
}

/**
 * Full income projection over time
 */
export function incomeProjection({ premium, purchaseAge, incomeStartAge, rider, lifeType = 'single', estimatedGrowthRate = 4 }) {
  const years = [];
  const maxAge = 95;
  const rollupYears = Math.min(incomeStartAge - purchaseAge, rider.rollUp.maxYears || 99);
  const rates = rider.withdrawalRates[lifeType] || rider.withdrawalRates.single;
  const riderFeeRate = rider.riderFee / 100;

  let accountValue = premium;
  let benefitBase = premium;
  let totalIncome = 0;
  let annualIncome = 0;
  let incomeStarted = false;

  for (let age = purchaseAge; age <= maxAge; age++) {
    const year = age - purchaseAge;

    if (!incomeStarted && age < incomeStartAge) {
      // Deferral period
      const deferralYear = year;
      if (deferralYear < rollupYears) {
        benefitBase = calcBenefitBase(premium, rider.rollUp.rate, rider.rollUp.type, deferralYear + 1);
      }
      // Account value grows by estimated rate minus rider fee
      accountValue = accountValue * (1 + estimatedGrowthRate / 100) - (accountValue * riderFeeRate);
      accountValue = Math.max(0, accountValue);
    } else {
      if (!incomeStarted) {
        incomeStarted = true;
        const wdRate = getWithdrawalRate(rates, age);
        annualIncome = calcAnnualIncome(benefitBase, wdRate);
      }
      totalIncome += annualIncome;
      accountValue = accountValue * (1 + estimatedGrowthRate / 100) - annualIncome - (accountValue * riderFeeRate);
      accountValue = Math.max(0, accountValue);
    }

    years.push({
      age,
      year,
      accountValue: Math.round(accountValue),
      benefitBase: Math.round(benefitBase),
      annualIncome: incomeStarted ? Math.round(annualIncome) : 0,
      totalIncome: Math.round(totalIncome),
      phase: incomeStarted ? 'income' : 'deferral'
    });
  }

  return years;
}

/**
 * Calculate percentile rank within an array of values
 */
export function percentileRank(value, allValues) {
  const sorted = [...allValues].sort((a, b) => a - b);
  const below = sorted.filter(v => v < value).length;
  return Math.round((below / sorted.length) * 100);
}

/**
 * Calculate distribution stats for an array of values
 */
export function distributionStats(values) {
  const sorted = [...values].filter(v => v != null).sort((a, b) => a - b);
  const n = sorted.length;
  if (n === 0) return null;
  return {
    min: sorted[0],
    q1: sorted[Math.floor(n * 0.25)],
    median: sorted[Math.floor(n * 0.5)],
    q3: sorted[Math.floor(n * 0.75)],
    max: sorted[n - 1],
    mean: sorted.reduce((s, v) => s + v, 0) / n,
    count: n
  };
}
