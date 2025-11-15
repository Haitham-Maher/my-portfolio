import React from "react";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
function HeroSec() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse items-center justify-between min-h-screen px-8 overflow-hidden bg-gradient-to-t from-black to-bg_dark md:flex-row lg:px-16 text-text_muted"
    >
      {/* Left Content */}
      <div className="z-10 flex flex-col text-center -translate-y-[100px] md:-translate-y-0 text-text_muted md:text-left md:mt-40 md:w-8/12 lg:w-1/2">
        {/* Main Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: 4 }}
          className="text-4xl font-bold text-transparent bg-gradient-to-r from-secondary to-text_light bg-clip-text md:text-5xl"
        >
          Frontend Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.6 }}
          className="mt-2 text-2xl font-semibold md:text-3xl"
        >
          Hi! I'm Haitham Maher{" "}
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.6 }}
        >
          <ReactTyped
            className="mt-2 text-2xl font-semibold md:text-3xl text-text_muted"
            strings={["Software Developer", "Front End Developer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          ></ReactTyped>
        </motion.div>

        {/* Buttons */}
      </div>

      {/* Spline Robot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4.3, duration: 0.9 }}
        className="relative flex items-center justify-center w-full h-[65vh]  md:w-8/12"
      >
        {/* Glow Effect Behind Robot */}
        <div className="inset-0 w-[90%] h-[90%] bg-secondary/20 blur-[120px] rounded-full absolute z-10"></div>

        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpagemccopy-HAOdwwefLGkMj83ThpXAfkDC/"
          className="z-10 w-full h-full lg:scale-[1.2] scale-[1.1] md:scale-100"
          allowFullScreen
          // style={{ transform: "scale(1.2)" }}
        ></iframe>
      </motion.div>
    </section>
  );
}
export default HeroSec;
