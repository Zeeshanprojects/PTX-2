import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Cutting() {
  useEffect(() => {
    document.title = "  Cutting | Pakistan Textile Exchange ";
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
            className="ptx-banner-image w-100"
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
        >CUTTING
        </div>
      </div>
    <div className="container unique-division-section">
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-sm-12 col-md-6">
      <h4 className="fw-bold"> CUTTING</h4>
      <p className="unique-division-text">
      Our fabric garment services deliver premium-quality clothing crafted with precision and care, using a diverse selection of high-grade fabrics. From design to production, we ensure each garment meets your unique specifications, offering exceptional comfort, style, and durability. Our expert team combines advanced techniques with sustainable practices to create garments that elevate your brand and satisfy your customers.
      </p>
    </div>

    {/* Image column */}
    <div className="col-sm-12 col-md-6 text-center">
      <img
        src={Image.FabricDivision}
        alt="fabricdivision"
        className="unique-division-img"
      />
    </div>
  </div>
</div>

        <div className="space"></div>
      <Footer />
    </>
  );
}
