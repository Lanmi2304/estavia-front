import { getSession } from "@/lib/utils/get-user";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    return <div>Not authorized</div>;
  }
  return <div>Dashboard</div>;
}
