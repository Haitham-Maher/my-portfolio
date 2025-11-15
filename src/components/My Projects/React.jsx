import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const React = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg_dark">
      <motion.div className="container flex flex-wrap justify-between mx-auto gap-x-2">
        <ProjectCard
          title="To Do List"
          description="A simple and efficient task manager app to organize daily activities with ease."
          image="/images/مهامي.jpg"
          liveLink="https://haitham-maher.github.io/To-Do-List/"
          githubLink="https://github.com/Haitham-Maher/To-Do-List.git"
        />

        <ProjectCard
          title="Weather App"
          description="A responsive weather app providing real-time forecasts with a clean user interface."
          image="/images/لقطة الشاشة 2025-11-06 161214.jpg"
          liveLink="https://haitham-maher.github.io/Weather-App/"
          githubLink="https://github.com/Haitham-Maher/Weather-App.git"
        />
      </motion.div>
    </section>
  );
};

export default React;
