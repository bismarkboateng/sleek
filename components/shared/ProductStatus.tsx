"use client"

import { DonutChart } from "@mantine/charts";
import { useEffect, useState } from "react";
import { getProductGraphData } from "@/actions/card.actions";
import { Loader } from "@mantine/core"

type GraphData = {
  name: string;
  value: number;
  color: string;
}

export default function ProductStatus() {
  const [loadGraphState, setLoadGraphState] = useState("")
  const [graphData, setGraphData] = useState<GraphData[] | null>(null)

  useEffect(() => {
    const fetcProductGraphData = async () => {
      setLoadGraphState("loading")
 
      const productGraphData = await getProductGraphData()
 
       setGraphData(productGraphData?.ordersData)
       setLoadGraphState("done")
    }
 
    fetcProductGraphData()
   }, [])

  return (
    <section
      className="basis-[30%] border p-5 bg-white rounded-md shadow mb-5 "
    >
      {loadGraphState === "loading"
      ? (
        <div className="w-50 h-20">
         <Loader color="rgba(0, 0, 0, 1)" size="xs" />
        </div>
      )

      : (
        <>
        <h4 className="text-[#818891] text-md font-medium">Product Status</h4>
        <section className="mt-4">
          <DonutChart
           h={220}
           size={160}
           thickness={30}
           paddingAngle={5}
           withLabelsLine
           withLabels
           withTooltip={false}
           data={graphData ?? []}
          />
        </section>
        <section className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-1 p-[3px] rounded">
            <div className="w-[10px] h-[10px] rounded-full bg-[#24CCB8]"/>
            <span className="text-xs text-[#818891]">Delivered</span>
          </div>
          <div className="flex flex-row items-center gap-1 p-[3px] rounded">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF9500]"/>
            <span className="text-xs text-[#818891]">Pending</span>
          </div>
          <div className="flex flex-row items-center gap-1 p-[3px] rounded">
            <div className="w-[10px] h-[10px] rounded-full bg-[#FF5967]"/>
            <span className="text-xs text-[#818891]">Canceled</span>
          </div>
        </section>
        </>
      )}
    </section>
  );
}