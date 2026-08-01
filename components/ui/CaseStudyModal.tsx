"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Server, ShieldCheck, Zap } from "lucide-react";

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    architecture: string[];
    keyFeatures: string[];
    technologies: string[];
    stats: { label: string; value: string }[];
    githubUrl: string;
    liveUrl?: string;
  } | null;
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl z-10 border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <span className="px-3.5 py-1 rounded-full bg-amber-50 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider border border-amber-200">
                Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                {project.title}
              </h2>
              <p className="text-lg font-semibold text-[var(--accent-primary)] mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {project.stats.map((s, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center">
                  <span className="block text-2xl font-bold text-slate-900">{s.value}</span>
                  <span className="text-xs text-slate-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Zap size={18} className="text-[var(--accent-primary)]" /> Project Overview
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Layers size={18} className="text-[var(--accent-primary)]" /> System Architecture & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 size={16} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu size={18} className="text-[var(--accent-primary)]" /> Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs font-semibold">
                    ✨ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-[var(--accent-primary)] transition-colors flex items-center gap-2 shadow-md"
              >
                <Github size={16} /> View Source Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-amber-50 border border-amber-200 text-[var(--accent-primary)] font-bold text-sm hover:bg-amber-100 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
