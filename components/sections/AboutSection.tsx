import AnimatedSection from "@/components/layout/AnimatedSection";
import { Bot, CloudCog, Database, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Bot className="text-neon-blue" size={24} />,
      title: "AI Engineering",
      desc: "Enterprise AI • Multi-Agent • RAG",
    },
    {
      icon: <CloudCog className="text-neon-purple" size={24} />,
      title: "Full Stack & Cloud",
      desc: "FastAPI • Next.js • AWS • REST APIs",
    },
    {
      icon: <Database className="text-neon-cyan" size={24} />,
      title: "Database Architecture",
      desc: "PostgreSQL • pgvector • Vector Search",
    },
    {
      icon: <ShieldCheck className="text-neon-blue" size={24} />,
      title: "Cyber Security",
      desc: "Authentication • Secure APIs",
    },
  ];

  const chips = [
    "Python", "FastAPI", "Next.js", "PostgreSQL", 
    "AWS", "Docker", "Auth0", "LangChain", 
    "Git", "REST APIs"
  ];

  const stats = [
    { value: "15+", label: "AI Agents" },
    { value: "10+", label: "Projects" },
    { value: "4+", label: "Technologies" },
    { value: "2025", label: "Graduate" },
  ];

  return (
    <AnimatedSection id="about">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-[48px] font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              About
            </span>{" "}
            <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass-card p-8">
            <p className="text-base sm:text-[17px] text-gray-300 leading-relaxed">
              Technical Developer building intelligent, scalable, and production-ready AI applications using Large Language Models (LLMs), Multi-Agent Systems, Retrieval-Augmented Generation (RAG), FastAPI, PostgreSQL, and AWS. Dedicated to creating robust backend architectures and innovative AI solutions for real-world challenges.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map(chip => (
                <span key={chip} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {chip}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-[24px] font-bold text-white mb-2 leading-tight">{feature.title}</h3>
              <p className="text-sm sm:text-[16px] text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
