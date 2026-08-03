"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, FolderGit2, ExternalLink, Star, Calendar } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

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

function StarsCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      },
    });
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

export default function GithubSection() {
  const [repoStats, setRepoStats] = useState<Record<string, RepoData>>({});

  useEffect(() => {
    const fetchStats = async () => {
      const cached = localStorage.getItem("github_repo_stats");
      const cacheTime = localStorage.getItem("github_repo_stats_time");
      
      // Cache for 30 minutes
      if (cached && cacheTime && Date.now() - parseInt(cacheTime, 10) < 30 * 60 * 1000) {
        setRepoStats(JSON.parse(cached));
        return;
      }

      const stats: Record<string, RepoData> = {};
      
      // Request repos sequentially or concurrently (public safe)
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
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Github size={14} /> Open Source Code
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
          GitHub <span className="text-gradient">Repositories</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base">
          Public repositories and code bases on GitHub.
        </p>
      </div>

      {/* Profile Card */}
      <div className="glass-card-premium p-6 sm:p-8 mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[var(--foreground)] text-white font-extrabold text-xl flex items-center justify-center shadow-md">
              GL
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">
                ganipisettylohith
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                G. Lohith • Public Portfolio Repositories
              </p>
            </div>
          </div>

          <a
            href="https://github.com/ganipisettylohith"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[var(--foreground)] text-white font-bold text-xs sm:text-sm hover:bg-[var(--accent-primary)] transition-colors flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
          >
            <Github size={16} /> View Profile on GitHub <ExternalLink size={14} />
          </a>
        </div>

        {/* Primary Technologies Row */}
        <div className="mt-6 pt-6 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Primary Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {topTechnologies.map((tech) => (
              <span key={tech} className="glass-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Public Repositories Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {pinnedRepos.map((repo) => {
          const stats = repoStats[repo.repoName];
          return (
            <motion.div
              key={repo.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="h-full"
            >
              <TiltCard className="h-full" intensity={12}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full glass-card-light p-6 flex flex-col justify-between block group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
                        <FolderGit2 size={16} className="text-[var(--accent-primary)]" />
                        {repo.name}
                      </h4>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-[var(--accent-primary)]" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-4 border-t border-stone-200/60">
                    <span className="glass-badge font-mono text-[10px] font-bold">
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <StarsCounter value={stats?.stars || 0} />
                      </span>
                      {stats?.updatedAt && (
                        <span className="flex items-center gap-1 font-mono text-[10px]">
                          <Calendar size={11} /> {stats.updatedAt}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
