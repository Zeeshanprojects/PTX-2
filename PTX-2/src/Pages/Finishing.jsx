import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function Finishing() {
  useEffect(() => {
    document.title = "Finishing | Pakistan Textile Exchange ";
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
