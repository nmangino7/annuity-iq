import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pct, currency, getTopRate, getTopParticipation, truncate } from '../src/utils/formatters.js';

test('pct: null/undefined => N/A (never "null%")', () => {
  assert.equal(pct(null), 'N/A');
  assert.equal(pct(undefined), 'N/A');
  assert.equal(pct(5.5), '5.50%');
  assert.equal(pct(5.5, 0), '6%');
});

test('currency: null => N/A', () => {
  assert.equal(currency(null), 'N/A');
  assert.equal(currency(20000), '$20,000');
});

test('getTopRate: empty / missing / all-null => null (not -Infinity)', () => {
  assert.equal(getTopRate(undefined), null);
  assert.equal(getTopRate([]), null);
  assert.equal(getTopRate([{ capRate: null }, { capRate: null }]), null);
});

test('getTopRate: returns max non-null cap', () => {
  assert.equal(getTopRate([{ capRate: 7.5 }, { capRate: null }, { capRate: 9.25 }]), 9.25);
});

test('getTopParticipation: empty/all-null => null, else max', () => {
  assert.equal(getTopParticipation([]), null);
  assert.equal(getTopParticipation([{ participationRate: 100 }, { participationRate: 235 }]), 235);
});

test('truncate', () => {
  assert.equal(truncate('hello world', 5), 'hello...');
  assert.equal(truncate('hi', 5), 'hi');
  assert.equal(truncate(null), '');
});
