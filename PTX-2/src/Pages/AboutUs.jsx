import { useEffect } from "react";

import Image from "../Images/Image";
import "./AboutUs.style.css";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutUs() {
  useEffect(() => {
    document.title = "About | Pakistan Textile Exchange ";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
     
      <div
        className="container-fluid p-0 mt-lg-5 mt-4 position-relative"
        data-aos="fade-up"
        fetchPriority="high"
        style={{ textAlign: "" }}
      >
        {/* Banner Image */}
        <br/>
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block" , }}
          />
        </div>

        {/* Text Overlay */}
        <div
        className="text-overlay-size"
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            
            transform: "translate(-50%, -50%)",
            color: "white",
            // fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
         ABOUT US
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4 text-center">
          <div className="col-12" data-aos="fade-right">
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h3 className="text-uppercase fw-bold mb-3">Our Story</h3>
              <p className=" text-justify  ">
               <strong>The Pakistan Textile Exchange (PTX)</strong> is one of the most reliable and forward-looking names in apparel and accessory manufacturing in Pakistan. With decades of experience, we have built a reputation for delivering world-class textile solutions that combine quality, innovation, and sustainability.

Our journey began with humble roots in action sports manufacturing in Laguna Beach, where our passion for fabrics and design first came to life. Over the years, we have expanded our expertise and infrastructure, enabling us to serve some of the most demanding markets across the globe. Today, our production can be found in almost every major retailer in the United States, a testament to our consistency, reliability, and commitment to excellence.

At PTX, our product portfolio covers a wide spectrum of textiles and apparel categories. From Knits, Woven, and Denim Apparel to backpacks, socks, and premium accessories, we offer end-to-end solutions tailored to the unique needs of our clients. Every product we create reflects a careful balance of craftsmanship, advanced technology, and strict quality assurance standards.

Our manufacturing facilities in Pakistan are equipped with state-of-the-art machinery, modern laboratories, and highly skilled teams dedicated to innovation at every stage — from fabric development and dyeing to stitching, finishing, and packaging. We take pride in maintaining international compliance and sustainability standards, ensuring that our processes are both ethically and environmentally responsible.

Over time, PTX has grown into more than just a manufacturing partner; we are a trusted extension of our clients’ businesses. We collaborate closely with global brands, designers, and retailers, offering them not just products but complete solutions — from sampling and prototyping to bulk production and timely delivery.

Our commitment to quality, competitive pricing, and customer satisfaction has allowed us to emerge as one of the most trusted sourcing hubs from Pakistan for North America and beyond. As we continue to grow, our vision is to strengthen our global footprint, invest in innovation, and contribute to making Pakistan a recognized leader in the global textile industry.

At PTX, we believe in building long-term partnerships based on trust, transparency, and excellence. Whether it’s a small custom order or large-scale production, we approach every project with the same dedication to quality and precision.
              </p>
            </div>
          </div>

         
        </div>
      </div>

   

      
      <div className="space"></div>
    

     
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={Image.CEO}
              className="circle ceo-image"
              alt="CEO"
              width="100"
              height="100"
            />
            <h4 className="mt-3">David Jumani</h4>
            <p className="text-muted">Founder & Chief Apparel Officer</p>
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold ceocontent">CAO Message</h3>
            <p className="text-muted ceocontent">
              One of my first jobs was a teamster at Port Long Beach was loading
              Dole Bananas and Sunkist Oranges. I was always blown away by the
              large cargo ships arriving every week and dreamt of connecting my
              roots from Pakistan and my surf connections in Laguna Beach. Fast
              forward 25 years later and I am proud to say that dreams do come
              true.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
