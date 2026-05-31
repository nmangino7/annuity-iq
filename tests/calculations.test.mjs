import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  calcBenefitBase, calcAnnualIncome, getWithdrawalRate, distributionStats, percentileRank,
} from '../src/utils/calculations.js';

test('calcBenefitBase: simple roll-up', () => {
  // 100k, 7% simple, 10 years => 100k * (1 + 0.07*10) = 170k (round away float noise)
  assert.equal(Math.round(calcBenefitBase(100000, 7, 'Simple', 10)), 170000);
});

test('calcBenefitBase: compound roll-up', () => {
  // 100k, 7% compound, 10 years => 100k * 1.07^10
  assert.equal(Math.round(calcBenefitBase(100000, 7, 'Compound', 10)), 196715);
});

test('calcAnnualIncome', () => {
  assert.equal(calcAnnualIncome(200000, 5.5), 11000);
});

test('getWithdrawalRate: picks the correct age band', () => {
  const rates = { '55-59': 3.5, '60-64': 4.5, '65-69': 5.25, '70-74': 5.75, '75-79': 6.25, '80+': 7.0 };
  assert.equal(getWithdrawalRate(rates, 58), 3.5);
  assert.equal(getWithdrawalRate(rates, 65), 5.25);
  assert.equal(getWithdrawalRate(rates, 72), 5.75);
  assert.equal(getWithdrawalRate(rates, 88), 7.0);   // 80+ band (the de-duplicated branch)
  assert.equal(getWithdrawalRate(rates, 40), 3.5);   // below youngest band falls back to 55-59
});

test('getWithdrawalRate: missing band returns 0, never throws', () => {
  assert.equal(getWithdrawalRate({}, 65), 0);
  assert.equal(getWithdrawalRate({ '65-69': 5 }, 90), 0);
});

test('distributionStats: empty array returns null', () => {
  assert.equal(distributionStats([]), null);
  assert.equal(distributionStats([null, undefined]), null);
});

test('distributionStats: ignores nulls and computes order stats', () => {
  const s = distributionStats([10, null, 20, 30, 40]);
  assert.equal(s.min, 10);
  assert.equal(s.max, 40);
  assert.equal(s.count, 4);
});

test('percentileRank', () => {
  assert.equal(percentileRank(30, [10, 20, 30, 40]), 50);
});
