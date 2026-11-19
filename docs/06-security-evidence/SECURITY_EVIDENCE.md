<!-- DOC-07 v0.4 publication candidate. Generated from the reviewed DOCX working master. -->
<!-- Status: DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. No implementation authority. -->

# DOC-07 — SECURITY & EVIDENCE MASTER

POS SaaS Multi-Usaha v3.0 | 17 November 2026

Status: DRAFT v0.4 — APPEND-ONLY FINAL QUALITY REVIEW UPDATE; REVIEW REQUIRED; NOT CANONICAL / NOT FINAL

Mode: READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE

Proposed GitHub destination (not approved): docs/06-security-evidence/SECURITY_EVIDENCE.md

Version note: v0.4 preserves the complete v0.3 body and appends Section 24 (ST5-10.11 final quality review, claim-to-source locators, internal E0–E5 taxonomy clarification and snapshot anchors). Earlier versions and historical sources remain preserved.

# 1. Purpose and scope

- Master reference for security baseline, evidence provenance, historical observations, security findings and gaps, remediation/retest evidence, and security/readiness gates.

- Consolidates only source-supported observations. It is not a penetration test, security certification, live Production audit, remediation approval, or proof that current controls are deployed.

- Security principles, implementation state, evidence status, finding status, and release acceptance are separate dimensions.

# 2. Authority and source hierarchy

- Primary controlling evidence: source reports, approved addenda, actual configuration/code/database snapshots, test output and immutable logs, each with exact target, timestamp, version/commit, scope and locator.

- Secondary evidence: embedded audit sections in ERD consolidations v9.6.5–v9.6.9 and v9.8.2; reconciliation summaries and audit registers. Secondary evidence must remain labelled as such.

- REC-08 Evidence Recovery Register v0.2 and REC-05/07/08 Addendum preserve recovery limits and observation IDs. Stage 4.7.8 REC locator audit is an inventory/locator audit, not proof of complete source recovery.

- File inventory, hash manifest, source mapping, and content review are not security approval or runtime evidence.

# 3. Security baseline principles

- Default deny; least privilege; explicit actor, tenant, resource, action, scope, state and purpose validation.

- Tenant isolation must be enforced server-side and at the data-access boundary; client-supplied business_id and hidden UI controls are not authorization.

- Platform administration is distinct from tenant/business roles. A platform route gate does not prove granular tenant/resource/action authorization.

- Sensitive data requires field-level classification, purpose limitation, minimum necessary access, masking/export controls and retention rules.

- Approval and SoD controls require independent actors, defined thresholds and auditable lifecycle events. Credentials and jurisdiction gates apply to regulated workflows.

- Security readiness cannot be inferred from project/database health, deployment readiness, or the existence of a middleware gate.

# 4. Historical security observation register — REC-08

| Observation | Area | Source-supported observation | Status / severity | Boundary |
| --- | --- | --- | --- | --- |
| REC08-OBS-01 | Tenant authorization | Examined historical snapshot did not show tenant authorization helper, tenant schema/migration or tenant RLS. | OPEN — NOT READY on that snapshot; original severity unavailable | Batch 8 original report not recovered; do not invent finding ID/severity. |
| REC08-OBS-02 | Platform admin gate | Middleware checked platform_admins, active status and role; table/middleware/own-row RLS described as partial foundation. | PARTIAL; severity not assigned | Does not prove lifecycle, backend privilege, all-route coverage, audit trail or runtime enforcement. |
| REC08-OBS-03 | Supabase Auth | Security Advisor snapshot reported Leaked Password Protection Disabled. | WARN in reported snapshot; current status UNVERIFIED | Do not change severity based on aggregate CRITICAL/HIGH summary; latest config not checked. |
| REC08-OBS-04 | CI security coverage | Workflow reviewed reportedly ran lint, TypeScript, Next build and npm audit; tenant/RLS/role/platform integration tests were not evident. | GAP OBSERVED; severity not assigned | No CI rerun or current workflow inspection claimed. |
| REC08-OBS-05 | Auth/runtime validation | Brute force, password reset, token revocation, session invalidation, service_role paths, scheduled jobs, external integrations and runtime negative tests were reported not tested. | NOT TESTED; not automatically a confirmed vulnerability | Test limitation, not a finding severity. |
| REC08-OBS-06 | Employee tenant readiness | v9.8.2 snapshot reported membership foundation, employee tables, composite FKs and Employee RLS absent; PD-EMP-06 noted leaked password protection disabled as WARN. | NOT READY / NOT IMPLEMENTED on that snapshot; WARN for PD-EMP-06 | Domain-specific secondary evidence; not a current-state assertion. |

# 5. Evidence recovery disposition

- Standalone Batch 7 Production read-only report: not found/retrieved in current Library scope; REC-02 also records it absent in its audit listing. This does not prove deletion or nonexistence.

- Standalone Batch 8 deep source-code/route/authorization report: not found/retrieved in current Library scope; REC-02 records it absent in its audit listing.

- Standalone Batch 9 Supabase Security/Auth report: not recovered in current search.

- Consolidated Batch 7–9 security finding register: not recovered. Original finding IDs, individual severities, owners, remediation mapping and retest evidence are incomplete.

- Embedded ERD consolidation excerpts and Batch 1–9 reconciliation are secondary evidence only. REC08-OBS-01–06 are reconciliation observation IDs, not original finding IDs.

- REC-08 remains PARTIAL. No REC is closed by the Stage 4.7.8 locator audit.

# 6. Security finding lifecycle and evidence vocabulary

- OBSERVED: source reports an observation; preserve exact snapshot, locator and source wording.

- CONFIRMED: finding confirmed within a defined test scope using reproducible evidence; never infer from aggregate summary.

- OPEN: unresolved or not accepted as remediated. PARTIAL: some evidence/control exists but coverage or lifecycle is incomplete.

- REMEDIATION CLAIMED: source owner asserts a change; this is not closure without artifact/configuration proof.

- REMEDIATED: implementation/configuration evidence is linked to the exact finding and target snapshot.

- RETESTED: a defined test was rerun after remediation with actual output and timestamp.

- CLOSED: only after closure criteria and authorized reviewer acceptance are evidenced. Missing evidence means UNVERIFIED/OPEN, not CLOSED.

# 7. Minimum security evidence record

For each finding/control/test, record all available fields; unknown values remain explicitly unknown:

- evidence_id; finding_id (only if original source provides one); observation_id; control_id; domain; severity_original; status;

- source_filename; source_version; source_locator/page/line; source_authority; primary_or_secondary;

- target_system/project/environment; repository_commit/build_id; snapshot_timestamp; scope and exclusions;

- expected_control/acceptance_criteria; observed_state; reproduction/test_steps; expected_result; actual_result;

- remediation_reference; change_id; deployed/configured_at; retest_id; retest_timestamp; retest_result;

- artifact_uri/hash; reviewer/approver where explicitly assigned; residual_risk; dependency; closure_decision.

# 8. Required evidence domains and current readiness

- Identity and account lifecycle: provisioning, deprovisioning, session invalidation, recovery and credential controls require current evidence.

- Platform administration: route gating, privileged backend operations, grant lifecycle, audit trail and complete route/operation coverage require evidence beyond middleware presence.

- Tenant boundary: membership/ownership validation, business context, composite relationships, RLS and server authorization require approved design plus runtime allow/deny evidence.

- Authorization: stable permission keys, role/action/resource/scope resolution, expiry/revocation, deny precedence and stale-session behavior remain unverified.

- CI and automated tests: lint/build/audit are not substitutes for tenant isolation, RLS, privilege, SoD and sensitive-data integration tests.

- Sensitive data: field inventory, classification, purpose allowlist, masking, export, retention and jurisdiction controls remain incomplete.

- Regulated and category controls: Pharmacy credentials/jurisdiction; Education E-04; Hotel H-04; and Lainnya safe-mode remain open/not ready as applicable.

- Operational resilience: backup/restore, incident response, monitoring, secret handling, service_role paths, jobs and external integrations need scoped evidence before acceptance.

# 9. Remediation and retest protocol

- Preserve original finding ID, source wording, severity and snapshot. If original IDs are unavailable, keep REC08-OBS identifiers separate and do not fabricate a mapping.

- Define remediation scope and acceptance criteria per finding; record exact code/configuration/schema/CI artifact and target environment when authorized.

- Retest the same control and attack/negative path after remediation. Record actual output, timestamp, build/commit, environment and evidence artifact.

- Verify regression and adjacent tenant/role/resource boundaries; link test results to the finding and the requirement/traceability chain in DOC-06.

- Only the authorized review process may accept residual risk or close a finding. This document does not authorize remediation or live verification.

# 10. Security gates and release acceptance

- Gate S0 — Evidence provenance: exact source, target, snapshot, version and locator identified; primary/secondary distinction explicit.

- Gate S1 — Identity and privileged access: lifecycle, least privilege, privileged route and backend operation coverage evidenced.

- Gate S2 — Tenant isolation: server authorization, tenant data boundary, RLS and cross-tenant negative tests evidenced.

- Gate S3 — Authorization and SoD: action/permission/scope, approval, independent approver, expiry/revocation and negative tests evidenced.

- Gate S4 — Sensitive and regulated data: field/purpose, masking/export/retention and credential/jurisdiction controls evidenced.

- Gate S5 — CI and runtime validation: required security/integration tests executed on a named build/environment with retained artifacts.

- Gate S6 — Remediation/retest: all blocking findings have evidence-backed remediation and accepted retest or an explicitly authorized disposition.

- Gate S7 — Final acceptance: independent review, residual risks, target environment and scope recorded. No gate is passed merely because a document exists.

# 11. Current gate disposition

- REC-08: PARTIAL — original Batch 7/8/9 reports, consolidated finding register and retest evidence remain unrecovered.

- Historical examined snapshot: tenant/security readiness NOT READY. This is not a statement about current live Production.

- Leaked Password Protection Disabled: WARN in a reported historical Auth snapshot; current configuration UNVERIFIED.

- No penetration test, security certification, full remediation, or retest completion is established.

- Project/database ACTIVE_HEALTHY is not security readiness. Deployment READY is not security acceptance.

# 12. Open dependencies and closure criteria

- SEC-OPEN-01 / REC-OPEN-12: recover Batch 7/8/9 original reports and consolidated finding register, or retain UNRECOVERED.

- SEC-OPEN-02 / REC-OPEN-13: no proof of remediation/retest for historical tenant/RLS/server authorization gaps; requires separately authorized current audit, artifacts and retest.

- SEC-OPEN-03 / REC-OPEN-14: current Leaked Password Protection configuration unknown; requires authorized current configuration verification and remediation evidence if applicable.

- SEC-OPEN-04 / REC-OPEN-15: no penetration test/certification/complete remediation/retest established; requires valid scoped independent evidence.

- SEC-OPEN-05: privileged platform route/backend lifecycle and audit coverage not fully evidenced.

- SEC-OPEN-06: CI security coverage and runtime negative tests not evidenced.

- SEC-OPEN-07: sensitive data, purpose, retention and export controls need field-level traceability.

- SEC-OPEN-08: Pharmacy credential/compliance, Education E-04, Hotel H-04 and Lainnya fail-closed controls require source-backed acceptance and tests.

# 13. Relationship to other master documents

- DOC-00 governs source authority, provenance, snapshot and status semantics.

- DOC-04 holds ERD/data dictionary and tenant-data architecture boundaries.

- DOC-05 holds authorization architecture, role/permission/scope/SoD design boundaries.

- DOC-06 holds requirements, test catalogue and end-to-end traceability.

- DOC-08 records only source-backed FIX decisions; DOC-09 carries open dependencies; DOC-10 handles conflict/supersession; DOC-11 holds roadmap and release gates; DOC-12 indexes archive sources.

- Do not duplicate decision authority: this document records security interpretation and evidence status, not new product/architecture FIX decisions.

# 14. Governance and readiness status

- READ-ONLY • APPEND-ONLY. Historical files and earlier DOC-07 v0.1 template are preserved.

- Stage 4.7.8 remains PARTIAL — GATE NOT PASSED. Stage 4.8 remains IN PROGRESS.

- Stage 4.9 NOT STARTED; Stage 5 GitHub Migration NOT AUTHORIZED; Stage 6 Implementation NOT AUTHORIZED.

- DB_PUSH_BLOCKED: ACTIVE. No SQL/DDL/DML, migrations, schema, RLS, Auth, API/backend, source code, GitHub, PR, CI, Vercel, deployment or Production changes.

- No Supabase Preview/Staging use.

# 15. Source lineage

- POS_SAAS_REC08_EVIDENCE_RECOVERY_REGISTER_v0.2_2026-11-15.md.

- POS_SAAS_ADDENDUM_AUDIT_REC05_REC07_REC08_v0.1_2026-11-15.md.

- POS_SAAS_AUDIT_2_6_REC_v0.1_2026-11-16.md.

- POS_SAAS_STAGE4_7_5_REC_SOURCE_MAPPING_v0.1_2026-11-16.md.

- POS_SAAS_STAGE4_7_8_REC_01_08_LOCATOR_AUDIT_v0.1_2026-11-16.md.

- POS_SAAS_STAGE4_7_8_BIDIRECTIONAL_TRACEABILITY_LOCATOR_AUDIT_v0.1_2026-11-16.md.

- 04_AUDIT_INTEGRITAS_231_FILE_POS_SAAS_v1.0_2026-11-16.md.

- Embedded historical security/readiness sections in ERD consolidations v9.6.5–v9.6.9 and v9.8.2 as referenced by REC-08.

Provenance limitation: this is a source-aligned consolidation from retrieved Library records and historical audit outputs. It does not claim page-by-page re-audit of every source or current live-system verification.

# 16. ST5-10.06 — Reconciliation with Available Source Evidence

Disposition: COMPLETE WITH OPEN SOURCE DEPENDENCIES. This section records the reconciliation performed against REC-08 v0.2, the REC-05/07/08 addendum, the Batch 1–9 reconciliation addendum, the Stage 4.7.8 locator audit, and embedded historical audit sections in ERD v9.6.5–v9.6.9 and v9.8.2.

The standalone Batch 7 and Batch 8 reports remain UNRECOVERED in the current Library retrieval and were recorded absent from the REC-02 audit listing. The standalone Batch 9 report and the consolidated Batch 7–9 finding register were not recovered. Absence from the inspected Library listing does not prove deletion or nonexistence.

RMD-23 finding IDs SEC-01–SEC-05 are preserved as IDs from the embedded RMD-23 audit section. REC08-OBS-01–06 are REC-08 reconciliation observation IDs, not original Batch finding IDs. PD-EMP-06 is an Employee-domain finding, not an original Batch 9 ID.

| RMD-23 ID | Original source wording / finding | Original priority/status | REC-08 relationship | Identity rule |
| --- | --- | --- | --- | --- |
| SEC-01 | Leaked Password Protection disabled | WARN / P1 | REC08-OBS-03; PD-EMP-06 is a related Employee-domain reference | Keep one RMD-23 ID; do not count PD-EMP-06 as a new identical Auth control issue. |
| SEC-02 | No automated security tests for platform-admin gate | GAP / P1 | Related to REC08-OBS-04; scopes are not identical | Preserve RMD-23 ID and REC observation separately. |
| SEC-03 | service_role has broad write privileges on platform_admins | CONTROL REVIEW / P1 | Related to REC08-OBS-02 and OBS-05 | Privilege grant review is not proof of secret exposure. |
| SEC-04 | No visible platform-admin audit trail/lifecycle detail | GAP / P2 | Related to REC08-OBS-02 | Keep lifecycle/auditability gap distinct from route-gate presence. |
| SEC-05 | No tenant schema/RLS/server authorization | BLOCKER / P0 | Direct substantive relation to REC08-OBS-01 | Preserve P0 blocker and historical snapshot boundary. |

Priority labels P0/P1/P2 and severity labels CRITICAL/HIGH/MEDIUM/LOW/WARN are source-specific vocabularies. Do not translate or normalize them without an explicit source mapping.

## 16.1 Crosswalk — original findings and reconciliation observations

| RMD-23 finding | REC-08 observation | Relationship | Disposition |
| --- | --- | --- | --- |
| SEC-01 | OBS-03 | Direct same Auth setting; PD-EMP-06 is separate domain provenance for the same reported setting. | Cross-reference; avoid duplicate counting. |
| SEC-02 | OBS-04 | Related testing-coverage gap; platform-admin test scope is narrower than CI security coverage. | Do not merge IDs. |
| SEC-03 | OBS-02 / OBS-05 | Related privileged path/service_role evidence; exact scope differs. | Do not infer secret leakage. |
| SEC-04 | OBS-02 | Related platform-admin lifecycle and audit coverage gap. | Keep separate source identities. |
| SEC-05 | OBS-01 | Same tenant-readiness subject at historical snapshot level. | Cross-reference; preserve P0 source priority. |
| — | OBS-06 | Employee tenant physical readiness; PD-EMP-06 is a separate WARN reference. | Do not treat as Batch 9 completeness. |

Batch-level statements that critical/high findings remain OPEN (Batch 7/8) and high findings plus unverified Auth configuration remain OPEN (Batch 9) are aggregate statements. They do not supply individual original IDs, per-finding severity, owner, remediation, or retest mapping.

# 17. ST5-10.07 — Evidence Classification

Disposition: COMPLETE. Evidence classes describe the nature and strength of the artifact for the claim being made; they are not a finding severity scale and are not automatically cumulative.

| Class | Name | Meaning | Permitted claim / limitation |
| --- | --- | --- | --- |
| E0 | Inventory / locator | File listing, filename, path, inventory row, historical hash manifest. | Supports existence/location claims within the inspected inventory scope only; not control or runtime evidence. |
| E1 | Secondary statement | Summary, register, reconciliation note, or cross-reference. | Supports what the secondary source records; does not independently prove underlying control state. |
| E2 | Embedded historical audit evidence | Technical audit findings embedded in ERD consolidations or historical domain reports. | Supports the reported observation on the named historical target/snapshot; not current live verification. |
| E3 | Direct primary artifact | Raw source code, configuration, database metadata/output, workflow definition or original report with exact locator. | Supports direct inspection of the artifact and named scope; does not alone prove runtime behavior. |
| E4 | Executed test evidence | Actual test run with target, timestamp, build/commit, steps, expected/actual result and retained output. | Supports only the executed test and its recorded result. |
| E5 | Remediation and retest evidence | Finding-linked change/configuration proof plus an actual post-change retest and authorized acceptance. | Required for remediation/closure claims; a change assertion alone is insufficient. |

Authority nuance: an approved decision addendum can be primary authority for the decision and its exact scope, while still not being technical evidence that the decision was implemented. A raw configuration artifact can be primary technical evidence for a snapshot but does not itself grant decision approval.

| Source family | Authority of record | Control-evidence class | Boundary |
| --- | --- | --- | --- |
| REC-08 v0.2 | Primary for REC-08 recovery disposition and REC08-OBS identifiers | E1 for underlying security controls | Not a substitute for original Batch reports. |
| REC-05/07/08 addendum; Batch 1–9 addendum | Primary for the statements made by each addendum | E1 | Secondary relative to the underlying technical audit. |
| ERD v9.6.5–v9.6.9 / RMD-23 | Source of embedded historical audit statements | E2 | Historical repository/project snapshot only. |
| ERD v9.8.2 / PD-EMP-06 | Source of Employee-domain audit statements | E2 | Domain-specific historical evidence; not a full Batch 9 report. |
| DOC-07 v0.2 | Source of prior working-master content | E1 | Superseded as current working version only by this new v0.3 copy; v0.2 remains preserved. |
| REC locator audit | Primary for its locator/inventory audit result | E0–E1 | Not evidence of control effectiveness or complete source recovery. |

# 18. ST5-10.08 — Finding Lifecycle and Status Reconciliation

Disposition: COMPLETE. Lifecycle, evidence recovery, test execution, severity and readiness are independent status dimensions. The same record may therefore carry multiple labels without contradiction.

| Status | Dimension | Controlled meaning |
| --- | --- | --- |
| OPEN | Finding lifecycle | Unresolved or not accepted as remediated. |
| PARTIAL | Control/evidence coverage | Some evidence or control exists, but scope, coverage or lifecycle is incomplete. |
| UNVERIFIED | Verification state | Current or target-specific condition has not been verified. |
| UNRECOVERED | Artifact recovery | Requested source/artifact has not been recovered in the stated search scope. |
| NOT TESTED | Execution state | Test was not performed or no execution evidence is available; not automatically a vulnerability. |
| NOT PRESENT IN INSPECTED SNAPSHOT | Snapshot observation | Object was not found in the exact inspected snapshot; do not generalize beyond it. |
| NOT READY | Readiness | Acceptance criteria are not met for the named target/snapshot. |
| WARN | Source severity/configuration label | Preserve as reported; not a lifecycle state and not automatically equal to HIGH/CRITICAL. |
| BLOCKED | Governance / gate | Work cannot proceed until its stated prerequisite or authorization is satisfied. |

## 18.1 REC-08 observation lifecycle matrix

| ID | Final reconciled status | Severity | Evidence boundary |
| --- | --- | --- | --- |
| REC08-OBS-01 | OPEN — NOT READY on examined historical snapshot | Original individual severity unavailable; aggregate Batch 8 CRITICAL/HIGH statement is not an individual mapping. | Original Batch 8 report UNRECOVERED; current state UNVERIFIED. |
| REC08-OBS-02 | PARTIAL | Not assigned by source. | Historical platform-admin route gate observed; lifecycle/backend/audit coverage incomplete. |
| REC08-OBS-03 | OPEN / WARN; current configuration UNVERIFIED | WARN in reported Auth snapshot. | Do not change severity from Batch 9 aggregate HIGH statement. |
| REC08-OBS-04 | GAP OBSERVED — OPEN | Not assigned by source. | Historical workflow inspection only; no current workflow review or CI rerun claimed. |
| REC08-OBS-05 | NOT TESTED | Not a finding severity. | Brute force, password reset, token revocation, session invalidation, service_role paths, jobs, integrations and runtime negative tests were reported not tested. |
| REC08-OBS-06 | NOT READY / NOT IMPLEMENTED on examined Employee snapshot | PD-EMP-06 is WARN; other Employee observations have no assigned severity. | Domain-specific historical evidence; current state UNVERIFIED. |

## 18.2 RMD-23 finding lifecycle matrix

| Original ID | Priority / source label | Lifecycle disposition | Boundary |
| --- | --- | --- | --- |
| SEC-01 | WARN / P1 | OPEN / WARN | Current Auth configuration UNVERIFIED. |
| SEC-02 | GAP / P1 | OPEN — evidence gap | Automated platform-admin security test execution not evidenced. |
| SEC-03 | CONTROL REVIEW / P1 | OPEN / UNVERIFIED | Broad grant observed historically; no evidence that secret was leaked. |
| SEC-04 | GAP / P2 | OPEN / PARTIAL | Lifecycle/audit trail detail not visible in inspected snapshot. |
| SEC-05 | BLOCKER / P0 | OPEN — NOT READY | Tenant schema/RLS/server authorization not present in inspected snapshot. |

No REC08 observation or RMD-23 finding is classified REMEDIATED, RETESTED, or CLOSED. No owner, remediation change ID, deployment timestamp, retest run, or reviewer acceptance is assigned where the source does not provide it.

# 19. Evidence Gap Register — ST5-10.07/08 Output

| Gap ID | Required artifact/evidence | Status | Closure condition |
| --- | --- | --- | --- |
| EG-01 | Standalone Batch 7 Production read-only report | UNRECOVERED | Recover exact original file/version or retain the limitation explicitly. |
| EG-02 | Standalone Batch 8 source-code/route/authorization report | UNRECOVERED | Recover exact original file/version or retain the limitation explicitly. |
| EG-03 | Standalone Batch 9 Supabase Security/Auth report | UNRECOVERED | Recover exact original file/version or retain the limitation explicitly. |
| EG-04 | Consolidated Batch 7–9 original finding register | UNRECOVERED | Original IDs, per-finding severity, owner and source locators available. |
| EG-05 | Raw repository/source snapshot and complete inspected locators | NOT AVAILABLE IN CURRENT EVIDENCE PACKAGE | Exact repository, commit, paths and artifact locators retained. |
| EG-06 | Raw Supabase schema, policy, grants and Security Advisor outputs | NOT AVAILABLE IN CURRENT EVIDENCE PACKAGE | Target project, timestamp and complete raw output retained. |
| EG-07 | CI run logs and automated security test artifacts | INCOMPLETE | Named run/build, test suite, target, output and artifact retained. |
| EG-08 | Current Production configuration verification | UNVERIFIED | Separately authorized current-scope evidence collected. |
| EG-09 | Finding-linked remediation/change references | NOT FOUND | Exact change/configuration and deployment target linked to original finding. |
| EG-10 | Post-remediation retest and reviewer acceptance | NOT FOUND | Actual retest output, timestamp, result and authorized acceptance retained. |

EG-01–EG-10 are documentation evidence-gap identifiers created by this reconciliation. They are not original Batch finding IDs, do not imply vulnerability severity, and do not replace SEC-OPEN or REC-OPEN dependencies.

# 20. Cross-Master Interfaces and Authority Boundaries

DOC-07 is the security interpretation and evidence-status master. It does not become the authority for product decisions, physical schema, permission grants, dependency closure, conflict resolution, roadmap authorization or archive canonicalization.

| Master | Security-related interface | Boundary retained in DOC-07 |
| --- | --- | --- |
| DOC-00 | Source authority, provenance, snapshot and status semantics. | Use source hierarchy as a governance framework; do not claim every DOC-00 policy has separate approval where provenance audit remains partial. |
| DOC-04 | Tenant-data architecture, ERD and data dictionary. | Conceptual tenant isolation does not prove physical schema, RLS or implementation. |
| DOC-05 | Identity, platform/tenant separation, role, permission, scope, SoD and server authorization model. | Conceptual FIX is not a technical grant or proof of enforcement; stable keys, scope resolver and implementation remain open. |
| DOC-06 | Requirements, test catalogue and end-to-end traceability. | Test design/catalogue does not mean tests were implemented, executed, passed or retained. |
| DOC-08 | Index of source-backed FIX decisions. | DOC-07 does not create, extend or approve product/architecture FIX decisions. |
| DOC-09 | Open/review/TODO dependencies and closure criteria. | SEC-OPEN/REC-OPEN references are cross-references; DOC-07 does not close DOC-09 items. |
| DOC-10 | Conflict, version lineage, errata and supersession. | No source version or finding is silently canonicalized or superseded. |
| DOC-11 | Roadmap, stage gates and release acceptance. | DOC-07 evidence status does not authorize GitHub migration, implementation, deployment or release. |
| DOC-12 | Archive inventory and document index. | A file listed/indexed is not thereby content-reviewed, primary evidence, or canonical. |

The proposed GitHub destination remains a proposal only: docs/06-security-evidence/SECURITY_EVIDENCE.md. No repository write, PR, CI run or merge is part of this update.

# 21. Updated Current Gate Disposition and Governance Snapshot

| Dimension | Disposition at 17 November 2026 | Boundary |
| --- | --- | --- |
| REC-08 | PARTIAL | Batch 7/8/9 originals, consolidated original finding register and retest evidence remain unrecovered. |
| Historical tenant/security readiness | NOT READY on examined snapshots | Not a statement about current live Production. |
| Leaked Password Protection | WARN in reported historical Auth snapshot; current state UNVERIFIED | No Auth configuration change or current live verification performed. |
| Remediation / retest | NOT ESTABLISHED | No full remediation, penetration test, certification or retest completion claimed. |
| Stage 4.7.8 | PARTIAL — GATE NOT PASSED | Locator and routing audit is not full claim-level two-way traceability. |
| Stage 4.9 | IN PROGRESS — PARTIAL; ACCEPTANCE NOT MET | Per DOC-11 v0.2 checkpoint; do not reuse stale v0.2 Stage 4.9 NOT STARTED wording as current. |
| Stage 5 | Documentation-only workstream; GitHub migration NOT AUTHORIZED | Proposed paths are not permission to publish. |
| Stage 6 | NOT AUTHORIZED | No implementation authorization. |
| DB_PUSH_BLOCKED | ACTIVE | No SQL/DDL/DML, migration, schema, RLS, Auth or Production change. |
| Preview/Staging | NOT USED | Production-first guardrail remains; this document update does not access either. |

This v0.3 snapshot is dated 17 November 2026. Section 14 of v0.2 remains preserved as historical text; where its Stage 4.9 wording differs, this dated Section 21 is the current DOC-07 working-master checkpoint and is aligned to the DOC-11 v0.2 roadmap record.

# 22. Version and Change Record — v0.3

| Version | Date | Change | Disposition |
| --- | --- | --- | --- |
| v0.1 | Historical | Earlier DOC-07 working shell/template. | Preserved; not overwritten. |
| v0.2 | 16 Nov 2026 | Substantive working consolidation, Sections 1–15. | Preserved as historical version. |
| v0.3 | 17 Nov 2026 | Append-only ST5-10.06 source reconciliation; SEC-01–05 crosswalk; E0–E5 evidence classification; lifecycle reconciliation; EG-01–10 gap register; cross-master boundaries; current governance snapshot. | New working version; review required; not canonical/final. |
| v0.4 | 17 Nov 2026 | ST5-10.11 final quality review; source locator matrix; E0–E5 internal taxonomy clarification; historical snapshot anchors; validation limitations and final review disposition. | New append-only working version; review required; not canonical/final. |

Validation boundary: v0.3 is a documentation reconciliation update based on retrieved Library records and historical audit outputs. It does not claim complete page-by-page re-audit of all source files, current live-system verification, implementation, remediation, retest, security certification, or acceptance of residual risk.

Governance: READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE. No SQL/DDL/DML, migrations, schema, RLS, Auth, API/backend, source code, GitHub, PR, CI, Vercel, deployment or Production changes. No Supabase Preview/Staging use. Stage 6 remains NOT AUTHORIZED.

# 23. Source Lineage for v0.3 Reconciliation

| Source family | Exact source filename | Use in v0.3 / boundary |
| --- | --- | --- |
| REC-08 | POS_SAAS_REC08_EVIDENCE_RECOVERY_REGISTER_v0.2_2026-11-15.md | Recovery disposition, REC08-OBS-01–06, source limitations and no-remediation boundary. |
| REC addendum | POS_SAAS_ADDENDUM_AUDIT_REC05_REC07_REC08_v0.1_2026-11-15.md | REC-05/07/08 cross-reference and historical evidence reconciliation. |
| Batch reconciliation | Addendum_Rekonsiliasi_Batch_1-9_dan_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx | Batch 7–9 aggregate status statements; not individual finding mapping. |
| REC locator audit | POS_SAAS_STAGE4_7_8_REC_01_08_LOCATOR_AUDIT_v0.1_2026-11-16.md | REC-08 locator status and source-recovery boundaries. |
| RMD-23 / RMD-24 | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.7_Security_Readiness_Evidence_Reconciliation.docx | RMD-23 SEC-01–SEC-05; RMD-24 security evidence reconciliation; historical repository/Supabase snapshot. |
| RMD-23 predecessor | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.5_Vercel_Environment_Routes_Read_Only_Audit.docx | Embedded historical audit context and matching RMD-23 finding set. |
| Employee domain | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.2_R03_Employee_Physical_Design_Readiness_Read_Only_Audit.docx | PD-EMP-06 WARN and Employee tenant readiness snapshot. |
| DOC-04 | DOC-04_ERD_DATA_DICTIONARY_RECONSTRUCTED_WORKING_MASTER_v0.1_2026-11-17.docx | Tenant-data architecture boundary; conceptual design is not physical implementation evidence. |
| DOC-05 | DOC-05_Authorization_Architecture_Master_v0.1.docx | Authorization model, platform/tenant separation, role/scope/SoD and technical gaps. |
| DOC-06 | DOC-06_Requirements_and_Traceability_Master_v0.2.1_2026-11-17.docx | Test catalogue and traceability status; DESIGNED is not EXECUTED/PASSED/RETESTED. |
| DOC-11 | DOC-11_Project_Roadmap_Release_Gates_v0.2.docx | Current stage/gate checkpoint and master-document status inventory. |
| DOC-12 | DOC-12_Master_Archive_Document_Index_v0.3.docx | Archive/document index and cross-master role; listing is not content approval. |

Source-locator limitation: the source lineage above identifies the retrieved document families and the claims used in this update. It does not imply every page of every source was re-audited, nor that raw repository, Supabase, CI, Production, remediation or retest artifacts were recovered.

# 24. ST5-10.11 — Final Quality Review and Claim-to-Source Locator Addendum

Disposition: COMPLETE WITH LIMITATIONS. This section is an append-only quality-review addendum to v0.3. It does not rewrite historical findings, source wording, severity, or earlier stage records.

## 24.1 Internal evidence-classification clarification

E0–E5 is a project-local working classification scheme created for DOC-07 reconciliation. It is not an external standard, certification framework, severity scale, or universally recognized evidence grade. A class applies only to the specific claim and artifact being assessed; classes are not automatically cumulative. Authority of record and control-evidence class remain separate dimensions.

## 24.2 Claim-to-source locator matrix

| DOC-07 claim / ID | Controlling source and exact locator | Class | Permitted interpretation / limitation |
| --- | --- | --- | --- |
| REC08-OBS-01 | REC-08 v0.2, §4, lines 40–45; ERD v9.6.7, embedded RMD-23 security-readiness section, printed pp. 141–142. | E1 + E2 | Historical tenant schema/migration/RLS and server-authorization observations only; original Batch 8 report and individual severity remain UNRECOVERED/unknown. |
| REC08-OBS-02 | REC-08 v0.2, §4, lines 40–45; ERD v9.6.7, RMD-23 section, printed pp. 141–142. | E1 + E2 | Platform-admin foundation is partial; not proof of all-route, backend, lifecycle or runtime coverage. |
| REC08-OBS-03 | REC-08 v0.2, §4, lines 40–45; ERD v9.6.7, RMD-23 security findings §8, printed p. 135; ERD v9.8.2, §§2, 6, 8, printed pp. 1–3. | E1 + E2 | Historical WARN for Leaked Password Protection Disabled; current Auth configuration remains UNVERIFIED. Batch 9 aggregate HIGH is not an individual severity mapping. |
| REC08-OBS-04 | REC-08 v0.2, §4, lines 40–45; ERD v9.6.7, RMD-23 security findings §8, printed p. 135 (SEC-02). | E1 + E2 | Historical CI/workflow and platform-admin test coverage gap only; no current workflow inspection or CI rerun claimed. |
| REC08-OBS-05 | REC-08 v0.2, §4, lines 40–45; ERD v9.6.7, RMD-23 security readiness/test discussion, printed pp. 141–142. | E1 + E2 | NOT TESTED is an execution limitation, not automatically a confirmed vulnerability. |
| REC08-OBS-06 / PD-EMP-06 | REC-08 v0.2, §4, lines 40–45; ERD v9.8.2, §§1–3, 6 and 8, printed pp. 1–3. | E1 + E2 | Employee-domain NOT READY/NOT IMPLEMENTED is tied to the inspected historical target. PD-EMP-06 is a separate Employee-domain WARN, not a Batch 9 original ID. |
| RMD-23 SEC-01 | ERD v9.6.7, RMD-23 security findings §8, printed p. 135. | E2 | Source label WARN / P1; preserve as source-specific priority/status. |
| RMD-23 SEC-02 | ERD v9.6.7, RMD-23 security findings §8, printed p. 135. | E2 | Source label GAP / P1; platform-admin automated security tests not evidenced. |
| RMD-23 SEC-03 | ERD v9.6.7, RMD-23 security findings §8, printed p. 135. | E2 | Source label CONTROL REVIEW / P1; broad service_role privileges do not prove secret leakage. |
| RMD-23 SEC-04 | ERD v9.6.7, RMD-23 security findings §8, printed p. 135. | E2 | Source label GAP / P2; platform-admin lifecycle/audit trail gap. |
| RMD-23 SEC-05 | ERD v9.6.7, RMD-23 security findings §8, printed p. 135; readiness detail pp. 141–142. | E2 | Source label BLOCKER / P0; tenant readiness blocker on examined historical snapshot. |
| Batch 7/8/9 aggregate status | Batch 1–9 reconciliation addendum v0.1, §4, Batch 7–9 rows, printed p. 2; REC-08 v0.2, §§3 and 6. | E1 | Batch 7 critical/high, Batch 8 CRITICAL/HIGH and Batch 9 HIGH are aggregate statements only; do not synthesize original IDs or per-finding severity. |

## 24.3 Historical snapshot anchors

| Evidence family | Historical target / snapshot anchor | Boundary |
| --- | --- | --- |
| Batch 8 / RMD-23 | Repository kasirwarkop2026/Pos-Saas-Multi-Usaha; branch main; historical HEAD af398a63a1582ce5f0c826cc35c80f5ed53dc9c2 as recorded in the embedded RMD-23 security-readiness material. | Historical snapshot only; not current repository HEAD or current Production state. |
| Employee domain / RMD-39 | Supabase project Pos-SaaS-Multi-Usaha-Project; ref guqgguainpqgiyawsekk; ACTIVE_HEALTHY; PostgreSQL 17.11.0.019; region ap-northeast-1; audit dated 14 Nov 2026. | Project health does not establish security readiness. Catalog observations are limited to the inspected target and queries. |
| DOC-07 v0.3 source lineage | DOC-12 v0.3 remains the contemporaneous source-lineage reference named in §23. ST5-10.10/10.11 separately inspected the available DOC-12 v0.6 draft. | Do not silently rewrite historical lineage version. DOC-12 v0.6 is a later cross-master check, not proof that v0.3 originally relied on v0.6. |

## 24.4 Recovery and evidence gaps retained

- EG-01 through EG-04 remain UNRECOVERED: standalone Batch 7, Batch 8, Batch 9 reports and the original consolidated Batch 7–9 finding register.

- EG-05 through EG-07 remain evidence-package gaps: raw source snapshot, raw Supabase schema/policy/grants/Security Advisor output, and complete CI logs/security-test artifacts were not available in this review package.

- EG-08 remains UNVERIFIED: no current Production configuration verification was performed.

- EG-09 and EG-10 remain NOT FOUND: no finding-linked remediation/change references or post-remediation retest/reviewer acceptance artifacts were established.

- REC08-OBS-01–06, RMD-23 SEC-01–05, PD-EMP-06, SEC-OPEN-01–08, REC-OPEN-12–15 and EG-01–10 remain distinct namespaces. Cross-references do not merge their identities.

## 24.5 Final quality-review checklist

| Quality dimension | Result | Disposition |
| --- | --- | --- |
| Finding identity and namespace separation | PASS | No synthetic Batch finding IDs; observation and source namespaces remain distinct. |
| Severity and priority preservation | PASS | WARN and P0/P1/P2 labels remain source-specific; aggregate Batch severity is not mapped to individual findings. |
| Lifecycle and test-state separation | PASS | OPEN/PARTIAL/UNVERIFIED/UNRECOVERED/NOT TESTED/NOT READY remain distinct. |
| Evidence taxonomy and authority distinction | PASS WITH CLARIFICATION | E0–E5 explicitly labelled as internal DOC-07 classification; authority of record remains separate. |
| Source locators and snapshot anchors | PASS WITH LIMITATIONS | Available locators added; original reports and raw E3/E4/E5 evidence remain unavailable. |
| Cross-master governance | PASS | DOC-04/05/06/08/09/11/12 boundaries retained; no decision or implementation authority created. |
| Current Production/security readiness | NOT VERIFIED | No live audit or current Production verification performed. |
| Publication readiness | NOT AUTHORIZED | No GitHub write, PR, CI, merge, or Stage 5 migration is authorized by this review. |

## 24.6 Final disposition

ST5-10.11 is COMPLETE WITH LIMITATIONS. DOC-07 v0.4 is a reviewed working master, not canonical or final. The source locator and snapshot additions improve traceability for available evidence but do not recover missing Batch reports or establish E3/E4/E5 control evidence. REC-08 remains PARTIAL; historical tenant/security readiness remains NOT READY on examined snapshots; current Production state remains UNVERIFIED. No finding is REMEDIATED, RETESTED or CLOSED, and no severity is reduced.

Governance remains READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE. No SQL/DDL/DML, migration, schema, RLS/Auth, API/backend, source-code, GitHub, PR, CI, Vercel, deployment or Production change. No Supabase Preview/Staging. Stage 5 remains NOT AUTHORIZED; Stage 6 remains NOT AUTHORIZED.

# 25. ST5-10.14 — Limited Publication Authorization and PR Evidence Addendum

Disposition: DOCUMENTATION PUBLICATION AUTHORIZED AND EXECUTED; PR OPEN; MERGE NOT AUTHORIZED. This section is an append-only status correction and publication record added after the DOC-07 v0.4 candidate was committed for review. It does not rewrite or erase historical text in Sections 14, 20, 21 or 24.

## 25.1 Authority and scope

A separate, limited user authorization was received on 17 November 2026 for the following documentation-only actions:
- Create branch `docs/st5-10-12-doc07-security-evidence` from `main`.
- Commit only the reviewed DOC-07 Markdown candidate.
- Open one pull request targeting `main`.
- Allow the PR checks to run and inspect their actual results.
- Do not merge; merge requires separate explicit approval.

This limited authorization is not blanket authorization for the full Stage 5 GitHub migration, implementation, database work, or any Production change. Stage 5 broader migration remains NOT AUTHORIZED; Stage 6 remains NOT AUTHORIZED.

## 25.2 GitHub publication record

| Item | Verified value |
| --- | --- |
| Repository | `kasirwarkop2026/Pos-Saas-Multi-Usaha` |
| Base branch | `main` |
| Publication branch | `docs/st5-10-12-doc07-security-evidence` |
| Initial commit | `8fbd32567988a5a8beca3ecb5f1ffa16623307c5` |
| Pull request | [PR #18](https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha/pull/18) |
| PR title | docs(security): add DOC-07 security evidence working master |
| Target path | `docs/06-security-evidence/SECURITY_EVIDENCE.md` |
| Initial PR scope | One Markdown file; 469 additions; 0 deletions |
| PR state at this addendum | OPEN; not merged |
| Initial branch file blob | `c4dc24c756b0cf2e5eb2e3c5b2c58b213896282b` |

The DOCX archive remains outside the GitHub PR. No application source, SQL/DDL/DML, schema, RLS/Auth, API/backend, CI workflow, Vercel, deployment, or Production file was included in the verified PR file list.

## 25.3 CI evidence

| Workflow | Run | Result | Interpretation |
| --- | --- | --- | --- |
| Documentation CI | #32 / run 44051411869 | COMPLETED — SUCCESS | Internal documentation links, documentation structure, and Markdown lint jobs succeeded. |
| POS SaaS CI | #94 / run 44051411816 | COMPLETED — SUCCESS | Change detection succeeded; application build, ESLint, TypeScript typecheck and dependency security audit jobs were SKIPPED because the change was documentation-only. |

A successful workflow conclusion does not mean skipped application jobs executed or passed. These runs do not constitute security runtime tests, tenant/RLS tests, remediation evidence, or Production verification.

## 25.4 Current publication and authorization state

This dated addendum is the current DOC-07 publication-status checkpoint and takes precedence over older status wording in Sections 14, 20, 21 and 24.5–24.6 only for the publication activity and authorization described here:
- Limited DOC-07 documentation publication: AUTHORIZED and EXECUTED on the named branch/PR.
- PR #18: OPEN; not merged.
- Documentation CI #32: SUCCESS.
- POS SaaS CI #94: workflow SUCCESS with application-specific jobs SKIPPED.
- Full Stage 5 GitHub migration: NOT AUTHORIZED.
- Stage 6 implementation: NOT AUTHORIZED.
- Merge PR #18: NOT AUTHORIZED until separate explicit user approval.
- Current Production security state: UNVERIFIED.
- REC-08: PARTIAL; original Batch 7/8/9 reports and original consolidated finding register remain UNRECOVERED.
- No finding is newly REMEDIATED, RETESTED or CLOSED; no severity is reduced.

For avoidance of doubt, older statements such as “no GitHub/PR/CI activity” or “publication not authorized” remain preserved as historical pre-publication review snapshots, not as the current publication status after this addendum.

## 25.5 Governance controls retained

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE. The limited documentation PR does not authorize SQL/DDL/DML, migrations, schema, RLS, Auth, API/backend, application source changes, Vercel configuration, deployment, or Production changes. No Supabase Preview/Staging was used. Merge remains a separate approval gate.

## 25.6 Version record — v0.5

| Version | Date | Change | Disposition |
| --- | --- | --- | --- |
| v0.5 | 17 Nov 2026 | Append-only ST5-10.14 publication authorization, GitHub PR #18 identity, changed-file scope, actual CI outcomes, and current publication/merge governance checkpoint. | Working-master status update; review required; not canonical/final. |

v0.5 preserves the complete v0.4 body and appends Section 25. It corrects publication-status chronology only. It does not change historical security findings, source identities, severities, evidence classes, remediation/retest status, or readiness conclusions.


# 26. ST5-10 — Append-only post-merge publication closeout (17 November 2026)

**Current publication checkpoint:** DOC-07 PR #18 is CLOSED / MERGED. This section supersedes the pre-merge publication-status statements in §25.2 and §25.4 only for the final PR, merge, and CI outcome. All historical pre-merge snapshots remain preserved.

## 26.1 Final GitHub publication record

| Item | Verified record |
|---|---|
| Repository | `kasirwarkop2026/Pos-Saas-Multi-Usaha` |
| PR | [#18](https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha/pull/18) |
| Final PR state | CLOSED / MERGED |
| Final PR head | `812524ddc0e5657b66f44133c088e5d7c1ba01af` |
| Merge commit | `7b49438447a761c1afb2b8f9eb5cc88b8fcf0d86` |
| Target path | `docs/06-security-evidence/SECURITY_EVIDENCE.md` |
| Changed files | 1 Markdown file |
| Final additions / deletions | 538 / 0 |
| Current main blob SHA | `1cccd2c0c5d0a4f6e043de6faed0ab7f861fb41d` |

## 26.2 Final CI evidence and interpretation

| Workflow | Run | Final result | Interpretation |
|---|---|---|---|
| Documentation CI | #33 | SUCCESS | Documentation checks completed successfully. |
| POS SaaS CI | #95 | SUCCESS | Workflow completed successfully; application-specific jobs were SKIPPED for this documentation-only change. |

A successful workflow conclusion must not be represented as successful execution of skipped jobs. These workflow results do not establish application build/typecheck/security-audit execution, security runtime tests, RLS/tenant enforcement, remediation, retesting, or Production verification.

## 26.3 Current document and evidence disposition

**Current document disposition:** Version v0.6 working revision (v0.5 remains the historical version record at the preceding publication checkpoint); DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.

The merge records publication only. REC-08 remains PARTIAL. Original Batch 7, Batch 8, Batch 9 reports and the original consolidated finding register remain UNRECOVERED where not available. SEC-OPEN-01–08, REC-OPEN-12–15, and EG-01–10 remain open as previously recorded. No finding is newly REMEDIATED, RETESTED, or CLOSED; no severity is reduced. Current Production security state remains UNVERIFIED.

## 26.4 Governance boundary

PR #18 was a limited documentation publication package. It does not authorize blanket Stage 5 GitHub migration, Stage 6 implementation, SQL/DDL/DML, schema/migrations, RLS/Auth, triggers, API/backend, application source, CI workflow changes, Vercel/deployment, or Production changes. No Supabase Preview/Staging was used. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 remains NOT AUTHORIZED.

This section updates publication chronology only. It does not change historical security findings, source identities, severities, evidence classes, remediation/retest status, or readiness conclusions.


# 27. ST5-11 — DOC-07 ↔ DOC-06 Security-to-Traceability Crosswalk (18 November 2026)

**Disposition: DOCUMENTATION AUDIT COMPLETE — CROSSWALK PARTIAL WITH EXPLICIT LIMITATIONS.** This append-only section records the main-branch consistency review between DOC-07 and DOC-06. It does not change original finding identities, statuses, severities, approval scope, or technical readiness.

## 27.1 Audit basis and conclusion

Reviewed current main versions of:
- docs/06-security-evidence/SECURITY_EVIDENCE.md (DOC-07, §§1–26).
- docs/05-requirements-traceability/MASTER_TRACEABILITY.md (DOC-06, §§1–14 and its traceability gap register).
- docs/07-decision-registers/MASTER_OPEN_REGISTER.md for existing AUTH/REC/XDOM dependency identities and boundaries.
- docs/00-governance/MASTER-CHECKLIST-v2.0.md for active audit order and governance.

Result: no material contradiction was identified in the conceptual security baseline, tenant/server authorization boundary, SoD/approval principles, data-purpose controls, or test-state vocabulary. Both masters distinguish conceptual design from technical implementation and distinguish DESIGNED from IMPLEMENTED, EXECUTED, PASSED, EVIDENCED, and RETESTED. This consistency result is not proof of complete claim-level traceability.

## 27.2 Security dependency to DOC-06 traceability crosswalk

Relationship labels:
- **DIRECT** — the DOC-06 gap explicitly covers the same evidence/control subject.
- **RELATED** — useful adjacent traceability, but scope is not identical and must not be treated as a one-to-one mapping.
- **NO DIRECT COUNTERPART** — the reviewed DOC-06 register does not establish a matching security-specific gap.

| DOC-07 dependency | DOC-06 relationship | Relationship | Boundary / disposition |
|---|---|---|---|
| SEC-OPEN-01 — original Batch 7/8/9 reports and consolidated finding register | TRC-OPEN-15 | DIRECT | Both retain REC provenance/security evidence recovery limitations. Missing originals remain UNRECOVERED; no finding IDs or severity may be synthesized. |
| SEC-OPEN-02 — historical tenant/RLS/server-authorization remediation and retest proof | TRC-OPEN-07; TRC-OPEN-08 | DIRECT / RELATED | TRC-OPEN-07 covers server/API/RLS linkage; TRC-OPEN-08 covers executed test evidence. Neither proves remediation or retest has occurred. |
| SEC-OPEN-03 — current Leaked Password Protection configuration | AUTH-OPEN-27; TRC-OPEN-07 | RELATED | DOC-06 records broad authorization enforcement gaps, not a direct current Auth configuration verification requirement. Current configuration remains UNVERIFIED. |
| SEC-OPEN-04 — independent penetration test/certification and complete remediation/retest evidence | TRC-OPEN-08; TRC-OPEN-15 | RELATED | Test evidence and provenance are adjacent; DOC-06 does not itself establish a penetration-test/certification requirement or result. |
| SEC-OPEN-05 — privileged platform route/backend lifecycle and audit coverage | TRC-OPEN-07; TRC-OPEN-06 | RELATED | Server authorization and approval/SoD are related dimensions; lifecycle/audit coverage is not a one-to-one match to either gap. |
| SEC-OPEN-06 — CI security coverage and runtime negative tests | AUTH-OPEN-10; TRC-OPEN-08 | DIRECT | Negative-test traceability and test execution evidence are explicitly in scope. Test design does not establish execution or PASS. |
| SEC-OPEN-07 — sensitive-data purpose, retention, masking and export controls | AUTH-OPEN-08; TRC-OPEN-05 | DIRECT | Field-level data/purpose traceability is the direct shared subject. No field allowlist or technical enforcement is thereby approved. |
| SEC-OPEN-08 — Pharmacy, Education, Hotel and Lainnya controls | TRC-OPEN-09; TRC-OPEN-11; TRC-OPEN-12 | DIRECT / RELATED | Education/Hotel, Lainnya safe-mode, and Pharmacy credential/regulatory gaps are represented. Category-specific security acceptance and tests remain open. |

## 27.3 Evidence-gap register crosswalk

| DOC-07 evidence gap | DOC-06 relationship | Relationship | Boundary / disposition |
|---|---|---|---|
| EG-01–EG-04 — original Batch reports and consolidated finding register | TRC-OPEN-15 | DIRECT | REC provenance gap; all four source artifacts remain UNRECOVERED. |
| EG-05 — raw repository/source snapshot and complete inspected locators | TRC-OPEN-07; TRC-OPEN-15 | RELATED | Technical source and provenance support are adjacent; no current source snapshot is asserted. |
| EG-06 — raw Supabase schema, policy, grants and Security Advisor outputs | TRC-OPEN-07; TRC-OPEN-15 | RELATED | Server/RLS linkage and provenance are adjacent; no database or Supabase inspection was performed in this audit. |
| EG-07 — CI logs and automated security-test artifacts | TRC-OPEN-08 | DIRECT | Execution evidence is the shared subject; historical workflow success is not substituted for security-test execution. |
| EG-08 — current Production configuration verification | TRC-OPEN-07; TRC-OPEN-08 | RELATED | DOC-06 implementation/test evidence gaps are adjacent; no current Production verification was performed or authorized. |
| EG-09–EG-10 — finding-linked remediation and post-remediation retest/acceptance | TRC-OPEN-08; TRC-OPEN-15 | RELATED | Test evidence and provenance are relevant, but DOC-06 does not independently establish remediation or closure. |

## 27.4 DOC-06 gaps without a direct DOC-07 security counterpart

The following DOC-06 gaps remain valid but are not forced into a DOC-07 security mapping because their primary scope is broader product/domain traceability or physical inventory/costing:
- TRC-OPEN-01 — Workflow → M01–M21.
- TRC-OPEN-02 — capability/action and stable permission keys.
- TRC-OPEN-03 — role eligibility → module/capability.
- TRC-OPEN-04 — scope per action/resource.
- TRC-OPEN-06 — SoD/approval/threshold/approver (only adjacent to SEC-OPEN-05; not a direct equivalent).
- TRC-OPEN-10 — Parfum RF/FM crosswalk.
- TRC-OPEN-13 — inventory movement/costing.
- TRC-OPEN-14 — ownership and Manager authority.

This is a scope distinction for this DOC-07 crosswalk, not a statement that these DOC-06 gaps are resolved or unrelated to security in every possible context.

## 27.5 Status and authority preservation

- DOC-07 SEC-OPEN-01–08, REC-OPEN-12–15, and EG-01–10 retain their existing source-native statuses.
- DOC-06 TRC-OPEN-01–15 retain their existing statuses and closure criteria.
- DOC-09 remains the controlling register for AUTH/REC/XDOM dependency status; this crosswalk does not close or normalize them.
- No REC08 observation, RMD-23 finding, EG gap, SEC-OPEN dependency, or TRC-OPEN dependency is merged into another namespace.
- No finding is newly REMEDIATED, RETESTED, or CLOSED. No severity or priority is reduced.
- No FIX decision is changed. No source locator, approval, implementation, runtime test, CI security result, or Production state is invented.

## 27.6 Audit disposition and governance

**DOC-07 ↔ DOC-06 consistency audit:** COMPLETE — PASS WITH OPEN TRACEABILITY DEPENDENCIES.  
**Crosswalk completeness:** PARTIAL — direct, related, and unmatched scopes are explicitly distinguished.  
**Dependencies closed:** 0. **FIX decisions changed:** 0.

The crosswalk is a documentation aid only. It does not authorize database/schema/RLS/Auth/API/backend/source-code/CI-workflow/Vercel/deployment/Production changes, nor does it establish implementation readiness. DB_PUSH_BLOCKED: ACTIVE; no Supabase Preview/Staging; Stage 5 blanket migration remains NOT AUTHORIZED; Stage 6 implementation remains NOT AUTHORIZED.



# 28. Append-only DOC-07 bounded audit — revision, publication path and snapshot-locator reconciliation (19 November 2026)

## 28.1 Audit identity, scope and method

- Work package: DOC-07 — Security & Evidence Master bounded read-only audit under Master Checklist v2.0 §34.4 item 5.
- Owning file: `docs/06-security-evidence/SECURITY_EVIDENCE.md`, current-main blob before this addendum: `9b6cd2e7a9115794b9cb9009ab04e32aaa31ce84`.
- Reviewed: DOC-07 §§1–27, including evidence classification and claim-to-source locators (§§16–24), publication history (§§25–26), and the DOC-07 ↔ DOC-06 crosswalk (§27).
- Bounded cross-checks: Master Checklist v2.0 §§25–26, §34.4–§34.8 and §45; DOC-05 §§17 and 21; DOC-06 §§12–13 and §18; DOC-09 §§3D, 3F and 3H.
- Method: current-`main` read-only inspection. Historical evidence, publication metadata, conceptual controls, technical implementation, executed tests and Production verification were kept as separate dimensions. Previously completed DOC-07 §27 crosswalk work was not repeated.

## 28.2 Findings and append-only clarifications

### DOC07-AUD-F01 — cover revision metadata is stale and the latest declared revision boundary is incomplete

The cover and opening version note still identify DOC-07 as v0.4 and describe v0.4 as the latest update appending §24. However, §25.6 records v0.5, and §26.3 explicitly identifies v0.6 as the current working revision. Section 27 was appended after §26 but does not add a subsequent version row or explicitly state whether it is included in v0.6.

**Disposition:** retain the cover and earlier version records as historical snapshots. For current navigation, §26.3 is the latest explicit working-revision declaration: v0.6. Section 27 is a later append-only audit addendum; this audit does not infer or assign a v0.7 version. Any future version increment must be explicitly recorded by its own authorized version-control entry.

### DOC07-AUD-F02 — proposed/unapproved GitHub path labels are superseded by verified publication

The cover still labels `docs/06-security-evidence/SECURITY_EVIDENCE.md` as a “Proposed GitHub destination (not approved)”; §20 similarly describes the destination as a proposal. This is superseded by the actual publication record: PR #18 is CLOSED / MERGED (merge commit `7b49438447a761c1afb2b8f9eb5cc88b8fcf0d86`), and PR #47 post-merge verification records this exact path and current-main blob `9b6cd2e7a9115794b9cb9009ab04e32aaa31ce84` (Master Checklist v2.0 §26.1).

**Disposition:** the proposed/unapproved labels are historical drafting metadata only. The exact path is the published DOC-07 working reference on `main`. This clarification does not authorize any broader Stage 5 migration or change DOC-07 acceptance/canonicality.

### DOC07-AUD-F03 — §26.1 publication blob SHA is a dated PR #18 checkpoint, not the current audit-time blob

DOC-07 §26.1 records blob SHA `1cccd2c0c5d0a4f6e043de6faed0ab7f861fb41d` as the “Current main blob SHA” in the 17 November PR #18 publication closeout. The later PR #47 post-merge verification records the DOC-07 main blob as `9b6cd2e7a9115794b9cb9009ab04e32aaa31ce84`, which is also the blob inspected for this audit.

**Disposition:** retain the §26.1 SHA as the PR #18 closeout-time publication snapshot; do not treat it as the current blob locator. The later verified locator in Master Checklist v2.0 §26.1 and this audit's owning-file identity controls current navigation at this checkpoint.

## 28.3 Security, evidence and dependency cross-check disposition

- DOC-07 §24's E0–E5 taxonomy remains an internal project classification, not an external standard. Authority of record remains separate from technical evidence strength.
- Available historical evidence remains bounded to the named source/snapshot and locators. Missing Batch 7/8/9 originals and the original consolidated finding register remain unrecovered; the audit does not invent original finding IDs, severities, owners or retest results.
- DOC-07 SEC-OPEN-01–08, REC-OPEN-12–15 and EG-01–10 retain their existing statuses. DOC-09 §3F remains the controlling REC-OPEN register; REC-OPEN-12 is UNRECOVERED, REC-OPEN-13 NOT VERIFIED, REC-OPEN-14 UNVERIFIED / STALE SNAPSHOT, and REC-OPEN-15 NOT VERIFIED.
- DOC-06 TRC-OPEN-01–15 retain their source-native statuses. DOC-07 §27 already provides the bounded DIRECT / RELATED / NO DIRECT COUNTERPART crosswalk; it is not repeated or expanded by this audit.
- Historical Leaked Password Protection Disabled remains a WARN in the reported historical snapshot; current Auth configuration remains UNVERIFIED. No current Supabase/Auth configuration was inspected.
- No security test execution, remediation, retest, penetration test, certification, RLS/server enforcement, current Production verification or residual-risk acceptance is established. A documentation CI result is not security-test evidence.

## 28.4 Audit disposition and governance

**DOC-07 bounded audit:** COMPLETE — THREE DOCUMENT-CONTROL / PUBLICATION-LOCATOR CLARIFICATIONS RECORDED.  
**Substantive security design changes:** 0. **FIX decisions changed:** 0.  
**Dependencies newly closed:** 0. **Findings newly REMEDIATED / RETESTED / CLOSED:** 0.  
**DOC-07 status:** DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. Latest explicitly declared working revision remains v0.6; no v0.7 is inferred.

This addendum is documentation-control clarification only. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration remains NOT AUTHORIZED; Stage 6 implementation remains NOT AUTHORIZED. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed.

## 29. Append-only security control and evidence baseline — 19 November 2026

This section adopts DOC-06 §21 and DOC-05 §22 as project-authored security design baselines. Controls below are required design/evidence outcomes; they are not proof of implementation, successful tests, compliance certification or production operation.

### 29.1 Security invariants

1. Deny by default; missing, stale or ambiguous authorization context is DENY.
2. Tenant isolation is enforced for every business-owned object and relationship; cross-tenant identifier substitution must fail.
3. Platform and Business principal namespaces remain separate.
4. Permission is exact-action, scope-, condition-, data-class- and purpose-bound; role names and UI state do not grant access.
5. D3/D4 data receives least-privilege access, field minimization, restricted export and enhanced audit; D4 secrets are never exposed as ordinary application data.
6. Domain owners control authoritative writes and lifecycle transitions; projections and event consumers cannot bypass source-owner authorization.
7. Sensitive actions require SoD and independent approval; break-glass is time-limited, reason-coded and independently reviewed.

### 29.2 Threat and abuse-case register baseline

The documentation threat model must include at least: cross-tenant IDOR; cross-site/property access; stale membership or revoked assignment; role confusion between Platform Super Admin and Manager; privilege escalation through wildcard or implied action; unverified guardian/guest relationship; unauthorized D3 export; D4 secret disclosure; purpose laundering; self-approval; replay/duplicate payment or reservation command; event payload overexposure; projection staleness; audit-log tampering/suppression; break-glass abuse; and unsafe release of a maintenance/safety hold. For each case record asset, actor, precondition, attack path, impact, preventive control, detective evidence, owner and residual risk.

### 29.3 Documentation-level negative test evidence format

Each test specification must include stable test ID, linked workflow ID, domain/resource/action key, principal and role/function, business context, target tenant, scope, data class/purpose, precondition, attempted operation, expected decision, expected denial reason, expected audit record and evidence retention reference. Expected-deny cases are required for cross-tenant, cross-site, unassigned task, unverified relationship, privilege escalation, self-approval, sensitive export, secret access, purpose mismatch, stale membership, disabled module, unsafe lifecycle transition and duplicate command replay. No test is marked PASS without an actual executed run and retained result.

### 29.4 Audit evidence contract

For every protected decision, evidence should capture actor/service identity, business context, permission key, target object reference, decision (allow/deny), denial reason, scope, purpose, data class, approval/SoD reference, timestamp, correlation/idempotency reference and source-domain result. Do not copy secret values or unnecessary D3/D4 payloads into logs. Logs require restricted write access, tamper-evident handling, retention policy and controlled review. Export and break-glass actions receive heightened review.

### 29.5 Incident, retention and response linkage

Security events and incidents must identify severity, affected tenant/domain, containment owner, evidence preservation, notification/escalation path, recovery decision and closure authority. Retention and legal hold must be compatible with the data classification and applicable obligations; no universal retention duration is invented here. Evidence disposal must be authorized and auditable. Security reporting is a read model and does not become authority to mutate source business records.

### 29.6 Cross-document closure gate

DOC-07 security acceptance requires alignment with DOC-03 domain/interaction contracts, DOC-04 object ownership and field classification, DOC-05 exact action/scope/SoD matrix and DOC-06 workflow traceability. Threat cases and negative tests must have stable identifiers and complete expected evidence. All entries must distinguish DESIGNED, IMPLEMENTED, EXECUTED, PASS/FAIL and RETESTED. This append-only design section does not close existing OPEN findings, assert test execution or change DOC-07 working revision. No technical or production change is authorized. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.

## 30. Append-only CW-09 stable threat and negative-test traceability register — 19 November 2026

**Status: TEST SPECIFICATIONS ONLY — NOT EXECUTED.** This register assigns stable project-owned identifiers to security abuse cases and expected-deny tests. It links to DOC-06 workflow IDs and DOC-05 action families. It does not claim test code, test runs, PASS, remediation or current Production state.

| Stable ID | Workflow / domain | Threat or negative scenario | Expected decision | Evidence required for a future executed test |
|---|---|---|---|---|
| CW09-SEC-01 | EDU-WF-03 / M04 | Guardian/sponsor or payer attempts to read unrelated student D3 identity/accommodation data | DENY | Principal/relationship, target business/object, attempted key, purpose, decision log, test run artifact |
| CW09-SEC-02 | EDU-WF-07 / M13 | Instructor/assessor attempts to approve own attendance correction | DENY where independent review applies | Actor pair, assignment, correction state, approval decision and audit event |
| CW09-SEC-03 | EDU-WF-09 / M13 | Grade author attempts moderation/finalization/publication without independent authority | DENY | Author/reviewer identities, grade lifecycle, key/scope, result artifact |
| CW09-SEC-04 | EDU-WF-10 / M16 | Cashier or transaction initiator attempts own refund/write-off approval or settlement close | DENY | Initiator/approver/executor identities, amount policy, decision and financial audit trail |
| CW09-SEC-05 | EDU-WF-13 / M18 | General Manager/report user attempts restricted safeguarding case access or export | DENY absent explicit case authority | Case assignment, D3 field access, purpose, export decision and audit evidence |
| CW09-SEC-06 | HTL-WF-05 / M04 | Front Desk/worker accesses guest identity fields outside minimum-necessary booking/stay purpose | DENY | Role/function, guest relationship, field allowlist, purpose and decision record |
| CW09-SEC-07 | HTL-WF-08 / M12 | Assigned housekeeper attempts to read guest folio/payment or unrelated guest details | DENY | Assignment, target field, key, purpose and denied-access evidence |
| CW09-SEC-08 | HTL-WF-09 / M20 | Maintenance operator releases own safety hold or returns room to service without independent approval | DENY | Hold owner, release actor, approver, inspection evidence and lifecycle audit |
| CW09-SEC-09 | HTL-WF-02 / M02 | Rate author attempts own exceptional rate override approval/publication | DENY | Rate change, author/approver, scope, threshold policy and publication event |
| CW09-SEC-10 | HTL-WF-10/11 / M16 | Cashier/Front Desk initiator performs refund, write-off or settlement close outside separate authority | DENY | Transaction lifecycle, role/key, independent approval and financial audit |
| CW09-SEC-11 | HTL-WF-12 / M05 | Corporate/agency relationship attempts to enumerate unrelated guest identity or bookings | DENY | Relationship proof, target tenant, object ownership and denied decision |
| CW09-SEC-12 | HTL-WF-14/15 / M17/M18 | Shift/cash operator exports broad staff/guest/financial reports beyond assignment and purpose | DENY | Export request, fields, purpose, scope, approver and audit event |
| CW09-SEC-13 | HTL-WF-01/07 / M12 | Manager or staff uses one property's assignment to access another property's stay/room | DENY | Actor assignment, property IDs, business context, scope resolver output |
| CW09-SEC-14 | Inventory entities 1–17 / M06/M07 | Inventory or warehouse operator posts material adjustment and approves own variance | DENY absent an explicitly approved low-risk exception | Adjustment/count, actor identities, approval state, ledger event and audit trail |
| CW09-SEC-15 | Stock transfer / M07 | Operator closes transfer while shipment quantities remain unresolved or loss disposition is incomplete | DENY | Transfer/shipment/item state, reconciliation calculation and decision log |
| CW09-SEC-16 | Reservation / M06 | Duplicate/replayed reservation fulfillment causes over-consumption or duplicate movement | DENY duplicate effect; idempotent replay returns prior outcome | Idempotency key, command hash, aggregate version, movement lineage and replay run |
| CW09-SEC-17 | Tenant boundary / all workflows | Authenticated actor substitutes another Business's object ID in read or mutation request | DENY | Actor business, target business, attempted key, resource ID and tenant decision evidence |
| CW09-SEC-18 | Scope boundary / all workflows | Actor uses sibling outlet/property/warehouse assignment to access an unassigned sibling | DENY | Active assignment set, target location, scope decision and audit record |
| CW09-SEC-19 | Privilege boundary / all workflows | Business Manager or partner principal attempts S0 platform administration | DENY | Principal namespace, attempted platform key, target and decision evidence |
| CW09-SEC-20 | Data classification / all workflows | User requests D4 secret value through ordinary read/export endpoint | DENY; return only protected secret reference/metadata where permitted | Field classification, key, purpose, secret-store access record and response capture |
| CW09-SEC-21 | Purpose limitation / EDU-WF-03, HTL-WF-05 | Valid read key used for incompatible purpose or unrelated case | DENY | Declared purpose, object relationship, policy result and audit event |
| CW09-SEC-22 | Membership lifecycle / all workflows | Expired/revoked membership or assignment continues to access resource using stale session | DENY | Membership/assignment state, session timestamp, authorization decision and revocation evidence |
| CW09-SEC-23 | Module entitlement / all workflows | Actor accesses conditional module when category/business entitlement is inactive | DENY | Category, module state, subscription entitlement, key and decision record |
| CW09-SEC-24 | Event boundary / M06/M07/M16/M21 | Duplicate or out-of-order domain event causes duplicate posting or cross-domain unauthorized mutation | DENY invalid transition; idempotent consumer preserves one effect | Event ID/version, consumer state, command authorization, reconciliation and replay output |

### 30.1 Evidence and lifecycle requirements

Each future run must record test ID, test-code revision, build/commit, environment, timestamp, actor/principal, business and target resource, scope, exact permission key, purpose/data class, preconditions, request, expected and actual result, audit/event reference, artifact URI/hash, reviewer and retest linkage. A written expected-deny scenario is DESIGN only. A test is EXECUTED only when an actual run and retained artifact exist; PASS requires the actual result to match the expected result and independent review where required.

### 30.2 Cross-document links

- Workflow IDs and primary/supporting domain ownership: DOC-06 §§21.3–21.4.
- Entity ownership and field-classification inventory requirements: DOC-04 §28.
- Action catalogue and role namespace: DOC-05 §23.
- Security gates and evidence provenance: DOC-07 §§7, 10–12 and §29.

### 30.3 Closure boundary

This register does not close REC-08, SEC-OPEN-01–07, REC-OPEN-12–15, historical tenant/security findings or any implementation/test dependency. No live test, database access, RLS change, API/backend change, CI workflow change, Production verification or penetration test is authorized or claimed. READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 31. Append-only CW-09 exact permission-key and audit-event cross-reference — 19 November 2026

**Status: DESIGN CROSS-REFERENCE — CANDIDATE KEYS, NOT GRANTS; TESTS NOT EXECUTED.** This section tightens the traceability between the stable test IDs in §30 and the permission-key grammar/catalogue in DOC-05 §§22–23. Keys below are candidate exact-action identifiers derived from the documented resource/action families. They are not approved grants or a complete actor allowlist. Before authorization acceptance, each key must receive its own actor/function, membership, module entitlement, scope, state condition, data/purpose, SoD/approver and execution-owner row in DOC-05.

| Test ID | Candidate permission key(s) to exercise | Expected audit evidence/event family |
|---|---|---|
| CW09-SEC-01 | `M04.student_record.read`; `M04.student_record.export` | authorization.denied; relationship_verification.denied; restricted_field_access |
| CW09-SEC-02 | `M13.attendance_correction.approve` | authorization.denied; attendance_correction.review; sod_conflict |
| CW09-SEC-03 | `M13.grade.moderate`; `M13.grade.finalize`; `M13.grade.publish` | authorization.denied; grade_lifecycle.transition_denied; sod_conflict |
| CW09-SEC-04 | `M16.payment.refund`; `M16.payment.write_off`; `M16.settlement.close` | authorization.denied; financial_approval.denied; sod_conflict |
| CW09-SEC-05 | `M18.safeguarding_case.read`; `M18.safeguarding_case.export` | authorization.denied; restricted_case_access; restricted_export.denied |
| CW09-SEC-06 | `M04.guest_identity.read` | authorization.denied; purpose_check.denied; field_minimization |
| CW09-SEC-07 | `M12.housekeeping_task.read`; `M16.guest_folio.read` | authorization.denied; scope_check.denied; cross_domain_access.denied |
| CW09-SEC-08 | `M20.safety_hold.release`; `M20.room.return_to_service` | authorization.denied; safety_hold.release_denied; sod_conflict |
| CW09-SEC-09 | `M02.rate_plan.override`; `M02.rate_plan.approve`; `M02.rate_plan.publish` | authorization.denied; rate_override.denied; sod_conflict |
| CW09-SEC-10 | `M16.folio.adjust`; `M16.payment.refund`; `M16.settlement.close` | authorization.denied; financial_adjustment.denied; sod_conflict |
| CW09-SEC-11 | `M05.group_booking.read`; `M04.guest_identity.read` | authorization.denied; relationship_scope.denied; cross_tenant_enumeration.denied |
| CW09-SEC-12 | `M18.report.export`; `M17.staff_report.export`; `M16.financial_report.export` | authorization.denied; restricted_export.denied; purpose_check.denied |
| CW09-SEC-13 | `M12.property_stay.read`; `M12.room_task.read` | authorization.denied; site_scope.denied; cross_property_access.denied |
| CW09-SEC-14 | `M06.inventory_adjustment.create`; `M06.inventory_adjustment.approve`; `M06.inventory_adjustment.post` | authorization.denied; inventory_adjustment.approval_denied; sod_conflict |
| CW09-SEC-15 | `M07.stock_transfer.close`; `M07.stock_transfer_shipment.reconcile` | authorization.denied; transfer_closure.denied; unresolved_disposition |
| CW09-SEC-16 | `M06.inventory_reservation.fulfill`; `M06.inventory_movement.record` | idempotency.replay_detected; duplicate_effect.prevented; authorization.decision |
| CW09-SEC-17 | Representative exact read/write key for the target resource, including `M06.inventory_balance.read` and `M05.reservation.read` where applicable | tenant_isolation.denied; authorization.denied; target_business_mismatch |
| CW09-SEC-18 | `M12.property_stay.read`; `M06.inventory_balance.read`; `M07.stock_transfer.read` | scope_check.denied; assignment_scope.denied; authorization.denied |
| CW09-SEC-19 | `S0.platform_admin` action namespace (platform policy key to be defined in platform catalogue; no Business key substitutes) | principal_namespace.denied; platform_privilege.denied |
| CW09-SEC-20 | `M21.integration_secret.read`; ordinary report/export key attempting D4 value | secret_access.denied; restricted_data_access.denied |
| CW09-SEC-21 | `M04.student_record.read`; `M04.guest_identity.read` with incompatible purpose | purpose_check.denied; authorization.denied |
| CW09-SEC-22 | Any previously eligible key after membership/assignment revocation, e.g. `M12.housekeeping_task.read` | membership_revocation.enforced; stale_session.denied; authorization.denied |
| CW09-SEC-23 | Conditional-module key while entitlement inactive, e.g. `M06.inventory_balance.read` for an inactive conditional module | module_entitlement.denied; authorization.denied |
| CW09-SEC-24 | `M06.inventory_movement.record`; `M07.stock_transfer_shipment.receive`; `M16.payment.capture`; `M21.integration.run_sync` | event_replay.detected; invalid_transition.denied; idempotency.single_effect |

### 31.1 Key and event semantics

1. Keys in this table are candidate vocabulary for negative-test targeting. A row does not assert that the key has been approved, assigned to a role or implemented.
2. The `S0.platform_admin` entry is a namespace marker only, not a final permission key. DOC-05's separate platform authorization catalogue must define the exact resource/action key before any executable test is authored.
3. Where a key is marked representative, the test harness must substitute the exact key for the actual target resource and preserve the attempted key in the evidence record; it must not treat the representative example as an exhaustive key list.
4. Audit-event labels are required semantic evidence families, not approved physical event names or table/column names. DOC-03/DOC-04 implementation design must later define canonical event schemas and retention.
5. A DENY result must not leak protected field values. Idempotent replay may return the prior authorized outcome while guaranteeing no duplicate side effect; the event record must make that distinction explicit.
6. DOC-05 completion remains OPEN until every candidate key is expanded into the full policy tuple and reviewed against the existing FIX/OPEN registers. DOC-07 test execution remains NOT AUTHORIZED and NOT EXECUTED.

### 31.2 Cross-document acceptance links

- DOC-05 §23.3 supplies Education/Hotel action families; §23.4 supplies inventory/warehouse candidate keys; §23.5 defines the per-key completion rule.
- DOC-06 §§21.3–21.4 supplies workflow ownership; §21.6–21.10 supplies permission, scope, data/purpose and SoD baselines.
- DOC-04 §28 supplies the 17-entity logical owner map; physical field inventory remains a separate specification gate.
- DOC-07 §30 remains the stable test register; this section supplies candidate key and audit-event cross-references only.

**Disposition:** 24/24 stable test IDs now have candidate permission-key and expected audit-event references. Exact policy tuples remain incomplete; tests remain DESIGN / NOT EXECUTED; no dependency is closed. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 32. Append-only CW-09 policy-tuple reconciliation index — 19 November 2026

**Status: DOCUMENTATION CROSS-REFERENCE — TESTS NOT EXECUTED.** This index connects the stable negative-test register (§30) and candidate-key map (§31) to the project-authored policy tuples now recorded in DOC-05 §§24–25 and the logical attribute inventory in DOC-04 §29. It is a traceability aid; it does not create grants or physical audit-event schemas.

| Test ID | Policy tuple / catalogue anchor | Data and scope focus | Expected evidence family |
|---|---|---|---|
| CW09-SEC-01 | DOC-05 §25.2 EDU-WF-03; DOC-05 §24.2 AUTH-HR-04/05 | D3 student/guardian relationship; S5 verified relationship within S1 | relationship_verification.denied; restricted_field_access; authorization.denied |
| CW09-SEC-02 | DOC-05 §25.2 EDU-WF-07 | S4 assigned class/session; author/reviewer separation | attendance_correction.review; sod_conflict; authorization.denied |
| CW09-SEC-03 | DOC-05 §25.2 EDU-WF-09 | S4 assigned assessment; grade author/moderator/finalizer separation | grade_lifecycle.transition_denied; sod_conflict |
| CW09-SEC-04 | DOC-05 §24.2 AUTH-HR-01/02/03; §25.2 EDU-WF-10 | D2 financial; S1–S3; initiator/approver/executor separation | financial_approval.denied; settlement.close_denied; sod_conflict |
| CW09-SEC-05 | DOC-05 §24.2 AUTH-HR-04/05; §25.2 EDU-WF-13 | D3 case content; S1–S4 case assignment and purpose | restricted_case_access; restricted_export.denied |
| CW09-SEC-06 | DOC-05 §25.2 HTL-WF-05 | D2/D3 identity; S2–S5 verified guest relationship and minimum fields | purpose_check.denied; field_minimization |
| CW09-SEC-07 | DOC-05 §25.2 HTL-WF-08; M16 folio remains separate owner | S4 room task cannot imply M16 financial read | cross_domain_access.denied; scope_check.denied |
| CW09-SEC-08 | DOC-05 §24.2 AUTH-HR-06; §25.2 HTL-WF-09 | D2 safety state; S2–S4; independent release approver | safety_hold.release_denied; sod_conflict |
| CW09-SEC-09 | DOC-05 §24.2 AUTH-HR-07; §25.2 HTL-WF-02 | D2 rate plan; S1–S3; rate author cannot approve own override | rate_override.denied; sod_conflict |
| CW09-SEC-10 | DOC-05 §24.2 AUTH-HR-01/02/03; §25.2 HTL-WF-10/11 | D2 folio/payment; capture, refund and settlement are separate | financial_adjustment.denied; sod_conflict |
| CW09-SEC-11 | DOC-05 §25.2 HTL-WF-12 and HTL-WF-05 | S1–S3 corporate booking link does not grant guest identity enumeration | relationship_scope.denied; cross_tenant_enumeration.denied |
| CW09-SEC-12 | DOC-05 §25.2 EDU-WF-14 / HTL-WF-15; §24.2 AUTH-HR-14 | D1–D3 field allowlist; S1–S4; export purpose and approval | restricted_export.denied; purpose_check.denied |
| CW09-SEC-13 | DOC-05 §25.2 HTL-WF-01/07 | S2 property and S3 room; assignment must match target property | site_scope.denied; cross_property_access.denied |
| CW09-SEC-14 | DOC-05 §24.2 AUTH-HR-08/09; §25.3 inventory_adjustment and stock_count | D2 quantity/variance; S2–S4; counter/initiator ≠ approver/poster | inventory_adjustment.approval_denied; sod_conflict |
| CW09-SEC-15 | DOC-05 §24.2 AUTH-HR-10; §25.3 stock_transfer / shipment | D2 custody; unresolved quantity/loss disposition blocks close | transfer_closure.denied; unresolved_disposition |
| CW09-SEC-16 | DOC-05 §25.3 inventory_reservation / reservation_item / movement | D2 quantity; idempotency and single-effect invariant | idempotency.replay_detected; duplicate_effect.prevented |
| CW09-SEC-17 | DOC-05 §25.2 and §25.3 tenant-scoped resource tuples; DOC-04 §29.3 | All business-owned attributes inherit immutable Business context | tenant_isolation.denied; target_business_mismatch |
| CW09-SEC-18 | DOC-05 §25.2 site/location/assignment rules; §25.3 warehouse/location tuples | S2–S4; sibling site/location not included by default | scope_check.denied; assignment_scope.denied |
| CW09-SEC-19 | DOC-05 §24.3 platform namespace; DOC-05 §25.4 | S0 platform namespace is separate from all Business keys | principal_namespace.denied; platform_privilege.denied |
| CW09-SEC-20 | DOC-05 §24.2 AUTH-HR-11; DOC-04 §29.3–29.4 | D4 secret value denied; only opaque reference/rotation metadata | secret_access.denied; restricted_data_access.denied |
| CW09-SEC-21 | DOC-05 §25.1 purpose gate; §25.2 EDU-WF-03/HTL-WF-05 | Valid key with incompatible purpose remains DENY | purpose_check.denied; authorization.denied |
| CW09-SEC-22 | DOC-05 §25.1 active membership/assignment gate | Revoked/expired membership invalidates cached eligibility | membership_revocation.enforced; stale_session.denied |
| CW09-SEC-23 | DOC-05 §25.1 module entitlement gate; §25.2 conditional workflow profiles | Conditional module inactive means exact key cannot be exercised | module_entitlement.denied; authorization.denied |
| CW09-SEC-24 | DOC-05 §25.3 movement/transfer; §25.2 HTL-WF-16 integration; DOC-03 event contract | Duplicated/out-of-order commands/events preserve one authorized effect | event_replay.detected; invalid_transition.denied; idempotency.single_effect |

### 32.1 Cross-document interpretation

1. DOC-05 §24 remains the high-risk tuple authority; §25 supplies ordinary workflow and inventory tuple baselines. If an action appears in both, §24's stricter SoD/approval controls prevail.
2. DOC-04 §29 enumerates conceptual attributes and proposed protection/audience/retention triggers. It does not establish physical fields or runtime enforcement.
3. DOC-06 §21 remains the workflow/domain, scope, data-class and purpose baseline. DOC-03 remains the domain interaction contract.
4. DOC-05 exact permission keys are candidate policy vocabulary only. No role grant, allowlist, RLS policy, API enforcement or platform permission assignment is created.
5. All 24 tests remain DESIGN / NOT EXECUTED. Evidence labels remain semantic families, not physical event names. A future test requires separate authorization and actual retained execution evidence.

**Disposition:** cross-reference coverage 24/24 stable test IDs to the expanded policy design; no test execution or dependency closure is claimed. READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`.


## 33. Append-only reconciliation — platform S0 test-key reference (19 November 2026)

This section reconciles the historical S0 marker in §31 with the exact candidate platform keys adopted in DOC-05 §24.3 and referenced by §32.

- The §31 row for CW09-SEC-19 used S0.platform_admin as a namespace marker because the platform resource/action key had not yet been defined at that checkpoint.
- DOC-05 §24.3 subsequently defines two exact candidate action keys: PLATFORM.access_grant.approve and PLATFORM.access_grant.apply. For CW09-SEC-19, these are the relevant candidate keys when the negative scenario exercises approval/application of a platform access grant. The expected denial is assessed separately for each action and the corresponding actor/approver/executor separation.
- The old S0.platform_admin marker is superseded for this specific test-key reference; it is not a permission key and must not be used as one. S0 remains the platform scope namespace. No PLATFORM.* wildcard or general platform-admin grant is created.
- Other S0 platform resources/actions require their own exact resource/action keys. The two keys above are candidate design vocabulary, not approved grants or implemented permissions.
- DOC-05 §§24–25 now contain the high-risk and workflow/inventory tuple baselines referenced by DOC-07 §32. These baselines do not imply that every actor/key combination has been approved, that technical enforcement exists, or that any test ran.
- M05.reservation.read in §31 is an illustrative resource-specific example only, not a canonical key established by the current DOC-05 catalogue. Before an executable test uses it, the owning M05 resource/action catalogue must define and review the exact key. The M06 inventory-reservation keys remain separate.

**Disposition:** CW09-SEC-19 now has explicit candidate key references for its defined platform access-grant scenario; remaining key/action details are subject to the owner-domain catalogue. All 24 tests remain DESIGN / NOT EXECUTED. No PASS, permission grant, dependency closure or implementation is claimed.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 and Stage 6 remain NOT AUTHORIZED.
