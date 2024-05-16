import { LineChart } from '@mantine/charts';

export default function RevenueCard() {

  const data = [
        {
          date: 'Mar 22',
          Apples: 2890,
          Oranges: 2338,
        },
        {
          date: 'Mar 23',
          Apples: 2756,
          Oranges: 2103,
          Tomatoes: 2402,
        },
        {
          date: 'Mar 24',
          Apples: 3322,
          Oranges: 986,
          Tomatoes: 1821,
        },
        {
          date: 'Mar 25',
          Apples: 3470,
          Oranges: 2108,
          Tomatoes: 2809,
        },
        {
          date: 'Mar 26',
          Apples: 3129,
          Oranges: 1726,
          Tomatoes: 2290,
        },
    ];
  return (
    <section className="mt-3 border p-1 bg-white">
     <h1 className="text-[#5F6979] text-lg font-medium ml-3 mb-2
     rounded-md">Revenue</h1>
     <div>
      <LineChart
       h={300}
       data={data}
       dataKey="date"
       series={[
         { name: 'Apples', color: 'indigo.6' },
         { name: 'Oranges', color: 'teal.6' },
       ]}
       curveType="bump"
       tickLine="none"
       withDots={false}
      />
     </div>
    </section>
  )
}
