interface AuthStore {
    isLoggedIn: boolean;
    userId: string;
    signUpState: string;
    loginState: string;
    isPasswordDoNotMatch: boolean | null;
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