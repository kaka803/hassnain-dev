'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bebas_Neue } from "next/font/google";
import { FaPhone, FaEnvelope, FaUserPlus, FaCommentDots, FaSms } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current

    gsap.fromTo(
      el.querySelectorAll('.fade-in'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <footer
      ref={sectionRef}
      className="gradient-bg text-white py-20 text-center px-4"
    >
      <h1 className={`md:text-[80px] ${bebasNeue.className}  font-extrabold mb-6 fade-in leading-none text-[50px]`}>DEVELOPER ALI</h1>
      <p className="max-w-2xl mx-auto text-xs md:text-sm fade-in">
        I am Ali Hassnain, a passionate and dedicated full-time web developer with over 3 years of hands-on experience in building responsive, high-converting websites and user-friendly interfaces. My mission is to deliver clean, optimized, and scalable code that helps businesses grow online. I believe in building strong client relationships through clear communication and consistent delivery. If you are looking for a reliable developer to bring your digital vision to life, feel free to reach out — I had love to collaborate and showcase my recent work.
      </p>
      <p className="mt-4 font-medium fade-in">From Pakistan</p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap fade-in">
  <FooterIcon 
    icon={<FaPhone />} 
    label="Call me" 
    href="tel:03280446062" 
  />
  <FooterIcon 
    icon={<FaEnvelope />} 
    label="Mail me" 
    href="mailto:ah0540232@email.com" 
  />
  <FooterIcon 
    icon={<FaUserPlus />} 
    label="Add me" 
    href="https://www.linkedin.com/in/ali-hassnain-16031132b/" 
  />
  <FooterIcon 
    icon={<FaSms />} 
    label="Text me" 
    href="sms:+923280446062" 
  />
  <FooterIcon 
    icon={<FaCommentDots />} 
    label="Chat with me" 
    href="https://wa.me/923280446062" 
  />
</div>

    </footer>
  )
}

function FooterIcon({ icon, label }) {
  return (
    <div className="bg-white text-black rounded-full px-5 py-3 flex items-center gap-2 hover:scale-105 transition transform duration-300">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
