import { useEffect } from "react";
import Image from "../Images/Image";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function QualityAssurance() {
  useEffect(() => {
    document.title = "Dyeing anf Finishing | Pakistan Textile Exchange ";
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
          QUALITY
        </div>
      </div>
      <div className="container unique-division-section">
        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-sm-12 col-md-12" data-aos="fade-up">
            <h4 className="fw-bold">QUALITY</h4>
            <p className="unique-division-text ">
            At PTX, quality is not just an objective — it is our commitment. Our Quality Assurance team ensures that every stage of production, from fabric selection to final packaging, adheres to the highest international standards. Using advanced testing methods and modern laboratory facilities, we closely monitor color fastness, shrinkage, stitching accuracy, and overall durability. Each garment is inspected with precision to guarantee consistency and excellence. With PTX, clients can be confident that every product delivered is crafted to perfection, meeting both global benchmarks and customer expectations.
            </p>
          </div>

          {/* Image column */}
          <div className="col-sm-12 col-md-12 text-center" data-aos="fade-up">
            <img
              src={Image.qualityassurance}
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
