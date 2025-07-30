import { useEffect, useState, useCallback } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
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
        handleClick((index + 1) % blogs.length);
      } else if (e.key === "ArrowLeft") {
        handleClick((index - 1 + blogs.length) % blogs.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, blogs.length, handleClick]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

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
          sizes="100vw"
          className={styles.carouselImage}
          style={{ objectFit: "cover" }}
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
          <Link href={`/blog/${blogs[index].id}`} className={styles.blogLink}>
            <h2 className={styles.blogTitle}>{blogs[index].title}</h2>
            <p className={styles.blogDate}>
              {formatDate(blogs[index].dateCreated)}
            </p>
            <p className={styles.blogExcerpt}>{blogs[index].excerpt}</p>
          </Link>
        </div>

        {/* Navigation Thumbnails */}
        <div className={styles.thumbnailContainer}>
          {blogs.map((blog, i) => (
            <Link
              key={i}
              href={`/blog/${blog.id}`}
              className={styles.thumbnailLink}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(i);
                }}
                className={`${styles.thumbnail} ${
                  i === index ? styles.activeThumbnail : ""
                }`}
                title={blog.title}
              >
                <Image
                  src={`/${blog.image}.png`}
                  alt={blog.title}
                  fill
                  sizes="50px"
                  className={styles.thumbnailImage}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
