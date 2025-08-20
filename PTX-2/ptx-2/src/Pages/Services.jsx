import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Services.style.css";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Pakistan Textile Exchange ";
  }, []);
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true,     // whether animation should happen only once
        });
      }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const services = [
    {
      title: "MANUFACTURING",
      text:
        "We ensure premium fabric selection, advanced stitching techniques, and strict quality control to deliver superior textile products.",
      link: "/Manufacturing",
      icon: "fas fa-industry",
    },
    {
      title: "PRODUCT DEVELOPMENT",
      text:
        "Collaborative design & prototyping services to turn your ideas into ready-to-produce fashion items.",
      link: "/productdevelopment",
      icon: "fas fa-tshirt",
    },
    {
      title: "LOGISTICS",
      text:
        "From warehousing to distribution, we manage efficient logistics to ensure smooth, on-time shipments across global markets.",
      link: "/Logistics",
      icon: "fas fa-truck",
    },
    {
      title: "SOURCING",
      text:
        "We procure premium fabrics and raw materials from trusted suppliers to meet the evolving demands of the fashion industry.",
      link: "/Sourcing",
      icon: "fas fa-search-location",
    },
    {
      title: "STUDIO",
      text:
        "Our creative studio brings unique textile concepts to life with trend-driven designs, custom patterns, and branding solutions.",
      link: "/Studio",
      icon: "fas fa-camera",
    },
    {
      title: "QUALITY ASSURANCE",
      text:
        "Our rigorous inspection processes guarantee that every fabric and garment meets durability, resilience, comfort, and industry benchmarks.",
      link: "/QualityAssurance",
      icon: "fas fa-clipboard-check",
    },
  ];

  return (
    <>

      <div
        className="container-fluid p-0 mt-lg-5 mt-lg-5  mt-4 position-relative"
        data-aos="fade-up"
        fetchPriority="high"
        style={{ textAlign: "center" }}
      >
        {/* Banner Image */}
        <div className="col-12">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block"  }}
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
       SERVICES
        </div>
      </div>

      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-5"  data-aos="fade-up"
            >
              <div
                className="service-card h-100 d-flex flex-column p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
            
                   <div className="service-card-body d-flex flex-column flex-grow-1 d-flex  text-center">
             
                  <div className="service-icon-wrapper mx-auto mb-3">
                  <i className={`${service.icon} service-icon`}></i>
                </div>
                  <h6 className="service-card-title">{service.title}</h6>
                  <p className="service-card-text">{service.text}</p>
                  <div className="mt-auto">
                    <Link to={service.link}>
                      <button type="button" className="btn btn-outline-dark read-more px-5">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>
      <Footer />
    </>
  );
}
