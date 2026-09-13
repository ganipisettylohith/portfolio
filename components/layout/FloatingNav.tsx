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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-lg transition-all duration-200 px-5 py-3 ${
            scrolled
              ? "bg-[#FAFAF7]/95 border border-[#E5E5E0] shadow-sm"
              : "bg-[#FAFAF7]/80 border border-[#E5E5E0]/60"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-[#1F2328] font-bold text-sm"
          >
            <div className="w-7 h-7 rounded-md bg-[#2D6A6A] flex items-center justify-center text-white text-xs font-bold">
              GL
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1F2328] text-sm">
                G. Lohith
              </span>
              <span className="text-[10px] font-semibold text-[#2D6A6A]">
                AI/ML & FULL-STACK DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-stone-100/60 p-1 rounded-md border border-[#E5E5E0]">
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
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-white text-[#2D6A6A] font-bold border border-[#E5E5E0] shadow-sm"
                      : "text-slate-600 hover:text-[#1F2328] hover:bg-white/60"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1 px-4 py-1.5 rounded-md bg-[#2D6A6A] text-white text-xs font-semibold hover:bg-[#235353] transition-colors shadow-sm"
            >
              Contact Me <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-stone-100 text-slate-700 hover:bg-stone-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 lg:hidden bg-white border border-[#E5E5E0] rounded-lg p-5 shadow-md"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-md text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#2D6A6A]/10 text-[#2D6A6A] border border-[#2D6A6A]/20"
                        : "text-slate-700 hover:bg-stone-100"
                    }`}
                  >
                    <Icon size={16} className={isActive ? "text-[#2D6A6A]" : "text-slate-400"} />
                    {item.name}
                  </a>
                );
              })}
              
              <div className="pt-3 border-t border-[#E5E5E0] flex flex-col gap-2 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2 rounded-md bg-stone-100 border border-[#E5E5E0] text-[#1F2328] font-semibold text-center text-xs hover:bg-stone-200 transition-colors"
                >
                  Download Resume PDF
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2 rounded-md bg-[#2D6A6A] text-white font-semibold text-center text-xs hover:bg-[#235353] transition-colors"
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
