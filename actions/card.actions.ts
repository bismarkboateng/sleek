"use server"

import { handleError } from "@/lib/utils"
import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const graphDataEndpont = `${BASE_URL}/api/card`

export const getTotalVisitors = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/visitors`)
        if (!data) {
            handleError("No visitors data")
        }
        return data
    } catch (error) {
        throw error
    }
}

export const getRevenueGraphData = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/revenue-graph`)
        if (!data) {
            handleError("No Graph data")
        }
        return data
    } catch (error) {
        throw error
    }
}

export const getTotalProduct = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/products/total`)
        if (!data) {
            handleError("No product data")
        }
        return data
    } catch (error) {
        throw error
    }
}

export const getTotalOrder = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/orders/total`)
        if (!data) {
            handleError("No order data")
        }
        return data
    } catch (error) {
        throw error
    }
}

export const getRevenue = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/products/revenue`)
        if (!data) {
            handleError("No revenue data")
        }
        return data
    } catch (error) {
        throw error
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

export const getProductGraphData = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/orders/status`)
        if (!data) {
            handleError("No Orders Status data")
        }
        return data
    } catch (error) {
        handleError(error)
    }
}

export const getRecentOrders = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/orders`)
        if (!data) {
            handleError("No Orders Status data")
        }
        return data
    } catch (error) {
        handleError(error)
    }
}