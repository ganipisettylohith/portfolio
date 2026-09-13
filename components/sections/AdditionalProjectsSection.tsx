"use client";

import { ShoppingBag, Music, Code2, Github, ExternalLink } from "lucide-react";

const additionalProjects = [
  {
    title: "E-Commerce Website",
    category: "Full Stack Web Application",
    description: "A full-stack e-commerce website with secure login, product management, shopping cart, and order management.",
    icon: ShoppingBag,
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/ganipisettylohith/Ecommers",
  },
  {
    title: "Music Streaming Application",
    category: "Interactive Web App",
    description: "A web-based music streaming application that allows users to browse songs, create playlists, and play music through a responsive interface.",
    icon: Music,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API"],
    githubUrl: "https://github.com/ganipisettylohith/Musicplayer",
  },
  {
    title: "Django Backend Projects",
    category: "Python Web Engineering",
    description: "A collection of Django applications built to practice REST APIs, database management, authentication, and backend development.",
    icon: Code2,
    technologies: ["Python", "Django", "SQLite", "PostgreSQL", "REST Framework"],
    githubUrl: "https://github.com/ganipisettylohith/sportzerai",
  },
];

export default function AdditionalProjectsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto border-t border-[#E5E5E0]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-xl sm:text-3xl font-bold text-[#1F2328] tracking-tight">
          Additional Projects
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Full stack applications and specialized Python web projects.
        </p>
      </div>

      {/* Grid of smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {additionalProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.title}
              className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 shadow-sm flex flex-col justify-between hover:border-[#2D6A6A]/40 transition-colors"
            >
              <div>
                {/* Category badge & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-slate-500 bg-stone-100 px-2.5 py-0.5 rounded-md border border-[#E5E5E0]">
                    {project.category}
                  </span>
                  <div className="p-1.5 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A]">
                    <Icon size={16} />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#1F2328] mb-2">
                  {project.title}
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech pill badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-stone-50 text-slate-600 text-[11px] font-medium border border-[#E5E5E0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer link */}
              <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-700 hover:text-[#2D6A6A] flex items-center gap-1 transition-colors"
                >
                  <Github size={14} /> Source Code
                </a>
                <ExternalLink size={14} className="text-slate-400" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
