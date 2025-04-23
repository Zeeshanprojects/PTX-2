import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image"; // Update this path if needed
import "./Gallery.style.css"; // Reuse your gallery styles

export default function OutwearGallery() {
  useEffect(() => {
    document.title = "Knits Gallery | Pakistan Textile Exchange";
  }, []);

  const OutwearImages = [
    Image.Gallery22,
    Image.Gallery25,
    Image.Gallery26,
    Image.Gallery27,
    Image.Gallery28,
  ];

  const navLinks = [
    {name : "GALLERY" , path: "/Gallery"},
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
          {OutwearImages.map((img, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={img} alt={`Knit-${index}`} />
                <h2 className="hover-caption text-align-center">KNITS</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
