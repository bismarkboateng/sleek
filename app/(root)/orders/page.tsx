import axios from "axios"
import {
  Table, TableBody, TableCaption,
  TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import moment from "moment"
import { RecentOrder } from "@/index"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function OrdersPage() {

  const { data } = await axios.get<RecentOrder[]>(`${BASE_URL}/api/orders`)

  return (
    <section className="bg-white rounded-md mt-5 border p-2">
      <h1 className="text-[#818891] mb-3 ml-4">All Orders</h1>
      <section>
       <Table>
        <TableCaption>A list of all orders.</TableCaption>
        <TableHeader>
         <TableRow>
          <TableHead className="w-[100px]">#Order No</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead className="">Email</TableHead>
          <TableHead className="">Price</TableHead>
          <TableHead className="">Status</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(order => (
          <TableRow key={order.orderNo}>
           <TableCell className="font-medium">{order.orderNo}</TableCell>
           <TableCell>{moment(order.orderDate).format("YYYY-mm-dd")}</TableCell>
           <TableCell>James Wadern</TableCell>
           <TableCell className="">james@example.com</TableCell>
           <TableCell className="">999</TableCell>
           <TableCell className="">{order.status}</TableCell>
          </TableRow>
          ))}
        </TableBody>
       </Table>
      </section>
    </section>
  )
}
