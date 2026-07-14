"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);

      // Simple intersection observer logic alternative for active section
      const sections = navItems.map((item) => item.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-auto max-w-full sm:max-w-none ${
        hasScrolled ? "py-2 px-1 sm:px-4 glass-card rounded-2xl sm:rounded-full" : "py-2 sm:py-4 px-1 sm:px-6 bg-transparent"
      }`}
    >
      <div className="overflow-x-auto no-scrollbar max-w-full">
        <ul className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center gap-1 sm:gap-2 md:space-x-4 min-w-max px-2">
          {navItems.map((item) => (
            <li key={item.name} className="shrink-0">
            <a
              href={item.href}
              className={`relative px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? "text-neon-blue"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </motion.nav>
  );
}
