import AnimatedSection from "@/components/layout/AnimatedSection";
import { Mail, Linkedin, Github, FileText, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="pt-16 pb-8">
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden text-center border-t border-white/5">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-50" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple/10 blur-[100px] rounded-full" />

        <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 tracking-tight">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10 text-base md:text-lg">
          Interested in collaborating, discussing AI, or exploring new opportunities? I'd love to hear from you.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-10 relative z-10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          Available for Full-Time Opportunities
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto relative z-10 mb-10">
          <a href="mailto:lohith.ganipisetty9999@gmail.com" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <Mail size={24} className="text-neon-blue group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 font-medium text-sm">Email</span>
          </a>
          
          <a href="https://linkedin.com/in/lohith-ganipisetty" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <Linkedin size={24} className="text-[#0077b5] group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 font-medium text-sm">LinkedIn</span>
          </a>
          
          <a href="https://github.com/ganipisettylohith" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <Github size={24} className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
            <span className="text-gray-300 font-medium text-sm">GitHub</span>
          </a>
          
          <a href="/resume.pdf" download className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 group">
            <FileText size={24} className="text-neon-purple group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 font-medium text-sm">Resume</span>
          </a>
        </div>
        
        <div className="flex justify-center relative z-10">
          <a href="mailto:lohith.ganipisetty9999@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col gap-2">
        <p className="font-medium text-gray-400">© 2026 G. Lohith</p>
        <p>Built with Next.js • TypeScript • Tailwind CSS • Framer Motion</p>
      </footer>
    </AnimatedSection>
  );
}
