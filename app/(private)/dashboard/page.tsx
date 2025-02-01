"use client";

import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
  const { data, isPending } = authClient.useSession();

  console.log(data?.session);

  if (!data?.session) {
    return <div>{isPending ? "loading..." : "Not authorized"}</div>;
  }
  return (
    <div>
      <p>{isPending ? "loading..." : `${data.user.name}`}</p>
    </div>
  );
}
