"use client";

import { Sparkles } from "lucide-react";

const specializations = [
  { name: "AI & Multi-Agent Systems", desc: "Building multi-agent routing networks, Pydantic classification, and domain vector retrieval workflows." },
  { name: "Machine Learning & Vision", desc: "PyTorch deep learning, CNN image classification, and Grad-CAM visual heatmaps." },
  { name: "LLM Fine-Tuning", desc: "Supervised fine-tuning and QLoRA quantization on domain-specific Q&A datasets." },
  { name: "FastAPI Backend", desc: "Asynchronous Python REST APIs, Pydantic validation schemas, and Auth0 JWT security." },
  { name: "PostgreSQL & Vector", desc: "Relational data modeling, SQL query tuning, and pgvector HNSW similarity search." },
  { name: "AWS Cloud & DevOps", desc: "AWS EC2 GPU instance setup, S3 storage, Docker containerization, and Linux administration." },
  { name: "Frontend & UI Engineering", desc: "Building interfaces with Next.js, React, TypeScript, and Tailwind CSS." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Background & Focus
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          AI, Full-Stack & UI Engineering Focus
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          I am a <strong>Technical Intern</strong> at Dream Olympic Sports Pvt Ltd specializing in Artificial Intelligence and Full-Stack development. My day-to-day work involves writing FastAPI microservices, building multi-agent AI tools, crafting Next.js/React frontends, fine-tuning LLMs, and deploying cloud applications to AWS.
        </p>
      </div>

      {/* Specializations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specializations.map((spec, idx) => (
          <div
            key={spec.name}
            className={`bg-white/45 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 shadow-sm hover:border-[#2D6A6A]/40 transition-colors ${
              idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="text-xs font-semibold text-[#2D6A6A] mb-1">
              0{idx + 1}
            </div>
            <h3 className="text-base font-bold text-[#1F2328] mb-2">
              {spec.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {spec.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
