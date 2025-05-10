import styles from "../page.module.css";

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navElements}>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
