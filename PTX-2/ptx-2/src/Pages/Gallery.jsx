import React, { useState, useEffect } from "react";
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
  }, []);

  const categories = {
    KNITS: [
    
      Image.Gallery2,
      Image.Gallery3,
      Image.Gallery4,
      Image.Gallery5,
      Image.Gallery6,
      Image.Gallery7,
    ],
    DENIM: [
      Image.service6,
      Image.service2,
      Image.service3,
      Image.service4,
      Image.service15,
      Image.service16,
      Image.service17,
      Image.service18,
      Image.service19,
      Image.service20,
    ],
    WOVEN: [
      Image.service21,
      Image.service22,
      Image.service23,
      Image.service24,
      Image.service25,
      Image.service26,
      Image.service27,
      Image.service28,
      Image.service29,
      Image.service30,
    ],
    "PREMIUM ESSENTIALS": [
      Image.service31,
      Image.service32,
      Image.service33,
      Image.service34,
      Image.service35,
      Image.service36,
      Image.service37,
      Image.service38,
      Image.service39,
      Image.service40,
    ],
    CATEGORIES: [
      Image.service41,
      Image.service42,
      Image.service43,
      Image.service44,
      Image.service45,
      Image.service46,
      Image.service47,
      Image.service48,
      Image.service49,
      Image.service50,
    ],
  };
  

  const [activeCategory, setActiveCategory] = useState("KNITS");

  return (
    <div className="gallery-wrapper">
      <h1 className="text-center mt-5">GALLERY</h1>
<br/>
      <div className="gallery-tabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`tab-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container-fluid">
  <div className="row">
    {categories[activeCategory].map((img, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="gallery-card">
          <img src={img} alt={`${activeCategory}-${index}`} />
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
