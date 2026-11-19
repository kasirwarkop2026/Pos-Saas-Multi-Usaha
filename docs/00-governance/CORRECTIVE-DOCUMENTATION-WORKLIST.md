# Corrective Documentation & Closure Worklist

> **Project:** POS SaaS Multi-Usaha v3.0  
> **Document ID:** GOV-CORRECTIVE-WORKLIST  
> **Version:** 0.1.0  
> **Status:** PROPOSED — becomes the active corrective-work navigation document only after merge and post-merge read-back verification on `main`  
> **Created:** 19 November 2026  
> **Repository:** `kasirwarkop2026/Pos-Saas-Multi-Usaha`  
> **Branch target:** `main`  
> **Supersedes for active task routing:** Master Checklist v2.0 §§55.4–57.2 and its earlier next-action routing, without deleting or rewriting those historical records  
> **Governance:** AUDIT-FIRST • EVIDENCE-BASED • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`

## 1. Purpose and authority

This worklist establishes a new, corrective-documentation-focused work sequence. Its purpose is to fix document-level inconsistencies that can be resolved from already-approved decisions and available primary sources, identify evidence-dependent blockers precisely, and prepare the documentation set for a valid Stage 4.9 acceptance review.

This worklist is a **navigation and task-control document**, not a replacement for domain-specific source-of-truth documents or evidence. For every work item:
1. Read the relevant controlling document and source from current `main`.
2. Record exact source identity, version, section/page/table/entity locator and evidence.
3. Distinguish editorial correction, approved FIX decision, unresolved issue, and missing evidence.
4. Make only scoped, append-only corrections. Preserve prior text and history.
5. Reassess the work item's acceptance criteria before proposing closure.
6. Use one PR at a time; inspect the full diff and applicable CI. Merge only after explicit user approval.
7. After merge, verify the changed content on `main` and record a separate append-only worklist checkpoint.

A work item is not closed merely because its prose was edited. Closure requires its stated criteria and source-backed evidence.

## 2. Transition from Master Checklist v2.0

Master Checklist v2.0 is being retired **as the active navigation/workflow checklist** to prevent the former sequence from being mistaken for the current plan.

- Preserve `docs/00-governance/MASTER-CHECKLIST-v2.0.md` unchanged except for the append-only closure notice proposed in this PR.
- Its historical checkpoints, decisions, evidence, and status snapshots remain part of the audit trail.
- The closure notice does not mean all items in v2.0 are complete. It means only that v2.0 is no longer the active task-routing document.
- The new worklist becomes active only after its merge and post-merge read-back verification on `main`.
- Current domain-specific status registers and evidence remain controlling for their own subject matter. This worklist must not silently promote any status.

Until the new worklist is merged and verified, this branch is proposed work only. Do not treat it as an active instruction on `main`.

## 3. Non-negotiable governance

- `DB_PUSH_BLOCKED: ACTIVE`.
- Audit-first, evidence-based, append-only documentation work.
- No SQL, DDL, DML, database/schema mutation, migration, RLS, Auth, trigger, API/backend, application source-code, CI workflow, Vercel configuration, deployment, Supabase Preview/Staging or Production changes without separate explicit authorization for the exact scope.
- Stage 6 implementation remains **NOT AUTHORIZED**. Documentation closure does not authorize implementation.
- Stage 5 blanket migration remains **NOT AUTHORIZED**; only individually scoped documentation PRs may proceed when explicitly approved.
- Preserve approved FIX decisions. Do not reopen them without a specific evidence-based reason.
- Do not promote OPEN, PARTIAL, UNVERIFIED, NOT STARTED, REVIEW REQUIRED or NOT ACCEPTED to FIX/CLOSED/PASS without satisfying the controlling acceptance criteria.
- A conceptual specification is not proof of physical schema, deployed enforcement, executed tests, Production readiness or approval.
- Distinguish DESIGNED, SPECIFIED, IMPLEMENTED, EXECUTED, PASSED, INDEPENDENTLY VERIFIED and APPROVED.
- A skipped CI job is not a passed test.

## 4. Baseline status carried forward

The following are baseline facts from the latest available governance checkpoint and must be re-read against current `main` and source-native registers before any status change:

| Area | Baseline status | Required treatment |
|---|---|---|
| Stage 4.7.8 | PARTIAL — GATE NOT PASSED | Keep open until cross-reference, primary locator and backlink criteria pass |
| Stage 4.8 | 13/13 DRAFTED — NOT ACCEPTED | Drafting is not acceptance |
| Stage 4.9 | PARTIAL — ACCEPTANCE NOT MET | Complete final acceptance audit only after dependencies are evidenced |
| A12.40 | PARTIAL / OPEN — NOT ACCEPTED / NOT CLOSED | Do not force close; 0/12 PASS in latest recorded assessment |
| A12.41 | NOT STARTED / NOT VERIFIED | Depends on A12.40; six-versus-seven gate-definition conflict remains unresolved |
| DOC-04 physical data dictionary | 0/17 physical entity dictionaries accepted | Logical/conceptual mapping is not a physical field dictionary |
| Purchasing 14→15 crosswalk | OPEN / incomplete | Requires primary source and exact locators for both sides |
| Sales 20→18 crosswalk | OPEN / incomplete | Requires primary source and exact locators for both sides |
| A12.18–A12.28 | OPEN / UNVERIFIED | Requires source recovery and verification |
| D40-203–D40-216 | UNRECOVERED | Do not infer content |
| 58 test source IDs | UNRECOVERED | Test design is not executed test evidence |
| GOV-OPEN-02 | PARTIAL | 231-row manifest/transcription is not per-file content review |
| REC-08 | PARTIAL | Batch 7/8/9 and consolidated evidence remain incomplete |
| GOV-OPEN-07 / RMD-56 | OPEN / UNRESOLVED | Approval provenance and canonical source unresolved |
| Implementation Readiness | NOT READY | No implementation authorization implied |

If a source-native register has a newer verified status, record the reconciliation and exact evidence before using it. This table is a routing baseline, not permission to override controlling sources.

## 5. Work packages

### Package A — Document-control and editorial corrections

These tasks may be suitable for early execution, but only after checking current-main source text and exact references. They do not authorize changing substantive status.

| ID | Scope | Expected correction | Closure criteria |
|---|---|---|---|
| CW-01 | DOC-00 / document control | Reconcile navigation, version and status references; clearly distinguish historical snapshots from current control | All current links and status references point to controlling sources; historical content preserved |
| CW-02 | DOC-01 / product blueprint | Align terminology and references with approved FIX decisions | No contradiction with controlling FIX register; each material claim has a source/locator |
| CW-03 | DOC-02 / category and workflow | Reconcile category/workflow references with DOC-05 authorization and DOC-06 traceability | References resolve and category/workflow claims remain source-backed |
| CW-04 | DOC-03 / system architecture | Reconcile architecture terminology and cross-document version references | No stale or contradictory document-version references; DOC-03 draft/review status preserved |
| CW-05 | DOC-08–DOC-10 / decision registers | Align FIX, OPEN, conflict and supersession references without repeating completed bounded audits | IDs, dispositions, provenance and backlinks are consistent; no unsupported closure |
| CW-06 | DOC-11–DOC-12 / roadmap and archive index | Reconcile version, status, navigation and document-index references | Current document inventory and links are consistent; historical records preserved |

### Package B — Product, workflow and authorization consistency

| ID | Scope | Required work | Closure criteria |
|---|---|---|---|
| CW-07 | DOC-01 / DOC-02 / DOC-05 | Cross-document alignment of categories, workflows, roles, modules, capabilities and actions | Each mapped item has a controlling source and stable identifier; gaps explicitly listed |
| CW-08 | DOC-05 | Authorization matrix: actor/role, action, resource, tenant/business scope, outlet/warehouse scope, SoD, approval and permission catalogue | Complete source-backed matrix; unresolved policy decisions remain OPEN; no claim of technical enforcement |
| CW-09 | DOC-06 | End-to-end traceability: Category → Workflow → Module → Capability/Action → Scope → Authorization → Test Evidence | Traceability rows have stable IDs, source locators and explicit gap statuses |
| CW-10 | DOC-06 ↔ DOC-07 | Requirements-to-security-control-to-test-evidence mapping | Each applicable requirement maps to a control and evidence status; missing evidence remains visible |
| CW-11 | DOC-08 ↔ DOC-09 ↔ DOC-10 | FIX/OPEN/conflict/supersession consistency | No contradictory dispositions; provenance and supersession relationships are explicit |
| CW-12 | DOC-00–DOC-12 | Cross-document acceptance consistency review | No unresolved internal contradiction hidden by wording; all acceptance exceptions listed |

### Package C — Physical data specification and crosswalk dependencies

| ID | Scope | Required work | Closure criteria |
|---|---|---|---|
| CW-13 | DOC-04 physical data dictionary | Build/verify physical field dictionaries for the 17 conceptual entities from controlling physical sources | Per-entity fields, types, nullability, defaults, constraints, keys, indexes, tenant scope and source locators verified; no inferred physical facts |
| CW-14 | A12.40 | Resolve AC40-01–AC40-12 using controlling evidence | Each criterion independently evidenced and accepted; unresolved criteria remain PARTIAL/OPEN |
| CW-15 | A12.41 | Resolve primary gate definition and six-versus-seven conflict, then assess the gate | Canonical approved gate source and provenance established before any gate disposition |
| CW-16 | Purchasing 14→15 | Verify entity crosswalk against already-published primary sources | Both sides have exact source/version/page/section/table/entity locators and supported mapping |
| CW-17 | Sales 20→18 | Verify entity crosswalk against already-published primary sources | Both sides have exact source/version/page/section/table/entity locators and supported mapping |

### Package D — Primary-source recovery, provenance and evidence

| ID | Scope | Required work | Closure criteria |
|---|---|---|---|
| CW-18 | A12.18–A12.28; D40-203–D40-216 | Recover and verify named primary sources | Exact source artifact and locator recovered; otherwise retain UNRECOVERED/UNVERIFIED with precise gap |
| CW-19 | GOV-OPEN-07 / RMD-56 and approval records | Establish approval provenance and canonical source selection | Original decision/approval record, authority, version and locator verified; no retrospective assumption |
| CW-20 | GOV-OPEN-02 / archive manifest | Review archived document content beyond manifest transcription | Each reviewed artifact has content-level finding and locator; unreviewed rows remain unreviewed |
| CW-21 | REC-08 / security evidence | Recover Batch 7/8/9 reports and consolidated evidence register | Required artifacts, scope, dates, findings and verification status are traceable; no claim of current security from incomplete evidence |
| CW-22 | Test evidence / 58 source IDs | Recover test sources and distinguish test design from execution | Test source, version, execution record, result and evidence locator verified; absent executions remain NOT EXECUTED/UNVERIFIED |

## 6. Execution order and dependencies

1. **Package A** — begin with CW-01 through CW-06, in individually bounded tasks. First verify whether each issue is still present in current `main`; do not recreate completed work.
2. **Package B** — execute CW-07 through CW-12 after Package A's document-control references are stable.
3. **Package C** — execute CW-13 through CW-17 only with physical or primary-source evidence. CW-15 cannot be accepted until the controlling A12.41 gate definition and approval provenance are resolved. CW-14 must meet every AC40 criterion before A12.41 proceeds.
4. **Package D** — execute CW-18 through CW-22 as evidence-recovery tasks. These may run before or alongside other packages when the required source artifacts are available, but no missing evidence may be fabricated.
5. **Final acceptance** — conduct a new Stage 4.9 audit across DOC-00–DOC-12 only after the applicable work items and dependencies have been reconciled. Report PASS, PASS WITH OPEN DEPENDENCIES, PARTIAL or NOT ACCEPTED according to actual criteria; do not target a predetermined PASS.

Within each package, use one PR at a time and preserve a clear separation between audit findings, proposed correction, PR review, user merge approval and post-merge verification.

## 7. Work-item status ledger

At creation, all work items below are **NOT STARTED — TO BE VERIFIED AGAINST CURRENT MAIN**. This does not overwrite the source-native statuses in §4.

| ID range | Initial status | Notes |
|---|---|---|
| CW-01–CW-06 | NOT STARTED — TO BE VERIFIED | Editorial/document-control scope; check current-main before work |
| CW-07–CW-12 | NOT STARTED — TO BE VERIFIED | Cross-document consistency scope |
| CW-13–CW-17 | BLOCKED / EVIDENCE-DEPENDENT | Do not infer physical schema, crosswalks or gate definitions |
| CW-18–CW-22 | OPEN / EVIDENCE-DEPENDENT | Source recovery and evidence validation required |

Every subsequent status change must be recorded append-only in a dated checkpoint with: work-item ID, previous/new status, exact changed paths, source/evidence locators, acceptance result, PR/commit, CI disposition, merge approval and post-merge read-back.

## 8. Explicit non-goals

This worklist does not:
- declare Stage 4.7.8, Stage 4.8 or Stage 4.9 complete;
- declare DOC-00–DOC-12 canonical, final or accepted;
- close A12.40 or start/accept A12.41;
- create or verify physical database schema, deployed RLS/Auth or backend enforcement;
- authorize Stage 5 blanket migration or Stage 6 implementation;
- authorize any database, application, CI workflow, Vercel, deployment or Production change.

## 9. Initial checkpoint

- Worklist created as a proposed replacement for active task routing.
- Master Checklist v2.0 is to be marked **CLOSED FOR ACTIVE WORKFLOW / SUPERSEDED FOR NAVIGATION**, while preserved as historical audit evidence.
- No work item is claimed complete by this transition.
- No dependency, FIX decision or technical readiness status is changed by this transition.


## 10. Package A — initial CW-01–CW-06 current-main audit checkpoint

The initial bounded review of CW-01–CW-06 was performed against the post-PR #81 current-main documents. This checkpoint records findings and routes only; it does not promote a document to canonical/final/accepted status.

| Work item | Initial audit result | Disposition |
|---|---|---|
| CW-01 — DOC-00 | Historical §28.1/§28.4 navigation statements still identify Master Checklist v2.0 as active | Append-only reconciliation prepared in DOC-00 §29; awaiting this PR's review/merge and read-back |
| CW-02 — DOC-01 | RMD-69 locator statements in earlier §9/§10 are superseded for that locator criterion by §13; no new contradiction established in this bounded review | No new edit proposed; existing DOC01-G01/G02/G04–G10 and other source/locator gaps remain |
| CW-03 — DOC-02 | DOC-02's category and workflow status model is preserved; cross-document Category/Workflow → DOC-05 Authorization → DOC-06 Traceability alignment is not fully demonstrated by this bounded pass | Remains OPEN for a dedicated cross-document review; no status promotion |
| CW-04 — DOC-03 | DOC-04 master version mismatch is already corrected by DOC-03 §17; earlier cover/path wording is interpreted by the existing append-only publication addendum | Bounded version-reference correction verified; DOC-03 remains DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL |
| CW-05 — DOC-08–DOC-10 | DOC-08 publication scope and DOC-09/DOC-10 draft boundaries are explicit; DOC-10 §11.2 retains an obsolete pointer to active Master Checklist v2.0 | Append-only reconciliation prepared in DOC-10 §12; awaiting this PR's review/merge and read-back |
| CW-06 — DOC-11–DOC-12 | DOC-11 §§6/9 and DOC-12 §16.3 still route current work through Master Checklist v2.0; DOC-11 cover's proposed path is a historical pre-publication snapshot | Append-only reconciliations prepared in DOC-11 §16 and DOC-12 §17; awaiting this PR's review/merge and read-back |

### 10.1 Scope and status boundary

- Corrections in this checkpoint are navigation/provenance clarifications only.
- No FIX decision, source-native dependency, physical schema, security control, test execution, implementation, deployment or Production status is changed.
- DOC-01 through DOC-12 retain their existing draft/review/acceptance boundaries.
- CW-03 remains OPEN; Package B work is not started by this checkpoint.
- CW-01, CW-05 and CW-06 are not closed until the proposed append-only corrections are reviewed, merged and verified on main.


## 11. Package A — CW-03 DOC-02 / DOC-05 / DOC-06 cross-document audit checkpoint (19 November 2026)

A read-only cross-document audit was completed against the current `main` versions of:

- `docs/02-business-domains/CATEGORY_WORKFLOW_MASTER.md` — DOC-02.
- `docs/05-authorization/AUTHORIZATION_MASTER.md` — DOC-05.
- `docs/05-requirements-traceability/MASTER_TRACEABILITY.md` — DOC-06.

### 11.1 Audit coverage and findings

| Finding | Audit result | Disposition |
|---|---|---|
| CW03-F01 — Category/workflow baseline | CAT-01–CAT-13 and the published workflow counts/baselines agree between DOC-02 §3 and DOC-06 §5. Education, Hotel, Pharmacy, Lainnya and the two Parfum tracks retain matching conceptual boundaries. | PASS — within reviewed baseline; no category decision changed |
| CW03-F02 — Category/workflow versus authorization | DOC-02 §§2, 6–8 and DOC-05 §§3–9 consistently distinguish category/workflow context, role eligibility, module eligibility, capability/action, scope and authorization. | PASS — conceptual boundary consistent |
| CW03-F03 — Workflow-to-module mapping | DOC-02 §8 and DOC-05 §14 G01–G04 preserve the M01–M21 catalogue/crosswalk as DRAFT/CANDIDATE/OPEN. DOC-06 §§6 and 12 retain Workflow → M01–M21 as NOT MAPPED/OPEN. | OPEN — no approved mapping established |
| CW03-F04 — Capability/action and role traceability | DOC-05 §14 G04–G05 and DOC-06 TRC-OPEN-02/03 plus REC-06 AC-06-04/05 retain incomplete workflow/action and role/function mappings; stable permission keys and grants remain unapproved. | OPEN / PARTIAL — no inferred mapping |
| CW03-F05 — Scope, data, SoD and approval | DOC-05 §§9–11 and DOC-06 §§7–8, TRC-OPEN-04–06 and REC-06 AC-06-06–08 consistently preserve unresolved scope resolver, data/purpose, SoD and approval detail. | OPEN / PARTIAL — source-native statuses unchanged |
| CW03-F06 — Source provenance and row-level evidence | DOC-02 §§9–10 preserves incomplete category claim locators; DOC-06 REC-06 AC-06-10 remains PARTIAL. DOC-05 §20 is already an explicitly derived crosswalk, not a primary approval or one-to-one acceptance mapping. | PARTIAL — claim-level provenance remains incomplete |

### 11.2 Cross-document consistency disposition

- No substantive contradiction was established in the reviewed category/workflow baseline, conceptual decision boundaries, or distinction between eligibility and authorization.
- DOC-05 §20 already provides a bounded G01–G10 to REC-06 crosswalk. This audit does not duplicate it or reinterpret its relationship labels.
- Existing open gaps remain controlling: DOC-02 G01–G10; DOC-05 G01–G10, Scope O01–O10 and SoD A01–A12; DOC-06 TRC-OPEN-01–15 and REC-06 AC-06-01–12; and DOC-09 AUTH-OPEN-01–27.
- No source-native dependency was closed; no FIX decision, permission key, module assignment, role grant, scope rule, approval, test result or implementation status changed.

### 11.3 CW-03 status and closure gate

**CW-03: AUDIT COMPLETE — CLOSURE BLOCKED BY OPEN MAPPING AND PROVENANCE DEPENDENCIES.**

The audit portion is complete for the stated bounded scope. CW-03 is **not CLOSED** because its closure criteria require source-backed category/workflow references and demonstrated alignment to DOC-05 authorization and DOC-06 traceability. Workflow-to-module/action mapping, role/capability/scope mapping and claim-level provenance remain OPEN/PARTIAL.

No content correction is proposed in DOC-02, DOC-05 or DOC-06 in this checkpoint: the reviewed texts preserve the correct unresolved boundaries, and no new primary evidence was recovered that would justify changing them.

Package B / CW-07 is **not started** by this checkpoint. Route the next task only after this checkpoint is merged and verified on `main`.

### 11.4 Change and governance boundary

- Changed path in this checkpoint: this worklist only.
- DOC-02, DOC-05 and DOC-06 remain unchanged.
- READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.
- No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes.
- Stage 5 blanket GitHub/archive migration remains **NOT AUTHORIZED**; Stage 6 implementation remains **NOT AUTHORIZED**.
- This checkpoint is proposed documentation until its PR is reviewed, merged with explicit approval, and read back from `main`.
