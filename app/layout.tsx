import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Lohith | Technical Intern & Backend Developer",
  description: "Portfolio of G. Lohith, a Technical Intern, Backend Developer, and Cyber Security Graduate specializing in Multi-Agent Systems and scalable software architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
