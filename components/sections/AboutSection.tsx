"use client";

import { useRef } from "react";
import { Sparkles } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const specializations = [
  { name: "AI & Multi-Agent Systems", desc: "Building multi-agent routing networks, Pydantic classification, and domain vector retrieval workflows." },
  { name: "Machine Learning & Vision", desc: "PyTorch deep learning, CNN image classification, and Grad-CAM visual heatmaps." },
  { name: "LLM Fine-Tuning", desc: "Supervised fine-tuning and QLoRA quantization on domain-specific Q&A datasets." },
  { name: "FastAPI Backend", desc: "Asynchronous Python REST APIs, Pydantic validation schemas, and Auth0 JWT security." },
  { name: "PostgreSQL & Vector", desc: "Relational data modeling, SQL query tuning, and pgvector HNSW similarity search." },
  { name: "AWS Cloud & DevOps", desc: "AWS EC2 GPU instance setup, S3 storage, Docker containerization, and Linux administration." },
  { name: "Frontend & UI Engineering", desc: "Building interfaces with Next.js, React, TypeScript, and Tailwind CSS, with motion work in Framer Motion and GSAP." },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current) {
        const gridItems = sectionRef.current.querySelectorAll(".about-grid-item");
        gsap.fromTo(
          gridItems,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Background & Focus
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          AI, Full-Stack & <span className="text-gradient">UI Engineering Focus</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          I am a <strong>Technical Intern</strong> at Dream Olympic Sports Pvt Ltd specializing in Artificial Intelligence and Full-Stack development. My day-to-day work involves writing FastAPI microservices, building multi-agent AI tools, crafting Next.js/React frontends, fine-tuning LLMs, and deploying cloud applications to AWS.
        </p>
      </div>

      {/* Specializations Grid (7 Cards cleanly laid out) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {specializations.map((spec, idx) => (
          <div
            key={spec.name}
            className={`about-grid-item will-change-transform ${idx === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <TiltCard className="h-full">
              <div className="h-full glass-card-light p-6 flex flex-col justify-between">
                <div>
                  <svg width="34" height="34" viewBox="0 0 34 34" className="mb-3 overflow-visible select-none">
                    <motion.circle
                      cx="17"
                      cy="17"
                      r="16"
                      fill="transparent"
                      stroke="var(--accent-primary, #C7622B)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease: "easeInOut", delay: idx * 0.05 }}
                    />
                    <text x="17" y="21" textAnchor="middle" fill="#94a3b8" className="text-[10px] font-mono font-bold">
                      0{idx + 1}
                    </text>
                  </svg>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
