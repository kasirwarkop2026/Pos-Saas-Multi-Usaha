"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock3, LockKeyhole, Search, ShieldCheck, Users } from "lucide-react";

type Permission = { id:string; name:string; group:string; description:string; risk:"Rendah"|"Sedang"|"Tinggi"; approval:string; };
const permissions:Permission[] = [
 {id:"dashboard.read",name:"Lihat dashboard operasional",group:"Monitoring",description:"Melihat ringkasan operasional platform yang tersedia sesuai lingkup akses.",risk:"Rendah",approval:"Grant sesuai kebutuhan tugas"},
 {id:"tenant.read",name:"Lihat daftar dan detail tenant",group:"Tenant",description:"Membaca data profil dan status tenant tanpa mengubah data.",risk:"Rendah",approval:"Grant sesuai kebutuhan tugas"},
 {id:"tenant.status.change",name:"Ajukan perubahan status tenant",group:"Tenant",description:"Mengajukan aktivasi atau penonaktifan tenant; eksekusi harus mengikuti otorisasi dan audit server.",risk:"Tinggi",approval:"Permission khusus, alasan wajib, audit wajib"},
 {id:"tenant.user.read",name:"Lihat pengguna tenant",group:"Pengguna Tenant",description:"Melihat direktori akun Owner dan staff tenant dalam lingkup yang diizinkan.",risk:"Sedang",approval:"Grant terbatas pada kebutuhan tugas"},
 {id:"subscription.read",name:"Lihat paket dan langganan",group:"Billing",description:"Membaca paket, status langganan, dan informasi tagihan.",risk:"Rendah",approval:"Grant sesuai kebutuhan tugas"},
 {id:"payment.verify",name:"Tindak lanjut verifikasi pembayaran",group:"Billing",description:"Melakukan langkah operasional verifikasi pembayaran yang ditetapkan; bukan mengubah bukti pembayaran dari klien.",risk:"Tinggi",approval:"Permission khusus, verifikasi sumber pembayaran, audit wajib"},
 {id:"refund.request",name:"Ajukan permintaan refund",group:"Billing",description:"Mengajukan refund untuk ditinjau. Platform Admin tidak menyetujui permintaannya sendiri.",risk:"Tinggi",approval:"Persetujuan Super Admin; larangan self-approval"},
 {id:"support.manage",name:"Kelola tiket support",group:"Support",description:"Melihat dan menangani tiket sesuai penugasan serta batas data yang diperlukan.",risk:"Sedang",approval:"Grant sesuai cakupan tugas dan audit"},
 {id:"cross_tenant.request",name:"Ajukan akses bantuan lintas tenant",group:"Akses Bantuan",description:"Mengajukan sesi bantuan dengan target tenant, alasan, masa berlaku, dan default read-only.",risk:"Tinggi",approval:"Persetujuan terpisah; write access memerlukan grant tambahan dan persetujuan Super Admin"},
 {id:"audit.scoped.read",name:"Lihat audit dalam lingkup tugas",group:"Audit",description:"Membaca aktivitas sendiri dan target yang sedang ditangani; bukan audit global.",risk:"Sedang",approval:"Lingkup terbatas; audit global hanya Super Admin"},
 {id:"analytics.read",name:"Lihat analitik platform",group:"Monitoring",description:"Melihat metrik platform yang tidak melewati batas tenant dan privasi.",risk:"Rendah",approval:"Grant sesuai kebutuhan tugas"},
 {id:"notification.read",name:"Lihat notifikasi operasional",group:"Monitoring",description:"Membaca notifikasi yang ditujukan ke lingkup operasional terkait.",risk:"Rendah",approval:"Grant sesuai kebutuhan tugas"}
];
const groups=["Semua kategori",...Array.from(new Set(permissions.map(p=>p.group)))];

export default function PlatformAdminGovernance(){
 const [query,setQuery]=useState("");
 const [group,setGroup]=useState("Semua kategori");
 const [selected,setSelected]=useState(permissions[0].id);
 const [preview,setPreview]=useState<string[]>([]);
 const filtered=useMemo(()=>permissions.filter(p=>(group==="Semua kategori"||p.group===group)&&[p.id,p.name,p.description,p.approval,p.risk].join(" ").toLocaleLowerCase("id-ID").includes(query.trim().toLocaleLowerCase("id-ID"))),[group,query]);
 const current=permissions.find(p=>p.id===selected)??permissions[0];
 const toggle=(id:string)=>setPreview(items=>items.includes(id)?items.filter(x=>x!==id):[...items,id]);
 return <div className="platform-admin-governance">
  <div className="card platform-governance-banner"><AlertTriangle size={17}/><div><b>Direktori akun belum terhubung</b><p>Tidak ada identitas administrator fiktif yang ditampilkan. Katalog di bawah adalah rancangan permission dan pratinjau pemilihan lokal, bukan pemberian akses nyata.</p></div></div>
  <div className="platform-role-grid">
   <div className="card platform-role-card"><div className="platform-role-heading"><ShieldCheck size={17}/><div><h3>SUPER_ADMIN</h3><span>Kendali dan tata kelola platform</span></div><b className="role-chip">Platform role</b></div><ul><li>Mengelola direktori administrator platform dan katalog permission.</li><li>Memberikan, meninjau, dan mencabut grant permission.</li><li>Menyetujui tindakan sensitif dan permintaan akses lintas tenant sesuai kebijakan.</li><li>Memiliki visibilitas audit platform secara global.</li></ul></div>
   <div className="card platform-role-card"><div className="platform-role-heading"><Users size={17}/><div><h3>PLATFORM_ADMIN</h3><span>Satu role platform dengan grant individual</span></div><b className="role-chip">Platform role</b></div><ul><li>Tidak ada sub-role operasional. Nama role yang sama tidak otomatis berarti kumpulan permission yang sama.</li><li>Akses efektif ditentukan oleh grant individual yang aktif, terbatas, dan dapat ditinjau.</li><li>Tidak dapat memberikan permission kepada diri sendiri atau meningkatkan kewenangannya sendiri.</li><li>Tidak memiliki akses audit global atau persetujuan refund atas pengajuan sendiri.</li></ul></div>
  </div>
  <section className="card platform-permission-section">
   <div className="platform-permission-head"><div><h2>Katalog permission operasional</h2><p>Daftar kandidat permission untuk pengelolaan akses Platform Admin.</p></div><span className="demo-pill">KATALOG KONSEPTUAL</span></div>
   <div className="platform-permission-toolbar"><div className="search-wrap"><Search size={14}/><input className="search" aria-label="Cari permission" placeholder="Cari nama, kode, atau keterangan..." value={query} onChange={e=>setQuery(e.target.value)}/></div><select aria-label="Filter kategori permission" value={group} onChange={e=>setGroup(e.target.value)}>{groups.map(g=><option key={g}>{g}</option>)}</select></div>
   <div className="platform-permission-layout">
    <div className="platform-permission-list">{filtered.map(p=><button type="button" key={p.id} className={selected===p.id?"platform-permission-item selected":"platform-permission-item"} onClick={()=>setSelected(p.id)}><span><b>{p.name}</b><small>{p.id} · {p.group}</small></span><span className={"permission-risk risk-"+p.risk.toLowerCase()}>{p.risk}</span></button>)}{filtered.length===0&&<div className="empty-state">Tidak ada permission yang cocok.</div>}</div>
    <div className="platform-permission-detail"><span className="settings-label">DETAIL PERMISSION</span><h3>{current.name}</h3><code>{current.id}</code><p>{current.description}</p><div className="permission-approval"><LockKeyhole size={14}/><span>{current.approval}</span></div><label className="permission-preview-check"><input type="checkbox" checked={preview.includes(current.id)} onChange={()=>toggle(current.id)}/> Masukkan ke pratinjau grant</label><small>Centang hanya mengubah daftar pratinjau pada halaman ini. Tidak membuat grant atau mengubah akun.</small></div>
   </div>
   <div className="platform-preview-summary"><div><b>Pratinjau grant dipilih: {preview.length}</b><p>{preview.length?preview.join(" · "):"Belum ada permission yang dipilih."}</p></div><button type="button" className="secondary-btn" onClick={()=>setPreview([])} disabled={preview.length===0}>Kosongkan pratinjau</button></div>
  </section>
  <div className="platform-policy-grid">
   <div className="card platform-policy-card"><div><Clock3 size={16}/><b>Grant berbatas waktu</b></div><p>Grant elevated dan akses lintas tenant memiliki masa berlaku. Tidak ada perpanjangan diam-diam; perpanjangan harus ditinjau dan disetujui kembali.</p></div>
   <div className="card platform-policy-card"><div><CheckCircle2 size={16}/><b>Least privilege & review</b></div><p>Berikan hanya permission yang dibutuhkan, dengan alasan dan cakupan yang jelas. Grant persisten memerlukan alasan serta peninjauan berkala.</p></div>
   <div className="card platform-policy-card"><div><ShieldCheck size={16}/><b>Audit & pemisahan tugas</b></div><p>Grant, revoke, expiry, approval, dan penggunaan akses sensitif harus dicatat di audit server. Pemohon tidak menyetujui permintaannya sendiri.</p></div>
  </div>
  <div className="card platform-role-boundaries"><h3 className="card-title">Batas kewenangan dan implementasi</h3><p><b>Hanya Super Admin:</b> mengelola katalog permission, grant/revoke administrator platform, mengangkat Super Admin, mengubah kebijakan otorisasi, serta melihat audit global.</p><p><b>Cross-tenant support:</b> wajib target tenant, alasan, masa berlaku, default read-only, dan audit. Akses tulis memerlukan grant terpisah serta persetujuan Super Admin.</p><p className="demo-disclaimer">UI ini tidak menegakkan authorization. Enforcement wajib berada di server/database; menyembunyikan komponen UI bukan kontrol keamanan. Tidak ada backend, database, atau akun yang diubah.</p></div>
 </div>;
}
