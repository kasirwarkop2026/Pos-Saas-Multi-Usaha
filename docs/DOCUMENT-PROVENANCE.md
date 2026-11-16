# POS SaaS Multi-Usaha — Document Provenance

> **Status:** Provenance guide and source map — PARTIAL  
> **As of:** 15 November 2026

## 1. Purpose

This document explains how project documents are classified, referenced and reconciled. It is not a declaration that a single document is the final canonical authority for every subject.

## 2. Source archive locations

The ChatGPT Library archive is organized into:

| Folder | Source domain |
|---|---|
| `Audit/` | Audit reports, registers, provenance and integrity |
| `REC/` | Reconciliation, coverage and batch reconciliation records |
| `ERD/` | ERD drafts, table audits, lineage, version inventories and decision addenda |
| `Blueprint/` | Product blueprint, Super Admin blueprint, sitemap, wireframe and alignment |
| `Authorization/` | Capability/action taxonomy, permission design, scope, SoD and cross-category matrices |
| `RMD/` | RMD category audits, category decision addenda and crosswalks |
| `Review/` | Manager allowlist and category review records |

The latest folder inventory records 198 files across these seven folders. This is a path/metadata snapshot. It does not prove content completeness, uniqueness, or canonical authority.

## 3. GitHub documentation artifacts

| GitHub path | Role |
|---|---|
| `docs/archive/POS-SAAS-ARCHIVE-SOURCE-INVENTORY.md` | Point-in-time archive metadata/path inventory |
| `docs/archive/POS-SAAS-RECONCILIATION-BASELINE.md` | Append-only reconciliation baseline and unresolved mismatches |
| `docs/MASTER-PROJECT-INDEX.md` | Navigation and project status |
| `docs/MASTER-AUDIT-COVERAGE.md` | Audit workstream coverage |
| `docs/DECISION-REGISTER.md` | Source-mapped decision summary |
| `docs/IMPLEMENTATION-READINESS.md` | Readiness gates and restrictions |
| `docs/DOCUMENT-PROVENANCE.md` | This source-lineage guide |

The two archive files are inventory/reconciliation records, not copies of the complete source documents.

## 4. Important source families

### Blueprint
- `Blueprint_POS_SaaS_Multi_Usaha_v3.0.docx`
- Stage 5.9.1 and 5.9.2 blueprint documents
- `Blueprint_Super_Admin_POS_SaaS_v1.0.docx`
- Category consolidation, sitemap, wireframe and alignment addenda

### ERD and inventory/costing
- `ERD_Master_Working_Draft_POS_SaaS_v0.1_2026-11-15.docx`
- `ERD_Lineage_Register_POS_SaaS_v0.1.docx`
- `ERD_Version_Inventory_Provenance_Audit_v1.0_2026-11-14.docx`
- Stage 5.9.3 working consolidation series, including the v9.6.x addenda
- A10, A11 and A12 decision/provenance records

The ERD Master Working Draft explicitly identifies itself as a working draft, not a final canonical master or proof of implementation. The ERD Version Inventory and Lineage Register identify v9.6.9 as the most complete ERD working reference, not a canonical master. v9.8.8 is RMD-45, an R-03 × R-05 offboarding authorization consistency audit; v9.8.9 is RMD-46, an R-05 permission catalogue/Manager scope decision brief appended to v9.8.8. Neither is a new ERD master. R-05 remains OPEN/REVIEW; all RMD-46 recommendations are PROPOSED/REVIEW and not implementation approval. The security/readiness material remains a working reference, not a physical schema certification.

### Authorization and category work
- Capability/action taxonomy and authorization archive index
- Cross-category role/module/capability matrix and its decision/review addenda
- Scope dimension/object/geographic boundary and SoD materials
- RMD-47 through RMD-69 audits and associated decision addenda
- 13-category Manager allowlist review/finalization material

The cross-category matrix source explicitly marks itself DRAFT / PROPOSED / CANDIDATE and not approved as final.

### Audit and reconciliation
- Audit register and archive inventory records
- Hash duplicate-group audit
- REC-01 through REC-08 reconciliation records and related addenda
- A12 provenance and RMD-13 P0 disposition/acceptance records

## 5. Version and supersession rules

1. Prefer explicit supersession statements over filename order or modified timestamps.
2. Preserve older versions as historical evidence.
3. A newer addendum supersedes only the specific statement or section it explicitly identifies.
4. Example: A12.37.10.1 explicitly supersedes the older MWA cross-location wording and establishes MWA grouping per business + product/variant + inventory location; it does not supersede unrelated decisions.
5. A filename containing FINAL, MASTER, FIX or APPROVED is not sufficient evidence by itself. Inspect the document's stated status and approval basis.
6. If provenance is missing or contradictory, record OPEN / UNVERIFIED rather than guessing.

## 6. Duplicate handling

- Identical filenames are not necessarily identical content.
- Identical hashes establish byte-level identity, not which copy is authoritative or whether provenance can be discarded.
- The historical hash audit recorded identical groups but explicitly retained both copies pending disposition.
- Do not delete, merge, rename or overwrite source archive files as part of GitHub documentation work.
- Any future duplicate disposition requires a separate evidence-based review and explicit authorization.

## 7. Evidence labels

| Label | Meaning |
|---|---|
| AP-01 | Direct user approval evidence, only where explicitly captured |
| AP-02 | Decision documented in a source document; not a claim that direct approval was recovered |
| EV-01 / EV-02 | Documentation/reconciliation evidence only |
| EV-03 | Physical schema evidence |
| EV-04 | Enforcement evidence |
| EV-05 | Executed test evidence |

Do not promote AP-02 to AP-01 or EV-01/EV-02 to EV-03/EV-04/EV-05.

## 8. Known provenance limitations

- Earlier and later archive inventory snapshots have materially different counts and scopes; path-level reconciliation remains open.
- The latest 198-file folder snapshot is not a full content audit.
- The RMD-12 source-mapped decision register is explicitly PARTIAL; individual primary-source and approval gaps remain.
- The RMD-13/A12.40 material records unresolved provenance and traceability acceptance criteria.
- Implementation status remains NOT VERIFIED where only documentation evidence is available.

## 9. REC evidence map (15 November 2026)

| REC | Latest evidence in the REC folder | Status and caveat |
|---|---|---|
| REC-01 | v0.2 approval/provenance addendum | PARTIAL; R56-D01–D12 conceptual approval basis is recovered; no canonical v1.2 variant selected |
| REC-02 | v0.2 addendum and CSV path/hash register | PARTIAL; eight names absent/unresolved; remaining 115 not rehashed |
| REC-03 | v0.1 snapshot reconciliation | PARTIAL; totals 322/328/333 reconciled at aggregate level; raw 328 listing missing |
| REC-04 | v0.4 addendum, v0.3 set-difference and CSV | PARTIAL; 54 names reconstructed; historical 56 discrepancy and three unidentified delta names remain |
| REC-05 | Master Decision & Provenance Index v0.1, O-01–O-12 register, CR/Q addenda | PARTIAL; index is DRAFT and completeness/acceptance remain to be checked |
| REC-06 | REC-06 overlay v0.1 in REC folder; Permission Catalogue v1.0; RMD-66/RMD-68 review and approval addenda; Crosswalk v1.3 | PARTIAL; E-01–E-04 and H-01–H-04 conceptual approvals reconciled; OPEN items retained; M01–M21 remains CANDIDATE; final permission keys/capability/scope/SoD remain OPEN |
| REC-07 | ERD Version Inventory v1.0; ERD Lineage Register v0.1; A12.18–A12.28 and A12.31–A12.36 individual audits | PARTIAL; 38 files inventoried but targeted content review only; individual provenance gaps remain |
| REC-08 | v9.6.4/v9.6.6/v9.6.7 security/readiness reconciliations and Batch 7–9 references | PARTIAL; original Batch 7–9 reports and complete consolidated finding register not located in current archive |

REC-06 overlay v0.1 is an append-only reconciliation artifact, not a final permission catalogue or implementation authorization. This table summarizes evidence found across the current seven-folder archive. Missing dedicated REC closeout files do not prove that no related source exists elsewhere.

## 10. Maintenance

Update this document append-only when source families, explicit supersession, or archive locations materially change. Record date, exact source, scope affected and evidence basis. Do not silently replace historical lineage.

## 11. Later archive inventory addendum — 15 November 2026

The earlier 198-file snapshot in this document is retained as a historical point-in-time record. A later complete recursive listing (three pages consumed; no pagination remaining) is recorded in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md`: 200 files across seven subject folders (Audit 11, REC 19, ERD 71, Blueprint 10, Authorization 17, RMD 61, Review 11). No duplicate exact paths were returned.

The current REC folder path is `/Arsip Proyek POS SaaS/REC/`. Both REC-06 artifacts are verified there: the Permission Catalogue Overlay v0.1 and the separate Education/Hotel Workflow-to-Capability Traceability Matrix v0.1. REC-06 remains PARTIAL; the traceability matrix is a working audit artifact, not a final permission catalogue or implementation approval. REC-05 remains PARTIAL pending full source coverage and acceptance. The later addendum clarifies current path/count metadata without replacing historical source records or asserting content-level review of all 200 files.

## 12. Append-only correction — current archive snapshot status (15 November 2026)

The statement in §2 that the latest folder inventory records 198 files is superseded for current snapshot reporting only. The 198-file count is retained as a historical point-in-time result. The later recursive Library listing documented in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md` records **200 files across seven folders** (Audit 11, REC 19, ERD 71, Blueprint 10, Authorization 17, RMD 61, Review 11). Use the 200-file snapshot as the later verified path/count observation; do not infer deletion or loss from the difference. This remains metadata/path evidence and does not establish that all 200 files have been content-audited, are unique by content, or are canonical.


## 13. Append-only correction — latest snapshot wording and merged baseline PR (15 November 2026)

For current inventory reporting, the 198-file count in §2 and the phrase “latest 198-file folder snapshot” in §8 are historical references only. The later verified snapshot is **200 files across seven folders** (Audit 11, Authorization 17, Blueprint 10, ERD 71, REC 19, Review 11, RMD 61), as detailed in `docs/archive/POS-SAAS-LIBRARY-INVENTORY-ADDENDUM-2026-11-15.md`. Do not infer file loss from the difference. Both 198 and 200 observations remain preserved as point-in-time evidence; neither is a content-completeness or canonicality claim.

The GitHub documentation baseline PR #3 was merged into `main` on 15 November 2026 (merge commit `c3748aa0f6f89d12622cce33ca49ccb813a253f6`). References to PR #3 as OPEN/DRAFT are historical only. This update does not change the status of REC workstreams or approve implementation.

## 14. Append-only governance alignment — active authority and archive snapshot taxonomy (17 November 2026)

DOC-00 `docs/00-governance/MASTER-PROJECT-CONTROL.md` was merged through PR #5 into GitHub `main` (merge commit `bcde694cdf913f1cc1916d8d463cd6c2c57a405c`). For current project control, continuation checklist and stage status, DOC-00 is the control-plane entry point. This provenance document remains authoritative only for source-lineage, archive classification and evidence-handling guidance within its stated scope. Domain documents and primary decision sources retain their own subject authority.

GitHub `main` is the sole active working reference for maintained project documentation after DOC-00 adoption. The ChatGPT Library archive is historical/source evidence used to establish provenance and support migration; it is not the active work-control workspace. This policy does not authorize deletion, relocation, renaming or rewriting of Library source files.

### 14.1 Distinct archive observations — do not conflate

| Observation | Evidence type | Permitted interpretation | Limitation |
|---|---|---|---|
| 198 files / one visible folder (15 Nov, 14:40:50 UTC) | Recursive path/metadata snapshot | Historical point-in-time listing | Superseded for later 15 Nov folder/path reporting by the 200-file snapshot |
| 200 files / seven subject folders (15 Nov, 16:01:55 UTC) | Recursive path/metadata snapshot | Later verified 15 Nov path/count observation | Not a full content audit or canonicality determination |
| 231 entries (16 Nov manifest) | Manifest/integrity baseline | Historical manifest scope and integrity reference | Not interchangeable with a later path listing |
| 249 entries (16 Nov listing) | Later path/listing inventory | Path inventory observation | No re-hash; does not establish content integrity or content review for all entries |

The 198, 200, 231 and 249 observations must not be summed or reconciled by arithmetic. A valid reconciliation requires matching root, inclusion rules, file/folder treatment, snapshot time, pagination completeness and exact path-level set comparison. Until those conditions are evidenced, retain the snapshot relationship as OPEN / PARTIAL. Do not infer deletion, loss, duplication, or content completeness from count differences alone.

### 14.2 Evidence authority and maintenance

- Use DOC-00 for current stage, checklist, guardrails and next action.
- Use this document for source lineage, snapshot distinctions and evidence-label semantics.
- Use the relevant subject master/primary source for domain decisions; this provenance guide does not promote a summary into an approval.
- Keep AP-01/AP-02 and EV-01 through EV-05 distinctions unchanged.
- Any later snapshot must be appended with its timestamp, root, inclusion rules, pagination result, exact manifest/listing identity and known limitations. Never overwrite the historical observations above.
