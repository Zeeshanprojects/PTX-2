import { useEffect } from "react";
import Image from "../Images/Image";
import "./Services.style.css";
import Footer from "../Components/Footer";

export default function DyeingandFinishing() {
  useEffect(() => {
    document.title = "Dyeing | Pakistan Textile Exchange ";
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
       DYEING
        </div>
      </div>
      <div className="container unique-division-section" data-aos="fade-up">
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-6">
            <h4 className="fw-bold"> Dyeing</h4>
            <p className="unique-division-text">
              Our dyeing and finishing services transform raw fabrics into
              vibrant, high-quality textiles with exceptional color consistency
              and durability. Utilizing state-of-the-art equipment and
              eco-friendly processes, we offer a wide range of dyeing techniques
              and finishing treatments tailored to meet your specific needs,
              ensuring superior texture, colorfastness, and aesthetic appeal for
              every project.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-6 text-center">
            <img
              src={Image.DyeingandFinishing}
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
