# DOC-08 — Master FIX Decision Register

**Project:** POS SaaS Multi-Usaha v3.0  
**Document ID:** DOC-08  
**Revision:** v0.1 — reconstructed project-authored working register  
**Date:** 19 November 2026  
**Status:** DRAFT / WORKING REGISTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL / NOT ACCEPTED  
**Control:** READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`  
**Maintained path:** `docs/07-decision-registers/MASTER_FIX_REGISTER.md`

> This file is a newly published working reconstruction to repair the missing full DOC-08 master path. It does not claim to reproduce the unpublished DOC-08 v1.5 byte-for-byte or recover its historical numbering. Stable IDs below are new DOC08-FIX identifiers for the project-authored decisions explicitly consolidated here. The focused ST5-11.40 correction remains a separate artifact and is not replaced.

## 1. Purpose and authority

DOC-08 records decisions accepted at the stated conceptual/product-design level and their boundaries. It is the positive-decision counterpart to DOC-09 (unresolved work) and DOC-10 (conflict, version lineage and supersession).

- FIX means accepted project design within the exact scope written in the row; it does not mean physical schema, implementation, test execution, security enforcement, deployment or Production acceptance.
- A FIX decision may be used as the current design baseline unless a later explicit, scoped supersession is recorded.
- DOC-09 remains authoritative for unresolved dependencies and their statuses. A FIX entry does not close an OPEN item unless DOC-09 records that exact closure and its acceptance basis.
- DOC-10 remains authoritative for CVS identities, conflict states, version lineage and supersession. DOC-08 does not resolve a conflict by date, filename or preference.
- DOC-01–DOC-07 remain the domain-specific design/control documents. This register indexes decisions and their scope; it does not silently override them.
- Where a historical source-native decision ID is not available in the current published working set, this register does not invent one. The DOC08-FIX IDs are register-local stable identifiers.

## 2. Status and interpretation vocabulary

| Term | Meaning |
|---|---|
| FIX — CONCEPTUAL | Accepted product/business/architecture design at conceptual level only |
| FIX — LOGICAL | Accepted logical taxonomy, ownership or workflow boundary at the stated scope |
| OPEN / PARTIAL | Unresolved details remain; retain DOC-09 status |
| CANDIDATE | Proposed vocabulary or alternative, not approved |
| SUPERSEDED | Replaced only within the explicit scope stated by a later decision |
| NOT VERIFIED | No physical/runtime/test evidence is established |

No status in this document constitutes technical implementation or authorization.

## 3. Consolidated FIX decision register

| ID | Decision area | Accepted project decision | Scope and non-implication | Primary design anchors | Status |
|---|---|---|---|---|---|
| DOC08-FIX-001 | Owner and Business cardinality | One Owner account is associated with one Business. | Product/account relationship only; does not specify physical key structure or account provisioning implementation. | DOC-01 product blueprint; DOC-04 data architecture | FIX — CONCEPTUAL |
| DOC08-FIX-002 | Business operating structure | One Business may operate multiple Outlets and Warehouses. | Outlet and Warehouse are distinct operating locations; no automatic cross-location access is implied. | DOC-01; DOC-02; DOC-03 | FIX — CONCEPTUAL |
| DOC08-FIX-003 | Platform versus Business principal | Platform Super Admin is separate from Business roles and Business authorization. | Platform scope S0 does not inherit Business scopes or grants; no platform privilege is granted by this statement. | DOC-01; DOC-05; DOC-07 | FIX — CONCEPTUAL |
| DOC08-FIX-004 | Tenant isolation principle | Business-owned data is isolated by `business_id`; composite foreign-key integrity, RLS and server-side authorization are required design controls. | Requirement/design only; physical constraints, RLS policies and server enforcement are not verified or authorized here. | DOC-03; DOC-04; DOC-05; DOC-07 | FIX — ARCHITECTURE REQUIREMENT |
| DOC08-FIX-005 | Inventory movement ledger | `inventory_movements` is the immutable movement ledger; `inventory_balances` is a derived projection. | Ledger history is not destructively rewritten; balance projection is not the authoritative movement history. Physical schema remains unverified. | DOC-03; DOC-04 | FIX — LOGICAL |
| DOC08-FIX-006 | Batch versus cost-layer identity | Inventory batch identity is distinct from cost-layer identity. | Batch tracks physical/traceability identity; cost layer tracks valuation/cost-consumption identity. They must not be collapsed into one concept. | DOC-03; DOC-04 | FIX — LOGICAL |
| DOC08-FIX-007 | Batch selection | FEFO is the default batch-selection principle where expiry applies. | Selection policy does not replace eligibility, quality, hold, location or product-specific controls; exact exceptions remain subject to domain rules. | DOC-03; DOC-04 | FIX — CONCEPTUAL |
| DOC08-FIX-008 | Cost-layer consumption | FIFO is the cost-layer consumption principle when FIFO costing is selected. | Cost-layer FIFO is distinct from FEFO physical batch selection; no valuation implementation is established. | DOC-03; DOC-04 | FIX — CONCEPTUAL |
| DOC08-FIX-009 | Reservation effect | Reservation reduces available stock, not physical on-hand quantity. | Reservation is a commitment/availability effect; physical on-hand changes only through the appropriate movement/fulfillment lifecycle. | DOC-03; DOC-04 | FIX — LOGICAL |
| DOC08-FIX-010 | Costing methods | Moving Weighted Average (MWA) is the default costing method; FIFO is an alternative method. | Method selection and valuation execution remain product/business configuration and implementation work; no code or ledger implementation is verified. | DOC-01; DOC-03; DOC-04 | FIX — CONCEPTUAL |
| DOC08-FIX-011 | MWA pool identity | The MWA pool is keyed conceptually by Business + Product/Variant + Inventory Location. | Pool dimensions are not a physical unique key or SQL constraint; any additional dimensions require explicit design review. | DOC-03; DOC-04 | FIX — LOGICAL |
| DOC08-FIX-012 | Standard Business roles | The standard Business role set contains 12 roles: Manager; Supervisor / Shift Lead; Cashier; Inventory Operator; Production / Service Operator; Receptionist / Front Desk; Finance / Accounting; Employee / HR Operator; Procurement Operator; Warehouse Operator; Delivery / Fulfillment Operator; Maintenance Operator. | This is the standard role catalogue, not a default grant matrix. Category-specific eligibility and exact action grants remain separate. | DOC-01; DOC-05 | FIX — CONCEPTUAL |
| DOC08-FIX-013 | Owner and platform roles | Owner is outside the 12 standard Business roles. SUPER_ADMIN and PLATFORM_ADMIN are platform roles, not Business roles. | Principal classification does not itself grant access or authority. | DOC-01; DOC-05 | FIX — CONCEPTUAL |
| DOC08-FIX-014 | Relationship classifications | Mitra/Pekerja, Mitra Fisik and Pelanggan are principal/relationship classifications, not additional standard Business roles. | A relationship classification is not a role, capability, permission or automatic membership. | DOC-01; DOC-05 | FIX — CONCEPTUAL |
| DOC08-FIX-015 | Canonical logical domains | The logical domain catalogue is M01–M21: M01 Business Profile & Organization; M02 Catalog, Product & Pricing; M03 POS, Sales & Order; M04 Customer / Guest / Student / CRM; M05 Booking, Reservation & Appointment; M06 Inventory & Material Ledger; M07 Warehouse & Custody; M08 Procurement & Supplier; M09 Service & Work Order Operations; M10 Production, Recipe & Formulation; M11 Asset, Fleet & Capacity; M12 Hospitality Operations; M13 Education Operations; M14 Pharmacy & Regulated Product Operations; M15 Laundry & Item Processing; M16 Finance, Billing & Payment; M17 Workforce & Scheduling; M18 Quality, Inspection & Compliance; M19 Delivery & Fulfillment; M20 Maintenance & Safety; M21 Integration & Channel. | Canonical logical vocabulary only; it does not approve every category/module entitlement or complete every workflow-to-module mapping. | DOC-01; DOC-02; DOC-03; DOC-05; DOC-06 | FIX — LOGICAL |
| DOC08-FIX-016 | CAT-10 Education profile | CAT-10 Education CORE modules: M04, M05, M13, M17. CONDITIONAL modules: M02, M06, M08, M16, M18, M21. | Applies to the stated Education category profile; conditional entitlement must be explicitly enabled and authorized. | DOC-01; DOC-02; DOC-05 | FIX — LOGICAL |
| DOC08-FIX-017 | CAT-11 Hotel profile | CAT-11 Hotel CORE modules: M02, M05, M12, M16, M18, M20. CONDITIONAL modules: M03 (onsite POS), M04, M06, M07, M08, M17, M19, M21. | Applies to the stated Hotel category profile; conditional entitlement must be explicitly enabled and authorized. | DOC-01; DOC-02; DOC-05 | FIX — LOGICAL |

## 4. Decision boundaries and retained OPEN items

The following are deliberately not promoted to FIX by this register:

1. Exact physical tables, columns, types, nullability, defaults, indexes, constraints and migration definitions.
2. Exact role-to-permission grants, action allowlists, module entitlement records and scope resolver behavior.
3. RLS, Auth, API/backend authorization, session/cache invalidation and runtime enforcement.
4. Complete category × module and workflow × module mapping outside the explicitly stated CAT-10/CAT-11 profile decisions.
5. Exact financial/quantity thresholds, risk-tier assignment, retention durations and legal/jurisdictional rules.
6. Full physical field-level D0–D4 classification and purpose mapping.
7. Security test implementation, execution, independent review, retained artifacts and PASS evidence.
8. Final canonical acceptance of DOC-08, DOC-09 or DOC-10.
9. `inventory_cost_layer_movements` remains a candidate, not an approved eighteenth conceptual inventory entity.
10. Any source-native dependency in DOC-09 remains OPEN/PARTIAL unless its owning register records a specific accepted closure.

## 5. Cross-register authority and reconciliation rules

| Subject | Controlling register/document | DOC-08 treatment |
|---|---|---|
| Accepted conceptual/logical decisions | DOC-08, with domain detail in DOC-01–DOC-07 | Record exact decision scope and anchors |
| Unresolved decision, dependency, TODO or evidence gap | DOC-09 | Preserve status; do not close by implication |
| Conflict identity, version lineage, supersession and CVS disposition | DOC-10 | Follow explicit scoped supersession only |
| Product/domain/architecture/authorization detail | DOC-01–DOC-07 | Do not override domain owner text without an append-only reconciliation |
| Current task order | CORRECTIVE-DOCUMENTATION-WORKLIST.md | Worklist controls navigation, not decision substance |

### 5.1 CVS O/CR/Q crosswalk correction

The separately published DOC-08 ST5-11.40 correction remains the controlling prospective cross-reference for its narrow CVS scope:

- O-01–O-12: CVS-016 as general context only.
- CR-01–CR-10: CVS-015 as direct.
- Q-01–Q-06: CVS-014 as direct.
- CVS-017 and CVS-039: limited context only.

This crosswalk correction does not create a new FIX decision, complete the authorization matrix, close AUTH-OPEN dependencies or establish technical enforcement. DOC-10 retains CVS identities and conflict dispositions.

### 5.2 Supersession rules

- A later decision supersedes an earlier decision only when it identifies the affected decision/field, replacement, effective scope and authority.
- A correction of a cross-reference does not supersede the underlying product/authorization decision.
- A current-main publication/readback updates the locator, not the substantive decision status.
- Historical snapshots remain preserved and must be read with their later append-only clarifications.
- No implicit supersession is inferred from commit chronology, file names or dates.

## 6. Acceptance and maintenance

DOC-08 v0.1 is a reconstructed working register and remains **DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL / NOT ACCEPTED**.

Acceptance requires:
- row-by-row review against the full available project FIX decision set and the domain-owner documents;
- confirmation that no historical decision ID or material FIX decision has been omitted or conflated;
- explicit scope, owner, provenance/anchor and supersession review for each entry;
- exact reconciliation with DOC-09 OPEN items and DOC-10 CVS/conflict/supersession entries;
- a reviewed full diff, applicable documentation CI and explicit merge approval;
- post-merge readback from `main`.

This reconstruction does not claim that all historical DOC-08 v1.5 decisions have been recovered. Any additional approved FIX decision must be appended with a stable identifier and explicit anchor; do not silently rewrite this baseline.

## 7. Governance

- READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.
- No SQL/DDL/DML, schema, migration, RLS/Auth, trigger, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes.
- Stage 5 blanket migration remains NOT AUTHORIZED. This single bounded documentation correction does not authorize repository-wide or archive migration.
- Stage 6 implementation remains NOT AUTHORIZED.
- A conceptual FIX is not implementation evidence, test evidence, security acceptance or Production readiness.

## 8. Accepted logical design directions — A01 and A02 (21 November 2026)

The project owner explicitly approved the following bounded conceptual decisions after review of DOC-04 §§42.17–42.22:

- **DOC08-FIX-018 — A01 inventory posting source-event identity:** adopt Path B, a bounded Inventory Posting Source Event Registry, as the logical direction for source-event identity, idempotent posting and movement fan-out. The registry is limited to inventory posting and is not a universal event bus or an addition to the historical 17 inventory entities.
- **DOC08-FIX-019 — A02 reservation source identity:** retain `source_type` + `source_id` on the reservation header and resolve it through a strict server-owned, finite source-domain adapter allowlist. Unknown or invalid source types fail closed. Source ownership, lifecycle, atomic demand-line identity, remaining quantity, concurrency and idempotent replay must be validated.
- A01 and A02 remain separate domains and replay boundaries. Reservation fulfillment creates a distinct A01 posting event; A02 request replay is not interchangeable with A01 posting replay.

**Decision scope limitation:** these are accepted conceptual/logical design directions only. They do not approve physical schema, columns, indexes, constraints, FK strategy, enabled source families, digest/retention choices, RLS/API enforcement, runtime behavior, test evidence or implementation. Corresponding DOC-09 physical/security/evidence dependencies remain OPEN. This entry does not promote any physical or implementation gate and does not authorize Stage 6.


## 9. Stock Count input-unit policy — Owner FIX (21 November 2026)

**DOC08-FIX-020 — Stock Count accepts Product base unit only.**

The Owner explicitly selected Option A:

- Stock Count and recount input accept only the relevant Product's configured base unit.
- Non-base-unit input is not supported for Stock Count; no alternate-unit conversion is performed as part of count entry.
- The counted quantity remains expressed in Product base units, consistent with the existing candidate `counted_quantity_base` representation.
- This policy is limited to Stock Count measurement entry. It does not prohibit upstream source workflows from accepting non-base units under their own explicit conversion and provenance contracts.
- This is a conceptual Owner decision. It does not approve a physical field, UI/API validation implementation, database constraint, authorization grant, runtime behavior, test result or deployment.

**Status:** FIX — OWNER-APPROVED / CONCEPTUAL. Physical enforcement and evidence remain OPEN. This decision resolves only the Stock Count input-unit policy question; it does not close count-attempt lifecycle, cutoff/watermark, accepted-attempt posting, partial-posting, idempotency, concurrency, security or other CW-11 gates.

Anchors: DOC-04 §§36.4–36.5, 42.5, 42.25.8–42.25.9 and 42.28.3; DOC-09 §§11.10–11.11.


## 10. Stock Count variance posting atomicity — Owner FIX (21 November 2026)

**DOC08-FIX-021 — Stock Count variance posting is count-session all-or-nothing.**

The Owner explicitly selected Option A — All-or-nothing:

- Every required count-line variance in a Stock Count session must commit together as one session outcome, or none may commit.
- If any required count line or posting prerequisite fails, the entire session posting is rejected/rolled back; partial item-level posting is prohibited.
- The count session is the posting and retry boundary. Session-level idempotency must prevent duplicate variance movements on retry.
- A session becomes POSTED only after the complete atomic posting succeeds. Post-commit corrections use a separately governed compensating-event path; posted history is not overwritten.

**Status:** FIX — OWNER-APPROVED / CONCEPTUAL. This resolves only the Stock Count variance posting atomicity choice and supersedes the open A-vs-B choice in DOC-04 §42.30.5 and DOC-09 §11.12. It does not accept the candidate parent/attempt state vocabulary or transitions.

Physical transaction design, API/backend enforcement, locking/isolation, authorization/SoD, session idempotency, failure handling, executed tests and evidence remain OPEN. No schema, implementation, test result or deployment is approved. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.

Anchors: DOC-04 §§42.30.5–42.31; DOC-09 §§11.12–11.13; Worklist §15.93.
