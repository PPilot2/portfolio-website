"use client";
import styles from "../page.module.css";
// import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  themeColor: string,
}

const Header: React.FC<HeaderProps> = ({themeColor}) => {
//   function copyToClipboard() {
//     navigator.clipboard.writeText("prahaladanand6@gmail.com");
//     alert("Email copied to clipboard!");
//   }
  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
  }, [themeColor]);
  return (
    <div className={styles.blogHeaderContainer} style={{color: textColor}}>
      <h1>&gt; Blog</h1>
    </div>
  );
}

export default Header;