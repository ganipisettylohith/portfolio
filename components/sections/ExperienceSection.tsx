import React from "react";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Technical Intern",
    company: "Dream Olympic Sports Pvt Ltd",
    bulletColor: "bg-neon-blue",
    shadow: "shadow-[0_0_10px_#00f0ff]",
    textColor: "text-neon-blue",
    points: [
      <React.Fragment key="1">Developed an <strong>Enterprise AI platform</strong> with Multi-Agent architecture.</React.Fragment>,
      <React.Fragment key="2">Designed robust Backend APIs using <strong>FastAPI</strong> and PostgreSQL.</React.Fragment>,
      <React.Fragment key="3">Managed AWS Cloud Deployment and structured database architectures.</React.Fragment>,
      <React.Fragment key="4">Implemented advanced Prompt Engineering and Auth0 Authentication.</React.Fragment>
    ]
  }
];

const education = [
  {
    year: "GRADUATED IN 2025",
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering",
    bulletColor: "bg-neon-purple",
    shadow: "shadow-[0_0_10px_#8a2be2]",
    textColor: "text-neon-purple",
    description: <React.Fragment>Specialized in <strong>Cyber Security</strong> with a strong focus on network analysis, secure systems, and software engineering principles.</React.Fragment>
  }
];

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
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative border-l border-white/10 ml-6 pl-8 pb-8">
              <div className={`absolute w-4 h-4 ${exp.bulletColor} rounded-full -left-[8.5px] top-0 ${exp.shadow}`} />
              
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <h4 className={`text-lg ${exp.textColor} mb-2`}>{exp.company}</h4>
              
              <div className="glass-card p-6 mt-4">
                <ul className="space-y-3 text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`${exp.textColor} mt-1`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-neon-purple/10 border border-neon-purple/30 rounded-xl text-neon-purple">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          {education.map((edu, index) => (
            <div key={index} className="relative border-l border-white/10 ml-6 pl-8 pb-8">
              <div className={`absolute w-4 h-4 ${edu.bulletColor} rounded-full -left-[8.5px] top-0 ${edu.shadow}`} />
              
              <span className="text-sm font-semibold text-gray-500 tracking-wider mb-2 block">{edu.year}</span>
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <h4 className={`text-lg ${edu.textColor} mb-2`}>{edu.major}</h4>
              
              <div className="glass-card p-6 mt-4">
                <p className="text-gray-300 mb-4">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
