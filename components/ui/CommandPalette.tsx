"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, FileText, ArrowRight, Github, Linkedin, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Case Studies" | "Actions" | "Socials";
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lohith.ganipisetty9999@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + path);
      }
    } else {
      router.push(path);
    }
  };

  const commands: CommandItem[] = [
    { id: "nav-home", title: "Home Section", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#home") },
    { id: "nav-about", title: "About / Background", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#about") },
    { id: "nav-experience", title: "Experience", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#experience") },
    { id: "nav-projects", title: "Projects & Case Studies", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#projects") },
    { id: "nav-skills", title: "Skills Topology Map", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#skills") },
    { id: "nav-contact", title: "Contact Form", category: "Navigation", icon: <Hash size={16} />, action: () => handleNavigate("#contact") },

    { id: "cs-dosaccord", title: "Case Study: DOSAccord.ai", category: "Case Studies", icon: <FileText size={16} />, action: () => handleNavigate("/projects/dosaccord-ai") },
    { id: "cs-medivision", title: "Case Study: MediVision AI", category: "Case Studies", icon: <FileText size={16} />, action: () => handleNavigate("/projects/medivision-ai") },
    { id: "cs-geotraffic", title: "Case Study: GeoTrafficLive", category: "Case Studies", icon: <FileText size={16} />, action: () => handleNavigate("/projects/geotraffic-live") },

    { id: "act-resume", title: "Download Resume PDF", category: "Actions", icon: <FileText size={16} />, action: () => { setIsOpen(false); window.open("/resume.pdf", "_blank"); } },
    { id: "act-email", title: copied ? "Copied Email!" : "Copy Email to Clipboard", category: "Actions", icon: copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />, action: handleCopyEmail },

    { id: "soc-github", title: "Open GitHub Profile", category: "Socials", icon: <Github size={16} />, action: () => { setIsOpen(false); window.open("https://github.com/ganipisettylohith", "_blank"); } },
    { id: "soc-linkedin", title: "Open LinkedIn Profile", category: "Socials", icon: <Linkedin size={16} />, action: () => { setIsOpen(false); window.open("https://www.linkedin.com/in/lohith-ganipisetty", "_blank"); } },
  ];

  // Filter commands by search
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Monitor keys for trigger (⌘K / Ctrl+K) and nav keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setSearch("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Floating Trigger Badge button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[40] bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/60 p-3 rounded-full flex items-center gap-2 text-xs font-bold font-mono shadow-2xl backdrop-blur-md cursor-pointer hover:border-[var(--accent-primary)] transition-all"
        title="Open Command Palette (Ctrl+K)"
      >
        <Terminal size={15} />
        <span className="hidden sm:inline">Ctrl+K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            />

            {/* Modal Dialog container */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-slate-900/95 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col backdrop-blur-xl"
            >
              {/* Header Search Field */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-700/40">
                <Search size={18} className="text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type to search sections or case studies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-slate-400 border-none outline-none text-sm font-medium"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono px-2 py-0.5 rounded border border-slate-700 text-slate-400"
                >
                  ESC
                </button>
              </div>

              {/* Commands List Results */}
              <div ref={listRef} className="max-h-[300px] overflow-y-auto p-2 space-y-1 select-none">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={cmd.id}
                        onClick={cmd.action}
                        className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected ? "bg-[var(--accent-primary)]/20 border border-[var(--accent-primary)]/40 text-white" : "text-slate-350 hover:bg-slate-800/40 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`p-1.5 rounded-lg ${isSelected ? "text-[var(--accent-primary)]" : "text-slate-400"}`}>
                            {cmd.icon}
                          </span>
                          <div>
                            <span className="text-xs font-bold block">{cmd.title}</span>
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mt-0.5">
                              {cmd.category}
                            </span>
                          </div>
                        </div>
                        <ArrowRight size={13} className={`opacity-40 transition-transform ${isSelected && "translate-x-1"}`} />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-xs text-slate-500 font-bold">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              {/* Footer info bar */}
              <div className="bg-slate-950/40 border-t border-slate-700/40 px-4 py-2.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  Use <span className="px-1 py-0.5 bg-slate-850 rounded">↑↓</span> to navigate
                </span>
                <span className="flex items-center gap-1">
                  Press <span className="px-1 py-0.5 bg-slate-850 rounded">Enter</span> to select
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
