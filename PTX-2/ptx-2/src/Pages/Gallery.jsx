import React, { useEffect } from "react";
import Image from "../Images/Image";
import "./Gallery.style.css";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
  }, []);

  const KNITS = [
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
  ];

  const DENIM = [
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
    Image.service1,
  ];

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-heading">Gallery</h1>

      <div className="category-section">
        <h2 className="category-title">KNITS</h2>
        <div className="gallery-grid">
          {KNITS.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`knits-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2 className="category-title">DENIM</h2>
        <div className="gallery-grid">
          {DENIM.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`denim-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
