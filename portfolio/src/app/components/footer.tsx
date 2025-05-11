import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Made with ❤️ by <a href="https://github.com/PPilot2" className={styles.footerLink} target="__blank">Prahalad Anand</a></p>
      </div>
    </footer>
  );
}