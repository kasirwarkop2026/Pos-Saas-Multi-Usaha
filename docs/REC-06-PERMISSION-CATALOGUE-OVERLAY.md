# REC-06 — Permission Catalogue Overlay: Education & Hotel

**Status: PARTIAL — conceptual source overlay assembled; not final; no implementation approval.**  
**Library artifact:** `/Arsip Proyek POS SaaS/REC/REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md`

## Evidence reconciled

- Education RMD-66: E-01 Manager Allowlist, E-02 12 standard-role mappings, E-03 14 module groups are FIX — conceptual; E-04 explicitly preserves all Section 9 OPEN details.
- Hotel RMD-68: H-01 Manager Allowlist, H-02 12 standard-role mappings, H-03 14 module groups are FIX — conceptual; H-04 explicitly preserves all nine OPEN groups.
- Instructor/Tutor, Examiner/Assessor, Admissions Officer, Housekeeping, Reservation Agent, Night Auditor, Guest Service and Sales/Corporate Account remain work functions mapped to existing standard roles/capabilities or assignment contexts; no new standard roles are created.
- Education candidate M-domain alignment: CORE M04, M05, M13, M17; CONDITIONAL M02, M06, M08, M16, M18, M21.
- Hotel candidate M-domain alignment: CORE M02, M05, M12, M16, M18, M20; CONDITIONAL M03, M04, M06, M07, M08, M17, M19, M21.
- All M01–M21 mappings remain CANDIDATE per Category → Workflow → Module Crosswalk v1.3. They are not approved module grants.

## Guardrails

Eligibility is not permission. CORE/CONDITIONAL is not an access grant. Capability/action, scope, purpose/data classification, approval and SoD remain separate. Server-side authorization remains required. The overlay does not create permission keys, role grants, schema, RLS, API rules or implementation approval.

`DB_PUSH_BLOCKED: ACTIVE`. No database, source-code, CI, deployment or Production changes. Historical sources remain untouched.

## Remaining work

1. Reconcile capability/action taxonomy against Education and Hotel workflows.
2. Resolve source-reconciliation gaps G02/G04 with explicit locators and approvals.
3. Complete scope, data classification, purpose and SoD mapping.
4. Keep REC-06 PARTIAL until the complete cross-category catalogue is accepted and permission definitions are explicitly approved.
