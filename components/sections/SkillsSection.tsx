"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  category: "ai" | "backend" | "cloud" | "database" | "security" | "frontend";
  relatedIds: string[];
}

const skillNodes: SkillNode[] = [
  { id: "python", name: "Python", category: "backend", relatedIds: ["fastapi", "pytorch", "postgresql", "lora", "rag", "django"] },
  { id: "fastapi", name: "FastAPI", category: "backend", relatedIds: ["python", "postgresql", "auth0", "docker", "aws", "rag"] },
  { id: "pytorch", name: "PyTorch", category: "ai", relatedIds: ["python", "lora", "opencv", "gradcam"] },
  { id: "lora", name: "LLM Training & LoRA", category: "ai", relatedIds: ["pytorch", "python", "aws"] },
  { id: "rag", name: "RAG & Vector Search", category: "ai", relatedIds: ["pgvector", "postgresql", "fastapi", "python"] },
  { id: "multiagent", name: "Multi-Agent Systems", category: "ai", relatedIds: ["fastapi", "python", "rag"] },
  { id: "postgresql", name: "PostgreSQL", category: "database", relatedIds: ["pgvector", "fastapi", "python", "sql"] },
  { id: "pgvector", name: "pgvector", category: "database", relatedIds: ["postgresql", "rag"] },
  { id: "sql", name: "SQL", category: "database", relatedIds: ["postgresql", "python"] },
  { id: "aws", name: "AWS EC2", category: "cloud", relatedIds: ["docker", "linux", "fastapi"] },
  { id: "docker", name: "Docker", category: "cloud", relatedIds: ["aws", "fastapi", "linux", "git"] },
  { id: "linux", name: "Linux (Ubuntu)", category: "cloud", relatedIds: ["aws", "docker"] },
  { id: "git", name: "Git", category: "cloud", relatedIds: ["docker", "python"] },
  { id: "networking", name: "Networking", category: "backend", relatedIds: ["fastapi", "python", "docker"] },
  { id: "auth0", name: "Auth0 & OAuth2", category: "security", relatedIds: ["fastapi", "jwt"] },
  { id: "jwt", name: "JWT Security", category: "security", relatedIds: ["auth0", "fastapi"] },
  { id: "react", name: "React", category: "frontend", relatedIds: ["nextjs", "typescript", "tailwind"] },
  { id: "nextjs", name: "Next.js", category: "frontend", relatedIds: ["react", "typescript", "tailwind"] },
  { id: "typescript", name: "TypeScript", category: "frontend", relatedIds: ["nextjs", "react"] },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", relatedIds: ["nextjs", "react"] },
  { id: "django", name: "Django", category: "backend", relatedIds: ["python", "postgresql", "sql"] },
  { id: "opencv", name: "OpenCV", category: "ai", relatedIds: ["pytorch", "gradcam", "python"] },
  { id: "gradcam", name: "Grad-CAM", category: "ai", relatedIds: ["opencv", "pytorch"] }
];

const categoryFilters = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & ML" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "security", label: "Security" },
  { id: "frontend", label: "Frontend" },
];

export default function SkillsSection() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const hoveredNode = skillNodes.find((n) => n.id === hoveredNodeId);

  const filteredNodes = activeCategory === "all"
    ? skillNodes
    : skillNodes.filter((n) => n.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Technology Stack
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          Interactive <span className="text-gradient">Skills Map</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Hover over any technology badge to highlight related tools in my workflow.
        </p>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categoryFilters.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                isActive
                  ? "text-white"
                  : "bg-white/80 text-stone-700 hover:bg-amber-50 border border-stone-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillCategory"
                  className="absolute inset-0 bg-[var(--foreground)] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Floating Connected Nodes Container */}
      <div className="relative min-h-[360px] glass-card-premium p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
        
        {/* Animated Connection Highlight Border */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-[var(--accent-primary)]/40 shadow-inner shadow-amber-500/5 z-0"
            />
          )}
        </AnimatePresence>

        {/* Node Hover Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-secondary)] inline-block animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
              {hoveredNode ? `Selected: ${hoveredNode.name}` : "Hover a Skill"}
            </span>
          </div>

          <span className="text-xs font-medium text-slate-500">
            {hoveredNode
              ? `Connected to ${hoveredNode.relatedIds.length} related technologies`
              : "All core tools loaded"}
          </span>
        </div>

        {/* Floating Connected Badges with staggered scale-in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.03 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 my-auto py-4 relative z-10"
        >
          {filteredNodes.map((node) => {
            const isHovered = hoveredNodeId === node.id;
            const isRelated = hoveredNode?.relatedIds.includes(node.id);

            return (
              <motion.button
                key={node.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.15 }}
                className={`px-4 py-2 rounded-2xl text-xs font-bold border transition-all duration-200 ${
                  isHovered
                    ? "bg-[var(--foreground)] text-white border-[var(--foreground)] shadow-lg ring-4 ring-amber-500/20 z-20 scale-105"
                    : isRelated
                    ? "bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-md z-10 animate-pulse"
                    : "glass-badge text-slate-900 border-white/60 hover:bg-white/70"
                }`}
              >
                {node.name}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-slate-500 font-medium relative z-10">
          <span>Python • FastAPI • PostgreSQL • AWS</span>
          <span className="text-[var(--accent-primary)] font-bold">Connected Skill Graph</span>
        </div>
      </div>
    </section>
  );
}
