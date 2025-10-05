"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

export default function Home() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(true);
  const projects = [
    { name: "Pathfinding Visualizer", id: 1 },
    { name: "Portfolio Website", id: 2 },
    { name: "JSON, CSV, and XML Data Generation", id: 3 },
    { name: "Collaborative Code Editor", id: 4},
    { name: "K-Shot GAN Synthetic Data", id: 5 },
    { name: "Penicillium Detection", id: 6 },
  ];
  const [selectedProject, setSelectedProject] = useState(projects[0]["name"]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log("Selected Project:", selectedProject);
      setIsHidden(false);
      const selected = projects.find(p => p.name === selectedProject);
      if (selected) {
        const element = document.getElementById(`project-${selected.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const currentIndex = projects.findIndex(p => p.name === selectedProject);
      const newIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[newIndex].name);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const currentIndex = projects.findIndex(p => p.name === selectedProject);
      const newIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[newIndex].name);
    }
  };

  const selectedProjectStyle = {
    display: isHidden ? "none" : "block",
  };

  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxHeader}>
        <div className={`${styles.trafficLight} ${styles.red}`}></div>
        <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
        <div className={`${styles.trafficLight} ${styles.green}`}></div>
      </div>
      <div className={styles.boxContent}>
        <div>
          <code>&gt; print(Prahalad[&quot;location&quot;])</code>
          <p>&quot;Austin, Texas&quot;</p>
        </div>

        <div>
          <code>&gt; print(Prahalad[&quot;skills&quot;])</code>
          <p>[&quot;Python&quot;, &quot;JavaScript&quot;, &quot;Java&quot;, &quot;Rust&quot;, &quot;SQL&quot;, &quot;Git&quot;, &quot;Tensorflow&quot;, &quot;PyTorch&quot;, &quot;Pandas&quot;]</p>
        </div>

        <div>
          <code>&gt; print(Prahalad[&quot;interests&quot;])</code>
          <p>[&quot;basketball&quot;, &quot;cooking&quot;, &quot;music&quot;]</p>
        </div>

        <div>
          <code>&gt; print(Prahalad[&quot;projects&quot;])</code>
          <p>[&quot;Pathfinding Visualizer&quot;, &quot;Collaborative Code Editor&quot;, &quot;Portfolio Website&quot;, &quot;JSON Visualizer&quot;, &quot;K-shot GAN Synthetic data&quot;, &quot;Penicillium Detection&quot;]</p>
        </div>

        <div 
          className={styles.inputWrapper} 
          onClick={() => inputRef.current?.focus()}
          tabIndex={-1}
        >
          <div 
            className={styles.inputContainer}
            ref={inputRef}
            tabIndex={0}
            onKeyDown={handleKeyPress}
          >
            <code>&gt; Choose a project(↑ ↓):</code>
            <span className={styles.displayedValue}>
              {selectedProject}
              <span className={styles.blinking}></span>
            </span>
          </div>
            
          <p style={selectedProjectStyle}>{selectedProject}</p>
        </div>
      </div>
    </div>
  );
}