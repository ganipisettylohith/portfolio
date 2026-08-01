"use client";

import { useState, useRef } from "react";
import { Code2, Github, Monitor, Tablet, Smartphone } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ProjectImage from "@/components/ui/ProjectImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flagshipProjects = [
  {
    id: "dosaccord-ai",
    title: "DOSAccord.ai",
    subtitle: "Multi-Agent AI Platform for Sports Intelligence",
    badge: "Flagship Project",
    overview: "An AI platform built for sports teams and academies to query player telemetry, coaching tactics, and officiating rules in natural language.",
    frictionPoint: "The hardest part was query routing. When a user asked 'Why was the player benched after the 60th minute?', the router initially couldn't decide whether to hit the Player Agent or Coach Agent. I ended up writing a lightweight Pydantic classification step with strict fallback rules to keep routing latency under 20ms.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "PyTorch", "LLM Training", "AWS EC2", "Docker"],
    githubUrl: "https://github.com/ganipisettylohith",
    screenshotUrl: undefined,
    layout: "text-left",
  },
  {
    id: "medivision-ai",
    title: "MediVision AI",
    subtitle: "Medical Image Analysis & Explainable AI",
    badge: "Medical AI",
    overview: "A medical image analysis application that highlights disease regions in radiological scans using CNN classifiers and Grad-CAM heatmaps.",
    frictionPoint: "Grad-CAM heatmaps originally rendered with noise around the edges of DICOM scans. I added a custom thresholding step in PyTorch to clean up the visual overlay before generating PDF reports.",
    techStack: ["Python", "PyTorch", "FastAPI", "Grad-CAM", "ReportLab PDF", "React"],
    githubUrl: "https://github.com/ganipisettylohith",
    screenshotUrl: "/medivision-ai.png",
    layout: "image-left",
  },
  {
    id: "nettrack-live",
    title: "NetTrack Live",
    subtitle: "Real-Time Network Packet Inspection",
    badge: "Networking",
    overview: "A real-time network monitoring tool that captures live packets, parses protocols (TCP/UDP/HTTP/DNS), and streams traffic analytics to a dashboard.",
    frictionPoint: "Under high packet volume, Python's single-threaded socket listener started dropping packets. Switching to non-blocking socket buffers with WebSocket broadcasts solved the bottleneck.",
    techStack: ["Python", "Socket API", "FastAPI", "WebSockets", "Docker", "Linux", "React"],
    githubUrl: "https://github.com/ganipisettylohith",
    screenshotUrl: "/nettrack-live.png",
    layout: "text-left",
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeViewportTab, setActiveViewportTab] = useState<Record<string, "desktop" | "tablet" | "mobile">>({
    "dosaccord-ai": "desktop",
    "medivision-ai": "desktop",
    "nettrack-live": "desktop"
  });

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".project-card-gsap");
        cards.forEach((card) => {
          const frame = card.querySelector(".project-frame-gsap");
          const title = card.querySelector(".project-title-gsap");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 0.5,
            },
          });

          if (title) {
            tl.fromTo(title, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 });
          }
          if (frame) {
            tl.fromTo(frame, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.2");
          }
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-3">
          <Code2 size={14} /> Flagship Software Projects
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          Projects & <span className="text-gradient">Case Studies</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Detailed engineering breakdowns of systems I have designed, coded, and deployed.
        </p>
      </div>

      {/* Flagship Projects Showcase */}
      <div ref={containerRef} className="space-y-16">
        {flagshipProjects.map((project, idx) => {
          const isTextLeft = project.layout === "text-left";
          const currentViewport = activeViewportTab[project.id] || "desktop";

          return (
            <div
              key={project.id}
              className="project-card-gsap glass-card-premium p-6 sm:p-10 overflow-hidden"
            >
              <div className={`flex flex-col ${isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-stone-100 text-[var(--accent-primary)] text-xs font-extrabold border border-stone-200">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="project-title-gsap">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Overview Paragraph */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Engineering Friction Point Callout */}
                  {project.frictionPoint && (
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                      <span className="font-bold text-[var(--accent-primary)] block mb-1">Engineering Friction Point:</span>
                      {project.frictionPoint}
                    </div>
                  )}

                  {/* GitHub Action Link */}
                  <div className="pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-white font-semibold text-xs sm:text-sm hover:bg-[var(--accent-primary)] transition-colors shadow-md"
                    >
                      <Github size={16} /> GitHub Code
                    </a>
                  </div>
                </div>

                {/* Screenshot Switcher Window Frame (Desktop / Tablet / Mobile) wrapped entirely in TiltCard */}
                <div className="project-frame-gsap flex-1 w-full">
                  <TiltCard className="w-full">
                    <div className="space-y-4">
                      {/* Viewport Switcher Tabs */}
                      <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 w-fit shadow-sm">
                        <button
                          onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "desktop" }))}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            currentViewport === "desktop" ? "bg-white text-[var(--accent-primary)] shadow-sm" : "text-slate-600 hover:bg-white/50"
                          }`}
                        >
                          <Monitor size={14} /> Desktop
                        </button>
                        <button
                          onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "tablet" }))}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            currentViewport === "tablet" ? "bg-white text-[var(--accent-primary)] shadow-sm" : "text-slate-600 hover:bg-white/50"
                          }`}
                        >
                          <Tablet size={14} /> Tablet
                        </button>
                        <button
                          onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "mobile" }))}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            currentViewport === "mobile" ? "bg-white text-[var(--accent-primary)] shadow-sm" : "text-slate-600 hover:bg-white/50"
                          }`}
                        >
                          <Smartphone size={14} /> Mobile
                        </button>
                      </div>

                      {/* Browser Frame Window */}
                      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden hover:border-[var(--accent-primary)]/40 transition-colors">
                        {/* Window Header */}
                        <div className="bg-stone-950 px-4 py-3 flex items-center justify-between border-b border-stone-800">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                          </div>
                          <span className="text-[11px] font-mono text-stone-400 truncate max-w-[220px]">
                            https://{project.id}.app
                          </span>
                          <div className="w-8" />
                        </div>

                        {/* Viewport Content */}
                        <div className="p-4 sm:p-5">
                          <ProjectImage src={project.screenshotUrl} alt={project.title} />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
