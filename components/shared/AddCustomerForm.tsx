"use client"

import { ChangeEvent } from "react";

type customerForm = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}
type AddCustomerFormProps = {
    customerForm: customerForm;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function AddCustomerForm({ customerForm, handleChange}: AddCustomerFormProps) {
  return (
    <section className="border p-3 rounded-md">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
         <label htmlFor="firstName">First Name</label>
         <input
          name="firstName"
          type="text"
          value={customerForm.firstName}
          onChange={handleChange}
          placeholder="james"
          id="firstName"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="lastName">Last Name</label>
         <input
          name="lastName"
          type="text"
          value={customerForm.lastName}
          onChange={handleChange}
          placeholder="Author"
          id="lastName"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2">
         <label htmlFor="email">Email</label>
         <input
          name="email"
          value={customerForm.email}
          onChange={handleChange}
          placeholder="name@example.com"
          id="email"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

        <div className="flex flex-col gap-2 mb-2">
         <label htmlFor="phoneNumber">Phone Number</label>
         <input
          name="phoneNumber"
          value={customerForm.phoneNumber}
          onChange={handleChange}
          placeholder="+233234445689"
          id="phoneNumber"
          className="border border-[#ccc] outline-none py-2 pl-2 rounded-md"
         />
        </div>

      </form>
    </section>
  )
}
