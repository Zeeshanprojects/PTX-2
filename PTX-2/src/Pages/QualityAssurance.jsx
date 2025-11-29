import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function QualityAssurance() {
  useEffect(() => {
    document.title = "Quality Assurance | Pakistan Textile Exchange ";
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
        QUALITY ASSURANCE
        </div>
      </div>
      <div className="container unique-division-section">
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
            <h4 className="fw-bold">QUALITY ASSURANCE</h4>
            <p className="unique-division-text ">
            At PTX, quality is not just an objective — it is our commitment. Our Quality Assurance team ensures that every stage of production, from fabric selection to final packaging, adheres to the highest international standards. Using advanced testing methods and modern laboratory facilities, we closely monitor color fastness, shrinkage, stitching accuracy, and overall durability. Each garment is inspected with precision to guarantee consistency and excellence. With PTX, clients can be confident that every product delivered is crafted to perfection, meeting both global benchmarks and customer expectations.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
            <img
              src={Image.qualityassurance}
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
