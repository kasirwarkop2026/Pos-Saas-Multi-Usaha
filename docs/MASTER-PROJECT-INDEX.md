# POS SaaS Multi-Usaha v3.0 — Master Project Index

> **Status:** Documentation navigation baseline — 15 November 2026  
> **Purpose:** Entry point for project scope, source documents, audit records, decisions, and readiness.  
> **Authority:** This index is a navigation and status summary. It does not supersede source documents or approve implementation.

## 1. Project identity

- Project: **POS SaaS Multi-Usaha**
- Blueprint baseline: v3.0, with supporting Blueprint v1.0 and Super Admin Blueprint v1.0 retained as historical/design references.
- Repository: [kasirwarkop2026/Pos-Saas-Multi-Usaha](https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha)
- Primary branch: `main`
- Documentation work is tracked through a draft pull request before merge.

## 2. Core product and tenancy principles

- One Owner account is associated with one business.
- A business may operate multiple outlets/branches and warehouses.
- Platform Super Admin is separate from business-level roles.
- Tenant isolation is designed around `business_id`, composite foreign keys, RLS, and server-side authorization. These are architecture requirements, not evidence of deployed enforcement.
- Inventory movement is designed as an immutable ledger; balances are projections.
- Historical documents and decision provenance are retained. A newer document does not silently erase the older record.

## 3. Documentation map

| Area | GitHub location | Purpose |
|---|---|---|
| Project index | `docs/MASTER-PROJECT-INDEX.md` | Entry point and navigation |
| Audit coverage | `docs/MASTER-AUDIT-COVERAGE.md` | Audit scope, evidence limits, unresolved work |
| Decision register | `docs/DECISION-REGISTER.md` | FIX / REVIEW / OPEN / TODO decision map |
| Readiness | `docs/IMPLEMENTATION-READINESS.md` | Gates and implementation blockers |
| Provenance | `docs/DOCUMENT-PROVENANCE.md` | Source lineage and archive handling |
| Archive inventory | `docs/archive/POS-SAAS-ARCHIVE-SOURCE-INVENTORY.md` | Snapshot of visible archive paths |
| Reconciliation baseline | `docs/archive/POS-SAAS-RECONCILIATION-BASELINE.md` | Reconciliation scope and open mismatches |

## 4. Source archive classification

The ChatGPT Library archive is organized into these subject folders:

- `Audit/` — audit reports, registers, provenance and integrity reviews.
- `REC/` — reconciliation and coverage records.
- `ERD/` — ERD working references, table audits, lineage and decision addenda.
- `Blueprint/` — product blueprint, Super Admin blueprint, sitemap and wireframe references.
- `Authorization/` — capability/action taxonomy, role/module/capability matrices, scope and SoD.
- `RMD/` — RMD category audits, decision addenda and cross-category documentation.
- `Review/` — category manager allowlist review records.

The folder arrangement is an archive organization aid. It does not by itself establish that every file is canonical, duplicate-free, fully reviewed, or approved.

## 5. Current work status

- The archive source inventory and reconciliation baseline are recorded in `docs/archive/`.
- The current inventory snapshot records 198 files and seven subject folders under `/Arsip Proyek POS SaaS/`; this is a point-in-time snapshot, not proof that every source document has been read.
- Prior inventory snapshots differ. The mismatch remains open until path-level reconciliation is complete.
- ERD Stage 5.9.3 is a working/consolidation draft, not a final physical schema.
- Cross-category role/module/capability matrix remains DRAFT / PROPOSED / CANDIDATE.
- A12.40 readiness control remains PARTIAL / OPEN in the latest referenced readiness material; A12.41 is NOT STARTED.
- Implementation readiness is **NOT READY** pending evidence and gate closure.

## 6. Status vocabulary

- **FIX** — approved conceptual/business architecture decision at the scope stated by its source. It is not automatic approval of physical schema, security enforcement, code, or deployment.
- **CLOSED** — closed only for the explicitly stated audit/specification scope.
- **REVIEW** — requires further technical review.
- **TODO / OPEN / PARTIAL** — unresolved work remains.
- **NOT VERIFIED** — available evidence does not verify the claim; it is not proof that implementation is absent.
- **NOT STARTED** — the named work has not begun within the recorded scope.

## 7. Change-control guardrails

- Audit-first and read-only by default.
- `DB_PUSH_BLOCKED: ACTIVE`.
- No SQL, DDL, DML, migrations, schema, RLS, triggers, Auth, API, backend, or production data changes under this documentation task.
- No application-code, CI, Vercel, deployment, or Production changes under this documentation task.
- No Supabase Preview/Staging test workflow.
- Preserve FIX decisions and historical documents; do not silently overwrite or delete them.
- One PR at a time. Merge only after review and explicit approval.

## 8. How to continue

1. Read the archive inventory and reconciliation baseline.
2. Review the master audit coverage and decision register.
3. Resolve source/provenance gaps using verifiable evidence; do not infer missing approvals.
4. Reassess all readiness criteria and gates.
5. Obtain explicit authorization before any implementation work.

## 10. Later archive snapshot — 15 November 2026

The 198-file count above is the earlier point-in-time snapshot and remains historical. The later verified recursive Library listing is recorded in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md`: 200 files across seven subject folders. Use that addendum for the later path/count snapshot; do not infer file loss or content completeness from the difference. Both REC-06 artifacts are verified in the current `/Arsip Proyek POS SaaS/REC/` folder. REC-05 and REC-06 remain PARTIAL, not CLOSED.


## 11. Append-only correction — current archive and documentation map (15 November 2026)

The 198-file statement in §5 is a historical snapshot, not the current inventory. The later verified Library snapshot is **200 files across seven folders**: Audit 11, Authorization 17, Blueprint 10, ERD 71, REC 19, Review 11 and RMD 61. Use `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md` for the current path/count observation. This remains metadata evidence, not a full content audit.

The documentation map in §3 is extended by these artifacts:
- `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md` — later verified 200-file / seven-folder Library snapshot and REC status clarification.
- `docs/REC-06-PERMISSION-CATALOGUE-OVERLAY.md` — GitHub-side summary of the REC-06 Education/Hotel conceptual overlay and its OPEN boundaries.

PR #3, “Docs: archive inventory and reconciliation baseline”, was merged into `main` on 15 November 2026. Merge commit: `c3748aa0f6f89d12622cce33ca49ccb813a253f6`. Its former draft/open status is historical. This does not authorize merging any subsequent PR.

## 12. Append-only governance alignment — DOC-00 adoption and archive snapshot distinctions (17 November 2026)

DOC-00, `docs/00-governance/MASTER-PROJECT-CONTROL.md`, was merged into `main` through PR #5 (merge commit `bcde694cdf913f1cc1916d8d463cd6c2c57a405c`). It is now the project-control entry point and continuation checklist. This index remains the navigation/status map for the subject documents listed here; it does not supersede DOC-00 or domain-specific decision sources.

For active project work, use the maintained documentation in GitHub `main`. The ChatGPT Library archive is retained as historical/source evidence for provenance and migration, not as the active work-control location. Do not modify or delete historical Library files as part of this migration.

Archive observations must be distinguished by their evidence type and capture scope:
- 198 files / one visible folder: earlier 15 November path snapshot, retained as historical.
- 200 files / seven subject folders: later 15 November recursive path/metadata snapshot documented in the inventory addendum; not a full content audit.
- 231 entries: 16 November manifest/integrity baseline; preserve as a distinct manifest snapshot and its stated scope.
- 249 entries: later 16 November path/listing inventory; metadata/path evidence only and not a re-hash or proof that all entries are content-audited.

These figures are not interchangeable and must not be added, subtracted, or treated as one continuous count without a path-level crosswalk and matching scope. The 231 manifest and 249 listing are separate evidence products. The 200-file snapshot remains the verified 15 November recursive listing, not the latest count for every subsequent observation.

Current stage and gate status is governed by DOC-00. Historical statuses and PR-state statements elsewhere in this index remain historical unless explicitly updated by an append-only correction. Stage 5 remains documentation-only; Stage 6 is NOT AUTHORIZED and `DB_PUSH_BLOCKED: ACTIVE` remains in force.


## 13. Append-only product blueprint publication checkpoint — 17 November 2026

DOC-01 Product Blueprint Master is prepared on the Stage 5 PR branch at `docs/01-product-blueprint/PRODUCT_BLUEPRINT.md`. It consolidates the product vision, Owner/Business model, tenant and ownership boundaries, platform/business role separation, 13-category taxonomy, product operating principles and source/gap register. It is explicitly a reconstructed working master, not a verbatim archive recovery or implementation approval.

The DOC-01 source/status corrections include: E-04 and H-04 are approved decisions to preserve residual OPEN details (the underlying details remain OPEN); CAT-11 and CAT-12 statuses follow Erratum Category Consolidation v1.1 rather than stale v1.0 labels; CAT-12 remains temporary/fail-closed; regulated CAT-08 workflows remain gated; and cross-category M01–M21 mapping remains DRAFT/CANDIDATE. Exact source gaps and implementation boundaries are recorded in DOC-01.

DOC-01 is a PR-branch draft only until review, CI, explicit merge approval and post-merge verification. For active project work, the GitHub `main` branch remains the only active reference; no PR-branch content is treated as adopted before merge.


## 14. Append-only DOC-02 category/workflow publication checkpoint — 17 November 2026

DOC-02 Category & Workflow Master has been prepared on the Stage 5 branch at `docs/02-business-domains/CATEGORY_WORKFLOW_MASTER.md`, with 13 category reference pages in `docs/02-business-domains/categories/`. It is a reconstructed source-aligned working master, not a replacement for RMD audits, conceptual FIX addenda, approval addenda or errata.

The package keeps three status layers distinct: (1) category/workflow conceptual decisions, (2) Manager/standard-role/module eligibility, and (3) technical authorization/implementation. It corrects the earlier shorthand for E-04 and H-04: each is an approved decision to preserve residual OPEN details. CAT-11 and CAT-12 follow Erratum Category Consolidation v1.1. CAT-12 remains temporary/fail-closed; CAT-08 regulated workflows remain NOT READY until gates are evidenced; CAT-13 keeps Retail/Refill and Formulation/Manufacturing separate. M01–M21 crosswalk v1.3 remains DRAFT/CANDIDATE, not a final authorization map.

Known gaps are explicitly retained: full workflow titles and detailed sequence for several categories, individual RMD claim-level locators, direct RMD-69 v1.1 locator, residual E-04/H-04 details, regulated/compliance gates, exact allowlists/permission keys and technical enforcement. No source detail is invented and no historical Library source is modified.

DOC-02 is a PR-branch draft only until review, CI, explicit merge approval and post-merge verification. For current status, DOC-00 remains the control-plane entry point.


## 15. Append-only DOC-03 architecture publication checkpoint — 17 November 2026

DOC-03 System Architecture Master is prepared on branch `docs/st5-06-doc03-architecture-2026-11-17` at `docs/03-system-architecture/SYSTEM_ARCHITECTURE.md` as a reconstructed, source-aligned working master based on archived DOC-03 v0.8. It consolidates platform/tenant trust boundaries, conceptual application layers, domain source-of-truth boundaries, inventory/costing/transfer, payment/finance/accounting, integration/offline, audit/security/reporting, reliability/DR limitations, decision provenance and open technical dependencies.

Authority and scope are deliberately bounded:
- DOC-03 does not replace product/category decisions in DOC-01/DOC-02, ERD/data dictionary detail in DOC-04, authorization detail in DOC-05, or source-native A10/A11/A12 decisions and approval addenda.
- A10 remains CLOSED — Architecture Baseline; A11 remains FIX only at architecture/business-rule level; A12.17 Alternative 1, A12.30F-01–04, A12.37.10.1, A12.38 and A12.39 retain their recorded scopes.
- MWA remains per Business + Product/Variant + Inventory Location; FIFO remains an alternative; internal transfer carries source cost context and is not a new purchase.
- The historical 17-entity inventory baseline is preserved; `inventory_cost_layer_movements` remains a candidate, not an approved eighteenth entity.
- Batch 05–07 mappings are secondary consolidation sources; XG-01–XG-20 are derived cross-domain audit references, not primary approvals.
- REC-08 standalone Batch 7/8/9 security reports and consolidated finding register remain UNRECOVERED. Current Production security posture and implementation are NOT VERIFIED.
- ARC/ARC-OPEN labels are local editorial identifiers, not source-native decision IDs or approvals.

DOC-03 remains DRAFT / REVIEW REQUIRED and is a PR-branch draft only until review, Documentation CI, explicit user merge approval and post-merge verification. Stage 5 remains documentation-only; `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 remains NOT AUTHORIZED. This index remains a navigation/status summary and does not supersede DOC-00 or domain/source authorities.


## 16. Append-only DOC-03 PR and CI checkpoint — 17 November 2026

DOC-03 publication is under DRAFT PR #10: https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha/pull/10. The PR includes only:
- `docs/03-system-architecture/SYSTEM_ARCHITECTURE.md` — reconstructed DOC-03 working master;
- `docs/00-governance/MASTER-PROJECT-CONTROL.md` — append-only ST5-06 checkpoint and CI result;
- `docs/MASTER-PROJECT-INDEX.md` — append-only DOC-03 publication/CI navigation checkpoint.

Documentation CI run #7 passed all three jobs: Markdown lint, internal documentation links and documentation structure. Application CI run #69 succeeded; the application change detector classified the PR as documentation-only and skipped the four application jobs as designed.

PR #10 remains DRAFT / OPEN / NOT MERGED pending substantive review and explicit user merge approval. The PR branch is not the active `main` authority. No application, database, Supabase, backend, CI workflow, deployment or Production changes are included. `DB_PUSH_BLOCKED: ACTIVE`; Stage 6 remains NOT AUTHORIZED.

## 17. Append-only DOC-04 ERD & data dictionary working-master checkpoint — 17 November 2026

ST5-07.01–ST5-07.09 completed the scoped source and consistency audit for the inventory/costing ERD baseline. The audit covered source authority/provenance, the 17 conceptual entities, A10/A11/A12 decision scopes and supersession, conceptual relationships/cardinality, physical dictionary gaps, reconciliation with DOC-01/DOC-02/DOC-03, source-to-claim traceability and residual gaps.

ST5-07.10 produced DOC-04 v0.1, titled DOC-04 — ERD & Data Dictionary Master, as a reconstructed working master dated 17 November 2026. The document is archived in ChatGPT Library at /Arsip Proyek POS SaaS/Master Documents/ and is NOT CANONICAL / NOT FINAL. It is an evidence-bounded consolidation, not a verbatim recovery or physical schema approval.

DOC-04 retains the 17 conceptual inventory/costing entities. inventory_cost_layer_movements remains a candidate conceptual bridge, not an approved eighteenth entity. A10 remains CLOSED only at architecture-baseline scope; A11 remains FIX at architecture/business-rule scope; A12.17 Alternative 1 remains the active cardinality decision superseding A12.16 only in its stated scope; A12.30F closes four conceptual decisions only; A12.37.10.1 keeps MWA per Business + Product/Variant + Inventory Location with FIFO as alternative; A12.38 conceptual audit is complete while physical dictionary remains OPEN; A12.39 conceptual relationship/constraint specification is complete while physical verification remains OPEN.

The working master explicitly carries forward unresolved items: A12.18–A12.28 OPEN/UNVERIFIED; A12.31E OPEN; A12.36.1 UNVERIFIED/REVIEW; A12.40 PARTIAL/OPEN with D40-203–216 UNRECOVERED; A12.41 NOT STARTED. Physical field definitions, keys, constraints, indexes, RLS/server enforcement, locking, idempotency and executed tests are not approved or verified by DOC-04.

| ST5-07 item | Status at 17 Nov 2026 |
|---|---|
| ST5-07.01–07.09 | COMPLETE — scoped audit accepted; residual gaps remain OPEN |
| ST5-07.10 | COMPLETE — DOC-04 v0.1 created and archived in ChatGPT Library |
| ST5-07.11 | IN PROGRESS — append-only DOC-00 and index checkpoint prepared on documentation branch |
| ST5-07.12–07.15 | NOT STARTED — GitHub DOC-04 publication, one PR, CI, review/explicit merge approval, merge and main verification |

The Library artifact is not yet published in GitHub main. The final GitHub path will be established during ST5-07.12. This index remains a navigation/status summary and does not supersede DOC-00, the A10/A11/A12 source decisions, or DOC-01/DOC-02/DOC-03 in their respective scopes. Stage 5 remains documentation-only; DB_PUSH_BLOCKED: ACTIVE; Stage 6 remains NOT AUTHORIZED.
