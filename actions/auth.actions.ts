"use server"

import { cookies } from "next/headers"

export const deleteCookie = () => {
    cookies().delete("userId")
}

export const setCookie = (userId: string) => {
    cookies().set("userId", JSON.stringify(userId))
}