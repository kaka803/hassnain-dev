'use client';
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Feedlink Application",
    desc: "Collects user feedback with clean UI/UX",
    image: "/feedlink.jpg",
    link: "https://hfeedlink.vercel.app/"
  },
  {
    id: 2,
    title: "Fullstack E-commerce Store",
    desc: "Built with GSAP, responsive frontend & backend",
    image: "/ecommerce.jpg",
    link: "https://hassnain-mart.vercel.app/"
  },
  {
    id: 3,
    title: "Fullstack Blog Application",
    desc: "Next.js blog with custom authentication and editor",
    image: "/blog.jpg",
    link: "https://fullstackblog-6g6r.vercel.app/"
  },
  {
    id: 4,
    title: "Gemini Clone (Frontend)",
    desc: "Animated Gemini-style UI with modern design",
    image: "/gemini.jpg",
    link: "https://eloquent-belekoy-a8144e.netlify.app/"
  }
]


// Duplicate cards for looping effect
const getLoopedProjects = () => {
  return [...projects, ...projects, ...projects];
};

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length); 
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const loopedProjects = getLoopedProjects();
  const midIndex = Math.floor(loopedProjects.length / 2);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= loopedProjects.length - 2 ? midIndex : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 1 ? midIndex : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= loopedProjects.length - 2 ? midIndex : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate only when section comes into view
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 30%",
        onEnter: () => {
          animateCards();
        },
        once: true // only trigger once
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex]);

  // Animation function
  const animateCards = () => {
  const total = loopedProjects.length;
  const center = currentIndex;

  cardsRef.current.forEach((card, index) => {
    if (!card) return;
    const distance = index - center;
    let scale = 0.8;
    let opacity = 0.3;
    let zIndex = 1;
    let x = distance * 200;

    if (distance === 0) {
      scale = 1.15;
      opacity = 1;
      zIndex = 10;
      x = 0;
    } else if (Math.abs(distance) === 1) {
      scale = 0.95;
      opacity = 0.7;
      zIndex = 5;
    } else if (Math.abs(distance) === 2) {
      scale = 0.85;
      opacity = 0.5;
      zIndex = 2;
    }

    gsap.to(card, {
      scale,
      opacity,
      x,
      zIndex,
      duration: 0.5,
      ease: "power3.out"
    });
  });
};


  return (
    <section ref={sectionRef} className="relative w-full py-10 px-4 md:px-10  overflow-hidden">
      <h2 className="text-5xl md:text-[80px] bebas-regular font-bold text-center mb-10 text-gray-800">
        Featured Projects
      </h2>

      <div className="relative flex justify-center items-center h-[420px] md:h-[450px]">
        <button
          className="absolute left-4 z-30 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="relative w-full max-w-7xl flex justify-center items-center">
          {loopedProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute w-64 md:w-72 h-[360px] bg-white shadow-xl rounded-2xl p-5 transition-all duration-500 ease-in-out flex flex-col justify-between"
              style={{ transform: "translateX(0px)", opacity: 0.3, zIndex: 1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block bg-gray-800 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition"
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>

        <button
          className="absolute right-4 z-30 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PortfolioSlider;
