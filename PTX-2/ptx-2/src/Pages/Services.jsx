import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.style.css";
import Footer from "../Components/Footer";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Pakistan Textile Exchange ";
  });
  return (
    <>
<div className="space"></div>
        <h1 className="mt-5 text-center">SERVICES</h1>
    
      <div className="space"></div>
      <div className="services-container">
        <div className="service-row">
          <div className="service-col ">
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-card-body d-flex flex-column flex-grow-1">
                <h5 className="service-card-title">Manufacturing</h5>
                <p className="service-card-text mt-2">
                  We ensure premium fabric selection, advanced stitching
                  techniques, and strict quality control to deliver superior
                  textile products.
                </p>
                <br />
                <Link to="/Manufacturing" className="mt-auto">
                  <button type="button" className="btn btn-outline-dark">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-card-body d-flex flex-column flex-grow-1">
                <h5 className="service-card-title">Quality Assurance</h5>
                <p className="service-card-text">
                  Our rigorous inspection processes guarantee that every fabric
                  and garment meets durability, resilience, comfort, and
                  industry benchmarks.
                </p>
                <br />
                <Link to="/QualityAssurance" className="mt-auto">
                  <button type="button" className="btn btn-outline-dark">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-card-body d-flex flex-column flex-grow-1">
                <h5 className="service-card-title">Logistics</h5>
                <p className="service-card-text mt-2">
                  From warehousing to distribution, we manage efficient
                  logistics to ensure smooth, on-time shipments across global
                  markets.
                </p>
                <br />
                <Link to="/Logistics" className="mt-auto ">
                  <button type="button" className="btn btn-outline-dark">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="service-row">
          <div className="service-col">
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-card-body d-flex flex-column flex-grow-1">
                <h5 className="service-card-title">Sourcing</h5>
                <p className="service-card-text">
                  We procure premium fabrics and raw materials from trusted
                  suppliers to meet the evolving demands of the fashion
                  industry.
                </p>
                <br />
                <Link to="/Sourcing" className="mt-auto">
                  <button type="button" className="btn btn-outline-dark">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-card-body d-flex flex-column flex-grow-1">
                <h5 className="service-card-title">Studio</h5>
                <p className="service-card-text">
                  Our creative studio brings unique textile concepts to life
                  with trend-driven designs, custom patterns, and branding
                  solutions.
                </p>
                <br />
                <Link to="/Studio" className="mt-auto">
                  <button type="button" className="btn btn-outline-dark">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <Footer/>
    </>
  );
}
