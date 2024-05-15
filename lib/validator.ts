import { z } from "zod"

export const signUpFormSchema = z.object({
    firstName: z.string().min(3, {
        message: "First name must be at least 3 characters"
    }).max(400,{
        message: "first name must be less than 400 characters"
    }),
    lastName: z.string().min(3, {
        message: "Last name must be at least 3 characters"
    }).max(400,{
        message: "Last name must be less than 400 characters"
    }),
    phoneNumber: z.string().min(12, {
        message: "Phone Number name must be at least 12 characters"
    }).max(15,{
        message: "Phone Number name must be less than 15 characters"
    }),
    email: z.string().email(),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters long"
    }).max(32, {
        message: "Password must be less than 32 characters long"
    }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &, #)" }),
    
    confirmPassword: z.string().min(8,{
        message: "Password must be at least 8 characters long"
    }).max(32, {
        message: "Password must be less than 32 characters long"
    }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &, #)" })
})

export const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters long"
    }).max(32, {
        message: "Password must be less than 32 characters long"
    }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &, #)" }),
})