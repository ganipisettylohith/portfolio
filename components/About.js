import styles from './About.module.css'

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "AWS", "Docker", "Git", "TailwindCSS", "SQL", "MongoDB"
  ];

  return (
    <section className={styles.about} id="about">
      {/* Decorative background glow */}
      <div className={styles.glowBlob}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            About <span className={styles.highlight}>Me</span>
          </h2>
          <p className={styles.text}>
            I am a passionate developer who loves crafting beautifully designed, human-centric web applications and AI solutions. With a keen eye for aesthetics and a strong technical foundation, I strive to build tools that are not only functional but also a joy to use.
          </p>
          <p className={styles.text}>
            Currently, I am working on a multi-AI agent system hosted on AWS EC2, and previously built comprehensive platforms ranging from custom music players to e-commerce storefronts. I believe in continuous learning and pushing the boundaries of what's possible on the web.
          </p>
          
          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.subHeading}>My Arsenal</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skillBadge}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
