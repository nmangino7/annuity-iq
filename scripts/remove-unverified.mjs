#!/usr/bin/env node
// Remove products that are NOT verified (ratesVerified !== true and !== 'partial'),
// per the owner's "all verified data" decision. Targets FIA + GLWB (the only sections
// with unverified records). Funds (proxy-labeled) and 'partial' products are kept.
//
// Uses a string/comment-aware brace walker so each KEPT record keeps its exact original
// text (no reserialization churn); only the unverified record blocks (and inter-record
// banner comments) are dropped. Verified afterward by re-import + count assertions.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fiaProducts } from '../src/data/fia-products.js';
import { glwbRiders } from '../src/data/glwb-riders.js';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data');
const keepFlag = v => v === true || v === 'partial';

// Split the array body into top-level {...} record texts, ignoring braces in strings/comments.
function extractRecords(body) {
  const recs = [];
  let depth = 0, start = -1, inStr = null, esc = false, lineComment = false;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (lineComment) { if (ch === '\n') lineComment = false; continue; }
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '/' && body[i + 1] === '/') { lineComment = true; i++; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '{') { if (depth === 0) start = i; depth++; }
    else if (ch === '}') { depth--; if (depth === 0) recs.push(body.slice(start, i + 1)); }
  }
  return recs;
}

function rewrite(fileName, arr, exportName) {
  const removeIds = new Set(arr.filter(r => !keepFlag(r.ratesVerified)).map(r => r.id));
  const path = join(DIR, fileName);
  const src = readFileSync(path, 'utf8');
  const open = src.indexOf('[');
  const close = src.lastIndexOf(']');
  const prefix = src.slice(0, open + 1);
  const body = src.slice(open + 1, close);

  const recs = extractRecords(body);
  if (recs.length !== arr.length) throw new Error(`${fileName}: parsed ${recs.length} records but module has ${arr.length}`);
  // Handles both `id: "x"` and JSON-style `"id": "x"` keys.
  const idOf = t => (t.match(/["']?id["']?\s*:\s*['"]([^'"]+)['"]/) || [])[1];
  const kept = recs.filter(t => !removeIds.has(idOf(t)));

  const out = prefix + '\n  ' + kept.map(t => t.trim()).join(',\n  ') + '\n];\n';
  writeFileSync(path, out);
  console.log(`${fileName}: removed ${recs.length - kept.length}, kept ${kept.length}`);
  return { removed: recs.length - kept.length, kept: kept.length };
}

const fia = rewrite('fia-products.js', fiaProducts, 'fiaProducts');
const glwb = rewrite('glwb-riders.js', glwbRiders, 'glwbRiders');
console.log(`Total removed: ${fia.removed + glwb.removed}`);
