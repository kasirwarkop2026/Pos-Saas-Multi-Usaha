"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SessionControls() {
  const router = useRouter();
  const [identity, setIdentity] = useState<{email:string;role:string}|null>(null);

  useEffect(() => {
    const supabase = createClient();
    let active = true;
    supabase.auth.getUser().then(async ({data}) => {
      if (!active || !data.user) return;
      const {data: admin} = await supabase.from("platform_admins").select("role,status").eq("user_id",data.user.id).maybeSingle();
      if (active && admin?.status === "ACTIVE") setIdentity({email:data.user.email ?? "",role:admin.role});
    });
    return () => { active = false; };
  }, []);

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  if (!identity) return null;
  return <div style={{position:"fixed",right:16,bottom:16,zIndex:1000,display:"flex",alignItems:"center",gap:10,padding:"9px 12px",background:"#fff",border:"1px solid #e2e7f0",borderRadius:12,boxShadow:"0 5px 22px rgba(20,35,70,.12)",fontSize:11,color:"#47536a"}}>
    <span><b>{identity.role}</b><br/>{identity.email}</span>
    <button onClick={signOut} style={{border:"1px solid #d8deea",background:"#f8f9fc",borderRadius:8,padding:"7px 9px",fontSize:11,fontWeight:700,cursor:"pointer"}}>Keluar</button>
  </div>;
}
