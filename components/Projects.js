import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: "🎵 Custom Music Player",
      description: "A beautifully designed, feature-rich music player built for seamless audio experiences with modern UI controls.",
      tech: ["JavaScript", "HTML5 Audio", "CSS"]
    },
    {
      title: "🛒 E-commerce Platform",
      description: "A full-fledged online shopping platform with intuitive navigation, cart management, and a sleek user interface.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "🤖 Multi AI Agent System",
      description: "Currently building a complex distributed system of AI agents deployed on AWS EC2, capable of collaborating on advanced tasks.",
      tech: ["Python", "AWS EC2", "LLMs"]
    }
  ]

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </section>
  )
}
