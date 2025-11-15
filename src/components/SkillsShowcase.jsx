import { motion } from "motion/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMaterialdesign,
  SiFramer,
  SiGreensock,
  SiSass,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "React", icon: SiReact },
  { name: "Material Design", icon: SiMaterialdesign },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Javascript", icon: SiJavascript },
  { name: "GSAP", icon: SiGreensock },
  { name: "Sass", icon: SiSass },
];

const SkillsShowcase = () => {
  // مضاعفة المهارات لعمل loop سلس
  const duplicatedSkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-20 w-full py-5 mx-auto mt-20 overflow-hidden md:py-10"
    >
      {/* تدرجات للتلاشي على الجوانب */}
      <div className="absolute top-0 bottom-0 left-0 z-20 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 z-20 w-32 bg-gradient-to-l from-background to-transparent" />

      {/* توهج الخلفية */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-96 h-96 bg-primary rounded-full blur-[120px] animate-glow" />
      </div>

      {/* الحاوية المتحركة */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="relative flex-shrink-0 h-40 text-center cursor-pointer w-36 md:h-40 md:w-64 group "
            >
              {/* خلفية البطاقة مع التدرج */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-card to-muted border border-border transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(232,107,29,0.3)] " />

              {/* تأثير التوهج عند hover */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-100 blur-xl" />

              {/* المحتوى */}
              <div className="relative flex flex-col items-center justify-center h-full gap-4 p-6">
                <div className="flex items-center justify-center w-12 h-12 transition-shadow duration-300 bg-red-500 shadow-lg md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:shadow-primary/50 ">
                  <skill.icon className="h-14 w-14" />
                </div>
                <h3 className="font-bold text-text_muted transition-colors duration-300 text-[15px] md:text-xl text-foreground group-hover:text-primary">
                  {skill.name}
                </h3>
              </div>

              {/* زوايا مزخرفة */}
              <div className="absolute w-3 h-3 transition-opacity duration-300 border-t-2 border-r-2 rounded-tr-lg opacity-0 top-2 right-2 border-primary/50 group-hover:opacity-100" />
              <div className="absolute w-3 h-3 transition-opacity duration-300 border-b-2 border-l-2 rounded-bl-lg opacity-0 bottom-2 left-2 border-secondary/50 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;
