import { redirect } from "next/navigation"
import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function AddProduct() {

  const handleSubmit = async (formData: FormData) => {
    "use server"
    
    const { name, category , price, stock, description } = Object.fromEntries(formData.entries());
  
    try {
      const { data } = await axios.post(`${BASE_URL}/api/products`, {
        name,
        price,
        stock,
        description,
        category
      })

      if (data) {
        redirect("/products")
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <section className="bg-white mt-5 border rounded-md md:p-4 lg:p-10 xl:p-14 2xl:p-16">
      <h1 className="text-[#818891] mb-3 ml-2 lg:text-xl">Add Product</h1>

      <section className="p-2">
       <form action={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
         <label htmlFor="firstName" className="text-[#5F6979]">Product Name</label>
         <input
          name="name"
          type="text"
          placeholder="balenciaga"
          id="name"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="lastName" className="text-[#5F6979]">Category</label>
         <input
          name="category"
          type="text"
          placeholder="Men"
          id="category"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="price" className="text-[#5F6979]">Price</label>
         <input
          name="price"
          placeholder="9999"
          id="price"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="price" className="text-[#5F6979]">Stock</label>
         <input
          name="stock"
          id="stock"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2 mb-2">
         <label htmlFor="phoneNumber" className="text-[#5F6979]">Description</label>
         <textarea
          name="description"
          placeholder="product description"
          id="description"
          rows={7}
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
