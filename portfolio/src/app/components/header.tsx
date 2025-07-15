"use client";
import styles from "../page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  themeColor: string,
}

const Header: React.FC<HeaderProps> = ({themeColor}) => {
  function copyToClipboard() {
    navigator.clipboard.writeText("prahaladanand6@gmail.com");
    alert("Email copied to clipboard!");
  }
  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
  }, [themeColor]);
  return (
    <div className={styles.headerContainer} style={{color: textColor}}>
      <h1>&gt; Prahalad Anand</h1>
      <div className={styles.contactContainer}>
        <h2 id="contact"><a onClick={copyToClipboard} title="Email">prahaladanand6@gmail.com</a> | <a href="https://www.linkedin.com/in/prahalad-anand-524636297/" title="LinkedIn" target="_blank">LinkedIn</a> | <a href="https://github.com/PPilot2" title="Github" target="_blank">Github</a> | <a href="resume5.10.25.pdf" title="Resume" target="_blank" style={{cursor: "not-allowed"}}>Resume</a></h2>
      </div>
      <h3>Web Developer and AI Researcher | Intern @ <Link href="https://www.splenta.com/" target="__blank">Splenta Systems</Link></h3>
    </div>
  );
}

export default Header;