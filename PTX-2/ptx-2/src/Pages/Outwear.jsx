import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function OutwearGallery() {
  const [outwearImages, setOutwearImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Outwear Gallery | Pakistan Textile Exchange";

    axios
      .get("https://ptxapi.io/api/outwear")
      .then((response) => {
        setOutwearImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching outwear data:", error);
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
        <h1 className="mt-5 text-center">OUTWEAR GALLERY</h1>
      </div>
      <br />

      {/* Navigation Tabs */}
      <ul className="nav justify-content-center gallery-tabs color">
        {navLinks.map((link, i) => (
          <li className="nav-item" key={link.name}>
            <Link className="nav-link color text-muted" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Displaying Loading Spinner or Images */}
      <div className="container-fluid mt-4">
        {loading ? (
          <div className="text-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {outwearImages.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="gallery-card">
                  <img src={item.url} alt={`Outwear-${index}`} />
                  <h2 className="hover-caption text-align-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
