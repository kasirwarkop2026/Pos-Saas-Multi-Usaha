# Append-only Correction — GOV-MAI-001 Archive Inventory Baseline Clarification

**Project:** POS SaaS Multi-Usaha v3.0  
**Parent source:** GOV-MAI-001 v1.0 — `00_MASTER_ARCHIVE_INDEX_POS_SAAS_v1.0_2026-11-15.md`  
**Related register:** GOV-DSR-001 v0.1 and GOV-DSR-001-A01 v0.1  
**Prepared:** 18 November 2026  
**Status:** PROPOSED CORRECTION — pending PR review, CI, merge and post-merge verification  
**Control:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`

## 1. Purpose and scope

This append-only correction clarifies the inventory baseline note in GOV-MAI-001 v1.0. It adds the later 16 November 2026 SHA-256 manifest as a distinct integrity snapshot while preserving the 15 November historical inventory count, including its root-file clarification.

This correction does not replace or edit GOV-MAI-001, GOV-DSR-001, GOV-DSR-001-A01, the source manifest, or any historical audit. It does not certify content review, canonicality, approval, or implementation readiness.

## 2. Verified snapshot distinctions

| Evidence snapshot | Count | Scope and interpretation |
|---|---:|---|
| 15 November 2026 GOV-DSR-001 listing | 200 | Subtotal across seven domain subfolders |
| 15 November 2026 GOV-DSR-001-A01 recursive root clarification | 202 | 200 subfolder files plus two files directly under the archive root |
| 16 November 2026 SHA-256 manifest | 231 | 228 files across seven domain subfolders plus three root files; integrity baseline for that manifest snapshot |
| Audit 2.1 Library observation | 233 | 231 manifest paths plus two post-manifest audit artifacts at the time of that listing |
| Stage 4.7.6 later path inventory | 249 | 231 manifest paths plus 15 post-manifest artifacts plus three later Stage 4.7 mapping outputs; path inventory only, no re-hash |

These counts describe different dated evidence products and scopes. They must not be treated as interchangeable or combined without a path-level crosswalk and aligned inclusion rules.

## 3. Primary evidence and exact locators

1. **GOV-MAI-001 v1.0**, section 9, “Maintenance rule” and final “Baseline note”: the 200-file statement is a 15 November snapshot across seven folders.
2. **GOV-DSR-001 v0.1**, section 2, “Snapshot inventaris metadata”: records the 200-file subtotal across seven subfolders.
3. **GOV-DSR-001-A01 v0.1**, sections 2–4: clarifies two root files and the 202-file total for the 15 November root-plus-subfolder snapshot.
4. **03_MANIFEST_SHA256_231_FILE_POS_SAAS_v1.0_2026-11-16.csv**: 231 manifest records, with 228 subfolder records and three root records.
5. **POS_SAAS_AUDIT_2_1_MASTER_ARCHIVE_INDEX_REGISTER_STATUS_v0.1_2026-11-16.md**, sections 1–4 and finding F-2.1-01: verifies all 231 manifest paths were present in the Library at that audit, with no missing or duplicate manifest paths; identifies the old Index/Register count as historical rather than the latest manifest baseline.
6. **POS_SAAS_STAGE4_7_6_ROOT_ADDITIONAL_ARTIFACTS_MAPPING_v0.1_2026-11-16.md**, sections 2.1–2.2 and 3: records five direct root files, maps the 15 post-manifest artifacts, and reconciles the later 249-path observation as 231 + 15 + 3. It explicitly states that no re-hash was performed.

## 4. Corrected interpretation for GOV-MAI-001

The final baseline note in GOV-MAI-001 v1.0 must be read as a historical 15 November subfolder subtotal, not as the latest inventory or integrity baseline.

For subsequent navigation and reporting:

- Retain **202** as the historical 15 November root-plus-subfolder total.
- Reference the **231-file SHA-256 manifest** as the integrity baseline for its stated 16 November snapshot.
- Treat **233** as the Library path count reported by Audit 2.1 at its observation time.
- Treat **249** as the later Stage 4.7.6 path inventory observation, not as a replacement manifest or a re-hash.
- Do not infer that every listed file has been content-reviewed, approved, or made canonical.

## 5. Limits and dependencies retained

This correction addresses only GOV-OPEN-01's stated requirement to reference the 231-file manifest while retaining the 202-file historical snapshot.

It does not close:

- **GOV-OPEN-02:** the complete 231-row per-file Document Status Register and its required provenance, content-review status, decision status, supersession, evidence locator and next-action fields remain OPEN.
- The exact path-set crosswalks between the 200, 231 and 249 observations, where not already independently demonstrated, remain OPEN/PARTIAL.
- Any content-review, decision-approval, canonical-selection, security, or implementation dependency.

No dependency is closed by this draft. GOV-OPEN-01 closure remains pending successful publication and post-merge verification of this correction against the stated closure criterion.

## 6. Change control

- Append-only correction; all original source files and historical snapshots remain unchanged.
- No source archive files are deleted, moved, renamed, overwritten, or canonicalized.
- No dependency status or FIX decision is silently changed.
- No database, SQL/DDL/DML, migration, RLS, Auth, API/backend, application source, CI workflow, Vercel, deployment, or Production changes are included.
- `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration remains NOT AUTHORIZED; Stage 6 remains NOT AUTHORIZED.

**Disposition:** PROPOSED — review exact diff and applicable documentation CI before any merge.
