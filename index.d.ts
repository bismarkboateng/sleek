import { StringifyOptions } from "querystring";

interface AuthStore {
    isLoggedIn: boolean;
    userId: string;
    signUpState: string;
    loginState: string;
    isGoogleSigIn: string;
    signUp: (values: z.infer<typeof signUpFormSchema>) => void;
    signIn: (values: z.infer<typeof signInFormSchema>) => void;
    logOut: () => void;
}

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