# POS SaaS Multi-Usaha v3.0 — DOC-04 ERD & Data Dictionary Master

> **Document ID:** DOC-04  
> **Version:** 0.1.0  
> **Checkpoint:** 17 November 2026  
> **Status:** RECONSTRUCTED WORKING MASTER — DRAFT / REVIEW REQUIRED — NOT CANONICAL / NOT FINAL  
> **Scope:** Inventory, stock management, transfer/shipment, costing and conceptual data relationships  
> **Mode:** Documentation-only • Read-only • Append-only • `DB_PUSH_BLOCKED: ACTIVE`  
> **Authority:** Derived consolidation. Does not replace source-native A10/A11/A12 decisions, approval addenda, DOC-01, DOC-02 or DOC-03.

## 1. Purpose, authority and limits

DOC-04 consolidates the evidence-backed conceptual ERD baseline, inventory/costing responsibilities, lifecycle rules, relationship/cardinality requirements, physical-dictionary evidence status, source traceability and unresolved gaps.

This is a reconstructed working master based on the available archive and completed ST5-07 audit. It is not a verbatim recovery of a historical document, an approved canonical physical ERD, a migration specification, implementation evidence or permission to modify Production.

Keep these dimensions separate:

1. **Conceptual decision status:** FIX, CLOSED within scope, REVIEW, OPEN, PARTIAL, CANDIDATE.
2. **Technical specification status:** specified, partial, REVIEW, OPEN or TODO.
3. **Implementation/evidence status:** implemented, tested, not tested or NOT VERIFIED.
4. **Provenance status:** direct approval evidence versus documented decision source versus unrecovered source.
5. **Audit status:** complete only within the explicitly stated scope.

A conceptual FIX never proves a physical column, FK, RLS policy, server enforcement, test pass or deployment.

## 2. Source authority and provenance

Use this hierarchy when claims conflict:

1. Explicit FIX/decision records and verified supersession addenda.
2. Decision-specific audit sources with a verified locator.
3. Consolidated working references.
4. Migration mappings and derived crosswalks.
5. Working drafts and recommendations.

| Source | Role in DOC-04 | Limitation |
|---|---|---|
| A10/A11/A12 decision sources and verified addenda | Decision authority and scoped FIX/supersession | Use only the specific scope established by each source |
| Update Audit A11–A12 and 17-table matrix v0.2, 15 Nov 2026 | Status reconciliation and entity matrix | Audit summary, not implementation evidence |
| A12.38 Physical Dictionary Audit | Entity/domain review and physical gap register | Physical dictionary remains OPEN |
| A12.39 Relationship & Constraint Specification | Conceptual relationships/cardinality/constraint families | Physical constraint verification remains OPEN |
| Batch 02 Inventory Costing Migration Mapping v0.1 | Supporting mapping and source-to-claim evidence | Derived mapping, not canonical ERD |
| A12 decision register working draft v0.5 | Navigation/status register | NOT USER-APPROVED CANONICAL |
| DOC-01 Product Blueprint | Product/business/tenant context | Not physical schema authority |
| DOC-02 Category & Workflow Master | Domain/workflow context | Not physical schema authority |
| DOC-03 System Architecture Master | Architecture and source-of-truth boundaries | Does not replace A10/A11/A12 or physical dictionary evidence |

Missing source locators and approval provenance remain OPEN/UNVERIFIED. Do not infer decision content from a decision ID, filename, version, topic similarity or downstream summary.

## 3. Conceptual entity baseline — 17 entities

The following is the retained conceptual baseline. Responsibility descriptions are not final SQL table or column definitions.

| # | Entity | Conceptual responsibility | Key principles | Physical status |
|---:|---|---|---|---|
| 1 | `inventory_batches` | Physical batch/lot, expiry/production and batch state | FEFO selects physical batch; batch differs from cost layer | Unique identity, status fields and physical definition REVIEW |
| 2 | `inventory_movements` | Inventory quantity-change ledger and event/source identity | Posted movements immutable/append-only; signed base quantity delta; source of truth | Source registry, fields, FK and enforcement TODO |
| 3 | `inventory_balances` | Rebuildable balance projection by product/variant/location | Available = on-hand minus reserved; projection is not source of truth | Nullable variant uniqueness and concurrency REVIEW |
| 4 | `inventory_batch_balances` | Rebuildable physical-batch balance projection | Reconcile with parent inventory balance | Nullable unique keys, allocation and concurrency REVIEW |
| 5 | `inventory_adjustments` | Adjustment header and posting lifecycle | No stock effect before posting; posted history immutable; correction via reversal | Workflow/status/approval details REVIEW |
| 6 | `inventory_adjustment_items` | Adjustment line and signed base quantity | Posted item generates movement; corrections use new records | Rounding, zero handling and uniqueness REVIEW |
| 7 | `stock_counts` | Stock-count session, location, scope and snapshot | Snapshot differs from start time; account for movements after snapshot | Cutoff/watermark/partial posting REVIEW |
| 8 | `stock_count_items` | Expected quantity, physical count and variance | NULL means not counted; zero is a valid count | Recount history/cutoff/constraints REVIEW |
| 9 | `stock_transfers` | Transfer header between storage locations | Same tenant; source differs from destination; virtual transit; multiple shipments | Workflow, authorization and closure enforcement REVIEW |
| 10 | `stock_transfer_items` | Transfer item and requested quantity | One item may be split across shipments; summaries derived | Quantity caps, nullable uniqueness and FK REVIEW |
| 11 | `inventory_cost_exceptions` | Cost exception and unknown-HPP handling | Unknown cost remains NULL; correction does not mutate posted movement | Exception code/status/value impact REVIEW |
| 12 | `inventory_reservations` | Reservation header, source and expiry | Reservation reduces available, not physical on-hand; release creates no movement | Source validation and TTL REVIEW |
| 13 | `inventory_reservation_items` | Reserved quantities and allocations | Active reserved = reserved - fulfilled - released; may allocate across batches | Fulfillment history/allocation/concurrency REVIEW |
| 14 | `inventory_cost_layers` | Cost-layer identity, cost and remaining quantity | Distinct from physical batch; FIFO consumes layers; transfer preserves identity | Layer identity, landed cost and source uniqueness REVIEW |
| 15 | `inventory_cost_layer_consumptions` | Consumption and compensation lineage | Movement may consume multiple layers; immutable; cannot exceed remaining quantity | FK/caps/idempotency/locking/tests TODO |
| 16 | `stock_transfer_shipments` | One physical shipment per shipment record | Partial/repeated receipt; dispatch/receipt/return/loss are separate events | Physical schema/event/locking/idempotency REVIEW |
| 17 | `stock_transfer_shipment_items` | Shipment line and receipt reconciliation | Receipt can be repeated/partial; disposition reconciled per item | Event detail, quantity caps and constraints REVIEW |

**Candidate, not approved entity #18:** `inventory_cost_layer_movements` is a candidate conceptual bridge. Do not add it to the historical 17-entity baseline without a new explicit decision and evidence.

## 4. Inventory ledger, balances and batch rules

- `inventory_movements` is the source of truth for physical quantity changes.
- Posted movements are immutable/append-only. Correct errors through reversal or compensating records, not direct mutation/deletion.
- `inventory_balances` and `inventory_batch_balances` are rebuildable projections.
- Conceptual invariant: `quantity_available = on_hand - reserved`.
- Batch-level projections must reconcile with the parent balance.
- Quantity changes are represented using signed base-quantity deltas.
- Posting and projection updates must remain consistent; physical transaction boundaries, locking and atomicity are still OPEN for verification.

## 5. Reservation and fulfillment

- Reservation reduces available quantity, not physical on-hand.
- Releasing a reservation does not create an inventory movement.
- Fulfillment updates reservation and physical stock atomically.
- Active reserved quantity is conceptually `reserved - fulfilled - released`.
- A reservation item may be allocated across multiple physical batches.
- A02 Alternative A places `source_type/source_id` on the reservation header, with strict server-side validation. Physical schema and validation mechanism remain REVIEW.
- Partial fulfillment is represented as separate auditable events/records; exact physical event model remains OPEN.

## 6. Costing — MWA, FIFO and cost layers

- MWA is the default costing method per **Business + Product/Variant + Inventory Location**.
- FIFO is an alternative.
- MWA pools must not be combined across inventory locations.
- A physical batch and a cost layer are different concepts: FEFO selects physical batches; FIFO selects cost layers.
- Unknown HPP/cost remains NULL, not zero.
- Transfer preserves cost-layer identity through transit; transfer is not a new purchase or a new consumption.
- Cost-layer allocation under MWA supports traceability/reconciliation and does not replace MWA valuation.
- Landed-cost correction and layer mapping retain technical gaps.

## 7. Transfer and shipment lifecycle — A11

A11 is FIX only at architecture/business-rule level.

| Decision | FIX architecture/business rule | Physical/technical status |
|---|---|---|
| F01 | Transfer process status: DRAFT, APPROVED, IN_PROGRESS, CLOSED | Enum and transition enforcement OPEN |
| F02 | Process status is separate from closure outcome | Field representation OPEN |
| F03 | Shipment status: PREPARED, IN_TRANSIT, PARTIALLY_RECEIVED, CLOSED, CANCELLED | Enum/transition enforcement OPEN |
| F04 | Dispatch, receipt, return and loss resolution are separate auditable events | Event schema/relations OPEN |
| F05 | Repeated/partial receipt is allowed | Receipt event/detail schema OPEN |
| F06 | One shipment represents one physical shipment; separate physical shipments use separate records | Physical identity constraint OPEN |
| F07 | Status and quantity summaries derive from posted events and inventory ledger | Projection/reconciliation implementation OPEN |
| F08 | Transfer closes only when all quantities have valid, reconcilable disposition | Closure validation OPEN |
| F09 | Unresolved investigation prevents closure | Authorization/validation enforcement OPEN |
| F10 | A04, A06, A09 and A10 baselines remain applicable | Physical implementation NOT VERIFIED |

Field dictionary, technical enums, types/nullability/defaults, FK/composite FK, UNIQUE/CHECK, indexes, authorization, lock order, audit retention, concurrency tests and implementation remain REVIEW/TODO.

## 8. Conceptual relationships and cardinality — A12.39

| Relationship | Conceptual cardinality / rule | Scope |
|---|---|---|
| Adjustment header → adjustment items | 1:N | Conceptual |
| Stock-count header → stock-count items | 1:N | Conceptual |
| Transfer header → transfer items | 1:N | Conceptual |
| Transfer header → shipments | 1:N | Conceptual |
| Transfer item → shipment items | One transfer item may be split across multiple shipment items | Conceptual |
| Shipment header → shipment items | 1:N | Conceptual |
| Shipment item → receipt events | 1:N; repeated/partial receipt allowed | Conceptual |
| Posted receipt detail → inventory movement | Exactly one movement per posted receipt detail | A12.10 FIX conceptual |
| Posted return detail → inventory movement | Exactly one movement per posted return detail | A12.11 FIX conceptual |
| Movement → cost-layer allocations | 1:N | Conceptual |
| Cost layer → allocations | 1:N | Conceptual |
| Eligible negative allocation → original consumption | Exactly 1:1 | A12.17 Alternative 1 FIX |
| Non-consumption allocation → consumption | 1:0 — zero consumption | A12.17 Alternative 1 FIX |
| Original consumption → compensation | 1:N partial compensations | A12.17 Alternative 1 FIX |
| Reservation header → reservation items | 1:N | Conceptual |
| Reservation item → physical batch allocations | Multiple allocations may exist | Conceptual |

A12.17 cardinality invariants:
- One eligible negative allocation produces exactly one original consumption.
- A non-consumption allocation produces zero consumption.
- One original consumption may have multiple partial compensations.
- Aggregate compensation must not exceed eligible original quantity.
- Partial fulfillment is represented by separate movement/allocation/consumption events.
- Posted original consumption and compensation records are immutable; corrections use reversal/compensating records.

A12.39 closes only conceptual relationship/constraint specification. Physical FK/composite FK, UNIQUE/CHECK, delete/update behavior, indexes, RLS, locking, atomicity, idempotency enforcement and test evidence remain OPEN/UNVERIFIED.

## 9. Physical data dictionary — evidence-bounded register

This is deliberately **not** a final SQL column dictionary. It states information the conceptual model must represent without inventing physical names, types or constraints.

| Entity group | Information to represent | Established type principle | Unresolved physical decisions |
|---|---|---|---|
| All 17 entities | Tenant/business ownership and parent-child scope | Identifier type not finalized | PK/FK/composite FK and tenant enforcement |
| Quantity-bearing records | Input/base quantity, signed delta, reserved/fulfilled/released/received quantity | Decimal/NUMERIC; not floating point | Precision/scale, bounds, rounding and nullability |
| Money/cost records | Unit cost, layer cost, amount and unknown cost | Decimal/NUMERIC; unknown cost = NULL | Precision/scale, currency representation and nullability |
| Event/lifecycle records | Event/posted/dispatch/receipt/return timestamps, status, actor and source | Physical representation not finalized | Timezone, enums/checks, defaults and event identity |
| Projection records | On-hand, reserved, available and batch balance | Derived projection | Unique keys, nullable-variant strategy, rebuild and concurrency |
| Source references | Movement source identity; reservation source_type/source_id | Registry/polymorphic reference principles only | Registry structure, FK, validation and lifecycle |
| Cost layer/consumption | Layer identity, remaining quantity, consumption and compensation | Decimal quantities and cost | FK, uniqueness, caps, locking and idempotency |

Do not infer generic columns such as `id`, `created_at`, `updated_at`, `deleted_at` or `status` on every table. They may be design candidates, but they are not established here as final physical fields.

## 10. Constraint and enforcement status

| Constraint family | Conceptual requirement | Physical verification |
|---|---|---|
| Tenant integrity | Business and parent-child records remain in the same tenant | OPEN; composite FK and server/RLS evidence not verified |
| Composite foreign keys | Relationships preserve tenant context | OPEN |
| Uniqueness | Stable identities, idempotency and scoped uniqueness where specified | REVIEW/TODO; exact keys/indexes not final |
| Quantity caps | Prevent over-receipt, over-return, over-consumption and excess compensation | Conceptual invariants; CHECK/locking/tests OPEN |
| Immutability | Posted ledger and consumption/compensation records immutable | Conceptual FIX; enforcement OPEN |
| Idempotency | Retries do not duplicate posted events | Principle FIX; key/schema/retention/tests OPEN |
| Atomicity/concurrency | Reservation/fulfillment/posting and layer consumption remain consistent | Technical implementation OPEN |
| Lifecycle | Only valid transitions and fully reconciled transfer closure | A11 FIX conceptual; enforcement OPEN |
| Delete/update behavior | Historical/audit records are not silently destroyed | TODO |
| Projection integrity | Balances reconcile to movement ledger and parent batch balances | Conceptual FIX; reconciliation jobs/tests OPEN |
| RLS/security | Tenant access isolation is required | Implementation NOT VERIFIED |

## 11. Decision register and supersession boundaries

| Decision | Recorded status | Interpretation retained in DOC-04 |
|---|---|---|
| A10 | CLOSED — Architecture Baseline | Architecture baseline only; not implementation |
| A11 | FIX — architecture/business rules | F01–F10; physical/implementation details OPEN |
| A12.16 | REVIEW — superseded | Historical only for scope replaced by A12.17 |
| A12.17 Alternative 1 | FIX | Allocation/consumption/compensation cardinality only; FK/caps/locking/tests TODO |
| A12.18–A12.28 | OPEN / UNVERIFIED | Do not reconstruct individual decision content |
| A12.30F | CLOSED — four conceptual decisions only | Does not close all A12.30 |
| A12.31E | OPEN | Explicit source/closure link not recovered |
| A12.36.1 | UNVERIFIED / REVIEW | Approval of Alternative B Fulfillment Item not recovered |
| A12.37.10.1 | CLOSED — conceptual numeric policy | MWA per Business + Product/Variant + Inventory Location; FIFO alternative |
| A12.38 | Conceptual audit/gap register closed; physical dictionary OPEN | Not physical schema approval |
| A12.39 | Conceptual relationship/constraint specification closed; physical verification OPEN | Not proof of physical enforcement/tests |
| A12.40 | PARTIAL / OPEN | D40-203–216 UNRECOVERED |
| A12.41 | NOT STARTED | Readiness reassessment not performed |

A12.30F comprises four documented conceptual decisions only: settlement/bank matching; PO–receipt–invoice three-way matching; centralized movement source/event identity registry concept; and audit/integration/security/report/offline boundaries. Their technical structures and enforcement remain OPEN.

## 12. Source-to-claim crosswalk

| Claim ID | Claim | Primary/supporting evidence | Allowed status |
|---|---|---|---|
| SC-01 | 17 conceptual entities | A12.38; Batch 02; Update Audit v0.2 | FIX conceptual baseline |
| SC-02 | Immutable movement ledger | A10/A12; A12.38; Batch 02 | FIX architecture |
| SC-03 | Rebuildable balance projections | A12.38; Update Audit v0.2; Batch 02 | FIX principle |
| SC-04 | MWA/FIFO location policy | A12.37.10.1; Update Audit v0.2; DOC-03 | FIX conceptual |
| SC-05 | Physical batch differs from cost layer | A10/A12; A12.38; Batch 02 | FIX conceptual |
| SC-06 | Reservation and fulfillment rules | A02; A12.38; Batch 02 | FIX conceptual; physical REVIEW |
| SC-07 | Transfer/shipment lifecycle | A11 F01–F10; Update Audit v0.2 | FIX architecture |
| SC-08 | Allocation/consumption/compensation cardinality | A12.17 Alternative 1; Update Audit v0.2 | FIX cardinality |
| SC-09 | Receipt/return detail to movement cardinality | A12.10/A12.11; A12.39 | FIX conceptual |
| SC-10 | Physical field/constraint status | A12.38; A12.39 | OPEN |
| SC-11 | Unrecovered decision provenance | Update Audit v0.2; A12 register v0.5 | OPEN/UNVERIFIED |

## 13. Open gap register

| Gap ID | Description | Status |
|---|---|---|
| GAP-04-01 | Field dictionary for 17 entities: names/types/precision/nullability/defaults | OPEN |
| GAP-04-02 | PK/FK/composite FK and tenant enforcement | OPEN |
| GAP-04-03 | UNIQUE/CHECK/index/delete-update strategy | OPEN |
| GAP-04-04 | Nullable-variant uniqueness and projection concurrency | REVIEW |
| GAP-04-05 | A01 movement source identity registry physical structure | REVIEW |
| GAP-04-06 | A02 reservation source validation/TTL physical model | REVIEW |
| GAP-04-07 | Cost-layer transfer identity and landed-cost correction mapping | REVIEW/TODO |
| GAP-04-08 | Shipment receipt/return/loss event chain physical structure | OPEN |
| GAP-04-09 | Allocation/consumption/compensation FK, caps and enforcement | OPEN |
| GAP-04-10 | Locking, deadlock retry, concurrency and atomicity tests | OPEN |
| GAP-04-11 | Idempotency key, payload retention and duplicate handling | OPEN |
| GAP-04-12 | Tenant composite FK, RLS and server enforcement evidence | UNVERIFIED |
| GAP-04-13 | A12.18–A12.28 individual provenance | OPEN/UNVERIFIED |
| GAP-04-14 | A12.31E and A12.36.1 approval/provenance | OPEN/UNVERIFIED |
| GAP-04-15 | A12.40 D40-203–216 | UNRECOVERED |
| GAP-04-16 | A12.41 final readiness reassessment | NOT STARTED |

## 14. Readiness and authorization boundary

- DOC-04 is a reconstructed working master, not an approved canonical physical ERD.
- Physical dictionary and constraint verification remain OPEN.
- A12.40 remains PARTIAL/OPEN; A12.41 remains NOT STARTED.
- No migration or implementation readiness is implied.
- `DB_PUSH_BLOCKED: ACTIVE`.
- Stage 6 is **NOT AUTHORIZED**.
- Any later implementation requires separate explicit authorization and its own gate review.

## 15. Change history

| Version/date | Change | Status |
|---|---|---|
| v0.1 — 17 Nov 2026 | Initial reconstructed working master based on ST5-07.01–ST5-07.09 audits | DRAFT — NOT CANONICAL |

## Appendix A — Source locator register

| Locator | Source |
|---|---|
| A12.38 | ERD consolidation v5 — A12.38 Physical Dictionary Audit |
| A12.39 | ERD consolidation v6 — A12.39 Relationship & Constraint Specification |
| A11/A12 status | Update Audit A11–A12 and 17-table matrix v0.2, 15 Nov 2026 |
| Batch 02 | POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md |
| A12 register | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.5_2026-11-16.md — NOT USER-APPROVED CANONICAL |
| Architecture context | DOC-01, DOC-02 and DOC-03 in GitHub main; base checkpoint commit 479e743460e23380c96883231f1721935dc335e9 |

End of DOC-04. This document preserves audited scope and unresolved gaps. No physical schema or implementation is authorized by its publication.


---

## 16. Append-only technical work package — Inventory physical-specification decomposition (18 November 2026)

**Status:** WORKING SPECIFICATION PLAN — NOT APPROVED PHYSICAL SCHEMA — NOT FINAL  
**Purpose:** Convert the existing GAP-04 register into an executable, evidence-bounded specification sequence for the 17 conceptual inventory/costing entities.  
**Authority:** DOC-04 §§3–13; Batch 02 Inventory Costing Mapping v0.1 §§3–5; A11 F01–F10; A12.17 Alternative 1; A12.37.10.1.  
**Control:** Documentation-only. No SQL/DDL/DML, database, migration, RLS/Auth, trigger, API/backend, source code, CI workflow, Vercel, deployment or Production change.

This work package does not declare physical column names, data types, key definitions, constraint expressions or implementation behavior final. The words below describe information that the conceptual model must represent and decisions that still require source/approval or technical review. Logical labels are not approved SQL identifiers.

### 16.1 Per-entity specification worklist

| # | Entity | Information the specification must account for | Required key/relationship review | Constraint and behavior review still required |
|---:|---|---|---|---|
| 1 | `inventory_batches` | Business ownership; product/variant association; batch identity; production/expiry dates; batch state; optional supplier association | Tenant-safe product, variant and supplier references; batch identity scope | Uniqueness scope; expiry/blocked eligibility; status lifecycle; nullable variant behavior |
| 2 | `inventory_movements` | Business; product/variant; inventory location; signed base-quantity delta; movement/event type; source identity; optional batch; posting/occurrence actor and time; reversal/compensation linkage | Tenant-safe references to product/location/batch; source identity registry per A01; reversal lineage | Posted immutability; allowed movement classes; idempotency identity; duplicate handling; atomic balance projection |
| 3 | `inventory_balances` | Business; product/variant; inventory location; on-hand; reserved; derived available quantity or its documented derivation | Tenant-safe product/location references; balance identity and nullable-variant key | One active projection per approved identity; NULL-variant uniqueness strategy; concurrent updates; rebuild/reconciliation |
| 4 | `inventory_batch_balances` | Business; parent balance identity; batch identity; batch on-hand/reserved projection as supported by approved allocation rules | Tenant-safe parent balance and batch references; parent-child tenant consistency | Unique batch projection identity; aggregate-to-parent reconciliation; reservation allocation; concurrent update |
| 5 | `inventory_adjustments` | Business; target location; adjustment workflow; review/check/approval/posting lifecycle; actor and reason/evidence | Tenant-safe location and actor references; header-to-items relationship | Allowed state transitions; approval threshold source; no stock effect before posting; immutable posted outcome; reversal path |
| 6 | `inventory_adjustment_items` | Parent adjustment; product/variant; input quantity/unit; conversion snapshot; signed base delta; resulting movement linkage | Tenant-safe adjustment/product references; movement relationship | Zero/rounding rules; conversion snapshot immutability; duplicate line policy; posted item-to-movement cardinality |
| 7 | `stock_counts` | Business; location/scope; count session; snapshot time/cutoff; start time; operator; status; blind-count mode | Tenant-safe location and operator references; header-to-items relationship | Snapshot watermark; treatment of movements after snapshot; partial posting; reopen/recount lifecycle |
| 8 | `stock_count_items` | Parent count; product/variant/batch scope as applicable; expected snapshot quantity; physical count (NULL until counted; zero valid); variance; recount history; correction movement | Tenant-safe parent/product/batch references; correction movement relationship | NULL versus zero semantics; recount history; variance basis; final cutoff; duplicate item identity; adjustment posting |
| 9 | `stock_transfers` | Business; source and destination storage locations; process status; closure outcome; virtual transit; requested items; investigation/disposition | Source and destination must belong to same business; source differs from destination; header-to-items and header-to-shipments | F01–F02 lifecycle; closure only after reconciled disposition; unresolved investigation blocks closure; authorization boundary |
| 10 | `stock_transfer_items` | Parent transfer; product/variant; requested base quantity; shipment allocations; dispatched/received aggregates derived from posted events | Tenant-safe transfer/product references; item-to-many-shipment-item relationship | Quantity caps; split shipment; aggregate derivation; nullable variant uniqueness; over-dispatch/over-receipt prevention |
| 11 | `inventory_cost_exceptions` | Business; affected movement/layer/source; exception type/status; unknown-cost condition; proposed/resolved cost and resolution provenance where authorized | Tenant-safe references to affected costing records; source linkage | Unknown HPP remains NULL; exception resolution must not mutate posted movement; resolved-cost effect and approval remain OPEN |
| 12 | `inventory_reservations` | Business; source type/source identity; expiry/TTL; reservation lifecycle; actor and release/fulfillment outcome | A02 Alternative A source reference on reservation header; strict server validation; header-to-items | Source allowlist/validation; TTL and expiry behavior; idempotent create/release; release creates no physical movement |
| 13 | `inventory_reservation_items` | Parent reservation; product/variant; location; requested/reserved/fulfilled/released quantities; multiple batch allocations; fulfillment event lineage | Tenant-safe reservation/product/location/batch references; multi-allocation relation | Active reserved = reserved − fulfilled − released; caps; partial fulfillment events; atomic reservation/stock update; concurrency |
| 14 | `inventory_cost_layers` | Business; product/variant; inventory location; source receipt/cost identity; original and remaining layer quantity; unit/extended cost; transfer lineage | Tenant-safe product/location/source references; preserve layer identity across transit | FIFO order/eligibility; source uniqueness; remaining quantity caps; landed-cost correction; transfer must not become new consumption |
| 15 | `inventory_cost_layer_consumptions` | Movement; cost layer; consumed quantity/cost snapshot; original consumption and compensation lineage; eligible negative allocation reference | A12.17 Alternative 1 cardinality; one eligible negative allocation to one original consumption; one original consumption to multiple partial compensations | Aggregate compensation cap; non-consumption allocation maps to zero consumption; immutability; locking; idempotency; NULL-cost handling |
| 16 | `stock_transfer_shipments` | Parent transfer; one physical shipment identity; sequence/dispatch; shipment state; dispatch/receipt/return/loss event summary | Tenant-safe transfer reference; shipment-to-items relationship; physical shipment identity | F03–F06 status/event separation; repeated/partial receipt; cancellation/return/loss handling; idempotency; lock order |
| 17 | `stock_transfer_shipment_items` | Parent shipment; transfer-item link; product/variant/batch; dispatched base quantity; repeated receipt details; return/loss/confirmed disposition; movement linkage | Tenant-safe shipment/transfer-item/product/batch references; receipt/return detail to movement cardinality | No over-receipt; repeated receipt event identity; exactly one movement per posted receipt detail and per posted return detail (A12.10/A12.11 conceptual); unresolved investigation blocks transfer closure |

### 16.2 Cross-cutting physical specification gates

| Gate | Required output before physical design can be considered complete | Current disposition |
|---|---|---|
| PDS-01 — Identity and tenant keys | Per-entity PK decision; tenant ownership path; FK and composite-FK matrix; parent/child tenant invariants | OPEN — no keys inferred here |
| PDS-02 — Field dictionary | Per-entity logical attribute inventory; approved SQL identifier; type; precision/scale; nullability; default; generated/derived status; lifecycle mutability; source locator | OPEN — logical information list only |
| PDS-03 — Uniqueness and indexes | Scoped unique identity; nullable-variant strategy; idempotency key; lookup/ordering indexes; rationale and write-path impact | OPEN |
| PDS-04 — Quantity and money invariants | NUMERIC precision/scale; base-unit conversion; rounding; nonnegative/cap rules; currency and unknown-cost representation | OPEN; NUMERIC principle and unknown-cost NULL retained |
| PDS-05 — Event/source identity | A01 movement source registry; A02 reservation source validation; event identity, replay and duplicate disposition | REVIEW/OPEN; do not merge A01 and A02 patterns |
| PDS-06 — Lifecycle and immutability | State transition tables; posted immutability; reversal/compensation; delete/update policy; actor/time/reason lineage | OPEN for physical enforcement |
| PDS-07 — Concurrency and atomicity | Transaction boundaries; lock order; race behavior; deadlock retry; idempotent replay; projection rebuild/reconciliation | OPEN |
| PDS-08 — Transfer/receipt chain | Shipment identity; repeated receipt; return/loss/investigation events; quantity disposition; transfer closure calculation | OPEN for physical schema/enforcement |
| PDS-09 — Cost-layer chain | FIFO consumption; A12.17 allocation/consumption/compensation cardinality; layer transfer identity; landed-cost correction | OPEN |
| PDS-10 — Security and tests | Tenant isolation design; server authorization and RLS design; positive/negative test matrix; executed evidence kept separate | NOT VERIFIED / NOT EXECUTED |

### 16.3 Invariants retained as design acceptance criteria

The following are carried forward from the source decisions as conceptual acceptance criteria, not claims of physical enforcement:

1. Posted `inventory_movements` and posted cost-layer consumption/compensation history are immutable; corrections use reversal/compensation records.
2. Balance tables are rebuildable projections; available quantity is on-hand minus reserved.
3. Physical batch identity and cost-layer identity remain separate. FEFO selects physical batch; FIFO selects cost layer.
4. MWA is the default per Business + Product/Variant + Inventory Location; FIFO remains the alternative. No MWA pool is combined across locations.
5. Reservation reduces available quantity, not physical on-hand. Release creates no inventory movement. Fulfillment updates reservation and physical stock atomically.
6. Transfer dispatch moves quantity from source to virtual transit; receipt moves quantity from transit to destination. Separate physical shipments remain separate shipment records.
7. Repeated/partial receipt is represented by distinct auditable events. Posted receipt detail and posted return detail each have exactly one conceptual inventory movement under A12.10/A12.11.
8. Transfer closure requires valid, reconcilable disposition for all quantities; unresolved investigation blocks closure.
9. A12.17 Alternative 1 cardinality remains scoped as recorded in §8; it does not decide physical FK, lock or constraint implementation.
10. Unknown HPP/cost remains NULL, never silently coerced to zero.

### 16.4 Source gaps that must not be fabricated

- A12.18–A12.28 remain OPEN/UNVERIFIED individually. Their decision content is not reconstructed from IDs or summaries.
- A12.31E remains OPEN; A12.36.1 remains UNVERIFIED/REVIEW.
- A12.40 remains PARTIAL/OPEN; D40-203–D40-216 remain UNRECOVERED.
- A12.41 remains NOT STARTED.
- No exact SQL column name, PK, FK, composite-FK column tuple, UNIQUE/CHECK expression, index definition, NUMERIC precision/scale, status enum, lock order or transaction boundary is approved by this addendum.
- `inventory_cost_layer_movements` remains a candidate bridge, not an approved eighteenth entity.

### 16.5 Work sequence and exit criteria

| Sequence | Work item | Exit criterion | Status |
|---:|---|---|---|
| 1 | Entity-by-entity logical attribute and source-locator matrix | Each proposed attribute is linked to a direct source/decision or explicitly marked candidate/open | IN PROGRESS — this addendum establishes the decomposition only |
| 2 | PK/FK/composite-FK and tenant-integrity matrix | Every relationship has source-backed key tuple, tenant rule and delete/update behavior | NOT STARTED |
| 3 | UNIQUE/CHECK/index matrix | Each constraint has invariant, scope, nullable behavior and source/approval | NOT STARTED |
| 4 | Quantity/cost precision and conversion rules | NUMERIC precision/scale, base units, rounding and currency are explicitly decided | NOT STARTED |
| 5 | Event, idempotency, atomicity and concurrency specification | Replay, locking, retry, failure and reconciliation semantics are approved and testable | NOT STARTED |
| 6 | Physical dictionary acceptance review | DOC-04 reviewers accept complete field/key/constraint specification with unresolved items explicitly dispositioned | NOT STARTED |
| 7 | Separate implementation authorization gate | Explicit authorization for Stage 6 and any database/code changes | NOT AUTHORIZED |

**No dependency is closed by this work package.** It turns GAP-04-01–GAP-04-12 into a bounded specification worklist only. It does not make DOC-04 canonical/final and does not authorize SQL, migration, database, application, backend, RLS/Auth, CI workflow, Vercel, deployment or Production work.

### 16.6 Change history

| Date | Addendum | Effect |
|---|---|---|
| 18 November 2026 | Inventory physical-specification decomposition | Added 17-entity logical information worklist, ten cross-cutting gates and source-bounded acceptance criteria; no FIX/status/authorization changed |

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 17. Source-linked logical attribute matrix — inventory & costing (18 November 2026)

### 17.1 Purpose, interpretation and evidence boundary

This matrix advances the first work item in §16.5: identify the logical information each of the 17 historical conceptual entities must represent, and link that information to the source evidence available in the current working set.

**This is a logical-information matrix, not an approved physical field dictionary.** The labels below are descriptive information groups, not proposed SQL identifiers. They do not establish column names, key tuples, data types, nullability, defaults, enum values, precision/scale, indexes, or constraints. Where the source only establishes an entity responsibility or invariant, the matrix records that limited level and leaves physical decomposition OPEN.

Evidence hierarchy applied:
1. DOC-04 §§3–12 and §16 (current GitHub working master; derived consolidation).
2. `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§2–5 and 7 (supporting mapping, DRAFT).
3. `Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v5_A12.38_Physical_Dictionary_Audit.docx`, especially pp. 1–6, 11–13 and 19–21 (A12.38 physical dictionary audit; field/constraint details not approved).
4. `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§3–8 (latest located status reconciliation for the 17-entity set).
5. A11 F01–F10, A12.02 Alternative A, A12.17 Alternative 1, A12.30F A01 Alternative B, A12.37.10.1, A12.38 and A12.39 only within the specific scope described in DOC-04 §§5–12.

A12.18–A12.28 remain OPEN/UNVERIFIED. A12.31E remains OPEN; A12.36.1 remains UNVERIFIED/REVIEW; A12.40 remains PARTIAL/OPEN with D40-203–D40-216 UNRECOVERED; A12.41 remains NOT STARTED. No decision content is reconstructed from those missing sources.

### 17.2 Matrix for the 17 historical conceptual entities

| # | Conceptual entity | Logical information groups supported by available sources | Source / locator basis | Attribute-level status and unresolved items |
|---:|---|---|---|---|
| 1 | `inventory_batches` | Tenant/business context; product/variant association; physical batch/lot identity; production/expiry information; batch state; optional supplier association; product-configured batch-tracking applicability. | DOC-04 §3 row 1, §§4 and 9; Batch 02 §§3–4; A12.38 pp. 2–3. | Responsibility and FEFO principle FIX conceptually. Exact batch identity composition, supplier relation, production/expiry nullability, status vocabulary, uniqueness and blocked/expired transition fields REVIEW/OPEN. No physical attribute names approved. |
| 2 | `inventory_movements` | Tenant/business context; movement source/event identity; source document context; event time; product/variant; source/destination inventory location; optional physical batch; signed base-quantity delta; posting/immutability and reversal/compensation lineage; costing/layer-allocation context; idempotency context. | DOC-04 §§3–5, 9–10 and 12 (SC-02); Batch 02 §§3–5; A12.38 pp. 2–4, 11–12; A12.30F A01 Alternative B as cited by the source set. | Ledger/source-of-truth, signed base delta, posted immutability and correction by reversal/compensation FIX conceptually. Central source/event registry is conceptual only. Exact source registry shape, actor/time fields, reversal links, location/batch references, idempotency key, FK and posting fields REVIEW/TODO. Do not conflate A01 movement registry with A02 reservation source fields. |
| 3 | `inventory_balances` | Tenant/business context; product/variant; inventory location; projected on-hand quantity; projected reserved quantity; derived available quantity; rebuild/reconciliation provenance. | DOC-04 §§3–4, 9–10; Batch 02 §§3–4; A12.38 pp. 2–4. | Rebuildable projection and available = on-hand − reserved FIX conceptually. Nullable-variant uniqueness, exact projection grain/key, concurrency, rebuild metadata and reconciliation controls REVIEW. Balance is not an independent source of truth. |
| 4 | `inventory_batch_balances` | Tenant/business context; parent product/variant/location balance context; physical batch association; projected batch on-hand/reserved/available quantities as supported by parent balance rules; reconciliation relationship to parent balance. | DOC-04 §§3–4, 9–10; Batch 02 §§3–4; A12.38 pp. 2–4. | Separate rebuildable batch projection and reconciliation to parent balance FIX conceptually. Exact quantity breakdown, reservation allocation grain, nullable unique key, FK tuple, concurrency and rebuild controls REVIEW. |
| 5 | `inventory_adjustments` | Tenant/business context; adjustment document identity; affected inventory location and scope; lifecycle/review/approval/posting context; reason/exception context; posting/reversal relationship. | DOC-04 §§3–4, 9–10; Batch 02 §§3–4; A12.38 pp. 2–3, 4 and 6. | No stock effect before posting; posted history immutable; correction by reversal FIX conceptually. Header status, checked stage, approval threshold/actor, reason taxonomy, posting identity and reversal linkage REVIEW/TODO. |
| 6 | `inventory_adjustment_items` | Parent adjustment context; product/variant; optional batch; entered quantity and unit context; conversion snapshot; signed base-quantity delta; resulting posted movement linkage. | DOC-04 §§3–4, 9–10; Batch 02 §§3–4; A12.38 pp. 2–3. | Posted item generates movement; signed base quantity and correction through new records FIX conceptually. Unit/conversion snapshot structure, zero handling, rounding, duplicate-line policy, movement cardinality and FK/unique constraints REVIEW. |
| 7 | `stock_counts` | Tenant/business context; stock-count session identity; inventory location; count scope; lifecycle/status; blind-count mode; snapshot/cutoff context; assigned counter/actor context; posting/reconciliation context. | DOC-04 §§3, 8–10; Batch 02 §§3–4; A12.38 pp. 2–4. | Snapshot differs from session start; movements after snapshot must be accounted for FIX conceptually. Cutoff/watermark, scope representation, partial posting, recount lifecycle, actor evidence and finalization constraints REVIEW. |
| 8 | `stock_count_items` | Parent stock-count context; product/variant; optional batch; snapshot expected quantity; physical counted quantity; variance; count-completion state; movement/recount reconciliation context. | DOC-04 §§3, 8–10; Batch 02 §§3–4; A12.38 pp. 2–4. | NULL means not counted; zero is a valid count; variance = counted − expected, with expected quantity adjusted for movements after snapshot FIX conceptually. Recount history, multiple counters, cutoff semantics, nullability, precision and uniqueness REVIEW. |
| 9 | `stock_transfers` | Tenant/business context; transfer identity; source and destination storage locations; virtual transit location context; process status; closure outcome; approval/investigation context; shipment and disposition summary context. | DOC-04 §§3, 7–10; Batch 02 §§3–5; A11 F01, F02, F08, F09; A12.38 pp. 2–3. | Same-tenant transfer, source differs from destination, virtual transit, lifecycle and separate closure outcome FIX at architecture/business-rule level. Physical location references, status enum/transitions, approval/authorization, investigation linkage, closure proof and cancellation semantics REVIEW. |
| 10 | `stock_transfer_items` | Parent transfer context; product/variant; requested quantity in base/unit context; shipment allocation/split context; dispatched/received/returned/lost disposition aggregates or projections. | DOC-04 §§3, 7–10; Batch 02 §§3–5; A11 F05/F07/F08; A12.38 pp. 2–3. | Item can be split across shipments; summaries derive from shipment/events FIX conceptually. Exact requested/dispatched/received quantity groups, unit conversion snapshot, caps, nullable uniqueness, shipment-item linkage and FK REVIEW. |
| 11 | `inventory_cost_exceptions` | Tenant/business context; affected product/variant/location and cost context; exception identity/category; unknown-cost condition; investigation/resolution status; correction provenance without rewriting posted movement. | DOC-04 §§3, 6, 9–10; Batch 02 §§3–4; A12.38 pp. 2–3. | Unknown HPP remains NULL; exception does not mutate posted ledger directly FIX conceptually. Exception code taxonomy, status, resolved-cost impact, actor/time, relation to source movement/layer and correction chain REVIEW. |
| 12 | `inventory_reservations` | Tenant/business context; reservation identity; source document context represented conceptually by source type and source ID; expiry/TTL; reservation lifecycle; originating request/idempotency context. | DOC-04 §§3, 5, 9–10; Batch 02 §§3–5; A12.02 Alternative A as cited by DOC-04; A12.38 pp. 2–3. | Reservation reduces available, not physical on-hand; release creates no movement; source_type/source_id belongs on header under Alternative A with strict server validation FIX conceptually. Exact type vocabulary, source validation, TTL semantics, cancellation/expiry states, uniqueness, idempotency and FK strategy REVIEW. |
| 13 | `inventory_reservation_items` | Parent reservation context; product/variant/location; requested/reserved/fulfilled/released quantity groups; optional batch allocations; fulfillment/release event history; active reserved quantity calculation. | DOC-04 §§3, 5, 9–10; Batch 02 §§3–5; A12.38 pp. 2–4. | Active reserved = reserved − fulfilled − released; allocation may span multiple batches; fulfillment and physical stock update atomic FIX conceptually. Exact event/history model, allocation rows, quantity caps, partial fulfillment, concurrency/locking, batch FK and idempotency REVIEW. |
| 14 | `inventory_cost_layers` | Tenant/business context; product/variant and inventory-location costing pool; originating receipt/source identity; cost-layer identity; received/base quantity; remaining quantity; unit/total cost context; transfer/transit identity continuity; landed-cost correction lineage. | DOC-04 §§3, 6, 8–10; Batch 02 §§3–5; A12.37.10.1; A12.38 pp. 2–4, 11–12. | Batch differs from cost layer; FIFO consumes layers; MWA pool is Business + Product/Variant + Inventory Location; transfer preserves layer identity; unknown cost NULL FIX conceptually. Exact identity tuple, received/remaining quantity representation, cost precision, source uniqueness, landed-cost correction and transit/location mapping REVIEW. |
| 15 | `inventory_cost_layer_consumptions` | Tenant/business context; consumed cost-layer identity; originating movement/allocation context; original consumption quantity/cost; eligible negative allocation reference; partial compensation lineage; idempotency context. | DOC-04 §§3, 6, 8–10 and 12 (SC-08); Batch 02 §§3–5; A12.17 Alternative 1; A12.38 pp. 11–12. | Eligible negative allocation→one original consumption; non-consumption allocation→zero consumption; original consumption→multiple partial compensations; aggregate compensation cannot exceed eligible original quantity; posted records immutable FIX at conceptual/cardinality level. Exact FK, quantity/cost math, compensation source link, over-consumption guard, locking, idempotency, NULL cost and tests TODO. |
| 16 | `stock_transfer_shipments` | Tenant/business context; parent transfer identity; physical shipment identity/sequence; dispatch event context; transit state; repeated/partial receipt lifecycle; cancellation/return/loss disposition evidence. | DOC-04 §§3, 7–10; Batch 02 §§3–5; A11 F03–F06; A12.38 pp. 2–3. | One record represents one physical shipment; one transfer may have many shipments; partial/repeated receipt; dispatch/receipt/return/loss are separate auditable events FIX conceptually. Shipment sequence/identity, event model, status transition, receipt relations, cancellation evidence, lock/idempotency and proof retention REVIEW. |
| 17 | `stock_transfer_shipment_items` | Tenant/business context; parent shipment and transfer-item context; product/variant; optional physical batch; dispatched/base quantity; repeated/partial receipt quantity/event context; return/loss/confirmed disposition; inventory movement and cost-layer reconciliation links; conversion snapshot. | DOC-04 §§3, 7–10; Batch 02 §§3–5; A11 F04/F05/F07/F08; A12.38 pp. 2–3. | Shipment detail ties to transfer item; base quantity and conversion snapshot; receipt may repeat/partial; disposition through receipt/return/confirmed loss; movement/layer reconciliation FIX conceptually. Event/detail cardinality, movement one-to-many relation, caps, batch/cost-layer links, reconciliation, constraints and idempotency REVIEW. |

### 17.3 Cross-entity logical information groups

| Cross-entity concern | Logical information that must be represented | Evidence-bounded rule | Remaining physical decision |
|---|---|---|---|
| Tenant ownership | Business context on every tenant-owned entity and tenant-consistent parent/child references | Tenant isolation is a design requirement; related records preserve business context | Exact PK/FK/composite-FK tuples and server/RLS enforcement remain OPEN |
| Product identity | Product and optional variant context where an entity is product-specific | Inventory balance and MWA grain includes Business + Product/Variant + Inventory Location | Nullable-variant identity and uniqueness strategy OPEN |
| Location identity | Inventory location, source/destination location, and virtual transit context where applicable | MWA pool is location-scoped; transfers use virtual transit | Location key tuples and transit representation OPEN |
| Physical batch | Optional batch identity and batch-specific quantities where physical batch tracking applies | FEFO selects physical batch; batch identity differs from cost-layer identity | Batch key, expiry/status fields, batch allocation constraints OPEN |
| Quantity | Entered quantity, base quantity, signed delta, reserved/fulfilled/released/dispatched/received/returned/lost quantities as relevant | Decimal/NUMERIC, not floating point; NULL and zero retain distinct meanings where specified | Precision/scale, conversion rounding, sign convention details and CHECK expressions OPEN |
| Cost | Cost layer, unit/total cost, remaining quantity, unknown-cost state and compensation | Unknown HPP/cost remains NULL, not zero; MWA/FIFO scopes remain fixed | Currency model, precision/scale, landed cost and cost math OPEN |
| Event/source identity | Source document, event kind, posting/dispatch/receipt/reversal lineage, actor/time and retry identity where required | Posted records immutable; corrections by reversal/compensation; idempotency principle | Registry and FK design, event schema, idempotency key/retention OPEN |
| Projection/reconciliation | On-hand/reserved/available, batch balance, transfer summary, stock-count variance and cost-layer remaining quantity | Projection is rebuildable and derived from ledger/events | Rebuild strategy, watermarks, concurrency and reconciliation tests OPEN |
| Lifecycle/approval | Header/item/shipment state, posting, approval, investigation, closure and disposition | A11 FIX only at architecture/business-rule scope | Exact technical enums, transitions, authorization and audit retention OPEN |

### 17.4 Attribute acceptance and unresolved-field protocol

Each logical group in §17.2 must be decomposed in a later physical dictionary review using these columns, without presuming values:
- logical attribute / business meaning;
- applicable entity and scope;
- source locator and exact decision scope;
- evidence class (primary decision, audit, derived mapping, working master);
- conceptual status;
- technical specification status;
- implementation/evidence status;
- proposed physical representation (only when a controlling source supports it);
- unresolved questions and closure evidence.

The following remain explicitly **NOT ESTABLISHED** unless a controlling source is recovered:
- exact SQL column names and whether generic audit fields exist on every entity;
- PKs, FK tuples and composite tenant FK tuples;
- nullability/defaults and final enum/check vocabularies;
- decimal precision/scale, currency representation and conversion rounding;
- exact unique keys/indexes, including nullable-variant strategy;
- movement source registry physical structure and reservation source validation mechanism;
- event model, idempotency keys/retention, lock order, atomic transaction boundaries and retry behavior;
- physical RLS/server authorization, test execution and enforcement evidence.

### 17.5 Result and next sequence

- Logical-information mapping: **COMPLETE — PARTIAL**, for all 17 conceptual entities using the sources and locators listed above.
- Approved physical field dictionary: **NOT COMPLETE**.
- Exact physical attribute names/types/nullability/defaults: **OPEN / REVIEW / TODO**.
- PK/FK/composite-FK tenant-integrity matrix: **NOT STARTED**; next work item.
- UNIQUE/CHECK/index matrix: **NOT STARTED**.
- Dependencies closed by this matrix: **none**.
- FIX decisions changed: **none**.
- `inventory_cost_layer_movements` remains candidate only; baseline remains 17 entities.
- Source gaps and readiness statuses remain unchanged.



## 18. Tenant-safe relationship and integrity matrix — inventory & costing (18 November 2026)

### 18.1 Purpose, method and evidence boundary

This addendum advances the next work item in §§16.5 and 17.5. It maps only relationships and cardinalities explicitly present in the DOC-04 §8 A12.39 conceptual relationship specification, cross-checked against:

- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–8, especially §§2–4 (A11 and 17-entity consistency; audit update, not implementation evidence).
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§3–5 and 7–8 (DRAFT mapping; supporting evidence only).
- DOC-04 §8 and §10 (working-master consolidation of A12.39 conceptual relations and physical enforcement gaps).

**This is a conceptual relationship and integrity matrix, not a physical FK specification.** No SQL identifiers, PK/FK column tuples, referenced unique keys, nullability, ON DELETE/UPDATE actions, indexes, deferrability, or enforcement mechanisms are approved here. The words “parent” and “child” below describe conceptual direction only. Tenant scope is required, but the exact composite-key tuple is not established by the reviewed sources.

A12.39 closes only conceptual relationship/constraint specification. Physical FK/composite FK, UNIQUE/CHECK, delete/update behavior, indexes, RLS, locking, atomicity, idempotency enforcement and test evidence remain OPEN/UNVERIFIED.

### 18.2 Explicit conceptual relationship matrix

| ID | Conceptual parent / source | Conceptual child / target | Cardinality / invariant supported | Source locator | Key tuple / tenant FK status | Referential action |
|---|---|---|---|---|---|---|
| REL-01 | `inventory_adjustments` | `inventory_adjustment_items` | 1:N | DOC-04 §8; A12.39 | OPEN — no physical key tuple established; tenant consistency required | OPEN — not specified |
| REL-02 | `stock_counts` | `stock_count_items` | 1:N | DOC-04 §8; A12.39 | OPEN — no physical key tuple established; tenant consistency required | OPEN — not specified |
| REL-03 | `stock_transfers` | `stock_transfer_items` | 1:N | DOC-04 §8; A12.39; A11 F01–F02 | OPEN — no physical key tuple established; same-tenant transfer is a conceptual rule | OPEN — not specified |
| REL-04 | `stock_transfers` | `stock_transfer_shipments` | 1:N | DOC-04 §8; A12.39; A11 F03–F06 | OPEN — no physical key tuple established; same-tenant scope required | OPEN — not specified |
| REL-05 | `stock_transfer_items` | `stock_transfer_shipment_items` | One transfer item may be split across multiple shipment items | DOC-04 §8; A12.39; A11 F05–F07 | OPEN — no physical key tuple established; tenant consistency required | OPEN — not specified |
| REL-06 | `stock_transfer_shipments` | `stock_transfer_shipment_items` | 1:N | DOC-04 §8; A12.39; A11 F06 | OPEN — no physical key tuple established; tenant consistency required | OPEN — not specified |
| REL-07 | `stock_transfer_shipment_items` | Receipt events (event/detail structure not approved as one of the 17 entities) | 1:N; repeated/partial receipt allowed | DOC-04 §8; A12.39; A11 F04–F05 | OPEN — receipt-event entity/key model not established | OPEN — not specified |
| REL-08 | Posted receipt detail (physical entity/record shape unresolved) | `inventory_movements` | Exactly one inventory movement per posted receipt detail | DOC-04 §8; A12.10 FIX conceptual; A12.39 | OPEN — exact receipt-detail locator and FK tuple not established here | OPEN — not specified |
| REL-09 | Posted return detail (physical entity/record shape unresolved) | `inventory_movements` | Exactly one inventory movement per posted return detail | DOC-04 §8; A12.11 FIX conceptual; A12.39 | OPEN — exact return-detail locator and FK tuple not established here | OPEN — not specified |
| REL-10 | `inventory_movements` | Cost-layer allocations (allocation structure not approved as an entity in the 17-entity baseline) | 1:N | DOC-04 §8; A12.39; A12.17 context | OPEN — allocation structure/key tuple unresolved; do not create an 18th table by inference | OPEN — not specified |
| REL-11 | `inventory_cost_layers` | Cost-layer allocations (allocation structure not approved as an entity in the 17-entity baseline) | 1:N | DOC-04 §8; A12.39; A12.17 context | OPEN — allocation structure/key tuple unresolved | OPEN — not specified |
| REL-12 | Eligible negative allocation | `inventory_cost_layer_consumptions` (original consumption) | Exactly 1:1 | DOC-04 §8; A12.17 Alternative 1 FIX; Update Audit v0.2 §§3–4 | Conceptual cardinality FIX; physical FK/unique tuple OPEN | OPEN — not specified |
| REL-13 | Non-consumption allocation | `inventory_cost_layer_consumptions` | Exactly 1:0 — zero consumption | DOC-04 §8; A12.17 Alternative 1 FIX; Update Audit v0.2 §§3–4 | Conceptual zero-consumption invariant FIX; physical enforcement OPEN | OPEN — not specified |
| REL-14 | Original `inventory_cost_layer_consumptions` | Compensation records (physical compensation representation unresolved) | 1:N partial compensations; aggregate compensation cannot exceed eligible original quantity | DOC-04 §8; A12.17 Alternative 1 FIX; Update Audit v0.2 §§3–4 | Conceptual cardinality/cap FIX; physical FK and cap enforcement OPEN | OPEN — not specified |
| REL-15 | `inventory_reservations` | `inventory_reservation_items` | 1:N | DOC-04 §8; A12.39; A02 Alternative A | OPEN — no physical key tuple established; tenant consistency required | OPEN — not specified |
| REL-16 | `inventory_reservation_items` | Physical batch allocations / `inventory_batches` | Multiple physical-batch allocations may exist for one reservation item | DOC-04 §8; A12.39; Batch 02 §§3–5 | OPEN — allocation structure, batch FK tuple and tenant scope tuple unresolved | OPEN — not specified |

**Interpretation guardrails:**
- REL-07, REL-08, REL-09, REL-10, REL-11, REL-13 and REL-14 refer to event/allocation/compensation concepts whose physical record structures are not fully established by this matrix. They must not be silently converted into new approved entities or columns.
- The “exactly 1:1”, “exactly 1:0” and “1:N” values are conceptual cardinalities, not proof of UNIQUE/FK enforcement.
- No deletion or update policy can be inferred from immutability or auditability principles alone.

### 18.3 Tenant-scope and composite-FK integrity rules

| Rule ID | Required conceptual integrity | Evidence | Physical specification status |
|---|---|---|---|
| TEN-01 | All tenant-owned inventory/costing records retain Business ownership context | DOC-04 §§9–10; Batch 02 §3 item 12; Master Checklist v2.0 §4 | Requirement established; exact tenant column on each entity and PK tuple OPEN |
| TEN-02 | Parent/child references must not cross Business boundaries | Batch 02 §3 item 12; DOC-04 §10 | Conceptual requirement established; exact composite FK tuples OPEN |
| TEN-03 | Stock transfer source and destination belong to the same tenant; source differs from destination | DOC-04 §3 entity 9; Batch 02 §4 entity 9; A11 baseline | Conceptual rule established; location key tuple and enforcement OPEN |
| TEN-04 | MWA costing pool is scoped by Business + Product/Variant + Inventory Location; no cross-location pooling | DOC-04 §6; A12.37.10.1; Update Audit v0.2 §3 | Conceptual scope FIX; physical key/unique tuple OPEN |
| TEN-05 | Physical batch identity and cost-layer identity remain distinct | DOC-04 §§3, 6; Batch 02 §§3–4 | Conceptual distinction FIX; exact independent key structures OPEN |
| TEN-06 | Reservation source uses A02 Alternative A (`source_type/source_id` on reservation header) with strict server validation; do not conflate with A01 movement source registry | DOC-04 §5; Batch 02 §§5.3–5.4; Update Audit v0.2 §§3–6 | Conceptual placement FIX; polymorphic validation and physical FK strategy OPEN |
| TEN-07 | Shipment, receipt, return and loss records must retain tenant-consistent lineage and reconcile to transfer/ledger events | DOC-04 §§7–8; A11 F04–F09 | Conceptual lifecycle FIX; physical tenant and event-link enforcement OPEN |

The project-level design calls for composite foreign keys and server validation to preserve `business_id` consistency. However, the reviewed evidence does **not** establish whether every table uses a simple key, composite primary key, alternate unique key, or a particular ordered FK tuple. Do not invent a tuple such as (`business_id`, `id`) or promote generic `id`/`business_id` columns to approved physical definitions.

### 18.4 Entity coverage and relationship gaps

| Entity | Explicit relationship coverage in A12.39 matrix | Status / missing relationship evidence |
|---|---|---|
| `inventory_batches` | Referenced as physical batch allocation target | Allocation entity/key/FK unresolved |
| `inventory_movements` | Receipt/return target; parent of cost-layer allocations | Source registry and allocation structure/key unresolved |
| `inventory_balances` | No explicit parent/child relation in A12.39 list | Projection grain and link to ledger/batch projection require separate source-backed specification |
| `inventory_batch_balances` | No explicit parent/child relation in A12.39 list | Parent-balance and batch relationship is described as reconciliation; physical FK not established |
| `inventory_adjustments` | Parent of adjustment items | Conceptual 1:N; physical keys/actions OPEN |
| `inventory_adjustment_items` | Child of adjustment header; movement generation rule | Movement-link cardinality/physical relation not established in A12.39 list |
| `stock_counts` | Parent of stock-count items | Conceptual 1:N; physical keys/actions OPEN |
| `stock_count_items` | Child of stock-count header | Movement/adjustment correction linkage requires source locator |
| `stock_transfers` | Parent of transfer items and shipments | Conceptual 1:N; physical keys/actions OPEN |
| `stock_transfer_items` | Parent of shipment items | Split 1:N conceptual; physical keys/actions OPEN |
| `inventory_cost_exceptions` | No explicit parent/child relation in A12.39 list | Source movement/layer linkage remains REVIEW/OPEN |
| `inventory_reservations` | Parent of reservation items | Conceptual 1:N; physical keys/actions OPEN |
| `inventory_reservation_items` | Child of reservation; may allocate across physical batches | Allocation structure/key/FK unresolved |
| `inventory_cost_layers` | Parent of cost-layer allocations | Allocation structure/key/FK unresolved |
| `inventory_cost_layer_consumptions` | Original consumption and compensation cardinalities | Compensation physical representation and key/action unresolved |
| `stock_transfer_shipments` | Parent of shipment items | Conceptual 1:N; physical keys/actions OPEN |
| `stock_transfer_shipment_items` | Child of shipment; parent concept for receipt events | Receipt event record shape and movement relation unresolved |

Absence from the A12.39 relationship list is not evidence that no relationship exists. It means this pass did not establish a source-backed relationship locator for that edge. Keep it OPEN rather than infer it.

### 18.5 Physical key and referential-action disposition

The following are deliberately **NOT ESTABLISHED** by the reviewed evidence and remain OPEN/TODO:

- Exact primary-key columns and whether any entity uses composite PK.
- Exact FK and composite-FK column tuples, referenced candidate keys and ordering.
- Whether tenant key is physically repeated in every child record.
- Exact nullable/optional FK behavior, including optional supplier and batch references.
- ON DELETE / ON UPDATE actions (RESTRICT, CASCADE, SET NULL or other).
- Deferrability, validation timing and handling of historical rows.
- UNIQUE constraints needed to enforce 1:1 cardinality and prevent duplicate event links.
- Physical allocation/receipt/compensation entity structures and their keys.
- RLS policy, server-side validation, authorization and enforcement evidence.
- Executed constraint, concurrency, idempotency and tenant-isolation tests.

No dependency is closed by this matrix. No FIX decision is changed. No physical schema or implementation is approved. `inventory_cost_layer_movements` remains a candidate only; baseline remains 17 conceptual entities.

### 18.6 Result and next sequence

- Conceptual relationship inventory: **COMPLETE — PARTIAL**, limited to the explicit A12.39 relationship list.
- Tenant-integrity requirements: **DOCUMENTED — CONCEPTUAL**; physical tenant key/FK enforcement OPEN.
- Physical PK/FK/composite-FK tuples: **OPEN / NOT ESTABLISHED**.
- Delete/update behavior: **OPEN / NOT ESTABLISHED**.
- Unmapped entity relationships and event/allocation structures: **OPEN / REVIEW**.
- Dependencies closed: **none**.
- FIX decisions changed: **none**.
- Next DOC-04 task: UNIQUE/CHECK/index matrix, retaining all unresolved key tuples and tenant enforcement gaps as explicit dependencies.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 19. UNIQUE / CHECK / index candidate matrix — inventory & costing (18 November 2026)

### 19.1 Scope and evidence boundary

This section advances the next work item in Master Checklist v2.0 §14.3 and DOC-04 §§9–10, §18. It organizes source-backed invariants and the physical gaps that a future specification must resolve across the 17-entity baseline.

Reviewed sources:
- DOC-04 reconstructed working master v0.1, §§3, 8–10 (17 entity responsibilities, conceptual invariants and explicit physical gaps).
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–4 (A11/A12 status; physical UNIQUE/CHECK/index remain REVIEW/TODO).
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§3–5 and 7 (entity baseline, formulas, A01–A12 open technical findings).
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D (physical field/key/index/delete/enforcement details may only be approved with authoritative schema/specification evidence; conceptual scenarios are not database tests).
- A12.39 conceptual relationship/constraint specification, as cross-referenced in DOC-04 §8 and §18.

**This is a candidate and gap register, not an approved physical constraint/index design.** It does not prescribe SQL expressions, physical column names, data types, nullability, index method/order, partial-index predicates, included columns, collation, deferrability, or migration operations. “Candidate” means a design question to resolve, not an instruction to implement. No index is declared required unless an authoritative source establishes its exact key and semantics.

### 19.2 Constraint family disposition

| Family | Conceptual requirement / evidence | Physical disposition |
|---|---|---|
| UNIQUE — entity identity | Identity uniqueness is needed where the domain requires a unique batch, source event, allocation/consumption, or projection grain. DOC-04 §3 and A12.38 D; A09 remains REVIEW. | Exact unique key, scope, null semantics and duplicate policy OPEN. |
| UNIQUE — idempotency | A09 requires a stable idempotency standard across client, server, source document and movement to prevent duplicate posting. Batch 02 §4 A09. | Key composition, namespace, retention/replay window and conflict response OPEN. No specific column tuple approved. |
| UNIQUE — nullable variant/projection grain | `inventory_balances` and `inventory_batch_balances` have nullable-variant / nullable-key uniqueness gaps. DOC-04 §3; Batch 02 §4. | NULL equivalence and uniqueness strategy OPEN; do not assume ordinary UNIQUE semantics or invent a partial-index predicate. |
| UNIQUE — allocation/consumption cardinality | A12.17 Alternative 1 FIX: eligible negative allocation maps to exactly one original consumption; non-consumption allocation maps to zero; original consumption may have multiple partial compensations. | Exact allocation record structure and unique key OPEN; no assumption that an unapproved bridge table exists. |
| CHECK — quantity non-negativity / caps | Quantity invariants include active reservation = reserved − fulfilled − released; available = on-hand − reserved; remaining layer quantity cannot be over-consumed; transfer/shipment/receipt dispositions must reconcile. | Per-record vs aggregate enforcement, bounds, rounding and permitted negative values by event type OPEN. |
| CHECK — mutually consistent states | A11 F01–F03 and F07–F09 distinguish process status, closure outcome, shipment status and event-derived summaries. | Enum values, legal transition matrix and CHECK scope OPEN; event/aggregate rules cannot be reduced to a guessed row-level CHECK. |
| CHECK — source and location validity | Transfer source and destination are different and belong to same Business; A01 movement source and A02 reservation source remain distinct. | Physical representation and server validation strategy OPEN. |
| CHECK — cost and NULL semantics | Unknown cost remains NULL, not zero; posted cost snapshots are not silently rewritten. Batch 02 §§3–5; A12.37. | Precision/scale, currency, nullable rules and valid cost bounds OPEN. |
| INDEX — operational lookup | Indexes may be needed for tenant-scoped operational lookups, lifecycle/event retrieval, reconciliation and audit. A12.38 Appendix D and A12 A12 row identify index matrix as TODO. | Query inventory, predicates, sort order, selectivity and measured workload not provided; no concrete index approved. |
| INDEX — ledger/projection reconciliation | Movement ledger is source of truth; balances and batch balances are rebuildable projections; transfer summaries derive from posted events. Batch 02 §3 and §4. | Reconciliation access paths and projection grain OPEN; avoid indexing a guessed schema. |
| INDEX — FIFO / FEFO selection | FEFO chooses physical batches; FIFO selects cost layers; MWA pool is scoped by Business + Product/Variant + Inventory Location. | Exact ordering fields, tie-breaker, tenant key and query plans OPEN. |
| INDEX — audit/event lineage | Dispatch, receipt, return, loss and compensation are distinct auditable events; repeated/partial receipts are allowed. A11 F04–F08; A10 B. | Event identity, lineage key and retention/query requirements OPEN. |

### 19.3 Per-entity candidate and gap matrix (17 entities)

| Entity | Source-backed invariant to preserve | UNIQUE / CHECK candidate questions (not approved definitions) | Index candidate workload (not approved definitions) | Status |
|---|---|---|---|---|
| `inventory_batches` | Physical batch identity is distinct from cost layer; FEFO selects eligible physical batch; expired/blocked stock is unavailable for normal transactions (Batch 02 §4). | What source/product/location identity makes a batch unique? Which status/expiry combinations are valid? | Tenant/product/location batch selection ordered by FEFO; expiry/status filtering. | REVIEW — exact keys, status domain and index OPEN |
| `inventory_movements` | Immutable posted ledger; signed base-quantity delta; source of truth; corrections via reversal/compensating movement (Batch 02 §§3–4). | A09 idempotency uniqueness across client/server/source document/movement; valid event-specific sign and quantity rules. | Tenant/location/product/time ledger retrieval; source-document lineage; reconciliation and reversal lookup. | REVIEW — A09 key standard and physical fields OPEN |
| `inventory_balances` | Rebuildable projection; available = on-hand − reserved; grain includes product/variant/location (Batch 02 §§3–4). | Projection-grain uniqueness, especially nullable variant behavior; available quantity consistency. | Tenant/product/variant/location balance lookup and rebuild/reconciliation. | REVIEW — nullable unique strategy and concurrency OPEN |
| `inventory_batch_balances` | Batch projection reconciles to parent product/location balance; separate from parent balance (DOC-04 §3; Batch 02 §4). | Batch/location projection grain uniqueness and nullable-key semantics; consistency with batch identity. | Tenant/location/product/batch lookup and parent-vs-batch reconciliation. | REVIEW — unique grain and allocation/concurrency OPEN |
| `inventory_adjustments` | No stock change before posting; posted adjustment immutable; correction by reversal (DOC-04 §3). | Source/document identity and posting idempotency; allowed process/outcome combinations. | Tenant/status/time review queue; document-to-posting audit lookup. | REVIEW — workflow/status and idempotency details OPEN |
| `inventory_adjustment_items` | Posted item produces movement; quantity conversion snapshot and signed base delta retained (DOC-04 §3). | Item identity within adjustment; zero/rounding and valid signed quantity rules; movement generation duplicate protection. | Parent adjustment detail retrieval; item-to-movement reconciliation. | REVIEW — zero/rounding and unique rules OPEN |
| `stock_counts` | Snapshot differs from count start; post-snapshot movements must be accounted for; recount must not overwrite history (DOC-04 §3; A05). | Count scope/identity and snapshot/cutoff consistency; legal status/outcome transitions. | Tenant/location/status/snapshot review; cutoff and recount history retrieval. | REVIEW — A05 cutoff/watermark and partial posting OPEN |
| `stock_count_items` | NULL means not counted; zero is a valid counted result; variance = counted − expected; expected accounts for movements after snapshot (DOC-04 §3; Batch 02 §3). | Distinguish NULL from zero; one item per approved count scope grain; recount/version uniqueness and variance consistency. | Parent count/item lookup; snapshot-to-movement reconciliation; recount history. | REVIEW — final grain, recount history and constraints OPEN |
| `stock_transfers` | Same Business; source location differs from destination; virtual transit; transfer closure only after valid dispositions/reconciliation (A11 F01–F09; Batch 02 §4). | Transfer identity; source ≠ destination; status separated from closure outcome; legal status transitions. | Tenant/status/source/destination/time operational queue; open transfer and reconciliation lookups. | REVIEW — workflow, authorization and closure constraints OPEN |
| `stock_transfer_items` | One transfer item may split across shipments; dispatched/received totals are derived; quantities must reconcile (A11 F05–F08; Batch 02 §4). | Item identity within transfer; dispatched/received/disposition caps relative to requested quantity; no duplicate posting. | Transfer-to-item retrieval; remaining/unshipped quantity and reconciliation. | REVIEW — nullable unique keys, caps and FK context OPEN |
| `inventory_cost_exceptions` | Unknown HPP/cost remains NULL; exception does not directly mutate posted movement (DOC-04 §3; Batch 02 §4). | Exception identity/source and status/resolution consistency; NULL cost must not be coerced to zero. | Unresolved exception queue; source movement/layer trace and resolution audit. | REVIEW — exception code/status and resolved-cost impact OPEN |
| `inventory_reservations` | Reservation does not change physical stock; release creates no movement; fulfillment reduces stock and reservation atomically; source uses A02 Alternative A (Batch 02 §§3–5). | Reservation source identity/idempotency; expiry/status validity; source_type/source_id validation. | Tenant/source/status/expiry queue; reservation lifecycle and fulfillment lookup. | REVIEW — source validation and TTL OPEN |
| `inventory_reservation_items` | Active reserved = reserved − fulfilled − released; one product may allocate across multiple physical batches (DOC-04 §3; Batch 02 §4). | Quantity non-negativity and caps; allocation identity; prevent fulfilled + released exceeding reserved; multi-batch allocations supported. | Reservation item to batch allocation; available/reserved quantity lookup by tenant/location/product. | REVIEW — event history, allocation grain and concurrency OPEN |
| `inventory_cost_layers` | FIFO layer identity differs from physical batch; unknown cost is not zero; identity retained through transfer (DOC-04 §3; Batch 02 §§3–4). | Layer source identity uniqueness; remaining quantity cannot be negative; distinguish unknown cost NULL from zero. | FIFO eligible-layer retrieval by tenant/product/location and source lineage; transfer/reconciliation. | REVIEW — source uniqueness, transfer and landed-cost correction OPEN |
| `inventory_cost_layer_consumptions` | One movement may consume multiple layers; consumption immutable; cannot exceed remaining layer; A12.17 cardinality and compensation cap apply (Batch 02 §4; Update Audit §3). | Eligible allocation 1:1 original consumption; non-consumption allocation 1:0; total partial compensation ≤ eligible original quantity; idempotency. | Movement-to-consumption, layer consumption history and compensation lineage. | REVIEW — allocation record shape, key, caps and locking OPEN |
| `stock_transfer_shipments` | One shipment = one physical dispatch; separate physical shipments require separate shipment records; shipment status differs from transfer process status (A11 F03, F06). | Shipment identity/sequence within transfer; status transitions; one physical dispatch per shipment. | Transfer shipment listing by tenant/status; dispatch and lifecycle audit. | REVIEW — status, sequence, cancellation and dispatch evidence OPEN |
| `stock_transfer_shipment_items` | Repeated/partial receipt allowed; one shipment item may have multiple receipt events; receipt/return/loss dispositions reconcile (A11 F04–F09). | Shipment-item identity; cumulative receipt/return/loss caps against dispatched quantity; prevent duplicate receipt posting while allowing repeated partial events. | Shipment-item event history; pending receipt, reconciliation and investigation lookup. | REVIEW — receipt event structure, caps and idempotency OPEN |

### 19.4 Candidate aggregate invariants requiring explicit enforcement design

These are conceptual invariants to preserve; they are **not** directly implementable as ordinary row-level CHECK constraints without a separately approved transaction/aggregate enforcement design.

| ID | Invariant | Evidence | Unresolved enforcement question |
|---|---|---|---|
| AGG-01 | `quantity_available = quantity_on_hand - quantity_reserved` | Batch 02 §3 | Projection derivation, consistency checks and concurrency/atomic update design. |
| AGG-02 | `active_reserved = reserved - fulfilled - released` | Batch 02 §3; DOC-04 §3 | Event history, non-negative bounds and atomic fulfillment/release enforcement. |
| AGG-03 | `remaining_layer_quantity = received_quantity - valid_consumption_quantity` | Batch 02 §3 | Layer allocation and transfer semantics; avoid double-counting movements and consumption. |
| AGG-04 | Aggregate partial compensation must not exceed eligible original consumption quantity | A12.17 Alternative 1 FIX; Update Audit §3 | Cross-record cap enforcement, lock scope and idempotent posting. |
| AGG-05 | Shipment-item receipts/returns/loss dispositions must reconcile to dispatched quantity before transfer closure | A11 F04–F09; Batch 02 §4 | Event model, investigation hold, closure gate and concurrency. |
| AGG-06 | Batch balances must reconcile to parent product/variant/location balances for batch-tracked products | A07 REVIEW; Batch 02 §4 | Reconciliation grain, timing, discrepancy handling and repair audit. |
| AGG-07 | MWA pool is scoped by Business + Product/Variant + Inventory Location; no cross-location pooling | A12.37.10.1 FIX; Batch 02 §3 | Physical pool key and concurrency-safe update strategy. |

### 19.5 Index selection evidence still required

Before any physical index can be specified, obtain or approve:
- Authoritative physical field/key dictionary and PK/FK/composite-FK tuples for all 17 entities.
- Actual query patterns, filters, joins, sort orders, pagination and tenant-scoping behavior for operational, reconciliation and audit workloads.
- Required uniqueness semantics for nullable variant keys and source/idempotency identities.
- FEFO/FIFO deterministic ordering fields and tie-breaker decision; do not assume an ordering field.
- Expected row volumes, write frequency, retention and update patterns to assess index cost.
- Evidence for receipt-event, allocation and compensation record structures; do not infer new entities.
- Explicit decision on which candidate constraints are row-local CHECK, UNIQUE, FK, server/transaction validation, or derived projection invariant.

No index names, key columns, partial predicates, expressions, included columns or sort directions are specified in this section.

### 19.6 Result and next sequence

- Candidate constraint/invariant inventory: **COMPLETE — PARTIAL**, based on available conceptual sources.
- Per-entity coverage: **17/17 entities reviewed at conceptual level**; this does not mean physical design accepted.
- Concrete physical UNIQUE definitions: **OPEN / NOT ESTABLISHED**.
- Concrete physical CHECK expressions: **OPEN / NOT ESTABLISHED**.
- Concrete physical index definitions: **OPEN / NOT ESTABLISHED**.
- A09 idempotency standard: **REVIEW / OPEN**.
- Nullable variant uniqueness: **REVIEW / OPEN**.
- A12 aggregate constraints, concurrency and atomicity: **REVIEW / OPEN**.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No schema, SQL, DDL, DML, migration, database, application, CI workflow, Vercel, deployment or Production changes.
- Next DOC-04 work package: quantity/cost precision and conversion matrix, grounded in A12.37; preserve unknown numeric precision/scale, rounding and conversion rules as OPEN unless source locators establish them.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 20. Quantity / cost precision and conversion matrix — A12.37 (18 November 2026)

### 20.1 Scope and evidence boundary

This section records the source-backed conceptual numeric rules relevant to the 17-entity inventory/costing baseline and separates them from physical or operational parameters that remain unresolved. It is a documentation matrix, not a physical data dictionary, executable numeric specification, migration, or approval to implement.

Reviewed sources:
- `Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v4_A12.37_Numeric_Policy.docx`, Addendum C §§C.1–C.10 (13 November 2026), especially C.3–C.9.
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§3–5 and 7–8.
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–4.
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D, which retains physical numeric types, precision/scale and maximum capacity as TODO.
- DOC-04 §§3, 16–19, including the 17-entity baseline and prior physical-specification gaps.

A12.37 is **CLOSED — CONCEPTUAL NUMERIC POLICY BASELINE** only. Physical numeric types, precision/scale, capacity, field definitions, conversion parameters, rounding implementation boundaries, constraints, concurrency/atomicity/idempotency enforcement and execution of the 60 conceptual scenarios remain OPEN / UNVERIFIED. No source reviewed here authorizes choosing arbitrary decimal digits, database types or operational defaults.

### 20.2 Source-backed conceptual numeric rules

| ID | Area | Established conceptual rule | Evidence locator | Physical / operational disposition |
|---|---|---|---|---|
| NUM-01 | Quantity and base unit | Product base unit is the canonical stock reference. Quantity precision follows the product base unit. Discrete units may require integers; measurable units may accept fractions according to operational precision. | A12.37 Addendum C §C.3, policy 1 | Per-product/base-unit precision configuration, numeric type, scale and capacity remain REVIEW/TODO. |
| NUM-02 | Unit conversion | Conversion factors use high internal precision. Invalid quantities are rejected; they must not be silently rounded. Quantity is reconciled in base units. | A12.37 Addendum C §§C.3 and C.8 | Exact factor values, factor precision, allowed conversion graph, validation tolerances and conversion rounding boundary are OPEN. |
| NUM-03 | Cost and cost layers | Total cost is the source of truth for a cost layer. Unit cost is derived from total cost / quantity at high internal precision. Consumption cost is calculated at high internal precision and residuals are reconciled deterministically. | A12.37 Addendum C §C.3, policy 2 | Numeric type, precision/scale, maximum capacity, division behavior and exact rounding stage are OPEN. |
| NUM-04 | MWA / FIFO | MWA is default; FIFO is alternative. MWA pool is Business + Product/Variant + Inventory Location. Different locations are not combined. FIFO consumes eligible layers in FIFO order. | A12.37 Addendum C §C.4; A12.37.10.1 | Physical pool keys, eligible-layer ordering fields, tie handling outside LRM, arithmetic implementation and concurrency remain OPEN. |
| NUM-05 | Transfers and costing | Internal transfer carries source cost to destination; it is not FIFO consumption and does not create new purchase cost. After receipt, destination MWA is recalculated from destination-location quantity and total cost. | A12.37 Addendum C §C.4 | Exact transfer value precision, posting arithmetic and rounding boundary remain OPEN. |
| NUM-06 | Landed cost | Direct allocation is preferred when a cost is specifically identifiable. Shared cost uses a relevant, verifiable basis (examples include weight, volume, goods/customs value or quantity). If no suitable basis is verifiable, hold for REVIEW; do not invent a basis. Total allocation must equal source cost. | A12.37 Addendum C §C.5 | Cost classification, operational basis selection, allocation parameters and enforcement remain REVIEW/TODO. |
| NUM-07 | Largest Remainder Method | LRM applies to proportional allocation when its scope is suitable. Residual goes first to the largest fractional remainder; ties use stable domain-specific business identity, then unique record ID. The identity must remain stable/immutable after posting. | A12.37 Addendum C §§C.3, C.5 and C.7 | Domain-specific stable keys and physical identifiers remain TODO. LRM is not a universal rule for quantity conversion, FX determination or every numeric operation. |
| NUM-08 | Currency and FX | Source currency and functional/accounting currency remain distinct and traceable. Applied FX source, rate type, determination timestamp, actual rate and applied value are traceable; the applied rate is snapshotted on the transaction. FX differences are distinct from rounding differences. | A12.37 Addendum C §§C.3, C.6 and C.8 | Currency precision parameters, provider, rate-type policy, cut-off, fallback and FX journal policy remain REVIEW/TODO. |
| NUM-09 | Sales / discount / tax | Calculation order and rounding boundaries must be explicit. Item and transaction discounts are traceable; tax basis follows applicable tax rules, not a universal assumption. Item, discount, tax and transaction totals reconcile. | A12.37 Addendum C §C.3, policy 3 | Tax policy parameters, currency/price precision and exact rounding stages remain REVIEW. |
| NUM-10 | Rounding account | A dedicated rounding account is used only for rounding differences that genuinely require accounting adjustment. Internal allocation residuals should be resolved within the allocation where possible; FX differences remain separate. | A12.37 Addendum C §C.3, policy 6 | Account mapping, materiality and journal policy remain REVIEW/TODO. |
| NUM-11 | Bank matching tolerance | Tolerance determines whether a matching variance is accepted; it does not alter source bank-statement or internal transaction values. Accounting adjustments are separate events/journals. | A12.37 Addendum C §C.3, policy 5 | Tolerance values and policy parameters remain REVIEW. |
| NUM-12 | Posted history | Posted values and applied FX snapshots are not overwritten by later reference/configuration changes. Corrections use traceable reversal, compensation or adjustment records. | A12.37 Addendum C §§C.4–C.6; Batch 02 §§3–5 | Physical immutability enforcement, audit fields and correction implementation remain unverified. |

### 20.3 Conversion and numeric lifecycle matrix

| Lifecycle / subject | Rule supported by sources | Remaining question |
|---|---|---|
| Product/base-unit setup | Base unit is canonical; precision is configured in relation to the product/base unit. | Who may configure it, permitted effective dates/versions, and the exact precision values are not established here. |
| Unit conversion | Use high internal precision for conversion factors; reject invalid quantity; never silently round; reconcile stock in base unit. | Exact factor source, reciprocal consistency, conversion-chain policy, validation bounds and rounding boundary are OPEN. |
| Adjustment item | The conceptual item retains input quantity, conversion snapshot and signed base-quantity delta. | Exact physical fields, scale, snapshot structure and conversion-version reference are OPEN. |
| Stock count | NULL means not counted; zero is a valid counted result. Variance is compared with expected quantity and post-snapshot movements must be considered. | Final count cutoff/watermark, recount history and numeric capacity are OPEN. |
| Inventory balance | Available quantity = on-hand − reserved; quantities are reconciled in base units. | Projection precision, atomic update and reconciliation tolerance are OPEN. |
| Cost layer | Total cost is authoritative; unit cost is derived at high internal precision. Unknown cost remains NULL, not zero. | Cost-layer precision, NULL constraints, maximum values and division/rounding policy are OPEN. |
| FIFO consumption / compensation | Consumption cannot exceed eligible remaining layer quantity; partial compensation is allowed within the eligible original quantity and is traceable. | Physical numeric enforcement, lock/recheck boundary and overflow handling are OPEN. |
| MWA | Pool is location-specific; consumption valuation must equal the MWA valuation for that location; layer allocations support traceability/reconciliation and must not over-consume. | Exact numeric algorithm, rounding boundary, residual handling and concurrency-safe implementation are OPEN. |
| Transfer | Source cost travels with the internal transfer; destination MWA recalculates in the destination pool. | Exact transfer quantity/value representation and rounding point are OPEN. |
| Landed-cost allocation | Direct or relevant verifiable shared basis; total allocated cost equals source total; posted corrections create new adjustment records. | Basis parameters, eligible cost classification and exact LRM execution details are OPEN. |
| FX | Applied rate and source/time are transaction snapshots; later reference-rate changes do not rewrite posted transaction. | Currency scale, rate precision, provider/fallback and journal mapping are OPEN. |

### 20.4 Per-entity numeric relevance and gap matrix

This matrix identifies only source-supported numeric relevance; it does not approve physical columns or types.

| Entity | Numeric / conversion relevance | Evidence / unresolved disposition |
|---|---|---|
| `inventory_batches` | Batch quantity and physical-batch identity; FEFO eligibility | Base-unit quantity precision applies conceptually; physical scale and batch quantity fields OPEN. |
| `inventory_movements` | Signed base-quantity delta; immutable physical ledger | Base-unit reconciliation FIX conceptually; numeric type/scale and conversion provenance OPEN. |
| `inventory_balances` | On-hand, reserved and available projection | Available = on-hand − reserved; projection precision and concurrency OPEN. |
| `inventory_batch_balances` | Quantity projection by physical batch | Reconciliation to parent balance; precision and allocation grain OPEN. |
| `inventory_adjustments` | Posted adjustment totals and correction history | No numeric physical specification established. |
| `inventory_adjustment_items` | Input quantity, conversion snapshot, signed base delta | Conversion snapshot is source-supported; physical structure/scale OPEN. |
| `stock_counts` | Snapshot/cutoff quantities | Post-snapshot movements must be accounted for; cutoff/watermark and precision OPEN. |
| `stock_count_items` | Counted, expected and variance quantities | NULL versus zero semantics FIX; numeric capacity/scale and cutoff OPEN. |
| `stock_transfers` | Transfer-level requested/dispatched/received reconciliation | Aggregate quantities reconcile; physical numeric fields and tolerance OPEN. |
| `stock_transfer_items` | Requested and derived dispatched/received quantities | Split shipment and quantity caps are conceptual; numeric enforcement OPEN. |
| `inventory_cost_exceptions` | Unknown/resolved cost | Unknown cost remains NULL, not zero; cost precision and resolution impact OPEN. |
| `inventory_reservations` | Reserved, fulfilled and released quantity lifecycle | Active reserved = reserved − fulfilled − released; precision and atomic update OPEN. |
| `inventory_reservation_items` | Requested/reserved/fulfilled/released quantities and batch allocations | Quantity caps and multi-batch allocation are conceptual; scale/concurrency OPEN. |
| `inventory_cost_layers` | Original/remaining quantity and total/unit cost | Total cost source of truth; unit cost derived at high precision; physical numeric definitions OPEN. |
| `inventory_cost_layer_consumptions` | Consumed quantity, cost snapshot and compensation | No over-consumption; compensation cap; physical precision and locking OPEN. |
| `stock_transfer_shipments` | Dispatch and receipt quantity reconciliation | Partial/repeated receipt allowed; physical numeric fields and caps OPEN. |
| `stock_transfer_shipment_items` | Dispatched, received, returned and loss quantities | Cumulative dispositions reconcile to dispatch; numeric enforcement OPEN. |

### 20.5 Explicit non-decisions — do not infer

The reviewed A12.37 sources do **not** establish:
- A universal decimal precision/scale (for example, a fixed number of decimal places) for quantity, unit cost, total cost, price, tax, currency or FX.
- A database numeric type, maximum digits, maximum magnitude or overflow strategy.
- A single rounding mode (such as half-up, half-even, floor or ceiling) for all domains.
- The exact point at which rounding occurs for every conversion, cost, sales, tax, currency, FX or journal calculation.
- Exact unit-conversion factors, allowed conversion paths, reciprocal rules or default tolerances.
- A universal tolerance value for quantity, cost, bank matching or reconciliation.
- Physical column names, SQL expressions, constraints, indexes or implementation algorithms.
- Evidence that the 60 conceptual scenarios have been executed or passed.

LRM and its deterministic tie-breaker are scoped to suitable proportional allocation only; they must not be generalized to all arithmetic.

### 20.6 N37 finding status carry-forward

| Finding | Subject | Status to preserve |
|---|---|---|
| N37-01 | Quantity/base-unit precision and conversion | FIX conceptual; per-product/base-unit precision is configuration; physical type/scale REVIEW/TODO |
| N37-02 | Unit cost and cost-layer precision | FIX conceptual; physical type/scale and capacity TODO |
| N37-03 | FIFO/MWA rounding and residual costing | FIX conceptual; physical key/domain and technical implementation TODO |
| N37-04 | Landed-cost allocation residual | FIX basis policy; cost classification/operational parameters REVIEW; enforcement TODO |
| N37-05 | Price/discount/tax rounding sequence | FIX principle; tax policy and rounding settings REVIEW |
| N37-06 | Currency precision and accounting boundary | FIX principle; currency precision parameters and FX policy REVIEW |
| N37-09 | Bank matching tolerance/residual | FIX that tolerance does not alter source values; tolerance value REVIEW |
| N37-11 | FX source/rate/residual/journal | FIX traceability/snapshot principles; provider, cut-off, fallback and journal policy REVIEW/TODO |
| N37-13 | Deterministic residual allocation | FIX LRM and tie-breaker principle; domain-specific stable key TODO |
| N37-14 | Zero/negative/extreme/overflow tests | Conceptual scenarios only; no execution evidence |
| N37-15 | Concurrency/atomicity numeric processing | Conceptual scenarios only; no execution evidence |

N37-07, N37-08, N37-10 and N37-12 are cross-domain payment/settlement/AP-AR/journal test findings, not inventory-only numeric specifications. Their scenario status remains as recorded in A12.37; this DOC-04 section does not claim those tests passed or close those findings.

### 20.7 Result and next sequence

- Source-backed conceptual numeric rules: **DOCUMENTED — COMPLETE — PARTIAL** for the scope above.
- Base-unit canonicalization, high-internal-precision conversion, rejection of invalid quantity without silent rounding, total-cost authority, MWA/FIFO distinction, LRM scope, FX snapshot and posted-history immutability: **DOCUMENTED from A12.37**.
- Exact physical precision/scale/type/capacity: **OPEN / NOT ESTABLISHED**.
- Exact conversion-factor governance and validation parameters: **OPEN / NOT ESTABLISHED**.
- Universal rounding mode and per-domain rounding boundary: **OPEN / NOT ESTABLISHED**.
- Currency precision, FX provider/rate policy, tax settings, bank tolerance and rounding-account parameters: **REVIEW / TODO**.
- Physical enforcement and execution of conceptual scenarios: **NOT VERIFIED**.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No schema, SQL, DDL, DML, migration, database, application code, CI workflow, Vercel, deployment or Production changes.
- Next DOC-04 work package remains event/idempotency/atomicity/concurrency specification, preserving unresolved numeric/locking/transaction semantics as OPEN.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 21. Event, idempotency, atomicity and concurrency specification — A04/A06/A09/A11/A12.17 (18 November 2026)

### 21.1 Scope and evidence boundary

This section consolidates source-backed conceptual event, posting, idempotency, compensation and concurrency rules for inventory/costing. It is not a final event schema, operation-key specification, transaction design, lock-order specification, physical dictionary, executable test result or implementation approval.

Reviewed sources:
- `Konsolidasi_Keputusan_A11_Transfer_Shipment_Lifecycle_v1.0.docx`, §§1–11, especially §§2, 6–9.
- `Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.16_v1.0.docx`, §§5–7, especially §§5.1–5.3 and 6.
- `Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.30F_v1.1.docx`, A12.17 addendum, §2.
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§2–4.
- `POS_SAAS_AUDIT_2_3_ERD_A01_A12_v0.1_2026-11-16.md`, §§5 and 5.1.
- `DOC-08_Master_FIX_Decision_Register_v1.4.docx`, §36.2 (A04–A09 locator reconciliation), including explicit gaps for standalone A06/A09 approval locators.
- DOC-04 §§3, 16–20 and the 17-entity inventory/costing baseline.

Evidence authority caveat:
- A04's documented decision lineage is traced to A12.15 in the A12.1–A12.16 decision consolidation, §§5–6. The bridge remains conceptual; `inventory_cost_layer_movements` is not an approved historical 18th entity.
- A06 and A09 principles are explicitly restated in A11 v1.0 §7 and retained by A11-F10. DOC-08 v1.4 §36.2 nevertheless records that standalone primary approval addenda for A06 and A09 were not recovered. Therefore, this section records the restated baseline and keeps technical detail OPEN; it does not claim those missing standalone locators have been recovered.
- A12.17 Alternative 1 is an explicit FIX addendum and supersedes A12.16 only for allocation–consumption cardinality.

### 21.2 Event and ledger model — established conceptual rules

| Event / operation | Source-backed conceptual behavior | Ledger / costing effect | Remaining technical boundary |
|---|---|---|---|
| Dispatch | Dispatch is a separately auditable event; one shipment represents one physical dispatch. | Reduces source-location stock and increases virtual transit stock. Transfer does not create a new cost layer or FIFO consumption. | Event record shape, shipment sequence, source-to-transit posting details, idempotency identity and atomic transaction scope OPEN. |
| Receipt | Receipt is separately auditable; repeated/partial receipt is allowed. Each posted receipt detail represents one disposition and one physical location and produces exactly one inventory movement. | Moves only the physically accepted quantity from transit to the destination/disposition location. A movement may be allocated across multiple cost layers. | A03 receipt-event/detail model, relation to shipment item, field mapping, receipt ordering and uniqueness enforcement OPEN. |
| Return | Return is a separate auditable event. Each posted return detail represents one physical source and one physical destination and produces exactly one movement. A return after receipt references its originating receipt detail. | Physical stock changes through a return movement; previous dispatch/receipt records are not deleted. | Return event schema, source linkage, eligibility/caps, idempotency and correction linkage OPEN. |
| Loss investigation | Investigation and resolution are separate records/events. Unconfirmed loss remains unresolved and blocks closure. | No final loss disposition is inferred while investigation remains open. | Investigation/resolution field model, authorization and evidence requirements OPEN. |
| Loss resolution | Resolution references the relevant investigation, shipment item and quantity; movement correction references the resolution. A quantity cannot be resolved more than once. | Loss is recognized only after valid decision and correction are posted. | Exact resolution types, physical key/constraints, transaction boundary and evidence-retention policy OPEN. |
| Reservation | Reservation reduces available quantity, not physical on-hand. Release does not create an inventory movement. | Reservation state and physical stock must remain consistent; fulfillment updates reservation and physical stock atomically. | Reservation event/history representation, TTL, allocation grain and atomic posting design OPEN. |
| Fulfillment / consumption | Partial fulfillment is represented by separate posted movement, allocation and consumption records. One movement may consume multiple eligible layers. | Actual stock reduction may create FIFO consumption; internal transfer, dispatch, receipt, quarantine movement and reservation are not FIFO consumption. | Exact posting command/event model, cost snapshot fields, transaction boundary and locking scope OPEN. |
| Compensation / reversal | Original posted consumption and compensation are immutable. Corrections create new reversal/compensating records; original history is not overwritten. | Compensation references the original consumption. Physical return stock requires a separate physical movement; compensation alone does not add physical stock. | Compensation event structure, correction-of-compensation chain, keys and enforcement OPEN. |
| Adjustment / correction | Posted records are not edited/deleted directly; correction is traceable through reversal, compensation or adjustment. | Ledger remains the source of truth; projections can be rebuilt/reconciled. | Approval, event identity, correction scope and atomic projection update OPEN. |

### 21.3 Allocation–consumption cardinality — A12.17 Alternative 1 FIX

| Relationship | FIX conceptual rule | Not yet established |
|---|---|---|
| Movement → layer allocation | One movement may have multiple layer allocations (1:N). | Physical bridge representation, FK and entity/table approval. |
| Cost layer → allocation | One cost layer may participate in multiple allocations (1:N). | Exact physical keys and lifecycle. |
| Eligible negative allocation → original consumption | Exactly one original consumption per eligible negative allocation (1:1). | Physical UNIQUE/FK/CHECK and idempotency enforcement. |
| Non-consumption allocation → consumption | No original consumption (1:0). | Technical discriminator and enforcement. |
| Original consumption → compensation | One original consumption may receive multiple partial compensations (1:N). | Cross-record aggregate cap, lock scope and atomic revalidation. |
| Compensation → original consumption | Each compensation refers to exactly one original consumption (N:1). | Exact FK and tenant-safe relation. |

Additional FIX rules:
- Total valid partial compensation must not exceed eligible original consumption quantity.
- Partial fulfillment creates separate posted movement, allocation and consumption records.
- Posted original consumption and compensation are immutable; correction uses a new reversal/compensating record.
- A12.16 remains historical and superseded for this cardinality scope only.

### 21.4 Idempotency contract — A09 baseline, technical detail OPEN

The A11 v1.0 §7 restatement establishes the following conceptual behavior:

| Situation | Required conceptual outcome | Status |
|---|---|---|
| A posting request is repeated with the same operation key and same payload | Return the previously stored result; do not duplicate posting effects. | FIX baseline as restated in A11 §7 |
| Same operation key is reused with a different payload | Treat as a conflict; do not silently reuse or overwrite the prior result. | FIX baseline as restated in A11 §7 |
| Operation claim and posting effects | Claim and effects must be atomic. | FIX baseline as restated in A11 §7 |
| Retry after uncertain response | Must not create a second movement, receipt, reservation, layer consumption or compensation. | Required effect inferred from idempotency purpose; exact retry/recovery behavior OPEN |
| Operation identity and payload comparison | Operation key and canonical payload must be well-defined and stable. | OPEN — exact key scope, canonicalization and payload fields not finalized |
| Retention and expiry | Operation key retention must support duplicate protection for its defined lifecycle. | OPEN — duration, expiry and replay policy not established |
| Concurrent same-key requests | Must not both create posting effects. | OPEN — atomic claim mechanism, uniqueness, wait/replay/conflict behavior and tests not specified |

Do not invent a universal operation-key tuple such as client/server/source document/movement; DOC-04 §19 and DOC-08 §36.2 retain the standard key and canonical payload as OPEN. Do not infer an A01 registry physical name or conflate A01 movement source identity registry with A02 reservation `source_type/source_id` validation.

### 21.5 Concurrency, atomicity and failure handling

| Control | Source-backed requirement | Open specification / evidence |
|---|---|---|
| Deterministic locking | A06 baseline requires deterministic locking. | Lock target set, lock order, granularity, isolation level and deadlock graph OPEN. |
| Revalidation after lock | Re-check eligibility/remaining quantities after acquiring the relevant locks. | Exact predicates, retry conditions and revalidation sequence OPEN. |
| Atomic commit | Posting effects must commit atomically; A06 requires atomic commit. A09 requires operation claim and posting effects to be atomic. | Exact transaction boundary and complete write-set per operation OPEN. |
| Full rollback | A06 baseline requires full rollback on failure. | Error classification, rollback/recovery behavior and external side-effect handling OPEN. |
| Compensation cap | Recalculate eligible remaining original consumption and prevent aggregate compensation above the eligible original quantity. | Cross-record locking scope, concurrent partial-return behavior and enforcement OPEN. |
| Reservation / fulfillment | Fulfillment updates reservation and physical stock atomically. | Lock ordering across reservation, balance, batch and layer resources OPEN. |
| Projection consistency | Ledger and balance/projection effects must remain consistent; projections are rebuildable and not independent truth. | Projection update strategy, retry/rebuild interaction and reconciliation evidence OPEN. |
| Transfer closure | Closure requires valid disposition/reconciliation for all dispatched quantity, no unexplained transit, no unresolved investigation, no over-receipt/return, consistent batch/layer reconciliation and no unfinished posting/idempotency conflict. | Closure transaction/guard, concurrent receipt vs closure, authorization and recovery semantics OPEN. |

**No lock order, timeout, retry count/backoff, transaction isolation, deadlock resolution algorithm, event ordering key, outbox pattern, exactly-once transport guarantee or distributed transaction design is approved by the reviewed sources.** These must remain OPEN until supported by an authoritative decision/specification.

### 21.6 Cross-operation consistency checks

| Check ID | Invariant to preserve | Source basis | Technical disposition |
|---|---|---|---|
| EVT-01 | Posted dispatch/receipt/return/loss-resolution events are separately traceable; posted movement remains immutable. | A11-F04/F07; A11 §§6–7 | Event schema, immutable enforcement and audit evidence OPEN. |
| EVT-02 | Repeated partial receipt is allowed; one shipment item may have multiple receipt events. | A11-F05; A12.10 receipt Alternative B | A03 event model and event-to-movement mapping OPEN. |
| EVT-03 | One shipment represents one physical dispatch; separate physical dispatches use separate shipment records. | A11-F06 | Shipment identity/sequence enforcement OPEN. |
| EVT-04 | Shipment item quantities reconcile per shipment/item/batch/cost layer; discrepancies across shipments cannot offset one another. | A11 §§6 and 8 | Aggregate reconciliation and transaction guards OPEN. |
| EVT-05 | A return after receipt references the originating receipt detail; a physical return produces its own movement. | A12.10 return Alternative B | Physical FK and duplicate-resolution guard OPEN. |
| EVT-06 | Loss investigation and resolution are separate; unresolved investigation blocks transfer closure. | A12.11 loss Alternative B; A11-F09 | Authorization, evidence, resolution idempotency and closure enforcement OPEN. |
| EVT-07 | Eligible negative allocation has exactly one original consumption; compensation may be partial/repeated but aggregate cannot exceed eligible original quantity. | A12.17 Alternative 1 FIX | Cross-record cap, FK, locking and tests OPEN. |
| EVT-08 | Transfer preserves cost-layer identity through dispatch/transit/receipt/quarantine/return; transfer itself is not FIFO consumption. | A12.15; A11 §7 | Bridge representation and physical mapping OPEN; no 18th historical entity approval. |
| EVT-09 | Reservation release creates no movement; fulfillment updates reservation and physical stock atomically. | Batch 02 §§3–5; DOC-04 §3 | Event history, atomic transaction and concurrency enforcement OPEN. |
| EVT-10 | A repeated operation with same key/payload replays prior result; same key/different payload conflicts; claim/effects atomic. | A11 §7 A09 restatement | Canonical payload, key scope, retention, atomic claim and concurrency tests OPEN. |
| EVT-11 | Status and quantity summaries derive from posted events and inventory ledger, not an independent stock truth. | A11-F07 | Projection refresh/rebuild and reconciliation implementation OPEN. |
| EVT-12 | Transfer closure waits for all valid dispositions and reconciliation; unresolved investigation and unfinished posting/idempotency conflict block closure. | A11-F08/F09; A11 §8 | Closure guard, lock coordination and exception authorization OPEN. |

### 21.7 Explicit non-decisions — do not infer

The reviewed sources do **not** establish:
- Final event names, event table names, event payload schema, physical columns or event versioning.
- A final receipt-event/detail schema; A03 remains OPEN for repeated receipt event structure.
- A final physical representation for `inventory_cost_layer_movements`; it remains a candidate conceptual bridge, not an approved historical 18th entity.
- A universal operation-key tuple, canonical payload serialization, hash algorithm, key retention period, replay window or conflict response format.
- Exact lock order, lock granularity, isolation level, timeout, retry count/backoff or deadlock resolution policy.
- Exact transaction boundary/write-set for each operation, or how external side effects are coordinated.
- A finalized compensation event schema, physical aggregate constraint or implementation-level enforcement.
- Executed concurrency, atomicity, idempotency, failure-injection or database tests. Conceptual rules/scenarios are not test evidence.

### 21.8 Result and next sequence

- Source-backed event and lifecycle principles: **DOCUMENTED — COMPLETE — PARTIAL** for A11/A12.10/A12.11 scope.
- A12.17 allocation–consumption cardinality: **DOCUMENTED — FIX conceptual**.
- A06 deterministic locking, post-lock revalidation, atomic commit and full rollback: **DOCUMENTED as baseline principles; technical design OPEN**.
- A09 same-key/same-payload replay, same-key/different-payload conflict and atomic claim/effects: **DOCUMENTED as A11 §7 restatement; technical design OPEN**.
- Standalone primary approval locators for A06/A09: **NOT RECOVERED per DOC-08 v1.4 §36.2**; do not claim locator recovery.
- A03 repeated-receipt event model: **OPEN**.
- Operation-key schema/canonicalization/retention/conflict implementation: **OPEN**.
- Lock order/isolation/timeout/retry/transaction boundary/failure recovery: **OPEN**.
- Compensation aggregate enforcement and closure concurrency: **OPEN**.
- Executed tests: **NOT VERIFIED**.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- No schema, SQL, DDL, DML, migration, database, application code, CI workflow, Vercel, deployment or Production changes.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 22. Physical Data Dictionary acceptance review — inventory & costing (18 November 2026)

### 22.1 Review scope and acceptance standard

This review assesses whether the current source package is sufficient to accept the physical data dictionary for the 17 historical Inventory & Costing entities. It does not create missing physical definitions and does not inspect or modify a live database.

Controlling acceptance criteria:
- Each final physical table must be listed exactly once and have a complete field inventory, PK/FK, unique/index/constraint evidence, tenant scope, lifecycle, delete behavior and source locator.
- Relationships must state cardinality and optionality; M:N relationships require an evidenced bridge/join entity.
- Cross-tenant relationships require evidenced tenant-safe composite FK or equivalent enforcement, plus RLS/server authorization evidence.
- Ledger, snapshot and projection roles must be distinct and must not create double counting.
- Conceptual scenarios are not executed-test evidence.

Source locators reviewed:
- A12.38 v5 Physical Entity & Data Dictionary Audit, Appendix D §§D.1–D.4 and D.11–D.14 (especially D.4, D.11, D.12 and D.13).
- DOC-04 reconstructed working master v0.1, §§9–12, as carried into current DOC-04 §§3 and 16–21.
- Batch 02 Inventory Costing Migration Mapping v0.1, §§3–5 and 7–8.
- Update Audit A11–A12 and 17-table matrix v0.2, §§1–4.
- DOC-04 §18 relationship/tenant-integrity matrix, §19 UNIQUE/CHECK/index candidate matrix, §20 numeric/conversion matrix and §21 event/idempotency/atomicity/concurrency matrix.

A12.38 v5 Appendix D explicitly records A12.38.3 as 17 historical entities with conceptual relationships audited but physical field dictionary OPEN. Its D.11 register keeps A38-G01 (physical entity inventory), A38-G02 (fields/types/precision/nullability/default/PK/FK/composite FK), A38-G03 (unique/CHECK/index/delete-update) and A38-G04 (physical cost allocation bridge/FK/concurrency) as TODO. D.12–D.13 state the physical dictionary is NOT CLOSED.

### 22.2 Acceptance result

<badge color="warning">NOT ACCEPTED — PHYSICAL EVIDENCE INCOMPLETE</badge>

- Conceptual entity inventory coverage: **17/17 reviewed** against the historical baseline.
- Physical dictionary acceptance: **0/17 accepted** on the evidence reviewed in this package.
- This 0/17 is an acceptance result, not a claim that no physical schema exists anywhere; no authoritative physical schema/specification was found in the reviewed sources that satisfies the acceptance criteria for these entities.
- DOC-04 §9 is an evidence-bounded register of information to represent, not a final SQL column dictionary. It expressly warns not to infer generic `id`, `created_at`, `updated_at`, `deleted_at` or `status` fields for every entity.
- Conceptual names in the 17-entity baseline are not by themselves proof of final physical table names.
- No database introspection, SQL, migration, DDL/DML, RLS test, application test or Production verification was performed.

### 22.3 Per-entity acceptance matrix

| # | Historical conceptual entity | Source-supported information / invariants | Acceptance finding and required evidence |
|---:|---|---|---|
| 1 | `inventory_batches` | Physical batch/lot identity, production/expiry, status and optional supplier; FEFO selects physical batch. | **NOT ACCEPTED** — final fields, PK/FK, batch uniqueness, status domain, nullable behavior and delete/update rules not evidenced. |
| 2 | `inventory_movements` | Immutable posted physical ledger; signed base-quantity delta; movement is quantity source of truth; source identity is conceptually registry-based (A01 Alternative B). | **NOT ACCEPTED** — complete fields, source registry physical structure/FK, tenant composite keys, reversal linkage, numeric definitions and indexes not evidenced. |
| 3 | `inventory_balances` | Rebuildable projection; available = on-hand − reserved. | **NOT ACCEPTED** — exact grain/key including nullable variant semantics, fields, types, uniqueness and concurrency-safe projection implementation not evidenced. |
| 4 | `inventory_batch_balances` | Batch-level projection must reconcile to parent product/variant/location balance. | **NOT ACCEPTED** — exact parent relation/key, nullable uniqueness, fields, reconciliation and repair evidence not established. |
| 5 | `inventory_adjustments` | Header workflow; no stock effect before posting; posted history immutable and corrected through reversal. | **NOT ACCEPTED** — physical fields, state/approval representation, actor/source, FK and lifecycle/delete behavior not evidenced. |
| 6 | `inventory_adjustment_items` | Input quantity, conversion snapshot and signed base delta; posted item produces movement. | **NOT ACCEPTED** — physical conversion snapshot shape/version, field/type/nullability, movement linkage and row constraints not established. |
| 7 | `stock_counts` | Count scope, location, snapshot and cutoff context; post-snapshot movements must be considered. | **NOT ACCEPTED** — exact snapshot/watermark fields, lifecycle, partial posting and recount history not evidenced. |
| 8 | `stock_count_items` | System snapshot, counted quantity and variance; NULL means not counted while zero is a valid count. | **NOT ACCEPTED** — exact fields, quantity precision/capacity, cutoff linkage, recount history and FK/constraints not established. |
| 9 | `stock_transfers` | Transfer lifecycle and closure outcome are distinct; transit is virtual; closure requires valid dispositions and reconciliation. | **NOT ACCEPTED** — physical state/outcome fields, transition rules, authorization, tenant-safe origin/destination keys and delete behavior not evidenced. |
| 10 | `stock_transfer_items` | Transfer quantity can split across shipments; dispatched/received totals are derived and must reconcile. | **NOT ACCEPTED** — exact fields, item identity, FK, quantity caps, nullable uniqueness and aggregate enforcement not established. |
| 11 | `inventory_cost_exceptions` | Unknown HPP/cost remains NULL; exception does not directly mutate posted movement. | **NOT ACCEPTED** — exception code/status, source/layer references, resolved-cost representation and lifecycle fields not evidenced. |
| 12 | `inventory_reservations` | Reservation does not reduce physical on-hand; release creates no movement; A02 Alternative A uses `source_type/source_id` on reservation header with strict server validation. | **NOT ACCEPTED** — physical source fields/validation, tenant scope, expiry/TTL, status lifecycle, PK/FK and indexes not evidenced. |
| 13 | `inventory_reservation_items` | Active reserved = reserved − fulfilled − released; one product may allocate across multiple batches; fulfillment is atomic with physical stock. | **NOT ACCEPTED** — exact event/allocation structure, batch FK, field/type/caps, fulfillment history and concurrency enforcement not established. |
| 14 | `inventory_cost_layers` | Cost-layer identity differs from physical batch and is preserved through transfer; total cost is authoritative; MWA pool is location-specific. | **NOT ACCEPTED** — layer source identity, transfer mapping, landed-cost correction fields, numeric capacity, FK/unique and lifecycle not evidenced. |
| 15 | `inventory_cost_layer_consumptions` | One movement may consume multiple layers; A12.17 eligible allocation→original consumption is 1:1; original consumption may have partial compensations 1:N; aggregate compensation cannot exceed eligible quantity. | **NOT ACCEPTED** — exact allocation/consumption/compensation physical keys, FK, cap enforcement, idempotency, locking and field definitions not evidenced. |
| 16 | `stock_transfer_shipments` | One shipment represents one physical dispatch; multiple shipments may belong to one transfer; dispatch/receipt/return/loss are distinct events. | **NOT ACCEPTED** — shipment sequence/identity, status/outcome fields, dispatch evidence, lifecycle and uniqueness not established. |
| 17 | `stock_transfer_shipment_items` | Shipment item may have repeated/partial receipt events; cumulative receipt/return/loss must reconcile to dispatched quantity. | **NOT ACCEPTED** — A03 receipt-event/detail structure, event-to-movement FK, caps, idempotency and physical field inventory not evidenced. |

### 22.4 Cross-entity acceptance gaps

| Gap family | Current result | Required evidence before acceptance |
|---|---|---|
| Physical entity and field inventory | OPEN — A38-G01/G02 TODO | Authoritative schema/specification with each physical table and every field, type, precision/scale, nullability and default; provenance per field. |
| PK/FK/composite FK and tenant scope | OPEN — DOC-04 §§18 and A12.38 D.11 | Exact key tuples, referenced keys, cardinality/optionality, tenant scope and verified enforcement evidence. |
| UNIQUE/CHECK/index | OPEN — DOC-04 §19 | Exact physical keys/expressions/index definitions, nullable-variant semantics, delete/update actions and source approval. |
| Inventory cost allocation bridge | OPEN — A38-G04 TODO | Approved physical representation and lifecycle for movement-to-layer allocation; do not count `inventory_cost_layer_movements` as an approved 18th historical entity. |
| Numeric fields | OPEN — DOC-04 §20 | Exact physical numeric types, precision/scale, capacities and approved per-domain rounding/conversion boundaries. |
| Events and lifecycle | OPEN — DOC-04 §21 | Approved receipt/return/investigation/resolution/compensation event structures and transition/closure enforcement. |
| Idempotency/concurrency/atomicity | OPEN — DOC-04 §21 | Exact key/canonical payload, lock scope/order, transaction boundary, retry/failure recovery and evidence of executed tests. |
| Delete/update and retention | OPEN | Per-entity delete/update behavior, immutability, retention and audit evidence. |
| RLS/server authorization | NOT VERIFIED | Physical policies and server-side enforcement evidence plus executed negative/tenant-isolation tests. |

### 22.5 Acceptance disposition and next action

- Physical Data Dictionary for Inventory & Costing: **NOT ACCEPTED — OPEN**.
- Conceptual 17-entity inventory and architecture matrices: **reviewed; not promoted to physical acceptance**.
- Dependencies closed: **none**. FIX decisions changed: **none**.
- The current sources are sufficient to identify the acceptance gaps but insufficient to fill the physical dictionary without inventing details.
- Continue source recovery and locator reconciliation for authoritative physical schema/specification evidence. If the source is unavailable, keep the corresponding field/key/constraint OPEN/UNVERIFIED; do not stop unrelated documentation work.
- No database/schema inspection or changes are authorized by this review. No SQL, DDL, DML, migration, RLS/Auth, backend, application code, CI workflow, deployment or Production changes.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 23. Physical source recovery and per-entity locator reconciliation — 18 November 2026

### 23.1 Scope and method

This append-only pass follows §22.5. It searched the available Library for the original A12.38.3 Inventory & Costing field-level workpaper, entity-specific physical field profiles, schema/DDL artifacts, and evidence for A38-G01–A38-G04. Candidate documents were opened and checked against their stated authority and evidence boundaries.

Sources directly reviewed:
- `Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v5_A12.38_Physical_Dictionary_Audit.docx`, Appendix D §§D.1–D.4 and D.11–D.14.
- `DOC-04_ERD_DATA_DICTIONARY_RECONSTRUCTED_WORKING_MASTER_v0.1_2026-11-17.docx`, §§2–3, 9, 12–13 and Appendix A.
- `POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md`, §§1–5 and 7–8.
- `Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx`, §§1–4.
- Current DOC-04 §§3, 9, 16–22 and Master Checklist v2.0 §§7–9, 18.

Authority assessment:
- A12.38 v5 Appendix D is an audit result and gap register. D.1 expressly says physical names, fields, keys, types, nullability, defaults, constraints, indexes, delete behavior and enforcement require authoritative schema/specification evidence.
- D.4 verifies the historical 17-entity conceptual inventory; it does not establish physical table names or field definitions.
- D.11 leaves A38-G01 through A38-G04 as TODO; D.12–D.13 keep the physical dictionary NOT CLOSED.
- The reconstructed DOC-04 is explicitly NOT CANONICAL / NOT FINAL. Its attribute labels are logical information groups, not SQL columns.
- Batch 02 is a DRAFT migration mapping, not a physical ERD/data dictionary or migration approval. The Update Audit v0.2 is a documentation/status audit, not implementation evidence.
- No standalone authoritative physical schema, DDL, approved field-level dictionary, or separately recoverable detailed A12.38.3 field workpaper was established from the reviewed Library sources. This is a bounded search result, not proof that no such artifact exists elsewhere.

### 23.2 Per-entity source locator and physical evidence matrix

The common locator below confirms only that each name belongs to the historical conceptual baseline: A12.38 v5 Appendix D §D.4. It does not confirm the physical table name. No entity-specific authoritative physical field/key locator was recovered in this pass.

| # | Historical conceptual entity | Verified locator | Physical field/key locator | Disposition |
|---:|---|---|---|---|
| 1 | `inventory_batches` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 2 | `inventory_movements` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 3 | `inventory_balances` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 4 | `inventory_batch_balances` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 5 | `inventory_adjustments` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 6 | `inventory_adjustment_items` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 7 | `stock_counts` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 8 | `stock_count_items` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 9 | `stock_transfers` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 10 | `stock_transfer_items` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 11 | `inventory_cost_exceptions` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 12 | `inventory_reservations` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 13 | `inventory_reservation_items` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 14 | `inventory_cost_layers` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 15 | `inventory_cost_layer_consumptions` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 16 | `stock_transfer_shipments` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |
| 17 | `stock_transfer_shipment_items` | A12.38 v5, App. D §D.4 | NOT RECOVERED | OPEN / UNVERIFIED |

**Coverage result:** historical conceptual names 17/17 locator-confirmed; authoritative physical field/key locators 0/17 recovered in this pass. These are separate measures and must not be conflated.

### 23.3 Cross-entity gap disposition

| Gap | Evidence result | Current disposition |
|---|---|---|
| A38-G01 — physical entity inventory and exact physical table names | D.4 lists historical conceptual entities only; physical inventory remains TODO in D.11 | OPEN |
| A38-G02 — fields, types, precision, nullability, defaults, PK/FK/composite FK | No authoritative per-entity field/key specification recovered | OPEN |
| A38-G03 — UNIQUE/CHECK/index/delete-update behavior | DOC-04 §§19 and 22 are candidate/evidence-gap matrices; A12.38 D.11 remains TODO | OPEN |
| A38-G04 — physical cost-allocation bridge, FK and concurrency | A12.17 cardinality is conceptual; physical bridge and enforcement evidence not recovered | OPEN |

Additional boundaries:
- `inventory_cost_layer_movements` remains a separate bridge candidate, not an approved 18th historical entity.
- Do not infer generic `id`, timestamps, `status`, tenant keys, or any other column on an entity without its authoritative locator.
- Do not convert logical labels in DOC-04 §17 or candidate constraints in §19 into physical schema definitions.
- No database introspection, SQL/DDL/DML, migration, RLS/Auth test, application test, concurrency test or Production verification was performed.

### 23.4 Result and next action

- Source recovery and locator reconciliation: **COMPLETE — PARTIAL** for the bounded Library/source set reviewed.
- Historical conceptual entity locator coverage: **17/17**.
- Physical dictionary field/key locator recovery: **0/17**.
- A38-G01–G04: **OPEN**; dependencies closed: **none**; FIX decisions changed: **none**.
- Physical Data Dictionary acceptance remains **NOT ACCEPTED**. DOC-04 remains a reconstructed working master, NOT CANONICAL / NOT FINAL.
- Next action: recover the missing original A12.38.3 entity-level physical specification or an explicitly approved schema artifact from its authoritative source location. Once available, reconcile each locator and field/key claim against the 17 rows before considering any acceptance update. Until then, preserve all physical details as OPEN / UNVERIFIED.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.


## 24. Expanded physical-source recovery and candidate-authority assessment — 18 November 2026

### 24.1 Additional historical source examined

Following §23, the search was widened to earlier consolidation and provenance records, plus title-focused Library searches for Inventory & Costing schema, migration SQL, ERD and physical data dictionary artifacts.

Additional source directly opened:
- `Konsolidasi ERD POS SaaS Multi-Usaha v3.0 Tahap 5.9.3 — v8.6 P0 Expanded Search Record.docx`, pages 1–6 and Appendix H pages 70–74.
  - Pages 1–3 describe the 17 Inventory & Costing entities and their conceptual responsibilities.
  - Page 1 states that field definitions, data types, constraints and relationships not approved remain REVIEW/TODO, and that the document is not database implementation evidence, migration SQL or test results.
  - Pages 4–6 retain conceptual integration issues A01–A12 and expressly list the final field dictionary, types, nullability/defaults, FK/composite FK, ON DELETE/ON UPDATE, unique constraints, indexes, receipt event model, FIFO transfer model, polymorphic source references, concurrency and idempotency as not yet approved.
  - Appendix H.3–H.6 records provenance coverage and places physical schema/data dictionary, keys, constraints, delete behavior and enforcement evidence in the technical-evidence backlog (P2). It requires inspectable evidence and warns that conceptual evidence does not replace technical evidence.
  - Appendix H.1 says that a source not found in the inspectable Library/conversation scope remains not found only within that audit scope; absence of a search result is not proof the source never existed.
- `Konsolidasi ERD ... v9.5.8 Field Level Profiles — Businesses Specification.docx` was also checked as a possible profile-style precedent. Its title and scope concern Businesses, not the 17 Inventory & Costing entities; it cannot be repurposed as Inventory field authority.
- Existing A12.38 v5 Appendix D remains the direct source for the physical-dictionary gap classification and the historical 17-entity conceptual baseline.

Search coverage was also widened with title-focused queries for Inventory Costing schema/migration SQL, A12.38.3 physical data dictionary, PostgreSQL ERD/schema, and batch/cost-layer field dictionary. No separately titled authoritative Inventory & Costing physical schema, approved DDL/migration, or entity-level physical dictionary was returned in the reviewed Library results.

### 24.2 Candidate source classification

| Candidate | What it supports | What it does not support | Authority for physical dictionary |
|---|---|---|---|
| A12.38 v5 Appendix D | Audit scope, conceptual entity count, physical gaps and evidence rules | Final physical names/fields/keys/types/constraints | NOT AUTHORITY |
| v8.6 Expanded Search Record, pp. 1–6 | 17 conceptual entity responsibilities, conceptual FIX/REVIEW boundaries and unresolved technical issues | Approved field dictionary or implementation evidence | NOT AUTHORITY |
| v8.6 Appendix H, pp. 70–74 | Historical source-search/provenance limits and P2 technical-evidence backlog | Physical schema closure or test results | NOT AUTHORITY |
| v9.5.8 Businesses Field-Level Profiles | A field-profile work pattern for a different domain | Inventory & Costing entity fields | NOT APPLICABLE |
| Batch 02 Inventory Costing mapping | Source mapping and conceptual decisions | Physical ERD, approved DDL or schema | NOT AUTHORITY |
| DOC-04 reconstructed working master | Consolidated working reference and claim/gap crosswalk | Canonical or final physical schema | NOT AUTHORITY |

### 24.3 Effect on the 17-entity matrix and gap register

This expanded pass adds source locators for the conceptual model and confirms why the 17 rows must remain split between conceptual and physical evidence. It does not recover any new authoritative physical field/key locator.

- Conceptual entity responsibility support: v8.6 pp. 1–3; historical entity inventory remains 17/17.
- Physical entity names confirmed against schema: 0/17.
- Physical field/type/precision/nullability/default locators: 0/17.
- Physical PK/FK/composite FK locators: 0/17.
- Physical UNIQUE/CHECK/index/delete-update locators: 0/17.
- Physical allocation bridge/FK/concurrency enforcement locator: 0/17.
- A38-G01–G04 remain OPEN/TODO; no dependency is closed and no FIX decision changes.

The values above describe locator recovery in the reviewed source set; they are not claims that a database schema does not exist. No database was inspected.

### 24.4 Result and next action

- Expanded source recovery: **COMPLETE — PARTIAL** for the reviewed Library source set.
- New authoritative physical schema evidence: **NONE RECOVERED**.
- DOC-04 §23 remains the 17-row locator matrix; §24 adds the broader source-authority assessment without changing its statuses.
- Physical Data Dictionary remains **NOT ACCEPTED**. The next meaningful closure action still depends on obtaining the original A12.38.3 field-level physical specification or an explicitly approved schema artifact from its authoritative source location.
- Once obtained, verify its owner/approval, version, scope, date, supersession, and direct locator for each entity/field/key before promoting any claim. If it is an implementation artifact, its presence alone does not prove runtime enforcement or tests.
- Until then, retain all physical fields, types, keys, constraints, tenant enforcement, lifecycle and delete behavior as OPEN / UNVERIFIED.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED.

## 25. DOC-04 GAP-04 ↔ DOC-09 ERD-OPEN dependency crosswalk — 18 November 2026

### 25.1 Audit basis and finding

A read-only comparison reviewed:
- DOC-04 §13 (GAP-04-01–GAP-04-16), together with DOC-04 §§16–24.
- DOC-09 `docs/07-decision-registers/MASTER_OPEN_REGISTER.md` §3C (ERD-OPEN-01–ERD-OPEN-27).
- Master Checklist v2.0 §§3, 5–8, 21–27.

The two registers describe overlapping Inventory & Costing physical-specification, provenance and readiness gaps, but use different identifiers and scopes. The reviewed documents did not provide an explicit GAP-04-to-ERD-OPEN crosswalk. This addendum supplies a derived navigation aid only.

### 25.2 Relationship labels and GAP-04 crosswalk

- **DIRECT SUBJECT OVERLAP**: the register entries address substantially the same unresolved subject; IDs, closure criteria, owners and evidence remain distinct.
- **RELATED**: one entry is a broader dependency, prerequisite or adjacent technical concern; it does not satisfy the other entry.
- **NO DEDICATED COUNTERPART**: no ERD-OPEN item was found that specifically represents the GAP-04 subject, beyond a broad umbrella dependency.

| DOC-04 gap | DOC-09 ERD-OPEN reference(s) | Relationship | Scope boundary |
|---|---|---|---|
| GAP-04-01 — 17-entity field dictionary: names, types, precision, nullability and defaults | ERD-OPEN-03 | DIRECT SUBJECT OVERLAP | ERD-OPEN-03 is the umbrella physical-specification gap. DOC-04 §§17, 22–24 show logical information and source recovery, not approved physical fields. |
| GAP-04-02 — PK/FK/composite FK and tenant enforcement | ERD-OPEN-03; ERD-OPEN-06 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-03 covers physical keys and tenant keys; ERD-OPEN-06 narrows to A02 polymorphic-source validation and tenant integrity. Neither establishes actual key tuples or enforcement. |
| GAP-04-03 — UNIQUE/CHECK/index/delete-update strategy | ERD-OPEN-03; ERD-OPEN-05–06; ERD-OPEN-09–13; ERD-OPEN-15 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-03 is the broad constraint/index dependency. The others cover specific source, lifecycle, concurrency and idempotency cases; they do not approve concrete expressions, indexes or referential actions. |
| GAP-04-04 — nullable-variant uniqueness and projection concurrency | ERD-OPEN-10; ERD-OPEN-11; ERD-OPEN-27 | RELATED | These cover concurrency, balance reconciliation and costing context. No dedicated ERD-OPEN item specifies nullable-variant uniqueness semantics. |
| GAP-04-05 — A01 movement source identity registry physical structure | ERD-OPEN-05 | DIRECT SUBJECT OVERLAP | A01 source registry structure, FK, lifecycle, validation and uniqueness remain technical TODO. |
| GAP-04-06 — A02 reservation source validation/TTL physical model | ERD-OPEN-06 | DIRECT SUBJECT OVERLAP | Source type/ID validation, tenant integrity, constraints and tests remain open; A02 must not be conflated with A01. |
| GAP-04-07 — cost-layer transfer identity and landed-cost correction mapping | ERD-OPEN-08; ERD-OPEN-12; ERD-OPEN-27 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-08 addresses transfer identity continuity; ERD-OPEN-12 addresses landed-cost correction; ERD-OPEN-27 is the broader physical costing dependency. |
| GAP-04-08 — shipment receipt/return/loss event chain physical structure | ERD-OPEN-07; ERD-OPEN-14; ERD-OPEN-15 | DIRECT SUBJECT OVERLAP | Partial receipt, return/cost-layer reversal and transfer/shipment lifecycle are related event-chain scopes; physical event records, keys and enforcement remain unapproved. |
| GAP-04-09 — allocation/consumption/compensation FK, caps and enforcement | ERD-OPEN-03; ERD-OPEN-14; ERD-OPEN-27 | RELATED; NO DEDICATED COUNTERPART | The reviewed ERD-OPEN register has no dedicated allocation/compensation dependency ID. The broad physical-schema, reversal and costing entries are adjacent only; A12.17 conceptual cardinality does not establish physical bridge/FK/cap enforcement. |
| GAP-04-10 — locking, deadlock retry, concurrency and atomicity tests | ERD-OPEN-10; ERD-OPEN-11; ERD-OPEN-13; ERD-OPEN-27 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-10 directly addresses FIFO/reservation concurrency; the others cover projection, replay and costing dependencies. No execution evidence is implied. |
| GAP-04-11 — idempotency key, payload retention and duplicate handling | ERD-OPEN-13; ERD-OPEN-05–06 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-13 directly addresses A09 idempotency. A01/A02 source identity validation is related, not a substitute for the idempotency contract. |
| GAP-04-12 — tenant composite FK, RLS and server enforcement evidence | ERD-OPEN-03; ERD-OPEN-06 | DIRECT SUBJECT OVERLAP / RELATED | ERD-OPEN-03 covers physical tenant keys; ERD-OPEN-06 covers A02 tenant integrity. Neither is evidence of deployed RLS/server enforcement or executed tenant-isolation tests. |
| GAP-04-13 — A12.18–A12.28 individual provenance | ERD-OPEN-16 | DIRECT SUBJECT OVERLAP | The missing primary source/decision locators remain UNRECOVERED / UNVERIFIED; do not reconstruct their contents. |
| GAP-04-14 — A12.31E and A12.36.1 approval/provenance | ERD-OPEN-18; ERD-OPEN-19 | DIRECT SUBJECT OVERLAP | The two source-specific statuses and closure requirements remain distinct and unchanged. |
| GAP-04-15 — A12.40 D40-203–D40-216 | ERD-OPEN-20; ERD-OPEN-22 | DIRECT SUBJECT OVERLAP | ERD-OPEN-20 tracks A12.40 acceptance; ERD-OPEN-22 tracks unrecovered D40 findings. Neither is closed by this crosswalk. |
| GAP-04-16 — A12.41 final readiness reassessment | ERD-OPEN-21 | DIRECT SUBJECT OVERLAP | A12.41 remains NOT STARTED / NOT VERIFIED. The six-versus-seven gate discrepancy remains unresolved under Master Checklist §26.5; this crosswalk does not decide the gate count. |

### 25.3 ERD-OPEN entries without a dedicated GAP-04 counterpart

The following DOC-09 entries have no dedicated GAP-04 ID in DOC-04 §13; they must remain independently tracked:
- **ERD-OPEN-01 and ERD-OPEN-02** — canonical ERD/working-reference document-control status.
- **ERD-OPEN-04** — candidate status of `inventory_cost_layer_movements`; no 18th entity is approved.
- **ERD-OPEN-17** — A12.31–A12.36 partial/open decision set, broader than GAP-04-14.
- **ERD-OPEN-23** — D40-244/D40-253 replacement-decision provenance.
- **ERD-OPEN-24 and ERD-OPEN-25** — Purchasing 14→15 and Sales 20→18 entity crosswalks.
- **ERD-OPEN-26** — A12 Decision Register canonicality and consolidated-document metadata mismatch.

Conversely, GAP-04-04 and GAP-04-09 retain specific detail not represented by a dedicated ERD-OPEN ID. Do not assume that the umbrella ERD-OPEN-03 or a related item fully captures those closure requirements.

### 25.4 Status, authority and closure preservation

- DOC-04 GAP-04-01–GAP-04-16 retain every status in §13.
- DOC-09 ERD-OPEN-01–ERD-OPEN-27 retain their source-native statuses in §3C.
- This crosswalk does not merge IDs, replace either register, create a primary source, establish a physical key tuple, approve a constraint/index/referential action, or prove RLS/server enforcement.
- Dependencies closed: **0**. FIX decisions changed: **0**.
- Physical Data Dictionary remains **NOT ACCEPTED**; physical schema and implementation readiness remain **NOT VERIFIED / NOT READY**.

### 25.5 Next work and governance

Continue only with a specific evidence-backed discrepancy or newly available authoritative source. Do not repeat the bounded A12.38.3/source searches already recorded in §§23–24. Do not infer schema, approval, enforcement, test execution or Production state from this derived crosswalk.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; no SQL/DDL/DML, database introspection, schema/migration, RLS/Auth, backend/API, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 26. Append-only DOC-04 bounded audit and navigation reconciliation — 19 November 2026

### 26.1 Audit identity, scope and evidence

- Work package: **DOC-04 — ERD & Data Dictionary Master bounded read-only audit**, continuing after the already completed technical/source work packages in §§16–25.
- Owning file: `docs/04-data-architecture/ERD_DATA_DICTIONARY.md`, current header Version **0.1.0**, status **RECONSTRUCTED WORKING MASTER — DRAFT / REVIEW REQUIRED — NOT CANONICAL / NOT FINAL**.
- Audit base: repository `main` at `da046720e6454ab7e3a693ad88bcddd7e014755e` (PR #62 merge).
- Sections reviewed: DOC-04 §§1–15, Appendix A, and §§16–25. The technical matrices and source-recovery work in §§16–25 were inspected for consistency and were not recreated.
- Bounded cross-checks: Master Checklist v2.0 §39; DOC-03 §11 and §11.1; DOC-09 §3C and §25; DOC-10 CVS-026 and CVS-032; Master Project Index §§17–18.
- Method: current-`main` read-only inspection. Historical snapshots, current document metadata, conceptual decisions, physical specification, provenance and implementation evidence were kept as separate status dimensions.

### 26.2 DOC04-F01 — stale next-work instructions retained as historical snapshots

The following next-work statements accurately described the sequence when their respective sections were first written, but are superseded by later completed DOC-04 packages already present in this same file:

| Earlier section | Historical next-work statement | Later package now present |
|---|---|---|
| §17.5 | PK/FK/composite-FK tenant-integrity matrix | §18 |
| §18.6 | UNIQUE/CHECK/index matrix | §19 |
| §19.6 | Quantity/cost precision and conversion matrix | §20 |
| §20.7 | Event/idempotency/atomicity/concurrency specification | §21 |
| §21.8 | Physical Data Dictionary acceptance review | §22 |
| §22.5 | Continue physical-source recovery and locator reconciliation | §§23–24 |
| §23.4 | Recover original A12.38.3 field-level physical specification | §24 records the expanded source-recovery assessment; the original source remains unrecovered |
| §24.4 | Reconcile a newly obtained authoritative physical source if one becomes available | Still conditional; no such source was recovered by this audit |

These statements are not deleted or rewritten because they are historical checkpoint records. For current DOC-04 navigation, the completed sequence is §§16–25. Do not restart those matrices or source searches without new authoritative evidence, a material contradiction, or explicit re-audit instruction. The remaining physical-source and implementation gaps retain their source-native statuses.

### 26.3 DOC04-F02 — original-body end marker precedes later appendices

Appendix A contains the phrase “End of DOC-04” before the later append-only packages §§16–25. In the current assembled file this phrase can be mistaken for the end of the whole document.

The phrase is retained as part of the original reconstructed body/history. For navigation, it marks the end of the original body snapshot and **does not** terminate the current assembled DOC-04 file; the later numbered sections are valid append-only continuations. No historical text is removed or rewritten.

### 26.4 DOC04-F03 — external DOC-03 version-reference discrepancy (not corrected in this DOC-04 package)

DOC-03 §11 lists “DOC-04 v0.2” as its evidence-family reference. The current DOC-04 header identifies this file as Version **0.1.0**, and Master Project Index §18 records the PR #11 publication as DOC-04 **v0.1**. The reviewed current-main sources do not establish a DOC-04 v0.2 publication or an approved version promotion.

Disposition:
- Preserve DOC-04's current header/version **0.1.0**; do not silently promote it to v0.2.
- Record the mismatch as an external cross-document reference issue owned by the DOC-03 audit/correction scope.
- Do not edit DOC-03 from this DOC-04 work package.
- DOC-03's version reference remains **OPEN for owner-document reconciliation**; no DOC-04 source authority or decision status changes.

### 26.5 Cross-document consistency and preserved technical disposition

The bounded cross-check found no evidence-supported change to the substantive DOC-04 conceptual baseline or the DOC-04 §13 ↔ DOC-09 §3C/§25 dependency mapping.

- The 17 historical conceptual entities remain the baseline; `inventory_cost_layer_movements` remains a candidate, not an approved eighteenth entity.
- MWA remains default per Business + Product/Variant + Inventory Location; FIFO remains the alternative. FEFO selects physical batches; FIFO consumes cost layers.
- A12.38 remains closed only for conceptual audit/gap-register scope; physical Data Dictionary remains OPEN / NOT ACCEPTED.
- A12.39 remains closed only for conceptual relationship/constraint specification; physical key, constraint and enforcement verification remains OPEN / UNVERIFIED.
- GAP-04-01–GAP-04-16 and ERD-OPEN-01–ERD-OPEN-27 retain their owning-document statuses. The crosswalk remains a navigation aid, not a closure or replacement of either register.
- A12.18–A12.28 remain OPEN/UNVERIFIED; A12.31E remains OPEN; A12.36.1 remains UNVERIFIED/REVIEW; A12.40 remains PARTIAL/OPEN with D40-203–D40-216 UNRECOVERED; A12.41 remains NOT STARTED.
- No physical field, PK/FK tuple, composite-FK tuple, UNIQUE/CHECK/index definition, numeric precision/scale, lifecycle enforcement, RLS/server authorization, test execution or Production state is inferred or newly verified.

### 26.6 Audit disposition and next routing

- DOC-04 bounded read-only audit: **COMPLETE — APPEND-ONLY NAVIGATION CLARIFICATIONS RECORDED; NO SUBSTANTIVE DATA-MODEL CORRECTION IDENTIFIED**.
- DOC-04-F01/F02: historical navigation/boundary clarifications recorded in this addendum; historical wording preserved.
- DOC-04-F03: external DOC-03 version-reference discrepancy recorded; owner-document follow-up remains OPEN.
- Dependencies newly closed: **0**.
- FIX decisions changed: **0**.
- Physical Data Dictionary acceptance: **NOT ACCEPTED**.
- DOC-04 canonical/final status: **NOT PROMOTED**.
- Next work package: **DOC-05 — Authorization Architecture Master bounded read-only audit**, following active Master Checklist v2.0 §39. Read the current DOC-05 and only necessary controlling cross-references from `main`; do not repeat completed work. Route DOC04-F03 to the DOC-03 owner audit when that document is next in the approved remediation sequence.

Controls remain unchanged: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized by this addendum.

## 27. Append-only logical domain ownership and field-classification design — 19 November 2026

This section adds a project-authored logical mapping layer based on DOC-06 §21. It is not a physical ERD approval, table inventory, migration specification or claim that existing database objects implement these rules.

### 27.1 Logical ownership rule

Every business entity/data aggregate documented in this master must be assigned exactly one authoritative owner from M01–M21. Supporting domains may hold their own records containing stable references to another domain's object, but may not mutate the owner's authoritative state. Cross-domain reporting structures are projections/read models and must be labeled as such. If an existing entity cannot yet be assigned confidently, record it as UNMAPPED with a named decision item; do not invent a second owner.

### 27.2 Ownership mapping for Education and Hotel workflows

Use DOC-06 §§21.3–21.4 as the authoritative workflow-level mapping for EDU-WF-01–14 and HTL-WF-01–16. During entity-level reconciliation, map each object to its workflow and primary owner, then map supporting references separately. A workflow's supporting domain is not permission for that domain to write the primary domain's records. DOC-03 owns the interaction contract; DOC-04 records entity ownership and data shape.

### 27.3 Business and location isolation invariants

For each business-owned entity, the logical data contract must identify business_id as its tenant association, whether direct or safely derived through an immutable parent relationship. Child references must not permit a row to point across businesses. Composite tenant-aware relationships are required wherever independent foreign-key validity could otherwise connect records from different businesses. Site/property/outlet, warehouse/location, assignment and self/relationship constraints are additional scope dimensions, not substitutes for tenant isolation. Platform-owned records are explicitly distinguished from business-owned records.

### 27.4 Field-level classification and purpose inventory

Apply DOC-06 §21.8 D0–D4 classification at field/document level. For each entity field, the dictionary must record: field name; owning domain; business/tenant association; classification; purpose(s); permitted read audiences; write authority; export/share eligibility; masking/minimization rule; retention/deletion rule; and audit requirement. D0 public; D1 internal; D2 confidential; D3 restricted; D4 critical secret/regulated credential. Secrets must be stored as vault-managed references or equivalent protected material, never ordinary readable application fields. Where field-level classification is not yet enumerated, mark FIELD CLASSIFICATION OPEN; do not infer that the whole table has one uniform class.

### 27.5 Data lifecycle and projection rules

Authoritative state changes occur only through the owning domain's lifecycle. Audit/event records preserve actor, action, target, tenant, timestamp, correlation, purpose and relevant before/after or event reference according to classification. Projections identify source owner, refresh/consistency behavior and whether stale data affects operational decisions. Retention, legal hold, correction and deletion rules must be documented per data family; derived reports must not become alternate write paths.

### 27.6 Physical evidence and status boundary

This logical design does not resolve the existing physical ERD/data-dictionary evidence gaps, does not close any source-native physical schema dependency and does not establish that business_id constraints, composite foreign keys, RLS or field protections exist in the database. Entity-by-entity ownership and field inventory must be reconciled against the current document's physical evidence matrices in a separate documentation pass. No SQL/DDL/DML, migration, RLS/Auth or database action is authorized. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.

## 28. Append-only conceptual entity-to-domain ownership register — 19 November 2026

**Status: LOGICAL OWNERSHIP DESIGN RECORDED; PHYSICAL DICTIONARY AND FIELD-LEVEL CLASSIFICATION REMAIN OPEN.** This register maps the historical 17 conceptual Inventory & Costing entities in §3 to the canonical logical domains in DOC-06 §21. It does not approve physical table names or columns and does not alter the historical entity count.

| # | Conceptual entity | Primary owner | Supporting domain(s) | Logical ownership rationale | Field classification status |
|---:|---|---|---|---|---|
| 1 | `inventory_batches` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Batch identity, expiry and physical stock state belong to inventory ledger; custody/location execution may reference it | FIELD INVENTORY OPEN; classify each eventual field individually |
| 2 | `inventory_movements` | M06 Inventory & Material Ledger | M07 Warehouse & Custody; M16 Finance, Billing & Payment | Immutable quantity-change ledger is owned by inventory; transfer custody and financial valuation consume movement facts | FIELD INVENTORY OPEN |
| 3 | `inventory_balances` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Rebuildable on-hand/reserved/available projection belongs to inventory ledger | FIELD INVENTORY OPEN |
| 4 | `inventory_batch_balances` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Rebuildable batch-level stock projection belongs to inventory; warehouse is a location/custody dimension | FIELD INVENTORY OPEN |
| 5 | `inventory_adjustments` | M06 Inventory & Material Ledger | M07 Warehouse & Custody; M18 Quality, Inspection & Compliance | Adjustment request/post/reversal changes inventory ledger; independent review evidence may be held by M18 | FIELD INVENTORY OPEN |
| 6 | `inventory_adjustment_items` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Adjustment quantity detail generates inventory movement on posting | FIELD INVENTORY OPEN |
| 7 | `stock_counts` | M06 Inventory & Material Ledger | M07 Warehouse & Custody; M18 Quality, Inspection & Compliance | Count reconciliation affects inventory truth; physical count execution is location/custody activity | FIELD INVENTORY OPEN |
| 8 | `stock_count_items` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Expected/physical/variance quantities are inventory reconciliation details | FIELD INVENTORY OPEN |
| 9 | `stock_transfers` | M07 Warehouse & Custody | M06 Inventory & Material Ledger; M19 Delivery & Fulfillment | Transfer authorization, custody handoff and transit lifecycle belong to warehouse/custody; ledger records quantity effects | FIELD INVENTORY OPEN |
| 10 | `stock_transfer_items` | M07 Warehouse & Custody | M06 Inventory & Material Ledger | Transfer line and shipment allocation are custody lifecycle details; posted quantities reconcile to inventory ledger | FIELD INVENTORY OPEN |
| 11 | `inventory_cost_exceptions` | M06 Inventory & Material Ledger | M16 Finance, Billing & Payment; M18 Quality, Inspection & Compliance | Inventory costing exception is attached to stock valuation lineage; financial posting and review remain separately owned | FIELD INVENTORY OPEN |
| 12 | `inventory_reservations` | M06 Inventory & Material Ledger | M03 POS, Sales & Order; M05 Booking, Reservation & Appointment | Reservation of stock affects available inventory; sales/booking domains own the originating demand object | FIELD INVENTORY OPEN |
| 13 | `inventory_reservation_items` | M06 Inventory & Material Ledger | M07 Warehouse & Custody | Reserved quantity and batch allocation are inventory commitments; physical pick/custody is M07 | FIELD INVENTORY OPEN |
| 14 | `inventory_cost_layers` | M06 Inventory & Material Ledger | M16 Finance, Billing & Payment | Cost-layer identity/remaining quantity follows inventory costing architecture; financial valuation/posting remains M16 | FIELD INVENTORY OPEN |
| 15 | `inventory_cost_layer_consumptions` | M06 Inventory & Material Ledger | M16 Finance, Billing & Payment | Consumption/compensation lineage allocates inventory cost layers; financial effects are separately posted by M16 | FIELD INVENTORY OPEN |
| 16 | `stock_transfer_shipments` | M07 Warehouse & Custody | M19 Delivery & Fulfillment; M06 Inventory & Material Ledger | Physical shipment, dispatch, receipt, return and loss custody events belong to M07; external delivery orchestration may use M19; ledger effects remain M06 | FIELD INVENTORY OPEN |
| 17 | `stock_transfer_shipment_items` | M07 Warehouse & Custody | M19 Delivery & Fulfillment; M06 Inventory & Material Ledger | Shipment-line custody and receipt reconciliation belong to M07; delivery proof/route belongs to M19; posted quantity effects belong to M06 | FIELD INVENTORY OPEN |

### 28.1 Ownership rules and explicit non-owners

1. The primary owner is the only authority for the entity's authoritative lifecycle and mutation. Supporting domains may issue commands or consume events/read models; they do not acquire write ownership.
2. M06 owns stock ledger, balances, batch identity, reservations and cost-layer lineage. M07 owns warehouse/location custody and transfer/shipment lifecycle. M19 may own last-mile delivery/route/proof when the workflow extends beyond internal warehouse custody. M16 owns invoices, payment, financial posting and settlement; it does not mutate inventory ledger records.
3. A transfer shipment can have a M07 custody record and a separate M19 delivery record when delivery is an actual business capability. Do not duplicate the same shipment fact in both domains.
4. `inventory_cost_layer_movements` remains an unapproved bridge candidate; this mapping does not create entity #18.
5. This logical map resolves ownership for these 17 conceptual names only. It does not close A38-G01–G04, GAP-04-01–16, ERD-OPEN-01–27, physical field/key evidence, RLS or implementation gaps.

### 28.2 Field-classification acceptance template

For each future approved field, DOC-04 must record: entity.field; owner domain; direct/derived business_id path; D0–D4 class; allowed purpose code(s); read audience/permission key; write authority; mask/minimize rule; export/share decision; retention/legal-hold rule; audit event; and evidence/status. Current conceptual entity rows do not enumerate fields, so no blanket D1/D2 classification is asserted. Until populated, field-level classification remains OPEN and protected data access must fail closed.

### 28.3 Tenant and relationship constraints

Every business-owned entity must carry or safely derive one immutable business context. A child-to-parent reference must preserve business equality; composite tenant-aware references are the logical requirement where independent identifiers could cross tenants. Site/property, warehouse/location and assignment are subordinate scope dimensions. Exact FK names, columns, unique indexes, constraints and RLS policies remain physical design/implementation work and are not specified here.

**Disposition:** logical ownership mapped 17/17; field-level classification 0/17 complete; physical table/field/key verification remains OPEN as recorded in §§23–26. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 29. Append-only logical attribute and data-handling inventory — project-authored proposal (19 November 2026)

**Status: LOGICAL ATTRIBUTE DESIGN — NOT PHYSICAL COLUMNS; FIELD CLASSIFICATION PROPOSED, NOT IMPLEMENTED.** This section fills the product-design gap identified in §28 by enumerating conceptual attributes for the 17 historical Inventory & Costing entities. Attribute labels describe business meaning, not approved SQL identifiers, column types, nullability, keys, indexes or existing database fields. A physical dictionary must later map or reject each conceptual attribute against an authorized physical schema review.

### 29.1 Classification and audience legend

- **D1 Internal:** operational identifiers, states and non-sensitive quantities; read by assigned operational functions within the owning Business and scope.
- **D2 Confidential:** commercial, financial, valuation, supplier, custody, variance or transaction details; read only by assigned Inventory/Warehouse/Finance functions for their respective purposes.
- **D3 Restricted:** person-linked, investigation, regulated or sensitive evidence; only explicitly assigned and need-to-know audiences. No general export.
- **D4 Critical secret:** credentials/secret material; never ordinary application-readable attributes. Store only protected vault reference/metadata in the domain record; never expose secret values.
- **Read/write notation:** “Inventory” means an explicitly assigned Inventory Operator or controlled M06 process; “Warehouse” means an explicitly assigned Warehouse Operator or controlled M07 process; “Finance” means the Finance / Accounting read/review subset; “Approver” means an independent explicitly assigned reviewer. These are candidate audiences, not grants.
- **Purpose codes:** SERVICE_DELIVERY, FINANCIAL_PROCESSING, COMPLIANCE_AUDIT, SAFETY_RESPONSE, INTEGRATION_SYNC and LEGAL_RETENTION only where relevant. A request must declare a matching purpose.
- **Retention:** trigger is specified conceptually; duration remains OPEN pending applicable legal, contractual and business policy. Legal hold suspends disposal.

### 29.2 Conceptual attribute register

| # / entity (owner) | Proposed logical attributes and classification | Read audience / purpose | Write authority and lifecycle | Retention / audit trigger |
|---|---|---|---|---|
| 1. inventory_batches (M06) | batch identity, product/variant reference, supplier-lot reference (D2), received date, manufacture date (D2), expiry date (D2), quality/hold state (D2), original and remaining quantity (D2), unit of measure, source receipt reference, created/updated actor/time (D1) | Inventory; Warehouse for assigned custody; Finance only valuation-relevant subset. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Inventory creates/updates draft facts; quality/hold transitions require assigned authority; posted movement quantities are not edited here | Retain through batch exhaustion/expiry and related recall/claim period; audit receipt, hold/release, expiry and quantity-affecting events |
| 2. inventory_movements (M06) | movement identity, product/variant, batch reference, location reference, movement type, quantity and UOM (D2), source document/object reference, reason code (D2), effective/recorded time, actor/service, correlation/idempotency reference, reversal-of reference (D1/D2) | Inventory; Warehouse for assigned custody; Finance read-only valuation subset. SERVICE_DELIVERY, FINANCIAL_PROCESSING, COMPLIANCE_AUDIT | Only M06 posts immutable movement facts from authorized commands; correction is a linked compensating movement, never edit/delete | Retain as immutable ledger through financial/audit/claim obligations; audit every post, reversal and replay decision |
| 3. inventory_balances (M06) | product/variant, location, on-hand quantity, reserved quantity, available quantity, in-transit quantity where applicable, projection version/as-of time, source movement watermark (D1/D2) | Inventory and assigned Warehouse. SERVICE_DELIVERY | Controlled M06 projection process only; no direct manual write; rebuild from authoritative movement/reservation sources | Retain current projection and rebuild lineage; audit rebuild, discrepancy and stale-projection decisions |
| 4. inventory_batch_balances (M06) | batch reference, location, on-hand/reserved/available quantities, expiry status, projection version/as-of time, source watermark (D1/D2) | Inventory; assigned Warehouse. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Controlled M06 projection process only; batch allocation follows approved FEFO policy where applicable | Retain projection lineage while batch exists and through reconciliation; audit rebuild and batch discrepancy |
| 5. inventory_adjustments (M06) | adjustment identity, location, reason, status, initiator, submitted/reviewed/approved/posted actor/time, source count/reference, variance summary and approval reference (D2), exception/incident reference (D3 only when person/incident-linked) | Inventory; independent Approver; Finance valuation subset. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Inventory initiates/submits; independent approver approves; controlled M06 posting service posts ledger effects; initiator cannot approve own adjustment | Retain with linked movements and audit/claim period; audit submit, review, approve, reject, post and reverse |
| 6. inventory_adjustment_items (M06) | parent adjustment, product/variant, batch, expected quantity, counted quantity, delta, UOM, unit-cost reference where applicable (D2), line reason (D2), source evidence reference (D2/D3) | Inventory; assigned counter; Finance cost subset. SERVICE_DELIVERY, FINANCIAL_PROCESSING | Assigned Inventory Operator edits draft lines; locked on submit/post; M06 generates movements | Retain with parent adjustment and movement lineage; audit every line change before submission and final posting |
| 7. stock_counts (M06) | count identity, location, scope/filter, cutoff/as-of time, status, assigned counters, reviewer, approver, submission/finalization time, count method and variance summary (D2) | Inventory; Warehouse for assigned count; independent Approver. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Inventory creates/assigns; counters submit; independent reviewer approves material variance; M06 finalizes ledger impact | Retain through reconciliation and audit/claim period; audit assignment, cutoff, submit, recount, approve and finalize |
| 8. stock_count_items (M06) | parent count, product/variant, batch, expected quantity, observed quantity, UOM, count status (including explicitly counted zero), counter, recount sequence, variance and note (D2), evidence reference (D2/D3) | Assigned counter and Inventory reviewer. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Assigned counter records; recount creates retained revision/sequence, not destructive overwrite; M06 owns final reconciliation | Retain all count/recount history with parent; audit record, correction, recount and approval |
| 9. stock_transfers (M07) | transfer identity, Business, source/destination warehouse/location, status, requested/approved/dispatch/receipt/close times, initiator, approver, source/destination custodians, reason, reconciliation and loss disposition references (D2) | Warehouse at source/destination; Inventory read for ledger; Manager/Approver for assigned approval. SERVICE_DELIVERY, COMPLIANCE_AUDIT | M07 owns request, approval, dispatch, custody and close lifecycle; close blocked until all shipment quantities/dispositions reconcile | Retain through custody/claim/audit period; audit every state transition, handoff, discrepancy and closure |
| 10. stock_transfer_items (M07) | parent transfer, product/variant, requested/approved/allocated quantity, UOM, batch/allocation reference, shipped/received/returned/lost quantity references, line status (D2) | Assigned Warehouse; Inventory read for movement reconciliation. SERVICE_DELIVERY | Warehouse allocates only within approved transfer; M07 controls line state; M06 records resulting inventory movements | Retain with transfer and movement lineage; audit allocation, split, receipt, discrepancy and disposition |
| 11. inventory_cost_exceptions (M06) | exception identity, source movement/layer reference, product/location, unresolved cost state, exception type/reason, evidence reference, review/resolution status, resolver and timestamps, approved correction reference (D2; evidence may be D3) | Inventory costing; Finance review subset; Compliance reviewer when assigned. FINANCIAL_PROCESSING, COMPLIANCE_AUDIT | Inventory submits evidence; independent reviewer resolves according to costing policy; unknown cost remains NULL until valid resolution; no rewriting posted movement | Retain with affected cost/financial period and audit obligation; audit creation, review, resolution and downstream correction |
| 12. inventory_reservations (M06) | reservation identity, originating demand domain/object, Business, location, status, expiry, priority/source reason, reserved quantity summary, fulfillment/release reference, idempotency reference (D2) | Inventory; originating demand domain read/status subset; Warehouse for assigned pick. SERVICE_DELIVERY, BOOKING_FULFILLMENT | M06 owns stock reservation commitment; originating M03/M05 owns demand lifecycle; release/expire/fulfill are explicit transitions | Retain through fulfillment/cancellation and reconciliation period; audit reserve, allocate, release, expire, fulfill and replay |
| 13. inventory_reservation_items (M06) | parent reservation, product/variant, requested/reserved quantity, batch allocation, location, fulfilled/released quantity, UOM, allocation sequence and source reference (D2) | Inventory; assigned Warehouse for custody. SERVICE_DELIVERY | M06 allocates/fulfills inventory commitment; M07 records physical pick/custody; idempotent transitions prevent duplicate consumption | Retain with reservation and movement lineage; audit allocation, reallocation, fulfillment, release and compensation |
| 14. inventory_cost_layers (M06) | cost-layer identity, product/variant, inventory location, source receipt/movement, costing method (MWA default or approved FIFO alternative), original/remaining quantity, unit/extended cost (D2), currency, effective time, source lineage (D2) | Inventory costing process; Finance read/review subset. FINANCIAL_PROCESSING, COMPLIANCE_AUDIT | Controlled M06 costing process creates/consumes layers; MWA pool identity is Business + Product/Variant + Inventory Location; no arbitrary rewrite | Retain with financial valuation and audit period; audit layer creation, consumption, correction and method decision |
| 15. inventory_cost_layer_consumptions (M06) | consumption identity, cost-layer reference, source movement/reference, consumed quantity, unit/extended cost (D2), costing sequence, compensation reference, actor/service and timestamp (D1/D2) | Inventory costing process; Finance read subset. FINANCIAL_PROCESSING | Controlled M06 process records immutable FIFO consumption lineage; compensation is capped to eligible original quantity and linked to source | Retain with originating movement and financial period; audit consumption, compensation and reconciliation |
| 16. stock_transfer_shipments (M07) | shipment identity, parent transfer, carrier/route reference (D2), dispatch/expected/actual receipt times, custody handoff actors, shipment status, proof reference, exception/loss/return disposition (D2; personal proof may be D3) | Assigned Warehouse; Delivery / Fulfillment Operator for assigned route; Manager/Approver for exception. SERVICE_DELIVERY, COMPLIANCE_AUDIT | M07 owns internal custody and shipment state; M19 may own separate external route/proof record; no duplicate authoritative shipment fact | Retain through delivery/claim/audit period; audit dispatch, handoff, receipt, proof, loss, return and close |
| 17. stock_transfer_shipment_items (M07) | parent shipment, transfer item, product/batch, dispatched quantity, received/returned/damaged/lost quantities, UOM, receipt condition, discrepancy reason and reconciliation reference (D2) | Assigned Warehouse/Delivery Operator; Inventory read for ledger reconciliation. SERVICE_DELIVERY, COMPLIANCE_AUDIT | Assigned receiver records actual receipt; reconciliation is explicit; M06 posts inventory effects; duplicate receipt prevented | Retain with shipment/transfer/movement lineage; audit partial receipt, discrepancy, recount, loss and reconciliation |

### 29.3 Attribute-level access and protection rules

1. The table above is a conceptual attribute inventory, not permission to read every listed attribute. Each attribute inherits the narrowest audience and purpose in its row; D2 financial/cost attributes are not exposed to operational users merely because they can read quantities.
2. Person-linked actor identifiers are D2 at minimum; when linked to an investigation, safeguarding or regulated incident, the evidence and relationship may be D3. Actor identity in audit is retained but should not expose unnecessary profile data.
3. Supplier-lot, cost, valuation, variance, loss and adjustment reasons are D2. Attachments or evidence that contain personal or incident information are separately D3 and require restricted reference access.
4. D4 credentials are not attributes of these 17 entities. If a future integration or carrier credential is needed, DOC-21/M21 stores only an opaque secret reference and rotation metadata; the secret value remains in a protected secret facility.
5. Export is denied by default for D2/D3 attributes unless an exact export key, purpose, field allowlist, scope and any required independent approval are present. A report or projection does not weaken source-field restrictions.
6. Deletion is not an ordinary CRUD action for immutable movement, count, transfer, shipment or cost lineage. Correction uses a compensating/reversal record; legal hold blocks disposal.
7. All child attributes inherit the parent's immutable Business context. Site, warehouse, location, assignment and batch references must resolve within the same Business. A derived Business association must be stable and validated across the full parent chain.

### 29.4 Retention and physical-mapping status

- Retention triggers are defined conceptually above; exact durations, statutory basis, limitation periods, archival tiers and disposal approvals remain OPEN. No universal duration is invented.
- Attribute labels are semantic. Physical column names, types, nullability, PK/FK/composite-FK, constraints, indexes, encryption-at-rest details, RLS policies and server/API enforcement are not specified or verified by this section.
- A later physical mapping must record for every proposed attribute: mapped physical field or explicit “not represented”; source evidence; physical type/nullability; owner; tenant path; D0–D4; purpose; audience/key; write authority; masking/export; retention/hold; audit; verification status.
- The 17/17 conceptual entity attribute proposals are now enumerated for design review. This does not promote physical Data Dictionary acceptance, close A12/GAP/ERD-OPEN findings, or imply that any field exists in the database.

**Disposition:** conceptual attribute inventory drafted for 17/17 entities; field-level policy proposals are now available for cross-document review. Physical mapping/verification remains OPEN; no database or implementation work is authorized. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.


## 30. Append-only reconciliation — logical attribute proposals, classification and purpose vocabulary (19 November 2026)

This section reconciles §§28.2 and 29 without changing the physical-schema acceptance boundary.

### 30.1 Attribute inventory status

- DOC-04 §28.2's **0/17 field-level classification complete** means no verified field-by-field classification had been accepted at that checkpoint; the 17 conceptual entity names did not themselves supply an accepted field list.
- DOC-04 §29 subsequently enumerates proposed conceptual attributes for **17/17 entities**. This is a completed proposal inventory for design review, not an accepted field dictionary and not proof that any physical column exists.
- Therefore the counts describe different acceptance layers and are not contradictory: **17/17 conceptual attribute proposals enumerated; 0/17 physical field mappings verified/accepted**. Field-specific D0–D4, purpose, audience and retention decisions remain proposed until reviewed and mapped. Physical mapping remains OPEN.
- D0–D4 classification is inherited from DOC-06 §21.8. For completeness: **D0 Public**; D1 Internal; D2 Confidential; D3 Restricted; D4 Critical Secret. D0 does not make tenant-owned records universally accessible; tenant, purpose and resource authorization still apply.

### 30.2 Canonical purpose vocabulary for this design set

The project purpose vocabulary used across DOC-05 §§24–25, DOC-06 §21.9 and DOC-04 §29 is:

- SERVICE_DELIVERY
- BOOKING_FULFILLMENT
- EDUCATION_ADMIN
- FINANCIAL_PROCESSING
- CUSTOMER_SUPPORT
- SAFETY_RESPONSE
- COMPLIANCE_AUDIT
- INTEGRATION_SYNC
- LEGAL_RETENTION

A given action/attribute must use only the purpose(s) applicable to its documented context. This list is a controlled design vocabulary, not a universal allowlist; it does not replace legal-basis, jurisdiction or field-level review. Earlier §29.1's shorter list is incomplete and is clarified by this addendum.

### 30.3 Boundary

The conceptual proposal inventory does not close GAP-04/A38/ERD-OPEN physical dependencies, approve physical columns/types/constraints, establish database classification controls, or prove RLS/server enforcement. Retention durations remain OPEN; legal hold suspends disposal. No SQL/DDL/DML, migration or database change is authorized.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 and Stage 6 remain NOT AUTHORIZED.


## 31. Append-only precision note — meaning of the 0/17 field-classification status (19 November 2026)

This note sharpens the denominator and status wording used in §§28–30.

- The 17 in “0/17 field-level classification complete” is the count of the 17 conceptual entities, not a count of physical fields.
- The status means **zero of the 17 entities had a complete, accepted field-level classification inventory at the §28.2 checkpoint**. It does not mean that the project had counted exactly zero physical columns.
- DOC-04 §29 subsequently enumerates proposed conceptual attribute sets for 17/17 entities. That advances design coverage but does not convert the proposals into accepted field dictionaries or verified physical columns.
- Therefore the precise current design status is: **17/17 entity-level conceptual attribute proposals enumerated; 0/17 entities with a fully accepted field-level classification; physical field-to-column mapping remains OPEN and has no verified completion count in this document.**
- D0–D4, purpose, audience, write authority, masking/export, retention and audit requirements still require field-by-field review. Do not treat the proposed labels in §29 as accepted classification evidence.

This wording clarification does not close any physical dictionary, RLS, schema or implementation dependency. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 27. CW-05 logical entity ownership, attribute navigation and tenant-integrity matrix (20 November 2026)

This addendum supplements §§3–26 and maps the historical 17 conceptual entities to the canonical M01–M21 logical ownership model. It does not change the 17-entity baseline, authorize physical SQL definitions, or convert conceptual relationships into physical foreign keys.

### 27.1 Entity-to-owner and logical-attribute crosswalk

| # | Conceptual entity | Primary owner | Logical attribute groups (DOC-04 §17.2) | Supporting handoff / boundary |
|---:|---|---|---|---|
| 1 | `inventory_batches` | M06 | Business/product/variant; physical lot identity; production/expiry; batch state; supplier reference | M07 custody; M08 supplier reference; M14 regulated controls where applicable |
| 2 | `inventory_movements` | M06 | Business/source identity; source document; time; product/variant/location; optional batch; signed base delta; actor; reversal/idempotency lineage | M07 custody context; source-domain command; immutable posted ledger |
| 3 | `inventory_balances` | M06 | Business/product/variant/location; on-hand/reserved/available projection; rebuild/reconciliation provenance | Read-only projection; never a posting authority |
| 4 | `inventory_batch_balances` | M06 | Parent balance; batch; projected on-hand/reserved/available; reconciliation to parent | Batch projection; no direct quantity write |
| 5 | `inventory_adjustments` | M06 | Business/location; adjustment identity; lifecycle/review/approval; reason; posting/reversal context | Independent approval under DOC-05; M06 posts ledger effect |
| 6 | `inventory_adjustment_items` | M06 | Parent adjustment; product/variant/batch; entered quantity/unit; conversion snapshot; signed base delta; movement reference | M06 owns line and movement posting |
| 7 | `stock_counts` | M06 | Business/location; count scope/session; snapshot/cutoff; blind-count; assignment; posting/reconciliation | M17 supplies workforce assignment; M06 finalizes stock effect |
| 8 | `stock_count_items` | M06 | Parent count; product/variant/batch; expected/count/variance; completion/recount context | M06 owns count detail; zero differs from uncounted NULL |
| 9 | `stock_transfers` | M07 | Business; transfer identity; source/destination locations; virtual transit; status; closure/disposition | M06 posts stock ledger effects; same Business and distinct source/destination |
| 10 | `stock_transfer_items` | M07 | Parent transfer; product/variant; requested quantity; shipment split; dispatched/received/returned/lost summaries | M06 owns corresponding inventory movement; summaries derive from events |
| 11 | `inventory_cost_exceptions` | M06 | Business/product/variant/location; cost exception; unknown-cost NULL; investigation/resolution; correction provenance | M16 owns any resulting financial journal posting; M06 owns inventory cost state |
| 12 | `inventory_reservations` | M06 | Business/source type/source ID; expiry/TTL; lifecycle; request/idempotency context | M03/M05 originate demand; M06 owns reservation state; A02 Alternative A remains distinct from A01 movement source registry |
| 13 | `inventory_reservation_items` | M06 | Parent reservation; product/variant/location; reserved/fulfilled/released; batch allocation; event history | M07 supports physical pick/custody; M06 owns allocation and atomic stock effect |
| 14 | `inventory_cost_layers` | M06 | Business/product/variant/location pool; source/receipt; layer identity; quantity/cost; transfer and landed-cost lineage | MWA/FIFO method governance is separate; not a separate M-domain; M16 owns financial posting |
| 15 | `inventory_cost_layer_consumptions` | M06 | Cost layer; movement/allocation; original consumption; eligible negative allocation; partial compensation; idempotency | M06 owns consumption/compensation lineage; M16 owns any journal posting |
| 16 | `stock_transfer_shipments` | M07 | Business/parent transfer; physical shipment identity; dispatch; transit; partial receipt; return/loss/cancel evidence | M06 posts inventory movements; M19 owns external delivery route/proof where applicable |
| 17 | `stock_transfer_shipment_items` | M07 | Parent shipment/transfer item; product/variant/batch; dispatched/received/returned/lost quantities; movement/cost reconciliation | M07 owns custody reconciliation; M06 owns stock ledger effect |

**Owner rule:** every entity above has exactly one primary logical owner. Supporting domains own their own objects and may provide references, commands, events, decisions or projections; they do not gain direct write ownership over the entity.

### 27.2 Relationship ownership and handoff crosswalk

| DOC-04 relationship | Source owner | Target owner | Required interpretation |
|---|---|---|---|
| REL-01 adjustment → adjustment items | M06 | M06 | Same-owner parent/child; M06 lifecycle controls |
| REL-02 stock count → count items | M06 | M06 | Same-owner parent/child; snapshot/recount rules remain |
| REL-03 transfer → transfer items | M07 | M07 | Same-owner custody aggregate |
| REL-04 transfer → shipments | M07 | M07 | One transfer may have multiple physical shipments |
| REL-05 transfer items → shipment items | M07 | M07 | Split shipment allocation; quantity caps remain conceptual until physically specified |
| REL-06 shipment → shipment items | M07 | M07 | Same-owner shipment aggregate |
| REL-07 shipment item → receipt events | M07 | M07 | Event structure remains conceptual/unapproved as a 17th-entity addition |
| REL-08 posted receipt detail → inventory movement | M07 | M06 | Cross-domain command/event handoff; M06 alone posts the movement |
| REL-09 posted return detail → inventory movement | M07 | M06 | Cross-domain command/event handoff; M06 alone posts the movement |
| REL-10 inventory movement → cost-layer allocation | M06 | M06 | Cost allocation lineage; bridge remains candidate |
| REL-11 cost layer → cost-layer allocation | M06 | M06 | Cost-layer lineage; bridge remains candidate |
| REL-12 eligible negative allocation → original consumption | M06 | M06 | Conceptual 1:1 cardinality; physical key/unique enforcement OPEN |
| REL-13 non-consumption allocation → zero consumption | M06 | M06 | Conceptual zero-consumption invariant; no physical row inferred |
| REL-14 original consumption → compensation | M06 | M06 | Partial compensation 1:N; aggregate cap remains conceptual until enforced |
| REL-15 reservation → reservation items | M06 | M06 | Same-owner reservation aggregate |
| REL-16 reservation items → batch allocations/batches | M06 | M06 | M06 owns allocation; M07 may perform physical custody/picking |

### 27.3 Tenant-scope matrix for all 17 entities

| Tenant rule | Entity coverage | Conceptual acceptance | Physical status |
|---|---|---|---|
| TEN-01 — tenant ownership context | All 17 entities | Each record resolves to one Business context | Exact tenant columns and keys OPEN |
| TEN-02 — same-tenant parent/child | Entities 4–10, 13, 16–17 and all REL parent/child references | No cross-Business parent/child relation | Composite-FK tuples and enforcement OPEN |
| TEN-03 — transfer source/destination | `stock_transfers`, `stock_transfer_items` | Both locations same Business; source differs from destination | Physical location keys and constraints OPEN |
| TEN-04 — MWA pool scope | `inventory_cost_layers` and costing lineage | Business + Product/Variant + Inventory Location; no cross-location pool | Physical key/unique tuple OPEN |
| TEN-05 — batch vs cost layer | `inventory_batches`, `inventory_cost_layers`, related allocations/consumptions | Separate identities and lifecycles | Physical independent keys OPEN |
| TEN-06 — reservation source | `inventory_reservations` | A02 Alternative A source_type/source_id on header with strict server validation; not A01 movement registry | Type allowlist, validation and FK strategy OPEN |
| TEN-07 — shipment/receipt/return/loss lineage | `stock_transfers`, `stock_transfer_items`, `stock_transfer_shipments`, `stock_transfer_shipment_items`, `inventory_movements` | Same-tenant lineage and reconciled disposition; M07 custody handoff to M06 posting | Physical event links, tenant keys and enforcement OPEN |

### 27.4 Physical-definition and non-inference guardrails

1. DOC-04 §17.2 remains the logical attribute inventory for 17/17 entities. This crosswalk assigns logical ownership and navigation; it does not turn descriptive information groups into approved SQL identifiers.
2. Physical field/key locator coverage remains 0/17 in the prior bounded recovery record. Do not claim a physical field dictionary is complete.
3. Do not infer generic `id`, `business_id`, timestamps, status columns, exact composite FK tuples, ON DELETE/UPDATE actions, indexes, numeric precision or SQL types.
4. The historical 17-entity baseline is unchanged. `inventory_cost_layer_movements` remains a candidate bridge, not an approved entity #18.
5. DOC-04 §18 cardinality labels remain conceptual. Cross-domain references do not authorize cross-domain writes; REL-08/09 require M07-to-M06 command/event handoff.
6. DOC-04 §26.6's next-routing instruction to DOC-05 is a historical snapshot. The active corrective sequence is governed by the current Worklist; CW-05 is the current DOC-04 owner-mapping task.

### 27.5 Acceptance boundary

**CW-05 logical entity ownership and tenant-integrity mapping: PASS at design cross-reference level, subject to PR/CI/merge/post-merge gates.** All 17 conceptual entities have one primary M owner; all 16 conceptual REL rows have source/target owner and handoff interpretation; TEN-01–TEN-07 are mapped without inventing physical keys.

Physical Data Dictionary acceptance remains **NOT ACCEPTED**. PK/FK/composite-FK tuples, field names/types/nullability/defaults, UNIQUE/CHECK/index definitions, referential actions, RLS/server enforcement, concurrency/idempotency implementation and executed evidence remain OPEN / NOT VERIFIED.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.


## 32. CW-05 section-numbering and pre-existing ownership-register clarification (20 November 2026)

This append-only note corrects the section locator for the CW-05 material appended after the original DOC-04 §31. The pre-existing sections §§27–31 are retained exactly as published before CW-05.

### 32.1 Existing authoritative registers

1. **§28 remains the authoritative 17-entity-to-domain owner register.** It already assigns each historical conceptual entity exactly one primary owner and lists supporting domains. The owner map was not first created by CW-05.
2. **§29 remains the conceptual logical attribute proposal inventory for 17/17 entities.** Its labels are semantic attribute proposals, not approved SQL columns.
3. **§30 remains the reconciliation of logical attribute proposals, D0–D4/purpose vocabulary and classification status.**
4. **§31 remains the precision note:** 17/17 conceptual attribute proposals enumerated; 0/17 entities with a fully accepted field-level classification; physical field-to-column mapping remains OPEN without a verified completion count.

### 32.2 CW-05 supplemental crosswalk

The CW-05 content appended after §31 and originally given the duplicate heading “§27” is designated **§32** for navigation. Its five subparts are referenced as §§32.1–32.5. The 17-entity table is a navigation/reconciliation copy of §28 and does not create new owner decisions.

- §32.1 — entity-to-owner and logical-attribute cross-reference to §§28–29.
- §32.2 — source/target owner and command/event handoff for REL-01–REL-16.
- §32.3 — TEN-01–TEN-07 tenant-scope mapping.
- §32.4 — physical-definition and non-inference guardrails.
- §32.5 — bounded acceptance status.

### 32.3 Corrected authority and status

- DOC-04 §28 is controlling for the primary owner of each of the 17 entities.
- DOC-04 §32 supplements §28 with relationship-level handoffs and tenant-rule navigation.
- DOC-03 §19 and DOC-06 §21 remain controlling for M-domain ownership and interactions; DOC-05 controls authorization decision boundaries.
- The candidate `inventory_cost_layer_movements` remains unapproved entity #18.
- Physical Data Dictionary remains NOT ACCEPTED. No physical field, SQL identifier, PK/FK/composite-FK tuple, constraint, index, RLS policy or server enforcement is approved by this clarification.
- CW05-DATA-01–12 remain DESIGN / NOT EXECUTED; evidence remains NOT GENERATED / NOT VERIFIED.

This locator correction does not change any FIX decision, conceptual entity owner, attribute proposal, relationship cardinality, tenant rule or implementation status.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.


## 33. CW-08 data-entity-to-requirement traceability crosswalk (20 November 2026)

DOC-04 §28 remains the authoritative 17-entity owner register; DOC-04 §32 supplements relationship/tenant handoffs. DOC-06 §31 is the current requirements/acceptance index.

| Data requirement area | DOC-06 anchor | DOC-04 authority | Acceptance boundary |
|---|---|---|---|
| 17 conceptual entity owners | §§21.1, 21.5 | §28 | Logical owner only; no physical schema acceptance |
| 16 conceptual relationship handoffs | §21.5 | §§18, 32 | Cardinality and command/event interpretation only; exact FK tuple OPEN |
| Tenant integrity TEN-01–TEN-07 | §21.5.9 | §32 | business_id and same-tenant rule; physical composite FK/RLS OPEN |
| Logical attribute inventory | §23 and §29–31 | §§29–31 | 17/17 proposed logical attribute groups; physical field classification NOT ACCEPTED |
| Costing/batch/reservation/transfer | §§21.1, 21.5, 26 | §§28, 32 | M06/M07/M16 boundaries; no DB push |
| Security evidence | §§25–29 | DOC-07 §§40, 43 | DESIGN / NOT EXECUTED |

**Disposition:** data-to-requirement traceability is explicit at logical design level. DOC-04 physical Data Dictionary remains NOT ACCEPTED; no SQL identifier, key, constraint, index, RLS or migration is authorized.


## 34. CW-11 — physical Data Dictionary and ERD specification acceptance audit (20 November 2026)

### 34.1 Audit identity and boundary

- Work package: **CW-11 — DOC-04 physical Data Dictionary and ERD specification acceptance**.
- Repository baseline: `main` after PR #122 merge commit `a41ea9d6c949cb6187f801885c1da3dae2cdcd24`.
- DOC-04 baseline blob SHA: `45a98b556e2fd3cde4a1cf1cbe97d003d2aaafa0`.
- Reviewed DOC-04 scope: §§1–33, with focused acceptance review of §§3, 8–13, 16–25, 27–33.
- Cross-document control references reviewed: current Worklist §§15.44–15.49 and DOC-09 §3C (ERD-OPEN-01–27). This is a documentation-design audit only; no live database introspection or runtime verification was performed.
- Governance: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.

This pass distinguishes four acceptance layers that must not be collapsed: (1) conceptual entity and domain baseline; (2) logical attributes, relationships and tenant-scope design; (3) physical schema specification; and (4) implemented/enforced/tested behavior. Passing an earlier layer does not imply acceptance of a later layer.

### 34.2 Current DOC-04 acceptance baseline

| Layer | Current evidence in DOC-04 | Disposition |
|---|---|---|
| Conceptual entity inventory | §3 and A12.38 conceptual baseline | 17/17 reviewed; historical baseline retained |
| Conceptual relationship/cardinality | §§8, 18 and 32; A12.39 scope | Conceptual specification documented; A12.39 closure is conceptual only |
| Logical attributes and data handling | §§17, 27–31 | 17/17 entity-level logical inventories proposed; not SQL column names or approved physical fields |
| Entity/domain ownership and tenant rules | §§28 and 32 | 17/17 logical owner mapping and TEN-01–TEN-07 conceptual rules; exact physical keys/enforcement OPEN |
| Candidate constraints, numeric policy and event/concurrency rules | §§19–21 | Design candidates/invariants documented; exact physical definitions and executed evidence OPEN |
| Physical Data Dictionary | §§9, 22–24 | 0/17 entities accepted; authoritative physical field/key locators 0/17 in the bounded source recovery recorded in §23 |
| Canonical physical ERD | §§22–26 and DOC-09 §3C | NOT ACCEPTED / NOT CANONICAL; no approval to promote ERD v9.6.9 or this reconstructed working master |
| Runtime enforcement and tests | §§10, 21–24 | NOT VERIFIED / NOT EXECUTED; no RLS, server authorization, concurrency or application test evidence created by this audit |

**Finding CW11-F01 — layer conflation risk.** The existing conceptual and logical matrices are materially developed, but they do not satisfy physical dictionary or canonical physical ERD acceptance. Any document status or readiness statement that treats 17/17 conceptual/logical coverage as physical acceptance is incorrect and must remain unpromoted.

### 34.3 Physical acceptance gate — required per entity

The following gate applies independently to each of the 17 historical conceptual entities. The entity-specific findings in §22.3 remain the detailed gap record; this table establishes the common acceptance contract and does not replace those findings.

| Gate | Required content for each entity | Current evidence status | Acceptance rule |
|---|---|---|---|
| P01 — physical identity | Approved physical table/entity name, schema/namespace and entity lifecycle | OPEN / NOT VERIFIED | No conceptual name is presumed to be a final physical table name |
| P02 — complete fields | Every physical field, purpose, SQL type, precision/scale where relevant, nullability, default and generated/computed behavior | OPEN / NOT VERIFIED | No field may be inferred from logical labels or generic conventions |
| P03 — keys | Exact PK and candidate/alternate key definitions | OPEN / NOT VERIFIED | Exact columns and uniqueness semantics must be explicitly specified |
| P04 — relationships | Exact FK/composite-FK tuples, referenced keys, cardinality, optionality and tenant-safe relation | OPEN / NOT VERIFIED | Conceptual cardinality alone is insufficient |
| P05 — integrity | Exact UNIQUE/CHECK/exclusion constraints and index expressions/predicates | OPEN / NOT VERIFIED | Candidate matrices in §19 are not physical definitions |
| P06 — lifecycle | Delete/update/restrict/cascade/set-null behavior, immutability, retention and audit treatment | OPEN / NOT VERIFIED | Must be specified per entity/relationship; never inferred |
| P07 — tenant/security | business/parent scope, composite tenant integrity, RLS policy and server/API authorization contract | OPEN / NOT VERIFIED | Design rule is not enforcement evidence; tests remain separate |
| P08 — operations | Numeric capacity/rounding, transaction/locking/idempotency/reconciliation behavior where applicable | OPEN / NOT VERIFIED | Each invariant needs an explicit physical/technical mechanism or a recorded unresolved disposition |
| P09 — provenance | Decision owner/approval, source/version, exact locator, supersession and scope | PARTIAL / OPEN | Project-authored proposals must be labelled CANDIDATE until explicitly approved |
| P10 — verification | Schema review evidence and separately identified executable tests/results | NOT GENERATED / NOT VERIFIED | A design document cannot claim implementation, execution or PASS |

**Acceptance rule:** an entity is physically accepted only when all applicable P01–P10 gates are satisfied with explicit evidence and review. A blank, candidate, inferred or merely cross-referenced value is not a pass. The aggregate DOC-04 physical acceptance count remains **0/17** until entity-level acceptance records are complete.

### 34.4 Entity-level disposition index

The following index preserves the 17-entity baseline and points to the existing detailed per-entity review in §22.3. It is not a new physical definition.

| # | Historical conceptual entity | Current physical disposition | Controlling detailed review |
|---:|---|---|---|
| 1 | `inventory_batches` | NOT ACCEPTED — fields, keys, uniqueness, status domain and delete/update behavior unresolved | §22.3 row 1 |
| 2 | `inventory_movements` | NOT ACCEPTED — fields, source registry/FK, tenant keys, reversal linkage and numeric/index definitions unresolved | §22.3 row 2 |
| 3 | `inventory_balances` | NOT ACCEPTED — grain/key, nullable-variant semantics, fields, uniqueness and concurrency unresolved | §22.3 row 3 |
| 4 | `inventory_batch_balances` | NOT ACCEPTED — parent relation/key, nullable uniqueness, reconciliation and repair evidence unresolved | §22.3 row 4 |
| 5 | `inventory_adjustments` | NOT ACCEPTED — fields, workflow/approval representation, actor/source, FK and lifecycle unresolved | §22.3 row 5 |
| 6 | `inventory_adjustment_items` | NOT ACCEPTED — conversion snapshot, field types/nullability, movement linkage and row constraints unresolved | §22.3 row 6 |
| 7 | `stock_counts` | NOT ACCEPTED — snapshot/watermark fields, lifecycle, partial posting and recount history unresolved | §22.3 row 7 |
| 8 | `stock_count_items` | NOT ACCEPTED — count fields, numeric capacity, cutoff linkage, recount history and constraints unresolved | §22.3 row 8 |
| 9 | `stock_transfers` | NOT ACCEPTED — state/outcome fields, transition enforcement, authorization and tenant-safe location keys unresolved | §22.3 row 9 |
| 10 | `stock_transfer_items` | NOT ACCEPTED — item identity, FK, quantity caps, nullable uniqueness and aggregate enforcement unresolved | §22.3 row 10 |
| 11 | `inventory_cost_exceptions` | NOT ACCEPTED — exception code/status, source/layer references, resolved-cost and lifecycle fields unresolved | §22.3 row 11 |
| 12 | `inventory_reservations` | NOT ACCEPTED — source validation, tenant scope, expiry/TTL, lifecycle, keys and indexes unresolved | §22.3 row 12 |
| 13 | `inventory_reservation_items` | NOT ACCEPTED — allocation/event structure, batch FK, quantity caps, fulfillment history and concurrency unresolved | §22.3 row 13 |
| 14 | `inventory_cost_layers` | NOT ACCEPTED — layer source identity, transfer mapping, landed-cost correction, numeric capacity, keys and lifecycle unresolved | §22.3 row 14 |
| 15 | `inventory_cost_layer_consumptions` | NOT ACCEPTED — allocation/consumption/compensation keys, caps, idempotency, locking and fields unresolved | §22.3 row 15 |
| 16 | `stock_transfer_shipments` | NOT ACCEPTED — shipment identity/sequence, status/outcome, dispatch evidence, lifecycle and uniqueness unresolved | §22.3 row 16 |
| 17 | `stock_transfer_shipment_items` | NOT ACCEPTED — receipt-event structure, movement FK, quantity caps, idempotency and fields unresolved | §22.3 row 17 |

### 34.5 ERD-specific acceptance and relationship rules

1. The conceptual relationship set in §§8 and 18 remains a design baseline only. Each relationship must be promoted to physical form only after its exact FK/composite-FK columns, referenced key, optionality, uniqueness and tenant behavior are explicitly designed and approved.
2. The logical owner and tenant mappings in §§28 and 32 do not prove that the corresponding physical key tuples or RLS/server controls exist.
3. M:N or allocation relationships require an explicit bridge representation. A12.17 cardinality rules do not by themselves select a physical bridge table or prove its constraints.
4. The candidate `inventory_cost_layer_movements` remains **CANDIDATE / NOT APPROVED**. It is not entity #18 and must not be inserted into the 17-entity count absent a separate explicit decision.
5. ERD v9.6.9 remains a working reference, not an approved canonical physical ERD. DOC-04 remains a reconstructed working master, DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.
6. No cascade/restrict/set-null action, index, numeric precision, enum, generated field, timestamp, tenant column or SQL type is established merely by convention or by a conceptual invariant.

### 34.6 Cross-document dependency reconciliation

| Dependency | DOC-04 reference | DOC-09 reference | CW-11 treatment |
|---|---|---|---|
| Canonical ERD and physical schema authority | §§22–26 | ERD-OPEN-01–03 | OPEN; approval and physical specification are separate gates |
| Candidate bridge entity | §§3, 22–25, 34.5 | ERD-OPEN-04 | REVIEW / CANDIDATE; no entity #18 approval |
| A01 source registry | §§5, 9, 13, 21–22 | ERD-OPEN-05 | OPEN; source identity and FK mechanism unresolved |
| A02 reservation source | §§5, 9, 13, 21–22 | ERD-OPEN-06 | OPEN; do not conflate with A01 |
| Shipment receipt/return/loss events | §§7–8, 18, 21–22 | ERD-OPEN-07, 14–15 | OPEN; event model and movement links unresolved |
| Concurrency/projection/idempotency | §§19–21 | ERD-OPEN-09–13, 27 | OPEN / REVIEW; no executed evidence |
| A12.18–A12.28 and A12.40–A12.41 provenance/gates | §§11, 13, 23–25 | ERD-OPEN-16–22 | UNRECOVERED / PARTIAL / NOT STARTED as source-native; no reconstruction |
| Purchasing 14→15 and Sales 20→18 | §25 | ERD-OPEN-24–25 | OPEN; outside this bounded physical inventory pass |

DOC-09 IDs and statuses remain owned by DOC-09. This crosswalk does not close, merge or reassign any dependency.

### 34.7 CW-11 findings and bounded disposition

| Finding | Result | Required action |
|---|---|---|
| CW11-F01 — conceptual/logical coverage mistaken for physical acceptance | CONFIRMED RISK | Maintain separate acceptance layers and explicit 0/17 physical status |
| CW11-F02 — per-entity physical gate criteria dispersed across §§9, 16–24 | CONFIRMED | Consolidate common P01–P10 acceptance contract in this section; preserve detailed row findings in §22.3 |
| CW11-F03 — ERD canonicality and candidate bridge could be misread | CONTROLLED OPEN | Reaffirm ERD v9.6.9 working-reference status and candidate #18 prohibition |
| CW11-F04 — cross-document dependency closure could be overstated | CONTROLLED OPEN | Keep DOC-09 ERD-OPEN statuses source-native and unchanged |
| CW11-F05 — physical field/key evidence unavailable in the bounded source set | OPEN / BLOCKING | Do not fabricate physical values; proceed only with clearly labelled project-authored CANDIDATE design proposals or newly approved physical evidence |

**CW-11 current disposition: PARTIAL — ACCEPTANCE NOT MET / PHYSICAL EVIDENCE GATE BLOCKED.** The acceptance contract and entity-level disposition index are now consolidated; this does not accept any physical entity, close A38-G01–G04, close DOC-09 ERD-OPEN items, or promote DOC-04 to canonical/final.

Next work inside CW-11 may develop a project-authored candidate physical specification for review, but each proposed field/key/constraint must be explicitly labelled CANDIDATE / NOT APPROVED and must not be represented as existing schema or approved implementation. Separate user/design approval is required before promoting proposals to FIX/APPROVED. Runtime/schema verification and test execution remain distinct later gates.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, migration, RLS/Auth, trigger, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production change was made. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 35. CW-11 candidate physical specification — Package A: ledger and balance foundation (20 November 2026)

### 35.1 Status and drafting convention

**PACKAGE A STATUS: CANDIDATE DESIGN — NOT APPROVED / NOT PHYSICAL-SCHEMA EVIDENCE.** This is a project-authored proposal derived from the conceptual rules already documented in DOC-04. It is not a claim about an existing database, deployed table, migration, or approved schema. Every identifier, type, nullability choice, and key below is a candidate for design review only.

Candidate type conventions for this package:
- `uuid` identifiers are proposed, not established physical types.
- `numeric` is proposed for quantities; precision/scale and rounding are intentionally left OPEN pending a separate numeric-capacity decision.
- `timestamptz` is proposed for event/audit instants; exact timezone and event-time policy remain OPEN.
- `date` is proposed for calendar-only production/expiry values.
- `text` plus an explicit controlled-value design is proposed for lifecycle/source vocabularies; final enum/check representation remains OPEN.
- External logical targets (Business, Product, Variant, Inventory Location, Unit, Supplier, Actor) are placeholders. Their physical table names, key types and FK tuples are not approved by this package.

### 35.2 Entity A-01 — `inventory_batches`

**Purpose:** identify a physical lot/batch independently from cost-layer identity. FEFO selects eligible physical batches. Quantity state belongs in the batch-balance projection, not as mutable stock totals on the batch identity record.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate batch identity / PK; key type not approved |
| `business_id` | uuid | NOT NULL | Candidate tenant owner; exact composite FK strategy OPEN |
| `product_id` | uuid | NOT NULL | Logical product reference; physical target/key OPEN |
| `variant_id` | uuid | NULL | Optional variant; nullable uniqueness strategy OPEN |
| `inventory_location_id` | uuid | NOT NULL | Logical storage location; physical target/key OPEN |
| `batch_code` | text | NOT NULL | Business-facing lot/batch identifier; uniqueness scope OPEN |
| `manufactured_on` | date | NULL | Optional production date; source/validation OPEN |
| `expires_on` | date | NULL | Optional expiry date; FEFO eligibility policy remains separately specified |
| `supplier_id` | uuid | NULL | Optional logical supplier reference; FK and source semantics OPEN |
| `received_at` | timestamptz | NULL | Candidate receipt instant; relation to posted receipt event must be finalized |
| `batch_status` | text | NOT NULL | Candidate controlled lifecycle value; allowed values and transitions OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant; retention/time policy OPEN |
| `created_by` | uuid | NULL | Candidate actor reference; actor identity source OPEN |

Candidate constraints to review (NOT APPROVED): identity PK; same-business references for product/variant/location/supplier; date ordering where both dates exist; batch-code uniqueness scope and null-variant handling. Do not add an index or uniqueness expression until the exact lookup/FEFO query and duplicate policy are agreed. No batch quantity column is proposed here; quantities are projected in `inventory_batch_balances`.

### 35.3 Entity A-02 — `inventory_movements`

**Purpose:** immutable posted quantity-change ledger and source of truth for physical quantity changes. Each posted record carries a signed base-quantity delta. Corrections use reversal/compensating records, not mutation/deletion.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate movement identity / PK; key type not approved |
| `business_id` | uuid | NOT NULL | Candidate tenant owner; exact composite FK strategy OPEN |
| `inventory_location_id` | uuid | NOT NULL | Logical affected location; physical target/key OPEN |
| `product_id` | uuid | NOT NULL | Logical affected product; physical target/key OPEN |
| `variant_id` | uuid | NULL | Optional product variant; nullable-key strategy OPEN |
| `batch_id` | uuid | NULL | Optional physical batch reference; FK/tenant tuple OPEN |
| `movement_kind` | text | NOT NULL | Candidate movement classification; vocabulary and transition rules OPEN |
| `quantity_delta_base` | numeric | NOT NULL | Signed base-quantity delta; precision/scale and sign validation OPEN |
| `base_unit_id` | uuid | NOT NULL | Unit identity for the base quantity; physical target/key OPEN |
| `source_reference_id` | uuid | NULL | Candidate reference to A01 source/event registry; registry and FK structure OPEN |
| `reversal_of_movement_id` | uuid | NULL | Candidate self-reference to original movement; one-to-one/partial reversal policy must follow approved correction rules |
| `occurred_at` | timestamptz | NOT NULL | Business event time; source and timezone policy OPEN |
| `posted_at` | timestamptz | NOT NULL | Candidate posting instant; posted-ledger immutability boundary |
| `actor_id` | uuid | NULL | Candidate posting actor; service/system actor model OPEN |

Candidate constraints to review (NOT APPROVED): PK; tenant-safe FK tuples for product/variant/location/batch/unit/source; movement sign and zero-value policy; reversal lineage and cumulative reversal caps; append-only update/delete denial; idempotency key and canonical-payload linkage. The A01 source registry is not replaced by a generic `source_type/source_id` pair here. Exact registry representation remains OPEN. Draft workflow state, if needed, must not be confused with posted ledger rows.

### 35.4 Entity A-03 — `inventory_balances`

**Purpose:** rebuildable projection at Business + Product/Variant + Inventory Location grain. It is not the source of truth; it must reconcile to posted `inventory_movements` and active reservation state. Conceptual available quantity is on-hand minus reserved.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `business_id` | uuid | NOT NULL | Candidate tenant scope; exact key strategy OPEN |
| `inventory_location_id` | uuid | NOT NULL | Candidate location grain |
| `product_id` | uuid | NOT NULL | Candidate product grain |
| `variant_id` | uuid | NULL | Optional variant grain; null-safe unique key strategy OPEN |
| `quantity_on_hand_base` | numeric | NOT NULL | Candidate physical on-hand projection; precision/scale OPEN |
| `quantity_reserved_base` | numeric | NOT NULL | Candidate active reservation projection; reconciliation source OPEN |
| `last_movement_id` | uuid | NULL | Candidate high-watermark/reference; ordering and replay semantics OPEN |
| `reconciled_at` | timestamptz | NULL | Candidate last successful reconciliation instant |
| `updated_at` | timestamptz | NOT NULL | Candidate projection refresh instant |

No independent surrogate `id` is selected for this projection in this proposal; candidate grain is the natural composite of business, location, product and optional variant. Whether to use a surrogate PK plus a unique grain or a composite PK remains OPEN. `quantity_available_base` is intentionally not stored in this first proposal: it is derived as on-hand minus reserved unless a later performance design explicitly approves a stored/generated projection with reconciliation safeguards.

Candidate constraints to review (NOT APPROVED): one row per logical grain; tenant-safe references; non-negative reservation and any permitted negative on-hand policy; consistency of `last_movement_id`; deterministic rebuild and concurrency-safe upsert. Nullable-variant uniqueness cannot be assumed from a conventional UNIQUE constraint.

### 35.5 Entity A-04 — `inventory_batch_balances`

**Purpose:** rebuildable physical-batch projection. Batch-level quantities must reconcile to the parent product/variant/location balance and must not become a second source of truth.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `inventory_location_id` | uuid | NOT NULL | Candidate location grain |
| `product_id` | uuid | NOT NULL | Candidate product grain |
| `variant_id` | uuid | NULL | Optional variant grain; null-safe uniqueness OPEN |
| `batch_id` | uuid | NOT NULL | Physical batch identity; exact same-tenant FK OPEN |
| `quantity_on_hand_base` | numeric | NOT NULL | Candidate batch on-hand projection; precision/scale OPEN |
| `quantity_reserved_base` | numeric | NOT NULL | Candidate reserved quantity for this batch; allocation reconciliation OPEN |
| `reconciled_at` | timestamptz | NULL | Candidate last successful reconciliation instant |
| `updated_at` | timestamptz | NOT NULL | Candidate projection refresh instant |

Candidate grain is Business + Inventory Location + Product/Variant + Batch. Candidate PK strategy (composite versus surrogate plus unique grain) remains OPEN. The batch's product, variant, business and location must agree with this projection; exact composite-FK or equivalent enforcement is not selected here.

Candidate constraints to review (NOT APPROVED): one row per batch grain; batch belongs to the same business/product/variant/location; batch balances aggregate to the parent inventory balance; reservation allocation cannot exceed eligible batch quantity under the approved reservation rules; projection rebuild is deterministic and concurrency-safe.

### 35.6 Package A cross-entity review matrix

| Review ID | Candidate relationship/invariant | Required decision before approval |
|---|---|---|
| CA-01 | Batch → product/variant/location/business/supplier | Exact physical targets, key types, optionality and tenant-safe FK tuples |
| CA-02 | Movement → product/variant/location/batch/unit/source registry | Exact FK tuples, source-registry structure, event/source uniqueness and tenant enforcement |
| CA-03 | Movement reversal lineage | Whether reversals are one-to-one or partial, cumulative cap and correction event semantics |
| CA-04 | Movement → balance projection refresh | Transaction boundary, replay/watermark, locking and failure recovery |
| CA-05 | Inventory balance grain | Composite versus surrogate PK and null-safe variant uniqueness mechanism |
| CA-06 | Batch balance grain | Batch-to-parent grain integrity and batch-level reconciliation invariant |
| CA-07 | Numeric fields | Approved precision/scale, rounding, unit conversion and maximum quantity/cost capacity |
| CA-08 | Audit/event timestamps | Event-time versus posting-time semantics, timezone, actor identity and retention |
| CA-09 | Index design | Exact FEFO selection, movement replay, reconciliation and operational query patterns; no speculative indexes |
| CA-10 | Security | RLS and server/API enforcement contract, tenant-negative tests and independent evidence |

### 35.7 Package A disposition

- Candidate entity coverage: **4/17 drafted** (entities 1–4); remaining 13 entities are not drafted in this package.
- Candidate field/type proposals: **NOT APPROVED**; no proposal is an assertion of current physical schema.
- Candidate PK/FK/UNIQUE/CHECK/index/referential actions: **OPEN / NOT APPROVED**.
- Physical Data Dictionary acceptance: remains **0/17**.
- Conceptual 17-entity baseline and all approved FIX decisions remain unchanged.
- Candidate `inventory_cost_layer_movements` remains unapproved as entity #18.

Next Package B: adjustment and stock-count entities 5–8. Package C: transfer/shipment entities 9–10 and 16–17. Package D: cost exception, reservation and costing entities 11–15. After all candidate packages, perform a cross-entity key/relationship/tenant/constraint reconciliation before any design approval. Runtime schema, RLS, application implementation and tests remain separate later gates.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production change was made. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 36. CW-11 candidate physical specification — Package B: adjustments and stock counts (20 November 2026)

### 36.1 Status and shared conventions

**PACKAGE B STATUS: CANDIDATE DESIGN — NOT APPROVED.** This package continues the project-authored proposal pattern in §35. The field names, types, nullability, identifiers and constraints below are design candidates only, not claims about an existing physical schema. Candidate type conventions from §35.1 apply unchanged; no numeric precision/scale, physical FK tuple, enum, index or referential action is approved here.

### 36.2 Entity B-05 — `inventory_adjustments`

**Purpose:** adjustment header and controlled posting lifecycle. An adjustment has no stock effect before posting; posted history is immutable and corrections use reversal/compensating records.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate adjustment identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant owner; composite FK strategy OPEN |
| `inventory_location_id` | uuid | NOT NULL | Candidate affected location |
| `adjustment_reference` | text | NOT NULL | Business-visible reference; uniqueness scope OPEN |
| `reason_code` | text | NOT NULL | Candidate reason vocabulary; controlled values/approval OPEN |
| `adjustment_status` | text | NOT NULL | Candidate lifecycle state; allowed transitions OPEN |
| `requested_by` | uuid | NULL | Candidate requester actor |
| `submitted_at` | timestamptz | NULL | Candidate submission instant |
| `approved_by` | uuid | NULL | Candidate approver actor; SoD policy remains DOC-05 authority |
| `approved_at` | timestamptz | NULL | Candidate approval instant |
| `posted_at` | timestamptz | NULL | Candidate posting instant; stock effect only after valid posting |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |
| `created_by` | uuid | NULL | Candidate creator actor |

Candidate constraints to review (NOT APPROVED): same-business/location ownership; reference uniqueness; status/transition validation; approval actor separation where required; posted header immutability; posting only when all item quantities and generated movement links reconcile. Exact approval thresholds, statuses and event records remain OPEN.

### 36.3 Entity B-06 — `inventory_adjustment_items`

**Purpose:** adjustment line with input quantity, unit/conversion context and signed base-quantity effect. A posted item generates a corresponding inventory movement; correction uses a new/reversal record.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate adjustment-line identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `adjustment_id` | uuid | NOT NULL | Candidate parent adjustment reference |
| `product_id` | uuid | NOT NULL | Candidate product reference |
| `variant_id` | uuid | NULL | Optional variant reference |
| `batch_id` | uuid | NULL | Optional physical batch reference; eligibility policy OPEN |
| `input_quantity` | numeric | NOT NULL | Candidate user-entered quantity; precision/scale OPEN |
| `input_unit_id` | uuid | NOT NULL | Candidate input unit reference |
| `conversion_snapshot` | jsonb | NULL | Candidate immutable conversion context; schema/version/provenance OPEN |
| `quantity_delta_base` | numeric | NOT NULL | Candidate signed base-quantity delta; sign and rounding validation OPEN |
| `base_unit_id` | uuid | NOT NULL | Candidate base unit reference |
| `movement_id` | uuid | NULL | Candidate link to generated posted movement; one-to-one/idempotency rules OPEN |
| `line_note` | text | NULL | Optional explanation; data minimization/retention OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): adjustment parent and product/variant/batch/unit references remain in one business; conversion snapshot is immutable after submission/posting; zero/negative input policy; one generated movement per posted adjustment item; no direct stock effect before posting; duplicate posting/idempotency protection. JSONB is only a candidate representation, not a selected storage format.

### 36.4 Entity B-07 — `stock_counts`

**Purpose:** stock-count session, location, scope and snapshot/cutoff context. Snapshot time is distinct from count start time; movements after the snapshot must be accounted for under an approved cutoff/watermark rule.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate stock-count identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant owner |
| `inventory_location_id` | uuid | NOT NULL | Candidate counted location |
| `count_reference` | text | NOT NULL | Candidate business-visible reference; uniqueness scope OPEN |
| `count_status` | text | NOT NULL | Candidate lifecycle state; transitions OPEN |
| `scope_definition` | jsonb | NULL | Candidate scope snapshot; schema/version and alternative normalized representation OPEN |
| `snapshot_at` | timestamptz | NOT NULL | Candidate inventory snapshot instant; distinct from session start |
| `cutoff_movement_id` | uuid | NULL | Candidate movement watermark; ordering/replay semantics OPEN |
| `started_at` | timestamptz | NULL | Candidate operator start instant |
| `completed_at` | timestamptz | NULL | Candidate completion instant |
| `posted_at` | timestamptz | NULL | Candidate variance-posting instant |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |
| `created_by` | uuid | NULL | Candidate creator actor |

Candidate constraints to review (NOT APPROVED): one tenant/location scope; snapshot reproducibility; exact cutoff/watermark semantics; partial posting and recount lifecycle; no duplicate active count over incompatible scopes; posting must account for post-snapshot movements. Scope JSONB is a candidate only and may be replaced by normalized scope rows after review.

### 36.5 Entity B-08 — `stock_count_items`

**Purpose:** capture system snapshot, physical counted quantity and variance. A NULL counted quantity means not counted; zero is a valid physical count and must not be conflated with NULL.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate count-line identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `stock_count_id` | uuid | NOT NULL | Candidate parent stock-count reference |
| `product_id` | uuid | NOT NULL | Candidate product reference |
| `variant_id` | uuid | NULL | Optional variant reference |
| `batch_id` | uuid | NULL | Optional physical batch reference |
| `system_quantity_snapshot_base` | numeric | NOT NULL | Candidate system quantity at snapshot; precision/scale OPEN |
| `counted_quantity_base` | numeric | NULL | Candidate physical count; NULL=not counted, zero=valid count |
| `variance_quantity_base` | numeric | NULL | Candidate derived/stored variance; derivation and storage policy OPEN |
| `counted_at` | timestamptz | NULL | Candidate count instant |
| `counted_by` | uuid | NULL | Candidate counting actor |
| `recount_required` | boolean | NOT NULL | Candidate review flag; default and state machine OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): count-line grain and uniqueness; same-business parent/product/variant/batch relations; NULL-versus-zero semantics; whether variance is stored or derived; recount history model (in-row revision versus separate append-only count-attempt records); count capacity and rounding; posting movement lineage and idempotency. The `recount_required` field is a proposal only; no final default or workflow is selected.

### 36.6 Package B cross-entity review matrix

| Review ID | Candidate relationship/invariant | Required decision before approval |
|---|---|---|
| CB-01 | Adjustment header → adjustment items | Parent/child tenant-safe key tuple, line identity and deletion behavior |
| CB-02 | Posted adjustment item → inventory movement | Exact one-to-one linkage, posting transaction, replay and correction policy |
| CB-03 | Adjustment approvals | Requester/approver separation, thresholds, approval lifecycle and actor evidence |
| CB-04 | Input quantity → base quantity | Conversion snapshot format/version, rounding and numeric capacity |
| CB-05 | Stock count → snapshot/cutoff movement watermark | Snapshot boundary, ordering and post-snapshot movement treatment |
| CB-06 | Stock count item → product/variant/batch | Scope completeness and tenant-safe FK tuple |
| CB-07 | NULL count versus zero count | Explicit validation, UI/API serialization and recount semantics |
| CB-08 | Recount history | Append-only attempt history versus mutable current count decision |
| CB-09 | Count variance → movement posting | Approval/partial posting, idempotency, reversal and reconciliation |
| CB-10 | Indexes and concurrent count sessions | Query workload, lock scope and overlap policy; no speculative index |

### 36.7 Package B disposition

- Candidate entity coverage: **4/17 additional entities drafted** (entities 5–8); cumulative candidate coverage **8/17**.
- Candidate field/type proposals: **NOT APPROVED**; no current-schema assertion.
- PK/FK/UNIQUE/CHECK/index/referential actions: **OPEN / NOT APPROVED**.
- Physical Data Dictionary acceptance remains **0/17**.
- Conceptual adjustment/count rules remain unchanged; no FIX decision is modified.

Next Package C: transfer/shipment entities 9–10 and 16–17. Package D: cost exception, reservation and costing entities 11–15. After Packages A–D, perform cross-entity key/relationship/tenant/constraint reconciliation. Runtime schema, RLS, application implementation and tests remain separate gates.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production change was made. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 37. CW-11 candidate physical specification — Package C: transfers and shipments (20 November 2026)

### 37.1 Status and shared conventions

**PACKAGE C STATUS: CANDIDATE DESIGN — NOT APPROVED.** Candidate type conventions in §35.1 apply. This package does not assert that any proposed field, type, table, key, index, status or FK exists in the current database. Transfer and shipment event semantics remain subject to explicit design review.

### 37.2 Entity C-09 — `stock_transfers`

**Purpose:** transfer header between source and destination inventory locations. The header owns the overall transfer request/approval lifecycle; shipment records represent one or more dispatch/receipt legs. Header-level status must not erase partial shipment or exception history.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate transfer identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant owner |
| `source_location_id` | uuid | NOT NULL | Candidate source inventory location |
| `destination_location_id` | uuid | NOT NULL | Candidate destination inventory location |
| `transfer_reference` | text | NOT NULL | Candidate business-visible reference; uniqueness scope OPEN |
| `transfer_status` | text | NOT NULL | Candidate overall lifecycle state; transition map OPEN |
| `requested_by` | uuid | NULL | Candidate requester actor |
| `requested_at` | timestamptz | NOT NULL | Candidate request instant |
| `approved_by` | uuid | NULL | Candidate approver actor; authorization rules owned by DOC-05 |
| `approved_at` | timestamptz | NULL | Candidate approval instant |
| `completed_at` | timestamptz | NULL | Candidate final completion instant; partial completion rule OPEN |
| `cancelled_at` | timestamptz | NULL | Candidate cancellation instant; cancellation after dispatch restrictions OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |
| `created_by` | uuid | NULL | Candidate creator actor |

Candidate constraints to review (NOT APPROVED): source and destination must be distinct and in the same business; both locations must be tenant-safe; reference uniqueness; lifecycle transitions; cancellation/rejection after dispatch; aggregate shipped/received quantities derived from shipment records rather than duplicated as mutable header totals.

### 37.3 Entity C-10 — `stock_transfer_items`

**Purpose:** requested product/variant quantity per transfer. Actual batch allocation and shipment quantities are represented by shipment items, allowing multiple shipments and partial dispatches.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate transfer-line identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `stock_transfer_id` | uuid | NOT NULL | Candidate parent transfer reference |
| `line_number` | integer | NOT NULL | Candidate stable line sequence; uniqueness scope OPEN |
| `product_id` | uuid | NOT NULL | Candidate product reference |
| `variant_id` | uuid | NULL | Optional variant reference |
| `requested_quantity_base` | numeric | NOT NULL | Candidate requested base quantity; precision/scale OPEN |
| `base_unit_id` | uuid | NOT NULL | Candidate base unit reference |
| `line_note` | text | NULL | Optional line note |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): parent/product/variant/unit tenant-safe relations; unique line number per transfer; positive quantity policy; whether transfer item edits are permitted after approval or after first dispatch; shipment aggregate caps cannot exceed approved/requested quantity except under an explicit over/under-shipment exception policy.

### 37.4 Entity C-16 — `stock_transfer_shipments`

**Purpose:** one dispatch/receipt shipment leg under a transfer. A transfer may contain multiple shipments; sequence identity must remain stable and partial shipment history must be preserved.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate shipment identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `stock_transfer_id` | uuid | NOT NULL | Candidate parent transfer reference |
| `shipment_reference` | text | NOT NULL | Candidate shipment reference; uniqueness scope OPEN |
| `shipment_sequence` | integer | NOT NULL | Candidate sequence within transfer; stable allocation policy OPEN |
| `shipment_status` | text | NOT NULL | Candidate shipment lifecycle state; vocabulary/transitions OPEN |
| `dispatched_at` | timestamptz | NULL | Candidate dispatch instant |
| `dispatched_by` | uuid | NULL | Candidate dispatch actor |
| `received_at` | timestamptz | NULL | Candidate receipt completion instant; partial receipt policy OPEN |
| `received_by` | uuid | NULL | Candidate receiving actor |
| `tracking_reference` | text | NULL | Optional external/internal tracking reference; privacy/uniqueness OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |
| `created_by` | uuid | NULL | Candidate creator actor |

Candidate constraints to review (NOT APPROVED): same-business parent relation; unique shipment sequence/reference within approved scope; dispatch only from approved transfer; receipt only against dispatched quantities; no status overwrite that loses per-line receipt/exception events; whether shipment header is immutable after dispatch and how cancellations/returns are represented.

### 37.5 Entity C-17 — `stock_transfer_shipment_items`

**Purpose:** batch-specific quantity allocation for a shipment line, linking transfer demand to physical batch and recording dispatch/receipt/exception quantities. This candidate deliberately keeps event decomposition OPEN because receipt, return, loss and damage may require append-only event rows rather than mutable totals.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate shipment-line identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `shipment_id` | uuid | NOT NULL | Candidate parent shipment reference |
| `stock_transfer_item_id` | uuid | NOT NULL | Candidate transfer demand line reference |
| `batch_id` | uuid | NOT NULL | Candidate source physical batch reference |
| `quantity_dispatched_base` | numeric | NOT NULL | Candidate dispatch quantity; precision/scale OPEN |
| `quantity_received_base` | numeric | NULL | Candidate received quantity; NULL means receipt not recorded, zero is a recorded zero |
| `quantity_lost_base` | numeric | NULL | Candidate loss quantity; event and posting semantics OPEN |
| `quantity_damaged_base` | numeric | NULL | Candidate damaged quantity; disposition and posting semantics OPEN |
| `dispatch_movement_id` | uuid | NULL | Candidate source-location movement reference |
| `receipt_movement_id` | uuid | NULL | Candidate destination-location movement reference |
| `exception_movement_id` | uuid | NULL | Candidate exception/loss movement reference; one-to-many event handling OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): shipment and transfer item must belong to the same transfer/business; batch must match product/variant and source location; dispatched quantity cannot exceed approved remaining demand absent an explicit exception; received/lost/damaged quantities cannot exceed dispatched quantity under the approved disposition model; movement links must be idempotent and tenant-safe. Return flows must not be represented by silently decrementing a received total; they require explicit return semantics and movement lineage.

### 37.6 Package C cross-entity review matrix

| Review ID | Candidate relationship/invariant | Required decision before approval |
|---|---|---|
| CC-01 | Transfer source/destination location | Same-business rule, distinct-location rule and physical FK tuple |
| CC-02 | Transfer → transfer items | Tenant-safe parent key, line identity and post-approval edit policy |
| CC-03 | Transfer → multiple shipments | Shipment sequence, partial dispatch, cancellation and completion semantics |
| CC-04 | Shipment item → transfer item | Same-transfer integrity and remaining-demand allocation |
| CC-05 | Shipment item → batch | Batch/source-location/product/variant consistency |
| CC-06 | Dispatch movement | Source-location quantity decrement and batch/cost lineage |
| CC-07 | Receipt movement | Destination-location quantity increment, partial receipt and idempotency |
| CC-08 | Loss/damage/return | Separate event model, disposition codes, actor/time evidence and movement treatment |
| CC-09 | Shipment line quantities | NULL-versus-zero semantics, precision, rounding and aggregate caps |
| CC-10 | Transfer lifecycle | Header/line/shipment state machines and authorization/SoD alignment |
| CC-11 | Shipment identifiers | Stable sequence and reference uniqueness scope |
| CC-12 | Indexes/concurrency | Dispatch/receipt replay, outstanding demand, FEFO batch allocation and concurrent shipments |

### 37.7 Package C disposition

- Candidate entity coverage: **4/17 additional entities drafted** (entities 9–10 and 16–17); cumulative candidate coverage **12/17**.
- Candidate field/type proposals: **NOT APPROVED**; no current-schema assertion.
- Physical FK/key/UNIQUE/CHECK/index/referential actions: **OPEN / NOT APPROVED**.
- Shipment receipt/return/loss/damage event model remains OPEN; candidate fields do not close DOC-09 event dependencies.
- Physical Data Dictionary acceptance remains **0/17**.

Next Package D: cost exception, reservation and costing entities 11–15. After Packages A–D, perform cross-entity key/relationship/tenant/constraint reconciliation and explicit design review. Runtime schema, RLS, application implementation and tests remain separate gates.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production change was made. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 38. CW-11 candidate physical specification — Package D: exceptions, reservations and costing (20 November 2026)

### 38.1 Status and shared conventions

**PACKAGE D STATUS: CANDIDATE DESIGN — NOT APPROVED.** Candidate type conventions in §35.1 apply. No proposed field/type/key/constraint is a claim about existing schema. Numeric precision, currency representation, source identity, tenant-safe FK tuples, reservation allocation grain and cost-layer consumption semantics remain subject to design review.

### 38.2 Entity D-11 — `inventory_cost_exceptions`

**Purpose:** durable record of cost anomalies requiring investigation or resolution. An exception must retain source identity and resolution history; it must not silently rewrite posted inventory movements or historical cost consumption.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate exception identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `exception_code` | text | NOT NULL | Candidate controlled exception class; vocabulary OPEN |
| `exception_status` | text | NOT NULL | Candidate lifecycle state; transition map OPEN |
| `movement_id` | uuid | NULL | Candidate related inventory movement |
| `cost_layer_id` | uuid | NULL | Candidate related cost layer; FK and applicability OPEN |
| `source_reference_id` | uuid | NULL | Candidate A01 source/event registry reference |
| `detected_at` | timestamptz | NOT NULL | Candidate detection instant |
| `detected_by` | uuid | NULL | Candidate detector actor/service |
| `resolution_code` | text | NULL | Candidate resolution classification; controlled vocabulary OPEN |
| `resolution_note` | text | NULL | Candidate human-readable explanation; retention/minimization OPEN |
| `resolved_unit_cost` | numeric | NULL | Candidate resolved unit cost; precision/currency semantics OPEN |
| `resolved_at` | timestamptz | NULL | Candidate resolution instant |
| `resolved_by` | uuid | NULL | Candidate resolver actor/service |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): exception must have at least one valid source/subject relation; same-business movement/layer/source references; resolution fields required only for resolved states; immutable resolution history versus mutable current state; duplicate exception detection/idempotency; no silent mutation of posted cost history. If multiple resolution attempts must be retained, a separate append-only event structure may be required.

### 38.3 Entity D-12 — `inventory_reservations`

**Purpose:** reservation header linked to its originating business process. Reservation reduces available quantity, not physical on-hand quantity. A02 source identity is distinct from A01 movement/source registry identity.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate reservation identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant owner |
| `reservation_reference` | text | NOT NULL | Candidate business-visible reference; uniqueness scope OPEN |
| `source_type` | text | NOT NULL | Candidate A02 source type; vocabulary/validation OPEN |
| `source_id` | uuid | NOT NULL | Candidate A02 source identity; cross-domain integrity strategy OPEN |
| `reservation_status` | text | NOT NULL | Candidate lifecycle state; transitions OPEN |
| `reserved_at` | timestamptz | NOT NULL | Candidate reservation instant |
| `expires_at` | timestamptz | NULL | Candidate expiry/TTL instant; policy OPEN |
| `released_at` | timestamptz | NULL | Candidate release instant; partial release semantics OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |
| `created_by` | uuid | NULL | Candidate actor/service |

Candidate constraints to review (NOT APPROVED): same-business source validation; source idempotency and duplicate prevention; allowed status transitions; expiry/release rules; partial fulfillment and release; reservations cannot increase on-hand; active reserved quantity must reconcile to reservation items/allocations. A02 `source_type/source_id` must not be conflated with A01 source registry or assumed to have a conventional FK without an approved source registry design.

### 38.4 Entity D-13 — `inventory_reservation_items`

**Purpose:** product/variant/location and batch allocation detail for a reservation. This candidate treats each row as an allocation slice; if the final model needs a separate demand-line parent and multiple allocation rows, that decomposition must be decided before approval.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate reservation allocation identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `reservation_id` | uuid | NOT NULL | Candidate reservation header reference |
| `product_id` | uuid | NOT NULL | Candidate product reference |
| `variant_id` | uuid | NULL | Optional variant reference |
| `inventory_location_id` | uuid | NOT NULL | Candidate location allocation grain |
| `batch_id` | uuid | NULL | Optional physical batch allocation; FEFO eligibility and non-batch stock policy OPEN |
| `quantity_reserved_base` | numeric | NOT NULL | Candidate allocated base quantity; precision/scale OPEN |
| `quantity_fulfilled_base` | numeric | NOT NULL | Candidate fulfilled portion; partial fulfillment rules OPEN |
| `quantity_released_base` | numeric | NOT NULL | Candidate released portion; partial release rules OPEN |
| `allocation_status` | text | NOT NULL | Candidate allocation lifecycle; vocabulary/transitions OPEN |
| `expires_at` | timestamptz | NULL | Candidate allocation-level expiry if it can differ from header |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): reservation/product/variant/location/batch same-business relation; FEFO allocation order and expired/blocked batch exclusion; reserved quantity cannot exceed eligible available stock; fulfilled plus released cannot exceed reserved; reservation affects available but not on-hand; concurrent allocation locking and idempotency. The demand-line versus allocation-slice identity must be decided; this package does not introduce an unapproved 18th entity.

### 38.5 Entity D-14 — `inventory_cost_layers`

**Purpose:** cost-layer identity is distinct from physical batch identity. The existing costing decision remains MWA default with FIFO as an alternative; FIFO layer selection/consumption is not a physical-batch identity rule. The Business + Product/Variant + Inventory Location pool governs MWA aggregation.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate cost-layer identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `product_id` | uuid | NOT NULL | Candidate product reference |
| `variant_id` | uuid | NULL | Optional variant reference |
| `inventory_location_id` | uuid | NOT NULL | Candidate costing pool location |
| `batch_id` | uuid | NULL | Optional physical batch link; layer/batch identity remain distinct |
| `source_movement_id` | uuid | NOT NULL | Candidate originating posted movement |
| `layer_sequence` | bigint | NOT NULL | Candidate deterministic FIFO order; ordering key semantics OPEN |
| `original_quantity_base` | numeric | NOT NULL | Candidate original layer quantity; precision/scale OPEN |
| `remaining_quantity_base` | numeric | NOT NULL | Candidate remaining unconsumed quantity; reconciliation/locking OPEN |
| `unit_cost` | numeric | NOT NULL | Candidate unit cost; precision/currency/rounding OPEN |
| `currency_code` | text | NOT NULL | Candidate currency code; source and multi-currency policy OPEN |
| `created_at` | timestamptz | NOT NULL | Candidate layer creation instant |
| `layer_status` | text | NOT NULL | Candidate lifecycle state; allowed values OPEN |

Candidate constraints to review (NOT APPROVED): source movement eligibility; same-business product/variant/location/batch; FIFO ordering tie-breaker; original versus remaining quantity invariants; transfer mapping; landed-cost correction treatment; immutable historical cost and compensation; currency and numeric capacity. The entity is only applicable to approved costing flows; the MWA default pool must not be incorrectly represented as one cost layer per batch.

### 38.6 Entity D-15 — `inventory_cost_layer_consumptions`

**Purpose:** record FIFO cost-layer allocation to an inventory movement. It is relevant when FIFO is the selected costing method; MWA default pool calculation remains separate. Consumption history must be idempotent and compensatable, not silently overwritten.

| Candidate field | Candidate type | Nullability | Candidate meaning / review note |
|---|---|---|---|
| `id` | uuid | NOT NULL | Candidate consumption identity / PK |
| `business_id` | uuid | NOT NULL | Candidate tenant scope |
| `inventory_movement_id` | uuid | NOT NULL | Candidate consuming movement reference |
| `cost_layer_id` | uuid | NOT NULL | Candidate consumed cost layer reference |
| `consumed_quantity_base` | numeric | NOT NULL | Candidate consumed base quantity; precision/scale OPEN |
| `unit_cost_snapshot` | numeric | NOT NULL | Candidate immutable cost snapshot; precision/rounding OPEN |
| `extended_cost_snapshot` | numeric | NOT NULL | Candidate extended cost snapshot; calculation/rounding OPEN |
| `currency_code` | text | NOT NULL | Candidate currency; multi-currency policy OPEN |
| `reversal_of_consumption_id` | uuid | NULL | Candidate compensation lineage; partial/multiple reversal policy OPEN |
| `consumed_at` | timestamptz | NOT NULL | Candidate consumption instant |
| `created_at` | timestamptz | NOT NULL | Candidate audit instant |

Candidate constraints to review (NOT APPROVED): movement/layer same-business and product/location/currency compatibility; cumulative consumption cannot exceed eligible layer quantity; FIFO order and concurrency locking; unique/idempotent allocation per movement/layer; partial reversal and compensation caps; immutable snapshots; exact numeric precision and cost rounding. This table does not select an additional `inventory_cost_layer_movements` entity.

### 38.7 Package D cross-entity review matrix

| Review ID | Candidate relationship/invariant | Required decision before approval |
|---|---|---|
| CD-01 | Cost exception → movement/layer/source | At least one subject relation, source identity and immutable resolution history |
| CD-02 | Reservation → A02 source | Source vocabulary, source existence validation, idempotency and same-business scope |
| CD-03 | Reservation → reservation allocation slices | Demand-line versus allocation-slice grain; partial fulfillment/release |
| CD-04 | Reservation allocation → batch/location/product | FEFO selection, tenant-safe FK tuples and available-stock concurrency |
| CD-05 | Reservation projection | Reconcile active reserved quantity without reducing physical on-hand |
| CD-06 | Cost layer → source movement/batch | Layer identity separate from batch identity; source and transfer mapping |
| CD-07 | MWA versus FIFO | MWA pool grain Business + Product/Variant + Inventory Location; FIFO layer usage only when selected |
| CD-08 | Cost-layer consumption | FIFO ordering, locking, cumulative cap and movement linkage |
| CD-09 | Cost correction/reversal | Append-only compensation, landed-cost adjustment and immutable cost snapshots |
| CD-10 | Currency/numeric model | Currency source, precision, rounding, scale and maximum supported cost/quantity |
| CD-11 | Indexes | Reservation expiry/active allocation, FIFO layer order, consumption replay and exception queues |
| CD-12 | Candidate bridge entity #18 | Keep `inventory_cost_layer_movements` unapproved; assess separately only if the final relationship design requires it |

### 38.8 Package D disposition

- Candidate entity coverage: **5/17 additional entities drafted** (entities 11–15); cumulative candidate coverage **17/17** across Packages A–D.
- Candidate field/type proposals: **NOT APPROVED**; no current-schema assertion.
- Physical PK/FK/UNIQUE/CHECK/index/referential actions: **OPEN / NOT APPROVED**.
- Reservation allocation grain, A02 source validation, MWA/FIFO separation, cost precision, cost correction and cost-layer concurrency remain OPEN design decisions.
- Physical Data Dictionary acceptance remains **0/17**.
- Candidate `inventory_cost_layer_movements` remains unapproved as entity #18.

Next CW-11 phase: cross-entity reconciliation across all 17 candidate entities — primary/alternate keys, tenant-safe composite FK tuples, nullable-variant uniqueness, source registries A01/A02, movement and reservation event lineage, numeric/currency policy, lifecycle/referential actions, index strategy, RLS/server authorization and test evidence. Candidate packages must not be promoted to FIX/APPROVED until this reconciliation and explicit design review are complete.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database introspection, migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production change was made. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.
