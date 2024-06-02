"use client"

import { useEffect, useState } from "react"
import { Loader } from "@mantine/core"
import { getRevenue, getCardGraphData } from "@/actions/card.actions"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { AreaChart } from "@mantine/charts"

export default  function Revenue() {
  const [loadCardData, setLoadCardData] = useState("")
  const [graphAreaData, setGraphAreaData] = useState([])
  const [revenue, setRevenue] = useState<number | null>(null)

  useEffect(() => {
   const getAllCardData = async () => {
      setLoadCardData("loading")

      const cardData = await getRevenue()
      const graphData = await getCardGraphData()

      setGraphAreaData(graphData)
      setRevenue(cardData?.revenue)
      setLoadCardData("done")
   }

   getAllCardData()
  }, [])



  return (
      <>
        <Card className="p-3 shadow-sm">
         {loadCardData === "loading"
         ?(
            <div className="w-50 h-20">
             <Loader color="rgba(0, 0, 0, 1)" size="xs" />
            </div>
         )
         : (
         <>
         <h2 className="text-sm text-[#818891] font-medium mb-2 ml-5">
            Revenue
         </h2>
         <h1 className="text-xl text-[#5F6979] font-bold ml-5">
            ${revenue}
         </h1>

         <CardContent>
          <AreaChart h={50} data={graphAreaData}
            dataKey="date" curveType="natural"
            withGradient
            gridAxis="none"
            withDots={false}
            withYAxis={false}
            withXAxis={false}
            series={[{ name: 'Balenciaga', color: 'green' }]}
           />
         </CardContent>
         </>
         )}
        </Card>
    </>
  )
}
