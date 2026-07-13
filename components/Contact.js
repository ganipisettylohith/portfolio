import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>Let's build something amazing together.</p>
        <div className={styles.links}>
          <a href="mailto:lohith.ganipisetty9999@gmail.com" className={styles.link}>Email</a>
          <a href="#" className={styles.link}>GitHub</a>
          <a href="#" className={styles.link}>LinkedIn</a>
        </div>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Lohith Ganipisetty. All rights reserved.
      </footer>
    </section>
  )
}
