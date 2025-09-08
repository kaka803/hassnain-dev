"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMongodb,
  SiFigma,
  SiRadixui,
   SiGreensock,
  
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  Frontend: [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 80, icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js", level: 85, icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "ShadCN/UI", level: 75, icon: <SiRadixui className="text-indigo-500" /> },
  { name: "GSAP", level: 70, icon: <SiGreensock className="text-green-500" /> },
],
  Backend: [
    { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", level: 70, icon: <SiExpress className="text-gray-600 dark:text-white" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-700" /> },
  ],
  Designing: [
    { name: "Illustrator", level: 85, icon: <SiAdobeillustrator className="text-orange-600" /> },
    { name: "Photoshop", level: 80, icon: <SiAdobephotoshop className="text-blue-800" /> },
    { name: "Figma", level: 85, icon: <SiFigma className="text-pink-500" /> },
  ],
};

export default function Skills() {
  const [category, setCategory] = useState("Frontend");
  const circlesRef = useRef({});

  useEffect(() => {
    Object.keys(circlesRef.current).forEach((key) => {
      const circle = circlesRef.current[key];
      const skill = skillsData[category].find((s) => s.name === key);
      if (!circle || !skill) return;

      const pathLength = 2 * Math.PI * 70;
      gsap.set(circle, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      gsap.to(circle, {
        strokeDashoffset: pathLength * (1 - skill.level / 100),
        scrollTrigger: {
          trigger: circle,
          start: "top 80%",
        },
        duration: 1.5,
        ease: "power2.out",
      });
    });
  }, [category]);

  // Parent animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // one by one delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div id="skills" className="w-full max-w-6xl mx-auto py-16 px-5 text-center">
      <h2 className="text-5xl md:text-[60px] lg:text-[80px] font-bold bebas-regular leading-tight mb-12 text-gray-800 dark:text-white">
        MY SKILLS
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(skillsData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              category === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={category} // refresh on filter change
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center"
      >
        {skillsData[category].map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ rotateX: 15, rotateY: -15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center 
              bg-gray-100 dark:bg-gray-900 shadow-2xl cursor-pointer overflow-hidden 
              backdrop-blur-lg"
          >
            {/* SVG Circular Progress */}
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90 filter drop-shadow-[0_0_6px_rgba(139,92,246,0.7)]">
              <circle cx="80" cy="80" r="70" stroke="lightgray" strokeWidth="10" fill="transparent" />
              <circle
                ref={(el) => (circlesRef.current[skill.name] = el)}
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="transparent"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Wave Animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r 
                from-blue-500/30 to-pink-500/30"
              style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 65%, 0% 85%)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl relative z-10 drop-shadow-md"
            >
              {skill.icon}
            </motion.div>

            {/* Percentage */}
            <span className="absolute bottom-5 text-lg font-bold text-purple-700 dark:text-purple-400 z-10">
              {skill.level}%
            </span>

            {/* Skill Name */}
            <span className="absolute -bottom-8 text-md font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
