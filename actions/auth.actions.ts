"use server"

import { cookies } from "next/headers"

export const deleteCookie = () => {
    cookies().delete("userId")
}

export const setCookie = (userId: string) => {
    cookies().set("userId", `${userId}`)
}

export const setId = (user_id: string) => {
    cookies().set("user_id", `${user_id}`)
}

export const getCookie = () => {
    const cookieStore = cookies()
    const userId = cookieStore.get("userId")?.value
    return userId
}

export const get_Id = () => {
    const cookieStore = cookies()
    const user_id = cookieStore.get("user_id")?.value
    return user_id
}