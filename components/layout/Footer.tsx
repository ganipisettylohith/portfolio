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
    <footer className="relative z-10 bg-[#FAFAF7] border-t border-[#E5E5E0] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#2D6A6A] text-white text-xs font-bold flex items-center justify-center">
              GL
            </div>
            <span className="font-bold text-[#1F2328] text-base">
              G. Lohith
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Technical Intern • AI/ML Engineer & Full Stack Python Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ganipisettylohith"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-slate-700 hover:bg-[#2D6A6A] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/lohith-ganipisetty"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-slate-700 hover:bg-[#2D6A6A] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="mailto:lohith.ganipisetty9999@gmail.com"
            className="p-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-slate-700 hover:bg-[#2D6A6A] hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="p-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-slate-700 hover:bg-[#2D6A6A] hover:text-white transition-colors"
            aria-label="Resume"
          >
            <FileText size={16} />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} G. Lohith
          </span>
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={scrollToTop}
                className="p-2 rounded-md bg-[#1F2328] text-white hover:bg-[#2D6A6A] transition-colors shadow-sm flex items-center justify-center"
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
