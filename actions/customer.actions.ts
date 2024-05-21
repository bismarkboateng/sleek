"use server"

import { handleError } from "@/lib/utils"
import { cookies } from "next/headers"

const BASE_URL = process.env.BASE_URL
const CREATE_CUSTOMER_ENDPOINT = `${BASE_URL}/api/customers`
const CHECK_CUSTOMER_ENDPOINT = `${BASE_URL}/api/customers`

export const createCustomer = async (customer: CreateCustomerParams) => {
    try {
        const response = await fetch(CREATE_CUSTOMER_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customer),
        })

        if (!response.ok) {
            handleError(response.statusText)
        }
        return JSON.parse(JSON.stringify(response))
    } catch (error) {
        throw error
    }
}

export const checkCustomer = async (email: string) => {
  console.log(email)
  try {
    const response = await fetch(`${CHECK_CUSTOMER_ENDPOINT}?email=${email}/check-customer`)
    console.log(response)
    if (!response.ok) {
      return JSON.parse(JSON.stringify({ message: "NEW_USER"}))
    }

    console.log(response)
    // cookies().set("userId", JSON.stringify(response))
    return JSON.parse(JSON.stringify(response))

  } catch (error) {
    throw error
  }
}