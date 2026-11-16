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
