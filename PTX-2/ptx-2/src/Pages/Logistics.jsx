import { useEffect } from "react";
import React from "react";
import Image from "../Images/Image";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Logistics() {
  useEffect(() => {
    document.title = "Logistics | Pakistan Textile Exchange ";
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
        className="container-fluid p-0 mt-lg-5 mt-xl-5 mt-4 position-relative"
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
     SERVICES / LOGISTICS
        </div>
      </div>
<div className="space"></div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-transparent">
              <h2 className="card-title service">Logistics</h2>

              <p className="card-text service mt-2" style={{textAlign: "justify"}}>
                Want to know where your shipments are? tired of calling your
                forwarder or waiting for emails? Pakistan textile exchange has
                built an online PLM with all order and sampling tracking real
                time. We not only ship your product we also handle customs
                clearance and shipping direct to customers warehouse, store
                ready or bulk pack and keep you informed real time.
              </p>
            </div>
            <div className="card-body bg-transparent serviceparagraph">
              <h2 className="card-title service mt-4">
                What is Apparel Production?
              </h2>

              <p className="card-text  service mt-2"  style={{textAlign: "justify"}}>
                Apparel production, also known as garment production is a
                process where fabric is being converted into garments. The term
                apparel production is basically used when garments are
                manufactured in a factory. Traditionally apparel manufacturing
                factories has been divided into two sectors as domestic and
                export. We are expierienced in manufacturing apparel, most
                people do it but we do it better.
              </p>
            </div>

            <div className="card-body bg-transparent ">
              <h2 className="card-title service mt-4">Why Choose PTX</h2>

              <p className="card-text service  mt-2"  style={{textAlign: "justify"}}>
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
