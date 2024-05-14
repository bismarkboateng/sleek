
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-full">
     <div className="h-screen bg-[#007AFF] flex items-center
     justify-center w-0 md:w-[30%]">
      <h1 className="text-3xl font-bold text-white">Sleek</h1>
     </div>
     <div className="flex-1 w-[70%]">
      {children}
     </div>
    </section>
  );
}
