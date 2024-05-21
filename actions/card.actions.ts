"use server"

import { handleError } from "@/lib/utils"

const BASE_URL = process.env.BASE_URL

const endpoints = [
    `${BASE_URL}/api/products/revenue`,
    `${BASE_URL}/api/orders/total`,
    `${BASE_URL}/api/products/total`,
    `${BASE_URL}/api/visitors`,
]

const graphDataEndpont = `${BASE_URL}/api/card`

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