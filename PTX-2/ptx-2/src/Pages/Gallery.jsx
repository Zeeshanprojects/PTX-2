import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";

    // Fetching gallery data from backend API
    axios.get("https://ptxapi.io/api/gallery")
      .then(response => {
        setGalleryImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching gallery data:", error);
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
        <h1 className="mt-5 text-center">GALLERY</h1>
      </div>
      <br />

      {/* Nav Tabs */}
      <ul className="nav justify-content-center gallery-tabs color">
        {navLinks.map((link) => (
          <li className="nav-item" key={link.name}>
            <Link className="nav-link color" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <br />

      {/* Gallery Images from API */}
      <div className="container-fluid">
        <div className="row">
          {galleryImages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={item.url} alt={`Gallery-${index}`} />
                <h2 className="hover-caption text-align-center">{item.text}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
