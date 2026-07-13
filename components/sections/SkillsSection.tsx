import AnimatedSection from "@/components/layout/AnimatedSection";
import { Brain, Code2, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    desc: "Building intelligent applications using modern LLMs, RAG pipelines, and autonomous agent architectures.",
    icon: <Brain size={28} className="text-cyan-500" />,
    borderColor: "border-cyan-500",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Advanced", logo: "🤖" },
      { name: "Multi-Agent Systems", level: "Advanced", logo: "🌐" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced", logo: "🔍" },
      { name: "LangChain", level: "Advanced", logo: "🦜" },
      { name: "Prompt Engineering", level: "Advanced", logo: "✍️" },
      { name: "Vector Databases", level: "Advanced", logo: "🗄️" },
      { name: "Ollama", level: "Intermediate", logo: "🦙" },
      { name: "OpenAI API", level: "Advanced", logo: "🤖" },
      { name: "Claude API", level: "Intermediate", logo: "🧠" },
      { name: "Gemini API", level: "Advanced", logo: "✨" },
      { name: "Llama", level: "Intermediate", logo: "🦙" },
    ]
  },
  {
    title: "Programming Languages & Frameworks",
    desc: "Languages and frameworks used to build scalable backend and frontend applications.",
    icon: <Code2 size={28} className="text-purple-500" />,
    borderColor: "border-purple-500",
    skills: [
      { name: "Python", level: "Advanced", logo: "🐍" },
      { name: "FastAPI", level: "Advanced", logo: "⚡" },
      { name: "TypeScript", level: "Intermediate", logo: "📘" },
      { name: "JavaScript", level: "Advanced", logo: "🟨" },
      { name: "Next.js", level: "Intermediate", logo: "▲" },
      { name: "React", level: "Intermediate", logo: "⚛️" },
      { name: "Node.js", level: "Intermediate", logo: "🟩" },
      { name: "Express.js", level: "Intermediate", logo: "🚂" },
      { name: "SQL", level: "Advanced", logo: "💾" },
      { name: "Java", level: "Intermediate", logo: "☕" },
    ]
  },
  {
    title: "Cloud, Databases & DevOps",
    desc: "Infrastructure, databases, containerization, and deployment technologies.",
    icon: <Database size={28} className="text-emerald-500" />,
    borderColor: "border-emerald-500",
    skills: [
      { name: "PostgreSQL", level: "Advanced", logo: "🐘" },
      { name: "pgvector", level: "Advanced", logo: "🐘" },
      { name: "AWS EC2", level: "Intermediate", logo: "☁️" },
      { name: "Docker", level: "Intermediate", logo: "🐳" },
      { name: "Linux", level: "Intermediate", logo: "🐧" },
      { name: "Git", level: "Advanced", logo: "🔀" },
      { name: "GitHub", level: "Advanced", logo: "🐙" },
      { name: "MySQL", level: "Intermediate", logo: "🐬" },
      { name: "Bitbucket", level: "Intermediate", logo: "🪣" },
    ]
  },
  {
    title: "Security & Infrastructure",
    desc: "Authentication, cybersecurity fundamentals, and network analysis tools.",
    icon: <Shield size={28} className="text-slate-400" />,
    borderColor: "border-slate-400",
    skills: [
      { name: "Authentication", level: "Advanced", logo: "🔐" },
      { name: "Auth0", level: "Advanced", logo: "🛡️" },
      { name: "Cybersecurity", level: "Intermediate", logo: "🔒" },
      { name: "Network Analysis", level: "Intermediate", logo: "📡" },
      { name: "Wireshark", level: "Intermediate", logo: "🦈" },
    ]
  }
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Technical
          </span>{" "}
          <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies and platforms I use to design, develop, and deploy modern AI-powered applications.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className={`
              bg-[#101014]/55 border border-white/10 backdrop-blur-[18px] 
              rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              border-l-4 ${category.borderColor}
            `}
          >
            <div className="flex items-center gap-4 mb-4">
              {category.icon}
              <h3 className="text-[24px] md:text-[30px] font-bold text-white tracking-tight">
                {category.title}
              </h3>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 border-b border-white/10 pb-6">
              {category.desc}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3 px-[18px] py-[10px] rounded-full 
                    border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] 
                    transition-all duration-250 ease-out
                    hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]
                    hover:border-white/20 group
                  "
                >
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all duration-300">
                    {skill.logo}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
