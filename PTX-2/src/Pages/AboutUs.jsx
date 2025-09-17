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
        <br />
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image2 w-100"
            fetchPriority="high"
            style={{ display: "block" }}
          />
        </div>

        {/* Text Overlay */}
        <div
          className="text-overlay-size"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",

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
