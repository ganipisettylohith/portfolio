"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  category: "ai" | "backend" | "cloud" | "database" | "security" | "frontend";
  x: number;
  y: number;
  relatedIds: string[];
}

const skillNodes: SkillNode[] = [
  // AI & ML (Cluster Left)
  { id: "python", name: "Python", category: "backend", x: 280, y: 220, relatedIds: ["fastapi", "pytorch", "postgresql", "lora", "rag", "django", "networking", "git"] },
  { id: "pytorch", name: "PyTorch", category: "ai", x: 220, y: 120, relatedIds: ["python", "lora", "opencv", "gradcam"] },
  { id: "lora", name: "LLM Training", category: "ai", x: 380, y: 120, relatedIds: ["pytorch", "python", "aws"] },
  { id: "rag", name: "RAG & Vector", category: "ai", x: 320, y: 320, relatedIds: ["pgvector", "postgresql", "fastapi", "python"] },
  { id: "multiagent", name: "AI Agents", category: "ai", x: 190, y: 280, relatedIds: ["fastapi", "python", "rag"] },
  { id: "opencv", name: "OpenCV", category: "ai", x: 120, y: 110, relatedIds: ["pytorch", "gradcam", "python"] },
  { id: "gradcam", name: "Grad-CAM", category: "ai", x: 140, y: 190, relatedIds: ["opencv", "pytorch"] },

  // Backend & Core (Center)
  { id: "fastapi", name: "FastAPI", category: "backend", x: 500, y: 270, relatedIds: ["python", "postgresql", "auth0", "docker", "aws", "rag", "multiagent", "networking", "react", "nextjs", "git"] },
  { id: "django", name: "Django", category: "backend", x: 450, y: 190, relatedIds: ["python", "postgresql", "sql"] },
  { id: "networking", name: "Networking", category: "backend", x: 420, y: 360, relatedIds: ["fastapi", "python", "docker"] },

  // Databases (Cluster Bottom Left)
  { id: "postgresql", name: "PostgreSQL", category: "database", x: 320, y: 460, relatedIds: ["pgvector", "fastapi", "python", "sql", "django"] },
  { id: "pgvector", name: "pgvector", category: "database", x: 210, y: 440, relatedIds: ["postgresql", "rag"] },
  { id: "sql", name: "SQL", category: "database", x: 430, y: 500, relatedIds: ["postgresql", "python"] },

  // Security (Cluster Top Right)
  { id: "auth0", name: "Auth0", category: "security", x: 630, y: 180, relatedIds: ["fastapi", "jwt", "react"] },
  { id: "jwt", name: "JWT Sec", category: "security", x: 720, y: 150, relatedIds: ["auth0", "fastapi"] },

  // Cloud & DevOps (Cluster Bottom Right)
  { id: "aws", name: "AWS EC2", category: "cloud", x: 610, y: 370, relatedIds: ["docker", "linux", "fastapi", "lora"] },
  { id: "docker", name: "Docker", category: "cloud", x: 700, y: 330, relatedIds: ["aws", "fastapi", "linux", "git", "networking"] },
  { id: "linux", name: "Linux", category: "cloud", x: 580, y: 460, relatedIds: ["aws", "docker"] },
  { id: "git", name: "Git", category: "cloud", x: 700, y: 450, relatedIds: ["docker", "python", "typescript", "fastapi"] },

  // Frontend (Cluster Far Right)
  { id: "react", name: "React", category: "frontend", x: 790, y: 250, relatedIds: ["nextjs", "typescript", "tailwind", "fastapi", "auth0"] },
  { id: "nextjs", name: "Next.js", category: "frontend", x: 880, y: 240, relatedIds: ["react", "typescript", "tailwind", "fastapi"] },
  { id: "typescript", name: "TypeScript", category: "frontend", x: 890, y: 330, relatedIds: ["nextjs", "react", "tailwind", "git"] },
  { id: "tailwind", name: "Tailwind", category: "frontend", x: 800, y: 350, relatedIds: ["nextjs", "react", "typescript"] }
];

// Helper to generate distinct connection lines (edges) without duplicates
const edges: Array<{ from: string; to: string }> = [];
const seenEdges = new Set<string>();

skillNodes.forEach((node) => {
  node.relatedIds.forEach((relId) => {
    const sortedKey = [node.id, relId].sort().join("-");
    const relNodeExists = skillNodes.some((n) => n.id === relId);
    if (!seenEdges.has(sortedKey) && relNodeExists) {
      seenEdges.add(sortedKey);
      edges.push({ from: node.id, to: relId });
    }
  });
});

const categoryFilters = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & ML" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "security", label: "Security" },
  { id: "frontend", label: "Frontend" },
];

function getCategoryColor(category: string) {
  switch (category) {
    case "ai":
      return "#C7622B"; // Terracotta
    case "backend":
      return "#2F6E5C"; // Pine Green
    case "database":
      return "#D9A441"; // Gold
    case "cloud":
      return "#8C4A21"; // Warm Brown
    case "security":
      return "#3E5C52"; // Dark Pine
    case "frontend":
      return "#C7622B"; // Terracotta blend
    default:
      return "#78716c";
  }
}

export default function SkillsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive mobile list fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hoveredNode = skillNodes.find((n) => n.id === hoveredId);

  const isConnected = (edge: { from: string; to: string }, id: string | null) => {
    if (!id) return false;
    return edge.from === id || edge.to === id;
  };

  const isNodeConnectedOrSelf = (nodeId: string, activeId: string | null) => {
    if (!activeId) return true;
    if (nodeId === activeId) return true;
    const activeNode = skillNodes.find((n) => n.id === activeId);
    return activeNode?.relatedIds.includes(nodeId) || false;
  };

  const isFiltered = (nodeCategory: string) => {
    if (activeCategory === "all") return true;
    return nodeCategory === activeCategory;
  };

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
          {isMobile 
            ? "Filter skills to browse related categories in my full-stack workflow."
            : "Hover over any skill node to bright-highlight direct connections and dependencies in my workflow."}
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
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300 relative ${
                isActive
                  ? "text-white border-[var(--accent-primary)]"
                  : "text-slate-600 bg-white/40 border-white/60 hover:bg-white/60"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillCategoryPill"
                  className="absolute inset-0 bg-gradient-to-r from-[#C7622B] to-[#2F6E5C] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Map Board Wrapper */}
      <div className="relative bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-6 sm:p-10 overflow-hidden min-h-[380px] flex flex-col justify-between">
        
        {/* Connection Highlight border overlay when hovered */}
        <AnimatePresence>
          {hoveredId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-[var(--accent-primary)]/45 shadow-inner shadow-amber-500/5 z-0"
            />
          )}
        </AnimatePresence>

        {/* Dynamic Status / Interactive Help Info */}
        <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] inline-block animate-pulse" />
            <span>
              {hoveredNode 
                ? `Active Node: ${hoveredNode.name}` 
                : activeCategory !== "all" 
                ? `Category: ${categoryFilters.find(f => f.id === activeCategory)?.label}`
                : "Interactive Topology"}
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
            <HelpCircle size={13} />
            {hoveredNode
              ? `Linked to ${hoveredNode.relatedIds.filter(id => skillNodes.some(n => n.id === id)).length} active dependencies`
              : isMobile 
              ? "Touch items to view category stack" 
              : "Hover node to trace lines"}
          </span>
        </div>

        {/* Layout Output: 1. Desktop Interactive SVG Graph / 2. Mobile Responsive Pill Fallback */}
        {!isMobile ? (
          /* DESKTOP SVG NODE GRAPH */
          <div className="relative w-full h-[520px] flex items-center justify-center z-10 select-none">
            <svg viewBox="0 0 1000 580" className="w-full h-full">
              {/* Render edges (lines) behind nodes */}
              {edges.map((edge) => {
                const nodeFrom = skillNodes.find((n) => n.id === edge.from)!;
                const nodeTo = skillNodes.find((n) => n.id === edge.to)!;
                const activeConnection = isConnected(edge, hoveredId);
                const bothFiltered = isFiltered(nodeFrom.category) && isFiltered(nodeTo.category);

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={nodeFrom.x}
                    y1={nodeFrom.y}
                    x2={nodeTo.x}
                    y2={nodeTo.y}
                    stroke={activeConnection ? "#C7622B" : "#8A8272"}
                    strokeWidth={activeConnection ? 2.8 : 1.2}
                    opacity={
                      !bothFiltered 
                        ? 0.04 
                        : hoveredId 
                        ? (activeConnection ? 0.95 : 0.08) 
                        : 0.45
                    }
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Render Nodes (Glow circles and Text labels) on top */}
              {skillNodes.map((node) => {
                const isHovered = hoveredId === node.id;
                const isNodeActive = isNodeConnectedOrSelf(node.id, hoveredId);
                const categoryFiltered = isFiltered(node.category);

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onMouseEnter={() => setHoveredId(node.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="cursor-pointer group"
                  >
                    {/* Node base glow indicator */}
                    <circle
                      r={isHovered ? 28 : 22}
                      fill={getCategoryColor(node.category)}
                      opacity={
                        !categoryFiltered 
                          ? 0.1 
                          : hoveredId 
                          ? (isNodeActive ? 0.9 : 0.2) 
                          : 0.8
                      }
                      className="transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                    />

                    {/* Hover border ring overlay */}
                    <circle
                      r={isHovered ? 32 : 22}
                      fill="transparent"
                      stroke={getCategoryColor(node.category)}
                      strokeWidth={isHovered ? 2 : 0}
                      className="transition-all duration-300"
                    />

                    {/* Skill Label Text */}
                    <text
                      textAnchor="middle"
                      dy="4"
                      className={`text-[10px] sm:text-[11px] font-extrabold fill-white pointer-events-none ${
                        !categoryFiltered && "opacity-25"
                      } transition-opacity duration-300`}
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        ) : (
          /* MOBILE RESPONSIVE PILL LIST FALLBACK */
          <div className="flex flex-wrap items-center justify-center gap-2.5 py-6 z-10">
            {skillNodes.map((node) => {
              const categoryFiltered = isFiltered(node.category);
              return (
                <div
                  key={node.id}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all duration-300 ${
                    categoryFiltered
                      ? "bg-white/50 text-slate-800 border-white/60 shadow-sm"
                      : "opacity-25 border-transparent"
                  }`}
                  style={{
                    borderLeft: categoryFiltered ? `3px solid ${getCategoryColor(node.category)}` : undefined
                  }}
                >
                  {node.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
