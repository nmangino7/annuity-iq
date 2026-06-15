# Data sources

Source files the app's data is generated from. Committed for provenance and to
power the **free** auto-update path (no paid APIs).

## OPS_Strategist_Lookup.xlsx

The firm's managed-account (SMA / model-portfolio) menu, with gross & net
performance. Generates `src/data/managed-accounts.js`.

**To refresh the Managed Accounts data:**

1. Re-export the OPS Strategist Lookup from your platform (same two-sheet
   Gross/Net layout).
2. Replace `data-sources/OPS_Strategist_Lookup.xlsx` with the new export
   (commit it, or upload it via the GitHub web UI).
3. That's it — the **Data refresh** GitHub Action
   (`.github/workflows/data-refresh.yml`) regenerates `managed-accounts.js`,
   validates it, and commits the result automatically. You can also run it
   locally:

   ```bash
   npm run build:managed   # python3 scripts/build_managed_accounts.py
   npm run validate:data
   ```

If the export's column layout changes, update the column map in
`scripts/build_managed_accounts.py`.

### About "live" Morningstar performance

There is **no free public feed** for these proprietary strategist-model returns
(Morningstar Direct and similar are licensed/paid). The spreadsheet re-export
above is the realistic free way to keep the data current. 772 of the models
carry a Morningstar ID, so if the firm ever licenses a feed, a fetcher keyed on
those IDs could be added to the refresh job — but it is **not** required and
costs nothing to leave as-is.
