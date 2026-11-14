"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock3, LockKeyhole, Search, ShieldCheck, Users } from "lucide-react";

type CapabilityConcept = {
  name: string;
  group: string;
  description: string;
  risk: "Rendah" | "Sedang" | "Tinggi";
  guardrail: string;
};

const capabilityConcepts: CapabilityConcept[] = [
  { name: "Melihat dashboard operasional", group: "Monitoring", description: "Melihat ringkasan operasional platform sesuai lingkup tugas dan batas data.", risk: "Rendah", guardrail: "Scope dan field yang boleh terlihat masih harus ditetapkan." },
  { name: "Membaca detail bisnis secara read-only", group: "Tenant", description: "PLATFORM_ADMIN hanya dapat membaca detail bisnis dengan kewenangan individual, scope target yang cocok, dan field allowlist.", risk: "Sedang", guardrail: "Field allowlist final per kategori bisnis masih OPEN." },
  { name: "Aktivasi atau deaktivasi tenant", group: "Tenant", description: "Tindakan dapat dilakukan PLATFORM_ADMIN hanya jika memiliki permission individual khusus untuk target yang sesuai.", risk: "Tinggi", guardrail: "Scope target dan detail teknis permission belum final; tindakan harus diaudit server-side." },
  { name: "Melihat pengguna tenant", group: "Pengguna Tenant", description: "Melihat data Owner dan staff hanya sejauh diperlukan untuk tugas yang diizinkan.", risk: "Sedang", guardrail: "Minimum necessary fields dan scope harus diberlakukan." },
  { name: "Melihat paket dan langganan", group: "Billing", description: "Membaca informasi paket, status langganan, dan tagihan sesuai lingkup tugas.", risk: "Rendah", guardrail: "Data yang dapat dibaca tetap memerlukan scope dan field allowlist." },
  { name: "Menindaklanjuti verifikasi pembayaran", group: "Billing", description: "Menangani langkah operasional pembayaran sesuai proses yang kelak disahkan.", risk: "Tinggi", guardrail: "Sumber verifikasi, lifecycle, dan batas tindakan harus ditetapkan sebelum implementasi." },
  { name: "Mengajukan permintaan refund", group: "Billing", description: "PLATFORM_ADMIN dapat mengajukan refund; keputusan refund dilakukan SUPER_ADMIN.", risk: "Tinggi", guardrail: "Pemohon tidak dapat menyetujui pengajuannya sendiri; review dan pemrosesan adalah tahap terpisah." },
  { name: "Mengajukan perubahan harga terarah", group: "Harga", description: "PLATFORM_ADMIN dapat mengubah harga hanya untuk target tertentu jika memiliki permission khusus.", risk: "Tinggi", guardrail: "Perubahan harga massal hanya SUPER_ADMIN. Batas nominal, tanggal efektif, dan approval tambahan masih OPEN." },
  { name: "Menangani tiket support", group: "Support", description: "Menangani tiket berdasarkan assignment dan scope tugas dengan data pelanggan minimum yang diperlukan.", risk: "Sedang", guardrail: "Kategori tiket, SLA, attachment access, dan detail assignment masih OPEN." },
  { name: "Mengajukan sesi bantuan lintas tenant", group: "Akses Bantuan", description: "Mengajukan sesi pada bisnis sasaran tertentu dengan alasan dan expiry; read-only menjadi default.", risk: "Tinggi", guardrail: "Write access memerlukan grant terpisah dan persetujuan SUPER_ADMIN." },
  { name: "Membaca audit dalam lingkup tugas", group: "Audit", description: "Melihat aktivitas sendiri dan aktivitas target/tiket yang berada dalam scope tugas.", risk: "Sedang", guardrail: "Audit global hanya SUPER_ADMIN; batas riwayat aktivitas admin lain masih OPEN." },
  { name: "Melihat analitik platform", group: "Monitoring", description: "Melihat metrik platform yang memang diizinkan tanpa melewati batas tenant dan privasi.", risk: "Rendah", guardrail: "Definisi metrik, sumber data, dan freshness masih perlu ditetapkan." },
  { name: "Melihat notifikasi operasional", group: "Monitoring", description: "Membaca notifikasi yang ditujukan pada lingkup operasional terkait.", risk: "Rendah", guardrail: "Jenis notifikasi dan scope penerima masih perlu ditetapkan." }
];

const groups = ["Semua kategori", ...Array.from(new Set(capabilityConcepts.map((item) => item.group)))];

export default function PlatformAdminGovernance() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("Semua kategori");
  const [selected, setSelected] = useState(capabilityConcepts[0].name);
  const [preview, setPreview] = useState<string[]>([]);
  const filtered = useMemo(
    () => capabilityConcepts.filter((item) =>
      (group === "Semua kategori" || item.group === group) &&
      [item.name, item.group, item.description, item.guardrail, item.risk]
        .join(" ").toLocaleLowerCase("id-ID").includes(query.trim().toLocaleLowerCase("id-ID"))
    ),
    [group, query]
  );
  const current = capabilityConcepts.find((item) => item.name === selected) ?? capabilityConcepts[0];
  const toggle = (name: string) => setPreview((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);

  return <div className="platform-admin-governance">
    <div className="card platform-governance-banner"><AlertTriangle size={17}/><div><b>Rancangan konseptual — bukan katalog permission final</b><p>Tidak ada identitas administrator fiktif. Daftar ini menggambarkan kebutuhan capability untuk review, bukan permission key, grant, atau konfigurasi akses yang sudah disahkan.</p></div></div>
    <div className="platform-role-grid">
      <div className="card platform-role-card"><div className="platform-role-heading"><ShieldCheck size={17}/><div><h3>SUPER_ADMIN</h3><span>Kendali dan tata kelola platform</span></div><b className="role-chip">Platform role</b></div><ul><li>Mengelola katalog permission serta grant/revoke administrator platform.</li><li>Menyetujui tindakan yang secara konseptual memang mensyaratkan approval.</li><li>Menangani keputusan refund dan akses audit global.</li><li>Penghapusan permanen bisnis hanya melalui prosedur khusus SUPER_ADMIN.</li></ul></div>
      <div className="card platform-role-card"><div className="platform-role-heading"><Users size={17}/><div><h3>PLATFORM_ADMIN</h3><span>Satu role dengan kewenangan individual</span></div><b className="role-chip">Platform role</b></div><ul><li>Role label yang sama tidak berarti kumpulan permission yang sama.</li><li>Akses efektif bergantung pada grant individual, scope target, status, dan expiry.</li><li>Tidak dapat self-grant, mengubah grant admin lain, atau menyetujui refund yang diajukan sendiri.</li><li>Tidak memiliki audit global atau perubahan harga massal.</li></ul></div>
    </div>
    <section className="card platform-permission-section">
      <div className="platform-permission-head"><div><h2>Capability yang perlu ditinjau</h2><p>Daftar kebutuhan akses konseptual; bukan daftar permission key final.</p></div><span className="demo-pill">PROPOSED / REVIEW</span></div>
      <div className="platform-permission-toolbar"><div className="search-wrap"><Search size={14}/><input className="search" aria-label="Cari capability" placeholder="Cari capability atau keterangan..." value={query} onChange={(event) => setQuery(event.target.value)}/></div><select aria-label="Filter kategori capability" value={group} onChange={(event) => setGroup(event.target.value)}>{groups.map((item) => <option key={item}>{item}</option>)}</select></div>
      <div className="platform-permission-layout">
        <div className="platform-permission-list">{filtered.map((item) => <button type="button" key={item.name} className={selected === item.name ? "platform-permission-item selected" : "platform-permission-item"} onClick={() => setSelected(item.name)}><span><b>{item.name}</b><small>{item.group} · Konsep, bukan permission key</small></span><span className={"permission-risk risk-" + item.risk.toLowerCase()}>{item.risk}</span></button>)}{filtered.length === 0 && <div className="empty-state">Tidak ada capability yang cocok.</div>}</div>
        <div className="platform-permission-detail"><span className="settings-label">DETAIL KONSEP</span><h3>{current.name}</h3><p>{current.description}</p><div className="permission-approval"><LockKeyhole size={14}/><span>{current.guardrail}</span></div><label className="permission-preview-check"><input type="checkbox" checked={preview.includes(current.name)} onChange={() => toggle(current.name)}/> Masukkan ke daftar review lokal</label><small>Centang hanya mengubah pratinjau pada halaman ini. Tidak membuat permission key atau grant.</small></div>
      </div>
      <div className="platform-preview-summary"><div><b>Konsep dipilih untuk review: {preview.length}</b><p>{preview.length ? preview.join(" · ") : "Belum ada konsep yang dipilih."}</p></div><button type="button" className="secondary-btn" onClick={() => setPreview([])} disabled={preview.length === 0}>Kosongkan pratinjau</button></div>
    </section>
    <div className="platform-policy-grid">
      <div className="card platform-policy-card"><div><Clock3 size={16}/><b>Grant berbatas waktu</b></div><p>Grant elevated dan akses lintas tenant bersifat time-bound secara default. Grant sementara auto-expire dan tidak diperpanjang diam-diam.</p></div>
      <div className="card platform-policy-card"><div><CheckCircle2 size={16}/><b>Least privilege & review</b></div><p>Grant berkelanjutan memerlukan alasan, scope minimum, dan peninjauan berkala. Detail durasi standar masih OPEN.</p></div>
      <div className="card platform-policy-card"><div><ShieldCheck size={16}/><b>Audit & pemisahan tugas</b></div><p>Grant, revoke, expiry, approval, dan penggunaan akses sensitif harus tercatat. Tidak ada self-approval atau auto-approval.</p></div>
    </div>
    <div className="card platform-role-boundaries"><h3 className="card-title">Batas kewenangan dan implementasi</h3><p><b>Hanya SUPER_ADMIN:</b> mengelola permission catalogue dan grant/revoke administrator platform, melihat audit global, melakukan perubahan harga massal, serta penghapusan permanen bisnis melalui prosedur khusus.</p><p><b>PLATFORM_ADMIN:</b> aktivasi/deaktivasi tenant dan perubahan harga hanya dengan permission individual khusus serta scope target yang sesuai. Refund hanya dapat diajukan; keputusan tetap pada SUPER_ADMIN.</p><p><b>Cross-tenant support:</b> wajib bisnis sasaran, alasan, expiry, dan default read-only. Write access memerlukan grant terpisah serta approval SUPER_ADMIN.</p><p className="demo-disclaimer">UI ini tidak menegakkan authorization. Enforcement wajib berada di server/database; menyembunyikan komponen UI bukan kontrol keamanan. Semua data dan interaksi tetap DEMO lokal. Tidak ada backend, database, atau akun yang diubah.</p></div>
  </div>;
}
