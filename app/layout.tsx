import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import MouseGlow from "@/components/ui/MouseGlow";
import CustomCursor from "@/components/ui/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Lohith | Technical Intern • AI/ML Engineer & Full Stack Python Developer",
  description: "Portfolio of G. Lohith, Technical Intern, AI/ML Engineer & Full Stack Python Developer specializing in Multi-Agent Systems, RAG, FastAPI, PostgreSQL, and AWS.",
  metadataBase: new URL("https://lohith-portfolio-theta.vercel.app"),
  openGraph: {
    title: "G. Lohith | Technical Intern • AI/ML Engineer & Full Stack Python Developer",
    description: "Portfolio of G. Lohith, Technical Intern, AI/ML Engineer & Full Stack Python Developer specializing in Multi-Agent Systems, RAG, FastAPI, PostgreSQL, and AWS.",
    url: "https://lohith-portfolio-theta.vercel.app",
    siteName: "G. Lohith Portfolio",
    images: [
      {
        url: "/medivision-ai.png",
        width: 1200,
        height: 630,
        alt: "G. Lohith Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G. Lohith | Technical Intern • AI/ML Engineer & Full Stack Python Developer",
    description: "Portfolio of G. Lohith, Technical Intern, AI/ML Engineer & Full Stack Python Developer specializing in Multi-Agent Systems, RAG, FastAPI, PostgreSQL, and AWS.",
    images: ["/medivision-ai.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "G. Lohith",
  "jobTitle": "Technical Intern",
  "url": "https://lohith-portfolio-theta.vercel.app",
  "sameAs": [
    "https://github.com/ganipisettylohith",
    "https://www.linkedin.com/in/lohith-ganipisetty"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Dream Olympic Sports Pvt Ltd"
  },
  "description": "Specializing in Multi-Agent Systems, RAG, FastAPI, PostgreSQL, and AWS."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] relative bg-[#FAFAF7] text-[#1F2328]`}>
        <CommandPalette />
        <FloatingNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
