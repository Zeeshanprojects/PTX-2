import React, { useState, useEffect } from "react";
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
  }, []);

  const categories = {
    KNITS: [Image.Gallery1, Image.Gallery3, Image.Gallery4, Image.Gallery5, Image.Gallery6, Image.Gallery7],
    DENIM: [Image.Gallery8, Image.Gallery9, Image.Gallery10, Image.Gallery11, Image.Gallery12, Image.Gallery13, Image.Gallery14],
    WOVEN: [Image.Gallery15, Image.Gallery16, Image.Gallery17, Image.Gallery19, Image.Gallery20, Image.Gallery21],
    OUTWEAR: [Image.Gallery22, Image.Gallery25, Image.Gallery26, Image.Gallery27],
  };

  const [activeCategory, setActiveCategory] = useState("KNITS");

  return (
    <div className="gallery-wrapper">
      <h1 className="text-center mt-5">GALLERY</h1>
      

      {/* Bootstrap Nav-style Tabs */}
      <ul className="nav justify-content-center gallery-tabs">
        {Object.keys(categories).map((category) => (
          <li className="nav-item" key={category}>
            <button
              className={`nav-link color ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <br/>

      <div className="container-fluid">
        <div className="row">
          {categories[activeCategory].map((img, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-card">
                <img src={img} alt={`${activeCategory}-${index}`} />
                <h2 className="hover-caption text-align-center">{activeCategory}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
