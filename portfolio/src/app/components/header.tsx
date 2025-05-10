import styles from "../page.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>&gt; Prahalad Anand</h1>
      <h3>AI Intern at <a>Splenta Systems</a></h3>
    </div>
  );
}
