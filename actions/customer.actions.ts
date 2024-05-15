"use server"

import { handleError } from "@/lib/utils"

export const createCustomer = async (customer: CreateCustomerParams) => {
    try {
        const response = await fetch("/api/customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customer),
        })

        if (!response.ok) {
            handleError(response.statusText)
        }
        return response
    } catch (error) {
        handleError(error)
    }
}