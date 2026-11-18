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
