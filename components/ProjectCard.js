import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.techStack}>
        {project.tech.map((t, idx) => (
          <span key={idx} className={styles.tech}>{t}</span>
        ))}
      </div>
    </div>
  )
}
