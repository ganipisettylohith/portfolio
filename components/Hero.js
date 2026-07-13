import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.highlight}>Lohith</span>.</h1>
        <p className={styles.subtitle}>I build exceptional digital experiences.</p>
      </div>
      <div className={styles.backgroundGlow}></div>
    </section>
  )
}
