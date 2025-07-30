import styles from "../page.module.css";
import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";

interface ProjectProps {
  themeColor: string,
}

const Projects: React.FC<ProjectProps> = ({themeColor}) => {
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      image: "/portfolio-pic.png",
      description: "A portfolio website built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "CSS"],
      sourceUrl: "https://github.com/PPilot2/portfolio-website"
    },
    {
      id: 2,
      title: "JSON, CSV, and XML Data Generation",
      image: "/json-pic.png",
      description: "Visualizes JSON, XML, and CSV data into beautiful flowcharts, trees, and data tables using GoJS.",
      tags: ["GoJS", "Flask", "Tensorflow"],
      sourceUrl: "https://github.com/PPilot2/JSON-Visualizer"
    },
    {
      id: 3,
      title: "Collaborative Code Editor",
      image: "/codeEditor-pic.png",
      description: "A web-based, multi-file code editor with live code execution, supporting multiple programming languages.",
      tags: ["Monaco Editor", "Piston", "Typescript"],
      sourceUrl: "https://github.com/PPilot2/collaborative-code-editor"
    },
    {
      id: 4,
      title: "K-shot-GAN-synthetic-data",
      image: "/kshot.png",
      description: "Improving the generation of synthetic data in LLMs using k-shot prompting and a GAN.",
      tags: ["Tensorflow", "PyTorch", "Pandas"],
      sourceUrl: "https://github.com/PPilot2/k_shot-GAN-synthetic-data"
    },
    {
      id: 5,
      title: "Enhancing penicillium detection in citrus sinensis",
      image: "/penicillium-pic.png",
      description: "Improving the detection of penicillium in citrus sinensis with a CNN.",
      tags: ["Tensorflow", "Pandas", "Python"],
      sourceUrl: "https://github.com/PPilot2/Penicillium-detection-in-citrus-sinensis"
    },
    {
      id: 6,
      title: "Dev Extension",
      image: "/dev-extension.png",
      description: "A Chrome extension which links to Github accounts in order to display prs and keep up with the latest trends.",
      tags: ["HTML", "CSS", "JavaScript"],
      sourceUrl: "https://github.com/PPilot2/dev-extension"
    },
  ];
  const [textColor, setTextColor] = useState<string>("#000");
  const [hrColor, setHrColor] = useState<string>("#595d7a");
  const [backgroundColor, setBackgroundColor] = useState<string>("#f1f1f1");
  const [subHeadingColor, setsubHeadingColor] = useState<string>("#1a202c");
  const [tagColor, setTagColor] = useState<string>("#2d3748");
  const [linkColor, setLinkColor] = useState<string[]>(["#9A94BC","#8674eb"]);

  useEffect(() => {
    setTextColor(themeColor === "dark" ? "#F2F4F8" : "#000");
    setHrColor(themeColor === "dark" ? "#B8BACC" : "#595d7a");
    setBackgroundColor(themeColor === "dark" ? "#898EA9" : "#f1f1f1");
    setTagColor(themeColor === "dark" ? "#000" : "#000");
    setsubHeadingColor(themeColor === "dark" ? "#f1f1f1" : "#000");
    setLinkColor(themeColor === "dark" ? ["#E0DBFA", "#bab6cdff"] : ["#9A94BC", "#8674eb"]);
  }, [themeColor]);
  return (
    <div className={styles.projectsContainer} style={{color: textColor}}>
      <div id="projects" className={styles.projectsHeader}>
        <h1>Projects</h1>
        <hr style={{borderColor: hrColor}}/>
      </div>
      
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <Link
            key={project.id} 
            id={`project-${project.id}`} 
            href={`/blog/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.project} style={{backgroundColor: backgroundColor}}>
              <div className={styles.projectImageContainer}>
                <Image 
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent} title={project.title}>
                <h2 style={{color: textColor}}>{project.title}</h2>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag} style={{color: tagColor}}>{tag}</span>
                  ))}
                </div>
                <p style={{color: subHeadingColor}}>{project.description}</p>
                <div className={styles.sourceLink} id="customTag">
                  View Project
                  <style jsx>{`
                    #customTag {
                      color: ${linkColor[0]};
                    }
                    #customTag:hover {
                      color: ${linkColor[1]};
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;