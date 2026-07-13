import AnimatedSection from "@/components/layout/AnimatedSection";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    color: "from-neon-blue to-blue-600",
    skills: ["LangChain", "Ollama", "Llama", "Gemini API", "Claude", "OpenAI", "RAG", "Vector Databases", "Prompt Engineering", "AI Agents"]
  },
  {
    title: "Languages & Frameworks",
    color: "from-neon-purple to-purple-600",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "FastAPI", "Next.js", "React", "Node.js", "Express"]
  },
  {
    title: "Database & Cloud",
    color: "from-neon-cyan to-cyan-600",
    skills: ["PostgreSQL", "pgvector", "MySQL", "AWS EC2", "Docker", "Linux", "Git", "GitHub", "Bitbucket"]
  },
  {
    title: "Security & Networking",
    color: "from-gray-300 to-gray-600",
    skills: ["Cyber Security", "Wireshark", "Network Analysis", "Authentication", "Auth0"]
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
          <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive toolkit for building secure, scalable, and intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card p-8 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
