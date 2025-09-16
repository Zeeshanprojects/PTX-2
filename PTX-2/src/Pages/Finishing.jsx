import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Finishing() {
  useEffect(() => {
    document.title = "Finishing | Pakistan Textile Exchange ";
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
            left: "30%",

            transform: "translate(-50%, -50%)",
            color: "white",
            // fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          FINISHING
        </div>
      </div>
      <div className="container unique-division-section">
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
            <h4 className="fw-bold">FINISHING</h4>
            <p className="unique-division-text">
             At PTX, finishing is where perfection takes shape. After stitching, every garment goes through a meticulous finishing process designed to enhance its look, feel, and durability. From advanced washing techniques and controlled shrinkage to pressing, labeling, and packaging, we ensure each product is retail-ready and meets international quality standards. Our finishing department focuses on detail, ensuring smooth textures, vibrant colors, and flawless presentation — so that every piece leaving PTX reflects the promise of excellence and reliability our clients trust.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
            <img
              src={Image.Finishing}
              alt="fabricdivision"
              className="unique-division-img"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
