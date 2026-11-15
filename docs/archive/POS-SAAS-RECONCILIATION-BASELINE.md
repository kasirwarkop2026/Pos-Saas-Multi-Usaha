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


## 13. RMD-55–RMD-69 category decision and authorization-matrix audit

### 13.1 Category decision baseline

The category decision addenda reviewed in this pass establish the following conceptual FIX baselines. These are source-level architecture/workflow approvals, not technical implementation approval.

| Source | Conceptual decision status | Important OPEN / boundary retained |
|---|---|---|
| RMD-55 v1.1 | R55-D01–D12 FIX | Category taxonomy is initial baseline; category definitions, role availability, Manager allowlist, final permission keys remain OPEN/CANDIDATE |
| RMD-56 v1.2 | R56-D01–D12 FIX; F56 findings/refinements retained | See REC-01: approval context supports Variant A attribution; no canonical v1.2 artifact selected. Cross-category matrices and technical authorization remain OPEN |
| RMD-57 v1.1 Retail | R57-D01–D12 and WF-01–WF-12 FIX | Discount/refund/stock/PO/cash thresholds, exact allowlist, permission keys OPEN |
| RMD-58 v1.1 Wholesale/Distributor | R58-D01–D12 and WF-01–WF-14 FIX | Pricing/credit/PO/receiving/return/AR/AP thresholds OPEN; warehouse/bin is default scope; dispatch and destination receipt remain separate events |
| RMD-59 v1.1 F&B | R59-D01–D12 and WF-01–WF-14 FIX | Tax/service charge, discount/comp/refund, waste, recipe costing and procurement thresholds OPEN |
| RMD-60 v1.1 Service Provider | R60-D01–D12 and WF-01–WF-14 FIX | Work-order lifecycle, QC, warranty, quote/price/refund/travel/cancellation and payout policy details OPEN |
| RMD-61 v1.1 Salon/Beauty | R61-D01–D12 and WF-01–WF-14 FIX | Sensitive consultation/consent data need-to-know; consent types distinct; commission, package, refund, hygiene and thresholds OPEN |
| RMD-62 v1.1 Manufacturing | R62-D01–D12 and WF-01–WF-14 FIX | Versioned BOM/formula/routing, release/quality gates and genealogy principles FIX; costing/WIP/MRP, yield, traceability and release thresholds OPEN |
| RMD-63 v1.1 Rental | R63-D01–D12 FIX | Unique internal asset identity, availability vs operational/safety readiness, custody and lifecycle separation FIX; pricing, damage, maintenance and write-off thresholds OPEN |
| RMD-64 v1.1 Pharmacy | R64-D01–D12 FIX | Prescription intake vs professional review/dispensing separated; batch/expiry/FEFO/quarantine principles FIX; regulated/controlled workflows require verified credentials and compliance gates; policy thresholds OPEN |
| RMD-65 v1.1 Laundry | R65-D01–D12 FIX | Order identity, custody chain, batch compatibility, process/QC and handover events separated; compensation/refund/adjustment thresholds OPEN |
| RMD-66 approval addendum | E-01 Manager Allowlist, E-02 Role Eligibility, E-03 Module Eligibility approved FIX; E-04 retains OPEN details | Approval applies to named Education mappings and 14 module groups; no implementation approval; student/minor/safeguarding restrictions remain |
| RMD-67 v1.1 Parfum/Fragrance | R67-D01–D12 FIX | Two distinct tracks: Retail/Refill and Formulation/Manufacturing; formula confidentiality, batch/QC/recall principles FIX; numeric tolerances, formula parameters, material lists and regulatory thresholds OPEN |
| RMD-68 approval addendum | H-01 Manager Allowlist, H-02 Role Eligibility, H-03 Module Eligibility approved FIX; H-04 retains OPEN details | Approval applies to named Hotel mappings and 14 module groups; 16 workflows; property/room/shift scope and guest-data SoD remain; no implementation approval |
| RMD-69 v1.1 unclassified/other | R69-D01–D12 FIX | Temporary classification lifecycle, fail-closed minimum safe mode, human review and no specialist auto-eligibility FIX; status transitions, SLA/expiry, reviewer authority and safe-mode function list OPEN |

The individual category addenda retain their stated thresholds, policy details, exact role allowlists, and technical requirements as OPEN/REVIEW where specified. Do not fill in numeric thresholds or infer role permissions from role names, category, module eligibility, or workflow membership.

### 13.2 Cross-category decisions CR and Q

The cross-category decision addenda establish:
- CR-01–CR-10: FIX — conceptual.
- Q-01–Q-06: FIX — conceptual in Decision Addendum v1.3; no Q item remains OPEN in that decision set.
- Finance/Accounting and Employee/HR Operator are CONDITIONAL across categories, not universal access bundles.
- Manager is a Business-level governance role; category-specific eligibility/allowlist and effective permission/scope remain separate.
- Education Instructor duties map to Production/Service Operator with assigned class/session scope; no new Instructor role approved at this stage.
- Hotel Housekeeping duties map to Production/Service Operator with assigned room/task scope; no new Housekeeping role approved at this stage.
- Supervisor/Shift Lead is CONDITIONAL only where shift/team/oversight workflow requires it.
- Inventory Operator and Warehouse Operator may be combined only where workflow, team, scope, responsibility, and controls/SoD permit.
- Pharmacy professional controls are not replaced by generic role eligibility.
- Parfum refill and formulation/manufacturing remain separate tracks.
- Specialist role eligibility must follow actual workflow, module eligibility, scope and controls; category alone is insufficient.

R51-08 (emergency Manager suspension outside Owner authority path) remains NOT APPROVED.

### 13.3 Cross-category matrix and workflow-to-module crosswalk are not final

The following source documents remain design/candidate artifacts, not final authorization matrices:
- Cross-Category Matrix Source Reconciliation v1.2: DRAFT / PARTIAL SOURCE RECONCILIATION / NOT FINAL / NOT FIX.
- Category Workflow-to-Module Crosswalk v1.3: DRAFT / CANDIDATE CROSSWALK / NOT FINAL / NOT FIX.
- Shared Core × Operational Module Eligibility Matrix v1.0: PROPOSED/CANDIDATE.
- Capability/Action Taxonomy v1.0: PROPOSED/CANDIDATE; vocabulary is not stable permission keys.
- Scope Dimension Matrix v1.0: PROPOSED/CANDIDATE; object scope and geographic/organizational scope are independent.
- SoD/Approval & Sensitive Data Classification Matrix v1.0: PROPOSED/CANDIDATE; field-level classifications, thresholds and exact approver mapping remain OPEN.

The Crosswalk v1.3 makes an important distinction:
- SOURCE FIX = category workflow/module-group principle approved conceptually.
- SOURCE APPROVED = Education/Hotel mapping approval specifically recorded for E-01–E-04 / H-01–H-04.
- CANDIDATE M-ID = proposed alignment to Shared Core M01–M21, not final approved module mapping.

Therefore, no category × M01–M21 cell is promoted to FIX by the crosswalk. In particular:
- G01 canonical module IDs/names: PARTIALLY RESOLVED; canonical catalogue approval OPEN.
- G02 exact category × module mapping: OPEN.
- G03 shared foundation vs operational module boundaries: PARTIALLY RESOLVED; exact foundation capability/per-role access OPEN.
- G04 submodule/workflow decomposition: OPEN.
- G05 capability/action taxonomy: PARTIALLY RESOLVED; vocabulary is not stable keys or grants.
- G06 scope dimensions: PARTIALLY RESOLVED; resolver, inheritance, multi-scope, expiry and per-module mapping OPEN.
- G07 SoD/approval/threshold/dual control: PARTIALLY RESOLVED; exact approver eligibility, thresholds and capability-level L0–L3 matrix OPEN.
- G08 sensitive data classification/field allowlists: PARTIALLY RESOLVED; field-level classification, masking, export, retention and jurisdiction mapping OPEN.
- G09 credential/regulatory/jurisdiction gates: PARTIALLY RESOLVED; evidence catalogue and exact gates OPEN. Pharmacy professional/controlled workflows remain NOT ELIGIBLE / NOT READY pending verified credentials/compliance.
- G10 negative-test mapping: PARTIALLY RESOLVED; tests are conceptual acceptance criteria, not executed evidence. Full traceability to M-ID/action/resource/scope/data class and expected allow/deny remains OPEN.

RMD-66 and RMD-68 approval addenda approve their named role/Manager/module-group mappings, not a blanket grant or every candidate M-ID. For other categories, M01–M21 alignments remain candidate unless explicitly approved by a source decision.

### 13.4 Category-specific safeguards preserved

- RMD-69 has no automatic specialist module or specialist-role eligibility. Do not invent the safe-mode function list.
- RMD-64 regulated/professional workflows require credential/compliance review; safe Pharmacy workflows are not automatically all blocked.
- RMD-67 M10/Formulation is conditional on confirmed formulation/manufacturing activity; retail/refill does not automatically require full manufacturing workflow.
- Hotel room/bed capacity, Education class/session capacity, Rental assets, and ordinary inventory are distinct resource domains; do not map them interchangeably.
- CORE/CONDITIONAL/REG is not a permission grant. Role eligibility is not module eligibility; module eligibility is not capability/action; none of these alone supplies scope or authorization.

### 13.5 Audit disposition

The category-level conceptual FIX decisions RMD-55–RMD-69 and cross-category CR/Q decisions are retained as FIX at their stated conceptual scope. No category FIX is reopened. The unresolved matrix, permission, scope, SoD, data-classification, threshold, credential and test-execution work remains OPEN/PROPOSED/CANDIDATE/NOT READY as stated. No permission key, role grant, module grant, schema, RLS, API, or implementation is approved by this audit.


## 14. RMD-47–RMD-54 role, permission, Owner authority, and approval audit

### 14.1 RMD-47 decision lineage — preserve each decision's actual status

RMD-47 v1.0 is an audit/decision brief, not a blanket approval. Its appendices must be read in sequence and their status boundaries preserved:

| Decision | Disposition established by source | Boundary / unresolved detail |
|---|---|---|
| R05-D13 | FIX — one Manager role per Business; authority varies through explicit permission and effective scope | No automatic Business-wide scope; technical resolver and enforcement not approved |
| R05-D14 | FIX — Custom Roles available on all Business packages; package may vary quota | No quota values or technical enforcement approved; package cannot unlock restricted permissions |
| R05-D15 | FIX — one member may hold multiple active business roles; effective permissions are combined | No implicit inheritance; all guards and SoD still apply; conflict/deny precedence remains OPEN under D25 |
| R05-D16 | FIX only for category-based role policy principle | Specific category-to-role mapping remains PROPOSED/REVIEW; role availability follows actual category/workflow |
| R05-D17 | FIX — only verified Owner manages Custom Roles (create/edit/disable/retire/archive); no default delegation to Manager/staff; preserve history | Lifecycle/versioning and handling active assignments on disable/retire remain OPEN |
| R05-D18 | FIX — Owner may grant/revoke roles in own Business; Manager only with explicit permission and effective scope covering target; no self-assignment/self-escalation | Final permission keys, sensitive target role classification, dual-control matrix and approval details remain OPEN |
| R05-D19 | PROPOSED/REVIEW, not final FIX | Sensitive-role taxonomy, Owner approval vs dual control per action, permission keys, scope of delegation and thresholds remain OPEN |
| R05-D21 | FIX — Category A absolutely prohibited for Custom Role; Category B ineligible for Custom Role and only via official standard-role path with special controls; Category C conditionally eligible | Stable keys, metadata, standard-role mapping for B, numeric thresholds and per-action approval matrix remain OPEN |

Additional RMD-47 appendices:
- D13–D15, D17–D18 and D21 are distinct conceptual/product policy approvals; do not collapse them into a single generic “RMD-47 approved” statement.
- RMD-47 v1.4 D16 approves the principle that standard staff-role offerings follow Business category and operational need; the specific role list per category is explicitly PROPOSED/REVIEW.
- RMD-47 v1.5 D17 confirms Owner-only Custom Role governance; Manager/staff delegation is not approved.
- RMD-47 v1.6 D18 confirms Owner and permission/scope-bounded Manager role assignment authority.
- RMD-47 v1.7/v1.8 D19 risk classification remains PROPOSED/REVIEW. It is not a final risk policy or a stable permission catalogue.
- RMD-47 v1.9 D21 brief was PROPOSED/REVIEW, then v2.0 explicitly approved the restricted-permission category policy as conceptual FIX. Use v2.0 for D21 status.
- Custom Role permission selection is Owner-only, but Owner cannot use Custom Role as a bypass for restricted capabilities. No hard-delete for used/referenced role, assignment or audit history.

### 14.2 RMD-48 and RMD-49 — candidate catalogue review, not approved keys

RMD-48 Global Permission Catalogue v1.0 is DRAFT / PROPOSED / REVIEW. Its candidate keys and initial A/B/C tier assignments are not final stable keys, approved grants, or a complete role-permission matrix.

The catalogue's conceptual separation is retained:
- Global permission describes the action/capability; Business role is tenant-scoped.
- Permission does not supply scope; scope does not create permission.
- Owner authority is not a business-role permission and must not be granted through roles/member_roles.
- Platform permissions are separate from tenant business-role permissions.
- Multiple active roles do not bypass guards or SoD.
- Custom Role can only use explicitly eligible Category C permissions; Category A and B are excluded.
- Unknown, disabled, deprecated, incompatible, or ineligible permissions fail closed.

RMD-49 is a read-only candidate refinement, not a FIX decision. Its findings are important constraints for the next mapping stage:
- F49-01: Custom Role create/update/retire must not be modeled as ordinary business-role permission grants; D17 makes this Owner-only.
- F49-02: Owner authority cannot be represented as a role permission; it needs a separate authoritative ownership resolver.
- F49-03: assignment view, request, approve/reject, grant/execute, revoke, and scope change are distinct actions.
- F49-04: Manager scope is a separate authorization input and must cover the target member and assignment context.
- Membership inactive/expired/revoked blocks access even if historical role assignment exists; role grant cannot activate membership.
- Sensitive employee/member data and bulk export require separate review and classification.
- Audit changes to grant/revoke/scope/Custom Role require append-only audit events.
All RMD-49 revised permission inventories remain CANDIDATE/REVIEW. No key is promoted by this audit.

### 14.3 RMD-50 — Manager role assignment allowlist

RMD-50 v1.0 is a proposal; RMD-50 v1.1 D50-01–D50-05 is the conceptual FIX source. Preserve:
- Manager may directly grant/revoke only operational roles explicitly present in the product allowlist for the relevant Business category/module, with active assignment permission, valid membership, target-matching effective scope and all guards.
- Supervisor/Shift Lead is not in the default Manager allowlist; Owner approval or independent control is required.
- Finance/Accounting and Employee/HR Operator are not in the default Manager allowlist; Owner approval/control is required according to capability and sensitivity.
- Manager role grant/revoke/replacement is Owner-only through verified Owner authority.
- Custom Role create/update/retire and permission selection remain Owner-only.
- Owner authority may grant/revoke roles through a separate ownership path, but does not bypass approval, dual control, SoD, threshold, source-authority, audit or non-waivable controls.
- Missing/ambiguous allowlist, membership, permission, scope, ownership resolver, approval state or metadata must fail closed.

Still OPEN/REVIEW: detailed allowlist per category/module and catalogue version; stable permission keys; sensitive role/permission matrix; Owner resolver technical model; multi-scope/expiry/revocation; approval workflow; audit event schema; concurrency/idempotency/cache invalidation; negative/acceptance tests; server-side/RLS enforcement.

### 14.4 RMD-51 — sensitive assignment and dual-control decisions

RMD-51 v1.1 records R51-01–R51-07 as conceptual FIX:
- L0: Manager delegated execution for operational roles explicitly in allowlist, with active permission, valid membership, target scope and all guards.
- L1: verified Owner approval for grant of Supervisor/Shift Lead, operational non-final Finance/Accounting and limited Employee/HR Operator.
- L2: dual control for Finance final/high-impact and HR/payroll/compensation/clearance/waiver/final-offboarding capabilities, with capability-level detail still required.
- L3: prohibited or separate authority path.
- Manager may revoke sensitive roles within effective scope for containment without waiting for grant approval, with append-only audit and notification/review. This does not permit ledger changes, history deletion, clearance resolution, waiver or bypass of non-waivable obligations.
- Manager assignment/replacement is Owner-only through verified Owner authority.
- Custom Role governance remains Owner-only.

R51-08 is explicitly FIX — NOT APPROVED: emergency Manager suspension/revocation outside the Owner authority path is not approved. Do not describe it as an available emergency capability or an ordinary TODO awaiting implementation.

OPEN/REVIEW remains for capability-level role/key mapping, Owner resolver edge cases, expiry/timeout/escalation/cancellation/delegation, emergency containment, scope-change approvals and Custom Role changes after use. Security readiness is NOT READY; implementation is NOT APPROVED.

### 14.5 RMD-52 — Owner authority resolver and ownership lifecycle

R52-D01–D10 are conceptual FIX:
- Every Business requires an authoritative ownership record/history. Profile, business role, member_roles, membership, invitation or user claim alone is not proof of Owner authority.
- Joint Owner is not supported as the product baseline. Ambiguous or multiple claims are held for verification; do not auto-select an Owner. No quorum/voting/any-one/all-required model is approved.
- Ownership transfer is append-only, preserving old/new party, Business, effective_at vs recorded_at, reason, evidence, actor, approval and status. Historical ownership must not be overwritten.
- Credible ownership dispute holds/rejects high-risk Owner-only actions according to policy.
- Owner unavailable/inactive/suspended does not automatically transfer authority; successor/representative requires separate verified process.
- Until multiple-Owner rules are explicitly decided, ambiguous multiple-owner cases fail closed.
- Resolver outcomes are AUTHORIZED, DENIED, PENDING_REVIEW, INDETERMINATE. Only AUTHORIZED may proceed.
- Approval binds to stable identity, Business, action, target, scope, material payload and time validity; material change invalidates prior approval.
- Platform Super Admin has no default Owner authority and cannot become replacement Owner. Recovery/legal-hold/emergency path is separate and not approved by R52-D09.
- Ownership claim, verification, transfer, correction, dispute, suspension, revocation, succession, resolver outcome and approval require append-only audit history.

OPEN/REVIEW/TODO: technical ownership record schema/evidence storage/resolver, legal evidence process, successor/representative policy, joint ownership legal/operational handling, approval lifecycle integration, expiry/timeout/concurrency/idempotency, audit schema, stable keys, server-side/RLS enforcement and tests. Owner authority and application access remain separate checks.

### 14.6 RMD-53 — approval lifecycle and delegation

R53-D01–D12 are conceptual FIX:
- Lifecycle states: DRAFT, SUBMITTED, PENDING_APPROVAL, APPROVED, REJECTED, CANCELLED, EXPIRED, EXECUTED, EXECUTION_FAILED, SUPERSEDED.
- Approval is not execution and never independently grants access.
- Request submission locks an immutable material payload/revision: Business, requester stable identity, target, action, role/capability, scope, reason, evidence/reference, expiry and policy version. Material change requires a new revision and invalidates prior approval.
- Requester cannot approve own request; SoD uses stable human identity across accounts, roles and sessions.
- L1 requires verified Owner approval; L2 requires at least two distinct human identities according to policy/capability. Multiple-Owner quorum remains undecided under R52-D06.
- Revalidate ownership, requester/approver/executor eligibility, membership, permission, scope, target state, SoD, expiry, policy version and payload/revision before execution.
- Request/approval expiry is explicit; no auto-approval or auto-extension.
- Cancellation/withdrawal is controlled by state and policy.
- Delegation is bounded by action, Business, scope, recipient stable identity, reason, period and authority; default no sub-delegation. Ownership/platform authority, Category A, Custom Role governance, Manager assignment and non-waivable clearance cannot be delegated through ordinary paths.
- Revocation/expiry blocks next authorization check and cancels dependent pending requests/approvals.
- Authority changes before execution require revalidation; uncertain or lost authority blocks execution.
- Approval/revoke/expiry/cancel/execute require request/revision identity and idempotency/concurrency controls.
- Notification is not approval; delivery status cannot change approval state.

OPEN/REVIEW/TODO: technical state machine, delegation schema, capability-specific policy matrix, expiry configuration, cancellation after partial approvals, escalation/approver unavailability, emergency delegation/recovery, stable permission keys, idempotency/concurrency and audit implementation. No emergency Manager suspension outside Owner path.

### 14.7 RMD-54 — capability-level mapping principles

R54-D01–D12 are conceptual FIX, but all actual permission keys and detailed mappings remain candidate/open:
- Capability/action is the smallest unit of permission mapping. View, create, update, request, approve, execute, export, reverse and administer must be separated where risk, authority, scope or SoD differs.
- Candidate standard role catalogue principle is accepted; actual role availability per Business category remains governed by category-specific eligibility.
- POS operational transaction capability is separate from discount, void and cash variance.
- Inventory movement is separate from adjustment, count reconciliation, transfer approval, dispatch and receipt.
- Finance input is separate from final posting, payout, settlement close, reversal and write-off; final/high-impact actions require L2 or stricter applicable control.
- Basic HR is separate from sensitive personal data, payroll, compensation, clearance, waiver and final offboarding; clearance follows OA-4 authoritative source-owner/delegate authority.
- Role assignment view/request/approve/execute/revoke/scope-change are separate capabilities.
- Custom Role create/update/retire/archive and permission selection remain Owner-only via Owner authority path.
- Audit event view and export are separate; audit modify/delete remains Category A prohibited; audit history append-only.
- Scope vocabulary is conceptually FIX: business, outlet, register, warehouse, assigned-record, own-record, none/platform. Actual scope must be explicit and resource-compatible; Business-wide scope is explicit, not inherited from role.
- All permission keys in RMD-54 v1.0 remain candidate only. D12 retains all listed gaps OPEN/REVIEW/TODO.

OPEN/REVIEW/TODO includes stable key catalogue/metadata, category role availability, final role-permission matrix, numeric thresholds, Finance approver eligibility, Manager scope/allowlist details, D25 deny/conflict precedence across multiple active roles, Owner resolver technical design, approval/delegation technical design, idempotency/concurrency/audit schema, server-side enforcement, RLS and executed acceptance/negative tests.

### 14.8 Cross-source reconciliation and audit disposition

The Authorization/Scope/SoD Index v1.1 Erratum is the later source for its corrections:
- Education and Hotel have dedicated conceptual approval addenda (E-01–E-04 and H-01–H-04); the older index v1.0 statements that those mappings were not approved are stale. Their explicitly OPEN details remain OPEN.
- RMD-69 D01–D12 is conceptual FIX; Lainnya remains a temporary classification/exception path, not an ordinary operational category.
- RMD-56 D01–D12 is conceptual FIX, but category × role/module, capability keys, scope, SoD, thresholds, data classification, test execution and implementation remain OPEN/NOT APPROVED.
- Capability/Action Taxonomy, Scope Dimension Matrix and SoD/Approval & Sensitive Data Classification Matrix remain PROPOSED/CANDIDATE.
- Cross-category CR/Q approvals do not make the entire matrix FIX.

No contradiction in this pass authorizes reopening a previously approved FIX. In particular, D19's proposal status must not be confused with D21's later FIX; D21 does not resolve D19's full risk/approval matrix. R51-08 remains NOT APPROVED. R52-D06 leaves joint-owner quorum undefined. RMD-48/49/54 keys remain candidates, not a final permission catalogue.

**Overall disposition:** conceptual policy baselines D13–D18, D21, D50, R51-01–07, R52-D01–D10, R53-D01–D12, and R54-D01–D12 are preserved at their stated scope. D16 specific category mapping, D19 full risk policy, detailed Manager allowlist, stable permission keys, role-permission matrix, scope resolver, approval matrix per capability, technical Owner resolver, D25 conflict precedence, schema/enforcement/RLS, audit event implementation and tests remain OPEN/REVIEW/TODO/NOT APPROVED as applicable. Security Readiness remains NOT READY. This audit grants no implementation authority.


## 15. Capability-level mapping, cross-category matrix, scope and SoD source audit

### 15.1 Status hierarchy — do not conflate eligibility with authorization

The following source artefacts were reviewed in this pass: Capability/Action Taxonomy v1.0; Cross-Category Matrix Design v1.0; Review & Refinements v1.1; Decision Addenda v1.2 and v1.3; Reconciled Matrix v1.1; Source Reconciliation v1.2; Permission Catalogue & Category × Role × Module Eligibility v1.0; Scope Dimension Matrix v1.0; SoD/Approval & Sensitive Data Classification Matrix v1.0; page-permission-scope matrix v1.0; and category workflow audits RMD-57 through RMD-62, plus Education and Hotel approval addenda.

The binding distinctions remain:
1. Category/activity classification is not authorization.
2. Role eligibility is not a role assignment or permission grant.
3. Module eligibility/entitlement is not capability authorization.
4. Capability/action is not sufficient without a valid permission, scope, context, object state and required approval.
5. UI/page visibility is not server-side authorization.
6. Owner and Platform Super Admin remain separate from the 12 standard Business roles; no new standard role is introduced by these design artefacts.

### 15.2 Cross-category matrix decisions and unresolved matrix status

The decision addenda establish:
- CR-01–CR-10: FIX — conceptual.
- Q-01–Q-06: FIX — conceptual (Q decisions were separately approved in v1.3; do not use v1.2 alone as the latest Q status).
- Finance/Accounting and Employee/HR Operator are CONDITIONAL across categories, not CORE or automatic assignments.
- Manager is a separate Business-level governance role, one per Business; operational authority requires the category/workflow allowlist plus permission and effective scope.
- Supervisor/Shift Lead is CONDITIONAL and tied to actual shift/team oversight.
- Education instructor duties map to Production/Service Operator with assigned class/session scope; no Instructor standard role.
- Hotel housekeeping maps to Production/Service Operator with assigned room/task/property/shift scope; no Housekeeping standard role.
- Inventory Operator and Warehouse Operator may be combined only when workflow, team, scope, volume, controls and SoD remain effective.
- Pharmacy professional/regulated actions require credential/compliance gates; generic role labels do not authorize prescription review, dispensing or controlled products.
- Parfum refill and formulation/manufacturing are separate workflows; simple refill does not imply full manufacturing capability.
- Specialist roles cannot be inferred from Business category alone.
- CORE CANDIDATE and CONDITIONAL are eligibility labels, never permission grants or authorization.

The reconciled Cross-Category Matrix v1.1 remains DRAFT / PROPOSED / CANDIDATE, not final. Source Reconciliation v1.2 remains DRAFT / SOURCE-RECONCILED PARTIAL / NOT FINAL / NOT FIX. Its review identifies unresolved G01–G10, including exact category × M01–M21 mapping, canonical module definitions, submodule/workflow decomposition, capability/action mapping, object/geographic scope, data classification and field allowlists, approval/SoD, and negative tests. Category workflow anchors are not a final M01–M21 permission grant matrix.

### 15.3 Capability/action taxonomy — vocabulary only

Capability/Action Taxonomy v1.0 is PROPOSED/CANDIDATE, not a final permission catalogue. Its action families (discover/list, view/read, create/draft, update/edit, assign/allocate, submit/request, review/verify, approve/reject, execute/process, export/download/share, administer/configure, reconcile/close, inspect/certify, publish/activate) are descriptive vocabulary only. They do not establish stable permission identifiers, role grants, final scope, approval thresholds, or implementation.

The mapping unit must be a specific action on a resource/object within a workflow. Split actions when authority, risk, scope or SoD differs. In particular:
- Request/submit is not approve; approve is not execute.
- View is not export; create/edit is not publish/release.
- Record facts is not approve a discrepancy or reconcile a ledger.
- Complete work is not independent QC/release.
- Payment capture is not refund/reversal/payout/settlement authority.
- Assignment is not scope grant; role assignment is not Owner authority.
- A category/module or UI flag cannot substitute for runtime authorization.

Every eventual mapping needs traceable resource/object, workflow/state, role eligibility, module eligibility, stable permission key, object scope, organizational/geographic scope, data class/field allowlist, context, approval/SoD, credential/compliance, expiry/revocation and audit provenance.

### 15.4 Permission Catalogue & Category × Role × Module Eligibility v1.0

This combined catalogue is DRAFT conceptual, not a final permission catalogue or implementation approval. Its own status register says:
- Standard-role catalogue: CANDIDATE.
- Category × Role mapping: PROPOSED/CANDIDATE.
- Module eligibility mapping: PROPOSED/CANDIDATE.
- Manager allowlist per category: OPEN/REVIEW.
- Permission names/keys: OPEN/REVIEW.
- Scope resolver, technical SoD and backend enforcement: OPEN/NOT READY.

A checkmark in its tables means candidate conceptual eligibility only. The document explicitly excludes automatic access. It must be read with the later CR/Q decision addenda and category-specific approvals; stale earlier draft labels cannot override later approval addenda. Platform roles are not tenant roles. Unknown, missing, ambiguous or unvalidated category must fail closed for eligibility and sensitive actions.

### 15.5 Scope Dimension Matrix v1.0

Scope Dimension Matrix v1.0 is PROPOSED/CANDIDATE. It provides a useful conceptual two-axis model:
- Object scope: which record/resource/object may be accessed (for example register, order, invoice, warehouse, room, assigned job, student, lot/batch).
- Organizational/geographic scope: which Business-owned unit/location/branch/team/property/site/warehouse applies.

Effective access is the intersection of the two dimensions plus capability, permission, membership, context, state, approval/SoD and compliance. Neither dimension creates permission.

Guardrails to preserve:
- No cross-Business inheritance.
- No upward inheritance from a child outlet/register to the parent Business.
- Parent-to-child inheritance is not a universal default; it requires explicit policy for the scope type, role/workflow and action.
- Business-wide scope must be explicit and bounded; it is not inferred from Manager or Owner labels.
- Multi-outlet/multi-warehouse access is an explicit list of active scopes.
- Object assignment does not expand geographic scope; geographic scope does not grant every object.
- Temporary scope needs expiry, revocation, reason and audit; exact lifecycle remains OPEN.
- Sensitive fields require purpose/relationship/field-level controls even inside an otherwise valid scope.

### 15.6 SoD, approval and sensitive data matrix v1.0

SoD/Approval/Sensitive Data Classification Matrix v1.0 is PROPOSED/CANDIDATE, not a final approval matrix. It provides design guardrails but does not settle nominal thresholds, exact tier assignment, approver counts or final role-to-approver mapping.

Preserve the binding cross-source FIX rules from R-03/RMD-51/RMD-53:
- Stable human identity, not separate login/session/device, is the SoD identity basis.
- No self-approval; no auto-approval because an approver is unavailable or a deadline expires.
- Approval and execution are separate.
- Material payload change requires revalidation/new approval.
- Revalidate actor, membership, scope, object state, approval validity and expiry before execution.
- Delegation does not erase independence or expand scope.
- High-risk/emergency controls cannot become a permanent bypass.
- Sensitive data needs need-to-know, object/unit scope and field allowlists; export/share is a separate action.

Still OPEN: numeric thresholds, exact risk-tier mapping per action, number of approvers, per-category approver eligibility, exception criteria, field-level classification/masking, retention, and technical enforcement.

### 15.7 Page × permission × scope matrix v1.0

The page matrix is PROPOSED and explicitly says its permission labels are descriptive examples, not technical keys. It is a UI/access design review, not a final catalogue or implementation approval. It records useful platform-side distinctions:
- PLATFORM_ADMIN has individual per-account grants; role label alone does not grant access.
- Platform support is target-specific and read-only by default, time-bound; write access is a separate grant.
- Refund separation: PLATFORM_ADMIN may submit/track; SUPER_ADMIN approves under the documented policy. Requester cannot approve their own request.
- Mass price changes and permanent Business deletion remain SUPER_ADMIN-only under the stated special procedures.
- Revocation must affect the next authorization request; active sessions must not preserve revoked privileges.
- Server-side checks, audit events, exact PA scope, write grants, API/RLS/schema and stable permission keys remain OPEN.

These platform controls do not merge PLATFORM_ADMIN with Owner or tenant roles and do not authorize cross-tenant access by default.

### 15.8 Category workflow audit sample — RMD-57 through RMD-62

The six category workflow audits are workflow discovery and candidate mapping sources; their recommendations must not be promoted to FIX merely because the documents exist. The later cross-category source reconciliation and approved category addenda control status. Specific workflow findings from the reviewed sources:

- **RMD-57 Retail:** Cashier sale/payment/receipt remains register/outlet scoped; discount, price override, void, refund, cash variance, count variance and reconciliation are separate candidate actions. Receiving facts, discrepancy approval, stock adjustment and transfer dispatch/receipt must not collapse into one permission. Customer lookup and export/sensitive fields require distinct controls.
- **RMD-58 Grosir/Distributor:** Supplier onboarding/terms, purchase request, PO create/submit/approve/amend, receiving/inspection/discrepancy, warehouse putaway, allocation/reservation, pick/dispatch, proof of delivery, invoice/payment allocation, credit/refund and transfer lifecycle are distinct candidate actions. PO creator/requester and approver, dispatch and receipt, credit/refund and inventory disposition require separation where policy mandates.
- **RMD-59 F&B:** Menu/recipe/version/price, table/reservation, order amendment, kitchen ticket, ingredient movement/waste, purchasing/receiving, payment capture, discount/comp/void/refund, cash close/variance and customer handoff are distinct workflow capabilities. Kitchen completion is not payment authority; readiness is not customer handoff; thresholds remain OPEN.
- **RMD-60 Service Provider:** Quotation/price exception, appointment/resource scheduling, work-order scope, assignment/dispatch, worker evidence, material issue/consumption/return, independent QC/rework/completion, invoice/payment, warranty/complaint and refund/reversal are distinct. Assigned worker scope is limited to assigned work/task; job completion is not QC or settlement authority.
- **RMD-61 Salon/Beauty:** Treatment/service catalogue and price, customer consultation/consent/sensitive notes, appointment/check-in, assigned treatment execution, qualification/eligibility, product usage/waste, package entitlement/redemption, payment, refund/void/complimentary service and room/resource readiness are distinct. Sensitive customer notes and treatment data need field-level purpose controls; qualification records are not role permissions.
- **RMD-62 Manufacturing:** Engineering/spec/BOM/formula/routing version approval/release, planning, production order release, material reservation/issue/return, work-center execution, QC/hold/disposition, production receipt/putaway, lot/serial genealogy/recall, maintenance return-to-service, subcontracting and cost/period close are distinct. Production completion is not quality release or unrestricted stock availability; cost adjustment/posting and period close require separate finance authority.

For these category audits, candidate role names are not grants. Scope is resource/workflow-specific (register, warehouse, order, assigned work, station, plant, work center, lot/batch, etc.); exact keys, thresholds, approval level and role mapping require separate decision records. Do not transpose one category's detailed workflow decision into another category without source authority.

### 15.9 Later category approval addenda checked in this pass

- RMD-66 Education approval addendum: E-01 Manager allowlist, E-02 role eligibility and E-03 module eligibility are FIX conceptual approvals. E-04 explicitly preserves all detailed OPEN items. Instructor/Tutor, Examiner/Assessor and Admissions Officer remain functions mapped to standard roles/capabilities or credential/assignment context, not new standard roles.
- RMD-68 Hotel v1.1 approval addendum: H-01 Manager allowlist, H-02 role eligibility and H-03 module eligibility are FIX conceptual approvals. H-04 preserves all nine groups of OPEN details. Housekeeping remains mapped to Production/Service Operator with assigned room/task/property/shift scope; no new Housekeeping role.
- These approvals do not approve capability keys, detailed scope, sensitive data access, thresholds, approval/SoD, technical enforcement or Production implementation.

### 15.10 Audit disposition and remaining source gaps

**Confirmed status:** CR-01–CR-10 and Q-01–Q-06 are FIX conceptual; the reconciled Cross-Category Matrix remains DRAFT/PARTIAL/NOT FINAL; Capability/Action Taxonomy, Permission Catalogue v1.0, Scope Dimension Matrix v1.0, SoD Matrix v1.0 and page-permission-scope matrix v1.0 remain PROPOSED/CANDIDATE. RMD-66 and RMD-68 have approved eligibility addenda with their explicit OPEN details retained. RMD-57–RMD-62 workflow documents are candidate audit sources, not blanket approvals.

**Not established by this pass:** final M01–M21 category mapping; final category × role × module × capability matrix; final stable permission keys; exact role-to-permission grants; object/geographic scope resolver; field-level allowlists and data classification; approval tier/threshold/approver per capability; D25 deny/conflict precedence; executed negative tests; server-side/RLS enforcement and Security Readiness.

The precise source documents labelled RMD-20, RMD-43 and RMD-46 were not located by exact filename in the current visible Library listing for this folder. References to their baseline in later RMD-47/RMD-48 material are not a substitute for inspecting those originals. Their individual source lineage and any unique decisions remain UNVERIFIED until the exact documents are located and read.

**Next audit sequence:** locate and inspect the original RMD-20/RMD-43/RMD-46 sources; then continue category workflow source audits RMD-63–RMD-65, RMD-67 and RMD-69 and their approval addenda/errata; then reconcile all category decision sources against M01–M21 and capability/action taxonomy. No final role-permission matrix should be issued as approved until this lineage and each capability's approval/scope/data/SoD requirements are traceable.

This section is documentation-only. No source archive file was changed. No permission key, role grant, module grant, schema, RLS, API, code or implementation status is approved by this audit. DB_PUSH_BLOCKED remains ACTIVE; Security Readiness remains NOT READY.


## 16. Category decision addenda RMD-57–RMD-69 — provenance and capability boundaries

This pass checked the decision addenda for RMD-57–RMD-68 and RMD-69, alongside their audit briefs where available. The addenda are the authority for conceptual FIX status; the original audit briefs remain preserved as source history. All decisions below are conceptual only and do not approve stable permission keys, exact role grants, thresholds, schema/RLS, code or implementation.

### 16.1 RMD-57 through RMD-62 status reconciliation

| Category source | Decision status | Specific controls fixed conceptually | Still OPEN / NOT APPROVED |
|---|---|---|---|
| RMD-57 Retail | R57-D01–D12 FIX | WF-01–12 baseline; Cashier register/outlet boundary; separate discount/override/void/refund/cash variance; inventory count/variance/adjustment separation; procurement vs PO approval; customer minimum necessary; Finance action separation | Discount/refund/stock-count/PO/cash thresholds; final keys and exact allowlists; implementation |
| RMD-58 Wholesale/Distributor | R58-D01–D12 FIX | WF-01–14; procurement/PO/receiving/discrepancy/payment separation; warehouse/bin scope; reservation ≠ movement; fulfillment lifecycle; finance and returns/transfer events separated | Pricing/credit/PO/receiving/return/AR/AP thresholds; exact keys and allowlists; implementation |
| RMD-59 F&B | R59-D01–D12 FIX | WF-01–14; menu/recipe/pricing/costing separation; order/fulfillment lifecycle; reservation ≠ consumption; procurement/receiving; Cashier boundary; waste/spoilage/comp/remake distinct; customer minimization; register close vs variance | Tax/service charge, discount/comp/refund, waste, recipe costing, procurement and cash thresholds; exact keys/allowlists; implementation |
| RMD-60 Service Provider | R60-D01–D12 FIX | WF-01–14; catalog/quotation/price approval/customer acceptance/work-order scope distinct; lifecycle stages separate; assigned worker scope; execution vs independent QC; material events separate; finance separation; partner/subcontractor scope | Work-order change/partial completion/reopen, quality/evidence, warranty, costing, subcontractor and financial thresholds; exact keys/allowlists; implementation |
| RMD-61 Salon/Beauty | R61-D01–D12 FIX | WF-01–14; restricted consultation/photo data; assigned treatment scope; skill eligibility ≠ permission/legal license; treatment vs QC; retail product vs consumables; package entitlement lifecycle; Cashier vs finance boundary | Commission/payout, package, consent/retention, product usage, refund and hygiene thresholds; exact keys/allowlists; implementation |
| RMD-62 Manufacturing | R62-D01–D12 FIX | WF-01–14; controlled engineering/BOM/routing versioning; planning vs production order/release/execution; immutable material movements; independent QC; quality release before unrestricted finished-goods availability; traceability; maintenance return-to-service; subcontracting controls | BOM effectivity, MRP, release gates, partial completion/rework, lot/serial rules, costing/WIP/variance, quality and write-off thresholds; exact keys/allowlists; implementation |

RMD-57 through RMD-62 addenda explicitly retain OPEN thresholds and exact role allowlists/permission keys. Their conceptual FIX decisions must not be mistaken for numerical policy or implementation approval.

### 16.2 RMD-63 Rental / Equipment

R63-D01–D12 are FIX conceptual:
- Unique internal asset identity per Business.
- Booking availability is distinct from operational readiness, inspection, safety and maintenance status; active hold blocks booking/dispatch as applicable.
- Reservation, booking confirmation, contract acceptance, dispatch, handover, return and close are separate lifecycle stages.
- Rate-plan authoring/approval, quotation, discount/override, waiver and contract amendment are separate capabilities.
- Prevent double booking with conflict validation, hold expiry, idempotency and concurrency control.
- Quotation/contract are versioned; material change after customer acceptance requires amendment/re-acceptance.
- Handover and return are separate custody events with evidence.
- Inspection/damage assessment is separate from charge/claim approval where SoD applies.
- Payment capture, deposit allocation, invoice/AR, refund, payout, claim settlement and write-off are separate.
- Maintenance/safety hold cannot be cleared just by closing a work order; return-to-service needs appropriate inspection/approval.
- Branch/yard/location is the default scope for assets, booking, handover and maintenance.
- Customer identity, documents, photos and incident/claim data require purpose-limited access.

OPEN: discount/rate/waiver, purchase/repair/maintenance cost, write-off/asset disposal thresholds and detailed compliance. No final keys/allowlists or implementation.

### 16.3 RMD-64 Pharmacy / Apotek

R64-D01–D12 are FIX conceptual:
- Pharmacy product classification includes prescription, storage and handling requirements.
- Batch/lot/expiry traceability; distinct stock states include available, reserved, quarantine, recalled, expired, damaged and returned-pending-assessment.
- FEFO is the conceptual baseline for expiry-controlled products; override cannot bypass expired/recalled/quality-blocked status.
- Prescription intake/administration is separate from professional review and dispensing authorization.
- Professional actions require verified qualification/registration/license, assignment and supervision as applicable; app role name alone is insufficient.
- Review, authorization, picking, final check, labeling, handover and counseling documentation are separate.
- OTC sale is separate from prescription dispensing.
- Return/complaint/recall includes quarantine and batch traceability.
- Count, adjustment, expiry write-off, recall disposition and destruction are separate SoD actions.
- Prescription/patient data is need-to-know and purpose/scope limited.
- Controlled/special products require a separate validated regulatory gate before activation.

OPEN: FEFO exceptions, expiry horizons, purchasing/receiving/adjustment/write-off/destruction thresholds, local regulatory/professional verification, exact keys/allowlists and implementation. No dispensing policy or regulated workflow is approved by generic role eligibility or subscription entitlement.

### 16.4 RMD-65 Laundry

R65-D01–D12 are FIX conceptual:
- Unique order identity and item/group traceability where required.
- Intake facts and customer confirmation are recorded separately from later processing.
- Custody events are separate across intake, sorting, production, finishing, packing, storage, pickup/delivery and handover.
- Sorting/batching requires compatibility; production stages and QC/rework are distinct.
- QC pass/reject, rewash, damage, loss and complaint are separate statuses/events; independent review cannot self-approve.
- Packing/storage follow order manifest; ready-for-pickup requires item-level completion/quality controls.
- Dispatch, pickup, delivery, failed delivery and handover are separate events with proof.
- Production, custody and payment states are distinct.
- Complaint/damage assessment is separate from compensation/refund/claim approval.
- Consumables/spare parts are separate Business inventory from customer-owned items.
- Outlet/assignment is default scope; customer photos/address/instructions are restricted.

OPEN: discount/price/compensation/refund/stock/write-off thresholds, operational policies, exact keys/allowlists and implementation.

### 16.5 RMD-66 Education and RMD-67 Parfum

RMD-66 approval addendum: E-01 Manager allowlist, E-02 role eligibility and E-03 module eligibility are FIX conceptual; E-04 preserves detailed OPEN items. The separate R66-D01–D12 addendum is also FIX conceptual. Instructor/Tutor, Examiner/Assessor and Admissions Officer are functions mapped to existing roles/capabilities or credential/assignment context, not new standard roles. Student/minor data, grades, safeguarding, payroll, refunds and scholarship access remain purpose/scope/SoD restricted; detailed policy remains OPEN where the source says so.

R67-D01–D12 are FIX conceptual for Parfum/Fragrance:
- Separate simple refill and formulation/manufacturing tracks; category/business model does not grant access.
- Preserve volume/unit integrity and distinguish customer-owned containers from shop-owned containers.
- Refill consumption is recorded as inventory movement; formula/ingredients are confidential.
- Formula create/edit/review/approve/release/export are distinct and versioned.
- Batch/lot traceability applies where needed; production lifecycle, yield, QC/hold/release are distinct.
- Procurement, packaging and costing controls are separated.
- Candidate operational roles have bounded capabilities and scope; role is not a permission bundle.
- Safety/regulatory/recall readiness remains a prerequisite for relevant workflow activation.

OPEN: numeric tolerances, PO/price/refund/write-off/variance/batch-release thresholds, exact permission keys/allowlists/capability matrix, technical implementation and compliance review.

### 16.6 RMD-68 Hotel / Penginapan

R68-D01–D12 are FIX conceptual, alongside H-01–H-03 approved Manager/role/module eligibility and H-04 preserving all nine groups of OPEN detail:
- Room inventory, booking availability and operational readiness are distinct.
- Unit readiness, housekeeping task and room assignment lifecycle are separately tracked.
- Reservation lifecycle/concurrency and guest data protection apply.
- Front Desk and housekeeping are property/task/unit scoped; housekeeping uses existing Production/Service Operator mapping, not a new standard role.
- Maintenance and return-to-service are distinct.
- Folio/charge integrity, rate-plan authoring/approval/publication/override and finance SoD/night audit are separated.
- Group/corporate/agency access follows booking/billing relationship and purpose.
- Integration, safety and compliance controls remain distinct.

OPEN: overbooking, rate/discount/cancellation/no-show, folio/ledger/write-off thresholds, detailed scope/permission keys and technical enforcement. H-04 remains OPEN; the addendum does not approve all details.

### 16.7 RMD-69 Other / Unclassified

R69-D01–D12 are FIX conceptual:
- “Other / Unclassified” is a temporary classification and exception path, not an ordinary operational category or universal access route.
- One primary category plus activity tags; tags do not grant module entitlement, role eligibility or access.
- Conceptual classification lifecycle includes UNCLASSIFIED, UNDER_REVIEW, TEMPORARY, CLASSIFIED, RECLASSIFICATION_REQUIRED and RESTRICTED.
- Fail-closed and minimum safe mode apply; sensitive, regulated and high-risk capabilities are held pending review.
- Ambiguity/high risk requires human review by authorized reviewer.
- Module eligibility is based on confirmed workflow and minimum need, not selecting “Other”.
- Role, capability, scope, approval and SoD remain separate; no generic superuser role.
- Reclassification preserves history, reason, actor/reviewer, timestamps and effective date.
- Change triggers/periodic review, exceptions/restrictions/suspension/appeal, data minimization and taxonomy promotion are governed and auditable.

OPEN: exact status transitions, SLA/expiry, escalation, evidence/reviewer criteria, minimum safe-mode functions, confidence/human-review thresholds, impact on active tenant/module/contract/billing, retention/privacy, final matrix/keys and technical implementation.

### 16.8 Consolidated category status

RMD-57–RMD-69 D01–D12 are recorded as conceptual FIX in their respective decision addenda, with category-specific boundaries above. RMD-66 and RMD-68 also have distinct approval addenda for Manager allowlist, role eligibility and module eligibility; those addenda expressly preserve E-04/H-04 OPEN detail. None of these decisions approves final permission keys, exact grants, numeric thresholds, schema/RLS, API or implementation.

The 13-category/12-standard-role baseline is preserved. Owner and Platform Super Admin remain separate. No new standard role is inferred from category workflows. A role/capability assignment must still be separately justified by actual workflow, module eligibility, stable permission, explicit scope, data classification, SoD/approval, credentials/compliance and audit.

### 16.9 Source lookup status — RMD-20, RMD-43, RMD-46

The exact source files labelled RMD-20, RMD-43 and RMD-46 are still not present under those exact identifiers in the current visible Library listing. Searches using those identifiers and authorization/permission terms surfaced related RMD-47/RMD-48 material, not the original source documents. Do not infer their contents from downstream references. Mark their direct provenance UNVERIFIED until located.

**Next work:** retrieve exact original RMD-20/RMD-43/RMD-46 files if available elsewhere in the archive; complete a source-to-capability trace for every category; then resolve the remaining matrix gaps. The final role × module × capability × permission × scope matrix remains NOT FINAL / NOT APPROVED. This addendum records audit findings only; no implementation authority is granted.

## 12. Append-only erratum — later archive snapshot and REC-05/REC-06 dispositions

The initial worklist in §4 and the interim table in §10 recorded REC-05 and REC-06 as `OPEN` before the later individual evidence updates were incorporated. For current status reporting, those interim entries are superseded by the later evidence-based dispositions: **REC-05 PARTIAL** and **REC-06 PARTIAL**. Neither is CLOSED. REC-07 and REC-08 also remain PARTIAL with the limitations stated in the current Master Audit Coverage register.

The later Library snapshot is documented in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md`: 200 files across seven folders, replacing the earlier 198-file/one-visible-folder snapshot only as the later point-in-time path/count observation. The earlier snapshot is retained as historical evidence. The current REC path is `/Arsip Proyek POS SaaS/REC/`, and both REC-06 v0.1 artifacts are present there: the Permission Catalogue Overlay and the Education/Hotel Workflow-to-Capability Traceability Matrix.

REC-05 remains partial because full source coverage, provenance and acceptance are not verified. REC-06 remains partial because G02 exact category × module mapping and G04 submodule/workflow decomposition remain OPEN, along with final capability/action, scope, data-purpose, SoD and stable permission-key mapping. File presence or folder organization does not satisfy substantive acceptance criteria.


## 13. Append-only correction — current Library snapshot and PR #3 disposition (15 November 2026)

The 198-file / one-folder observation in §2 and the reference to “all 198 files” in §15.10 describe the earlier 14:40:50 UTC snapshot only. They are not the latest Library state. The later recursive listing captured in `POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md` records **200 files across seven folders** (Audit 11, Authorization 17, Blueprint 10, ERD 71, REC 19, Review 11, RMD 61). The 198-file source inventory remains historical evidence; the later snapshot does not by itself close REC-03 or establish content-level audit of all 200 files.

The initial REC-05/REC-06 OPEN worklist and later PARTIAL dispositions remain governed by the subsequent erratum in §12 and the current Master Audit Coverage register. REC-01 through REC-08 remain PARTIAL; none is CLOSED by this inventory update.

The documentation baseline PR #3 was merged into `main` on 15 November 2026, merge commit `c3748aa0f6f89d12622cce33ca49ccb813a253f6`. Any earlier statement that PR #3 remains open or awaits merge is historical only. No further PR is thereby approved for merge.
