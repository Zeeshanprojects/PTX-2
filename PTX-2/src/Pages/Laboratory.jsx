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
        fetchPriority="high"
        style={{ textAlign: "" }}
      >
        {/* Banner Image */}
        <br />
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image2 w-100"
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
            left: "50%",

            transform: "translate(-50%, -50%)",
            color: "white",
            // fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
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
