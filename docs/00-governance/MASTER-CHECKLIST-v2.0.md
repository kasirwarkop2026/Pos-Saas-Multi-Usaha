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
