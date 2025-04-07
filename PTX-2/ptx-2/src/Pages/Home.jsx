import { useEffect, useState } from "react";
import React from "react";
import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   document.title = "Pakistan Textile Exchange";

  //   fetch("https://plm.paktex.com/api/stylesheets")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetched Products:", data); // You can remove this later
  //       setProducts(data);
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

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
        <Link to="/product">
          <button type="button" className="btn btn-dark pe-3 ps-3">
            INQUIRE NOW
          </button>
        </Link>
      </div>
      <div className="space"></div>
      <h1 className="text-center">BUILDING STRONG RELATIONSHIP</h1>
      <div className="space"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 col-lg-3">
            <div className="relationship-card">
              <h5>Manufacturing</h5>
              <p>
                Our factory partners are vertically integrated, from spinning,
                knitting, dying, finishing, printing, laundry to pack.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-lg-3">
            <div className="relationship-card">
              <h5>Quality Assurance</h5>
              <p>
                Pakistan textile exchange prides itself on strict focus of
                quality assurance.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-lg-3">
            <div className="relationship-card">
              <h5>Sourcing</h5>
              <p>
                Our sourcing team are some of the best in the industry and our
                vendors are as well.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-lg-3">
            <div className="relationship-card">
              <h5>Logistics</h5>
              <p>
                Pakistan textile exchange has built an online PLM with all order
                and sampling tracking real time
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="space"></div>
<h1 className="text-center">THE FOUNDATION OF EXCELLENCE</h1>
      <div className="space"></div>

      <div className="container mb-5">
          <div className="row align-items-stretch g-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="card knowus h-100 order-1">
              <div className="card-body bg-white">
                <h3 className="card-subtitle text-muted">The Backbone of Our Company</h3>
                <p className="card-text knowusparagraph textmuted mt-3">
                There are several very factors in our business out of
                    Pakistan. Most important is quality, customer service,
                    innovation, communication and on time delivery. PTX quality
                    assurance team are on site daily inspecting yarn, knitting,
                    dye lots, cutting, sewing, finishing to entering the
                    container. It is most important for our clients to get
                    exactly what they order. Communicating this process with our
                    merchandisers is also very important and making sure orders
                    are delivered on time.Additionally, we continuously strive
                    to enhance our production techniques, invest in the latest
                    textile innovations, and adapt to global market trends. Our
                    commitment to sustainability and ethical manufacturing
                    further strengthens our reputation, ensuring that every
                    product we deliver upholds the highest standards of
                    excellence.
                </p>
              </div>
            </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="card image-containersize h-100 order-2">
                <img
                  src={Image.service8}
                  className="imagesize1 img-fluid"
                  loading="lazy"
                  alt="imagesize-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-stretch g-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="card image-container h-100 order-2">
                <img
                  src={Image.service1}
                  className="imagesize2 img-fluid"
                  loading="lazy"
                  alt="imagesize-1"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
           
               <div className="card knowus h-100 order-1">
              <div className="card-body bg-white">
                <h3 className="card-subtitle text-muted">We Provide Clothes More Than Just Stitched Fabric</h3>
                <p className="card-text  textmuted mt-3">
                Our contribution and steady way to deal with convey the
                    ideal hopes are our first concern. We unequivocally trust
                    that without our “Obligation to Excellence” there wouldn’t
                    be development and achievement.Pakistan Textile Exchange is
                    one of the leading producers of knitwear out of Pakistan
                    with staff of professional merchandisers and quality
                    assurance personnel in the industry.We believe that clothing
                    is more than just stitched fabric; it’s a reflection of
                    craftsmanship, innovation, and quality. At PTX, we focus on
                    every detail—from selecting premium yarns to ensuring the
                    finest stitching and finishing.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
      <h1 className="text-center">LATEST PRODUCTS</h1>
      <div className="space"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="card h-100">
              <img src={Image.latestproduct1} className="card-img-top latestproducts" alt="latestproduct1" />
              <div className="card-body">
                <h3 className="card-title">PTX Essential</h3>
                <p className="card-text">
                  Our wide range of quality premium essentials
                </p>
              </div>
            </div>
            
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="card h-100">
              <img src={Image.latestproduct2} className="card-img-top latestproducts" alt="latestproduct2" />
              <div className="card-body">
              <h3 className="card-title">PTX Juniors</h3>
               
                <p className="card-text">
                  Our new range of essentials for kids
                </p>
              </div>
            </div>
            
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="card h-100">
              <img src={ Image.latestproduct3} className="card-img-top latestproducts" alt="latestproduct3" />
              <div className="card-body">
                <p className="card-text">
                <h3 className="card-title">PTX Denim</h3>
                  Our collection of classic denim
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="container-fluid">
        <div className="content-card">
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
      <div className="space">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <img
            src={Image.sectionimage}
            className="img-fluid sectionimage"
            alt="sectionimage"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
