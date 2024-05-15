import { onAuthStateChanged } from 'firebase/auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/lib/firebase"

export function middleware(request: NextRequest) {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return NextResponse.redirect(new URL("/sign-up", request.url))
    }

  })
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