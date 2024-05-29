"use server"

import { cookies } from "next/headers"

export const deleteCookie = () => {
    cookies().delete("userId")
}

export const setCookie = (userId: string) => {
    cookies().set("userId", `${userId}`)
}

export const getCookie = () => {
    const cookieStore = cookies()
    const userId = cookieStore.get("userId")?.value
    return userId
}