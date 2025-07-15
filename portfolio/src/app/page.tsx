"use client";
import styles from "./page.module.css";
import Header from "./components/header";
import Nav from "./components/nav";
import TerminalBox from "./components/terminalBox";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [backgroundColor, setBackgroundColor] = useState<string>("#e2e8f0");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      setBackgroundColor("#22242F");
    } else if (savedTheme === "light") {
      setTheme("light");
      setBackgroundColor("#e2e8f0");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      setBackgroundColor(prefersDark ? "#22242F" : "#e2e8f0");
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setBackgroundColor(newTheme === "dark" ? "#22242F" : "#e2e8f0");
    localStorage.setItem("theme", newTheme);
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
