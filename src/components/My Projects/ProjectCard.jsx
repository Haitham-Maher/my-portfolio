import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  FiHeart,
  FiThumbsDown,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  liveLink,
  githubLink,
}) => {
  // مفتاح فريد لكل مشروع للتخزين
  const storageKey = `project-reaction-${title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  // جلب البيانات المحفوظة مسبقاً
  const getStoredReaction = () => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  };

  const [reaction, setReaction] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // تحميل البيانات من Local Storage عند التحميل
  useEffect(() => {
    const storedData = getStoredReaction();
    if (storedData) {
      setReaction(storedData.reaction);
      setLikeCount(storedData.likeCount || 0);
      setDislikeCount(storedData.dislikeCount || 0);
    }
  }, [title]);

  // حفظ البيانات في Local Storage
  const saveToLocalStorage = (newReaction, newLikeCount, newDislikeCount) => {
    if (typeof window === "undefined") return;

    try {
      const dataToStore = {
        reaction: newReaction,
        likeCount: newLikeCount,
        dislikeCount: newDislikeCount,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const handleLike = () => {
    let newReaction = reaction;
    let newLikeCount = likeCount;
    let newDislikeCount = dislikeCount;

    if (reaction === "like") {
      // إلغاء الإعجاب
      newReaction = null;
      newLikeCount = likeCount - 1;
    } else if (reaction === "dislike") {
      // التحول من عدم الإعجاب إلى الإعجاب
      newReaction = "like";
      newLikeCount = likeCount + 1;
      newDislikeCount = dislikeCount - 1;
    } else {
      // إعجاب جديد
      newReaction = "like";
      newLikeCount = likeCount + 1;
    }

    setReaction(newReaction);
    setLikeCount(newLikeCount);
    setDislikeCount(newDislikeCount);
    saveToLocalStorage(newReaction, newLikeCount, newDislikeCount);
  };

  const handleDislike = () => {
    let newReaction = reaction;
    let newLikeCount = likeCount;
    let newDislikeCount = dislikeCount;

    if (reaction === "dislike") {
      // إلغاء عدم الإعجاب
      newReaction = null;
      newDislikeCount = dislikeCount - 1;
    } else if (reaction === "like") {
      // التحول من الإعجاب إلى عدم الإعجاب
      newReaction = "dislike";
      newDislikeCount = dislikeCount + 1;
      newLikeCount = likeCount - 1;
    } else {
      // عدم إعجاب جديد
      newReaction = "dislike";
      newDislikeCount = dislikeCount + 1;
    }

    setReaction(newReaction);
    setLikeCount(newLikeCount);
    setDislikeCount(newDislikeCount);
    saveToLocalStorage(newReaction, newLikeCount, newDislikeCount);
  };

  // دالة لإعادة التعيين (حذف من التخزين)
  const handleResetReaction = () => {
    const newLikeCount = reaction === "like" ? likeCount - 1 : likeCount;
    const newDislikeCount =
      reaction === "dislike" ? dislikeCount - 1 : dislikeCount;

    setReaction(null);
    setLikeCount(newLikeCount);
    setDislikeCount(newDislikeCount);

    // حذف البيانات من Local Storage
    if (typeof window !== "undefined") {
      localStorage.removeItem(storageKey);
    }
  };

  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: .3,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      className="relative w-full max-w-sm md:w-[49%] overflow-hidden rounded-2xl bg-gradient-to-br from-bg_dark to-[#1a1a1a] border border-gray-800 shadow-lg mb-5 z-20 bg-white"
    >
      {/* Image Container with Tooltip */}
      <div
        className="relative overflow-hidden cursor-pointer group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />

        {/* Technology Tags */}
        <div className="absolute flex flex-wrap gap-1 top-3 left-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-bg_dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-text_light">{title}</h3>
        <p className="mb-4 text-sm text-text_muted line-clamp-2">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg bg-primary text-bg_dark hover:bg-primary/90"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border border-gray-600 rounded-lg text-text_light hover:bg-gray-800"
              >
                <FiGithub className="text-lg" />
                Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Reaction Buttons with Counts */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
          <motion.button
            onClick={handleLike}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all flex-1 justify-center ${
              reaction === "like"
                ? "bg-green-500/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/20"
                : "bg-gray-800 text-text_muted hover:bg-gray-700 hover:text-text_light"
            }`}
          >
            <FiHeart
              className={`text-lg ${
                reaction === "like" ? "fill-green-400" : ""
              }`}
            />
            <span>like</span>
            {likeCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-2 py-1 text-xs text-green-400 rounded-full bg-green-500/20"
              >
                {likeCount}
              </motion.span>
            )}
          </motion.button>

          <motion.button
            onClick={handleDislike}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all flex-1 justify-center ${
              reaction === "dislike"
                ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg shadow-red-500/20"
                : "bg-gray-800 text-text_muted hover:bg-gray-700 hover:text-text_light"
            }`}
          >
            <FiThumbsDown
              className={`text-lg ${
                reaction === "dislike" ? "fill-red-400" : ""
              }`}
            />
            <span>Dislike</span>
            {dislikeCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-2 py-1 text-xs text-red-400 rounded-full bg-red-500/20"
              >
                {dislikeCount}
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Reset Reaction Button */}
        {(reaction === "like" || reaction === "dislike") && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleResetReaction}
            className="w-full py-2 mt-3 text-xs transition-colors text-text_muted hover:text-text_light"
          >
            Cancel rating
          </motion.button>
        )}
      </div>

      {/* Celebration Effects */}
      <AnimatePresence>
        {reaction === "like" && (
          <>
            {/* Confetti Particles */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                  y: [-20, -150],
                  x: Math.random() * 200 - 100,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="absolute text-2xl pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "0%",
                }}
              >
                {["🎉", "✨", "🌟", "🥳", "👍", "❤️", "🔥", "⭐"][i % 8]}
              </motion.div>
            ))}

            {/* Glow Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-green-500/10 to-primary/10 rounded-2xl"
            />
          </>
        )}

        {reaction === "dislike" && (
          <>
            {/* Disappointment Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                  y: [0, -80],
                  x: Math.random() * 100 - 50,
                  rotate: Math.random() * 180 - 90,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="absolute text-xl pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "0%",
                }}
              >
                {["👎", "😞", "💔", "🚫", "❌", "😕", "🙁", "⚠️"][i % 8]}
              </motion.div>
            ))}

            {/* Red Glow Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-2xl"
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
