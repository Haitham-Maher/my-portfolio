import React from "react";
import { motion } from "motion/react";

function Certificate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-20 w-11/12 max-w-3xl mx-auto md:w-9/12 mt-28"
    >
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center w-full mx-auto mb-12 overflow-hidden text-3xl font-bold text-center text-transparent md:text-4xl lg:text-5xl bg-gradient-to-r from-secondary to-text_light bg-clip-text"
      >
        Certifications & Achievements
      </motion.h3>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 70 }}
        className="p-6 border shadow-2xl bg-gradient-to-br from-bg_dark to-gray-900 border-secondary/30 rounded-xl shadow-secondary/20 lg:h-[100vh] xl:h-[100vh]"
      >
        <div className="mb-4 text-center">
          <h4 className="text-xl font-bold text-text_muted">
            Front-end Web Development Diploma
          </h4>
          <p className="mt-2 text-text_muted">
            React JS • Score: 99.22% • 6 Months
          </p>
        </div>
        {/* صورة الشهادة */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative cursor-pointer group"
        >
          <img
            src="/images/لقطة الشاشة 2025-10-27 125448.jpg"
            alt="Front-end Development Diploma Certificate"
            className="w-[100%] md:h-[55vh] h-[24vh] object-cover border-2 rounded-lg shadow-lg border-secondary/50"
          />

          {/* Overlay effect */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-lg bg-secondary/0 group-hover:bg-secondary/10">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 text-sm text-white rounded-lg bg-black/80"
            >
              View Certificate
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-4 text-center text-text_muted">
          <p className="text-xl font-semibold md:font-bold md:text-2xl text-secondary">
            Haitham Maher Suliman
          </p>
          <a
            href="https://www.seflearn.com/"
            target="_blank"
            className="underline cursor-pointer"
          >
            SEF Academy
          </a>
        </div>
        {/* Download Button */}
        <motion.div className="flex justify-center mt-6">
          <motion.a
            href="/images/certificate.jpg"
            download="Haitham-Maher-Frontend-Diploma-Certificate.jpg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 font-bold transition-all duration-300 rounded-lg text-bg_dark bg-gradient-to-r from-secondary to-primary hover:shadow-lg hover:shadow-secondary/30 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Certificate
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Certificate;
