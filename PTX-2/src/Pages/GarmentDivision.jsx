import { useEffect } from "react";
import Image from "../Images/Image";
import "./Services.style.css";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function GarmentDivision() {
  useEffect(() => {
    document.title = "Garment Division | Pakistan Textile Exchange ";
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
          GARMENT DIVISION
        </div>
      </div>
          <div className="container unique-division-section">
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
      <h4 className="fw-bold"> GARMENT DIVISION</h4>
      <p className="unique-division-text">
      Our Garment Division is equipped with modern stitching facilities and advanced machinery that ensure precision, consistency, and high-quality production. From cutting and sampling to stitching, finishing, and packaging, every process is carried out under strict quality controls to meet international standards. With a dedicated team of skilled professionals, we specialize in producing a wide range of apparel including casual wear, sportswear, and fashion garments, tailored to the diverse needs of global clients. This division reflects our commitment to innovation, efficiency, and customer satisfaction, making us a trusted partner in the textile and apparel industry.
      </p>
    </div>

    {/* Image column */}
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center" data-aos="fade-up">
      <img
        src={Image.GarmentDivision}
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
