const fs = require("fs");
const path = require("path");

try {
  const rootDir = path.join(__dirname, "..");
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
      console.log(`Moved: ${relPath} -> unwanted_backup/`);
    }
  });
} catch (e) {
  console.error("Error moving files:", e);
}
