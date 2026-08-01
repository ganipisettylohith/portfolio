import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Lohith | Technical Intern • AI/ML Engineer & Full Stack Python Developer",
  description: "Portfolio of G. Lohith, Technical Intern, AI/ML Engineer & Full Stack Python Developer specializing in Multi-Agent Systems, RAG, FastAPI, PostgreSQL, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw]">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] relative bg-[#FAF8F5] text-slate-900`}>
        <SmoothScroll>
          <LoadingScreen />
          <FloatingNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
