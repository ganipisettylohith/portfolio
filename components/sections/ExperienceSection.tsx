"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const responsibilities = [
  {
    title: "FastAPI Backend Development",
    desc: "Built asynchronous REST APIs with Pydantic schemas, Auth0 JWT validation, and PostgreSQL connection pooling.",
    accent: "border-l-4 border-l-[#C7622B]"
  },
  {
    title: "Multi-Agent AI Systems",
    desc: "Engineered query router that classifies user intent and dispatches queries to domain-specialized AI agents.",
    accent: "border-l-4 border-l-[#2F6E5C]"
  },
  {
    title: "LLM Fine-Tuning & Dataset Prep",
    desc: "Prepared sports domain Q&A datasets and fine-tuned open-weight models using QLoRA 4-bit quantization.",
    accent: "border-l-4 border-l-[#D9A441]"
  },
  {
    title: "Frontend Development",
    desc: "Built interfaces and dashboards using Next.js, React, and TypeScript, styled with Tailwind CSS.",
    accent: "border-l-4 border-l-[#C7622B]"
  },
  {
    title: "AWS Cloud",
    desc: "Set up and managed EC2 GPU instances, S3 storage, and cloud infrastructure for model training and deployment.",
    accent: "border-l-4 border-l-[#2F6E5C]"
  },
  {
    title: "Docker & Containers",
    desc: "Containerized backend microservices and deployed them to production environments.",
    accent: "border-l-4 border-l-[#D9A441]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[var(--accent-secondary)] text-xs font-bold uppercase tracking-wider mb-3">
          <Briefcase size={14} /> Work Experience
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          Technical Internship at <span className="text-gradient">Dream Olympic Sports</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          AI development, FastAPI microservices, Next.js full-stack interfaces, and AWS cloud deployment.
        </p>
      </div>

      {/* Timeline Company Role Card */}
      <div className="glass-card-premium p-6 sm:p-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100/80 backdrop-blur-md text-stone-800 text-xs font-bold mb-2">
              <Building2 size={14} /> Dream Olympic Sports Pvt Ltd
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
              Technical Intern – AI/ML Full-Stack Developer
            </h3>
          </div>
          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-2 bg-stone-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Calendar size={14} className="text-[var(--accent-primary)]" /> Present (Hybrid)
            </span>
            <span className="flex items-center gap-1.5 bg-stone-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200">
              <MapPin size={14} className="text-[var(--accent-primary)]" /> India
            </span>
          </div>
        </div>

        <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
          Focused on building end-to-end full-stack AI software — writing FastAPI backend routes, developing Next.js & React dashboards, fine-tuning domain models, and deploying containerized applications to AWS cloud infrastructure.
        </p>
      </div>

      {/* Focus Responsibilities Grid with Staggered Scroll Reveal & Left-Border Accent */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {responsibilities.map((resp, idx) => (
          <motion.div key={resp.title} variants={cardVariants} className="h-full">
            <TiltCard className="h-full">
              <div className={`h-full glass-card-light ${resp.accent} p-6 flex flex-col justify-between`}>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">
                    FOCUS 0{idx + 1}
                  </span>

                  <h4 className="text-base font-bold text-[var(--foreground)] mb-2">
                    {resp.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {resp.desc}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
