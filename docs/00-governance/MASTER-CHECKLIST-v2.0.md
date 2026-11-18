# POS SaaS Multi-Usaha v3.0 — Master Checklist v2.0

> **Document ID:** GOV-MASTER-CHECKLIST  
> **Version:** 2.0.0  
> **Status:** PROPOSED — becomes the active navigation checklist only after merge and post-merge read-back verification on `main`  
> **Checkpoint date:** 18 November 2026  
> **Repository:** `kasirwarkop2026/Pos-Saas-Multi-Usaha`  
> **Authoritative branch:** `main`  
> **Latest verified work position:** PR #34 merged; DOC-04 §17 source-linked logical-information matrix complete — PARTIAL for 17 conceptual entities  
> **Next work package:** DOC-04 tenant-safe PK/FK/composite-FK and relationship-integrity matrix  
> **Governance:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`

## 0. Purpose and active-navigation rule

This version is a clean continuation control intended to focus work on unresolved blockers and move the project toward a properly gated implementation decision without repeating completed audits.

After this file is merged and verified on `main`:

1. This v2.0 file becomes the **single active navigation checklist**.
2. The prior `docs/00-governance/MASTER-CHECKLIST.md` remains preserved as historical evidence. Its earlier sections and checkpoint snapshots must not be deleted or silently rewritten.
3. Domain-specific documents remain authoritative for their own subject matter. This checklist routes work and records current project position; it does not override DOC-04, DOC-05, DOC-06, DOC-07, DOC-09, DOC-11, or primary decision sources.
4. Before each task, read this file and the relevant controlling source from `main`. Reconcile conflicts explicitly.
5. After each completed task, update this checklist through one scoped documentation PR. Record evidence, exact scope, status, remaining dependencies and next action.
6. Do not repeat COMPLETE work unless new evidence, a material conflict, or explicit re-audit instruction justifies it.

Until merge and read-back verification, this file is PROPOSED and the existing main-branch checklist remains the repository's current reference. No PR branch is an active main-branch instruction.

## 1. Project objective and current position

**Objective:** complete the outstanding source-backed specifications, cross-document traceability, authorization/security and readiness evidence that block a reliable, separately authorized implementation of the POS SaaS Multi-Usaha webapp.

**Latest verified position:**
- PR #34 was squash-merged to `main` at `18ce697af5401f4447f4516a3bd0f0ddea22ea8c`.
- PR #34 added DOC-04 §17, a source-linked logical-information matrix for the 17-entity inventory/costing conceptual baseline, and Master Checklist §25.
- DOC-04 §17.5 records the logical-information mapping as **COMPLETE — PARTIAL**. It is not a physical field dictionary.
- No dependencies were closed and no FIX decisions changed by PR #34.
- The next DOC-04 work item is the tenant-safe PK/FK/composite-FK relationship-integrity matrix. The UNIQUE/CHECK/index matrix follows it.
- The next official checkpoint number has **not** been established. Do not invent one.

## 2. Non-negotiable governance

- `DB_PUSH_BLOCKED: ACTIVE`.
- Audit-first, READ-ONLY and APPEND-ONLY for the current documentation/specification work.
- Stage 5 blanket GitHub/archive migration: **NOT AUTHORIZED**. Only individually scoped documentation packages explicitly approved by the user may proceed.
- Stage 6 implementation: **NOT AUTHORIZED**.
- No SQL, DDL, DML, database/schema mutation, migration, RLS, Auth, trigger, API/backend, application source-code, CI workflow, Vercel, deployment or Production changes without separate explicit authorization for the exact scope.
- No Supabase Preview/Staging.
- One PR at a time. Review exact diff, applicable CI and review threads. Merge only after the user's separate approval for that PR.
- Do not upload archive DOCX files to GitHub. Use repository-native Markdown only for separately approved documentation packages.
- Preserve historical files, prior versions, FIX decisions and dated snapshots. Corrections are append-only and evidence-backed.
- A conceptual FIX is not proof of physical schema, enforcement, implementation, test execution, Production readiness or approval.
- Distinguish DESIGNED, SPECIFIED, IMPLEMENTED, EXECUTED, PASSED, INDEPENDENTLY VERIFIED and APPROVED.
- A skipped CI job is not a passed test.

## 3. Stage and readiness status

| Area | Latest supported status | Operating rule |
|---|---|---|
| Stage 1 — Archive Integrity | COMPLETE — FROZEN | Do not repeat without new evidence |
| Stage 2 — Domain Audit | COMPLETE WITH OPEN DEPENDENCIES | Resolve only the remaining named gaps |
| Stage 3 — Decision Consolidation | PASS WITH OPEN DEPENDENCIES | Preserve unresolved decision provenance |
| Stage 4.1–4.6 | COMPLETE — FROZEN | Do not repeat without new evidence |
| Stage 4.7.1–4.7.7 | COMPLETE — FROZEN | Do not repeat without new evidence |
| Stage 4.7.8 | PARTIAL — GATE NOT PASSED | Cross-reference, primary locator and backlink gaps remain |
| Stage 4.8 | 13/13 DRAFTED | Drafting is not acceptance |
| Stage 4.9 | PARTIAL — ACCEPTANCE NOT MET | Do not claim final documentation acceptance |
| Stage 5 blanket migration | NOT AUTHORIZED | Narrow documentation PRs only when separately approved |
| Stage 6 implementation | NOT AUTHORIZED | Requires readiness gates and separate explicit authorization |
| Implementation Readiness | NOT READY | The current readiness document does not establish implementation readiness |

The current `docs/IMPLEMENTATION-READINESS.md` states A12.40 PARTIAL/OPEN, A12.41 NOT STARTED, physical schema and enforcement NOT VERIFIED, executable tests NOT VERIFIED, and Production NOT READY. These are blocking readiness facts, not items to bypass for speed.

## 4. Fixed architecture decisions — preserve

### Business and tenant architecture
- One Owner account has one Business.
- A Business may have multiple Outlets and Warehouses.
- Platform Super Admin is separate from Business Roles.
- Tenant isolation uses `business_id`; composite foreign keys are part of the integrity approach.
- RLS and server-side authorization are required design controls; deployed enforcement remains unverified until evidence exists.

### Inventory and costing
- `inventory_movements` is the immutable ledger; `inventory_balances` is a projection.
- Batch identity differs from cost-layer identity.
- FEFO applies to physical batch selection; FIFO applies to cost-layer consumption.
- Reservation reduces available stock, not physical on-hand.
- MWA is the default costing method; FIFO is the alternative.
- MWA pool is Business + Product/Variant + Inventory Location.
- `inventory_cost_layer_movements` remains a candidate only, not an approved 18th entity.
- The working conceptual inventory/costing baseline remains 17 entities.
- ERD v9.6.9 remains a working reference, not a canonical final physical schema.

Do not reopen these FIX decisions without a specific evidence-based reason. Their physical realization still requires specification and verification.

## 5. Current open-dependency landscape

The following is a routing summary, not a replacement for the item-level registers. Always read the latest source-native status before changing any item.

### 5.1 Governance and provenance
- GOV-OPEN-01: **CLOSED**, limited to the primary-source recovery/addendum scope recorded in the current checklist.
- GOV-OPEN-02: **PARTIAL**. The 231-row baseline is retained; only M231-223 has a direct per-file content-review supplement in the recorded evidence. Remaining rows are not thereby assessed.
- GOV-OPEN-03: **CLOSED**, field-separation scope only.
- GOV-OPEN-04: **CLOSED**, audit-order procedure scope only.
- GOV-OPEN-05: **DEFERRED**.
- GOV-OPEN-06: **CLOSED**, Hotel/Other documentation-claim supersession scope only.
- GOV-OPEN-07: **OPEN / UNRESOLVED**; no canonical physical RMD-56 v1.2 selected.
- GOV-OPEN-08: **CLOSED**, master-index linkage scope only.

These dispositions follow the latest post-merge reconciliation in the old checklist §19 and must not be inferred from older, unreconciled rows in a register.

### 5.2 Blueprint, ERD and source recovery
- A12.18–A12.28: OPEN / UNVERIFIED.
- A12.31E: OPEN.
- A12.36.1: UNVERIFIED / REVIEW.
- A12.40: PARTIAL / OPEN; D40-203–D40-216 remain UNRECOVERED.
- A12.41: NOT STARTED; it follows A12.40 closure and must use controlling GATE-01–GATE-06 criteria.
- Stage 4.7.8 and G10: PARTIAL; cross-reference and primary-locator acceptance gaps remain.
- Purchasing 14→15 and Sales 20→18 crosswalks remain incomplete.
- REC-02/03/04/08 retain their source/provenance gaps; use the current controlling registers for exact item-level dispositions.

### 5.3 Authorization, security and cross-domain readiness
- Authorization model and cross-category permission/scope/SoD matrix remain draft/proposed/candidate where their controlling sources say so.
- Technical RLS/server authorization/API enforcement is not verified by documentation publication.
- Security summaries do not establish current Production security verification; REC-08 source limitations remain.
- Category-specific unresolved controls and source/approval provenance remain open until their own criteria are met.
- Cross-domain traceability from Category → Workflow → Module → Capability/Action → Scope → Data/Purpose → SoD/Approval → Server Authorization → Test Evidence is not yet complete.

### 5.4 Implementation readiness
- IMP-OPEN and AUTH-OPEN items remain governed by their source-native registers; do not bulk-close or assume their status.
- A12.40 must meet all AC40-01–AC40-12 acceptance criteria before A12.41.
- A12.41 must be completed against the controlling GATE-01–GATE-06 definitions.
- Each implementation scope requires an approved design baseline, traceable decisions, tenant/security/operational verification evidence, and separate user authorization.

## 6. Priority work sequence — close blockers, avoid repetition

Work in the following order, subject to source evidence and current dependencies. Do not start a later item by treating an earlier incomplete gate as passed.

| Priority | Work package | Required output / exit criterion | Status at v2.0 |
|---:|---|---|---|
| 1 | DOC-04 inventory/costing PK/FK/composite-FK and tenant-integrity matrix | Each relationship has source-backed key tuple, tenant rule, cardinality and delete/update behavior; unsupported details remain OPEN | NEXT |
| 2 | DOC-04 UNIQUE/CHECK/index matrix | Each constraint/index has invariant, scope, nullable behavior, source/approval and unresolved disposition | NOT STARTED |
| 3 | DOC-04 quantity/cost precision and conversion rules | Base units, precision/scale, rounding, currency and conversion rules source-backed | NOT STARTED |
| 4 | DOC-04 event/idempotency/atomicity/concurrency specification | Replay, locking, retry, failure, transaction and reconciliation semantics specified and testable | NOT STARTED |
| 5 | DOC-04 physical dictionary acceptance review | Field/key/constraint specification reviewed; unresolved items explicitly dispositioned; no unsupported physical identifiers promoted to FIX | NOT STARTED |
| 6 | Blueprint/ERD/A12 source-gap recovery and crosswalk closure | A12.18–A12.28, D40-203–216, A12.31E, A12.36.1, Purchasing/Sales crosswalks and related claims closed only against primary evidence or retained explicitly OPEN | OPEN |
| 7 | Authorization and security closure | Approved role/module/capability/action/scope/SoD model with traceable approval, deny cases, enforcement requirements and test evidence | OPEN |
| 8 | A12.40 closeout | AC40-01–AC40-12 each satisfy controlling exit criteria with evidence | PARTIAL / OPEN |
| 9 | A12.41 final readiness reassessment | GATE-01–GATE-06 assessed from controlling sources after A12.40 closure | NOT STARTED |
| 10 | Stage 4.7.8 / Stage 4.9 acceptance reconciliation | Locator/backlink/cross-reference and final documentation acceptance criteria met | PARTIAL / NOT MET |
| 11 | Implementation scope proposal and authorization gate | Named scope, design baseline, risk/test/rollback plan, required approvals and explicit user authorization | NOT AUTHORIZED |

**Important:** priorities 6–10 may be advanced in parallel only when dependencies and source evidence permit, and without duplicating completed work. Priority 1 is the immediate next task because DOC-04 §17.5 explicitly identifies it as next. The exact sequence inside each work package must follow its controlling source.

## 7. DOC-04 inventory/costing baseline and acceptance boundaries

The 17 conceptual entities covered by DOC-04 §§16–17 are:
1. `inventory_batches`
2. `inventory_movements`
3. `inventory_balances`
4. `inventory_batch_balances`
5. `inventory_adjustments`
6. `inventory_adjustment_items`
7. `stock_counts`
8. `stock_count_items`
9. `stock_transfers`
10. `stock_transfer_items`
11. `inventory_cost_exceptions`
12. `inventory_reservations`
13. `inventory_reservation_items`
14. `inventory_cost_layers`
15. `inventory_cost_layer_consumptions`
16. `stock_transfer_shipments`
17. `stock_transfer_shipment_items`

DOC-04 §16 defines ten cross-cutting physical-specification gates PDS-01–PDS-10. The immediate PK/FK matrix must not invent key tuples or tenant keys. Where the source evidence is insufficient, mark the relationship candidate/open and record the exact source gap. Descriptive labels in §17 are logical information groups, not approved SQL column names.

The DOC-04 sequence and its exit criteria are controlled by §§16.5 and 17.5. No dependency closure, physical schema approval, database authorization or implementation permission is implied by completing a documentation matrix.

## 8. Work execution and closure protocol

For every work package:

1. Read the latest v2.0 checklist from `main` and the exact controlling source documents.
2. Define a narrow scope; identify prior completed work that must not be repeated.
3. Build a source-to-claim map with exact filename, version, path, section/page/table and decision ID where available.
4. Separate verified facts, derived interpretations, candidate proposals and unresolved questions.
5. Preserve source-native status. Do not upgrade REVIEW/TODO/OPEN to FIX or CLOSED without its stated evidence and authority.
6. Record what was reviewed, what changed, what did not change, and the reason.
7. Use one documentation PR at a time. Check the full diff, deletions, links, Markdown lint, documentation structure, CI status and review threads.
8. Ask for/receive explicit approval before merge. After merge, read back the exact files from `main` and record commit/blob references.
9. Update this checklist append-only with the outcome and next evidence-supported action.

A dependency may be marked CLOSED only when its own closure criteria are met with appropriate primary evidence, exact locator, scope and approval where required. Completing a research pass or preparing a correction is not closure.

## 9. Source gaps and conflict handling

- If a source cannot be located, continue using the available evidence where safe and useful; record the missing source as OPEN / UNVERIFIED / UNRECOVERED with the attempted locator and impact.
- Do not invent filenames, page numbers, source IDs, approvals, key tuples, field names, types, test results or implementation status.
- If two GitHub documents disagree, retain the conflict as OPEN and identify which source is controlling for the specific claim. Do not silently harmonize.
- A dated status snapshot is historical unless a later evidence-backed addendum supersedes it.
- Use the latest verified main-branch state, not stale pre-merge PR text or old chat summaries.
- Do not treat the presence of a file in DOC-12 or a manifest row as content review of that file.

## 10. Required status vocabulary

Use status labels with their scope and meaning:
- **COMPLETE** — the stated task scope is completed; it does not automatically close its dependencies.
- **COMPLETE — PARTIAL** — the audit/review activity is complete to its stated scope, but acceptance or underlying dependency remains open.
- **PASS WITH OPEN DEPENDENCIES** — reviewed criteria pass within stated scope; named dependencies remain.
- **OPEN / UNVERIFIED / UNRECOVERED** — evidence or acceptance is insufficient.
- **FIX** — only when an approved decision source supports the exact decision and scope.
- **CLOSED** — only when the dependency's own closure criteria and evidence are met.
- **NOT AUTHORIZED** — work must not proceed until separately authorized.
- **NOT READY** — implementation/release criteria are not met.

Always state the status dimension: document review, decision, specification, implementation, execution, verification, or approval.

## 11. Current repository control documents

| Subject | Controlling repository path | Boundary |
|---|---|---|
| Active project navigation (after v2.0 activation) | `docs/00-governance/MASTER-CHECKLIST-v2.0.md` | This file; active only after merge and read-back |
| Historical checklist | `docs/00-governance/MASTER-CHECKLIST.md` | Preserve as history; not active navigation after v2.0 activation |
| Master Project Control | `docs/00-governance/MASTER-PROJECT-CONTROL.md` | Control-plane summary; dated snapshots require reconciliation |
| DOC-04 ERD & Data Dictionary | `docs/04-data-architecture/ERD_DATA_DICTIONARY.md` | Working master, NOT CANONICAL / NOT FINAL |
| Master Open Register (DOC-09) | `docs/07-decision-registers/MASTER_OPEN_REGISTER.md` | Item-level open/review/todo status; use latest evidence-backed addenda |
| DOC-11 Roadmap & Release Gates | `docs/08-project-control/PROJECT-ROADMAP-RELEASE-GATES.md` | Working master; not an independent checkpoint authority |
| Implementation Readiness | `docs/IMPLEMENTATION-READINESS.md` | Current status NOT READY; does not authorize implementation |
| Master Audit Coverage | `docs/MASTER-AUDIT-COVERAGE.md` | Consolidated audit map; PARTIAL |

If any listed path or status changes, update this navigation file through an append-only PR and verify the result on `main`.

## 12. Current checkpoint record and next action

**Current position:** post-PR #34 merge and DOC-04 §17 read-back verification, 18 November 2026.

**Next action:** prepare the source-backed tenant-safe PK/FK/composite-FK and relationship-integrity matrix for the 17-entity inventory/costing conceptual baseline, following DOC-04 §§16.5 and 17.5.

**Checkpoint number:** not established. Do not invent one.

**Expected outcome of the next task:** a reviewable documentation matrix with each relationship grounded in source evidence or explicitly left candidate/open; tenant-scope and referential actions are not guessed; no physical schema or implementation status is asserted.

## 13. Activation and supersession

This v2.0 checklist becomes active only after:
1. The PR is reviewed and approved.
2. Applicable documentation CI succeeds and the exact diff has no unresolved issue.
3. The PR is merged into `main`.
4. This file and the historical checklist transition notice are read back from `main`.

After activation, v1.0 remains preserved as historical checkpoint evidence. Do not delete it, rename it, or rewrite its prior sections. Future navigation and next-action selection must use v2.0.

---

**READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`**  
**Stage 5 blanket migration: NOT AUTHORIZED • Stage 6 implementation: NOT AUTHORIZED**


## 14. Post-merge activation and DOC-04 relationship-matrix checkpoint — 18 November 2026

### 14.1 v2.0 activation record

The activation conditions in §13 were satisfied by PR #35:
- PR #35, `docs(governance): introduce focused Master Checklist v2.0`, merged to `main` at merge commit `aa997b2068337b4601cdf28c89526e56326fa0ce`.
- The v2.0 checklist was read back from `main`; blob SHA at activation: `e03d44570c2eb8aa7c24599f2dba2317b325c0e8`.
- The historical v1 checklist transition notice was also read back from `main`.
- Accordingly, v2.0 is **ACTIVE — SINGLE NAVIGATION CHECKLIST**. The header's original `PROPOSED` status and the earlier activation wording are preserved as the drafting-time snapshot; this §14 is the append-only status update. v1.0 remains historical evidence only and is not the active navigation source.

### 14.2 DOC-04 relationship-integrity work result

This work package adds DOC-04 §18, a source-bounded conceptual relationship, tenant-scope and entity-coverage matrix for the 17-entity inventory/costing baseline.

Reviewed evidence:
- DOC-04 §8 and §10 from `docs/04-data-architecture/ERD_DATA_DICTIONARY.md` on `main` (pre-change blob `2eebbd469772d941c4a3981036695ebf6e4135fb`).
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–8, especially A11 F01–F10 and the 17-entity matrix.
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§3–5 and 7–8.
- DOC-04 §8 records the A12.39 conceptual relationships; A12.39 does not establish physical enforcement.

Outcome:
- Conceptual relationship inventory: **COMPLETE — PARTIAL**, only for relationships explicitly listed in A12.39.
- Tenant-scope requirements: **DOCUMENTED — CONCEPTUAL**.
- Physical PK/FK/composite-FK tuples, exact referenced keys, nullable behavior, delete/update actions, indexes, RLS/server enforcement and executable tests: **OPEN / NOT ESTABLISHED / NOT VERIFIED**.
- Several entities and event/allocation relationships have no explicit A12.39 edge locator; these are listed as OPEN rather than inferred.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No database, SQL, DDL, DML, migration, application code, CI workflow, Vercel, deployment or Production changes.

### 14.3 Updated priority position

| Priority | Work package | Status after this checkpoint |
|---:|---|---|
| 1 | DOC-04 conceptual relationship/tenant-integrity matrix | COMPLETE — PARTIAL; physical key tuples and enforcement OPEN |
| 2 | DOC-04 UNIQUE/CHECK/index matrix | NEXT |
| 3 | Quantity/cost precision and conversion rules | NOT STARTED |
| 4 | Event/idempotency/atomicity/concurrency specification | NOT STARTED |
| 5 | Physical dictionary acceptance review | NOT STARTED |

Next action: build the UNIQUE/CHECK/index matrix from source-backed invariants and approval scope. Do not infer index definitions, nullable-variant strategy, or constraint expressions. Keep `DB_PUSH_BLOCKED: ACTIVE`, Stage 5 blanket migration NOT AUTHORIZED and Stage 6 NOT AUTHORIZED.


## 15. DOC-04 UNIQUE/CHECK/index candidate matrix checkpoint — 18 November 2026

### 15.1 Work result

DOC-04 §19 adds a source-bounded candidate matrix for UNIQUE, CHECK, and index families across all 17 conceptual inventory/costing entities, plus aggregate invariants and evidence still required before physical design can be accepted.

Sources reviewed:
- DOC-04 reconstructed working master v0.1, §§3, 8–10.
- Update Audit A11–A12 and 17-table matrix v0.2 (15 Nov 2026), §§1–4.
- Batch 02 Inventory Costing Migration Mapping v0.1 (15 Nov 2026), §§3–5 and 7.
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D.
- A12.39 conceptual relationship/constraint specification, as cross-referenced in DOC-04 §§8 and 18.

Outcome:
- Candidate invariant/constraint family inventory: **COMPLETE — PARTIAL**.
- Per-entity conceptual coverage: **17/17 reviewed**.
- Concrete physical UNIQUE keys, CHECK expressions, index definitions, predicates/order, and nullable-variant semantics: **OPEN / NOT ESTABLISHED**.
- A09 idempotency standard, A07 batch reconciliation, A06 concurrency/locking, A11 lifecycle/closure enforcement: **REVIEW / OPEN**.
- Aggregate invariants are explicitly separated from row-level CHECK candidates.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No implementation/database/schema/SQL/CI/deployment/Production change.

### 15.2 Priority update

| Priority | Work package | Status |
|---:|---|---|
| 1 | DOC-04 §18 relationship/tenant-integrity matrix | COMPLETE — PARTIAL |
| 2 | DOC-04 §19 UNIQUE/CHECK/index candidate matrix | COMPLETE — PARTIAL |
| 3 | Quantity/cost precision and conversion matrix (A12.37) | NEXT |
| 4 | Event/idempotency/atomicity/concurrency specification | NOT STARTED |
| 5 | Physical dictionary acceptance review | NOT STARTED |

Next action: derive the quantity/cost precision and conversion matrix from A12.37 decision sources and verified numeric-policy locators. Do not invent precision/scale, rounding mode, conversion defaults or tolerances. Keep `DB_PUSH_BLOCKED: ACTIVE`, Stage 5 blanket migration NOT AUTHORIZED and Stage 6 NOT AUTHORIZED.


## 16. DOC-04 quantity / cost precision and conversion checkpoint — 18 November 2026

### 16.1 Work result

DOC-04 §20 adds a source-bounded quantity/cost precision and conversion matrix. It distinguishes conceptual numeric rules already FIX under A12.37 from physical and operational parameters that remain REVIEW/TODO/OPEN.

Sources reviewed:
- `Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v4_A12.37_Numeric_Policy.docx`, Addendum C §§C.1–C.10, especially C.3–C.9.
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§3–5 and 7–8.
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–4.
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D.
- DOC-04 §§3 and 16–19.

Outcome:
- Source-backed conceptual quantity/cost/FX/rounding rules: **DOCUMENTED — COMPLETE — PARTIAL**.
- Per-entity numeric relevance: **17/17 reviewed conceptually**; no physical field/type approval implied.
- Quantity base-unit canonicalization, high-internal-precision conversion, invalid-quantity rejection without silent rounding, total-cost authority, MWA/FIFO distinction, scoped LRM, FX snapshot and posted-history immutability: **DOCUMENTED from A12.37**.
- Exact numeric type, precision/scale, maximum capacity, conversion factors/paths, rounding mode/boundaries and tolerances: **OPEN / NOT ESTABLISHED / REVIEW-TODO**.
- N37-01–06, N37-09, N37-11, N37-13–15 carried forward with source-native status; cross-domain N37-07/08/10/12 not reclassified.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No schema, SQL, DDL, DML, migration, database, application code, CI workflow, Vercel, deployment or Production changes.

### 16.2 Priority update

| Priority | Work package | Status |
|---:|---|---|
| 1 | DOC-04 §18 relationship/tenant-integrity matrix | COMPLETE — PARTIAL |
| 2 | DOC-04 §19 UNIQUE/CHECK/index candidate matrix | COMPLETE — PARTIAL |
| 3 | DOC-04 §20 quantity/cost precision and conversion matrix | COMPLETE — PARTIAL |
| 4 | Event/idempotency/atomicity/concurrency specification | NEXT |
| 5 | Physical dictionary acceptance review | NOT STARTED |

Next action: prepare the event/idempotency/atomicity/concurrency specification from controlling A04/A06/A09/A11/A12.17 and related primary sources. Preserve exact operation-key, lock order, retry, transaction boundary, compensation and failure semantics as OPEN where source evidence is incomplete. Do not infer implementation behavior or claim tests passed.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 17. DOC-04 event / idempotency / atomicity / concurrency checkpoint — 18 November 2026

### 17.1 Work result

DOC-04 §21 adds a source-bounded event, idempotency, atomicity and concurrency specification for inventory/costing. It preserves conceptual decisions separately from technical details and implementation evidence.

Sources reviewed:
- `Konsolidasi_Keputusan_A11_Transfer_Shipment_Lifecycle_v1.0.docx`, §§1–11, especially §§2 and 6–9.
- `Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.16_v1.0.docx`, §§5–7, especially §§5.1–5.3 and 6.
- `Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.30F_v1.1.docx`, A12.17 addendum §2.
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§2–4.
- `POS_SAAS_AUDIT_2_3_ERD_A01_A12_v0.1_2026-11-16.md`, §§5 and 5.1.
- `DOC-08_Master_FIX_Decision_Register_v1.4.docx`, §36.2, A04–A09 locator reconciliation.
- DOC-04 §§3 and 16–20.

Outcome:
- A11/A12 event lifecycle principles: **DOCUMENTED — COMPLETE — PARTIAL** for the explicitly sourced scope.
- A12.17 allocation–consumption cardinality: **DOCUMENTED — FIX conceptual**.
- A06 deterministic locking, post-lock revalidation, atomic commit and full rollback: **DOCUMENTED as baseline principles; technical design OPEN**.
- A09 same-key/same-payload replay, same-key/different-payload conflict and atomic claim/effects: **DOCUMENTED as A11 §7 restatement; technical design OPEN**.
- DOC-08 v1.4 §36.2 says standalone primary approval locators for A06/A09 were not recovered; this checkpoint does not claim locator recovery.
- A03 repeated-receipt event model, operation-key/canonical-payload/retention, lock order/isolation/timeout/retry, transaction boundaries, failure recovery, compensation enforcement and closure concurrency: **OPEN**.
- Executed database/concurrency/atomicity/idempotency tests: **NOT VERIFIED**.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No schema, SQL, DDL, DML, migration, database, application code, CI workflow, Vercel, deployment or Production changes.

### 17.2 Priority update

| Priority | Work package | Status |
|---:|---|---|
| 1 | DOC-04 §18 relationship/tenant-integrity matrix | COMPLETE — PARTIAL |
| 2 | DOC-04 §19 UNIQUE/CHECK/index candidate matrix | COMPLETE — PARTIAL |
| 3 | DOC-04 §20 quantity/cost precision and conversion matrix | COMPLETE — PARTIAL |
| 4 | DOC-04 §21 event/idempotency/atomicity/concurrency specification | COMPLETE — PARTIAL |
| 5 | Physical dictionary acceptance review | NEXT |

Next action: perform the physical dictionary acceptance review against the controlling source documents and exact GitHub DOC-04 entity inventory. Verify entity-by-entity field evidence, PK/FK/composite-FK tuples, nullability/defaults, UNIQUE/CHECK/index evidence, tenant scope, lifecycle, delete behavior and source locators. Do not fabricate missing physical fields or promote conceptual rules into physical acceptance; retain OPEN/UNVERIFIED gaps and do not modify database/schema.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 18. DOC-04 Physical Data Dictionary acceptance review — 18 November 2026

### 18.1 Review result

The physical dictionary acceptance review was performed against A12.38 v5 Appendix D §§D.1–D.4 and D.11–D.14, DOC-04 §§9 and 16–21, Batch 02 §§3–5 and 7–8, and the Update Audit A11–A12 v0.2 §§1–4.

Outcome:
- Historical conceptual entity inventory: **17/17 reviewed**.
- Physical Data Dictionary acceptance: **NOT ACCEPTED — OPEN; 0/17 accepted** on the evidence reviewed. This is an acceptance result, not a claim that no physical schema exists elsewhere.
- A12.38 explicitly leaves A38-G01 physical entity inventory, A38-G02 field/type/precision/nullability/default/PK/FK/composite-FK, A38-G03 unique/CHECK/index/delete-update, and A38-G04 physical cost allocation bridge/FK/concurrency as TODO.
- DOC-04 §9 remains an evidence-bounded information register, not a final SQL column dictionary. Generic fields such as `id`, `created_at`, `updated_at`, `deleted_at` or `status` must not be inferred on every entity.
- No authoritative physical schema/specification with complete field inventory, exact keys, constraints, tenant scope, lifecycle, delete behavior and source locators was established for acceptance.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No database introspection, SQL, DDL, DML, migration, RLS test, application test or Production verification was performed.

DOC-04 §22 records the per-entity 17-row acceptance matrix and cross-entity evidence gaps. The result does not promote conceptual entity names or rules into physical table/column approval.

### 18.2 Priority update

| Priority | Work package | Status |
|---:|---|---|
| 1 | DOC-04 §18 relationship/tenant-integrity matrix | COMPLETE — PARTIAL |
| 2 | DOC-04 §19 UNIQUE/CHECK/index candidate matrix | COMPLETE — PARTIAL |
| 3 | DOC-04 §20 quantity/cost precision and conversion matrix | COMPLETE — PARTIAL |
| 4 | DOC-04 §21 event/idempotency/atomicity/concurrency specification | COMPLETE — PARTIAL |
| 5 | DOC-04 §22 Physical Data Dictionary acceptance review | COMPLETE — NOT ACCEPTED; physical evidence OPEN |

Next action: continue targeted source recovery and locator reconciliation for authoritative physical schema/specification evidence. Keep all missing fields, key tuples, types, constraints, tenant enforcement, lifecycle and delete behavior OPEN/UNVERIFIED until evidence is found. Do not modify database/schema or infer physical definitions.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 19. DOC-04 physical source recovery and locator reconciliation checkpoint — 18 November 2026

### 19.1 Work result

DOC-04 §23 records a bounded Library source-recovery and per-entity locator reconciliation pass following §18. Sources reviewed:
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D §§D.1–D.4 and D.11–D.14.
- Reconstructed DOC-04 working master v0.1, §§2–3, 9, 12–13 and Appendix A.
- Batch 02 Inventory Costing Migration Mapping v0.1, §§1–5 and 7–8.
- Update Audit A11–A12 and 17-table matrix v0.2, §§1–4.
- Current DOC-04 §§3, 9, 16–22 and this checklist §§7–9, 18.

Findings:
- Historical conceptual entity names and their A12.38 v5 Appendix D §D.4 locator: **17/17 confirmed**.
- Authoritative physical field/key locators: **0/17 recovered** in the bounded source set reviewed.
- A12.38 v5 D.1 requires authoritative schema/specification evidence for physical names, fields, keys, types, nullability/defaults, constraints/indexes, delete behavior and enforcement.
- A12.38 v5 D.11 still records A38-G01–G04 as TODO; D.12–D.13 keep the physical dictionary NOT CLOSED.
- The reconstructed DOC-04 is NOT CANONICAL / NOT FINAL; Batch 02 is a DRAFT mapping; Update Audit v0.2 is not physical implementation evidence.
- The separate `inventory_cost_layer_movements` bridge remains a candidate, not an approved 18th historical entity.
- No database introspection, SQL/DDL/DML, migration, RLS/Auth test, application test, concurrency test or Production verification was performed.

Status: source recovery and locator reconciliation **COMPLETE — PARTIAL** for the reviewed source set. Physical Data Dictionary remains **NOT ACCEPTED**; A38-G01–G04 remain OPEN; dependencies closed: **none**; FIX decisions changed: **none**.

### 19.2 Priority update

| Priority | Work package | Status |
|---:|---|---|
| 1 | DOC-04 §§18–19 relationship/tenant-integrity and UNIQUE/CHECK/index matrices | COMPLETE — PARTIAL |
| 2 | DOC-04 §20 quantity/cost precision and conversion matrix | COMPLETE — PARTIAL |
| 3 | DOC-04 §21 event/idempotency/atomicity/concurrency specification | COMPLETE — PARTIAL |
| 4 | DOC-04 §22 physical dictionary acceptance review | COMPLETE — NOT ACCEPTED |
| 5 | DOC-04 §23 physical source recovery and locator reconciliation | COMPLETE — PARTIAL; 0/17 physical locators recovered |

Next action: recover the missing original A12.38.3 entity-level physical specification or an explicitly approved schema artifact from its authoritative source location. Reconcile each field/key claim against the 17 entity rows only when the source is available. Until then, retain all physical details as OPEN / UNVERIFIED; do not infer columns, keys, types, constraints, tenant enforcement, lifecycle or delete behavior.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 20. Expanded DOC-04 physical-source recovery checkpoint — 18 November 2026

### 20.1 Additional source review

DOC-04 §24 records an expanded search following §19, including:
- v8.6 P0 Expanded Search Record, pp. 1–6 and Appendix H pp. 70–74.
- v9.5.8 Businesses Field-Level Profiles Specification (checked for scope; not Inventory & Costing authority).
- A12.38 v5 Appendix D, Batch 02 mapping, reconstructed DOC-04, and title-focused Library searches for Inventory Costing schema, migration SQL, ERD and physical field dictionary.

Key results:
- v8.6 pp. 1–3 provide conceptual responsibilities for the 17 historical entities, not approved physical field definitions.
- v8.6 pp. 1 and 6 expressly retain unapproved fields/types/constraints/relationships as REVIEW/TODO and list the physical field dictionary, types, nullability/defaults, FK/composite FK, ON DELETE/ON UPDATE, unique constraints and indexes as not approved.
- v8.6 Appendix H.3–H.6 places physical schema/data dictionary and enforcement evidence in the technical-evidence backlog (P2); conceptual evidence does not replace technical evidence.
- v9.5.8 concerns Businesses, not Inventory & Costing; it is not applicable as field authority.
- Title-focused Library searches did not return a separately titled authoritative Inventory & Costing schema, approved DDL/migration, or entity-level physical dictionary.
- A12.38 v5 Appendix D remains the controlling audit record for the physical gap classification. Search absence is bounded to the inspected Library scope and is not proof that a source never existed.

### 20.2 Updated recovery result

| Evidence class | Recovery result |
|---|---:|
| Historical conceptual entity inventory | 17/17 |
| Physical entity names verified against authoritative schema | 0/17 |
| Physical field/type/precision/nullability/default locators | 0/17 |
| Physical PK/FK/composite FK locators | 0/17 |
| Physical UNIQUE/CHECK/index/delete-update locators | 0/17 |
| Physical allocation bridge/FK/concurrency enforcement locator | 0/17 |

Status: expanded source recovery **COMPLETE — PARTIAL** for the reviewed Library source set. No new authoritative physical schema evidence recovered. A38-G01–G04 remain OPEN/TODO; dependencies closed: **none**; FIX decisions changed: **none**. Physical Data Dictionary remains **NOT ACCEPTED**.

Next action: obtain the original A12.38.3 entity-level physical specification or an explicitly approved schema artifact from its authoritative source location. Verify owner/approval, version, scope, date, supersession and direct entity/field/key locators before updating any physical claim. Do not infer schema details or inspect/modify the database.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.



## 21. Append-only work-routing correction — source recovery boundary and dependency closure (18 November 2026)

### 21.1 Source-recovery disposition

The bounded source recovery recorded in §§19–20 is COMPLETE — PARTIAL for the inspected source set. The reviewed evidence confirms 17/17 historical conceptual entities, but 0/17 authoritative physical entity names/field locators/PK/FK/composite-FK/UNIQUE/CHECK/index/delete-update/allocation/concurrency locators. A38-G01–G04 remain OPEN/TODO; the physical Data Dictionary remains NOT ACCEPTED; dependencies closed: none; FIX decisions changed: none.

The earlier next-action wording in §§19.2 and 20.2 requesting another A12.38.3 source search is retained as a historical checkpoint, but is superseded for current work routing by this §21. No further A12.38.3 or equivalent archive-source search is planned under the present instruction. This does not convert missing physical evidence into a pass, close A38-G01–G04, or authorize database introspection or implementation.

### 21.2 Current objective

Focus the remaining work on correcting inconsistencies in the documentation already published on GitHub `main`, resolving specification-level dependencies where the existing evidence is sufficient, and identifying exactly what remains a release/implementation blocker. Do not reopen completed/frozen stages or repeat source recovery without new evidence or an explicit new instruction.

### 21.3 Ordered next work

| Order | Work package | Required outcome | Closure rule |
|---:|---|---|---|
| 1 | Control-plane reconciliation | DOC-00, this checklist and Master Project Index point to the same current checkpoint and preserve historical snapshots | Close only after the three append-only addenda are merged and read-back verified |
| 2 | DOC-08 / DOC-09 / DOC-10 consistency | Reconcile IDs, statuses, cross-references, CVS mapping scope, conflicts and supersession | No inferred approvals; DOC-10 remains its own workstream |
| 3 | A12.40 reassessment | Assess AC40-01–AC40-12 against published `main` evidence only | Record each criterion as PASS/PARTIAL/OPEN with exact evidence; do not claim acceptance unless all required criteria are satisfied |
| 4 | Authorization consistency | Check DOC-05, DOC-08, DOC-09 and DOC-06 cross-document alignment | Conceptual FIX remains conceptual; technical enforcement and permission mapping remain open unless directly evidenced |
| 5 | Security and traceability consistency | Check DOC-07, DOC-06 and dependency links without repeating unavailable-source searches | Missing REC-08 evidence and unexecuted tests remain explicit gaps |
| 6 | Readiness/acceptance review | Reassess Stage 4.7.8, Stage 4.9 and implementation blockers | No stage is marked complete based on document drafting or navigation corrections alone |

### 21.4 Current package status snapshot

- DOC-08 focused ST5-11.40 correction: published at commit `5e7ed43691084c689afb835b66af5f805553886c`; DOC-08 remains NOT CANONICAL / NOT FINAL / ACCEPTANCE NOT MET.
- DOC-09 v0.2 working master: published at commit `dbda10a28e8320785ff45eb4fe224ef0213fb8ef`; remains DRAFT / CONSOLIDATED WORKING REGISTER / REVIEW REQUIRED.
- DOC-10: separate consistency/supersession workstream; no completion or publication is asserted here.
- A12.40: reassessment against current `main` evidence is the next bounded technical-specification audit; AC40-01–AC40-12 are not closed by this checklist addendum.
- DOC-04 physical Data Dictionary: NOT ACCEPTED; A38-G01–G04 OPEN/TODO; 0/17 physical locators recovered in the reviewed source set.
- Stage 4.7.8: PARTIAL — GATE NOT PASSED. Stage 4.9: PARTIAL — ACCEPTANCE NOT MET.
- Stage 5 blanket archive migration: NOT AUTHORIZED. Stage 6 implementation: NOT AUTHORIZED.

### 21.5 Operating controls

READ-ONLY • APPEND-ONLY. `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, schema/migration/RLS/Auth changes, backend/API, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging, or Production changes. Work proceeds one documentation PR at a time. Review exact diff and applicable CI; merge only after explicit user approval; verify every merged file on `main` before the next package.
