"use client";

import Link from "next/link";
import { ArrowLeft, Github, HelpCircle, Activity, ShieldAlert, Cpu } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DOSAccordCaseStudyPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "decisions", label: "Key Decision" },
    { id: "metrics", label: "Metrics" },
    { id: "improvements", label: "Next Steps" }
  ];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: `#${sec.id}`,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () => setActiveSection(sec.id),
        onEnterBack: () => setActiveSection(sec.id),
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
      
      {/* Sticky Left Navigation Bar */}
      <aside className="lg:w-64 shrink-0 lg:sticky lg:top-28 h-fit space-y-6">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors group text-sm font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-3xl space-y-1.5 hidden lg:block">
          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
            Case Study Navigation
          </div>
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all relative ${
                  isActive ? "text-[var(--accent-primary)] bg-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute left-0 w-1 h-1/2 bg-[var(--accent-primary)] rounded"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {sec.label}
              </a>
            );
          })}
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 space-y-16">
        
        {/* Hero Section Card */}
        <div className="glass-card-premium p-8 md:p-12 relative overflow-hidden bg-slate-900 text-white rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="text-[var(--accent-primary)] text-xs font-mono font-bold tracking-widest mb-3">★ HERO PROJECT</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            DOSAccord.ai
          </h1>
          <p className="text-sm font-bold text-slate-400 font-mono mb-6">Smart Sports Analytics Platform</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Auth0", "Docker", "AWS EC2"].map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 text-slate-300 rounded border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Overview */}
        <section id="overview" className="scroll-mt-28 space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] border-b border-stone-200 pb-2">
            Overview / Context
          </h2>
          <p className="text-slate-700 leading-relaxed font-medium">
            DOSAccord.ai is an intelligent sports telemetry analyzer. Using structured multi-agent routing modules, coaches and managers query database stats and tactical playbooks in plain English, receiving parsed summaries instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] mb-2">The Problem</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Reviewing tactical rules, coach logs, and player stats in parallel requires manual searches across multiple spreadsheets. This friction delays decision-making in high-pressure training scenarios.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-secondary)] mb-2">The Approach</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                I engineered a multi-agent system in FastAPI. Incoming natural language queries are parsed, routed to specialized agents (e.g. Stats vs. Rules), semantic-searched via pgvector HNSW indices, and synthesized.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Architecture Diagram */}
        <section id="architecture" className="scroll-mt-28 space-y-6">
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] border-b border-stone-200 pb-2">
            System Architecture
          </h2>
          <p className="text-slate-700 leading-relaxed font-medium">
            Incoming queries are classified at the FastAPI gateway layer, dynamically targeting specialized agents backed by HNSW vector search.
          </p>
          
          {/* Animated SVG Architecture Diagram */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center select-none">
            <svg viewBox="0 0 800 320" className="w-full h-auto overflow-visible font-mono text-[9px] font-bold fill-white">
              {/* Nodes */}
              <rect x="20" y="120" width="110" height="60" rx="10" fill="#2d3748" stroke="#4a5568" strokeWidth="1.5" />
              <text x="75" y="155" textAnchor="middle">User Query</text>

              <rect x="210" y="120" width="120" height="60" rx="10" fill="#1a202c" stroke="var(--accent-primary)" strokeWidth="1.5" />
              <text x="270" y="155" textAnchor="middle">FastAPI Router</text>

              <rect x="410" y="50" width="120" height="60" rx="10" fill="#1a202c" stroke="#2d6e5c" strokeWidth="1.5" />
              <text x="470" y="85" textAnchor="middle">Specialized Agents</text>

              <rect x="410" y="190" width="120" height="60" rx="10" fill="#1a202c" stroke="#3e5c52" strokeWidth="1.5" />
              <text x="470" y="225" textAnchor="middle">pgvector HNSW</text>

              <rect x="650" y="120" width="120" height="60" rx="10" fill="#2d3748" stroke="#4a5568" strokeWidth="1.5" />
              <text x="710" y="155" textAnchor="middle">LLM Synthesis</text>

              {/* Animated Lines */}
              <motion.path
                d="M 130 150 L 210 150"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.path
                d="M 330 150 L 410 80"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.path
                d="M 470 110 L 470 190"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.path
                d="M 530 220 L 650 150"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </svg>
          </div>
        </section>

        {/* Section 3: Key Decisions */}
        <section id="decisions" className="scroll-mt-28 space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] border-b border-stone-200 pb-2">
            Engineering Friction & Key Decision
          </h2>
          <div className="space-y-4 font-medium text-slate-700 leading-relaxed">
            <h4 className="text-sm font-bold text-slate-900 uppercase">Routing intent via Pydantic classification</h4>
            <p>
              Under early testing, general LLMs struggled to classify whether questions requested statistical operations (e.g. averages) or simple text retrieval. Standard keyword filters frequently routed inquiries to the wrong database.
            </p>
            <p>
              I chose to add a structured validation routing step using Pydantic schemas. By requiring the router LLM to compile input arguments strictly matching our system contracts, intent routing latency dropped to under 20 milliseconds, with routing precision reaching 99%.
            </p>
          </div>
        </section>

        {/* Section 4: Metrics */}
        <section id="metrics" className="scroll-mt-28 space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] border-b border-stone-200 pb-2">
            Analytics Platform Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 shadow-sm text-center">
              <div className="text-3xl font-black text-[var(--accent-primary)] mb-1">99%</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Intent Routing Precision</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 shadow-sm text-center">
              <div className="text-3xl font-black text-[var(--accent-secondary)] mb-1">&lt;20ms</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Router Latency</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-slate-200 shadow-sm text-center">
              <div className="text-3xl font-black text-slate-900 mb-1">4+</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Specialized AI Agents</p>
            </div>
          </div>
        </section>

        {/* Section 5: Future Improvements */}
        <section id="improvements" className="scroll-mt-28 space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--foreground)] border-b border-stone-200 pb-2">
            Next Steps / What I'd Improve
          </h2>
          <ul className="space-y-3 font-medium text-slate-700 leading-relaxed list-disc list-inside">
            <li>Incorporate conversational memory buffers using Redis.</li>
            <li>Train small domain-specific classifiers to optimize hardware inference budgets.</li>
            <li>Implement streaming vector embeddings to index playbook files immediately upon upload.</li>
          </ul>
        </section>

        {/* Footer actions */}
        <div className="flex items-center gap-4 pt-6 border-t border-stone-200">
          <a
            href="https://github.com/ganipisettylohith/DOSAccord.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors cursor-pointer text-sm shadow-md"
          >
            <Github size={16} /> View Repository
          </a>
          <span className="flex items-center gap-1.5 px-6 py-3 bg-stone-100 text-stone-500 rounded-full font-bold cursor-default text-xs border border-stone-200">
            <HelpCircle size={15} /> Live demo offline
          </span>
        </div>

      </main>
    </div>
  );
}
