"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tags = [
  "Wedding Website",
  "Travel / Booking Website",
  "Animal / Pet / Zoo Website",
  "Online Forum / Community Website",
  "Art / Gallery / Photographer Website",
  "Entertainment Website",
  "Sales Funnel / Click Funnel",
  "Agency / Business Website",
  "Landing Page Website",
  "Doctors / Appointment Website",
  "News / Blog / Magazine Website",
  "School / College / University",
  "Startup Website",
  "NFT / Crypto Website",
  "Interactive Website",
  "Kid-Friendly Website",
  "Membership / Subscription Website",
  "Gaming / Quiz / Polling Website",
  "Consulting Website",
  "Real Estate Website",
  "Personal / Portfolio Website",
  "Online Store / Ecommerce Website",
  "Job Board / Brochure",
  "Government Website",
];

const CreateDevelopSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tags = gsap.utils.toArray(".tag");

    gsap.set(tags, { y: -100, opacity: 0, rotate: -10 });

    gsap.to(tags, {
      y: 0,
      opacity: 1,
      rotate: 0,
      ease: "back.out(1.7)",
      duration: 0.6,
      stagger: 0.07,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="md:py-20 pb-13 mb-10 h-[100%] lg:h-[90vh] px-4 sm:px-6 md:px-10 text-center">
      <h2 className="text-4xl  md:text-[60px] lg:text-[80px] text-gray-800 font-bold bebas-regular mb-10 leading-tight">
        I CAN CREATE/DEVELOP
      </h2>

      <div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto"
        ref={containerRef}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tag px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white"
            style={{
              backgroundColor: getRandomColor(index),
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              transform: `translateZ(${index % 2 === 0 ? "-30px" : "30px"})`,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
};

function getRandomColor(index) {
  const colors = [
    "#7e57c2", "#26c6da", "#ec407a", "#66bb6a", "#ffa726",
    "#42a5f5", "#ab47bc", "#26a69a", "#ef5350", "#5c6bc0",
    "#8d6e63", "#26c6da", "#42a5f5", "#ff7043", "#d4e157",
  ];
  return colors[index % colors.length];
}

export default CreateDevelopSection;
