# POS SaaS Multi-Usaha v3.0 — Master Project Control

> **Document ID:** DOC-00  
> **Version:** 1.0.0  
> **Status:** ACTIVE — GitHub Documentation Control Baseline  
> **Checkpoint date:** 17 November 2026  
> **Repository:** `kasirwarkop2026/Pos-Saas-Multi-Usaha`  
> **Authoritative branch:** `main`  
> **Migration state:** Stage 5 — AUTHORIZED / IN PROGRESS  
> **Implementation state:** NOT AUTHORIZED

## 1. Purpose and authority

This document is the current project-control entry point for POS SaaS Multi-Usaha v3.0. After this document is reviewed and merged into `main`, the maintained project documents in this repository's `main` branch are the sole active working reference for project status, decisions, requirements, architecture, audit coverage, readiness and next actions.

The ChatGPT Library archive is retained as historical/source evidence for migration and provenance. It is not the active project-control workspace. Missing or unrecovered archive material must not stop documentation work when sufficient available evidence exists. Such gaps must be carried into the relevant GitHub master document with an explicit status and impact; never invent missing facts, approvals, source locators or technical evidence.

This document is the control-plane index and checklist. Domain-specific master documents remain authoritative for their stated subject and scope. A summary in this document does not override a more specific approved decision record. Where GitHub documents conflict, preserve the conflict as OPEN until an explicit evidence-backed correction is reviewed and merged.

**Important:** this document becomes the active control baseline only after its PR is merged into `main`. Until then, it is a proposed GitHub control document under review.

## 2. Project identity and product baseline

- Project: **POS SaaS Multi-Usaha v3.0**.
- Product model: one Owner account is associated with one Business.
- A Business may operate multiple Outlets/Branches and Warehouses.
- Platform Super Admin is separate from Business roles.
- Tenant isolation is designed around `business_id`, composite foreign keys, RLS and server-side authorization. These are architecture requirements, not evidence of deployed enforcement.
- `inventory_movements` is the immutable inventory movement ledger; `inventory_balances` is a projection.
- MWA is the default costing method; FIFO is an alternative. MWA grouping is per Business + Product/Variant + Inventory Location.
- FEFO is used for physical batch selection; FIFO is used for cost-layer consumption.
- Reservations reduce available stock, not physical on-hand.
- Posted records are not edited directly; corrections use reversal/compensation.
- The 17-table inventory/costing conceptual baseline is retained. `inventory_cost_layer_movements` remains a candidate, not an approved 18th table.
- ERD v9.6.9 is a working reference, not a canonical final physical schema.

## 3. Current stage status — 17 November 2026

| Stage / workstream | Current status | Interpretation |
|---|---|---|
| Stages 1–4.7.7 | COMPLETE — FROZEN | Do not repeat or reopen without new evidence or a material contradiction |
| Stage 4.7.8 | PARTIAL — GATE NOT PASSED | Register-level routing exists; complete acceptance evidence is not established |
| Stage 4.8 | 13/13 DRAFTED | Draft completion does not mean final acceptance |
| Stage 4.9 | PARTIAL — ACCEPTANCE NOT MET | Do not describe Stage 4.9 as complete |
| C08 | COMPLETE — FROZEN | Evidence-availability audit completed; its limitations remain |
| C09 | COMPLETE — FROZEN | Reconciliation findings retained; open crosswalks remain |
| C10 | PLAN COMPLETE — SOURCE RECOVERY OPEN | Unrecovered sources remain explicit gaps; do not repeat identical searches without new evidence |
| C11 | AUDIT EXECUTED — PARTIAL / OPEN | Purchasing and Sales baselines reviewed; crosswalk and physical-schema details remain open |
| C12.1–C12.14 | COMPLETE at their recorded scopes | See Section 5; completion of analysis/strategy is not implementation |
| C12.15 | NOT STARTED at checkpoint | Status/checkpoint correction plan |
| C12.16 | NOT STARTED at checkpoint | Version identity and topology reconciliation |
| C12.17 | NOT STARTED at checkpoint | Final dependency closure review |
| C12.18 | BLOCKED | Stage 4.9 re-audit and acceptance; criteria not yet met |
| Stage 5 — GitHub documentation migration | AUTHORIZED / IN PROGRESS | User authorized on 17 November 2026; documentation-only, one PR at a time |
| Stage 6 — Implementation | NOT AUTHORIZED | Requires separate explicit authorization and all required gates |

The stage statuses above are the project checkpoint carried forward from the audit work completed through 17 November 2026. They are not a fresh verification of database, security enforcement, application behavior or Production.

## 4. Non-negotiable project guardrails

1. `DB_PUSH_BLOCKED: ACTIVE`.
2. Audit-first and read-only for database, Supabase, application runtime and Production.
3. No SQL/DDL/DML, schema changes, migrations, RLS, triggers, Auth, API/backend, application code, or Production data changes under Stage 5.
4. No Supabase Preview/Staging workflow.
5. No Vercel deployment, deployment configuration change, or Production operation under Stage 5.
6. Stage 5 is limited to documentation migration and documentation corrections in GitHub.
7. One PR at a time. Complete review, CI checks where applicable, audit and post-merge verification before opening the next PR.
8. Do not merge a PR until the user has explicitly approved that merge after review.
9. Preserve historical source documents and earlier GitHub records. Use append-only corrections/addenda; do not silently rewrite history.
10. Preserve all FIX decisions at their recorded scope. Do not promote conceptual FIX into physical schema, enforcement, test or deployment approval.
11. Keep OPEN, PARTIAL, REVIEW, TODO, UNVERIFIED, UNRECOVERED, CANDIDATE and NOT STARTED visible until evidence and approval justify a change.
12. Missing archive files are recorded as gaps and do not block work that can proceed from available evidence.
13. Never select a canonical source by filename, version label, timestamp or the words FINAL/MASTER/FIX alone. Require explicit provenance and scope.
14. Do not repeat completed/frozen audit work without new evidence, a contradiction or a documented reason.

## 5. Completed C12 work carried forward

| Item | Status | Result boundary |
|---|---|---|
| C12.1–C12.6 | COMPLETE — FROZEN | Prior audit evidence, document matrix, source locators, gaps, P99 links and dependency review |
| C12.7a–C12.7j | COMPLETE — PARTIAL FINDINGS | DOC-00 through DOC-12 individually assessed; partial findings remain |
| C12.8 | COMPLETE — ANALYSIS | P99 disposition analysis |
| C12.9 | COMPLETE | Claim-level gap identification |
| C12.10 | PARTIAL | Dependency closure not complete |
| C12.11 | COMPLETE — CHAT CHECKPOINT | Checkpoint recorded in conversation; not a Library file update |
| C12.12 | COMPLETE — ANALYSIS | Consolidated claim-locator gap matrix |
| C12.13 | COMPLETE — PARTIAL RECOVERY | Primary locators recovered where available; unrecovered sources remain gaps |
| C12.14 | COMPLETE — STRATEGY | Append-only source backlink addendum method defined; no source addenda implemented |

### 5.1 C12.14 backlink policy

- Use an append-only Source Backlink Addendum for each relevant controlling primary source where its claim and exact locator are verified.
- Use a Written Acceptance Exception only where a content backlink is objectively impractical and the exception is explicitly approved with scope, rationale and risk.
- An accepted exception is never reported as a verified content backlink.
- Do not retrofit all archive files indiscriminately; target controlling primary sources for material claims.
- P99-01 remains OPEN until actual source-side backlinks or explicitly approved exceptions are implemented and verified.
- The C12.14 strategy itself did not modify Library files.

## 6. Open issues to carry into GitHub master documents

The following are known gaps, not reasons to stop the migration:

- Stage 4.7.8 acceptance remains partial; the routing matrix is register-level, not proof of actual content backlinks.
- Stage 4.9 acceptance criteria remain unmet.
- P99-01 through P99-09 retain their recorded open/partial dispositions unless a later evidence-backed correction is documented.
- DOC-00, DOC-06, DOC-07, DOC-08, DOC-09 and DOC-10 contain historical Stage 4.9 checkpoint wording that needs an append-only current-status correction.
- DOC-11 v0.2 has internal checkpoint/version limitations; DOC-12 v0.3 contains a stale addendum reference requiring a correction plan.
- DOC-01/04/07/11 path/topology conflicts remain open/proposed.
- Purchasing: 15 working-baseline entities are identified; the historical 14 count and 14-to-15 crosswalk remain OPEN. Physical dictionary, keys, constraints and lifecycle details remain OPEN.
- Sales: 20 conceptual entities and 18 historical-baseline entities are distinct claims. The manifest/crosswalk and reversal provenance remain OPEN; do not infer 20 = 18 + 2 without evidence.
- REC-08 Batch 7/8/9 original reports and the complete consolidated security finding register remain UNRECOVERED.
- A12.18–A12.28 and D40-203–216 remain UNRECOVERED/UNVERIFIED as recorded.
- RMD-20, RMD-43 and RMD-46 direct source provenance remains UNVERIFIED where originals are not available; downstream references are not substitutes.
- Physical schema, RLS/server enforcement, executed tests and current Production security posture are NOT VERIFIED by the documentation audit.

## 7. GitHub documentation migration plan

The migration is documentation-only and uses available archive evidence. Each PR must be small enough to review and must preserve provenance and status boundaries.

| Sequence | Work package | Target outcome | Gate |
|---|---|---|---|
| 1 | Establish DOC-00 project control and master checklist | One current project control entry point and continuation checklist | Current PR review and explicit merge approval |
| 2 | Reconcile existing index, provenance, inventory and archive records | Remove ambiguity between historical snapshots and current checkpoint without deleting history | One PR after sequence 1 is merged and verified |
| 3 | Publish DOC-01/DOC-02 product and business-domain masters | Blueprint, tenancy, category taxonomy and workflows with source locators and gaps | One PR at a time |
| 4 | Publish DOC-03/DOC-04 architecture and ERD/inventory masters | Architecture and conceptual entity baselines, clearly separated from physical schema | One PR at a time |
| 5 | Publish DOC-05/DOC-06 authorization and requirements/traceability masters | Role/capability/scope/SoD and test/traceability boundaries | One PR at a time |
| 6 | Publish DOC-07 security evidence and DOC-08 decision register | Historical security evidence and decision lineage with explicit limitations | One PR at a time |
| 7 | Publish DOC-09 dependency register and DOC-10 conflict/supersession master | Consolidated blockers, conflicts, source identity and supersession | One PR at a time |
| 8 | Publish DOC-11 roadmap/release gates and DOC-12 archive/document index | Current roadmap and controlled source index; historical archive remains evidence | One PR at a time |
| 9 | Final documentation consistency audit | Verify links, IDs, source locators, statuses, cross-document references and main-branch state | Final migration acceptance review |

The sequence is a working migration order. A missing source may be recorded as OPEN/UNRECOVERED while the corresponding master document is published from available evidence.

## 8. Current first-PR checkpoint

- Repository: `kasirwarkop2026/Pos-Saas-Multi-Usaha`.
- Default branch: `main`.
- First migration branch: `docs/stage5-master-control-2026-11-17`.
- Proposed file: `docs/00-governance/MASTER-PROJECT-CONTROL.md`.
- This file is proposed until its PR is reviewed and merged.
- No application code, database, Supabase, CI workflow, Vercel or Production change is included.
- No source archive file is modified by this GitHub documentation migration.

## 9. Master continuation checklist

This checklist is append-only. Update the status and record evidence after each completed item; do not delete historical entries or repeat completed work without a reason.

| ID | Work item | Status at 17 Nov 2026 | Dependency / next action |
|---|---|---|---|
| ST5-01 | Confirm repository, default branch and existing documentation PR state | COMPLETE — VERIFIED | Repository and merged baseline PRs #3/#4 inspected |
| ST5-02 | Establish DOC-00 project control and migration checklist | IN PROGRESS — PR DRAFT PREPARATION | Review this file, run applicable checks, then request explicit merge approval |
| ST5-03 | Reconcile existing GitHub index/provenance/archive snapshots | NOT STARTED | Depends on ST5-02 merge and post-merge verification |
| ST5-04 | DOC-01 product/tenant blueprint master | NOT STARTED | Use available blueprint sources; carry missing locators as gaps |
| ST5-05 | DOC-02 business-domain/category/workflow master | NOT STARTED | Use available RMD sources and preserve category-specific status |
| ST5-06 | DOC-03 architecture master | NOT STARTED | Preserve conceptual vs physical/enforcement boundary |
| ST5-07 | DOC-04 ERD/inventory/costing master | NOT STARTED | Preserve 17 conceptual tables and candidate 18th table status |
| ST5-08 | DOC-05 authorization master | NOT STARTED | Preserve CANDIDATE/OPEN and permission/scope/SoD gaps |
| ST5-09 | DOC-06 requirements/traceability/test master | NOT STARTED | Carry G10 and 4.7.8/4.9 acceptance gaps |
| ST5-10 | DOC-07 security evidence master | NOT STARTED | REC-08 missing sources remain UNRECOVERED |
| ST5-11 | DOC-08 decision register master | NOT STARTED | Preserve FIX/REVIEW/OPEN and decision-level provenance |
| ST5-12 | DOC-09 dependency register master | NOT STARTED | Carry unresolved cross-document and security dependencies |
| ST5-13 | DOC-10 conflict/supersession master | NOT STARTED | Reconcile identities and conflicts without timestamp-based selection |
| ST5-14 | DOC-11 roadmap/release gates master | NOT STARTED | Correct historical checkpoints append-only |
| ST5-15 | DOC-12 archive/document index master | NOT STARTED | Use archive as historical evidence; identify GitHub main as active reference after adoption |
| ST5-16 | Final documentation audit and migration acceptance | NOT STARTED | All planned master docs merged and cross-verified |

## 10. Status update protocol

Every status update must state:
- checkpoint date;
- item completed and exact scope;
- evidence and repository path/PR/commit where applicable;
- what remains OPEN/PARTIAL/UNVERIFIED/UNRECOVERED;
- dependencies and next action;
- whether a change is only proposed, present on a PR branch, or merged and verified on `main`.

Never describe a PR-branch document as the current `main` authority before merge. After each merge, verify the resulting file and links on `main` before moving to the next PR.

## 11. Implementation boundary

Stage 5 authorization applies only to documentation migration and documentation corrections in GitHub. It does not authorize implementation, schema design changes, SQL, migrations, RLS/Auth changes, backend/API work, CI workflow changes, Vercel deployment, or Production activity.

Stage 6 remains **NOT AUTHORIZED**. `DB_PUSH_BLOCKED: ACTIVE` remains in force.
