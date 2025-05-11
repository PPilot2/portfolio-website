"use client";
import styles from "../page.module.css";
export default function Header() {
  function copyToClipboard() {
    navigator.clipboard.writeText("prahaladanand6@gmail.com");
    console.log("Email copied to clipboard!");
  }
  return (
    <div className={styles.headerContainer}>
      <h1>&gt; Prahalad Anand</h1>
      <div className={styles.contactContainer}>
        <h2 id="contact"><a onClick={copyToClipboard} title="Email">prahaladanand6@gmail.com</a> | <a href="https://www.linkedin.com/in/prahalad-anand-524636297/" title="LinkedIn" target="__blank">LinkedIn</a> | <a href="https://github.com/PPilot2" title="Github" target="__blank">Github</a> | <a href="resume5.10.25.pdf" title="Resume" target="__blank">Resume</a></h2>
      </div>
      <h3>AI Intern at <a>Splenta Systems</a></h3>
    </div>
  );
}
