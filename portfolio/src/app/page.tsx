"use client";
import styles from "./page.module.css";
import Header from "./components/header";
import Nav from "./components/nav";
import TerminalBox from "./components/terminalBox";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [backgroundColor, setBackgroundColor] = useState<string>("#e2e8f0");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      setBackgroundColor("#22242F");
    } else {
      setTheme("light");
      setBackgroundColor("#e2e8f0");
    }
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setBackgroundColor("#22242F");
    } else {
      setTheme("light");
      setBackgroundColor("#e2e8f0");
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div className={styles.container}>
        <Nav themeColor={theme} onThemeClick={changeTheme} />
        <Header themeColor={theme} />
        <TerminalBox />
        <Projects themeColor={theme} />
        <Footer themeColor={theme} />
      </div>
    </div>
  );
}
