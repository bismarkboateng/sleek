import type { Metadata } from "next";
import { Mulish } from "next/font/google"
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleek",
  description: "Sleek is a dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        {children}
      </body>
    </html>
  );
}
