"use client"

import { Input } from "../ui/input"
import { FormEvent, useState } from "react"


export default function Search() {
  const [query, setQuery] = useState("")

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(query)
  }

  return (
    <section className="border rounded-md lg:w-[35%]">
    <form onSubmit={handleSearch}>
     <Input
       placeholder="Search for..."
       onChange={(event) => setQuery(event.target.value)}
       value={query}
       className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
     />
     <button type="submit" hidden></button>
    </form>
    </section>
  )
}
