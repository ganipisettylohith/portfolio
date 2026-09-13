"use client";

import Link from "next/link";
import { ArrowLeft, Github, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function DOSAccordCaseStudyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "decisions", label: "Key Decision" },
    { id: "metrics", label: "Metrics" },
    { id: "improvements", label: "Next Steps" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
      
      {/* Sticky Left Navigation Bar */}
      <aside className="lg:w-60 shrink-0 lg:sticky lg:top-28 h-fit space-y-4">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1F2328] transition-colors text-xs font-semibold">
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>

        <div className="bg-white border border-[#E5E5E0] p-3 rounded-md space-y-1 hidden lg:block shadow-sm">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
            Case Study Navigation
          </div>
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveSection(sec.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive ? "text-[#2D6A6A] bg-stone-100 font-bold border border-[#E5E5E0]" : "text-slate-600 hover:text-[#1F2328]"
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 space-y-12">
        
        {/* Hero Section Card */}
        <div className="bg-white/45 backdrop-blur-md border border-[#E5E5E0] p-6 md:p-8 rounded-lg shadow-sm">
          <div className="text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-2">FLAGSHIP PROJECT</div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#1F2328] mb-2 tracking-tight">
            DOSAccord.ai
          </h1>
          <p className="text-sm font-medium text-slate-500 mb-5">Smart Sports Analytics Platform</p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Auth0", "Docker", "AWS EC2"].map((t) => (
              <span key={t} className="text-xs font-medium px-2.5 py-0.5 bg-stone-50 text-slate-700 rounded-md border border-[#E5E5E0]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Overview */}
        <section id="overview" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold text-[#1F2328] border-b border-[#E5E5E0] pb-2">
            Overview / Context
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            DOSAccord.ai is an intelligent sports telemetry analyzer. Using structured multi-agent routing modules, coaches and managers query database stats and tactical playbooks in plain English, receiving parsed summaries instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-md bg-stone-50 border border-[#E5E5E0]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A6A] mb-1">The Problem</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Reviewing tactical rules, coach logs, and player stats in parallel requires manual searches across multiple spreadsheets. This friction delays decision-making in high-pressure training scenarios.
              </p>
            </div>
            <div className="p-4 rounded-md bg-stone-50 border border-[#E5E5E0]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A6A] mb-1">The Approach</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                I engineered a multi-agent system in FastAPI. Incoming natural language queries are parsed, routed to specialized agents (e.g. Stats vs. Rules), semantic-searched via pgvector HNSW indices, and synthesized.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Architecture Diagram */}
        <section id="architecture" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold text-[#1F2328] border-b border-[#E5E5E0] pb-2">
            System Architecture
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed font-normal">
            Incoming queries are classified at the FastAPI gateway layer, dynamically targeting specialized agents backed by HNSW vector search.
          </p>
          
          <div className="p-5 rounded-lg bg-stone-50 border border-[#E5E5E0] shadow-sm flex items-center justify-center select-none">
            <svg viewBox="0 0 800 300" className="w-full h-auto overflow-visible text-[10px] font-semibold fill-[#1F2328]">
              {/* Nodes */}
              <rect x="20" y="110" width="120" height="60" rx="6" fill="#FFFFFF" stroke="#E5E5E0" strokeWidth="1.5" />
              <text x="80" y="145" textAnchor="middle">User Query</text>

              <rect x="210" y="110" width="130" height="60" rx="6" fill="#FFFFFF" stroke="#2D6A6A" strokeWidth="1.5" />
              <text x="275" y="145" textAnchor="middle">FastAPI Router</text>

              <rect x="420" y="40" width="130" height="60" rx="6" fill="#FFFFFF" stroke="#2D6A6A" strokeWidth="1.5" />
              <text x="485" y="75" textAnchor="middle">Specialized Agents</text>

              <rect x="420" y="180" width="130" height="60" rx="6" fill="#FFFFFF" stroke="#2D6A6A" strokeWidth="1.5" />
              <text x="485" y="215" textAnchor="middle">pgvector HNSW</text>

              <rect x="640" y="110" width="130" height="60" rx="6" fill="#FFFFFF" stroke="#E5E5E0" strokeWidth="1.5" />
              <text x="705" y="145" textAnchor="middle">LLM Synthesis</text>

              {/* Connections */}
              <path d="M 140 140 L 210 140" fill="none" stroke="#2D6A6A" strokeWidth="1.5" />
              <path d="M 340 140 L 420 70" fill="none" stroke="#2D6A6A" strokeWidth="1.5" />
              <path d="M 485 100 L 485 180" fill="none" stroke="#2D6A6A" strokeWidth="1.5" />
              <path d="M 550 210 L 640 140" fill="none" stroke="#2D6A6A" strokeWidth="1.5" />
            </svg>
          </div>
        </section>

        {/* Section 3: Key Decisions */}
        <section id="decisions" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold text-[#1F2328] border-b border-[#E5E5E0] pb-2">
            Engineering Friction & Key Decision
          </h2>
          <div className="space-y-3 text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">
            <h4 className="text-sm font-bold text-[#1F2328]">Routing intent via Pydantic classification</h4>
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
          <h2 className="text-xl font-bold text-[#1F2328] border-b border-[#E5E5E0] pb-2">
            Analytics Platform Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-5 rounded-md bg-white border border-[#E5E5E0] shadow-sm text-center">
              <div className="text-2xl font-bold text-[#2D6A6A] mb-1">99%</div>
              <p className="text-xs text-slate-500 font-medium">Intent Routing Precision</p>
            </div>
            <div className="p-5 rounded-md bg-white border border-[#E5E5E0] shadow-sm text-center">
              <div className="text-2xl font-bold text-[#2D6A6A] mb-1">&lt;20ms</div>
              <p className="text-xs text-slate-500 font-medium">Router Latency</p>
            </div>
            <div className="p-5 rounded-md bg-white border border-[#E5E5E0] shadow-sm text-center">
              <div className="text-2xl font-bold text-[#1F2328] mb-1">4+</div>
              <p className="text-xs text-slate-500 font-medium">Specialized AI Agents</p>
            </div>
          </div>
        </section>

        {/* Section 5: Future Improvements */}
        <section id="improvements" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold text-[#1F2328] border-b border-[#E5E5E0] pb-2">
            Next Steps / What I'd Improve
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm font-normal text-slate-700 leading-relaxed list-disc list-inside">
            <li>Incorporate conversational memory buffers using Redis.</li>
            <li>Train small domain-specific classifiers to optimize hardware inference budgets.</li>
            <li>Implement streaming vector embeddings to index playbook files immediately upon upload.</li>
          </ul>
        </section>

        {/* Footer actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E0]">
          <a
            href="https://github.com/ganipisettylohith/DOSAccord.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2D6A6A] hover:bg-[#235353] text-white rounded-md font-semibold transition-colors cursor-pointer text-xs shadow-sm"
          >
            <Github size={15} /> View Repository
          </a>
          <span className="flex items-center gap-1.5 px-4 py-2 bg-stone-100 text-slate-500 rounded-md font-medium cursor-default text-xs border border-[#E5E5E0]">
            <HelpCircle size={14} /> Live demo offline
          </span>
        </div>

      </main>
    </div>
  );
}
