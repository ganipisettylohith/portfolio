"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Building2, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGSAP";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const specialties = [
  "Multi-Agent AI Systems",
  "RAG & Vector Search",
  "LLM Fine-Tuning",
  "FastAPI Microservices",
  "AWS Cloud & Docker",
];

const floatingTech = [
  { name: "Python", bg: "bg-amber-50 text-amber-900 border-amber-200", delay: 0, duration: 4 },
  { name: "FastAPI", bg: "bg-emerald-50 text-emerald-900 border-emerald-200", delay: 0.5, duration: 4.8 },
  { name: "PostgreSQL", bg: "bg-stone-100 text-stone-900 border-stone-300", delay: 1.0, duration: 5.2 },
  { name: "PyTorch", bg: "bg-orange-50 text-orange-900 border-orange-200", delay: 1.5, duration: 4.4 },
  { name: "AWS EC2", bg: "bg-stone-100 text-stone-800 border-stone-200", delay: 2.0, duration: 5.0 },
  { name: "Docker", bg: "bg-teal-50 text-teal-900 border-teal-200", delay: 2.5, duration: 4.6 },
  { name: "pgvector", bg: "bg-amber-50 text-amber-900 border-amber-200", delay: 3.0, duration: 5.4 },
  { name: "LLM Training", bg: "bg-emerald-50 text-emerald-900 border-emerald-200", delay: 3.5, duration: 4.2 },
  { name: "Next.js", bg: "bg-stone-100 text-stone-900 border-stone-300", delay: 4.0, duration: 4.8 },
  { name: "React", bg: "bg-teal-50 text-teal-900 border-teal-200", delay: 4.5, duration: 5.0 },
  { name: "Networking", bg: "bg-orange-50 text-orange-900 border-orange-200", delay: 5.0, duration: 4.5 },
];

const realStats = [
  { label: "AI Agents Built", value: 4, suffix: "+" },
  { label: "Flagship Projects", value: 3, suffix: "" },
  { label: "Async FastAPI APIs", value: 100, suffix: "%" },
  { label: "Graduation Year", value: 2025, suffix: "" },
];

function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(value > 2000 ? 2000 : 0);
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const obj = { val: value > 2000 ? 2000 : 0 };
    gsap.to(obj, {
      val: value,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      },
    });
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [specialtyIdx, setSpecialtyIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Mouse parallax coordinate tracking
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // GSAP split reveal for name and title on load
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        gsap.set(".hero-text-anim", { opacity: 1, y: 0, clipPath: "none" });
        return;
      }

      if (heroRef.current) {
        const animElements = heroRef.current.querySelectorAll(".hero-text-anim");
        gsap.fromTo(
          animElements,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            y: 35,
            scale: 1.05,
            opacity: 0,
          },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          }
        );

        // Word split staggered reveal on subtitle
        const words = heroRef.current.querySelectorAll(".reveal-word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out", delay: 0.3 }
        );
      }
    },
    { scope: heroRef }
  );

  // Typewriter Loop
  useEffect(() => {
    const currentSpecialty = specialties[specialtyIdx];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentSpecialty) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setSpecialtyIdx((prev) => (prev + 1) % specialties.length);
      } else {
        setTypedText(
          isDeleting
            ? currentSpecialty.substring(0, typedText.length - 1)
            : currentSpecialty.substring(0, typedText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, specialtyIdx]);

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Parallax glow orbs */}
      <motion.div
        style={{
          x: coords.x * 50,
          y: coords.y * 50,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[var(--accent-primary)]/5 blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        style={{
          x: -coords.x * 40,
          y: -coords.y * 40,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-secondary)]/5 blur-3xl -z-10 pointer-events-none"
      />

      <div ref={heroRef} className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Midground Role Badge (parallax-shifted) */}
        <motion.div 
          style={{ x: coords.x * 12, y: coords.y * 12 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          className="hero-text-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-amber-200/80 text-[var(--accent-primary)] text-xs sm:text-sm font-bold shadow-sm mb-6"
        >
          <Building2 size={15} className="text-[var(--accent-primary)]" />
          Technical Intern • Dream Olympic Sports Pvt Ltd
        </motion.div>

        {/* Foreground Name & Title (counter-parallaxed slightly) */}
        <motion.div
          style={{ x: -coords.x * 8, y: -coords.y * 8 }}
          transition={{ type: "spring", stiffness: 150, damping: 30 }}
          className="flex flex-col items-center"
        >

        {/* Large Name with signature warm text gradient */}
        <h1 className="hero-text-anim text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[var(--foreground)] mb-4">
          <span className="text-gradient">G. Lohith</span>
        </h1>

        {/* Subtitle Roles with split animation */}
        <h2 className="hero-text-anim text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-800 mb-6 tracking-tight max-w-3xl flex flex-wrap justify-center gap-x-2">
          {"AI/ML Engineer &".split(" ").map((w, idx) => (
            <span key={idx} className="reveal-word inline-block">{w}</span>
          ))}
          <span className="text-gradient reveal-word inline-block">Full Stack Python Developer</span>
        </h2>

        {/* Animated Typing Role */}
        <div className="hero-text-anim h-10 flex items-center justify-center mb-6">
          <span className="text-base sm:text-xl font-semibold text-slate-600 flex items-center gap-2">
            Working on:
            <span className="text-[var(--accent-primary)] font-bold border-b-2 border-[var(--accent-primary)] pb-0.5">
              {typedText}
              <span className="animate-pulse text-[var(--accent-primary)] font-mono ml-0.5">|</span>
            </span>
          </span>
        </div>

        {/* Honest Grounded Summary */}
        <p className="hero-text-anim text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Building AI applications, FastAPI backends, vector search retrieval systems, and cloud microservices using Python and AWS.
        </p>
        </motion.div>

        {/* Floating Tech Badges with continuous phase-offset idle bob and physics stagger entrance */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
          }}
          initial="hidden"
          animate="visible"
          className="hero-text-anim flex flex-wrap items-center justify-center gap-2.5 mb-10"
        >
          {floatingTech.map((tech) => (
            <motion.span
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.6, y: 25 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { type: "spring", stiffness: 120, damping: 10 }
                }
              }}
              animate={{
                y: [0, -6, 0, 6, 0],
                rotate: [0, 1.2, 0, -1.2, 0],
              }}
              transition={{
                y: { duration: tech.duration, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
                rotate: { duration: tech.duration, repeat: Infinity, ease: "easeInOut", delay: tech.delay },
              }}
              whileHover={{ scale: 1.1, translateY: -4 }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border ${tech.bg} shadow-sm cursor-default transition-shadow hover:shadow-md`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons wrapped in Magnetic component */}
        <div className="hero-text-anim flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Magnetic>
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-[var(--accent-primary)] hover:shadow-[0_0_25px_rgba(199,98,43,0.35)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Flagship Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-stone-200 text-stone-800 font-semibold text-sm shadow-sm hover:bg-stone-50 hover:border-amber-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={16} className="text-[var(--accent-primary)]" />
              <span>Contact Me</span>
            </motion.a>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-50/80 border border-amber-200/80 text-[var(--accent-primary)] font-semibold text-sm hover:bg-amber-100/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={16} />
              <span>Resume PDF</span>
            </motion.a>
          </Magnetic>
        </div>

        {/* Grounded Real Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-3xl"
        >
          {realStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-stone-200/80 shadow-sm text-center hover:border-[var(--accent-primary)]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
