"use client";

import { useEffect, useState } from "react";
import { Github, FolderGit2, ExternalLink, Star, Calendar } from "lucide-react";

interface RepoData {
  stars: number;
  updatedAt: string;
}

const pinnedRepos = [
  {
    name: "DOSAccord.ai",
    repoName: "DOSAccord.ai",
    description: "AI Platform for the sports ecosystem with Multi-Agent architecture, RAG, and FastAPI backend.",
    language: "Python",
    url: "https://github.com/ganipisettylohith/DOSAccord.ai",
  },
  {
    name: "MediVision AI",
    repoName: "MediVision-AI",
    description: "Medical image analysis application with Grad-CAM Explainable AI and report generation.",
    language: "Python",
    url: "https://github.com/ganipisettylohith/MediVision-AI",
  },
  {
    name: "GeoTrafficLive",
    repoName: "GeoTrafficLive",
    description: "Real-time network traffic analyzer capturing raw sockets and geolocation coordinates.",
    language: "Python",
    url: "https://github.com/ganipisettylohith/GeoTrafficLive",
  },
  {
    name: "E-Commerce-Platform",
    repoName: "Ecommers",
    description: "Full-stack e-commerce application with product catalog, cart management, and checkout workflow.",
    language: "Python / HTML",
    url: "https://github.com/ganipisettylohith/Ecommers",
  },
  {
    name: "Music-Streaming-App",
    repoName: "Musicplayer",
    description: "Web-based audio streaming application with playlist creation and responsive media player.",
    language: "TypeScript / CSS",
    url: "https://github.com/ganipisettylohith/Musicplayer",
  },
  {
    name: "AI Agents System",
    repoName: "sportzerai",
    description: "Orchestrated Multi-Agent AI system using LLMs to coordinate general, coaching, and academy roles.",
    language: "Python",
    url: "https://github.com/ganipisettylohith/sportzerai",
  },
];

const topTechnologies = ["Python", "FastAPI", "TypeScript", "PostgreSQL", "PyTorch", "Docker"];

export default function GithubSection() {
  const [repoStats, setRepoStats] = useState<Record<string, RepoData>>({});

  useEffect(() => {
    const fetchStats = async () => {
      const cached = localStorage.getItem("github_repo_stats");
      const cacheTime = localStorage.getItem("github_repo_stats_time");
      
      if (cached && cacheTime && Date.now() - parseInt(cacheTime, 10) < 30 * 60 * 1000) {
        setRepoStats(JSON.parse(cached));
        return;
      }

      const stats: Record<string, RepoData> = {};
      
      await Promise.all(
        pinnedRepos.map(async (repo) => {
          try {
            const response = await fetch(`https://api.github.com/repos/ganipisettylohith/${repo.repoName}`, {
              headers: { Accept: "application/vnd.github.v3+json" },
            });
            if (response.ok) {
              const data = await response.json();
              stats[repo.repoName] = {
                stars: data.stargazers_count || 0,
                updatedAt: new Date(data.updated_at).toLocaleDateString(undefined, { month: "short", year: "numeric" }),
              };
            }
          } catch (e) {
            console.error(`Failed to fetch stats for ${repo.repoName}:`, e);
          }
        })
      );

      if (Object.keys(stats).length > 0) {
        setRepoStats(stats);
        localStorage.setItem("github_repo_stats", JSON.stringify(stats));
        localStorage.setItem("github_repo_stats_time", Date.now().toString());
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D6A6A]/10 text-[#2D6A6A] text-xs font-semibold uppercase tracking-wider mb-3">
          <Github size={14} /> Open Source Code
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2328] tracking-tight mb-3">
          GitHub Repositories
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Public repositories and code bases on GitHub.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-md bg-[#2D6A6A] text-white font-bold text-lg flex items-center justify-center shrink-0">
              GL
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1F2328]">
                ganipisettylohith
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                G. Lohith • Public Portfolio Repositories
              </p>
            </div>
          </div>

          <a
            href="https://github.com/ganipisettylohith"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#2D6A6A] text-white font-semibold text-xs sm:text-sm hover:bg-[#235353] transition-colors flex items-center gap-2 shadow-sm shrink-0 cursor-pointer"
          >
            <Github size={15} /> View Profile on GitHub <ExternalLink size={13} />
          </a>
        </div>

        {/* Primary Technologies Row */}
        <div className="mt-6 pt-5 border-t border-[#E5E5E0] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Primary Technologies Used
          </span>
          <div className="flex flex-wrap gap-1.5">
            {topTechnologies.map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-[#E5E5E0] text-slate-700 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Public Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pinnedRepos.map((repo) => {
          const stats = repoStats[repo.repoName];
          return (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/70 backdrop-blur-md border border-[#E5E5E0] rounded-md p-5 flex flex-col justify-between shadow-sm hover:border-[#2D6A6A]/40 transition-colors group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-[#1F2328] group-hover:text-[#2D6A6A] transition-colors flex items-center gap-2">
                    <FolderGit2 size={15} className="text-[#2D6A6A]" />
                    {repo.name}
                  </h4>
                  <ExternalLink size={13} className="text-slate-400 group-hover:text-[#2D6A6A]" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-3 border-t border-[#E5E5E0]">
                <span className="px-2 py-0.5 rounded-md bg-stone-50 border border-[#E5E5E0] text-[10px] font-medium text-slate-600">
                  {repo.language}
                </span>
                <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-amber-600 fill-amber-600" />
                    {stats?.stars || 0}
                  </span>
                  {stats?.updatedAt && (
                    <span className="flex items-center gap-1 text-[10px]">
                      <Calendar size={11} /> {stats.updatedAt}
                    </span>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
