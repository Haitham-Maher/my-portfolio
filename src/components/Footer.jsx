import React from "react";
import { motion } from "motion/react";
import { FiFacebook, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer({ className = "" }) {
  // دالة التنقل السلس للأقسام
  const handleNavClick = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const icons = [
    {
      icon: <FiFacebook />,
      link: "https://www.facebook.com/share/1Cmgw3aCJg/",
    },
    { icon: <FaWhatsapp />, link: "https://wa.me/970592495102" },
    { icon: <FiGithub />, link: "https://github.com/Haitham-Maher" },
  ];

  // تعريف الأقسام
  const sections = {
    explore: [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Projects", id: "projects" },
      { name: "Contact", id: "contact" },
    ],
    services: [
      { name: "UI / Frontend", id: "projects" },
      { name: "Animations", id: "about" },
      { name: "Responsive Design", id: "projects" },
      { name: "Consultations", id: "contact" },
    ],
    resources: [
      { name: "Blog", id: "home" },
      { name: "Resume", id: "about" },
      { name: "Case Studies", id: "projects" },
      { name: "Privacy", id: "home" },
    ],
  };

  return (
    <footer
      className={`relative z-40 w-full border-t border-[#F6C65B]/20 bg-black text-white ${className}`}
    >
      <div className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        {/* الأقسام الرئيسية */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center sm:text-left"
          >
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <div className="flex items-center justify-center text-lg font-bold w-11 h-11 rounded-xl bg-gradient-to-r from-secondary to-white text-bg_dark">
                HM
              </div>
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-secondary to-white bg-clip-text">
                Haitham Maher
              </h3>
            </div>

            <p className="max-w-sm mx-auto text-sm text-gray-300 sm:mx-0">
              Frontend developer focused on clean interfaces, smooth animations
              and thoughtful UX.
            </p>

            <div className="flex items-center justify-center gap-3 mt-2 sm:justify-start">
              {icons.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="p-2 text-lg rounded-md hover:text-black hover:bg-[#F6C65B]/80 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#F6C65B]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {sections.explore.map((link, j) => (
                <li key={j}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className="hover:text-[#F6C65B] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#F6C65B]">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {sections.services.map((link, j) => (
                <li key={j}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className="hover:text-[#F6C65B] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="mb-3 text-sm font-semibold text-[#F6C65B]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {sections.resources.map((link, j) => (
                <li key={j}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className="hover:text-[#F6C65B] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* السطر السفلي */}
        <div className="flex flex-col items-center justify-between gap-4 mt-10 border-t border-[#F6C65B]/10 pt-6 md:flex-row">
          <p className="text-sm text-center text-gray-400 md:text-left">
            © {new Date().getFullYear()} Haitham Maher. All rights reserved.
          </p>
          <p className="text-sm text-center text-gray-400 md:text-right">
            Designed by{" "}
            <span className="font-semibold text-[#F6C65B]">Haitham Maher</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-[#F6C65B] to-[#E86B1D] opacity-40" />
    </footer>
  );
}
