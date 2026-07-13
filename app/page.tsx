import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ParticleBackground />
      
      <div className="w-full relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-white/10 z-10 bg-black/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} G. Lohith. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Designed & Built with Next.js, Tailwind & Framer Motion</p>
      </footer>
    </main>
  );
}
