import React, { useState, useEffect } from "react";
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
  }, []);

  const categories = {
    KNITS: [
      Image.Gallery1,
      Image.Gallery2,
      Image.Gallery3,
      Image.Gallery4,
      Image.Gallery7,
      
      
      
    ],
    DENIM: [
     
      Image.Gallery8,
      Image.Gallery9,
      Image.Gallery10,
      Image.Gallery13,
      Image.Gallery14,
    ],
    WOVEN: [
      Image.Gallery15,
      Image.Gallery16,
      Image.Gallery19,
      Image.Gallery20,
      Image.Gallery21,
    ],
    
    OUTWEAR: [
      Image.Gallery22,
      Image.Gallery25,
      Image.Gallery26,
      Image.Gallery27,
     
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
