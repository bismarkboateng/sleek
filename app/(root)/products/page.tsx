import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCaption,
    TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { ProductsType } from "@/index";
import axios from "axios"
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default  async function ProductsPage() {

    const { data } = await axios.get<ProductsType[]>(`${BASE_URL}/api/products`)

    return (
       <section>

        <section className="bg-white p-2 rounded-md flex items-end justify-end mt-4">
         <Button asChild className="bg-[#007AFF] text-white active:bg-[#007AFF] focus:bg-[#007AFF]
          cursor-pointer font-bold">
          <Link href="/products/add">
           <section className="flex items-center gap-2">
            <CiCirclePlus fontSize={22}  />
            <p>
             Add Prodcut
            </p>
           </section>
          </Link>
         </Button>
        </section>

        <section className="bg-white rounded-md mt-5 border p-2">
          <h1 className="text-[#818891] mb-3 ml-4">All Products</h1>
          <section>
           <Table>
            <TableCaption>A list of all products.</TableCaption>
            <TableHeader>
             <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="">Stock</TableHead>
             </TableRow>
            </TableHeader>
            <TableBody>
             {data.map(product => (
             <TableRow key={product.name}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="font-medium">{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
             </TableRow>
             ))}
            </TableBody>
            </Table>
           </section>
         </section>
 
        </section>
    )
}