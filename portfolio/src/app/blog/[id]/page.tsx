// app/blog/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import Nav from "@/app/components/blognav";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  dateCreated: Date;
  tags: string[];
}

export default function BlogPostPage() {
  const params = useParams();
  const postId = Number(params.id);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [textColor, setTextColor] = useState("#000");

  // const [backgroundColor, setBackgroundColor] = useState<string>("#e2e8f0");
  // const [cardColor, setCardColor] = useState<string>("#f1f1f1");

  useEffect(() => {
    // Mock data - replace with actual data fetching
    const blogPosts: BlogPost[] = [
      {
        id: 1,
        title: "How I Built My Portfolio",
        content: "Full content about building the portfolio...",
        excerpt: "Learn the steps I took to build my portfolio website...",
        image: "portfolio",
        dateCreated: new Date("2025-07-29"),
        tags: ["Next.js", "TypeScript"],
      },
      {
        id: 2,
        title: "JSON Visualizer Walkthrough",
        content: "Full content about JSON visualizer...",
        excerpt: "A breakdown of the app that visualizes JSON...",
        image: "json",
        dateCreated: new Date("2025-07-30"),
        tags: ["GoJS", "Data Visualization"],
      },
      {
        id: 3,
        title: "Collaborative Code Editor",
        content: "Full content about code editor...",
        excerpt: "A web-based, multi-file code editor...",
        image: "codeEditor",
        dateCreated: new Date("2025-07-31"),
        tags: ["Monaco", "WebSockets"],
      },
    ];

    const foundPost = blogPosts.find((post) => post.id === postId);
    setPost(foundPost || null);
  }, [postId]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    setTextColor(initialTheme === "dark" ? "#F2F4F8" : "#000");
  }, []);

  if (!post) {
    return <div className={styles.container}>Loading...</div>;
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // setBackgroundColor(newTheme === "dark" ? "#22242F" : "#e2e8f0");
    // setCardColor(newTheme === "dark" ? "#2A2D3D" : "#f1f1f1");
    setTextColor(newTheme === "dark" ? "#F2F4F8" : "#000");
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#22242F" : "#e2e8f0",
        minHeight: "100vh",
      }}
    >
      <div className={styles.container}>
        <Nav themeColor={theme} onThemeClick={changeTheme} />
      </div>
      <div className={styles.container} style={{ color: textColor }}>
        <article className={styles.blogPost}>
          <h1>{post.title}</h1>
          <div className={styles.postMeta}>
            <span>{formatDate(post.dateCreated)}</span>
            <div className={styles.tags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.postContent}>
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
