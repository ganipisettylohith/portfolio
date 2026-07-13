"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import { ExternalLink, ArrowRight, Trophy, Brain, Lock, LayoutDashboard, MessageSquare, BarChart2, Settings } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DOSAccord.ai",
    subtitle: "Enterprise Sports Intelligence Platform",
    desc: "An AI-powered sports platform that lets users query player and team data using natural language.",
    color: "border-cyan-500",
    featured: true,
    features: [
      "Multi-Agent AI",
      "Natural Language Search",
      "Enterprise Ready"
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "RAG", "AWS"],
    links: {
      demo: "#",
      caseStudy: "/projects/dosaccord"
    }
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Web Application",
    desc: "Developed a full-stack e-commerce platform with secure authentication, product management, shopping cart functionality, and a responsive user experience.",
    color: "border-emerald-500",
    featured: false,
    features: ["Authentication", "Product Catalog", "Shopping Cart"],
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    links: { demo: "#", caseStudy: "#" }
  },
  {
    title: "Music Streaming Application",
    subtitle: "Full-Stack Django Application",
    desc: "Built a Django-based music streaming platform featuring audio playback, playlist management, and a responsive interface for seamless music discovery.",
    color: "border-purple-500",
    featured: false,
    features: ["Music Library", "Audio Playback", "Playlist Management"],
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    links: { demo: "#", caseStudy: "#" }
  },
  {
    title: "Network Traffic Analyzer",
    subtitle: "Cybersecurity Monitoring Platform",
    desc: "Developed a cybersecurity monitoring system that captures and analyzes network traffic to provide protocol inspection and real-time visibility into network activity.",
    color: "border-orange-500",
    featured: false,
    features: ["Packet Capture", "Protocol Analysis", "Interactive Dashboard"],
    tech: ["Python", "Wireshark", "Networking", "React.js"],
    links: { demo: "#", caseStudy: "#" }
  }
];

export default function ProjectsSection() {
  const featuredProject = projects.find(p => p.featured);
  const standardProjects = projects.filter(p => !p.featured);

  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Engineering
          </span>{" "}
          <span className="text-gradient">Highlights</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of AI-powered applications, backend systems, and software solutions designed to solve real-world challenges through thoughtful engineering.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4 sm:px-6">
        
        {/* HERO PROJECT */}
        {featuredProject && (
          <div className={`glass-card relative overflow-hidden bg-[#101014]/60 backdrop-blur-xl border-l-[6px] ${featuredProject.color} shadow-2xl group`}>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Featured Badge */}
            <div className="absolute top-0 left-6 sm:left-12 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-b-xl shadow-lg flex items-center gap-2 z-20">
              <Trophy size={16} /> Featured Project
            </div>

            <div className="p-6 sm:p-12 lg:p-16 flex flex-col xl:flex-row gap-12 mt-12">
              
              {/* Left Pane - CSS Dashboard Mockup */}
              <div className="w-full xl:w-5/12 flex flex-col gap-6">
                
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0c] border border-white/10 relative group-hover:border-cyan-500/30 transition-colors duration-500 shadow-2xl flex flex-col">
                  {/* Top Browser Bar */}
                  <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 shrink-0 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md text-[10px] text-gray-400 font-mono">
                      <Lock size={10} /> dosaccord.ai/dashboard
                    </div>
                  </div>
                  
                  {/* Dashboard Layout */}
                  <div className="flex flex-1 overflow-hidden relative">
                    {/* Sidebar */}
                    <div className="w-12 sm:w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4 shrink-0 bg-white/[0.02]">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400"><LayoutDashboard size={16} /></div>
                      <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-500"><MessageSquare size={16} /></div>
                      <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-500"><BarChart2 size={16} /></div>
                      <div className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-gray-500"><Settings size={16} /></div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-4 sm:p-6 flex flex-col gap-4">
                      {/* Top Analytics Row */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <div className="h-14 sm:h-16 rounded-xl bg-white/5 border border-white/5 p-2 sm:p-3 flex flex-col justify-between">
                          <span className="text-[8px] sm:text-[10px] text-gray-500 font-mono uppercase tracking-wider">Queries</span>
                          <span className="text-sm sm:text-lg font-bold text-gray-200">1,492</span>
                        </div>
                        <div className="h-14 sm:h-16 rounded-xl bg-white/5 border border-white/5 p-2 sm:p-3 flex flex-col justify-between">
                          <span className="text-[8px] sm:text-[10px] text-gray-500 font-mono uppercase tracking-wider">Latency</span>
                          <span className="text-sm sm:text-lg font-bold text-cyan-400">180ms</span>
                        </div>
                        <div className="h-14 sm:h-16 rounded-xl bg-white/5 border border-white/5 p-2 sm:p-3 flex flex-col justify-between">
                          <span className="text-[8px] sm:text-[10px] text-gray-500 font-mono uppercase tracking-wider">Agents</span>
                          <span className="text-sm sm:text-lg font-bold text-green-400">3 Active</span>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-3 relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-2">
                           <Brain size={14} className="text-cyan-500" />
                           <span className="text-[10px] sm:text-xs font-semibold text-gray-300">Swarm Activity</span>
                        </div>
                        
                        {/* Mock Graph Bars */}
                        <div className="flex items-end gap-1.5 sm:gap-2 h-full opacity-60">
                          <div className="w-full bg-cyan-500/20 rounded-t-sm h-[30%]" />
                          <div className="w-full bg-cyan-500/40 rounded-t-sm h-[60%]" />
                          <div className="w-full bg-cyan-500/60 rounded-t-sm h-[40%]" />
                          <div className="w-full bg-cyan-500/30 rounded-t-sm h-[80%]" />
                          <div className="w-full bg-cyan-500/80 rounded-t-sm h-[100%]" />
                          <div className="w-full bg-cyan-500/50 rounded-t-sm h-[50%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] max-w-[280px] sm:max-w-sm rounded-lg bg-[#000]/80 backdrop-blur-md border border-white/10 p-3 shadow-xl z-20">
                    <div className="flex flex-col gap-1.5 font-mono text-[8px] sm:text-[10px]">
                      <motion.div 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: true }}
                        className="text-gray-400"
                      >
                        <span className="text-gray-500 mr-2">❯</span>Player Agent initialized
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.3 }} viewport={{ once: true }}
                        className="text-gray-400"
                      >
                        <span className="text-gray-500 mr-2">❯</span>Searching vector database...
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.3 }} viewport={{ once: true }}
                        className="text-cyan-400"
                      >
                        <span className="text-cyan-500 mr-2">✓</span>Response generated
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Status Cards */}
                  <div className="absolute top-12 -right-2 sm:-right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-2 shadow-xl z-20">
                     <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                     <span className="text-[8px] sm:text-[10px] font-mono text-gray-300">AI Agents Online</span>
                  </div>
                  <div className="absolute top-28 -left-2 sm:-left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3 flex items-center gap-1.5 shadow-xl z-20">
                     <span className="text-cyan-500 text-[10px]">🧠</span>
                     <span className="text-[8px] sm:text-[10px] font-mono text-gray-300">RAG Active</span>
                  </div>

                </div>
              </div>

              {/* Right Pane - Content */}
              <div className="w-full xl:w-7/12 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-6 tracking-wide">{featuredProject.subtitle}</p>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                  {featuredProject.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {featuredProject.tech.map((item, i) => (
                    <span key={i} className="text-sm font-medium px-4 py-2 bg-white/5 text-gray-300 rounded-lg border border-white/10 shadow-inner">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mb-12">
                  <ul className="space-y-4">
                    {featuredProject.features.map((item, i) => (
                      <li key={i} className="text-base md:text-lg text-gray-300 flex items-center gap-3">
                        <span className="text-cyan-500 font-bold shrink-0">✓</span> 
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center">
                  <a href={featuredProject.links.demo} className="flex items-center gap-2 px-6 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-colors text-sm md:text-base">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <Link href={featuredProject.links.caseStudy || "#"} className="flex items-center justify-center gap-2 px-8 py-3 md:py-4 bg-cyan-500 hover:bg-cyan-400 border border-cyan-400 rounded-xl text-black font-extrabold transition-colors text-sm md:text-base group shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                    Case Study <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STANDARD PROJECTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          {standardProjects.map((project, idx) => (
            <div key={idx} className={`glass-card p-8 flex flex-col h-full bg-[#101014]/55 border-l-[4px] ${project.color} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/[0.02]`}>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-5">{project.subtitle}</p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((item, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
                <ul className="space-y-2.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5 shrink-0">✓</span> 
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5 border-t border-white/10 flex items-center gap-4">
                <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <Link href={project.links.caseStudy || "#"} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium ml-auto group">
                  Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
