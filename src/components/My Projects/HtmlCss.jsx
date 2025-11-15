import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const HtmlCss = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg_dark">
      <motion.div className="container flex flex-wrap justify-between mx-auto gap-x-2">
        <ProjectCard
          title="Coffe Shope"
          description="A sleek coffee shop website featuring modern design, cart functionality, and a smooth shopping experience."
          image="/images/لقطة الشاشة 2025-11-05 130407.jpg"
          liveLink="https://haitham-maher.github.io/coffe/"
          githubLink="https://github.com/Haitham-Maher/coffe.git"
        />

        <ProjectCard
          title="Quran Karem"
          description="An Islamic website showcasing Tafsir books and scholar biographies in a simple, organized layout."
          image="/images/لقطة الشاشة 2025-11-05 130137.jpg"
          liveLink="https://haitham-maher.github.io/project-Quran/"
          githubLink="https://github.com/Haitham-Maher/project-Quran.git"
        />

        <ProjectCard
          title="Bootstrap"
          description="A responsive front-end project built with Bootstrap, highlighting clean layouts and modern UI components."
          image="/images/boot.jpg"
          liveLink="https://haitham-maher.github.io/Bootstrap-Project/"
          githubLink="https://github.com/Haitham-Maher/Bootstrap-Project.git"
        />
      </motion.div>
    </section>
  );
};

export default HtmlCss;
