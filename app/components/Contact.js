"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  const [text, settext] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);


  const handlesubmit = async (text, email, message) => {
  setloading(true);
    if (!text || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, email, message }),
    });
    const data = await res.json()
    if(data){
      // alert('Message sent successfully!');
      console.log(data);
      
    }
    setloading(false);
    alert('Message sent successfully!');
    settext('');
    setemail('');
    setmessage('');
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 md:py-20 mt-10 flex flex-col items-center justify-center"
    >
      <h2 className="md:text-[80px] text-[50px] bebas-regular font-bold text-center text-gray-800 dark:text-white ">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl mb-10">
        Have a question or want to work together? Send a message!
      </p>

      <form
        ref={formRef}
        className="bg-white dark:bg-[#1c1c1c] rounded-2xl shadow-xl w-full max-w-xl p-8 space-y-6"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#222] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#222] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#222] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
      onClick={() => handlesubmit(text, email, message)}
          
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl w-full transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-10 flex space-x-6 text-gray-600 dark:text-gray-300">
        <a href="mailto:ah0540232@example.com" className="hover:text-blue-500 transition">
          <FaEnvelope size={24} />
        </a>
        <a href="tel:03280446062" className="hover:text-blue-500 transition">
          <FaPhone size={24} />
        </a>
        <a href="https://github.com/kaka803" target="_blank" className="hover:text-blue-500 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ali-hassnain-16031132b/" target="_blank" className="hover:text-blue-500 transition">
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
