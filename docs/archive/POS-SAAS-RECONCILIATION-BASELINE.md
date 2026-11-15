# POS SaaS Multi-Usaha v3.0 — Archive Reconciliation Baseline

**Record:** DOC-RECON-001  
**Version:** 0.1  
**Date:** 2026-11-15  
**Status:** INITIAL RECONCILIATION — PARTIAL / OPEN  
**Method:** Read-only, append-only  
**Source of truth after adoption:** GitHub documentation in this repository  
**Source material for this migration:** All files listed in `docs/archive/POS-SAAS-ARCHIVE-SOURCE-INVENTORY.md`, plus the nested archive folder shown there.

## 1. Purpose and interpretation

This record establishes the first GitHub-side reconciliation baseline using the POS SaaS project archive as source material. It does not replace source documents, silently resolve conflicting versions, elevate any status, or certify implementation.

The source inventory is a path/metadata capture, not proof that every file's full contents have been reviewed. Content coverage must be tracked separately. No archive file has been modified, deleted, moved, or renamed.

## 2. Inventory snapshot discrepancy — OPEN

The current recursive Library listing captured **198 file entries and 1 folder entry** under `/Arsip Proyek POS SaaS/` (including the visible nested `REC — Rekonsiliasi & Coverage` folder).

The archive's 15 Nov 2026 Addendum Rekonsiliasi Batch 1–9 records a different historical snapshot: **306 files** in the parent folder plus **22 files** in `Batch Audit`, 328 total. The older inventories also record other counts (114, 122, 136, 137, 157, and 320/354/440 under different scopes and dates).

These figures are not directly interchangeable: dates, scopes, filters, subfolders, and Library listing surfaces differ. The current listing does not expose the previously cited `Batch Audit` folder. Do not infer deletion, loss, or an exact missing-file count from this difference. **REC-03 and inventory path reconciliation remain OPEN.**

## 3. Confirmed archive findings to preserve

### 3.1 Duplicate groups and hash evidence

- `Audit_Hash_123_Kelompok_Duplikat_POS_SaaS_v0.1_2026-11-15.docx` reports 123 pairs / 246 files, all 123 pairs SHA-256 byte-identical.
- The subsequent Batch 1–9 reconciliation identifies a CSV discrepancy: the CSV's copy-count column sums to 318 rather than the report narrative's 246.
- The later listing identifies two additional repeated-name pairs (the hash report itself and the inventory reconciliation report); both pairs were separately compared and reported byte-identical.
- The archive reconciliation therefore describes 125 repeated-name groups in its later snapshot, but the CSV/path/scope reconciliation is still required.
- Disposition: KEEP ALL COPIES. Hash equality is not permission to delete, merge, rename, or move files.

### 3.2 RMD-56 v1.2 variants — OPEN (REC-01)

Three content variants of RMD-56 v1.2 were identified (42,309 bytes; 42,965 bytes; 42,520 bytes). The 42,520-byte variant has two byte-identical Library entries. The three distinct contents share the R56-D01–D12 conceptual FIX baseline but differ in structure, wording, provenance, and status presentation.

Do not select a canonical variant by filename, date, or length alone. Preserve all variants. Compare source approval, substantive delta, provenance, and supersession before assigning an active reference.

### 3.3 Audit coverage — PARTIAL (REC-04)

The archive reconciliation references a Master Audit Coverage register of 137 unique document names: 47 REVIEWED and 90 PARTIAL. A further 66 unique names were identified outside that coverage in the relevant snapshot. Those 66 are not automatically unread; each must be mapped to evidence-based REVIEWED, PARTIAL, or NOT STARTED status.

REVIEWED means reviewed within a stated scope. It is not approval of all content, closure of all findings, or implementation evidence.

### 3.4 ERD and inventory baseline

- ERD v9.6.9 remains the most complete working reference identified in the archive lineage, **not a canonical/final ERD**.
- `ERD_Master_Working_Draft_POS_SaaS_v0.1_2026-11-15.docx` is a working draft consolidating the conceptual 17-table inventory/costing baseline; it is not a physical schema, final ERD, or implementation approval.
- No FIX decision is reopened by this migration.
- A10 remains CLOSED at architecture baseline.
- A11 remains FIX at architecture/lifecycle level; technical details remain REVIEW/TODO.
- A12 statuses remain as individually recorded. In particular:
  - A12.16 is superseded by A12.17 Alternative 1 FIX; preserve history and do not revive the old alternative.
  - A12.18–A12.28 remain UNVERIFIED / OPEN; primary sources were not recovered in the cited search scope.
  - A12.31A–D, A12.32A–I, A12.33A–C, A12.34–A12.35 remain UNVERIFIED / OPEN.
  - A12.31E and A12.36 remain OPEN.
  - A12.36.1 remains UNVERIFIED / REVIEW.
  - A12.37.10.1 remains FIX for MWA by business + product/variant + inventory location.
  - A12.38 is CLOSED for conceptual domain audit; physical dictionary remains OPEN.
  - A12.39 has conceptual specification; physical verification remains OPEN.
  - A12.40 remains PARTIAL / OPEN; A12.41 remains NOT STARTED.
  - D40-203–216 remain UNRECOVERED.
- R-05 remains OPEN / REVIEW. R-06 is architecture FIX with implementation PARTIAL.

### 3.5 Authorization, roles, categories, and scope

- R56-D01–D12, O01–O12, CR01–CR10, and Q01–Q06 are conceptual FIX only to the extent approved in their respective source addenda.
- RMD-55 through RMD-69 are the category/role/workflow decision family. RMD-66 Education and RMD-68 Hotel approvals update earlier status snapshots: approved conceptual FIX mapping for their respective Manager allowlist / role eligibility / module eligibility; their explicitly OPEN technical details remain open.
- RMD-69 D01–D12 are conceptual FIX; “Lainnya/Belum Diklasifikasikan” remains a temporary classification/exception route, not an ordinary operational category.
- Q-06 Finance/Accounting and Employee/HR Operator are CONDITIONAL standard roles; role availability does not automatically grant access.
- The 13 business categories, 12 standard business roles, capability/action taxonomy, module eligibility, object/geographic scope, data classification, and separation-of-duties are distinct dimensions.
- Candidate capability/action vocabulary is not a final permission-key catalogue.
- Conceptual FIX is not a permission grant or approval for SQL/DDL, schema, RLS, triggers, Auth, APIs, server authorization, or source-code implementation.

### 3.6 Super Admin / Platform Admin

- Blueprint Super Admin v1.0 is an approved product-planning reference; this does not prove implementation.
- PLATFORM_ADMIN is an operational platform role with individual permissions and bounded assignment/scope; it is not a second Super Admin or a business/tenant role.
- SUPER_ADMIN and PLATFORM_ADMIN experiences should be distinct. Menu visibility is not authorization.
- Sensitive actions require server-side authorization, scope validation, auditability, and separation of duties where applicable.
- Refund requester cannot approve their own request; cross-tenant assistance defaults to scoped, time-bound read-only access; write access requires separate grant/approval.
- Permission keys, final role-permission matrix, data field allowlists, scope details, and implementation remain OPEN / NOT APPROVED unless a source explicitly says otherwise.

## 4. REC follow-up register

| ID | Priority | Required reconciliation | Status |
|---|---:|---|---|
| REC-01 | P0 | Compare all three RMD-56 v1.2 contents, approvals, provenance, and supersession; preserve every variant. | OPEN |
| REC-02 | P0 | Reconcile hash CSV rows, per-scope copy counts, exact paths, sizes, and hashes for all compared pairs. | OPEN |
| REC-03 | P0 | Reconcile current Library listing against historical snapshots; explain folder/scope/date/filter deltas and missing visible paths. | OPEN |
| REC-04 | P1 | Map the 66 names outside the 137-document coverage register with evidence-based review status. | OPEN |
| REC-05 | P1 | Cross-link RMD-55–69, O01–12, CR01–10, and Q01–06 without changing approved conceptual statuses. | OPEN |
| REC-06 | P1 | Add append-only Permission Catalogue overlay for Education/RMD-66 and Hotel/RMD-68 conceptual approvals. | OPEN |
| REC-07 | P1 | Reconcile 38-document ERD lineage and A12 crosswalk with source/version/provenance/status/gaps. | OPEN |
| REC-08 | P2 | Consolidate Batch 7–9 security findings with evidence, severity, status, owner, and retest criteria. | OPEN |

## 5. PR #2 disposition

PR #2, “UI: Super Admin governance + Platform Admin panel (demo only),” was closed on 2026-11-15 without merge. Its branch/commits remain historical. The latest commit CI was successful, but this does not resolve the documented authorization, scope, demo-data, or visual-verification gaps. Do not continue implementation from that PR automatically.

## 6. Non-negotiable controls

- `DB_PUSH_BLOCKED: ACTIVE`.
- Audit-first and read-only unless the user explicitly approves a narrowly defined implementation scope.
- No SQL, DDL, DML, migrations, schema, RLS, triggers, Auth, API, backend, or data changes.
- No source-code, CI, Vercel, deployment, or Production changes during documentation reconciliation.
- No Supabase Preview/Staging testing.
- One PR at a time.
- No merge, close, deploy, branch mutation, or PR mutation without explicit approval.
- Preserve historical files and all variants; do not delete, overwrite, rename, merge, or move source archive documents.
- Preserve FIX; do not promote REVIEW, TODO, OPEN, PARTIAL, UNVERIFIED, NOT STARTED, or NOT APPROVED without evidence and the required approval.
- Conceptual approval is not implementation approval.

## 7. Audit coverage limitation

This baseline is intentionally PARTIAL. It records the current metadata inventory and findings supported by the identified archive reconciliation, hash, blueprint-alignment, ERD working-draft, and provenance documents. It does **not** claim that all 198 currently listed files have had their complete contents reviewed. Remaining files must be processed by family and lineage, with each review result recorded in GitHub before future audits treat the GitHub register as complete.

## 8. Source documents used for this baseline

- `Addendum_Rekonsiliasi_Batch_1-9_dan_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx`
- `Audit_Hash_123_Kelompok_Duplikat_POS_SaaS_v0.1_2026-11-15.docx`
- `Addendum_Penelusuran_Sumber_Primer_A12.18-A12.28_POS_SaaS_v0.2_2026-11-15.docx`
- `Audit_Provenance_Individual_A12.18-A12.28_POS_SaaS_v0.1_2026-11-15.docx`
- `Audit_Provenance_Individual_A12.31-A12.36_POS_SaaS_v0.1_2026-11-15.docx`
- `ERD_Master_Working_Draft_POS_SaaS_v0.1_2026-11-15.docx`
- `Blueprint_Alignment_Addendum_v1.0_2026-11-14.docx`
- `Blueprint_POS_SaaS_v3.0_Category_Consolidation_1-13_v1.0.docx`
- `Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.1_Erratum_2026-11-14.docx`
- `Sitemap_Spesifikasi_Halaman_Super_Admin_Platform_Admin_v1.0.docx`
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`

This source list is not an exhaustive list of all archive files; see the source inventory manifest. Additional source documents must be linked as their content and lineage are reviewed.


## 9. REC-01 detailed content review — 15 November 2026

The individual `Audit_Rekonsiliasi_Provenance_RMD-56_v1.2_REC-01_v0.1_2026-11-15.docx` was read in full. It confirms:

- Variant A: 42,520 bytes; 96 paragraphs; SHA-256 `68c4bda1d4ea0d...` (full hash recorded in the source report). A-copy is byte-identical to A.
- Variant B: 42,965 bytes; 101 paragraphs; distinct SHA-256.
- Variant C: 42,309 bytes; 71 paragraphs and one table; distinct SHA-256.
- All three variants state R56-D01–D12 as conceptual FIX, but their wording, structure, refinement presentation, and approval phrase differ.
- The approval phrases recorded by the variants are not independently proven by the DOCX files. Library timestamps are storage metadata; DOCX core properties are generic and do not establish approval order.
- Variant B has the most explicit guardrail/status coverage and may be used only as a **working comparison reference — non-canonical**. It is not approved as the canonical source.
- RMD-56 v1.1 itself asked for explicit approval before v1.2; source-chat evidence linking the three phrases to exact context/order remains missing.

REC-01 disposition: **PARTIAL / PROVENANCE GAP — NOT CLOSED**. Preserve all three byte variants and both A entries. Do not designate a canonical version until original conversation evidence and decision-to-document crosswalk for D01–D12/refinements D02, D04, D09, D10, D12 are verified.

This is a content-level update to the GitHub reconciliation baseline; it does not change the source documents or any conceptual FIX.


## 10. Later REC addenda reviewed — 15 November 2026

The nested folder `REC — Rekonsiliasi & Coverage` contains subsequent addenda. These later, more specific records qualify earlier summary statements above; use the dispositions below where they differ.

### REC-01 v0.2 — approval context recovered; canonical file still not selected

The addendum `REC-01_Addendum_Verifikasi_Persetujuan_Asli_RMD-56_v0.2_2026-11-15.docx` directly links the user's statement “Tetapkan seperti rekomendasi kamu” at 2026-11-14 10:04:04 UTC to the recommendation at 10:02:50 UTC to retain R56-D01–D12 with refinements (including D10 as a workflow-specific, proportional compliance gate). This verifies the conceptual FIX approval basis.

The phrases “Ok, lakukan” and “Iya ikuti seperti rekomendasi kamu” are **not proven** as RMD-56 approval in the recovered context and must not be used to extend or alter that approval. R56-D01–D12 remain FIX — Conceptual Baseline. REC-01 remains **PARTIAL** because the canonical-file decision is intentionally not made; Variant A's approval attribution is supported, while B/C's quoted approval attributions are unverified. Keep all three variants and both A copies.

### REC-02 v0.2 — hash/path scope remains PARTIAL

The later `REC-02_Rekonsiliasi_Hash_123_v0.2_2026-11-15.docx` supersedes the earlier simplistic interpretation of the 123-group CSV discrepancy:

- CSV: 123 rows; `jumlah_sal inan` total 318 (96×2 + 18×4 + 9×6); historical archive-count column totals 246 (123×2).
- Current audit found 115 of the 123 names once each under `/Arsip Proyek POS SaaS/`; 8 names were absent from the entire Library listing at that audit.
- The 115 current file sizes matched the historical CSV size values; this is not byte-identity proof.
- SHA-256 values were **NOT REHASHED** for the 115 remaining files. Earlier BYTE-IDENTICAL claims remain historical evidence only.
- The 8 absent names have unresolved causes; do not infer deletion, restore, or move without further evidence and authorization.
- REC-02 status: **PARTIAL**. Keep the original report and CSV unchanged; use the REC-02 v0.2 path/hash register for its stated scope.

### REC-03 v0.1 — archive snapshot reconciliation

The later REC-03 addendum reconciles three historical snapshots:
- Inventory reconciliation snapshot: 322 entries (root/Batch Audit split not separately recorded).
- Batch 1–9 addendum snapshot: 306 root + 22 Batch Audit = 328.
- REC-03 listing: 311 root + 22 Batch Audit = 333.

The 322→328 delta is +6 entries; 328→333 is +5. REC-03 describes 125 repeated-name groups (250 entries) and 83 singletons in the 333-entry snapshot. The 63→66 outside-coverage change is +3 unique names, not six files. REC-03 remains **PARTIAL** because the exact baseline listing and full content coverage are not thereby established.

This historical 333-entry snapshot must not be confused with the direct Library listing captured for this GitHub inventory, which currently returned 198 file entries recursively under the parent folder and one visible nested REC folder. Different snapshots/scopes/listing states are recorded; the delta remains unresolved. No inference of file loss or deletion is authorized.

### REC-04 v0.3 and v0.2 erratum — exact set-difference is partial

REC-04 v0.3 reconstructs Manifest 157 minus Coverage 137 at normalized basename level:
- Manifest 157 rows normalize to 155 unique basenames.
- Coverage 137 normalizes to 136 unique basenames.
- The resulting set difference is 54 basenames.
- The 9 out-of-manifest items cited by the inventory report are descriptions/groups, not verified exact filenames.
- 54 + 9 + 3 = 66 reconciles an aggregate only; the 3-name delta and complete 66-name list remain UNKNOWN/UNVERIFIED because the raw 328-entry snapshot export is unavailable.

REC-04 v0.2 erratum explicitly withdraws the claim that the nine fully written names in the earlier v0.1 report are individually verified exact filenames. Retain the six source descriptions (one covers four versions) as descriptions only. Coverage remains 47 REVIEWED / 90 PARTIAL; presence in an inventory does not promote review status. REC-04 remains **PARTIAL / OPEN**.

### Updated REC status register

| REC | Latest reviewed evidence | Current disposition |
|---|---|---|
| REC-01 | v0.2 approval-context addendum | PARTIAL — conceptual approval verified; no canonical file selection |
| REC-02 | v0.2 hash/path reconciliation | PARTIAL — 115 current files, 8 absent/unresolved, no rehash |
| REC-03 | v0.1 snapshot reconciliation | PARTIAL — 322/328/333 snapshots explained at aggregate level |
| REC-04 | v0.3 set-difference + v0.2 erratum | PARTIAL — 54 normalized basenames mapped; 66 complete list not verified |
| REC-05 | Not yet individually re-audited in this pass | OPEN |
| REC-06 | Not yet individually re-audited in this pass | OPEN |
| REC-07 | Not yet individually re-audited in this pass | OPEN |
| REC-08 | Not yet individually re-audited in this pass | OPEN |

The later REC addenda are more specific evidence than the earlier Batch 1–9 summary. This section records those qualifications; it does not overwrite any historical source document or promote an unresolved REC item to CLOSED.


## 11. A12 individual provenance and blueprint alignment review

### A12.31–A12.36 individual provenance

The individual provenance audit confirms that group-level partial notes must not be interpreted as individual decisions:

- A12.31A–D; A12.32A–I; A12.33A–C; A12.34; A12.35: individual source/approval not recovered; **UNVERIFIED / OPEN**.
- A12.31E: **OPEN**. A12.37.10.1 independently records MWA pool per business + product/variant + inventory location and supersedes the old cross-location MWA wording, but no primary decision/approval proves that A12.31E itself had that scope or was superseded by A12.37.
- A12.36: **OPEN**; individual decision mapping incomplete.
- A12.36.1: **UNVERIFIED / REVIEW**; explicit approval of Alternative B Fulfillment Item was not found. Do not treat it as FIX based on use of similar terminology elsewhere.
- AP-01 was not found for the 21 individual IDs in the audit scope. AP-02 applies only where the relevant consolidated source explicitly documents the decision; it does not prove direct approval for each individual ID. AP-05 is a gap record, not a primary decision source.
- Technical and implementation status for unrecovered individual decisions is NOT ASSESSED. A12.40 remains PARTIAL / OPEN; A12.41 remains NOT STARTED.

No individual supersession may be inferred from topic similarity or adjacent decision numbers.

### ERD working draft — scope boundary reaffirmed

The ERD Master Working Draft v0.1 is accepted only as a working consolidation/navigation aid for the 17 conceptual inventory and costing tables. It is NOT APPROVED as a final/canonical ERD, physical schema, implementation design, or deployment basis. Its REVIEW items include source identity, idempotency, concurrency/locking, partial shipment receipt, stock-count cutoff/reconciliation, parent/batch balance reconciliation, landed-cost correction, lifecycle, constraints/indexes, RLS/server enforcement, and executed tests.

### Blueprint and authorization cross-check

The Blueprint POS SaaS v3.0 remains a draft working consolidation. Its 71 entries across stages 5.3–5.8 are conceptual table entries, not a final physical table count. One Owner account → one Business remains a product rule; one Business may have multiple outlets and warehouses. `business_id` tenant boundary and server authorization remain design requirements, not proof of implementation.

The Blueprint Category Consolidation v1.0 contains an older status snapshot and is qualified by later errata/addenda. Do not repeat its stale statements that RMD-56 is PROPOSED or that Education/Hotel are not yet approved: RMD-56 D01–D12, RMD-66 Education, RMD-68 Hotel, and RMD-69 D01–D12 have later conceptual FIX evidence as described above. These approvals do not finalize the cross-category matrix or technical authorization.

The Authorization/Scope/SoD index erratum confirms:
- Education (RMD-66) Manager Allowlist, Role Eligibility, Module Eligibility are conceptual FIX; E-04 and technical details remain OPEN.
- Hotel (RMD-68) Manager Allowlist × Role Eligibility × Module Eligibility are conceptual FIX; H-04 and technical details remain OPEN.
- RMD-69 D01–D12 are conceptual FIX; “Lainnya/Belum Diklasifikasikan” remains temporary classification/exception; safe-mode/lifecycle technical details OPEN.
- Shared Core × Module Eligibility, Capability/Action Taxonomy, Scope Dimension, SoD/Data Classification remain PROPOSED/CANDIDATE with their listed gaps.
- Cross-category matrix remains DRAFT; CR-01–CR-10 and Q-01–Q-06 conceptual FIX do not promote the entire matrix to FIX.
- Final permission keys, final role-permission matrix, exact scope resolver, field-level data classification, thresholds, and implementation remain OPEN / NOT APPROVED.

## 12. Current audit progress and limitations

Content review in this pass has directly read the REC-01 v0.1/v0.2, REC-02 v0.2, REC-03 v0.1, REC-04 v0.2/v0.3, A12.18–A12.28 provenance audit, A12.31–A12.36 provenance audit, ERD Master Working Draft, Blueprint v3.0, Category Consolidation, Audit Register v1.3, and Authorization/Scope/SoD index erratum.

This is a targeted content review, not a full-content audit of all 198 files in the current recursive Library listing. Other RMD decisions, authorization addenda, ERD version documents, REC-05–REC-08, and the full 38-document ERD lineage still require individual review and crosswalk. The GitHub source inventory remains a metadata list only. Do not claim that all archive content has been audited.
