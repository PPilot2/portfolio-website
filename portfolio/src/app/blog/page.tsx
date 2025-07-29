"use client";
import styles from "../page.module.css";
import Nav from "../components/blognav";
import Footer from "../components/footer";
import Header from "../components/blogheader";
import Carousel from "../components/blogcarousel";
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
    <div style={{ backgroundColor: backgroundColor, overflowY: "hidden", height: "100vh" }}>
      <div className={styles.container}>
        <Nav themeColor={theme} onThemeClick={changeTheme} />
        <Header  themeColor={theme}/>
        <Carousel themeColor={theme} blogs={[
    { title: "How I Built My Portfolio", excerpt: "Learn the steps I took...", image: "portfolio", dateCreated: new Date("7/29/25") },
    { title: "JSON Visualizer Walkthrough", excerpt: "A breakdown of the app...", image: "json", dateCreated: new Date("7/30/25") },
    { title: "Collaborative Code Editor", excerpt: "A web-based, multi-file code editor....", image: "codeEditor", dateCreated: new Date("7/31/25") },
  ]}/>
        <Footer themeColor={theme} />
      </div>
    </div>
  );
}
