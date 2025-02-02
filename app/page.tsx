import Link from 'next/link'
import { SignInForm } from './(public)/(auth)/_components/form'

export default function Page() {
  return (
    <div className="m-auto flex h-full min-h-dvh items-center justify-center bg-muted/40 lg:p-8 lg:text-sm">
      <div className="w-full max-w-lg space-y-4 px-4 md:px-0">
        <Link href="/" className="items-center justify-center gap-2">
          <h1 className="text-center font-black text-4xl">Estavia</h1>
        </Link>
        <div className="flex w-full justify-center gap-2">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
