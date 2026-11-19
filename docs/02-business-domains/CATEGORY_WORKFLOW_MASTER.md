# POS SaaS Multi-Usaha v3.0 — Category & Workflow Master

> **Document ID:** DOC-02  
> **Version:** 0.1.0  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED WORKING MASTER; REVIEW REQUIRED  
> **Checkpoint:** 17 November 2026  
> **Mode:** Documentation only • Append-only • `DB_PUSH_BLOCKED: ACTIVE`  
> **Authority:** GitHub `main` only after review, merge and post-merge verification. Primary RMD, approval addenda and errata retain their own authority and scope.

## 1. Purpose and authority

DOC-02 consolidates the 13-business-category taxonomy, category workflow baselines, cross-category workflow archetypes, category-specific conceptual decision status and unresolved workflow/authorization boundaries. It is a navigation and synthesis master, not a replacement for category RMD audits, FIX addenda, approval addenda, or errata.

This is a reconstructed working master based on accessible Library source material and audit evidence. It is not a verbatim recovery of a prior draft. Historical source files remain unchanged. Category Consolidation v1.0 is retained as a historical consolidation snapshot; Erratum v1.1 controls only the explicitly corrected status statements.

## 2. Status model — keep three layers separate

| Layer | What it answers | What approval does not imply |
|---|---|---|
| Category/workflow conceptual decision | Category scope, workflow baseline, lifecycle and control principles | Final role grant, module entitlement, permission key, schema or implementation |
| Manager/standard-role/module eligibility | Which conceptual roles/modules may be relevant within a category and approved scope | Stable permission key, exact technical allowlist, assignment or user access grant |
| Technical authorization/implementation | Permission keys, capability/action, effective scope, SoD resolver, RLS/API/backend enforcement and tests | Nothing is approved unless separately evidenced |

**Status vocabulary:** FIX means approved only within the named conceptual scope. OPEN, REVIEW, PARTIAL, TODO, UNVERIFIED, NOT READY, PROPOSED, RECOMMENDED and CANDIDATE remain unresolved or non-approved in their stated scope. Do not collapse decision status and residual-detail status into one label.

Category is classification/workflow context, not authorization. Role eligibility ≠ module eligibility ≠ capability/action ≠ scope ≠ authorization. CORE or CONDITIONAL is not a grant.

## 3. Canonical category taxonomy

| ID | Category | Primary source family | Workflow baseline | Category decision status | Residual boundary |
|---|---|---|---:|---|---|
| CAT-01 | Retail / Toko | RMD-57 v1.0 + v1.1 | WF-01–WF-12 | FIX — conceptual | Numeric thresholds, permission keys and enforcement OPEN |
| CAT-02 | Grosir / Distributor | RMD-58 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Pricing/credit/PO/receiving/return/AR/AP thresholds and exact allowlists OPEN |
| CAT-03 | F&B / Restoran / Kafe | RMD-59 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Tax/discount/refund/waste/recipe/procurement policy and exact allowlists OPEN |
| CAT-04 | Jasa / Service Provider | RMD-60 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Service-specific thresholds, SLA and technical authorization OPEN |
| CAT-05 | Salon / Beauty | RMD-61 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Sensitive consultation/photo data, consent, retention and thresholds OPEN |
| CAT-06 | Manufaktur / Produksi | RMD-62 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Formula confidentiality, costing and production controls retain detailed OPEN items |
| CAT-07 | Rental / Penyewaan | RMD-63 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Asset-specific policy, deposit, damage and lifecycle thresholds OPEN |
| CAT-08 | Apotek / Toko Kesehatan | RMD-64 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual baseline | Regulated/professional workflows NOT ELIGIBLE / NOT READY until applicable credential, jurisdiction and compliance gates are evidenced |
| CAT-09 | Laundry | RMD-65 v1.0 + v1.1 | WF-01–WF-14 | FIX — conceptual | Detailed service, custody, claim and operating thresholds OPEN |
| CAT-10 | Education / Kursus / Lembaga Pendidikan | RMD-66 v1.0 + approval addendum | 14-workflow baseline | E-01–E-03 mapping FIX; E-04 is an APPROVED preservation decision | Detailed E-04 items remain OPEN |
| CAT-11 | Hotel / Penginapan | RMD-68 v1.0 + v1.1 and approval addendum | 16-workflow baseline | H-01–H-03 mapping FIX; H-04 is an APPROVED preservation decision | Nine H-04 detail groups remain OPEN |
| CAT-12 | Lainnya / Belum Diklasifikasikan | RMD-69 v1.0 + v1.1 addendum; Erratum v1.1 | 14 exception/classification items | R69-D01–D12 FIX — conceptual | Temporary classification/exception and fail-closed only; safe-mode functions, lifecycle, SLA/expiry and reviewer authority OPEN |
| CAT-13 | Parfum / Fragrance | RMD-56 v1.1 extension; RMD-67 v1.0 + v1.1 | RF-01–RF-10 Retail/Refill; FM-01–FM-12 Formulation/Manufacturing | R67-D01–D12 FIX — conceptual | Two tracks remain separate; numeric, regulatory and technical details OPEN |

The 14-workflow counts for CAT-04–CAT-09 and CAT-12 are recorded in the reconstructed DOC-02 v0.1 and the consolidation/audit lineage. Individual workflow titles and claim-level locators are not fully re-established in this pass; do not invent missing titles. CAT-10/11 counts are corroborated by the RMD-66/RMD-68 source mapping and approval lineage. CAT-13 is two distinct tracks, not one 22-step sequence.

## 4. Category detail pages

The category pages in `categories/` provide source pointers, scope summaries and status boundaries. Where an exact workflow title or individual decision locator was not directly recovered, the page explicitly records the gap rather than supplying an inferred workflow.

## 5. Cross-category workflow archetypes

These are shared patterns for navigation and design discussion, not mandatory modules or new approvals:

| Archetype | Relevant categories | Conceptual sequence/pattern |
|---|---|---|
| Retail & Distribution | Retail, Grosir/Distributor, Parfum Retail/Refill | Catalog/SKU, pricing, procurement, receiving, inventory, sales/order, fulfillment, payment, return, reporting |
| Perishable / Recipe / Consumption | F&B, Parfum refill, parts of Salon/Jasa | Recipe/formula or usage standard, reservation, actual consumption, waste/loss, variance, costing |
| Appointment & Work Order Service | Jasa, Salon/Beauty, Laundry | Customer intake, quotation/booking, scheduling, assignment, execution, evidence, QC, completion, invoice |
| Manufacturing & Batch | Manufaktur, Parfum Formulation/Manufacturing, parts of F&B | BOM/formula, version/effectivity, planning, work order, material issue/consumption, output, QC, batch traceability, WIP/costing |
| Asset / Capacity Reservation | Rental, Hotel | Availability, reservation, contract/guest lifecycle, operational readiness, maintenance/housekeeping, handover/return |
| Regulated / Sensitive Operations | Apotek, Education, some Parfum materials/products | Professional eligibility or safeguarding, restricted data, traceability, compliance review, controlled access, audit |
| Custody & Item Processing | Laundry, Rental, Warehouse/distribution | Unique order/asset/item reference, custody events, condition, location, transfer, inspection and handover evidence |

## 6. Cross-category control baseline

- **Identity and tenant:** active Business membership and tenant isolation; branch, warehouse and assignment scope are explicit; no cross-Business access by implication.
- **Category vs authorization:** category and activity tags classify workflows; they do not grant roles, modules or capabilities.
- **Role vs capability:** role describes responsibility; sensitive actions require distinct capability/action, scope, approval and SoD.
- **Manager governance:** category-specific allowlist and explicit effective scope; no self-assignment or self-escalation. Manager does not automatically gain specialist capabilities.
- **Cashier/payment capture:** register-scoped capture; discount override, void, refund, cash variance approval and close/reconciliation are separate where risk/SoD requires.
- **Finance SoD:** input, review, final posting, payout, settlement, reversal, refund and write-off remain separable actions.
- **Procurement/receiving:** request/PO creation, approval, physical receiving, discrepancy review and supplier payment are distinct controls.
- **Inventory:** reservation/allocation is not physical movement; immutable movements are the source-of-truth record and balances are projections. No direct balance editing.
- **Fulfillment/custody:** pick, pack, dispatch, delivery, proof-of-delivery, destination receipt, inspection and return are distinct lifecycle events.
- **Sensitive/regulated data:** purpose limitation, minimum necessary access, credential/compliance gates, traceability and audit are required at conceptual level; actual enforcement remains unverified.
- **Unknown state:** unknown category, disabled/deprecated permission, inactive membership, invalid scope or uncertain authority fails closed.

## 7. Manager, role and module mapping boundary

The category-specific review documents and approvals are not interchangeable:
- CAT-01–CAT-09: RMD-57–RMD-65 decision addenda establish category-specific conceptual FIX baselines. Review documents record category-specific Manager allowlist, standard-role eligibility and module eligibility analysis; use the relevant later cumulative approval and addendum rather than reading a draft's “pending” label in isolation.
- CAT-10: E-01–E-03 are approved conceptual mappings. E-04 is itself an approved decision to preserve the remaining detailed OPEN items.
- CAT-11: H-01–H-03 are approved conceptual mappings. H-04 is itself an approved decision to retain nine detailed OPEN groups.
- CAT-12: R69-D01–D12 establish temporary/fail-closed classification principles; this is not a permanent operating category and does not auto-enable specialist modules.
- CAT-13: R67-D01–D12 conceptual FIX does not collapse Retail/Refill and Formulation/Manufacturing tracks or close numeric/regulatory details.

No category summary establishes final exact Manager allowlists, stable permission keys, role assignment grants, entitlement grants, technical authorization, RLS, API/backend enforcement or implementation.

## 8. Crosswalk and module status

`Category_Workflow_to_Module_Crosswalk_v1.3_DRAFT_2026-11-14` remains DRAFT / CANDIDATE / NOT FINAL / NOT FIX. M01–M21 per-category cells are not a final authorization map; G02 and G04 remain OPEN and G01 remains PARTIAL. Shared Core, Capability/Action Taxonomy, Scope Dimension and SoD/Data Classification matrices remain PROPOSED/CANDIDATE. Do not promote a candidate M-ID or CORE/CONDITIONAL label to an access grant.

## 9. Source register and locators

| Source | Locator / evidence | DOC-02 use | Limitation |
|---|---|---|---|
| `Blueprint_POS_SaaS_v3.0_Category_Consolidation_1-13_v1.0.docx` | pp.1–5, §§1–5 | Historical 13-category taxonomy, category focus, archetypes and cross-category controls | Historical snapshot; CAT-11/12 statuses are stale and corrected by Erratum v1.1 |
| `Erratum_Category_Consolidation_1-13_v1.1_AppendOnly_2026-11-14.docx` | pp.1–2, §§1–7 | Controlling correction for RMD-56, CAT-11, CAT-12, CAT-13 and crosswalk boundaries | Corrects only stated scope; no blanket eligibility grant |
| `RMD-55_v1.1_R55-D01_to_R55-D12_Conceptual_FIX_Addendum.docx` | RMD-55 v1.1, D01–D12; exact page locator not re-read in this pass | Shared category/role/eligibility principles | Conceptual FIX only |
| `RMD-57` through `RMD-65` v1.0 audits and v1.1 FIX addenda | Individual category sources identified in Stage 4.7.3 source map §4.4; RMD-57 and selected RMD-58/59 content directly sampled | Category-specific workflows and conceptual controls | Full individual addenda/claim locators not all re-read in this DOC-02 pass; details marked PARTIAL where needed |
| `RMD-66_Education_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | pp.1–2, §§1–3 | E-01–E-04 | E-04 preserves detailed OPEN items |
| `RMD-68_v1.1_Hotel_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | pp.1–2, §§1–5 | H-01–H-04 | H-04 preserves nine OPEN groups |
| `RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx` | Controlling addendum identified by Erratum v1.1 §3 and source map; direct file locator not recovered in this pass | CAT-12 temporary/fail-closed conceptual baseline | Direct source locator UNRECOVERED in this pass |
| `RMD-56_v1.1_Category_Extension_13_Parfum_Fragrance.docx` and RMD-67 v1.0/v1.1 | RMD-56 v1.1 pp.1–3, §§1–8; RMD-67 files identified in source map §4.4 | CAT-13 extension and decision lineage | Individual RMD-67 decision locators not fully re-read in this pass |
| `DOC-02_Category_Workflow_Master_v0.1.docx` | pp.1–2 | Earlier reconstructed outline and workflow counts | Historical working draft; corrected here where status conflicts with Erratum v1.1 |
| `POS_SAAS_STAGE4_7_3_RMD_REVIEW_SOURCE_MAPPING_v0.1_2026-11-16.md` | §§2–5, especially §4.4 and §5 | RMD/Review inventory, source filenames, primary target and OPEN boundaries | Source map, not replacement for primary sources |
| `POS_SAAS_STAGE4_9_8_DOC00_DOC03_PROVENANCE_AUDIT_v0.1_2026-11-16.docx` | §5, DOC-02 disposition | Required separation of approval status/residual detail; locator gaps | Audit finding, not category approval |

## 10. Known gaps and unresolved dependencies

| Gap ID | Item | Status | Handling |
|---|---|---|---|
| DOC02-G01 | Full individual workflow titles and detailed step sequence for all RMD-57–RMD-69 categories | PARTIAL | Do not infer titles from counts or archetypes; expand only from exact primary source text |
| DOC02-G02 | Claim-level page/section locators for every RMD-57–RMD-65 and RMD-67 decision | PARTIAL | Source map provides filenames/status; individual addenda require further locator pass |
| DOC02-G03 | Direct RMD-69 v1.1 addendum path and page locators | UNRECOVERED in this pass | Erratum corroborates status; retain source gap |
| DOC02-G04 | E-04 residual detail and H-04 nine OPEN groups | OPEN — approved preservation decisions | Keep decision approved and details unresolved |
| DOC02-G05 | CAT-08 credential, jurisdiction, professional and compliance gates | NOT READY until evidenced | No regulated workflow activation implied |
| DOC02-G06 | CAT-12 safe-mode function list, lifecycle, SLA/expiry and reviewer authority | OPEN | Temporary fail-closed path only |
| DOC02-G07 | CAT-13 numeric, formulation, safety and regulatory detail | OPEN | Preserve two tracks; do not combine or infer compliance closure |
| DOC02-G08 | Category → workflow → M01–M21 crosswalk | DRAFT/CANDIDATE; G02/G04 OPEN; G01 PARTIAL | Not a final permission or entitlement matrix |
| DOC02-G09 | Exact Manager allowlists, standard-role eligibility, module eligibility, permission keys, thresholds and scope resolver | OPEN / REVIEW / PARTIAL | Eligibility is not authorization |
| DOC02-G10 | Physical schema, RLS, API/backend, test and Production enforcement evidence | NOT VERIFIED / NOT AUTHORIZED | Outside this document's scope |

## 11. Governance

Documentation only. Preserve historical sources and all FIX decisions. No SQL/DDL/DML, database/schema/migration, RLS/Auth, trigger, API/backend, application source, deployment, Supabase Preview/Staging or Production changes. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 implementation remains NOT AUTHORIZED.

---

**Provenance note:** DOC-02 is a reconstructed source-aligned working master. The source gaps in §10 remain open; this publication does not claim full content-level recovery or implementation readiness.


## 12. Append-only direct source locator recovery — CAT-12 / DOC02-G03 (18 November 2026)

The earlier locator gap in §9 and §10 stating that the direct RMD-69 v1.1 addendum path and page locators were not recovered is superseded for the locator criterion only.

**Controlling conceptual addendum:**

`/Arsip Proyek POS SaaS/RMD/RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx`

Manifest identity: M231-223, zero-based index 222, 16 November 2026 SHA-256 manifest v1.0.

Verified page/section locators:
- **p. 1, §§1–2:** approval basis and R69-D01–D07 conceptual FIX.
- **p. 2, §§2–5:** R69-D08–D12, WF-01–WF-14 conceptual baseline, authorization/operational guardrails and negative-test baseline.
- **p. 3, §§6–8:** residual OPEN details, implementation gate and conceptual status.

**Current DOC02-G03 status:** RECOVERED — direct source path and page/section locators. RMD-69 v1.0 remains the historical audit brief; v1.1 is the conceptual FIX addendum for R69-D01–D12.

This locator recovery does not close the CAT-12 technical gaps. Safe-mode function list, lifecycle transitions, SLA/expiry, reviewer authority, confidence/review thresholds, evidence standards, appeal/restriction authority, permission keys, schema, RLS, API and implementation remain OPEN / NOT APPROVED as applicable. The category remains a temporary classification/exception path and fail-closed baseline, not a permissive operational category.


## 13. Append-only DOC02-G03 locator consistency reconciliation — 19 November 2026

### 13.1 Finding DOC02-F01

A bounded current-`main` audit identified stale locator-status statements in this document: the RMD-69 v1.1 row in §9 still says the direct file locator was not recovered, and §10 DOC02-G03 still labels the locator UNRECOVERED. Those statements conflict with the later, controlling recovery already recorded in §12. The same stale statements also appear in the CAT-12 detail page's residual-details and source-locator sections.

### 13.2 Current locator disposition

For locator readiness only, the controlling disposition is **RECOVERED — DIRECT SOURCE PATH AND PAGE/SECTION LOCATOR ONLY**. The recovered source is:

`/Arsip Proyek POS SaaS/RMD/RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx`

Manifest identity: M231-223, zero-based index 222, 16 November 2026 SHA-256 manifest v1.0. Verified locators: p.1 §§1–2; p.2 §§2–5; p.3 §§6–8. See §12 for the original recovery record and locator scope.

This §13 addendum supersedes only the stale current-status wording identified in DOC02-F01. The earlier wording in §9 and §10 is retained as historical audit context and must not be read as the current locator status.

### 13.3 Preserved boundaries and audit disposition

- DOC02-F01: **CORRECTED BY APPEND-ONLY LOCATOR-STATUS RECONCILIATION**.
- DOC02-G03 locator criterion: **RECOVERED — DIRECT SOURCE PATH AND PAGE/SECTION LOCATOR ONLY**.
- CAT-12 remains a temporary classification/exception path and fail-closed conceptual baseline, not a permanent permissive operating category.
- Safe-mode function list, lifecycle transitions, SLA/expiry, reviewer authority, confidence/review thresholds, evidence standards, appeal/restriction authority, permission keys, schema, RLS, API/backend and implementation remain OPEN / NOT APPROVED / NOT VERIFIED as applicable.
- DOC02-G01, G02 and G04–G10 remain at their existing statuses; no unrelated status is promoted.
- Dependencies newly closed: **0**. FIX decisions changed: **0**.

DOC-02 remains DRAFT — SOURCE-ALIGNED RECONSTRUCTED WORKING MASTER; REVIEW REQUIRED; NOT CANONICAL / NOT FINAL. This correction does not establish technical authorization or implementation readiness.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.

## 14. Append-only category-to-domain baseline reconciliation — 19 November 2026

This section adopts the project-authored domain and category decisions in DOC-06 §21. It supplements the existing category descriptions; it does not silently rewrite historical category status or approve runtime module entitlement.

### 14.1 CAT-10 Education

CORE domains: M04 Customer / Guest / Student / CRM; M05 Booking, Reservation & Appointment; M13 Education Operations; M17 Workforce & Scheduling. CONDITIONAL domains: M02 Catalog, Product & Pricing; M06 Inventory & Material Ledger; M08 Procurement & Supplier; M16 Finance, Billing & Payment; M18 Quality, Inspection & Compliance; M21 Integration & Channel.

### 14.2 CAT-11 Hotel

CORE domains: M02 Catalog, Product & Pricing; M05 Booking, Reservation & Appointment; M12 Hospitality Operations; M16 Finance, Billing & Payment; M18 Quality, Inspection & Compliance; M20 Maintenance & Safety. CONDITIONAL domains: M03 POS, Sales & Order (onsite POS only); M04 Customer / Guest / Student / CRM; M06 Inventory & Material Ledger; M07 Warehouse & Custody; M08 Procurement & Supplier; M17 Workforce & Scheduling; M19 Delivery & Fulfillment; M21 Integration & Channel.

### 14.3 Workflow ownership rule

The primary domain listed for each EDU-WF and HTL-WF in DOC-06 §§21.3–21.4 owns its authoritative lifecycle and write operations. Supporting domains retain ownership of their own records and accept explicit commands/events; they do not become subordinate tables or implicit write extensions of the primary workflow. Category workflow presentation may combine domains but must not collapse ownership.

### 14.4 Conditional activation and change gate

A conditional domain is enabled only by explicit category/business configuration and applicable subscription entitlement, followed by independently evaluated permission. Extension workflows require defined owner, objects, actions, scope, data/purpose, SoD and acceptance scenarios. No role, Manager status or workflow label automatically grants access. DOC-06 §21 is the controlling logical baseline; contradictions must be logged and reconciled rather than resolved by local reinterpretation.

Status: project-authored logical category design recorded; no permission grants, technical configuration, physical schema, implementation or test execution is implied. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 15. Append-only clarification — category/domain baseline versus legacy crosswalk status (19 November 2026)

This section reconciles §8 with the project-authored design decisions in §14 and DOC-06 §21.

- **G02 is RESOLVED BY PROJECT DESIGN** for the canonical logical domain taxonomy M01–M21 and the CAT-10/CAT-11 category profiles recorded in §14. This is not a claim that every legacy category-to-module source cell or all-category entitlement matrix is approved.
- **G04 is RESOLVED AT LOGICAL WORKFLOW-OWNERSHIP LEVEL** for the 30 Education/Hotel workflows through the primary/supporting ownership map in DOC-06 §§21.3–21.4. Detailed submodule decomposition, object/action policy rows, exact role grants and technical execution remain separate acceptance items.
- The §8 statement that G02/G04 remain OPEN describes the earlier source-crosswalk review state and is superseded only for the logical design decisions above. Do not reopen those decisions solely because Crosswalk v1.3 remains DRAFT/CANDIDATE.
- Crosswalk v1.3 retains its historical source-artifact status. DOC-06 §21 and this §14 are the project-authored normative logical design for the stated scope.
- CORE/CONDITIONAL identifies product/category design, not automatic activation, subscription entitlement, permission or role grant.

No dependency outside this explicitly scoped logical design is closed. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 and Stage 6 remain NOT AUTHORIZED.
