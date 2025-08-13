import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import CreateDevelopSection from "./components/Create";
import PortfolioSlider from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <section className="div-container overflow-hidden">
      
        <Navbar />
      <Hero/>

       <CreateDevelopSection/>


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
