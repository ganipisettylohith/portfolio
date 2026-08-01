"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Play, RefreshCw, Database, Server, User, Terminal, Activity, Layers } from "lucide-react";

const testQueries = [
  {
    title: "Athlete Performance Analysis",
    prompt: "Analyze sprint acceleration metrics for U-19 player ID #4829 and recommend training drill.",
    targetAgent: "Player Agent",
    payload: { category: "PLAYER_ANALYTICS", player_id: "4829", metric: "ACCELERATION" },
    retrievalContext: "pgvector similarity match: 0.94 score on speed drills database",
    llmResponse: "Player #4829 displays top 5% initial burst speed. Recommended: 6x20m resistance band sprints with 90s recovery.",
    latencyMs: 18,
  },
  {
    title: "Tactical Coaching Strategy",
    prompt: "Formulate defensive pressing structure against 4-3-3 formation for upcoming match.",
    targetAgent: "Coach Agent",
    payload: { category: "TACTICAL_TACTICS", opponent_formation: "4-3-3", press_style: "HIGH_BLOCK" },
    retrievalContext: "pgvector similarity match: 0.91 score on pressing handbook",
    llmResponse: "Deploy mid-high block pressing trigger when opponent center-back passes wide to fullback. Midfielders shadow pivot player.",
    latencyMs: 24,
  },
  {
    title: "Academy Enrollment Workflow",
    prompt: "Check eligibility for elite high-performance academy residential batch 2026.",
    targetAgent: "Academy Agent",
    payload: { category: "ACADEMY_WORKFLOW", cohort: "2026_ELITE", age_group: "U-17" },
    retrievalContext: "pgvector similarity match: 0.96 score on academy admission criteria",
    llmResponse: "Eligible for Stage 2 physical trial. Admission criteria met for agility score.",
    latencyMs: 15,
  },
  {
    title: "PGM Officiating Assessment",
    prompt: "Evaluate referee decision consistency on penalty box handball scenario at 74th min.",
    targetAgent: "PGM Agent",
    payload: { category: "OFFICIATING_RULES", rule_code: "LAW_12_HANDBALL", min: 74 },
    retrievalContext: "pgvector similarity match: 0.98 score on IFAB laws database",
    llmResponse: "Decision correct: Arm position enlarged body outline during shot attempt.",
    latencyMs: 19,
  },
];

export default function AIEngineeringLabSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const query = testQueries[activeIdx];

  const pipelineSteps = [
    { name: "User Prompt", icon: User, desc: "Query Input" },
    { name: "FastAPI REST", icon: Server, desc: "Auth & Validation" },
    { name: "AI Router", icon: Layers, desc: "Intent Routing" },
    { name: query.targetAgent, icon: Cpu, desc: "Specialized Agent" },
    { name: "pgvector DB", icon: Database, desc: "Similarity Search" },
    { name: "LLM Engine", icon: Cpu, desc: "Fine-tuned model (Llama 3.2 base)" },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      if (currentStep < pipelineSteps.length - 1) {
        timer = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, 500);
      } else {
        timer = setTimeout(() => {
          setIsSimulating(false);
        }, 800);
      }
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentStep, pipelineSteps.length]);

  const handleRunSimulation = (idx: number) => {
    setActiveIdx(idx);
    setCurrentStep(0);
    setIsSimulating(true);
  };

  return (
    <section id="ai-lab" className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-3">
          <Cpu size={14} /> AI Agent Routing Simulator
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          Multi-Agent System Simulator
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Test how incoming queries get classified by the router and passed to specialized agents with pgvector context retrieval.
        </p>
      </div>

      {/* Simulator Control Box */}
      <div className="bg-white/90 backdrop-blur-xl border border-[var(--card-border)] rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50">
        
        {/* Preset Query Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Sample Query
            </span>
            <span className="text-xs font-mono font-semibold text-[var(--accent-secondary)] flex items-center gap-1">
              <Activity size={14} /> SYSTEM: ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {testQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleRunSimulation(idx)}
                className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all flex flex-col justify-between gap-2 ${
                  activeIdx === idx
                    ? "bg-[var(--foreground)] text-white border-[var(--foreground)] shadow-md"
                    : "bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{q.title}</span>
                  <Play size={12} className={activeIdx === idx ? "text-[var(--accent-tertiary)]" : "text-slate-400"} />
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full w-fit font-mono ${
                  activeIdx === idx ? "bg-white/20 text-white" : "bg-stone-200 text-slate-600"
                }`}>
                  {q.targetAgent}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Multi-Agent Pipeline Visualizer */}
        <div className="mb-6 p-6 rounded-2xl bg-stone-900 text-white border border-stone-800 relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-5 text-xs font-mono">
            <span className="text-stone-400 flex items-center gap-2">
              <Terminal size={14} className="text-[var(--accent-secondary)]" /> PIPELINE: MultiAgent_Router_v2
            </span>
            <span className="text-[var(--accent-secondary)] font-bold">
              LATENCY: {query.latencyMs}ms
            </span>
          </div>

          {/* Node Step Flow */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
            {pipelineSteps.map((step, sIdx) => {
              const Icon = step.icon;
              const isPast = sIdx < currentStep;
              const isCurrent = sIdx === currentStep;

              return (
                <div
                  key={sIdx}
                  className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-[var(--accent-primary)]/30 border-[var(--accent-primary)] text-white shadow-md scale-105"
                      : isPast
                      ? "bg-emerald-950/40 border-emerald-600/50 text-emerald-300"
                      : "bg-stone-900/60 border-stone-800 opacity-60"
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${
                    isCurrent ? "bg-[var(--accent-primary)] text-white" : isPast ? "bg-emerald-600 text-white" : "bg-stone-800 text-stone-400"
                  }`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-bold truncate max-w-full">{step.name}</span>
                  <span className="text-[10px] text-stone-400 mt-0.5">{step.desc}</span>
                </div>
              );
            })}
          </div>

          {/* Prompt Inspection Box */}
          <div className="mt-5 pt-4 border-t border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
              <span className="text-[var(--accent-tertiary)] font-bold block mb-1">PROMPT:</span>
              <p className="text-stone-300 font-sans italic">{query.prompt}</p>
            </div>

            <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
              <span className="text-[var(--accent-secondary)] font-bold block mb-1">AGENT RESPONSE:</span>
              <p className="text-stone-200 font-sans">{query.llmResponse}</p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex justify-center">
          <button
            onClick={() => handleRunSimulation((activeIdx + 1) % testQueries.length)}
            className="px-6 py-2.5 rounded-full bg-[var(--foreground)] text-white text-xs font-bold hover:bg-[var(--accent-primary)] transition-colors flex items-center gap-2 shadow-md"
          >
            <RefreshCw size={14} className={isSimulating ? "animate-spin" : ""} /> Run Next Query
          </button>
        </div>
      </div>
    </section>
  );
}
