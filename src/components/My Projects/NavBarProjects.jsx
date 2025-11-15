import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function NavBarProjects() {
  const [nav, setNav] = useState("htmlCss");

  function handleClick(value) {
    setNav(value);
  }

  return (
    <div id="projects" className="pt-20 bg-bg_dark">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="relative flex justify-center w-full p-2 mx-auto mb-12 overflow-hidden text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-secondary to-text_light bg-clip-text">
          My Projects
        </motion.h1>
        <div className="relative z-10 flex items-center justify-between w-10/12 gap-3 p-1 mx-auto mt-5 text-sm font-bold text-white border sm:w-7/12 xl:w-4/12 lg:w-5/12 md:w-6/12 rounded-xl border-text_light md:text-lg">
          <Link
            onClick={() => {
              handleClick("htmlCss");
            }}
            to={"/"}
            className={`p-3 md:px-5 cursor-pointer
          relative
           before:content-[''] before:rounded-xl before:-z-10 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r from-secondary to-primary before:w-0 before:h-full rounded-xl hover:before:w-full hover:text-bg_dark transition-all duration-300 before:duration-300
        
           ${
             nav == "htmlCss"
               ? "bg-gradient-to-r from-secondary to-primary text-bg_dark"
               : ""
           }
        `}
          >
            HTML/CSS
          </Link>
          <Link
            onClick={() => {
              handleClick("js");
            }}
            to={"/js"}
            className={`p-3 md:px-5 cursor-pointer
          relative
           before:content-[''] before:rounded-xl before:-z-10 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r from-secondary to-primary before:w-0 before:h-full rounded-xl hover:before:w-full hover:text-bg_dark transition-all duration-300 before:duration-300
        
        ${
          nav == "js"
            ? "bg-gradient-to-r from-secondary to-primary text-bg_dark"
            : ""
        }
        `}
          >
            JavaScript
          </Link>
          <Link
            onClick={() => {
              handleClick("react");
            }}
            to={"/react"}
            className={`p-3 md:px-5 cursor-pointer
            relative
          before:content-[''] before:rounded-xl before:-z-10 before:absolute before:left-0 before:top-0 before:bg-gradient-to-r from-secondary to-primary before:w-0 before:h-full rounded-xl hover:before:w-full hover:text-bg_dark transition-all duration-300 before:duration-300
            pr-1 sm:pr-0
          ${
            nav == "react"
              ? "bg-gradient-to-r from-secondary to-primary text-bg_dark"
              : ""
          }
          `}
          >
            ReactJS
          </Link>
        </div>
      </motion.div>
      <Outlet />
    </div>
  );
}

export default NavBarProjects;
