import CardComponent from "@/components/shared/CardComponent";
import RevenueCard from "@/components/shared/RevenueCard";
import TopProducts from "@/components/shared/TopProducts";

export default function DashboardPage() {
  
  return (
    <section>
      <CardComponent />
      <section className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <RevenueCard />
        <TopProducts />
      </section>
    </section>
  )
}
