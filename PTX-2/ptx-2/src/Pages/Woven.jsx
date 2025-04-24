import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function WovenGallery() {
  const [wovenImages, setWovenImages] = useState([]);

  useEffect(() => {
    document.title = "Woven Gallery | Pakistan Textile Exchange";

    axios.get("https://ptxapi.io/api/woven")
      .then(response => {
        setWovenImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching woven data:", error);
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
        <h1 className="mt-5 text-center">WOVEN GALLERY</h1>
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
          {wovenImages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={item.url} alt={`Woven-${index}`} />
                <h2 className="hover-caption text-align-center">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
