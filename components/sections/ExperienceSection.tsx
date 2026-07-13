import AnimatedSection from "@/components/layout/AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-24">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Experience Timeline */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-xl text-neon-blue">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-neon-blue rounded-full -left-[8.5px] top-0 shadow-[0_0_10px_#00f0ff]" />
            
            <h3 className="text-2xl font-bold text-white">Technical Intern</h3>
            <h4 className="text-lg text-neon-blue mb-2">Dream Olympic Sports Pvt Ltd</h4>
            
            <div className="glass-card p-6 mt-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Developed an <strong>Enterprise AI platform</strong> with Multi-Agent architecture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Designed robust Backend APIs using <strong>FastAPI</strong> and PostgreSQL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Managed AWS Cloud Deployment and structured database architectures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">•</span>
                  <span>Implemented advanced Prompt Engineering and Auth0 Authentication.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-neon-purple/10 border border-neon-purple/30 rounded-xl text-neon-purple">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-neon-purple rounded-full -left-[8.5px] top-0 shadow-[0_0_10px_#8a2be2]" />
            
            <span className="text-sm font-semibold text-gray-500 tracking-wider mb-2 block">GRADUATED IN 2025</span>
            <h3 className="text-2xl font-bold text-white">Bachelor of Technology</h3>
            <h4 className="text-lg text-neon-purple mb-2">Computer Science Engineering</h4>
            
            <div className="glass-card p-6 mt-4">
              <p className="text-gray-300 mb-4">
                Specialized in <strong>Cyber Security</strong> with a strong focus on network analysis, secure systems, and software engineering principles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
