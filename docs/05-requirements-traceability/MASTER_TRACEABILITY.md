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


## 20. Source-backed category module crosswalk and workflow decomposition overlay (CW-09 repair continuation, 19 November 2026)

This section performs the source-supported part of the CW-09 repair using the inspected REC-06 Permission Catalogue Overlay §§3.3, 4.3, 3.4 and 4.4; REC-06 Workflow-to-Capability Traceability Matrix §§2, 5–7; and Category → Workflow → Module Crosswalk v1.3 §§1–5. It improves the category-level candidate crosswalk and decomposes the workflow handoffs for review. It does **not** approve M01–M21, assign workflow-level M-IDs, create permissions/grants, or close G02/G04.

### 20.1 M01–M21 domain-name reference

The following names are transcribed from Crosswalk v1.3 §2. They are the Shared Core v1.0 proposed domain labels, not a canonical approval:

| M-ID | Proposed Shared Core domain label | CW-09 use |
|---|---|---|
| M01 | Business Profile & Organization | Reference only; no CAT-10/CAT-11 assignment evidenced |
| M02 | Catalog, Product & Pricing | Education conditional candidate; Hotel core candidate |
| M03 | POS, Sales & Order | Hotel conditional candidate (onsite POS only) |
| M04 | Customer / Guest / Student / CRM | Education core candidate; Hotel conditional candidate |
| M05 | Booking, Reservation & Appointment | Education core candidate; Hotel core candidate |
| M06 | Inventory & Material Ledger | Education conditional candidate (learning assets); Hotel conditional candidate (minibar/linen/supplies) |
| M07 | Warehouse & Custody | No Education candidate listed; Hotel conditional candidate |
| M08 | Procurement & Supplier | Education conditional candidate; Hotel conditional candidate |
| M09 | Service & Work Order Operations | No CAT-10/CAT-11 candidate listed in the inspected crosswalk |
| M10 | Production, Recipe & Formulation | No CAT-10/CAT-11 candidate listed in the inspected crosswalk |
| M11 | Asset, Fleet & Capacity | No CAT-10/CAT-11 candidate listed in the inspected crosswalk |
| M12 | Hospitality Operations | No Education candidate listed; Hotel core candidate |
| M13 | Education Operations | Education core candidate; no Hotel candidate listed |
| M14 | Pharmacy & Regulated Product Operations | No CAT-10/CAT-11 candidate listed in the inspected crosswalk |
| M15 | Laundry & Item Processing | No CAT-10/CAT-11 candidate listed in the inspected crosswalk |
| M16 | Finance, Billing & Payment | Education conditional candidate; Hotel core candidate |
| M17 | Workforce & Scheduling | Education core candidate; Hotel conditional candidate |
| M18 | Quality, Inspection & Compliance | Education conditional candidate; Hotel core candidate |
| M19 | Delivery & Fulfillment | No Education candidate listed; Hotel conditional candidate |
| M20 | Maintenance & Safety | No Education candidate listed; Hotel core candidate |
| M21 | Integration & Channel | Education conditional candidate; Hotel conditional candidate |

“Tidak tercantum sebagai kandidat” means only that the inspected category crosswalk does not list that M-ID for the category; it is not a prohibition or a new NOT-ELIGIBLE decision. All M-domain labels and alignments remain DRAFT/CANDIDATE.

### 20.2 Category-level candidate alignment (source-reconciled, not workflow assignment)

| Category | Candidate class | Candidate M-IDs and domain labels | Source-supported interpretation / limit |
|---|---|---|---|
| CAT-10 Education | CORE candidate | M04 Customer/Guest/Student/CRM; M05 Booking/Reservation/Appointment; M13 Education Operations; M17 Workforce/Scheduling | Category-level alignment only. Student/minor data, class/session assignment and qualification safeguards remain independently applicable |
| CAT-10 Education | CONDITIONAL candidate | M02 Catalog/Product/Pricing; M06 Inventory/Material Ledger (learning assets); M08 Procurement/Supplier; M16 Finance/Billing/Payment; M18 Quality/Inspection/Compliance; M21 Integration/Channel | Conditional on institution operating model and applicable workflow; not blanket eligibility or access |
| CAT-10 Education | Workflow-specific extension | LMS/Online Learning; formal school/university; childcare; boarding/residential; regulated vocational; specialized certification | Conditional extension audit and applicable qualification/compliance review required |
| CAT-11 Hotel | CORE candidate | M02 Catalog/Product/Pricing; M05 Booking/Reservation/Appointment; M12 Hospitality Operations; M16 Finance/Billing/Payment; M18 Quality/Inspection/Compliance; M20 Maintenance/Safety | Category-level alignment only; sensitive actions require separate authorization and assigned property/unit scope |
| CAT-11 Hotel | CONDITIONAL candidate | M03 POS/Sales/Order (onsite POS); M04 Customer/Guest/Student/CRM; M06 Inventory/Material Ledger (minibar/linen/supplies); M07 Warehouse/Custody; M08 Procurement/Supplier; M17 Workforce/Scheduling; M19 Delivery/Fulfillment; M21 Integration/Channel | Conditional on actual property operating model, workflow and assigned scope |
| CAT-11 Hotel | Workflow-specific extension | Group/Corporate/Agency; channel/OTA integrations; property-specific guest identity; regulated obligations | Conditional review of relationship, purpose, property scope and jurisdiction required |

The approved 14 module groups per category in RMD-66/RMD-68 are not replaced by this candidate M-ID list. Crosswalk v1.3 §§1, 3–5 explicitly states that Shared Core is PROPOSED/CANDIDATE, that these M-ID alignments are inherited candidate alignments, and that G02/G04 plus explicit approval are required before promotion. Therefore this repair closes the category-level *source navigation and transcription gap only*; it does not close G02.

### 20.3 Workflow decomposition and handoff boundaries

The following is a source-grounded decomposition of the resource/action clusters already described in §19.2 and REC-06 matrix §§5–6. “Candidate domain” is a category-level reference from §20.2, not a specific workflow assignment. The exact submodule owner, action-to-object lifecycle, and inter-module contract remain OPEN under G04.

| Workflow family / IDs | Source-described submodule or object clusters | Candidate domain reference (category-level only) | Handoff / control boundary retained |
|---|---|---|---|
| Education catalog & intake — EDU-WF-01–02 | Program/course/curriculum/prerequisite/version/publication; inquiry/application/applicant/guardian/consent/admission decision | M13, M04, M05; M02 conditional | Catalog publication is distinct from admission decision; guardian relationship/consent must be verified |
| Education learner & enrollment — EDU-WF-03–04 | Student/participant profile and history; guardian link; enrollment/class/batch/capacity/waitlist/transfer/withdrawal | M04, M05, M13 | Minimum necessary student fields; enrollment and cancellation/transfer decisions require explicit lifecycle authority |
| Education schedule & workforce — EDU-WF-05–06 | Session/room/facility/capacity/instructor assignment; instructor profile/credential/availability/evaluation | M13, M17; M18 conditional | Instructor assignment scope is separate from credential validation; schedule/resource conflicts remain governed by E-04 OPEN details |
| Education delivery & learning assets — EDU-WF-07–08 | Class/session/attendance/correction; learning content/material/equipment/issue-loan/return/access | M13; M06 conditional; M17 candidate | Attendance recording vs correction approval separated; asset custody does not grant student-record access |
| Education assessment & finance — EDU-WF-09–10 | Assessment/exam/question/rubric/submission/grade/moderation/appeal/result; fee/invoice/installment/discount/scholarship/payment/refund/arrears | M13; M16 conditional; M18 conditional | Exam authoring/grading/moderation/finalization/publication separated by risk; fee/discount/payment/refund/write-off/reconciliation distinct |
| Education relationships, completion & safeguarding — EDU-WF-11–13 | Guardian/sponsor/corporate billing relationship; completion/certificate/serial/correction/revocation; complaint/safeguarding/incident/evidence/escalation | M04, M13; M16 conditional; M18 conditional | Payment relationship alone does not expose student records; certificate issue/correction/revocation separated; safeguarding case access restricted |
| Education reporting & retention — EDU-WF-14 | Report/dataset/audit event/export/archive/retention | M13; M18 conditional; M21 conditional | Report/field scope, export purpose and retention/jurisdiction rules remain OPEN |
| Hotel property & commercial setup — HTL-WF-01–02 | Property/building/floor/room/unit/bed/type/capacity/amenity/status; rate plan/price/occupancy restriction/blackout/cancellation/tax/fee | M12, M02; M20 candidate | Property/unit administration scope distinct from rate authoring, approval, publication and override |
| Hotel availability & booking — HTL-WF-03–04 | Availability/allotment/date-range/hold/out-of-order/overbooking; inquiry/quote/reservation/booking/deposit/guarantee/modification/cancellation/no-show | M12, M05; M16 candidate | Availability/readiness and overbooking authority remain OPEN; reservation/payment and cancellation fee policy remain distinct |
| Hotel guest & arrival/stay — HTL-WF-05–07 | Guest/co-guest/identity/contact/consent/preference/history/restricted note; verification/room assignment/registration/deposit/key/check-in; stay/room move/extension/departure/request/incident | M12, M04; M05; M16 conditional | Minimum necessary identity; relationship and property scope required; deposit/key/check-in authority separately controlled |
| Hotel housekeeping & maintenance — HTL-WF-08–09 | Room task/cleaning/inspection/linen/minibar/readiness; work order/defect/asset/safety hold/repair/inspection/return-to-service | M12, M20, M18; M06 conditional | Housekeeping task scope does not imply folio/full identity access; maintenance cannot self-release safety hold or independently authorize return-to-service |
| Hotel folio, checkout & payment — HTL-WF-10–11 | Folio/room charge/incidental/source transaction/posting/adjustment/split; checkout/invoice/payment/deposit/refund/receipt/settlement | M12, M16; M03 conditional (onsite POS) | Posting/adjustment/refund/write-off/settlement/reconciliation remain separate; no threshold or approver inferred |
| Hotel group, service & cash — HTL-WF-12–14 | Group block/corporate/agency/rate/rooming list/billing/commission; guest request/complaint/lost-found/recovery/compensation; shift/drawer/handover/cash count/variance/close | M12, M04, M17; M16; M18 conditional | Corporate/agency data limited to booking/billing relationship; compensation and cash variance approval remain separately controlled |
| Hotel reporting & integration — HTL-WF-15–16 | Occupancy/revenue/audit/export/retention; connector/account/sync job/external reference/webhook/credential/secret/reconciliation | M12, M18; M21 conditional | Report dataset/field scope and export purpose OPEN; credentials/secrets restricted and activation authority separate |

This decomposition records submodule/resource clusters and control handoffs at the level supported by the inspected working matrix and overlay. It does not claim a final submodule taxonomy, M-ID ownership per workflow, stable permission key, API contract, RLS policy or implementation.

### 20.4 Role-function and control overlays

| Function / work context | Source-backed mapping rule | Access boundary |
|---|---|---|
| Instructor/Tutor | Function mapped to existing standard roles/capabilities or credential/assignment context; not a new standard role | Assigned class/session/relevant student scope; qualification validation separate |
| Examiner/Assessor | Function label only; mapped to existing roles/capabilities or assignment context | Assessment, grading, moderation, appeal and finalization separated by risk |
| Admissions Officer | Function label only; mapped to existing standard roles/capabilities | Applicant/admission workflow scope; guardian consent/relationship verified |
| Housekeeping | Mapped to Production / Service Operator under Hotel overlay | Assigned room/task/property/shift; no default folio/payment/full guest identity |
| Reservation Agent | Function label only; existing standard-role/capability mapping | Reservation and necessary guest subset; not blanket identity/payment access |
| Night Auditor | Function label only; existing standard-role/capability mapping | Night audit does not bypass correction/reversal controls or authorize arbitrary final-transaction edits |
| Guest Service | Function label only; existing standard-role/capability mapping | Guest request/service context; complaint/incident and compensation authority restricted |
| Sales / Corporate Account | Function label only; existing standard-role/capability mapping | Relevant booking/billing relationship and necessary subset; no cross-property or full guest-record grant |

The 12 standard roles and 14 module groups per category have conceptual approval in RMD-66/RMD-68. This function overlay does not recreate the full 12-row role matrices, create roles, or grant access. Manager eligibility remains coordination/supervision/monitoring/review within assigned Business/program/outlet/class/resource/team (Education) or Business/property/building/outlet/team (Hotel) scope; it is not unrestricted operational authority.

### 20.5 Negative-test specification candidates (not executed)

The following expected-deny cases are derived from the inspected overlay guardrails. They are proposed traceability specifications only; they do not establish stable test IDs, executable tests, execution, PASS, or retained evidence.

| Proposed scenario | Workflow/object anchor | Expected deny / control assertion | Source basis |
|---|---|---|---|
| EDU-NEG-01 | EDU-WF-03 student profile / accommodation / identity | Deny access to accommodation or identity fields without explicit need-to-know and purpose | REC-06 overlay §3.4 |
| EDU-NEG-02 | EDU-WF-06 instructor / class / session / student | Deny access outside assigned class/session/student scope; do not treat role eligibility as assignment | REC-06 overlay §3.4 |
| EDU-NEG-03 | EDU-WF-07 attendance correction | Deny self-approval or same-actor correction approval where separation is required | REC-06 overlay §3.4 and DOC-06 §8 |
| EDU-NEG-04 | EDU-WF-09 exam / grade / appeal / publication | Deny incompatible combined grading, moderation, finalization or publication authority where risk separation applies | REC-06 overlay §3.4 |
| EDU-NEG-05 | EDU-WF-10 fee / payment / refund / write-off | Deny treating fee creation, discount approval, payment capture, refund, write-off and reconciliation as one implicit grant | REC-06 overlay §3.4 |
| EDU-NEG-06 | EDU-WF-11 guardian / sponsor / student relationship | Deny full student-record access based solely on payer/sponsor relationship | REC-06 overlay §3.4 |
| EDU-NEG-07 | EDU-WF-13 safeguarding / incident | Deny general Manager/report access to restricted safeguarding details absent explicit case authority | REC-06 overlay §3.4 |
| HTL-NEG-01 | HTL-WF-05 guest identity / ID / restricted note | Deny full identity/ID access outside minimum-necessary Front Desk or separately authorized purpose | REC-06 overlay §4.4 |
| HTL-NEG-02 | HTL-WF-08 housekeeping room task / folio | Deny folio/payment/full guest identity access based only on assigned housekeeping task | REC-06 overlay §4.4 |
| HTL-NEG-03 | HTL-WF-09 safety hold / return-to-service | Deny unilateral safety-hold removal or self-authorized return-to-service by maintenance actor | REC-06 overlay §4.4 |
| HTL-NEG-04 | HTL-WF-02 rate plan / override | Deny one actor's implicit authority to author, approve, publish and override rates as a single undifferentiated action | REC-06 overlay §4.4 |
| HTL-NEG-05 | HTL-WF-10–11 folio / payment / refund / settlement | Deny implicit combination of payment capture, refund/void/write-off, cash variance and settlement close | REC-06 overlay §4.4 |
| HTL-NEG-06 | HTL-WF-12 corporate/agency relationship | Deny access to guest identity beyond the relevant booking/billing relationship and necessary subset | REC-06 overlay §4.4 |
| HTL-NEG-07 | HTL-WF-14–15 cash variance / report / export | Deny unrestricted cash variance approval or report/export access without separately defined authority, scope and purpose | REC-06 overlay §4.4 and DOC-06 §§7–8 |
| HTL-NEG-08 | HTL-WF-01/07 property and stay data | Deny cross-property access based only on Manager or standard-role label | REC-06 overlay §4.4 |

### 20.6 Repair disposition and exact remaining blockers

Completed by this continuation:
1. Transcribed all 21 Shared Core M-domain labels from Crosswalk v1.3 §2.
2. Reconciled the Education and Hotel category-level CORE/CONDITIONAL/extension candidate lists against REC-06 overlay §§3.3 and 4.3 and Crosswalk v1.3 §3.
3. Added source-grounded submodule/resource/action-cluster and handoff decomposition for all 30 workflow IDs without asserting workflow-level M-ID ownership.
4. Added the existing function-label guardrails and proposed expected-deny specifications from the inspected overlay; explicitly marked them not executed.

Still OPEN / PARTIAL and not safely closable from the inspected evidence:
- **G02:** explicit approval of canonical M01–M21 domain labels and category candidate baseline, plus source-to-M-ID trace for each named module group. Crosswalk v1.3 §5 states this decision and trace are unresolved; the overlay preserves all M-IDs as CANDIDATE.
- **G04:** approved workflow → submodule → resource/object → action ownership and cross-module handoff map. The available REC-06 matrix is a working audit draft; the overlay does not approve workflow-level M-ID assignments.
- **Primary claim provenance:** the named RMD-66/RMD-68 Deep Audit Brief files are cited by REC-06 as SRC-01/SRC-03 but were not present among the three inspected REC-06 artifacts in this repair pass; do not treat the working matrix as the missing primary briefs.
- **Permission and authorization:** stable permission keys, final capability/action grants, per-action scope, field-level D0–D4/purpose, final SoD/approver thresholds, and technical server authorization remain OPEN/NOT APPROVED/NOT VERIFIED.
- **Testing:** proposed expected-deny cases above are specifications only. Stable approved test IDs, executable test implementation, execution runs, results, retained artifacts and retest evidence remain NOT ESTABLISHED.

**CW-09 disposition remains PARTIAL — substantive source-backed repair expanded; closure gate not met.** This is not a refusal to complete the work: the remaining items require an explicit policy decision (G02), approved submodule ownership/handoff (G04), unavailable primary-source provenance, or technical/test evidence that cannot be invented from the current documents. Do not mark CW-09 CLOSED or DOC-06 final on the basis of this section.

Source locators: REC-06 Permission Catalogue Overlay §§2, 3.3–3.5, 4.3–4.5, 5–8; REC-06 Workflow-to-Capability Traceability Matrix §§2, 5–7; Category → Workflow → Module Crosswalk v1.3 §§1–5. The page/section locator for each underlying RMD review/addendum remains in DOC-06 §19.1.

Controls remain unchanged: READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 blanket migration **NOT AUTHORIZED**; Stage 6 implementation **NOT AUTHORIZED**. No SQL/DDL/DML, database/schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel, deployment, Supabase Preview/Staging or Production changes are authorized or performed by this documentation repair.



## 21. Normative design baseline — M01–M21 ownership, permission model and workflow control map

**Decision type:** Project-authored architecture baseline for documentation consistency. **Disposition:** FIX-DESIGN for the logical domain taxonomy and traceability rules in this section. This is not a technical implementation authorization, not a permission grant, and not approval to modify schema/RLS/API/backend. The design is authored for this product because the project owns its architecture and may define missing specifications directly. All other DOCs must be reconciled to this baseline; conflicting draft/candidate language is superseded only after its owning document is updated and reviewed.

### 21.1 Canonical logical domain taxonomy

The M01–M21 identifiers and names are adopted as the canonical logical domain taxonomy for POS SaaS Multi-Usaha v3.0. IDs are stable identifiers; labels may be clarified without changing an ID. A domain owns its business concepts, lifecycle rules and invariants. It does not automatically own every UI screen or grant every role access.

| ID | Canonical domain | Ownership boundary |
|---|---|---|
| M01 | Business Profile & Organization | Business identity, tenant profile, legal/business settings, organizational hierarchy and business-level configuration |
| M02 | Catalog, Product & Pricing | Product/service catalog, variants, units, categories, price lists and pricing rules; excludes transaction execution |
| M03 | POS, Sales & Order | Sales cart/order lifecycle, quotations converted to orders, checkout orchestration and sales transaction initiation |
| M04 | Customer / Guest / Student / CRM | Party/customer/guest/student profile, relationship, consent, contact and interaction history; category-specific sensitive fields remain separately classified |
| M05 | Booking, Reservation & Appointment | Booking, reservation, appointment, availability hold, allocation request and booking lifecycle |
| M06 | Inventory & Material Ledger | Stock identity, batches/serials, stock movements, reservations and inventory balance projection; costing layer is separately governed by costing architecture |
| M07 | Warehouse & Custody | Warehouse/bin/location operations, custody, transfer handling, picking/put-away and physical custody accountability |
| M08 | Procurement & Supplier | Supplier, purchase request/order, receiving procurement workflow, supplier return and procurement commitments |
| M09 | Service & Work Order Operations | Service request, work order, task execution, service completion and operational job lifecycle |
| M10 | Production, Recipe & Formulation | BOM/recipe/formula, production planning/execution, consumption/yield and production batch lifecycle |
| M11 | Asset, Fleet & Capacity | Identifiable reusable assets, fleet, capacity resources, assignment and utilization; does not replace inventory ledger |
| M12 | Hospitality Operations | Property, building, room/unit/bed, stay, housekeeping, room readiness and hospitality-specific operational lifecycle |
| M13 | Education Operations | Program/course, curriculum, class/session, enrollment operations, attendance, assessment and education completion lifecycle |
| M14 | Pharmacy & Regulated Product Operations | Regulated product, prescription/professional review, dispensing and regulated product controls; credential/compliance gates apply |
| M15 | Laundry & Item Processing | Item intake/custody, sorting, processing stages, quality, packing and release for laundry/item-processing businesses |
| M16 | Finance, Billing & Payment | Invoice/receivable/payable, payment, refund, settlement, reconciliation, tax/charges and financial posting lifecycle |
| M17 | Workforce & Scheduling | Worker/staff profile, shift, roster, availability, assignment, attendance and workforce scheduling |
| M18 | Quality, Inspection & Compliance | Inspection, quality check, nonconformance, audit finding, compliance evidence and controlled release/approval checks |
| M19 | Delivery & Fulfillment | Dispatch, shipment, route, delivery, proof of delivery, fulfillment and delivery exception lifecycle |
| M20 | Maintenance & Safety | Maintenance plan/work, defect, safety hold, inspection, repair and authorized return-to-service |
| M21 | Integration & Channel | External channel/connector configuration, mapping, sync jobs, webhook events, credentials references and reconciliation of external exchanges |

**Cross-domain rule:** a workflow may orchestrate more than one domain, but every persisted business object has one owning domain. Other domains consume it through an explicit command, event, reference or read model. A duplicate owner for the same business fact is prohibited. Shared identifiers and audit metadata do not transfer domain ownership.

### 21.2 Category eligibility baseline — Education and Hotel

The category-level eligibility baseline is defined as follows. CORE means the domain is part of the normal category operating model; CONDITIONAL means it is activated only when the business model uses that capability. Neither label is a role grant or permission.

| Category | CORE domains | CONDITIONAL domains | Extension gate |
|---|---|---|---|
| Education (CAT-10) | M04, M05, M13, M17 | M02, M06, M08, M16, M18, M21 | LMS/online learning, formal school/university, childcare, boarding/residential, regulated vocational and specialized certification require extension profiles and compliance review; other domains are not implicitly activated |
| Hotel (CAT-11) | M02, M05, M12, M16, M18, M20 | M03 (onsite POS), M04, M06, M07, M08, M17, M19, M21 | Group/corporate/agency and OTA/channel integrations are conditional workflow extensions; other domains are not implicitly activated |

The category profile is an activation baseline, not a technical subscription entitlement. Tenant subscription, category eligibility, module activation, role assignment and action authorization are five separate checks.

### 21.3 Workflow-to-domain ownership — CAT-10 Education

The primary owner is the authoritative domain for the workflow's main business object/lifecycle. Supporting domains own only their own objects and actions. This table closes the logical ownership map for the Education workflow baseline; implementation contracts remain separately specified and unauthorized.

| Workflow | Primary owning domain | Supporting domains | Owned objects / handoff |
|---|---|---|---|
| EDU-WF-01 Program & Course Catalog | M13 Education Operations | M02, M18 | Program/course/curriculum/prerequisite and education publication lifecycle; M02 owns reusable catalog/price references where used |
| EDU-WF-02 Intake & Admission | M13 Education Operations | M04, M05, M16 | Application/admission decision belongs to M13; applicant/guardian party data to M04; appointment/booking to M05; fee/payment to M16 |
| EDU-WF-03 Student / Participant Record | M04 Customer / Guest / Student / CRM | M13, M18 | Student identity/party profile and relationship in M04; enrollment/academic status in M13; restricted compliance evidence in M18 |
| EDU-WF-04 Enrollment & Class Allocation | M13 Education Operations | M05, M17, M16 | Enrollment/class allocation/capacity in M13; schedule slot in M05; instructor roster in M17; fees in M16 |
| EDU-WF-05 Schedule & Resource Planning | M13 Education Operations | M05, M11, M17 | Academic schedule/session plan in M13; booking slot in M05; physical capacity resource in M11; staff availability in M17 |
| EDU-WF-06 Instructor / Trainer Management | M17 Workforce & Scheduling | M13, M18 | Worker profile/availability in M17; teaching assignment in M13; credential/qualification verification in M18 |
| EDU-WF-07 Class Delivery & Attendance | M13 Education Operations | M17, M18 | Class/session and attendance event in M13; instructor assignment in M17; correction/exception review evidence in M18 |
| EDU-WF-08 Learning Material & Asset | M06 Inventory & Material Ledger | M07, M11, M13 | Consumable learning stock in M06; warehouse custody in M07; reusable equipment in M11; learning assignment/content context in M13 |
| EDU-WF-09 Assessment & Examination | M13 Education Operations | M18, M04 | Exam/assessment/grade lifecycle in M13; moderation/quality evidence in M18; learner identity reference in M04 |
| EDU-WF-10 Fee, Invoice & Payment | M16 Finance, Billing & Payment | M13, M04 | Invoice/payment/refund/settlement in M16; education fee basis and enrollment status in M13; payer/student relationship in M04 |
| EDU-WF-11 Guardian / Sponsor / Corporate Account | M04 Customer / Guest / Student / CRM | M13, M16 | Guardian/sponsor/corporate relationship in M04; education access relationship in M13; billing authority and balances in M16 |
| EDU-WF-12 Completion / Graduation / Certificate | M13 Education Operations | M18, M04 | Completion eligibility and certificate lifecycle in M13; verification/audit evidence in M18; recipient identity reference in M04 |
| EDU-WF-13 Complaint / Safeguarding / Incident | M18 Quality, Inspection & Compliance | M13, M04 | Restricted case, evidence and escalation controls in M18; education operational context in M13; person reference in M04 |
| EDU-WF-14 Reporting / Audit / Retention | M18 Quality, Inspection & Compliance | M13, M16, M17, M21 | Audit/retention control in M18; source datasets remain owned by their domains; export/channel delivery via M21 |

### 21.4 Workflow-to-domain ownership — CAT-11 Hotel

| Workflow | Primary owning domain | Supporting domains | Owned objects / handoff |
|---|---|---|---|
| HTL-WF-01 Property / Building / Unit Master | M12 Hospitality Operations | M11, M20, M18 | Property/building/room/unit/bed and hospitality operational status in M12; reusable physical asset in M11; maintenance state in M20; inspection evidence in M18 |
| HTL-WF-02 Room Type / Rate Plan / Restrictions | M02 Catalog, Product & Pricing | M12, M16, M18 | Room type sellable catalog and rate rules in M02; room/property applicability in M12; tax/charge calculation and financial posting in M16; approval evidence in M18 |
| HTL-WF-03 Availability / Reservation | M05 Booking, Reservation & Appointment | M12, M02, M16 | Reservation/hold lifecycle in M05; room availability/readiness in M12; sellable room/rate reference in M02; deposit/payment in M16 |
| HTL-WF-04 Booking Lifecycle | M05 Booking, Reservation & Appointment | M12, M04, M16 | Booking create/modify/cancel/no-show lifecycle in M05; room allocation in M12; guest relationship in M04; cancellation/deposit financial effect in M16 |
| HTL-WF-05 Guest Profile / Identity | M04 Customer / Guest / Student / CRM | M12, M18 | Guest party/identity/consent in M04; stay context in M12; restricted privacy/incident evidence in M18 |
| HTL-WF-06 Pre-arrival / Check-in | M12 Hospitality Operations | M05, M04, M16, M18 | Arrival/registration/room assignment/key state in M12; booking in M05; guest identity in M04; deposit/payment in M16; compliance checks in M18 |
| HTL-WF-07 Stay / In-house Operations | M12 Hospitality Operations | M04, M05, M16, M18 | Stay/room move/extension/service request context in M12; guest party in M04; booking change in M05; folio/charges in M16; incident evidence in M18 |
| HTL-WF-08 Housekeeping / Room Readiness | M12 Hospitality Operations | M17, M06, M07, M18 | Room status/task/readiness in M12; worker/shift assignment in M17; linen/minibar stock in M06; custody in M07; inspection evidence in M18 |
| HTL-WF-09 Maintenance / Out-of-order | M20 Maintenance & Safety | M12, M11, M18, M08 | Defect/work/safety hold/return-to-service authority in M20; room availability state in M12; asset record in M11; inspection in M18; vendor procurement in M08 |
| HTL-WF-10 POS / Guest Charges / Folio | M16 Finance, Billing & Payment | M12, M03, M04 | Folio/charge posting/adjustment in M16; stay context in M12; onsite order/cart in M03; guest/payer reference in M04 |
| HTL-WF-11 Checkout / Invoice / Payment | M16 Finance, Billing & Payment | M12, M04, M18 | Invoice/payment/refund/settlement in M16; checkout/stay close in M12; guest/payer reference in M04; financial audit evidence in M18 |
| HTL-WF-12 Group / Corporate / Agency Booking | M05 Booking, Reservation & Appointment | M04, M12, M16 | Group block/booking allocation in M05; corporate/agency party in M04; room/property operations in M12; billing/commission in M16 |
| HTL-WF-13 Guest Service / Complaint | M12 Hospitality Operations | M04, M18, M16 | Guest service request lifecycle in M12; guest party in M04; restricted complaint/incident evidence in M18; approved compensation/refund in M16 |
| HTL-WF-14 Staff Shift / Cash Control | M17 Workforce & Scheduling | M16, M12, M18 | Shift/roster/handover assignment in M17; cash drawer/variance/settlement in M16; property operational context in M12; review evidence in M18 |
| HTL-WF-15 Reporting / Audit / Data Retention | M18 Quality, Inspection & Compliance | M12, M16, M17, M21 | Audit/retention/export control in M18; source facts remain in owning domains; external report delivery via M21 |
| HTL-WF-16 Channel / External Integration | M21 Integration & Channel | M05, M02, M12, M16, M18 | Connector credentials/config/sync/reconciliation in M21; booking in M05; rate/catalog in M02; room/stay state in M12; payment in M16; compliance/audit in M18 |

### 21.5 Domain interaction contract

1. **Single writer / single owner:** only the owning domain may create or mutate its authoritative business object. Other domains request a command or consume a published event/read model.
2. **No cross-domain table ownership:** a foreign-key reference does not authorize another domain to mutate the referenced object. Cross-domain writes must be represented as an explicit command/transaction boundary.
3. **Lifecycle authority:** each domain owns its state transitions, validation invariants, cancellation/reversal rules and audit history. A consumer cannot bypass the owner's transition rules.
4. **Synchronous dependency:** use only where the caller requires an immediate authoritative decision (e.g. reservation capacity check). Avoid distributed multi-domain writes where an orchestrated workflow and durable event can be used.
5. **Event contract:** events identify business object, tenant/business, aggregate/version, event type, occurred-at time, correlation/idempotency key and actor context. Events contain minimum necessary data; sensitive fields are fetched through authorized domain access, not copied broadly into events.
6. **Idempotency:** commands that may be retried (payment, reservation, stock movement, external sync) require an idempotency key and deterministic duplicate handling.
7. **Consistency:** financial, inventory and booking state changes require explicit transaction/reversal semantics. A failed downstream consumer must not silently erase a committed source-domain fact.
8. **Read models:** cross-domain dashboards and reports are projections; they are not write authorities. Projection lag and reconciliation status must be visible where operationally material.
9. **Tenant isolation:** every business-owned object and event is bound to business_id. Property/outlet/warehouse/class/task constraints refine scope below the tenant boundary; no cross-tenant access is implied.
10. **Auditability:** actor, action, target, scope, purpose/context, decision, timestamp, correlation and before/after or event reference are recorded according to data classification and retention policy.

### 21.6 Permission model and key grammar

Permission is evaluated as an explicit tuple:

**Principal + Business + Module + Resource + Action + Scope + Conditions + Data class + Purpose + SoD/approval**.

Canonical key grammar: **<module_id>.<resource>.<action>**.

Examples (illustrative naming convention, not grants): M13.enrollment.create, M13.attendance.record, M13.attendance.correct, M16.payment.capture, M16.payment.refund, M20.safety_hold.release, M12.room.assign, M21.connector.manage.

Rules:
- Use lowercase snake_case for resource/action segments; key names are immutable once published. Renames require alias/deprecation and migration planning, not silent reuse.
- Actions are explicit verbs: list, read, create, update, submit, assign, record, execute, approve, reject, cancel, reverse, refund, publish, export, administer, release.
- request/submit, review, approve, execute/post, reverse/refund are distinct. No action implies another action.
- Wildcard grants are prohibited for sensitive domains and high-impact actions. “Admin” is not a substitute for enumerated capabilities.
- Eligibility is not a grant; subscription entitlement is not authorization; UI hiding is not enforcement.
- Authorization is enforced server-side at every protected operation and rechecked against current tenant, scope, resource state and approval context.

### 21.7 Standard scope hierarchy

| Scope code | Meaning | Examples |
|---|---|---|
| S0 Platform | Platform-level administration only, separately authorized | Platform Super Admin operations; never implied by business role |
| S1 Business | One business tenant | Business settings and business-wide permitted reporting |
| S2 Site | Assigned outlet/property/campus/branch | One hotel property, campus, outlet or branch |
| S3 Location | Assigned warehouse/building/floor/room/class resource group | Warehouse/bin, building/floor, class/session location |
| S4 Assignment | Explicitly assigned object/task/shift/session/case | Assigned room task, class session, work order, incident case |
| S5 Self / relationship | Own profile or verified relationship subset | Own worker profile, verified guardian/student relationship, booking payer subset |

Scope is conjunctive with the permission key and conditions. A broader scope does not override field-level classification, purpose, SoD or approval. Cross-property, cross-business and cross-tenant access requires a separate explicit grant and valid relationship; it is never inferred from Manager.

### 21.8 Data classification and purpose controls

The D0–D4 scale is adopted as the logical classification baseline. A higher class is more restrictive. Classification applies at field and document level, not merely table level.

| Class | Label | Examples | Minimum access rule |
|---|---|---|---|
| D0 | Public | Published catalog, public service/room description, public business contact | Public read only for explicitly published fields |
| D1 | Internal | Operational status, non-sensitive schedule, stock summary, room readiness without guest identity | Authenticated business users with relevant module and scope |
| D2 | Confidential | Customer contact, transaction detail, employee roster, supplier terms, booking details | Need-to-know role/function, narrow scope, business purpose and audit |
| D3 | Restricted | Government ID, minor/student sensitive records, payment instrument references, payroll, safeguarding/incident details, health/accommodation notes | Explicit capability, narrow assignment, purpose, field minimization, enhanced audit; approval where risk requires |
| D4 | Critical secret / regulated credential | Passwords, API secrets, private keys, authentication recovery material, regulated professional credentials where legally restricted | Never expose as ordinary application data; secret vault/reference only, tightly controlled break-glass and audited rotation/access |

Purpose codes for sensitive read/export where context is not self-evident: SERVICE_DELIVERY, BOOKING_FULFILLMENT, EDUCATION_ADMIN, FINANCIAL_PROCESSING, SAFETY_RESPONSE, COMPLIANCE_AUDIT, CUSTOMER_SUPPORT, LEGAL_RETENTION, INTEGRATION_SYNC. A purpose does not create permission; it narrows an otherwise valid permission. Unsupported or incompatible purpose results in deny.

### 21.9 Segregation of duties and approval baseline

| Risk family | Initiate / prepare | Independent review / approval | Execute / post | Prohibited combination without documented exception |
|---|---|---|---|---|
| Finance — discount, refund, write-off, cash variance, settlement | Transaction operator | Authorized Manager/Finance approver within threshold | Finance executor or controlled posting service | Initiator cannot approve own high-risk adjustment; settlement reviewer cannot silently rewrite source transactions |
| Procurement — purchase/receiving/supplier return | Requester / buyer | Independent budget or procurement approver | Receiving/warehouse operator | Requester cannot certify receipt alone for high-value or controlled goods |
| Inventory — adjustment, transfer, stocktake variance | Custodian / stock operator | Independent supervisor | Authorized stock posting action | Same actor must not create, approve and post material adjustment without an explicitly controlled low-risk policy |
| Education — attendance, grades, certificates, safeguarding | Assigned instructor/assessor/case reporter | Independent reviewer/moderator/authorized case lead | Authorized registrar/certificate issuer or case executor | Grade author cannot unilaterally moderate/finalize/publish; safeguarding access not inherited from Manager |
| Hotel — rate override, room safety release, guest compensation | Front desk/rate author/maintenance/service operator | Independent revenue/operations/safety approver | Authorized rate publisher/safety release/finance executor | Maintenance cannot self-release safety hold; rate author cannot self-approve exceptional override; compensation/refund not implicit in service role |
| Access administration | Access requester / manager | Authorized owner or delegated security approver | Access administrator applies approved change | Requester cannot approve own privileged grant; privilege changes require audit and expiry/review |

No numeric approval threshold is invented in this baseline. Until a category-specific threshold is configured and approved, sensitive financial or safety exceptions must use dual control and must not be auto-approved. Emergency break-glass access is time-bound, reason-coded, least-privilege, notified and independently reviewed; it cannot authorize irreversible financial posting or suppress audit evidence.

### 21.10 Default authorization decision sequence

Every protected request must pass all checks in this order; any failed or indeterminate check returns deny:

1. Authenticate actor and validate active session.
2. Resolve tenant/business context and verify actor membership/status.
3. Verify category and module entitlement/activation.
4. Resolve exact permission key and action; no role-name inference.
5. Resolve target resource and verify business_id/tenant isolation.
6. Evaluate scope S0–S5 and explicit assignment/relationship.
7. Evaluate resource state and lifecycle transition preconditions.
8. Evaluate field-level D0–D4 classification and purpose limitation.
9. Evaluate conditions, credential/compliance gates and time validity.
10. Evaluate SoD conflict and required independent approval.
11. Execute through the owning domain and record immutable audit evidence.
12. Return only the minimum necessary response fields.

### 21.11 Acceptance criteria and closure mapping

| CW-09 requirement | Decision in this section | Acceptance evidence required in documentation | Status after this section |
|---|---|---|---|
| G02 — canonical M01–M21 taxonomy | §21.1 adopts all 21 IDs/names as canonical logical domains | DOC-03 architecture taxonomy and DOC-04 data ownership cross-reference must match; no duplicate owners | DESIGN DECISION RECORDED; cross-document reconciliation required |
| G02 — category baseline | §21.2 adopts Education and Hotel CORE/CONDITIONAL domain profiles | DOC-02 category/workflow and DOC-01 product scope must match; extensions explicitly gated | DESIGN DECISION RECORDED; cross-document reconciliation required |
| G04 — workflow ownership | §§21.3–21.4 assign primary/supporting domain to all 30 workflows | DOC-03 domain boundaries and DOC-04 object ownership must match; each object has one authoritative owner | LOGICAL WORKFLOW MAP COMPLETE; object-level reconciliation required |
| Domain interactions | §21.5 defines single owner, command/event, idempotency and read-model rules | DOC-03 integration/domain interaction section must match | DESIGN BASELINE RECORDED |
| Permission catalogue | §21.6 defines key grammar and non-inference rules | DOC-05 authorization matrix must enumerate keys and permitted actor/scope conditions | DESIGN BASELINE RECORDED; full matrix expansion required |
| Scope and data | §§21.7–21.8 define scope and D0–D4/purpose baseline | DOC-05 and DOC-07 must align; sensitive field inventory must be enumerated in DOC-04 | DESIGN BASELINE RECORDED; field inventory reconciliation required |
| SoD / approvals | §21.9 defines risk-family separation | DOC-05/DOC-07 must include per-action conflict and approval path; numeric thresholds remain category decision parameters | DESIGN BASELINE RECORDED; detailed matrix expansion required |
| Enforcement | §21.10 defines deny-by-default authorization sequence | DOC-03/DOC-05/DOC-07 must agree; technical enforcement remains Stage 6 | SPECIFICATION ONLY; NOT IMPLEMENTED / NOT VERIFIED |

**CW-09 repair disposition:** G02 is resolved at the product-design decision level by adopting the canonical domain taxonomy and category baseline above. G04 is resolved at the logical workflow ownership level for all 30 Education/Hotel workflows. Neither claim implies that every object-level schema, permission key, threshold, test execution or technical authorization is complete. CW-09 may only be marked CLOSED after DOC-01/02/03/04/05/07 cross-document reconciliation and the remaining traceability acceptance items are complete. Until then, CW-09 remains PARTIAL with a bounded reconciliation task, not an unresolved request for external sources.

Governance remains unchanged: this section authorizes documentation design only. DB_PUSH_BLOCKED: ACTIVE; READ-ONLY / APPEND-ONLY; no SQL/DDL/DML, schema/migration, RLS/Auth, triggers, API/backend, application source, CI workflow, Vercel/deployment, Supabase Preview/Staging or Production changes. Stage 5 blanket migration and Stage 6 implementation remain NOT AUTHORIZED.


## 22. Append-only status reconciliation — normative design baseline versus earlier CW-09 checkpoints (19 November 2026)

DOC-06 §21 is the project-authored normative logical design baseline and supersedes conflicting pre-decision candidate wording in §§19–20 only within the following scope:

1. **G02:** M01–M21 identifiers and names are canonical logical domain identifiers. CAT-10 Education and CAT-11 Hotel CORE/CONDITIONAL profiles are adopted as recorded in DOC-01 §14 and DOC-02 §14.
2. **G04:** primary/supporting logical workflow ownership is established for all 30 Education/Hotel workflows in §§21.3–21.4.
3. These are logical design decisions, not source-provenance recovery, full category-wide entitlement approval, complete per-action role grants, physical data mapping, technical authorization implementation, or executed test evidence.
4. The earlier §§19–20 statements that G02/G04 remain OPEN are historical checkpoint statements from before §21. They are superseded for the exact design scope above; do not use them to reopen the resolved design decisions.
5. The 30 workflow ownership rows are authoritative for primary/supporting domain ownership. Detailed actor eligibility, scope, data/purpose, SoD and execution constraints are further specified in DOC-05 §§22–25. DOC-04 owns the 17 conceptual inventory entity map and attribute proposal; DOC-07 owns the 24 stable security-test design IDs and cross-references.
6. All 24 CW09-SEC IDs remain DESIGN / NOT EXECUTED. Physical-field mapping, exact permission grants, technical enforcement and Production readiness are not established.

No dependency is closed merely by this reconciliation. CW-09 remains subject to its documented acceptance criteria and the distinction between logical design completion and technical/evidence completion.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE; Stage 5 and Stage 6 remain NOT AUTHORIZED.


## 23. CW-10 — Requirements-to-security-control-to-test-evidence crosswalk (19 November 2026)

**Disposition: DOCUMENTATION CROSSWALK RECORDED — PARTIAL; NO TEST EXECUTION OR SECURITY ACCEPTANCE CLAIMED.** This section connects the 30 logical Education/Hotel workflow requirements and 17 conceptual inventory/warehouse entities to their security-control anchors, stable CW09-SEC design IDs, and current evidence state. It supplements DOC-07 §§27 and 29–36; it does not replace source-native dependency registers or close CW-09 technical/evidence gaps.

### 23.1 Crosswalk semantics

- **Direct test link** means the stable negative-test scenario explicitly exercises the workflow/resource risk.
- **Cross-cutting test link** means a reusable tenant, scope, purpose, membership, entitlement, privilege, D4-secret or event/idempotency control applies across the workflow/entity; it is not a dedicated workflow test.
- **No dedicated test ID** means the current 24-test register does not contain a workflow/entity-specific scenario. This is an explicit coverage gap, not implicit coverage.
- Security-control anchors refer to DOC-05 §§22–27 and DOC-07 §29. Candidate keys/policy tuples remain design vocabulary only.
- All CW09-SEC-01–24 remain DESIGN / NOT EXECUTED. Evidence state is therefore **NOT GENERATED / NOT VERIFIED** for every linked scenario. A documented evidence family is not an actual event record or test artifact.

### 23.2 Education workflow crosswalk — CAT-10

| Requirement / workflow | Primary owner | Security-control anchors | Direct test IDs | Evidence state |
|---|---|---|---|---|
| EDU-WF-01 Program & Course Catalog | M13 | publication lifecycle, conditional M02 catalog/price boundary, tenant and module entitlement | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-02 Intake & Admission | M13 | applicant/guardian relationship, consent, admission decision, financial handoff and purpose limitation | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-03 Student / Participant Record | M04 | minimum-necessary identity fields, verified guardian relationship, restricted export and purpose | CW09-SEC-01, CW09-SEC-21 | DESIGN ONLY; not executed |
| EDU-WF-04 Enrollment & Class Allocation | M13 | enrollment state, class/capacity assignment, site/session scope and finance handoff | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-05 Schedule & Resource Planning | M13 | schedule/resource assignment, capacity boundary, conflict review and assignment scope | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-06 Instructor / Trainer Management | M17 | workforce identity, credential evidence separation, assignment and restricted staff data | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-07 Class Delivery & Attendance | M13 | attendance correction lifecycle, author/reviewer separation and assigned session scope | CW09-SEC-02 | DESIGN ONLY; not executed |
| EDU-WF-08 Learning Material & Asset | M06 | inventory/material custody, stock adjustment, warehouse scope and idempotent movement | CW09-SEC-14, CW09-SEC-16 | DESIGN ONLY; indirect inventory scenarios |
| EDU-WF-09 Assessment & Examination | M13 | grade author/moderator/finalizer separation, restricted learner result and publication lifecycle | CW09-SEC-03 | DESIGN ONLY; not executed |
| EDU-WF-10 Fee, Invoice & Payment | M16 | payment/refund/write-off/settlement separation, financial approval and idempotency | CW09-SEC-04 | DESIGN ONLY; not executed |
| EDU-WF-11 Guardian / Sponsor / Corporate Account | M04 | verified relationship, payer/learner separation, consent and minimum-necessary disclosure | CW09-SEC-01, CW09-SEC-21 | DESIGN ONLY; partial scenario overlap |
| EDU-WF-12 Completion / Graduation / Certificate | M13 | completion eligibility, independent review, signatory/publish authority and revocation trace | No dedicated test ID | DESIGN ONLY; coverage gap |
| EDU-WF-13 Complaint / Safeguarding / Incident | M18 | restricted case assignment, D3 access/export, purpose and independent review | CW09-SEC-05 | DESIGN ONLY; not executed |
| EDU-WF-14 Reporting / Audit / Retention | M18 | field allowlist, report/export purpose, source-domain ownership and retention governance | CW09-SEC-12 | DESIGN ONLY; not executed |

### 23.3 Hotel workflow crosswalk — CAT-11

| Requirement / workflow | Primary owner | Security-control anchors | Direct test IDs | Evidence state |
|---|---|---|---|---|
| HTL-WF-01 Property / Building / Unit Master | M12 | property/site boundary, room state, maintenance and inspection handoff | CW09-SEC-13 | DESIGN ONLY; not executed |
| HTL-WF-02 Room Type / Rate Plan / Restrictions | M02 | rate author/approver separation, rate override and publish lifecycle | CW09-SEC-09 | DESIGN ONLY; not executed |
| HTL-WF-03 Availability / Reservation | M05 | reservation ownership, property availability, relationship and booking/payment boundary | CW09-SEC-11 (related only) | DESIGN ONLY; no dedicated reservation lifecycle test |
| HTL-WF-04 Booking Lifecycle | M05 | booking create/modify/cancel/no-show state, guest relationship, financial side-effect separation | CW09-SEC-11 (related only) | DESIGN ONLY; no dedicated booking lifecycle test |
| HTL-WF-05 Guest Profile / Identity | M04 | minimum-necessary identity fields, verified guest relationship, purpose and restricted export | CW09-SEC-06, CW09-SEC-11 | DESIGN ONLY; not executed |
| HTL-WF-06 Pre-arrival / Check-in | M12 | guest verification, room assignment, deposit boundary and property scope | CW09-SEC-06, CW09-SEC-13 (related) | DESIGN ONLY; no dedicated check-in test |
| HTL-WF-07 Stay / In-house Operations | M12 | property/room scope, guest relationship, service assignment and stay lifecycle | CW09-SEC-13 | DESIGN ONLY; partial lifecycle coverage |
| HTL-WF-08 Housekeeping / Room Readiness | M12 | task assignment, room scope, no implied folio access and independent readiness inspection | CW09-SEC-07 | DESIGN ONLY; not executed |
| HTL-WF-09 Maintenance / Out-of-order | M20 | safety hold, independent release, inspection and return-to-service lifecycle | CW09-SEC-08 | DESIGN ONLY; not executed |
| HTL-WF-10 POS / Guest Charges / Folio | M16 | folio read/adjustment, charge posting, refund and settlement SoD | CW09-SEC-07, CW09-SEC-10 | DESIGN ONLY; not executed |
| HTL-WF-11 Checkout / Invoice / Payment | M16 | payment/refund/settlement separation, financial approval and checkout state | CW09-SEC-04, CW09-SEC-10 | DESIGN ONLY; partial scenario overlap |
| HTL-WF-12 Group / Corporate / Agency Booking | M05 | group relationship, guest identity isolation and booking scope | CW09-SEC-11 | DESIGN ONLY; not executed |
| HTL-WF-13 Guest Service / Complaint | M12 | guest relationship, restricted complaint/incident evidence and purpose-limited disclosure | CW09-SEC-05, CW09-SEC-21 (related) | DESIGN ONLY; no dedicated guest-service test |
| HTL-WF-14 Staff Shift / Cash Control | M17 | staff assignment, cash/settlement SoD, financial export and review | CW09-SEC-04, CW09-SEC-12 (related) | DESIGN ONLY; no dedicated shift/cash test |
| HTL-WF-15 Reporting / Audit / Data Retention | M18 | field allowlist, export purpose, source-domain ownership and retention governance | CW09-SEC-12 | DESIGN ONLY; not executed |
| HTL-WF-16 Channel / External Integration | M21 | platform/business namespace, D4 secret protection, connector sync, event replay/idempotency | CW09-SEC-19, CW09-SEC-20, CW09-SEC-24 | DESIGN ONLY; not executed |

### 23.4 Cross-cutting controls

The following stable tests are reusable control scenarios and must not be counted as dedicated workflow coverage unless the relevant test case explicitly names that workflow/resource in its preconditions and assertions:

| Test ID | Control family | Applies to | Evidence state |
|---|---|---|---|
| CW09-SEC-17 | business/tenant isolation | all business-owned workflows and inventory entities | DESIGN / NOT EXECUTED |
| CW09-SEC-18 | outlet/property/warehouse/assignment scope | workflows and entities with scoped resources | DESIGN / NOT EXECUTED |
| CW09-SEC-21 | purpose limitation | sensitive identity, financial, case and report access | DESIGN / NOT EXECUTED |
| CW09-SEC-22 | membership/assignment revocation | all protected workflow and resource actions | DESIGN / NOT EXECUTED |
| CW09-SEC-23 | conditional module entitlement | all conditional category modules and their resources | DESIGN / NOT EXECUTED |
| CW09-SEC-19 | platform versus Business principal boundary | platform access-grant actions only; not a general Business workflow test | DESIGN / NOT EXECUTED |
| CW09-SEC-20 | D4 secret-value denial | protected connector-secret paths; rotation reference remains distinct | DESIGN / NOT EXECUTED |
| CW09-SEC-24 | event ordering/idempotency | inventory, transfer, payment and integration side-effect paths | DESIGN / NOT EXECUTED |

### 23.5 Inventory/warehouse entity crosswalk

| Conceptual entity | Primary owner | Direct test IDs | Coverage interpretation |
|---|---|---|---|
| inventory_batches | M06 | No dedicated test ID | tenant/scope/entitlement cross-cutting only |
| inventory_movements | M06 | CW09-SEC-16, CW09-SEC-24 | reservation fulfillment, movement idempotency and event ordering |
| inventory_balances | M06 | No dedicated test ID | tenant/scope/entitlement cross-cutting only |
| inventory_batch_balances | M06 | No dedicated test ID | tenant/scope/entitlement cross-cutting only |
| inventory_adjustments | M06 | CW09-SEC-14 | adjustment approval and SoD |
| inventory_adjustment_items | M06 | CW09-SEC-14 | adjustment item integrity under parent approval |
| stock_counts | M06 | CW09-SEC-14 | count/variance approval separation |
| stock_count_items | M06 | CW09-SEC-14 | count item evidence under parent count lifecycle |
| stock_transfers | M07 | CW09-SEC-15, CW09-SEC-24 | custody close/reconciliation and event ordering |
| stock_transfer_items | M07 | CW09-SEC-15, CW09-SEC-24 | shipment/transfer quantity reconciliation |
| inventory_cost_exceptions | M06 | No dedicated test ID | tenant/scope cross-cutting; costing exception-specific test gap |
| inventory_reservations | M06 | CW09-SEC-16, CW09-SEC-24 | duplicate fulfillment and idempotent reservation effects |
| inventory_reservation_items | M06 | CW09-SEC-16, CW09-SEC-24 | allocation/fulfillment item replay and single-effect control |
| inventory_cost_layers | M06 | No dedicated test ID | tenant/scope cross-cutting; cost-layer integrity test gap |
| inventory_cost_layer_consumptions | M06 | CW09-SEC-16, CW09-SEC-24 | consumption lineage and duplicate side-effect boundary; costing-specific assertions remain absent |
| stock_transfer_shipments | M07 | CW09-SEC-15, CW09-SEC-24 | shipment reconciliation, custody and event ordering |
| stock_transfer_shipment_items | M07 | CW09-SEC-15, CW09-SEC-24 | item-level receipt/reconciliation and duplicate-effect boundary |

### 23.6 Acceptance gaps and status

The crosswalk makes coverage limits explicit:

1. The 30 workflow rows are logically connected to controls and the existing test register, but several workflows have no dedicated negative-test ID. Related or cross-cutting IDs are not promoted to direct coverage.
2. Inventory coverage is strongest for adjustment/count, transfer/shipment and reservation/movement lifecycle. Batch/balance and costing exception/layer-specific negative scenarios remain absent.
3. All 24 test IDs are design specifications. No test code, execution, environment, actual result, retained artifact, independent review or retest is evidenced by this crosswalk.
4. DOC-07 §27's historical SEC-OPEN/EG/TRC gap crosswalk remains a separate provenance/dependency view. This §23 does not supersede or close those historical source-native gaps.
5. Candidate permission keys and policy tuples remain subject to full actor/function, membership, module entitlement, scope, state, data/purpose, SoD/approver and owning-domain execution review.

**Disposition:** CW-10 cross-document mapping is **PARTIAL — design crosswalk recorded; dedicated-test coverage gaps and execution evidence remain OPEN/NOT EXECUTED**. No dependency is closed by this section. CW-09 remains PARTIAL under its own acceptance criteria.

READ-ONLY • APPEND-ONLY • `DB_PUSH_BLOCKED: ACTIVE`; Stage 5 and Stage 6 remain NOT AUTHORIZED.


### 23.7 Coverage classification precision note

For avoidance of ambiguity in §§23.2–23.3:

- EDU-WF-08's CW09-SEC-14/16 links are **RELATED inventory-level scenarios**, not dedicated Education learning-material workflow tests.
- EDU-WF-11's CW09-SEC-01/21 links are **RELATED student/guest relationship and purpose scenarios**, not dedicated sponsor/corporate-account workflow tests.
- HTL-WF-03 and HTL-WF-04's CW09-SEC-11 links are **RELATED group-booking/guest-relationship coverage**, not dedicated reservation/booking lifecycle tests.
- HTL-WF-06's CW09-SEC-06/13 and HTL-WF-07's CW09-SEC-13 links are **RELATED identity/property-scope coverage**, not dedicated check-in or full stay-lifecycle tests.
- HTL-WF-13's CW09-SEC-05/21 and HTL-WF-14's CW09-SEC-04/12 links are **RELATED restricted-case/purpose and finance/report controls**, not dedicated guest-service or staff-shift/cash-control tests.

Accordingly, the current 30-workflow register contains **16 workflows with at least one direct scenario reference, 8 with related-only references, and 6 with no dedicated or related workflow-specific scenario**. The direct/related distinction must be preserved when calculating coverage; a cross-cutting test alone does not count as a dedicated workflow test. All linked scenarios remain DESIGN / NOT EXECUTED.



## 24. CW-03 — dedicated workflow negative-test design completion (20 November 2026)

**Purpose:** close the workflow-specific design-coverage gap identified in §23.6–23.7. These 14 scenarios supplement the 24 stable CW09-SEC scenarios. They are project-authored design specifications, not executed tests, evidence artifacts, or production permission grants.

### 24.1 Scenario catalogue

| Test ID | Workflow | Threat / attempted action | Required fixture and boundary | Expected result | Required audit/evidence fields |
|---|---|---|---|---|---|
| CW03-SEC-01 | EDU-WF-01 Program & Course Catalog | Catalog editor attempts publication without required review or publish capability | Same Business; valid program; actor has draft/edit only; publish key absent or review incomplete | DENY publish; draft unchanged | actor, business, program, attempted key, review state, decision, reason, correlation ID |
| CW03-SEC-02 | EDU-WF-02 Intake & Admission | Intake operator attempts out-of-site or self-approved admission | Active membership; application outside actor site or actor is initiator; no independent approver | DENY approval; application unchanged | actor, application, site, initiator, approver, scope, decision, reason |
| CW03-SEC-03 | EDU-WF-04 Enrollment & Class Allocation | Operator allocates learner to full/inactive class or bypasses approval | Valid learner/class; capacity exhausted or class inactive; no approved exception | DENY allocation; no enrollment/seat mutation | actor, learner ref, class, capacity/state, attempted key, decision, reason |
| CW03-SEC-04 | EDU-WF-05 Schedule & Resource Planning | Scheduler publishes timetable using unavailable or out-of-scope resource | Resource conflict or wrong site; no valid assignment/override | DENY publish/assignment; schedule preserved | actor, schedule, resource, site, conflict, scope, decision, reason |
| CW03-SEC-05 | EDU-WF-06 Instructor / Trainer Management | HR operator verifies credential without independent authority or assigns inactive/unqualified instructor | Credential pending/expired; actor is editor/requester; verifier/approver absent | DENY verification/assignment; credential unchanged | actor, instructor, credential status, assignment, approver, decision, reason |
| CW03-SEC-06 | EDU-WF-08 Learning Material & Asset | Instructor posts stock issue/adjustment outside assigned session/warehouse | M06 material; instructor has session assignment only; no inventory posting key or warehouse scope | DENY movement/adjustment; ledger unchanged | actor, session, item, warehouse, quantity, key, decision, event ref |
| CW03-SEC-07 | EDU-WF-11 Guardian / Sponsor / Corporate Account | Payer/sponsor accesses learner academic or restricted identity data beyond verified billing relationship | Verified payer link limited to billing; no guardian/academic relationship; D3 fields excluded | DENY restricted read/export; billing subset remains scoped | actor, learner, relationship, class, purpose, fields, decision, reason |
| CW03-SEC-08 | EDU-WF-12 Completion / Graduation / Certificate | Certificate preparer issues/finalizes without independent eligibility verification | Completion prerequisites incomplete or preparer=issuer without accepted exception | DENY issue/finalize; no valid certificate | actor, learner, completion state, verifier, issuer, key, decision, reason |
| CW03-SEC-09 | HTL-WF-03 Availability / Reservation | Reservation actor confirms expired hold or unavailable/out-of-service room | Property-scoped room; expired hold or M12 readiness/safety hold; no override | DENY confirm; no reservation/room allocation | actor, property, room, hold/expiry, readiness, decision, reason, idempotency key |
| CW03-SEC-10 | HTL-WF-04 Booking Lifecycle | Customer/agent modifies or cancels another guest booking or changes financial effect through booking mutation | S5 relationship mismatch; cancellation fee/refund belongs to M16 | DENY unrelated booking change; no silent payment/refund mutation | actor, booking, relationship, target guest, key, decision, reason |
| CW03-SEC-11 | HTL-WF-06 Pre-arrival / Check-in | Front desk checks in without guest verification, valid booking or room readiness | Booking mismatch, identity incomplete, room not ready or safety-held | DENY check-in; stay/room unchanged | actor, booking, guest ref, room, verification, readiness, decision, reason |
| CW03-SEC-12 | HTL-WF-07 Stay / In-house Operations | Staff moves/extends/closes stay outside property or bypasses rate/payment approval | Wrong property or unapproved extension; M05/M16 remain owner-controlled | DENY invalid transition; no cross-domain side effect | actor, stay, property, transition, linked booking/payment refs, decision, reason |
| CW03-SEC-13 | HTL-WF-13 Guest Service / Complaint | Service operator reads restricted complaint/incident or issues compensation/refund directly | Actor assigned service task only, not M18 case; refund key belongs to M16 | DENY restricted access/export and direct refund | actor, guest, case, class, purpose, key, owner domain, decision, reason |
| CW03-SEC-14 | HTL-WF-14 Staff Shift / Cash Control | Shift supervisor approves own cash variance or closes own reconciliation | Same actor initiates and approves; no independent Finance approver | DENY approval/close; variance pending | actor, shift, drawer, variance, initiator, approver, decision, reason |

### 24.2 Execution and evidence contract

Each scenario must be an isolated test with explicit actor, Business, role/function fixture, membership/relationship, module entitlement, resource owner, scope, resource state, data class/purpose, SoD/approver, attempted key, expected deny reason and immutable audit-event assertion. Tests must assert state preservation and capture evidence. No real customer or student data may be used. Execution requires an explicitly authorized non-production environment; no Supabase Preview/Staging environment is assumed or authorized here.

### 24.3 Coverage reconciliation

The 14 scenarios map to the 8 prior related-only and 6 no-dedicated-test workflow rows in DOC-06 §23.7. With the 16 direct workflow-specific CW09-SEC links already present, CAT-10/CAT-11 workflow-specific design coverage is 30/30. Cross-cutting references are not counted as dedicated coverage. All CW03-SEC-01–14 remain DESIGN / NOT EXECUTED; evidence NOT GENERATED / NOT VERIFIED.

### 24.4 Acceptance boundary

This section closes missing dedicated scenario design coverage only. It does not claim test code, execution, pass/fail, retained artifacts, independent review, technical enforcement, exact production role grants or implementation acceptance. Existing CW09-SEC status remains unchanged.


## 25. CW-04 architecture ownership and interaction acceptance scenarios (20 November 2026)

**Status:** architecture acceptance design only; no executable test code or runtime result is implied. These scenarios trace DOC-03 §19 to DOC-06 §21.5 and DOC-05 §§28–29. They complement, and do not renumber or reclassify, CW03-SEC and CW09-SEC designs.

| ID | Architecture invariant | Scenario / attempted behavior | Expected design result | Primary references |
|---|---|---|---|---|
| CW04-ARCH-01 | Single owner | Orchestrator attempts to mutate a supporting-domain authoritative object directly | DENY direct write; issue owner-domain command | DOC-03 §§18.2, 19.3; DOC-06 §21.5.1–2 |
| CW04-ARCH-02 | Owner lifecycle authority | Consumer attempts to bypass owner validation or lifecycle transition | DENY; owner validates transition and records audit lineage | DOC-03 §19.3; DOC-06 §21.5.3 |
| CW04-ARCH-03 | Tenant binding | Command/event uses a client-supplied or mismatched business_id/resource parent | DENY unresolved or cross-tenant context; resolve server-side tenant and parent linkage | DOC-03 §18.4, §19.3; DOC-06 §21.5.9 |
| CW04-ARCH-04 | Synchronous dependency discipline | Non-immediate downstream work is implemented as an assumed distributed synchronous write | Require durable handoff; synchronous call only for immediate authoritative decision | DOC-03 §19.2; DOC-06 §21.5.4 |
| CW04-ARCH-05 | Idempotent retry | Same retryable command is delivered repeatedly with same idempotency identity | One logical effect; deterministic duplicate response; no duplicate posting | DOC-03 §§18.3, 19.3; DOC-06 §21.5.6 |
| CW04-ARCH-06 | Event replay/order | Duplicate or out-of-order event reaches a consumer | Consumer deduplicates and checks aggregate/version sequence; no stale overwrite | DOC-03 §18.3, §19.3; DOC-06 §21.5.5 |
| CW04-ARCH-07 | Source fact survives consumer failure | Downstream consumer fails after owner-domain commit | Source fact remains committed; retry/reconciliation is explicit | DOC-03 §19.3; DOC-06 §21.5.7 |
| CW04-ARCH-08 | Projection is not authority | Dashboard/read-model attempts to mutate or post into source ledger | DENY projection write; command must go to source owner | DOC-03 §§18.3, 19.3; DOC-06 §21.5.8 |
| CW04-ARCH-09 | Sensitive event minimization | Event payload includes broad identity, financial, credential or regulated fields not required by consumer | Reject/minimize payload; consumer retrieves allowed fields via owner authorization | DOC-03 §§18.3, 19.3; DOC-06 §21.5.5 |
| CW04-ARCH-10 | Authorization follows resource owner | Workflow primary owner attempts a supporting-domain mutation using its own key | DENY; target owner evaluates its exact resource/action key under DOC-05 | DOC-03 §19.4; DOC-05 §§28–29 |
| CW04-ARCH-11 | Audit lineage | Command/event lacks actor, target, scope, purpose, decision or correlation lineage | Reject or quarantine as policy requires; retain complete attributable decision trail | DOC-03 §19.2–19.3; DOC-06 §21.5.10 |
| CW04-ARCH-12 | Platform/business separation | Business principal attempts S0 platform action or platform context is used as tenant permission | DENY; platform namespace and Business scope remain separate | DOC-03 §18.4, §19.3; DOC-05 §§24.3, 29 |

### 25.1 Acceptance rules

1. Each scenario must eventually have an owning requirement, target owner, authorization decision, expected state/effect, denial reason where applicable and evidence reference.
2. Runtime tests require an independently authorized non-production environment and implementation. No production data or Production mutation is permitted by this design.
3. A passing architecture review or a scenario specification is not an executed test, technical control or security certification.
4. All scenarios must preserve the source owner's immutable/compensating semantics and the applicable M-domain authority.

**Disposition:** 12/12 architecture acceptance scenarios specified; 0 executed; 0 evidence generated. DOC-03/DOC-06/DOC-05 alignment is documented, not implemented.


## 26. CW-05 data-entity ownership and tenant-integrity acceptance scenarios (20 November 2026)

**Status:** logical data/tenant acceptance design only. No SQL test, database mutation, runtime test or production result is implied. These scenarios trace DOC-04 §27 to DOC-03 §§19–20, DOC-05 §30 and DOC-06 §21.

| ID | Invariant | Scenario / attempted behavior | Expected design result | Primary references |
|---|---|---|---|---|
| CW05-DATA-01 | Single entity owner | Orchestrator or supporting domain attempts direct mutation of one of the 17 authoritative entities | DENY; route command to the entity's primary owner | DOC-04 §27.1; DOC-03 §19.3; DOC-05 §30 |
| CW05-DATA-02 | Tenant ownership | Entity record is created/read with unresolved or mismatched Business context | DENY; resolve tenant server-side; every tenant-owned entity belongs to one Business | DOC-04 §27.3 TEN-01; DOC-03 §18.4 |
| CW05-DATA-03 | Parent/child tenant integrity | Child record references a parent in another Business | DENY; same-tenant relationship required; physical composite key remains unspecified | DOC-04 §27.3 TEN-02; DOC-06 §21.5.9 |
| CW05-DATA-04 | Transfer location integrity | Transfer uses source/destination from different Business or same location | DENY; same Business and distinct source/destination | DOC-04 §27.3 TEN-03; DOC-04 §3 |
| CW05-DATA-05 | Inventory ledger immutability | Attempt to edit/delete a posted movement rather than issue a correction | DENY mutation; use reversal/compensating movement under M06 | DOC-04 §§3–4, 27.1; DOC-03 §6 |
| CW05-DATA-06 | Projection non-authority | Attempt to write inventory balance or batch-balance projection directly | DENY direct write; rebuild/reconcile from authoritative ledger | DOC-04 §§3–4, 27.1; DOC-03 §19.3 |
| CW05-DATA-07 | Batch/cost-layer separation | Use physical batch identity as cost-layer identity or merge their lifecycles | DENY conflation; FEFO selects batch, FIFO consumes cost layer; MWA remains method default | DOC-04 §§6, 27.3 TEN-04/05; DOC-03 §19.1 |
| CW05-DATA-08 | MWA pool boundary | Combine cost pool across Business, Product/Variant or Inventory Location | DENY cross-pool aggregation; pool is Business + Product/Variant + Inventory Location | DOC-04 §§6, 27.3 TEN-04 |
| CW05-DATA-09 | Reservation semantics | Treat reservation as physical stock decrement or use A01 movement registry fields for A02 reservation source | DENY semantic conflation; reservation reduces available only; A02 Alternative A remains header source_type/source_id | DOC-04 §§5, 27.3 TEN-06 |
| CW05-DATA-10 | Shipment quantity reconciliation | Repeated/partial receipt, return or loss exceeds dispatched quantity or duplicates a physical dispatch | DENY over-receipt/duplicate effect; reconcile per shipment item; M07 custody, M06 posting | DOC-04 §§7–8, 27.2/27.3 TEN-07 |
| CW05-DATA-11 | Cost consumption/compensation cap | Consumption exceeds eligible layer quantity or cumulative compensation exceeds original eligible quantity | DENY excess; preserve immutable consumption and capped partial compensation lineage | DOC-04 §§8, 18.2 REL-12–14, 21 |
| CW05-DATA-12 | Authorization owner separation | M07 custody actor attempts M06 movement posting, or M06 actor attempts unassigned M07 custody mutation | DENY cross-owner mutation; each owner evaluates its own exact action and scope | DOC-04 §27.1–27.2; DOC-05 §30 |

### 26.1 Acceptance rules

1. Each scenario must eventually bind to an entity/relationship, owner domain, tenant scope, expected state/effect, denial reason and evidence artifact.
2. These designs do not establish exact SQL columns, physical FK tuples, constraint expressions, RLS policies or server/API enforcement.
3. Runtime verification requires separately authorized implementation and controlled non-production data. No production data or Production mutation is permitted by this design.
4. A conceptual invariant or design review is not an executed database test.

**Disposition:** 12/12 CW05-DATA scenarios specified; 0 executed; 0 evidence generated. Physical dictionary and tenant enforcement remain OPEN / NOT ACCEPTED.


## 27. CW-05 DOC-04 owner-register and section-locator correction (20 November 2026)

This addendum corrects the DOC-04 references in CW05-DATA-01–12. DOC-04 §28 is the pre-existing authoritative 17-entity owner register; DOC-04 §32 is the supplemental relationship-owner/handoff and TEN-01–TEN-07 crosswalk. The prior references to DOC-04 §27 in the CW-05 scenario table are superseded for navigation by §§28 and 32.

- CW05-DATA-01 and -12 use DOC-04 §28 for primary entity ownership and DOC-04 §32 for relationship/tenant handoff.
- CW05-DATA-02–04 use DOC-04 §32.3 for tenant scope and DOC-04 §18 for the conceptual relationship rules.
- CW05-DATA-05–11 retain their substantive DOC-04 invariant references; use DOC-04 §32 for owner/tenant interpretation where cross-domain handoff is involved.
- All 12 scenario definitions and expected outcomes remain unchanged.

**Disposition:** this is a locator correction only. CW05-DATA-01–12 remain DESIGN / NOT EXECUTED; no evidence or physical enforcement is claimed.


## 27. CW-06 authorization acceptance scenario designs (20 November 2026)

**Status:** design-only acceptance scenarios. They do not grant permissions, implement server guards or claim runtime execution. These scenarios supplement CW09-SEC-01–24 and do not renumber prior test IDs.

| ID | Authorization invariant | Scenario / attempted behavior | Expected result | Primary references |
|---|---|---|---|---|
| CW06-AUTH-01 | Role/principal namespace | Mitra/Pekerja, Mitra Fisik or Pelanggan is treated as a standard Business role without explicit capability/assignment/relationship | DENY; resolve principal classification and exact eligibility first | DOC-05 §§23.1, 32.1; DOC-06 §21.6 |
| CW06-AUTH-02 | Exact key / no inheritance | Actor with resource.read attempts create/update/approve/export or uses wildcard/role-name inference | DENY; each action requires its own exact key and tuple | DOC-05 §§22.1, 23.2; DOC-06 §21.6 |
| CW06-AUTH-03 | Membership and tenant | Expired/revoked membership or mismatched business_id is used with an otherwise valid key | DENY; resolve active membership and target tenant server-side | DOC-05 §§22.1, 25.1; DOC-06 §21.10 |
| CW06-AUTH-04 | Module entitlement | Conditional category/module is inactive while the actor presents a candidate key | DENY; entitlement is a prerequisite, not a permission | DOC-05 §§22.1, 25.1; DOC-06 §§21.2, 21.10 |
| CW06-AUTH-05 | Scope and relationship | Actor accesses another site/property, unassigned task or unverified S5 relationship | DENY; S0–S5 scope and current assignment/verified relationship must match | DOC-05 §§22.4, 25.1; DOC-06 §21.7 |
| CW06-AUTH-06 | Resource state and conditions | Exact key is present but the target object is expired, held, closed, unapproved or in an invalid lifecycle state | DENY; owning domain validates the current transition preconditions | DOC-05 §§22.1, 25.1; DOC-06 §21.10 |
| CW06-AUTH-07 | D0–D4 and purpose | Valid read key is used for incompatible purpose or requests D3/D4 fields beyond need-to-know | DENY/minimize; field classification and purpose narrow access; no secret value returned | DOC-05 §§24.1, 25.1, 27.2; DOC-06 §21.8 |
| CW06-AUTH-08 | SoD and independent approval | Initiator approves/executes own refund, write-off, adjustment, safety release or privileged grant | DENY; distinct eligible initiator, approver and executor required | DOC-05 §§22.5, 24–25; DOC-06 §21.9 |
| CW06-AUTH-09 | Resource-owner authority | Orchestrating/primary workflow domain uses its own key to mutate an M06/M07/M16 supporting-domain object | DENY; target owner evaluates its own exact key and lifecycle | DOC-05 §§28–32; DOC-03 §19; DOC-04 §28/§32 |
| CW06-AUTH-10 | Platform S0 separation | Business Manager or tenant principal attempts PLATFORM.access_grant.approve/apply, or platform principal is treated as having tenant-data access | DENY; S0 platform namespace and Business S1–S5 remain separate; dual control applies | DOC-05 §§24.3, 26.2, 32.4; DOC-07 §33 |
| CW06-AUTH-11 | D4 secret boundary | Actor attempts M21.integration_secret.read or an ordinary report/export attempts to return secret value | DENY; prohibited token is not a key; only separately authorized rotate_secret_ref workflow may operate on opaque reference metadata | DOC-05 §§24.2 AUTH-HR-11, 27.2, 32.3; DOC-07 §34 |
| CW06-AUTH-12 | Audit and single-effect execution | Authorized action is replayed, membership is revoked mid-session or audit lineage is missing | Re-evaluate current eligibility; deny stale context; prevent duplicate side effect; retain attributable decision/effect evidence | DOC-05 §§22.1, 25.1, 32.2; DOC-06 §21.10; DOC-07 §§31–32 |

### 27.1 Acceptance rules

1. Every eventual grant row must bind one authenticated principal/function, Business membership, category/module entitlement, exact key, target resource owner, S0–S5 scope, object state, D0–D4/purpose, SoD/approver, execution owner, denial reason and audit event.
2. A candidate key or scenario reference is not a grant. Missing/ambiguous tuple means DENY.
3. Runtime tests require separately approved implementation scope and controlled non-production environment. No Production data or Production mutation is permitted.
4. A design review or negative scenario specification is not an executed test or evidence.

**Disposition:** 12/12 CW06-AUTH scenarios specified; 0 executed; 0 evidence generated. Exact grants and technical enforcement remain OPEN / NOT AUTHORIZED.


## 28. CW-07 current security-evidence coverage and acceptance design index (20 November 2026)

This section updates the current coverage interpretation without rewriting historical CW-10/CW-09 checkpoints. DOC-07 §36–37 and DOC-06 §23.7 preserve the historical baseline; the later dedicated scenario packages are additive.

### 28.1 Current workflow coverage

| Workflow group | Historical CW09 classification | Dedicated design added | Current design coverage |
|---|---|---|---|
| 16 originally direct workflows | Direct CW09-SEC reference | Existing CW09-SEC scenarios | 16/16 direct |
| 8 originally related-only workflows | Related-only CW09 reference | CW03-SEC-01–14 includes 8 of these | Dedicated design now present |
| 6 originally uncovered workflows | No dedicated/related workflow-specific scenario | CW03-SEC-01–14 includes the remaining 6 | Dedicated design now present |

**Current CAT-10/CAT-11 total: 30/30 workflows have a dedicated design reference (16 CW09-SEC + 14 CW03-SEC).** The historical 16 direct / 8 related-only / 6 uncovered count remains valid for the original CW09 baseline; it is not the current post-CW03 count. No workflow test has been executed.

### 28.2 Current inventory/warehouse entity coverage

| Entity family | Current design references | Coverage interpretation |
|---|---|---|
| inventory_batches | CW05-DATA-07; CW05-DATA-08 | Batch identity, FEFO selection and pool boundary |
| inventory_movements | CW09-SEC-16/24; CW05-DATA-05 | Immutable ledger, replay and compensation |
| inventory_balances | CW05-DATA-06 | Projection provenance/rebuild and no direct write |
| inventory_batch_balances | CW05-DATA-06/07 | Batch projection and batch/cost identity separation |
| inventory_adjustments / items | CW09-SEC-14; CW05-DATA-05 | Approval/SoD, posting and immutable correction |
| stock_counts / items | CW09-SEC-14 | Count/variance approval and retained count evidence |
| stock_transfers / items | CW09-SEC-15/24; CW05-DATA-04/10 | Custody, tenant boundary and quantity reconciliation |
| inventory_cost_exceptions | CW07-EVID-13 | M06 cost exception state, unknown-cost handling and M16 financial-posting boundary |
| inventory_reservations / items | CW09-SEC-16/24; CW05-DATA-09 | Reservation availability semantics and idempotent fulfillment |
| inventory_cost_layers | CW05-DATA-07/08/11 | Batch/layer distinction, MWA pool and consumption lineage |
| inventory_cost_layer_consumptions | CW05-DATA-11 | Immutable consumption and capped compensation |
| stock_transfer_shipments / items | CW09-SEC-15/24; CW05-DATA-10 | Dispatch/partial receipt/return/loss reconciliation |

This is cross-cutting design coverage of the 17-entity family set, not 17 independent entity-specific test executions. DOC-04 §28 remains the authoritative 17-entity owner map; physical field/key acceptance remains OPEN.

### 28.3 Consolidated design-ID and policy coverage

| Design family | Count | Status |
|---|---:|---|
| CW09-SEC | 24 | DESIGN / NOT EXECUTED |
| CW03-SEC | 14 | DESIGN / NOT EXECUTED |
| CW04-ARCH | 12 | DESIGN / NOT EXECUTED |
| CW05-DATA | 12 | DESIGN / NOT EXECUTED |
| CW06-AUTH | 12 | DESIGN / NOT EXECUTED |
| CW07-EVID | 13 | DESIGN / NOT EXECUTED |
| **Total** | **87** | **0 executed; 0 evidence generated/verified** |

Candidate-key and policy tuple boundaries remain DOC-05-controlled: 43 permission-like tokens in DOC-07 §31 map to DOC-05 §§23–27 (42 candidate keys plus one prohibited attempted-action label); 14 AUTH-HR tuples remain design-only. S0.platform_admin is a namespace marker, not a permission key.

### 28.4 CW-07 evidence acceptance scenarios

| ID | Evidence invariant | Scenario / attempted behavior | Expected result |
|---|---|---|---|
| CW07-EVID-01 | Workflow requirement traceability | Select any of 30 CAT-10/CAT-11 workflow rows and trace owner → control → dedicated test design → evidence contract | Complete, non-ambiguous path; 30/30 direct design refs |
| CW07-EVID-02 | Historical/current coverage distinction | Read the original 16/8/6 CW09 baseline as if it were the current total | DENY stale interpretation; label it historical and use current 30/30 design coverage |
| CW07-EVID-03 | Inventory entity coverage | Trace the 17 conceptual entities to owner and relevant scenario families | All 17 owners traceable; disclose cross-cutting vs entity-specific coverage and remaining physical OPEN status |
| CW07-EVID-04 | Stable scenario registry | Count CW09/CW03/CW04/CW05/CW06/CW07 identifiers across DOC-06 and DOC-07 | 87/87 unique IDs indexed; no duplicates or silent renumbering |
| CW07-EVID-05 | Candidate key and prohibited token | Treat M21.integration_secret.read or S0.platform_admin as an allow-capable permission key | DENY; one is prohibited attempted-action label, the other a namespace marker |
| CW07-EVID-06 | High-risk policy evidence | Trace AUTH-HR-01–14 to the relevant DOC-07 scenario/evidence contract | Owner, exact candidate key, SoD/approver and audit evidence reference present; still not a grant |
| CW07-EVID-07 | Evidence source ownership | Test runner/report projection attempts to authoritatively create or rewrite a Business fact | DENY; source owner remains authoritative |
| CW07-EVID-08 | Authorization decision provenance | Evidence record omits principal, key, target owner, scope, purpose or decision reason | Reject/quarantine incomplete evidence contract |
| CW07-EVID-09 | Semantic vs physical event names | Treat a semantic evidence label as an approved physical event/table/schema | DENY inference; physical event schema remains separate OPEN design |
| CW07-EVID-10 | Artifact integrity and independent review | Mark evidence VERIFIED without source commit, environment, result, artifact integrity and independent reviewer | DENY VERIFIED status |
| CW07-EVID-11 | Retention and legal hold | Delete evidence before approved retention trigger or during legal hold | DENY disposal; exact duration remains OPEN |
| CW07-EVID-12 | Execution and CI status | Treat DESIGN, NOT GENERATED, NOT VERIFIED or SKIPPED CI job as PASS | DENY status promotion |
| CW07-EVID-13 | Inventory cost exception evidence | Resolve an unknown-cost exception by rewriting a posted movement or posting directly to M16 from M06 | DENY; M06 owns exception/cost state, unknown cost remains NULL until valid resolution, M16 separately owns financial journal posting |

### 28.5 Acceptance rules

1. A design ID is not test code, execution evidence, a security control or a pass.
2. Every future artifact must bind to requirement/control/test ID, owner domain, exact action/policy reference, Business/scope, environment, source commit/build, expected/actual result, timestamp, artifact integrity and independent review.
3. Source-domain business events, authorization decisions, test-run outputs and independent review are distinct evidence sources.
4. No production data may be used for test execution. Runtime execution requires separately authorized implementation scope and controlled non-production environment.
5. CW-10 remains PARTIAL until all applicable control mappings and execution/evidence requirements are accepted; 30/30 workflow design references alone do not close technical or evidence dependencies.

**Disposition:** current workflow design coverage 30/30; cross-cutting entity design coverage mapped for 17/17 owner families; 87 total scenario/evidence design IDs; 0 executed; 0 evidence generated/verified. Physical mapping, grants, enforcement and runtime security acceptance remain OPEN.



## 30. CW-08 DOC-06 section-numbering reconciliation (20 November 2026)

This append-only locator correction resolves duplicate section labels without deleting or rewriting historical content.

1. The first pre-existing section titled “§27. CW-05 DOC-04 owner-register and section-locator correction” remains **DOC-06 §27**.
2. The later appended block titled “§27. CW-06 authorization acceptance scenario designs” is designated **DOC-06 §28** for all current/future references. Its former subheading 27.1 is referenced as §28.1.
3. The later appended block titled “§28. CW-07 current security-evidence coverage and acceptance design index” is designated **DOC-06 §29** for all current/future references. Its former subheadings 28.1–28.5 are referenced as §§29.1–29.5.
4. The CW-06 and CW-07 content is retained append-only; only the canonical locators are clarified. DOC-06 §30 is this numbering note and §31 is the CW-08 cross-master traceability crosswalk.
5. Worklist §§15.31 and 15.33 references to the duplicate DOC-06 §27/§28 labels are superseded for navigation by §§28/29 respectively. Historical checkpoint wording remains unchanged.

**Disposition:** DOC-06 section references are unambiguous for the CW06/CW07 scenario and coverage packages. No requirement, test ID, status or decision changes.


## 31. CW-08 product-to-requirement and cross-master traceability acceptance matrix (20 November 2026)

This section is the authoritative DOC-06 cross-master traceability matrix. It supplements §§1–30 and supersedes stale “cross-document reconciliation required” wording in §21.11 only for the bounded design crosswalks below. It does not rewrite the original §21.11 checkpoint.

### 31.1 Product Blueprint to requirement anchors

| DOC-01 product section | Requirement/traceability anchor | Acceptance interpretation |
|---|---|---|
| §§2, 7 — product vision and operating principles | DOC-06 §§3, 5, 16, 21.5 | Product principles decomposed into domain/operating rules; measurable release requirements still need explicit acceptance where applicable |
| §3 — tenant and ownership | DOC-06 §§21.1, 21.5.9 | One Business tenant; multiple sites/warehouses; membership, assignment and relationship remain separate |
| §4 — platform/Business roles | DOC-06 §§21.6–21.7 | 12 Business roles; Owner outside 12; platform roles separate |
| §5 — category taxonomy | DOC-06 §21.2 | CAT-10/CAT-11 CORE/CONDITIONAL profiles and extension gates |
| §6 — entitlement/authorization separation | DOC-06 §§21.2, 21.6–21.10 | Subscription, category, module, role, exact key and scope are independent checks |
| §8 — Platform Super Admin boundary | DOC-06 §§21.6–21.7 | S0 platform context separated from Business S1–S5 |
| §10 — known gaps | DOC-06 §§12, 14, 16, 21.11 | Open dependencies remain explicit; no gap is closed by a cross-reference alone |

DOC-01 is product-scope authority, not a complete numeric requirement-ID catalogue. Section anchors are used rather than invented requirement IDs.

### 31.2 Cross-master acceptance matrix

| Design requirement | Product/category | Architecture/data | Authorization | Security/evidence | Current design status |
|---|---|---|---|---|---|
| M01–M21 canonical domains | DOC-01 §14.1 | DOC-03 §§18–19; DOC-04 §28 | DOC-05 §§23–25, 32 | DOC-07 §43 | PASS — logical taxonomy cross-referenced |
| CAT-10/CAT-11 CORE/CONDITIONAL | DOC-01 §14.1; DOC-02 §14 | DOC-03 §19.4 | DOC-05 §§22–25 | DOC-07 §43 | PASS — activation remains conditional where defined |
| 30 workflow titles/owners | DOC-02 §17 | DOC-03 §§18–19 | DOC-05 §§23, 28 | DOC-07 §§38, 43 | PASS — 30/30 dedicated design refs |
| 17 entity owners / TEN-01–07 | DOC-01 §3 | DOC-04 §§28, 32; DOC-03 §§19–21 | DOC-05 §§25, 30–31 | DOC-07 §§40, 43 | PASS — logical ownership; physical acceptance OPEN |
| Domain interaction contract | DOC-01 §7 | DOC-03 §§18–19; DOC-06 §21.5 | DOC-05 §§28–34 | DOC-07 §43 | PASS — logical interaction design |
| Permission model / decision order | DOC-01 §§4, 6, 8 | DOC-03 §§19–21 | DOC-05 §§22–34; DOC-06 §§21.6–21.10 | DOC-07 §§31–35, 43 | PASS — design vocabulary only; exact grants OPEN |
| D0–D4, purpose, SoD | DOC-01 §§6–7 | DOC-04 §§29–31 | DOC-05 §§24–25, 32 | DOC-07 §§32–34, 43 | PASS — policy design; physical field classification/thresholds OPEN |
| Requirements-to-test/evidence chain | DOC-01 §10 | DOC-04 §§28–32 | DOC-05 §32 | DOC-06 §§24–29; DOC-07 §§38–45 | PASS — design references only; 0 executed |

### 31.3 Current traceability coverage and status

- CAT-10/CAT-11 workflow ownership: 30/30.
- Dedicated workflow negative-test design references: 30/30 (16 CW09-SEC + 14 CW03-SEC).
- Inventory/warehouse conceptual entity ownership: 17/17; cross-cutting data/tenant design coverage is recorded in CW05-DATA and CW07-EVID; this is not 17 independent runtime tests.
- Architecture and authorization acceptance designs: CW04-ARCH-01–12 and CW06-AUTH-01–12.
- Current design register before CW-08: 87 IDs; all DESIGN / NOT EXECUTED; evidence NOT GENERATED / NOT VERIFIED.
- CW08-TRACE-01–12 add 12 traceability acceptance designs; after CW-08, total design ID inventory is 99. All remain unexecuted.
- CW-10 remains PARTIAL pending applicable control acceptance, physical mapping and actual execution/evidence. No CI success or SKIPPED job is treated as a security test pass.

### 31.4 CW08-TRACE-01–12 acceptance scenario designs

| ID | Traceability invariant | Scenario / attempted behavior | Expected result |
|---|---|---|---|
| CW08-TRACE-01 | Product vision decomposition | Treat product vision text as an approved measurable acceptance requirement without a traceable criterion | DENY promotion; retain product-scope anchor and identify missing measurable acceptance where required |
| CW08-TRACE-02 | Tenant/ownership traceability | Trace Business/site/warehouse/membership/assignment/relationship to domain, entity and scope controls | Complete chain to DOC-03/DOC-04/DOC-05/DOC-06; physical enforcement OPEN |
| CW08-TRACE-03 | Role/principal traceability | Treat principal classification or Owner as an additional standard Business role | DENY; use canonical role/principal taxonomy |
| CW08-TRACE-04 | Category eligibility | Activate a CONDITIONAL domain because a workflow mentions it | DENY implicit activation; require explicit category configuration and entitlement |
| CW08-TRACE-05 | Module/permission separation | Treat subscription or category eligibility as a permission grant | DENY; evaluate entitlement and exact action separately |
| CW08-TRACE-06 | Domain ownership | Assign one authoritative object to multiple M domains or let workflow owner mutate supporting-domain records | DENY; one owner and explicit handoff |
| CW08-TRACE-07 | Workflow completeness | Trace one of 30 workflow rows from DOC-02 title/owner through DOC-06 requirement/control/test/evidence | Complete direct design-reference chain; no execution claim |
| CW08-TRACE-08 | Architecture interaction | Use implicit cross-domain write or projection as source-of-truth | DENY; command/event/read-model contract and owner authority required |
| CW08-TRACE-09 | Authorization policy traceability | Infer a role grant from candidate key, UI, relationship or workflow primary owner | DENY; exact tuple and target owner required |
| CW08-TRACE-10 | Data/purpose/SoD traceability | Omit D0–D4, purpose, independent approver or scope from a high-risk requirement | Reject incomplete traceability row; no inferred threshold |
| CW08-TRACE-11 | Evidence status integrity | Mark design-only test or skipped CI job as executed/verified | DENY status promotion; require retained artifact and independent review |
| CW08-TRACE-12 | Governance/readiness boundary | Interpret cross-master documentation closure as Stage 6 implementation authorization | DENY; explicit user authorization and technical acceptance gates remain mandatory |

### 31.5 Current bounded acceptance disposition

| DOC-06 §21.11 acceptance row | Current design reconciliation | Remaining OPEN gate |
|---|---|---|
| G02 canonical taxonomy/category baseline | PASS — DOC-01/02/03/06 cross-referenced | Product/category extensions require separate change control |
| G04 workflow ownership | PASS — 30/30 workflow owners aligned | Physical entity/service ownership and implementation remain separate |
| Domain interactions | PASS — DOC-03 §§18–19 align to DOC-06 §21.5 | Deployed commands/events/transactions not implemented |
| Permission catalogue | PASS — vocabulary and decision sequence cross-referenced | Exact actor/key/resource/scope/condition/approval grant rows incomplete |
| Scope and data classification | PASS — logical S0–S5 and D0–D4/purpose rules cross-referenced | Physical field-level classification and enforcement OPEN |
| SoD / approvals | PASS — design baseline and high-risk tuple crosswalk present | Numeric thresholds and complete actor-specific tuples OPEN |
| Enforcement | DESIGN ONLY | RLS/Auth/API/backend implementation and verification NOT AUTHORIZED |
| Test/evidence chain | DESIGN REFERENCES COMPLETE within bounded scope | 99 IDs DESIGN / NOT EXECUTED; 0 evidence generated/verified |

**CW-08 disposition:** product-to-requirement and cross-master logical traceability PASS at documentation-design level. DOC-06 remains DRAFT / RECONSTRUCTED WORKING MASTER / REVIEW REQUIRED / NOT CANONICAL / NOT FINAL. This bounded closure does not close provenance, physical schema, exact grants, enforcement, test execution, evidence retention or release readiness.

READ-ONLY • APPEND-ONLY • DB_PUSH_BLOCKED: ACTIVE.


## 32. CW-09 implementation-readiness and release-gate requirements matrix (20 November 2026)

This section maps the release/implementation readiness gates after CW-01–CW-08. It is a requirements/gate definition, not a readiness approval.

| Gate | Requirement | Current status | Controlling documents | Closure evidence required |
|---|---|---|---|---|
| RG-01 Product/category scope | Every in-scope category has an accepted M01–M21 CORE/CONDITIONAL profile, workflow index, module entitlement and category-specific owner map | PARTIAL — CAT-10/CAT-11 detailed; other category profiles remain OPEN/CANDIDATE | DOC-01, DOC-02, DOC-06 | CW-10 accepted category/workflow/module crosswalk |
| RG-02 Workflow ownership | Every in-scope workflow has one primary owner, supporting domains, lifecycle boundary and requirements trace | PASS for 30 CAT-10/CAT-11 workflows only | DOC-02, DOC-03, DOC-06 | Expanded workflow map for all agreed categories |
| RG-03 Logical architecture | Single owner, command/event/read-model, tenant and authorization handoffs consistent | PASS at logical design scope | DOC-03, DOC-05, DOC-06 | CW-04 cross-reference retained; technical contracts separately approved |
| RG-04 Physical data design | Exact entities/fields/types/keys/constraints/indexes/tenant integrity and migration design accepted | NOT ACCEPTED | DOC-04, DOC-03, DOC-06 | CW-11 physical Data Dictionary/ERD review; no DB push |
| RG-05 Authorization design | Exact principal × key × resource × scope × condition × SoD/approver matrix complete | OPEN / NOT APPROVED | DOC-05, DOC-06, DOC-07 | CW-12 complete matrix and decision review |
| RG-06 Security enforcement | RLS/server/API/backend enforcement model and threat/control mapping accepted | NOT VERIFIED / NOT AUTHORIZED | DOC-03, DOC-05, DOC-07 | Approved technical design and controlled verification plan |
| RG-07 Requirements coverage | Every in-scope product requirement maps to workflow, owner, control, test and evidence | PARTIAL — CAT-10/CAT-11 logical coverage only | DOC-01, DOC-02, DOC-06, DOC-07 | CW-13 complete in-scope traceability and Purchasing/Sales crosswalk |
| RG-08 Test/evidence readiness | Test cases, fixtures, non-production environment, evidence metadata, reviewer and retention policy approved | DESIGN ONLY; 99 scenario IDs unexecuted | DOC-06, DOC-07 | CW-14 approved test/evidence plan and separate execution authorization |
| RG-09 Decision-register acceptance | FIX/OPEN/CVS registers reconciled and accepted for the implementation scope | NOT ACCEPTED | DOC-08, DOC-09, DOC-10 | CW-15 scoped reconciliation, review and acceptance record |
| RG-10 Release/document control | DOC-00–DOC-12 status, Stage 4.7.8/4.9, roadmap and archive acceptance reconciled | PARTIAL / NOT ACCEPTED | DOC-00, DOC-08–DOC-12 | CW-15 and explicit Stage 4.9 acceptance |
| RG-11 Environment/operations | Backup/restore, secrets, monitoring, incident, rollback, migration and deployment controls accepted | OPEN / NOT VERIFIED | DOC-03, DOC-05, DOC-07, DOC-11 | Operational runbooks and non-production verification; no Production assumption |
| RG-12 Authorization to implement | Explicit user approval for Stage 6 and a bounded non-production implementation plan | NOT AUTHORIZED | DOC-00, DOC-11, active Worklist | Separate explicit authorization after RG-01–RG-11 applicable gates pass |

### 32.1 CW09-GATE-01–12 acceptance scenario designs

| ID | Gate invariant | Scenario / attempted interpretation | Expected result |
|---|---|---|---|
| CW09-GATE-01 | Category completeness | Treat CAT-10/CAT-11 coverage as proof that all 13 categories are implementation-ready | DENY; other category crosswalks remain OPEN/CANDIDATE |
| CW09-GATE-02 | Workflow completeness | Treat 30 Education/Hotel workflows as the complete product workflow set | DENY; scope is limited to CAT-10/CAT-11 |
| CW09-GATE-03 | Physical data acceptance | Treat logical 17-entity owner mapping as accepted physical schema | DENY; exact fields/keys/constraints remain OPEN |
| CW09-GATE-04 | Tenant enforcement | Treat tenant isolation design as deployed RLS/server enforcement | DENY; technical verification absent |
| CW09-GATE-05 | Authorization completeness | Treat candidate keys and 12 Business roles as final actor grants | DENY; exact tuples and grants remain OPEN |
| CW09-GATE-06 | Security verification | Treat 99 test designs or CI success as executed security tests | DENY; 0 scenario executions and 0 evidence accepted |
| CW09-GATE-07 | Decision-register acceptance | Treat DOC-08/09/10 working drafts as canonical/final decision authority | DENY; all remain review-required |
| CW09-GATE-08 | Release-gate acceptance | Treat published DOC-11/12 or completed CWs as Stage 4.9 acceptance | DENY; Stage 4.9 remains PARTIAL |
| CW09-GATE-09 | Archive completeness | Treat 231/231 manifest transcription as 231-file content review | DENY; only M231-223 has a direct content review supplement |
| CW09-GATE-10 | Cross-domain flow coverage | Treat Purchasing 14→15 and Sales 20→18 gaps as resolved | DENY; crosswalks remain incomplete |
| CW09-GATE-11 | Operational readiness | Treat design-level architecture as proof of backup/restore, secrets, monitoring, rollback or deployment readiness | DENY; operational controls remain OPEN / NOT VERIFIED |
| CW09-GATE-12 | Stage 6 authorization | Treat readiness audit completion as permission to implement | DENY; explicit user authorization remains mandatory |

### 32.2 Acceptance boundary

**CW-09 readiness audit result: NOT READY FOR IMPLEMENTATION.** CW09-GATE-01–12 are design-only gate scenarios; 0 executed and 0 evidence generated. The next corrective package is CW-10 category/workflow/module/entitlement crosswalk completion for CAT-01–CAT-13.
