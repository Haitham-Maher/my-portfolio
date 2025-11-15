import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const Js = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg_dark">
      <motion.div className="container flex flex-wrap justify-between mx-auto gap-x-2">

        <ProjectCard
          title="E-Commerce Website"
          description="A fully functional online store with product listings, cart, and checkout features."
          image="/images/لقطة الشاشة 2025-11-02 121618.jpg"
          liveLink="https://haitham-maher.github.io/E-commerce/"
          githubLink="https://github.com/Haitham-Maher/E-commerce.git"
        />

        <ProjectCard
          title="Book For Me"
          description="A clean and responsive website for browsing and purchasing books online."
          image="/images/لقطة الشاشة 2025-11-02 122526.jpg"
          liveLink="https://haitham-maher.github.io/Book-For-Me/"
          githubLink="https://github.com/Haitham-Maher/Book-For-Me.git"
        />

        <ProjectCard
          title="Portfolio"
          description="A personal portfolio website showcasing projects, skills, and professional experience."
          image="/images/لقطة الشاشة 2025-11-02 122256.jpg"
          liveLink="https://haitham-maher.github.io/portfolio-1/"
          githubLink="https://github.com/Haitham-Maher/portfolio-1.git"
        />

        <ProjectCard
          title="Coffe Website"
          description="A stylish coffee shop website presenting products and offers with a cozy design."
          image="/images/لقطة الشاشة 2025-11-02 121932.jpg"
          liveLink="https://haitham-maher.github.io/Coffe-JS/"
          githubLink="https://github.com/Haitham-Maher/Coffe-JS.git"
        />

        <ProjectCard
          title="Cake Website"
          description="A delightful bakery website highlighting cakes and desserts with smooth visuals."
          image="/images/لقطة الشاشة 2025-11s-01 152511.jpg"
          liveLink="https://haitham-maher.github.io/Website-Cake/"
          githubLink="https://github.com/Haitham-Maher/Website-Cake.git"
        />

        <ProjectCard
          title="XO Game"
          description="A simple and interactive Tic-Tac-Toe game built with JavaScript for fun play."
          image="/images/لقطة الشاشة 2025-11-02 122439.jpg"
          liveLink="https://haitham-maher.github.io/XO-Game/"
          githubLink="https://github.com/Haitham-Maher/XO-Game.git"
        />

        <ProjectCard
          title="Smart Booking"
          description="A smart hotel booking interface designed for quick and easy room reservations."
          image="/images/لقطة الشاشة 2025-11-01 133311.jpg"
          liveLink="https://haitham-maher.github.io/smart-booking/"
          githubLink="https://github.com/Haitham-Maher/smart-booking.git"
        />

      </motion.div>
    </section>
  );
};

export default Js;
