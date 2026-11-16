# POS SaaS Multi-Usaha v3.0 — DOC-05 Authorization Master

> **Document ID:** DOC-05  
> **Version:** 0.1.0  
> **Checkpoint date:** 17 November 2026  
> **Status:** DRAFT — RECONSTRUCTED AUTHORIZATION WORKING MASTER / REVIEW REQUIRED / NOT FINAL  
> **Proposed GitHub path:** `docs/05-authorization/AUTHORIZATION_MASTER.md`  
> **Source basis:** Authorization Audit Tahap 2.4; O-01–O-12 decision register; CR-01–CR-10 and Q-01–Q-06 decision addenda; DOC-01/DOC-02/DOC-03; REC-06 evidence  
> **Mode:** Documentation only • Append-only • `DB_PUSH_BLOCKED: ACTIVE`

## 1. Purpose, authority and status boundary

DOC-05 consolidates the currently evidenced authorization design for POS SaaS Multi-Usaha v3.0: identity and tenant boundary, platform and Business role separation, role/module eligibility, capability/action vocabulary, object and geographic scope, purpose and data classification, approval and segregation of duties (SoD), temporary/elevated access, audit expectations, negative acceptance scenarios, and unresolved dependencies.

This is a reconstructed, evidence-bounded working master. It is not a verbatim recovery of an earlier DOC-05 draft, a final permission catalogue, a complete role-to-capability matrix, a physical authorization specification, or evidence that any control is implemented. The primary decision documents and category-specific RMD/approval addenda retain their own authority and scope. Historical archive files remain unchanged.

**Status interpretation is mandatory:**
- FIX means a decision approved only within its stated conceptual/design scope.
- PROPOSED, CANDIDATE, DRAFT, REVIEW, PARTIAL and OPEN remain non-final or unresolved within their stated scope.
- NOT VERIFIED means the evidence reviewed does not establish implementation or execution; it does not assert that no implementation exists.
- A conceptual FIX, a role/module eligibility label, or an audit completion does not establish a permission grant, physical schema, RLS/API enforcement, executed test, or Production readiness.

DOC-05 is proposed on a PR branch. It becomes the maintained GitHub working reference only after review, applicable CI, explicit user merge approval, merge, and post-merge verification on `main`.

## 2. Source authority and evidence hierarchy

Apply the following precedence by subject and scope; do not select authority by filename, version number, date, or the words FINAL/MASTER/FIX alone.

| Source family | Authority / status carried into DOC-05 |
|---|---|
| `Keputusan_FIX_Otorisasi_POS_SaaS_O01-O12_v1.0.docx` | O-01–O-12 FIX at conceptual platform-authorization scope; detailed parameters listed as OPEN remain OPEN |
| `Cross_Category_Role_Module_Capability_Matrix_Decision_Addendum_v1.2.docx` | CR-01–CR-10 FIX at conceptual cross-category scope |
| `Cross_Category_Role_Module_Capability_Matrix_Q01-Q06_Decision_Addendum_v1.3.docx` | Q-01–Q-06 FIX at conceptual scope; supersedes the earlier OPEN status of those questions only |
| RMD-55–RMD-69 and their applicable approval addenda/errata | Category-specific decision authority; do not reopen or generalize beyond each source's scope |
| DOC-01 Product Blueprint Master | Product, tenant, Owner/platform boundary, 12 Business-role baseline, and authorization-layer separation |
| DOC-02 Category & Workflow Master | Category/workflow eligibility and cross-category operating controls |
| DOC-03 System Architecture Master | Platform/tenant trust boundary and server-authoritative authorization principle |
| Authorization Audit Tahap 2.4 (16 Nov 2026) | Audit report for the 17-file Authorization archive inventory, FIX decisions, design statuses and gaps; not an approval |
| REC-06 overlay v0.1 and Education/Hotel traceability matrix v0.1 | PARTIAL working evidence; Education/Hotel conceptual mapping and unresolved capability/scope/SoD gaps |
| Permission Catalogue v1.0; Shared Core matrices; Capability/Action Taxonomy v1.0; Scope Matrix v1.0; SoD/Data Classification Matrix v1.0; Page × Permission × Scope v1.0 | DRAFT / PROPOSED / CANDIDATE design inputs only; none is a final permission catalogue or implementation approval |

The Authorization audit inventoried 17 archive files and reviewed the key decision and design families. That inventory is not proof that every source has complete claim-level provenance, that every design row is approved, or that every category mapping is exhaustive.

## 3. Authorization model — independent gates

Effective authorization is the intersection of the applicable gates, not a direct consequence of any single role, category, module, assignment, subscription or UI state.

1. **Actor and identity:** authenticate the actor and resolve stable human identity, account status and relevant platform/Business membership.
2. **Tenant and business context:** resolve the active Business tenant and target resource. A client-supplied Business, outlet, user, device, role or source identifier is not authority.
3. **Category and workflow:** resolve the current primary category, classification lifecycle and active workflow. Unknown, ambiguous or pending classification fails closed for specialist/regulatory access.
4. **Role eligibility:** verify the applicable standard role and category/workflow eligibility. Eligibility is not assignment or permission.
5. **Module/entitlement:** verify module eligibility and package/subscription entitlement separately. Entitlement determines feature availability under policy; it never bypasses authorization.
6. **Capability/action:** identify the explicit action requested. View, create, submit, approve, execute, publish, reverse, export and administer are not interchangeable.
7. **Scope:** validate both the target object/relationship and geographic/organizational boundary. The effective scope is their permitted intersection.
8. **Purpose, data and context:** apply purpose limitation, relationship, field allowlist, masking, object state, credential/compliance, approval, SoD, delegation and expiry as applicable.
9. **Decision and audit:** deny by default when a required guard is missing or cannot be verified; record material access decisions/actions with appropriate audit protection and payload minimization.

The sequence is a conceptual policy model. Exact policy evaluation order, resolver behavior, technical contracts and enforcement remain NOT VERIFIED.

## 4. Identity, tenant and role boundary

### 4.1 Platform and Business identities

- `SUPER_ADMIN` and `PLATFORM_ADMIN` are platform roles, not Business standard roles.
- Platform Super Admin governs the SaaS platform. Platform Admin operates only through individual, explicitly granted platform permissions and target scopes.
- One Owner account is associated with one Business. Owner authority derives from the approved ownership authority path; do not infer it from an ordinary Business membership/role grant.
- Business membership, ownership, employee identity, role assignment, outlet/task assignment, custody and object relationship are distinct concepts.
- No Business scope implies cross-Business access. Platform support is a separate, narrow and auditable authority path.

### 4.2 Twelve standard Business roles

The conceptual standard Business-role baseline contains exactly these 12 roles:

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

Owner remains outside these 12 roles. No additional standard roles are created merely from functional labels such as Instructor/Tutor, Examiner/Assessor, Admissions Officer, Housekeeping, Reservation Agent, Night Auditor, Guest Service, Sales/Corporate Account, Pharmacy Staff, Business Admin, Sales or Viewer. Functional duties must map to existing standard roles/capabilities and explicit assignment/credential contexts unless a separate future decision approves otherwise.

### 4.3 Role-specific FIX guardrails

- Manager is a Business-level governance role, not a universal Business-wide operational grant. Operational access requires category/workflow allowlist and explicit effective scope. No self-assignment or self-escalation.
- Supervisor / Shift Lead is CONDITIONAL on formal shift/team/oversight workflows and assigned team, shift, location and workflow scope; it does not inherit Manager authority.
- Finance / Accounting and Employee / HR Operator are CONDITIONAL across categories. Availability does not grant module, capability, data or approval access.
- Cashier/payment capture does not imply discount override, void, refund approval, register close, variance approval, reconciliation or settlement.
- Inventory Operator and Warehouse Operator may be combined only where workflow, team, scope, operational controls, audit trail and SoD remain effective; otherwise they remain separate.
- Education Instructor duties map to existing Production / Service Operator capability with assigned class/session scope; no Instructor role is created.
- Hotel housekeeping duties map to existing Production / Service Operator capability with assigned room/task scope; room readiness, safety hold and return-to-service remain separate controls.
- Pharmacy professional/regulated workflows require workflow-specific credential/compliance gates; a generic role or outlet scope is insufficient.
- Parfum Retail/Refill and Formulation/Manufacturing remain distinct workflow paths.
- `CORE CANDIDATE` and `CONDITIONAL` are eligibility labels, not role assignment, permission grant or authorization.

## 5. Platform authorization decisions — O-01 to O-12

All 12 decisions below are **FIX — conceptual**. Preserve each decision; the residual parameters in the final column remain OPEN and must not be filled with invented values.

| ID | FIX conceptual baseline | Residual OPEN detail |
|---|---|---|
| O-01 | The 11 existing menus remain the core SUPER_ADMIN navigation. Page viewing and sensitive actions are separate capabilities. | Sub-permissions for audit export, selected configuration changes and destructive actions. |
| O-02 | PLATFORM_ADMIN business detail access is read-only, requires explicit individual permission, matching target scope and field allowlist. | Final field allowlist per category; address/contact detail needs. |
| O-03 | PLATFORM_ADMIN tenant activation/deactivation uses an individual permission and target scope; per-action SUPER_ADMIN approval is not the default. | Whether grant scope is one Business, explicit list, or wider; target-explicit default remains. |
| O-04 | PLATFORM_ADMIN price changes are limited to specific targets with a dedicated permission; bulk price changes are SUPER_ADMIN-only. | Amount/percentage limits, effective dates, existing-subscriber impact and additional approval thresholds. |
| O-05 | Refund request, review/decision and processing are separate lifecycle stages; partial refund cannot exceed server-validated remaining refundable amount. | Eligibility window, transaction age, amount bounds, SLA, rejection reasons and payment processor. |
| O-06 | PLATFORM_ADMIN handles tickets within assignment/scope; customer data is minimum necessary. | Ticket categories, SLA, reopen policy, attachment access and assignment detail. |
| O-07 | Cross-tenant read session requires permission, explicit target Business, reason, expiry and auto-expiry. Write session needs a separate grant and SUPER_ADMIN approval. | Maximum duration, re-authentication, data categories needing approval and session notifications. |
| O-08 | No generic cross-tenant write. Any write must be a narrow allowlisted operation, specific target, reason, expiry and policy-required approval. | Exact write allowlist and valid use cases; absent a valid use case, do not provide cross-tenant write. |
| O-09 | PLATFORM_ADMIN audit visibility is limited to own activity and target/ticket activity within task scope; global audit is SUPER_ADMIN-only. | Permitted history window for other admin activity needed for ticket continuity. |
| O-10 | Admin & Permission management is SUPER_ADMIN-only. PLATFORM_ADMIN cannot self-grant or change another admin's grants. | Final menu placement; the separate 12th menu remains a candidate pending explicit decision. |
| O-11 | Dual control applies to high-risk grant/revoke and actions explicitly requiring approval; no self-approval or auto-approval. | Final list of actions/permissions requiring dual control, including whether ordinary read-only grants need a second approver. |
| O-12 | Elevated/cross-tenant grants are time-bound by default; temporary grants auto-expire and do not silently renew. Continuing grants require reason, minimum scope and periodic review. | Standard temporary duration, continuing-grant review interval and expiry policy for all PLATFORM_ADMIN permissions. |

Additional FIX boundaries:
- SUPER_ADMIN manages the permission catalogue and platform-admin grant/revoke.
- PLATFORM_ADMIN permissions are individual per account; the same role label does not imply identical rights.
- PLATFORM_ADMIN may request a refund but cannot approve its own request; the refund decision is SUPER_ADMIN authority.
- Permanent Business deletion is SUPER_ADMIN-only through a special procedure.
- If an independent approver is unavailable, a process requiring approval remains pending; no auto-approval.

## 6. Cross-category decisions — CR-01 to CR-10

All CR-01–CR-10 are **FIX — conceptual**:

| ID | Preserved decision |
|---|---|
| CR-01 | Finance / Accounting is CONDITIONAL across all categories; availability does not grant module, capability, assignment or authorization. |
| CR-02 | Employee / HR Operator is CONDITIONAL across all categories; HR data/function access remains workflow-, purpose-, classification-, scope- and SoD-limited. |
| CR-03 | Manager is a Business-level governance role, one Manager per Business in the stated baseline; it is not a specialist role or automatic operational grant. |
| CR-04 | No new Instructor role at this stage; Education duties map to existing Production / Service Operator with assigned class/session scope, subject to Q-02. |
| CR-05 | Hotel Front Desk handles intake/reservation/check-in; Production / Service Operator may handle assigned housekeeping tasks; Maintenance Operator handles maintenance. Room readiness, safety hold and return-to-service are separate. |
| CR-06 | Pharmacy prescription review, dispensing and controlled-product workflows require suitable credential/compliance gates; generic role access remains NOT ELIGIBLE / NOT READY until verified. |
| CR-07 | Inventory/Warehouse roles may be combined only when workflow, scope, volume, operational controls and SoD remain effective. |
| CR-08 | Parfum refill and formulation/manufacturing are distinct workflows; simple refill does not automatically require full manufacturing workflow or role. |
| CR-09 | Specialist role eligibility cannot be inferred from Business category alone; assess actual workflow, module eligibility, scope, controls and operational need. |
| CR-10 | CORE CANDIDATE only indicates potential relevance; it is not assignment, authorization, permission grant or automatic access. CONDITIONAL requires workflow evidence and separate eligibility review. |

## 7. Cross-category questions — Q-01 to Q-06

All Q-01–Q-06 are **FIX — conceptual** under the v1.3 decision addendum, which updates their earlier OPEN state:

| ID | Preserved decision |
|---|---|
| Q-01 | Supervisor / Shift Lead is CONDITIONAL for formal shift, team or oversight workflows and limited to assigned team/shift/location/workflow. |
| Q-02 | Education Instructor maps to Production / Service Operator with assigned class/session scope; no Instructor standard role. |
| Q-03 | Hotel Housekeeping maps to Production / Service Operator with assigned room/task scope; readiness/safety/return-to-service remain separate. |
| Q-04 | Inventory Operator and Warehouse Operator can be combined only if workflow, team, scope, responsibilities, receiving/storage/transfer/adjustment controls, audit and SoD remain effective. |
| Q-05 | Manager is a governance role; operational access only through approved category/workflow allowlist. Category change triggers eligibility/allowlist review. Owner authority remains separate. |
| Q-06 | Finance / Accounting and Employee / HR Operator are CONDITIONAL standard roles across categories; data and functions remain task-limited. |

These decisions do not approve final role-to-module/capability rows, permission keys, grants, scope resolver, RLS/API rules or implementation.

## 8. Capability and action vocabulary

The Capability / Action Taxonomy v1.0 proposes 18 conceptual action families. They are vocabulary for analysis, not stable permission identifiers or approved role-to-action grants:

1. Discover / List
2. View / Read
3. Create / Draft
4. Update / Edit
5. Assign / Allocate
6. Submit / Request
7. Review / Verify
8. Approve / Reject
9. Execute / Process
10. Confirm / Finalize
11. Publish / Activate
12. Hold / Release
13. Cancel / Void
14. Reverse / Refund / Write-off
15. Export / Download / Share
16. Administer / Configure
17. Reconcile / Close
18. Inspect / Certify

Required separation principles:
- Create/Edit/Draft does not imply Submit, Approve, Publish, Post, Finalize, Release or Execute.
- Submit is not approval. Review is not approval. Approval is not execution.
- View/List does not imply sensitive-field access, bulk query, export, download, print or external sharing.
- Cancel/Void is not delete. Posted/final records require controlled correction, reversal or compensation that preserves original history.
- Assignment does not transfer ownership, custody, tenant or financial authority.
- Inspection/QC is distinct from execution and release.
- Role labels, modules, menus, subscription entitlements, feature flags and UI visibility never substitute for an explicit action authorization.

The M01–M21 module vocabulary and per-category mapping remain CANDIDATE/DRAFT. G01–G04 are not closed; do not invent module or submodule mappings from similar names.

## 9. Scope model

### 9.1 Two independent scope dimensions

- **Object/relationship scope** identifies the resource or record the actor may act on: e.g. register, order, invoice, job, batch, room, class/session, asset, employee record or assigned case.
- **Geographic/organizational scope** identifies the operating boundary: e.g. Business, property, outlet/branch, warehouse, site, team, shift or other approved organizational unit.

Neither dimension substitutes for the other. Effective access is restricted to the permitted intersection after role, capability, purpose, state, approval, SoD and other applicable guards pass.

### 9.2 Scope FIX guardrails and candidate rules

- No cross-Business/tenant inheritance.
- No upward inheritance: child scope does not grant parent scope.
- No sibling inheritance: Outlet A does not grant Outlet B; Warehouse A does not grant Warehouse B.
- Parent-to-child inheritance may only be considered when explicitly defined for a particular scope type, role/workflow and action; never assume universal inheritance.
- Business-wide scope must be an explicit grant with reason, action boundary, review/expiry and additional guards; it does not arise from Manager or Owner labels.
- Multi-outlet/multi-warehouse scope must be an explicit active list, not inferred from one assignment or job title.
- Object assignment does not expand geographic scope; geographic scope does not grant every object.
- Assignment is not permission. Ownership, custody, record relationship and proximity do not imply unrestricted access.
- Record transfer between units does not automatically preserve or expand prior access; source/destination, assignment, custody and lifecycle rules require per-workflow specification.
- Historical access is not automatic. Temporary scope requires reason, expiry, revocation and audit; exact duration/renewal remains OPEN.
- Delegation/acting assignment cannot expand the delegator's scope or bypass SoD; delegation model remains OPEN.

### 9.3 Scope design gaps

The Scope Dimension Matrix v1.0 remains PROPOSED/CANDIDATE. Its unresolved scope topics include: canonical scope-node catalogue; Business-wide grant authority; multi-scope assignment and revocation; object assignment lifecycle; historical access; temporary scope/delegation; purpose and field classification; conflict precedence across role/assignment/ownership/custody/relationship; SoD/approval interaction; and future server-enforcement/negative-test mapping.

## 10. Data classification and purpose limitation

The SoD / Approval & Sensitive Data Matrix v1.0 proposes the following D0–D4 conceptual classes. The matrix remains PROPOSED/CANDIDATE; field-level mapping, legal basis, jurisdiction, masking, retention and exact access policy remain OPEN.

| Class | Conceptual meaning | Example classes / required caution |
|---|---|---|
| D0 — Public | Information intended for public disclosure | Published product/service descriptions and opening hours; publication integrity/approval still applies. |
| D1 — Internal Operational | Internal operational information with limited impact | Non-sensitive task status, stock availability summaries and generic schedules; no automatic export. |
| D2 — Confidential Business | Non-public business information whose disclosure may cause harm | Supplier terms, pricing strategy, non-public sales reports, cost data and commercial contracts; need-to-know and field allowlist. |
| D3 — Sensitive Personal / Financial | Personal or financial data with high impact | Customer/guest/student/employee identity, contact, payroll, payment details, balances and complaints; purpose, relationship, minimum fields, masking and audit. |
| D4 — Restricted / Regulated / Critical | Data/process requiring special credential, compliance, legal or very high-risk controls | Patient/prescription/regulated product data, minors/safeguarding, secrets, formula trade secrets, incident investigations and privileged tokens; fail closed until applicable gates are verified. |

Data controls apply at field/attribute level when a record contains mixed sensitivity. Purpose, relationship, minimum necessary, masking, recipient, destination, volume, expiry, export/share and audit are separate constraints. Access to a sensitive record does not imply permission to edit, merge, delete, approve or disclose it. Secrets must not appear in ordinary views, logs or exports.

Category examples in the candidate matrix (e.g. customer D1–D3, guest D2–D3, student/safeguarding D3–D4, employee/HR D2–D4, pharmacy D3–D4, formula/BOM D2–D4) are not a final field inventory or legal classification.

## 11. Approval, SoD and elevated access

The SoD / Approval & Sensitive Data Matrix v1.0 is PROPOSED/CANDIDATE. Preserve these conceptual guardrails without promoting its draft risk tiers or mappings into final policy:

- Separate request, review, approval/rejection, execution/processing, posting/finalization, release, reconciliation/close, reversal/refund/write-off and export where risk/workflow requires.
- No self-approval when independent approval is required.
- No auto-approval because an approver is unavailable, a deadline passes or the system cannot verify authority. Keep the request pending/blocked.
- Approval is not execution. The actor who approves is not automatically authorized to process or finalize.
- A material change to the approved payload requires re-review/re-approval; exact change rules remain OPEN.
- Revalidate actor identity, membership, role, scope, object state, approval validity, expiry, credentials/compliance and SoD immediately before execution/finalization.
- Expired/revoked role, assignment, scope or approval must not be honored because a user remains logged in.
- Delegation does not remove independence or permit self-approval, re-delegation or scope expansion.
- Dual control applies to high-risk grants/actions and explicitly designated cases; exact action list and approver mapping remain OPEN.
- Elevated/cross-tenant access is time-bound by default, target-specific, reasoned, minimum-scope, auditable and automatically expired. No silent renewal.
- Emergency/break-glass access remains a separately governed OPEN design topic.

T0–T3 risk tiers in the source matrix are candidate concepts only. Exact tier assignment, monetary/quantity/cumulative thresholds, approver count, role-to-approver mapping and exceptions are OPEN; no numeric threshold or legal conclusion is supplied by DOC-05.

## 12. Platform Admin access boundaries

The O-01–O-12 decisions and Page × Permission × Scope design establish the following platform boundary:

- The 11 existing SUPER_ADMIN menus remain core navigation; sensitive actions require distinct capabilities and controls.
- PLATFORM_ADMIN business detail is read-only by default, explicit-permission, target-scope and field-allowlist limited.
- Tenant activation/deactivation and price change require dedicated individual permission and target scope; bulk price change is SUPER_ADMIN-only.
- Refund request, decision and processing are separate. PLATFORM_ADMIN may request but cannot approve their own request; SUPER_ADMIN decides.
- Ticket access follows assignment/scope and minimum-necessary customer fields.
- Cross-tenant support defaults to target-specific read-only session with reason, expiry, auto-expiry and audit. Any write is separate, narrow, explicitly allowlisted and approved under the relevant policy.
- PLATFORM_ADMIN audit visibility is limited to own and in-scope task activity; global audit is SUPER_ADMIN-only.
- Admin & Permission management and grant/revoke authority are SUPER_ADMIN-only. PLATFORM_ADMIN cannot self-grant or alter another admin's grants.
- Elevated/cross-tenant grants require time limits, expiry, review and revocation semantics. Exact intervals remain OPEN.

The separate “Manajemen Admin & Permission” menu remains CANDIDATE; it is not established as an approved 12th menu.

## 13. Negative acceptance scenarios — designed, not executed

The source materials contain candidate negative checks, including:
- **SA-01–SA-18:** self-approval; approval vs execution; refund separation; stock variance; posted invoice mutation; export without grant; unrelated guest/student/employee data; pharmacy credential gates; safety release; expired approval; payload mutation; no independent approver; cross-tenant write; external share; entitlement bypass; unclassified Business access.
- **SC-01–SC-15:** sibling/upward scope; warehouse boundary; assignment-purpose mismatch; register boundary; Manager self-scope escalation; expired assignment; action separation; hotel guest-data restriction; pharmacy compliance; unclassified category; custody vs ownership/cost authority; cross-tenant ID/API attempt; View vs bulk export.
- **XCAT-NT-01–14:** cross-category candidate negative-test references in REC-06 working material.

These are designed scenarios/acceptance candidates only. Test catalogue completeness, traceability, implementation, execution, pass/fail evidence and CI enforcement are NOT VERIFIED. Do not label them passed tests.

## 14. Consolidated open-gap register

| ID / source | Remaining work | Status |
|---|---|---|
| O-01–O-12 residuals | Sub-permissions, field allowlists, target-scope forms, price/refund/ticket/session parameters, exact write allowlist, audit history, menu placement, dual-control list and grant durations/review intervals | OPEN |
| G01 | Canonical M01–M21 module/domain catalogue and definitions | OPEN |
| G02 | Exact category × module mapping; no inferred M-ID assignments | OPEN |
| G03 | Shared foundation vs operational-module boundary; seven shared foundations identified, role/capability boundaries still open | PARTIALLY RESOLVED |
| G04 | Submodule/workflow decomposition and workflow-to-object/action mapping | OPEN |
| G05 | Capability/action vocabulary and per-workflow mapping | PARTIAL |
| G06 | Scope resolver, hierarchy, assignment binding, parent/child rules and negative cases | PARTIAL |
| G07 | SoD/approval, risk tier, threshold, approver eligibility and dual-control mapping | PARTIAL |
| G08 | D0–D4 field-level classification, purpose, masking, export and retention | PARTIAL |
| G09 | Credential/compliance/jurisdiction evidence and exact gates | PARTIAL |
| G10 | Negative-test mapping, traceability and execution evidence | PARTIAL |
| REC-06 | Complete cross-category capability/action taxonomy, G02/G04 reconciliation, scope, data-purpose and SoD mapping, full catalogue acceptance | PARTIAL — NOT CLOSED |
| Scope Matrix O01–O10 | Scope node, Business-wide grants, multi-scope, assignment lifecycle, history, temporary/delegated scope, purpose/field, conflicts, SoD interaction and technical test mapping | OPEN |
| SoD Matrix A01–A12 | Approval authority, thresholds, dual control, stable identity conflicts, delegation, emergency access, data catalogue, purpose, export/disclosure, audit event policy, category mapping and implementation mapping | OPEN |
| Education E-04 / Hotel H-04 | Education detailed OPEN items and all nine Hotel OPEN groups remain preserved | OPEN |
| Category/source provenance | Exact locators and full source-to-claim crosswalks are incomplete for some RMD/approval evidence | PARTIAL / UNVERIFIED |
| Technical enforcement | Permission keys, grant model, scope resolver, RLS/API/backend, audit event schema, negative-test execution and Production posture | NOT VERIFIED / NOT AUTHORIZED |

The open registers above overlap by design because they come from distinct source families. Do not collapse them into one status or assume one register closes another.

## 15. Provenance register — Authorization archive inventory

Authorization Audit Tahap 2.4 records the following 17 files in `/Arsip Proyek POS SaaS/Authorization/`. The audit report is the evidence for the inventory; the individual design documents retain their own status.

| # | Source file | DOC-05 handling |
|---:|---|---|
| 1 | `Capability_Action_Taxonomy_Design_v1.0.docx` | PROPOSED/CANDIDATE action vocabulary; not permission keys |
| 2 | `Cross_Category_Matrix_Source_Reconciliation_v1.2_DRAFT_2026-11-14.docx` | DRAFT/PARTIAL source reconciliation; G01–G10 retained |
| 3 | `Cross_Category_Role_Module_Capability_Matrix_Decision_Addendum_v1.2.docx` | CR-01–CR-10 conceptual FIX |
| 4 | `Cross_Category_Role_Module_Capability_Matrix_Design_v1.0.docx` | Design input; not final matrix |
| 5 | `Cross_Category_Role_Module_Capability_Matrix_Q01-Q06_Decision_Addendum_v1.3.docx` | Q-01–Q-06 conceptual FIX |
| 6 | `Cross_Category_Role_Module_Capability_Matrix_Review_Refinements_v1.1.docx` | Historical refinement proposal; read with later decision addenda |
| 7 | `Cross_Category_Role_Module_Capability_Matrix_v1.1_Reconciled_DRAFT_2026-11-14.docx` | Reconciled DRAFT; not final |
| 8 | `Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.0.docx` | Historical index snapshot; corrected only by applicable erratum |
| 9 | `Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.1_Erratum_2026-11-14.docx` | Append-only index/status correction for its stated scope |
| 10 | `Keputusan_FIX_Otorisasi_POS_SaaS_O01-O12_v1.0.docx` | O-01–O-12 conceptual FIX decision register |
| 11 | `Matriks_Halaman_Permission_Scope_POS_SaaS_v1.0.docx` | PROPOSED page/access/scope design; not final catalogue |
| 12 | `Permission_Catalogue_Category_Role_Module_Eligibility_POS_SaaS_v1.0.docx` | DRAFT conceptual eligibility catalogue; no final permission keys |
| 13 | `Rekomendasi_Penyelesaian_12_Open_Items_Otorisasi_POS_SaaS_v1.0.docx` | Recommendation provenance for O-01–O-12; residual OPEN details preserved |
| 14 | `Scope_Dimension_Object_Geographic_Boundary_Matrix_Design_v1.0.docx` | PROPOSED/CANDIDATE scope model |
| 15 | `Shared_Core_Operational_Module_Eligibility_Matrix_Design_v1.0.docx` | PROPOSED/CANDIDATE; G01–G10 not fully closed |
| 16 | `Shared_Core_Operational_Module_Eligibility_Matrix_v0.1_PROPOSED.docx` | PROPOSED; not a replacement or approval of v1.0 |
| 17 | `SoD_Approval_and_Sensitive_Data_Classification_Matrix_v1.0.docx` | PROPOSED/CANDIDATE SoD and D0–D4 design |

Additional REC-06 sources:
- `REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md` — PARTIAL conceptual overlay.
- `REC-06_Education_Hotel_Workflow_to_Capability_Traceability_Matrix_v0.1_2026-11-15.md` — PARTIAL / OPEN / CANDIDATE working traceability matrix.

**Provenance limitation:** inventory/listing does not equal complete content audit or canonical-source acceptance. REC-05 remains PARTIAL. REC-06 remains PARTIAL. Where exact source locator, claim-level backlink, approval parameter or complete source content is not re-established, preserve the item as OPEN/UNVERIFIED/UNRECOVERED. No missing evidence is inferred.

## 16. Change control and implementation boundary

- This master is append-only during the Stage 5 documentation migration. Historical archive files and prior GitHub records are not rewritten or deleted.
- Preserve O-01–O-12, CR-01–CR-10, Q-01–Q-06 and category FIX decisions at their stated conceptual scope.
- A correction to a FIX decision requires specific material evidence, explicit approval and a separate traceable change.
- Do not create final permission keys, role grants, module grants, capability grants, scope assignments, approval thresholds or technical designs by inference.
- Do not claim that RLS, server-side authorization, API/backend guards, database constraints, audit stores, tests or Production controls are implemented or verified.
- `DB_PUSH_BLOCKED: ACTIVE`. No SQL/DDL/DML, database/schema/migration, Supabase, RLS/Auth, trigger, API/backend, application source, CI workflow, Vercel, deployment, Production or staging/preview change is included or authorized.
- Stage 6 remains **NOT AUTHORIZED**. Any later implementation requires separate explicit authorization and its own technical/security/readiness gates.

## 17. DOC-05 working acceptance checklist

| ID | Acceptance item | Current status |
|---|---|---|
| DOC05-01 | Reconcile DOC-01/DOC-02/DOC-03 authorization boundaries | COMPLETE — source-backed at stated scope |
| DOC05-02 | Preserve O-01–O-12 conceptual FIX and residual OPEN detail | COMPLETE — carried forward |
| DOC05-03 | Preserve CR-01–CR-10 and Q-01–Q-06 conceptual FIX | COMPLETE — carried forward |
| DOC05-04 | Record 12 Business roles and platform/Owner separation | COMPLETE — conceptual baseline |
| DOC05-05 | Consolidate action, scope, data, SoD and platform guardrails | COMPLETE — evidence-bounded working synthesis |
| DOC05-06 | Preserve G01–G10, Scope O01–O10, SoD A01–A12 and REC-06 gaps | COMPLETE — open statuses retained |
| DOC05-07 | Verify provenance inventory and identify source limitations | COMPLETE — inventory cross-referenced to Authorization Audit Tahap 2.4 |
| DOC05-08 | Complete editorial consistency and link review | IN PROGRESS — PR review pending |
| DOC05-09 | Documentation CI and substantive diff review | PENDING |
| DOC05-10 | Explicit user merge approval | PENDING |
| DOC05-11 | Merge and verify DOC-05/control/index on `main` | PENDING |

**Current disposition:** DOC-05 v0.1.0 is a reconstructed working master for review. It is not a final authorization catalogue or technical authorization specification. REC-06, permission-key definitions, category/module/action mapping, scope resolver, field-level data classification, SoD parameters and implementation evidence remain open.

`DB_PUSH_BLOCKED: ACTIVE`; Stage 5 remains documentation-only; Stage 6 remains NOT AUTHORIZED.
