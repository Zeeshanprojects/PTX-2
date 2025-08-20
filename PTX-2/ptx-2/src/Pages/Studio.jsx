import { useEffect } from "react";
import React from "react";
import Image from "../Images/Image";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Studio() {
  useEffect(() => {
    document.title = "Studio | Pakistan Textile Exchange";
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
         className="text-overlay-size"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            
            transform: "translate(-50%, -50%)",
            color: "white",
            
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
     STUDIO
        </div>
      </div>
 
     <div className="space"></div>

     <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-transparent">
              <h2 className="card-title service">IT Solutions</h2>

              <p className="card-text service mt-2" style={{textAlign: "justify"}}>
                PTX stands for the Pakistan Textile Exchange, we help our
                vendors develop sound marketing campaigns, professional product
                shots, web sites to help market their services through our
                platform. We also have a team of web programmers who can assist
                brands web sites, coding and brochures to help factories and
                companies achieve the goals. This will eventually be a stand
                alone service promoting the exports and services of Pakistan.
              </p>
            </div>
            <div className="card-body bg-transparent serviceparagraph">
              <h2 className="card-title service mt-4">What are we offering?</h2>

              <p className="card-text  service mt-2" style={{textAlign: "justify"}}>
                We are professional who are responsible for the design and
                construction of websites. We ensure that sites meet user
                expectations by ensuring they look good, run smoothly and offer
                easy access points with no loading issues between pages or error
                messages We also create visual communications such as adverts,
                branding, publicity materials and magazine layouts. Our duty
                include meeting with clients to establish their needs, using
                design software to complete projects and revising projects based
                on client feedback.
              </p>
            </div>

            <div className="card-body bg-transparent ">
              <h2 className="card-title service mt-4">Why Choose PTX</h2>

              <p className="card-text service mt-2"  style={{textAlign: "justify"}}>
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
    
     
<Footer/>
    </>
  );
}
