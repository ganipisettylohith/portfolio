"use client";

import { useState, useRef } from "react";
import { Code2, Github, Monitor, Tablet, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import ProjectImage from "@/components/ui/ProjectImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import Magnetic from "@/components/ui/Magnetic";
import Link from "next/link";
import LiveWidget from "@/components/ui/LiveWidget";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flagshipProjects = [
  {
    id: "dosaccord-ai",
    title: "DOSAccord.ai",
    subtitle: "AI Assistant for Sports Intelligence",
    badge: "Flagship Project",
    overview: "I built an AI assistant that sports coaches and analysts can talk to in plain English. Instead of digging through spreadsheets and rulebooks, they can just ask questions about player performance telemetry or league rules and get direct answers instantly.",
    problem: "Coaches and analysts had to dig through spreadsheets and rulebooks to answer basic questions during games and training — things like a player's recent stats or a specific league rule. That's slow, especially when a decision needs to happen quickly.",
    approach: "I built a system that lets someone just type a question in plain English. Behind the scenes, the question first goes through a routing step that figures out what it's actually about, then hands it off to one of a few specialized AI assistants — one focused on player stats, one on coaching strategy, one on league rules. The backend runs on FastAPI, and it uses a search technique called vector search (via pgvector) to quickly find the right information before generating an answer.",
    frictionPoint: "The hardest part was directing questions to the right AI assistant. When a coach asked, \"Why was the player benched after the 60th minute?\", the system got confused between the stats assistant and the strategy assistant. I fixed this by adding a quick sorting step using Pydantic (a Python data-validation tool) that correctly routes the question in under 20 milliseconds.",
    outcome: "Working end-to-end as an internal tool — a coach or analyst can ask a question and get a direct answer instead of searching through documents.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "PyTorch", "LLM Training", "AWS EC2", "Docker"],
    githubUrl: "https://github.com/ganipisettylohith/DOSAccord.ai",
    screenshotUrl: "/dosaccord-ai.png",
    layout: "text-left",
  },
  {
    id: "medivision-ai",
    title: "MediVision AI",
    subtitle: "Medical Image Analysis & Visual Explanations",
    badge: "Medical AI",
    overview: "I built an assistant that scans medical images like chest X-rays to help doctors spot potential health issues. The tool uses image-recognition models to classify scans and overlays color-coded heatmaps directly onto the image so doctors can see exactly which visual details the computer used to make its decision.",
    problem: "Reviewing medical scans for signs of disease takes time and close attention — it's easy to spend a long time manually cross-checking images, and subtle regions can be easy to miss.",
    approach: "I built a tool that runs a CNN (a type of neural network that's good at recognizing patterns in images) over radiology scans to flag potential disease regions. It then uses a technique called Grad-CAM to generate a heatmap over the scan, showing exactly which part of the image the model focused on — so instead of just a yes/no result, a doctor can see where the model is looking and judge for themselves whether it makes sense.",
    frictionPoint: "Grad-CAM heatmaps originally rendered with noise around the edges of the scans. I added a custom thresholding step in PyTorch to clean up the overlay before it gets included in the generated PDF report.",
    outcome: "Working as a prototype — it takes in a scan and produces a report pairing the original image with its heatmap overlay.",
    techStack: ["Python", "PyTorch", "FastAPI", "Grad-CAM", "ReportLab PDF", "React"],
    githubUrl: "https://github.com/ganipisettylohith/MediVision-AI",
    screenshotUrl: "/medivision-ai.png",
    layout: "image-left",
  },
  {
    id: "geotraffic-live",
    title: "GeoTrafficLive",
    subtitle: "Real-Time Network Traffic Map",
    badge: "Networking",
    overview: "I built a web tool that captures live computer network traffic and plots where it is coming from on an interactive world map. It breaks down the network data, identifies which country each connection points to, and updates the maps and charts in real-time.",
    problem: "Network issues — dropped connections, unusual traffic, slow performance — are hard to catch in the moment without a live view of what's actually happening. Digging through logs after the fact only tells you what already went wrong.",
    approach: "I built a tool that captures network packets directly using raw Python sockets, reads out the protocol details (TCP, UDP, HTTP, DNS), and streams that data live to a dashboard using WebSockets — so you can watch traffic as it happens instead of reconstructing it afterward from logs.",
    frictionPoint: "Under high packet volume, Python's single-threaded socket listener started dropping packets. Switching to non-blocking socket buffers with WebSocket broadcasts solved the bottleneck.",
    outcome: "Runs as a working local tool for inspecting live network traffic in real time.",
    techStack: ["Python", "Socket API", "FastAPI", "WebSockets", "Docker", "Linux", "React"],
    githubUrl: "https://github.com/ganipisettylohith/GeoTrafficLive",
    screenshotUrl: "/nettrack-live.png",
    layout: "text-left",
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeViewportTab, setActiveViewportTab] = useState<Record<string, "desktop" | "tablet" | "mobile">>({
    "dosaccord-ai": "desktop",
    "medivision-ai": "desktop",
    "geotraffic-live": "desktop"
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

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Detailed breakdowns of systems I have designed, coded, and deployed.
        </p>
        <div className="w-full flex justify-center mt-6">
          <LiveWidget />
        </div>
      </div>

      {/* Flagship Projects Showcase */}
      <div ref={containerRef} className="space-y-16">
        {flagshipProjects.map((project, idx) => {
          const isTextLeft = project.layout === "text-left";
          const currentViewport = activeViewportTab[project.id] || "desktop";

          return (
            <TiltCard key={project.id} className="project-card-gsap block" intensity={6}>
              <div className="glass-card-premium p-6 sm:p-10 overflow-hidden animate-all h-full">
                <div className={`flex flex-col ${isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-stone-100/80 backdrop-blur-md text-[var(--accent-primary)] text-xs font-extrabold border border-stone-200/60">
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

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Magnetic>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-white font-semibold text-xs sm:text-sm hover:bg-[var(--accent-primary)] transition-colors shadow-md cursor-pointer"
                        >
                          <Github size={16} /> GitHub Code
                        </motion.a>
                      </Magnetic>

                      <Magnetic>
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white/50 backdrop-blur-md border border-stone-200/60 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-stone-250 transition-colors cursor-pointer"
                        >
                          <span>View Case Study</span>
                        </Link>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Screenshot Switcher Window Frame (Desktop / Tablet / Mobile) */}
                  <div className="project-frame-gsap flex-1 w-full">
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
                            <span className="w-3 h-3 rounded-full bg-amber-50/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-emerald-50/80 inline-block" />
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
                  </div>

                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
