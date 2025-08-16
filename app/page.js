'use client'
import { useRef } from "react";
import gsap from "gsap";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import CreateDevelopSection from "./components/Create";
import PortfolioSlider from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function Home() {


   const circleRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  useEffect(() => {
    const circle = circleRef.current;

    // Mouse move par GSAP se animation
    const moveCircle = (e) => {
      gsap.to(circle, {
        x: e.clientX - 15, // center karne ke liye
        y: e.clientY - 15,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);




  return (
    <div className="">
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-black/40"
      ></div>
      
      <section className="div-container overflow-hidden">
      
        <Navbar />
      <Hero/>

       <CreateDevelopSection/>

       <Skills/>

      </section>
      <div className="div-container">

      <About/>
      <PortfolioSlider />
      <Contact/>
      </div>
<div className=" w-full h-20"></div>

<Footer/>
    </div>
  );
}
