// ! أحمر
// ? أزرق
// * أصفر
// TODO برتقالي

import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";

import SkillsShowcase from "./SkillsShowcase";
import Certificate from "./Certificate";

function AboutSec() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen pt-24 lg:px-0 bg-bg_dark"
    >
      {/* //!=========== Title =========== */}
      <motion.div
        ref={titleRef}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center w-full mx-auto mb-12 overflow-hidden text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl ext-transparent bg-gradient-to-r from-secondary to-text_light bg-clip-text"
      >
        <span>About Me</span>
      </motion.div>
      {/* //!=========== End Title =========== */}

      {/*//Todo =========== Content Body =========== */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col-reverse items-center justify-between w-full gap-8 md:px-8 md:flex-row md:items-center md:justify-between lg:px-16 lg:gap-20"
      >
        {/*//* =========== Text =========== */}
        <motion.div className="max-w-full md:max-w-xl w-[70%] md:w-[50%] text-text_muted leading-loose space-y-4">
          <h3 className="mb-2 text-xl font-bold text-text_light">Who Am I?</h3>

          <p className="text-lg text-text_light/90">
            I’m a passionate frontend developer who loves transforming ideas
            into beautiful and functional digital experiences.
          </p>

          <ul className="mt-4 space-y-3">
            {[
              "Crafting modern, responsive & user-friendly UIs",
              "Bringing designs to life with smooth animations & interactions",
              "Writing clean, scalable & optimized code",
              "Always learning the newest tech & design trends",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <span className="font-bold text-secondary">✦</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="mt-4 text-lg text-text_light/80">
            My mission is to make the web a more elegant and enjoyable place ✨
          </p>
        </motion.div>
        {/*//* =========== End Text =========== */}

        {/*//!=========== Image =========== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ , duration: 0.8 }}
          className="w-[70%] shadow-lg lg:w-96 rounded-xl shadow-secondary/30 overflow-hidden md:w-[50%] z-40"
        >
          <motion.img
            src="/images/IMG_٢٠٢٤٠٩٢١_١٥٠١١٣.jpg"
            alt="Profile"
            className="h-[100%]"
          />
        </motion.div>
      </motion.div>

      {/*//Todo =========== Certificate ===========*/}
      <Certificate />
      {/*//Todo =========== End Certificate ===========*/}

      {/*//!=========== End Image =========== */}
      {/*//Todo =========== End Content Body =========== */}

      {/* //* =========== My Skills =========== */}

      <SkillsShowcase />

      {/* //* =========== End My Skills =========== */}
    </section>
  );
}

export default AboutSec;
