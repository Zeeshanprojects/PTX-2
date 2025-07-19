import { useEffect } from "react";
import React from "react";
import Images from "../Images/Image";
import Footer from "../Components/Footer";


export default function Studio() {
  useEffect(() => {
    document.title = "Studio | Pakistan Textile Exchange";
  });
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Images.pdf;
    link.download = "Zeeshan-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
     <div className="background-color">
     <h1 className="mt-5 text-center">SERVICES / STUDIO</h1>
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
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDownload}
            >
              Download LookBook
            </button>
          </div>
        </div>
      </div>

     
      <div className="space"></div>
    
     
<Footer/>
    </>
  );
}
