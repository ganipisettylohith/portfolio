"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, ZoomOut } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

interface SkillNode {
  id: string;
  name: string;
  category: "ai" | "backend" | "cloud" | "database" | "security" | "frontend";
  x: number;
  y: number;
  relatedIds: string[];
  desc: string;
}

const skillNodes: SkillNode[] = [
  // AI & ML (Cluster Left)
  { id: "python", name: "Python", category: "backend", x: 280, y: 220, relatedIds: ["fastapi", "pytorch", "postgresql", "lora", "rag", "django", "networking", "git"], desc: "Core language for AI models, automated pipelines, and asynchronous FastAPI microservices." },
  { id: "pytorch", name: "PyTorch", category: "ai", x: 220, y: 120, relatedIds: ["python", "lora", "opencv", "gradcam"], desc: "Deep learning framework used for model inference, computer vision, and weight optimizations." },
  { id: "lora", name: "LLM Training", category: "ai", x: 380, y: 120, relatedIds: ["pytorch", "python", "aws"], desc: "Supervised fine-tuning (SFT) and parameter-efficient QLoRA quantization." },
  { id: "rag", name: "RAG & Vector", category: "ai", x: 320, y: 320, relatedIds: ["pgvector", "postgresql", "fastapi", "python"], desc: "Retrieval-Augmented Generation using semantic vector databases for contextual LLM context injection." },
  { id: "multiagent", name: "AI Agents", category: "ai", x: 190, y: 280, relatedIds: ["fastapi", "python", "rag"], desc: "Multi-agent orchestration networks using Pydantic classification and domain routers." },
  { id: "opencv", name: "OpenCV", category: "ai", x: 120, y: 110, relatedIds: ["pytorch", "gradcam", "python"], desc: "Computer vision library for medical image processing, filtering, and normalization." },
  { id: "gradcam", name: "Grad-CAM", category: "ai", x: 140, y: 190, relatedIds: ["opencv", "pytorch"], desc: "Gradient-weighted Class Activation Mapping to generate explainable visual heatmaps." },

  // Backend & Core (Center)
  { id: "fastapi", name: "FastAPI", category: "backend", x: 500, y: 270, relatedIds: ["python", "postgresql", "auth0", "docker", "aws", "rag", "multiagent", "networking", "react", "nextjs", "git"], desc: "High-performance async Python backend framework utilizing Pydantic data schemas." },
  { id: "django", name: "Django", category: "backend", x: 450, y: 190, relatedIds: ["python", "postgresql", "sql"], desc: "Structured full-stack Python framework for rapid database application modeling." },
  { id: "networking", name: "Networking", category: "backend", x: 420, y: 360, relatedIds: ["fastapi", "python", "docker"], desc: "Packet capturing via raw sockets, protocol analysis (TCP/UDP), and WebSockets." },

  // Databases (Cluster Bottom Left)
  { id: "postgresql", name: "PostgreSQL", category: "database", x: 320, y: 460, relatedIds: ["pgvector", "fastapi", "python", "sql", "django"], desc: "Advanced object-relational SQL database engine for robust system state storage." },
  { id: "pgvector", name: "pgvector", category: "database", x: 210, y: 440, relatedIds: ["postgresql", "rag"], desc: "Vector similarity database extension enabling HNSW index search." },
  { id: "sql", name: "SQL", category: "database", x: 430, y: 500, relatedIds: ["postgresql", "python"], desc: "Relational data querying, schema optimization, and transaction management." },

  // Security (Cluster Top Right)
  { id: "auth0", name: "Auth0", category: "security", x: 630, y: 180, relatedIds: ["fastapi", "jwt", "react"], desc: "Identity provider facilitating OAuth2 authentication flows and passwordless logins." },
  { id: "jwt", name: "JWT Sec", category: "security", x: 720, y: 150, relatedIds: ["auth0", "fastapi"], desc: "JSON Web Token cryptographic signing, verification, and role-based route access." },

  // Cloud & DevOps (Cluster Bottom Right)
  { id: "aws", name: "AWS EC2", category: "cloud", x: 610, y: 370, relatedIds: ["docker", "linux", "fastapi", "lora"], desc: "GPU computing nodes setup, IAM security configurations, and S3 file integrations." },
  { id: "docker", name: "Docker", category: "cloud", x: 700, y: 330, relatedIds: ["aws", "fastapi", "linux", "git", "networking"], desc: "Containerized application packaging for multi-container microservice deployments." },
  { id: "linux", name: "Linux", category: "cloud", x: 580, y: 460, relatedIds: ["aws", "docker"], desc: "System administration, bash automation scripts, and server performance monitoring." },
  { id: "git", name: "Git", category: "cloud", x: 700, y: 450, relatedIds: ["docker", "python", "typescript", "fastapi"], desc: "Distributed version control, branching, and automated CI/CD configurations." },

  // Frontend (Cluster Far Right)
  { id: "react", name: "React", category: "frontend", x: 790, y: 250, relatedIds: ["nextjs", "typescript", "tailwind", "fastapi", "auth0"], desc: "Component-based UI state architecture for complex dashboard layouts." },
  { id: "nextjs", name: "Next.js", category: "frontend", x: 880, y: 240, relatedIds: ["react", "typescript", "tailwind", "fastapi"], desc: "Server-side rendering, API routing, and asset optimization framework." },
  { id: "typescript", name: "TypeScript", category: "frontend", x: 890, y: 330, relatedIds: ["nextjs", "react", "tailwind", "git"], desc: "Type-safe JavaScript wrapper to identify logical compile-time contract errors." },
  { id: "tailwind", name: "Tailwind", category: "frontend", x: 800, y: 350, relatedIds: ["nextjs", "react", "typescript"], desc: "Utility-first styling system to build fluid responsive page layouts." }
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState(false);
  const [viewBox, setViewBox] = useState("0 0 1000 580");
  const viewBoxRef = useRef({ x: 0, y: 0, w: 1000, h: 580 });

  // Detect screen size for responsive mobile list fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeNode = skillNodes.find((n) => n.id === (selectedId || hoveredId));

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

  const handleNodeClick = (node: SkillNode) => {
    const targetWidth = 480;
    const targetHeight = 300;
    const targetX = Math.max(0, Math.min(1000 - targetWidth, node.x - targetWidth / 2));
    const targetY = Math.max(0, Math.min(580 - targetHeight, node.y - targetHeight / 2));

    setSelectedId(node.id);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      viewBoxRef.current = { x: targetX, y: targetY, w: targetWidth, h: targetHeight };
      setViewBox(`${targetX} ${targetY} ${targetWidth} ${targetHeight}`);
      return;
    }

    gsap.to(viewBoxRef.current, {
      x: targetX,
      y: targetY,
      w: targetWidth,
      h: targetHeight,
      duration: 0.75,
      ease: "power3.out",
      onUpdate: () => {
        setViewBox(`${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.w} ${viewBoxRef.current.h}`);
      }
    });
  };

  const handleResetZoom = () => {
    setSelectedId(null);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      viewBoxRef.current = { x: 0, y: 0, w: 1000, h: 580 };
      setViewBox("0 0 1000 580");
      return;
    }

    gsap.to(viewBoxRef.current, {
      x: 0,
      y: 0,
      w: 1000,
      h: 580,
      duration: 0.75,
      ease: "power3.out",
      onUpdate: () => {
        setViewBox(`${viewBoxRef.current.x} ${viewBoxRef.current.y} ${viewBoxRef.current.w} ${viewBoxRef.current.h}`);
      }
    });
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
            : "Click a node to zoom in and see detail telemetry. Click background to zoom out."}
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
      <div className="relative bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-6 sm:p-10 overflow-hidden min-h-[420px] flex flex-col justify-between">
        
        {/* Connection Highlight border overlay when hovered/selected */}
        <AnimatePresence>
          {(hoveredId || selectedId) && (
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
              {activeNode 
                ? `${selectedId ? "Zoomed Focus" : "Active Node"}: ${activeNode.name}` 
                : activeCategory !== "all" 
                ? `Category: ${categoryFilters.find(f => f.id === activeCategory)?.label}`
                : "Interactive Topology"}
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
            <HelpCircle size={13} />
            {activeNode
              ? `Linked to ${activeNode.relatedIds.filter(id => skillNodes.some(n => n.id === id)).length} active dependencies`
              : isMobile 
              ? "Touch items to view category stack" 
              : "Click node to inspect"}
          </span>
        </div>

        {/* Layout Output: 1. Desktop Interactive SVG Graph / 2. Mobile Responsive Pill Fallback */}
        {!isMobile ? (
          /* DESKTOP SVG NODE GRAPH */
          <div className="relative w-full h-[520px] flex items-center justify-center z-10 select-none">
            
            {/* SVG Canvas */}
            <svg 
              viewBox={viewBox} 
              className="w-full h-full"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleResetZoom();
                }
              }}
            >
              {/* Render edges (lines) behind nodes */}
              {edges.map((edge) => {
                const nodeFrom = skillNodes.find((n) => n.id === edge.from)!;
                const nodeTo = skillNodes.find((n) => n.id === edge.to)!;
                const activeConnection = isConnected(edge, selectedId || hoveredId);
                const bothFiltered = isFiltered(nodeFrom.category) && isFiltered(nodeTo.category);

                return (
                  <motion.line
                    key={`${edge.from}-${edge.to}`}
                    layout
                    x1={nodeFrom.x}
                    y1={nodeFrom.y}
                    x2={nodeTo.x}
                    y2={nodeTo.y}
                    stroke={activeConnection ? "#C7622B" : "#8A8272"}
                    strokeWidth={activeConnection ? 2.8 : 1.2}
                    animate={{
                      opacity: !bothFiltered 
                        ? 0.04 
                        : (selectedId || hoveredId)
                        ? (activeConnection ? 0.95 : 0.08) 
                        : 0.45
                    }}
                    transition={{ duration: 0.35 }}
                    className="transition-all duration-355"
                  />
                );
              })}

              {/* Render Nodes (Glow circles and Text labels) on top */}
              {skillNodes.map((node) => {
                const isHovered = hoveredId === node.id;
                const isSelected = selectedId === node.id;
                const isNodeActive = isNodeConnectedOrSelf(node.id, selectedId || hoveredId);
                const categoryFiltered = isFiltered(node.category);

                return (
                  <motion.g
                    key={node.id}
                    layout
                    transform={`translate(${node.x}, ${node.y})`}
                    animate={{
                      opacity: !categoryFiltered ? 0.15 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 160, damping: 20 }}
                    onMouseEnter={() => !selectedId && setHoveredId(node.id)}
                    onMouseLeave={() => !selectedId && setHoveredId(null)}
                    onClick={() => handleNodeClick(node)}
                    className="cursor-pointer group"
                  >
                    {/* Node base glow indicator */}
                    <circle
                      r={isSelected ? 32 : isHovered ? 28 : 22}
                      fill={getCategoryColor(node.category)}
                      opacity={
                        !categoryFiltered 
                          ? 0.1 
                          : (selectedId || hoveredId)
                          ? (isNodeActive ? 0.95 : 0.15) 
                          : 0.8
                      }
                      className="transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                    />

                    {/* Hover/Selected border ring overlay */}
                    <circle
                      r={isSelected ? 36 : isHovered ? 32 : 22}
                      fill="transparent"
                      stroke={getCategoryColor(node.category)}
                      strokeWidth={isSelected ? 3 : isHovered ? 2 : 0}
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
                  </motion.g>
                );
              })}
            </svg>

            {/* Float Tooltip Details Panel overlay */}
            <AnimatePresence>
              {activeNode && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 max-w-sm p-5 rounded-2xl bg-slate-900/95 border border-amber-600/30 text-white backdrop-blur-xl shadow-xl z-20 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: getCategoryColor(activeNode.category) }} />
                      {activeNode.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-white/10 px-2 py-0.5 rounded-md">
                      {activeNode.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-350 leading-relaxed font-medium">
                    {activeNode.desc}
                  </p>
                  
                  {selectedId && (
                    <button
                      onClick={handleResetZoom}
                      className="mt-3 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[11px] font-extrabold text-slate-200 transition-colors"
                    >
                      <ZoomOut size={13} /> Reset Viewport Zoom
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* MOBILE RESPONSIVE PILL LIST FALLBACK WITH CONTEXT SHEET */
          <div className="flex flex-col gap-4 py-4 z-10">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {skillNodes.map((node) => {
                const categoryFiltered = isFiltered(node.category);
                const isSelected = selectedId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedId(isSelected ? null : node.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all duration-300 ${
                      categoryFiltered
                        ? isSelected
                          ? "bg-slate-900 text-white border-amber-600"
                          : "bg-white/50 text-slate-800 border-white/60 shadow-sm"
                        : "opacity-25 border-transparent"
                    }`}
                    style={{
                      borderLeft: categoryFiltered ? `3px solid ${getCategoryColor(node.category)}` : undefined
                    }}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile Tooltip Drawer */}
            <AnimatePresence>
              {selectedId && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col gap-2 overflow-hidden border border-white/10"
                >
                  {(() => {
                    const node = skillNodes.find(n => n.id === selectedId);
                    if (!node) return null;
                    return (
                      <>
                        <h4 className="text-sm font-extrabold flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: getCategoryColor(node.category) }} />
                          {node.name}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">{node.desc}</p>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
