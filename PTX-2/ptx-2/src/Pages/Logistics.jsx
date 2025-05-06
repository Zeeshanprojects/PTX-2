import { useEffect } from "react";
import React from "react";
import Images from "../Images/Image";
import Footer from "../Components/Footer";

export default function Logistics() {
  useEffect(() => {
    document.title = "Logistics | Pakistan Textile Exchange ";
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
        <h1 className="mt-5 text-center">SERVICES / LOGISTICS</h1>
      </div>

<div className="space"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-transparent">
              <h2 className="card-title service">Logistics</h2>

              <p className="card-text service mt-2">
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

              <p className="card-text  service mt-2">
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

              <p className="card-text service  mt-2">
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

      <Footer />
    </>
  );
}
