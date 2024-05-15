import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  country: "",
  accountType: "",
  password: "",
}

export const initialSignInFormValues = {
  email: "",
  password: ""
}

export const handleError = (error: any) => {
  if (typeof error === "string") {
    throw new Error(error)
  } else {
    throw new Error(JSON.parse(JSON.stringify(error)))
  }
}