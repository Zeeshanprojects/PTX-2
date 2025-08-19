  import { useEffect } from "react";
import "./Gallery.style.css";
import Image from "../Images/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";


export default function Gallery() {

    useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange ";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  const galleryImages = [
    { image: Image.Gallery3,},
    { image: Image.Gallery1,  },
    { image: Image.Gallery4, },
    { image: Image.Gallery2,},
    { image: Image.Gallery5,  },
    { image: Image.Gallery6, },
  ];

  return (
    <>
   
      <div
        className="container-fluid p-0 mt-lg-5 mt-4 position-relative"
        data-aos="fade-up"
        fetchPriority="high"
        style={{ textAlign: "center" }}
      >
        {/* Banner Image */}
        <br/>
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block" ,  }}
          />
        </div>

        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
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
