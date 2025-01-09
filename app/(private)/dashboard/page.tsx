'use client'

import { authClient } from "@/lib/auth-client";
import { getSession } from "@/lib/utils/get-user";
import { useEffect } from "react";


export default function Dashboard() {
  
  const { data: session, error, isPending } = authClient.useSession();

  useEffect(() => {
    const a = async() => {
      const s = await getSession();
      const se = await s.json();

      console.log(se);
    }

    a().catch((e) => console.log(e));
    
  }, [])


  if (!session) {
    return <div>Not authorized</div>;
  }
  return <div>Dashboard</div>;
}
