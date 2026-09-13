"use client";

import { useState } from "react";
import { Code2, Github, Monitor, Tablet, Smartphone, ExternalLink } from "lucide-react";
import ProjectImage from "@/components/ui/ProjectImage";
import Link from "next/link";

const flagshipProjects = [
  {
    id: "dosaccord-ai",
    title: "DOSAccord.ai",
    subtitle: "AI Assistant for Sports Intelligence",
    badge: "Flagship Project",
    overview: "I built an AI assistant that sports coaches and analysts can talk to in plain English. Instead of digging through spreadsheets and rulebooks, they can just ask questions about player performance telemetry or league rules and get direct answers instantly.",
    problem: "Coaches and analysts had to dig through spreadsheets and rulebooks to answer basic questions during games and training — things like a player's recent stats or a specific league rule. That's slow, especially when a decision needs to happen quickly.",
    approach: "I built a system that lets someone just type a question in plain English. Behind the scenes, the question first goes through a routing step that figures out what it's actually about, then hands it off to one of a few specialized AI assistants — one focused on player stats, one on coaching strategy, one on league rules. The backend runs on FastAPI, and it uses vector search (via pgvector) to quickly find the right information before generating an answer.",
    frictionPoint: "The hardest part was directing questions to the right AI assistant. When a coach asked, \"Why was the player benched after the 60th minute?\", the system got confused between the stats assistant and the strategy assistant. I fixed this by adding a quick sorting step using Pydantic that correctly routes the question in under 20 milliseconds.",
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
  const [activeViewportTab, setActiveViewportTab] = useState<Record<string, "desktop" | "tablet" | "mobile">>({
    "dosaccord-ai": "desktop",
    "medivision-ai": "desktop",
    "geotraffic-live": "desktop"
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Code2 size={14} /> Flagship Software Projects
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          Projects & Case Studies
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Detailed breakdowns of systems I have designed, coded, and deployed.
        </p>
      </div>

      {/* Flagship Projects Showcase */}
      <div className="space-y-12">
        {flagshipProjects.map((project, idx) => {
          const isTextLeft = project.layout === "text-left";
          const currentViewport = activeViewportTab[project.id] || "desktop";

          return (
            <div key={project.id} className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-lg p-6 sm:p-8 shadow-sm">
              <div className={`flex flex-col ${isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-start`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-stone-100 text-[#2D6A6A] text-xs font-semibold border border-[#E5E5E0]">
                      {project.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2328] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Overview Paragraph */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-[#E5E5E0] text-[11px] text-slate-600 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2D6A6A] text-white font-medium text-xs hover:bg-[#235353] transition-colors shadow-sm cursor-pointer"
                    >
                      <Github size={15} /> GitHub Code
                    </a>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-white border border-[#E5E5E0] text-[#1F2328] font-medium text-xs hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ExternalLink size={13} />
                    </Link>
                  </div>
                </div>

                {/* Screenshot Frame */}
                <div className="flex-1 w-full space-y-3">
                  {/* Viewport Switcher Tabs */}
                  <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-md border border-[#E5E5E0] w-fit">
                    <button
                      onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "desktop" }))}
                      className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                        currentViewport === "desktop" ? "bg-white text-[#2D6A6A] font-bold border border-[#E5E5E0] shadow-sm" : "text-slate-600 hover:bg-white/50"
                      }`}
                    >
                      <Monitor size={13} /> Desktop
                    </button>
                    <button
                      onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "tablet" }))}
                      className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                        currentViewport === "tablet" ? "bg-white text-[#2D6A6A] font-bold border border-[#E5E5E0] shadow-sm" : "text-slate-600 hover:bg-white/50"
                      }`}
                    >
                      <Tablet size={13} /> Tablet
                    </button>
                    <button
                      onClick={() => setActiveViewportTab((prev) => ({ ...prev, [project.id]: "mobile" }))}
                      className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                        currentViewport === "mobile" ? "bg-white text-[#2D6A6A] font-bold border border-[#E5E5E0] shadow-sm" : "text-slate-600 hover:bg-white/50"
                      }`}
                    >
                      <Smartphone size={13} /> Mobile
                    </button>
                  </div>

                  {/* Browser Window Frame */}
                  <div className="bg-[#FAFAF7] rounded-md border border-[#E5E5E0] overflow-hidden shadow-sm">
                    {/* Window Header */}
                    <div className="bg-stone-100 px-3 py-2 flex items-center justify-between border-b border-[#E5E5E0]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium truncate">
                        https://{project.id}.app
                      </span>
                      <div className="w-6" />
                    </div>

                    {/* Image Viewport */}
                    <div className="p-3">
                      <ProjectImage src={project.screenshotUrl} alt={project.title} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
