# DOC-09 — MASTER OPEN / REVIEW / TODO REGISTER

POS SaaS Multi-Usaha v3.0 | 16 November 2026

**Status:** DRAFT v0.2 — CONSOLIDATED WORKING REGISTER; REVIEW REQUIRED  
**Mode:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`  
**Proposed GitHub path:** `docs/07-decision-registers/MASTER_OPEN_REGISTER.md` (publication path proposal; this PR is the separately authorized DOC-09 package only)

Version note: v0.2 is a substantive draft derived from Stage 3.3 register v0.1 and cross-reference register. Existing v0.1 and historical sources remain unchanged.


## 1. Purpose and status rules

Register all unresolved decisions, technical specifications, provenance gaps, evidence gaps, dependencies and deferred work. This complements DOC-08 Master FIX Register and does not replace primary sources.

OPEN: decision/detail not established or approved. REVIEW: evaluation/decision still required. PARTIAL: some baseline exists but closure criteria unmet. TODO: action/specification not completed.

UNVERIFIED / UNRECOVERED: evidence/source not found or not validated. NOT STARTED: work has not begun. DEFERRED: intentionally held for a gate. CANDIDATE / PROPOSED / DRAFT: not approved/final.

Document review status (CONTENT REVIEWED, METADATA VERIFIED) is independent from decision status. Completing an audit or creating this register does not close listed items.

Every item must retain stable ID, exact status, source/locator, scope, closure criteria, dependency and evidence needed. Closure is append-only and requires evidence.

## 2. Summary by domain

| Domain | Current open baseline | Consequence |
| --- | --- | --- |
| Archive governance | 231-file per-file register/index and two-dimensional status not yet complete; RMD-56 variants non-canonical. | No final archive document-control baseline. |
| Blueprint | V-01–V-14, R-01–R-06, P-01–P-08 and multiple domain specifications remain open; v3.0 remains working draft. | Blueprint not final specification. |
| ERD/A12 | Canonical physical ERD absent; A12.18–28 unrecovered; A12.31E open; A12.36.1 unverified; A12.40 partial; A12.41 not started. | No canonical physical schema. |
| Authorization | G01–G10 mixed OPEN/PARTIAL; O01–O12 technical details, keys, grants and enforcement incomplete. | No final permission catalogue or verified enforcement. |
| RMD/category | E-04, H-04, RMD-69 details, Parfum mapping, Pharmacy evidence and category parameters open. | Conceptual FIX is not technical readiness. |
| REC/evidence | REC-02/03/04/08 provenance and security evidence limitations remain. | No full provenance/security acceptance. |
| Cross-domain | End-to-end traceability to test evidence incomplete. | No final Category-to-Test matrix. |
| Migration/implementation | GitHub migration not authorized; physical schema/RLS/API/backend/tests/security readiness unverified. | DB_PUSH_BLOCKED remains active. |

## 3A. Archive governance (GOV-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| GOV-OPEN-01 | Master Archive Index does not point to 231-file manifest as current baseline. | TODO | Audit 2.1 F-2.1-01 | Append new version/addendum referencing 231 manifest while retaining 202 historical snapshot. |
| GOV-OPEN-02 | Document Status Register lacks complete 231 per-file rows. | OPEN | Audit 2.1 F-2.1-02 | Per-file path, family/ID, version, review status, decision status, controlling source, supersession, evidence and next action. |
| GOV-OPEN-03 | Document-review and decision-status vocabularies are not separated in master register. | OPEN | Audit 2.1 F-2.1-03 | Separate document_review_status and decision_status fields. |
| GOV-OPEN-04 | Historical audit order does not align with master Stage 2 plan. | TODO | Audit 2.1 F-2.1-04 | Append-only correction/version with consistent audit order. |
| GOV-OPEN-05 | Active workspace statement awaits verified GitHub migration. | DEFERRED | Audit 2.1 F-2.1-05 | Only after migration gate approval, completion and verification. |
| GOV-OPEN-06 | Old Category Consolidation Hotel/Other claims need supersession note. | TODO | Audit 2.2 B-2.2-04; XDOM-13; Erratum v1.1 | New consolidation/addendum references RMD-68/RMD-69; retain historical source. |
| GOV-OPEN-07 | Canonical RMD-56 v1.2 variant unresolved. | OPEN / UNRESOLVED | REC-01; Audit 2.5; Authorization Erratum v1.1 | Explicit document-control decision based on provenance; no timestamp/size-based selection. |
| GOV-OPEN-08 | Audit 2.1–2.7 and Stage 3 registers not yet linked in master index. | TODO | Audit 2.1; Stage 3.1/3.2 | Consolidated index with verifiable locators and source relationships. |

## 3B. Blueprint and product architecture (BPL-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| BPL-OPEN-01 | Blueprint v3.0 remains consolidated working draft, not final. | OPEN | Audit 2.2 B-2.2-01 | Separate final review/approval; address validation register. |
| BPL-OPEN-02 | V-01–V-14 are not all closed. | REVIEW / TODO | Audit 2.2 | Trace every V-ID to decision, specification and evidence. |
| BPL-OPEN-03 | R-01–R-06 from Stage 5.9.1 need final status and technical evidence references. | REVIEW / OPEN | Audit 2.2 B-2.2-02; Audit 2.3 | Cross-reference each R-ID to ERD/A12 and controlling decision. |
| BPL-OPEN-04 | P-01–P-08 from Stage 5.9.2 need final status and technical evidence references. | REVIEW / OPEN | Audit 2.2 B-2.2-02; Audit 2.3 | Cross-reference each P-ID to ERD/A12 and controlling decision. |
| BPL-OPEN-05 | Field-level data dictionary incomplete/not final. | REVIEW / TODO | Audit 2.2 V-01–V-14 | Field definition/type/nullability/constraints/ownership/tenant scope/classification/provenance. |
| BPL-OPEN-06 | Owner derivation, ownership lifecycle and edge cases lack technical closure. | OPEN | Audit 2.2; RMD-52; Audit 2.5 | Authoritative ownership model, dispute/joint ownership/transfer/recovery/legal hold/evidence/tests. |
| BPL-OPEN-07 | Barcode, product/variant, units, pricing, tax, bundle/recipe and canonical product target not all final. | REVIEW | Audit 2.2 V-01–V-14; P-01–P-08 | Approved subdomain decisions and ERD cross-reference. |
| BPL-OPEN-08 | Payment provider linkage, credit note, non-sales receivable, landed cost and journal/accounting linkage incomplete. | REVIEW / TODO | Audit 2.2 V-01–V-14 | Source/event identity, lifecycle, accounting rules, reconciliation and tests. |
| BPL-OPEN-09 | Offline stock conflict and sync/idempotency details incomplete. | REVIEW / TODO | Audit 2.2; A12.09 | Conflict policy, idempotency, replay, reconciliation, concurrency and negative tests. |
| BPL-OPEN-10 | Super Admin/Platform Admin sitemap and wireframes remain proposed. | PROPOSED / OPEN | Audit 2.2 B-2.2-05/06; Sitemap Erratum v1.1 | Separate UI review/approval after permission/scope model; acceptance criteria are not test results. |
| BPL-OPEN-11 | Page × permission × scope matrix not final. | OPEN / CANDIDATE | Audit 2.2 B-2.2-07; Audit 2.4 | Stable keys, scope, data, SoD, approver, deny cases, API/RLS enforcement and evidence. |

## 3C. ERD and physical data model (ERD-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| ERD-OPEN-01 | No approved canonical final ERD/physical schema. | OPEN | Audit 2.3 §3 | Explicit approval of master version and technical dependencies. |
| ERD-OPEN-02 | ERD v9.6.9 is fullest working reference, not canonical master. | CONTROLLED OPEN | Audit 2.3 §3 | No promotion without formal approval. |
| ERD-OPEN-03 | 17 inventory tables are conceptual; physical specification incomplete. | OPEN | Audit 2.3 §4 | PK/FK/composite FK/unique/check/index/tenant keys/lifecycle/constraints/migration and test design. |
| ERD-OPEN-04 | inventory_cost_layer_movements remains candidate, not approved 18th table. | REVIEW | Audit 2.3 §4 | Explicit decision and relationship specification. |
| ERD-OPEN-05 | A01 source reference physical schema/FK/lifecycle/validation/uniqueness not final. | TODO | Audit 2.3 A01 | Technical specification aligned to conceptual baseline and tests. |
| ERD-OPEN-06 | A02 polymorphic source validation and tenant integrity open. | TODO | Audit 2.3 A02 | source_type/source_id validation, FK/integrity strategy, constraints and tests. |
| ERD-OPEN-07 | A03 partial shipment receipt remains REVIEW/OPEN. | REVIEW | Audit 2.3 A03 | Approved lifecycle/quantity/cost/status decision. |
| ERD-OPEN-08 | A04 FIFO cost-layer identity during transfer technical detail remains REVIEW. | REVIEW | Audit 2.3 A04 | Layer mapping, movement identity, shipment/receipt, cost continuity and tests. |
| ERD-OPEN-09 | A05 stock-count reconciliation technical detail remains REVIEW. | REVIEW | Audit 2.3 A05 | Variance, approval, locking, movement generation, idempotency and audit trail. |
| ERD-OPEN-10 | A06 FIFO/reservation concurrency technical detail remains REVIEW. | REVIEW | Audit 2.3 A06 | Locking/isolation, race cases, deterministic allocation, retries and evidence. |
| ERD-OPEN-11 | A07 batch/parent balance reconciliation technical detail remains REVIEW. | REVIEW | Audit 2.3 A07 | Invariant, projection rebuild, reconciliation job, exceptions and tests. |
| ERD-OPEN-12 | A08 landed-cost correction baseline FIX; technical details open. | TODO | Audit 2.3 A08 | Adjustment/reversal lifecycle, allocation, accounting/cost-layer impact and idempotency. |
| ERD-OPEN-13 | A09 idempotency baseline FIX; technical registry/lifecycle open. | TODO | Audit 2.3 A09 | Unique keys, retention, replay, collision, concurrency behavior and tests. |
| ERD-OPEN-14 | A10 return/cost-layer reversal CLOSED only at architecture baseline. | CONTROLLED OPEN | Audit 2.3 A10 | Physical model, partial returns, valuation, reversal evidence and tests. |
| ERD-OPEN-15 | A11 transfer/shipment lifecycle FIX architecturally; technical transitions not final. | TODO | Audit 2.3 A11 | State machine, actor permissions, quantities, exceptions, shipment/receipt evidence. |
| ERD-OPEN-16 | A12.18–A12.28 not recovered/verified. | UNRECOVERED / UNVERIFIED | Audit 2.3; REC-07 | Recover primary source or approved unresolved provenance disposition; do not reconstruct as FIX. |
| ERD-OPEN-17 | A12.31–A12.36 contain PARTIAL/OPEN items. | PARTIAL / OPEN | Audit 2.3; REC-07 | Close each subdecision with source, criteria, approval and technical evidence. |
| ERD-OPEN-18 | A12.31E remains OPEN. | OPEN | Audit 2.3; REC-07 | Explicit source decision and resolution. |
| ERD-OPEN-19 | A12.36.1 UNVERIFIED/REVIEW. | UNVERIFIED / REVIEW | Audit 2.3; REC-07 | Recover/validate provenance and decision. |
| ERD-OPEN-20 | A12.40 has not met AC40-01–AC40-12 (0/12 fully met). | PARTIAL / OPEN | Audit 2.3; A12.40 reconciliation reports | Each criterion needs source, decision, artifact and verification. |
| ERD-OPEN-21 | A12.41 GATE-01–GATE-07 FAIL/NOT VERIFIED; work not started. | NOT STARTED / NOT VERIFIED | Audit 2.3; A12.41 | Satisfy all gates with explicit evidence and approval. |
| ERD-OPEN-22 | D40-203 through D40-216 not recovered. | UNRECOVERED | Audit 2.3 P1; REC-07 | Recover primary sources; no assumption-based reconstruction. |
| ERD-OPEN-23 | D40-244/D40-253 not accepted as replacement decisions. | UNVERIFIED | Audit 2.3 P1 | Verify provenance and explicit replacement decision. |
| ERD-OPEN-24 | Purchasing 15 entities vs earlier 14 not reconciled. | OPEN | Audit 2.3 P2 | Entity-by-entity crosswalk with sources and decisions. |
| ERD-OPEN-25 | Sales 20 early vs later 18 entities lacks complete crosswalk. | OPEN | Audit 2.3 P2 | Entity-by-entity lineage and disposition. |
| ERD-OPEN-26 | A12 Decision Register v0.5 not canonical/user-approved; consolidated A12 document has internal metadata mismatch. | OPEN | Audit 2.3 §3; REC-07 | Document-control approval; preserve variants and page locators. |
| ERD-OPEN-27 | Physical MWA/FIFO costing, concurrency and cost-layer implementation incomplete. | OPEN | A12.37; Audit 2.3 | Retain per-business + product/variant + inventory-location baseline; specify physical costing/locking/tests. |

## 3D. Authorization, role, module, scope, SoD and data (AUTH-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| AUTH-OPEN-01 | G01 canonical M01–M21 module catalogue not final. | OPEN / PARTIAL | Audit 2.4 G01 | Definition, boundaries, owner, lifecycle, dependencies and approval per module. |
| AUTH-OPEN-02 | G02 category × module mapping not final. | OPEN | Audit 2.4 G02; Crosswalk v1.3 DRAFT | All category/workflow mappings require source approval; no inferred FIX. |
| AUTH-OPEN-03 | G03 shared foundation vs operational module only partially resolved. | PARTIAL | Audit 2.4 G03 | Capability boundary and role access for seven foundations. |
| AUTH-OPEN-04 | G04 submodule/workflow decomposition not final. | OPEN | Audit 2.4 G04 | Workflow-to-module decomposition traceable to category decisions. |
| AUTH-OPEN-05 | G05 18 action families remain vocabulary candidates. | PARTIAL | Audit 2.4 G05 | Stable action definitions, semantics, risk tier, module mapping and approval. |
| AUTH-OPEN-06 | G06 scope resolver not final. | PARTIAL | Audit 2.4 G06 | Object/geographic dimensions, hierarchy, inheritance, multi-scope, assignment, expiry, revocation and resolver behavior. |
| AUTH-OPEN-07 | G07 SoD/approval/threshold/dual-control matrix not final. | PARTIAL | Audit 2.4 G07 | Retain L0–L3 principles; define action risk, approver eligibility, thresholds, independence and exceptions. |
| AUTH-OPEN-08 | G08 field-level sensitive data classification/allowlists not final. | PARTIAL | Audit 2.4 G08 | Retain D0–D4; field classification, purpose, masking, export, retention and jurisdiction. |
| AUTH-OPEN-09 | G09 credential/regulatory/jurisdiction evidence catalogue not final. | PARTIAL | Audit 2.4 G09; RMD-64 | Pharmacy regulated workflow remains NOT ELIGIBLE/NOT READY until verified. |
| AUTH-OPEN-10 | G10 negative-test traceability incomplete; tests not executed. | PARTIAL | Audit 2.4 G10; REC-05/06 | Map XCAT-NT-01–14 through category/module/action/resource/scope/data/expected deny; distinguish design/implementation/execution/pass/evidence. |
| AUTH-OPEN-11 | O01 exact sub-permissions for 11 Super Admin menus not finalized. | OPEN | Audit 2.4 O01 | Action-level catalogue and sensitive view/action separation. |
| AUTH-OPEN-12 | O02 Platform Admin field allowlist not finalized. | OPEN | Audit 2.4 O02 | Field-by-field allowlist, purpose, masking, audit and scope. |
| AUTH-OPEN-13 | O03 tenant activation/deactivation scope granularity open. | OPEN | Audit 2.4 O03 | Target scope, approval, effective date, safeguards and audit. |
| AUTH-OPEN-14 | O04 price-change thresholds/effective-date rules open. | OPEN | Audit 2.4 O04 | Threshold, target, bulk restrictions, approver and audit. |
| AUTH-OPEN-15 | O05 refund eligibility, SLA and payment executor open. | OPEN | Audit 2.4 O05 | Remaining refundable amount, requester/reviewer separation and execution reconciliation. |
| AUTH-OPEN-16 | O06 ticket categories, reopen/SLA/attachments open. | OPEN | Audit 2.4 O06 | Workflow taxonomy, data minimization, scope and retention. |
| AUTH-OPEN-17 | O07 cross-tenant read-session duration, re-auth and notification open. | OPEN | Audit 2.4 O07 | Time-bound session lifecycle, target tenant, reason, re-auth, notification and auto-expiry. |
| AUTH-OPEN-18 | O08 exact allowlisted cross-tenant write operations open. | OPEN | Audit 2.4 O08 | Narrow operation catalogue, target, reason, expiry, approval and audit. |
| AUTH-OPEN-19 | O09 audit visibility/history boundary open. | OPEN | Audit 2.4 O09 | Own activity vs target/ticket vs global scope and retention. |
| AUTH-OPEN-20 | O10 Admin & Permission menu placement/details open. | OPEN | Audit 2.4 O10; Sitemap Erratum | SUPER_ADMIN-only policy retained; UI details separate approval. |
| AUTH-OPEN-21 | O11 exact dual-control action list open. | OPEN | Audit 2.4 O11 | Risk-based action list, independent approver and no self-approval. |
| AUTH-OPEN-22 | O12 default duration and periodic review interval open. | OPEN | Audit 2.4 O12 | Grant classes, durations, renewal, review cadence, expiry/revocation. |
| AUTH-OPEN-23 | Permission Category A/B/C mapping to stable permission keys not final. | OPEN | Audit 2.4; Audit 2.5 | Map each key and role availability through approved catalogue. |
| AUTH-OPEN-24 | Role assignment lifecycle, cache invalidation, conflict/deny evaluation and multi-scope technical behavior open. | TODO | Audit 2.5 §8 | Effective dates, revocation, stale session, deny precedence and tests. |
| AUTH-OPEN-25 | Owner resolver, joint ownership and dispute/recovery technical paths open. | OPEN | Audit 2.5; RMD-52 | Authoritative evidence, legal hold, dispute, successor, recovery and approval lifecycle. |
| AUTH-OPEN-26 | Approval lifecycle technical parameters open. | OPEN | Audit 2.5; RMD-53/54 | Expiry, timeout, cancellation, escalation, delegation, re-auth, notifications and actor identity. |
| AUTH-OPEN-27 | No final stable permission keys/grants or server enforcement evidence. | NOT VERIFIED | Audit 2.4; REC-05/08 | Approved keys/matrix, backend/API/RLS enforcement, negative tests and independent verification. |

## 3E. Category, RMD and workflow-specific (RMD-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| RMD-OPEN-01 | RMD-56 v1.2 canonical variant unresolved. | OPEN | REC-01; Audit 2.5 | Explicit document-control decision; no inferred selection. |
| RMD-OPEN-02 | E-04 Education details remain open. | OPEN | RMD-66; Audits 2.4/2.5/2.7 | Resolve each E-04 detail with source/approval; preserve minor/student and safeguarding guardrails. |
| RMD-OPEN-03 | H-04 Hotel details remain open. | OPEN | RMD-68; Audits 2.5/2.7 | Resolve H-04 details; preserve property/room/shift and guest-data safeguards. |
| RMD-OPEN-04 | RMD-69 safe-mode feature list and lifecycle technical detail open. | OPEN | RMD-69; Erratum v1.1 | Safe-mode allowlist, transitions, SLA/expiry, reviewer evidence and appeal controls. |
| RMD-OPEN-05 | RMD-47 D16/D19 not fully FIX; D19 risk/approval matrix incomplete. | REVIEW / OPEN | Audit 2.5 §4 | No inferred FIX; explicit decision for remaining mapping and risk/approval matrix. |
| RMD-OPEN-06 | Category × role × module × capability matrix remains DRAFT/CANDIDATE. | OPEN | Audits 2.5/2.7 | Full traceability and approval per mapping; no blanket grants. |
| RMD-OPEN-07 | Parfum Manager allowlist and complete role/module matrix not separately approved. | OPEN | RMD-67; Stage 3.1 | Explicit mapping approval; preserve Retail/Refill and Formulation/Manufacturing tracks. |
| RMD-OPEN-08 | Category numeric thresholds and operational parameters remain open. | OPEN | RMD-57–RMD-69; Audit 2.5 | Approved thresholds per workflow/risk/scope/approver; no guessed values. |
| RMD-OPEN-09 | Pharmacy credential and jurisdiction evidence unresolved. | NOT READY | RMD-64; Audits 2.4/2.7 | Verified credentials, product classification, legal/regulatory gates and evidence. |
| RMD-OPEN-10 | Education minor/guardian consent, safeguarding and data controls need detail. | OPEN | RMD-66; Audit 2.7 XDOM-09 | Purpose, access, retention, consent, incident restriction and tests. |
| RMD-OPEN-11 | Hotel guest identity, safety/readiness, folio/refund and cross-property controls need detail. | OPEN | RMD-68; Audit 2.7 XDOM-09 | Field controls, lifecycle, scope, SoD, approval and tests. |
| RMD-OPEN-12 | Finance/Accounting and Employee/HR remain CONDITIONAL; exact workflow eligibility not mapped. | OPEN | CR/Q; Audit 2.7 XDOM-06 | Category/workflow need, capability, scope, data, SoD and explicit approval. |
| RMD-OPEN-13 | Inventory/Warehouse role merge conditional on preserving SoD and scope. | REVIEW | CR/Q; Audit 2.7 XDOM-07 | Workflow-by-workflow proof of separation, custody and audit. |
| RMD-OPEN-14 | Lainnya classification lifecycle, temporary expiry and reclassification thresholds open. | OPEN | RMD-69 D03/D08/D09 | Approved state transitions, SLA/expiry, triggers, reviewer and audit. |
| RMD-OPEN-15 | Category-to-M01–M21 crosswalk v1.3 remains DRAFT/CANDIDATE; G02/G04 open. | DRAFT / OPEN | Crosswalk v1.3; Audits 2.4/2.5 | Approved source per cell and explicit approval. |

## 3F. REC, provenance, coverage and security evidence (REC-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| REC-OPEN-01 | REC-02: 72-copy difference between CSV total and archive scope not individually path-verified. | UNVERIFIED | Audit 2.6 REC-02 | Exact path-level reconciliation of copies/duplicates and archive scope. |
| REC-OPEN-02 | REC-02: eight names absent from Library remain unresolved. | ABSENT / UNRESOLVED | Audit 2.6 REC-02 | Locate exact originals or approved disposition; do not infer cause. |
| REC-OPEN-03 | REC-02: size match for 115 names does not prove byte identity; no rehash. | UNVERIFIED | Audit 2.6 REC-02 | If required, verify exact bytes against preserved source/manifest in approved audit. |
| REC-OPEN-04 | REC-03: raw timestamped listings for 322/328 snapshots unavailable. | UNRECOVERED | Audit 2.6 REC-03 | Recover historical listings or retain attribution as unresolved. |
| REC-OPEN-05 | REC-03: 137+63=200 vs 137+66=203 unique-name delta discrepancy not fully attributed. | OPEN | Audit 2.6 REC-03 | Exact name-level crosswalk and snapshot provenance. |
| REC-OPEN-06 | REC-04: 66 names outside coverage is aggregate; exact complete list not validated. | UNVERIFIED | Audit 2.6 REC-04 | Exact normalized-name list and matching method. |
| REC-OPEN-07 | REC-04: 38 ERD entries reportedly reviewed based on Batch 5 need individual mapping. | OPEN | Audit 2.6 REC-04 | Map each entry to source, reviewer, coverage and evidence. |
| REC-OPEN-08 | REC-04: nine full filenames from v0.1 withdrawn as exact certainty; six group descriptions retained. | CONTROLLED OPEN | Audit 2.6 REC-04 erratum v0.2 | Keep corrected interpretation; recover exact names only with evidence. |
| REC-OPEN-09 | REC-05: stable permission keys, final matrix, field allowlists, scope resolver and thresholds remain open. | OPEN | Audit 2.6 REC-05 | Approved technical artifacts and traceability. |
| REC-OPEN-10 | REC-06: workflow-to-module/capability, keys, scope, purpose, data class, approver and SoD not final. | OPEN | Audit 2.6 REC-06 | Approved end-to-end mapping; CORE/CONDITIONAL are not grants. |
| REC-OPEN-11 | REC-07: A12.18–A12.28 and D40 provenance not fully recovered. | UNRECOVERED | Audit 2.6 REC-07 | Primary source recovery or explicit unresolved disposition. |
| REC-OPEN-12 | REC-08: standalone Batch 7/8 and Batch 9 security report/consolidated finding register not recovered. | UNRECOVERED | Audit 2.6 REC-08 | Recover exact evidence or retain gap; do not invent finding IDs. |
| REC-OPEN-13 | REC-08: historical tenant/RLS/server authorization gaps lack proof of remediation/retest. | NOT VERIFIED | Audit 2.6 REC-08 | Current authorized security audit, remediation, retest and CI proof. |
| REC-OPEN-14 | Leaked Password Protection Disabled reported in historical Security Advisor snapshot; current status unknown. | UNVERIFIED / STALE SNAPSHOT | Audit 2.6 REC-08 | Current authorized configuration verification and remediation evidence if applicable. |
| REC-OPEN-15 | No penetration test, certification, complete remediation or retest evidence established. | NOT VERIFIED | Audit 2.6 REC-08 | Valid independent evidence and explicit scope/date/results. |
| REC-OPEN-16 | REC-01 supports R56 conceptual FIX but not canonical variant selection. | OPEN | Audit 2.6 REC-01 | Separate document-control approval; retain all variants. |

## 3G. Cross-domain traceability (XDOM-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| XDOM-OPEN-01 | End-to-end Category → Workflow → Module → Capability/Action traceability incomplete. | OPEN | Audit 2.7 XDOM-04/12; REC-06 | Approved source for every link and versioned mapping. |
| XDOM-OPEN-02 | Capability/Action → Scope → Data/Purpose mapping incomplete. | OPEN | Audit 2.4 G05/G06/G08; Audit 2.7 | Field/resource classification, scope resolution, purpose and allow/deny behavior. |
| XDOM-OPEN-03 | SoD/Approval → Server Authorization → Test Evidence traceability incomplete. | OPEN | Audit 2.4 G07/G10; REC-05/06 | Action-level risk/approver, server enforcement, executed positive/negative tests. |
| XDOM-OPEN-04 | Review v1.0 pending-approval status needs time-aware reading against later addenda. | CONTROLLED | Audit 2.7 XDOM-01 | Keep historical status and latest approval status in separate fields. |
| XDOM-OPEN-05 | Manager governance allowlist mapping to stable keys/effective scope not final. | OPEN | Audit 2.7 XDOM-03; RMD/Authorization | Category/workflow mapping, scope and explicit authorization approval. |
| XDOM-OPEN-06 | Education/Hotel mapping approvals conceptual only; E-04/H-04 remain open. | OPEN | Audit 2.7 XDOM-02 | Resolve details; no permission-key or implementation inference. |
| XDOM-OPEN-07 | Pharmacy eligibility gate lacks verified current credential/compliance evidence. | NOT READY | Audit 2.7 XDOM-08 | Evidence-backed jurisdiction and professional gates. |
| XDOM-OPEN-08 | Parfum two-track workflow needs complete module/capability mapping. | OPEN | Audit 2.7 XDOM-11; RMD-67 | Preserve tracks; approve exact role/module/action/scope mapping. |
| XDOM-OPEN-09 | Lainnya safe-mode/reclassification needs technical state machine and allowlist. | OPEN | Audit 2.7 XDOM-10; RMD-69 | Approved state machine, safe-mode list, reviewer authority, expiry and tests. |
| XDOM-OPEN-10 | Cross-category matrix and REC-06 overlays remain candidate, not final. | DRAFT / CANDIDATE | Audit 2.7 XDOM-12 | Explicit approval per mapping and evidence. |

## 3H. Migration, implementation and security readiness (MIG/IMP-OPEN)

| ID | Open item | Status | Source | Closure criteria |
| --- | --- | --- | --- | --- |
| MIG-OPEN-01 | Stage 4 GitHub documentation design not started. | NOT STARTED | Master checklist | Stage 3 consolidation complete and explicit approval. |
| MIG-OPEN-02 | Stage 5 migration not authorized. | DEFERRED / NOT AUTHORIZED | Master checklist; Audit 2.1 F-2.1-05 | Explicit approval, mapping, branch/PR plan and verification gate. |
| IMP-OPEN-01 | Physical data dictionary, PK/FK/composite FK/unique/check/index not final. | OPEN | Audit 2.3; Audit 2.7 | Approved physical specification, tenant integrity and migration tests. |
| IMP-OPEN-02 | RLS, tenant isolation and server-side authorization not verified as implemented. | NOT VERIFIED | REC-08; Audit 2.7 XDOM-16 | Current source/config audit, policy tests, API auth tests and cross-tenant negative tests. |
| IMP-OPEN-03 | Database schema, API, backend enforcement and audit event schema not approved/verified. | NOT APPROVED / NOT VERIFIED | Audits 2.4/2.5; REC-05/08 | Separate explicit technical design/implementation approval and independent tests. |
| IMP-OPEN-04 | Concurrency, locking, atomicity, idempotency and retry lack complete physical tests. | OPEN | Audit 2.3 A05–A09; REC-07 | Approved invariants, implementation, race/replay/failure tests and evidence. |
| IMP-OPEN-05 | Negative tests are conceptual; executed/passed evidence absent. | NOT EXECUTED / NOT VERIFIED | Audit 2.4 G10; REC-05/08 | Test implementation, run artifacts, expected results and traceability. |
| IMP-OPEN-06 | Security remediation/retest status unknown for historical findings. | NOT VERIFIED | REC-08 | Authorized remediation, current retest and closure evidence. |
| IMP-OPEN-07 | Backup, recovery, retention, operational readiness and Production evidence not established by archive audit. | OPEN / NOT VERIFIED | Audit 2.7 XDOM-16; REC-08 | Operational plans, restore test, retention controls, monitoring and explicit acceptance. |
| IMP-OPEN-08 | No implementation/Production work authorized. | BLOCKED BY GOVERNANCE | DB_PUSH_BLOCKED: ACTIVE | Separate explicit approval after technical/security gates; no implied authorization. |

## 4. Critical dependencies and recommended order

Document control: establish per-file register rules and separate document-review status from decision status; retain all RMD-56 variants without unilateral canonical selection.

Source/provenance recovery: prioritize A12.18–A12.28, D40-203–D40-216, A12.31E, A12.36.1, A12.40, A12.41 and REC-02/03/04/08 gaps.

Domain closure: complete Blueprint validation, physical ERD specification, category/workflow details and Authorization G01–G10/O01–O12.

Traceability: controlled matrix from category to test evidence; every relationship/cell must have source and status.

Evidence: distinguish DESIGNED, SPECIFIED, IMPLEMENTED, EXECUTED, PASSED, INDEPENDENTLY VERIFIED and APPROVED.

Final consolidation: Stage 3.4 conflict/version/supersession, 3.5 traceability and 3.6 final audit before any GitHub documentation migration.

Migration/implementation remain held until explicit approval and their respective gates.

## 5. Closure criteria — mandatory

Primary source or explicit approval is identifiable and locatable.

Decision scope does not exceed the source wording; conflicts with higher/current FIX decisions are reconciled.

Technical specification exists when the item concerns physical design or authorization.

Test evidence exists when the claim concerns implementation or security behavior.

Status, date, version, reviewer, evidence locator and supersession are recorded.

Production/database/code/GitHub changes still require separate explicit authorization.

Never close an item merely because a document was read, a folder audit completed, a filename says FINAL, a recommendation exists, or implementation is assumed from a blueprint.

## 6. Stage 3.3 disposition and relationship to Stage 4.8

Stage 3.3 was completed as initial register consolidation only. Its items remain open until individual closure criteria and evidence are met.

DOC-09 v0.2 is a master working representation of Stage 3.3 v0.1; it does not close, reopen, promote or supersede any individual decision.

Stage 4.8 is currently drafting the 13 master documents. Creation of DOC-09 does not mean Stage 4.8 is complete or Stage 4.9 has started.

Stage 4.9 Final Audit of 13 Documents remains NOT STARTED and requires separate authorization.

## 7. Governance guardrails

READ-ONLY • APPEND-ONLY. No deletion, overwrite, move, rename or replacement of historical documents.

No FIX decision is changed. No OPEN/REVIEW/PARTIAL/UNVERIFIED status is promoted without primary source, evidence and required approval.

No SQL/DDL/DML, database, migration, schema, RLS, Auth, trigger, API, backend, source code, GitHub, PR, CI, Vercel, deployment or Production changes.

No Supabase Preview/Staging. DB_PUSH_BLOCKED: ACTIVE.

Stage 5 GitHub migration and Stage 6 implementation remain NOT AUTHORIZED.

## 8. Append-only evidence and locator reconciliation — ST5-11.67 to ST5-11.70

**Addendum date:** 18 November 2026.

**Purpose:** reconcile locator and provenance presentation in this working register without changing any original dependency ID, status, FIX decision, or closure criterion. This addendum is a documentation correction layer; it does not close dependencies.

### 8.1 Source hierarchy and locator classes

| Class | Meaning | Required treatment |
|---|---|---|
| L1 — Domain audit | Audit 2.1–2.7 or equivalent domain-level review | Secondary diagnostic locator; not a substitute for the primary decision/evidence source |
| L2 — Finding locator | Exact finding ID within a domain audit (for example F-2.1-01, B-2.2-02, G06, A12.40, REC-01, XDOM-02) | Retain as audit trace locator; verify the referenced finding exists in the cited audit |
| L3 — Primary locator | Exact primary artifact plus page/section/decision/evidence ID | Required wherever the primary artifact is available; do not synthesize page/paragraph locators |
| L4 — Runtime/evidence locator | Test run, artifact, environment/build, independent reviewer and result | Required for implementation/security closure; design or audit references cannot replace it |

Each dependency must distinguish **Primary source(s)** from **Secondary audit/reference(s)**. A domain audit can explain why an item is open, but the primary decision, specification, provenance record, or runtime evidence governs the relevant claim. If no primary locator has been recovered, retain `UNRECOVERED` or `UNVERIFIED` and record the audit finding as a secondary locator only.

### 8.2 Locator recovery disposition by dependency family

| Family | Available locator baseline | Recovery disposition |
|---|---|---|
| GOV-OPEN-01–08 | Audit 2.1 findings F-2.1-01 through F-2.1-08 where cited in DOC-09; source manifest/index and governance records are separate primary artifacts | L1/L2 routing available; complete per-file primary locators and status-dimension evidence remain OPEN |
| BPL-OPEN-01–11 | Audit 2.2; B-2.2 findings; V-01–V-14, R-01–R-06, P-01–P-08; sitemap erratum and relevant blueprint decisions | L1/L2 available for referenced items; exact primary page/decision locators must be verified per item; blueprint remains working draft |
| ERD-OPEN-01–27 | Audit 2.3 sections/findings A01–A12; A12 registers/addenda; REC-07 | Selected A12.37/A12.40/A12.41 and count statements have targeted locators; exhaustive primary locator recovery remains OPEN; A12.18–A12.28 and D40-203–D40-216 remain UNRECOVERED/UNVERIFIED |
| AUTH-OPEN-01–27 | Audit 2.4 G01–G10/O01–O12; Audit 2.5; O-01–O-12 approval addendum; CR/Q addenda; REC-05/06 | O/CR/Q conceptual FIX sources are locatable within their explicit scope; G01–G10 and technical details, stable keys, scope, SoD, field allowlists and enforcement remain OPEN/PARTIAL |
| RMD-OPEN-01–15 | Audit 2.5; RMD-55–69; RMD-66 Education and RMD-68 Hotel addenda; REC-01; errata | Selected RMD-55, RMD-57–65, RMD-67, RMD-69 and E/H addenda have verified sample locators; exhaustive page-level mapping remains OPEN |
| REC-OPEN-01–16 | Audit 2.6 REC-01–REC-08 and appendices/addenda | REC-01 approval provenance has a verified locator; REC-02/03/04/08 coverage and missing originals remain UNVERIFIED/UNRECOVERED as recorded |
| XDOM-OPEN-01–10 | Audit 2.7 XDOM finding IDs; Stage 3.5 cross-reference register; REC-06 | Register-level and selected finding-level links exist; end-to-end edge-by-edge primary locator and test evidence remain OPEN |
| MIG/IMP-OPEN-01–08 | Master Checklist, Audit 2.1 F-2.1-05, Audit 2.7 and DB_PUSH_BLOCKED governance | Governance status can be located; technical readiness and implementation evidence are not implied or authorized |

**Important:** This table records the recovery boundary, not a claim that every row has reached L3. The earlier Stage 4.7.8 report explicitly limits its verified primary-locator set to selected samples and states that exhaustive locator validation and master-content backlink verification remain open.

### 8.3 RMD-56 provenance correction — approval is not canonical selection

- REC-01 v0.2 verifies the approval phrase **“Tetapkan seperti rekomendasi kamu”** dated 14 November 2026 10:04:04 UTC, within its recorded scope.
- The Library inventory contains four entries representing three unique content variants: variant A and its A-copy are byte-identical; variants B and compact C are distinct. Preserve all entries.
- Approval provenance and canonical-file selection are separate questions. The approval evidence does **not** select a canonical physical file.
- `GOV-OPEN-07`, `RMD-OPEN-01`, `REC-OPEN-16`, and CVS-019 remain OPEN/UNRESOLVED pending a separate document-control decision with adequate provenance.
- Do not infer canonicality from filename, version label, timestamp, file size, upload order, creator metadata, or text embedded in a variant.

### 8.4 Current status corrections and temporal boundaries

- DOC-09 v0.2 remains a DRAFT / CONSOLIDATED WORKING REGISTER / REVIEW REQUIRED; this addendum does not make it canonical or final.
- Stage 4.7.8 remains PARTIAL — gate not passed. The selected locator sample is not exhaustive verification.
- Stage 4.8 has 13/13 documents drafted; Stage 4.9 remains PARTIAL — acceptance not met. Any older statement in the historical v0.2 body that Stage 4.9 is “NOT STARTED” is retained as historical wording and must not override the current Master Checklist.
- Stage 5 broad GitHub migration remains NOT AUTHORIZED. This PR is a separately authorized, DOC-09-only documentation publication package; it is not blanket Stage 5 authorization.
- Stage 6 implementation remains NOT AUTHORIZED. `DB_PUSH_BLOCKED: ACTIVE`; no database/SQL/DDL/DML/schema/RLS/Auth/API/backend/source-code/CI-workflow/Production/deployment work is authorized.

### 8.5 Required normalized fields for future append-only updates

For each dependency correction or closure record, retain the following fields without replacing the original row:

1. Original dependency ID and original status.
2. Primary source artifact, exact version, and L3 locator when available.
3. Secondary audit/reference and exact L1/L2 locator.
4. Decision/evidence scope and explicit authority boundary.
5. Closure criteria and dependencies.
6. Missing/unrecovered evidence and next recovery action.
7. Review date, reviewer, and approval identity where actually evidenced.
8. Separate document-review status and decision/technical-evidence status.
9. Append-only closure record with evidence references; no silent status replacement.

### 8.6 ST5-11.67–ST5-11.70 audit trail

| Checkpoint | Result | Effect on DOC-09 |
|---|---|---|
| ST5-11.67 — RMD-56 Variant Identity & Approval Provenance Reconciliation | COMPLETE — PASS WITH OPEN DEPENDENCIES | Corrected variant identity model; no canonical selection; no dependency closed |
| ST5-11.68 — DOC-09 Dependency Provenance & Claim-Level Locator Reconciliation | COMPLETE — PARTIAL PASS | Identified dependency provenance and claim-locator gaps; no dependency closed |
| ST5-11.69 — DOC-09 Full Dependency-to-Source Locator Audit | COMPLETE — PASS WITH OPEN LOCATOR DEPENDENCIES | Confirmed audit/finding locator coverage while preserving primary-locator and backlink gaps |
| ST5-11.70 — DOC-09 Locator Gap Recovery & Dependency Normalization | COMPLETE — PARTIAL; RECOVERY OPEN | Established locator classes, primary/secondary distinction, and recovery boundaries; no dependency closed |

**Net effect:** 0 dependencies closed; 0 FIX decisions changed; 0 historical source files modified; no implementation or Production work performed.

## 9. Governance guardrails

- `AUDIT-FIRST: ACTIVE` • `READ-ONLY: ACTIVE` • `APPEND-ONLY: ACTIVE`.
- `DB_PUSH_BLOCKED: ACTIVE`.
- Preserve all FIX decisions and their exact scope.
- Do not promote OPEN/REVIEW/PARTIAL/UNVERIFIED/CANDIDATE/PROPOSED without source evidence and required approval.
- Do not delete, move, rename, merge, or overwrite historical documents.
- No database, SQL/DDL/DML, migration, schema, RLS/Auth, trigger, API/backend, application source code, CI workflow, Vercel, deployment, or Production changes.
- Do not use Supabase Preview/Staging.
- Stage 5 broad GitHub migration and Stage 6 implementation remain NOT AUTHORIZED; only the separately authorized DOC-09 documentation PR is in scope.


### 8.7 Clarification of GitHub publication authorization

The general prohibition in §7 against GitHub changes records the standing governance baseline and remains controlling for all work not separately authorized. It does not prohibit this narrowly scoped DOC-09 publication: the user separately authorized creation of the DOC-09 branch and PR, and this PR is limited to the single DOC-09 Markdown working master. This exception does not authorize archive migration, other document publication, repository-wide migration, CI/workflow changes, source-code changes, or any Stage 6/Production/database work. All such work remains subject to separate explicit authorization.


## 3C. Append-only closure disposition — GOV-OPEN-01 (18 November 2026)

| ID | Prior status | Verified closure evidence | Current disposition |
|---|---|---|---|
| GOV-OPEN-01 | TODO | PR #24 merged to `main`; addendum `docs/archive/GOV-MAI-001-INVENTORY-BASELINE-CORRECTION-2026-11-18.md` verified present on `main`. It references the 231-file 16 November SHA-256 manifest while explicitly retaining the 202-file 15 November historical root-plus-subfolder snapshot. | **CLOSED** |

**Verification:** PR #24 merge commit `bd730f6d9571946fd94cf37fa972f83cda9d684a`. The addendum and Master Checklist were read back from `main` after merge. The original historical row above is retained unchanged; this dated closure disposition is append-only and controls the current status.

**Scope boundary:** This closes only GOV-OPEN-01's stated archive-index baseline pointer criterion. GOV-OPEN-02 remains OPEN; the 231-row per-file Document Status Register is not delivered by this closure. No content-review, canonicality, implementation, or security approval is implied.


## 3D. Append-only GOV-OPEN-02–08 reconciliation disposition — 18 November 2026

| ID | Prior status | Current dated disposition | Evidence / exact scope |
|---|---|---|---|
| GOV-OPEN-01 | TODO | **CLOSED** | Closure recorded in §3C; PR #24 and PR #25 post-merge verification. |
| GOV-OPEN-02 | OPEN | **PARTIAL** | 231-row `DOCUMENT-STATUS-REGISTER-231.csv` baseline created from manifest. Per-file content review, controlling-source mapping, supersession and detailed evidence locators remain unassessed where unsupported. |
| GOV-OPEN-03 | OPEN | **CLOSED — FIELD-SEPARATION CRITERION ONLY** | Separate `document_review_status` and `decision_status` columns exist; neither status is inferred from the other. |
| GOV-OPEN-04 | TODO | **CLOSED — CURRENT AUDIT-ORDER PROCEDURE ONLY** | Current Stage 2.1–2.7 and Stage 3.1–3.6 order recorded in the dated GOV reconciliation addendum and Master Project Index. Historical wording remains unchanged. |
| GOV-OPEN-05 | DEFERRED | **DEFERRED** | No blanket archive migration gate approval or completed full migration verification. |
| GOV-OPEN-06 | TODO | **CLOSED — HOTEL/OTHER CLAIM SUPERSESSION ONLY** | DOC-02 §1/§3, CAT-11/CAT-12, and Category Consolidation Erratum v1.1 direct current interpretation to RMD-68/RMD-69; historical Category Consolidation v1.0 retained. DOC02-G03 direct RMD-69 v1.1 locator remains UNRECOVERED separately. |
| GOV-OPEN-07 | OPEN / UNRESOLVED | **OPEN / UNRESOLVED** | REC-01 and XDOM-14 do not select a canonical RMD-56 v1.2 file. All variants remain preserved. |
| GOV-OPEN-08 | TODO | **CLOSED — MASTER-INDEX LINKAGE CRITERION ONLY** | Master Project Index §12 links ADD-001–ADD-013, exact filenames/archive paths, stages, and routing relationships. Claim-level backlink gaps remain separately OPEN. |

### 3D.1 Audit sequence correction (append-only)

The current audit execution order is:

`Stage 2.1 Index/Register → 2.2 Blueprint → 2.3 ERD/A12 → 2.4 Authorization → 2.5 RMD → 2.6 REC → 2.7 Cross-Domain`.

The subsequent consolidation sequence is:

`Stage 3.1 Category Decision → 3.2 Master FIX → 3.3 Master OPEN/REVIEW/TODO → 3.4 Conflict/Version/Supersession → 3.5 Traceability/Cross-Reference → 3.6 Final Consolidation Audit`.

This dated procedure controls future navigation. Earlier §8 wording is retained as historical text and is not deleted or silently rewritten.

### 3D.2 Register semantics and limitations

- `document_review_status` and `decision_status` are independent dimensions.
- The 231-row register's `NOT_ASSESSED_PER_FILE` values are explicit gaps, not inferred OPEN/FIX/CLOSED or a claim that no earlier review exists.
- Filename-derived version labels are non-canonical hints only.
- Manifest SHA-256 values are copied, not re-hashed by this package.
- GOV-OPEN-02 remains PARTIAL until per-file content/status/provenance review fills the unsupported fields with direct evidence.
- GOV-OPEN-05 and GOV-OPEN-07 remain open/deferred as stated; no closure is inferred from index presence.

**Control:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.


## 3E. Append-only DOC02-G03 direct locator recovery — 18 November 2026

The locator statement in §3D that DOC02-G03's direct RMD-69 v1.1 locator remained UNRECOVERED is superseded for the file-path and page/section-locator criterion only.

- **Recovered source:** `/Arsip Proyek POS SaaS/RMD/RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx`.
- **Manifest identity:** M231-223; zero-based index 222; 16 November 2026 manifest v1.0; size 40,204 bytes; SHA-256 `405d273b5ba18700f9996b61da5b61cce6f7ae84cb55e438f79a12246633bef9` (transcribed from the manifest; not re-hashed in this audit).
- **Verified locators:** pp. 1–3, §§1–8. Page 1 §§1–2 records the approval basis and R69-D01–D07; page 2 §§2–5 records R69-D08–D12, workflow baseline, guardrails and conceptual negative-test baseline; page 3 §§6–8 records residual OPEN items and implementation gates.
- **DOC02-G03 disposition:** RECOVERED — direct file path and page/section locators. The prior UNRECOVERED status is retained as historical audit state, not current locator status.
- **Decision boundary:** R69-D01–D12 remain FIX at conceptual level only. Safe-mode function list, lifecycle, SLA/expiry, reviewer authority, thresholds, evidence standards and technical enforcement remain OPEN. No module, role, capability, permission, schema, RLS, API or implementation approval is implied.
- **GOV-OPEN-06 remains CLOSED only for Hotel/Other documentation-claim supersession.** This locator recovery does not broaden that closure or close RMD-OPEN-04 / XDOM-OPEN-09 technical details.
- **GOV-OPEN-02 remains PARTIAL.** The separate per-file review supplement records M231-223; the original 231-row baseline is not rewritten, and all remaining unassessed rows require evidence-backed review.


## 3F. Append-only GOV-OPEN-06 locator-status clarification — 19 November 2026

This addendum reconciles the time-specific wording in the GOV-OPEN-06 row of §3D with the later direct-source recovery recorded in §3E. It does not rewrite the historical §3D table.

- The §3D phrase stating that the DOC02-G03 direct RMD-69 v1.1 locator “remains UNRECOVERED separately” is a historical status snapshot and is superseded for that locator criterion only by §3E.
- **Current DOC02-G03 locator status:** RECOVERED — direct Library path and page/section locators, as recorded in §3E. The recovered source is M231-223; verified locators are pp. 1–3, §§1–8.
- **GOV-OPEN-06 disposition remains CLOSED — HOTEL/OTHER CLAIM SUPERSESSION ONLY.** Its closure scope is unchanged; DOC02-G03 locator recovery does not broaden the GOV-OPEN-06 closure.
- **RMD-OPEN-04 and XDOM-OPEN-09 remain OPEN** for the safe-mode function list, lifecycle, SLA/expiry, reviewer authority, thresholds, evidence standards and technical details recorded by their owning sources.
- DOC02-G03 recovery does not close GOV-OPEN-02, complete the 231-row per-file content review, establish complete claim-level backlinks, approve canonicality, or authorize implementation.
- No dependency is newly closed by this clarification; no FIX decision changes.

**Current reading rule:** use §3E for the current DOC02-G03 locator status; retain the §3D row as a historical dated snapshot. Preserve all other GOV-OPEN-06 and DOC-02 dependency boundaries.

Control remains: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 implementation NOT AUTHORIZED.


## 10. Append-only DOC-09 publication-path and current-main status clarification — 19 November 2026

This clarification reconciles the header's historical proposed-path wording with the verified publication record. It does not change the DOC-09 decision/dependency register, its v0.2 revision identity, any source-native status, or its acceptance boundary.

- **Historical header wording:** The header's “Proposed GitHub path” phrase records the pre-publication proposal context. It is not the current publication state and must not be read as meaning that DOC-09 is still unpublished or awaiting its initial publication authorization.
- **Verified publication:** The DOC-09 working master was published at the exact path `docs/07-decision-registers/MASTER_OPEN_REGISTER.md` by commit `dbda10a28e8320785ff45eb4fe224ef0213fb8ef` (“docs(doc-09): publish dependency register working master”). The commit adds this file to the repository; the exact path remains present on `main`.
- **Audit-time locator:** At this clarification's audit-time read, the DOC-09 file blob on `main` was `3b2d9ff68435070e044fffebfdca7ec797e0f914`. This is a readback locator, not a permanent identifier; subsequent append-only updates will change the blob SHA.
- **Scope of publication:** Publication establishes the maintained GitHub working reference for the DOC-09 v0.2 document only. It does not make DOC-09 canonical, final, accepted, or a primary decision authority. Its status remains **DRAFT v0.2 — CONSOLIDATED WORKING REGISTER; REVIEW REQUIRED / NOT CANONICAL / NOT FINAL**.
- **Historical authorization boundary:** §8.7 records the narrow, separately authorized DOC-09-only publication exception. That exception was exercised by the publication commit above and is not a standing authorization for other document migrations, repository-wide archive migration, CI/workflow changes, application changes, Stage 6 implementation, or Production/database work.
- **Dependency/status reconciliation:** The current DOC-09 content remains aligned within the reviewed boundaries with DOC-04 ERD-OPEN-01–27, DOC-05 AUTH-OPEN-01–27, DOC-06 TRC-OPEN-01–15 and test-evidence limitations, DOC-07 REC-OPEN-12–15 security-evidence boundaries, and DOC-10's scoped CVS/supersession rules. The §3D GOV-OPEN-06 locator snapshot is read with the later §3E–§3F clarification. No source-native dependency is closed or promoted by this publication-path clarification.
- **Preservation rule:** Retain the original header and its historical wording unchanged. Use this addendum to interpret the current publication state; do not rewrite or delete the original publication proposal.

**Disposition:** DOC-09 bounded audit identified one evidence-supported document-control clarification: historical proposed-path wording versus verified current-main publication. The correction is limited to publication metadata/navigation. Dependencies newly closed: **0**. FIX decisions changed: **0**. Decision/status promotions: **0**. Canonical/final/accepted status: **NOT PROMOTED**.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed.


## 11. Append-only DOC-08/DOC-09 FIX-to-OPEN reconciliation — 19 November 2026

This addendum records the bounded CW-11 reconciliation against the reconstructed DOC-08 v0.1 working register. It does not change the source-native status of any DOC-09 item.

### 11.1 Current DOC-08 working reference

- The full DOC-08 v1.5 historical reconstructed master was not present at its proposed GitHub path during the preceding audit. A new project-authored working reconstruction is now proposed at `docs/07-decision-registers/MASTER_FIX_REGISTER.md`.
- Its stable local identifiers are DOC08-FIX-001–DOC08-FIX-017. These identifiers are new register-local IDs; they are not represented as recovered historical DOC-08 numbering.
- The reconstructed register is DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL / NOT ACCEPTED. It does not claim byte-for-byte recovery or complete historical FIX coverage.
- The focused ST5-11.40 correction remains a separate artifact and retains only its narrow CVS O/CR/Q crosswalk scope.

### 11.2 FIX-to-OPEN boundary reconciliation

| DOC-08 FIX family | DOC-09 OPEN/partial boundary retained | Reconciliation |
|---|---|---|
| DOC08-FIX-001–003: Owner/Business structure, Outlet/Warehouse multiplicity, Platform/Business separation | AUTH-OPEN and platform/business authorization details | Product/principal boundaries are fixed conceptually; exact membership, actor, permission and enforcement remain OPEN. |
| DOC08-FIX-004: tenant isolation principle | Physical data, RLS, API/backend and tenant enforcement dependencies | Tenant isolation is a design requirement, not evidence of physical constraints or deployed enforcement. |
| DOC08-FIX-005–009: inventory ledger/projection, batch/cost-layer identity, FEFO, FIFO, reservation availability effect | DOC-04 physical dictionary, inventory lifecycle and costing-specific dependencies | Logical invariants are fixed; physical field mapping, valuation implementation and test evidence remain OPEN. |
| DOC08-FIX-010–011: MWA default/FIFO alternative and MWA pool dimensions | Costing detail, physical schema and exception handling | Costing design baseline is fixed; no physical key, valuation code or exception policy is inferred. |
| DOC08-FIX-012–014: 12 Business roles, Owner/platform role separation, relationship classifications | AUTH-OPEN-01–27 and role/action/scope/SoD dependencies | Role/principal taxonomy is fixed; exact role grants, eligibility, approval and scope mappings remain OPEN/NOT APPROVED. |
| DOC08-FIX-015: M01–M21 logical domain vocabulary | Category/module entitlement and workflow/action mapping dependencies | Canonical logical IDs are fixed; unapproved category/module/workflow mappings are not implied. |
| DOC08-FIX-016–017: CAT-10 Education and CAT-11 Hotel CORE/CONDITIONAL profiles | Conditional entitlement, exact grant and scope dependencies | Category profiles are fixed at the stated logical scope; conditional activation and exact authorization remain OPEN. |

### 11.3 Reconciliation controls

- DOC-08 records positive design decisions; DOC-09 continues to record unresolved dependencies. The same subject may therefore be FIX at conceptual level and OPEN at physical, authorization or evidence level without contradiction.
- No DOC-09 item is closed, downgraded, deleted or merged into a FIX row by this addendum.
- No exact role grant, permission, physical column, SQL constraint, RLS/API behavior, threshold, retention duration, test execution or PASS is created.
- Historical source-native identifiers and statuses remain unchanged. Any later closure must identify its exact DOC-09 item and satisfy that item's own acceptance criteria.

**Disposition:** FIX-to-OPEN consistency is reconciled for the 17 newly registered conceptual/logical decisions at the stated scope. DOC-09 remains DRAFT v0.2 / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. Dependencies newly closed: **0**. Status promotions: **0**.

Controls remain READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.

## 11.4 A01/A02 direction accepted; physical and enforcement dependencies remain OPEN (21 November 2026)

The project owner has explicitly accepted A01 Path B and A02 Alternative A as conceptual/logical design directions, as recorded in DOC-04 §42.22 and DOC-08 DOC08-FIX-018/019. This resolves the direction-selection question only; it does not close the underlying dependency groups.

- **ERD-OPEN-05 / A01:** direction selected (bounded Inventory Posting Source Event Registry). Physical identity/keys, FK strategy, source adapter contract, digest canonicalization/version, retention, transaction/fan-out behavior, concurrency, reversal/replay enforcement, tenant isolation and negative-test evidence remain OPEN.
- **ERD-OPEN-06 / A02:** direction selected (`source_type` + `source_id` with strict server-owned resolver). Source-family catalogue/activation, atomic demand-line mapping, source-specific cardinality/waves, physical integrity strategy, lifecycle/remaining-demand validation, concurrency, idempotency digest/retention, tenant isolation and negative-test evidence remain OPEN.
- A01 and A02 remain separate replay domains. The accepted logical direction does not create a physical FK for a polymorphic source pair and does not approve a generic registry for reservations.
- No dependency is closed by this acceptance; no physical schema, RLS/API/backend enforcement, test PASS or implementation authorization is inferred.

**Disposition:** conceptual direction selection COMPLETE; physical/data-integrity/security/evidence dependencies remain OPEN. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.

## 11.5 A01/A02 logical execution contract refined; implementation dependencies remain OPEN (21 November 2026)

DOC-04 §42.24 now defines technology-neutral logical execution order and invariants for the accepted A01/A02 directions: server-derived Business context; independent authorization and source validation; commit-boundary validation; A01 immutable posting lifecycle and all-or-nothing movement fan-out; deterministic replay/conflict outcomes; A02 atomic demand-line resolution, aggregate remaining-demand cap and concurrency serialization; explicit reservation lifecycle events; and A02 fulfillment as a distinct A01 posting event.

This resolves ambiguity in expected logical behavior, not the physical mechanism. The following remain OPEN:

- **A01 / ERD-OPEN-05:** source-event catalogue and activation governance; source-version contract; canonical payload serialization/digest algorithm and version lifecycle; idempotency-key format/entropy and retention; physical identity/UNIQUE/FK/index strategy; transaction boundary between source domain and M06; distributed consistency mechanism if they do not share a transaction; locking/isolation/deadlock/retry; event archive/retention; RLS/server authorization; and replay, duplicate, crash-recovery, reversal and tenant-negative test evidence.
- **A02 / ERD-OPEN-06:** enabled source-family catalogue and owner approval; exact source-line mapping; per-adapter single-header/multi-wave cardinality; purpose/wave governance; source amendment/cancellation policy; source-version strategy; canonical request serialization/digest and key retention; physical polymorphic-source integrity strategy; locking/isolation and aggregate reservation cap; partial-reservation policy; RLS/server enforcement; and concurrency, replay, lifecycle and tenant-negative test evidence.
- **Shared cross-cutting:** exact null-safe Variant equality and unit/quantity normalization remain OPEN and must be consistent with DOC-04 cross-parent tuples and inventory ledger/costing invariants.

The §42.24 failure matrix is a logical acceptance oracle for later design and tests, not evidence that tests exist or pass. No physical constraint, implementation, security enforcement or test PASS is inferred. ERD-OPEN-05/06 remain OPEN; no dependency is closed by this addendum.

**Disposition:** logical behavior specification advanced; physical design, security and execution evidence remain OPEN. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.6 Shared Variant identity and unit/quantity normalization contract refined; physical/numeric gates remain OPEN (21 November 2026)

DOC-04 §42.25 now defines the shared logical semantics that were explicitly left unresolved in §11.5:

- Nullable Variant equality is exact and null-safe within the same Business + Product: NULL/NULL identifies the permitted no-Variant scope; NULL/non-NULL is not equal; non-NULL values must resolve to the same ProductVariant. NULL is never a wildcard or a substitute for unknown/unresolved data.
- The rule applies across the relevant movement, Batch, reversal, cost-layer, consumption, reservation-fulfillment, transfer/shipment, adjustment and count relationships, together with their other Business/Product/Location/parent grain requirements.
- Source/input unit and Product base unit are distinct. All inventory comparisons and aggregations use the Product base unit after an explicit, valid, product/variant-compatible conversion.
- Conversion direction is fixed conceptually as \`quantity_base = quantity_input × conversion_factor_base_per_input\`. Conversion identity/version/provenance and the normalized base quantity must remain reproducible and must not be retroactively changed by later conversion edits.
- Missing, ambiguous, incompatible, unknown or unapproved conversions fail closed. No guessed factor, implicit chain, label-based match or silent rounding is permitted.

This is a logical-contract clarification only. The following remain OPEN: physical null-safe Variant enforcement; exact FK/UNIQUE/CHECK/index strategy; numeric type, precision, scale, capacity and overflow; per-Product fractional/discrete policy; factor precision/provenance/effective-version model; conversion graph/reciprocal rules; exact rounding boundary and tolerance; physical conversion snapshot representation; and executed boundary, negative, tenant-isolation, concurrency and historical-reproducibility evidence.

NUM-01/NUM-02 principles remain conceptually retained; their physical/operational acceptance is not implied. ERD-OPEN-05/06 remain OPEN where physical identity, enforcement, security and test evidence are required. No dependency is closed, no FIX is newly promoted, and no physical Data Dictionary or canonical ERD acceptance is claimed.

**Disposition:** shared logical semantics SPECIFIED; physical and numeric decisions/evidence OPEN. READ-ONLY • APPEND-ONLY • \`DB_PUSH_BLOCKED: ACTIVE\`; Stage 6 implementation NOT AUTHORIZED.


## 11.7 Candidate entity crosswalk and unit-entry boundary gaps identified (21 November 2026)

DOC-04 §42.25.7 maps Variant identity and quantity/unit semantics across all 17 candidate inventory entities. The crosswalk distinguishes:
- Entities with no owned quantity (identity/header records) from movement, projection, reservation, transfer, batch and costing quantity records.
- Quantities already defined in Product base units from source/input quantities that require explicit conversion before posting.
- Variant identity carried directly by an entity from identity inherited through a parent, movement, source-demand resolver or cost-layer relationship.
- Monetary unit cost from physical stock quantity; its denominator follows the linked Product base-unit context, while currency/precision/rounding remain separately OPEN.

DOC-04 §42.25.8 identifies two unresolved input boundaries:
1. \`stock_count_items\` currently stores count values in base units but has no candidate raw entered quantity, input unit or conversion snapshot. The owner must decide whether physical count entry is base-unit-only or may use another unit with retained conversion provenance.
2. Upstream source/transfer workflows may accept non-base units. The source domain must preserve its own input quantity/unit/conversion context and expose a validated base-unit demand context; the inventory adapter must not guess or rebuild it.

DOC-04 §42.25.9 lists logical acceptance cases for Variant identity, conversion eligibility, historical reproducibility, base-unit comparison and the unresolved stock-count entry boundary. These are a future test oracle, not executed evidence.

**OPEN:** stock-count entry-unit policy and required provenance; upstream source-domain conversion contract/ownership; exact conversion factor/version/effective-time policy; precision/scale/capacity/overflow; rounding/tolerance; physical null-safe Variant enforcement; physical conversion snapshot representation; and executable test evidence. No dependency is closed and no physical or implementation acceptance is implied.

**Disposition:** 17-entity logical crosswalk SPECIFIED; two input-boundary gaps and all physical/numeric/evidence gates remain OPEN. READ-ONLY • APPEND-ONLY • \`DB_PUSH_BLOCKED: ACTIVE\`; Stage 6 implementation NOT AUTHORIZED.


## 11.8 Numeric ownership and quantity-grain reconciliation across the 17 candidate entities (21 November 2026)

DOC-04 §42.26 reconciles the earlier §20.4 numeric-relevance matrix against the candidate entity field specifications in §§35–38 and the shared quantity/unit crosswalk in §42.25.7.

The reconciliation distinguishes owned quantities, projection quantities, child-derived aggregates, context-only headers and monetary numeric values. In particular:

- `inventory_batches`, `inventory_adjustments`, `stock_counts`, `stock_transfers`, `stock_transfer_shipments` and `inventory_reservations` are context/identity/lifecycle headers in the current candidate design; they do not own mutable stock quantity totals.
- Their associated quantity facts belong at the appropriate child/event grain: movements, batch balances, adjustment items, count items, transfer items, shipment items and reservation items.
- `inventory_balances` and `inventory_batch_balances` are projections, not source ledgers.
- `inventory_cost_exceptions.resolved_unit_cost` is monetary, not physical stock quantity. Cost-layer and consumption entities carry both quantity and monetary values with explicit currency/denominator requirements.
- Earlier §20.4 phrases such as “batch quantity”, “adjustment totals”, “snapshot/cutoff quantities” and “transfer-level reconciliation” must be read as domain relevance or derived reconciliation, not as approval for duplicate mutable header totals.

This is a candidate ownership/grain clarification only. It does not approve physical columns/types, exact numeric precision/scale/capacity, overflow, factor precision/versioning, rounding/tolerance, currency policy, event decomposition, constraints, security, concurrency implementation or test evidence.

**OPEN / NOT CLOSED:** all NUM-01/02/03 physical and operational acceptance criteria remain open where they require exact numeric policy, conversion provenance, arithmetic boundaries, physical enforcement or executed evidence. Stock-count non-base-unit entry policy remains an explicit owner decision. No FIX is newly promoted and no physical Data Dictionary or canonical ERD acceptance is claimed.

**Disposition:** logical numeric ownership across 17 candidate entities SPECIFIED; numeric implementation and evidence gates remain OPEN. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.9 Numeric operation ownership and arithmetic-boundary map specified; numeric policy remains OPEN (21 November 2026)

DOC-04 §42.27 maps the authoritative inputs, operation owner/output, required invariants and unresolved arithmetic policy for the principal inventory/costing numeric operations: unit conversion, adjustment posting, movement ledger, Product/Batch balance projections, stock count/variance, reservation allocation/lifecycle, transfer/shipment, FIFO, MWA, transfer cost carry-forward, landed-cost allocation, cost exception resolution and currency/FX.

The map clarifies the following cross-domain boundaries:

- Source workflows own raw entered quantities, input units and their conversion provenance where non-base entry is supported. Inventory consumes only validated Product base-unit context.
- Posted movement facts remain the physical quantity ledger; Product and Batch balances are projections. Reservation allocation affects available stock, not on-hand.
- Count, transfer and reservation headers own scope/lifecycle/source context; quantity facts remain at their appropriate item/event grain.
- FIFO layer consumption, MWA pool valuation, transfer cost carry-forward, LRM landed-cost allocation, cost exception resolution and FX each have distinct arithmetic/residual boundaries. LRM is not a universal quantity or costing algorithm.
- Posted source facts and applied historical snapshots must not be silently rewritten by later reference/configuration changes.

**OPEN / NOT CLOSED:** per-Product minimum increment/fraction and maximum magnitude; precision/scale/capacity/overflow; conversion factor precision and version/effective-time provenance; allowed conversion graph; operation-specific calculation and rounding boundaries; sign/zero/NULL/cap/partial-event semantics; currency/denominator and FX policy; MWA/FIFO residual treatment; transfer transit/loss valuation; atomicity/concurrency/idempotency; physical constraints/security; and executed boundary/negative/replay/tenant-isolation evidence.

The stock-count non-base-unit entry policy remains an explicit owner decision. A01/A02 physical identity, integrity, security, concurrency and test evidence remain OPEN. This section is a logical ownership/operation map only: no numeric parameter, physical type, algorithm implementation or test PASS is approved. No dependency is closed and no FIX is promoted.

**Disposition:** numeric operation ownership and arithmetic boundaries SPECIFIED at logical level; physical/numeric acceptance remains OPEN. Candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; implementation readiness NOT READY. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.10 CW-11 Package E numeric-scope and lifecycle acceptance crosswalk (21 November 2026)

DOC-04 §42.28 records the audit crosswalk between the full NUM-01–NUM-12 conceptual baseline and the narrower inventory/costing scope of CW-11 Package E, and indexes the existing F41/A01/A02 lifecycle contracts.

The scope disposition is:

- NUM-01 through NUM-07 are in scope for inventory quantity, conversion, costing, transfer and suitable proportional allocation, with their exact physical/numeric parameters still OPEN.
- NUM-08 is covered only for inventory transfer and costing valuation effects. Transaction-wide FX, provider/fallback and journal policy remain with their owning finance/accounting work.
- NUM-09 sales/discount/tax, NUM-10 rounding-account policy and NUM-11 bank-matching tolerance are outside CW-11 Package E. Their existing conceptual principles remain in force; this package neither specifies their remaining parameters nor closes them.
- NUM-12 posted-history immutability is cross-cutting. Physical enforcement, audit controls and executed evidence remain OPEN.

NUM-03's conceptual requirement for deterministic cost residual reconciliation remains retained. Exact FIFO/MWA residual methods, precision and operation-specific rounding boundaries remain OPEN. NUM-07 LRM is limited to suitable proportional allocation and is not presumed to govern FIFO, MWA, unit conversion or FX.

The lifecycle crosswalk points to the existing logical contracts for A01 posting (§§42.4, 42.17–42.24), stock-count attempts (§36.4–36.5 and §42.5), shipment/transit/disposition (§§37.4–37.5, 42.6 and 42.8), A02 reservation lifecycle (§§38.3–38.4, 42.7 and 42.18–42.24), and FIFO/MWA transfer costing (§§38.5–38.6, 42.8 and 42.27). These are candidate/logical designs, not physical acceptance.

**OPEN / NOT CLOSED:** stock-count input-unit owner decision; count-attempt state and cutoff enforcement; A01 physical identity, digest/retention, atomic fan-out and concurrency; A02 source-family activation, source-line cardinality/waves, lifecycle and concurrency; shipment transit-location and disposition enforcement; transfer fee/FX/loss valuation; FIFO/MWA precision and residual policy; tenant/security enforcement; and executed positive, negative, boundary, replay and reconciliation evidence.

This crosswalk adds no FIX, does not close any dependency, and does not authorize physical schema or implementation. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.11 Stock Count input-unit Owner decision recorded — policy question resolved; technical gates remain OPEN (21 November 2026)

DOC-08 DOC08-FIX-020 records the Owner's explicit selection of Option A: Stock Count and recount accept **Product base unit only**. Non-base-unit Stock Count input and alternate-unit conversion during count entry are not supported. The existing logical `counted_quantity_base` representation remains; no raw input-unit/conversion-snapshot attributes are added for Stock Count.

This resolves the specific OPEN question carried in the earlier input-boundary crosswalks (§§11.7, 11.9 and 11.10) and DOC-04 §§42.25.8, 42.28.3. Those earlier statements are historical snapshots and must now be read with this Owner decision. The upstream source-domain conversion/provenance requirement is unaffected: any upstream workflow that accepts non-base units remains responsible for its own validated conversion context.

**Resolved at conceptual decision level:** Stock Count input-unit choice (base-unit-only).

**OPEN / NOT CLOSED:** physical/UI/API rejection of non-base-unit input; count-attempt states/transitions and immutable attempt enforcement; snapshot/cutoff/watermark ordering; accepted-attempt posting; all-or-nothing versus item-level posting; numeric precision/scale/capacity/overflow and rounding; idempotency, locking/concurrency, tenant/security enforcement; and executed positive, negative, boundary, replay and reconciliation evidence.

No physical Data Dictionary field, constraint, implementation or test is accepted. This addendum closes no physical or operational dependency beyond recording that the Owner-choice question itself is resolved. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.12 Stock Count lifecycle candidate model and remaining Owner gates (21 November 2026)

DOC-04 §42.30 consolidates a candidate parent Stock Count lifecycle, attempt-disposition vocabulary, snapshot/cutoff acceptance sequence and post-cutoff movement reconciliation boundary.

The candidate parent states are DRAFT → COUNTING → SUBMITTED → REVIEW_REQUIRED / READY_TO_POST → POSTED, with controlled return to COUNTING for additional attempts and cancellation only before posting. POSTED and CANCELLED are terminal. Candidate attempt dispositions are RECORDED → REVIEW_REQUIRED / ACCEPTED / REJECTED; REVIEW_REQUIRED → ACCEPTED / REJECTED; ACCEPTED may become SUPERSEDED only before a posting commits. Measurement facts remain immutable; status/disposition changes require auditable decisions. These are proposals, not accepted status enums or physical transitions.

The cutoff sequence is clarified: draft may have no watermark; before counting begins, freeze scope, snapshot and inclusive Location posting-sequence cutoff; retain the cutoff; reconcile all applicable movements after that cutoff before variance posting. A movement locator is supplementary and must agree with the frozen Location/sequence.

**Resolved at documentation-proposal level:** the existing attempt/snapshot rules are now assembled into one candidate transition and acceptance model. This does not close the Owner approval or physical-enforcement gates.

**OWNER DECISION REQUIRED:** choose the variance posting atomicity boundary:
- Session all-or-nothing: all required count-line variances commit together, or none do.
- Item-level partial posting: each eligible count line posts independently and the parent remains open until all lines are disposed.

**OPEN / NOT CLOSED:** Owner approval of the proposed state vocabulary/transitions and posting boundary; physical/UI/API enforcement of base-unit-only input; snapshot serialization and watermark sequence allocation; post-cutoff movement replay/reconciliation; accepted-attempt uniqueness and transition audit; idempotency/concurrency; approval/SoD, tenant and grain enforcement; numeric precision/rounding; and executed evidence.

No dependency is closed by this candidate proposal. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.13 Stock Count variance posting boundary — Owner decision resolved; technical acceptance gates remain OPEN (21 November 2026)

The Owner explicitly selected **Option A — Count-session all-or-nothing**, recorded as DOC-08 DOC08-FIX-021 and detailed in DOC-04 §42.31.

**Resolved at conceptual decision level:** all required count-line variance movements for one Stock Count session commit together, or none commit. A failure in any required line or prerequisite prevents the entire session posting. Item-level partial posting is prohibited. The count session is the posting/retry/idempotency boundary; POSTED is reached only after the complete atomic commit.

This decision supersedes the undecided A-versus-B choice in §11.12 and DOC-04 §42.30.5. Those entries remain historical records of the proposal and decision gate before Owner selection; read them together with this addendum. The candidate parent/attempt state vocabulary and transitions remain proposals and are not accepted by this decision.

**OPEN / NOT CLOSED:** physical transaction/atomicity implementation; session-level idempotency and duplicate prevention; locking/isolation/concurrency; failure rollback and retry behavior; post-cutoff replay/reconciliation integration; approval/SoD and tenant/grain enforcement; numeric precision/rounding; executed positive, negative, boundary, failure-injection, replay and reconciliation evidence; and separate Owner acceptance of candidate parent/attempt states/transitions.

No physical Data Dictionary field, constraint, API/backend implementation, test result or deployment is accepted. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.14 Stock Count lifecycle transition/cancellation/supersession audit — refined candidate; Owner acceptance remains OPEN (21 November 2026)

DOC-04 §42.32 audits the lifecycle proposal in §42.30 against the Owner-approved all-or-nothing posting FIX in §42.31. The refinement makes the parent-state guards, cancellation boundary, attempt supersession and POSTED acceptance conditions explicit.

Key proposed clarifications:
- Cancellation is allowed only before the session posting transaction commits, preserves snapshot/attempt history and emits no variance movement. Cancellation and posting must serialize so only one can win.
- No externally visible intermediate POSTING state is proposed. The posting transaction is atomic; failure leaves no partial posting and preserves the pre-commit business state for controlled retry/review.
- READY_TO_POST requires all required count lines to be explicitly accounted for, valid accepted attempts, complete post-cutoff reconciliation, no unresolved exception and required authorization.
- A recount uses a new immutable attempt. Replacing an accepted attempt requires a controlled return to COUNTING and coordinated, auditable supersession/acceptance. No accepted attempt can be superseded after session posting commits.
- A zero-variance line may emit no movement but must still be explicitly accounted for; NULL/not-counted is never zero.

**Resolved at proposal level:** the candidate lifecycle's cancellation, supersession and all-or-nothing POSTED guards are now stated in one place and reconciled to DOC08-FIX-021. This is not an accepted Owner status catalogue.

**OWNER ACCEPTANCE REQUIRED:** parent/attempt status vocabulary and transitions; cancellation eligibility/guard; supersession sequence; and explicit zero-variance line treatment. The refined candidate does not close these Owner gates.

**OPEN / NOT CLOSED:** physical transaction atomicity; cancel/post serialization; session-level idempotency; locking/isolation/concurrency; authorization/SoD; post-cutoff replay/reconciliation; numeric precision/rounding; tenant/grain enforcement; and executed positive, negative, boundary, failure-injection, replay and reconciliation evidence. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.15 Stock Count lifecycle Owner decision recorded — conceptual policy resolved; physical gates remain OPEN (21 November 2026)

The Owner explicitly selected Option A and approved all four lifecycle items in the reviewed candidate. DOC-08 DOC08-FIX-022 and DOC-04 §42.33 record the accepted conceptual policy.

**Resolved at conceptual decision level:**
- Parent lifecycle vocabulary and permitted transitions in DOC-04 §42.30.2 are accepted.
- Attempt disposition vocabulary, transitions and invariants in §§42.30.3 and 42.32.2 are accepted.
- Cancellation is allowed only before session posting commits, preserves history, emits no variance movement and must serialize against posting. POSTED/CANCELLED are terminal.
- Accepted-attempt replacement requires controlled return to COUNTING and coordinated, auditable supersession/acceptance; recount creates a new immutable attempt; no supersession after posting commits.
- Zero-variance lines may emit no movement but must be explicitly accounted for. NULL/not-counted is not zero.
- POSTED requires complete all-or-nothing session commit under DOC08-FIX-021; failed posting leaves no partial variance movement and no externally visible intermediate POSTING business state is introduced.

This resolves the lifecycle Owner-approval questions carried in §§11.12 and 11.14 and DOC-04 §§42.30.6 and 42.32.4. Earlier statements that lifecycle approval remains required are historical snapshots and must be read together with this addendum. The decision does not promote physical implementation or evidence gates.

**OPEN / NOT CLOSED:** physical status/transition enforcement; snapshot/cutoff serialization and watermark allocation; post-cutoff movement replay/reconciliation; atomic transaction feasibility; cancel/post serialization implementation; session idempotency; locking/concurrency; approval/SoD and tenant/grain enforcement; numeric precision/rounding; and executed positive, negative, boundary, failure-injection, replay and reconciliation evidence.

No physical Data Dictionary field, enum, constraint, API/backend implementation, test result or deployment is accepted. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.16 Stock Count snapshot/cutoff and post-cutoff reconciliation audit — PASS WITH OPEN DEPENDENCIES (21 November 2026)

DOC-04 §42.34 rechecks the snapshot/cutoff contract against DOC08-FIX-020–022 and clarifies the logical requirements without choosing physical implementation.

**Reconciled conceptual requirements:**
- Count-line snapshot quantity must prove exact Business + Product + nullable Variant + Location + applicable Batch grain and the same frozen inclusive cutoff. A lagging projection is not accepted as snapshot proof unless its applied movement watermark covers that cutoff.
- Cutoff C is inclusive; replay is strictly (C,R] for a separately proven same-Location reconciliation boundary R.
- Replay includes every applicable posted movement from every source workflow, while excluding unrelated grains. Paired transfer movements are evaluated independently at their respective Location sequences.
- Expected quantity at R is the snapshot quantity at C plus the signed net applicable movement delta in (C,R]; accepted count variance uses this expected quantity, subject to OPEN numeric rules.
- Reconciliation must be complete through the session posting decision. A scan that can miss concurrent movements is insufficient.
- Replay is deterministic and read-only with respect to original movement facts; replay itself creates no inventory movements.
- Missing/ambiguous sequence, incomplete source fan-out, stale projection watermark, wrong-Location locator, incompatible grain or other unresolved reconciliation exception blocks READY_TO_POST.
- Batch-scoped counts reconcile at Batch grain and remain consistent with Product/Variant/Location totals; Batch quantities cannot be double-counted or silently absorbed into non-Batch lines.
- DOC08-FIX-021/022 session all-or-nothing and lifecycle acceptance remain the posting boundary.

**OPEN / NOT CLOSED:** exact snapshot acquisition/provenance; projection applied-watermark representation; initial watermark representation; Location sequence allocation/gap recovery; selection/capture of reconciliation boundary R; serialization against concurrent postings; A01 source-event completeness/fan-out; replay algorithm/recovery; null-safe Variant/Batch enforcement; numeric policy; and executed concurrency/failure/replay/reconciliation evidence.

This audit adds no Owner FIX and approves no physical field, schema, constraint, lock/isolation mechanism, API/backend, implementation or test result. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.17 Stock Count variance arithmetic and numeric precision audit — PASS WITH OPEN OWNER DECISION (21 November 2026)

DOC-04 §42.35 audits Stock Count quantity/variance arithmetic against DOC08-FIX-020–022 and snapshot reconciliation §42.34.

**Reconciled requirements:** all operands must use the same Product base unit and exact Business/Product/Variant/Location/Batch grain; only the accepted immutable attempt is used; NULL means not counted while zero is valid; snapshot cutoff C is inclusive and replay is strictly (C,R]; zero-variance lines must be explicitly accounted for; numeric or reconciliation failure on any required line blocks the all-or-nothing session posting.

**Candidate variance expression:** variance_quantity_base = accepted_counted_quantity_base - expected_quantity_at_R, where expected_quantity_at_R is snapshot quantity at C plus the signed net applicable movement delta in (C,R]. This proposes positive = surplus and negative = shortage. **Owner confirmation is required** before the sign convention becomes FIX or controls movement mapping.

**Numeric guardrails:** no silent rounding/truncation/clamping/coercion; no universal decimal scale is assumed; intermediate/final overflow must fail closed; no tolerance is inferred; LRM and monetary rounding do not apply as generic Stock Count variance rules. Product fractional/increment rules, precision/scale/capacity, rounding mode/boundary and storage-versus-derivation remain OPEN.

**OPEN / NOT CLOSED:** Owner confirmation of variance sign; Product discrete/fractional policy; minimum increment/maximum magnitude; numeric representation and intermediate overflow; rounding and tolerance; movement sign mapping; physical enforcement and executed positive/negative/zero/fractional/boundary/overflow/replay/failure evidence.

Design acceptance cases in DOC-04 §42.35.4 are NOT EXECUTED. No physical type, schema, implementation or test result is accepted. Candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.18 Stock Count variance sign convention Owner decision recorded — conceptual gate resolved; numeric and physical gates remain OPEN (21 November 2026)

The Owner explicitly approved recommended Option A. DOC-08 DOC08-FIX-023 and DOC-04 §42.36 record the accepted conceptual convention:

- `variance_quantity_base = accepted_counted_quantity_base - expected_quantity_at_R`.
- Positive = surplus; negative = shortage; zero = exact match.
- Expected quantity remains the cutoff-C snapshot plus signed applicable posted movement delta in (C,R].

**Resolved:** Owner approval of the subtraction order and semantic sign convention previously requested in §11.17.

**OPEN / NOT CLOSED:** Product discrete/fractional eligibility; minimum increment/maximum magnitude; numeric representation, precision/scale/capacity and intermediate overflow; rounding boundary/mode; tolerance; variance storage-versus-derivation; mapping variance sign to inventory movement delta; physical enforcement; and executed positive/negative/zero/fractional/boundary/overflow/replay/failure evidence.

The sign convention does not itself define inventory movement direction. That mapping requires separate reconciliation with the established ledger delta convention. No physical type, schema, implementation or test result is accepted. Design acceptance cases in DOC-04 §42.35.4 remain NOT EXECUTED. Candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.19 Stock Count variance-to-ledger movement sign mapping audit — Owner decision required (21 November 2026)

DOC-04 §42.37 reviewed the candidate immutable movement-ledger contract against DOC08-FIX-023. The working Data Dictionary establishes a signed base-quantity delta on `inventory_movements`, but it does not define whether positive delta increases or decreases on-hand. Movement-kind vocabulary, sign validation and Stock Count mapping remain OPEN.

**Candidate for Owner review — NOT FIX:** positive Stock Count variance (surplus) maps to a positive movement delta that increases on-hand; negative variance (shortage) maps to a negative movement delta that decreases on-hand; zero variance emits no movement but is explicitly accounted for. Candidate movement delta equals the accepted variance in Product base units at the exact count-line grain.

This candidate must be reconciled to one canonical ledger convention across all movement source workflows, not approved for Stock Count in isolation. It preserves immutable movement history, FIX-021 all-or-nothing session posting, FIX-022 zero-line accounting/lifecycle, and FIX-023 variance formula. It does not authorize movement-kind vocabulary, reversal implementation, schema or code.

**OWNER DECISION REQUIRED:** approve or revise the positive-increases / negative-decreases convention and the candidate equality of movement delta to accepted variance.

**OPEN / NOT CLOSED:** global ledger sign semantics; movement-kind and event-specific validation; source-event/movement lineage; reversal/compensation sign behavior; zero movement handling; numeric precision/rounding/tolerance; physical enforcement; and executed positive/negative/zero/retry/reversal/reconciliation evidence. Candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.20 Stock Count variance-to-ledger movement sign mapping Owner decision recorded — conceptual gate resolved; ledger-wide and physical gates remain OPEN (21 November 2026)

The Owner explicitly approved Option A. DOC-08 DOC08-FIX-024 and DOC-04 §42.38 record the accepted conceptual mapping:

- Positive variance/surplus → positive `quantity_delta_base` → increase on-hand.
- Negative variance/shortage → negative `quantity_delta_base` → decrease on-hand.
- Zero variance → no quantity movement, but explicitly accounted for in the session; NULL/not-counted is not zero.
- Stock Count `movement_delta_base = variance_quantity_base`, in Product base units and at the exact accepted count-line grain.
- The positive-increases / negative-decreases meaning is the canonical conceptual interpretation of signed on-hand deltas across all inventory movement source workflows, not a Stock Count-only exception.

This decision consumes the accepted variance formula in DOC08-FIX-023 and preserves DOC08-FIX-021 all-or-nothing session posting and DOC08-FIX-022 lifecycle/zero-line accounting. Movement history remains immutable. Reversal/compensation must retain lineage and follow separately governed correction semantics; the full reversal/compensation contract is not decided here.

**Resolved:** Owner approval of movement direction and the Stock Count movement-delta-equals-variance relationship.

**OPEN / NOT CLOSED:** movement-kind vocabulary; event-specific sign validation for all source workflows; A01 source-event identity and movement lineage; reversal/compensation semantics and linkage; zero-line accounting enforcement; numeric precision/scale/capacity/overflow, rounding and tolerance; physical enforcement; concurrency, serialization and idempotency; and executed positive/negative/zero/retry/reversal/reconciliation evidence. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.21 CW-11 Package E — cross-source inventory movement sign consistency audit — PASS WITH OPEN DEPENDENCIES (21 November 2026)

DOC-04 §42.39 audits the inventoried inventory-posting source families against DOC08-FIX-024. The conceptual sign baseline is consistent: positive `quantity_delta_base` increases on-hand at the affected Location; negative decreases it. This audit does not claim all source families are implemented or enabled.

**Cross-source direction crosswalk:** purchase/physical receipt positive; physical sales fulfillment/issue negative; adjustment positive or negative according to the approved signed correction; Stock Count surplus positive and shortage negative (FIX-024); transfer dispatch source negative/transit positive; transfer receipt transit negative/destination positive; physical loss/destruction negative once; physically held damage is a Location/availability disposition rather than a net stock loss; accepted physical returns positive at receiving Location; production input consumption negative and accepted output positive; reservation create/release/expiry/cancel no on-hand movement; reservation fulfillment posts its distinct physical issue once; costing layer creation/consumption and MWA recalculation do not create an additional quantity movement; reversal/compensation uses a new linked opposite-sign movement, subject to unreversed-quantity cap and exact grain.

**Resolved at conceptual audit level:** the positive-increases / negative-decreases meaning from DOC08-FIX-024 can be applied uniformly across the source families without changing its Stock Count-specific equality rule.

**PASS WITH OPEN DEPENDENCIES:** existing transfer dispatch/receipt/loss/damage/return event proposals are directionally consistent with the signed ledger convention; reservation and costing documentation distinguish non-physical lifecycle/cost effects from on-hand changes.

**OPEN / NOT CLOSED:**
- Final A01 enabled source catalogue and source-domain owner/adapter activation.
- Exact source record + event + source-line identity, event type, lifecycle eligibility and movement fan-out for every enabled family.
- Event-specific sign validation and movement-kind vocabulary, particularly adjustment reason/kind, receipt/return condition, production input/output/scrap, reservation fulfillment and correction events.
- Reversal/compensation same-grain inverse arithmetic, partial cap aggregation, correction-of-correction authorization, lineage and concurrency.
- Zero-effect A01 outcome reason and distinction from failed/incomplete fan-out.
- Physical registry/movement constraints, sign enforcement, idempotency, transaction/locking/isolation, tenant authorization, projection reconciliation and executed positive/negative/zero/paired/reversal/retry/concurrency evidence.

The matrix in DOC-04 §42.39 is an expected conceptual direction crosswalk, not an enabled source allowlist or physical acceptance. No Owner FIX is added; DOC08-FIX-024 remains unchanged. Candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.22 CW-11 Package E — Inventory Movement Reversal & Compensation Contract Audit — CANDIDATE / OWNER DECISION REQUIRED (21 November 2026)

DOC-04 §42.40 separates movement-ledger reversal/compensation from A12.17 cost-layer consumption compensation. A12.17's 1:N partial-compensation cardinality and aggregate cap are relevant precedent, but do not independently approve a movement-ledger correction algorithm.

**Candidate policy for Owner review — NOT FIX:**
- Original posted movement remains immutable; every correction is a new linked movement.
- A direct reversal uses the opposite signed quantity at the exact same Business + Product + nullable Variant + Location + applicable Batch grain and Product base unit.
- Full reversal corrects the eligible remainder; partial reversals may be appended repeatedly, with a cumulative cap across the root original's complete correction lineage.
- Reversal of a reversal is another immutable opposite-sign correction targeting the immediate correction while retaining root-original lineage. It restores only the amount actually corrected by the target and remains included in root-lineage cap arithmetic.
- Each correction identifies its original source event, exact movement target and, for nested correction, immediate target. A source event with multiple movement legs must not be corrected wholesale by an ambiguous reference.
- Same-intent retries must be idempotent; changed payload under the same identity conflicts. Concurrent requests must not jointly exceed the eligible cap.
- Source-domain correction and generic ledger reversal must not both post the same physical correction. Legitimate zero-effect outcomes are explicitly accounted for; invalid/missing/ambiguous quantities fail closed.
- Correction approval is separately auditable; authorization is not inherited automatically from the original posting.

**Audit disposition:** CANDIDATE — OWNER DECISION REQUIRED. This is a logical proposal only. No new DOC08 FIX is added; DOC08-FIX-024 remains unchanged. The candidate is not an enabled source contract, physical schema or implementation instruction.

**OPEN / NOT CLOSED:** exact correction terminology/event kinds; direct-target versus root-lineage cap arithmetic; nested/branched correction-of-correction calculation; source-event and source-line identity; domain-level correction handoff and double-post prevention; idempotency identity/payload; concurrency/locking/isolation/recovery; authorization/SoD; numeric limits; paired/multi-leg correction; projection reconciliation; and executed full/partial/reversal-of-reversal/retry/concurrency/failure evidence.

Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.

## 11.23 CW-11 Package E — Inventory Movement reversal/compensation conceptual decision CLOSED; technical gates retained OPEN (21 November 2026)

DOC-08 DOC08-FIX-025 and DOC-04 §42.41 record the Owner-approved conceptual contract for immutable movement correction.

**CLOSED — conceptual decision:** full reversal; repeated partial reversal; recursive signed effective-quantity arithmetic; cumulative cap at each immediate target and root lineage; branching and reversal-of-reversal; acyclic immediate-target/root-original lineage; same Business/Product/Variant/Location/Batch grain and Product base unit; one authoritative correction intent; idempotent retry identity/payload; prevention of source-domain plus generic-ledger double posting; separately auditable correction authorization; explicit no-effect versus invalid/failure outcomes.

**Authoritative arithmetic:** for each movement node N, E(N) = quantity_delta_base(N) + Σ E(C) across its direct correction children. A new correction child must have a nonzero opposite-signed quantity no greater than ABS(E(N)) immediately before posting. The updated E(N) may reach zero but cannot cross zero or invert sign. Recalculate from the full descendant lineage before every correction. This signed effective cap, not gross historical correction magnitude, governs reinstatement and subsequent reversal.

**Supersession:** this closure supersedes the CANDIDATE / OWNER DECISION REQUIRED status of DOC-04 §42.40 and DOC-09 §11.22 only for the conceptual correction contract. Historical candidate wording remains preserved as audit history.

**Technical gates remain OPEN / NOT VERIFIED:** physical A01 source/event/line/movement identity and registry; physical lineage representation/FK/uniqueness/constraints; numeric precision/scale/capacity/overflow; idempotency persistence and payload canonicalization; transaction atomicity, locking/isolation, concurrent cap enforcement and retry recovery; authorization/SoD/tenant enforcement; source-domain adapters and event-kind activation; paired/multi-leg commit and projection reconciliation; and executed positive/negative/full/partial/branching/reversal-of-reversal/retry/concurrency/failure evidence.

No physical schema, implementation, test PASS or deployment is implied. Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E overall remains IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.


## 11.24 CW-11 Package E — A01 candidate source-event catalogue and lifecycle matrix recorded; activation remains OPEN (21 November 2026)

DOC-04 §42.42 consolidates the candidate A01 source families, source record/line grain, descriptive posting boundary, lifecycle eligibility, quantity authority, expected movement fan-out and current disposition.

**Bounded result:** the candidate inventory covers purchase/receipt; sales/fulfillment; adjustment; Stock Count; transfer dispatch and receipt; transfer loss/destruction; held damage/quality disposition; transfer returns before and after receipt; customer/supplier physical returns; production input/output; write-off/loss; reservation fulfillment handoff; and approved movement correction.

The matrix also explicitly excludes non-posting events: purchase commitment, sales payment/order/reservation without issue, transfer approval without dispatch, return authorization/refund without physical receipt, production planning, reservation lifecycle events, costing-only updates, and rejected/invalid/no-effect correction requests.

**Shared A01 admission boundary:** finite enabled adapter; authoritative source and atomic line resolution; same-Business ownership; event-specific lifecycle eligibility at commit; authoritative quantity and Product base-unit normalization; stable event/replay identity; complete deterministic movement fan-out; independent DOC-05 authorization; explicit permitted zero-effect outcome; and immutable source/movement lineage.

**Important status boundary:** descriptive event labels are not approved enum literals. No source family is enabled by this catalogue. No physical source-table name, source-line field, registry field, FK, key, adapter identifier, digest algorithm, retention duration, quantity precision or runtime state enum is selected. The matrix does not silently infer source object names or exact lifecycle state names where those remain unapproved.

**Disposition:** PASS WITH OPEN OWNER / SOURCE-CONTRACT DECISIONS for catalogue structure only. DOC08-FIX-018 remains the accepted A01 conceptual direction. No new FIX is added. ERD-OPEN-05 remains OPEN for exact source object/line identity, event-specific eligibility, cardinality, source version, quantity authority, source catalogue activation/ownership, physical identity/integrity, replay/fan-out persistence, transaction/recovery, tenant security and executed evidence. A02 remains separate.

Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.25 CW-11 Package E — proposed A01 source-family disposition recorded; Owner acceptance pending (22 November 2026)

DOC-04 §42.43 records a technical recommendation for the 15 candidate A01 source families in §42.42. Proposed disposition: retain all 15 candidates in the catalogue; classify 13 as INCLUDE and two as INCLUDE WITH CONDITIONS (damage/quality hold only with actual relocation to an approved hold Location; reservation fulfillment only as a distinct A02-to-A01 handoff for actual physical issue).

The proposed exclusions remain purchase commitments; sales order/payment/reservation without physical issue; transfer approval without dispatch; return authorization/refund without receipt; production planning; A02 reservation lifecycle events; costing-only events; and rejected/invalid/ambiguous/no-effect correction requests.

This is a **technical recommendation only**. It is not an Owner decision, DOC08 FIX, final enabled allowlist or source-family activation. No family is enabled. Cross-family duplicate-post prevention, atomic multi-leg fan-out, stable replay identity, tenant/source ownership, A02/A01 separation and DOC08-FIX-025 correction-path exclusivity remain required controls.

Owner acceptance or revision remains pending. Exact source object/line identity, lifecycle eligibility, event cardinality, source version, quantity authority, adapter ownership, authorization, idempotency, physical registry/integrity, transaction/recovery and executed evidence remain OPEN under ERD-OPEN-05.

Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.


## 11.26 Correction to A01 candidate source-family count (22 November 2026)

Count reconciliation against DOC-04 §42.42.3 confirms **16** candidate source-family rows, not 15: **14 INCLUDE** and **2 INCLUDE WITH CONDITIONS** under the proposed technical disposition in DOC-04 §§42.43–42.44. The two conditional rows remain damage/quality hold and reservation fulfillment handoff. This is a count correction only; no classification, Owner decision, FIX, activation or technical gate changes. Owner acceptance remains pending; ERD-OPEN-05 remains OPEN.


## 11.27 A01 source-family conceptual disposition resolved by DOC08-FIX-026 (22 November 2026)

The Owner-approved conceptual source-family scope is now recorded as DOC08-FIX-026 in DOC-08 §15. It accepts the 16 catalogue rows as 14 INCLUDE and two INCLUDE WITH CONDITIONS (damage/quality hold only with physical relocation into an approved hold Location; reservation fulfillment only as a distinct A02-to-A01 handoff for actual physical issue). Explicit non-posting exclusions and cross-family safeguards are part of the FIX.

This resolves the prior Owner-decision dependency for conceptual inclusion/exclusion in DOC-04 §§42.43–42.44 and DOC-09 §§11.24–11.26. Those earlier proposed/pending statements are historical and are superseded only within this conceptual decision scope.

**Not resolved:** source object/line identity, lifecycle states, event cardinality/version, quantity authority, adapter ownership and activation, authorization/SoD, idempotency, physical registry/FK/integrity, atomicity/fan-out/recovery, concurrency, tenant enforcement, projection reconciliation and executed evidence remain OPEN under ERD-OPEN-05. No adapter is enabled; no physical implementation or Stage 6 readiness is approved.

Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.



## 11.28 CW-11 Package E — A01 Purchase / Goods Receipt adapter contract drafted; technical dependencies remain OPEN (22 November 2026)

DOC-04 §42.46 records the logical Purchase / Goods Receipt adapter contract under DOC08-FIX-026.

**Resolved at the logical contract level:** only physically received and accepted quantity is eligible; purchase commitment/order and non-physical purchase lifecycle events do not post on-hand; each partial receipt occurrence is independently traceable and append-only; accepted quantity uses validated Product base-unit context; the receipt movement is positive at the receiving stock grain under DOC08-FIX-024; duplicate physical posting is prohibited; posted corrections follow DOC08-FIX-025; A01 remains bounded, separate from A02, tenant-scoped and independently authorized.

**Contract safeguards:** each receipt occurrence and source line must be unambiguous; accepted quantity must not be inferred from ordered/invoiced/expected quantity; source-owned unit conversion must be reproducible; multi-line fan-out must be deterministic and complete; retries must resolve the same event outcome; changed payload under the same identity conflicts; one physical receipt effect cannot also post through an adjustment or other overlapping path; costing-only processing creates no second on-hand movement.

**PASS WITH OPEN TECHNICAL CONTRACT DEPENDENCIES — logical adapter contract drafted.** This does not activate the adapter or approve physical schema/implementation.

**OPEN under ERD-OPEN-05:** exact purchase/receipt/source-line/receipt-occurrence objects and identifiers; exact eligible lifecycle states and acceptance/rejection/inspection path; source-version and amendment semantics; multi-line event cardinality and movement fan-out; authoritative accepted-quantity field and conversion provenance; precision/rounding/tolerance; over-receipt policy; receiving Location and Batch resolution; DOC-05 authorization/SoD mapping; stable event identity/idempotency/retry/recovery; physical registry/keys/constraints; atomicity/concurrency; tenant enforcement; projection reconciliation; and executed evidence.

No exact physical table, column, enum, FK, key, digest, retention, numeric type, transaction isolation or adapter identifier is selected. No DOC08 FIX is added or revised. DOC08-FIX-026 remains the conceptual source-family scope; DOC08-FIX-018/019/024/025 remain unchanged.

Candidate Data Dictionary acceptance remains 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY. No adapter is enabled.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.



## 11.29 CW-11 Package E — Purchase / Goods Receipt cross-document audit PASS; adapter-specific decisions remain OPEN (22 November 2026)

DOC-04 §42.47 audits the Purchase / Goods Receipt logical contract in §42.46 against DOC-02 `CATEGORY_WORKFLOW_MASTER.md` §5–§6, DOC-05 `AUTHORIZATION_MASTER.md` §23.4–§23.6, DOC-04 §§17.2–17.4 and DOC08-FIX-018/019/024/025/026.

**PASS — conceptual consistency:** procurement request/PO, approval, physical receiving, discrepancy review and supplier payment are distinct controls; only physically received and accepted quantity is eligible for A01; accepted receipt movement is positive under DOC08-FIX-024; partial receipt occurrences remain traceable; inventory ledger is distinct from projection/costing; purchase approval is not automatically inventory-posting authorization.

**Important scope guard:** DOC-04 §§17.2–17.4's one-movement-per-receipt-detail conceptual precedent is scoped to transfer shipment receipt/return (A12.10/A12.11). It is not generalized to Purchase / Goods Receipt. Purchase receipt-detail-to-movement cardinality and Batch/Location fan-out remain OPEN. DOC-05 §23.4's M06 starter keys do not supply a purchase-receipt-specific permission tuple; no M08 permission literal or grant is inferred.

**Resolved conceptual boundaries retained:** order/commitment/payment without accepted physical receipt creates no A01 movement; only accepted quantity posts positive; receipt occurrence history is append-only; discrepancy review and inventory posting remain distinct controls; ledger, projections and costing remain separate.

**OPEN under ERD-OPEN-05:** source domain/object/line/receipt-detail ownership and identity; accepted/rejected/discrepant quantity representation; inspection/discrepancy lifecycle and partial-acceptance split; purchase-specific event cardinality and movement fan-out; source version/amendment; over-receipt policy; receiving Location/Batch resolution; purchase-specific permission/actor/scope/SoD/approver/audit; idempotency/recovery; physical constraints/atomicity/concurrency; tenant enforcement; projection reconciliation; executed evidence.

**PASS — cross-document conceptual consistency; no contradiction found.** No new DOC08 FIX is added; DOC08-FIX-018/019/024/025/026 remain unchanged. No permission is granted and no adapter is enabled. Candidate Data Dictionary 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.



## 11.30 CW-11 Package E — Purchase / Goods Receipt source ownership, identity and quantity model proposal (22 November 2026)

DOC-04 §42.48 records a focused source-domain audit and Owner decision proposal. The current project documents establish the procurement → receiving → inventory sequence and separate supplier payment, but do not establish canonical purchase/receipt source objects, source ownership per fact or physical identifiers.

**Recommended conceptual responsibility split — PROPOSED / REVIEW:** Purchasing owns PO and ordered-line commercial facts; Receiving/Warehouse Operations owns physical receipt occurrence, receipt-line observation and accepted/rejected/held quantity disposition; Inventory (M06) owns authorization-checked A01 admission, posting identity, immutable movement ledger and projection reconciliation; Finance/AP owns invoice/payable/payment/settlement. No domain ownership is silently assigned as FIX.

**Recommended logical event grain — PROPOSED / REVIEW:** Business + physical receipt occurrence + receipt-line + accepted-for-inventory quantity slice. Purchase-line identity remains commercial lineage; receipt occurrence distinguishes partial arrivals; receipt-line links the received fact to the ordered line; accepted-slice identity distinguishes partial acceptance; A01 event identity resolves idempotent posting; movement identity represents each stock-grain effect. Movement fan-out may be 1:N where valid Batch/Location stock-grain splits require it. No physical key or event implementation is selected.

**Recommended quantity disposition — PROPOSED / REVIEW:** distinguish physically arrived, accepted-for-inventory, rejected, and unresolved/held/discrepant quantities. Only accepted-for-inventory quantity posts positive under DOC08-FIX-024. Preserve entered quantity/unit and reproducible base-unit conversion provenance; prevent duplicate acceptance; retain later disposition changes as auditable transitions. Arithmetic/tolerance, shrinkage/shortage, over-receipt, rounding and exceptional disposition remain OPEN.

**Owner decision required:** explicitly approve or revise the responsibility split, logical event grain and quantity distinction before these become conceptual FIX. Until then, they are proposals only. No DOC08 FIX, permission grant, adapter activation, physical schema or implementation is created/approved. DOC08-FIX-018/019/024/025/026 remain unchanged.

ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.


## 11.31 CW-11 Package E — Owner decision closed for conceptual source ownership, identity and quantity disposition (22 November 2026)

**CLOSED AS CONCEPTUAL FIX — DOC08-FIX-027.** The Owner explicitly approved all three recommendations in DOC-04 §42.48:
- responsibility split across Purchasing/Procurement, Receiving/Warehouse Operations, Inventory (M06), and Finance/AP;
- canonical logical posting grain: Business + physical Receipt Occurrence + Receipt Line + Accepted-for-Inventory Quantity Slice;
- distinct physically arrived, accepted-for-inventory, rejected and unresolved/held/discrepant quantity dispositions, with only accepted quantity eligible for positive A01 movement.

The earlier proposal status in §11.30 is superseded for these three conceptual decisions only. No physical source object/key, permission, adapter activation, schema or implementation is approved.

**Remain OPEN:** physical source objects/identifiers; lifecycle vocabulary/transitions and partial inspection/acceptance representation; arithmetic/caps, tolerance, shortage/shrinkage, over-receipt, precision/rounding and conversion snapshot; event-to-movement cardinality/orchestration; Batch/Location resolution; DOC-05 purchase-specific actor/scope/approval/SoD/audit tuple; physical idempotency/recovery, atomicity/concurrency, tenant enforcement, projection reconciliation and executed evidence.

DOC08-FIX-018/019/024/025/026 unchanged. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.


## 11.32 CW-11 Package E — Owner closed conceptual lifecycle and quantity-control rules via DOC08-FIX-028 (22 November 2026)

**CLOSED AS CONCEPTUAL FIX — DOC08-FIX-028.** The Owner explicitly approved:
- **LIF-01:** physical arrival, inspection/review, quantity disposition and A01 posting are distinct facts/steps; arrival is not acceptance and acceptance does not bypass authorization/posting.
- **LIF-02:** partial receipts and partial acceptance are permitted; each accepted slice is independently attributable and may post without waiting for the entire PO, subject to validation, authorization and duplicate prevention.
- **QTY-01:** arrived quantity must reconcile to accepted + rejected + unresolved/held/discrepant quantity on a compatible measurement basis; mismatch blocks A01.
- **QTY-02:** only validated accepted-for-inventory quantity may post positive; rejected and unresolved portions are excluded; accepted cannot exceed physically arrived quantity.
- **QTY-03:** one accepted slice has one authoritative posting outcome; replay cannot duplicate it; history is immutable and post-post correction follows DOC08-FIX-025.

These are conceptual invariants, not physical lifecycle states, numeric implementation or permission grants.

**Remain OPEN:** literal lifecycle states/transitions and physical representation; numeric precision/scale/rounding/conversion snapshot; over-receipt against PO, shortage/shrinkage, tolerance and approval policy; event-to-movement cardinality and Batch/Location allocation; DOC-05 authorization tuple; physical idempotency/recovery, atomicity/concurrency and constraints; tenant enforcement, projection reconciliation and executed evidence.

DOC08-FIX-018/019/024/025/026/027 unchanged. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.
