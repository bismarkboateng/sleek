import { StringifyOptions } from "querystring";


interface CreateCustomerParams {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    userId: string;
}

type RevenueGraphData = {
    date: string;
    Balenciaga: number;
    Nike: number;
}[]

type ProductsType = {
    _id: string;
    name: string;
    price: string;
    stock: number;
    description: string;
    category: string;
}

interface RecentOrder {
    customer: string;
    orderDate: Date,
    orderNo: string;
    products: {
        product: string;
        quantity: number;
    }[]
    status: string;
}

interface Customer {
    firstName: string;
    lastName: string;
    userId: string;
    spent: string;
    lastOrdered: Date;
    email: string;
    phoneNumber: string;
    status: string;
}