# POS SaaS Multi-Usaha — Decision Register

> **Status:** Source-mapped summary; not a replacement for detailed decision records.  
> **As of:** 15 November 2026

## 1. Rules for reading this register

1. Preserve the exact scope and status recorded by the source.
2. FIX means approved at the stated conceptual or business-rule level only.
3. Do not infer physical schema, SQL, constraints, indexes, RLS, API/server enforcement, tests, or deployment approval from a conceptual FIX.
4. REVIEW, TODO, OPEN, PARTIAL, UNVERIFIED and NOT STARTED remain unresolved.
5. If sources conflict, use an explicit supersession statement where one exists; otherwise record the conflict as OPEN and do not choose a winner by filename or modification date alone.

## 2. Product and tenant architecture baseline

| Topic | Recorded baseline | Scope caveat |
|---|---|---|
| Owner/business relationship | One Owner account has one business | Product/business model rule |
| Business structure | One business may have multiple outlets/branches and warehouses | Does not authorize physical schema |
| Platform role separation | Platform Super Admin is separate from business roles | Authorization design still requires enforcement evidence |
| Tenant boundary | `business_id`, composite foreign keys, RLS and server-side authorization | Architecture requirement, not deployed verification |
| Inventory ledger | `inventory_movements` is the immutable movement ledger; balances are projections | Conceptual architecture |
| Costing | MWA default; FIFO alternative | MWA grouping is per business + product/variant + inventory location per A12.37.10.1 |
| Historical preservation | Preserve source versions and decision lineage | No silent deletion or overwrite |

## 3. Inventory and costing decisions

The ERD Stage 5.9.3 source set records a conceptual 17-table inventory/costing baseline:

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

A candidate additional table, `inventory_cost_layer_movements`, has been discussed in the archive. It must not be presented as an approved physical table unless the relevant decision source explicitly establishes that status.

The following conceptual rules are recorded in the latest working ERD reference:

- Posted inventory movements are append-only/immutable; corrections use reversal or compensating movements.
- MWA is the default per business + product/variant + inventory location; FIFO is an alternative. MWA pools are not combined across locations.
- Physical batch identity is distinct from cost-layer identity. FEFO selects physical batches; FIFO selects cost layers.
- Reservations reduce available stock, not physical stock.
- Fulfillment updates physical stock and reservation state atomically.
- Transfers use a virtual transit storage location; dispatch moves stock from origin to transit and receipt moves it from transit to destination.
- Stock-count reconciliation accounts for movements after the snapshot.
- Posted transactions are not edited or deleted directly; corrections use reversal/compensation.

These are architecture-level statements. Field definitions, types, FK/unique/check constraints, indexes, concurrency implementation, RLS, server enforcement and executable tests remain subject to their individual source statuses.

## 4. A10, A11 and A12 decision lineage

The RMD-12 source-mapped register covers A10-A through A10-F, A10-T1 through A10-T5, A11-F01 through A11-F10, and A12.1 through A12.17. It is explicitly PARTIAL and uses AP-02 documented-decision provenance; EV-01/EV-02 do not establish physical schema, enforcement, or executed tests. Later source material extends A12 provenance and readiness work.

| Decision family | Recorded status | Interpretation |
|---|---|---|
| A10 | CLOSED — Architecture Baseline | Closure is limited to the documented architecture baseline; not proof of implementation |
| A11 | FIX at architecture level | Lifecycle architecture is retained; detailed technical enforcement must follow its source statuses |
| A12.1–A12.17 | Audited / decisions recorded | Preserve individual decision and provenance status; do not assume all technical details are FIX |
| A12.18–A12.28 | Individual provenance audit/addenda exist | Do not infer missing direct approval or source locators |
| A12.31–A12.36.1 | Individual reconciliation records exist | Unrecovered/unverified rows remain unresolved |
| A12.37.10.1 | FIX / supersession | MWA grouping is per business + product/variant + inventory location; supersedes older cross-location wording |
| A12.38 | Physical dictionary audit | Audit specification does not verify a deployed physical dictionary |
| A12.39 | CLOSED at conceptual relationship/constraint specification level | Physical constraint verification remains OPEN |
| A12.40 | PARTIAL / OPEN | Readiness/documentation acceptance criteria not fully satisfied; all AC40-01–AC40-12 require evidence-based reassessment |
| A12.41 | NOT STARTED | Final readiness reassessment is gated on A12.40 closure |

## 5. Authorization and category decisions

- RMD-47 through RMD-69 and associated addenda contain category-level audit and decision records.
- The 13-category manager allowlist has its own review/finalization material; use the source's exact status and scope.
- The cross-category Role × Module × Capability matrix is explicitly DRAFT / PROPOSED / CANDIDATE, not approved as final.
- Finance / Accounting and Employee / HR Operator are conditional in the documented cross-category draft; Supervisor / Shift Lead is also conditional. Manager is handled as a business-level governance role with a separate category/workflow allowlist rather than as a specialist role in that matrix.
- Capability taxonomy, scope boundaries, SoD, permission catalogues and cross-category matrices must not be represented as production authorization grants.
- No role/module/capability assignment should be inferred from candidate eligibility.

## 6. REC reconciliation status

- REC-01 is PARTIAL: the approval basis for conceptual R56-D01–D12 is verified, but the three RMD-56 v1.2 content variants remain retained and no canonical file is selected.
- REC-02 is PARTIAL: 115 of 123 names are present once in the current Library snapshot; eight are ABSENT / UNRESOLVED. Current byte hashes were not recomputed for the 115 remaining files.
- REC-03 is PARTIAL: snapshots 322, 328 and 333 are reconciled at aggregate level, but raw snapshot 328 is unavailable and the exact historical boundary is limited.
- REC-04 is PARTIAL: the 54-name normalized basename set-difference is reconstructed; the older 56 claim remains a discrepancy; three names in the 63-to-66 delta remain unidentified.
- REC-05 has a draft master decision/provenance index and supporting FIX decision records; it is PARTIAL until the index's full source coverage and acceptance are verified.
- REC-06 overlay v0.1 has now been created append-only in `/Arsip Proyek POS SaaS/REC/`. It reconciles Education E-01–E-04 and Hotel H-01–H-04 conceptual approvals, preserves their OPEN items, and records candidate M01–M21 alignments without promoting them to FIX. REC-06 remains PARTIAL because Permission Catalogue v1.0 is DRAFT and final permission keys, capability/action × scope × SoD mapping, and cross-category acceptance remain OPEN.
- REC-07 has a 38-file version inventory and lineage register plus individual A12.18–A12.28 and A12.31–A12.36 audits. The inventory explicitly says targeted content review, not full content audit; individual provenance remains OPEN. REC-07 is PARTIAL.
- REC-08 has security/readiness summaries in v9.6.4, v9.6.6 and v9.6.7, but the original Batch 7–9 source reports and a complete consolidated finding register were not located in the current archive. Severity-level closure remains unverified; retain HIGH/CRITICAL items as OPEN.

## 7. Change control

Any change to a FIX decision requires a specific technical reason, traceable evidence, and explicit review/approval. A conceptual decision does not grant permission to implement database, security, API, backend, code, CI, deployment or Production changes.

## 8. Later archive inventory verification — 15 November 2026

A later recursive Library listing is captured in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md`: 200 files across seven folders, with no duplicate exact paths in the returned listing. Both REC-06 artifacts are verified at `/Arsip Proyek POS SaaS/REC/`: `REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md` and `REC-06_Education_Hotel_Workflow_to_Capability_Traceability_Matrix_v0.1_2026-11-15.md`.

This corrects the earlier uncertainty about their current Library location. It does not change their status: REC-06 remains PARTIAL; G02/G04 and technical authorization details remain OPEN/CANDIDATE. REC-05 also remains PARTIAL pending full provenance coverage and acceptance. No workstream is marked CLOSED by file presence alone.
