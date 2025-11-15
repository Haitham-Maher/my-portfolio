import React, { useState } from "react";
import { motion } from "motion/react";
import { FiFacebook, FiLinkedin, FiGithub, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggelMenue = () => setIsOpen(!isOpen);

  // تعريف الأقسام مع الـ IDs المقابلة
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const icons = [
    { icon: <FiFacebook />, link: "https://www.facebook.com/share/1Cmgw3aCJg/" },
    { icon: <FaWhatsapp />, link: "https://wa.me/970592495102" },
    { icon: <FiGithub />, link: "https://github.com/Haitham-Maher" },
  ];

  // دالة التنقل السلس
  const handleNavClick = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // إذا كانت الشاشة صغيرة (جوال)
      if (window.innerWidth < 1024) {
        setIsOpen(false); // أغلق القائمة
        // أضف تأخير بسيط بعد الإغلاق
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 400); // فقط للجوال
      } else {
        // في الكمبيوتر: انتقل فورًا بدون تأخير
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="fixed z-50 w-full pt-3 text-text_light bg-bg_dark ">
      <div className="flex items-center justify-between w-full px-6 py-1 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 4.8,
          }}
          className="flex items-center gap-3"
        >
          <p className="flex items-center justify-center w-10 h-10 text-lg font-bold rounded-xl bg-gradient-to-r from-secondary to-white text-bg_dark">
            HM
          </p>
          <p className="text-xl font-bold text-transparent bg-gradient-to-r from-secondary to-white bg-clip-text">
            Haitham Maher
          </p>
        </motion.div>

        {/* Navbar Desktop */}
        <nav className="items-center justify-center hidden space-x-8 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 4.8 + index * 0.1,
              }}
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className="relative font-medium transition-colors duration-300 cursor-pointer hover:text-secondary focus:text-secondary group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary duration-300 group-hover:w-full group-focus:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Icons + Button */}
        <div className="items-center hidden gap-4 lg:flex">
          {icons.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 4.8 + index * 0.1 }}
              className="p-[7px] text-xl before:transition-all border-secondary border cursor-pointer rounded-[50%] hover: before:rounded-[50%]
    relative before:content-[''] before:absolute before:scale-0 before:bg-gradient-to-r from-secondary to-primary before:w-[100%] before:h-[100%] hover:before:scale-100 overflow-hidden flex justify-center items-center before:-z-10 text-text_light hover:text-bg_dark"
            >
              {item.icon}
            </motion.a>
          ))}

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.8, duration: 0.7 }}
            className="px-4 py-2 font-bold rounded-lg text-bg_dark btnPrimary"
            onClick={(e) => handleNavClick("contact", e)}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <motion.p
            whileTap={{ scale: 0.8 }}
            className="text-3xl cursor-pointer"
          >
            {isOpen ? (
              <FiX onClick={toggelMenue} />
            ) : (
              <FiMenu onClick={toggelMenue} />
            )}
          </motion.p>

          {/* Mobile Menu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className="absolute left-0 flex flex-col w-full px-6 py-4 mt-1 overflow-hidden bg-bg_dark"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                onClick={(e) => handleNavClick(item.id, e)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -50 }}
                transition={{ delay: index * 0.1 }}
                href={`#${item.id}`}
                className="relative inline-block mt-4 text-lg transition-colors cursor-pointer hover:text-secondary group w-fit"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <div className="flex gap-5 py-4 mt-4 border-t border-gray-700">
              {icons.map((item, index) => (
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-2xl cursor-pointer hover:text-secondary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={(e) => handleNavClick("contact", e)}
              className="w-full px-4 py-2 mt-3 font-bold rounded-lg text-bg_dark bg-gradient-to-r from-secondary to-primary"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
