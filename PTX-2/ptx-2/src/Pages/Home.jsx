import { useEffect, useState } from "react";
import React from "react";
import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);


useEffect(()=>{
  document.title="Home | Pakistan Textile Exchange"
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
                    className="d-block w-100"
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
                    src={Image.slider5}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/Product">
                      <button
                        type="button"
                        className="btn btn-light btn-lg banner-btn"
                      >
                        VIEW PRODUCTS
                      </button>
                    </Link>
                  </div>
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
      <br />

      <div className="btn-container">
        <Link to="/inquireform">
          <button type="button" className="btn btn-dark pe-5 ps-5">
            INQUIRE NOW
          </button>
        </Link>
      </div>
      <div className="space"></div>
      
      <h1 className="text-center">BUILDING STRONG RELATIONSHIP</h1>
      <div className="space"></div>

      <div className="container-fluid">
  <div className="row g-4">
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="relationship-card ">
      <i className="fas fa-industry relationship-icon"></i>
      
        <h5>
          Manufacturing
        </h5>
        <p>
          Our factory partners are vertically integrated, from spinning,
          knitting, dying, finishing, printing, laundry to pack.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="relationship-card ">
      <i className="fas fa-check-circle relationship-icon"></i>
        <h5>
          Quality Assurance
        </h5>
        <p>
          Pakistan textile exchange prides itself on strict focus of
          quality assurance.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="relationship-card ">
      <i className="fas fa-search relationship-icon"></i>
        <h5>
          Sourcing
        </h5>
        <p>
          Our sourcing team are some of the best in the industry and our
          vendors are as well.
        </p>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="relationship-card ">
      <i className="fas fa-truck-moving relationship-icon"></i>
        <h5>
          Logistics
        </h5>
        
        <p>
          Pakistan textile exchange has built an online PLM with all order
          and sampling tracking real time
        </p>
      </div>
    </div>
  </div>
</div>

     
      <div className="space"></div>
      <h1 className="text-center">LATEST PRODUCTS</h1>
      <div className="space"></div>
      <div className="container latest-products-section ">
  <div className="row">
    {/* Product 1 */}
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="product-box">
        <img
          src={Image.latestproduct1}
          className="product-image"
          alt="PTX Essential"
        />
        <div className="product-info">
          <h3 className="product-title">PTX Essential</h3>
          <p className="product-description">
            Our wide range of quality premium essentials
          </p>
        </div>
      </div>
    </div>

    {/* Product 2 */}
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="product-box">
        <img
          src={Image.latestproduct2}
          className="product-image"
          alt="PTX Juniors"
        />
        <div className="product-info">
          <h3 className="product-title">PTX Juniors</h3>
          <p className="product-description">
            Our new range of essentials for kids
          </p>
        </div>
      </div>
    </div>

    {/* Product 3 */}
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="product-box">
        <img
          src={Image.latestproduct3}
          className="product-image"
          alt="PTX Denim"
        />
        <div className="product-info">
          <h3 className="product-title">PTX Denim</h3>
          <p className="product-description">
            Our collection of classic denim
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="space"></div>
 
      <div className="container-fluid">
        <div className="content-card ">
          <p className="card-text">WHO WE ARE?</p>
          <h1>Pakistan Textile Exchange...</h1>
          <p className="card-text">
            Paktex is a professional apparel sourcing group, providing quality
            assurance, logistics to import, retail solutions and social
            compliance.
          </p>
          <Link to="/product">
            <button type="button" className="btn btn-dark ps-4 pe-4">
              READY FOR US
            </button>
          </Link>
        </div>
      </div>

      <div className="space"></div>
      <h1 className="text-center">BLOGS</h1>
      <div className="space"></div>
      <div className="container blog-section">
      <div className="row g-4">
        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <Link to="/blog1" className="text-decoration-none text-dark">
            <div className="blog-box">
              <img src={Image.Blog1} alt="blog-1" className="blog-img" />
              <div className="blog-content">
                <h3 className="blog-heading">Fashion Trends 2025</h3>
                <p className="blog-text">Discover what's shaping the clothing world this year—from eco fabrics to minimalist design.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <Link to="/blog2" className="text-decoration-none text-dark">
            <div className="blog-box">
              <img src={Image.Blog2} alt="blog-2" className="blog-img" />
              <div className="blog-content">
                <h3 className="blog-heading">Behind The Stitch</h3>
                <p className="blog-text">A deep dive into how our premium clothing is made with quality, precision, and passion.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-4">
          <div className="blog-highlight">
            <h3 className="highlight-heading">Join Our Style Circle</h3>
            <p className="highlight-text">Be the first to know about exclusive drops, trends, and insider stories.</p>
            <button className="highlight-btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
   
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <img
          src={Image.sectionimage}
          className="img-fluid sectionimage"
          alt="sectionimage"
        />
      </div>

      <Footer />
    </>
  );
}
