import { getSession } from "@/lib/utils/get-user";
import { cookies } from "next/headers";


export default async function Dashboard() {

    const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('better-auth.session_token')

  console.log(sessionCookie);
  
  
  const res = await fetch("http://localhost:3000/session", {
    credentials: "include",
    mode: "cors",
    // headers: await headers()
    headers: {
        // better-auth.session_token=2Weu6j9MSRQDTTTaCt1ujJlSanSBsFtA.T21u9fDTvvft1jE48lf4N382bHC89snA5E6JtxFG77s%3D
        // better-auth.session_token2Weu6j9MSRQDTTTaCt1ujJlSanSBsFtA.T21u9fDTvvft1jE48lf4N382bHC89snA5E6JtxFG77s=
      Cookie: `${sessionCookie?.name}=${sessionCookie?.value}`
    }
  });
 
    const session = await res.json();
    console.log(session);
    

    if(!session) {
        return <div>Not Auth</div>
    }

  
  return <div>Dashboard</div>;
}
