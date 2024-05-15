import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section className="w-[90%] mx-auto md:w-full md:flex md:mt-0 mt-3">
        <section className="md:hidden flex items-end justify-end mb-1">
         <Header />
        </section>
        <section className="hidden md:flex md:w-[30%] lg:w-[20%] md:h-screen shadow-md">
         <Sidebar />
        </section>
        <section className="md:flex-1 md:w-[70%] lg:w-[80%] md:bg-[#F5F6FA]">
         {children}
        </section>
      </section>
    );
  }
  