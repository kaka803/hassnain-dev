'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap';

const Hero = () => {
  const imgref = useRef(null)
  const textref = useRef(null)
  const descref = useRef(null)
  const btnref = useRef(null)

 useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

  // Logo animation
  tl.from(imgref.current, { y: -50, opacity: 0 });

  // Nav links animation (slight delay)
  tl.from(textref.current, {
    y: -30,
    opacity: 0,
  }, "+=0.1");

  // Description text animation (slight delay)
  tl.from(descref.current, {
    y: -20,
    opacity: 0,
  }, "+=0.1");

 

}, []);


  


  return (
    <div>
      <div className="hero-section flex flex-col items-center justify-center min-h-[100%] text-center px-4 py-10">
  <div ref={imgref} className="mb-6">
    <Image
      src="/profile.jpg"
      alt="profile"
      width={120}
      height={120}
      className="rounded-full border-4 border-white shadow-lg"
    />
  </div>

  <h1 ref={textref} className="text-3xl sm:text-4xl md:text-5xl lg:text-10xl xl:text-[100px] 2xl:text-[120px] bebas-regular font-bold text-gray-800 leading-none">
    
    <span>FULL STACK DEVELOPER &</span>
    <br />
    <span>UI/UX DESIGNER</span>
    
  </h1>

  <p ref={descref} className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl">
  Hi, I&apos;m Hassnain — a Full Stack Developer with a passion for building modern, responsive, and fast websites using technologies like React, Next.js, Tailwind CSS, and MongoDB. I help businesses grow through high-performing web apps.
</p>


  <button ref={btnref} className="mt-6 px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
    Get in touch
  </button>
</div>

<div className="relative h-55 ">
      
      <div className="absolute top-10 -left-1/2 w-[200%] transform -rotate-6">
        
        <div className="bg-[#8b7ce8] bebas-regular  overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-white text-5xl pt-2 font-extrabold tracking-wide">
          
          <div className="whitespace-nowrap animate-marquee">
            <span className="mx-10">
              3+ YEARS OF EXPERIENCE → 10+ PROJECTS COMPLETED → 99% POSITIVE FEEDBACK
            </span>
            <span className="mx-10">
              3+ YEARS OF EXPERIENCE → 10+ PROJECTS COMPLETED → 99% POSITIVE FEEDBACK
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-10 -left-1/2 w-[200%] transform rotate-6">
        
        <div className="bg-[#263451] bebas-regular border border-x-10  shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-white  overflow-hidden text-white text-5xl pt-2 font-extrabold tracking-wide">
          
          <div className="whitespace-nowrap animate-marquee">
            <span className="mx-10">
              3+ YEARS OF EXPERIENCE → 10+ PROJECTS COMPLETED → 99% POSITIVE FEEDBACK
            </span>
            <span className="mx-10">
              3+ YEARS OF EXPERIENCE → 10+ PROJECTS COMPLETED → 99% POSITIVE FEEDBACK
            </span>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Hero
