import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function OutwearGallery() {
  const [outwearImages, setOutwearImages] = useState([]);

  useEffect(() => {
    document.title = "Outwear Gallery | Pakistan Textile Exchange";

    axios.get("https://ptxapi.io/api/outwear")
      .then(response => {
        setOutwearImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching outwear data:", error);
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

      <ul className="nav justify-content-center gallery-tabs color">
        {navLinks.map((link) => (
          <li className="nav-item" key={link.name}>
            <Link className="nav-link color" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="container-fluid mt-4">
        <div className="row">
          {outwearImages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={item.url} alt={`Outwear-${index}`} />
                <h2 className="hover-caption text-align-center">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
