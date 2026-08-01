"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Building2, Code2, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

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

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    if (Math.abs(distanceX) < 90 && Math.abs(distanceY) < 90) {
      x.set(distanceX * 0.35);
      y.set(distanceY * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [specialtyIdx, setSpecialtyIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // GSAP Clip-Path Text Reveal on Load
  useGSAP(
    () => {
      if (heroRef.current) {
        const animElements = heroRef.current.querySelectorAll(".hero-text-anim");
        gsap.fromTo(
          animElements,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            y: 35,
            scale: 1.08,
            opacity: 0,
          },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power4.out",
          }
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
      <div ref={heroRef} className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Role Badge */}
        <div className="hero-text-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-amber-200/80 text-[var(--accent-primary)] text-xs sm:text-sm font-bold shadow-sm mb-6">
          <Building2 size={15} className="text-[var(--accent-primary)]" />
          Technical Intern • Dream Olympic Sports Pvt Ltd
        </div>

        {/* Large Name with signature warm text gradient */}
        <h1 className="hero-text-anim text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[var(--foreground)] mb-4">
          <span className="text-gradient">G. Lohith</span>
        </h1>

        {/* Subtitle Roles */}
        <h2 className="hero-text-anim text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-800 mb-6 tracking-tight max-w-3xl">
          AI/ML Engineer & <span className="text-gradient">Full Stack Python Developer</span>
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

        {/* Floating Tech Badges with continuous phase-offset idle bob */}
        <div className="hero-text-anim flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {floatingTech.map((tech) => (
            <motion.span
              key={tech.name}
              animate={{
                y: [0, -6, 0, 6, 0],
                rotate: [0, 1.2, 0, -1.2, 0],
              }}
              transition={{
                duration: tech.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tech.delay,
              }}
              whileHover={{ scale: 1.1, translateY: -4 }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border ${tech.bg} shadow-sm cursor-default transition-shadow hover:shadow-md`}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hero-text-anim flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <MagneticButton
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-md hover:bg-[var(--accent-primary)] hover:shadow-[0_0_25px_rgba(199,98,43,0.35)] transition-all flex items-center justify-center gap-2 group"
          >
            View Flagship Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-stone-200 text-stone-800 font-semibold text-sm shadow-sm hover:bg-stone-50 hover:border-amber-700/30 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={16} className="text-[var(--accent-primary)]" /> Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-50/80 border border-amber-200/80 text-[var(--accent-primary)] font-semibold text-sm hover:bg-amber-100/80 transition-all flex items-center justify-center gap-2"
          >
            <Download size={16} /> Resume PDF
          </a>
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
                {stat.value}{stat.suffix}
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
