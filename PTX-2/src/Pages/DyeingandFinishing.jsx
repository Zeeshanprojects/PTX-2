import { useEffect } from "react";
import Image from "../Images/Image";
import "./Services.style.css";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function DyeingandFinishing() {
    useEffect(() => {
        document.title = "Dyeing AND FINISHING | Pakistan Textile Exchange ";
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
        <br/>
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block" , }}
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
       DYEING AND FINISHING
        </div>
      </div>
          <div className="container unique-division-section">
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-sm-12 col-md-6">
      <h4 className="fw-bold"> Dyeing</h4>
      <p className="unique-division-text">
       Our dyeing and finishing services transform raw fabrics into vibrant, high-quality textiles with exceptional color consistency and durability. Utilizing state-of-the-art equipment and eco-friendly processes, we offer a wide range of dyeing techniques and finishing treatments tailored to meet your specific needs, ensuring superior texture, colorfastness, and aesthetic appeal for every project.
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
      
<Footer/>
   </>
  )
}
