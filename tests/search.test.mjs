import { test } from 'node:test';
import assert from 'node:assert/strict';
import { searchAll, searchGrouped } from '../src/data/search.js';

test('min length: queries under 2 chars return nothing', () => {
  assert.deepEqual(searchAll('a'), []);
  assert.deepEqual(searchAll(''), []);
});

test('every result carries a numeric score and required fields', () => {
  for (const r of searchAll('allianz')) {
    assert.ok(typeof r.score === 'number' && r.score > 0);
    assert.ok(r.id && r.name && r.type && r.route);
  }
});

test('exact carrier name surfaces the carrier record', () => {
  const r = searchAll('allianz');
  assert.ok(r.length > 0);
  assert.ok(r.some(x => x.type === 'carrier' && /allianz/i.test(x.name)));
});

test('multi-token query requires all tokens (AND) and ranks the match on top', () => {
  const r = searchAll('allianz 222');
  assert.ok(r.length > 0);
  assert.ok(/222/.test(r[0].name), `top result should contain "222", got "${r[0].name}"`);
});

test('typo tolerance: "alianz" (missing l) still finds Allianz via fuzzy match', () => {
  const r = searchAll('alianz');
  assert.ok(r.length > 0, 'fuzzy match should return results');
  assert.ok(r.some(x => /allianz/i.test(x.name)));
});

test('deterministic ordering for identical queries', () => {
  assert.deepEqual(searchAll('income'), searchAll('income'));
});

test('limit is respected', () => {
  assert.ok(searchAll('an', { limit: 5 }).length <= 5);
});

test('types filter restricts result types', () => {
  const r = searchAll('nationwide', { types: ['carrier'] });
  assert.ok(r.length > 0);
  assert.ok(r.every(x => x.type === 'carrier'));
});

test('searchGrouped buckets results by type, best group first', () => {
  const g = searchGrouped('income');
  assert.ok(Array.isArray(g) && g.length > 0);
  assert.ok(g[0].items.length > 0 && g[0].label);
});
