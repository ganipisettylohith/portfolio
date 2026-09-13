"use client";

import { Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: { name: string; desc: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & ML",
    skills: [
      { name: "Python", desc: "Core language for AI models, microservices, and pipelines." },
      { name: "PyTorch", desc: "Deep learning framework for computer vision and model optimization." },
      { name: "LLM Training & Fine-Tuning", desc: "Supervised fine-tuning (SFT) and QLoRA quantization." },
      { name: "RAG & Vector Search", desc: "Retrieval-Augmented Generation using semantic vector embeddings." },
      { name: "AI Agent Orchestration", desc: "Multi-agent systems using Pydantic classification and domain routing." },
      { name: "OpenCV & Grad-CAM", desc: "Medical image processing and explainable visual heatmaps." },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", desc: "Asynchronous Python microservices with Pydantic validation." },
      { name: "Django", desc: "Structured full-stack Python framework for rapid web applications." },
      { name: "Networking & Sockets", desc: "Raw socket packet capturing, TCP/UDP protocols, and WebSockets." },
      { name: "REST APIs", desc: "Clean contract design, rate limiting, and standard HTTP error handling." },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", desc: "Relational database engine for application data modeling." },
      { name: "pgvector", desc: "Vector similarity database extension using HNSW index search." },
      { name: "SQL & Query Tuning", desc: "Schema optimization, indexing, and complex queries." },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3)", desc: "GPU computing instance setup, S3 file storage, and IAM roles." },
      { name: "Docker", desc: "Containerized packaging for backend microservices." },
      { name: "Linux Administration", desc: "Bash scripting, server monitoring, and environment setup." },
      { name: "Git & Version Control", desc: "Branching strategies, code reviews, and CI/CD pipelines." },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", desc: "Component-based state architecture for dynamic user interfaces." },
      { name: "Next.js", desc: "Server-side rendering, app routing, and static generation." },
      { name: "TypeScript", desc: "Type-safe web development and compile-time contract enforcement." },
      { name: "Tailwind CSS", desc: "Utility-first responsive styling and layout design." },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={14} /> Technology Stack
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          Skills & Technical Expertise
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Core technologies, frameworks, and tools grouped by workflow category.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white/45 backdrop-blur-md border border-[#E5E5E0] rounded-lg p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#E5E5E0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A6A] inline-block" />
                <h3 className="text-lg font-bold text-[#1F2328]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <span className="text-xs font-bold text-[#1F2328]">
                      {skill.name}
                    </span>
                    <span className="text-xs text-slate-500 font-normal leading-relaxed">
                      {skill.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
