import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function Stitching() {
  useEffect(() => {
    document.title = "Stiching | Pakistan Textile Exchange ";
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
     STITCHING
        </div>
      </div>
      <div className="container unique-division-section">
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
            <h4 className="fw-bold">STITCHING</h4>
            <p className="unique-division-text">
           We have a vast range of stitching unit, that is fully equipped with latest automatic and semi automatic machines. This gives us flexibility and speed to produce many types of garments simultaneously. The Quality control and Quality Assurance departments are in place to make sure the company’s objective of zero defect. We ensure the quality and customer’s standards at the start of the production in the sewing lines and at the end of final stage before packing.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
            <img
              src={Image.Stitching}
              alt="fabricdivision"
              className="unique-division-img"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="space"></div>
      <Footer />
    </>
  );
}
