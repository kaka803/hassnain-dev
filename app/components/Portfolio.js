"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  {
    title: "Blog Platform",
    description:
      "Full‑stack blog with custom authentication, secure sessions, rich text editor, drafts/publish flow, and role-based admin tools.",
    image: "blog.jpg",
    link: "https://fullstackblog-6g6r.vercel.app/",
  },
  {
    title: "hfeedlink",
    description:
      "Feedback Collection Tool: A unique shareable link is generated where customers can directly submit feedback—ratings, comments, and even attachments—everything organized in one centralized dashboard.",
    image: "feedlink.jpg",
    link: "https://hfeedlink.vercel.app/",
  },
  {
    title: "E‑commerce Website",
    description:
      "Fully functional store with custom auth, email support, product management + admin panel, inventory & sales tracking, orders, coupons, and analytics.",
    image: "ecommerce.jpg",
    link: "https://hassnain-mart.vercel.app/",
  },
  {
    title: "Gemini Clone",
    description:
      "Gemini Clone: A modern, responsive web app built with a sleek light/dark mode toggle. Features smooth animations, intuitive UI, and a fast, optimized frontend—crafted to deliver a seamless user experience and professional design.",
    image: "gemini.jpg",
    link: "https://eloquent-belekoy-a8144e.netlify.app/",
  },
];


export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState(null);
  const [zDistance, setZDistance] = useState(420); // translateZ distance

  // ✅ responsive translateZ set karna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setZDistance(280); // mobile
      } else if (window.innerWidth < 768) {
        setZDistance(350); // tablet
      } else {
        setZDistance(420); // desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setFlippedCard(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setFlippedCard(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className=" pb-13  h-[100%] lg:h-[90vh] px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-5xl  md:text-[60px] lg:text-[80px] text-gray-800 font-bold  bebas-regular  md:mb-15 leading-tight">
        MY PROJECTS
      </h2>
    <div className="relative w-full h-[350px] flex items-center justify-center perspective">
      
      <div
        className="relative w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] md:w-[280px] md:h-[200px] transform-style-3d transition-transform duration-700"
        style={{
          transform: `rotateY(-${currentIndex * (360 / projects.length)}deg)`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] md:w-[280px] md:h-[200px] rounded-xl shadow-lg"
            style={{
              transform: `rotateY(${index * (360 / projects.length)}deg) translateZ(${zDistance}px)`,
            }}
            onClick={() => toggleFlip(index)}
          >
            {/* Card Wrapper */}
            <div
              className={`relative shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(0,0,0,1)]   rounded-xl p-6 bg-gray-900 w-full h-full [transform-style:preserve-3d] transition-all duration-700 group ${
                flippedCard === index ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white rounded-xl flex flex-col items-center justify-center p-3 [transform:rotateY(180deg)] backface-hidden">
                <h3 className="text-base md:text-md font-bold mb-2">
                  {project.title}
                </h3>
                <p className="md:text-[10px] text-[7px] mb-3 text-center">
                  {project.description}
                </p>
                <a
  href={project.link}
  target="_blank"
  className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white text-black rounded-md text-[11px] md:text-xs font-medium shadow-sm hover:bg-gray-200 transition-all duration-200 hover:scale-105"
>
  View Project
</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {/* Left / Previous */}
<button
  type="button"
  onClick={prevSlide}
  aria-label="Previous slide"
  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm text-white shadow-md hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition-transform transform-gpu hover:scale-105"
>
  <ChevronLeft size={18} strokeWidth={2.2} />
</button>

{/* Right / Next */}
<button
  type="button"
  onClick={nextSlide}
  aria-label="Next slide"
  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-sm text-white shadow-md hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition-transform transform-gpu hover:scale-105"
>
  <ChevronRight size={18} strokeWidth={2.2} />
</button>


      {/* Extra CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
    </section>
  );
}
