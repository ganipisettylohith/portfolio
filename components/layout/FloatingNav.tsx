"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2, Sparkles, Briefcase, User, Mail, Github } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: User },
  { name: "About", href: "#about", icon: Sparkles },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Skills", href: "#skills", icon: Sparkles },
  { name: "GitHub", href: "#github", icon: Github },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const navPadding = useTransform(scrollY, [0, 80], ["0.75rem 1.5rem", "0.5rem 1.25rem"]);
  const navScale = useTransform(scrollY, [0, 80], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:pt-4 pointer-events-none"
      >
        <motion.nav
          style={{ padding: navPadding, scale: navScale }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-stone-200/90 shadow-xl shadow-amber-900/5"
              : "bg-white/70 backdrop-blur-md border border-stone-200/60 shadow-sm"
          }`}
        >
          {/* Brand Logo with whileTap bounce */}
          <motion.a
            href="#home"
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 group text-slate-900 font-bold tracking-tight text-sm sm:text-base"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#C7622B] via-[#D9A441] to-[#2F6E5C] flex items-center justify-center text-white text-xs font-black shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform">
              GL
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight leading-none text-sm">
                G. Lohith
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--accent-primary)]">
                AI/ML & FULL-STACK ENGINEER
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Items with layoutId sliding pill */}
          <div className="hidden lg:flex items-center gap-1 bg-stone-100/80 p-1 rounded-full border border-stone-200/70">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent-primary)] font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-[var(--accent-primary)] transition-colors shadow-sm"
            >
              Contact Me <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-stone-100 text-slate-700 hover:bg-stone-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 lg:hidden bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-3xl p-6 shadow-2xl shadow-amber-900/10"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-amber-50 text-[var(--accent-primary)] border border-amber-200"
                        : "text-slate-700 hover:bg-stone-100/70"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-[var(--accent-primary)]" : "text-slate-400"} />
                    {item.name}
                  </a>
                );
              })}
              
              <div className="pt-4 border-t border-stone-100 flex flex-col gap-2 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-2xl bg-amber-50 border border-amber-200 text-[var(--accent-primary)] font-semibold text-center text-sm"
                >
                  Download Resume PDF
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-2xl bg-slate-900 text-white font-semibold text-center text-sm shadow-md"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
