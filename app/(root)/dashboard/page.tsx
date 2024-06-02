import ProductStatus from "@/components/shared/ProductStatus";
import RecentOrders from "@/components/shared/RecentOrders";
import Revenue from "@/components/shared/Revenue";
import RevenueCard from "@/components/shared/RevenueCard";
import TopProducts from "@/components/shared/TopProducts";
import TotalOrder from "@/components/shared/TotalOrder";
import TotalProduct from "@/components/shared/TotalProduct";
import TotalVisitors from "@/components/shared/TotalVisitors";

export default function DashboardPage() {
  
  return (
    <section>
      <section className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3
       xl:grid-cols-4">
        <Revenue />
        <TotalOrder />
        <TotalProduct />
        <TotalVisitors />
      </section>
      <section className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <RevenueCard />
        <TopProducts />
      </section>
      <section className="flex flex-col gap-2 lg:flex-row md:gap-2 lg:gap-4 mt-4">
       <ProductStatus />
       <RecentOrders />
      </section>
    </section>
  )
}
