
import { useEffect,useState } from "react";
import axios from 'axios'
import { motion } from "framer-motion";

import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Pakistan Textile Exchange";
  });
const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://ptxapi.io/api/newslettersubscribers", {
        email: email,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("An error occurred while subscribing.");
    } finally {
      setLoading(false);
    }
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const productVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  const products = [
    {
      img: Image.latestproduct1,
      title: "PTX Essential",
      desc: "Our wide range of quality premium essentials",
      alt: "PTX Essential",
    },
    {
      img: Image.latestproduct2,
      title: "PTX Juniors",
      desc: "Our new range of essentials for kids",
      alt: "PTX Juniors",
    },
    {
      img: Image.latestproduct3,
      title: "PTX Denim",
      desc: "Our collection of classic denim",
      alt: "PTX Denim",
    },
  ];

  return (
    <>
      <div className="space"></div>
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
                    alt="slider1"
                    fetchPriority="high"
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <h1 className="ptx-heading">
                      PTX <br />
                      COLLECTIVE
                    </h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Image.slider2}
                    className="d-block w-100"
                    alt="slider2"
                    fetchPriority="high"
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/search">
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
                    alt="slider3"
                    fetchPriority="high"
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/search">
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
                    alt="slider4"
                    fetchPriority="high"
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/search">
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
                    alt="slider5"
                    fetchPriority="high"
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                    <Link to="/search">
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

      <div className="space"></div>
      <div className="text-center">
        <h1 className="text-center">BUILDING STRONG RELATIONSHIP</h1>
        <p className="categories-subtitle">
          Fostering Trust Through Quality and Commitment
        </p>
      </div>

      <div className="space"></div>

      <div className="container-fluid">
        <div className="row g-4">
          {[
            {
              icon: "fas fa-award",
              title: "Consistent Quality Assurance",
              desc: "We maintain strict quality control at every stage, ensuring each fabric meets international standards and earns our clients' trust.",
            },
            {
              icon: "fas fa-comments",
              title: "Transparent Communication",
              desc: "We believe in clear, timely communication to keep our partners informed and confident throughout every project.",
            },
            {
              icon: "fas fa-shipping-fast",
              title: "Reliable Service & On-Time Delivery",
              desc: "Our logistics and operations teams are dedicated to delivering every order on schedule, without compromising quality.",
            },
          ].map((card, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <motion.div
                className="relationship-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <i className={`${card.icon} relationship-icon`}></i>
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-heading text-center mt-5">
        <h1 className="categories-title">CATEGORIES</h1>
        <p className="categories-subtitle">
          Explore our latest curated product categories
        </p>
      </div>

      <br />
      <div className="container latest-products-section">
        <div className="row g-4 ">
          {products.map((product, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-4">
              <motion.div
                className="product-box"
                variants={productVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={product.img}
                  className="product-image"
                  alt={product.alt}
                />
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>

      <motion.div
        className="content-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="card-subtitle">WHO WE ARE?</p>
        <h1 className="card-title">Pakistan Textile Exchange</h1>
        <p className="card-description">
          Paktex is a professional apparel sourcing group offering exceptional
          quality assurance, logistics, import and retail solutions, along with
          full social compliance.
        </p>

        <Link to="/inquireform">
          <button type="button" className="btn btn-dark px-4 py-2 mt-3">
            INQUIRE NOW
          </button>
        </Link>
      </motion.div>

      <div className="space"></div>
      <div className="container my-5">
        <div className="row align-items-center ">
          {/* Left Column: Text */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="heading-size">OUR FACTORY PRODUCTION</h1>
            <p className="fw-bold">
              Where Innovation Meets Craftsmanship in Every Stitch
            </p>
            <p className="factory-para">
              At our state-of-the-art textile facility, we specialize in the
              production of high-quality fabrics ranging from denim to woven and
              knitwear. From yarn spinning to final finishing, each process is
              carefully monitored under strict quality controls. Our production
              floor is equipped with modern looms, automated dyeing units, and
              precision cutting machines to maintain accuracy and minimize
              waste. Sustainability is also a key pillar of our operations —
              we’ve adopted eco-friendly practices in water usage, chemical
              handling, and energy management.
            </p>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="custom-image-grid">
              {[Image.p1, Image.p2, Image.p3, Image.p4].map((src) => (
                <motion.div
                  className="factory-col"
                  key={src}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img src={src} alt="Factory" className="factory-image" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <br />
      <div className="text-center">
        <h1 className="text-center fw-bold fs-1">BLOGS</h1>
        <p>Insights, Stories, and Industry Trends</p>
      </div>

      <div className="container blog-section p-2">
        <div className="row g-4">
          {/* Blog Card 1 */}
          <motion.div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/blog1" className="text-decoration-none text-dark">
              <div className="blog-box">
                <div className="blog-img-wrapper">
                  <img
                    src={Image.Blog1}
                    alt="blog-1"
                    className="blog-img"
                    loading="lazy"
                  />
                </div>
                <div className="blog-body">
                  <h3 className="blog-heading">Fashion Trends 2025</h3>
                  <p className="blog-text">
                    Discover what's shaping the clothing world this year—from
                    eco fabrics to minimalist design.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/blog2" className="text-decoration-none text-dark">
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
                  <h3 className="blog-heading">Behind The Stitch</h3>
                  <p className="blog-text">
                    A deep dive into how our premium clothing is made with
                    quality, precision, and passion.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/blog3" className="text-decoration-none text-dark">
              <div className="blog-box">
                <div className="blog-img-wrapper">
                  <img
                    src={Image.Blog3}
                    alt="blog-2"
                    className="blog-img"
                    loading="lazy"
                  />
                </div>
                <div className="blog-body">
                  <h3 className="blog-heading">Global Threads</h3>
                  <p className="blog-text">
                    Markets served, quality standards, how your company stands
                    out globally
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="space"></div>
   
      {/* <div className="w-100 py-5" style={{ backgroundColor: "#000" }}>
      <div className="container text-white text-center">
        <h2 className="fw-bold mb-3">Subscribe to Our Channel</h2>
        <p className="mb-4">
          Stay updated with the latest videos, tutorials, and industry insights. Enter your email below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3"
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              maxWidth: "300px",
              border: "none",
              padding: "0.75rem 1rem",
            }}
          />
          <button
            type="submit"
            className="btn btn-outline-light px-4 py-2"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div> */}
     <motion.div
      className="w-100 py-5"
      style={{ backgroundColor: "#000" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container text-white text-center">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Subscribe to Our Channel
        </motion.h2>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Stay updated with the latest videos, tutorials, and industry insights. Enter your email below.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              maxWidth: "300px",
              border: "none",
              padding: "0.75rem 1rem",
            }}
          />
          <motion.button
            type="submit"
            className="btn btn-outline-light px-4 py-2"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  
      <div className="space">
        <div className="space"></div>
        <h1 className="text-center">WHY CHOOSE US?</h1>
        <div className="space"></div>
        <div className="container">
          <div className="row g-4">
            {[
              { icon: "fas fa-tshirt", text: "Premium Quality Fabrics" },
              { icon: "fas fa-recycle", text: "Sustainable Manufacturing" },
              { icon: "fas fa-shipping-fast", text: "On-Time Global Delivery" },
            ].map((item, i) => (
              <div key={i} className="col-md-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <i className={`${item.icon} fa-3x mb-3`}></i>
                  <p>{item.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="space">
          <motion.div
            className="col-12 col-sm-12 col-md-12 col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={Image.sectionimage}
              className="sectionimage"
              alt="section"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
