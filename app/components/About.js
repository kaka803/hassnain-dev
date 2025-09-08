"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative md:py-10 px-4 sm:px-8 md:px-16 mb-20 overflow-hidden"
    >
      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-5xl sm:text-[40px] md:text-[60px] lg:text-[80px] text-gray-800 font-bold bebas-regular leading-tight">
          EXPERIENCES
        </h2>

        <p className="max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
          I&apos;m a <span className="font-bold text-purple-600">Full Stack Web Developer</span> passionate about creating{" "}
          <span className="font-semibold">modern and responsive web applications</span>.  
          Skilled in <span className="font-medium">HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and Node.js</span>,  
          I enjoy working on end-to-end projects and delivering high-quality solutions.
          <br /><br />
          Currently, I&apos;m pursuing a <span className="font-semibold">Bachelor in Computer Science</span> after completing{" "}
          <span className="font-semibold">ICS (Intermediate in Computer Science)</span>.  
          <br /><br />
          I am also associated with <span className="text-purple-700 font-bold">Asian Technologies</span>, a reputed{" "}
          <span className="font-semibold">Software House</span>, where I worked as a{" "}
          <span className="font-bold text-purple-600">Web Developer</span>.  
          I successfully built their{" "}
          <span className="font-semibold text-green-600">company&apos;s official website</span>, and they were{" "}
          <span className="font-bold text-green-700">highly satisfied with my work</span>.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-40 h-40 rounded-full overflow-hidden about-image shadow-xl ring-4 ring-purple-200">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-xl text-center text-gray-800">
            {[
              { label: "Projects Completed", value: "8+" },
              { label: "Happy Clients", value: "12+" },
              { label: "Positive Feedback", value: "98%" },
              { label: "Years Of Experience", value: "3+" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (statsRef.current[i] = el)}
                className="space-y-1"
              >
                <h2 className="text-5xl bebas-regular font-bold text-gray-800">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-500 font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
