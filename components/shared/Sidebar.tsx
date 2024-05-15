"use client"

import { NavLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname()

  return (
    <section className="">
      <h1 className="text-green-400 font-bold text-xl mt-10 ml-5">
        Sleek
      </h1>
      <section className="mt-5 ml-5 w-full">
       {NavLinks.map(link => (
         <Link href={`${link.path}`} key={link.title} className={`flex items-center gap-2 py-2 px-3
           rounded-md z-10 mb-3 cursor-pointer
           ${pathname === link.path ? "bg-[#007AFF] text-white shadow-lg" : "text-[#818891]"}`}>
          <span>{link.icon}</span>
          <p className="text-sm font-bold">{link.title}</p>
         </Link>
        ))}
        </section>
    </section>
  )
}
