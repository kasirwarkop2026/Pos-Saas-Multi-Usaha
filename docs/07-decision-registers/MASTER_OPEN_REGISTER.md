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
