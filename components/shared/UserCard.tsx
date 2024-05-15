"use client"

import Link from "next/link";
import { GoBell } from "react-icons/go";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSignOut } from "react-icons/pi";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function UserCard() {
  const [userObj, setUserObj] = useState<null | CreateCustomerParams>()
  const logOut = useAuthStore(state => state.logOut)
  const userId = useAuthStore(state => state.userId)
  const router = useRouter()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!)
    setUserObj(user)
  }, [userId])

  const handleLogOut = () => {
    logOut()
    setTimeout(() => {
      router.push("/sign-in")
    }, 500)
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
           <p className="text-[#818891] font-medium">{userObj?.firstName}</p>
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
