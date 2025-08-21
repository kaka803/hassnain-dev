"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
  ],
  Design: [
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe Photoshop", level: 80 },
  ],
};

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <div className="w-full mb-15 max-w-3xl mx-auto pb-10 px-5">
      <h2 className="text-5xl sm:text-[40px] md:text-[60px] lg:text-[80px] text-gray-800 font-bold bebas-regular leading-tight text-center mb-10">
          MY SKILLS
        </h2>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-5 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
  key={cat}
  onClick={() => setSelectedCategory(cat)}
  className={`px-4 py-2 rounded-full text-sm font-medium transition 
    ${
      selectedCategory === cat
        ? "bg-gray-300 text-black shadow-md dark:bg-blue-500"
        : "bg-gray-800 text-gray-200 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
    }`}
>
  {cat}
</button>

        ))}
      </div>

      {/* Skills Progress */}
      <div className="space-y-6">
        {skillsData[selectedCategory].map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="h-3 rounded-full bg-gradient-to-r from-gray-800 to-purple-800"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
