import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/lib/firebase"
import Cookies from "js-cookie"

export function middleware(request: NextRequest) {
  const isLoggedIn = Cookies.get("isLoggedIn")

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url))
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/orders",
    "/products",
    "/customers",
    "/messages",
    "/settings",
  ]
}