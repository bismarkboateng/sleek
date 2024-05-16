import { Loader } from "@mantine/core"
import { getCardData, getCardGraphData } from "@/actions/card.actions"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { AreaChart } from "@mantine/charts"

export default async function CardComponent() {
 const cardData = await getCardData()

 const transformedCardData = cardData?.map(item => {
    const key = Object.keys(item)[0];
    const value = item[key];
  
    return { value, name: key };
  });

  const graphAreaData = await getCardGraphData()


  return (
    <section className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4">
     {transformedCardData && transformedCardData.map(data => (
        <Card className="p-3 shadow-sm" key={data.name}>
         <h2 className="text-sm text-[#818891] font-medium mb-2 ml-5">
            {data.name.toUpperCase()}
         </h2>
         <h1 className="text-xl text-[#5F6979] font-bold ml-5">
            {data.name !== "revenue" ? data.value : `$${data.value}`}
         </h1>

         <CardContent>
          {graphAreaData
          ? (
          <AreaChart h={50} data={graphAreaData}
            dataKey="date" curveType="natural"
            withGradient
            gridAxis="none"
            withDots={false}
            withYAxis={false}
            withXAxis={false}
            series={[{ name: 'Apples', color: 'green' }]}
           />
          )
          : <Loader color="rgba(18, 18, 18, 1)" size="sm" />
          }
         </CardContent>
        </Card>
     ))}
    </section>
  )
}
