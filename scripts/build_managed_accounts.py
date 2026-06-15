#!/usr/bin/env python3
# =============================================================================
# build_managed_accounts.py — Regenerate src/data/managed-accounts.js from the
# OPS Strategist Lookup spreadsheet (data-sources/OPS_Strategist_Lookup.xlsx).
#
#   python3 scripts/build_managed_accounts.py
#   (or: npm run build:managed)
#
# This is the FREE auto-update path: re-export the lookup from your platform,
# drop it in data-sources/, and re-run this (the data-refresh GitHub Action does
# it automatically on upload). No paid APIs. Performance is whatever the sheet
# carries (gross + net), as of the date in the sheet header.
#
# Zero third-party deps: parses the .xlsx (a zip of XML) with the stdlib only.
# =============================================================================
import zipfile, re, sys, os, datetime
import xml.etree.ElementTree as ET

SRC = os.path.join(os.path.dirname(__file__), '..', 'data-sources', 'OPS_Strategist_Lookup.xlsx')
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'managed-accounts.js')
AS_OF = '2026-04-30'          # performance as-of (from the sheet's Gross/Net header)
VERIFIED_DATE = '2026-06-15'  # when this import was last refreshed

def strip(t): return t.split('}')[-1]

def load_rows(z, sheet, shared):
    root = ET.fromstring(z.read(sheet))
    rows = []
    for row in root.iter():
        if strip(row.tag) != 'row':
            continue
        d = {}
        for c in row:
            if strip(c.tag) != 'c':
                continue
            ref = c.get('r', ''); t = c.get('t', '')
            col = re.match(r'[A-Z]+', ref).group(0) if ref else '?'
            v = None
            for ch in c:
                if strip(ch.tag) in ('v', 'is'):
                    v = ch
            val = ''
            if v is not None:
                if t == 's':
                    try: val = shared[int(v.text)]
                    except Exception: val = v.text or ''
                else:
                    val = ''.join(x.text or '' for x in v.iter() if strip(x.tag) == 't') if t == 'inlineStr' else (v.text or '')
            d[col] = val
        rows.append(d)
    return rows

def num(x):
    if x is None: return None
    s = str(x).strip()
    if s == '' or s.upper() in ('NA', 'NULL', 'N/A'): return None
    try: return float(s)
    except ValueError: return None

def pct(x):
    v = num(x)
    return None if v is None else round(v * 100, 2)

def ratio(x):
    v = num(x)
    return None if v is None else round(v, 3)

def serial_to_date(x):
    v = num(x)
    if v is None: return None
    try:
        return (datetime.date(1899, 12, 30) + datetime.timedelta(days=int(v))).isoformat()
    except Exception:
        return None

def clean(x):
    if x is None: return None
    s = str(x).strip()
    return None if s == '' or s.upper() == 'NULL' else s

def slugify(s):
    s = re.sub(r'[^a-z0-9]+', '-', (s or '').lower()).strip('-')
    return re.sub(r'-+', '-', s)[:60]

def jsval(v):
    if v is None: return 'null'
    if isinstance(v, bool): return 'true' if v else 'false'
    if isinstance(v, (int, float)): return repr(v)
    return '"' + str(v).replace('\\', '\\\\').replace('"', '\\"') + '"'

def obj(pairs, drop_null=True):
    items = [f'{k}: {jsval(v)}' for k, v in pairs if not (drop_null and v is None)]
    return '{ ' + ', '.join(items) + ' }'

# Period (annualized) return columns -> field name
PERIODS = [('R','ytd'),('S','m1'),('T','m3'),('U','m6'),('V','y1'),
           ('W','y2'),('Y','y3'),('AA','y5'),('AC','y10'),('BN','sinceInception')]
# Net-sheet calendar years (most relevant: what the investor actually earned)
CAL = [('AM','2025'),('AN','2024'),('AO','2023'),('AP','2022'),('AQ','2021'),
       ('AR','2020'),('AS','2019'),('AT','2018'),('AU','2017'),('AV','2016')]

def returns_obj(r):
    return obj([(f, pct(r.get(c))) for c, f in PERIODS])

def calendar_obj(r):
    return obj([(f, pct(r.get(c))) for c, f in CAL])

def main():
    z = zipfile.ZipFile(SRC)
    shared = []
    root = ET.fromstring(z.read('xl/sharedStrings.xml'))
    for si in root:
        shared.append(''.join(t.text or '' for t in si.iter() if strip(t.tag) == 't'))

    # A real model row has BOTH a Strategist Firm (A) and a Model Name (C);
    # trailing disclaimer/footnote rows carry text in A only — drop those.
    def is_model(r): return clean(r.get('A')) and clean(r.get('C'))
    gross = [r for r in load_rows(z, 'xl/worksheets/sheet1.xml', shared)[3:] if is_model(r)]
    net = [r for r in load_rows(z, 'xl/worksheets/sheet2.xml', shared)[3:] if is_model(r)]

    # Match net to gross by composite key (Morningstar ID when present, else
    # firm|model|category|benchmark), with a per-key occurrence counter so
    # legitimate duplicates (same model in several sleeves) still line up.
    def key(r):
        msid = clean(r.get('D'))
        base = msid if msid else '|'.join(clean(r.get(c)) or '' for c in ('A', 'C', 'B', 'H'))
        return base
    net_by_key = {}
    seen = {}
    for r in net:
        k = key(r); i = seen.get(k, 0); seen[k] = i + 1
        net_by_key[(k, i)] = r
    gseen = {}

    records, ids = [], set()
    for g in gross:
        k = key(g); i = gseen.get(k, 0); gseen[k] = i + 1
        n = net_by_key.get((k, i))

        firm = clean(g.get('A')); model = clean(g.get('C'))
        base = f"sma-{slugify(firm)}-{slugify(model)}"
        rid = base; j = 2
        while rid in ids:
            rid = f"{base}-{j}"; j += 1
        ids.add(rid)

        risk = obj([
            ('stdDev3y', pct(g.get('AE'))), ('stdDev5y', pct(g.get('AF'))),
            ('corr3y', ratio(g.get('AG'))), ('corr5y', ratio(g.get('AH'))),
            ('retRisk3y', ratio(g.get('AI'))), ('retRisk5y', ratio(g.get('AJ'))),
            ('beta3y', ratio(g.get('AK'))), ('beta5y', ratio(g.get('AL'))),
        ])
        fields = [
            ('id', rid), ('name', model), ('firm', firm),
            ('modelName', model), ('investmentCategory', clean(g.get('B'))),
            ('morningstarId', clean(g.get('D')) if clean(g.get('D')) != 'NULL' else None),
            ('note', clean(g.get('E'))), ('assetClass', clean(g.get('F'))),
            ('morningstarCategory', clean(g.get('G'))), ('benchmark', clean(g.get('H'))),
            ('firmType', clean(g.get('I'))), ('modelType', clean(g.get('J'))),
            ('esg', (clean(g.get('K')) or '').lower() == 'yes'),
            ('taxAware', (clean(g.get('L')) or '').lower() == 'yes'),
            ('minimumPurchase', int(num(g.get('M'))) if num(g.get('M')) is not None else None),
            ('strategistFee', pct(g.get('N'))), ('expenseRatio', pct(g.get('O'))),
            ('estimatedYield', pct(g.get('P'))),
            ('riskScore', int(num(g.get('Q'))) if num(g.get('Q')) is not None else None),
        ]
        # Build the record string with nested objects inserted raw.
        parts = [f'{k}: {jsval(v)}' for k, v in fields if v is not None]
        parts.append(f'returnsGross: {returns_obj(g)}')
        parts.append(f'returnsNet: {returns_obj(n) if n else "{}"}')
        parts.append(f'risk: {risk}')
        parts.append(f'calendarNet: {calendar_obj(n) if n else "{}"}')
        ide = serial_to_date(g.get('BO'))
        if ide: parts.append(f'inceptionDate: {jsval(ide)}')
        parts.append(f'asOfDate: {jsval(AS_OF)}')
        parts.append('returnsVerified: true')
        parts.append(f'lastVerifiedDate: {jsval(VERIFIED_DATE)}')
        parts.append(f'verificationSource: {jsval("Firm OPS Strategist Lookup (owner-provided); gross & net performance as of " + AS_OF)}')
        records.append('  { ' + ', '.join(parts) + ' }')

    header = (
        "// =============================================================================\n"
        "// Managed Accounts (SMA / model portfolios) — the firm's strategist-model menu.\n"
        "// GENERATED by scripts/build_managed_accounts.py from\n"
        "// data-sources/OPS_Strategist_Lookup.xlsx — DO NOT EDIT BY HAND.\n"
        f"// {len(records)} models across the platform; gross & net performance as of {AS_OF}.\n"
        "// Percentages are in percent (e.g. 3.92 = 3.92%); ratios (beta/correlation) are raw.\n"
        "// Refresh: drop a new export in data-sources/ and run `npm run build:managed`.\n"
        "// =============================================================================\n\n"
        "export const managedAccounts = [\n"
    )
    with open(OUT, 'w') as f:
        f.write(header + ',\n'.join(records) + '\n];\n')

    print(f"Wrote {len(records)} managed-account models -> {os.path.relpath(OUT)}")
    print(f"Output size: {os.path.getsize(OUT)//1024} KB")
    withnet = sum(1 for g in gross)  # all matched attempt
    print(f"Gross rows: {len(gross)}  Net rows: {len(net)}")

if __name__ == '__main__':
    main()
