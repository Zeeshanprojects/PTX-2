import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "../Images/Image";
import "./AboutUs.style.css";
import Footer from "../Components/Footer";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About | Pakistan Textile Exchange ";
  }, []);
  return (
    <>
      <motion.div
        className="background-color"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center">WHO WE ARE</h1>
      </motion.div>

      <div className="container my-5">
        <div className="row align-items-stretch g-4">
          <motion.div
            className="col-sm-12 col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="knowus p-4 rounded bg-white same-height h-100">
              <h5 className="text-uppercase text-secondary mb-3">Our Story</h5>
              <p className="text-muted">
                <strong>The Pakistan Textile Exchange</strong> is one of the
                most reliable names in apparel and accessory manufacturing in
                Pakistan. Our roots started in action sports here in Laguna
                Beach. Our production can now be seen in almost every retailer
                in the United States and Canada.
                <br />
                <br />
                Knits, Woven, Denim Apparel, along with backpacks and socks — we
                have emerged as one of the most trusted sources out of Pakistan
                for North America.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-sm-12 col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-100 rounded shadow-sm overflow-hidden">
              <img
                src={Image.p2}
                className="img-fluid storyimage w-100 h-100"
                alt="Our Story"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space"></div>
      <motion.h1
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        FROM DESIGN TO DELIVERY
      </motion.h1>

      <br />
      <div className="container my-5">
        <div className="row g-4">
          {[Image.step1, Image.step2, Image.step3].map((img, index) => (
            <motion.div
              className="col-sm-12 col-md-6 col-lg-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
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
                  <p className="service-card-text">
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
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
            <p className="text-muted">Founder & Chief Executive Officer</p>
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold ceocontent">CEO Message</h3>
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
      </motion.div>

      <Footer />
    </>
  );
}
