import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
        <h1 className="mt-5 text-center">
          GALLERY
        </h1>
      </div>
      <br />

      {/* Nav Tabs */}
      <ul className="nav justify-content-center gallery-tabs color">
        {navLinks.map((link, i) => (
          <li className="nav-item" key={link.name}>
            <Link className="nav-link color text-muted" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
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
              <div className="col-md-3 mb-3" key={index}>
                <div className="gallery-card">
                  <img src={item.url} alt={`Gallery-${index}`} />
                  <h2 className="hover-caption text-align-center">
                    {item.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
