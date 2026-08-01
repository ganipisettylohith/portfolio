"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Music, Code2, Github, ExternalLink } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const additionalProjects = [
  {
    title: "E-Commerce Website",
    category: "Full Stack Web Application",
    description: "A full-stack e-commerce website with secure login, product management, shopping cart, and order management.",
    icon: ShoppingBag,
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/ganipisettylohith",
  },
  {
    title: "Music Streaming Application",
    category: "Interactive Web App",
    description: "A web-based music streaming application that allows users to browse songs, create playlists, and play music through a responsive interface.",
    icon: Music,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API"],
    githubUrl: "https://github.com/ganipisettylohith",
  },
  {
    title: "Django Backend Projects",
    category: "Python Web Engineering",
    description: "A collection of Django applications built to practice REST APIs, database management, authentication, and backend development.",
    icon: Code2,
    technologies: ["Python", "Django", "SQLite", "PostgreSQL", "REST Framework"],
    githubUrl: "https://github.com/ganipisettylohith",
  },
];

export default function AdditionalProjectsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto border-t border-slate-200/60">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Additional <span className="text-gradient">Projects</span>
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Full stack applications and specialized Python web projects.
        </p>
      </div>

      {/* Grid of smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {additionalProjects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <TiltCard key={project.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-stone-200/80 hover:border-[var(--accent-primary)]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Category badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-stone-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-xl bg-amber-50 text-[var(--accent-primary)]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech pill badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-stone-100 text-slate-700 text-[11px] font-semibold border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer button */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-700 hover:text-[var(--accent-primary)] flex items-center gap-1 transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  <ExternalLink size={14} className="text-slate-400" />
                </div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
