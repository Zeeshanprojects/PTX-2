import { useEffect, useState } from "react";
import axios from "axios";
import Image from "../Images/Image";
import "./Home.style.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home | Pakistan Textile Exchange";

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

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, );

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
        { email }
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

  const products = [
    { img: Image.latestproduct1, title: "PTX Essential" },
    { img: Image.latestproduct2, title: "PTX Juniors" },
    { img: Image.latestproduct4, title: "PTX Denim" },
    { img: Image.latestproduct5, title: "PTX Denim" },
  ];



const allImages = [
  { src: Image.img1, alt: "1" },
  { src: Image.img2, alt: "2" },
  { src: Image.img3, alt: "3" },
  { src: Image.img4, alt: "4" },
  { src: Image.img5, alt: "5" },
  { src: Image.img6, alt: "6" },
  { src: Image.img7, alt: "7" },
  { src: Image.img8, alt: "8" },
  { src: Image.img9, alt: "9" },
  { src: Image.img10, alt: "11" },
  { src: Image.img11, alt: "12" },
  { src: Image.img12, alt: "13" },
  { src: Image.img13, alt: "14" },
  { src: Image.img14, alt: "15" },
  { src: Image.img15, alt: "16" },
  { src: Image.img16, alt: "17" },
  { src: Image.img17, alt: "18" },
  { src: Image.img18, alt: "19" },
  { src: Image.img19, alt: "19" },
  { src: Image.img20, alt: "20" },
  { src: Image.img21, alt: "21" },
  { src: Image.img22, alt: "22" },
  { src: Image.img23, alt: "23" },
  { src: Image.img24, alt: "24" },
  { src: Image.img25, alt: "25" },
  { src: Image.img26, alt: "26" },
  { src: Image.img27, alt: "27" },
  { src: Image.img28, alt: "28" },
  { src: Image.img29, alt: "29" },
  { src: Image.img30, alt: "30" },
  { src: Image.img31, alt: "31" },
  { src: Image.img32, alt: "32" },
  { src: Image.img33, alt: "33" },
  { src: Image.img34, alt: "34" },
  { src: Image.img35, alt: "35" },
  { src: Image.img36, alt: "36" },
  { src: Image.img37, alt: "37" },
  { src: Image.img38, alt: "38" },
  { src: Image.img39, alt: "39" },
  { src: Image.img40, alt: "40" },
  { src: Image.img41, alt: "41" },
  { src: Image.img42, alt: "42" },
  { src: Image.img43, alt: "43" },
  { src: Image.img44, alt: "44" },
  { src: Image.img45, alt: "45" },
  { src: Image.img46, alt: "46" },
  { src: Image.img47, alt: "47" },
  { src: Image.img48, alt: "48" },
  { src: Image.img49, alt: "49" },
  { src: Image.img50, alt: "50" }, 
  { src: Image.img51, alt: "51" },
  { src: Image.img52, alt: "52" },
  { src: Image.img53, alt: "53" },
  { src: Image.img54, alt: "54" },
  { src: Image.img55, alt: "55" },
  { src: Image.img56, alt: "56" },
  { src: Image.img57, alt: "57" },
  { src: Image.img58, alt: "58" },
  { src: Image.img59, alt: "59" },
  { src: Image.img60, alt: "60" },
  { src: Image.img61, alt: "61" },
  { src: Image.img62, alt: "62" },
  { src: Image.img63, alt: "63" },
  { src: Image.img64, alt: "64" },
  { src: Image.img65, alt: "65" },
  { src: Image.img66, alt: "66" },
  { src: Image.img67, alt: "67" },
  { src: Image.img68, alt: "68" },
  { src: Image.img69, alt: "69" },
       
];

// Shuffle helper
const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Split into 3 non-repeating rows
const splitIntoRows = (arr) => {
  const shuffled = shuffle(arr);
  const rowSize = Math.floor(shuffled.length / 3);
  return [
    shuffled.slice(0, rowSize),
    shuffled.slice(rowSize, rowSize * 2),
    shuffled.slice(rowSize * 2)
  ];
};


 const [row1, row2, row3] = splitIntoRows(allImages);

const ScrollRow = ({ images, rowClass }) => (
  <div className={`scroll-row ${rowClass}`}>
    <div className="scroll-content">
      {images.map((img, idx) => (
        <div className="img-box" key={`${rowClass}-${idx}`}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
      {images.map((img, idx) => (
        <div className="img-box" key={`${rowClass}-dup-${idx}`}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  </div>
);

  // Bootstrap loader component
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
          <div className="container-fluid p-0 mt-5" data-aos="fade-up">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <img
            
                src={Image.bannerimage}
                alt="ptx-banner-image"
                className="ptx-banner-image"
                fetchPriority="high"
              />
            </div>
          </div>
          <br />
          <div className="space"></div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-center fw-bold " loading="lazy">BUILDING STRONG RELATIONSHIP</h1>
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
          <div className="section-heading text-center mt-5" data-aos="fade-up">
            <h1 className="categories-title fw-bold ">CATEGORIES</h1>
            <p className="categories-subtitle">
              Explore our latest curated product categories
            </p>
          </div>
          <div className="container-fluid latest-products-section" data-aos="fade-up">
            <div className="row g-0">
              {products.map((product, index) => (
                <div key={index} className="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <div className="product-box">
                    <img
                      src={product.img}
                      className="product-image"
                      alt={product.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space"></div>
          <div className="content-card" data-aos="fade-up">
            <p className="card-subtitle">WHO WE ARE?</p>
            <h1 className="card-title mt-3">Pakistan Textile Exchange</h1>
            <p className="card-description">
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
              <button type="button" className="btn btn-dark px-5 inquirebutton">
                INQUIRE NOW
              </button>
            </Link>
          </div>
          <div className="space"></div>
          <div className="container my-5" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0 h-100">
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
                <div className="d-flex flex-wrap gap-3 justify-content-center my-4 custom-box">
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
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 h-100">
                <video
                  data-aos="fade-up"
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  muted
                  loop
                  loading="lazy"
                >
                  <source src="/PTX-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <br />
          <div className="app-container" data-aos="fade-up">
            <ScrollRow images={row1} rowClass="row1" />
            <ScrollRow images={row2} rowClass="row2" />
            <ScrollRow images={row3} rowClass="row3" />
          </div>
          <div className="space"></div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-center fw-bold fs-1">BLOGS</h1>
            <p>Insights, Stories, and Industry Trends</p>
          </div>
          <div className="container blog-section p-2" data-aos="fade-up">
            <div className="row g-4">
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
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <Link to="/blog3" className="text-decoration-none text-dark">
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
          <div className="container mb-5" data-aos="fade-up">
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
          <Footer />
        </>
      )}
    </>
  );
}