import { useEffect, useState } from "react";
import axios from "axios";

import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Pakistan Textile Exchange";
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

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
      const response = await axios.post(
        "https://ptxapi.io/api/newslettersubscribers",
        {
          email: email,
        }
      );

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

  // const productVariants = {
  //   hidden: { opacity: 0, scale: 0.95, y: 30 },
  //   visible: { opacity: 1, scale: 1, y: 0 },
  // };
  const products = [
    {
      img: Image.latestproduct1,
      title: "PTX Essential",
    },
    {
      img: Image.latestproduct2,
      title: "PTX Juniors",
    },
 
    {
      img: Image.latestproduct4,
      title: "PTX Denim",
    },
    {
      img: Image.latestproduct5,
      title: "PTX Denim",
    },
  ];

  const allImages = [
    { src: Image.image1, alt: "Tshirt" },
    { src: Image.LongT2, alt: "Tshirt" },
    { src: Image.Kidsimage5, alt: "Tshirt" },
    { src: Image.F1, alt: "Tshirt" },
    { src: Image.LongT3, alt: "Tshirt" },
    { src: Image.image6, alt: "Tshirt" },
    { src: Image.F4, alt: "Tshirt" },
    { src: Image.Kidsimage2, alt: "Tshirt" },
    { src: Image.image3, alt: "Tshirt" },
    { src: Image.LongT1, alt: "longT" },
    { src: Image.F7, alt: "longT" },
    { src: Image.Kidsimage1, alt: "longT" },
    { src: Image.LongT4, alt: "longT" },
    { src: Image.image5, alt: "longT" },
    { src: Image.LongT6, alt: "longT" },
    { src: Image.Kidsimage3, alt: "longT" },
    { src: Image.LongT8, alt: "longT" },
    { src: Image.Kidsimage8, alt: "longT" },
    { src: Image.F6, alt: "longT" },
    { src: Image.LongT15, alt: "longT" },
    { src: Image.LongT10, alt: "longT" },
    { src: Image.image12, alt: "longT" },
    { src: Image.Kidsimage4, alt: "Kids" },
    { src: Image.image4, alt: "Kids" },
    { src: Image.Kidsimage6, alt: "Kids" },
    { src: Image.LongT12, alt: "Kids" },
    { src: Image.F5, alt: "Kids" },
    { src: Image.F3, alt: "Kids" },
    { src: Image.LongT13, alt: "Kids" },
    { src: Image.image9, alt: "Kids" },
    { src: Image.Kidsimage7, alt: "Kids" },
    { src: Image.Kidsimage9, alt: "Kids" },
  ];

  // Shuffle function
  const shuffle = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // Randomize and split into 3 equal parts
  const shuffled = shuffle(allImages);
  const rowSize = Math.floor(shuffled.length / 3);
  const row1 = shuffled.slice(0, rowSize);
  const row2 = shuffled.slice(rowSize, rowSize * 2);
  const row3 = shuffled.slice(rowSize * 2);

  // Component to render each row with duplicate set
  const ScrollRow = ({ images, rowClass }) => (
    <div className={`scroll-row ${rowClass}`}>
      <div className="scroll-content">
        {images.map((img, idx) => (
          <div className="img-box" key={`${rowClass}-${idx}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
        {images.map((img, idx) => (
          <div className="img-box" key={`${rowClass}-dup-${idx}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div
        className="container-fluid p-0 mt-5"
        data-aos="fade-up"
        fetchPriority="high"
      >
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <img
            src={Image.bannerimage}
            alt="ptx-banner-image"
            className="ptx-banner-image"
          />
        </div>
      </div>
      <br />

      <div className="space"></div>
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-center fw-bold">BUILDING STRONG RELATIONSHIP</h1>
        <p className="categories-subtitle">
          Fostering Trust Through Quality and Commitment
        </p>
      </div>

      <div className="container-fluid" data-aos="fade-up">
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
              <div className="relationship-card border-outline">
                <i className={`${card.icon} relationship-icon`}></i>
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-heading text-center mt-5 " data-aos="fade-up">
        <h1 className="categories-title fw-bold">CATEGORIES</h1>
        <p className="categories-subtitle">
          Explore our latest curated product categories
        </p>
      </div>

      <div className="container-fluid latest-products-section " data-aos="fade-up">
        <div className="row g-0 ">
          {products.map((product, index) => (
            <div key={index} className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <div className="product-box">
                <img
                  src={product.img}
                  className="product-image"
                  alt={product.alt}
                />
                {/* <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.desc}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>
      <div className="content-card" data-aos="fade-up">
        <p className="card-subtitle">WHO WE ARE?</p>
        <h1 className="card-title mt-3">Pakistan Textile Exchange</h1>
        <p className="card-description ">
          Pakistan Textile Exchange (Paktex) is a leading apparel sourcing
          company offering complete supply chain solutions including product
          development, quality assurance, logistics, and import services. We
          partner with global brands to deliver high-quality garments with a
          strong focus on timely delivery and full social compliance. Backed by
          a network of reliable manufacturers and a commitment to ethical
          practices, Paktex ensures excellence at every stage—from concept to
          final shipment.
        </p>

        <Link to="/inquireform">
          <button type="button" className="btn btn-dark px-5 ">
            INQUIRE NOW
          </button>
        </Link>
      </div>

      <div className="space"></div>
      <div className="container my-5" data-aos="fade-up">
        <div className="row align-items-center ">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="heading-size fw-bold">OUR FACTORY PRODUCTION</h1>

            <p className="factory-para">
              At our state-of-the-art textile facility, we specialize in the
              production of high-quality fabrics ranging from denim to woven and
              knitwear. From yarn spinning to final finishing, each process is
              carefully monitored under strict quality controls. Our production
              floor is equipped with modern looms, automated dyeing units, and
              precision cutting machines to maintain accuracy and minimize
              waste. Sustainability is also a key pillar of our operations we’ve
              adopted eco-friendly practices in water usage, chemical handling,
              and energy management.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-start my-4">
              {[
                { label: "Factories", value: "5+" },
                { label: "Customers", value: "7+" },
                { label: "Team Members", value: "50+" },
                { label: "Years", value: "10+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="d-flex flex-column align-items-center p-3 rounded shadow-sm stat-box"
                >
                  <h3
                    className="fw-bold mb-1"
                    style={{ fontSize: "3rem", color: "black" }}
                  >
                    {item.value}
                  </h3>
                  <span className="text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className=" col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <video
              data-aos="fade-up"
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              loop
              play
            >
              <source src="/ptxvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <br />

      <div className="app-container">
        <div className="app-container">
          <ScrollRow images={row1} rowClass="row1" />
          <ScrollRow images={row2} rowClass="row2" />
          <ScrollRow images={row3} rowClass="row3" />
        </div>
      </div>

      <div className="space"></div>
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-center fw-bold fs-1">BLOGS</h1>
        <p>Insights, Stories, and Industry Trends</p>
      </div>

      <div className="container blog-section p-2" data-aos="fade-up">
        <div className="row g-4">
          {/* Blog Card 1 */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
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
                  <h3 className="blog-heading">FASHIONS TRENDS 2025</h3>
                  <p className="blog-text">
                    Discover what's shaping the clothing world this year—from
                    eco fabrics to minimalist design.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
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
                  <h3 className="blog-heading">BEHIND THE STITCH</h3>
                  <p className="blog-text">
                    A deep dive into how our premium clothing is made with
                    quality, precision, and passion.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div
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
                  <h3 className="blog-heading">GLOBAL THREADS</h3>
                  <p className="blog-text">
                    Markets served, quality standards, how your company stands
                    out globally
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="space"></div>

      <div className="w-100 py-5">
        <div
          className="container-fluid text-white text-center p-5 bg-black"
          data-aos="fade-up"
        >
          <h2 className="fw-bold mb-3">Subscribe to Our Channel</h2>
          <p className="mb-4">
            Stay updated with the latest videos, tutorials, and industry
            insights. Enter your email below.
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
            <button type="submit" className="btn btn-outline-light px-4 py-2">
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <h1 className="text-center fw-bold" data-aos="fade-up">
        WHY CHOOSE US?
      </h1>
      <div className="space"></div>
      <div className="container" data-aos="fade-up">
        <div className="row g-4">
          {[
            { icon: "fas fa-tshirt", text: "Premium Quality Fabrics" },
            { icon: "fas fa-recycle", text: "Sustainable Manufacturing" },
            { icon: "fas fa-shipping-fast", text: "On-Time Global Delivery" },
          ].map((item, i) => (
            <div key={i} className="col-md-4 text-center">
              <div>
                <i className={`${item.icon} fa-3x mb-3`}></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid p-0 m-0" data-aos="fade-up">
        <div className="space"></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <img
            src={Image.sectionimage}
            className="sectionimage"
            alt="section"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
