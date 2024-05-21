import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers"

export function middleware(request: NextRequest) {
  const cookie = cookies()
  const isLoggedIn = cookie.get("userId")
  const url = request.nextUrl.clone()
  const { pathname } = url


  const protectedRoutes = [
    "/dashboard",
    "/orders",
    "/products",
    "/customers",
    "/messages",
    "/settings"
  ]

  const authRoutes = [
    "/sign-in",
    "/sign-up",
    "/"
  ]


  if (isLoggedIn) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  } else {
    if (protectedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/sign-in", request.url))
    }
  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    "/dashboard",
    "/orders",
    "/products",
    "/customers",
    "/messages",
    "/settings",
    "/sign-in",
    "/sign-up",
    "/",
  ]
}
