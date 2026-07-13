import AnimatedSection from "@/components/layout/AnimatedSection";
import { ExternalLink, ArrowRight, Trophy, Brain } from "lucide-react";
import Link from "next/link";

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
            Featured
          </span>{" "}
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of apps and platforms I've built to solve real-world problems.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4 sm:px-6">
        
        {/* HERO PROJECT */}
        {featuredProject && (
          <div className={`glass-card relative overflow-hidden bg-[#101014]/60 backdrop-blur-xl border-l-[6px] ${featuredProject.color} shadow-2xl`}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Featured Badge */}
            <div className="absolute top-0 left-6 sm:left-12 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-b-xl shadow-lg flex items-center gap-2 z-20">
              <Trophy size={16} /> Featured Project
            </div>

            <div className="p-6 sm:p-12 lg:p-16 flex flex-col xl:flex-row gap-12 mt-12">
              
              {/* Left Pane - Image */}
              <div className="w-full xl:w-5/12 flex flex-col gap-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a0c] to-[#1a1a20] border border-white/10 relative group shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat" />
                  
                  <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 group-hover:scale-105 transition-transform duration-700">
                    <Brain size={72} className="text-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                    <h4 className="text-3xl font-bold text-white tracking-widest mb-3 font-mono">DOSAccord.ai</h4>
                    <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
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
            <div key={idx} className={`glass-card p-8 flex flex-col h-full bg-[#101014]/55 border-l-[4px] ${project.color} group hover:-translate-y-2 transition-all duration-300 shadow-xl`}>
              
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
