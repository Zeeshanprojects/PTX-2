import { useEffect } from "react";
import React from "react";
import Image from "../Images/Image";
import "./Home.style.css";
import {Link} from "react-router-dom"
import Footer from "../Components/Footer";
export default function Home() {
  useEffect(()=>{
    document.title="Pakistan Textile Exchange"
  })
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Image.slider1}
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider2}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/Product">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg banner-btn"
                    >
                      VIEW PRODUCTS
                    </button>
                    </Link>
                  
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider3}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/Product">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg banner-btn"
                    >
                      VIEW PRODUCTS
                    </button>
                    </Link>
                  
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider4}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/Products">
                    <button
                      type="button"
                      className="btn btn-light btn-lg banner-btn"
                    >
                      VIEW PRODUCTS
                    </button>
                    </Link>
                 
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider5}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider6}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <h2 className="text-center">Best Sellers</h2>
      <div className="btn-container">
        <button type="button" class="btn btn-dark pe-3 ps-3 ">
          SHOP NOW 
        </button>
      </div>
      <div className="space"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image1} class="card-img-top" alt="..." />{" "}
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9oz-Limo Black /S
            </p>
            <p className="text-muted text-center">$35.00</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image2} class="card-img-top" alt="..." />
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9OZ- Blanc White /S
            </p>
            <p className="text-muted text-center">$35.00</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image3} class="card-img-top" alt="..." />
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9OZ- Vintage Camel /S
            </p>
            <p className="text-muted text-center">$35.00</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image4} class="card-img-top" alt="..." />
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9OZ- Vintage Black /S
            </p>
            <p className="text-muted text-center">$35.00</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image5} class="card-img-top" alt="..." />
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9OZ- Vintage Maog /S
            </p>
     
            <p className="text-muted text-center">$33.00</p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="custom-card">
              <img src={Image.image6} class="card-img-top" alt="..." />
            </div>
            <br />
            <p class="card-text text-center">
              HEAVY BOX S/S TEE 9OZ- Vintage Olive /S
            </p>
            <p className="text-muted text-center">$35.00</p>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="container-fluid">
        <div className="content-card">
          <p className="card-text">WHO WE ARE?</p>
          <h1>Cotton Collective is...</h1>
          <p className="card-text">
            an apparel manufacturing company created to fill the blank spaces in
            the market and give an elevated heavyweight garment to our
            customers. We have a combined fifty years of experience in fashion
            apparel and strive to produce a level of excellence that has been
            unseen in the market.
          </p>
          <button type="button" class="btn btn-dark ps-4 pe-4">
            READY FOR US
          </button>
        </div>
      </div>
      <div className="space"></div>

      <div className="space">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <img
            src={Image.sectionimage}
            class="img-fluid sectionimage"
            alt="sectionimage"
          />
        </div>
      </div>
    <Footer/>
    </>
  );
}
