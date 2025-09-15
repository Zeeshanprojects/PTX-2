import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Sampling() {
  useEffect(() => {
    document.title = "Sampling | Pakistan Textile Exchange ";
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
        >
         SAMPLING
        </div>
      </div>
    <div className="container unique-division-section">
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-sm-12 col-md-6">
      <h4 className="fw-bold">SAMPLING</h4>
      <p className="unique-division-text">
At PTX, sampling is more than just a step — it’s the foundation of trust with our clients. We create high-quality prototype garments that reflect the exact design, fabric, and finish envisioned by our partners. Each sample undergoes strict evaluation for fit, durability, and aesthetics, ensuring it meets international standards before moving into bulk production. This process not only helps reduce errors and wastage but also demonstrates our commitment to precision, innovation, and customer satisfaction. With PTX, every sample is a promise of excellence.
      </p>
    </div>

    {/* Image column */}
    <div className="col-sm-12 col-md-6 text-center">
      <img
        src={Image.Sampling}
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
