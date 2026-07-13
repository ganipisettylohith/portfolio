"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <div className="px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md text-neon-blue text-sm font-medium tracking-wide">
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm <span className="text-gradient">G. Lohith</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8"
        >
          AI & Full Stack Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Building production-ready AI applications, intelligent multi-agent systems, and full-stack architectures. Experienced in Deployment, Git, AWS, and Cloud integrations. Cyber Security Graduate (2025).
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity z-0" />
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity z-0 group-hover:text-white" />
          </a>
          
          <a href="/resume.pdf" download className="group px-8 py-4 glass-card rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all">
            <Download size={20} className="text-neon-purple" /> Download Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {[
            { icon: <Github size={24} />, href: "https://github.com/ganipisettylohith", color: "hover:text-white" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/lohith-ganipisetty", color: "hover:text-[#0077b5]" },
            { icon: <Mail size={24} />, href: "mailto:lohith.ganipisetty9999@gmail.com", color: "hover:text-neon-blue" }
          ].map((item, idx) => (
            <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className={`text-gray-500 transition-colors ${item.color}`}>
              {item.icon}
            </a>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-2 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-8 rounded-full bg-gradient-to-b from-neon-blue to-transparent"
        />
      </motion.div>
    </section>
  );
}
