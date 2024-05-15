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
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
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
    // signInWithRedirect()

    // router.push("/dashboard")
    // if (isGoogleSigIn === "done") {
    //   setTimeout(() => {
    //   }, 500)
    // }
  }

  const handleSignInWithFacebook = () => {

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

      {/* Social Login */}
      <section className="mt-5 flex flex-col md:flex-row gap-2">
        <div onClick={handleSignInWithGoogle}
         className="bg-[#007AFF] active:bg-[#007AFF] focus:bg-[#007AFF]
         py-3 w-fuill border rounded-md flex items-center justify-center"
        >
          <FaGoogle fontSize={20} className="w-5 h-5 block text-white mr-5"/>
          <span className="text-white text-sm font-medium">Sign in with Google</span>
        </div>

        <div onClick={handleSignInWithFacebook}
         className="bg-blue-900 active:bg-blue-900 focus:bg-blue-900
         py-3 w-full border rounded-md flex items-center justify-center"
        >
          <FaFacebookF fontSize={20} className="w-5 h-5 block text-white mr-5"/>
          <span className="text-white text-sm font-medium">Sign in with Facebook</span>
        </div>
      </section>
      {/* end social login */}

      <p className="text-[#818891] text-xs mt-5 text-center">or sign in with</p>
      
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
            : "Sign In"
          }
          </Button>
        </form>
       </Form>
      </section>
    </section>
  )
}