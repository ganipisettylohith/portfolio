import AnimatedSection from "@/components/layout/AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DOSAccord.ai – Enterprise Multi-Agent Sports Intelligence Platform",
    desc: "Designed and developed a production-ready enterprise AI platform that enables natural language interaction with sports data through a secure, intelligent multi-agent architecture. Integrates RAG, role-based authorization, and modern web technologies.",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Auth0", "Docker", "AWS EC2", "Ollama", "Gemini API"],
    featured: true,
    features: [
      "Modular multi-agent architecture (Player, Coach, Academy)",
      "Enterprise RAG Pipeline with OCR & pgvector semantic search",
      "AI-powered CRUD operations via natural language",
      "Migrated to Auth0 Passwordless Auth with JWT validation",
      "Deployed on AWS EC2 with Docker & Reverse Proxy"
    ]
  },
  {
    title: "E-Commerce Web Application",
    desc: "Developed a full-stack e-commerce platform implementing product management, user authentication, shopping cart functionality, and order processing with a responsive user interface.",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    featured: false,
    features: ["User Authentication", "Product Catalog", "Order Management"]
  },
  {
    title: "Music Streaming Web Application",
    desc: "Built a music player web application using Django that allows users to browse, organize, and play music through an interactive interface.",
    tech: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    featured: false,
    features: ["Music Library", "Audio Playback", "Playlist Management"]
  },
  {
    title: "Network Traffic Analysis System",
    desc: "Developed a network traffic monitoring system using Wireshark, Python, and React.js to analyze captured packets, monitor network activity, and visualize traffic statistics.",
    tech: ["Python", "React.js", "Wireshark", "Networking"],
    featured: false,
    features: ["Packet Capture Analysis", "Protocol Inspection", "Interactive Dashboard"]
  }
];

export default function ProjectsSection() {
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
          Showcasing production-level applications and complex system architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`glass-card p-8 flex flex-col group transition-all duration-500 hover:-translate-y-2 ${
              project.featured ? "md:col-span-2 lg:col-span-3 lg:flex-row gap-8 items-center bg-white/[0.02] border-neon-blue/30" : ""
            }`}
          >
            {/* If it's a featured project, we could add a placeholder image area */}
            {project.featured && (
              <div className="w-full lg:w-1/2 aspect-video bg-black/50 border border-white/10 rounded-xl overflow-hidden relative group-hover:border-neon-blue/50 transition-colors flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-gray-600 font-mono text-sm tracking-widest">[ SYSTEM PREVIEW ]</span>
              </div>
            )}
            
            <div className={`w-full ${project.featured ? "lg:w-1/2" : ""}`}>
              {project.featured && (
                <div className="text-neon-blue text-sm font-bold tracking-widest mb-2">★ HERO PROJECT</div>
              )}
              <h3 className={`font-bold text-white mb-4 ${project.featured ? "text-3xl" : "text-xl"}`}>
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>
              
              {project.features && (
                <ul className="mb-6 space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="text-neon-blue">✓</span> {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  <Github size={16} /> Code
                </a>
                {project.featured && (
                  <a href="#" className="text-neon-blue hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
