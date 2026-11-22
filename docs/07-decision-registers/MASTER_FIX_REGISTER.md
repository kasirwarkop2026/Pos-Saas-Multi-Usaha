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


## 11. Stock Count lifecycle policy — Owner FIX (21 November 2026)

**DOC08-FIX-022 — Stock Count parent/attempt lifecycle and transition guards are Owner-approved conceptually.**

The Owner explicitly selected Option A and approved all four lifecycle items presented for review:

- **Lifecycle vocabulary and transitions:** accept the candidate parent states/transitions in DOC-04 §42.30.2 and attempt dispositions/transitions/invariants in §§42.30.3 and 42.32.2 as the conceptual policy.
- **Cancellation:** allow cancellation only before the session posting transaction commits; preserve snapshot/attempt history; emit no variance movement; serialize cancellation against posting so only one can win. POSTED and CANCELLED are terminal.
- **Accepted-attempt supersession:** require an explicit controlled return to COUNTING and a coordinated, auditable supersession of the old accepted attempt with acceptance of its replacement. Recount creates a new immutable attempt. No supersession after session posting commits.
- **Zero variance:** a zero-variance line may emit no movement but must be explicitly accounted for in the session result. NULL/not-counted is not zero; zero is a valid measurement.
- **POSTED condition:** retain DOC08-FIX-021 all-or-nothing session posting. POSTED is reached only after every required line is accounted for and all required variance movements/posting identity commit together. Failure leaves no partial posting; no externally visible intermediate POSTING business state is introduced.

**Status:** FIX — OWNER-APPROVED / CONCEPTUAL. This decision accepts the logical lifecycle and guards, not physical status enums/fields/constraints, database transaction design, locking/isolation, API/backend behavior, authorization implementation, numeric parameters, test evidence or deployment.

Physical snapshot/cutoff enforcement, post-cutoff replay, atomic transaction feasibility, cancel/post serialization, session idempotency, concurrency, tenant/security/SoD, numeric precision/rounding and executed evidence remain OPEN. DB_PUSH_BLOCKED: ACTIVE; Stage 6 implementation NOT AUTHORIZED.

Anchors: DOC-04 §42.33; DOC-09 §11.15; Worklist §15.95.


## 12. Stock Count variance sign convention — Owner FIX (21 November 2026)

**DOC08-FIX-023 — Stock Count variance is counted quantity minus expected quantity.**

The Owner explicitly approved the recommended Option A:

- `variance_quantity_base = accepted_counted_quantity_base - expected_quantity_at_R`.
- A positive variance means surplus: the accepted physical count is greater than expected stock at reconciliation boundary R.
- A negative variance means shortage: the accepted physical count is less than expected stock at R.
- Zero variance means the accepted count exactly matches expected stock at R.
- `expected_quantity_at_R` remains the snapshot quantity at inclusive cutoff C plus the signed net applicable posted movement delta in the strict range (C,R], as documented in DOC-04 §42.34.
- The convention applies only to Stock Count quantity variance in Product base units and the exact count-line grain. It does not by itself define the sign of inventory movement deltas or the mapping from variance to movement direction; that mapping must be reconciled separately against the established inventory-ledger delta convention.

**Status:** FIX — OWNER-APPROVED / CONCEPTUAL. This resolves the Owner decision gate for the variance subtraction order and its semantic sign interpretation previously recorded in DOC-04 §42.35 and DOC-09 §11.17.

**Explicitly NOT decided:** Product discrete/fractional eligibility, minimum increment, maximum magnitude, numeric type/precision/scale/capacity, intermediate overflow strategy, rounding boundary/mode, tolerance, variance storage-versus-derivation, movement sign mapping, physical enforcement, executed tests or evidence. No physical schema, implementation, test result or deployment is approved. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation NOT AUTHORIZED.

Anchors: DOC-04 §§42.34–42.36; DOC-09 §§11.17–11.18; Worklist §§15.97–15.98.


## 13. Stock Count variance-to-ledger movement sign mapping — Owner FIX (21 November 2026)

**DOC08-FIX-024 — Positive inventory movement delta increases on-hand; negative inventory movement delta decreases on-hand. Stock Count variance maps directly to the signed movement delta.**

The Owner explicitly approved Option A for the Stock Count variance-to-ledger mapping:

- Positive Stock Count variance (surplus) maps to a positive `inventory_movements.quantity_delta_base`, increasing on-hand quantity at the affected inventory grain.
- Negative Stock Count variance (shortage) maps to a negative `inventory_movements.quantity_delta_base`, decreasing on-hand quantity at the affected inventory grain.
- Zero variance emits no quantity movement; the zero-variance count line remains explicitly accounted for in the all-or-nothing Stock Count session result. NULL/not-counted is not zero and cannot be treated as a zero-variance line.
- For Stock Count, `movement_delta_base = variance_quantity_base`, using Product base units and the same exact Business + Product + nullable Variant + Location + applicable Batch grain as the accepted count line.
- The positive-increases / negative-decreases meaning is the canonical conceptual direction of signed on-hand quantity deltas and must be consistent across all inventory movement source workflows. It is not a Stock Count-only exception.
- Movement history remains immutable. Reversal/compensation must preserve source-event lineage and follow the ledger's separately governed correction semantics; this FIX does not define the complete reversal/compensation implementation or event vocabulary.
- Stock Count variance is calculated from the single accepted immutable attempt and expected quantity at R under DOC08-FIX-023. Movement generation must use that accepted result and must not recompute variance from a different attempt or cutoff.

**Status:** FIX — OWNER-APPROVED / CONCEPTUAL.

**Decision boundary / OPEN:** movement-kind vocabulary; event-specific sign validation for every source workflow; source-event identity and movement lineage; exact reversal/compensation semantics and linkage; zero-line accounting enforcement; numeric representation, precision/scale/capacity, overflow, rounding and tolerance; physical schema/enforcement; concurrency, idempotency and transaction implementation; and executed evidence remain OPEN. This FIX does not approve any physical field, constraint, API/backend behavior, implementation, test result or deployment.

Anchors: DOC-04 §42.38; DOC-09 §11.20; Worklist §15.100. Related decisions: DOC08-FIX-021 (session all-or-nothing), DOC08-FIX-022 (lifecycle and zero-line accounting), DOC08-FIX-023 (variance formula).

## 14. Inventory Movement reversal and compensation — Owner FIX (21 November 2026)

**DOC08-FIX-025 — Posted inventory movements are corrected only through immutable, lineage-linked, opposite-effect correction movements governed by a bounded correction tree.**

The Owner approved the recommended conceptual contract. This FIX applies to correction of posted on-hand quantity movements and is separate from A12.17 cost-layer consumption compensation.

### 14.1 Immutable correction and identity

- The original posted movement and every posted correction movement are immutable. No correction edits, deletes, reuses or silently replaces a posted movement.
- Each correction is a new movement that identifies exactly one immediate target movement and exactly one root original movement. A root original is not itself a correction.
- Every correction remains within the exact Business + Product + nullable Variant + Location + applicable Batch grain and the same normalized Product base unit as its target.
- A correction of a correction targets the immediate correction movement while retaining the root-original identity. A correction may not cross roots or stock grains.
- The correction lineage is a rooted, acyclic, branching tree: each correction has one immediate parent target; a target may have multiple direct correction children. Self-reference, cycles, missing/unposted targets and ambiguous root ancestry are invalid.

### 14.2 Canonical signed arithmetic and cumulative cap

For any movement node **N**, define its current effective signed quantity **E(N)** recursively as:

**E(N) = quantity_delta_base(N) + SUM(E(C))** for every direct correction child **C** of N.

The sum is signed, uses one normalized Product base unit and the exact same stock grain. A correction child must have an effect opposite to the current sign of E(N), and its absolute quantity must be greater than zero and no greater than ABS(E(N)) immediately before posting.

After the correction is appended, the target's effective quantity becomes the prior E(N) plus the new correction quantity. It may reach zero but may not cross zero or change sign. The rule is re-evaluated against the complete existing descendant tree before every subsequent correction.

This recursive target-cap rule is the authoritative cumulative cap. It handles partial corrections, multiple branches, and corrections of prior corrections without treating the gross sum of all historical correction magnitudes as the cap. Gross historical magnitudes may exceed the root quantity when a prior correction is later reinstated; the signed effective quantity at every target and at the root must never be over-corrected.

### 14.3 Full, partial and correction-of-correction outcomes

- **Full reversal:** append one correction equal to the entire currently effective remainder of the target, with the opposite sign. The target's E(N) becomes zero.
- **Partial reversal:** append an explicitly requested positive magnitude smaller than or equal to the target's currently effective remainder, with the opposite sign. The target retains its original sign or reaches zero.
- **Reversal of reversal:** append a new correction against the immediate correction movement. It uses the opposite sign to that target's current effective quantity and cannot exceed that target's effective remainder. It reinstates only the quantity actually corrected by that target; it does not erase the prior correction.
- **Further correction after reinstatement:** recalculate E(N) from the full lineage and cap the next correction against that recalculated remainder. No cached or request-local remainder can override the lineage result.
- **Zero remainder:** when E(N) is zero, that target has no remaining correctable quantity. A new movement correction against it is rejected; no zero-quantity movement is created.

### 14.4 Source lineage, idempotency and duplicate prevention

- Each correction records logical references to the immediate target movement, root original movement, originating source event/source line and a stable correction-intent identity. These are conceptual references; this FIX does not prescribe physical column names or schema.
- A source event that produced multiple movement legs is corrected per exact movement leg and stock grain. Any required multi-leg correction must explicitly enumerate all affected roots; no other leg is implicitly reversed.
- One correction intent has one authoritative posting path. If the source domain already emits the ledger correction, a separate generic/manual reversal for the same intent is prohibited.
- A retry using the same stable correction-intent identity and the same canonical payload resolves to the same committed outcome and must not append a duplicate movement. Reuse of that identity with a different target, quantity, unit, grain or reason is a conflict, not a new correction.
- A correction is separately authorized and auditable; approval of the original movement is not inherited automatically. Actor, reason, source reference, target/root lineage and approval context must be retained conceptually. Exact role grants and separation-of-duties matrix remain technical/security OPEN.

### 14.5 Invalid, no-op and multi-leg outcomes

- Missing/NULL quantity, zero quantity, unit mismatch, grain mismatch, exhausted target, invalid lineage, unposted target, cross-root reference, changed idempotency payload or cap violation does not create a movement.
- A legitimate business no-op is recorded as an explicit no-effect outcome with a reason; it is not represented by a zero movement and must not be confused with failure or incomplete source fan-out.
- Each leg of a paired/multi-leg source event is an independently identified movement root. A correction must enumerate the required legs and preserve their respective Location/grain effects. Whether a multi-leg correction is committed atomically is a physical transaction gate, not a reason to omit lineage.
- Movement correction does not automatically create a second cost-layer consumption compensation. A12.17 retains its separate costing identity and quantity-cap contract; costing records must reconcile to the originating physical movement correction without duplicating on-hand effect.

### 14.6 Status and decision boundary

**Status: FIX — OWNER-APPROVED / CONCEPTUAL.** DOC08-FIX-025 closes the conceptual movement-ledger correction policy, including recursive arithmetic, full/partial correction, branching and reversal-of-reversal. It supersedes the candidate/Owner-decision-required disposition in DOC-04 §42.40 and DOC-09 §11.22 only for this conceptual contract.

It does not approve physical source/event registries, column names, FK/UNIQUE/CHECK constraints, numeric precision/scale/capacity, locking/isolation/transaction implementation, idempotency storage, RLS/Auth/API/backend behavior, role grants, tests, deployment or Production changes. Those technical/evidence gates remain OPEN and must be tracked separately. No implementation is authorized.

Anchors: DOC-04 §§42.40–42.41; DOC-09 §§11.22–11.23; Worklist §§15.102–15.103. Related decisions: DOC08-FIX-005 (immutable movement ledger), DOC08-FIX-024 (signed on-hand delta convention), A12.17 Alternative 1 (separate cost-layer consumption compensation).


## 15. A01 inventory posting source-family scope — Owner FIX (22 November 2026)

**DOC08-FIX-026 — Adopt the bounded conceptual A01 source-family scope and explicit non-posting exclusions defined below.**

The Owner directed that the proposed A01 source-family disposition be promoted to FIX if it is aligned with the accepted architecture and has no conceptual conflict. The documentation consistency review found no conceptual conflict with DOC08-FIX-018 (bounded A01 inventory-posting registry, not a universal event bus), DOC08-FIX-019 (separate A02 reservation source identity), DOC08-FIX-024 (canonical positive-increases / negative-decreases signed movement direction), or DOC08-FIX-025 (immutable lineage-linked correction movements). The source-family scope is therefore recorded as the following conceptual Owner FIX.

### 15.1 Accepted A01 source families

The bounded conceptual A01 source-family scope contains 16 catalogue rows:

**INCLUDE (14):**
1. Purchase / goods receipt — only physically received and accepted quantity.
2. Sales / fulfillment — only actual physical issue from the issuing Location.
3. Inventory adjustment — approved signed adjustment under a controlled reason; reason taxonomy and zero-effect policy require per-adapter definition.
4. Stock Count — only accepted count-session posting under the existing Stock Count FIX lifecycle and DOC08-FIX-024.
5. Transfer dispatch — paired source-Location decrease and transit-Location increase for actual dispatched quantity.
6. Transfer receipt — paired transit decrease and destination increase for each actual receipt occurrence.
7. Transfer loss / destruction — one authorized physical-loss/disposition posting; prevent duplicate loss paths.
8. Return before transfer receipt — only actual physical return from transit to source/return Location.
9. Return after transfer receipt — each actual reverse-flow physical leg is separately traceable.
10. Customer / supplier physical return — only physically received and accepted goods.
11. Production / assembly input consumption — only actual authorized material issue/consumption.
12. Production / assembly output — only accepted physical output received into a Location.
13. Write-off / loss outside transfer — only authorized physical removal/destruction; deduplicate against adjustment and transfer-loss paths.
14. Approved movement correction — new immutable correction movement under DOC08-FIX-025.

**INCLUDE WITH CONDITIONS (2):**
15. Damage while still physically held / quality hold — only an actual relocation into an approved hold Location, represented by paired Location effects; not a Business-wide on-hand loss merely because quality status changed.
16. Reservation fulfillment handoff — only a distinct A02-to-A01 handoff for actual physical issue; reservation lifecycle events do not themselves decrement physical on-hand, and fulfillment must not duplicate a second decrement.

### 15.2 Explicit A01 non-posting exclusions

The following remain outside A01 on-hand posting: purchase commitment/order without physical receipt; sales order/payment/authorization/reservation without physical issue; transfer creation/approval without dispatch; return authorization/refund/credit note without physical receipt; production planning/work order without actual input consumption or accepted output; A02 reservation create/allocate/release/expiry/cancel/reallocation; costing-only layer creation/consumption, FIFO allocation, MWA recalculation and valuation updates; and rejected, invalid, ambiguous or no-effect correction requests. These events may be source-domain evidence or separate domain lifecycle events but do not independently create A01 physical on-hand movement.

### 15.3 Mandatory conceptual safeguards

- A01 remains a finite, server-owned inventory-posting source-event registry, not a universal event bus. Unknown or disabled source mappings fail closed.
- A01 and A02 remain separate identity and replay boundaries. Reservation fulfillment may hand off one distinct A01 physical-issue event; reservation lifecycle is not an A01 movement.
- Signed movement semantics follow DOC08-FIX-024: positive increases on-hand and negative decreases on-hand at the affected Location. Transfers and relocations use correctly paired Location effects.
- One physical effect must not be posted twice through overlapping source paths. Adjustment, transfer loss, write-off and other exception paths must have explicit duplicate-effect prevention.
- Paired/multi-leg effects must not be represented as a partially committed complete event. Partial receipt, fulfillment, transfer and production occurrences require separately traceable event cardinality.
- Movement corrections remain immutable and exclusively follow DOC08-FIX-025; a source-domain correction and generic correction path must not both post the same physical effect.
- Exact source objects/lines, lifecycle states, event cardinality/version, quantity authority, adapter ownership, authorization, idempotency representation, physical registry/integrity, transaction/recovery, concurrency, tenant enforcement and executed evidence must be resolved per adapter before any activation or implementation acceptance.

### 15.4 Status and decision boundary

**STATUS: FIX — OWNER-APPROVED / CONCEPTUAL.** This FIX accepts the 16-row conceptual source-family scope, its two conditional boundaries and the explicit non-posting exclusions. It does not enable any source family or adapter, approve physical schema/fields/FKs/enums/keys, settle per-adapter source contracts, or establish that implementation is already free of technical defects. Physical and implementation dependencies remain OPEN and must be validated before implementation acceptance. No test PASS, security acceptance, deployment or Stage 6 authorization is implied.

Related decisions: DOC08-FIX-018, DOC08-FIX-019, DOC08-FIX-024, DOC08-FIX-025. Anchors: DOC-04 §§42.42–42.44; DOC-09 §§11.24–11.27; Worklist §§15.104–15.107.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.


## DOC08-FIX-027 — Purchase / Goods Receipt source ownership, posting identity and quantity disposition (Owner-approved conceptual FIX, 22 November 2026)

**Decision authority:** Owner explicitly approved all three recommendations recorded in DOC-04 §42.48. This FIX is conceptual/domain-contract authority only. It does not establish physical schema, implementation behavior, permission grants, or adapter activation.

### FIX-027-A — Domain responsibility ownership

The conceptual responsibility split is fixed as follows:

1. **Purchasing / Procurement** owns purchase requests, purchase orders, ordered source lines, supplier commitments and approved commercial amendments. These facts do not prove physical receipt and do not independently create on-hand movements.
2. **Receiving / Warehouse Operations** owns physical receipt occurrences, receipt-line observations, received quantity/unit, inspection and discrepancy disposition, and the accepted-for-inventory quantity facts. It is authoritative for physical receipt evidence and quantity disposition, but does not directly mutate the inventory ledger.
3. **Inventory (M06)** owns authorization-checked A01 admission, the bounded server-owned posting registry, A01 posting identity, immutable `inventory_movements` outcome and projection reconciliation. It consumes authoritative receipt facts; it does not own or rewrite procurement/receiving source records.
4. **Finance / Accounts Payable** owns supplier invoice, payable, payment and settlement facts. Those commercial/accounting facts do not independently create physical on-hand movement.

This is a conceptual responsibility boundary, not a claim that separate implemented modules, services or physical entities already exist.

### FIX-027-B — Logical posting identity and event grain

The canonical conceptual identity/grain for an accepted Purchase / Goods Receipt posting unit is:

**Business + physical Receipt Occurrence + Receipt Line + Accepted-for-Inventory Quantity Slice.**

The lineage meanings are distinct:
- purchase source document and purchase source line: commercial lineage / what was ordered;
- physical receipt occurrence: which distinct physical arrival took place, allowing repeated/partial arrivals;
- receipt line: which ordered line was observed in that occurrence;
- accepted quantity slice: the exact quantity portion accepted for inventory;
- A01 event identity: the idempotently resolved posting event/outcome;
- inventory movement identity: each immutable stock-grain effect.

A later partial arrival is a distinct receipt occurrence. A separately accepted portion is separately attributable as an accepted quantity slice. A01 movement fan-out may be 1:N when authoritative receipt facts require multiple Product/Variant/Location/Batch stock-grain effects. All resulting effects must remain attributable to the source line and accepted slice.

This FIX does **not** decide physical keys, identifier formats, exact event-to-movement cardinality, one-event-per-line versus whole-receipt orchestration, or physical atomicity. The chosen logical grain must be preserved regardless of the eventual physical orchestration pattern.

### FIX-027-C — Quantity disposition boundary

For each physical receipt-line observation, the conceptual quantity dispositions are distinct:

1. **Physically arrived** — quantity actually presented/received at the receiving point.
2. **Accepted for inventory** — quantity explicitly accepted and eligible for A01 posting.
3. **Rejected** — quantity explicitly rejected and ineligible for on-hand posting.
4. **Unresolved / held / discrepant** — quantity awaiting inspection, count resolution, quality decision or another authorized disposition; ineligible until accepted.

Only the accepted-for-inventory quantity may enter A01 and create a positive on-hand movement under DOC08-FIX-024. Ordered, expected, shipped, invoiced, paid, rejected, held and unresolved quantities do not independently post on-hand.

The source workflow must preserve the entered quantity and unit and reproducible conversion provenance to Product base unit. Duplicate acceptance of the same physical quantity is prohibited conceptually. A later disposition change must be auditable and must not silently rewrite an already posted accepted slice. Any post-commit correction remains governed by DOC08-FIX-025.

**Explicitly OPEN:** arithmetic reconciliation and quantity caps; tolerance; shortage/shrinkage treatment; over-receipt authority; precision, rounding and conversion snapshot/version; partial inspection/acceptance lifecycle; physical representation and enforcement. These details are not inferred by this FIX.

### Boundaries and dependencies

- DOC08-FIX-018/019/024/025/026 remain unchanged and continue to govern registry, identity separation, signed movement semantics, correction lineage and source-family scope.
- No purchase-receipt permission key or grant is created. DOC-05 must still define exact actor/function, scope, state conditions, approval/SoD, execution owner and audit tuple before authorization acceptance.
- No source adapter is enabled. No physical entity/table/column/key/FK/enum, source version token, digest, numeric type, transaction model, isolation/locking or recovery implementation is approved.
- Tenant enforcement, atomicity, concurrency, idempotency/recovery, projection reconciliation and executed evidence remain OPEN.
- No implementation authorization or runtime acceptance is implied.

**Status:** FIX — OWNER APPROVED / CONCEPTUAL. Technical contract dependencies remain OPEN. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

Related anchors: DOC-04 §§42.46–42.49; DOC-09 §§11.28–11.31; Worklist §§15.108–15.112.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.


## DOC08-FIX-028 — Purchase / Goods Receipt lifecycle separation and quantity-control invariants (Owner-approved conceptual FIX, 22 November 2026)

The Owner explicitly approved five conceptual rules, LIF-01 through QTY-03, for the Purchase / Goods Receipt adapter. These rules refine DOC08-FIX-027-C without changing the four-way quantity disposition or the A01 posting boundary.

### LIF-01 — Separate physical receipt, inspection, disposition and inventory posting

Physical arrival, inspection/review, quantity disposition (accepted, rejected, unresolved/held/discrepant), and A01 inventory posting are distinct conceptual facts/steps. Physical arrival alone is not inventory acceptance; acceptance alone does not bypass A01 authorization and posting controls. No literal physical status names, state machine implementation or physical entities are selected.

### LIF-02 — Partial receipt and partial acceptance are permitted

A purchase line may be received across multiple distinct physical receipt occurrences. Within an occurrence, accepted quantity may be less than arrived quantity. An accepted quantity slice may proceed through A01 without waiting for the entire purchase order or all other receipt lines to complete, provided the slice is independently attributable, authorized, validated and protected against duplicate posting. Remaining quantities retain their own disposition and lineage.

### QTY-01 — Quantity reconciliation invariant

At the same receipt-line observation, same measurement basis and compatible unit, the conceptual quantity partition must reconcile:

**Physically Arrived = Accepted-for-Inventory + Rejected + Unresolved/Held/Discrepant.**

The equation is an invariant, not an approved physical formula, numeric type, rounding policy or conversion implementation. Any unit normalization must use reproducible source-owned conversion provenance. A reconciliation mismatch fails closed for A01 admission until resolved; no residual is silently assigned to accepted quantity.

### QTY-02 — Only accepted quantity may post

Only the validated accepted-for-inventory quantity slice is eligible for positive A01 on-hand movement under DOC08-FIX-024. Rejected and unresolved/held/discrepant quantities are excluded. The accepted quantity must be bounded by the reconciled arrived quantity; the exact over-receipt, shortage and tolerance policies remain separate OPEN decisions.

### QTY-03 — One-time posting and immutable history

Each accepted-for-inventory quantity slice may have only one authoritative A01 posting outcome. Duplicate acceptance or replay must not create another movement. A disposition change before posting must be auditable and revalidated. A change after posting must not silently rewrite the accepted slice or movement; any stock correction follows DOC08-FIX-025 with its required lineage.

### Boundaries and retained OPEN dependencies

This FIX does not select literal lifecycle states, source tables/columns/keys, physical transition model, numeric precision/scale, rounding, conversion snapshot/version, tolerance, over-receipt approval, shortage/shrinkage handling, event-to-movement cardinality, Batch/Location allocation, DOC-05 permission tuple, physical idempotency/recovery, transaction atomicity/concurrency, tenant enforcement, projection reconciliation or executed evidence.

DOC08-FIX-018/019/024/025/026/027 remain unchanged. No permission is granted, no adapter is activated, and no physical schema/runtime behavior or Stage 6 implementation is approved.

**Status:** FIX — OWNER APPROVED / CONCEPTUAL. Technical dependencies remain OPEN. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

Related anchors: DOC-04 §42.50; DOC-09 §11.32; Worklist §15.112.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.


## DOC08-FIX-029 — Purchase / Goods Receipt over-receipt, shortage and tolerance controls (Owner-approved conceptual FIX, 22 November 2026)

The Owner explicitly approved all three receiving quantity-variance rules. This FIX refines DOC08-FIX-027-C and DOC08-FIX-028 without changing the accepted-only A01 posting boundary, the physical-arrival quantity, or the immutable movement ledger.

### FIX-029-A — Over-receipt

Quantity physically presented/received above the ordered PO quantity is an over-receipt variance. The excess portion must not be automatically accepted for inventory or automatically posted to on-hand. It requires a specific approval by an authorized party under an explicit policy before the excess portion can be considered for acceptance. Approval does not replace physical receipt, quantity disposition, validation, A01 authorization or posting controls. The excess remains separately identifiable and ineligible for A01 until all applicable controls are satisfied.

### FIX-029-B — Shortage

A quantity physically received below the ordered PO quantity is recorded as a shortage/discrepancy against the PO. The missing quantity is not treated as physically received, accepted-for-inventory, or an inventory movement. Only the quantity actually arrived and separately accepted may be eligible for positive A01 posting under DOC08-FIX-024 and DOC08-FIX-028. The shortage remains a procurement/receiving variance for its own review and resolution; it must not be fabricated as a receipt or movement.

### FIX-029-C — Tolerance

The default receiving tolerance is **0%**. A non-zero tolerance may apply only where an explicit policy and explicit authorization permit it. Tolerance is a variance-control rule; it must never alter, inflate, reduce or otherwise rewrite the quantity physically arrived or the quantity actually accepted. Quantity facts and their source/unit-conversion provenance remain truthful and separately traceable. Tolerance does not independently create receipt, acceptance or inventory movement.

### Boundaries and retained OPEN dependencies

These rules decide the conceptual Owner policy only. Exact numeric precision/scale, rounding, conversion snapshot/version, PO amendment/version semantics, source representation, approval actor/scope/SoD/audit tuple, and technical enforcement remain OPEN. Event-to-movement cardinality/orchestration and Batch/Location allocation remain OPEN and are the next conceptual contract reviews. Physical keys/constraints, idempotency/recovery, atomicity/concurrency, tenant enforcement, projection reconciliation and executed evidence remain OPEN.

DOC08-FIX-018/019/024/025/026/027/028 remain unchanged. No permission is granted, no adapter is enabled, and no physical schema/runtime behavior or Stage 6 implementation is approved.

**Status:** FIX — OWNER APPROVED / CONCEPTUAL. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

Related anchors: DOC-04 §42.51; DOC-09 §11.33; Worklist §15.113.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.

## DOC08-FIX-030 — Purchase / Goods Receipt accepted-slice, A01 event and movement cardinality (Owner-approved conceptual FIX, 22 November 2026)

The Owner approved the logical event-to-movement cardinality recommendation. This FIX supplements DOC08-FIX-027/028/029 and preserves the accepted-only A01 posting boundary and immutable movement ledger.

### FIX-030-A — One accepted slice, one authoritative A01 posting event

Each independently attributable Accepted-for-Inventory Quantity Slice has exactly one authoritative logical A01 posting event/outcome. Its lineage preserves Business + physical Receipt Occurrence + Receipt Line + accepted-slice identity. One event does not combine accepted slices from different receipt lines or occurrences; a later partial acceptance is a distinct slice with its own event.

### FIX-030-B — One event, one-or-more movements

A successfully committed A01 posting event produces one or more Inventory Movement ledger entries (1:N). This permits deterministic fan-out when the accepted quantity is allocated across applicable stock-grain effects. Each movement belongs to exactly one event and one accepted slice and retains its originating receipt occurrence and receipt-line lineage. A movement must not combine quantities from multiple events or accepted slices.

### FIX-030-C — Quantity conservation and complete fan-out

The sum of the positive movement base-quantity deltas for an accepted slice must equal its validated accepted quantity normalized to Product base unit, with reproducible conversion provenance. A posting is conceptually complete only when the entire deterministic movement set is attributable and reconciled; partial fan-out is not a successful complete posting. Numeric precision/scale/rounding and physical transaction atomicity remain OPEN.

### FIX-030-D — Replay and immutable correction lineage

Same-identity/same-payload retry resolves to the original authoritative event and complete movement set, never a duplicate. Changed payload for the same identity is a conflict; uncertain commit must be reconciled before retry. Posted movement history is immutable; post-post correction follows DOC08-FIX-025 with separately attributable reversal/compensating lineage.

### Boundaries and retained OPEN dependencies

This FIX is conceptual only. Exact physical event/movement objects, keys/FKs, stock grain, Batch/Location allocation, numeric implementation, purchase-specific DOC-05 authorization tuple, physical idempotency/recovery, atomicity/isolation/locking/concurrency, tenant enforcement, projection reconciliation and executed evidence remain OPEN. It does not activate the adapter, grant permission, approve physical schema or authorize implementation.

The A12.10/A12.11 exactly-one-movement rule remains scoped to transfer shipment receipt/return details; it is not generalized to Purchase / Goods Receipt. DOC08-FIX-018/019/024/025/026/027/028/029 remain unchanged.

**Status:** FIX — OWNER APPROVED / CONCEPTUAL. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

Related anchors: DOC-04 §42.52; DOC-09 §11.34; Worklist §15.114.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.

## DOC08-FIX-031 — Purchase / Goods Receipt Batch and Location allocation (Owner-approved conceptual FIX, 22 November 2026)

The Owner explicitly approved all seven proposed Batch/Location allocation rules. This FIX supplements DOC08-FIX-030 and the existing inventory ledger, batch, projection and costing baseline.

### FIX-031-A — Explicit receiving Location per allocation portion

Every allocation portion resolves to an explicit, eligible receiving Inventory Location within the same Business before A01. A PO, supplier, user session or Business default does not silently establish actual physical Location. A configured default is permissible only under an explicit policy that resolves the actual destination and is preserved in receipt lineage. Unknown, invalid, cross-Business or ineligible Location blocks A01.

### FIX-031-B — Multiple Locations only for observed physical distribution

An accepted slice may split across multiple Locations only when the physical distribution is observed and recorded. No artificial split for projection balancing or default satisfaction. Each portion remains separately attributable.

### FIX-031-C — Actual physical Batch/Lot identity for batch-tracked Product/Variant

Where batch tracking applies, allocation identifies the actual physical Batch/Lot received. Distinct supplier/manufacturer lots remain distinct and cannot be merged merely because Product, Location, expiry or cost match. Do not invent Batch identity from PO or cost-layer identity. Preserve required source/physical attributes; missing or conflicting required identity/attributes block posting.

### FIX-031-D — Unbatched path only under explicit Product/Variant policy

Unbatched allocation is allowed only where an explicit Product/Variant tracking policy says batch tracking is not required. The conceptual path is FIX; authoritative policy source, physical representation and enforcement remain OPEN. No implicit unbatched fallback when tracking is required or unknown.

### FIX-031-E — FEFO, physical Batch and cost-layer separation

FEFO is outbound physical-batch selection, not incoming lot assignment. Receiving records the actual physical lot received. Physical Batch remains distinct from FIFO cost-layer identity and MWA valuation. A01 must not fabricate a cost layer or create extra on-hand movement for costing-only processing.

### FIX-031-F — Allocation grain, cardinality and quantity conservation

Logical allocation grain: one accepted slice + one Product/Variant + one receiving Location + one actual physical Batch or explicitly permitted unbatched state. One accepted slice may produce one-or-more allocation portions; each portion maps to exactly one positive Inventory Movement. Distinct Locations/Batches require separately attributable portions/movements. Portions cannot combine accepted slices or receipt lines.

For each accepted slice, allocation-portion quantities and positive movement base-quantity deltas each sum to the validated accepted quantity in Product base unit. Every portion is positive; over-allocation, under-allocation, duplicate allocation and silent residual are prohibited. Numeric implementation remains OPEN.

### FIX-031-G — Fail-closed allocation, projections and authority boundary

Unresolved, invalid or unreconciled required Location/Batch allocation blocks A01. Portions remain within one Business and the source slice's Product/Variant. Balance projection is Product/Variant/Location scoped; batch-balance projection reconciles to the parent Location balance. Batch create/hold/release, receiving, discrepancy approval and movement posting remain distinct actions. DOC-05 candidate keys are not grants and do not settle the purchase-specific authorization tuple.

### Boundaries and retained OPEN dependencies

This is a conceptual FIX only. Physical allocation object/table/columns/keys/FKs, Location taxonomy/defaulting, authoritative Product batch-tracking policy source, exact physical Batch identity/attributes, exception handling, physical constraints, numeric precision/scale/rounding, purchase-specific DOC-05 actor/scope/approval/SoD/audit tuple, atomicity/isolation/locking/concurrency/idempotency/recovery, tenant enforcement, projection reconciliation implementation and executed evidence remain OPEN.

DOC08-FIX-030 and DOC08-FIX-018/019/024/025/026/027/028/029 remain unchanged. No permission is granted, no adapter is enabled, and no physical schema/runtime behavior or Stage 6 implementation is approved.

**Status:** FIX — OWNER APPROVED / CONCEPTUAL. ERD-OPEN-05 remains OPEN; candidate Data Dictionary acceptance 0/17; canonical physical ERD NOT ACCEPTED; CW-11 Package E IN PROGRESS / ACCEPTANCE NOT MET; implementation readiness NOT READY.

Related anchors: DOC-04 §42.54; DOC-09 §11.36; Worklist §15.116.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE` • Stage 6 implementation NOT AUTHORIZED.
