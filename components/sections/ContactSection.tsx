import AnimatedSection from "@/components/layout/AnimatedSection";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-24 mb-20">
      <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple/20 blur-[100px] rounded-full" />

        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        
        <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form className="max-w-md mx-auto space-y-4 relative z-10 text-left">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-mono ml-1 uppercase tracking-wider">Name</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue/50 transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-mono ml-1 uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple/50 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-mono ml-1 uppercase tracking-wider">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>
          
          <button type="button" className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4">
            Send Message <Send size={18} />
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-400 relative z-10">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} className="text-neon-blue" />
            <a href="mailto:lohith.ganipisetty9999@gmail.com">lohith.ganipisetty9999@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <MapPin size={16} className="text-neon-purple" />
            <span>Available Worldwide (Remote)</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
