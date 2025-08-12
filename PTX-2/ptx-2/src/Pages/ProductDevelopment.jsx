import { useEffect } from "react";
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

export default function ProductDevelopment() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: true, // whether animation should happen only once
      });
    }, []);
  return (
    <>

 <div className="background-color" data-aos="fade-up">
     <h1 className="mt-5 text-center" data-aos="fade-up">SERVICES / PRODUCT DEVELOPMENT</h1>
     </div>

<div className='space'></div>
    <div className="container" data-aos="fade-up">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="card-body bg-transparent">
        <h2 className="card-title service">Product Development</h2>

        <p
          className="card-text service mt-2"
          style={{ textAlign: "justify" }}
        >
          At PTX, product development is where creativity meets precision. 
          We turn your fashion concepts into production-ready designs through 
          a structured and collaborative approach. From mood boards to fabric 
          selection, pattern making, and sampling, our experienced team ensures 
          your ideas are brought to life with accuracy and innovation. Whether 
          you’re launching a new line or scaling an existing one, we’re your 
          trusted partner in building high-quality garments that meet your brand vision.
        </p>
      </div>

      <div className="card-body bg-transparent serviceparagraph">
        <h2 className="card-title service mt-4">What is Product Development?</h2>

        <p
          className="card-text service mt-2"
          style={{ textAlign: "justify" }}
        >
          Product development in the apparel industry is the process of 
          transforming design ideas into finished garments. It involves 
          market research, material sourcing, tech packs, pattern development, 
          fit sampling, and continuous refinement. This stage ensures that 
          every style is functional, fashionable, and feasible for manufacturing. 
          PTX specializes in collaborative product development, allowing clients 
          to work directly with our experts for faster turnarounds and exceptional results.
        </p>
      </div>

      <div
        className="card-body bg-transparent"
        style={{ textAlign: "justify" }}
      >
        <h2 className="card-title service mt-4">Why Choose PTX for Development</h2>
        <p className="card-text service mt-2">
          We understand that great fashion starts with great development. 
          Our team stays ahead of industry trends, works with premium fabrics, 
          and focuses on precision to deliver results that exceed expectations. 
          We take your sketches seriously and support you through every detail 
          — from tech pack creation to final samples. Our transparent communication, 
          attention to detail, and dedication to quality are what make us your ideal 
          development partner.
        </p>
      </div>

      <br />
      <button
        type="button"
        className="btn btn-dark" 
      >
        Download Development Guide
      </button>
    </div>
  </div>
</div>
<div className="space"></div>
<Footer/>

    </>
  )
}
