import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";

export default function Cutting() {
  useEffect(() => {
    document.title = "  Cutting | Pakistan Textile Exchange ";
  }, []);
  useEffect(() => {
   
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
          CUTTING
        </div>
      </div>  <div className="container unique-division-section" >
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
            <h4 className="fw-bold"> CUTTING</h4>
            <p className="unique-division-text">
              At PTX,the cutting process serves as the foundation of garment manufacturing,
              where fabric is precisely measured and cut according to the
              approved patterns. Accuracy in cutting is critical, as it directly
              impacts the fit, shape, and overall quality of the garment. Using
              advanced techniques and tools, the fabric is layered, marked, and
              cut to ensure minimal wastage and maximum efficiency. This stage
              sets the tone for the stitching and finishing processes, making it
              one of the most vital steps in the textile production line.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
            <img
              src={Image.Cutting}
              alt="fabricdivision"
              className="unique-division-img"
            
            />
          </div>
        </div>
      </div>

      
      <Footer />
    </>
  );
}
