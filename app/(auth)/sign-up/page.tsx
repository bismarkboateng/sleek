"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl,
  FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpFormSchema } from "@/lib/validator"
import { initialValues } from "@/lib/utils"
import Dropdown from "@/components/shared/Dropdown"
import Loader from "@/components/shared/Loader"
import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/navigation"
import { IoCheckmarkCircleSharp } from "react-icons/io5";




export default function SignUpPage() {
  const router = useRouter()
  const signUp = useAuthStore(state => state.signUp)
  const signUpState = useAuthStore(state => state.signUpState)
  const isPasswordDoNotMatch = useAuthStore(state => state.isPasswordDoNotMatch)
  
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: initialValues,
  })

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    signUp(values)
    setTimeout(() => {
      router.push("/sign-in")
    }, 500)
  }

  return (
    <section className="w-[90%] mx-auto mt-10">
      <section className="text-[#5F6979] mb-2">
        <h1 className="font-bold">Create an Account</h1>
        <p className="text-xs line-clamp-1 font-medium">
          Create an account and start selling your products throughout the world.
        </p>
      </section>

      <section className="border w-full h-fit mt-5 rounded-md p-3">
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* first name and last name */}
         <div className="flex flex-col md:flex-row md:gap-2">
          <FormField
           control={form.control}
           name="firstName"
           render={({ field }) => (
            <FormItem className="mb-2 md:mb-0 md:w-[50%]">
              <FormLabel className="text-[#5F6979]">First name</FormLabel>
              <FormControl>
                <Input
                 placeholder="Bismark" {...field}
                 className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          <FormField
           control={form.control}
           name="lastName"
           render={({ field }) => (
            <FormItem className="md:w-[50%]">
              <FormLabel className="text-[#5F6979]">Last name</FormLabel>
              <FormControl>
                <Input
                 placeholder="Boateng" {...field}
                 className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          </div>

          {/* phone number and email address */}
          <div className="flex flex-col md:flex-row md:gap-2">
          <FormField
           control={form.control}
           name="phoneNumber"
           render={({ field }) => (
            <FormItem className="mb-2 md:mb-0 md:w-[50%]">
              <FormLabel className="text-[#5F6979]">Phone Number</FormLabel>
              <FormControl>
                <Input
                 placeholder="+233553597847" {...field}
                 className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
            <FormItem className="md:w-[50%]">
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
          </div>

          {/* Country and account type */}
          {/* <div className="flex flex-col md:flex-row md:gap-2">
          <FormField
           control={form.control}
           name="country"
           render={({ field }) => (
            <FormItem className="mb-2 md:mb-0 md:w-[50%]">
              <FormLabel className="text-[#5F6979]">Country</FormLabel>
              <FormControl>
                <Dropdown
                 type="country"
                 onSelectChange={field.onChange}
                 value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          <FormField
           control={form.control}
           name="accountType"
           render={({ field }) => (
            <FormItem className="md:w-[50%]">
              <FormLabel className="text-[#5F6979]">Account Type</FormLabel>
              <FormControl>
                <Dropdown
                 type="accountType"
                 onSelectChange={field.onChange}
                 value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
           )}/>
          </div> */}

          {/* password and confirm password */}
          <div className="flex flex-col md:flex-row md:gap-2">
          <FormField
           control={form.control}
           name="password"
           render={({ field }) => (
            <FormItem className="mb-2 md:mb-0 md:w-[50%]">
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
          <FormField
           control={form.control}
           name="confirmPassword"
           render={({ field }) => (
            <FormItem className="md:w-[50%]">
              <FormLabel className="text-[#5F6979]">Confirm Password</FormLabel>
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
         {isPasswordDoNotMatch
          ? <p className="text-red-400">Passwords do not match.</p>
          : null}
         <Button
           type="submit"
           className={`
           ${signUpState === "done" ? "bg-green-400" : null }
           w-full bg-[#007AFF] text-white active:bg-[#007AFF]`}
         >
          {
            signUpState === "loading"
            ? <Loader loadingState={true} />
            : signUpState === "done"
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