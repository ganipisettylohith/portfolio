import fs from "fs";
import path from "path";
import BackgroundMesh from "@/components/ui/BackgroundMesh";
import FloatingNav from "@/components/layout/FloatingNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AdditionalProjectsSection from "@/components/sections/AdditionalProjectsSection";
import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

// Copy uploaded MediVision AI & NetTrack Live screenshots to public folder if present
try {
  const currentBrainDir = `C:\\Users\\Lohith\\.gemini\\antigravity-ide\\brain\\34765a04-7fdf-47ec-9613-3102b15222c6`;
  const legacyBrainDir = `C:\\Users\\Lohith\\.gemini\\antigravity-ide\\brain\\c707a413-79d1-4f48-abc1-06bdd44b0faf`;
  const activeBrainDir = `C:\\Users\\Lohith\\.gemini\\antigravity-ide\\brain\\2752d5d1-a406-4f08-8b84-25b236fea025`;
  const publicDir = path.join(process.cwd(), "public");

  const newMediSrc = path.join(currentBrainDir, "media__1785751544823.png");
  const mediDest = path.join(publicDir, "medivision-ai.png");

  if (fs.existsSync(newMediSrc)) {
    fs.copyFileSync(newMediSrc, mediDest);
  } else {
    const mediSrc = path.join(legacyBrainDir, "media__1785581751300.png");
    if (fs.existsSync(mediSrc) && !fs.existsSync(mediDest)) {
      fs.copyFileSync(mediSrc, mediDest);
    }
  }

  const netSrc = path.join(legacyBrainDir, "media__1785581974915.png");
  const netDest = path.join(publicDir, "nettrack-live.png");
  if (fs.existsSync(netSrc) && !fs.existsSync(netDest)) {
    fs.copyFileSync(netSrc, netDest);
  }

  const dosSrc = path.join(activeBrainDir, "media__1785845122996.png");
  const dosDest = path.join(publicDir, "dosaccord-ai.png");
  if (fs.existsSync(dosSrc)) {
    fs.copyFileSync(dosSrc, dosDest);
  }


  // Cleanup: Move legacy/unwanted files to unwanted_backup/ folder
  const rootDir = process.cwd();
  const backupDir = path.join(rootDir, "unwanted_backup");
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }

  const filesToMove = [
    "components/sections/AIEngineeringLabSection.tsx",
    "components/sections/AIGalaxySection.tsx",
    "components/sections/AIJourneyRoadSection.tsx",
    "components/sections/AIResearchSection.tsx",
    "components/sections/AITelemetryDashboardSection.tsx",
    "components/sections/CertificationsSection.tsx",
    "components/sections/LLMTrainingSection.tsx",
    "components/sections/ResumeSection.tsx",
    "components/ProjectCard.js",
    "components/ProjectCard.module.css",
    "components/Projects.js",
    "components/Projects.module.css",
    "components/ui/CaseStudyModal.tsx"
  ];

  filesToMove.forEach(relPath => {
    const src = path.join(rootDir, relPath);
    if (fs.existsSync(src)) {
      const dest = path.join(backupDir, path.basename(relPath));
      fs.renameSync(src, dest);
    }
  });
} catch (e) {
  // Fallback gracefully
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
      {/* Warm Dynamic Background Mesh */}
      <BackgroundMesh />

      {/* Floating Navigation Bar */}
      <FloatingNav />

      {/* Portfolio Sections */}
      <div className="w-full relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AdditionalProjectsSection />
        <GithubSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
