import { useEffect } from "react";

import Image from "../Images/Image";
import "./AboutUs.style.css";

import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutUs() {
  useEffect(() => {
    document.title = "About | Pakistan Textile Exchange ";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
     
      <div
        className="container-fluid p-0 mt-lg-5 mt-4 position-relative"
        data-aos="fade-up"
        fetchPriority="high"
        style={{ textAlign: "center" }}
      >
        {/* Banner Image */}
        <br/>
        <div className="col-12 ">
          <img
            src={Image.banner2}
            alt="ptx-banner-image"
            className="ptx-banner-image w-100"
            fetchPriority="high"
            style={{ display: "block" ,  }}
          />
        </div>

        {/* Text Overlay */}
        <div
        className="text-overlay-size"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            
            transform: "translate(-50%, -50%)",
            color: "white",
            // fontSize: "5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
         ABOUT US
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4">
          <div className="col-sm-12 col-md-6" data-aos="fade-right">
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h3 className="text-uppercase text-secondary mb-3">Our Story</h3>
              <p className="text-muted text-justify">
                <strong>The Pakistan Textile Exchange</strong> is one of the
                most reliable names in apparel and accessory manufacturing in
                Pakistan. Our roots started in action sports here in Laguna
                Beach. Our production can now be seen in almost every retailer
                in the United States.Knits, Woven, Denim Apparel, along with
                backpacks and socks — we have emerged as one of the most trusted
                sources out of Pakistan for North America.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6" data-aos="fade-left">
            <div className="custom-image-grid" data-aos="fade-left">
              {[Image.p1, Image.p2, Image.p3, Image.p4].map((src) => (
                <div
                  className="factory-col"
                  key={src}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img src={src} alt="Factory" className="factory-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4">
          <div className="col-sm-12 col-md-6" data-aos="fade-right">
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h3 className="text-uppercase text-secondary mb-3">
                Our Mission
              </h3>
              <p className="text-muted text-justify">
                <strong>Our Mission at Pakistan Textile Exchange</strong> is to
                elevate Pakistan’s global presence in the textile and apparel
                industry by delivering superior quality, sustainable products
                with precision and innovation. We are committed to ethical
                manufacturing, cutting-edge design, and building long-term
                partnerships across North America and beyond. From premium knits
                and denim to woven garments and accessories, we strive to exceed
                expectations at every step — ensuring our clients receive
                nothing less than excellence.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6" data-aos="fade-left">
            <div className="custom-image-grid" data-aos="fade-left">
              {[Image.p5, Image.p6, Image.p7, Image.p8].map((src) => (
                <div
                  className="factory-col"
                  key={src}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img src={src} alt="Factory" className="factory-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4">
          <div className="col-sm-12 col-md-6" data-aos="fade-right">
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h3 className="text-uppercase text-secondary mb-3">Our VISION</h3>
              <p className="text-muted text-justify">
                <strong>Our Vision at Pakistan Textile Exchange</strong> is to
                become a global leader in textile innovation, sustainability,
                and ethical manufacturing. We aim to set new benchmarks in
                quality and creativity, empowering brands worldwide with
                products that reflect integrity, craftsmanship, and
                forward-thinking design. Through continuous improvement and a
                customer-first mindset, we envision a future where PTX stands as
                a symbol of trust, excellence, and responsible production in the
                global apparel industry.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6" data-aos="fade-left">
            <div className="custom-image-grid" data-aos="fade-left">
              {[Image.p9, Image.p10, Image.p11, Image.p3].map((src) => (
                <div
                  className="factory-col"
                  key={src}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img src={src} alt="Factory" className="factory-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <h1 className="text-center" data-aos="fade-up">
        FROM DESIGN TO DELIVERY
      </h1>

      <br />
      <div className="container my-5" data-aos="fade-up">
        <div className="row g-4">
          {[Image.step1, Image.step2, Image.step3].map((img, index) => (
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="service-card p-4 h-100">
                <div className="service-card-body">
                  <img src={img} alt={index + 1} className="steps" />
                  <br />
                  <br />
                  <h6 className="custom-card-title">
                    {
                      ["Design", "Materials & Manufacturing", "Delivering"][
                        index
                      ]
                    }
                  </h6>
                  <p className="text-justify">
                    {
                      [
                        "We craft innovative and trend-forward designs that blend creativity with functionality, ensuring every garment reflects the perfect balance of style and comfort.",
                        "We source high-quality fabrics and employ advanced manufacturing techniques to create durable and premium clothing with a strong focus on sustainability.",
                        "With a streamlined logistics network, we ensure timely and secure delivery of our textile products with efficiency and excellence.",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space"></div>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={Image.CEO}
              className="circle ceo-image"
              alt="CEO"
              width="100"
              height="100"
            />
            <h4 className="mt-3">David Jumani</h4>
            <p className="text-muted">Founder & Chief Apparel Officer</p>
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold ceocontent">CAO Message</h3>
            <p className="text-muted ceocontent">
              One of my first jobs was a teamster at Port Long Beach was loading
              Dole Bananas and Sunkist Oranges. I was always blown away by the
              large cargo ships arriving every week and dreamt of connecting my
              roots from Pakistan and my surf connections in Laguna Beach. Fast
              forward 25 years later and I am proud to say that dreams do come
              true.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
