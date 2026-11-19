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


## 18. Append-only post-merge publication closeout — DOC-05 (17 November 2026)

**Current publication checkpoint:** DOC-05 was published through the separately authorized documentation package PR #14 and is COMPLETE — MERGED & VERIFIED for that publication scope only. This section records publication chronology; it does not promote this reconstructed working master to canonical or final status.

| Item | Verified record |
|---|---|
| Repository | `kasirwarkop2026/Pos-Saas-Multi-Usaha` |
| PR | [#14](https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha/pull/14) |
| Merge commit | `26dbdf0b41bd1e2eb2ca467e1b50879832bf9b1b` |
| Target path | `docs/05-authorization/AUTHORIZATION_MASTER.md` |
| Changed files | 3 |
| Additions / deletions | 419 / 0 |
| Current main blob SHA | `01b07610c069adc17d53959e1b3f5aeb99d05a60` |

The publication workflow items DOC05-08 (editorial consistency/link review), DOC05-09 (documentation CI and substantive diff review), DOC05-10 (explicit merge approval), and DOC05-11 (merge and post-merge verification) are COMPLETE for PR #14. This does not mean the underlying authorization architecture gaps have been resolved.

**Current document disposition:** Version 0.1.1 working revision (the previously published v0.1.0 metadata is retained as historical publication metadata); DRAFT / RECONSTRUCTED AUTHORIZATION WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.

The following remain OPEN, PARTIAL, or unverified: REC-06; G01–G10; Scope O01–O10; SoD A01–A12; permission-key definitions; category/module/action mapping; scope resolver; field-level data classification; technical enforcement; and negative acceptance test execution. No implementation, runtime enforcement, or test PASS is established by PR #14.

This package-specific publication does not authorize the full Stage 5 GitHub migration, Stage 6 implementation, database changes, or Production changes. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 remains NOT AUTHORIZED.


## 19. Append-only publication-status reconciliation — DOC-05 (18 November 2026)

This addendum reconciles the publication workflow status recorded in §17 with the verified post-merge publication record in §18. It does not revise the underlying authorization design or acceptance scope.

1. DOC-05 publication package PR #14 is **COMPLETE — MERGED & VERIFIED** on `main` as recorded in §18. The publication tasks DOC05-08 (editorial consistency/link review), DOC05-09 (documentation CI and substantive diff review), DOC05-10 (explicit user merge approval), and DOC05-11 (merge and post-merge verification) are complete for that publication package.
2. The `IN PROGRESS` / `PENDING` values in §17 for DOC05-08 through DOC05-11 are retained as the pre-merge checklist snapshot. They are superseded for current publication-status navigation by this §19 and the verified §18 record; they are not current pending tasks.
3. The sentence in §1 stating that DOC-05 is still proposed on a PR branch is likewise a historical pre-publication statement. The current GitHub working reference is the file published at the path recorded in §18. The document remains a reconstructed working master, not a canonical/final authorization specification.
4. Publication completion does **not** close G01–G10, Scope O01–O10, SoD A01–A12, REC-06, AUTH-OPEN-01–27, or the related DOC-06 traceability gaps. It does not approve stable permission keys, grants, module/action mappings, scope resolver, field allowlists, technical enforcement, test execution, or Production readiness.

**Current disposition:** DOC-05 publication = COMPLETE — MERGED & VERIFIED (PR #14); document/design status = DRAFT / RECONSTRUCTED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL; technical authorization dependencies remain OPEN/PARTIAL/NOT VERIFIED as individually registered.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration NOT AUTHORIZED; Stage 6 implementation NOT AUTHORIZED.


## 20. Authorization audit-to-REC-06 acceptance crosswalk — 18 November 2026

**Disposition: DERIVED TRACEABILITY AID — PARTIAL; NO DEPENDENCY CLOSED.** This addendum compares the DOC-05 Authorization Audit gap families G01–G10 with the REC-06 acceptance criteria recorded in DOC-06 §13.1. It is a navigation crosswalk derived from the wording and scope of the two published working masters; it is not a primary-source decision, an approved one-to-one mapping, or a change to either register.

### 20.1 Review basis and relationship labels

Reviewed current `main`:
- DOC-05 `docs/05-authorization/AUTHORIZATION_MASTER.md` §14 (G01–G10 and residual authorization gaps).
- DOC-06 `docs/05-requirements-traceability/MASTER_TRACEABILITY.md` §12 (TRC-OPEN-01–15) and §13.1 (REC-06 AC-06-01–12).
- DOC-09 `docs/07-decision-registers/MASTER_OPEN_REGISTER.md` §3D (AUTH-OPEN-01–27).

Relationship labels:
- **DIRECT SUBJECT OVERLAP** means the two entries address substantially the same subject; it does not make their IDs, closure criteria, owners, or evidence interchangeable.
- **RELATED** means one entry is a prerequisite, adjacent concern, or partial evidence relationship, but its scope is not identical.
- **NO DIRECT COUNTERPART** means the reviewed REC-06 criteria do not state a corresponding acceptance criterion for that DOC-05 gap.

### 20.2 G01–G10 to REC-06 crosswalk

| DOC-05 gap | REC-06 criterion(s) | Relationship | Scope boundary |
|---|---|---|---|
| G01 — canonical M01–M21 module catalogue and definitions | AC-06-03 Workflow → M-ID; AC-06-10 provenance per row | RELATED | A canonical module catalogue is prerequisite context for workflow-to-module mapping, but is not itself the workflow mapping or row-level provenance acceptance. |
| G02 — exact category × module mapping | AC-06-03 Workflow → M-ID; AC-06-10 provenance per row | RELATED | Category-to-module and workflow-to-M-ID are adjacent mapping layers; neither substitutes for the other. |
| G03 — shared foundation vs operational-module boundary | No direct AC-06 counterpart | NO DIRECT COUNTERPART | REC-06's submodule and workflow criteria do not expressly accept the shared-foundation/operational-module boundary. |
| G04 — submodule/workflow decomposition and workflow-to-object/action mapping | AC-06-01 Resource/object per workflow; AC-06-02 Submodule decomposition; AC-06-04 Action/object/lifecycle state | DIRECT SUBJECT OVERLAP | The criteria cover related decomposition and workflow-level resource/action mapping, but do not establish that every G04 sub-item is satisfied. |
| G05 — capability/action vocabulary and per-workflow mapping | AC-06-04 Action/object/lifecycle state | DIRECT SUBJECT OVERLAP | Shared action/object/lifecycle subject only; stable permission keys and approved grants remain separate OPEN items. |
| G06 — scope resolver, hierarchy, assignment binding, parent/child rules and negative cases | AC-06-06 Object/geographic scope | DIRECT SUBJECT OVERLAP | REC-06's scope criterion does not by itself establish resolver behavior, assignment lifecycle, inheritance, expiry/revocation, or tests. |
| G07 — SoD/approval, risk tier, threshold, approver eligibility and dual-control mapping | AC-06-08 SoD/approval | DIRECT SUBJECT OVERLAP | Shared SoD/approval subject; detailed thresholds, independence, approver eligibility and technical lifecycle remain open. |
| G08 — D0–D4 field-level classification, purpose, masking, export and retention | AC-06-07 Data classification/purpose | DIRECT SUBJECT OVERLAP | Shared data-classification/purpose subject; complete field inventory, jurisdiction, masking, export and retention acceptance is not established. |
| G09 — credential/compliance/jurisdiction evidence and exact gates | No direct AC-06 counterpart; TRC-OPEN-12 is a limited Pharmacy-specific related reference | RELATED / NO GENERAL COUNTERPART | TRC-OPEN-12 covers Pharmacy credential/regulatory evidence only; it is not a general acceptance mapping for every regulated category or G09 requirement. |
| G10 — negative-test mapping, traceability and execution evidence | AC-06-09 Negative tests; AC-06-10 Provenance per row | DIRECT SUBJECT OVERLAP / RELATED | AC-06-09 covers negative-test design/traceability; AC-06-10 is supporting provenance. Neither proves implementation, execution, PASS, retained runtime artifacts, or CI enforcement. |

### 20.3 REC-06 criteria without a direct G01–G10 counterpart

- **AC-06-05 Role/function → standard role:** no direct G01–G10 counterpart is established by this crosswalk. DOC-05's role baseline and DOC-06 TRC-OPEN-03 remain the relevant adjacent references; this does not close role-eligibility mapping.
- **AC-06-11 Conceptual consistency with FIX:** a REC-06 consistency criterion, not a G01–G10 authorization gap or evidence of implementation.
- **AC-06-12 New approval decisions:** recorded as NOT PRESENT in DOC-06; no new approval is inferred or created by this crosswalk.

### 20.4 Status and authority preservation

- DOC-05 G01–G10 retain their §14 statuses; DOC-05 residual O-01–O-12, Scope O01–O10, SoD A01–A12 and REC-06 retain their existing statuses.
- DOC-06 AC-06-01–12 and TRC-OPEN-01–15 retain their existing statuses and closure criteria.
- DOC-09 remains the controlling consolidated register for AUTH-OPEN-01–27 and related dependency statuses.
- This derived crosswalk does not create primary locators, approvals, stable permission keys, module assignments, scope rules, field allowlists, test results, or technical enforcement evidence.
- Dependencies closed: **0**. FIX decisions changed: **0**. No item is promoted to PASS, APPROVED, IMPLEMENTED, EXECUTED, or VERIFIED.

**Result:** traceability navigation improved for the explicitly compared DOC-05 and REC-06 subjects; overall authorization/traceability acceptance remains OPEN / PARTIAL. DOC-05 remains DRAFT / RECONSTRUCTED WORKING MASTER / NOT CANONICAL / NOT FINAL.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; no SQL/DDL/DML, schema/migration, RLS/Auth, backend/API, source-code, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 21. Append-only DOC-05 bounded audit — metadata and publication-locator reconciliation (19 November 2026)

### 21.1 Audit identity and scope

- Owning document: DOC-05 — Authorization Master.
- Current main path: docs/05-authorization/AUTHORIZATION_MASTER.md.
- Audit basis: current DOC-05 §§1–20; active Master Checklist v2.0 §§34.4–34.7 and §41; DOC-01 Product Blueprint; DOC-02 Category & Workflow Master; DOC-03 System Architecture; DOC-06 Requirements & Traceability §§12–13.1; DOC-09 AUTH-OPEN register; DOC-10 Conflict & Version Register; and the authorization CVS crosswalk correction.
- Mode: bounded read-only audit followed by append-only clarification. No primary authorization decision or technical implementation evidence was created.

### 21.2 DOC05-AUD-F01 — Version header versus current working revision

**Observation:** The document header at the beginning of DOC-05 still states Version 0.1.0. DOC-05 §18 (publication closeout) identifies Version 0.1.1 as the working revision and explicitly says the previously published v0.1.0 metadata is retained as historical publication metadata.

**Disposition:** The header value is the historical initial-publication metadata, not the current working-revision identifier. The current working revision remains **0.1.1**, as recorded in §18. The top-of-file v0.1.0 field is not silently rewritten; this addendum makes the distinction explicit. Future document-control work may update the header only through a separately reviewed, append-only-compatible change.

### 21.3 DOC05-AUD-F02 — “Proposed GitHub path” header label

**Observation:** The header calls docs/05-authorization/AUTHORIZATION_MASTER.md the “Proposed GitHub path”, while §18 records PR #14 as merged and verified at that exact path, and §19 confirms that the path is the current GitHub working reference.

**Disposition:** The word “Proposed” is historical drafting metadata from the pre-publication snapshot. The path itself is the active DOC-05 working-reference path on main. This clarification does not promote DOC-05 to canonical/final status.

### 21.4 DOC05-AUD-F03 — PR #14 blob SHA label is historical, not current

**Observation:** DOC-05 §18 labels 01b07610c069adc17d53959e1b3f5aeb99d05a60 as the “Current main blob SHA”. Subsequent append-only DOC-05 §§19–20 changed the file after the PR #14 publication checkpoint. The current pre-addendum main blob read during this audit was 391d873c1b82ff717e7b2cde5237d87377ebe927.

**Disposition:** The SHA in §18 is retained as the blob identifier recorded at the PR #14 publication checkpoint; it is not the current blob SHA. The pre-addendum SHA above is an audit-time locator only and will change when a later append-only amendment is merged. No historical SHA or publication record is replaced.

### 21.5 DOC05-AUD-F04 — Checkpoint-date scope

**Observation:** The header checkpoint date is 17 November 2026, while append-only publication and traceability updates in §§18–20 are dated 17–18 November 2026.

**Disposition:** The header date identifies the original working-master checkpoint, not the latest append-only revision date. The latest recorded addendum before this audit is §20 (18 November 2026); this audit is recorded as §21 (19 November 2026). Historical dates are preserved.

### 21.6 Authorization design and dependency disposition

The bounded cross-check found no evidence-supported reason to change the substantive authorization design or source-native dependency status:

- O-01–O-12 remain FIX only at their approved conceptual platform-authorization scope; residual parameters remain OPEN.
- CR-01–CR-10 and Q-01–Q-06 remain FIX only at their approved conceptual cross-category scope.
- The 12 Business standard-role baseline and separation of Owner/platform roles remain unchanged.
- Candidate action taxonomy, module/category mappings, scope matrix, D0–D4 field mapping and SoD/approval matrix remain PROPOSED/CANDIDATE or OPEN as recorded.
- DOC-05 G01–G10, Scope O01–O10, SoD A01–A12 and REC-06 retain their existing statuses.
- DOC-09 AUTH-OPEN-01–27 and DOC-06 TRC-OPEN-01–15 / REC-06 AC-06-01–12 retain their source-native statuses and closure criteria.
- Negative acceptance scenarios remain designed candidates; no test execution or PASS is inferred.
- Stable permission keys/grants, scope resolver, field allowlists, RLS/API/server enforcement, runtime evidence and Production readiness remain OPEN / PARTIAL / NOT VERIFIED as applicable.

Dependencies newly closed: **0**. FIX decisions changed: **0**. Authorization design promoted to canonical/final: **NO**. Implementation or database authorization: **NOT GRANTED**.

### 21.7 Audit disposition and next routing

- DOC-05 bounded read-only audit: **COMPLETE — METADATA/PUBLICATION-LOCATOR CLARIFICATIONS RECORDED; NO SUBSTANTIVE AUTHORIZATION-DESIGN CORRECTION IDENTIFIED**.
- DOC05-AUD-F01–F04: clarified append-only; historical header, publication and locator records retained.
- DOC-05 remains DRAFT / RECONSTRUCTED AUTHORIZATION WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.
- Next work package: continue the DOC-05–DOC-06 authorization/requirements audit sequence under Master Checklist v2.0 §34.4, with DOC-06 bounded audit and no repetition of completed REC-06 crosswalk work in DOC-05 §20.

Controls remain unchanged: READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 blanket GitHub/archive migration NOT AUTHORIZED; Stage 6 implementation NOT AUTHORIZED. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized by this addendum.

## 22. Append-only authorization decision and role-boundary baseline — 19 November 2026

This section adopts DOC-06 §21.6–21.10 as the controlling logical authorization model. It defines policy structure; it does not approve concrete grants, role allowlists, technical enforcement or implementation.

### 22.1 Authorization tuple and decision order

Evaluate: Principal + Business + Module + Resource + Action + Scope + Conditions + Data class + Purpose + SoD/approval. A role name is not a permission. A category/module entitlement is not a permission. UI visibility is not enforcement. The exact permission key follows `<module_id>.<resource>.<action>`; actions are explicit and non-inheriting. No wildcard grant is permitted for sensitive domains or high-impact actions.

Every request must fail closed unless all required checks pass: authenticated active principal; active membership and business context; category/module entitlement; exact permission key; target resource tenant match; scope S0–S5; resource lifecycle preconditions; field classification and purpose; contextual conditions; SoD/independent approval; and auditable execution by the owning domain. Indeterminate context is DENY.

### 22.2 Principal and role namespaces

Keep Platform Super Admin separate from Business roles. Business roles/functions currently named in project governance (Manager, Mitra/Pekerja, Mitra Fisik, Pelanggan) are role/function families, not universal grants. Their eligibility and operational duties must be mapped per category, module, resource, action and scope. A Manager has no implied cross-business, platform, finance, safeguarding, credential, approval or override authority. Mitra/Pekerja and Mitra Fisik require explicit assignment and task/resource scope. Pelanggan access is limited to own verified identity and explicit booking/order/payment or relationship resources. Platform Super Admin access is restricted to platform administration and does not imply routine tenant business-data access.

### 22.3 Permission catalogue expansion format

For every workflow action, the catalogue must specify: workflow ID; module/domain ID; resource; exact action key; eligible principal/role function; business membership requirement; scope S0–S5; resource-state conditions; data class and purpose; SoD conflict; independent approver; execution authority; denial reason; audit event. Distinguish request/submit, review, approve/reject, execute/post, cancel/reverse/refund, publish and export. Absence of an explicit row means DENY.

### 22.4 Scope and relationship rules

S0 Platform; S1 Business; S2 Site; S3 Location; S4 Assignment; S5 Self/relationship. Scope is conjunctive with the permission key and data policy. S5 requires a verified relationship, not a user-supplied identifier alone. S4 requires a current assignment. A broader role or scope cannot bypass field classification, purpose or SoD. Cross-tenant access is denied by default.

### 22.5 SoD and approval paths

Apply DOC-06 §21.9 risk families. Separate initiator, reviewer/approver and executor for sensitive finance, procurement, inventory, education outcome/certificate, hotel safety/rate override and privileged-access changes. No numeric thresholds are inferred. Until a threshold is explicitly defined and approved, sensitive financial and safety exceptions require dual control. The requester cannot approve their own privileged access. Emergency access is time-bound, reason-coded, least-privilege and independently reviewed; it cannot suppress audit evidence.

### 22.6 Negative acceptance design

At minimum, documentation acceptance must cover: cross-business resource ID substitution; wrong site/property; unassigned worker task; unverified guardian/student relationship; customer accessing another customer's booking; Manager attempting platform action; Mitra attempting approval; self-approval of refund/discount; grade author self-finalizing; maintenance self-releasing safety hold; unauthorized export of D3 data; D4 secret retrieval; purpose mismatch; expired membership/session; disabled module; and replayed idempotent command. Each scenario records actor, business, role/function, target, attempted key, scope, expected DENY, reason and required audit evidence. These are specifications, not executed tests.

### 22.7 Status and implementation boundary

DOC-05 remains a design/working master until the full action-by-action catalogue is populated and cross-checked against DOC-02 workflow IDs, DOC-04 object ownership/field classifications, DOC-06 traceability and DOC-07 security evidence. Existing approval statuses and OPEN dependencies are not silently promoted by this baseline. No RLS/Auth, API/backend, database, application, CI or deployment changes are authorized. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.

## 23. Append-only role namespace correction and workflow permission catalogue baseline — 19 November 2026

**Purpose:** resolve the role vocabulary boundary and convert the DOC-06 workflow baseline into a structured permission-catalogue work product. This section supplements, and does not override, the existing FIX decisions O-01–O-12, CR-01–CR-10, Q-01–Q-06 or the 12-role Business baseline.

### 23.1 Role namespace and precedence

DOC-05 §4.2 remains authoritative for the 12 standard Business roles: Manager; Supervisor / Shift Lead; Cashier; Inventory Operator; Production / Service Operator; Receptionist / Front Desk; Finance / Accounting; Employee / HR Operator; Procurement Operator; Warehouse Operator; Delivery / Fulfillment Operator; Maintenance Operator. Owner remains outside the 12-role list. SUPER_ADMIN and PLATFORM_ADMIN remain platform roles, never Business roles.

Project governance also uses the operational labels Mitra/Pekerja, Mitra Fisik and Pelanggan. These labels are not silently added as three new standard Business roles and do not replace the 12-role baseline. For authorization evaluation, they are actor/principal or relationship classifications that must resolve to an authenticated principal plus explicit Business membership, one of the approved Business-role/capability assignments where applicable, and a valid assignment or relationship:
- Mitra/Pekerja: worker/partner principal; operational actions require explicit active work assignment, mapped capability and site/location/task scope.
- Mitra Fisik: physical-service partner principal; operational actions require explicit contract/work assignment, verified task and location scope; no approval, finance or tenant-administration authority is implied.
- Pelanggan: customer principal; access is limited to own verified profile and explicitly linked order/booking/payment/relationship objects under S5; no internal Business operational role is implied.
- Platform Super Admin: platform principal under S0; no routine Business data access is implied.

Where a principal classification does not resolve to an explicit eligible role/function, permission key, scope and condition, the decision is DENY. Do not infer a new role, combine role namespaces or weaken existing role FIX decisions.

### 23.2 Permission catalogue record format

Every action row must contain: workflow ID; primary owner domain; resource; canonical key; action verb; principal/role/function; membership/relationship; module eligibility; scope; resource-state conditions; data class and purpose; SoD conflict; independent approver; execution owner; expected audit evidence; negative test ID; status. No wildcard or implied action. A missing row is DENY.

### 23.3 Education and Hotel workflow permission catalogue — action families

The following rows define the required distinct action families and candidate permission-key patterns. They are DESIGN CATALOGUE entries, not user/role grants. Exact field-level rules and per-actor approvals remain to be completed against the resource inventory.

| Workflow | Owner | Resource/action families to enumerate as separate keys | Primary function mapping (eligibility only; not grant) | Scope baseline | SoD / deny control |
|---|---|---|---|---|---|
| EDU-WF-01 Program & Course Catalog | M13 | program/course/curriculum: list, read, create, update, submit, approve, publish, hold, release | Manager; Production / Service Operator (assigned education work); Supervisor / Shift Lead (assigned oversight) | S1–S4 | Author ≠ approver for publication where configured; no publish by read-only access |
| EDU-WF-02 Intake & Admission | M13 | inquiry/application: read, create, update, submit, review, approve, reject, confirm | Manager; Receptionist / Front Desk; Production / Service Operator (assigned admissions task) | S1–S4; applicant self-service S5 | Applicant relationship cannot expose unrelated student records; submit ≠ approve |
| EDU-WF-03 Student / Participant Record | M04 | party/student relationship: read, create, update, link, unlink, export (separate restricted key) | Manager; Receptionist / Front Desk; Employee / HR Operator only where applicable; Pelanggan/guardian only verified S5 relationship | S1–S5 | D3 fields separately gated; payer/guardian relation ≠ unrestricted record access |
| EDU-WF-04 Enrollment & Class Allocation | M13 | enrollment/class allocation: read, create, update, assign, submit, review, approve, confirm, cancel | Manager; Receptionist / Front Desk; Production / Service Operator (assigned class) | S1–S4; student self-service S5 subset | Capacity and eligibility checks; no self-approval of exceptional allocation |
| EDU-WF-05 Schedule & Resource Planning | M13 | session/schedule: read, create, update, assign, publish, hold, release | Manager; Supervisor / Shift Lead; Production / Service Operator (assigned class); Warehouse Operator only for assigned resource custody | S1–S4 | Resource conflicts and assignment state; release is distinct from edit |
| EDU-WF-06 Instructor / Trainer Management | M17 | worker/credential reference/assignment: read, create, update, assign, verify, suspend | Manager; Employee / HR Operator; Production / Service Operator (own profile/assigned teaching) | S1–S4; own profile S5 | Credential verification is separate from profile editing; D3/D4 evidence restricted |
| EDU-WF-07 Class Delivery & Attendance | M13 | class/session/attendance: read, record, submit correction, review, approve correction, finalize | Production / Service Operator (assigned class); Supervisor / Shift Lead; Manager | S2–S4; learner S5 subset | Attendance author cannot approve own correction where separation required |
| EDU-WF-08 Learning Material & Asset | M06 | stock/material issue/return: read, reserve, issue, receive, return, adjust, inspect | Inventory Operator; Warehouse Operator; Production / Service Operator (assigned session) | S2–S4 | Custody and ledger posting separated; asset ownership remains M11 where applicable |
| EDU-WF-09 Assessment & Examination | M13 | assessment/submission/grade: read, create, record, review, moderate, approve, finalize, publish, appeal | Production / Service Operator (assigned assessor); Supervisor / Shift Lead; Manager | S2–S4; learner S5 subset | Author ≠ moderator/finalizer for protected result workflow |
| EDU-WF-10 Fee, Invoice & Payment | M16 | fee/invoice/payment/refund: read, create, submit, approve, capture, reverse, refund, write_off, reconcile | Finance / Accounting; Cashier (capture only); Manager (approval only where explicitly assigned) | S1–S4; payer S5 limited | Requester ≠ approver ≠ executor for sensitive adjustment; no invented thresholds |
| EDU-WF-11 Guardian / Sponsor / Corporate Account | M04 | relationship/consent/billing link: read, create, update, verify, revoke, export | Manager; Receptionist / Front Desk; Finance / Accounting for billing subset; Pelanggan/guardian S5 verified | S1–S5 | Verified relationship and consent required; finance subset does not expose education record |
| EDU-WF-12 Completion / Graduation / Certificate | M13 | completion/certificate: read, verify, submit, approve, issue, revoke, reissue | Production / Service Operator (prepare); Supervisor / Shift Lead (review); Manager/authorized issuer (approval/issue) | S1–S4; recipient S5 verify subset | Preparer ≠ independent verifier/issuer for controlled certificate |
| EDU-WF-13 Complaint / Safeguarding / Incident | M18 | case/evidence: create, read, assign, escalate, investigate, review, close, export (restricted) | Manager/authorized case lead; assigned Production / Service Operator; no general role access to restricted case | S1–S4 | D3 restricted; need-to-know; subject of case cannot approve closure; export separately gated |
| EDU-WF-14 Reporting / Audit / Retention | M18 | report/audit/retention: read, generate, export, hold, dispose, review | Manager; Finance / Accounting (financial subset); Employee / HR Operator (HR subset); platform audit roles per separate platform policy | S1–S4 | Export and disposal are distinct high-risk keys; legal hold blocks disposal |
| HTL-WF-01 Property / Building / Unit Master | M12 | property/room/unit: read, create, update, assign, deactivate | Manager; Receptionist / Front Desk; Maintenance Operator (maintenance subset) | S1–S3 | Cross-property access denied without explicit scope |
| HTL-WF-02 Room Type / Rate Plan / Restrictions | M02 | room type/rate/restriction: read, create, update, submit, approve, publish, override | Manager; Receptionist / Front Desk (read/quote); Finance / Accounting (financial review) | S1–S3 | Rate author ≠ exceptional override approver; publish distinct from edit |
| HTL-WF-03 Availability / Reservation | M05 | availability/hold/reservation: read, search, hold, create, update, confirm, release, expire | Receptionist / Front Desk; Manager; Pelanggan S5 own booking | S2–S4; customer S5 | Idempotent hold/confirm; no access to unrelated guest details |
| HTL-WF-04 Booking Lifecycle | M05 | booking: read, create, update, submit, approve exception, confirm, cancel, no_show | Receptionist / Front Desk; Manager; Pelanggan S5 own booking | S2–S4; customer S5 | Cancellation fee/refund remains M16; booking change cannot mutate payment silently |
| HTL-WF-05 Guest Profile / Identity | M04 | guest/identity/consent: read, create, update, verify, export (restricted) | Receptionist / Front Desk; Manager; Pelanggan S5 own profile | S2–S5 | D3 identity fields minimum necessary; relationship-bound read |
| HTL-WF-06 Pre-arrival / Check-in | M12 | arrival/check-in/room assignment/key: read, register, assign, check_in, hold, release | Receptionist / Front Desk; Manager; Maintenance Operator safety status only | S2–S4 | Identity/compliance checks; room assignment requires availability/readiness |
| HTL-WF-07 Stay / In-house Operations | M12 | stay/room move/extension/service request: read, update, assign, extend, move, close | Receptionist / Front Desk; Production / Service Operator (assigned service); Manager | S2–S4; guest S5 subset | Stay lifecycle and payment/folio remain separate M16 authority |
| HTL-WF-08 Housekeeping / Room Readiness | M12 | room task/readiness: read, assign, start, complete, inspect, mark_ready, hold | Production / Service Operator (assigned room task); Supervisor / Shift Lead; Maintenance Operator defect task | S2–S4 | Housekeeping task does not expose folio; ready state cannot override safety hold |
| HTL-WF-09 Maintenance / Out-of-order | M20 | defect/work/safety_hold: create, assign, inspect, repair, request_release, approve_release, return_to_service | Maintenance Operator; Supervisor / Shift Lead; Manager/independent safety approver | S2–S4 | Maintenance actor cannot approve own safety release |
| HTL-WF-10 POS / Guest Charges / Folio | M16 | folio/charge/order: read, create, post, adjust, submit, approve, reverse | Cashier (capture/charge under scope); Finance / Accounting; Receptionist / Front Desk (view/charge request subset) | S2–S4 | M03 owns onsite order; M16 owns posting; adjustment approval separated |
| HTL-WF-11 Checkout / Invoice / Payment | M16 | checkout/invoice/payment/refund/settlement: read, issue, capture, submit, approve, refund, reconcile, close | Receptionist / Front Desk (checkout initiation); Cashier (capture); Finance / Accounting; Manager only explicit approval | S2–S4; payer S5 subset | Initiate ≠ capture ≠ refund approval ≠ settlement close |
| HTL-WF-12 Group / Corporate / Agency Booking | M05 | group block/booking/relationship: read, create, update, submit, approve, allocate, cancel | Receptionist / Front Desk; Manager; Pelanggan/corporate contact S5 linked subset | S1–S3 | Corporate relationship does not grant broad guest identity access |
| HTL-WF-13 Guest Service / Complaint | M12 | service request/complaint/compensation request: create, read, assign, resolve, escalate, submit_compensation | Production / Service Operator; Receptionist / Front Desk; Manager | S2–S4; guest S5 own case | Compensation/refund execution remains M16; restricted incident data remains M18 |
| HTL-WF-14 Staff Shift / Cash Control | M17 | shift/roster/handover: read, create, assign, handover, review; cash variance keys owned by M16 | Supervisor / Shift Lead; Employee / HR Operator; Cashier; Finance / Accounting | S2–S4 | Shift handover ≠ cash variance approval or settlement |
| HTL-WF-15 Reporting / Audit / Data Retention | M18 | audit/report/retention: read, generate, export, hold, dispose, review | Manager; Finance / Accounting (subset); Employee / HR Operator (subset) | S1–S4 | Restricted export; legal hold blocks disposal; source facts remain domain-owned |
| HTL-WF-16 Channel / External Integration | M21 | connector/config/sync/webhook: read, configure, rotate_secret_ref, run_sync, reconcile, disable | Manager (request/config only where assigned); authorized integration operator; platform admin under separate S0 policy | S1–S3 | D4 secrets never displayed; sync idempotency and audit; no platform privilege inferred |

### 23.4 Inventory & warehouse action catalogue starter

The following keys are stable candidate vocabulary for the 17 conceptual entities in DOC-04 §28. They are not grants and must be expanded into exact role/scope/condition rows before authorization acceptance:

| Resource family | Candidate permission keys | Core separation |
|---|---|---|
| inventory_batch | `M06.inventory_batch.read`, `M06.inventory_batch.create`, `M06.inventory_batch.update`, `M06.inventory_batch.hold`, `M06.inventory_batch.release` | Release/hold is not implied by update; expiry/regulated fields need separate classification |
| inventory_movement | `M06.inventory_movement.read`, `M06.inventory_movement.record`, `M06.inventory_movement.reverse` | Posted movement immutable; correction is compensating movement |
| inventory_balance | `M06.inventory_balance.read`, `M06.inventory_balance.reconcile` | Projection read/rebuild does not mutate ledger |
| inventory_batch_balance | `M06.inventory_batch_balance.read`, `M06.inventory_batch_balance.reconcile` | Projection only; batch allocation authority remains explicit |
| inventory_adjustment | `M06.inventory_adjustment.create`, `M06.inventory_adjustment.submit`, `M06.inventory_adjustment.approve`, `M06.inventory_adjustment.post`, `M06.inventory_adjustment.reverse` | Initiator, approver and poster separated for material adjustments |
| inventory_adjustment_item | `M06.inventory_adjustment_item.read`, `M06.inventory_adjustment_item.create`, `M06.inventory_adjustment_item.update` | Line edits stop before posting; posted detail immutable |
| stock_count | `M06.stock_count.create`, `M06.stock_count.assign`, `M06.stock_count.submit`, `M06.stock_count.review`, `M06.stock_count.approve`, `M06.stock_count.finalize` | Counter cannot approve own material variance |
| stock_count_item | `M06.stock_count_item.read`, `M06.stock_count_item.record`, `M06.stock_count_item.recount` | Zero count differs from uncounted; recount retains history |
| stock_transfer | `M07.stock_transfer.create`, `M07.stock_transfer.submit`, `M07.stock_transfer.approve`, `M07.stock_transfer.dispatch`, `M07.stock_transfer.close`, `M07.stock_transfer.cancel` | Source and destination custody; close only after reconciled disposition |
| stock_transfer_item | `M07.stock_transfer_item.read`, `M07.stock_transfer_item.create`, `M07.stock_transfer_item.allocate` | Split shipments and quantity caps must be validated |
| inventory_cost_exception | `M06.inventory_cost_exception.read`, `M06.inventory_cost_exception.create`, `M06.inventory_cost_exception.review`, `M06.inventory_cost_exception.resolve` | Unknown cost remains NULL; resolver cannot rewrite posted movement |
| inventory_reservation | `M06.inventory_reservation.create`, `M06.inventory_reservation.release`, `M06.inventory_reservation.expire`, `M06.inventory_reservation.fulfill` | Reservation reduces available, not on-hand; originating demand domain retains its lifecycle |
| inventory_reservation_item | `M06.inventory_reservation_item.read`, `M06.inventory_reservation_item.allocate`, `M06.inventory_reservation_item.fulfill`, `M06.inventory_reservation_item.release` | Allocation/fulfillment idempotent; no over-consumption |
| inventory_cost_layer | `M06.inventory_cost_layer.read`, `M06.inventory_cost_layer.create`, `M06.inventory_cost_layer.adjust` | FIFO/MWA rules; layer identity distinct from batch identity |
| inventory_cost_layer_consumption | `M06.inventory_cost_layer_consumption.read`, `M06.inventory_cost_layer_consumption.record`, `M06.inventory_cost_layer_consumption.compensate` | Immutable consumption; compensation capped to eligible original quantity |
| stock_transfer_shipment | `M07.stock_transfer_shipment.create`, `M07.stock_transfer_shipment.dispatch`, `M07.stock_transfer_shipment.receive`, `M07.stock_transfer_shipment.return`, `M07.stock_transfer_shipment.resolve_loss` | Dispatch/receipt/return/loss are separate events |
| stock_transfer_shipment_item | `M07.stock_transfer_shipment_item.read`, `M07.stock_transfer_shipment_item.record_receipt`, `M07.stock_transfer_shipment_item.reconcile` | Partial/repeated receipt and item disposition remain auditable |

### 23.5 Role, scope and approval completion rules

The 30 workflow rows in §23.3 provide function eligibility candidates only. Final authorization acceptance requires a row per exact key and actor function with scope S0–S5, business/site/location/assignment relationship, object-state conditions, data class/purpose, SoD conflict, approver and expected audit event. A single broad row for a workflow is insufficient. No numeric thresholds are invented. Missing or ambiguous role/key/scope/condition/approver means DENY.

### 23.6 Status

This section resolves the role-vocabulary ambiguity by preserving the 12 standard Business roles and distinguishing partner/customer principal classes. It records a workflow action catalogue baseline and 17-entity inventory key starter. It does not grant permissions, close G01–G10/Scope O01–O10/SoD A01–A12/AUTH-OPEN items, verify technical enforcement or authorize implementation. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.
