const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const backupDir = path.join(rootDir, 'unwanted_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
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

console.log("Scanning for legacy/unused files...");
let movedCount = 0;

filesToMove.forEach(relPath => {
  const src = path.join(rootDir, relPath);
  if (fs.existsSync(src)) {
    const dest = path.join(backupDir, path.basename(relPath));
    console.log(`[MOVE] ${relPath} -> unwanted_backup/${path.basename(relPath)}`);
    fs.renameSync(src, dest);
    movedCount++;
  }
});

console.log(`\nScan complete. Moved ${movedCount} legacy files into unwanted_backup/.`);
console.log("You can delete the 'unwanted_backup' folder to clean up your workspace completely.");
