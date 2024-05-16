"use server"

import { handleError } from "@/lib/utils"

const endpoints = [
    "http://localhost:3001/api/products/revenue",
    "http://localhost:3001/api/orders/total",
    "http://localhost:3001/api/products/total",
    "http://localhost:3001/api/visitors",
]

const graphDataEndpont = "http://localhost:3001/api/card"

export const getCardData = async () => {
 
    const fetchPromises = endpoints.map(async endpoint => {
        return fetch(endpoint)
         .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
         })
    })

    try {
        return Promise.all(fetchPromises)
         .then(dataArray => {
            return dataArray
         })
    } catch (error) {
        handleError(error)
    }
}

export const getCardGraphData = async () => {
    try {
        const response = await fetch(graphDataEndpont)

        if (!response.ok) {
            handleError(response.statusText)
        }

        const data = await response.json()
        return data 
    } catch (error) {
        handleError(error)
    }
}