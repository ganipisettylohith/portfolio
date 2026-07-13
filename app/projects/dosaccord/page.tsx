import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function DOSAccordProjectPage() {
  const features = [
    "Modular multi-agent architecture (Player, Coach, Academy)",
    "Enterprise RAG Pipeline with OCR & pgvector semantic search",
    "AI-powered CRUD operations via natural language",
    "Migrated to Auth0 Passwordless Auth with JWT validation",
    "Deployed on AWS EC2 with Docker & Reverse Proxy"
  ];

  const tech = ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Auth0", "Docker", "AWS EC2"];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>
      
      <div className="glass-card p-8 md:p-12 border-neon-blue/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        
        <div className="text-neon-blue text-sm font-bold tracking-widest mb-4">★ HERO PROJECT</div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          DOSAccord.ai <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 text-2xl md:text-4xl mt-2 block">Smart Sports Analytics Platform</span>
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {tech.map((t, i) => (
            <span key={i} className="text-sm font-mono px-3 py-1 bg-white/5 text-gray-300 rounded border border-white/10">
              {t}
            </span>
          ))}
        </div>

        <div className="max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            A smart sports platform that lets you chat with data just like you would with a human. It uses AI to instantly analyze player stats, team performance, and game history to give you simple, actionable insights. Under the hood, it leverages a secure, intelligent multi-agent architecture and modern scalable web technologies to keep everything fast and secure.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3">
                    <span className="text-neon-blue mt-1">✓</span> 
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Architecture Highlights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The platform's core relies on specialized agents serving different user roles: the Player, Coach, and Academy agents. By implementing a sophisticated RAG pipeline powered by pgvector, it allows for highly contextual and accurate semantic searches across vast amounts of sports metrics and historical records.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Data security is ensured through a seamless Auth0 passwordless authentication flow, validating JWTs strictly at the API gateway layer. Everything is containerized using Docker and orchestrated on AWS EC2 for enterprise-grade uptime and scalability.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-white/10 relative z-10">
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all font-medium">
            <Github size={20} /> View Source Code
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/30 rounded-lg text-neon-blue transition-all font-medium">
            <ExternalLink size={20} /> Live Platform Demo
          </a>
        </div>
      </div>
    </div>
  );
}
