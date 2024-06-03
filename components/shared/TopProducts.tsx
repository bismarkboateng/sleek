import Link from "next/link";
import axios from "axios"
import { ProductsType } from "@/index";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function TopProducts() {
  
  const { data } = await axios.get<ProductsType[]>(`${BASE_URL}/api/products`)

  return (
    <section className="w-full border lg:w-[30%] bg-white rounded-md p-4 mt-2 lg:mt-3">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[#5F6979]">Top Products</h1>
        <Link href="/products" className="text-[#5F6979] cursor-pointer">See all</Link>
      </div>
      <section className="flex flex-col gap-2">
        {data.slice(0, 5).map((product: ProductsType) => (
          <div key={product._id} className="flex items-start justify-between
           border rounded-md p-2 gap-1">
            <div>
              <p>{product.name}</p>
              <p className="text-xs text-[#818891]">{product.category}</p>
            </div>
            <p>{`$${product.price}`}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
