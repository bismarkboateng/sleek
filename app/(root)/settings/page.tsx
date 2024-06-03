import { get_Id } from "@/actions/auth.actions"
import { revalidatePath } from "next/cache"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function SettingsPage() {

  const handleSubmit = async (formData: FormData) => {
    "use server"

    const id = await get_Id()
    const { firstName, lastName, phoneNumber } = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${BASE_URL}/api/customers/${id}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber
        }),
      })

      if (response) {
        revalidatePath("/settings")
      }
      
    } catch (error) {
      throw error
    }
  }
  return (
    <section className="bg-white border rounded-md mt-10 p-3 md:p-5 lg:p-10 xl:p-14 2xl:p-16">
     <h1 className="text-[#818891] mb-3 font-bold text-xl">Edit Profile</h1>
     <section>
      <form action={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
         <label htmlFor="firstName" className="text-[#5F6979]">First Name</label>
         <input
          name="firstName"
          type="text"
          placeholder="james"
          id="firstName"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="lastName" className="text-[#5F6979]">Last Name</label>
         <input
          name="lastName"
          type="text"
          placeholder="Author"
          id="lastName"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="price" className="text-[#5F6979]">Phone Number</label>
         <input
          name="phoneNumber"
          placeholder="+233 55 555 5555"
          id="phoneNumber"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-3 rounded-md
         cursor-pointer">
          Submit
        </button>
      </form>
     </section>
    </section>
  )
}
