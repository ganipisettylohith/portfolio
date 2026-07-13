import AnimatedSection from "@/components/layout/AnimatedSection";
import { Terminal, Database, Server, Shield } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Terminal className="text-neon-blue" size={24} />,
      title: "AI Engineering",
      desc: "Building production-ready Enterprise AI platforms, Multi-Agent systems, and RAG architectures.",
    },
    {
      icon: <Server className="text-neon-purple" size={24} />,
      title: "Full Stack & Cloud",
      desc: "Developing end-to-end applications, scalable REST APIs, and robust AWS cloud architectures.",
    },
    {
      icon: <Database className="text-neon-cyan" size={24} />,
      title: "Database Architecture",
      desc: "Optimizing PostgreSQL, pgvector, and complex relational databases for AI operations.",
    },
    {
      icon: <Shield className="text-neon-blue" size={24} />,
      title: "Cyber Security",
      desc: "Implementing secure authentication, network analysis, and ensuring data protection protocols.",
    },
  ];

  return (
    <AnimatedSection id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              About
            </span>{" "}
            <span className="text-gradient">Me</span>
          </h2>
          <div className="glass-card p-8 text-gray-300 leading-relaxed space-y-4">
            <p>
              I am a passionate <strong>AI & Full Stack Developer</strong> with a strong foundation in Cyber Security. I specialize in building intelligent, production-ready AI applications that solve complex engineering problems.
            </p>
            <p>
              My expertise lies in architecting <strong>Multi-Agent systems, Retrieval-Augmented Generation (RAG) platforms</strong>, and robust full-stack applications. I enjoy bridging the gap between cutting-edge AI models and scalable software architecture.
            </p>
            <p>
              With experience in cloud deployments, Git workflows, AWS infrastructure, secure authentication (Auth0), and database optimization, I deliver complete, secure, and scalable solutions from infrastructure to intelligent routing.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
