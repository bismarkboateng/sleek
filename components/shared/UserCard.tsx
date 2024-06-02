"use client"

import Link from "next/link";
import { GoBell } from "react-icons/go";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSignOut } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
import { handleError } from "@/lib/utils";
import { deleteCookie, getCookie } from "@/actions/auth.actions";
import axios from "axios"

const BASE_URL = process.env.BASE_URL


export default function UserCard() {
  const [user, setUser] = useState<CreateCustomerParams | null>(null)
  const router = useRouter()
  
  useEffect(() => {
    const getACustomer = async () => {
      const userId = JSON.parse(localStorage.getItem("userId")!)
      try {
        const { data } = await axios.get(`http://localhost:3002/api/customers/${userId}/get-customer`)
        if (!data) {
          console.log("User not found")
        }
        setUser(data)
      } catch (error) {
        throw error
      }
    }
    getACustomer()
  }, [])
  const handleLogOut = async () => {
    try {
      await signOut(auth)
      deleteCookie()
      router.push("/sign-in")
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <section className="hidden md:flex items-center gap-2">
      <div className="bg-white shadow-md p-2 rounded-sm h-[40px]">
       <GoBell className="text-[#818891]" fontSize={22} />
      </div>
      
      <div className="bg-white rounded-sm p-2">
       <DropdownMenu>
        <DropdownMenuTrigger className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
          <div className="flex items-center gap-2">
           <p className="text-[#818891] font-medium">{user?.firstName}</p>
           <RiArrowDropDownLine fontSize={22} className="text-[#818891]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
         <DropdownMenuLabel>
          <Link href="/settings" className="text-[#818891]">
           My Account
          </Link>
         </DropdownMenuLabel>
         <DropdownMenuItem>
          <div onClick={handleLogOut}
           className="text-[#818891] flex flex-row gap-1">
           <PiSignOut fontSize={19} />
           <span>Sign out</span>
          </div>
         </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
      </div>
    </section>
  )
}
