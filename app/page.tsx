import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="border bg-white w-[80%] md:w-[55%] lg:w-[40%] 2xl:w-[35%] mx-auto
     flex items-center justify-center rounded-md mt-36 min-h-[300px] shadow-lg">
      <section className="flex flex-col items-center">
        <h1 className="text-2xl mb-4 text-blue-400">Welcome To <span className="text-green-300 italic">Sleek</span></h1>
        <section className="flex flex-row gap-3">
          <Button asChild variant="outline" className="text-sm font-bold">
            <Link href="/sign-in">
              Sign in
            </Link>
          </Button>
          <Button asChild className="bg-blue-500 text-sm font-bold
          active:bg-blue-500 focus:bg-blue-500">
            <Link href="sign-up">
              Sign up
            </Link>
          </Button>
        </section>
      </section>
    </main>
  )
}
