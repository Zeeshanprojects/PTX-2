  import { useEffect } from "react";
import "./Gallery.style.css";
import Image from "../Images/Image";

import Footer from "../Components/Footer";


export default function Gallery() {

    useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange ";
  }, []);


  const galleryImages = [
    { image: Image.Gallery1,},
    { image: Image.Gallery2,  },
    { image: Image.Gallery3, },
    { image: Image.Gallery5,},
    { image: Image.Gallery4,  },
    { image: Image.Gallery6, },
  ];

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
GALLERY
        </div>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          {galleryImages.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="gallery-card"  data-aos="fade-up">
                <img
                  src={item.image}
                  alt={`Gallery-${index}`}
                  className="img-fluid"
                  loading="lazy"
                />
                <h2 className="hover-caption text-align-center">
                  {item.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <Footer/>
    </>
  );
}
