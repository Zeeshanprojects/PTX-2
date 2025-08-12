import { useEffect } from "react";
import React from "react";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../public/Images/Image";
export default function QualityAssurance() {

  useEffect(() => {
    document.title = "Quality Assurance | Pakistan Textile Exchange ";
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
       <div
        className="container-fluid p-0 mt-5 position-relative"
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
     SERVICES / QUALITY ASSURANCE
        </div>
      </div>
      <div className="space"></div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-white">
              <h2 className="card-title service">
                Ensuring Best Apparel Quality
              </h2>

              <p
                className="card-text service mt-2"
                style={{ textAlign: "justify" }}
              >
                Pakistan textile exchange prides itself on strict focus of
                quality assurance, we do not just handle in-line and final
                inspection we start with product induction, inspecting yarn,
                fabrication, finishing, shrinkage, sewing all the way to carton
                packing and loading into the container. All visible real time
                and online through our PLM. We are very proud of our quality
                track record.
              </p>
            </div>
            <div className="card-body bg-white serviceparagraph">
              <h2 className="card-title service mt-4">
                Quality Assurance and Quality Control
              </h2>

              <p
                className="card-text  service mt-2 "
                style={{ textAlign: "justify" }}
              >
                Quality assurance and quality control may seem the same thing,
                but they’re not. Apparel garments, accessories, and other
                textile products are assessed for quality in the preproduction
                phase, during production, and with a final inspection after the
                product has been completed. Quality Assurance (QA) is focused on
                the process. It builds quality into each step of the
                manufacturing process including designing, production, and
                beyond.
              </p>
            </div>
            <div className="card-body bg-white serviceparagraph">
              <h2 className="card-title service mt-4">
                In-line Production Inspection
              </h2>

              <p
                className="card-text  service mt-2"
                style={{ textAlign: "justify" }}
              >
                In-line product inspection or DUPRO (During Production
                Inspection) is an effective way for customers to know about the
                status of the manufacturing of an order, gain important
                information about the shipment schedule and identify defects
                early on before they affect the entire production.
              </p>
            </div>

            <div className="card-body bg-white ">
              <h2 className="card-title service mt-4">Why Choose PTX</h2>

              <p
                className="card-text service mt-2"
                style={{ textAlign: "justify" }}
              >
                We never compromise with the quality as we consider it as our
                success pillar. We believe that compromising on quality leads to
                losing market share or clients. We believe that if we have
                customers, we have everything. That is why, we have appointed a
                separate team to answer the queries of customers and satisfy
                them on their needs. For us customer satisfaction is above all.
              </p>
            </div>
            <br />
        
          </div>
        </div>
      </div>

      <div className="space"></div>

      <Footer />
    </>
  );
}
