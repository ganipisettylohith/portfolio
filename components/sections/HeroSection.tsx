"use client";

import { ArrowRight, Download, Mail, Building2 } from "lucide-react";

const techStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "PyTorch",
  "AWS EC2",
  "Docker",
  "pgvector",
  "LLM Training",
  "Next.js",
  "React",
  "Networking",
];

const realStats = [
  { label: "AI Agents Built", display: "4+" },
  { label: "Flagship Projects", display: "3" },
  { label: "Async FastAPI APIs", display: "100%" },
  { label: "Graduation Year", display: "2025" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Role Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#2D6A6A]/10 border border-[#2D6A6A]/20 text-[#2D6A6A] text-xs font-semibold mb-6">
          <Building2 size={14} className="text-[#2D6A6A]" />
          Technical Intern • Dream Olympic Sports Pvt Ltd
        </div>

        {/* Name Heading - Solid Charcoal Text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1F2328] mb-3">
          G. Lohith
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-6 tracking-tight">
          AI/ML Engineer & Full Stack Python Developer
        </h2>

        {/* Grounded Summary */}
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Building AI applications, FastAPI backends, vector search retrieval systems, and cloud microservices using Python and AWS.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-medium bg-white border border-[#E5E5E0] text-slate-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#2D6A6A] text-white font-medium text-xs sm:text-sm hover:bg-[#235353] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>View Flagship Projects</span>
            <ArrowRight size={15} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-white border border-[#E5E5E0] text-[#1F2328] font-medium text-xs sm:text-sm shadow-sm hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail size={15} className="text-[#2D6A6A]" />
            <span>Contact Me</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-stone-100 border border-[#E5E5E0] text-[#1F2328] font-medium text-xs sm:text-sm hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={15} />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Real Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
          {realStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/45 backdrop-blur-md p-4 rounded-md border border-[#E5E5E0] shadow-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#1F2328] tracking-tight">
                {stat.display}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
