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