import { useEffect, useState, useRef } from "react";

import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home | Pakistan Textile Exchange";
    const vid = document.createElement("video");
    vid.src = "/PTX-Video.mp4";
    vid.preload = "auto";
    vid.oncanplaythrough = () => {
      setVideoReady(true);
    };
    // Load all content (images, video) to ensure uniform loading
    const loadContent = async () => {
      const imagePromises = [
        Image.bannerimage,
        ...products.map((p) => p.img),
        Image.Blog1,
        Image.Blog2,
        Image.Blog3,
        ...allImages.map((img) => img.src),
      ].map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      const videoPromise = new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = "PTX-2/ptx-2/public/PTX-Video.mp4";
        video.onloadeddata = resolve;
        video.onerror = resolve;
      });

      await Promise.all([...imagePromises, videoPromise]);
      setIsLoaded(true);
    };

    loadContent();
  });

  const products = [
    { img: Image.latestproduct1, title: "KNITS" },
    { img: Image.latestproduct2, title: "WOVEN" },
    { img: Image.latestproduct3, title: "OUTERWEAR" },
    { img: Image.latestproduct5, title: "ACTIVEWEAR" },
    { img: Image.latestproduct4, title: "DENIM" },

    { img: Image.latestproduct6, title: "ACCESSORIES" },
  ];

  const allImages = [{ src: Image.img69, alt: "69" }];

  const Loader = () => (
    <div className="loader-overlay">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <div
            className="container-fluid p-0 mt-5 banner-wrapper"
            data-aos="fade-up"
          >
            <div className="banner-image-container">
              <img
                rel="preload"
                src={Image.bannerimage}
                alt="ptx-banner-image"
                className="ptx-banner-image"
                fetchPriority="high"
              />

              {/* Overlay Text */}
              <div className="banner-overlay">
                <h1>
                  We are Paktex,
                  <br />
                  Pakistan Textile Exchange
                </h1>
                <p>
                  PTX is a Professional apparel sourcing group offering
                  exceptional quality assurance, logistics and import solutions.
                  We also provide retail services with a strong commitment to
                  full social compliance.
                </p>
                <Link
                  to="https://book.paktex.com/book/ptx-company-profile/PTX-C-P"
                  target="_blank"
                >
                  <button className="btn btn-outline-light ps-5 pe-5  mt-3">
                    Explore Our LookBook
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <br />
          <div className="space"></div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-center fw-bold " loading="lazy">
              VALUE PROPOSITION STRIP
            </h1>
            <p className="categories-subtitle">
              Fostering Trust Through Quality and Commitment
            </p>
          </div>
          <div className="container-fluid">
            <div className="row g-4">
              {[
                {
                  icon: "fa-solid fa-gears",
                  title: "End-to-End Services",
                  desc: "Design to delivery with complete PLM tracking and seamless workflow.",
                },
                {
                  icon: "fa-solid fa-location-dot",
                  title: "Pakistan Advantage",
                  desc: "Competitive pricing supported by a skilled workforce and strong manufacturing ecosystem.",
                },
                {
                  icon: "fa-solid fa-leaf",
                  title: "Sustainability & Compliance",
                  desc: "Ethically sourced materials with global sustainability and compliance certifications.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-4 col-lg-4"
                  data-aos="fade-up"
                >
                  <div className="relationship-card border-outline text-center">
                    <i
                      className={`${card.icon} mb-3`}
                      style={{ fontSize: "60px" }}
                    ></i>

                    <h5>{card.title}</h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-heading text-center mt-5" data-aos="fade-up">
            <h1 className="categories-title fw-bold ">CATEGORIES</h1>
            <p className="categories-subtitle">
              Explore our latest curated product categories
            </p>
          </div>
          <div className="container-fluid latest-products-section">
            <div className="row g-0">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-4 "
                  data-aos="fade-up"
                >
                  <div className="product-box">
                    <img
                      src={product.img}
                      className="product-image"
                      alt={product.title}
                    />
                    <h4>{product.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space"></div>
          <div className="container my-5" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0 h-100">
                <h3 className=" fw-bold">Your Global Apparel Partner</h3>
                <h6> From Concept to Delivery</h6>
                <p className="factory-para">
                  Manufacturing, sourcing, and quality assurance powered by our
                  advanced custom PLM system. We deliver end-to-end apparel
                  solutions with precision and consistency, ensuring every
                  product meets global standards. From concept development to
                  final production, our integrated workflow guarantees
                  transparency, speed, and seamless collaboration at every
                  stage. We specialize in high-quality knits, premium denim,
                  durable outerwear, and performance-driven activewear, offering
                  complete material sourcing, mill management, product
                  engineering, and compliance oversight. With robust quality
                  checkpoints and real-time production tracking, we help brands
                  reduce lead times, optimize costs, and achieve unmatched
                  reliability across their supply chain.
                </p>
                <Link to="/Cutting" target="_blank">
                  <button className=" btn btn-outline-dark">
                    Explore Our Factory
                  </button>
                </Link>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 h-100">
                <div className="video-container">
                  {/* THUMBNAIL + PLAY BUTTON */}
                  {!playVideo && !loading && (
                    <>
                      <img
                        src={Image.Thumbnail}
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                      />

                      <div
                        className="play-button-overlay"
                        onClick={() => {
                          if (videoReady) {
                            setLoading(true); // show loader
                            setTimeout(() => {
                              setPlayVideo(true);
                              setLoading(false);
                            }, 300); // slight delay to remove flash
                          }
                        }}
                      >
                        ▶
                      </div>
                    </>
                  )}

                  {/* LOADING SPINNER */}
                  {loading && (
                    <div className="video-loader">
                      <div className="spinner"></div>
                    </div>
                  )}

                  {/* VIDEO PLAYER */}
                  {playVideo && (
                    <video
                      ref={videoRef}
                      controls
                      autoPlay
                      className="video-element"
                      onPause={() => setPlayVideo(false)}
                      onLoadedData={() => setLoading(false)}
                    >
                      <source src="/PTX-Video.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
            </div>
            <br />
            {/* <div className="container-fluid mt-5" data-aos="fade-up">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center stats-col ">
                <h1>5+</h1>
                <p>FACTORIES</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center stats-col">
                <h1>10+</h1>
                <p>CUSTOMERS</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center stats-col">
                <h1>20+</h1>
                <p>TEAM MEMBERS</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center stats-col">
                <h1>10+</h1>
                <p>YEAR</p>
              </div>
            </div>
          </div> */}
          </div>

        <div className="text-center" data-aos="fade-up">
  <h1 className="text-center fw-bold fs-1">CLIENTS</h1>
  <p>Proudly partnering with top international brands and companies</p>
</div>

<div className="container my-5" data-aos="fade-up">
  <div className="row text-center">
    {[
      "Live Nation",
      "Ripple Junction",
      "Merch Treffic",
      "Scope",
      "Bravado",
      "C&P Brands",
      "Changes",
      "Lkwid",
      "Silk City",
      "Elevated",
      "The Forecast Agency",
      "Cotton Collective"
    ].map((client, i) => (
      <div className="col-6 col-md-4 mb-4" key={i}>
        <div className="client-box">| {client} |</div>
      </div>
    ))}
  </div>
</div>

          <div className="space"></div>
          <section className="why-pakistan-section" data-aos="fade-up">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-6">
      <h2 className="why-title">Why Pakistan?</h2>
      <p className="why-intro">
        Pakistan has emerged as a strategic sourcing hub for apparel and textiles,
        offering a powerful combination of cost efficiency, market access, and
        modern manufacturing capability.
      </p>

      <h4 className="why-subtitle">Tariff & Trade Advantages</h4>
      <ul className="why-list">
        <li>
          Preferential access to key markets under various trade agreements and
          concessionary schemes.
        </li>
        <li>
          Competitive duty structures that help brands improve landed cost and
          overall margin.
        </li>
        <li>
          Strong export-focused policies that support long-term partnerships
          with international brands.
        </li>
      </ul>

      <h4 className="why-subtitle">Infrastructure & Capability</h4>
      <ul className="why-list">
        <li>
          Vertically integrated supply chain – from spinning and weaving to
          dyeing, washing, printing, and finishing.
        </li>
        <li>
          Modern factories compliant with global social, safety, and
          environmental standards.
        </li>
        <li>
          Access to major ports and logistics corridors enabling reliable,
          time-bound deliveries.
        </li>
      </ul>
    </div>

    <div className="col-md-6">
      <img
        src={Image.pakistantextile}
        alt="textile-image"
        className="why-image"
      />
    </div>
  </div>
</div>

</section>

<div className="space"></div>
          <div
            className="container-fluid position-relative p-0"
            style={{
              height: "80vh",
              backgroundImage: `url(${Image.sectionbanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* Dark overlay only on background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay (instead of filter)
                zIndex: 1,
              }}
            ></div>

            {/* Text content */}
            <div
              className="position-absolute top-50 start-50 translate-middle text-center text-white"
              style={{ width: "80%", zIndex: 2 }}
            >
              <h1 className="fw-bold text-uppercase mb-3">
                Proudly serving you best since 2005
              </h1>
              <p>
                Pakistan Textile Exchange (Paktex) is a leading apparel sourcing
                company offering complete supply chain solutions including
                product development, quality assurance, logistics, and import
                services. We partner with global brands to deliver high-quality
                garments with a strong focus on timely delivery and full social
                compliance. Backed by a network of reliable manufacturers and a
                commitment to ethical practices, Paktex ensures excellence at
                every stage—from concept to final shipment.
              </p>
              <Link to="/aboutus">
                <button
                  type="button"
                  className="btn btn-outline-light ps-5 pe-5"
                >
                  About us
                </button>
              </Link>
            </div>
          </div>

          <div className="space"></div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-center fw-bold fs-1 ">BLOGS</h1>
            <p>Insights, Stories, and Industry Trends</p>
          </div>
          <div className="container-fluid blog-section p-3" data-aos="fade-up">
            <div className="row g-4">
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="text-decoration-none text-dark">
                  <div className="blog-box">
                    <div className="blog-img-wrapper">
                      <img
                        src={Image.Blog1}
                        alt="blog-1"
                        className="blog-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-body bg-transparent">
                      <h3 className="blog-heading">FASHIONS TRENDS 2025</h3>
                      <p className="blog-text mb-3">
                        Discover what's shaping the clothing world this
                        year—from eco fabrics to minimalist design.
                      </p>
                      <Link to="/blog1 " className="pt-5 text-dark">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="text-decoration-none text-dark">
                  <div className="blog-box">
                    <div className="blog-img-wrapper">
                      <img
                        src={Image.Blog2}
                        alt="blog-2"
                        className="blog-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-body">
                      <h3 className="blog-heading">BEHIND THE STITCH</h3>
                      <p className="blog-text mb-3">
                        A deep dive into how our premium clothing is made with
                        quality, precision, and passion.
                      </p>
                      <Link to="/blog2" className="text-dark">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="text-decoration-none text-dark">
                  <div className="blog-box">
                    <div className="blog-img-wrapper">
                      <img
                        src={Image.Blog3}
                        alt="blog-3"
                        className="blog-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-body">
                      <h3 className="blog-heading">GLOBAL THREADS</h3>
                      <p className="blog-text mb-3 ">
                        Markets served, quality standards, how your company
                        stands out globally
                      </p>
                      <Link to="/blog3" className="text-dark">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}
