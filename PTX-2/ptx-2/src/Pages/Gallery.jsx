import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // assuming you're using react-router
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
  }, []);

  const allImages = [
    { src: Image.Gallery1, category: "KNITS" },
    { src: Image.Gallery3, category: "KNITS" },
    { src: Image.Gallery4, category: "KNITS" },
    { src: Image.Gallery5, category: "KNITS" },
    { src: Image.Gallery6, category: "KNITS" },
    { src: Image.Gallery7, category: "KNITS" },
    { src: Image.Gallery8, category: "DENIM" },
    { src: Image.Gallery9, category: "DENIM" },
    { src: Image.Gallery10, category: "DENIM" },
    { src: Image.Gallery11, category: "DENIM" },
    { src: Image.Gallery12, category: "DENIM" },
    { src: Image.Gallery13, category: "DENIM" },
    { src: Image.Gallery14, category: "DENIM" },
    { src: Image.Gallery15, category: "WOVEN" },
    { src: Image.Gallery16, category: "WOVEN" },
    { src: Image.Gallery17, category: "WOVEN" },
    { src: Image.Gallery19, category: "WOVEN" },
    { src: Image.Gallery20, category: "WOVEN" },
    { src: Image.Gallery21, category: "WOVEN" },
    { src: Image.Gallery22, category: "OUTWEAR" },
    { src: Image.Gallery25, category: "OUTWEAR" },
    { src: Image.Gallery26, category: "OUTWEAR" },
    { src: Image.Gallery27, category: "OUTWEAR" },
  ];

  const navLinks = [
    {name :  "GALLERY" , path: "/Gallery"},
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
    <br/>

      {/* Nav Tabs linking to category pages */}
      <ul className="nav justify-content-center gallery-tabs color">
        {navLinks.map((link) => (
          <li className="nav-item" key={link.name}>
            <Link className="nav-link color" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
<br/>
      <div className="container-fluid">
        <div className="row">
          {allImages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={item.src} alt={`${item.category}-${index}`} />
                <h2 className="hover-caption text-align-center">{item.category}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  
  );
}
