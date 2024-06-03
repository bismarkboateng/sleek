"use client"

import { Button } from "@/components/ui/button";
import {
    Table, TableBody, TableCaption,
    TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Customer } from "@/index";
import axios from "axios"
import { CiCirclePlus } from "react-icons/ci";
import { ChangeEvent, useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import moment from "moment"
import AddCustomerForm from "@/components/shared/AddCustomerForm";
import next from "next";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function CustomersPage() {
    const router = useRouter()
    const [customerForm, setCustomerForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    })
    const [loading, setLoading] = useState("")
    const [customers, setCustomers] = useState<Customer[] | null>(null)

    useEffect(() => {
        const getAllProducts = async () => {
            setLoading("loading")
            const { data } = await axios.get(`${BASE_URL}/api/customers`)
            setCustomers(data)
            setLoading("done")
        }
        getAllProducts()
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCustomerForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit =  async () => {
        try {
            const customer = await fetch(`${BASE_URL}/api/customers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(customerForm),
            })

            if (customer) {
                router.refresh()
            }
            // reset form after submission
          setCustomerForm({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          })
        } catch (error) {
            throw error
        }
    }

    return (
       <section>

        <section className="bg-white p-2 rounded-md flex items-end justify-end mt-4">
         <Button asChild className="bg-[#007AFF] text-white active:bg-[#007AFF] focus:bg-[#007AFF]
          cursor-pointer font-bold">
           <section className="flex items-center gap-2">
           <AlertDialog>
            <AlertDialogTrigger className="flex items-center gap-2">
             <CiCirclePlus fontSize={22}  />
             <p>Add Customer</p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
               <AlertDialogTitle className="">
                Add Customer
               </AlertDialogTitle>
               <AlertDialogDescription>
                <AddCustomerForm
                 customerForm={customerForm}
                 handleChange={handleChange}
                />
               </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="">
               <AlertDialogCancel className="mr-auto px-20">Cancel</AlertDialogCancel>
               <AlertDialogAction
                className="bg-[#007AFF] active:bg-[#007AFF] focus:bg-[#007AFF] font-bold
                px-20"
                onClick={handleSubmit}
                >
                Add
               </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
           </AlertDialog>
           </section>
         </Button>
        </section>

        <section className="bg-white rounded-md mt-5 border p-2">
          <h1 className="text-[#818891] mb-3 ml-4">All Customers</h1>
          {loading === "loading"
          ? <Loader color="rgba(0, 0, 0, 1)" size="xs" />
          : (
           <section>
           <Table>
            <TableCaption>A list of all customers.</TableCaption>
            <TableHeader>
             <TableRow>
              <TableHead>Customer Name</TableHead>
              <TableHead>#ID</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Last Ordered</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
             </TableRow>
            </TableHeader>
            <TableBody>
             {customers?.map(customer => (
             <TableRow key={customer.userId}>
              <TableCell className="font-medium">{customer.firstName} {customer.lastName}</TableCell>
              <TableCell className="font-medium">{customer.userId}</TableCell>
              <TableCell>${customer.spent}</TableCell>
              <TableCell>{moment(customer.lastOrdered).format("YYYY-mm-dd")}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>{customer.status}</TableCell>
             </TableRow>
             ))}
            </TableBody>
            </Table>
           </section>
          )}
        </section>
 
        </section>
    )
}