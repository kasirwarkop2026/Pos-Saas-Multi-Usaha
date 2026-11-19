# DOC-06 — REQUIREMENTS & TRACEABILITY MASTER

**POS SaaS Multi-Usaha v3.0**  
**Version:** 0.2  
**Revision:** 0.2.1 — structural heading-numbering correction only  
**Date:** 17 November 2026  
DRAFT — RECONCILED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL /
NOT FINAL

## Document control

| Field                | Value                                                                                                  |
|----------------------|--------------------------------------------------------------------------------------------------------|
| Project              | POS SaaS Multi-Usaha v3.0                                                                              |
| Version              | 0.2                                                                                                    |
| Date                 | 17 November 2026                                                                                       |
| Status               | DRAFT — RECONCILED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL                        |
| Mode                 | READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE                                                      |
| Previous version     | DOC-06 v0.1 — preserved as historical version                                                          |
| Proposed GitHub path | `docs/05-requirements-traceability/MASTER_TRACEABILITY.md` — target used by the separately authorized DOC-06 PR #16; this document does not authorize other migrations |
| Revision note        | v0.2.1: structural heading-numbering correction only; no decision, status, evidence, or scope changes. |

## 1. Tujuan dan ruang lingkup

DOC-06 menjadi master traceability untuk menghubungkan kebutuhan produk
dan kategori Business, workflow operasional, module eligibility,
capability/action, role eligibility dan permission, object/geographic
scope, data classification dan purpose, approval/SoD/compliance,
server-side authorization, serta test catalogue dan retained evidence.

DOC-06 bukan pengganti sumber primer atau approval addendum; bukan
approval baru; bukan final permission catalogue, module/action/role
grant matrix, bukti implementasi server authorization/RLS, bukti test
execution/PASS, atau persetujuan migrasi GitHub, Stage 5, Stage 6,
maupun perubahan Production.

## 2. Otoritas sumber dan batas penggunaan

| Sumber                               | Peran                                                     | Batas otoritas                                |
|--------------------------------------|-----------------------------------------------------------|-----------------------------------------------|
| Stage 3.1 Category Decision Register | Baseline kategori dan workflow                            | Bukan permission matrix                       |
| Stage 3.2 Master FIX Register        | Indeks keputusan FIX                                      | FIX hanya berlaku pada scope eksplisit        |
| Stage 3.3 Master OPEN Register       | Dependency dan closure criteria                           | Pencatatan bukan penutupan                    |
| Stage 3.4 Conflict/Version Register  | Supersession dan konflik versi                            | Tidak memilih canonical otomatis              |
| Stage 3.5 Traceability Register      | Baseline traceability                                     | Crosswalk teknis dan test evidence masih OPEN |
| Stage 3.6 Consolidation Audit        | Konsistensi Stage 3.1–3.5                                 | PASS WITH OPEN DEPENDENCIES                   |
| Audit 2.2–2.7                        | Blueprint, ERD/A12, Authorization, RMD, REC, Cross-Domain | Tidak otomatis membuktikan implementasi       |
| REC-06                               | Workflow-to-capability overlay                            | PARTIAL / OPEN / CANDIDATE                    |
| Stage 4.7.8                          | Source locator dan routing audit                          | PARTIAL; bukan exhaustive verification        |
| Stage 4.9.9                          | Claim locator/backlink audit                              | PARTIAL — ACCEPTANCE NOT MET                  |

- Keputusan mengikuti primary source, versi, erratum, approval, dan
  scope yang tepat.

- Register konsolidasi tidak menggantikan primary approval.

- CONTENT REVIEWED atau METADATA VERIFIED bukan status approval
  keputusan.

- Supersession hanya berlaku pada bagian yang eksplisit.

- Jangan mempromosikan CANDIDATE, PROPOSED, OPEN, REVIEW, PARTIAL, atau
  UNVERIFIED tanpa bukti dan approval.

- Jangan mengarang relasi atau hasil yang tidak tersedia.

## 3. Required end-to-end traceability chain

Category → Workflow → Module → Capability/Action → Scope → Data/Purpose
→ SoD/Approval → Server Authorization → Test Evidence

Setiap node dan edge memerlukan stable ID/source locator, status
terpisah, primary source dan versi, scope keputusan/supersession
lineage, owner/reviewer/approver bila ditetapkan, serta technical
evidence bila tersedia. Relasi tanpa dukungan sumber harus ditandai NOT
MAPPED atau OPEN.

## 4. Traceability status vocabulary

| Status                    | Makna                                              | Bukti minimum                         |
|---------------------------|----------------------------------------------------|---------------------------------------|
| FIX / APPROVED CONCEPTUAL | Keputusan konseptual disetujui pada scope tertentu | Primary approval dan scope            |
| CANDIDATE / PROPOSED      | Usulan belum final                                 | Proposal; bukan grant                 |
| OPEN / REVIEW / TODO      | Belum diputuskan/diverifikasi                      | Gap ID dan closure criteria           |
| PARTIAL                   | Sebagian relasi/evidence tersedia                  | Bagian tersedia dan belum tersedia    |
| NOT MAPPED                | Relasi belum terbukti                              | Tidak boleh inferensi                 |
| UNVERIFIED                | Belum berhasil diverifikasi                        | Locator dan batas verifikasi          |
| UNRECOVERED               | Sumber belum ditemukan                             | Recovery record dan keterbatasan      |
| DESIGNED                  | Skenario ditulis                                   | Test specification                    |
| IMPLEMENTED               | Executable test tersedia                           | Test code/reference dan build         |
| EXECUTED                  | Test dijalankan                                    | Run ID, waktu, environment            |
| PASSED / FAILED           | Hasil aktual                                       | Actual result dan retained evidence   |
| EVIDENCED                 | Artefak hasil disimpan                             | Evidence URI/artifact dan reviewer    |
| RETESTED                  | Test ulang setelah remediation                     | Finding asal, remediation, retest run |

DESIGNED tidak sama dengan IMPLEMENTED, EXECUTED, PASSED, EVIDENCED,
atau RETESTED.

## 5. Category and workflow baseline

| Category | Kategori                       | Workflow baseline  | Keputusan dan batas                                  |
|----------|--------------------------------|--------------------|------------------------------------------------------|
| CAT-01   | Retail/Toko                    | 12                 | FIX konseptual sesuai RMD-57                         |
| CAT-02   | Grosir/Distributor             | 14                 | FIX konseptual sesuai RMD-58                         |
| CAT-03   | F&B/Restoran/Kafe              | 14                 | FIX konseptual sesuai RMD-59                         |
| CAT-04   | Jasa/Service Provider          | 14                 | FIX konseptual sesuai RMD-60                         |
| CAT-05   | Salon/Beauty                   | 14                 | FIX konseptual sesuai RMD-61                         |
| CAT-06   | Manufaktur/Produksi            | 14                 | FIX konseptual sesuai RMD-62                         |
| CAT-07   | Rental/Penyewaan               | 14                 | FIX konseptual sesuai RMD-63                         |
| CAT-08   | Apotek/Toko Kesehatan          | 14                 | Regulated workflow NOT READY                         |
| CAT-09   | Laundry                        | 14                 | FIX konseptual sesuai RMD-65                         |
| CAT-10   | Education/Kursus               | 14                 | E-01–E-03 FIX; E-04 OPEN                             |
| CAT-11   | Hotel/Penginapan               | 16                 | H-01–H-03 FIX; H-04 OPEN                             |
| CAT-12   | Lainnya/Belum Diklasifikasikan | 14                 | Temporary classification/exception; fail-closed      |
| CAT-13   | Parfum/Fragrance               | RF-01–10; FM-01–12 | Retail/Refill dan Formulation/Manufacturing terpisah |

### 5.1 Category-specific boundaries

- Pharmacy: credential, jurisdiction, prescription/dispensing, legal,
  dan compliance gate wajib diverifikasi; regulated workflow NOT READY
  sebelum bukti tersedia.

- Education: E-01–E-03 FIX konseptual. Keputusan untuk mempertahankan
  rincian residual E-04 sebagai OPEN telah disetujui; status rincian
  teknis E-04 tetap OPEN. Student/minor,
  guardian consent, safeguarding, dan assessment integrity safeguards
  tetap wajib diverifikasi.

- Hotel: H-01–H-03 FIX konseptual. Keputusan untuk mempertahankan
  rincian residual H-04 sebagai OPEN telah disetujui; status rincian
  teknis H-04 tetap OPEN. Guest identity,
  room/property scope, safety/readiness, dan folio/refund safeguards
  tetap perlu diverifikasi.

- Lainnya: temporary classification dan exception route; fail-closed;
  tidak memberi blanket Manager, Role, atau Module grant.

- Parfum: RF-01–RF-10 Retail/Refill dan FM-01–FM-12
  Formulation/Manufacturing; tidak digabung menjadi satu workflow/grant.

### 5.2 RMD-56 version control

- RMD-56 v1.2 memiliki beberapa varian yang belum canonical.

- Varian A dan A-copy identik; B dan C berbeda.

- R56-D01–D12 tidak otomatis memilih salah satu varian.

- Tidak ada pemilihan canonical tanpa keputusan document-control
  tersendiri; historical sources dipertahankan.

## 6. Module, action, dan permission mapping

| Relasi                                    | Status                                        |
|-------------------------------------------|-----------------------------------------------|
| Category → Workflow                       | FIX konseptual sesuai sumber                  |
| Workflow → M01–M21                        | NOT MAPPED / OPEN kecuali disetujui eksplisit |
| Module → Capability/Action                | CANDIDATE / PARTIAL                           |
| Capability/Action → Stable Permission Key | OPEN                                          |
| Permission Key → Role Eligibility/Grant   | OPEN / NOT APPROVED                           |
| UI Page/Menu → Permission                 | PROPOSED                                      |

- M01–M21 tetap DRAFT/CANDIDATE/NOT FINAL/NOT FIX.

- Action family bukan stable permission key; role eligibility bukan
  permission grant.

- Module eligibility bukan authorization; UI visibility bukan
  server-side enforcement.

- Nama workflow/module yang mirip bukan dasar untuk mengisi mapping.

## 7. Scope, data classification, dan purpose

Setiap protected action perlu mengidentifikasi Business/tenant,
resource/object dan lifecycle state, object scope,
geographic/organizational scope, assignment scope, grant
state/expiry/revocation, serta data classification dan purpose.

Need-to-know, minimum necessary access, dan D0–D4 merupakan baseline
konseptual. Scope hierarchy/inheritance, parent-child/sibling
boundaries, multi-scope/delegation, resolver behavior, assignment
lifecycle, field-level classification, field allowlist, purpose
catalogue, masking, export, retention, dan jurisdiction rules tetap
OPEN/PARTIAL. Tidak boleh menyatakan field-level implementation telah
diverifikasi.

## 8. Approval, SoD, dan compliance

- No self-approval; requester dan independent approver harus aktor
  manusia berbeda.

- Approval bukan eksekusi.

- Request, review, approve, execute, post, reconcile, reverse, dan
  export dipisahkan sesuai risk.

- Non-waivable obligations tidak dapat diabaikan melalui exception.

- Exception memerlukan klasifikasi kewajiban, approver berwenang, dan
  immutable approval events.

Per-action risk tier, threshold, approver eligibility, SoD matrix final,
timeout/expiry/cancellation/escalation/delegation/re-authentication,
credential/compliance evidence, enforcement, dan negative test evidence
masih OPEN.

## 9. Server authorization dan tenant boundary

Setiap protected request harus memvalidasi actor identity/account state;
active Business membership atau ownership authority; target business_id
dan tenant boundary; approved permission/capability/action; resource
identity/state; effective object/geographic/organizational scope; data
classification/purpose/relationship; approval lifecycle, threshold, SoD
dan independent approver; grant expiry/revocation;
credential/jurisdiction/compliance gate; serta audit event dan decision
outcome.

Client-supplied business_id bukan bukti authority. UI menu hiding bukan
server authorization. Prinsip server-side authorization dan tenant
isolation tetap FIX pada scope konseptualnya.

Stable permission catalogue, scope resolver, API policy mapping, RLS
policies, database constraints, middleware/service enforcement,
integration test execution, dan runtime security evidence tetap OPEN/NOT
VERIFIED.

## 10. Test catalogue dan evidence register

### 10.1 Inventaris 133 Test ID

| Keluarga | Rentang | Jumlah | Status sumber                     |
|----------|---------|--------|-----------------------------------|
| XCAT-NT  | 01–14   | 14     | Conceptual                        |
| SC       | 01–15   | 15     | Conceptual source/test references |
| SOD-SA   | 01–18   | 18     | Conceptual source/test references |
| R05-RPA  | 01–18   | 18     | Conceptual source/test references |
| ERD96-SA | 01–10   | 10     | Limited historical evidence       |
| MS       | 01–16   | 16     | UNRECOVERED                       |
| G08-T    | 01–18   | 18     | UNRECOVERED                       |
| G09-T    | 01–24   | 24     | UNRECOVERED                       |
| TOTAL    |         | 133    |                                   |

- 65 ID memiliki sumber konseptual; 10 ID memiliki bukti historis
  terbatas; 58 ID belum ditemukan sumber primernya.

### 10.2 Namespace dan provenance

- Tidak ada dasar untuk menyatakan seluruh 133 test sudah dieksekusi
  atau PASS.

- Sumber primer SoD memakai ID `SA-01–SA-18`; keluarga katalog DOC-06
  memakai `SOD-SA-01–SOD-SA-18`. Perlakukan keduanya sebagai source ID
  dan catalogue alias yang dipetakan secara eksplisit; jangan mengganti
  ID primer atau menggabungkannya dengan `ERD96-SA-01–10`.

- ERD96-SA-01–10 adalah keluarga historis terpisah; jangan digabung
  dengan SOD-SA. Status historis dapat berupa NOT RUN, NOT ASSESSED, NOT
  PRESENT, atau NOT TESTABLE.

- SC-01–15 merujuk pada Scope Dimension Object & Geographic Boundary
  Matrix; jangan campur dengan namespace SC pada konteks audit lain.

- MS-01–16, G08-T01–18, dan G09-T01–24 tetap dipertahankan tanpa
  mengarang deskripsi/expected result.

### 10.3 Test execution status

| Kriteria                  | Status                   |
|---------------------------|--------------------------|
| Test ID inventory         | COMPLETE                 |
| Source recovery           | PARTIAL — 58 UNRECOVERED |
| Conceptual scenarios      | AVAILABLE                |
| Executable implementation | NOT VERIFIED             |
| Runtime execution         | NOT EVIDENCED            |
| PASS/FAIL result          | NOT ESTABLISHED          |
| Retained evidence         | NOT ESTABLISHED          |
| Remediation/retest        | NOT ESTABLISHED          |

Tenant isolation/RLS, server authorization, SoD, sensitive data,
Pharmacy credential gate, Education/Hotel safeguards, dan REC-08
remediation/retest tidak boleh dinyatakan dieksekusi tanpa retained
evidence.

## 11. Minimum test traceability record

- test_id; category_id; workflow_id; module_id; action_id; actor_role;
  permission_key; business_id; resource_id; object_scope;
  geographic_scope; data_class; purpose; object_state; grant_state;
  approval_state; credential_state; expected_result; actual_result;
  build_id; environment; executed_at; evidence_uri; reviewer.

Field yang belum disetujui atau belum tersedia harus tetap unresolved.

## 12. Open traceability gap register

| Gap ID      | Missing relationship/evidence                | Dependency                   | Closure requirement                                                    |
|-------------|----------------------------------------------|------------------------------|------------------------------------------------------------------------|
| TRC-OPEN-01 | Workflow → M01–M21                           | AUTH-OPEN-01/02/04           | Approved module catalogue dan crosswalk                                |
| TRC-OPEN-02 | Capability/action dan stable permission keys | AUTH-OPEN-05/23/27           | Approved action taxonomy dan stable keys                               |
| TRC-OPEN-03 | Role eligibility → module/capability         | AUTH-OPEN-02/23; RMD-OPEN-06 | Approved eligibility matrix dan negative cases                         |
| TRC-OPEN-04 | Scope per action/resource                    | AUTH-OPEN-06/24              | Resolver, hierarchy, assignment, expiry/revocation dan tests           |
| TRC-OPEN-05 | Field-level data/purpose                     | AUTH-OPEN-08/12/27           | Field inventory, D0–D4, masking/export/retention/jurisdiction          |
| TRC-OPEN-06 | SoD/approval/threshold/approver              | AUTH-OPEN-07/14/15/21/22/26  | Risk matrix dan independent approver lifecycle                         |
| TRC-OPEN-07 | Server/API/RLS linkage                       | AUTH-OPEN-27; ERD-OPEN-01/03 | Physical design, policy mapping, runtime evidence                      |
| TRC-OPEN-08 | Test execution evidence                      | AUTH-OPEN-10; REC-08         | Catalogue, execution records dan retained artifacts                    |
| TRC-OPEN-09 | Education E-04 dan Hotel H-04                | RMD-OPEN-02/03               | End-to-end workflow, data, scope, SoD dan test mapping                 |
| TRC-OPEN-10 | Parfum RF/FM                                 | RMD-OPEN-07                  | Approved separate crosswalk                                            |
| TRC-OPEN-11 | Lainnya safe-mode lifecycle                  | RMD-OPEN-04                  | State machine, allowlist, reviewer evidence dan fail-closed tests      |
| TRC-OPEN-12 | Pharmacy credential/regulatory               | AUTH-OPEN-09; RMD-OPEN-09    | Jurisdiction evidence dan eligibility tests                            |
| TRC-OPEN-13 | Inventory movement/costing                   | ERD-OPEN-03/05–27            | Physical dictionary, event identity, invariants, concurrency dan tests |
| TRC-OPEN-14 | Ownership dan Manager authority              | BPL-OPEN-06; AUTH-OPEN-25    | Ownership resolver, dispute/recovery dan approval lifecycle            |
| TRC-OPEN-15 | REC provenance/security evidence             | REC-02/03/04/08; GOV-OPEN-08 | Recover evidence dan preserve snapshot/source boundaries               |

Seluruh ID asli Stage 3.3 tetap menjadi pengendali. DOC-06 tidak membuat
pengganti atau menutup gap hanya dengan mencantumkannya.

## 13. REC-06 dan Audit 2.7 cross-domain dependencies

### 13.1 REC-06

REC-06 memiliki Workflow-to-Capability Traceability Matrix v0.1 dan
Permission Catalogue Overlay v0.1. Status REC-06 tetap PARTIAL / OPEN /
CANDIDATE.

| Acceptance criterion                     | Status                        |
|------------------------------------------|-------------------------------|
| AC-06-01 Resource/object per workflow    | PARTIAL                       |
| AC-06-02 Submodule decomposition         | OPEN                          |
| AC-06-03 Workflow → M-ID                 | NOT MET                       |
| AC-06-04 Action/object/lifecycle state   | PARTIAL                       |
| AC-06-05 Role/function → standard role   | PARTIAL                       |
| AC-06-06 Object/geographic scope         | OPEN                          |
| AC-06-07 Data classification/purpose     | OPEN                          |
| AC-06-08 SoD/approval                    | OPEN                          |
| AC-06-09 Negative tests                  | PARTIAL; execution not proven |
| AC-06-10 Provenance per row              | PARTIAL                       |
| AC-06-11 Conceptual consistency with FIX | PASS                          |
| AC-06-12 New approval decisions          | NOT PRESENT                   |

Education dan Hotel memiliki 14 dan 16 workflow; seluruh 30 workflow
belum memiliki approved specific M-ID mapping. M01–M21 tetap CANDIDATE.
REC-06 tidak memberikan permission grant.

### 13.2 Audit 2.7

Audit 2.7 memiliki 16 temuan XDOM-01–16 dengan status PASS WITH OPEN
RECONCILIATION / EVIDENCE DEPENDENCIES. Education/Hotel approval
konseptual; Manager bukan akses universal; role, module, capability,
scope, data, SoD, authorization adalah layer berbeda; Pharmacy NOT
READY; Lainnya fail-closed; Parfum dua track; REC-06 bukan final
crosswalk; audit dokumentasi bukan implementation/security readiness.
XDOM-01–16 dan seluruh XDOM-OPEN items tetap dipertahankan. Tidak ada
FIX dibuka kembali. Ringkasan ini membuktikan cakupan temuan, bukan
locator individual per XDOM; exact source/page/section locator untuk
setiap temuan tetap OPEN sampai diverifikasi.

## 14. Provenance, locator, dan source lineage

### 14.1 Stage 4.7.8

Stage 4.7.8 membuktikan inbound source routing DOC-00–DOC-12 terdaftar,
DOC-06 memiliki inbound source family, sejumlah locator primer
diperiksa, dan routing dua arah tersedia pada tingkat register.

Status: PARTIAL — REGISTER-LEVEL ROUTING PASS; SOURCE/CONTENT-LEVEL
CLOSURE BLOCKED. Ini bukan exhaustive locator verification.

### 14.2 Stage 4.9.9

Status: PARTIAL — ACCEPTANCE NOT MET. Terdapat 13 master documents;
master-to-source references dan register-level routes tersedia pada
tingkat berbeda; exact claim-level locators belum lengkap; backlink
konten sumber ke master tidak ditemukan pada sepuluh sumber primer yang
disampel; audit tidak mengklaim pemeriksaan menyeluruh seluruh arsip.

Stage 4.9.10 telah dilaksanakan sebagai Path/Topology Conflict Audit;
hasilnya PARTIAL dan konflik P410-01–P410-09 tetap OPEN atau
OPEN / CONTROL. Tidak ada path yang menjadi canonical secara otomatis.

### 14.3 Stage 4.9.11 — Final re-audit dan acceptance evaluation

Laporan Stage 4.9.11 v0.1 tanggal 16 November 2026 melakukan targeted
re-audit atas 13 master DOC-00–DOC-12, dengan batasan bahwa audit ini
bukan byte-for-byte comparison seluruh draft, bukan audit halaman demi
halaman atas seluruh 231 manifest files/249 historical observed paths,
bukan pemeriksaan seluruh source documents, bukan GitHub inspection,
dan tidak melakukan SHA-256 recomputation, database/code inspection,
test execution, atau Production verification.

**Final Stage 4.9 disposition: PARTIAL — ACCEPTANCE NOT MET.**

Temuan yang dikonsolidasikan:
- S49-F01: CLOSED untuk snapshot awal setelah DOC-11 v0.2 ditemukan
  dan diverifikasi; temuan historis tetap valid pada snapshot asal.
- S49-F02, S49-F03, S49-F04, S49-F06, S49-F07, S49-F08: OPEN.
- S49-F05: CORRECTED — LIMITED SCOPE; koreksi DOC-12 hanya untuk
  DOC-11 path/identity, bukan seluruh inkonsistensi DOC-12.
- P99-01 sampai P99-09: tetap OPEN / NOT MET atau OPEN / CONTROL
  sesuai disposition laporan.
- P410-01 sampai P410-09: tetap OPEN atau OPEN / CONTROL sesuai
  disposition laporan.

Acceptance gate Stage 4.9 tetap tidak terpenuhi: claim-level locator
coverage dan content backlinks belum terbukti; status/scope serta
version/topology reconciliation masih PARTIAL; proposed path/topology
approval belum terpenuhi dalam audit tersebut. Stage 4.9.11 bukan
user acceptance dan bukan bukti implementation/security readiness.

**Governance timing:** laporan Stage 4.9.11 mencatat Stage 5 dan Stage 6
NOT AUTHORIZED pada saat laporan diterbitkan. Setelah itu, user memberi
otorisasi terbatas untuk menyiapkan DOC-06 Markdown master pada branch
dan PR #16. Otorisasi terbatas tersebut tidak mengubah hasil Stage 4.9,
tidak mengesahkan semua proposed paths, tidak mengotorisasi migrasi
dokumen lain, dan tidak mengotorisasi Stage 6 atau implementasi.

### 14.4 Provenance limitations

- Exact section/page/decision locator per klaim masih OPEN.

- Exhaustive source locator verification dan actual content backlink
  dari sumber primer masih OPEN.

- Recovery 58 test source IDs masih OPEN.

- REC-02/03/04/08 snapshot dan evidence limitations tetap berlaku.

- REC-06 row-level provenance dan Audit 2.7 individual XDOM locator
  masih perlu diverifikasi.

- A12 dan ERD unresolved source references tetap terbuka.

- Source lineage mencakup Stage 3.1–3.6, Stage 4.7.1–4.7.8, RMD-55–69,
  REC-06, Audit 2.7, dan sumber primer terkait; daftar lineage bukan
  bukti semua klaim diverifikasi.

## 15. G10 acceptance baseline

G10.7 tetap COMPLETE — PARTIAL / ACCEPTANCE NOT MET.

| FAC                                                | Status  |
|----------------------------------------------------|---------|
| FAC-01 Test ID/catalogue traceability              | PARTIAL |
| FAC-02 Primary source and locator                  | PARTIAL |
| FAC-03 Test → category/workflow                    | PARTIAL |
| FAC-04 Workflow → approved module                  | NOT MET |
| FAC-05 Action → role → permission                  | NOT MET |
| FAC-06 Object/lifecycle/scope technical definition | PARTIAL |
| FAC-07 Data class/purpose/field allowlist          | PARTIAL |
| FAC-08 Approval/SoD/credential/compliance          | PARTIAL |
| FAC-09 Implementation/execution/results/retest     | NOT MET |
| FAC-10 No unsupported conflict resolution          | PASS    |

Aggregate: 1 PASS, 5 PARTIAL, 4 NOT MET. G10 tidak dibuka kembali atau
diturunkan tanpa material new evidence. G10.7 bukan bukti DOC-06 atau
seluruh 133 test selesai.

## 16. Acceptance, governance, dan readiness

### 16.1 Acceptance criteria DOC-06

- Setiap kategori/workflow memiliki identifier, source locator, dan
  decision status.

- Setiap module/action/permission/scope edge memiliki approval sumber
  atau ditandai NOT MAPPED/OPEN.

- Role, module, capability, scope, data/purpose, state, dan approval
  tidak dicampur.

- Setiap test memiliki status berbeda dan evidence sesuai tingkat klaim.

- Setiap finding memiliki remediation/retest linkage jika berlaku.

- Semua dependency unresolved tetap terlihat.

- Conflict dan supersession mengikuti sumber pengendali.

- Locator dan provenance limitations dijelaskan.

- Tidak ada status dipromosikan tanpa evidence dan approval.

- Review akhir dan document-control approval telah diperoleh.

### 16.2 Readiness checkpoint

| Tahap                    | Status                                                              |
|--------------------------|---------------------------------------------------------------------|
| Stage 3                  | COMPLETE AS INITIAL DOCUMENTATION CONSOLIDATION — OPEN DEPENDENCIES |
| Stage 4.7.8              | PARTIAL — GATE NOT PASSED                                           |
| Stage 4.8                | DOC-06 v0.2 DRAFT / RECONCILED WORKING MASTER                       |
| Stage 4.9.9              | PARTIAL — ACCEPTANCE NOT MET                                        |
| Stage 4.9.10             | PARTIAL — P410-01–P410-09 OPEN / OPEN CONTROL                        |
| Stage 4.9.11             | PARTIAL — ACCEPTANCE NOT MET                                        |
| Stage 5 GitHub Migration | Limited DOC-06 PR #16 authorization only; no blanket migration approval |
| Stage 6 Implementation   | NOT AUTHORIZED                                                      |

### 16.3 Governance guardrails

- READ-ONLY dan APPEND-ONLY; DB_PUSH_BLOCKED: ACTIVE.

- Tidak ada historical source deletion, move, rename, merge, atau
  overwrite.

- Tidak ada SQL/DDL/DML, schema, migration, RLS/Auth, trigger,
  API/backend, source-code, CI, Vercel, deployment, atau Production
  changes.

- Tidak menggunakan Supabase Preview/Staging.

- Tidak ada FIX decision yang dibuka kembali atau diperluas.

- Tidak ada OPEN/REVIEW/PARTIAL/UNVERIFIED/CANDIDATE yang dipromosikan
  tanpa sumber dan approval.

- Otorisasi DOC-06 PR #16 diberikan secara terpisah oleh user; dokumen
  ini sendiri tidak memberikan otorisasi commit, PR, merge, migrasi
  dokumen lain, atau perubahan implementasi.

END OF DOC-06 v0.2 — RECONCILED WORKING MASTER (REVISION 0.2.1)

Status: DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL

Next: ST5-09.20 — Post-merge verification of the merged DOC-06 Markdown
master and append-only governance checkpoint. This document remains DRAFT,
REVIEW REQUIRED, NOT CANONICAL, and NOT FINAL.


Historical ending above is preserved verbatim as the pre-closeout checkpoint. The following append-only addendum is the current publication and navigation checkpoint.

## 17. Append-only post-merge publication closeout — DOC-06 (17 November 2026)

**Current publication checkpoint:** DOC-06 is COMPLETE — MERGED & VERIFIED for the separately authorized documentation publication package PR #16. This section supersedes the former `Next: ST5-09.20` navigation instruction as a current next-step pointer only; it does not remove that historical checkpoint from the record.

| Item | Verified record |
|---|---|
| Repository | `kasirwarkop2026/Pos-Saas-Multi-Usaha` |
| PR | [#16](https://github.com/kasirwarkop2026/Pos-Saas-Multi-Usaha/pull/16) |
| Merge commit | `e786e98bad62dc969fa4e2508556e6c4362df054` |
| Target path | `docs/05-requirements-traceability/MASTER_TRACEABILITY.md` |
| Changed files | 1 |
| Additions / deletions | 526 / 0 |
| Current main blob SHA | `caebfcf60f20f777e9a0545ecf79bf7d142fe1e9` |

ST5-09 publication and post-merge verification are complete. The PR publication does not establish Stage 4.7.8 or Stage 4.9 acceptance. Retain TRC-OPEN-01–15; the 133 Test ID inventory remains 65 conceptual-source IDs, 10 with limited historical evidence, and 58 UNRECOVERED. No test execution or PASS is established by this publication. Physical schema, RLS/server enforcement, and Production security posture remain outside the evidence established here.

**Current document disposition:** Version 0.2, Revision 0.2.2 working revision (Revision 0.2.1 remains the historical revision recorded at the previous publication checkpoint); DRAFT / RECONCILED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.

DOC-07 PR #18 is recorded as a subsequent documentation publication checkpoint in DOC-00 and DOC-07. This cross-reference is navigational only and does not close DOC-06 dependencies.

### 17.1 Governance boundary

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`. The limited DOC-06 PR #16 authorization did not authorize other document publications, implementation, database changes, CI workflow changes, deployment, or Production changes. Full Stage 5 GitHub migration remains NOT AUTHORIZED as blanket authority; Stage 6 remains NOT AUTHORIZED.

END OF DOC-06 v0.2 — RECONCILED WORKING MASTER (REVISION 0.2.2)

Status: DRAFT / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL

Next: Continue only with a separately authorized work package. No unresolved traceability or source-recovery dependency is closed by this publication.


## 18. Append-only DOC-06 bounded audit — revision and publication-locator reconciliation (19 November 2026)

### 18.1 Audit identity, scope and method

- Owning document: DOC-06 — Requirements & Traceability Master.
- Current main path: `docs/05-requirements-traceability/MASTER_TRACEABILITY.md`.
- Audit base: repository `main` at `4ca94a75e34949dbc35f1e7c4ec4d75e10b470a5`.
- Sections reviewed: DOC-06 §§1–17, including the category/workflow baseline, authorization and scope boundaries, test catalogue, TRC-OPEN-01–15, REC-06 / Audit 2.7, provenance and locator limitations, G10 acceptance baseline, governance and PR #16 post-merge closeout.
- Bounded cross-checks: active Master Checklist v2.0 §§34.4–34.7 and §43; DOC-05 §§20–21; DOC-09 §3D AUTH-OPEN-01–27; DOC-01 Product Blueprint; DOC-02 Category & Workflow Master; DOC-03 System Architecture; DOC-04 ERD & Data Dictionary; and DOC-10 Conflict & Supersession Master.
- Method: read-only current-main review. Historical publication snapshots, current working revision, repository path/blob identity, conceptual traceability, source-native dependencies and implementation/test evidence were treated as separate dimensions.

### 18.2 DOC06-AUD-F01 — cover revision metadata is behind the current working revision

The DOC-06 cover and document-control table identify Revision **0.2.1**, and the cover revision note describes the structural heading-numbering correction. The later publication closeout in §17 explicitly identifies the current working revision as **0.2.2**, states that 0.2.1 is the historical revision at the previous publication checkpoint, and closes with Revision 0.2.2.

Disposition:
- Treat the cover's Revision 0.2.1 and its revision note as retained historical publication metadata.
- For current navigation, the latest working revision evidenced by §17 is **0.2.2**.
- Do not rewrite the historical cover or infer a new substantive requirements revision.
- This is a document-control clarification only; it does not alter requirement content, decision status or acceptance.

### 18.3 DOC06-AUD-F02 — proposed-path label is historical after PR #16 publication

The cover labels `docs/05-requirements-traceability/MASTER_TRACEABILITY.md` as a “Proposed GitHub path”. Section 17 records the same path as the target used by PR #16, its merge commit and post-merge publication verification. The file is present on the current `main` branch at that path.

Disposition:
- The cover's “Proposed GitHub path” wording is retained as historical drafting metadata.
- The path is the active DOC-06 working reference on `main`.
- This clarification does not authorize any other document migration or blanket Stage 5 activity.

### 18.4 DOC06-AUD-F03 — §17 publication blob SHA is not the current main blob

DOC-06 §17 labels `caebfcf60f20f777e9a0545ecf79bf7d142fe1e9` as the “Current main blob SHA”. The current-main read of the same path during this audit returned blob SHA `35a34d19761526605c0e61ee26ea01637a06e9ff`. The latter is the audit-time current blob identity; the former remains the historical PR #16 publication-checkpoint locator.

Disposition:
- Preserve the §17 SHA as the historical publication-checkpoint value.
- For the audit-time current-main file, use blob SHA `35a34d19761526605c0e61ee26ea01637a06e9ff`.
- Do not rewrite §17's historical publication record or imply that a blob SHA alone establishes content acceptance.

### 18.5 Substantive traceability and dependency disposition

The bounded review found no evidence-supported correction to the substantive traceability baseline within the reviewed scope:

- Category/workflow counts and the category-specific Education, Hotel, Pharmacy, Lainnya and Parfum boundaries remain as recorded in DOC-06 §5.
- Workflow-to-module, capability/action-to-stable-key, role eligibility, scope, data/purpose, SoD/approval and server authorization relationships retain their existing NOT MAPPED / CANDIDATE / OPEN / PARTIAL / NOT VERIFIED boundaries.
- REC-06 remains PARTIAL / OPEN / CANDIDATE; AC-06-01–12 retain their §13.1 statuses.
- TRC-OPEN-01–15 remain open at their owning-document statuses. DOC-05 §20 is a derived navigation crosswalk only; DOC-09 §3D remains the controlling consolidated register for AUTH-OPEN-01–27.
- The 133 Test ID inventory remains 65 conceptual-source IDs, 10 with limited historical evidence, and 58 UNRECOVERED. Executable implementation, runtime execution, PASS/FAIL, retained evidence and retest are not established.
- G10.7 remains COMPLETE — PARTIAL / ACCEPTANCE NOT MET; the 1 PASS / 5 PARTIAL / 4 NOT MET aggregate is not promoted.
- Stage 4.7.8 remains PARTIAL — GATE NOT PASSED; Stage 4.9 remains PARTIAL — ACCEPTANCE NOT MET; implementation readiness remains NOT READY.

No source-native dependency was closed, no FIX decision changed, and no approval or implementation status was inferred.

### 18.6 Audit disposition and next routing

- DOC-06 bounded read-only audit: **COMPLETE — THREE DOCUMENT-CONTROL / PUBLICATION-LOCATOR CLARIFICATIONS RECORDED**.
- DOC06-AUD-F01–F03: recorded as historical-revision, active-path and blob-locator clarifications; historical publication text retained.
- Dependencies newly closed: **0**.
- FIX decisions changed: **0**.
- DOC-06 remains Version 0.2 / working Revision 0.2.2; DRAFT / RECONCILED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL.
- DOC-06 conceptual traceability acceptance, source recovery and test-evidence gaps remain open.
- Next work package: **DOC-07 — Security & Evidence Master bounded read-only audit**, following Master Checklist v2.0 §34.4. Read current DOC-07 and only the necessary controlling cross-references; do not repeat completed DOC-06 work without new evidence.

Controls remain unchanged: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized by this audit.


## 19. CW-09 — Append-only Education/Hotel row-level traceability reconciliation (19 November 2026)

**Disposition: PARTIAL — ROW-LEVEL WORKFLOW/OBJECT/ACTION CANDIDATE INDEX RECORDED; DOWNSTREAM AUTHORIZATION AND TEST-EVIDENCE EDGES REMAIN OPEN.** This section adds a source-located navigation layer for the existing Education and Hotel working traceability matrix. It does not approve candidate module IDs, stable permission keys, role grants, scope profiles, data rules, approvers, test execution or implementation.

### 19.1 Source basis and authority

The following sources were directly reviewed for this bounded repair:

| Source ID | Exact source | Locator used | Authority and boundary |
|---|---|---|---|
| SRC-01 | `Review_Education_Kursus_Lembaga_Pendidikan_Manager_Allowlist_Role_Module_Eligibility_RMD-66_v1.0.docx` | §3, pp.2–3 (WF-01–WF-14); §§5–9, pp.3–6 (Manager/role/module recommendations, SoD and OPEN details) | Workflow/object baseline and review details; approval addendum controls E-01–E-04 status |
| SRC-02 | `RMD-66_Education_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | §§1–3, pp.1–2 | E-01/E-02/E-03 FIX conceptual; E-04 and all detailed OPEN items remain OPEN |
| SRC-03 | `Review_Hotel_Penginapan_Manager_Allowlist_Role_Module_Eligibility_RMD-68_v1.0.docx` | §3, pp.2–3 (WF-01–WF-16); §§5–10, pp.3–6 (Manager/role/module recommendations, SoD and OPEN details) | Workflow/object baseline and review details; approval addendum controls H-01–H-04 status |
| SRC-04 | `RMD-68_v1.1_Hotel_Manager_Role_Module_Mapping_Approval_FIX_Addendum_2026-11-14.docx` | §§1–5, pp.1–2 | H-01/H-02/H-03 FIX conceptual; H-04 and all detailed OPEN items remain OPEN |
| SRC-05 | `REC-06_Education_Hotel_Workflow_to_Capability_Traceability_Matrix_v0.1_2026-11-15.md` | §§2–5 (Education rows), §§6–7 (Hotel rows and shared controls), §§8–10 (gap/acceptance register) | Working audit matrix, PARTIAL/OPEN/CANDIDATE; row content is a candidate traceability aid, not an approval |
| SRC-06 | `REC-06_Permission_Catalogue_Overlay_Education_Hotel_v0.1_2026-11-15.md` | §§2–4 | E/H conceptual approval boundaries and candidate module-domain lists; M-ID alignment remains CANDIDATE |

The primary review documents establish the workflow baselines and their described object/resource scope. The approval addenda establish only the conceptual approvals explicitly listed. The REC-06 matrix supplies the working row-level object/action/function candidates. No recovered source in this review approves a workflow-specific M01–M21 assignment, stable permission key, complete role/action grant, final scope resolver, field-level data policy, approver threshold or executed test result.

### 19.2 Row-level workflow/object/action index

The following index records the 30 workflow rows already present in SRC-05. The object and action descriptions are retained at the level stated in that working matrix; candidate action families are not permissions or grants.

| Category | Stable workflow ID and source title | Resource/object anchors recorded in SRC-05 | Candidate action-family anchors | Module / downstream disposition |
|---|---|---|---|---|
| CAT-10 Education | EDU-WF-01 — Program & Course Catalog | Program, course, curriculum, syllabus, level, prerequisite, price, version, publication record | Discover/List; View/Read; Create/Draft; Update/Edit; Review/Verify; Approve/Reject; Publish/Activate; Hold/Release | Specific M-ID NOT MAPPED; permission key OPEN |
| CAT-10 Education | EDU-WF-02 — Intake & Admission | Inquiry, application, applicant, guardian relation, consent/evidence, admission decision | Discover/List; View/Read; Create/Draft; Update/Edit; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize | Specific M-ID NOT MAPPED; permission key OPEN |
| CAT-10 Education | EDU-WF-03 — Student / Participant Record | Student/participant profile, identity/contact fields, guardian link, accommodation data, status, history | Discover/List; View/Read; Create/Draft; Update/Edit; Review/Verify; Export/Download/Share (separate capability only if justified) | Specific M-ID NOT MAPPED; field classification/purpose OPEN |
| CAT-10 Education | EDU-WF-04 — Enrollment & Class Allocation | Application-to-enrollment, class, batch, capacity, waitlist, transfer, withdrawal/cancellation status | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize; Cancel/Void | Specific M-ID NOT MAPPED; exact scope/override authority OPEN |
| CAT-10 Education | EDU-WF-05 — Schedule & Resource Planning | Schedule/session, room/facility, instructor assignment, capacity, conflict record | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Review/Verify; Approve/Reject; Confirm/Finalize; Hold/Release | Specific M-ID NOT MAPPED; resource scope and publication authority OPEN |
| CAT-10 Education | EDU-WF-06 — Instructor / Trainer Management | Instructor profile, qualification/credential evidence, availability, assignment, evaluation | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Submit/Request; Review/Verify; Approve/Reject; Hold/Release | Specific M-ID NOT MAPPED; HR/data-purpose and credential verification OPEN |
| CAT-10 Education | EDU-WF-07 — Class Delivery & Attendance | Class, session, attendance record, absence/leave, substitute assignment, correction evidence | View/Read; Execute/Process; Create/Draft; Update/Edit; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize | Specific M-ID NOT MAPPED; correction/approval separation OPEN |
| CAT-10 Education | EDU-WF-08 — Learning Material & Asset | Learning content, material, equipment/asset, issue/loan, return, access grant | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Execute/Process; Confirm/Finalize; Hold/Release; Reconcile/Close | Specific M-ID NOT MAPPED; content and custody scope/SoD OPEN |
| CAT-10 Education | EDU-WF-09 — Assessment & Examination | Assessment, exam, question/rubric, submission, grade, moderation, appeal, result | Create/Draft; View/Read; Execute/Process; Review/Verify; Approve/Reject; Confirm/Finalize; Publish/Activate | Specific M-ID NOT MAPPED; grading/moderation/finalization separation OPEN |
| CAT-10 Education | EDU-WF-10 — Fee, Invoice & Payment | Fee schedule, invoice, installment, discount/scholarship decision, payment, refund, arrears | View/Read; Create/Draft; Update/Edit; Submit/Request; Review/Verify; Approve/Reject; Execute/Process; Confirm/Finalize; Reverse/Refund/Write-off; Reconcile/Close | Specific M-ID NOT MAPPED; finance scope and SoD/threshold OPEN |
| CAT-10 Education | EDU-WF-11 — Guardian / Sponsor / Corporate Account | Guardian, sponsor, corporate account, student link, consent, billing relationship, statement | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Submit/Request; Review/Verify; Approve/Reject; Reconcile/Close; Export/Download/Share | Specific M-ID NOT MAPPED; relationship/consent/field allowlist OPEN |
| CAT-10 Education | EDU-WF-12 — Completion, Graduation & Certificate | Completion record, eligibility evidence, final result, certificate, serial number, correction/revocation history | View/Read; Review/Verify; Submit/Request; Approve/Reject; Confirm/Finalize; Publish/Activate | Specific M-ID NOT MAPPED; signatory/approval/revocation authority OPEN |
| CAT-10 Education | EDU-WF-13 — Complaint, Safeguarding & Incident | Complaint, incident/case, evidence, safeguarding note, escalation, restriction, follow-up | View/Read; Create/Draft; Submit/Request; Assign/Allocate; Review/Verify; Approve/Reject; Execute/Process; Hold/Release | Specific M-ID NOT MAPPED; restricted case scope/data purpose OPEN |
| CAT-10 Education | EDU-WF-14 — Reporting, Audit & Retention | Report, dataset, audit event, export job, archive/retention record | Discover/List; View/Read; Export/Download/Share; Reconcile/Close; Administer/Configure; Hold/Release | Specific M-ID NOT MAPPED; field/report scope and export purpose OPEN |
| CAT-11 Hotel | HTL-WF-01 — Property, Building & Unit Master | Property, building, floor, room/unit/bed, room type, capacity, amenity, unit status/history | Discover/List; View/Read; Create/Draft; Update/Edit; Assign/Allocate; Review/Verify; Approve/Reject; Hold/Release; Administer/Configure | Specific M-ID NOT MAPPED; property/unit administration scope OPEN |
| CAT-11 Hotel | HTL-WF-02 — Room Type, Rate Plan & Restrictions | Room type, rate plan, price, occupancy restriction, blackout, cancellation policy, tax/fee configuration | View/Read; Create/Draft; Update/Edit; Review/Verify; Approve/Reject; Publish/Activate; Hold/Release; Administer/Configure | Specific M-ID NOT MAPPED; rate approval/override thresholds OPEN |
| CAT-11 Hotel | HTL-WF-03 — Availability & Inventory Control | Unit/bed availability, allotment, date range, hold, out-of-order/out-of-service, overbooking policy | View/Read; Update/Edit; Assign/Allocate; Hold/Release; Review/Verify; Approve/Reject; Reconcile/Close | Specific M-ID NOT MAPPED; availability/readiness and overbooking authority OPEN |
| CAT-11 Hotel | HTL-WF-04 — Reservation & Booking | Inquiry, quote, reservation, booking, deposit, guarantee, modification, cancellation, no-show record | Discover/List; View/Read; Create/Draft; Update/Edit; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize; Cancel/Void; Reconcile/Close | Specific M-ID NOT MAPPED; reservation/payment boundary and fee policy OPEN |
| CAT-11 Hotel | HTL-WF-05 — Guest Profile & Identity | Guest/co-guest, identity document, contact, consent, preference, stay history, restricted note | View/Read; Create/Draft; Update/Edit; Review/Verify; Assign/Allocate; Export/Download/Share only under separate justified capability | Specific M-ID NOT MAPPED; field-level identity/data purpose OPEN |
| CAT-11 Hotel | HTL-WF-06 — Pre-arrival & Check-in | Arrival record, guest verification, room assignment, registration, deposit, key/access credential, check-in event | View/Read; Review/Verify; Assign/Allocate; Submit/Request; Execute/Process; Confirm/Finalize; Hold/Release | Specific M-ID NOT MAPPED; identity, deposit, key and check-in authority OPEN |
| CAT-11 Hotel | HTL-WF-07 — Stay & In-house Operations | Stay record, room move, extension, departure, guest request, incident, service assignment | View/Read; Update/Edit; Assign/Allocate; Submit/Request; Review/Verify; Approve/Reject; Execute/Process; Confirm/Finalize; Hold/Release | Specific M-ID NOT MAPPED; guest/incident scope and lifecycle OPEN |
| CAT-11 Hotel | HTL-WF-08 — Housekeeping & Room Readiness | Room task, cleaning event, inspection evidence, linen/minibar record, room readiness state | View/Read; Assign/Allocate; Execute/Process; Submit/Request; Inspect/Certify; Review/Verify; Approve/Reject; Confirm/Finalize; Hold/Release; Reconcile/Close | Specific M-ID NOT MAPPED; cleaning/inspection/release SoD OPEN |
| CAT-11 Hotel | HTL-WF-09 — Maintenance & Out-of-order | Work order, defect, maintenance asset/unit, safety hold, repair evidence, inspection, return-to-service record | Create/Draft; View/Read; Assign/Allocate; Execute/Process; Submit/Request; Inspect/Certify; Review/Verify; Approve/Reject; Hold/Release; Confirm/Finalize | Specific M-ID NOT MAPPED; safety clearance/return-to-service authority OPEN |
| CAT-11 Hotel | HTL-WF-10 — POS / Guest Charges & Folio | Folio, room charge, incidental charge, source transaction, posting, adjustment, split/routing record | View/Read; Create/Draft; Update/Edit; Submit/Request; Review/Verify; Approve/Reject; Execute/Process; Confirm/Finalize; Reverse/Refund/Write-off; Reconcile/Close | Specific M-ID NOT MAPPED; posting/adjustment/refund/reconciliation SoD OPEN |
| CAT-11 Hotel | HTL-WF-11 — Checkout, Invoice & Payment | Folio, checkout event, invoice, payment, deposit, refund, receipt, settlement record | View/Read; Review/Verify; Submit/Request; Approve/Reject; Execute/Process; Confirm/Finalize; Reverse/Refund/Write-off; Reconcile/Close | Specific M-ID NOT MAPPED; payment/refund/settlement approver thresholds OPEN |
| CAT-11 Hotel | HTL-WF-12 — Group, Corporate & Agency Booking | Group block, corporate/agency account, negotiated rate, rooming list, billing instruction, commission | View/Read; Create/Draft; Update/Edit; Assign/Allocate; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize; Reconcile/Close; Export/Download/Share | Specific M-ID NOT MAPPED; payer/guest identity and rate/commission scope OPEN |
| CAT-11 Hotel | HTL-WF-13 — Guest Service & Complaint | Guest request, service task, complaint/case, lost-and-found custody, recovery action, compensation | View/Read; Create/Draft; Submit/Request; Assign/Allocate; Execute/Process; Review/Verify; Approve/Reject; Confirm/Finalize; Hold/Release | Specific M-ID NOT MAPPED; complaint/incident and compensation authority OPEN |
| CAT-11 Hotel | HTL-WF-14 — Staff Shift & Cash Control | Shift, cashier drawer/register, handover, cash count, variance, close/review record | View/Read; Create/Draft; Assign/Allocate; Execute/Process; Submit/Request; Review/Verify; Approve/Reject; Confirm/Finalize; Reconcile/Close | Specific M-ID NOT MAPPED; cash custody/variance/close SoD OPEN |
| CAT-11 Hotel | HTL-WF-15 — Reporting, Audit & Data Retention | Occupancy/revenue reports, guest access event, audit event, export, retention/archive record | Discover/List; View/Read; Export/Download/Share; Reconcile/Close; Administer/Configure; Hold/Release | Specific M-ID NOT MAPPED; report dataset/field scope and export purpose OPEN |
| CAT-11 Hotel | HTL-WF-16 — Channel & External Integration | Integration configuration, connector/account, sync job, external reference, webhook/event, credential/secret, reconciliation record | View/Read; Create/Draft; Update/Edit; Review/Verify; Approve/Reject; Execute/Process; Confirm/Finalize; Hold/Release; Reconcile/Close; Administer/Configure | Specific M-ID NOT MAPPED; credential/secret scope and activation authority OPEN |

### 19.3 Explicit edge-status ledger

The row index above improves workflow-to-object/action navigation, but it does not close the full chain. Apply the following status to every one of the 30 rows unless a later row-specific primary approval and evidence record supersedes it:

| Traceability edge | Current disposition | Evidence / closure boundary |
|---|---|---|
| Category → workflow ID/title | FIX — CONCEPTUAL for CAT-10 and CAT-11 baselines | RMD-66 review §3 pp.2–3; RMD-68 review §3 pp.2–3; E/H approval addenda confirm baseline preservation |
| Workflow → resource/object | PARTIAL — SOURCE-DESCRIBED WORKING ROW | REC-06 matrix §5 (Education) / §6 (Hotel); source review workflow descriptions §3. Exact primary deep-audit brief locators are not independently recovered in this bounded pass |
| Workflow → module M01–M21 | NOT MAPPED / OPEN | Candidate category lists in REC-06 overlay §§3–4 and Crosswalk v1.3 are not approved workflow-level assignments |
| Module → capability/action | CANDIDATE / PARTIAL | 18 action families are vocabulary only; exact per-workflow object/action lifecycle mapping remains incomplete |
| Capability/action → stable permission key | OPEN / NOT ESTABLISHED | No approved stable permission-key catalogue |
| Role/function → standard role eligibility | FIX — CONCEPTUAL at approved category-level scope; row-specific function assignment PARTIAL / CANDIDATE | E-02/H-02 and approval addenda; function labels do not create new standard roles or permission grants |
| Permission → actor/role grant | OPEN / NOT APPROVED | No final category/workflow/role/action grant matrix |
| Action → object/geographic/assignment scope | OPEN / PARTIAL | Candidate objects and assigned-scope principles exist; canonical resolver, hierarchy, delegation, lifecycle and per-action rules unresolved |
| Data object/field → D0–D4 and purpose | OPEN / PARTIAL | D0–D4 is conceptual; field inventory, purpose registry, masking/export/retention and jurisdiction rules unresolved |
| Action → SoD/approval lifecycle | PARTIAL / OPEN | Separation principles recorded; final action pairs, approver eligibility, thresholds and exception lifecycle unresolved |
| Workflow/action → negative test ID | PARTIAL / NOT VERIFIED | Category minimum negative-test ideas exist in SRC-05 §7; consolidated stable test-ID mapping and exact expected-deny rows not established |
| Test → implementation/execution/result/evidence | NOT EVIDENCED | DOC-06 §§10–11 and REC-06 §§8–10: executable implementation, run ID, environment, actual result, retained artifact and retest not established |

### 19.4 Cross-document and decision consistency

- CAT-10 E-01–E-03 and CAT-11 H-01–H-03 remain FIX only at their approved conceptual scope. E-04 and H-04 remain OPEN; no detail is promoted.
- The 14 Education module groups and 14 Hotel module groups approved in the addenda are not the same thing as M01–M21 assignments. The candidate M-domain lists in REC-06 overlay §§3–4 remain CANDIDATE.
- Instructor/Tutor, Examiner/Assessor, Admissions Officer, Housekeeping, Reservation Agent, Night Auditor, Guest Service and Sales/Corporate Account remain function labels mapped to existing standard roles/capabilities or assignment contexts; no new standard role is created.
- No role eligibility, module eligibility, candidate action, object scope, relationship, external payer, assigned task or UI visibility is treated as an authorization grant.
- Education student/minor, guardian, accommodation, assessment and safeguarding data remain restricted by need-to-know and purpose; Hotel guest identity, payment, complaint/incident, room readiness and safety-release boundaries remain distinct.
- Request, review, approve, execute, finalize, publish, reverse/refund, reconcile and export remain separate action concepts where risk requires; no thresholds or approver assignments are inferred.
- DOC-05 §20 is a derived G01–G10 ↔ REC-06 crosswalk, not an approved row-level mapping. DOC-05 §21 confirms that G01–G10 and related scope/SoD gaps remain open.
- DOC-07 security evidence remains outside the acceptance of this bounded CW-09 repair; no runtime control or security test result is claimed.

### 19.5 CW-09 acceptance disposition and remaining work

**CW-09: PARTIAL — SOURCE-LOCATED ROW-LEVEL INDEX ADDED FOR 30 EDUCATION/HOTEL WORKFLOWS; COMPLETE END-TO-END TRACEABILITY NOT ACCEPTED.**

Completed in this bounded repair:
1. Stable row identifiers and workflow titles are indexed for EDU-WF-01–14 and HTL-WF-01–16.
2. Each row has source-described resource/object anchors and candidate action-family anchors.
3. Exact category review and approval-addendum section/page locators are recorded.
4. Module, permission-key, role-grant, scope, data/purpose, SoD/approval, negative-test and execution-evidence gaps are explicitly distinguished.
5. Existing FIX and OPEN boundaries are preserved; no dependency is closed by this addendum.

Still OPEN / PARTIAL:
- Recover and verify the primary RMD-66/RMD-68 deep-audit brief content/locators at claim level, rather than relying on the REC-06 working matrix for row descriptions.
- Reconcile each workflow/subworkflow to a specific M-ID only when G02 evidence/approval exists.
- Establish submodule boundaries and workflow-to-submodule-to-object handoffs under G04.
- Expand action/object/lifecycle and role/function mappings with exact source locators; no stable permission key or grant is inferred.
- Complete per-action scope, field-level data/purpose, SoD/approval, negative-test IDs and provenance rows.
- Recover missing test sources and runtime evidence; do not claim test implementation/execution/PASS.

Dependencies newly closed: **0**. FIX decisions changed: **0**. New permission keys/grants/approvals: **0**. Test execution/PASS claims added: **0**.

DOC-06 remains Version 0.2 / working Revision 0.2.2; DRAFT / RECONCILED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. REC-06 remains PARTIAL / OPEN / CANDIDATE. Stage 4.7.8 and Stage 4.9 remain PARTIAL — ACCEPTANCE NOT MET. Implementation readiness remains NOT READY.

Controls remain unchanged: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket GitHub/archive migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed by this documentation repair.
