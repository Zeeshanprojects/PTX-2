import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function Sampling() {
  useEffect(() => {
    document.title = "Sampling | Pakistan Textile Exchange ";
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
        SAMPLING
        </div>
      </div>
      <div className="container unique-division-section">
        <div className="row align-items-center">
          {/* Text column */}
          <div
            className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
            data-aos="fade-up"
          >
            <h4 className="fw-bold">SAMPLING</h4>
            <p className="unique-division-text">
              At PTX, sampling is more than just a step — it’s the foundation of
              trust with our clients. We create high-quality prototype garments
              that reflect the exact design, fabric, and finish envisioned by
              our partners. Each sample undergoes strict evaluation for fit,
              durability, and aesthetics, ensuring it meets international
              standards before moving into bulk production. This process not
              only helps reduce errors and wastage but also demonstrates our
              commitment to precision, innovation, and customer satisfaction.
              With PTX, every sample is a promise of excellence.
            </p>
          </div>

          {/* Image column */}
          <div
            className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center"
            data-aos="fade-up"
          >
            <img
              src={Image.Sampling}
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
