import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "./Gallery.style.css";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
    axios
      .get("https://ptxapi.io/api/gallery")
      .then((response) => {
        setGalleryImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      });
  }, []);

  const navLinks = [
    { name: "GALLERY", path: "/Gallery" },
    { name: "KNITS", path: "/knits" },
    { name: "DENIM", path: "/denim" },
    { name: "WOVEN", path: "/woven" },
    { name: "OUTWEAR", path: "/outwear" },
  ];

  return (
    <>
      <div className="background-color">
        <motion.h1
          className="mt-5 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          GALLERY
        </motion.h1>
      </div>
      <br />

      {/* Nav Tabs */}
      <motion.ul
        className="nav justify-content-center gallery-tabs color"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {navLinks.map((link, i) => (
          <motion.li
            className="nav-item"
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          >
            <Link className="nav-link color text-muted" to={link.path}>
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <br />

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {galleryImages.map((item, index) => (
              <motion.div
                className="col-md-3 mb-3"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="gallery-card">
                  <img src={item.url} alt={`Gallery-${index}`} />
                  <h2 className="hover-caption text-align-center">
                    {item.text}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
