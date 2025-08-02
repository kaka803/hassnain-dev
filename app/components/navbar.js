"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WrapButton from "@/components/ui/wrap-button";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    tl.from(logoRef.current, { y: -50, opacity: 0 });
    tl.from(linksRef.current, { y: -30, opacity: 0, stagger: 0.15 }, "-=0.4");
    tl.from(buttonRef.current, { y: -20, opacity: 0 }, "-=0.3");
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleDownload = () => {
  const link = document.createElement('a')
  link.href = `${window.location.origin}/resume.pdf` // absolute URL
  link.download = 'Ali_Hassnain_Resume.pdf'
  link.target = '_blank' // optional: ensures no redirect
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


  return (
    <div>
      <nav className="navbar flex justify-between items-center px-6 py-4 relative z-50">
        {/* Logo */}
        <div className="logo" ref={logoRef}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={55}
            height={55}
            className="rounded-full"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links hidden md:block">
          <ul className="flex gap-8 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                className="text-base text-[#2a3354] font-medium hover:text-pink-500 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <div onClick={handleDownload} ref={buttonRef} className="hidden md:block">
          <WrapButton href="#">
            <ArrowDownToLine className="animate-spin" size={14} color="#000" />
            Download CV
          </WrapButton>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg transform translate-x-full md:hidden transition-transform duration-500 z-40 px-8 pt-20"
        >
          <ul className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-lg text-[#2a3354] font-semibold hover:text-pink-500 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div onClick={handleDownload} className="mt-8">
            <WrapButton href="#" >
              <ArrowDownToLine className="animate-spin" size={14} color="#000" />
              Download CV
            </WrapButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
