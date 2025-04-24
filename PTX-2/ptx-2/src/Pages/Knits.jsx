import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function KnitsGallery() {
  const [knitsImages, setKnitsImages] = useState([]);

  useEffect(() => {
    document.title = "Knits Gallery | Pakistan Textile Exchange";

    // Fetch knits gallery data from backend
    axios.get("https://ptxapi.io/api/knit")
      .then(response => {
        setKnitsImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching knits data:", error);
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
        <h1 className="mt-5 text-center">KNIT GALLERY</h1>
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

      {/* Dynamic Image Grid */}
      <div className="container-fluid mt-4">
        <div className="row">
          {knitsImages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={item.url} alt={`Knit-${index}`} />
                <h2 className="hover-caption text-align-center">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
