# POS SaaS Multi-Usaha v3.0 — Product Blueprint Master

> **Document ID:** DOC-01  
> **Version:** 0.1.0  
> **Status:** DRAFT — SOURCE-ALIGNED RECONSTRUCTED WORKING MASTER; REVIEW REQUIRED  
> **Checkpoint:** 17 November 2026  
> **Mode:** Documentation only • Append-only • `DB_PUSH_BLOCKED: ACTIVE`  
> **Authority:** GitHub `main` after this document is reviewed and merged; source decisions retain their own scope and provenance.

## 1. Purpose and authority

DOC-01 consolidates the product vision, business model, tenant principles, platform boundary, category taxonomy and high-level operating principles for POS SaaS Multi-Usaha v3.0.

This is a source-aligned reconstructed working master, not a verbatim recovery of an earlier draft and not a replacement for primary decision records. The Blueprint POS SaaS v3.0 remains a **DRAFT KERJA TERKONSOLIDASI** for stages 5.1–5.8. The Blueprint Alignment Addendum v1.0 is a conceptual, append-only alignment aid. The Super Admin Blueprint v1.0 is approved only as a product/planning blueprint within its scope.

Where a category or policy status has a later explicit approval addendum or erratum, that source controls only the specific decision it covers. Preserve all historical versions. Do not infer approval from a consolidation table, filename, or presence in the archive.

This document describes product/design intent. It does not prove that code, database objects, RLS, authorization, APIs, tests, integrations or Production features exist or work.

## 2. Product vision and business model

POS SaaS Multi-Usaha is a multi-tenant operational platform intended to support different business categories and their workflows, including business/outlet/warehouse operations, catalog, pricing and tax, inventory, purchasing, sales and payment, customer/receivables, finance, loyalty/promotions, devices/synchronization, subscriptions/modules, integrations/audit and reporting.

Core product baseline:

- One Owner account is associated with one Business.
- One Business may operate multiple outlets/branches and warehouses.
- A Business has one primary business category; additional product modules are governed separately by package/entitlement policy.
- One outlet may use multiple cashier devices.
- Owner manages the Business within the ownership authority path. Manager and employees are constrained by assigned responsibilities, role eligibility, permission/capability and scope.
- Platform Super Admin governs the SaaS platform; Business users operate within their own tenant.
- Subscription expiry or module deactivation must not erase transaction history. Operational restrictions are a separate policy decision.
- Changing category, configuration, price, tax or operating rules must be validated and auditable; historical transactions retain their relevant snapshots.

These are product/business requirements, not physical schema or implementation approval.

## 3. Tenant and ownership model

### 3.1 Business boundary

- `business_id` is the primary tenant boundary.
- Tenant-scoped data must be associated with the correct Business directly or through a verifiable and enforceable relationship.
- Cross-Business relationships must be rejected unless a specifically authorized platform-level use case permits narrowly scoped access.
- Tenant isolation requires appropriate database integrity controls and server-side authorization. UI filtering or hidden navigation is not a sufficient security boundary.

### 3.2 Ownership, membership and assignment are distinct

- Owner authority derives from active ownership history and its approved ownership authority path; do not assume Owner is an ordinary Business member role granted through `member_roles`.
- Business membership, ownership, employee identity, role assignment and outlet/task assignment are separate concepts.
- An outlet assignment does not automatically confer all-Business scope.
- Object scope and organizational/geographic scope are separate dimensions and must be resolved explicitly.
- Technical ownership resolver, joint ownership/quorum and detailed scope resolution remain OPEN unless their controlling source is separately recovered and approved.

### 3.3 Tenant enforcement status

The conceptual requirement is source-backed. Physical composite-FK design, exact constraints, RLS policies, server authorization implementation, resolver behavior and executed negative tests are **NOT VERIFIED by this documentation audit**. Do not represent this blueprint as proof of enforcement.

## 4. Platform and Business role boundary

- Platform Super Admin is separate from Business standard roles.
- Owner is outside the 12 standard Business roles.
- The conceptual standard Business role baseline contains 12 roles:
  1. Manager
  2. Supervisor / Shift Lead
  3. Cashier
  4. Inventory Operator
  5. Production / Service Operator
  6. Receptionist / Front Desk
  7. Finance / Accounting
  8. Employee / HR Operator
  9. Procurement Operator
  10. Warehouse Operator
  11. Delivery / Fulfillment Operator
  12. Maintenance Operator
- Manager is a Business-level governance role with category/workflow allowlist constraints; it is not a universal Business-wide grant.
- The default Manager allowlist described in the Alignment Addendum is limited to Cashier, Inventory Operator, Production Operator, Service Operator and Receptionist/Front Desk, and remains subject to category/product/module allowlist and permission/scope guards.
- Supervisor / Shift Lead, Finance / Accounting and Employee / HR Operator are not default Manager allowlist roles. Finance / Accounting and Employee / HR Operator are conditional across categories.
- Functional labels such as Instructor/Tutor, Examiner/Assessor, Admissions Officer, Housekeeping or Reservation Agent do not create new standard roles by themselves; they map to existing roles/capabilities or assignment/credential contexts under their category-specific sources.

Role availability or eligibility is not an authorization grant. DOC-05 owns detailed authorization, capability, scope and SoD treatment.

## 5. Category taxonomy and status

The conceptual taxonomy contains 13 categories:

| ID | Business category | Source/status baseline | Important boundary |
|---|---|---|---|
| CAT-01 | Retail / Toko | RMD-57 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-02 | Grosir / Distributor | RMD-58 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-03 | F&B / Restoran / Kafe | RMD-59 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-04 | Jasa / Service Provider | RMD-60 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-05 | Salon / Beauty | RMD-61 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-06 | Manufaktur / Produksi | RMD-62 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-07 | Rental / Penyewaan | RMD-63 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-08 | Apotek / Toko Kesehatan | RMD-64 decision addendum; conceptual baseline; regulated workflow gate remains | Credential, jurisdiction and compliance gates are not waived |
| CAT-09 | Laundry | RMD-65 decision addendum; conceptual FIX | Category workflow/control FIX only |
| CAT-10 | Education / Kursus / Lembaga Pendidikan | RMD-66 and approval addendum E-01–E-04 | E-01–E-03 mapping FIX; E-04 is an approved decision to retain detailed OPEN items |
| CAT-11 | Hotel / Penginapan | RMD-68 v1.1 and approval addendum H-01–H-04 | H-01–H-03 mapping FIX; H-04 is an approved decision to retain nine detailed OPEN groups |
| CAT-12 | Lainnya / Belum Diklasifikasikan | RMD-69 v1.1 conceptual FIX baseline | Temporary classification/exception and fail-closed path, not a permanent operating category; safe-mode/lifecycle/SLA/reviewer details OPEN |
| CAT-13 | Parfum / Fragrance | RMD-67 category decision; separate Retail/Refill and Formulation/Manufacturing tracks | RF-01–RF-10 and FM-01–FM-12 remain distinct conceptual tracks; technical/regulatory details remain OPEN |

### 5.1 Category status interpretation

- Category Consolidation 1–13 v1.0 is a navigation/consolidation map, not a primary decision source or final role/module/capability matrix.
- Erratum Category Consolidation v1.1 is the append-only status correction for the specific items it names. It corrects the stale v1.0 Hotel and CAT-12 statuses and records the RMD-56 v1.2 status while explicitly retaining two non-identical v1.2 variants without selecting a canonical master.
- RMD-66 E-04 and RMD-68 H-04 are approved preservation decisions. The decision itself is approved; the underlying detailed OPEN items remain OPEN. Do not label E-04/H-04 simply as unapproved OPEN decisions.
- CAT-12 must remain fail-closed for unknown/ambiguous classification; it does not automatically enable specialist modules.
- CAT-08 regulated/professional workflows are NOT READY until the applicable credential, jurisdiction and compliance gates are evidenced.
- CAT-13 Parfum/Fragrance keeps Retail/Refill separate from Formulation/Manufacturing. Do not merge the two tracks.
- Category change triggers eligibility review. Category is workflow/classification context, not authorization.

## 6. Module, entitlement and authorization separation

Keep these dimensions distinct:

1. Business category and workflow context.
2. Standard role and role eligibility.
3. Module availability/eligibility.
4. Capability/action permission.
5. Business, property, outlet, warehouse, assigned-record or other scope.
6. Data classification and purpose.
7. Context/state, approval and segregation of duties (SoD).
8. Server-side authorization and implementation evidence.

Package/subscription entitlement determines product/feature availability under policy; it must not bypass security guards. Platform Super Admin module activation does not automatically grant a user permission, capability, data scope or tenant access. CORE/CONDITIONAL/REGULATED labels and M01–M21 are not universal menu, data or action grants.

The cross-category role × module × capability matrix remains DRAFT / PROPOSED / CANDIDATE. Category → Workflow → Module Crosswalk v1.3 remains DRAFT / CANDIDATE; M01–M21 per-category mapping is not final. G02 and G04 remain OPEN; G01 is PARTIAL. Final permission keys, scope resolver, inheritance, thresholds, exact approver mapping and enforcement remain OPEN.

## 7. High-level operating principles

The following principles are carried from the product blueprint and must be read together with their more specific domain decision records:

- Separate master data from transaction history; preserve material transaction snapshots.
- Tenant-scoped entities and relationships must preserve Business identity and tenant integrity.
- Role and permission are distinct; membership, ownership and assignment are distinct.
- Derived balances/availability are projections and must not replace the relevant source-of-truth ledger.
- Posted transactions must not be silently edited or deleted. Corrections use an authorized void/cancel/return/reversal/compensation path with an audit trail appropriate to the domain.
- Offline transactions require unique identity, idempotency, synchronization queue and visible conflict handling; the server remains authoritative for accepted state.
- External payment success must be verified through the official server-side mechanism; webhook handling must be verified and idempotent.
- Subscription/module status must not rewrite or erase tenant transaction history.
- Money and quantity precision must use suitable exact numeric representations in the eventual technical design; this statement does not prescribe or approve physical column types.

For inventory/costing, use the more specific DOC-04 and approved A12 decision lineage: immutable `inventory_movements` ledger, balances as projections, MWA default and FIFO alternative at the approved grouping scope, FEFO physical batch selection vs FIFO cost-layer consumption, and reservations reducing available—not physical on-hand—stock. This section does not replace those decision records.

## 8. Platform Super Admin product-planning boundary

The Super Admin Blueprint v1.0 is approved as a product/planning blueprint. It describes 11 platform menus: Dashboard; Manajemen Bisnis; Maps Bisnis Berlangganan; Manajemen Pengguna; Langganan & Paket; Pembayaran SaaS; Analitik Platform; Support & Pengaduan; Pengaturan Platform; Keamanan & Audit Log; and Notifikasi.

It establishes the platform-vs-tenant product boundary and planning principles for limited, justified and auditable cross-tenant administration. It does not approve final UI, API, permission keys, schema, RLS, backend behavior or implementation. Manajemen Admin & Permission is not part of the 11 existing menus and remains CANDIDATE in the later sitemap/authorization audit context.

Cross-tenant support must not become unrestricted tenant access. Detailed platform permissions, session limits, write grants, emergency access and enforcement remain within DOC-05/DOC-07 and their source statuses.

## 9. Source and provenance register

The following locators were directly recorded in the Stage 4.9.8/4.9.9 audit and/or the primary source reads used for this reconstruction. Page numbers refer to the source document's page sequence; section references are included where available.

| Source | Locator | Claims supported | Status / limitation |
|---|---|---|---|
| `Blueprint_POS_SaaS_Multi_Usaha_v3.0.docx` | pp.2–6, 8–9; §§1–7, 11–13; especially p.3 §2 and p.5 §5.3 | Product purpose; one Owner/one Business; outlets/warehouses; business_id; domain map; membership/role concepts; offline/payment/posted-transaction principles | DRAFT working consolidation; not implementation evidence |
| `Blueprint_Alignment_Addendum_v1.0_2026-11-14.docx` | pp.1–4; §§1–11 | Ownership vs membership; tenant and scope separation; 13 categories; 12 roles; Manager allowlist; entitlement vs authorization; approval/SoD/data-classification boundaries | Conceptual append-only alignment; does not supersede parent blueprint globally |
| `Blueprint_Super_Admin_POS_SaaS_v1.0.docx` | pp.2–3; §§1–4; also §§5–11 | Platform/tenant boundary; 11-menu product-planning baseline; auditable cross-tenant administration; planning and security requirements | Approved product/planning blueprint only; not implementation approval |
| `Blueprint_POS_SaaS_v3.0_Category_Consolidation_1-13_v1.0.docx` | pp.1–5; §§1–4 | Historical taxonomy and workflow overview | Consolidation/navigation only; stale CAT-11/12 status corrected by erratum |
| `Erratum_Category_Consolidation_1-13_v1.1_AppendOnly_2026-11-14.docx` | pp.1–2; §§1–7 | Status correction for RMD-56, CAT-11, CAT-12, CAT-13 and matrix boundaries | Append-only status erratum; no blanket new eligibility grant |
| `RMD-66_Education_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | pp.1–2; §§1–3 | E-01 Manager allowlist; E-02 12-role mapping; E-03 14 module groups; E-04 preserves detailed OPEN items | Conceptual FIX only; technical/Production implementation NOT APPROVED |
| `RMD-68_v1.1_Hotel_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | pp.1–2; §§1–5 | H-01 Manager allowlist; H-02 12-role mapping; H-03 14 module groups; H-04 preserves nine OPEN groups | Conceptual FIX only; technical/Production implementation NOT APPROVED |
| `RMD-69 v1.1` addendum | Exact primary file locator not recovered in this DOC-01 pass; status is corroborated by Erratum v1.1 and downstream audit summaries | CAT-12 R69-D01–D12 conceptual FIX and fail-closed temporary/exception classification | Direct source file/locator remains UNRECOVERED here; do not overstate direct verification |
| RMD-57–RMD-65 and RMD-67 category decision addenda | Category-level sources referenced by Category Consolidation v1.0 and Erratum v1.1; individual primary locators not expanded in this DOC-01 pass | Conceptual category decision baselines | Summary-level corroboration; exact individual claim locators remain PARTIAL |
| `Category_Workflow_to_Module_Crosswalk_v1.3_DRAFT_2026-11-14.docx` | DOC-01 dependency reference; see DOC-02/DOC-05 for detailed treatment | Candidate M01–M21 category/workflow alignment | DRAFT/CANDIDATE; not FIX |
| `Cross_Category_Matrix_Source_Reconciliation_v1.2_DRAFT_2026-11-14.docx` | Referenced by Erratum v1.1 and REC-06 | Cross-category role/module/capability reconciliation | DRAFT / PARTIAL / NOT FINAL / NOT FIX |

## 10. Known gaps and unresolved dependencies

| Gap ID | Item | Status | Impact / handling |
|---|---|---|---|
| DOC01-G01 | Exact claim-level locators and source-side DOC-01 content backlinks are incomplete | OPEN / PARTIAL | P99-01/P99-02 remain open; do not invent backlinks or locators |
| DOC01-G02 | RMD-57–RMD-65 and RMD-67 individual primary addenda not individually re-read in this pass | PARTIAL | Carry category status only from recorded audit/erratum evidence; detailed claims belong to DOC-02 |
| DOC01-G03 | Direct RMD-69 v1.1 source file/locator not recovered in this pass | UNRECOVERED | CAT-12 status is corroborated by Erratum v1.1; retain provenance gap |
| DOC01-G04 | RMD-56 v1.2 has two non-identical variants; canonical master not selected | OPEN | Preserve both; do not choose by filename/date |
| DOC01-G05 | Manager/role/module/capability/scope/SoD final mappings and permission keys | OPEN / CANDIDATE | DOC-05; no automatic grants |
| DOC01-G06 | Ownership resolver, joint ownership/quorum, scope inheritance and enforcement | OPEN / NOT VERIFIED | No schema/RLS/server enforcement claims |
| DOC01-G07 | Regulated pharmacy credential/jurisdiction/compliance gates | OPEN / NOT READY | CAT-08 regulated workflows remain gated |
| DOC01-G08 | Education detailed OPEN items and Hotel nine OPEN groups | OPEN — explicitly preserved | E-04/H-04 approval decisions retain, not close, these details |
| DOC01-G09 | Source-to-master content backlinks | NOT MET in sampled sources | P99-01 remains OPEN; future addenda require separate approved append-only source changes |
| DOC01-G10 | Physical schema, API/backend, RLS, tests and Production verification | NOT VERIFIED | Outside Stage 5; no implementation inference |

## 11. Change control and downstream ownership

- DOC-01 is the product/business foundation master; it does not replace detailed decision sources.
- DOC-02 owns category workflow details and per-category decision locators.
- DOC-03 owns application/platform architecture detail.
- DOC-04 owns ERD, entity and inventory/costing baselines.
- DOC-05 owns authorization, permission, role, capability, scope and SoD detail.
- DOC-07 owns security evidence and its limitations.
- DOC-08 owns the consolidated decision register while preserving source-native decision IDs and scopes.
- Any conflict or supersession not explicitly resolved by a controlling source remains OPEN.
- Historical archive files are not modified by this migration.

## 12. Governance

Documentation migration only. `DB_PUSH_BLOCKED: ACTIVE`. Stage 6 implementation remains NOT AUTHORIZED. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source code, CI workflow, Vercel/deployment, Supabase Preview/Staging or Production change is included or authorized.

---

**Provenance note:** This document is a reconstructed, source-aligned working master prepared from the accessible primary sources and audit evidence listed above. It is not a verbatim recovery of an earlier writing-block draft. Its status remains DRAFT until reviewed and merged; the gaps in §10 remain visible after publication.
