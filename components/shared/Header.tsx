"use client"

import { MdOutlineMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetDescription,
    SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"

import { NavLinks } from "@/lib/constants"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
     <Sheet>
      <SheetTrigger>
       <MdOutlineMenu fontSize={24} />
      </SheetTrigger>
      <SheetContent>
       <SheetHeader>
        <SheetTitle className="text-green-400 font-bold text-xl">Sleek</SheetTitle>
        <SheetDescription>
         <section className="mt-5 lg:mt-10 w-[88%] mx-auto">
          {NavLinks.map(link => (
            <Link href={`${link.path}`} key={link.title} className={`flex items-center gap-2 py-2 px-3
             rounded-md z-10 mb-3 cursor-pointer
             ${pathname === link.path ? "bg-[#007AFF] text-white shadow-lg" : "text-[#818891]"}`}>
             <span>{link.icon}</span>
             <p className="text-sm font-bold">{link.title}</p>
            </Link>
          ))}
        </section>
       </SheetDescription>
      </SheetHeader>
     </SheetContent>
     </Sheet>
    </header>
  )
}