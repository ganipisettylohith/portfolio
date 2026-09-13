"use client";

import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const responsibilities = [
  {
    title: "FastAPI Backend Development",
    desc: "Built asynchronous REST APIs with Pydantic schemas, Auth0 JWT validation, and PostgreSQL connection pooling.",
  },
  {
    title: "Multi-Agent AI Systems",
    desc: "Engineered query router that classifies user intent and dispatches queries to domain-specialized AI agents.",
  },
  {
    title: "LLM Fine-Tuning & Dataset Prep",
    desc: "Prepared sports domain Q&A datasets and fine-tuned open-weight models using QLoRA 4-bit quantization.",
  },
  {
    title: "Frontend Development",
    desc: "Built interfaces and dashboards using Next.js, React, and TypeScript, styled with Tailwind CSS.",
  },
  {
    title: "AWS Cloud",
    desc: "Set up and managed EC2 GPU instances, S3 storage, and cloud infrastructure for model training and deployment.",
  },
  {
    title: "Docker & Containers",
    desc: "Containerized backend microservices and deployed them to production environments.",
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase size={14} /> Work Experience
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          Technical Internship at Dream Olympic Sports
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          AI development, FastAPI microservices, Next.js full-stack interfaces, and AWS cloud deployment.
        </p>
      </div>

      {/* Role Card */}
      <div className="bg-white/45 backdrop-blur-md border border-[#E5E5E0] rounded-md p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E0] pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 text-[#1F2328] text-xs font-semibold mb-2">
              <Building2 size={14} /> Dream Olympic Sports Pvt Ltd
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2328] tracking-tight">
              Technical Intern – AI/ML Full-Stack Developer
            </h3>
          </div>
          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5 bg-stone-50 px-3 py-1 rounded-md border border-[#E5E5E0]">
              <Calendar size={13} className="text-[#2D6A6A]" /> Present (Hybrid)
            </span>
            <span className="flex items-center gap-1.5 bg-stone-50 px-3 py-1 rounded-md border border-[#E5E5E0]">
              <MapPin size={13} className="text-[#2D6A6A]" /> India
            </span>
          </div>
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Focused on building end-to-end full-stack AI software — writing FastAPI backend routes, developing Next.js & React dashboards, fine-tuning domain models, and deploying containerized applications to AWS cloud infrastructure.
        </p>
      </div>

      {/* Responsibilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {responsibilities.map((resp, idx) => (
          <div key={resp.title} className="bg-white/45 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 shadow-sm hover:border-[#2D6A6A]/40 transition-colors">
            <span className="text-xs font-semibold text-[#2D6A6A] block mb-1">
              FOCUS 0{idx + 1}
            </span>

            <h4 className="text-base font-bold text-[#1F2328] mb-2">
              {resp.title}
            </h4>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {resp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
