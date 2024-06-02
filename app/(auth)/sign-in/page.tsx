"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl,
  FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signInFormSchema } from "@/lib/validator"
import { handleError, initialSignInFormValues } from "@/lib/utils"
import Loader from "@/components/shared/Loader"
import { useRouter } from "next/navigation"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Link from "next/link"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { checkCustomer } from "@/actions/customer.actions"
import { setCookie } from "@/actions/auth.actions"



export default function SignInPage() {
  const router = useRouter()
  const [signInState, setSignInState] = useState("pending")
  const [haveAccount, setHaveAccount] = useState("")
  
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: initialSignInFormValues,
  })

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    try {
      setSignInState("loading")
      const customer = await checkCustomer(values.email)

      if (customer.message == "NEW_USER") {
        setHaveAccount("This email is not registered. You need to create an account")
        // wait momentarily for user to see the error message
        setTimeout(() => {
          router.push("/sign-up")
        }, 1000)
        return
      }

      const { user: { uid }} = await signInWithEmailAndPassword(auth, values.email, values.password)
      setCookie(uid)
      localStorage.setItem("userId", JSON.stringify(uid))
      setSignInState("done")
      router.push("/dashboard")
    } catch (error) {
      throw error
    }
  }


  return (
    <section className="w-[90%] lg:w-[70%] 2xl:w-[50%] mx-auto mt-5">
      <h1 className="text-green-400 text-xl text-center mb-5
       font-bold">Sleek</h1>
      <section className="text-[#5F6979] mb-2">
        <h1 className="font-bold md:text-lg 2xl:text-xl">Sign In</h1>
        <p className="text-xs line-clamp-1 font-medium md:text-sm
        2xl:text-lg">
          Sign in to your account.
        </p>
      </section>

      <section className="border w-full h-fit mt-5 rounded-md p-3">
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-2">
          <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-[#5F6979]">Email Address</FormLabel>
              <FormControl>
                <Input
                 placeholder="jamie@gmail.com" {...field}
                 className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>

          <FormField
           control={form.control}
           name="password"
           render={({ field }) => (
            <FormItem className="mb-2 md:mb-0 ">
              <FormLabel className="text-[#5F6979]">Password</FormLabel>
              <FormControl>
                <Input
                 {...field}
                 className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          </div>
          <div className="flex flex-row justify-between">
           <Link
            href="/sign-up"
            className="text-xs font-medium text-[#5F6979]"
           >
            Don&apos;t have an Acccount?{" "}
            <span className="text-[#007AFF] underline">Create one</span>
           </Link>
           <Link
            href="/forgot-password"
            className="text-[#007AFF] text-xs font-medium"
           >
            Forgot password?
           </Link>
          </div>
         <Button
           type="submit"
           className={`
           ${signInState === "done" ? "bg-green-400" : null }
           w-full bg-[#007AFF] text-white active:bg-[#007AFF]
           md:w-[35%]`}
         >
          {
            signInState === "loading"
            ? <Loader loadingState={true} />
            : signInState === "done"
            ? <IoCheckmarkCircleSharp
               className="text-green-600"
               fontSize={23}
              />
            : "Sign In"
          }
          </Button>
          {haveAccount && <p className="text-red-600 text-center">{haveAccount}</p>}
        </form>
       </Form>
      </section>
    </section>
  )
}