# POS SaaS Multi-Usaha v3.0 — System Architecture Master

> **Document ID:** DOC-03  
> **Version:** 0.1.0  
> **Source revision:** DOC-03 System Architecture Master v0.8 (17 November 2026)  
> **Status:** DRAFT — RECONSTRUCTED WORKING MASTER; REVIEW REQUIRED  
> **Proposed GitHub path:** `docs/03-system-architecture/SYSTEM_ARCHITECTURE.md`  
> **Mode:** Documentation only • Append-only • `DB_PUSH_BLOCKED: ACTIVE`  
> **Authority:** Does not replace Blueprint, source-native A10/A11/A12 decisions, DOC-04 ERD/Data Dictionary, DOC-05 Authorization Architecture, or approval addenda.

## 1. Purpose, authority and limitations

DOC-03 consolidates the conceptual system architecture boundaries of POS SaaS Multi-Usaha v3.0: platform and tenant context, application responsibilities, domain ownership, transaction sources of truth, inventory/costing, payments and finance, integrations, offline synchronization, audit/security, reporting, reliability, and unresolved technical dependencies.

This is a reconstructed working master based on available Library sources and audit evidence. It is not a verbatim recovery of an earlier draft, canonical physical ERD, migration specification, implementation specification, or evidence that any described control is implemented. Historical Library documents remain unchanged.

Keep four status dimensions separate:
1. Conceptual decision status (FIX, CLOSED within scope, REVIEW, OPEN, TODO, CANDIDATE).
2. Technical specification status (specified, partial, open, or not verified).
3. Implementation/evidence status (implemented, executed, tested, not tested, not verified).
4. Audit/closure status (complete only within the stated audit scope).

A conceptual FIX does not imply a physical schema, production enforcement, executed test, security certification, or readiness approval.

## 2. Architecture principles

- One Owner account is associated with one Business; a Business may have multiple Outlets/Branches and inventory locations/warehouses.
- Platform administration is separated from Business/Outlet operational roles and data scope.
- Business context must be carried consistently through tenant-owned records. A `business_id` value alone does not prove correct parent-child linkage.
- Each domain has its own authoritative transaction source. There is no assumed universal ledger for all business events.
- Posted financial and inventory records are preserved. Corrections use explicit reversal, compensation, or adjustment records within the relevant domain.
- Balances, general-ledger projections, reports and snapshots are derived views, not substitutes for authoritative posted records.
- Idempotency, concurrency control, tenant isolation, authorization and auditability are cross-cutting requirements; physical enforcement remains subject to technical specification and verification.

## 3. System context and trust boundaries

| Context | Responsibility / boundary | Status |
|---|---|---|
| Platform | Platform-level administration, plans/entitlements, platform configuration and platform audit, separated from tenant operations | Conceptual boundary supported; detailed physical design OPEN |
| Business tenant | Owner's business context and tenant-owned operational data | Conceptual FIX |
| Outlet / inventory location | Operational subdivision within a Business; inventory costing pool is location-sensitive | Conceptual support; physical model OPEN |
| External provider | Payment gateways, banking feeds, messaging and other external systems | Integration boundary; provider-specific contracts OPEN |
| Client / device | POS, browser, mobile and offline-capable clients; never authoritative for server-side authorization | Principle supported; device lifecycle/protocol OPEN |
| Server | Authoritative validation, authorization, transaction posting, idempotency and conflict resolution | Principle supported; API/service contracts and enforcement OPEN |

**Trust-boundary rule:** a client-supplied business, outlet, user, device, role or source identifier is not authorization evidence. Server-side resolution and validation are required. The precise authorization mechanism, RLS policies, composite foreign keys and route/API guards are outside DOC-03's verification scope.

## 4. Conceptual application layers

| Layer | Primary responsibility | Boundary / unresolved detail |
|---|---|---|
| Client & presentation | POS UI, dashboards, management interfaces and device-facing interaction | Client state is not authoritative; UI/API contract OPEN |
| Application/API boundary | Request handling, validation, orchestration and transaction boundaries | Exact endpoints, service boundaries, schemas and versioning OPEN |
| Identity, authorization & scope | Identity, role eligibility, permission, tenant/outlet/resource scope | DOC-05 governs authorization; stable permission keys and enforcement OPEN |
| Domain services | Sales, purchasing, inventory, payment, finance and other domain rules/workflows | Domain contracts and cross-domain posting orchestration OPEN |
| Data & transaction | Persistence, immutable posted records, consistency, idempotency and derived projections | Canonical physical ERD and enforcement OPEN |
| Integration | Provider connections, payment/non-payment webhooks, jobs and delivery logs | Retry/backoff, signature/replay controls and secret lifecycle OPEN |
| Offline & device sync | Offline batch intake, device context, deduplication and conflict handling | Protocol, TTL, cursor, device revocation and conflict lifecycle OPEN |
| Audit & observability | Business/platform audit, security events, operational logs and failure trace | Storage, retention, access, privacy and DR OPEN |
| Reporting | Report definitions, executions, snapshots and analytical projections | Lineage/retention/reconciliation lifecycle OPEN; reports do not post transactions |

## 5. Domain ownership and source-of-truth boundaries

| Domain | Authoritative source / rule | Derived or non-authoritative records | Evidence / status |
|---|---|---|---|
| Inventory | Posted `inventory_movements` represent physical stock movement | `inventory_balances` are rebuildable projections | A10/A11/A12; conceptual FIX, physical enforcement OPEN |
| Costing | Cost layer and consumption/compensation records govern valuation lineage | Valuation/report snapshots do not replace layer history | A10 and A12.37.10.1; MWA default per Business + Product/Variant + Inventory Location; FIFO alternative |
| Sales | Posted sales order/transaction records represent sale lifecycle | Payment records are not the sales source document | Historical 18-entity baseline; cross-reference discrepancy retained |
| Payment | `payment_transactions` are the source of money; allocations link money to eligible targets | Allocations do not create money; settlement/reconciliation do not create new receipts | Batch 05 / A12.30F-01; conceptual rules, physical controls OPEN |
| Cash | Posted cash movements are immutable after posting | Cash summaries and variance views are derived/review records | Batch 05 mapping; physical linkage and controls OPEN |
| Bank | Imported bank statement lines and reconciliation/matching records represent bank evidence and matching | Reconciliation does not create money or journal entries by itself | Batch 05 / A12.30F-01; physical matching controls OPEN |
| Accounts Payable | Supplier invoice is source document; AP recognizes obligation | AP payment allocation links payment to obligation; it is not a new payment | Batch 06 mapping; cardinality/physical model OPEN |
| Accounts Receivable | Receivable source and AR records represent customer obligation | Receipt allocation links payment to receivable; it is not a new receipt | Batch 06 mapping; physical model OPEN |
| Customer credit/advance | One controlled customer credit/advance source must prevent double counting; advance remains liability until recognized | Do not count credit/advance simultaneously as revenue and liability | Batch 06 mapping; canonical physical ledger OPEN |
| Accounting | Posted journal entries/lines are accounting source; debits equal credits; posted journal immutable | General Ledger projection is rebuildable from posted journal | Batch 06 mapping; posting, source identity and period enforcement OPEN |
| Reporting | Source domains and posted journal feed reports and snapshots | Report execution/snapshot is not transaction truth and cannot post back | Batch 07 / A12.30F-04; lifecycle/retention OPEN |
| Audit/security | Business audit, platform audit, security events/sessions, transaction events and provider delivery logs remain distinct event families | One event family must not silently substitute for another | A12.30F-04; storage/retention/enforcement OPEN |

Batch 05–07 mapping documents are secondary migration-mapping/consolidation sources, not primary approval records. No cross-domain mapping in this table authorizes a physical table, field, foreign key, trigger, policy or implementation.

## 6. Inventory, costing and transfer architecture

- `inventory_movements` is the append-only/immutable-after-posting record of physical inventory movement; corrections are reversal or compensating movements.
- `inventory_balances` are projections rebuildable from movement history.
- Reservation reduces available quantity, not physical on-hand quantity; fulfillment must update stock and reservation consistently/atomically.
- Physical batch identity and cost-layer identity are distinct. FEFO selects physical batches; FIFO selects cost layers.
- MWA is the default costing method and FIFO is an alternative. The active MWA pool is scoped per Business + Product/Variant + Inventory Location; pools are not combined across locations.
- Internal transfer carries source cost context; it is not a new purchase or ordinary FIFO purchase-layer consumption.
- After receipt, destination-location MWA is recalculated from destination resulting quantity and total cost.
- Cost-layer allocation under MWA supports traceability/reconciliation; it does not replace MWA as valuation method.
- Transfer/shipment lifecycle is represented through auditable events; status summaries derive from posted events and inventory ledger, not an independent stock source.

### 6.1 A11 transfer and shipment lifecycle baseline

A11 is FIX at architecture/business-rule level only:
- Transfer process statuses: `DRAFT`, `APPROVED`, `IN_PROGRESS`, `CLOSED`.
- Shipment statuses: `PREPARED`, `IN_TRANSIT`, `PARTIALLY_RECEIVED`, `CLOSED`, `CANCELLED`.
- Dispatch, receipt, return and loss resolution are separate auditable events.
- Repeated partial receipt is allowed; one shipment represents one physical shipment.
- Transfer closure requires valid reconciled disposition of quantities; unresolved investigation blocks closure.
- Physical fields, constraints, authorization, locking, idempotency and tests remain OPEN.

### 6.2 Candidate inventory bridge

`inventory_cost_layer_movements` remains a candidate bridge/allocation entity associated with A04. It is not automatically promoted to an eighteenth historical inventory entity; the historical inventory baseline remains 17 entities. The conceptual six-field baseline does not establish final physical table/columns, constraints, indexes or enforcement.

## 7. Payment, settlement, finance and accounting architecture

- Payment transaction is the source of money. Allocation relates that money to an eligible business target; it does not create a second receipt.
- Sales payment allocation target is `sales_order XOR sales_transaction`; partial/split payments are supported conceptually. Physical enforcement and allocation caps remain OPEN.
- Refund does not delete the original payment. Cumulative refund must not exceed the refundable amount; physical lineage/caps remain OPEN.
- Cash movements are immutable after posting; corrections require auditable compensating records.
- Settlement records distinguish gross, fee, adjustment and net. Settlement is not a new receipt.
- Bank reconciliation is evidence matching and does not itself create money or journal entries.
- Supplier invoice is the AP source document; payment allocation links the payment to the obligation.
- AR receipt allocation links a payment to a receivable; it is not another receipt.
- Customer advance remains a liability until recognized; credit/advance must not be double-counted.
- Accounting uses double-entry principles: debits equal credits; each journal line has one side; posted journals are immutable; corrections use reversal/adjustment; closed periods reject normal posting; GL projection is rebuildable.
- Expense classification between operational expense, purchase expense, landed cost, bank/provider cost and tax requires explicit mapping.

### 7.1 Settlement/bank matching — A12.30F-01 Alternative B

The conceptual baseline permits partial/combined matching. Each matching detail links one internal source and one bank statement line and stores matched amount. Overmatching and duplicate bank-line use are disallowed; corrections remain auditable. Physical cardinality, anti-double-match enforcement, lineage and test evidence remain OPEN.

### 7.2 Finance and accounting limitations

Batch 06 is a secondary conceptual mapping, not a final physical table inventory or primary approval record. AP/AR structures and allocation limits, customer credit/advance ledger, source-event identity, journal enforcement/posting/period controls, FX, tenant integrity, physical dictionary, opening balances and GL projection details remain OPEN.

## 8. Integration and offline architecture

- Payment webhook remains within the payment domain; generic non-payment webhook belongs to the general integration boundary.
- Integration jobs require retry/status/idempotency/deduplication/failure/audit principles; provider-specific contracts and physical controls remain OPEN.
- Secret values must not be stored in ordinary database records; only secure references are permitted conceptually.
- Offline batch parent context is authoritative; server remains authoritative for validation and resolution; no silent overwrite.
- Device is scoped to business/outlet; revoked device must not sync new batches.
- Document numbering must be atomic and final-unique within its scope.
- Payment sync records and generic offline batches are distinct concepts; do not merge their identities without evidence.
- Client/device identity, TTL, retry, deduplication, cursor/watermark, conflict resolution, device credential lifecycle and authorization remain OPEN.
- Webhook signature/replay controls, job retry lifecycle, event identity, secret lifecycle and operational failure handling remain OPEN.

### 8.1 A12.30F conceptual boundary

A12.30F-01 through A12.30F-04 are CLOSED only within their recorded conceptual scope. This does not close A12.30 overall or establish physical schemas, enforcement, tests or implementation. A universal global event registry is not approved by implication; movement registry, journal source event, payment webhook/sync, generic webhook/job and offline identity remain distinct until their source rules are explicitly reconciled.

## 9. Audit, security, reporting and observability

- Business audit and platform audit are logically separate.
- Security events/sessions are separate from business transaction audit and provider delivery logs.
- Transaction event lineage is not replaced by integration job logs or generic audit summaries.
- Reports and snapshots are derived from transaction and journal domains; they are not transaction truth and must not post back into source ledgers.
- Audit storage, event schemas, retention, tamper resistance, privileged access, export/deletion, privacy controls, monitoring and operational alerting remain OPEN.
- REC-08 recovered only secondary/historical evidence for certain security observations. Standalone Batch 7/8/9 security reports and the consolidated security finding register were not recovered in the audited scope.
- No current Production security readiness, penetration test, certification, remediation or retest completion is asserted.

## 10. Reliability, backup, disaster recovery and data lifecycle

No sufficient primary decision source was recovered to establish a final backup/restore/DR architecture, RPO/RTO, retention schedule, regional failover, deletion/export lifecycle or recovery-test acceptance. These remain UNVERIFIED/OPEN and must not be presented as approved architecture or implemented controls.

## 11. Architecture decision register and provenance

| Evidence family | Permitted use in DOC-03 | Boundary / status |
|---|---|---|
| A10/A11/A12 decision records and addenda | Source-native conceptual decision baselines where exact decision and scope are identified | Preserve exact decision scope; do not infer physical implementation |
| DOC-04 v0.2 | ERD, inventory entity baseline, costing and physical dictionary boundary | DRAFT; physical schema/enforcement not verified |
| DOC-05 v0.1 | Authorization architecture boundary and authorization dependencies | DRAFT; permission catalogue, scope resolver and enforcement OPEN/UNVERIFIED |
| Batch 05–07 migration mappings | Secondary domain mapping and gap discovery for payment/cash/bank, finance/accounting, reporting/audit/integration | Not primary approval records; claims remain conceptual unless separately supported |
| XG-01–XG-20 cross-domain reconciliation | Derived audit crosswalk to describe unresolved cross-domain dependencies | Not primary approval source; unresolved items remain OPEN/REVIEW/NOT VERIFIED |
| REC-08 recovery register and historical security audits | Evidence-recovery limitations and historical observations | Original standalone Batch 7/8/9 reports and consolidated finding register not recovered; no current Production security readiness asserted |

### 11.1 Source and decision boundaries

- A10 remains **CLOSED — Architecture Baseline**.
- A11 remains FIX only at architecture/business-rule level; physical fields, constraints, authorization, locking, idempotency and tests remain OPEN.
- A12.17 Alternative 1 and A12.30F-01 through A12.30F-04 retain their existing conceptual scopes and statuses.
- A12.37.10.1 MWA/FIFO and location-pool rule is retained without broadening its supersession scope.
- A12.38 is CLOSED only for conceptual audit/gap-register scope; A12.39 is CLOSED only for conceptual relationship/constraint specification. Physical verification remains OPEN.
- A12.18–A12.28 and selected A12.31–A12.36.1 sources remain UNRECOVERED/UNVERIFIED in the audited search scope. D40-203–D40-216 remain UNRECOVERED.
- ARC-01–ARC-12 and ARC-OPEN-01–ARC-OPEN-13 are local editorial identifiers, not source-native decision IDs, approved FIX IDs or independent user approvals.
- In the Section 13 dependency register of the source DOC-03, the identifier column is interpreted as **Editorial dependency ID**.

## 12. Open technical dependencies

The following remain open unless a later authoritative source and verification evidence close them:

1. Physical tenant integrity across parent/child, detail, bridge, allocation, event, log and snapshot records; composite foreign keys and RLS/server enforcement.
2. Canonical physical ERD, field types/nullability/defaults, keys, indexes, triggers and constraint definitions.
3. Inventory movement source identity, transfer/shipment event relations, concurrency/locking/deadlock retry, idempotency keys and payload retention.
4. Cost-layer identity/transfer traceability, return/reversal lineage, landed-cost correction and physical enforcement.
5. Payment/refund/allocation lineage, caps, settlement and bank-match anti-duplication, webhook/payment-sync idempotency.
6. AP/AR cardinality and allocation caps; canonical customer credit/advance lifecycle.
7. Journal source-event identity, idempotency, balance enforcement, closed-period controls, posting orchestration and GL rebuild.
8. Integration secret lifecycle, webhook signature/replay protection, retry/backoff and failure audit.
9. Offline/device identity, credential revocation, TTL, retry, cursor/watermark, conflict lifecycle and no-silent-overwrite enforcement.
10. Business/platform audit separation, security event storage, retention, tamper resistance, privacy, export/deletion and monitoring.
11. Reporting/snapshot lineage, retention, reconciliation and prohibition on posting back into source ledgers.
12. Backup/restore/DR architecture, RPO/RTO, retention and recovery-test acceptance.
13. Claim-level primary source locators, exact source versions and bidirectional backlinks.
14. Executed test evidence for tenant isolation, idempotency, concurrency, allocation/refund caps, webhook/offline controls and journal invariants.
15. Current Production security and implementation state — NOT VERIFIED.

## 13. Readiness and acceptance statement

DOC-03 supports conceptual architecture boundaries and selected source-backed decisions. It does not establish physical schema, technical enforcement, implementation, security readiness, tests, backup/DR or operational lifecycle. No implementation readiness is established.

Acceptance prerequisites:
1. Complete claim-level source locator review and verify source-native decision IDs and exact scope.
2. Reconcile DOC-04 and DOC-05 boundaries without duplicating or superseding their detail.
3. Confirm no OPEN/REVIEW/TODO/CANDIDATE/UNVERIFIED/UNRECOVERED item is promoted without evidence.
4. Review cross-domain dependencies and unresolved primary source recovery.
5. Obtain explicit user review/approval.

## 14. Stage 5 publication and governance addendum

The source DOC-03 v0.8 includes historical revision records that state GitHub branch/PR actions were not authorized by that document. Those statements describe the authority of the source document at the time it was written. Separate project-level Stage 5 authorization permits documentation-only migration to GitHub, one PR at a time. This publication does not derive that authorization from DOC-03 and does not authorize any implementation activity.

- Stage 5 is documentation-only; no SQL/DDL/DML, database/schema/migration, Supabase, RLS/Auth, API/backend, application source, CI workflow, Vercel, deployment or Production changes.
- `DB_PUSH_BLOCKED: ACTIVE`.
- Stage 6 remains NOT AUTHORIZED.
- This document remains DRAFT / REVIEW REQUIRED until reviewed and explicitly accepted.
- The proposed GitHub path is subject to PR review; merge requires separate explicit user approval.
- No historical Library source file is modified or deleted.

## 15. Source revision and editorial mapping note

This GitHub working master is a structured consolidation of DOC-03 System Architecture Master v0.8, archived at `/Arsip Proyek POS SaaS/Master Documents/DOC-03_System_Architecture_Master_v0.8_DRAFT.docx` (Library file ID `libfile_7db45d0c92d081918f0517ad4aad9b38`). The source document's revision history Sections 16–21 is represented by the consolidated source/decision clarifications above; no historical decision scope or status is changed. Claim-level locators not available in the source remain OPEN/UNVERIFIED. This Markdown rendering is not a verbatim transcription and does not replace the archived DOCX.

**End of DOC-03 — DRAFT / REVIEW REQUIRED.**


## 16. Append-only DOC-03 publication-scope and repository-location clarification — 19 November 2026

### 16.1 DOC03-F01 — Stage 5 authorization wording

The Stage 5 publication wording in §14 is clarified because the phrase “Separate project-level Stage 5 authorization permits documentation-only migration to GitHub” can be read as broad Stage 5 authority. That reading is not the current project-control position.

The controlling project governance is DOC-00 `MASTER-PROJECT-CONTROL.md` §§23.3–23.5 and the active Master Checklist v2.0 §§34.7–34.8: **Stage 5 blanket GitHub/archive migration remains NOT AUTHORIZED**. A specifically named documentation package may proceed only through its own separately scoped authorization, one PR at a time, with the required review, CI, explicit merge approval and post-merge read-back. The individual documentation PRs completed for this project do not create blanket migration authority.

This clarification supersedes any broader interpretation of the Stage 5 wording in §14. Historical source DOC-03 v0.8 revision statements remain historical context; they do not override current project-level package-specific controls.

### 16.2 DOC03-F02 — current repository location

The cover's “Proposed GitHub path” label is retained as historical publication metadata. The current working-master file is now present on GitHub `main` at:

`docs/03-system-architecture/SYSTEM_ARCHITECTURE.md`

This repository publication state does not make DOC-03 canonical, final or accepted. Its document status remains DRAFT — RECONSTRUCTED WORKING MASTER; REVIEW REQUIRED.

### 16.3 Audit disposition and preserved architecture boundaries

- DOC03-F01: **CLARIFIED BY APPEND-ONLY GOVERNANCE-SCOPE ADDENDUM**.
- DOC03-F02: **CLARIFIED BY APPEND-ONLY REPOSITORY-LOCATION ADDENDUM**.
- The reviewed conceptual architecture boundaries, A10/A11/A12 decision scopes, inventory/costing rules, 17-entity historical baseline and candidate status of `inventory_cost_layer_movements` are not changed.
- Physical schema, tenant enforcement, RLS/server authorization, API/service contracts, integration/offline controls, executed tests, Production security and backup/DR remain OPEN / UNVERIFIED as stated in DOC-03 and their owning documents.
- No source-native decision status, FIX decision, dependency closure or implementation status is changed.
- Dependencies newly closed: **0**. FIX decisions changed: **0**.

DOC-03 remains DRAFT / RECONSTRUCTED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. Stage 4.7.8 remains PARTIAL — GATE NOT PASSED; Stage 4.8 remains 13/13 DRAFTED — NOT ACCEPTED; Stage 4.9 remains PARTIAL — ACCEPTANCE NOT MET; A12.40 remains PARTIAL / OPEN; A12.41 remains NOT STARTED; implementation readiness remains NOT READY.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. Stage 5 blanket migration remains NOT AUTHORIZED; Stage 6 implementation remains NOT AUTHORIZED.


## 17. Append-only DOC-04 version-reference reconciliation — 19 November 2026

### 17.1 Finding and evidence

The DOC-03 §11 evidence-family table identifies “DOC-04 v0.2” as the working reference for the ERD, inventory entity baseline, costing and physical dictionary boundary. The owning DOC-04 currently published on `main` identifies itself as Version **0.1.0** in its header and as the initial v0.1 reconstructed working master in §15. The Master Project Index §18 independently records PR #11 as publishing DOC-04 v0.1. The PR #11 merge record identifies the published path as `docs/04-data-architecture/ERD_DATA_DICTIONARY.md` and merge commit `27caef4e83f73e17c19c023ad775c42b16a7a22b`.

The DOC-04 v0.2 references elsewhere in DOC-04 are references to the separate source artifact “Update Audit A11–A12 and 17-table matrix v0.2” (15 November 2026), not a DOC-04 master revision. The two version identities must not be conflated.

Within the reviewed current-main publication and version records, no DOC-04 v0.2 master publication or approved promotion from v0.1.0 was established. DOC-04 §26.4 independently recorded this exact mismatch as DOC04-F03 and routed it to the DOC-03 owner-document scope.

### 17.2 Correction and interpretation

For the DOC-03 §11 evidence-family row, the intended working-master reference is **DOC-04 v0.1.0 (published/indexed as v0.1)**, not DOC-04 v0.2.

This addendum clarifies the version reference without rewriting the historical §11 table. Read the existing “DOC-04 v0.2” label in §11 as a version-label error for the DOC-04 working master; it is not evidence of a missing DOC-04 v0.2 publication, a version promotion, or a new source authority. The separately named Update Audit v0.2 source references within DOC-04 remain unchanged.

### 17.3 Scope and disposition

- DOC04-F03: **RESOLVED FOR DOC-03 VERSION-REFERENCE CLARIFICATION ONLY**, by this owner-document addendum.
- DOC-04 current version: **0.1.0**; published working-master label: **v0.1**; no v0.2 master publication or promotion established.
- DOC-03 remains DRAFT / RECONSTRUCTED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.
- DOC-04 remains RECONSTRUCTED WORKING MASTER / DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.
- Physical Data Dictionary acceptance remains NOT ACCEPTED; A12.40 remains PARTIAL / OPEN; A12.41 remains NOT STARTED / NOT VERIFIED.
- Dependencies newly closed beyond the narrowly scoped DOC04-F03 document-reference issue: **0**. FIX decisions changed: **0**. Technical/source-native dependency statuses changed: **0**.
- No architecture boundary, conceptual decision, physical schema, authorization, implementation, test, security or Production status is changed.

This is a document-control clarification only. It does not retroactively change the source DOC-03 v0.8 archive or DOC-04 v0.1.0 working master, and does not promote either document to canonical/final status.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. Stage 5 blanket migration remains NOT AUTHORIZED; Stage 6 implementation remains NOT AUTHORIZED.

## 18. Append-only canonical domain architecture and interaction contract — 19 November 2026

This section adopts DOC-06 §21 as the project-authored logical domain baseline. It defines conceptual ownership and interaction rules only; it does not assert deployed services, physical schema, API endpoints, message broker or implementation.

### 18.1 Canonical logical domains

M01–M21 and their names are canonical logical domain identifiers per DOC-06 §21.1. Domain IDs are stable architecture vocabulary; they are not necessarily deployable microservices, database schemas, packages or subscription SKUs. A modular monolith is compatible with these boundaries if ownership and dependency rules are enforced.

### 18.2 Single-owner boundaries

Each authoritative business object has one owning domain. The primary/supporting domain mapping for EDU-WF-01–14 and HTL-WF-01–16 is defined in DOC-06 §§21.3–21.4. The owner controls object creation, mutation, lifecycle transitions, invariants, cancellation/reversal and audit history. Supporting domains own their own records and communicate through explicit commands, events or read models. Cross-domain table writes and hidden shared ownership are prohibited at the design level.

### 18.3 Interaction contract

Commands identify actor, business context, target object, requested action, correlation ID and idempotency key where retryable. Events identify business_id, aggregate/object ID, version, event type, occurred-at time, correlation/idempotency reference and originating actor/service. Event payloads minimize sensitive data; consumers retrieve restricted attributes through authorized access. Consumers must tolerate duplicate and out-of-order delivery and use version/sequence checks. Failed consumers must not erase committed source-domain facts; retries and reconciliation are explicit. Read models are projections, never write authorities.

### 18.4 Tenant and boundary invariants

Every tenant-owned command, event and resource resolves to one business_id. Outlet/property/campus, warehouse, location, assignment and self/relationship scopes refine access within that tenant. Cross-business or cross-tenant access is denied unless a separate explicit platform-supported relationship and authorization path exists. Platform operations remain separate from business operations.

### 18.5 Cross-document ownership

DOC-06 is the workflow/domain traceability baseline; DOC-04 must map each documented entity to one owning domain and identify references/projections; DOC-05 specifies the permission decision contract; DOC-07 specifies security controls and evidence. Any physical design must preserve these invariants and requires its own authorized technical review. No database, API, RLS, backend, application or deployment change is authorized. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 19. CW-04 canonical domain ownership and interaction contract reconciliation (20 November 2026)

This addendum makes the logical ownership already adopted in §18 explicit against DOC-06 §21. It supplements §§1–18 and does not replace the detailed workflow map or the owning domain documents.

### 19.1 Concept-to-owner crosswalk for DOC-03 §§5–9

| DOC-03 capability / source-of-truth row | Canonical owner | Supporting boundary |
|---|---|---|
| Business profile, tenant identity and organization | M01 | Outlet/warehouse hierarchy remains within the Business boundary; platform administration is separate |
| Product/service catalog, variants, units, categories and pricing | M02 | Sales/order execution is M03; hospitality room sellable catalog/rates follow the DOC-06 workflow map |
| Sales cart, order, quotation-to-order and sales transaction lifecycle | M03 | Payment, refund and financial posting are M16; M03 does not own the money ledger |
| Customer, guest, student, supplier/party identity and relationship context | M04 | Booking lifecycle is M05; financial obligation/payment is M16; sensitive fields remain separately classified |
| Booking, reservation, appointment, availability hold and booking lifecycle | M05 | Property/room readiness is M12; resource capacity may be M11; payment/deposit is M16 |
| Inventory identity, batch, stock movement, reservation, balance projection and cost-layer/costing lineage | M06 | Costing is a capability within M06, not a new M-domain; physical custody/warehouse handling is M07; financial journal posting is M16 |
| Warehouse, bin/location custody, picking/put-away and internal transfer custody | M07 | M06 owns physical inventory ledger effects; M19 owns external delivery route/proof |
| Supplier, purchase request/order, receiving procurement workflow and procurement commitment | M08 | Supplier party identity/reference is M04; supplier invoice/AP obligation and payment are M16 |
| Service request, work order, task execution and service completion | M09 | Asset maintenance is M20; inventory consumption is M06; workforce assignment is M17 |
| BOM/recipe/formula, production planning/execution, consumption/yield | M10 | Stock movements/cost layers are posted/owned by M06; finance posting by M16 |
| Reusable asset, fleet, capacity resource and utilization | M11 | Maintenance/safety lifecycle is M20; warehouse custody is M07 |
| Property/building/room/unit/bed, stay, housekeeping and hospitality operations | M12 | Booking is M05; room catalog/rate is M02; folio/payment is M16; maintenance release is M20 |
| Program/course/curriculum/class/session/enrollment/attendance/assessment | M13 | Student/guardian identity is M04; staff profile/roster is M17; credential/compliance review is M18 |
| Regulated product/prescription/dispensing and regulated controls | M14 | Party identity is M04; inventory movement is M06; compliance evidence is M18; financial posting is M16 |
| Laundry/item intake, custody, sorting, processing, quality and release | M15 | Inventory/material movements are M06; warehouse custody M07; workforce M17; quality controls M18 |
| Payment, refund, settlement, cash/bank, AP/AR, receivable/payable, customer credit/advance and financial journal posting | M16 | Party identity/relationship M04; sales source document M03; procurement source M08; journal/report projections are not new money sources |
| Worker/staff profile, shift, roster, availability, assignment and attendance | M17 | HR identity belongs here; case/credential compliance evidence M18; cash drawer and settlement M16 |
| Quality, inspection, nonconformance, compliance evidence, audit finding and controlled review/release | M18 | Source-domain facts remain in their originating domains; platform audit remains a separate platform control-plane event family |
| Dispatch, external shipment, route, delivery, proof of delivery and fulfillment exception | M19 | Internal warehouse custody/transfer is M07; stock ledger effects M06 |
| Maintenance plan/work, defect, safety hold, inspection, repair and return-to-service authority | M20 | Asset identity M11; room/property operational state M12; procurement M08 |
| External connector/channel configuration, mapping, sync jobs, webhook delivery and external exchange reconciliation | M21 | Business data remains owned by source domains; secret values are never exposed as ordinary records |

**Legacy §5 row interpretation:** Inventory = M06; Costing = M06 capability; Sales = M03; Payment/Cash/Bank/AP/AR/Customer credit/advance/Accounting = M16 for financial records and posting; Reporting/Audit/Compliance control = M18 for governance and evidence, while source facts and transaction event lineage remain owned by their source domains; provider delivery logs and external exchange jobs = M21. Platform audit is not absorbed into M18 or any Business M-domain.

### 19.2 Normative interaction-contract crosswalk to DOC-06 §21.5

| DOC-06 clause | DOC-03 architecture alignment / clarification |
|---|---|
| §21.5.1 Single writer / single owner | §18.2: one authoritative owner; only that owner creates/mutates its object |
| §21.5.2 No cross-domain table ownership | §18.2: foreign-key/reference does not grant mutation; no hidden shared ownership or cross-domain table writes |
| §21.5.3 Lifecycle authority | §18.2 and §19.3: owner controls validation, state transitions, cancellation/reversal and audit history |
| §21.5.4 Synchronous dependency | Synchronous command only when caller needs an immediate authoritative decision; otherwise prefer durable event/async orchestration and avoid distributed multi-domain writes |
| §21.5.5 Event contract | §18.3: business_id, aggregate/object ID, version, event type, occurred-at, correlation/idempotency reference and actor/service; minimize sensitive payload |
| §21.5.6 Idempotency | Retryable commands/syncs require stable idempotency identity and deterministic duplicate handling; retries must not double-post |
| §21.5.7 Consistency | Inventory, finance and booking changes require explicit transaction boundary and reversal/compensation semantics; a downstream failure cannot erase a committed owner-domain fact |
| §21.5.8 Read models | Read models/reports are projections, never write authorities; material projection lag and reconciliation state must be visible |
| §21.5.9 Tenant isolation | §18.4: every tenant command/event/resource resolves to one business_id; outlet/property/campus/warehouse/class/task scopes refine access below tenant |
| §21.5.10 Auditability | Record actor, action, target, business/resource scope, purpose/context, authorization decision/reason, timestamp, correlation/idempotency reference and before/after or immutable event reference according to classification/retention |

### 19.3 Explicit owner and interaction invariants

1. A command is addressed to the owner of the target authoritative object. An orchestrator may validate workflow state and coordinate handoffs but cannot write the supporting domain's authoritative table or bypass its lifecycle.
2. A supporting domain may return an authoritative decision or publish an event; the requesting domain stores only its own object and permitted reference/projection.
3. A synchronous dependency must be justified by the need for an immediate authoritative answer. Other cross-domain work uses durable asynchronous handoff where appropriate; no implicit distributed transaction is assumed.
4. Every retryable command carries an idempotency key scoped to business and operation identity. Duplicate command/event delivery must not create duplicate money, stock movement, booking, journal or external side effect.
5. A source-domain commit remains authoritative if a downstream consumer fails. Retry, dead-letter/quarantine, replay and reconciliation lifecycle must be explicit in a future technical design; a consumer failure must not silently roll back or erase the source fact.
6. Cross-domain read models identify their source owner, projection version/freshness and reconciliation state where operationally material. A projection cannot mutate source state.
7. Events carry minimum necessary data. Sensitive identity, financial, credential or regulated fields are retrieved through the owning domain's authorization path, not copied into broad event payloads.
8. Business tenant context is resolved server-side. Client-supplied business/outlet/property/role/device identifiers are context hints, not authorization proof. S0 platform operations remain separate from Business S1–S5 scopes.
9. Authorization is evaluated for the target resource owner and exact action. Workflow orchestration, foreign keys, event subscription or read-model access do not imply mutation authority.
10. Audit evidence preserves actor/service, action, target, scope, purpose, decision/reason, time and correlation/idempotency lineage; exact storage, retention and tamper controls remain technical OPEN dependencies.

### 19.4 Cross-document authority and scope

- DOC-06 §21.1 owns the canonical M01–M21 taxonomy; DOC-06 §§21.3–21.4 own the CAT-10/CAT-11 workflow primary/supporting owner map; DOC-06 §21.5 owns the normative interaction contract.
- DOC-02 §17 owns the project-authored 30-workflow title/index and repeats the primary owner for navigation only; it does not override DOC-06.
- DOC-05 §§23–28 own permission catalogue vocabulary, candidate key and authorization decision boundaries. DOC-05 §29 clarifies that the target resource's owner domain must evaluate its own exact key and policy. No M-domain key or role is inferred from this architecture crosswalk.
- DOC-04 remains owner for entity/attribute and physical data dictionary mapping. This addendum does not resolve physical entity/field ownership, keys, constraints, indexes, RLS or server enforcement.
- DOC-07 owns security control/evidence contracts. CW04-ARCH-01–12 are architecture acceptance designs only; they are not executed evidence.

### 19.5 Acceptance and status boundary

**CW-04 logical architecture alignment: PASS at design cross-reference level, subject to the CW-04 package's remaining PR/CI/merge/post-merge gates.** Generic source-of-truth capabilities in §5–§9 are now mapped to existing M owners; costing is not a separate M-domain; financial posting remains M16; custody and inventory ledger responsibilities are separated; and DOC-03's interaction contract is explicitly aligned to all ten DOC-06 §21.5 clauses.

DOC-03 remains DRAFT / RECONSTRUCTED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. This addendum does not close physical API/service contracts, event infrastructure, transaction boundaries, concurrency, idempotency storage, RLS/server enforcement, exact production grants, test execution, evidence, backup/DR or Production readiness.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. No implementation or production change is authorized.
