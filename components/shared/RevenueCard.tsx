"use client"

import { useEffect, useState } from "react"
import { LineChart } from '@mantine/charts';
import axios from "axios"
import { Loader } from "@mantine/core";
import { getRevenueGraphData } from "@/actions/card.actions";
import { RevenueGraphData } from "@/index";

export default function RevenueCard() {
  const [graphData, setGraphData] = useState<RevenueGraphData | null>(null)
  const [loadingState, setLoadingState] = useState("")

  useEffect(() => {
    const getRevenueData = async () => {
      setLoadingState("loading")
      const revenueGraphData = await getRevenueGraphData()
      setGraphData(revenueGraphData)
      setLoadingState("done")
    }

    getRevenueData()
  }, [])

  return (
    <section className="mt-3 border p-1 bg-white rounded-md lg:flex-1">
     <h1 className="text-[#5F6979] text-lg font-medium ml-3 mb-2
     rounded-md">Revenue</h1>
     {loadingState === "loading"
     ? (
      <div className="w-50 h-20 ml-3">
       <Loader color="rgba(0, 0, 0, 1)" size="xs" />
      </div>
     )
     :(
     <div>
      <LineChart
       h={300}
       data={graphData ?? []}
       dataKey="date"
       series={[
         { name: 'Balenciaga', color: 'indigo.6' },
         { name: 'Nike', color: 'teal.6' },
       ]}
       curveType="bump"
       tickLine="none"
       withDots={false}
      />
     </div>)
    }
    </section>
  )
}
