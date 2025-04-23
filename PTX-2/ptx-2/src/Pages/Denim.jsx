import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function DenimGallery() {
  useEffect(() => {
    document.title = "Denim Gallery | Pakistan Textile Exchange"; // ✅ Fix the title
  }, []);

  const DenimImages = [
    Image.Gallery8,
    Image.Gallery9,
    Image.Gallery10,
    Image.Gallery11,
    Image.Gallery12,
    Image.Gallery13,
    Image.Gallery14,
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
<h1 className="text-center mt-5">DENIM GALLERY</h1>
  </div>
  <br/>

      

      {/* ✅ Use navLinks here */}
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
          {DenimImages.map((img, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={img} alt={`Denim-${index}`} />
                <h2 className="hover-caption text-align-center">DENIM</h2> {/* ✅ Fix the caption */}
              </div>
            </div>
          ))}
        </div>
      </div>
    
</>
    
  );
}
