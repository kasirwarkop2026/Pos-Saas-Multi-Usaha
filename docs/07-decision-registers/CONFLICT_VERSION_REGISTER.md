# DOC-10 — Conflict & Supersession Master

**Project:** POS SaaS Multi-Usaha v3.0  
**Source:** DOC-10 v0.2 — consolidated working register, 16 November 2026  
**Status:** DRAFT / CONSOLIDATED WORKING REGISTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL  
**Control:** READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE  
**Proposed GitHub path:** docs/07-decision-registers/CONFLICT_VERSION_REGISTER.md

> Reconstructed publication copy of the Library DOCX working master. Historical wording is preserved as a dated baseline. Section 10 is a later append-only clarification; it does not make DOC-10 canonical or final.

## 1. Purpose and authority

This master records version lineage, limited supersession, append-only errata, unresolved conflicts, canonical status and provenance gaps. It complements DOC-00 Document Control, DOC-08 Master FIX Register and DOC-09 Master OPEN Register; it does not replace primary source decisions.

- An approved FIX/addendum controls only its explicit scope. A later date, filename, upload timestamp, file size or listing order is not proof of approval.
- Supersession is narrow: a later decision replaces only the stated decision, field, parameter or status. Historical documents remain preserved as historical evidence.
- Errata correct only explicitly identified statements; they do not erase the original or silently rewrite unrelated sections.
- If versions conflict and no explicit selection approval exists, retain both and mark canonical unresolved.
- Missing sources remain UNRECOVERED/UNVERIFIED; do not reconstruct missing FIX decisions.
- Document review completion is not substantive closure. Design closure is not implementation, test execution, security verification or Production readiness.

## 2. Control summary

| Area | Controlled interpretation | Status / boundary |
|---|---|---|
| Archive inventory | Snapshot 202 (15 Nov) remains historical; manifest 231 (16 Nov) is the later baseline for its stated scope. | LIMITED; append-only index correction required. |
| Authorization Index | Erratum v1.1 controls only corrected status/provenance statements; v1.0 remains historical. | LIMITED SUPERSESSION |
| Sitemap / Wireframe | Sitemap Erratum v1.1 corrects named interpretations; UI and wireframes remain proposed. | PROPOSED |
| Category consolidation | RMD-68/RMD-69 and Category Erratum v1.1 update stale Hotel/Lainnya status only within scope. | LIMITED SUPERSESSION |
| A12.16 / A12.17 | A12.17 replaces cardinality only; other A12.16 history is retained. | LIMITED SUPERSESSION |
| MWA / A12.37 | Conceptual MWA pool basis clarified; physical costing/concurrency remains open. | CONCEPTUAL ONLY |
| RMD-56 v1.2 | Multiple differing content variants; no approved canonical physical-file selection. | UNRESOLVED |
| ERD v9.6.9 | Most complete working reference identified, not canonical/final. | CONTROLLED REFERENCE |
| A12 / D40 missing sources | A12.18–28 and D40-203–216 unrecovered; D40-244/253 not accepted as replacements. | UNRECOVERED / UNVERIFIED |
| Entity-count discrepancies | Purchasing 15/14 and Sales 20/18 lack complete entity crosswalks. | OPEN |
| A12.40 / A12.41 | A12.40 0/12 fully met; A12.41 gates FAIL/NOT VERIFIED and work not started. | PARTIAL / NOT STARTED |

## 3. Master conflict/version/supersession register (CVS-001–041)

| ID | Source / versions | Controlled relationship / disposition | Status / required action |
|---|---|---|---|
| CVS-001 | Archive Index/Register snapshots 200/202 vs manifest 231 | 231 is later baseline for its scope; 200/202 remain historical. | Append-only index/register addendum; preserve both. |
| CVS-002 | Manifest SHA-256 231 | 231 paths matched Library in stated audit; two audit artifacts outside snapshot. | Scope-limited verified baseline; do not extrapolate. |
| CVS-003 | Legacy mixed document-review and decision statuses | Stage 3.3 establishes separation of document_review_status and decision_status. | Apply in next master index/register version; history unchanged. |
| CVS-004 | Legacy audit order vs actual Stage 2 plan | Actual work followed Stage 2.1–2.7. | Append-only correction; preserve historical order. |
| CVS-005 | ChatGPT Archive vs GitHub as active workspace | GitHub workspace statement applies only after migration is completed and verified. | DEFERRED; separate migration gate and approval. |
| CVS-006 | Blueprint v1.0 vs v3.0 | v3.0 is newer consolidated working draft; v1.0 historical. | v3.0 remains DRAFT, not final. |
| CVS-007 | Blueprint V-05 MWA vs A12.37 | MWA default per Business + product/variant + inventory location; FIFO alternative. | Conceptual only; physical schema, concurrency and costing OPEN. |
| CVS-008 | Blueprint R-01–R-06 and P-01–P-08 | Audit 2.3/A12 provide scoped cross-references, not blanket closure. | Each R/P ID needs controlling source and evidence. |
| CVS-009 | Category Consolidation v1.0 stale Hotel/Lainnya status | RMD-68/RMD-69 and Category Erratum v1.1 update stated status. | Old statements historical; technical details OPEN. |
| CVS-010 | Sitemap v1.0 vs Decision Erratum v1.1 | Erratum controls named status/provenance only; 11 existing menus retained; Admin & Permission candidate. | UI PROPOSED; no implementation inference. |
| CVS-011 | Super Admin/Platform Admin wireframe v1.0 | No replacement approval identified. | PROPOSED; acceptance criteria are not test evidence. |
| CVS-012 | Category crosswalk and role-module matrices | Only explicit RMD/Authorization addenda are FIX within scope. | Overall matrix/Crosswalk v1.3 DRAFT/CANDIDATE/OPEN. |
| CVS-013 | Authorization Index v1.0 vs Erratum v1.1 | Erratum controls named status/provenance corrections only. | v1.0 historical. |
| CVS-014 | Cross-Category Q01–Q06 v1.2 | Q01–Q06 Decision Addendum v1.3 sets conceptual FIX for those decisions. | Whole matrix not final; direct CVS locator for Q01–Q06 only. |
| CVS-015 | Cross-Category CR01–CR10 | CR01–CR10 Decision Addendum v1.2 sets conceptual FIX within scope. | Stable keys/full matrix OPEN; direct CVS locator for CR01–CR10 only. |
| CVS-016 | Permission catalogue, capability/action, scope, SoD, page-permission matrices | O/CR/Q and RMD addenda fix only explicit principles/decisions. | Matrices proposed/candidate; general context, not primary approval evidence. |
| CVS-017 | RMD-66 Education / RMD-68 Hotel | E-01–E-03 and H-01–H-03 conceptual FIX via addenda/Erratum v1.1. | E-04 and H-04 OPEN. |
| CVS-018 | RMD-69 prior status vs v1.1 D01–D12 | D01–D12 conceptual FIX; Lainnya temporary classification/exception path, not permissive operating category. | Safe-mode/lifecycle details OPEN. |
| CVS-019 | RMD-56 v1.2 variants | REC-01 found no canonical selection approval; approval provenance and canonical physical-file selection are separate. | UNRESOLVED; preserve all entries/variants; see §10. |
| CVS-020 | RMD-47 D16/D19 and early recommendations | D13/D14/D15/D17/D18/D21, D50, R51–R54 FIX only where explicit; D16/D19 not wholly FIX. | Do not infer remaining portions FIX. |
| CVS-021 | RMD-67 Parfum | Two conceptual tracks: Retail/Refill and Formulation/Manufacturing. | Full Manager/Role/Module mapping not approved. |
| CVS-022 | A12.16 vs A12.17 | A12.17 replaces cardinality only: one eligible negative allocation references one original consumption; compensation may be 1:N with aggregate not exceeding eligible original quantity. | Other historical scope retained. |
| CVS-023 | A12.30 vs A12.30F-01..04 | Four conceptual FIX areas: settlement/bank matching; PO-receipt-supplier invoice 3-way match; centralized source/event identity registry for inventory movement; audit/integration/security/reporting/offline principles. | A12.30 overall OPEN. |
| CVS-024 | A12.29 | Closed only for conceptual entity reconstruction/classification. | Physical specification OPEN. |
| CVS-025 | A12.37 MWA/FIFO | Closed for conceptual MWA per Business + product/variant + inventory location; FIFO alternative. | Physical costing/concurrency OPEN. |
| CVS-026 | A12.38 | Closed only for conceptual domain audit/gap register. | Physical data dictionary OPEN. |
| CVS-027 | A12.39 | Closed only for conceptual relationship/constraint specification. | Physical constraints, indexes and implementation OPEN. |
| CVS-028 | A12.40 AC40-01..12 | 0/12 fully met; PARTIAL/OPEN. | No closure/replacement inferred. |
| CVS-029 | A12.41 GATE-01..07 | FAIL/NOT VERIFIED; NOT STARTED. | No readiness approval. |
| CVS-030 | A12 Decision Register v0.5 and consolidated A12 | Working draft, not user-approved canonical; metadata/page baseline mismatch noted. | No master selection without document-control approval. |
| CVS-031 | ERD 5.9.3 lineage and ERD v9.6.9 | v9.6.9 most complete working reference, not canonical/final. | Other versions remain historical. |
| CVS-032 | 17 conceptual inventory tables vs inventory_cost_layer_movements | Candidate not approved as table 18. | Do not promote into baseline. |
| CVS-033 | Purchasing 15 vs earlier 14 entities | No entity-by-entity reconciliation. | OPEN; prepare source-based crosswalk. |
| CVS-034 | Sales 20 early vs later 18 entities | No complete crosswalk. | OPEN; prepare source-based lineage/disposition. |
| CVS-035 | A12.18–A12.28, D40-203–D40-216, D40-244/D40-253 | Sources unrecovered/unverified or not accepted as replacements. | No reconstruction; retain unresolved status. |
| CVS-036 | REC-02 123/123 identical pairs / 246 archive files vs CSV 318 copies | 72-copy difference not individually path-verified; 115 names listed once; eight names absent; size match is not byte identity. | Do not claim all copies identical; eight remain absent/unresolved. |
| CVS-037 | REC-03 snapshots 322→328→333 | Raw timestamped listings for 322/328 unavailable; latest reported 311 root + 22 Batch Audit = 333. | Do not attribute per-file changes without evidence. |
| CVS-038 | REC-04 coverage workbook 137 entries | 47 REVIEWED + 90 PARTIAL; 54 normalized basenames Manifest 157 minus Coverage 137; exact 66 outside-coverage list unverified; nine old full filenames withdrawn by erratum. | REVIEWED is not approval; retain corrected interpretation. |
| CVS-039 | REC-05/06 authorization/workflow evidence | M01–M21/action vocabulary candidate; E-04/H-04 open; CORE/CONDITIONAL are not grants. | Mapping, keys, scope, data, SoD and approval OPEN. |
| CVS-040 | REC-08 Batch 7–9 security evidence | Standalone Batch 7/8 reports, Batch 9 report and consolidated finding register not recovered. | Historical secondary evidence only; no current-state/remediation claim. |
| CVS-041 | Historical security snapshot | Reported tenant schema/RLS/server authorization gaps, platform-admin middleware limitation, absent tenant/RLS CI tests and Security Advisor warning Leaked Password Protection Disabled. | Historical finding only, not live Production status; readiness NOT VERIFIED / NOT READY. |

## 4. Canonical master status

| Artifact / area | Status | Interim rule |
|---|---|---|
| RMD-56 v1.2 variants | UNRESOLVED | Retain all entries/variants; no inferred winner. |
| A12 Decision Register v0.5 | WORKING DRAFT; NOT USER-APPROVED CANONICAL | Working evidence only within provenance limits. |
| ERD v9.6.9 | MOST COMPLETE WORKING REFERENCE; NOT CANONICAL | Locator only; never call final/master approved. |
| ERD physical schema | NOT ESTABLISHED | No approved canonical physical schema. |
| Category Workflow to Module Crosswalk v1.3 | DRAFT | Not final matrix or permission grant. |
| M01–M21 permission catalogue | CANDIDATE / OPEN | No stable final permission keys. |
| Category × Role × Module × Capability matrix | DRAFT / OPEN | Only explicit addendum decisions FIX. |
| Master Archive Index/Register | NEEDS NEW VERSION / ADDENDUM | Manifest 231 baseline for stated scope; snapshot 202 historical. |
| Sitemap/Wireframe UI | PROPOSED | Erratum corrects named interpretations only. |

## 5. Conflicts that must never be resolved by inference

- Do not select either RMD-56 v1.2 variant without explicit document-control approval.
- Do not call A12 v0.5 canonical because its filename/title says canonical; do not call ERD v9.6.9 final.
- Do not add inventory_cost_layer_movements as approved table 18 without approval.
- Do not resolve Purchasing 15/14 or Sales 20/18 by assumed deletion/merge; require entity-level crosswalk.
- Do not reconstruct A12.18–A12.28 or D40-203–D40-216 from missing sequence numbers; do not accept D40-244/D40-253 as replacements without provenance and approval.
- Do not extend REC-02 123/123 pair result to all 318 copies or all 115 names.
- Do not attribute REC-03 snapshot changes to individual files without raw historical listings.
- Do not treat REC-04 66 outside-coverage count as a verified exact list.
- Do not present REC-08 historical security observations as current Production state.
- Do not interpret conceptual CLOSED A12.29/A12.37/A12.38/A12.39/A12.30F as physical model, tests or implementation readiness closure.

## 6. Prioritized resolution plan

- **P0 — Protect decision authority and provenance:** preserve FIX scope; recover A12.18–A12.28 and D40-203–D40-216 if available; define approval process for RMD-56/A12 canonical selection; do not promote ERD v9.6.9.
- **P1 — Reconcile version/entity lineage:** Purchasing 15/14 crosswalk; Sales 20/18 crosswalk; append-only Index/Register addendum for manifest 231 and two status dimensions; Category Consolidation supersession note referencing RMD-68/69.
- **P2 — Complete evidence provenance:** resolve eight REC-02 absent names; recover REC-03 raw snapshots; exact REC-04 outside-coverage list; Batch 7/8/9 security reports and consolidated findings. Current security verification requires separate authorization.
- **P3 — Traceability:** link each supersession to decision ID, source file, approval, date, scope, replaced field/text and retained historical reference; link unresolved conflicts to DOC-09 IDs. Do not close technical items through version reconciliation.

## 7. Closure requirements for conflict/canonical selection

- Primary source or verifiable approval provenance exists.
- Version identity and document content are distinguishable and locatable.
- Selection decision states rationale, approver, date and exact scope.
- Historical versions remain preserved and supersession relationship is recorded.
- No scope expansion changes an existing FIX decision.
- Implementation/security claims require relevant runtime/test evidence; design documents alone are insufficient.
- Canonical status is recorded in an append-only updated register and index.

## 8. Stage 3.4 disposition and Stage 4.8 boundary — historical wording

The Library DOCX v0.2 records that Stage 3.4 completed as initial consolidation of identified conflicts and lineage, not canonical selection or closure of all conflicts. DOC-10 v0.2 is a master working representation of Stage 3.4 v0.1; it does not replace primary sources, select canonical documents, close conflicts or authorize implementation.

The original DOCX also states that Stage 4.8 remained in progress and that Stage 4.9 required separate authorization. This dated source wording is retained as historical; the current checkpoint is clarified in §10.

## 9. Governance guardrails — historical wording

The Library DOCX v0.2 establishes READ-ONLY • APPEND-ONLY; no historical deletion, overwrite, move, rename or replacement; no canonical master selection without approval; no FIX reopening or supersession-scope expansion; and no SQL/DDL/DML, database, migration, schema, RLS, Auth, trigger, API, backend, source code, GitHub, PR, CI, Vercel, deployment or Production changes. It also records no Supabase Preview/Staging and DB_PUSH_BLOCKED: ACTIVE.

The current, narrowly scoped DOC-10 publication clarification is recorded in §10. It does not authorize unrelated GitHub or technical changes.

## 10. Append-only publication and current-status clarification — 18 November 2026

This section is a later clarification layer. It does not delete or silently rewrite historical DOCX v0.2 wording or any CVS row.

### 10.1 RMD-56 variant identity and approval boundary

- DOC-09 ST5-11.67–ST5-11.70 reconciliation records four Library entries representing three unique content variants: variant A and its A-copy are byte-identical; variants B and compact C are distinct.
- REC-01 approval provenance is distinct from canonical physical-file selection. The recorded approval phrase does not select a canonical physical file.
- CVS-019 remains UNRESOLVED; preserve all four entries and all three unique content variants. Do not infer a winner from filename, timestamp, file size, upload order, creator metadata or approval phrase.
- GOV-OPEN-07, RMD-OPEN-01 and REC-OPEN-16 remain open/unresolved in DOC-09. No dependency is closed by this clarification.

### 10.2 Authorization CVS crosswalk boundary

The DOC-08 ST5-11.40 correction published in PR #20 controls prospective cross-reference use within its stated scope:

- CVS-014 is the direct conflict locator for Q-01–Q-06 only.
- CVS-015 is the direct conflict locator for CR-01–CR-10 only.
- CVS-016 is general permission-catalogue/capability/action/scope/SoD/page-permission context, not primary approval evidence.
- CVS-017 is Education/Hotel-specific; it is not a general CR/Q locator.
- CVS-039 is REC-05/REC-06 authorization/workflow evidence context, not primary approval evidence for O/CR/Q.

This correction does not close DOC-09 authorization dependencies, finalize the complete permission matrix, establish stable permission keys, approve grants, or verify implementation/tests.

### 10.3 Current project and publication status

- DOC-09 is published in GitHub main as a DRAFT / consolidated working register / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. Its publication did not close dependencies or change FIX decisions.
- Stage 4.7.8 remains PARTIAL — GATE NOT PASSED. Stage 4.9 remains PARTIAL — ACCEPTANCE NOT MET. Older Stage 4.9 wording in the source DOCX is historical, not the current checkpoint.
- Stage 5 blanket GitHub migration remains NOT AUTHORIZED. DOC-08 and DOC-09 publications were separately scoped exceptions; neither creates blanket authorization for other documents.
- Stage 6 implementation remains NOT AUTHORIZED. DB_PUSH_BLOCKED: ACTIVE. No database, SQL/DDL/DML, schema/migration, RLS/Auth, API/backend, source-code, CI-workflow, Vercel, deployment or Production work is authorized.

### 10.4 Scope of this publication

This Markdown file publishes DOC-10 v0.2 as a working master with the explicit append-only clarification above. It does not upload the DOCX archive, select canonical sources, close any CVS/DOC-09 dependency, change FIX decisions, or authorize any other document migration. This is the scoped DOC-10 publication destination only.

**Status remains:** DRAFT / CONSOLIDATED WORKING REGISTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.


## 11. Append-only DOC-10 publication-path and DOC-08 scope clarification — 19 November 2026

This addendum reconciles historical cover wording and clarifies the exact scope of the separately published DOC-08 correction. It does not alter CVS-001–CVS-041, any primary decision, source-native dependency status, or the acceptance boundary of DOC-08/DOC-09/DOC-10.

### 11.1 DOC-10 path: historical proposal versus verified publication

- **Historical cover wording:** The cover's “Proposed GitHub path” identifies the pre-publication target. It is not the current publication status and must not be read as indicating that DOC-10 remains unpublished.
- **Verified publication:** DOC-10 v0.2 was published at `docs/07-decision-registers/CONFLICT_VERSION_REGISTER.md` by PR #22, merged with commit `90ee6d773474adc4e4368248f1c8b05fe142b4b0`. The merge commit adds this exact Markdown path to the repository; the file remains present on `main`.
- **Audit-time locator:** The DOC-10 blob read from `main` for this audit was `9ca3f0d3dd2e0997c3c4aa0c7b4cf98a323b5414`. This is a readback locator only; subsequent append-only updates may change the blob SHA.
- **Status boundary:** Publication establishes the maintained DOC-10 v0.2 working reference only. It does not make DOC-10 canonical, final, accepted, or a primary decision authority. Its status remains **DRAFT / CONSOLIDATED WORKING REGISTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL**.
- **Preservation:** Retain the original cover wording as historical pre-publication metadata. This addendum supplies the current publication reading; no original cover text or CVS row is rewritten or deleted.

### 11.2 DOC-08 publication exception: focused correction only, not the full master

DOC-10 §10.3 states that DOC-08 and DOC-09 publications were separately scoped exceptions to the Stage 5 blanket-migration restriction. Read the DOC-08 part of that statement narrowly:

- The separately published DOC-08 artifact is the focused ST5-11.40 authorization CVS crosswalk correction at `docs/07-fix-decision-register/ST5-11-40-AUTHORIZATION-CVS-CROSSWALK-CORRECTION.md`, merged through PR #20 (merge commit `5e7ed43691084c689afb835b66af5f805553886c`).
- The full reconstructed DOC-08 v1.5 master is **not published** at its proposed path `docs/07-decision-registers/MASTER_FIX_REGISTER.md`. The active Master Checklist v2.0 §48.3 and DOC-00 §25.1–§25.2 explicitly preserve this distinction.
- The focused correction supplies only the prospective CVS mapping for O/CR/Q within its explicit scope. It is not the full DOC-08 master, does not replace it, and does not imply its publication, canonicality, finality or acceptance.
- DOC-09's separate v0.2 working-master publication is at `docs/07-decision-registers/MASTER_OPEN_REGISTER.md`; its DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL status remains unchanged.
- Neither focused correction nor working-master publication authorizes blanket Stage 5 archive migration, any other document publication, or Stage 6 implementation.

**Disposition:** Two document-control clarifications are warranted: (1) the DOC-10 cover's proposed-path wording is historical after verified PR #22 publication; and (2) the DOC-08 reference in §10.3 must be understood as the focused ST5-11.40 correction only, not publication of the full DOC-08 v1.5 master. No CVS entry or source-native dependency requires status correction from this bounded audit. Dependencies newly closed: **0**. FIX decisions changed: **0**. Decision/status promotions or demotions: **0**. Canonical/final/accepted status: **NOT PROMOTED**.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed.


## 12. Append-only current work-routing reconciliation — 19 November 2026

This addendum updates only the current navigation interpretation after the retirement of Master Checklist v2.0 as the active workflow. It does not alter CVS-001–CVS-041, DOC-08/DOC-09/DOC-10 acceptance status, source-native decisions, or any dependency disposition.

- The statement in §11.2 that the active Master Checklist v2.0 §48.3 records the DOC-08 publication distinction is a historical cross-reference. The underlying distinction remains valid: the published DOC-08 artifact is the focused ST5-11.40 correction only; the full reconstructed DOC-08 v1.5 master is not published at its proposed master path.
- For current corrective-work routing, use docs/00-governance/CORRECTIVE-DOCUMENTATION-WORKLIST.md, merged by PR #81 at 041a75c838b7dc9553552cf56fb42c1d0d826b47 and verified on main.
- docs/00-governance/MASTER-CHECKLIST-v2.0.md is CLOSED FOR ACTIVE WORKFLOW / SUPERSEDED FOR NAVIGATION under its §58. It remains historical evidence and must not be treated as the current work-order authority.
- DOC-00 MASTER-PROJECT-CONTROL.md §29 governs the control-plane/work-routing distinction. This DOC-10 remains the conflict/version/supersession working register and does not become the task checklist.
- DOC-08 remains NOT CANONICAL / NOT FINAL / ACCEPTANCE NOT MET; DOC-09 and DOC-10 remain DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. No status promotion is created by this navigation correction.

Dependencies newly closed: 0. FIX decisions changed: 0. CVS dispositions changed: 0. Canonical/final/accepted status: NOT PROMOTED.

Controls remain READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 implementation NOT AUTHORIZED.
