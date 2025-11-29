import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function Laboratory() {
  useEffect(() => {
    document.title = "Laboratory | Pakistan Textile Exchange ";
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
          LABORATORY
        </div>
      </div>
    <div className="container unique-division-section">
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
      <h4 className="fw-bold">LABORATORY</h4>
      <p className="unique-division-text">
At PTX, our state-of-the-art laboratory plays a crucial role in ensuring the highest standards of textile quality. Every fabric undergoes rigorous testing to evaluate its color fastness, shrinkage, GSM, tensile strength, and durability before moving into bulk production. By simulating real-life conditions, we guarantee that our products meet both international quality benchmarks and the unique requirements of our clients  
      </p>
    </div>

    {/* Image column */}
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
      <img
        src={Image.Laboratory}
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
