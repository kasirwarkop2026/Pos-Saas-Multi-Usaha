"use client";

import { useMemo, useState } from "react";
import styles from "./platform-admin.module.css";

type Section = "Dashboard" | "Monitoring Tenant" | "Operasional Harga" | "Permintaan Refund" | "Support" | "Akses Bantuan" | "Audit Aktivitas";
const navigation: { group: string; items: Section[] }[] = [
  { group: "RINGKASAN", items: ["Dashboard"] },
  { group: "OPERASIONAL", items: ["Monitoring Tenant", "Operasional Harga", "Permintaan Refund", "Support"] },
  { group: "KONTROL AKSES", items: ["Akses Bantuan", "Audit Aktivitas"] },
];
const tenants = [
  { id: "BIZ-DEMO-001", name: "Kedai Kopi Nusantara", owner: "Rizky Pratama", region: "Banda Aceh", plan: "Pro", status: "Aktif", health: "Normal" },
  { id: "BIZ-DEMO-002", name: "Toko Berkah Jaya", owner: "Siti Rahma", region: "Aceh Besar", plan: "Basic", status: "Aktif", health: "Perlu ditinjau" },
  { id: "BIZ-DEMO-003", name: "Depot Air Sejuk", owner: "Fajar Hidayat", region: "Banda Aceh", plan: "Pro", status: "Menunggu", health: "Normal" },
  { id: "BIZ-DEMO-004", name: "Roti Pagi", owner: "Dina Amelia", region: "Lhokseumawe", plan: "Basic", status: "Aktif", health: "Normal" },
];
const requests = [
  { id: "OPS-DEMO-001", title: "Penyesuaian harga paket Pro", tenant: "Platform", status: "Menunggu persetujuan", type: "Permintaan perubahan harga", date: "14 Nov 2026 · 09.20" },
  { id: "OPS-DEMO-002", title: "Refund invoice INV-DEMO-003", tenant: "BIZ-DEMO-003", status: "Menunggu Super Admin", type: "Permintaan refund", date: "14 Nov 2026 · 08.45" },
  { id: "OPS-DEMO-003", title: "Investigasi kendala laporan", tenant: "BIZ-DEMO-002", status: "Dalam peninjauan", type: "Support", date: "13 Nov 2026 · 16.10" },
];
const audit = [
  { id: "AUD-DEMO-101", action: "TENANT_STATUS_VIEW", target: "BIZ-DEMO-001", result: "Berhasil", time: "14 Nov 2026 · 09.15" },
  { id: "AUD-DEMO-102", action: "PRICE_CHANGE_REQUEST", target: "PLAN-DEMO-PRO", result: "Diajukan", time: "14 Nov 2026 · 09.20" },
  { id: "AUD-DEMO-103", action: "REFUND_REQUEST", target: "INV-DEMO-003", result: "Menunggu", time: "14 Nov 2026 · 08.45" },
  { id: "AUD-DEMO-104", action: "CROSS_TENANT_ACCESS_DENIED", target: "BIZ-DEMO-004", result: "Ditolak", time: "13 Nov 2026 · 17.02" },
];

export default function PlatformAdminPage() {
  const [active, setActive] = useState<Section>("Dashboard");
  const [query, setQuery] = useState("");
  const [selectedTenant, setSelectedTenant] = useState<(typeof tenants)[number] | null>(null);
  const [notice, setNotice] = useState("");
  const [requestType, setRequestType] = useState("Permintaan operasional");
  const [requestReason, setRequestReason] = useState("");
  const [requestOpen, setRequestOpen] = useState(false);
  const filteredTenants = useMemo(() => tenants.filter(t => [t.name, t.id, t.owner, t.region].join(" ").toLowerCase().includes(query.toLowerCase())), [query]);
  const title = active;
  const descriptions: Record<Section, string> = {
    "Dashboard": "Ringkasan pekerjaan operasional dalam batas penugasan Platform Admin.",
    "Monitoring Tenant": "Pemantauan status tenant dan informasi operasional. Tidak ada perubahan status langsung.",
    "Operasional Harga": "Perubahan harga terarah hanya tersedia jika grant individual dan scope target sesuai; perubahan massal khusus Super Admin.",
    "Permintaan Refund": "Platform Admin dapat mengajukan refund; keputusan tetap berada pada Super Admin.",
    "Support": "Penanganan tiket bantuan dan koordinasi operasional sesuai penugasan.",
    "Akses Bantuan": "Akses lintas tenant harus spesifik, beralasan, terbatas waktu, dan diaudit.",
    "Audit Aktivitas": "Riwayat tindakan operasional dalam cakupan akses yang diizinkan.",
  };
  function openRequest(type: string) { setRequestType(type); setRequestReason(""); setRequestOpen(true); }
  function submitDemoRequest() { setRequestOpen(false); setNotice("Permintaan DEMO dicatat secara lokal pada pratinjau ini. Tidak ada tindakan backend atau perubahan produksi."); }

  return <div className={styles.shell}>
    <aside className={styles.sidebar}>
      <div className={styles.brand}><div className={styles.logo}>P</div><div><b>POS SaaS</b><small>PLATFORM ADMIN</small></div></div>
      {navigation.map(group => <div key={group.group}><div className={styles.group}>{group.group}</div>{group.items.map(item => <button key={item} className={active === item ? styles.navActive : styles.nav} onClick={() => {setActive(item);setNotice("");}}><span className={styles.navMark}>{item === "Dashboard" ? "⌂" : item === "Monitoring Tenant" ? "▦" : item === "Operasional Harga" ? "↗" : item === "Permintaan Refund" ? "↩" : item === "Support" ? "?" : item === "Akses Bantuan" ? "◈" : "≡"}</span>{item}</button>)}</div>)}
      <div className={styles.sidebarFoot}><span className={styles.dot}/> Lingkungan pratinjau<br/><small>Data ilustrasi · tanpa backend</small></div>
    </aside>
    <main className={styles.main}>
      <header className={styles.topbar}><div><span className={styles.breadcrumb}>Platform / Administrasi / </span><b>{active}</b></div><div className={styles.profile}><span className={styles.avatar}>PA</span><div><b>Platform Admin</b><small>Akses operasional terbatas</small></div></div></header>
      <div className={styles.content}>
        <div className={styles.pageHead}><div><div className={styles.eyebrow}>PANEL OPERASIONAL PLATFORM</div><h1>{title}</h1><p>{descriptions[active]}</p></div><span className={styles.demo}>DEMO · FRONTEND ONLY</span></div>
        {notice && <div className={styles.notice} role="status">{notice}</div>}
        {active === "Dashboard" && <>
          <div className={styles.stats}>
            <article><small>Tiket yang ditugaskan</small><strong>02</strong><span>Contoh antrean pribadi · DEMO</span></article>
            <article><small>Refund yang diajukan</small><strong>01</strong><span>Status dapat dipantau · DEMO</span></article>
            <article><small>Keputusan menunggu Super Admin</small><strong>01</strong><span>Hanya status read-only · DEMO</span></article>
            <article><small>Tindak lanjut support</small><strong>02</strong><span>Contoh assignment · DEMO</span></article>
          </div>
          <div className={styles.grid}>
            <section className={styles.card}><div className={styles.cardHead}><div><h2>Antrean pekerjaan</h2><p>Contoh tugas yang ditugaskan pada akun ini, bukan ringkasan global tenant atau platform.</p></div><span className={styles.pill}>DEMO</span></div>{requests.map(r=><div className={styles.request} key={r.id}><div><b>{r.title}</b><small>{r.id} · {r.type}</small></div><span>{r.status}</span></div>)}</section>
            <section className={styles.card}><div className={styles.cardHead}><div><h2>Batas kewenangan</h2><p>Pengingat kontrol operasional</p></div></div><ul className={styles.rules}><li>Perubahan harga terarah memerlukan grant individual dan scope target yang cocok.</li><li>Refund memerlukan keputusan Super Admin.</li><li>Tidak ada self-approval.</li><li>Akses lintas tenant harus dibatasi dan memiliki alasan.</li><li>Seluruh tindakan produksi wajib diaudit di sisi server.</li></ul></section>
          </div>
        </>}
        {active === "Monitoring Tenant" && <section className={styles.card}>
          <div className={styles.toolbar}><div><h2>Tenant dalam cakupan operasional</h2><p>Informasi tenant contoh. Perubahan status tidak tersedia.</p></div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari nama, ID, pemilik, wilayah…"/></div>
          <div className={styles.tableWrap}><table><thead><tr><th>BUSINESS</th><th>PEMILIK</th><th>WILAYAH</th><th>PAKET</th><th>STATUS</th><th>KESEHATAN</th><th></th></tr></thead><tbody>{filteredTenants.map(t=><tr key={t.id}><td><b>{t.name}</b><small>{t.id}</small></td><td>{t.owner}</td><td>{t.region}</td><td>{t.plan}</td><td><span className={styles.tag}>{t.status}</span></td><td>{t.health}</td><td><button className={styles.link} onClick={()=>setSelectedTenant(t)}>Lihat ringkasan</button></td></tr>)}</tbody></table>{filteredTenants.length===0&&<div className={styles.empty}>Tidak ada tenant yang cocok.</div>}</div>
        </section>}
        {active === "Operasional Harga" && <div className={styles.grid}>
          <section className={styles.card}><h2>Perubahan harga terarah · DEMO</h2><p>Simulasi perubahan untuk satu target paket. Pada implementasi nyata, tindakan langsung hanya boleh dilakukan jika akun memiliki grant individual khusus dan scope target sesuai.</p><div className={styles.priceRow}><div><b>Paket Basic</b><small>Target tunggal · harga ilustrasi saat ini</small></div><strong>Rp99.000/bln</strong></div><div className={styles.priceRow}><div><b>Paket Pro</b><small>Target tunggal · harga ilustrasi saat ini</small></div><strong>Rp199.000/bln</strong></div><button className={styles.primary} onClick={()=>openRequest("Simulasi perubahan harga terarah · satu target")}>Simulasikan perubahan terarah</button><p className={styles.warning}>Tidak ada perubahan harga yang diterapkan. Approval tambahan hanya berlaku bila diwajibkan kebijakan; perubahan massal tetap SUPER_ADMIN-only.</p></section>
          <section className={styles.card}><h2>Kontrol perubahan</h2><ul className={styles.rules}><li>Grant harus bersifat individual, spesifik pada akun, dan sesuai target.</li><li>Scope target dan perubahan yang diminta harus terlihat sebelum konfirmasi.</li><li>Approval tambahan hanya diterapkan jika kebijakan yang disahkan mewajibkannya.</li><li>Perubahan massal hanya dapat dilakukan SUPER_ADMIN.</li><li>Server wajib memvalidasi grant, scope, nilai, status, dan mencatat audit.</li></ul></section>
        </div>}
        {active === "Permintaan Refund" && <div className={styles.grid}>
          <section className={styles.card}><h2>Pengajuan refund</h2><p>Platform Admin dapat memulai permintaan refund. Super Admin menjadi pihak yang menyetujui atau menolak.</p><div className={styles.priceRow}><div><b>INV-DEMO-003</b><small>Depot Air Sejuk · BIZ-DEMO-003</small></div><strong>Rp199.000</strong></div><button className={styles.primary} onClick={()=>openRequest("Permintaan refund")}>Ajukan refund DEMO</button></section>
          <section className={styles.card}><h2>Alur persetujuan</h2><div className={styles.step}><b>1. Platform Admin</b><span>Mengajukan dan memberi alasan</span></div><div className={styles.step}><b>2. Super Admin</b><span>Meninjau, menyetujui, atau menolak</span></div><div className={styles.step}><b>3. Audit</b><span>Keputusan dan eksekusi dicatat</span></div><p className={styles.warning}>Tidak ada tombol persetujuan refund pada panel Platform Admin.</p></section>
        </div>}
        {active === "Support" && <section className={styles.card}><div className={styles.cardHead}><div><h2>Tiket bantuan</h2><p>Contoh daftar tiket untuk penanganan operasional.</p></div><button className={styles.secondary} onClick={()=>openRequest("Permintaan tindak lanjut support")}>Catat tindak lanjut DEMO</button></div>{[["TKT-DEMO-001","Tidak bisa login setelah ganti perangkat","Tinggi","Menunggu Support"],["TKT-DEMO-002","Perbedaan total pada laporan penjualan","Normal","Dalam Penanganan"],["TKT-DEMO-004","Pembayaran belum tercermin pada tagihan","Tinggi","Baru"]].map(t=><div className={styles.request} key={t[0]}><div><b>{t[1]}</b><small>{t[0]}</small></div><span>{t[2]} · {t[3]}</span></div>)}</section>}
        {active === "Akses Bantuan" && <div className={styles.grid}>
          <section className={styles.card}><h2>Permintaan akses lintas tenant</h2><p>Akses bantuan bukan akses tenant permanen. Setiap sesi harus spesifik, memiliki alasan, masa berlaku, dan ruang lingkup.</p><button className={styles.primary} onClick={()=>openRequest("Permintaan akses bantuan lintas tenant")}>Buat permintaan akses DEMO</button></section>
          <section className={styles.card}><h2>Prinsip akses</h2><ul className={styles.rules}><li>Target Business wajib ditentukan.</li><li>Alasan dan tiket terkait wajib dicatat.</li><li>Default read-only dan time-bound.</li><li>Akses tulis membutuhkan grant terpisah dan persetujuan Super Admin.</li><li>Tidak ada akses lintas tenant secara otomatis.</li></ul></section>
        </div>}
        {active === "Audit Aktivitas" && <section className={styles.card}><div className={styles.cardHead}><div><h2>Aktivitas operasional</h2><p>Contoh catatan read-only. Audit produksi harus immutable dan dicatat server-side.</p></div><span className={styles.pill}>READ ONLY</span></div><div className={styles.tableWrap}><table><thead><tr><th>WAKTU</th><th>ID</th><th>AKTIVITAS</th><th>OBJEK</th><th>HASIL</th></tr></thead><tbody>{audit.map(a=><tr key={a.id}><td>{a.time}</td><td>{a.id}</td><td>{a.action}</td><td>{a.target}</td><td>{a.result}</td></tr>)}</tbody></table></div></section>}
        <div className={styles.footer}>POS SaaS Multi-Usaha · Platform Admin UI · Semua data bersifat ilustrasi</div>
      </div>
    </main>
    {selectedTenant && <div className={styles.backdrop} onClick={()=>setSelectedTenant(null)}><section className={styles.modal} onClick={e=>e.stopPropagation()}><button className={styles.close} onClick={()=>setSelectedTenant(null)}>×</button><span className={styles.eyebrow}>RINGKASAN TENANT · DEMO</span><h2>{selectedTenant.name}</h2><p>{selectedTenant.id}</p><div className={styles.detail}><span>Pemilik</span><b>{selectedTenant.owner}</b><span>Wilayah</span><b>{selectedTenant.region}</b><span>Paket</span><b>{selectedTenant.plan}</b><span>Status</span><b>{selectedTenant.status}</b><span>Kesehatan</span><b>{selectedTenant.health}</b></div><p className={styles.warning}>Tampilan ini hanya ringkasan. Tidak tersedia tindakan aktivasi, deaktivasi, atau perubahan data tenant.</p></section></div>}
    {requestOpen && <div className={styles.backdrop} onClick={()=>setRequestOpen(false)}><section className={styles.modal} onClick={e=>e.stopPropagation()}><button className={styles.close} onClick={()=>setRequestOpen(false)}>×</button><span className={styles.eyebrow}>FORM PRATINJAU · DEMO</span><h2>{requestType}</h2><p>Simulasi pengajuan lokal. Tidak mengirim permintaan ke server.</p><label className={styles.formLabel}>Alasan / konteks<textarea rows={4} value={requestReason} onChange={e=>setRequestReason(e.target.value)} placeholder="Tuliskan alasan untuk contoh pengajuan…"/></label><div className={styles.modalActions}><button className={styles.secondary} onClick={()=>setRequestOpen(false)}>Batal</button><button className={styles.primary} disabled={!requestReason.trim()} onClick={submitDemoRequest}>Simpan simulasi</button></div></section></div>}
  </div>;
}
