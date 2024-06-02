"use client"

import { Table } from "@mantine/core"
import Link from "next/link"

import { useEffect, useState } from "react"
import { getRecentOrders } from "@/actions/card.actions"
import { RecentOrder } from "@/index"
import { Loader } from "@mantine/core"
import moment from "moment"


export default function RecentOrders() {
  const [loadingState, setLoadingState] = useState("")
  const [recentOrders, setRecentOrders] = useState<RecentOrder[] | null>(null)

  useEffect(() => {
    const getAllRecentOrders = async () => {
      setLoadingState("loading")
      const orders = await getRecentOrders()
      setRecentOrders(orders.slice(0, 4))
      setLoadingState("done")
    }

    getAllRecentOrders()
  }, [])

  useEffect(() => console.log(recentOrders), [recentOrders])

  return (
    <section className="basis-[70%] rounded-md bg-white mb-5 shadow p-3">
      <div className="flex flex-row items-center justify-between border-b pb-1
      text-[#818891]">
        <h1>Recent Orders</h1>
        <Link href="orders/" className="cursor-pointer hover:text-[#5F6979]">See all</Link>
      </div>
      <section>
        {loadingState === "loading"
        ? (
          <div className="w-50 h-20">
           <Loader color="rgba(0, 0, 0, 1)" size="xs" />
          </div>
        )
        : (
          <Table striped verticalSpacing="md" highlightOnHover className="w-full h-full">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#Order No.</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Customer Name</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody mt="md">
            {recentOrders?.map(data => (
              <Table.Tr className="cursor-pointer" key={data.orderNo}>
                <Table.Td>{data.orderNo}</Table.Td>
                <Table.Td>{moment(data.orderDate).format('YYYY-MM-DD')}</Table.Td>
                <Table.Td>Wade Warren</Table.Td>
                <Table.Td>52.3</Table.Td>
                <Table.Td>
                  <span>{data.status}</span>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
          </Table>
        )
        }
      </section>
    </section>
  )
}