import { useEffect } from "react";
import React from "react";
import Images from "../Images/Image";
import Footer from "../Components/Footer";

export default function QualityAssurance() {
  useEffect(() => {
    document.title = "Quality Assurance | Pakistan Textile Exchange ";
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
      <div className="space"></div>
      <div className="space"> </div>
        <h1 className="mt-5 text-center">SERVICES / QUALITY ASSURANCE</h1>
    

      <div className="space"></div>
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img
              src={Images.service2}
              class="img-fluid h-100"
              alt="..."
              loading="lazy"
            />
          </div> */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-white">
              <h2 className="card-title service">
                Ensuring Best Apparel Quality
              </h2>

              <p className="card-text service mt-2">
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

              <p className="card-text  service mt-2">
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

              <p className="card-text  service mt-2">
                In-line product inspection or DUPRO (During Production
                Inspection) is an effective way for customers to know about the
                status of the manufacturing of an order, gain important
                information about the shipment schedule and identify defects
                early on before they affect the entire production.
              </p>
            </div>

            <div className="card-body bg-white ">
              <h2 className="card-title service mt-4">Why Choose PTX</h2>

              <p className="card-text service mt-2">
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
