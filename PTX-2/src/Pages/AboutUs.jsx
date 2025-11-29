import { useEffect } from "react";

import Image from "../Images/Image";
import "./AboutUs.style.css";

import Footer from "../Components/Footer";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About | Pakistan Textile Exchange ";
  }, []);

  return (
    <>
      <div
        className="container-fluid p-0 mt-lg-5 mt-4 position-relative"
        data-aos="fade-up"
        style={{ height: "30vh" }} // adjust height as needed
      >
        {/* Solid Black Background */}
        <div
          className="w-100 h-100"
          style={{
            backgroundColor: "#000000", // pure black
            // Or use a very dark shade: "#0f0f0f", "#111111"
          }}
        ></div>

        {/* Text Overlay - ABOUT US */}
        <div
          className="text-overlay-size"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",

            fontWeight: "600",
            textShadow: "3px 3px 10px rgba(0,0,0,0.9)",
            letterSpacing: "0.05em",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          ABOUT US
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4 text-center">
          <div className="col-12" data-aos="fade-up">
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h3 className="text-uppercase fw-bold mb-3">Our Story</h3>
              <p className="unique-division-text ">
                <strong>The Pakistan Textile Exchange (PTX)</strong> is one of
                Pakistan’s most trusted names in apparel and accessory
                manufacturing. Starting from action sports in Laguna Beach, our
                journey has grown into supplying products to leading retailers
                across the United States. We specialize in Knits, Woven, Denim
                Apparel, Backpacks, Socks, and Premium Accessories, offering
                complete solutions from design and sampling to production and
                delivery. With state-of-the-art facilities, skilled teams, and
                strict quality standards, we ensure every product reflects
                innovation, durability, and excellence. At PTX, we are committed
                to sustainability, ethical practices, and long-term
                partnerships. Our vision is to strengthen Pakistan’s role in the
                global textile industry while delivering world-class products
                that brands and customers can trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space"></div>
      <h1 className="text-center fw-bold " data-aos="fade-up">
        WHY CHOOSE US?
      </h1>
      <div className="space"></div>
      <div className="container mb-5" data-aos="fade-up">
        <div className="row g-4">
          {[
            { icon: "fas fa-tshirt", text: "Premium Quality Fabrics" },
            { icon: "fas fa-recycle", text: "Sustainable Manufacturing" },
            {
              icon: "fas fa-shipping-fast",
              text: "On-Time Global Delivery",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-4 text-center">
              <div>
                <i className={`${item.icon} fa-3x mb-3`}></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
