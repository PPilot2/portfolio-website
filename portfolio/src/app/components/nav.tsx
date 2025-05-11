"use client";
import styles from "../page.module.css";

export default function Nav() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navElements}>
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
        <a href="/blog">Blog</a>
      </div>
    </div>
  );
}