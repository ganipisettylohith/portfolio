"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-white/90 border-t border-stone-200/80 py-12 px-4 sm:px-6 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[var(--accent-primary)] text-white text-xs font-black flex items-center justify-center">
              GL
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-lg">
              G. Lohith
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Technical Intern • AI/ML Engineer & Full Stack Python Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ganipisettylohith"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-stone-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/lohith-ganipisetty"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-stone-100 text-slate-700 hover:bg-[#0077b5] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:lohith.ganipisetty9999@gmail.com"
            className="p-2.5 rounded-full bg-stone-100 text-slate-700 hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="p-2.5 rounded-full bg-stone-100 text-slate-700 hover:bg-[#2F6E5C] hover:text-white transition-colors"
            aria-label="Resume"
          >
            <FileText size={18} />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">
            © {new Date().getFullYear()} G. Lohith. All rights reserved.
          </span>
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-[var(--accent-primary)] transition-colors shadow-md flex items-center justify-center"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
