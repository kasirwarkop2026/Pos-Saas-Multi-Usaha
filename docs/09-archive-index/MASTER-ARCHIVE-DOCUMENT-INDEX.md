# DOC-12 — Master Archive & Document Index

POS SaaS Multi-Usaha v3.0 | Source artifact: DOC-12 v0.6 DRAFT | 16 November 2026

> Repository-native Markdown transcription of `DOC-12_Master_Archive_Document_Index_v0.6_DRAFT.docx`. Source paragraphs and all 10 tables are retained in their original order. The 231 manifest rows are transcribed from the DOCX and were compared field-by-field with the named source CSV; no hash values were recomputed. This document remains DRAFT / REVIEW REQUIRED.

DOC-12 — MASTER ARCHIVE & DOCUMENT INDEX

POS SaaS Multi-Usaha v3.0 | 16 November 2026

Status: DRAFT v0.2 — MANIFEST-BASED INDEX; CONTENT REVIEW AND LOCATOR VALIDATION REMAIN OPEN

Control: READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE

Proposed GitHub path (not approved): docs/00-governance/DOCUMENT_INDEX.md

Baseline: 03_MANIFEST_SHA256_231_FILE_POS_SAAS_v1.0_2026-11-16.csv (231 records). This DOC-12 v0.2 supersedes no historical source; earlier DOC-12 v0.1/template remains preserved.


## 1. Purpose and index model

- Provide a navigable, provenance-aware index of archive source files and master-document routing. The index records identity and location; it does not certify that every document has been read, audited, approved or superseded.
- DOC-00 governs document-control policy and source authority. DOC-12 is the inventory: file/source IDs, original names, paths, versions, snapshot dates, hashes where available, target master documents and audit status.
- Keep separate fields for metadata/integrity status, content-review status, decision status, and implementation/evidence status. Presence in the archive or manifest is not proof of content review or approval.
- Historical filenames and paths are retained exactly as indexed. No rename, move, deletion, overwrite, duplicate cleanup or canonical selection is authorized by this index.

## 2. Snapshot and integrity reconciliation


| Snapshot / source | Observed result | Interpretation / limitation |
| --- | --- | --- |
| 15 Nov 2026 historical Index/Register | 200 files across seven subfolders; addendum correctly records 2 root files, total 202. | Valid historical snapshot, not current baseline. |
| 16 Nov 2026 SHA-256 manifest | 231 file records; 228 in seven subfolders and 3 root files. | Integrity baseline for its stated snapshot. Manifest itself is not one of its own 231 records. |
| Audit 2.1 verification | All 231 manifest paths found in Library; 0 missing manifest paths; 0 duplicate manifest paths; Library had 233 files including two later audit artifacts. | Path reconciliation. Do not claim all 231 contents were reviewed. |
| Stage 4.7.6 later inventory | 249 observed paths: 231 manifest baseline + 15 post-manifest additions + 3 later Stage 4.7.3–4.7.5 mapping outputs. | Later path inventory only; no rehash. 231 manifest remains historical integrity snapshot. |
| Manifest hash properties | Manifest contains folder, library_path, filename, size_bytes and sha256; 231 rows. | Hashes are copied from the manifest; this DOCX does not independently recompute them. |


## 3. Manifest folder summary


| Folder | Records | Metadata / integrity boundary |
| --- | --- | --- |
| Audit | 24 | Included in 231-file manifest; hash value retained from manifest. |
| Authorization | 17 | Included in 231-file manifest; hash value retained from manifest. |
| Blueprint | 10 | Included in 231-file manifest; hash value retained from manifest. |
| ERD | 84 | Included in 231-file manifest; hash value retained from manifest. |
| REC | 21 | Included in 231-file manifest; hash value retained from manifest. |
| RMD | 61 | Included in 231-file manifest; hash value retained from manifest. |
| ROOT | 3 | Included in 231-file manifest; hash value retained from manifest. |
| Review | 11 | Included in 231-file manifest; hash value retained from manifest. |
| TOTAL | 231 | 231 manifest entries; no inferred content-review or decision approval. |


## 4. Source ID and locator conventions

- Manifest entries are assigned stable local IDs M231-001 through M231-231 in the row order of the source CSV. These IDs are DOC-12 index identifiers only; they do not replace original document IDs.
- Exact `library_path`, filename, folder, size_bytes and SHA-256 are transcribed from the manifest. Blank/missing hash values remain blank and are not reconstructed.
- Post-manifest artifacts use separate IDs ADD-001 onward only where an existing source mapping supplies those IDs. Stage 4.7.6 separately identifies ROOT-001–ROOT-005 and ADD-001–ADD-015.
- Later DOC-00–DOC-12 working files are indexed separately from the 231-file snapshot. Version/status labels below reflect the project handoff and available Library listing; they do not imply all 13 files are fully reviewed or approved.
- Exact page/paragraph/decision locators remain OPEN where Stage 4.7.8 or other audits identify gaps. No synthetic page numbers or section locators are assigned.

## 5. Master-document routing index


| Master ID | Target master | Primary inbound source families / references | Status boundary |
| --- | --- | --- | --- |
| DOC-00 | Document Control & Source of Truth | ROOT-001–005; GOV-AUD-2.1; manifest/integrity; Stage 2.1–2.7; Stage 3.1–3.6; governance/errata. | Policy/authority document; not per-file inventory. |
| DOC-01 | Product Blueprint Master | Blueprint folder; Audit 2.2; product/tenant/role/category decisions; relevant RMD and FIX addenda. | Blueprint v3.0 remains working draft. |
| DOC-02 | Category & Workflow Master | RMD folder; Stage 3.1 Category Decision Register; Audit 2.5/2.7; workflow crosswalk sources. | Conceptual FIX does not mean full technical readiness. |
| DOC-03 | System Architecture Master | Blueprint architecture; ERD architecture; offline/payment/security/integration source families. | Architecture boundaries and open dependencies retained. |
| DOC-04 | ERD & Data Dictionary Master | ERD folder; Audit 2.3; ERD v9.x lineage; A12 sources and 17-table inventory baseline. | No canonical physical ERD; candidate 18th table remains candidate. |
| DOC-05 | Authorization Architecture Master | Authorization folder; Audit 2.4/2.5/2.7; O/CR/Q decisions; RMD and REC-05. | No final permission catalogue or verified server enforcement. |
| DOC-06 | Requirements & Traceability Master | Stage 3.5 traceability register; Audit 2.4/2.7; G01–G10; category/workflow/test references. | End-to-end traceability remains partial/open. |
| DOC-07 | Security & Evidence Master | REC folder; Audit 2.6; REC-01–08; integrity evidence and historical security observations. | Historical evidence is not current Production verification. |
| DOC-08 | Master FIX Decision Register | Stage 3.2 FIX register; primary approval/addenda; Blueprint, ERD/A12, O/CR/Q and RMD decisions. | FIX only within explicit source scope. |
| DOC-09 | Master OPEN/REVIEW/TODO Register | Stage 3.3 register; G10 residual dependencies; A12 and REC open items. | Listing an item does not close it. |
| DOC-10 | Conflict & Supersession Master | Stage 3.4 register; errata; version lineage; RMD-56/A12/ERD discrepancies. | No automatic canonical selection. |
| DOC-11 | Project Roadmap & Release Gates | Stage 3.6 final audit; Master Checklist; Stage 4.7.6 routing; Stage 4.7.8 gate; stage dependencies. | Roadmap does not authorize GitHub or implementation. |
| DOC-12 | Master Archive & Document Index | 231-file manifest; Audit 2.1; Stage 4.7.6 root/additional mapping; current master-doc listing. | Inventory and routing only; content review separate. |


## 6. Current master-document artifacts (separate from manifest baseline)

- Latest working versions reported in Stage 4.8: DOC-00 v0.1; DOC-01 v0.1; DOC-02 v0.1; DOC-03 v0.1; DOC-04 v0.2; DOC-05 v0.1; DOC-06 v0.1; DOC-07 v0.2; DOC-08 v0.2; DOC-09 v0.2; DOC-10 v0.2; DOC-11 v0.2; DOC-12 v0.2 (this document).
- Library listing also contains earlier v0.1/template files for DOC-04–DOC-12 and duplicate-safe names with suffix `(1)`. Those are historical artifacts and must not be deleted or renamed as part of this index.
- Initial DOC-00–DOC-03 Word files were described as metadata containers in earlier handoff; their complete substantive transfer must be verified during Stage 4.9. Chat drafts do not prove full Word-file content.
- DOC-05 upload verification, DOC-08 upload verification and all DOC-11/DOC-12 latest path/version checks should be confirmed in the final audit rather than assumed from a prior response.

## 7. Post-manifest additions and later snapshots


| Reference | Known scope | Index treatment |
| --- | --- | --- |
| ROOT-001–ROOT-005 | Five direct root files enumerated by Stage 4.7.6; ROOT-004 manifest is not one of its own 231 records; ROOT-005 integrity report is post-manifest. | Separate root artifact mapping; retain original paths and dates. |
| ADD-001–ADD-013 | Stage 2.1–2.7 and Stage 3.1–3.6 audit artifacts mapped in Stage 4.7.6. | Use exact IDs/names from Stage 4.7.6 mapping; content/locator verification remains subject to audit. |
| ADD-014–ADD-015 | Stage 4.7.6 mapping itself records 15 total additions (2 root + 13 Audit). | The mapping source enumerates these; do not merge with three later Stage 4.7 mapping outputs. |
| Stage 4.7.3–4.7.5 outputs | Three later mapping outputs: RMD/Review, ERD and REC. | Separate from historical 15 additional artifacts. |
| Current 249-path listing | 231 + 15 + 3 at time of Stage 4.7.6 listing. | Observed inventory snapshot; not a rehashed manifest and not a claim about future current count. |


## 8. Known gaps and status semantics

- 231 manifest entries have metadata and hash values from the manifest; this does not mean each source has CONTENT REVIEWED status.
- Audit 2.1 found the old Register was not a complete 231-row per-file status register. DOC-12 is a manifest-based index; it does not claim to close all per-file content review, decision review or source locator work.
- Stage 4.7.8 remained PARTIAL — GATE NOT PASSED: page/paragraph locators, bidirectional backlinks, primary source recovery and some domain crosswalks remain open.
- Eight REC-02 names absent/unresolved; raw historical REC-03 listings; exact REC-04 outside-coverage list; Batch 7/8/9 standalone security reports and consolidated finding register remain unresolved as documented in DOC-09/DOC-10.
- Manifest snapshot 231 is not replaced by 249 path listing. Newer additions require their own append-only index records and, if integrity assurance is required, a separately authorized new hash manifest.
- Canonical status is controlled by DOC-00/DOC-10 and primary approvals, not by DOC-12 ordering or filename.

## 9. Append-only maintenance protocol

- Add new files as new index rows with a new stable DOC-12 index ID; never reuse or renumber existing IDs.
- Record exact path/name, version, date/snapshot, file size/hash only if observed, source ID, target master, content-review status, decision status, evidence locator and supersession relationship.
- Corrections are new addendum rows that point to the prior entry and state correction reason, scope, approval and date. Preserve old row and source.
- Do not silently update hash values. A new hash verification must state scope, method, timestamp and tool/evidence.
- Before any move/rename or GitHub migration, obtain separate explicit authorization and record old path, new path, mapping, PR and verification evidence.

## 10. Stage 4.8 disposition and next gate

- DOC-12 v0.2 completes the 13-document draft set at the working-document level. It does not establish that all 13 documents are content-complete, mutually consistent, source-locator verified or ready for publication.
- Stage 4.8 checklist reaches 13/13 draft documents. Stage 4.9 Final Audit remains NOT STARTED and requires explicit separate authorization.
- Stage 5 GitHub documentation migration remains NOT AUTHORIZED. Stage 6 implementation remains NOT AUTHORIZED.
- Next eligible action after user approval: Stage 4.9 audit of DOC-00–DOC-12, exact source/page/section/decision locators, backlinks, status/scope, version conflicts, ownership, destination paths and readiness.

## 11. Governance guardrails

- READ-ONLY • APPEND-ONLY. Preserve all original files, duplicates and historical versions.
- No delete, move, rename, overwrite, duplicate cleanup, canonicalization or source edits.
- No SQL/DDL/DML, database/schema/migration/RLS/Auth/API/backend/source-code/GitHub/PR/CI/Vercel/deployment/Production changes.
- No Supabase Preview/Staging. DB_PUSH_BLOCKED: ACTIVE.
- Stage 5 and Stage 6 remain NOT AUTHORIZED.
APPENDIX A — 231-FILE MANIFEST INDEX

Rows M231-001–M231-231 follow the exact row order of the source manifest. Values are transcribed, not independently rehashed. The table is landscape and uses compact text for navigation.


## A1. Exact manifest records


| Index ID | Folder | Original filename | Bytes | SHA-256 (manifest value) | Exact Library path |
| --- | --- | --- | --- | --- | --- |
| M231-001 | ROOT | 00_MASTER_ARCHIVE_INDEX_POS_SAAS_v1.0_2026-11-15.md | 8662 | 5d8788e1f09c0ecae693e33004f1452f0ad059453bc62cb1be1588de5cc7c71c | /Arsip Proyek POS SaaS/00_MASTER_ARCHIVE_INDEX_POS_SAAS_v1.0_2026-11-15.md |
| M231-002 | ROOT | 01_REGISTER_STATUS_DOKUMEN_POS_SAAS_v0.1_2026-11-15.md | 10260 | 0a4bc5f1164567ec90bdde9009fd65d99864fa911ba3112f6b3db15b2e848532 | /Arsip Proyek POS SaaS/01_REGISTER_STATUS_DOKUMEN_POS_SAAS_v0.1_2026-11-15.md |
| M231-003 | ROOT | 02_ADDENDUM_KOREKSI_HITUNGAN_INVENTARIS_POS_SAAS_v0.1_2026-11-15.md | 2083 | 35737ba9eb22d9d2bc0c96443d03721b6868713b8a93d495c219a96a39cd0caa | /Arsip Proyek POS SaaS/02_ADDENDUM_KOREKSI_HITUNGAN_INVENTARIS_POS_SAAS_v0.1_2026-11-15.md |
| M231-004 | Audit | Addendum_Penelusuran_Sumber_Primer_A12.18-A12.28_POS_SaaS_v0.2_2026-11-15.docx | 38836 | 6a93234225d4d86de59509653d0b244e453672988ef96ae252e61d563d9e1f0a | /Arsip Proyek POS SaaS/Audit/Addendum_Penelusuran_Sumber_Primer_A12.18-A12.28_POS_SaaS_v0.2_2026-11-15.docx |
| M231-005 | REC | Addendum_Rekonsiliasi_Batch_1-9_dan_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx | 44712 | 212220dcb43689a1fc413d0f3e183734898297d0f7cd56c0060eac5d284eb16b | /Arsip Proyek POS SaaS/REC/Addendum_Rekonsiliasi_Batch_1-9_dan_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx |
| M231-006 | Audit | Audit_Finalisasi_Standard_Role_Manager_Allowlist_13_Kategori_POS_SaaS_v1.0.docx | 45366 | d786636a1ec8af1de4b27cd5f4bae049344b92c5bace97757a1456620bf77a18 | /Arsip Proyek POS SaaS/Audit/Audit_Finalisasi_Standard_Role_Manager_Allowlist_13_Kategori_POS_SaaS_v1.0.docx |
| M231-007 | REC | Audit_Hash_123_Kelompok_Duplikat_POS_SaaS_v0.1_2026-11-15.docx | 38405 | 7915c6394e457015b43a088948fbedfc86757d38ade3bfe9987797100dabbbfa | /Arsip Proyek POS SaaS/REC/Audit_Hash_123_Kelompok_Duplikat_POS_SaaS_v0.1_2026-11-15.docx |
| M231-008 | Audit | Audit_Inventaris_Lokasi_Seluruh_File_POS_SaaS_v0.1_2026-11-15.docx | 39667 | edf78ad82b95a0d7ec6690e0120d4705645f15a920d0a69330e318d842c426aa | /Arsip Proyek POS SaaS/Audit/Audit_Inventaris_Lokasi_Seluruh_File_POS_SaaS_v0.1_2026-11-15.docx |
| M231-009 | Audit | Audit_Inventaris_Lokasi_Seluruh_File_POS_SaaS_v0.2_2026-11-15.docx | 38641 | 43eb6bfeb0073124f7c8304ee0ff34b2fa70e5f1ff660954baf8cd32c585e239 | /Arsip Proyek POS SaaS/Audit/Audit_Inventaris_Lokasi_Seluruh_File_POS_SaaS_v0.2_2026-11-15.docx |
| M231-010 | ERD | Audit_Konsistensi_Keputusan_A01-A12_dengan_17_Tabel_POS_SaaS_v0.1.docx | 43299 | 71b34d46a9e60008e29f5e37e4ff7ee83d16bedd1bc5444459d681d641e449f6 | /Arsip Proyek POS SaaS/ERD/Audit_Konsistensi_Keputusan_A01-A12_dengan_17_Tabel_POS_SaaS_v0.1.docx |
| M231-011 | Audit | Audit_Provenance_Individual_A12.18-A12.28_POS_SaaS_v0.1_2026-11-15.docx | 39914 | adad2bc1e075c9885be578399a69f727d311e2f113b1e776912f781d6d349727 | /Arsip Proyek POS SaaS/Audit/Audit_Provenance_Individual_A12.18-A12.28_POS_SaaS_v0.1_2026-11-15.docx |
| M231-012 | Audit | Audit_Provenance_Individual_A12.31-A12.36_POS_SaaS_v0.1_2026-11-15.docx | 39745 | bb8a4edb07d151d4d7cdc7896a98d72367fc2d7953ce6c92a75c2048918a85cb | /Arsip Proyek POS SaaS/Audit/Audit_Provenance_Individual_A12.31-A12.36_POS_SaaS_v0.1_2026-11-15.docx |
| M231-013 | Audit | Audit_Register_Dokumentasi_POS_SaaS_v1.0_2026-11-14.docx | 41079 | bbbe2136dc7ca78b8074d4f7241a7aa1f28f1b5b26cb4baafeccd44ff172c8c3 | /Arsip Proyek POS SaaS/Audit/Audit_Register_Dokumentasi_POS_SaaS_v1.0_2026-11-14.docx |
| M231-014 | Audit | Audit_Register_Dokumentasi_POS_SaaS_v1.1_2026-11-14.docx | 41468 | 3026749c653bc395eb504d70ed2f5c63823254a69fd5ac70a026d629e065081e | /Arsip Proyek POS SaaS/Audit/Audit_Register_Dokumentasi_POS_SaaS_v1.1_2026-11-14.docx |
| M231-015 | Audit | Audit_Register_Dokumentasi_POS_SaaS_v1.2_2026-11-14.docx | 39965 | df1387c53ce8b297997fe9da14722f9dc37ace298a375f3fac74f1de82752bed | /Arsip Proyek POS SaaS/Audit/Audit_Register_Dokumentasi_POS_SaaS_v1.2_2026-11-14.docx |
| M231-016 | Audit | Audit_Register_Dokumentasi_POS_SaaS_v1.3_2026-11-14.docx | 40126 | 3f3423d5237c97b5e5ae32a3c856cc5c63e5ec47f7d181076be59a2d06d65bb9 | /Arsip Proyek POS SaaS/Audit/Audit_Register_Dokumentasi_POS_SaaS_v1.3_2026-11-14.docx |
| M231-017 | REC | Audit_Rekonsiliasi_Provenance_RMD-56_v1.2_REC-01_v0.1_2026-11-15.docx | 41642 | fed0e816598ce3a3ed801b82ae5cb2e1d4d30248ba79f4923e4dd6f434918c97 | /Arsip Proyek POS SaaS/REC/Audit_Rekonsiliasi_Provenance_RMD-56_v1.2_REC-01_v0.1_2026-11-15.docx |
| M231-018 | Blueprint | Blueprint_Alignment_Addendum_v1.0_2026-11-14.docx | 41618 | 8fe80c6fef3689b80c79e2b1159a52e886848729dd87f4190496b89e711a7860 | /Arsip Proyek POS SaaS/Blueprint/Blueprint_Alignment_Addendum_v1.0_2026-11-14.docx |
| M231-019 | Blueprint | Blueprint_POS_SaaS_Multi_Usaha_v1.0.docx | 48095 | 510555de1df5a81e55a9fee8c8d46fdea1c12c65382c6ebd0eb2908ab5641bef | /Arsip Proyek POS SaaS/Blueprint/Blueprint_POS_SaaS_Multi_Usaha_v1.0.docx |
| M231-020 | Blueprint | Blueprint_POS_SaaS_Multi_Usaha_v3.0.docx | 46633 | 0da548367e0c0018740e2a4a2ddc228410b6852058281ff48d93778dddb18027 | /Arsip Proyek POS SaaS/Blueprint/Blueprint_POS_SaaS_Multi_Usaha_v3.0.docx |
| M231-021 | Blueprint | Blueprint_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.1.docx | 41008 | b75cf0fa818df68166e94abe02ace78ef2ca7e684bafbe06aaede1f01728f4ec | /Arsip Proyek POS SaaS/Blueprint/Blueprint_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.1.docx |
| M231-022 | Blueprint | Blueprint_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.2.docx | 42703 | 3f5eeb1686cd2d400d84c44061f02ba62f8c870b3723aa1ecf5e6a4acad78520 | /Arsip Proyek POS SaaS/Blueprint/Blueprint_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.2.docx |
| M231-023 | Blueprint | Blueprint_POS_SaaS_v3.0_Category_Consolidation_1-13_v1.0.docx | 42744 | 08a8a35963b6d061493d0874ad717b218aafb99d87e58684608bad390cc3570f | /Arsip Proyek POS SaaS/Blueprint/Blueprint_POS_SaaS_v3.0_Category_Consolidation_1-13_v1.0.docx |
| M231-024 | Blueprint | Blueprint_Super_Admin_POS_SaaS_v1.0.docx | 43220 | d58a8fb01168549a1e38dadd68e054de5d224b6c459c62608c13a1fc20601b47 | /Arsip Proyek POS SaaS/Blueprint/Blueprint_Super_Admin_POS_SaaS_v1.0.docx |
| M231-025 | Authorization | Capability_Action_Taxonomy_Design_v1.0.docx | 45517 | 6987ced76e51b4271329014c209747275af9ca3cbf52f2a51dc2054833c8f01b | /Arsip Proyek POS SaaS/Authorization/Capability_Action_Taxonomy_Design_v1.0.docx |
| M231-026 | RMD | Category_Workflow_to_Module_Crosswalk_v1.3_DRAFT_2026-11-14.docx | 42773 | b2149f71519859decc496f24e94cee2de524a5839f0a3c4aa7fbcc48da8cf3c3 | /Arsip Proyek POS SaaS/RMD/Category_Workflow_to_Module_Crosswalk_v1.3_DRAFT_2026-11-14.docx |
| M231-027 | Authorization | Cross_Category_Matrix_Source_Reconciliation_v1.2_DRAFT_2026-11-14.docx | 43350 | 96e74a014b8809e9705fe98956561b3fbc9632723ffa06fb667221fdb9a9c05f | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Matrix_Source_Reconciliation_v1.2_DRAFT_2026-11-14.docx |
| M231-028 | Authorization | Cross_Category_Role_Module_Capability_Matrix_Decision_Addendum_v1.2.docx | 39480 | 162f7173b7da388f9c6600c06f095075bb04a5d67a1787895449acd40feaa159 | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Role_Module_Capability_Matrix_Decision_Addendum_v1.2.docx |
| M231-029 | Authorization | Cross_Category_Role_Module_Capability_Matrix_Design_v1.0.docx | 44803 | bacbf7f52113af04eb3faa843d6441a89255ac4dd3cb99758cc9218a682514b6 | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Role_Module_Capability_Matrix_Design_v1.0.docx |
| M231-030 | Authorization | Cross_Category_Role_Module_Capability_Matrix_Q01-Q06_Decision_Addendum_v1.3.docx | 39147 | 71d24e95d848398a95426f0039c1a52fd9efb1e54fc4fc4ab0937b384a32d885 | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Role_Module_Capability_Matrix_Q01-Q06_Decision_Addendum_v1.3.docx |
| M231-031 | Authorization | Cross_Category_Role_Module_Capability_Matrix_Review_Refinements_v1.1.docx | 43023 | 5b98266c0baefa9ad7e74e8fc82c7ec8014a8ef69b7f53a8c0f43dd3034320b9 | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Role_Module_Capability_Matrix_Review_Refinements_v1.1.docx |
| M231-032 | Authorization | Cross_Category_Role_Module_Capability_Matrix_v1.1_Reconciled_DRAFT_2026-11-14.docx | 41374 | 80125e0c95bc0304ca68e6fadb8e55163e79affc7c9d113201ad044892cf25b9 | /Arsip Proyek POS SaaS/Authorization/Cross_Category_Role_Module_Capability_Matrix_v1.1_Reconciled_DRAFT_2026-11-14.docx |
| M231-033 | ERD | ERD_Lineage_Register_POS_SaaS_v0.1.docx | 41168 | 39c21aa64a6e79e8a47794255759da86a45f36656acab176cb73fd922100961d | /Arsip Proyek POS SaaS/ERD/ERD_Lineage_Register_POS_SaaS_v0.1.docx |
| M231-034 | ERD | ERD_Master_Working_Draft_POS_SaaS_v0.1_2026-11-15.docx | 44896 | 1ce2c768b6d9366f50acca635b25b87e5ed3ed877f04fc844a84d34b2960ec67 | /Arsip Proyek POS SaaS/ERD/ERD_Master_Working_Draft_POS_SaaS_v0.1_2026-11-15.docx |
| M231-035 | ERD | ERD_Version_Inventory_Provenance_Audit_v1.0_2026-11-14.docx | 42593 | 228bd8ab10642113f8a3999f964b0735ad308580ccd18ef799610a20145ef74d | /Arsip Proyek POS SaaS/ERD/ERD_Version_Inventory_Provenance_Audit_v1.0_2026-11-14.docx |
| M231-036 | RMD | Erratum_Category_Consolidation_1-13_v1.1_AppendOnly_2026-11-14.docx | 38925 | 717f638fae3ae605d0e772411395adbf1216ace808e532cc0d7be5c81502b8b5 | /Arsip Proyek POS SaaS/RMD/Erratum_Category_Consolidation_1-13_v1.1_AppendOnly_2026-11-14.docx |
| M231-037 | Authorization | Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.0.docx | 38618 | af7f57af890e936f2aead5882e3325717af31383faf00ce08fa6add3646365fb | /Arsip Proyek POS SaaS/Authorization/Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.0.docx |
| M231-038 | Authorization | Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.1_Erratum_2026-11-14.docx | 39036 | 729605802ddd0638e91e15e515d06bd2316cd29621cbde4da05416a73334e6e4 | /Arsip Proyek POS SaaS/Authorization/Indeks_Arsip_Authorization_Scope_SoD_POS_SaaS_v1.1_Erratum_2026-11-14.docx |
| M231-039 | Authorization | Keputusan_FIX_Otorisasi_POS_SaaS_O01-O12_v1.0.docx | 41706 | 6ed975e5431f14cdc71dabfa8a9a3b20abba2ed7a870e272c4112f0b4869a7ec | /Arsip Proyek POS SaaS/Authorization/Keputusan_FIX_Otorisasi_POS_SaaS_O01-O12_v1.0.docx |
| M231-040 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_Audit_Integrasi_v4_A12.30F.docx | 50334 | c38bb5d511bf866f009663e5d2dde711e1f567849366f928bad7b7ae00619edd | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_Audit_Integrasi_v4_A12.30F.docx |
| M231-041 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi.docx | 42635 | 1e86d17ac8e0998cf2cc66f7f6c383a917b1571e4bd4988cc895597d082e9b7a | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi.docx |
| M231-042 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v2_dengan_Simulasi_FIFO.docx | 46182 | 2f21ba6e1984ffd367b48d24b6bd7d4c7e5bfe5a3b5a7dc37dda771b5635b729 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v2_dengan_Simulasi_FIFO.docx |
| M231-043 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v3_Baseline_A10.docx | 49215 | b677e44c15ee227fce2a8d4b5bc169545eee291666665366357a0ca77ea26776 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v3_Baseline_A10.docx |
| M231-044 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v4_A12.37_Numeric_Policy.docx | 55015 | cf4d4c3086594fa2205b9686bef4fe57e3fed49852d1c3a13184b2eee2ed7d02 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v4_A12.37_Numeric_Policy.docx |
| M231-045 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v5_A12.38_Physical_Dictionary_Audit.docx | 61594 | 5a07b283919191393920cec4c631f8c468e30604d22f4b9c1ab898b3f72a7f7c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v5_A12.38_Physical_Dictionary_Audit.docx |
| M231-046 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v6_A12.39_Relationship_Constraint_Specification.docx | 71116 | f0c603cfdd5941e973e0cc98a6e21565e433a4e58ec3b1488c618136bfe98966 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v6_A12.39_Relationship_Constraint_Specification.docx |
| M231-047 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v7_A12.40_Documentation_Audit.docx | 78686 | 23aedbc2bc5551af10b1d62d2b27c647fd2087593f9ad882bdcb733b6b970f6e | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v7_A12.40_Documentation_Audit.docx |
| M231-048 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.1_A12.40_D40_Register_Readiness_Correction.docx | 88634 | 96a3ee53257617f1c296092f5180b7c3c8b5a62793a73327c384f7644bc101c0 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.1_A12.40_D40_Register_Readiness_Correction.docx |
| M231-049 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.2_A12.40_Provenance_Reconciliation.docx | 94907 | ab9ac2fd1c61cfb698f14432789a15af6cc4e5ca979fc5a8e8a192e75a36c991 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.2_A12.40_Provenance_Reconciliation.docx |
| M231-050 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.3_Documentation_Integrity_Correction.docx | 97007 | 7c177564e53c7314b3aeb131045f958d3b59cb45acb8718cac993aab75642aaa | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.3_Documentation_Integrity_Correction.docx |
| M231-051 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.4_Layout_Correction.docx | 97169 | 1f901e9bd67f01c4d07aefe1657843ac9a0f0ccdba91420262a5de18e03c7878 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.4_Layout_Correction.docx |
| M231-052 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.5_P0_Search_Execution_Record.docx | 98458 | b20463a6a1e7113f8d45203d94a8d39bca913cc5c87a1984172cad916ebd5f3f | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.5_P0_Search_Execution_Record.docx |
| M231-053 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.6_P0_Expanded_Search_Record.docx | 99172 | 390694b4bc56f667a6206eca1e02e4d8929ff0eb672a9ea8dc74e95dba7da487 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.6_P0_Expanded_Search_Record.docx |
| M231-054 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.7_A12.18-A12.28_Individual_Mapping.docx | 100577 | ccbca6c1ea52de2c3c9829d480ad50fa4b8516c562d9ba016b07ab3592e2ff31 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.7_A12.18-A12.28_Individual_Mapping.docx |
| M231-055 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.8_A12.31-A12.36_Individual_Reconciliation.docx | 103875 | cf33ff4361da31133bcc2db191e1b1ae0d8f5a7261ad257e6a10eac855f7a96f | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.8_A12.31-A12.36_Individual_Reconciliation.docx |
| M231-056 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.9_User_Direction_Implementation_Handoff.docx | 105811 | f17fd596158b635a09655db0310dda6a79733fc0523d9a5f9f8f17892934ebb6 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v8.9_User_Direction_Implementation_Handoff.docx |
| M231-057 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.0_A12.40_A12.41_Readiness_Control.docx | 109145 | 431b1e7ec7bc8539b8139c1a0f52665db2bc45a917f511105ca7be129a174675 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.0_A12.40_A12.41_Readiness_Control.docx |
| M231-058 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.1_RMD05_RMD06_RMD09_Consolidation.docx | 112572 | b41da0ccf1d57c347182d6d301cf738abfdc4014f4e63c200c1cf94fb935c07c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.1_RMD05_RMD06_RMD09_Consolidation.docx |
| M231-059 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.2_RMD07_Version_Change_Index.docx | 116845 | dd3bc5aeb67ab87bdc76ff965e4e998d935a4596a94ac16d6f29f6bf6bee496e | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.2_RMD07_Version_Change_Index.docx |
| M231-060 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.3_RMD08_RMD10_Status_Taxonomy_D40_Register.docx | 121926 | 1914179327b05786f463962794226cfe13802f848f8a9d3880fd3df260f333cb | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.3_RMD08_RMD10_Status_Taxonomy_D40_Register.docx |
| M231-061 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.4_RMD11_Metadata_Canonical_Index_Reconciliation.docx | 126243 | 232003be3d05486b2ef84f7126946e1cc3e8b32f8966a41668acbd1f9ddc0c5c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.4_RMD11_Metadata_Canonical_Index_Reconciliation.docx |
| M231-062 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.1_RMD12_Canonical_Register_Field_Schema_Correction.docx | 135139 | 353bc2ecd4e8798116712d5494c49ecf0e10b6dd40f0b814c586131649ba2b48 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.1_RMD12_Canonical_Register_Field_Schema_Correction.docx |
| M231-063 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.2_RMD12_A10_Locator_A12.18-A12.28_Provenance_Reconciliation.docx | 136757 | 005a9f91dde3285996dd2781f76155b995b32527560898862594dd8c0ed9575e | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.2_RMD12_A10_Locator_A12.18-A12.28_Provenance_Reconciliation.docx |
| M231-064 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.3_RMD12_A12.31-A12.36_Individual_Provenance_Audit.docx | 139168 | 7e00a087bb830909d62807794c2a7cd8e72a35a1a4a6240560540d482bfb962a | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.3_RMD12_A12.31-A12.36_Individual_Provenance_Audit.docx |
| M231-065 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.4_RMD13_P0_Disposition_Acceptance_Plan.docx | 143538 | 6c493f048b447b362a8a712c71b8528214936d4a8de2d7c1e09d4373b46ebd1c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.4_RMD13_P0_Disposition_Acceptance_Plan.docx |
| M231-066 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.5_RMD13_P0_Evidence_Reconciliation_Erratum.docx | 146316 | dd21cfabcc5af02ef0c54e1065dec6bdc0186ba4ee94d608dc89545e14dd158e | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.5_RMD13_P0_Evidence_Reconciliation_Erratum.docx |
| M231-067 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.6_RMD13_User_Disposition_Implementation_Readiness_Handoff.docx | 148151 | 017d990aeda9cc3f64379f63dd71968e825fb3bc4d3aa5b971514ea902c2adb0 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.6_RMD13_User_Disposition_Implementation_Readiness_Handoff.docx |
| M231-068 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.7_GateI_Tenant_Organization_Readiness_Audit.docx | 153717 | 3d430b74e2342016a3ed579641fedfe7884cb07a24bd1d8f98c578fd9f85d871 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.7_GateI_Tenant_Organization_Readiness_Audit.docx |
| M231-069 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.8_Field_Level_Profiles_Businesses_Specification.docx | 157109 | 99a278899187147323f15f50545ee5612412a58b7601b5ea19cc41d6adaac890 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.8_Field_Level_Profiles_Businesses_Specification.docx |
| M231-070 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.9_Field_Level_Business_Members_Ownership_History.docx | 160317 | e80071e305b61d4a74af66763785ef909469112dbc3aef730d0f8c8b65a91543 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5.9_Field_Level_Business_Members_Ownership_History.docx |
| M231-071 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5_RMD12_Canonical_Decision_Register_A10_A11_A12.1-A12.17.docx | 134708 | 54e98c6dc1a2b028c42797a491841ede1b20b22e9358f5f85ee3dce8f05c2461 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.5_RMD12_Canonical_Decision_Register_A10_A11_A12.1-A12.17.docx |
| M231-072 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.0_Field_Level_Outlets_Specification.docx | 163402 | f71782ac87e80728dac6d31ffaa46b7987642150648ab63d0adf585c40e0fe5d | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.0_Field_Level_Outlets_Specification.docx |
| M231-073 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.1_Field_Level_Warehouses_Storage_Locations.docx | 166528 | 7d4fce0971c2a4e14cba36bf87122fc4c732a74c41bf7853f843341e40a52048 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.1_Field_Level_Warehouses_Storage_Locations.docx |
| M231-074 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.2_Field_Level_Employees_Employee_Outlets.docx | 169275 | 4c251e6a6c587463649f954c6cc330bd43ade495c4f91c2e5986e720e98f6060 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.2_Field_Level_Employees_Employee_Outlets.docx |
| M231-075 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.3_Field_Level_Roles_Permissions_Member_Roles.docx | 173452 | c81ee951fcef8b71e921be29be2969e82dc15922d33a6b95fa33f3213b8fc86d | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.3_Field_Level_Roles_Permissions_Member_Roles.docx |
| M231-076 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.4_R05_R06_Read_Only_Security_Reconciliation.docx | 179151 | 08f6d12e0e331f7faea7d93fcd98d450c152440befdd9c0f591251de3aff6ff6 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.4_R05_R06_Read_Only_Security_Reconciliation.docx |
| M231-077 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.5_Vercel_Environment_Routes_Read_Only_Audit.docx | 183866 | 4303a8d54f2eb37e6dae56cc3f8b598ee911a953461d646435e86fc4ddb01384 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.5_Vercel_Environment_Routes_Read_Only_Audit.docx |
| M231-078 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.6_Security_Readiness_Implementation_Gate.docx | 191428 | 1ae112ad10b7088e3acdf70361f68eccc8fb1027fd9e2395db9dca6f0c689b00 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.6_Security_Readiness_Implementation_Gate.docx |
| M231-079 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.7_Security_Readiness_Evidence_Reconciliation.docx | 194760 | 1cd9d2ec520933f966a7f57efdbe04eb3b07858dfb451fe1690623cd2c3129a3 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.7_Security_Readiness_Evidence_Reconciliation.docx |
| M231-080 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.8_R02_Membership_Lifecycle_Decision_Brief.docx | 198159 | 297e6db8779f17ca2d581c2c44b4ef9508e057d85179e970c607f1660e09a6c6 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.8_R02_Membership_Lifecycle_Decision_Brief.docx |
| M231-081 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.9_R02_Decision_Register_Consistency_Reconciliation.docx | 201327 | 00cfd239b94529ec6d4853590259bb4178e8b92bc263f78c0030014a6e2eeacd | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.6.9_R02_Decision_Register_Consistency_Reconciliation.docx |
| M231-082 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.0_R03_Employee_Membership_Audit_Decision_Brief.docx | 204905 | 17cb5f4049a4ffac6ce8218dd92affaa55bdb5fd32f14d736d467284055570e1 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.0_R03_Employee_Membership_Audit_Decision_Brief.docx |
| M231-083 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.1_R03_Decision_Register_Consistency_Reconciliation.docx | 208163 | e296c1a3e81aeb6e763f20aea1a54f6291f947ba03450c80b33f39040493c029 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.1_R03_Decision_Register_Consistency_Reconciliation.docx |
| M231-084 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.2_R03_Employee_Outlets_Lifecycle_Audit_Decision_Brief.docx | 41474 | 3d8c18a0f7e0acc08b79ea5601fcd79e7c3f44ec2fe571f9674d083e05bb9843 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.2_R03_Employee_Outlets_Lifecycle_Audit_Decision_Brief.docx |
| M231-085 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.3_R03_Employee_Outlets_Decision_Register_Reconciliation.docx | 40768 | 68256e7990798a9009b9726021d41d1bf8a9511bb69a744da883fc60a4c424f7 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.3_R03_Employee_Outlets_Decision_Register_Reconciliation.docx |
| M231-086 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.4_R03_Employee_Lifecycle_Offboarding_Audit_Decision_Brief.docx | 41185 | 6bbc935c2ab49f4a9ffc41dafe54fb0dda2785ef03a6c975b5e5bee3ecbfdf1e | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.4_R03_Employee_Lifecycle_Offboarding_Audit_Decision_Brief.docx |
| M231-087 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.5_R03_Employee_Lifecycle_Decision_Register_Reconciliation.docx | 40781 | ecb7a8f9cb3c0470ddfb4f7f05c97e15dcb59453871cc9043cf6eb5dbed4d15a | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.5_R03_Employee_Lifecycle_Decision_Register_Reconciliation.docx |
| M231-088 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.6_R03_EL-F_Business_Member_Employee_Cardinality_Audit.docx | 40508 | a6cb5be72d4dba8bd1558b39b5ee5c73e1ad36d8d35f46575fae5f102ff20452 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.6_R03_EL-F_Business_Member_Employee_Cardinality_Audit.docx |
| M231-089 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.7_R03_EL-F_Cardinality_Decision_Register_Reconciliation.docx | 39979 | 07db2293706dbaa1912138127d4b67148fb40bd90e95baeb358a86b946ad24c6 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.7_R03_EL-F_Cardinality_Decision_Register_Reconciliation.docx |
| M231-090 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.8_R03_Employee_Identity_Contact_Duplicate_Retention_Audit.docx | 41299 | 24a3bde629cecac080870b8fa7c05d848d779e3572a6472f2e58b5911c95b7f1 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.8_R03_Employee_Identity_Contact_Duplicate_Retention_Audit.docx |
| M231-091 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.9_R03_Employee_Identity_Contact_Decision_Register_Reconciliation.docx | 40785 | 58d6961a127f51776479b5ce78a9351a09a80012e920c3ad6b079ae3a5ee5f5c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.7.9_R03_Employee_Identity_Contact_Decision_Register_Reconciliation.docx |
| M231-092 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.0_R03_Employment_Periods_Lifecycle_Events_Audit_Decision_Brief.docx | 42021 | e13a990a0f7b398aa92b0de09f20cfd8e7d414bf58071c0bb6dba83c6120fc65 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.0_R03_Employment_Periods_Lifecycle_Events_Audit_Decision_Brief.docx |
| M231-093 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.1_R03_Employment_Periods_Lifecycle_Events_Decision_Register_Reconciliation.docx | 41325 | 645591ee79d7d484667a6a8bce05ac4bd3b8c8a71a7097c3cfe9652660432b69 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.1_R03_Employment_Periods_Lifecycle_Events_Decision_Register_Reconciliation.docx |
| M231-094 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.2_R03_Employee_Physical_Design_Readiness_Read_Only_Audit.docx | 41415 | 6ba6b9b2457e2905a56283bea18702fcdcc43e06d1e434b2bc5ff62ac25b001d | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.2_R03_Employee_Physical_Design_Readiness_Read_Only_Audit.docx |
| M231-095 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.3_R03_Employee_Physical_Design_Proposal.docx | 45342 | c32809bc56d81c5116a42650349a86f9cc91116209146e8b72a030c43091dfab | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.3_R03_Employee_Physical_Design_Proposal.docx |
| M231-096 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.4_R03_Employee_Constraints_Lifecycle_Transaction_Technical_Audit.docx | 43937 | 1aac5f7ee298f727298a0a2b3ae7f7839a6292f62d1d308a47161a6500a20b23 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.4_R03_Employee_Constraints_Lifecycle_Transaction_Technical_Audit.docx |
| M231-097 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.5_R03_Employee_Clearance_Offboarding_State_Machine_Audit.docx | 43960 | 9493e65ff8e2607c834a7759b4a15660e59da224441bdb4c27ace7ac23b463fd | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.5_R03_Employee_Clearance_Offboarding_State_Machine_Audit.docx |
| M231-098 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.6_R03_Offboarding_Authority_Clearance_Approval_Decision_Brief.docx | 40903 | 6ab6ca34c2e684c86a0892e098d899639a392ce054e988bebe38a78e015ff9f4 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.6_R03_Offboarding_Authority_Clearance_Approval_Decision_Brief.docx |
| M231-099 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.7_R03_Offboarding_Authority_Decision_Register_Reconciliation.docx | 41258 | be0d77bf75e4504e26d6cafc452e44f6447c81bca9fc2da69ab0b25873b5d7eb | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.7_R03_Offboarding_Authority_Decision_Register_Reconciliation.docx |
| M231-100 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.8_R03_R05_Offboarding_Authorization_Consistency_Audit.docx | 42584 | 8549fb5a2ce716d9451ad65f44fb914a843c0a86c5f6311715ef21cf90a5027b | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.8_R03_R05_Offboarding_Authorization_Consistency_Audit.docx |
| M231-101 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.9_R05_Permission_Catalogue_Manager_Scope_Decision_Brief.docx | 45709 | d4db2274d8d2a57c35f5b4e3ce5693040f3c8f08afc060432ebd9505337ab40c | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9.3_DRAFT_Audit_Integrasi_v9.8.9_R05_Permission_Catalogue_Manager_Scope_Decision_Brief.docx |
| M231-102 | ERD | Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9_DRAFT.docx | 49118 | e875a74624d86feabc9e325c7d2007d19acfc9b9570f463663794e0cbcb0c2cd | /Arsip Proyek POS SaaS/ERD/Konsolidasi_ERD_POS_SaaS_Multi_Usaha_v3.0_Tahap_5.9_DRAFT.docx |
| M231-103 | ERD | Konsolidasi_Keputusan_A11_Transfer_Shipment_Lifecycle_v1.0.docx | 40024 | cc30643776df0fb887ab63131d2de5e37ec6cffc52f4cf486e1928780aad10a7 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_Keputusan_A11_Transfer_Shipment_Lifecycle_v1.0.docx |
| M231-104 | ERD | Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.16_v1.0.docx | 43612 | 6d624a96c15671c018f2dc112e744bd2ad0d08b712425bd1066f10dd147ce17d | /Arsip Proyek POS SaaS/ERD/Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.16_v1.0.docx |
| M231-105 | ERD | Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.30F_v1.1.docx | 45827 | 448e8363dc1134e4321a768ec9f54f8b6be304fe774e0f8fbc05042aa9ac1fa0 | /Arsip Proyek POS SaaS/ERD/Konsolidasi_Keputusan_FIX_POS_SaaS_v3_A12.1-A12.30F_v1.1.docx |
| M231-106 | Authorization | Matriks_Halaman_Permission_Scope_POS_SaaS_v1.0.docx | 45302 | 2a498189a8233ff4e68289c0358de6f14e0e88192475578030103d42d40c3c5a | /Arsip Proyek POS SaaS/Authorization/Matriks_Halaman_Permission_Scope_POS_SaaS_v1.0.docx |
| M231-107 | Authorization | Permission_Catalogue_Category_Role_Module_Eligibility_POS_SaaS_v1.0.docx | 48978 | 329f5aee04eb22157cdfa54b1b7a2643b5e3e287f753e644f616a5cd6e6c5638 | /Arsip Proyek POS SaaS/Authorization/Permission_Catalogue_Category_Role_Module_Eligibility_POS_SaaS_v1.0.docx |
| M231-108 | Audit | POS_SAAS_A12_40_AC40_RECONCILIATION_v0.1_2026-11-16.md | 7978 | a3c69ec1c9efd9c0971b913400fcfb9fdf4020ce25cf287aab55cc1045a082b0 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_A12_40_AC40_RECONCILIATION_v0.1_2026-11-16.md |
| M231-109 | Audit | POS_SAAS_A12_40_CROSS_REFERENCE_AUDIT_v0.1_2026-11-16.md | 11107 | 19d07ccbe87aeefd0dcf18127185a020d86f1c14b96e95e5a521e06d174ead78 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_A12_40_CROSS_REFERENCE_AUDIT_v0.1_2026-11-16.md |
| M231-110 | Audit | POS_SAAS_A12_40_FINAL_DOCUMENTATION_AUDIT_v0.1_2026-11-16.md | 13075 | e4767c2d9cc22ce5111296f50912f78258933783dd10b7b5c7982a06df9ecc03 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_A12_40_FINAL_DOCUMENTATION_AUDIT_v0.1_2026-11-16.md |
| M231-111 | Audit | POS_SAAS_A12_40_NO_PRIMARY_SOURCE_WORKFLOW_ADDENDUM_v0.1_2026-11-16.md | 4010 | 3a3141dc3e4df5fb1c4e6e2de4cdc1bb917f10ef59635d7924e353a8f732dbba | /Arsip Proyek POS SaaS/Audit/POS_SAAS_A12_40_NO_PRIMARY_SOURCE_WORKFLOW_ADDENDUM_v0.1_2026-11-16.md |
| M231-112 | Audit | POS_SAAS_A12_40_RESIDUAL_BLOCKER_RECONCILIATION_REMEDIATION_PLAN_v0.1_2026-11-16.md | 14538 | 80c0a156865930d8ad017a0f5e41f56850f862fa7571ff496b94438b7a8ac9b0 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_A12_40_RESIDUAL_BLOCKER_RECONCILIATION_REMEDIATION_PLAN_v0.1_2026-11-16.md |
| M231-113 | ERD | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.1_2026-11-16.md | 25031 | 77fb3ac0947c7d40cc3e5f4038054b9b05f41fa4a16dc244e405ee714ba7132a | /Arsip Proyek POS SaaS/ERD/POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.1_2026-11-16.md |
| M231-114 | ERD | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.2_2026-11-16.md | 34136 | 198959a237a0a0792d356dd22a38afd9b51670f86d89128bee713f7166b3070e | /Arsip Proyek POS SaaS/ERD/POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.2_2026-11-16.md |
| M231-115 | ERD | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.3_2026-11-16.md | 46509 | 3a37b0d90ebc5cf82d357c58b1f4230941e0d15b7130a6f3133cf56a6fed2765 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.3_2026-11-16.md |
| M231-116 | ERD | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.5_2026-11-16(1).md | 46899 | bfe6d57ced68ddb9959bb333f9cacb2509ab37b55f6c9f02f9b1cdb649fa14db | /Arsip Proyek POS SaaS/ERD/POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.5_2026-11-16(1).md |
| M231-117 | ERD | POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.5_2026-11-16.md | 46899 | bfe6d57ced68ddb9959bb333f9cacb2509ab37b55f6c9f02f9b1cdb649fa14db | /Arsip Proyek POS SaaS/ERD/POS_SAAS_A12_CANONICAL_DECISION_REGISTER_WORKING_DRAFT_v0.5_2026-11-16.md |
| M231-118 | REC | POS_SAAS_ADDENDUM_AUDIT_REC05_REC07_REC08_v0.1_2026-11-15.md | 11219 | 9575c10db5b40bc8b543e0a5793c1307aa36e42c7347673fcf6546122e5f26b6 | /Arsip Proyek POS SaaS/REC/POS_SAAS_ADDENDUM_AUDIT_REC05_REC07_REC08_v0.1_2026-11-15.md |
| M231-119 | ERD | POS_SAAS_BATCH_04_SOURCE_VALIDATION_ADDENDUM_v0.1_2026-11-16.md | 11237 | f067fe0d6d94500b94591cee8a814518bc51ae269ea191812c76399251baf838 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_BATCH_04_SOURCE_VALIDATION_ADDENDUM_v0.1_2026-11-16.md |
| M231-120 | ERD | POS_SAAS_CROSS_DOMAIN_RECONCILIATION_BATCH_03-07_v0.1_2026-11-16.md | 29309 | 6cda12f9f56062c5bf7a3e7617ee42b5dbb55b917788aa7a91ff9b30d683ab5d | /Arsip Proyek POS SaaS/ERD/POS_SAAS_CROSS_DOMAIN_RECONCILIATION_BATCH_03-07_v0.1_2026-11-16.md |
| M231-121 | Audit | POS_SAAS_MIGRATION_MAPPING_BATCH_01_BLUEPRINT_ARCHITECTURE_v0.1_2026-11-15.md | 11237 | d22780239cfd37a12cf94aecab8fcc9e2b4584e8ea64bd7b1bba3e990e5a95f5 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_MIGRATION_MAPPING_BATCH_01_BLUEPRINT_ARCHITECTURE_v0.1_2026-11-15.md |
| M231-122 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md | 15748 | a92f8ea5d046311a1958cc06cfcc7a0f37dbbfb93d9590623faf7b4361b161d0 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_02_INVENTORY_COSTING_v0.1_2026-11-15.md |
| M231-123 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_03_PURCHASING_SUPPLIERS_v0.1_2026-11-15.md | 15402 | 1a07a9c27fb50836f5dc16db1559dcd5184fbfd34e37b46e7a6ccd4a6d49019a | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_03_PURCHASING_SUPPLIERS_v0.1_2026-11-15.md |
| M231-124 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_04_SALES_POS_v0.1_2026-11-16.md | 13316 | a78209cfc7184c6f046f74acbd48a752159200b97ca11e03a8f5fedc03873887 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_04_SALES_POS_v0.1_2026-11-16.md |
| M231-125 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_05_PAYMENT_CASH_BANK_SETTLEMENT_v0.1_2026-11-16.md | 13608 | b1320f7c05661bd4900ddbe353afcc8d301d1975acc6e2b92441f9ea1f4cb512 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_05_PAYMENT_CASH_BANK_SETTLEMENT_v0.1_2026-11-16.md |
| M231-126 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_06_FINANCE_ACCOUNTING_v0.1_2026-11-16.md | 14897 | f814b902eafae67a1d21641cb46b765abe4dfea2ad8ec719d58c7e1ccafb0e06 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_06_FINANCE_ACCOUNTING_v0.1_2026-11-16.md |
| M231-127 | ERD | POS_SAAS_MIGRATION_MAPPING_BATCH_07_REPORTING_AUDIT_CONFIGURATION_INTEGRATION_v0.1_2026-11-16.md | 21436 | 7452df27e8ccda44bdbed9b0ff76be4916c4aad3812c41fbb7f2c3be86cf1811 | /Arsip Proyek POS SaaS/ERD/POS_SAAS_MIGRATION_MAPPING_BATCH_07_REPORTING_AUDIT_CONFIGURATION_INTEGRATION_v0.1_2026-11-16.md |
| M231-128 | Audit | POS_SAAS_OVERALL_DOCUMENTATION_AUDIT_BATCH_01-07_REC01-08_v0.1_2026-11-16.md | 29625 | bf998d30583d82387ff020ecd0e3fc842d249d20d064b5c2b2189b15ed42172f | /Arsip Proyek POS SaaS/Audit/POS_SAAS_OVERALL_DOCUMENTATION_AUDIT_BATCH_01-07_REC01-08_v0.1_2026-11-16.md |
| M231-129 | Audit | POS_SAAS_P1_R02_R03_INTERNAL_METADATA_AUDIT_v0.1_2026-11-16.md | 10815 | 8b7795570386a762db81996eab4ca3a1ee2158696e00b400f71dd8fb70ac9225 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_P1_R02_R03_INTERNAL_METADATA_AUDIT_v0.1_2026-11-16.md |
| M231-130 | Audit | POS_SAAS_P1_SUPERSESSION_CLOSURE_AUDIT_v0.1_2026-11-16.md | 12729 | b8cd0a9f5e58ed4f3295546f218571c1d61e10296c24a3892d8c7898de2c952c | /Arsip Proyek POS SaaS/Audit/POS_SAAS_P1_SUPERSESSION_CLOSURE_AUDIT_v0.1_2026-11-16.md |
| M231-131 | Audit | POS_SAAS_P1_VERSION_CHANGE_AND_D40_A12_CROSS_REFERENCE_INDEX_v0.1_2026-11-16.md | 15384 | 38df7481b9276be8011f726dde8c48ae5e18e4a86a091dd2c1a5219af7c5c819 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_P1_VERSION_CHANGE_AND_D40_A12_CROSS_REFERENCE_INDEX_v0.1_2026-11-16.md |
| M231-132 | Audit | POS_SAAS_P2_DOCUMENT_INTEGRITY_RECONCILIATION_v0.1_2026-11-16.md | 11294 | 26616d030051a6b88502e87799e7ca535c063e90209f2eb39219c3d36d0ae4f9 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_P2_DOCUMENT_INTEGRITY_RECONCILIATION_v0.1_2026-11-16.md |
| M231-133 | Audit | POS_SAAS_PRIMARY_SOURCE_RECOVERY_INVENTORY_A12_D40_v0.1_2026-11-16.md | 9461 | 804eae3755517467296e13f0f3eba2070051b09215485e25236806280cb2fce8 | /Arsip Proyek POS SaaS/Audit/POS_SAAS_PRIMARY_SOURCE_RECOVERY_INVENTORY_A12_D40_v0.1_2026-11-16.md |
| M231-134 | Audit | POS_SAAS_PROVENANCE_AND_A12_CANONICAL_DECISION_AUDIT_ADDENDUM_v0.1_2026-11-16.md | 21772 | 4030fe9fb031f5a426318b891f3848d3f39ec8f4531feb98610d784830608ffa | /Arsip Proyek POS SaaS/Audit/POS_SAAS_PROVENANCE_AND_A12_CANONICAL_DECISION_AUDIT_ADDENDUM_v0.1_2026-11-16.md |
| M231-135 | REC | POS_SAAS_REC08_EVIDENCE_RECOVERY_REGISTER_v0.2_2026-11-15.md | 9800 | 8a86ac2bc517b3cd96a9d20faa53b76df0be81475b7fa3525762c7fe380ea9ae | /Arsip Proyek POS SaaS/REC/POS_SAAS_REC08_EVIDENCE_RECOVERY_REGISTER_v0.2_2026-11-15.md |
| M231-136 | Audit | Read_Only_Reaudit_Super_Admin_Platform_Admin_Production_2026-11-14_v1.0.docx | 41748 | bfb2abb43d1c4886dcbdb1b0158ab61eb328b3b09d6d942b48124fd3c94175ba | /Arsip Proyek POS SaaS/Audit/Read_Only_Reaudit_Super_Admin_Platform_Admin_Production_2026-11-14_v1.0.docx |
| M231-137 | REC | REC-01_Addendum_Verifikasi_Persetujuan_Asli_RMD-56_v0.2_2026-11-15.docx | 39148 | c863c349b8d1a7dccd0e6270aadbef2bdda0f1475cff5072ff659238af1cf277 | /Arsip Proyek POS SaaS/REC/REC-01_Addendum_Verifikasi_Persetujuan_Asli_RMD-56_v0.2_2026-11-15.docx |
| M231-138 | REC | REC-02_Addendum_Rekonsiliasi_Hash_123_Scope_Arsip_vs_Library_v0.1_2026-11-15.docx | 38837 | 04041a7dc8b9145114ec45c7880a86688cc20de4dd13536fc26d822f9b55e0e4 | /Arsip Proyek POS SaaS/REC/REC-02_Addendum_Rekonsiliasi_Hash_123_Scope_Arsip_vs_Library_v0.1_2026-11-15.docx |
| M231-139 | REC | REC-02_Register_Path_Hash_123_v0.2_2026-11-15.csv | 45092 | b829335e5755de1b8d73c8821371bb6a5cd467b6d0f7d9fcc0aa4b63d57893fa | /Arsip Proyek POS SaaS/REC/REC-02_Register_Path_Hash_123_v0.2_2026-11-15.csv |
| M231-140 | REC | REC-02_Rekonsiliasi_Hash_123_v0.2_2026-11-15.docx | 39517 | a1c81dfcedcd0d2b391b593389d2d83cc91bf7e9e7d275bcd43c1abf819f585b | /Arsip Proyek POS SaaS/REC/REC-02_Rekonsiliasi_Hash_123_v0.2_2026-11-15.docx |
| M231-141 | REC | REC-03_Addendum_Rekonsiliasi_Snapshot_Inventaris_322_328_333_v0.1_2026-11-15.docx | 39332 | b5b670d4ba6ed60b78f8b05a8ddf74e73f9adf14b360bd887b2221d4a931e2d8 | /Arsip Proyek POS SaaS/REC/REC-03_Addendum_Rekonsiliasi_Snapshot_Inventaris_322_328_333_v0.1_2026-11-15.docx |
| M231-142 | REC | REC-04_Addendum_Hasil_Penelusuran_Snapshot328_dan_Rekonsiliasi_54_vs_56_v0.4_2026-11-15.docx | 39211 | 1d743e0c4332c2f0bc334c2afacfeb3e279d028cd26b6012d236be1382fabf4d | /Arsip Proyek POS SaaS/REC/REC-04_Addendum_Hasil_Penelusuran_Snapshot328_dan_Rekonsiliasi_54_vs_56_v0.4_2026-11-15.docx |
| M231-143 | REC | REC-04_Addendum_Pemetaan_Coverage_137_Delta_66_v0.1_2026-11-15.docx | 39417 | 94746924903bd40cd85fffcae471d328c42baf45d4c8f7aba05ab803c7369b23 | /Arsip Proyek POS SaaS/REC/REC-04_Addendum_Pemetaan_Coverage_137_Delta_66_v0.1_2026-11-15.docx |
| M231-144 | REC | REC-04_Addendum_Rekonstruksi_Set_Difference_Coverage137_Manifest157_v0.3_2026-11-15.docx | 39860 | e116e93c4ba8cdba7d412b02792daa7b98afa9bf6844e3209655ee81c1cde1a7 | /Arsip Proyek POS SaaS/REC/REC-04_Addendum_Rekonstruksi_Set_Difference_Coverage137_Manifest157_v0.3_2026-11-15.docx |
| M231-145 | REC | REC-04_Daftar_54_Nama_Set_Difference_Manifest157_vs_Coverage137_v0.3_2026-11-15.csv | 9859 | 6469691c45e303d28cb9f14767ed027ede0acbef436dd69329888571476aeb80 | /Arsip Proyek POS SaaS/REC/REC-04_Daftar_54_Nama_Set_Difference_Manifest157_vs_Coverage137_v0.3_2026-11-15.csv |
| M231-146 | REC | REC-04_Erratum_Koreksi_Pemetaan_Nama_UNVERIFIED_v0.2_2026-11-15.docx | 40000 | f26027d89edef9d51289a17fc5b3dc249288d789cbaa9cbef385cdf83f6a35cf | /Arsip Proyek POS SaaS/REC/REC-04_Erratum_Koreksi_Pemetaan_Nama_UNVERIFIED_v0.2_2026-11-15.docx |
| M231-147 | REC | REC-06_Education_Hotel_Workflow_to_Capability_Traceability_Matrix_v0.1_2026-11-15.md | 39248 | faa411adde55c3aa63408f4f5c206ba4581e7893968dba7ab6697d6a7d133965 | /Arsip Proyek POS SaaS/REC/REC-06_Education_Hotel_Workflow_to_Capability_Traceability_Matrix_v0.1_2026-11-15.md |
| M231-148 | REC | REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md | 16377 | 4bd08045b36e51fa73d4df115d2ccf74e03466b1def151a74cbcd7bbdf12141d | /Arsip Proyek POS SaaS/REC/REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md |
| M231-149 | REC | Register_Inventaris_Arsip_POS_SaaS_v1.0_2026-11-14.docx | 43928 | 382e239b3b3529defd826a213406e15a1147048f576df42d0e84c4fdf67196bb | /Arsip Proyek POS SaaS/REC/Register_Inventaris_Arsip_POS_SaaS_v1.0_2026-11-14.docx |
| M231-150 | REC | Register_Inventaris_Arsip_POS_SaaS_v1.1_2026-11-14.docx | 38963 | e4feec775c53926d016a02ecdf433aa37f85ddbe0a3637e9d8d77c02339a7dfd | /Arsip Proyek POS SaaS/REC/Register_Inventaris_Arsip_POS_SaaS_v1.1_2026-11-14.docx |
| M231-151 | Authorization | Rekomendasi_Penyelesaian_12_Open_Items_Otorisasi_POS_SaaS_v1.0.docx | 44778 | df3edf4e3e7b1b26f9d1320f76438ec863750db2eeb6deb651919f4b303bb3d3 | /Arsip Proyek POS SaaS/Authorization/Rekomendasi_Penyelesaian_12_Open_Items_Otorisasi_POS_SaaS_v1.0.docx |
| M231-152 | REC | Rekonsiliasi_Hash_123_Scope_Arsip_vs_Library_REC-02_v0.1_2026-11-15.csv | 49896 | f23a923335ebcb450e8a2693ad01676a3cf7e3b141dfb68ecd778e83e1cdacb6 | /Arsip Proyek POS SaaS/REC/Rekonsiliasi_Hash_123_Scope_Arsip_vs_Library_REC-02_v0.1_2026-11-15.csv |
| M231-153 | REC | Rekonsiliasi_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx | 39280 | 7569f38fbbf70d6fbc548a701e543daee66483eda16ad0dd3f6e69302fc5f7a1 | /Arsip Proyek POS SaaS/REC/Rekonsiliasi_Inventaris_Arsip_POS_SaaS_v0.1_2026-11-15.docx |
| M231-154 | Review | Review_Apotek_Toko_Kesehatan_Manager_Allowlist_Role_Module_Eligibility_RMD-64_v1.0.docx | 46231 | a32a6bd0fe0cc8f6c7e3cb6f3410579626030ed3355c8e14870a24a96e961aad | /Arsip Proyek POS SaaS/Review/Review_Apotek_Toko_Kesehatan_Manager_Allowlist_Role_Module_Eligibility_RMD-64_v1.0.docx |
| M231-155 | Review | Review_Education_Kursus_Lembaga_Pendidikan_Manager_Allowlist_Role_Module_Eligibility_RMD-66_v1.0.docx | 46679 | fdf2be0865997add8f188bd43a1380c0b48040cf0f2378410b29b6e035beb755 | /Arsip Proyek POS SaaS/Review/Review_Education_Kursus_Lembaga_Pendidikan_Manager_Allowlist_Role_Module_Eligibility_RMD-66_v1.0.docx |
| M231-156 | Review | Review_FB_Restoran_Kafe_Manager_Allowlist_Role_Module_Eligibility_RMD-59_v1.0.docx | 44414 | 48b129dc8201969b9fcbc332a50c651f533cf784a17c15547b684b58351e3844 | /Arsip Proyek POS SaaS/Review/Review_FB_Restoran_Kafe_Manager_Allowlist_Role_Module_Eligibility_RMD-59_v1.0.docx |
| M231-157 | Review | Review_Grosir_Distributor_Manager_Allowlist_Role_Module_Eligibility_RMD-58_v1.0.docx | 45196 | fba3d0e179592a5e3be7f38dcd3557fa7bd73258ecfc25d5bc6867516feeff95 | /Arsip Proyek POS SaaS/Review/Review_Grosir_Distributor_Manager_Allowlist_Role_Module_Eligibility_RMD-58_v1.0.docx |
| M231-158 | Review | Review_Hotel_Penginapan_Manager_Allowlist_Role_Module_Eligibility_RMD-68_v1.0.docx | 47168 | a4cebfb81eb013e572ac6d9a4b1ea9720c92168175a570052a1bfd1bec208fd4 | /Arsip Proyek POS SaaS/Review/Review_Hotel_Penginapan_Manager_Allowlist_Role_Module_Eligibility_RMD-68_v1.0.docx |
| M231-159 | Review | Review_Jasa_Service_Provider_Manager_Allowlist_Role_Module_Eligibility_RMD-60_v1.0.docx | 45117 | 07acd42b36aae8db07bcd96b9ea7fa0fee426815f218450ad5bfb104734094ba | /Arsip Proyek POS SaaS/Review/Review_Jasa_Service_Provider_Manager_Allowlist_Role_Module_Eligibility_RMD-60_v1.0.docx |
| M231-160 | Review | Review_Laundry_Manager_Allowlist_Role_Module_Eligibility_RMD-65_v1.0.docx | 45946 | 21d26f44e552b4516d87321b1fc324a388157967f442ecfca57f8794d5bc18e6 | /Arsip Proyek POS SaaS/Review/Review_Laundry_Manager_Allowlist_Role_Module_Eligibility_RMD-65_v1.0.docx |
| M231-161 | Review | Review_Manufaktur_Produksi_Manager_Allowlist_Role_Module_Eligibility_RMD-62_v1.0.docx | 45262 | 74d5fa81febc6de3baca033ce9766bc4e3c3316577d13457111d23bb7a96be61 | /Arsip Proyek POS SaaS/Review/Review_Manufaktur_Produksi_Manager_Allowlist_Role_Module_Eligibility_RMD-62_v1.0.docx |
| M231-162 | Review | Review_Rental_Penyewaan_Manager_Allowlist_Role_Module_Eligibility_RMD-63_v1.0.docx | 45793 | 79076949e1280fc0e892578df0929078c0256412d437ba5236559bb51fcbad2b | /Arsip Proyek POS SaaS/Review/Review_Rental_Penyewaan_Manager_Allowlist_Role_Module_Eligibility_RMD-63_v1.0.docx |
| M231-163 | Review | Review_Retail_Manager_Allowlist_Role_Module_Eligibility_RMD-57_v1.0.docx | 44189 | 9784f908023ca72b52e1c1f5f5866dbb1ee4c27885428a51d6fe86560de95650 | /Arsip Proyek POS SaaS/Review/Review_Retail_Manager_Allowlist_Role_Module_Eligibility_RMD-57_v1.0.docx |
| M231-164 | Review | Review_Salon_Beauty_Manager_Allowlist_Role_Module_Eligibility_RMD-61_v1.0.docx | 44876 | 60a947646f36be580eebee8e22d4aba9b948bf6a3c4ea0e3c1f0857cbc39f5f2 | /Arsip Proyek POS SaaS/Review/Review_Salon_Beauty_Manager_Allowlist_Role_Module_Eligibility_RMD-61_v1.0.docx |
| M231-165 | RMD | RMD-47_R05_Role_Catalogue_Role_Permission_Assignment_Decision_Brief.docx | 45268 | 1b193293021cdf314134e7222db022ec0c30fad996fedded42fadc9e046a78ce | /Arsip Proyek POS SaaS/RMD/RMD-47_R05_Role_Catalogue_Role_Permission_Assignment_Decision_Brief.docx |
| M231-166 | RMD | RMD-47_v1.1_R05_D13_Manager_Role_Decision_Appendix.docx | 46280 | fc67ead264d550f5781b3c7b563ac4128fb4deb75f98634f52d9bf31211e137b | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.1_R05_D13_Manager_Role_Decision_Appendix.docx |
| M231-167 | RMD | RMD-47_v1.2_R05-D14_Custom_Roles_Package_Policy_Appendix.docx | 38519 | 7df53a05d6a079e31295287554112dfed82e32ece8f30e712258ba46eee7c53b | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.2_R05-D14_Custom_Roles_Package_Policy_Appendix.docx |
| M231-168 | RMD | RMD-47_v1.3_R05-D15_Multiple_Active_Roles_Policy_Appendix.docx | 38854 | 02c95e803d16d6923104a3921578e16deedcd6e27d24527e17251590741ad4f2 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.3_R05-D15_Multiple_Active_Roles_Policy_Appendix.docx |
| M231-169 | RMD | RMD-47_v1.4_R05-D16_Business_Category_Staff_Role_Matrix.docx | 40307 | 994f964c5774dfcb3779ef480fe6292a0ecc2f9aac5cee3492f755fb4c2dd08a | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.4_R05-D16_Business_Category_Staff_Role_Matrix.docx |
| M231-170 | RMD | RMD-47_v1.5_R05-D17_Custom_Roles_Governance_Decision_Appendix.docx | 38666 | 258c37586b83cac696092d307e3c69975277bf4ce0aaaa92943da6da3fb50f38 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.5_R05-D17_Custom_Roles_Governance_Decision_Appendix.docx |
| M231-171 | RMD | RMD-47_v1.6_R05-D18_Role_Assignment_Authority_Decision_Appendix.docx | 38967 | e0028a8d9e05c4e6a1fcbbf520939443403c509e09f483fcbd391e36b92698b6 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.6_R05-D18_Role_Assignment_Authority_Decision_Appendix.docx |
| M231-172 | RMD | RMD-47_v1.7_R05-D19_Flexible_Role_Governance_Decision_Brief.docx | 39499 | 71945603ad821918bbac836d474fb423ffd3375c0dff99d02a6c93ffcc89b094 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.7_R05-D19_Flexible_Role_Governance_Decision_Brief.docx |
| M231-173 | RMD | RMD-47_v1.8_R05-D19_Role_Permission_Risk_Classification_Audit.docx | 41068 | f865c0d6a67b00a2930c831dbcf63aaee82f71880a3c63236941939c2c536be1 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.8_R05-D19_Role_Permission_Risk_Classification_Audit.docx |
| M231-174 | RMD | RMD-47_v1.9_R05-D21_Restricted_Permission_Categories_Decision_Brief.docx | 41146 | 8d017a70bed4559026b4a1934f378ecdaa6757e2e67050ab282ef5289832d175 | /Arsip Proyek POS SaaS/RMD/RMD-47_v1.9_R05-D21_Restricted_Permission_Categories_Decision_Brief.docx |
| M231-175 | RMD | RMD-47_v2.0_R05-D21_Restricted_Permission_Categories_FIX_Appendix.docx | 39603 | 9113c10aeeabc9ac68bdf2a8d8c14b2a2836ed4b59a72468840a08c3e7d6cce6 | /Arsip Proyek POS SaaS/RMD/RMD-47_v2.0_R05-D21_Restricted_Permission_Categories_FIX_Appendix.docx |
| M231-176 | RMD | RMD-48_v1.0_Global_Permission_Catalogue_Conceptual_Draft.docx | 44809 | 17c3fd7bd43275f63d10ecb70bd660a39ba82333fb2b696fac7886c407de67f1 | /Arsip Proyek POS SaaS/RMD/RMD-48_v1.0_Global_Permission_Catalogue_Conceptual_Draft.docx |
| M231-177 | RMD | RMD-49_v1.0_Membership_Role_Assignment_Custom_Role_Manager_Scope_Review.docx | 42033 | af613b2a7d91c9daf50c4e13f7a515e3505d4febc70deafb8e98bf4bb4eddd42 | /Arsip Proyek POS SaaS/RMD/RMD-49_v1.0_Membership_Role_Assignment_Custom_Role_Manager_Scope_Review.docx |
| M231-178 | RMD | RMD-50_v1.0_Manager_Role_Assignment_Allowlist_Decision_Brief.docx | 40919 | 71808b8a52688283bddb2bfdaed1b00dcbc32e32e5f2b784b2f76e31d9d6d3de | /Arsip Proyek POS SaaS/RMD/RMD-50_v1.0_Manager_Role_Assignment_Allowlist_Decision_Brief.docx |
| M231-179 | RMD | RMD-50_v1.1_D50_Manager_Role_Assignment_Allowlist_FIX_Appendix.docx | 39964 | 5fea1add6de4c0011161886e985bfb3aa147546ac6170ee887f9d2b91d1047e1 | /Arsip Proyek POS SaaS/RMD/RMD-50_v1.1_D50_Manager_Role_Assignment_Allowlist_FIX_Appendix.docx |
| M231-180 | RMD | RMD-51_v1.0_Sensitive_Role_Assignment_Approval_Dual_Control_Decision_Brief.docx | 40680 | 0d9afe04f412bae3d1f4d8cf1c02a8764707f3fad6348e65bf19c49fa8f23cb0 | /Arsip Proyek POS SaaS/RMD/RMD-51_v1.0_Sensitive_Role_Assignment_Approval_Dual_Control_Decision_Brief.docx |
| M231-181 | RMD | RMD-51_v1.1_R51-01_to_R51-08_Conceptual_FIX_Appendix.docx | 39748 | d0ed9a3f624629dbc2ca93bf4f1c64d8518000248cb045167166510e55376ca6 | /Arsip Proyek POS SaaS/RMD/RMD-51_v1.1_R51-01_to_R51-08_Conceptual_FIX_Appendix.docx |
| M231-182 | RMD | RMD-52_v1.0_Owner_Authority_Resolver_Ownership_Lifecycle_Audit.docx | 41233 | 03bb80793c6e6ea8d017cc53c3f489f860952b3908c13640b9f88f54ce124663 | /Arsip Proyek POS SaaS/RMD/RMD-52_v1.0_Owner_Authority_Resolver_Ownership_Lifecycle_Audit.docx |
| M231-183 | RMD | RMD-52_v1.1_R52-D01_to_R52-D10_Conceptual_FIX_Appendix.docx | 39941 | e38efb1b6ccc5dec0328b9c340d027eecafab6e939707262978ae6c29c46ae5d | /Arsip Proyek POS SaaS/RMD/RMD-52_v1.1_R52-D01_to_R52-D10_Conceptual_FIX_Appendix.docx |
| M231-184 | RMD | RMD-53_v1.0_Approval_Lifecycle_Delegation_Governance_Audit.docx | 41699 | 81391fef72d9335d0e616a4730eea6e57e45c1af31e407d047a8b58742e28776 | /Arsip Proyek POS SaaS/RMD/RMD-53_v1.0_Approval_Lifecycle_Delegation_Governance_Audit.docx |
| M231-185 | RMD | RMD-53_v1.1_R53-D01_to_R53-D12_Conceptual_FIX_Appendix.docx | 40246 | df3e3281a9cd1dfc4c0628a202588003a4a9c529335a63918a2cbd4c3c5d0833 | /Arsip Proyek POS SaaS/RMD/RMD-53_v1.1_R53-D01_to_R53-D12_Conceptual_FIX_Appendix.docx |
| M231-186 | RMD | RMD-54_v1.0_Capability_Level_Role_Permission_Mapping_Audit.docx | 42714 | 8c8694f030ef23d73e7c455122f75bf2bc4b1ef59ea4cb9e780a6b041cb1490a | /Arsip Proyek POS SaaS/RMD/RMD-54_v1.0_Capability_Level_Role_Permission_Mapping_Audit.docx |
| M231-187 | RMD | RMD-54_v1.1_R54-D01_to_R54-D12_Conceptual_FIX_Appendix.docx | 40382 | 006bfd3a81cca0e3cab5aa60ed6550f6ed69daf679c09db54734045e1e4fcf7c | /Arsip Proyek POS SaaS/RMD/RMD-54_v1.1_R54-D01_to_R54-D12_Conceptual_FIX_Appendix.docx |
| M231-188 | RMD | RMD-55_v1.0_Business_Category_Standard_Role_Module_Eligibility_Audit.docx | 42449 | a9bce09c065c8fca24e1a803fbc5059bc8777b7d3f64474c986b7a2c450bd168 | /Arsip Proyek POS SaaS/RMD/RMD-55_v1.0_Business_Category_Standard_Role_Module_Eligibility_Audit.docx |
| M231-189 | RMD | RMD-55_v1.1_R55-D01_to_R55-D12_Conceptual_FIX_Addendum.docx | 39620 | 0749e84f60bf8f07297432adc5d6d7759652cdebfa22a61220510b5d9b901b7c | /Arsip Proyek POS SaaS/RMD/RMD-55_v1.1_R55-D01_to_R55-D12_Conceptual_FIX_Addendum.docx |
| M231-190 | RMD | RMD-56_v1.0_Deep_Audit_Business_Category_Operational_Workflow.docx | 43810 | 1789eb6afc645355933d0c9bde066efe8e91f144c7b18f09b20cb5fcc212ef9c | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.0_Deep_Audit_Business_Category_Operational_Workflow.docx |
| M231-191 | RMD | RMD-56_v1.1_Category_Extension_13_Parfum_Fragrance.docx | 39810 | 06c7a0ffcfa9c2332729d672c5f3c2b3661c8a1143fbc156a60ea22497e23425 | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.1_Category_Extension_13_Parfum_Fragrance.docx |
| M231-192 | RMD | RMD-56_v1.1_Cross_Category_Decision_Review_and_Refinements.docx | 43134 | 60b913e2a8c9c2db6f7b60d119c0fc78003fdf8836f2eaf43ca6bba1d7d1ddea | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.1_Cross_Category_Decision_Review_and_Refinements.docx |
| M231-193 | RMD | RMD-56_v1.2_Cross_Category_Conceptual_FIX_Addendum.docx | 42965 | 79fbf5890f2b29422c5d5054655395e87508e3546a6831c25a04d9deb0d4fd8a | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.2_Cross_Category_Conceptual_FIX_Addendum.docx |
| M231-194 | RMD | RMD-56_v1.2_R56-D01_to_R56-D12_Conceptual_FIX_Addendum.docx | 42520 | 68c4bda1d4ea0a8191a1fa46e80da5d09e3667519d99fb553f8d0cdfd278eb4d | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.2_R56-D01_to_R56-D12_Conceptual_FIX_Addendum.docx |
| M231-195 | RMD | RMD-56_v1.2_R56-D01_to_R56-D12_Conceptual_FIX_Addendum_2026-11-14.docx | 42309 | f4fc004a0e9954719dc6d5dceda69f93fbb480194e2875b1db8d2ef2876fa646 | /Arsip Proyek POS SaaS/RMD/RMD-56_v1.2_R56-D01_to_R56-D12_Conceptual_FIX_Addendum_2026-11-14.docx |
| M231-196 | RMD | RMD-57_v1.0_Retail_Toko_Deep_Workflow_Role_Module_Capability_Audit.docx | 44366 | 6259d862bd46cd5355af588105ce587775d9d7e861e0656a87d3d6ac08ab3c46 | /Arsip Proyek POS SaaS/RMD/RMD-57_v1.0_Retail_Toko_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-197 | RMD | RMD-57_v1.1_R57-D01_to_R57-D12_Conceptual_FIX_Addendum.docx | 39676 | d40bbf55732f0dc58038c21237c60b2342aae604fd56d27d07b3b171435354f8 | /Arsip Proyek POS SaaS/RMD/RMD-57_v1.1_R57-D01_to_R57-D12_Conceptual_FIX_Addendum.docx |
| M231-198 | RMD | RMD-58_v1.0_Grosir_Distributor_Deep_Workflow_Role_Module_Capability_Audit.docx | 45518 | c67868f3d47141c52481b84ec5312085f28cbe6fa57e020d93f2b6c2738154ca | /Arsip Proyek POS SaaS/RMD/RMD-58_v1.0_Grosir_Distributor_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-199 | RMD | RMD-58_v1.1_R58-D01_to_R58-D12_Conceptual_FIX_Addendum.docx | 39761 | f3028624f37bfbf6efac33bef15a3da71eec0d2846595eed4d5e6f049eb511d8 | /Arsip Proyek POS SaaS/RMD/RMD-58_v1.1_R58-D01_to_R58-D12_Conceptual_FIX_Addendum.docx |
| M231-200 | RMD | RMD-59_v1.0_FB_Restoran_Kafe_Deep_Workflow_Role_Module_Capability_Audit.docx | 45831 | 23276456bc9a8cd2eea8505981f0a8cb78bf9de61c61e0c7653c5bc728fc41b5 | /Arsip Proyek POS SaaS/RMD/RMD-59_v1.0_FB_Restoran_Kafe_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-201 | RMD | RMD-59_v1.1_R59-D01_to_R59-D12_Conceptual_FIX_Addendum.docx | 40427 | 4a48ac1a97c7016d156b8ce960624045709afd8cefb4a80f4e010a130202548c | /Arsip Proyek POS SaaS/RMD/RMD-59_v1.1_R59-D01_to_R59-D12_Conceptual_FIX_Addendum.docx |
| M231-202 | RMD | RMD-60_v1.0_Service_Provider_Deep_Workflow_Role_Module_Capability_Audit.docx | 46188 | 77bdbfebdc40104a59647d998a3673714064013b11d1ded39909edda455edac7 | /Arsip Proyek POS SaaS/RMD/RMD-60_v1.0_Service_Provider_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-203 | RMD | RMD-60_v1.1_R60-D01_to_R60-D12_Conceptual_FIX_Addendum.docx | 40480 | a47460a3b35701a80e43fbd5a05f347f10663e90733c0055db0db7ab90aed658 | /Arsip Proyek POS SaaS/RMD/RMD-60_v1.1_R60-D01_to_R60-D12_Conceptual_FIX_Addendum.docx |
| M231-204 | RMD | RMD-61_v1.0_Salon_Beauty_Deep_Workflow_Role_Module_Capability_Audit.docx | 46480 | 4f0bf32f5d63d434e06c80cd72d2f0a859dcb1032679553e9ec0d06e6cb95cf2 | /Arsip Proyek POS SaaS/RMD/RMD-61_v1.0_Salon_Beauty_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-205 | RMD | RMD-61_v1.1_R61-D01_to_R61-D12_Conceptual_FIX_Addendum.docx | 40674 | 7e38966fba932cabed2bca2c14ec4fa952152bb41c8c2bf89c20fb8ad26fdd84 | /Arsip Proyek POS SaaS/RMD/RMD-61_v1.1_R61-D01_to_R61-D12_Conceptual_FIX_Addendum.docx |
| M231-206 | RMD | RMD-62_v1.0_Manufacturing_Deep_Workflow_Role_Module_Capability_Audit.docx | 46182 | 867d019aba0a6986d94cf7df17e0bfb8f2c4d6cfb9f6fbff0edc83c97443371d | /Arsip Proyek POS SaaS/RMD/RMD-62_v1.0_Manufacturing_Deep_Workflow_Role_Module_Capability_Audit.docx |
| M231-207 | RMD | RMD-62_v1.1_R62-D01_to_R62-D12_Conceptual_FIX_Addendum.docx | 40713 | 59262f2c93b5156dbfb1be52dc5e5bf69c0067b84503f39b3702a381bbf6d077 | /Arsip Proyek POS SaaS/RMD/RMD-62_v1.1_R62-D01_to_R62-D12_Conceptual_FIX_Addendum.docx |
| M231-208 | RMD | RMD-63_v1.0_Rental_Equipment_Asset_Rental_Deep_Audit.docx | 44340 | 6e6b470767de947e20603f7c55336f43c1ea6584d1aff7574f176e4a20b10f5d | /Arsip Proyek POS SaaS/RMD/RMD-63_v1.0_Rental_Equipment_Asset_Rental_Deep_Audit.docx |
| M231-209 | RMD | RMD-63_v1.1_R63-D01_to_R63-D12_Conceptual_FIX_Addendum.docx | 40413 | 92246022e373cea77ee6635fd1f881f88d5137832c7364b97fba99409b8ede99 | /Arsip Proyek POS SaaS/RMD/RMD-63_v1.1_R63-D01_to_R63-D12_Conceptual_FIX_Addendum.docx |
| M231-210 | RMD | RMD-64_v1.0_Pharmacy_Apotek_Deep_Audit.docx | 44825 | 599bbc80d6cbee5336d63bc7d8dab93f958f0a66e58e4cf17b918f2ae116e95c | /Arsip Proyek POS SaaS/RMD/RMD-64_v1.0_Pharmacy_Apotek_Deep_Audit.docx |
| M231-211 | RMD | RMD-64_v1.1_R64-D01_to_R64-D12_Conceptual_FIX_Addendum.docx | 40528 | f4ca0e50b54fcf1123f248ae9e6b00ba3f75b9db9894302c0562abe25ed6a837 | /Arsip Proyek POS SaaS/RMD/RMD-64_v1.1_R64-D01_to_R64-D12_Conceptual_FIX_Addendum.docx |
| M231-212 | RMD | RMD-65_v1.0_Laundry_Deep_Audit.docx | 44454 | 160ab8266c432deb9c70d04316cc32e1af31d6c2ec2a088088e2a69c952b0a90 | /Arsip Proyek POS SaaS/RMD/RMD-65_v1.0_Laundry_Deep_Audit.docx |
| M231-213 | RMD | RMD-65_v1.1_R65-D01_to_R65-D12_Conceptual_FIX_Addendum.docx | 40397 | dd25d6f51b67662ebe87d41a97fe85c7d8dacdccf30f47917d907a7fc8b619d9 | /Arsip Proyek POS SaaS/RMD/RMD-65_v1.1_R65-D01_to_R65-D12_Conceptual_FIX_Addendum.docx |
| M231-214 | RMD | RMD-66_Education_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx | 37903 | 0ddc2c66607ecd0fb03639e9fd65b5723a1502f866407a1051eac3a6635cd119 | /Arsip Proyek POS SaaS/RMD/RMD-66_Education_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx |
| M231-215 | RMD | RMD-66_v1.0_Education_Deep_Audit_Brief.docx | 43098 | bd4b9fcfac9b8e5cba6a382596314dbe9520430cefdb87172f0dfc72751ace13 | /Arsip Proyek POS SaaS/RMD/RMD-66_v1.0_Education_Deep_Audit_Brief.docx |
| M231-216 | RMD | RMD-66_v1.1_R66-D01_to_R66-D12_Conceptual_FIX_Addendum.docx | 40260 | 544c76cf0d3320020ee4adc7c3cbdaaecf3d35b795a1d1095c36bbb222f8748c | /Arsip Proyek POS SaaS/RMD/RMD-66_v1.1_R66-D01_to_R66-D12_Conceptual_FIX_Addendum.docx |
| M231-217 | RMD | RMD-67_v1.0_Parfum_Fragrance_Deep_Audit_Brief.docx | 44150 | 72a148136fea634f69a603d9b56be4fed53ddea2b06b5b8b138e3bf2da41b186 | /Arsip Proyek POS SaaS/RMD/RMD-67_v1.0_Parfum_Fragrance_Deep_Audit_Brief.docx |
| M231-218 | RMD | RMD-67_v1.1_R67-D01_to_R67-D12_Conceptual_FIX_Addendum.docx | 40932 | 56949bf0ff1c32f66c602c2d403687a2437a26a1f208f0f0fa0d425a0cc3f77b | /Arsip Proyek POS SaaS/RMD/RMD-67_v1.1_R67-D01_to_R67-D12_Conceptual_FIX_Addendum.docx |
| M231-219 | RMD | RMD-68_v1.0_Hotel_Penginapan_Deep_Audit_Brief.docx | 44376 | 8b8e5a7ab5e5923d7d6a5d51d797aa5cca6a2dc839c36276f5bf6e757ed59475 | /Arsip Proyek POS SaaS/RMD/RMD-68_v1.0_Hotel_Penginapan_Deep_Audit_Brief.docx |
| M231-220 | RMD | RMD-68_v1.1_Hotel_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx | 38355 | 993463d21225d02ed722cc0dc7237798e6339f68de249b571f3c92dff37f8217 | /Arsip Proyek POS SaaS/RMD/RMD-68_v1.1_Hotel_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx |
| M231-221 | RMD | RMD-68_v1.1_R68-D01_to_R68-D12_Conceptual_FIX_Addendum.docx | 40599 | 5d55f9b96c99905d8112423d06b40b4ee7e4cdf89f12627b48dba586155e47cb | /Arsip Proyek POS SaaS/RMD/RMD-68_v1.1_R68-D01_to_R68-D12_Conceptual_FIX_Addendum.docx |
| M231-222 | RMD | RMD-69_v1.0_Lainnya_Belum_Diklasifikasikan_Deep_Audit_Brief.docx | 41997 | dcb2e7b89475b7b5055e5a9f7b1887be0399b270ac7a39d259b2bf014a4d3391 | /Arsip Proyek POS SaaS/RMD/RMD-69_v1.0_Lainnya_Belum_Diklasifikasikan_Deep_Audit_Brief.docx |
| M231-223 | RMD | RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx | 40204 | 405d273b5ba18700f9996b61da5b61cce6f7ae84cb55e438f79a12246633bef9 | /Arsip Proyek POS SaaS/RMD/RMD-69_v1.1_R69-D01_to_R69-D12_Conceptual_FIX_Addendum.docx |
| M231-224 | Authorization | Scope_Dimension_Object_Geographic_Boundary_Matrix_Design_v1.0.docx | 48468 | bc9b3d3c739850d807558bd353a6bcce85b0bcd144cd42930e26296f31ad2793 | /Arsip Proyek POS SaaS/Authorization/Scope_Dimension_Object_Geographic_Boundary_Matrix_Design_v1.0.docx |
| M231-225 | Authorization | Shared_Core_Operational_Module_Eligibility_Matrix_Design_v1.0.docx | 44638 | 5ddbf54ee404a69b14e470a8158f9fb11d7f438230b67f050b3f0d0bac7729ba | /Arsip Proyek POS SaaS/Authorization/Shared_Core_Operational_Module_Eligibility_Matrix_Design_v1.0.docx |
| M231-226 | Authorization | Shared_Core_Operational_Module_Eligibility_Matrix_v0.1_PROPOSED.docx | 43795 | e3488fd6ed6fcc47f9f8665889ea148921bafa09c891dc5dbabbec673d84e175 | /Arsip Proyek POS SaaS/Authorization/Shared_Core_Operational_Module_Eligibility_Matrix_v0.1_PROPOSED.docx |
| M231-227 | Blueprint | Sitemap_Decision_Erratum_v1.1_2026-11-14.docx | 39720 | 17417dbe10d7b602ab624bb313811647d423ff501585c201e2da12167396f21f | /Arsip Proyek POS SaaS/Blueprint/Sitemap_Decision_Erratum_v1.1_2026-11-14.docx |
| M231-228 | Blueprint | Sitemap_Spesifikasi_Halaman_Super_Admin_Platform_Admin_v1.0.docx | 44805 | 2e9f9360e3e0bbbce27d399480d2d7400dad25b3c269f4f5a0676246f431d74a | /Arsip Proyek POS SaaS/Blueprint/Sitemap_Spesifikasi_Halaman_Super_Admin_Platform_Admin_v1.0.docx |
| M231-229 | Authorization | SoD_Approval_and_Sensitive_Data_Classification_Matrix_v1.0.docx | 49257 | 1415b5e91414dab2c6d20fcfe9a1e9f525639f2d1e9c1a6ef3da74e24de7f46f | /Arsip Proyek POS SaaS/Authorization/SoD_Approval_and_Sensitive_Data_Classification_Matrix_v1.0.docx |
| M231-230 | ERD | Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx | 42307 | 0efbcd14ee10395c940beac707a8d82cb6c22e06b105fa8ed765b79dd742e918 | /Arsip Proyek POS SaaS/ERD/Update_Audit_Keputusan_A11_A12_dan_Matriks_17_Tabel_POS_SaaS_v0.2_2026-11-15.docx |
| M231-231 | Blueprint | Wireframe_Interaksi_Dashboard_Super_Admin_Platform_Admin_v1.0.docx | 47125 | 5096e7203674aa3a7d5de443f2a0c8a6d74cfffaf89d2e3b5888ece64e3eaefe | /Arsip Proyek POS SaaS/Blueprint/Wireframe_Interaksi_Dashboard_Super_Admin_Platform_Admin_v1.0.docx |

DOC-12 v0.3 — APPEND-ONLY CORRECTION ADDENDUM

Master Archive & Document Index | POS SaaS Multi-Usaha v3.0

16 November 2026 | Controlled successor to DOC-12 v0.2


## Addendum control record


| Field | Recorded value |
| --- | --- |
| Document | DOC-12 — Master Archive & Document Index |
| Version | v0.3 — append-only correction addendum |
| Base artifact | DOC-12_Master_Archive_Document_Index_v0.2.docx |
| Base Library path | /Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.2.docx |
| New DOC-11 artifact | DOC-11_Project_Roadmap_Release_Gates_v0.2.docx |
| Verified DOC-11 Library path | /Arsip Proyek POS SaaS/Master Documents/DOC-11_Project_Roadmap_Release_Gates_v0.2.docx |
| DOC-11 Library file ID | libfile_9447130b09ec8191bcfc4824b042ae4c |
| DOC-11 backing file ID | file_00000000f8c48207b2306f96aedb9a41 |
| DOC-11 observed size | 49,568 bytes |
| DOC-11 observed Library creation | 2026-11-16T13:16:46+00:00 (Library metadata) |
| DOC-11 status | DRAFT v0.2 — substantive reconstructed working draft; not accepted as final |
| Governance | READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE |


## A. Reason for this correction

DOC-12 v0.2 was prepared while the substantive DOC-11 v0.2 artifact was not present in the Master Documents Library listing. DOC-12 v0.2 nevertheless listed DOC-11 v0.2 among the latest working versions. That assertion was therefore unverified at the time of the Stage 4.9 audit and was recorded as S49-F05.

After the audit checkpoint, a substantive DOC-11 v0.2 working draft was reconstructed from the Master Continuation Handoff, Stage 4.9 audit report, available Master Checklist, DOC-12 v0.2, and DOC-11 v0.1 shell. It was uploaded as a new Library file. A fresh Library listing and full-text read verified its exact name, path, size, and substantive content.


## B. Verified DOC-11 v0.2 index correction


| Index field | Corrected value / status |
| --- | --- |
| Master ID | DOC-11 |
| Title | Project Roadmap & Release Gates |
| Filename | DOC-11_Project_Roadmap_Release_Gates_v0.2.docx |
| Exact Library path | /Arsip Proyek POS SaaS/Master Documents/DOC-11_Project_Roadmap_Release_Gates_v0.2.docx |
| Library identity | libfile_9447130b09ec8191bcfc4824b042ae4c |
| Size | 49,568 bytes |
| Availability | PRESENT — confirmed by fresh Library listing and successful full-text read |
| Content provenance | Reconstructed substantive working draft; not claimed byte-for-byte recovery of the earlier local v0.2 file |
| Document status | DRAFT v0.2; subject to Stage 4.9 review; not accepted/final |
| GitHub destination | PROPOSED ONLY; no path approval or migration authorization |

The DOC-11 v0.1 shell remains preserved as a separate Library artifact. This correction does not overwrite, rename, move, delete, merge, or supersede the v0.1 shell.


## C. Scoped supersession and historical preservation

- This addendum corrects the current-availability assertion for DOC-11 in Section 6 of DOC-12 v0.2. DOC-11 v0.2 is now verified as present at the exact path stated above.
- The earlier Stage 4.9 audit observation that DOC-11 v0.2 was absent remains historically accurate for the Library inventory snapshot taken during that audit. It is not erased or rewritten.
- The DOC-12 v0.2 body is retained unchanged as the historical base. This addendum is the controlling later correction for the DOC-11 availability/path assertion only.
- No other filename/path topology proposal is approved by this addendum. DOC-01, DOC-04, DOC-07 and DOC-11 GitHub destination conflicts remain open/proposed pending explicit decision.
- The 231-file SHA-256 manifest remains the historical integrity baseline. This correction does not rehash the manifest, modify its records, or treat the later 249-path inventory as a new hash baseline.

## D. Stage checkpoint correction


| Item | Current checkpoint after this addendum |
| --- | --- |
| Stage 4.8 | 13/13 DRAFTED; document audit corrections remain. |
| Stage 4.9.1–4.9.5 | COMPLETE; acceptance evaluation remains NOT MET. |
| Stage 4.9.6 / S49-F01 | COMPLETE — DOC-11 v0.2 uploaded and verified in Library. |
| Stage 4.9.7 / S49-F05 | COMPLETE — DOC-12 v0.3 append-only correction prepared; Library upload verification is the remaining operational step until this file is uploaded and re-read. |
| Stage 4.9.8 / S49-F02 | NEXT — verify DOC-00–DOC-03 provenance and source/claim locators. |
| Stage 4.9.9 / S49-F03 | PENDING — claim-level primary locators and actual bidirectional content backlinks across all 13 documents. |
| Stage 4.9.10 / S49-F06 | PENDING — resolve path/topology conflicts; proposed paths remain unapproved. |
| Stage 4.9.11 | PENDING — final re-audit and separate user acceptance decision. |
| Stage 4.7.8 | PARTIAL — GATE NOT PASSED. |
| G10 | PARTIAL — ACCEPTANCE NOT MET. |
| Stage 5 — GitHub migration | NOT AUTHORIZED. |
| Stage 6 — Implementation | NOT AUTHORIZED. |
| DB_PUSH_BLOCKED | ACTIVE. |


## E. Remaining limitations and dependencies

- DOC-11 v0.2 is available, but its substantive content remains a reconstructed working draft requiring Stage 4.9 review.
- DOC-00–DOC-03 remain reconstructed working copies until their provenance and claim-level source locators are verified.
- Stage 4.7.8 actual two-way backlinks and complete page/paragraph locators remain incomplete.
- G10 remains PARTIAL — ACCEPTANCE NOT MET; unresolved A12.18–A12.28 and D40-203–D40-216, REC-02/03/04/08 provenance gaps, Purchasing 15/14, and Sales 20/18 crosswalk gaps remain.
- DOC-08/09/10 remain consolidation/index documents and do not replace primary approvals or closure evidence.
- No current Production, database, RLS, Auth, API, backend, source-code, repository, CI, or deployment verification is claimed.

## F. Governance and authority

READ-ONLY • APPEND-ONLY. No historical artifact has been modified. No SQL/DDL/DML, database/schema, migration, RLS/Auth, API/backend, source-code, GitHub, branch, PR, CI, Vercel, deployment, or Production change is authorized. No Supabase Preview/Staging use. Stage 5 and Stage 6 remain NOT AUTHORIZED. DB_PUSH_BLOCKED remains ACTIVE.


## G. Evidence note

Verification basis: fresh Library listing of the Master Documents folder showed DOC-11 v0.2 and DOC-11 v0.1 shell as separate files; the DOC-11 v0.2 file was successfully read in full. The DOC-11 Library identity and metadata recorded above were returned by that listing. No SHA-256 recomputation was performed for DOC-11 v0.2 or DOC-12 v0.3.


END OF DOC-12 v0.3 APPEND-ONLY CORRECTION ADDENDUM


## DOC-12 v0.4 — Append-only Current Master-Document Snapshot

Master Archive & Document Index | POS SaaS Multi-Usaha v3.0 | 17 November 2026

Current controlled revision: DRAFT v0.4 — MANIFEST-BASED INDEX WITH APPENDED MASTER-DOCUMENT SNAPSHOT; CONTENT REVIEW AND LOCATOR VALIDATION REMAIN OPEN. The complete DOC-12 v0.3 base and its prior addendum are retained above without alteration. This section is a new snapshot and does not rehash or modify the historical 231-file manifest.


### 12.1 Purpose and snapshot boundary

This addendum records the observed Master Documents Library listing on 17 November 2026 and the current Stage 5 documentation checkpoint. Listing proves artifact presence and metadata only; it does not certify complete content review, approval, source-locator closure, or implementation readiness. The 231-file SHA-256 manifest remains the historical integrity baseline for its stated snapshot. No new hash manifest or rehash was performed.


### 12.2 Observed master-document artifacts

The following rows reflect the exact filenames and paths returned by the Master Documents Library listing. Versions are filename-derived identifiers, not independent approval states. DOC-00 v0.2 and DOC-12 v0.4 are the new artifacts produced by this Stage 5.6.11 work; their Library presence is to be verified after upload.


| Master ID | Observed filename / version | Exact Library path | Evidence boundary |
| --- | --- | --- | --- |
| DOC-00 | DOC-00_Document_Control_Source_of_Truth_v0.1.docx (base) | /Arsip Proyek POS SaaS/Master Documents/DOC-00_Document_Control_Source_of_Truth_v0.1.docx | PRESENT in listing; base file read; DRAFT v0.1 |
| DOC-01 | DOC-01_Product_Blueprint_Master_v0.1(1).docx | /Arsip Proyek POS SaaS/Master Documents/DOC-01_Product_Blueprint_Master_v0.1(1).docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-02 | DOC-02_Category_Workflow_Master_v0.1.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-02_Category_Workflow_Master_v0.1.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-03 | DOC-03_System_Architecture_Master_v0.8_DRAFT.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-03_System_Architecture_Master_v0.8_DRAFT.docx | PRESENT in listing; DRAFT v0.8; editorial consistency review passed |
| DOC-04 | DOC-04_ERD_Data_Dictionary_Master_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-04_ERD_Data_Dictionary_Master_v0.2.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-05 | DOC-05_Authorization_Architecture_Master_v0.1.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-05_Authorization_Architecture_Master_v0.1.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-06 | DOC-06_Requirements_and_Traceability_Master_v0.1.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-06_Requirements_and_Traceability_Master_v0.1.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-07 | DOC-07_Security_Evidence_Master_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-07_Security_Evidence_Master_v0.2.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-08 | DOC-08_Master_FIX_Decision_Register_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-08_Master_FIX_Decision_Register_v0.2.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-09 | DOC-09_Master_OPEN_REVIEW_TODO_Register_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-09_Master_OPEN_REVIEW_TODO_Register_v0.2.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-10 | DOC-10_Conflict_Supersession_Master_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-10_Conflict_Supersession_Master_v0.2.docx | PRESENT in listing; content not re-audited in this snapshot |
| DOC-11 | DOC-11_Project_Roadmap_Release_Gates_v0.2.docx | /Arsip Proyek POS SaaS/Master Documents/DOC-11_Project_Roadmap_Release_Gates_v0.2.docx | PRESENT in listing; previously verified in DOC-12 v0.3 |
| DOC-12 | DOC-12_Master_Archive_Document_Index_v0.3.docx (base + v0.3 addendum) | /Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.3.docx | PRESENT in listing; body base says v0.2, append-only addendum establishes v0.3 |


### 12.3 Current controlled revision records

DOC-00 v0.1 remains the preserved base artifact. The new DOC-00 v0.2 addendum is a separate working revision that clarifies source authority, status dimensions, current Stage 5 checkpoint, and the change-control gate. Its Library upload is pending verification at the time of this snapshot preparation.

DOC-03 v0.8 is present at the exact path above. Its status remains DRAFT / REVIEW REQUIRED; the completed editorial consistency review does not establish full source-locator closure, physical schema verification, implementation, test execution, or Production readiness.

DOC-12 v0.3 remains the preserved prior artifact. Its body status line still identifies the v0.2 base, while its append-only control record/table and correction addendum establish v0.3. This is a known layered-version presentation issue, not a basis to rewrite the historical body. DOC-12 v0.4 records the new current snapshot as an additional append-only revision.


### 12.4 Stage 5 checkpoint

ST5-01 through ST5-05 are COMPLETE. Documentation PRs #5, #6, #7, #8 and #9 were reported merged and verified. ST5-06 DOC-03 v0.8 editorial consistency review is COMPLETE. ST5-06.11 DOC-00/DOC-12 append-only update is in progress. ST5-06.12 preparation of one documentation PR, ST5-06.13 documentation CI, ST5-06.14 review and explicit merge approval, and ST5-06.15 merge/post-merge verification remain NOT STARTED. ST5-07 through ST5-15 and ST5-16 remain NOT STARTED.


### 12.5 Limitations and governance

No content review is inferred for DOC-01, DOC-02, DOC-04 through DOC-11 merely from their presence in the listing. No hash recomputation, source-primary recovery, claim-level locator completion, bidirectional backlink validation, GitHub path approval, or Production verification is claimed by this snapshot.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE. Stage 5 remains documentation-only. No SQL/DDL/DML, database/schema/migration, Supabase, RLS/Auth, API/backend, application source, CI workflow, Vercel, deployment, Production, branch mutation, or PR merge is authorized by this addendum. Stage 6 remains NOT AUTHORIZED. A later documentation PR and merge require their own workflow gates and explicit user approval for merge.

DOC-12 v0.4 remains DRAFT / REVIEW REQUIRED. This addendum records a metadata/listing snapshot; it is not final acceptance of the 13 master documents or the archive.


| Control field | Recorded value |
| --- | --- |
| Current revision | DOC-12 v0.4 — append-only current master-document snapshot |
| Base artifact | DOC-12_Master_Archive_Document_Index_v0.3.docx |
| Base Library path | /Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.3.docx |
| Snapshot date | 17 November 2026 |
| Snapshot source | Fresh files.list of /Arsip Proyek POS SaaS/Master Documents |
| Hash status | No new hash or SHA-256 recomputation performed |
| Governance | READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE |
| Document status | DRAFT / REVIEW REQUIRED |


## DOC-12 v0.5 — Library Upload Verification Addendum

Master Archive & Document Index | POS SaaS Multi-Usaha v3.0 | 17 November 2026

Current controlled revision: DRAFT v0.5 — APPEND-ONLY LIBRARY VERIFICATION UPDATE; CONTENT REVIEW AND LOCATOR VALIDATION REMAIN OPEN. DOC-12 v0.3 and v0.4 content above is retained unchanged. This addendum corrects only the upload-pending statements in v0.4 using fresh Library listing evidence.


### 13.1 Verified DOC-00 v0.2 artifact

DOC-00_Document_Control_Source_of_Truth_v0.2_DRAFT.docx is PRESENT in the Master Documents Library at /Arsip Proyek POS SaaS/Master Documents/DOC-00_Document_Control_Source_of_Truth_v0.2_DRAFT.docx. Library file ID: libfile_067297bee99c8191a8ba1073f4295a78. Backing file ID: file_000000004f948207b4ced1303fd66555. Observed size: 39,911 bytes. Fresh Library listing and successful full-text read confirmed presence and contents. Status remains DRAFT v0.2.


### 13.2 Verified DOC-12 v0.4 artifact

DOC-12_Master_Archive_Document_Index_v0.4_DRAFT.docx is PRESENT in the Master Documents Library at /Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.4_DRAFT.docx. Library file ID: libfile_38e0ed1ede288191af65c97cc5a02de2. Backing file ID: file_0000000083c48207827fe41cfec4811f. Observed size: 67,388 bytes. Fresh Library listing confirmed presence; a full-text read confirmed the appended v0.4 snapshot and governance content. The v0.4 statement that upload verification was pending is superseded by this v0.5 evidence note.


### 13.3 Current status and checkpoint

ST5-06.11 — DOC-00/DOC-12 append-only update — COMPLETE. DOC-00 v0.2 and DOC-12 v0.4 are uploaded and verified in Library. DOC-00 v0.3 and DOC-12 v0.5 are the append-only verification addenda prepared to record this final state; their own Library upload status is to be verified after upload.

ST5-06.12 documentation PR preparation, ST5-06.13 documentation CI, ST5-06.14 review and explicit user merge approval, and ST5-06.15 merge/post-merge verification remain NOT STARTED. ST5-07 through ST5-15 and ST5-16 remain NOT STARTED.

No SHA-256 recomputation was performed. The 231-file manifest remains the historical integrity baseline; this addendum does not modify it or claim content review of all indexed files.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE. Stage 5 remains documentation-only; Stage 6 remains NOT AUTHORIZED. No implementation, Production, GitHub branch, PR merge, or deployment authorization is created. DOC-12 v0.5 remains DRAFT / REVIEW REQUIRED.


## DOC-12 v0.6 — Final Library Verification Addendum

Master Archive & Document Index | POS SaaS Multi-Usaha v3.0 | 17 November 2026

Current controlled revision: DRAFT v0.6 — APPEND-ONLY LIBRARY VERIFICATION UPDATE; CONTENT REVIEW AND LOCATOR VALIDATION REMAIN OPEN. DOC-12 v0.3, v0.4 and v0.5 content above is retained unchanged.


### 14.1 DOC-12 v0.5 upload verification

DOC-12_Master_Archive_Document_Index_v0.5_DRAFT.docx is PRESENT in the Master Documents Library at /Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.5_DRAFT.docx. Library file ID: libfile_a644744c1f1481919d98db33a173c4a2. Backing file ID: file_000000004a548211bf69bdd4b915b8f3. Observed size: 67,962 bytes. Fresh Library listing and successful full-text read confirmed the artifact and its appended verification record.


### 14.2 Controlled status clarification

The statement in Section 13.3 that DOC-12 v0.5 upload status was pending is a time-specific pre-upload checkpoint. It is superseded by this Section 14.1 verification evidence. No prior snapshot or historical statement is erased.

ST5-06.11 — append-only DOC-00/DOC-12 updates — COMPLETE. DOC-00 v0.2/v0.3 and DOC-12 v0.4/v0.5 are present and verified in Library. This workflow completion does not approve the content as final or authorize GitHub migration.

ST5-06.12 documentation PR preparation, ST5-06.13 documentation CI, ST5-06.14 review and explicit user merge approval, and ST5-06.15 merge/post-merge verification remain NOT STARTED. DB_PUSH_BLOCKED: ACTIVE. Stage 5 remains documentation-only; Stage 6 remains NOT AUTHORIZED.

No SHA-256 recomputation, content-wide audit, claim-level locator closure, physical schema verification, implementation/test verification, Production verification, GitHub path approval, or PR merge is claimed. DOC-12 v0.6 remains DRAFT / REVIEW REQUIRED.


## 15. Append-only GitHub publication and current DOC-11 cross-reference — 18 November 2026

This dated addendum records a later, narrowly scoped user authorization to publish DOC-12 after completion and post-merge verification of DOC-11 PR #29. It does not rewrite any prior snapshot or authorize blanket Stage 5 archive migration.

- **DOC-12 source artifact:** `DOC-12_Master_Archive_Document_Index_v0.6_DRAFT.docx`, present in `/Arsip Proyek POS SaaS/Master Documents/`.
- **Approved repository destination:** `docs/09-archive-index/MASTER-ARCHIVE-DOCUMENT-INDEX.md`. This extends the existing `docs/` folder sequence after DOC-00–DOC-10 and DOC-11's `docs/08-project-control/` placement. No existing directory or file is renamed, moved, deleted or overwritten.
- **DOC-11 current published artifact:** `docs/08-project-control/PROJECT-ROADMAP-RELEASE-GATES.md`, based on DOC-11 v0.3 DRAFT and merged through PR #29 at commit `61926b56dc4dde6939b61b5fe20a60dd2c9c21d4`. The older DOC-11 v0.2 statements in Sections 6, 12.3, 13 and 14 remain historical snapshots and are not silently rewritten.
- **Cross-reference:** DOC-11 roadmap and release-gate working master: [Project Roadmap & Release Gates](../08-project-control/PROJECT-ROADMAP-RELEASE-GATES.md).
- **Manifest integrity boundary:** the 231 data rows in Appendix A were compared, in source order and across all six indexed fields (M231 ID, folder, filename, bytes, manifest SHA-256, exact Library path), with `03_MANIFEST_SHA256_231_FILE_POS_SAAS_v1.0_2026-11-16.csv`. The comparison found 231 rows and zero field mismatches. This is a transcription consistency check only; it is not a new file hash computation, rehash, or independent verification of the 231 source files.
- **Review boundary:** manifest membership, filename/path metadata and a recorded SHA-256 value do not prove that the corresponding file content has been reviewed, approved, accepted, or made canonical. The 231-row baseline and all prior status distinctions remain unchanged. GOV-OPEN-02 is not closed by this publication.
- **Status:** DOC-12 remains DRAFT / REVIEW REQUIRED. Publication does not satisfy Stage 4.9 acceptance, close Stage 4.7.8, certify all 231 source contents, or authorize implementation.
- **Historical path proposal:** the earlier proposal `docs/00-governance/DOCUMENT_INDEX.md` remains preserved as a historical, unapproved proposal at the time it was recorded. This later scoped approval selects only the destination stated above.
- **Workflow boundary:** this addendum records the approved destination and the DOC-11 prerequisite. DOC-12 PR review, CI, merge approval and post-merge read-back are separate steps. Merge requires explicit user approval after final diff and CI review.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket archive migration NOT AUTHORIZED; Stage 6 NOT AUTHORIZED. No database, application, backend, CI workflow, Vercel, deployment or Production changes are included.


## 16. Append-only source-ID, publication and current-status reconciliation — 19 November 2026

This addendum corrects a source-ID range ambiguity in the historical DOC-12 index and clarifies the current publication/version and status reading rules. It preserves the 231-row manifest, all prior DOC-12 sections and historical snapshots. It does not authorize archive mutation or change source-native decisions.

### 16.1 Stage 4.7.6 source-ID correction

The Stage 4.7.6 Root & Additional Artifacts Source Mapping v0.1, §§2.1–2.2 and §6, is the controlling mapping for the root and post-manifest additional-artifact IDs. Its exact allocation is:

| Artifact group | Correct source IDs | Manifest relationship | Count |
|---|---|---|---:|
| Root files included in the 231-row baseline | ROOT-001–ROOT-003 | Included in manifest as three ROOT records | 3 |
| Root files outside the 231-row baseline | ROOT-004–ROOT-005 | Manifest file and post-manifest integrity report; neither is one of the 231 listed source paths | 2 |
| Stage 2.1–2.7 and Stage 3.1–3.6 Audit artifacts | ADD-001–ADD-013 | Thirteen post-manifest Audit artifacts | 13 |
| Total post-manifest additions in Stage 4.7.6 scope | ROOT-004, ROOT-005 and ADD-001–ADD-013 | Two root artifacts plus thirteen Audit artifacts | **15** |

Accordingly, the ranges in DOC-12 §4 and §7 that describe **ADD-001–ADD-015** or **ADD-014–ADD-015** are historical transcription/labeling errors. The source mapping does not define ADD-014 or ADD-015. The correct set is ROOT-001–ROOT-005 and ADD-001–ADD-013, with exactly 15 post-manifest additions consisting of ROOT-004/ROOT-005 plus ADD-001–ADD-013. The three later Stage 4.7.3–4.7.5 mapping outputs remain separate and are not part of those 15 additions.

This correction is an identifier clarification only. It does not change the 231 manifest IDs, rename any file, change any source status, or imply content review of the 15 additional artifacts.

### 16.2 Manifest transcription verification

A bounded field-by-field comparison was performed between the 231 data rows in Appendix A and the exact Library source CSV `03_MANIFEST_SHA256_231_FILE_POS_SAAS_v1.0_2026-11-16.csv`.

- Source CSV data rows: **231**; Appendix A data rows: **231**.
- Compared fields in source order: index/derived M231 ID, folder, filename, size_bytes, manifest SHA-256 value and exact Library path.
- Row/field mismatches: **0**.
- Unique exact Library paths: **231**; duplicate paths: **0**.
- Blank manifest SHA-256 values: **0**.
- One repeated SHA-256 value occurs on two separately named/path entries, source CSV indexes 115 and 116 (DOC-12 M231-116 and M231-117). This agrees with the Stage 4.7.6 integrity report's one byte-identical pair / 230 unique hash result. Both entries remain distinct historical artifacts and must be preserved.

This is a transcription comparison against the supplied manifest, not a new hash computation, rehash of the 231 files, byte-level verification of the source files, or content review. The 231-row manifest remains the historical integrity baseline for its stated snapshot.

### 16.3 Current publication, version and historical cover reading rule

DOC-12 §15 records the later approved and completed package-specific publication at `docs/09-archive-index/MASTER-ARCHIVE-DOCUMENT-INDEX.md`, merged through PR #30 at `38197d2e833be6007744218278f1b9cb44027af0`. Therefore:

- The cover's “Proposed GitHub path (not approved): `docs/00-governance/DOCUMENT_INDEX.md`” is the preserved pre-publication proposal, not the current destination. The current published working-master path is the path stated in §15.
- The cover's DRAFT v0.2 status is the historical base-artifact status. The latest Library source artifact verified for this document is DOC-12 v0.6 DRAFT at `/Arsip Proyek POS SaaS/Master Documents/DOC-12_Master_Archive_Document_Index_v0.6_DRAFT.docx`; the repository Markdown is a published working-master transcription with append-only addenda through this §16.
- DOC-12 §§6 and 10 retain their Stage 4.8/version and Stage 4.9 “NOT STARTED” snapshot language as historical base text. Later DOC-12 addenda, DOC-00 control records and the active Master Checklist v2.0 govern current navigation and status. The current Stage 4.9 disposition remains **PARTIAL — ACCEPTANCE NOT MET**, not NOT STARTED.
- The older Master Project Index §15 statement that DOC-10 is not declared published is a dated navigation snapshot. Current DOC-10 publication and its later clarification are recorded in DOC-10 §11 and active Master Checklist §50; the Master Checklist v2.0 remains the sole active work-order authority.

No historical cover, table, snapshot or prior addendum is deleted or silently rewritten.

### 16.4 Current inventory and content-review boundary

- The 249-path count in DOC-12 §2 and Stage 4.7.6 is a dated inventory snapshot, not a claim about the current Library count and not a replacement manifest.
- The 231-row comparison establishes transcription fidelity only. It does not close GOV-OPEN-02 or certify the source contents.
- The current Master Project Index §14/§16 and DOC-00 §§25.3, 26 and 27 record the narrow M231-223 / DOC02-G03 direct locator recovery. Only that identified source is recorded as content reviewed in this index; the other 230 manifest entries are not promoted to CONTENT REVIEWED by this audit.
- Stage 4.7.8 remains PARTIAL — GATE NOT PASSED; Stage 4.9 remains PARTIAL — ACCEPTANCE NOT MET; GOV-OPEN-02 remains PARTIAL. DOC-12 remains DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.

### 16.5 Audit outcome and governance

DOC-12 bounded read-only audit: **COMPLETE — ONE SOURCE-ID CORRECTION AND ONE PUBLICATION/VERSION READING CLARIFICATION JUSTIFIED; MANIFEST TRANSCRIPTION MATCHES 231/231 ROWS**.

Dependencies newly closed: **0**. FIX decisions changed: **0**. Source-native status promotions/demotions: **0**. Canonical/final/accepted status: **NOT PROMOTED**.

Controls remain: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed.


## 17. Append-only current navigation authority reconciliation — 19 November 2026

This addendum updates only the current navigation interpretation after Master Checklist v2.0 was retired as the active workflow. It does not change the 231-row manifest transcription, content-review statuses, source identities, DOC-12 index records, archive integrity findings or Stage 4.9 acceptance result.

### 17.1 Current routing authority

DOC-12 §16.3's references to the “active Master Checklist v2.0” as the current navigation authority are historical snapshots. Master Checklist v2.0 is CLOSED FOR ACTIVE WORKFLOW / SUPERSEDED FOR NAVIGATION under its append-only §58.

The active corrective-documentation worklist is docs/00-governance/CORRECTIVE-DOCUMENTATION-WORKLIST.md, merged through PR #81 at 041a75c838b7dc9553552cf56fb42c1d0d826b47 and verified by post-merge read-back from main. Use it for CW-01–CW-22 sequencing and current corrective-work status. DOC-00 MASTER-PROJECT-CONTROL.md §29 governs project-control context and the separation between control-plane authority and task routing.

### 17.2 Index and evidence authority preserved

- DOC-12 remains an inventory/index document; it does not become the active work checklist or override source-native decisions.
- The 231-row manifest remains a historical integrity/transcription baseline. Its 231/231 transcription match is not a rehash, byte-level source verification or per-file content review.
- GOV-OPEN-02 remains PARTIAL. Only M231-223 / DOC02-G03 is recorded as content reviewed in the bounded evidence described in §16; the other 230 manifest entries are not promoted to CONTENT REVIEWED.
- Stage 4.7.8 remains PARTIAL — GATE NOT PASSED; Stage 4.9 remains PARTIAL — ACCEPTANCE NOT MET. DOC-12 remains DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.

### 17.3 Preservation and governance

The references in §16.3 to the former active checklist and the references in earlier sections to historical Master Checklist snapshots are retained as historical context. This addendum supplies the current reading rule without deleting or rewriting prior rows, snapshots or evidence.

Controls remain READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 blanket GitHub/archive migration NOT AUTHORIZED; Stage 6 implementation NOT AUTHORIZED. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed.
