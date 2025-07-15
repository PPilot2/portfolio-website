"use client";
import styles from "../page.module.css";
import { useEffect, useState } from "react";

interface FooterProps {
  themeColor: string,
}

const Footer: React.FC<FooterProps> = ({themeColor}) => {
  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
  }, [themeColor]);

  return (
    <footer className={styles.footer} style={{color:textColor}}>
      <div className={styles.footerContent}>
        <p>Made with ❤️ by <a href="https://github.com/PPilot2/portfolio-website" className={styles.footerLink} target="__blank">Prahalad Anand</a></p>
      </div>
    </footer>
  );
}

export default Footer;