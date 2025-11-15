import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "motion/react";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import AboutSec from "./components/AboutSec";
import HtmlCss from "./components/My Projects/HtmlCss";
import Js from "./components/My Projects/Js";

// import MyProjects from "./components/MyProjects";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import NavBarProjects from "./components/My Projects/NavBarProjects";
import React from "./components/My Projects/React";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div>
      <Loader className="loader" />
      {/*Effects Background */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute z-10 w-1 h-1 rounded-full bg-primary animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* End Effects Background */}
      <div className="z-50 website">
        <Header className="z-50 website" />

        <HeroSec className="z-50 website" />
        <AboutSec />

        <Routes>
          <Route path="/" element={<NavBarProjects className="z-50 website" />}>
            <Route path="/" element={<HtmlCss className="z-50 website" />} />
            <Route path="js" element={<Js className="z-50 website" />} />
            <Route path="react" element={<React className="z-50 website" />} />
          </Route>
        </Routes>

        <Contact className="z-50 website" />
        <Footer className="z-50 website" />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
