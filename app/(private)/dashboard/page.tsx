import { auth } from '@/auth'
import { headers } from 'next/headers'

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const response = await fetch(
    `http://localhost:3000/available-leads?userId=${session?.user.id}`,
  )
  const data = await response.json()
  console.log(data)

  if (!session) return <div>Not Authorized</div>

  return (
    <div>
      <h1>Dashboard - {session.user.name}</h1>

      <h2>Available apartments</h2>
    </div>
  )
}
