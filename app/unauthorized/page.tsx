export default function UnauthorizedPage() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f6fb"}}>
      <section style={{maxWidth:440,textAlign:"center",background:"#fff",padding:32,borderRadius:16,border:"1px solid #e8ecf4"}}>
        <h1 style={{fontSize:24,color:"#18233b"}}>Akses tidak diizinkan</h1>
        <p style={{color:"#69758b",lineHeight:1.6}}>Akun tidak terdaftar sebagai administrator platform aktif. Hubungi Super Admin jika akses ini seharusnya diberikan.</p>
        <a href="/login" style={{display:"inline-block",marginTop:12,color:"#273b83",fontWeight:700}}>Kembali ke login</a>
      </section>
    </main>
  );
}
