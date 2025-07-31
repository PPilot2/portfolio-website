"use client";
import styles from "../page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CenterAlert } from "./alertbox";

interface HeaderProps {
  themeColor: string;
}

const Header: React.FC<HeaderProps> = ({ themeColor }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [textColor, setTextColor] = useState<string>("#000");

  function copyToClipboard() {
    navigator.clipboard.writeText("prahaladanand6@gmail.com");
    setShowAlert(true);
  }

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
  }, [themeColor]);

  return (
    <div className={styles.headerContainer} style={{ color: textColor }}>
      <h1>&gt; Prahalad Anand</h1>
      <div className={styles.contactContainer}>
        <div id="contact" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
          <span>
            <a onClick={copyToClipboard} title="Email" style={{ cursor: "pointer" }}>
              prahaladanand6@gmail.com
            </a>
          </span>
          <span style={{ userSelect: "none" }}>|</span>
          <span>
            <a
              href="https://www.linkedin.com/in/prahalad-anand-524636297/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
          <span style={{ userSelect: "none" }}>|</span>
          <span>
            <a href="https://github.com/PPilot2" title="Github" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </span>
          <span style={{ userSelect: "none" }}>|</span>
          <span>
            <span title="Resume" style={{ cursor: "not-allowed", color: "grey" }}>
              Resume
            </span>
          </span>
        </div>
      </div>
      <h3>
        Web Developer and AI Researcher | Fintech/AI Intern @{" "}
        <Link href="https://www.splenta.com/" target="__blank">
          Splenta Systems
        </Link>
      </h3>

      {showAlert && (
        <CenterAlert message="Email copied to clipboard!" onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default Header;
