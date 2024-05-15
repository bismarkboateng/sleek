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
import { initialSignInFormValues } from "@/lib/utils"
import Loader from "@/components/shared/Loader"
import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/navigation"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"



export default function SignInPage() {
  const router = useRouter()
  const signIn = useAuthStore(state => state.signIn)
  const loginState = useAuthStore(state => state.loginState)
  const signInWithRedirect = useAuthStore(state => state.signInWithRedirect)
  const isGoogleSigIn = useAuthStore(state => state.isGoogleSigIn)
  
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: initialSignInFormValues,
  })

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    signIn(values)
    setTimeout(() => {
      router.push("/dashboard")
    }, 500)
  }

  const handleSignInWithGoogle = () => {
    signInWithRedirect()

    if (isGoogleSigIn === "done") {
      setTimeout(() => {
        router.push("/dashboard")
      }, 500)
    }
  }

  return (
    <section className="w-[90%] lg:w-[70%] 2xl:w-[50%] mx-auto mt-10">
      <section className="text-[#5F6979] mb-2">
        <h1 className="font-bold md:text-lg 2xl:text-xl">Sign In</h1>
        <p className="text-xs line-clamp-1 font-medium md:text-sm
        2xl:text-lg">
          Sign in to your account.
        </p>
      </section>

      <section className="mt-5">
        <div onClick={handleSignInWithGoogle}
         className="bg-[#ffffff] active:bg-[#ffffff] focus:bg-[#ffff]
         py-1 w-[50%] border rounded-md flex items-center justify-center"
        >
          <FcGoogle fontSize={20} className="w-5 h-5 block"/>
        </div>
        <p className="text-[#818891] text-xs mt-5">or sign in with</p>
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
          <div className="flex flex-row justify-end">
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
           ${loginState === "done" ? "bg-green-400" : null }
           w-full bg-[#007AFF] text-white active:bg-[#007AFF]
           md:w-[35%]`}
         >
          {
            loginState === "loading"
            ? <Loader loadingState={true} />
            : loginState === "done"
            ? <IoCheckmarkCircleSharp
               className="text-green-600"
               fontSize={23}
              />
            : "Submit"
          }
          </Button>
        </form>
       </Form>
      </section>
    </section>
  )
}