"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (signInError || !data.user) {
        setError("Email atau kata sandi tidak valid.");
        return;
      }

      const { data: admin, error: roleError } = await supabase
        .from("platform_admins")
        .select("role,status")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (roleError || !admin || admin.status !== "ACTIVE" ||
          !["SUPER_ADMIN", "PLATFORM_ADMIN"].includes(admin.role)) {
        await supabase.auth.signOut();
        setError("Akun ini tidak memiliki akses administrator platform yang aktif.");
        return;
      }

      const next = new URLSearchParams(window.location.search).get("next");
      router.replace(next && next.startsWith("/") && !next.startsWith("//") ? next : "/");
      router.refresh();
    } catch {
      setError("Tidak dapat terhubung ke layanan autentikasi. Periksa konfigurasi Supabase.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f6fb"}}>
      <section style={{width:"100%",maxWidth:420,background:"#fff",padding:32,borderRadius:18,boxShadow:"0 18px 55px rgba(20,35,70,.10)",border:"1px solid #e8ecf4"}}>
        <div style={{fontSize:12,fontWeight:800,letterSpacing:".12em",color:"#5264a8"}}>POS SAAS MULTI-USAHA</div>
        <h1 style={{fontSize:26,margin:"12px 0 6px",color:"#18233b"}}>Login Administrator</h1>
        <p style={{fontSize:14,color:"#69758b",margin:"0 0 26px"}}>Masuk menggunakan akun administrator platform yang telah didaftarkan.</p>
        {search.get("setup")==="1" && <p role="alert" style={{background:"#fff6e5",color:"#8a5a00",padding:12,borderRadius:8,fontSize:13}}>Environment Supabase belum dikonfigurasi pada deployment.</p>}
        <form onSubmit={handleSubmit} style={{display:"grid",gap:15}}>
          <label style={{display:"grid",gap:7,fontSize:13,fontWeight:650,color:"#34415b"}}>
            Email
            <input type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@contoh.com" style={{height:44,padding:"0 12px",border:"1px solid #d8deea",borderRadius:9,fontSize:14}}/>
          </label>
          <label style={{display:"grid",gap:7,fontSize:13,fontWeight:650,color:"#34415b"}}>
            Kata sandi
            <input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Masukkan kata sandi" style={{height:44,padding:"0 12px",border:"1px solid #d8deea",borderRadius:9,fontSize:14}}/>
          </label>
          {error && <p role="alert" style={{margin:0,color:"#b42318",fontSize:13}}>{error}</p>}
          <button type="submit" disabled={loading} style={{height:46,border:0,borderRadius:9,background:"#273b83",color:"#fff",fontWeight:700,fontSize:14,cursor:loading?"wait":"pointer",opacity: loading ? 0.7 : 1}}>{loading?"Memeriksa akun…":"Masuk"}</button>
        </form>
        <p style={{fontSize:11,color:"#929bad",margin:"22px 0 0",lineHeight:1.5}}>Akses hanya untuk SUPER_ADMIN dan PLATFORM_ADMIN yang berstatus ACTIVE. Pendaftaran publik tidak tersedia.</p>
      </section>
    </main>
  );
}
