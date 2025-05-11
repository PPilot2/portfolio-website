import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fira_Code } from 'next/font/google';
import { Inter } from "next/font/google";

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin'] 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prahalad Anand",
  description: "Prahalad Anand's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Prahalad Anand's Portfolio" />
        <meta name="keywords" content="Web Developer, AI, AI Developer, Machine Learning, Machine Learning Developer, Design, Designer, Graphic Design" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
