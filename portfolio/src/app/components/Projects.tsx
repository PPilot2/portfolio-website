import styles from "../page.module.css";
import Image from 'next/image';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Collaborative Code Editor",
      image: "/codeEditor.png",
      description: "A web-based, multi-file code editor with live code execution, supporting multiple programming languages.",
      tags: ["Next.js", "TypeScript", "CSS"],
      sourceUrl: "https://github.com/PPilot2/collaborative-code-editor"
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "/portfolio-pic.png",
      description: "A portfolio website built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "CSS"],
      sourceUrl: "https://github.com/PPilot2/portfolio-website"
    },
    {
      id: 3,
      title: "JSON, CSV, and XML Data Generation",
      image: "/json-vis.png",
      description: "Visualizes JSON, XML, and CSV data into beautiful flowcharts, trees, and data tables using GoJS.",
      tags: ["GoJS", "Flask", "Tensorflow"],
      sourceUrl: "https://github.com/PPilot2/JSON-Visualizer"
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
      title: "Penicillium-detection-in-citrus-sinensis",
      image: "/penicillium.png",
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

  return (
    <div className={styles.projectsContainer}>
      <div id="projects" className={styles.projectsHeader}>
        <h1>Projects</h1>
        <hr />
      </div>
      
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <a 
            key={project.id} 
            id={`project-${project.id}`} 
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.project}>
              <div className={styles.projectImageContainer}>
                <Image 
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h2>{project.title}</h2>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className={styles.sourceLink}>
                  View Project
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}