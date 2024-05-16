"use server"

import { handleError } from "@/lib/utils"

const endpoint = "http://localhost:3001/api/customers"

export const createCustomer = async (customer: CreateCustomerParams) => {
    try {
        const response = await fetch(endpoint, {
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
        handleError(error)
    }
}