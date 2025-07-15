"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarProps {
  onThemeClick: () => void;
  themeColor: string;
}

const Nav: React.FC<NavbarProps> = ({themeColor, onThemeClick}) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  let theme = "light";
  const checkThemeChange = async () => {
    if (themeColor != undefined) {
      theme = themeColor;
    }
  };
  checkThemeChange();
  const themeURL = `/${theme}.png`;
  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    console.log(themeColor);
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
  }, [themeColor]);

  return (
    <div className={styles.navContainer} style={{color: textColor}}>
      <div className={styles.navElements}>
        <section className={styles.navLeft}>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              handleScroll('projects');
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleScroll('contact');
            }}
          >
            Contact
          </a>
          
        </section>
        <button className={styles.navRight} title={theme} onClick={onThemeClick}>
          <Image src={themeURL} alt="Theme" width={30} height={30}></Image>
        </button>
      </div>
    </div>
  );
}

export default Nav;