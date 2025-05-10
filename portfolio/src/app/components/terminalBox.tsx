"use client";
import styles from "../page.module.css";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Text copied to clipboard");
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
}

export default function Home() {
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
          <code>&gt; print(Prahalad[&quot;contactInfo&quot;])</code>
          <p>[&quot;<a onClick={() => copyToClipboard("prahaladanand6@gmail.com")}>prahaladanand6@gmail.com</a>&quot;, &quot;<a href="https://github.com/PPilot2" target="__blank">Github</a>&quot;, &quot;<a href="https://www.linkedin.com/in/prahalad-anand-524636297/" target="__blank">LinkedIn</a>&quot;]</p>
        </div>
        
        <div>
          <code>&gt; print(Prahalad[&quot;skills&quot;])</code>
          <p>[&quot;Python&quot;, &quot;JavaScript&quot;, &quot;Java&quot;, &quot;Rust&quot;, &quot;SQL&quot;, &quot;Git&quot;, &quot;Tensorflow&quot;, &quot;PyTorch&quot;, &quot;Pandas&quot;]</p>
        </div>
        
        <div>
          <code>&gt; print(Prahalad[&quot;interests&quot;])</code>
          <p>[&quot;basketball&quot;, &quot;cooking&quot;, &quot;madden&quot;]</p>
        </div>
        
        <div className={styles.inputContainer}>
          <code className={styles.blinking}>&gt; </code>
        </div>
      </div>
    </div>
  );
}
