import { useEffect, useState, useCallback } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  title: string;
  excerpt: string;
  image: string;
  dateCreated: Date;
}

interface CarouselProps {
  themeColor: string;
  blogs: Blog[];
}

const Carousel: React.FC<CarouselProps> = ({ themeColor, blogs }) => {
  const [textColor, setTextColor] = useState("#fff");
  const [index, setIndex] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState(7000);

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#fff");
  }, [themeColor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogs.length);
    }, currentTimeout);
    return () => clearInterval(interval);
  }, [blogs.length, currentTimeout]);

  const handleClick = useCallback((i: number) => {
    setIndex(i);
    setCurrentTimeout(7000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        // Move to next item
        handleClick((index + 1) % blogs.length);
      } else if (e.key === "ArrowLeft") {
        // Move to previous item (with wrap-around)
        handleClick((index - 1 + blogs.length) % blogs.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, blogs.length, handleClick]);
  //   const projectsData = [
  //     {
  //       id: 1,
  //       title: "Portfolio Website",
  //       image: "/portfolio-pic.png",
  //       description: "A portfolio website built with Next.js and TypeScript.",
  //       tags: ["Next.js", "TypeScript", "CSS"],
  //       sourceUrl: "https://github.com/PPilot2/portfolio-website",
  //     },
  //     {
  //       id: 2,
  //       title: "JSON, CSV, and XML Data Generation",
  //       image: "/json-pic.png",
  //       description:
  //         "Visualizes JSON, XML, and CSV data into beautiful flowcharts, trees, and data tables using GoJS.",
  //       tags: ["GoJS", "Flask", "Tensorflow"],
  //       sourceUrl: "https://github.com/PPilot2/JSON-Visualizer",
  //     },
  //     {
  //       id: 3,
  //       title: "Collaborative Code Editor",
  //       image: "/codeEditor-pic.png",
  //       description:
  //         "A web-based, multi-file code editor with live code execution, supporting multiple programming languages.",
  //       tags: ["Monaco Editor", "Piston", "Typescript"],
  //       sourceUrl: "https://github.com/PPilot2/collaborative-code-editor",
  //     },
  //   ];

  console.log(blogs[index].dateCreated);
  return (
    <div
      className={`${styles.carouselContainer} ${
        themeColor === "dark" ? styles.dark : styles.light
      }`}
    >
      {/* Background Image */}
      <div className={styles.carouselBackground}>
        <Image
          src={`/${blogs[index].image}-blog.png`}
          alt={blogs[index].title}
          fill
          className={styles.carouselImage}
          priority
        />
        <div className={styles.carouselOverlay} />
      </div>

      {/* Content Overlay */}
      <div className={styles.carouselContent}>
        {/* Header with traffic lights */}

        {/* Text Content */}
        <div className={styles.textContent} style={{ color: textColor }}>
          <div className={styles.carouselBoxHeader}>
            <div className={`${styles.trafficLight} ${styles.red}`}></div>
            <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
            <div className={`${styles.trafficLight} ${styles.green}`}></div>
          </div>
          <h2 className={styles.blogTitle}>
            <Link href="#" className={styles.blogLink}>
              {blogs[index].title}
              <p className={styles.blogExcerpt}>
                {blogs[index].dateCreated.toLocaleDateString()}
              </p>
              <p className={styles.blogExcerpt}>{blogs[index].excerpt}</p>
            </Link>
          </h2>
        </div>

        {/* Navigation Thumbnails */}
        <div className={styles.thumbnailContainer}>
          {blogs.map((blog, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`${styles.thumbnail} ${
                i === index ? styles.activeThumbnail : ""
              }`}
              title={blog.title}
            >
              <Image
                src={`/${blog.image}.png`}
                alt={blog.title}
                fill
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
