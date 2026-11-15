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
