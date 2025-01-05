import Link from "next/link";
import { SignInForm } from "./(public)/(auth)/_components/form";

export default function Page() {
  return (
    <div className="m-auto flex h-full min-h-dvh items-center justify-center bg-muted/40 lg:p-8 lg:text-sm">
      <div className="space-y-4 max-w-lg w-full md:px-0 px-4">
        <Link href="/" className="items-center justify-center gap-2">
          <h1 className="text-center text-4xl font-black">Estavia</h1>
        </Link>
        <div className="flex w-full justify-center gap-2">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
