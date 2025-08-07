import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./Gallery.style.css";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Gallery | Pakistan Textile Exchange";
    axios
      .get("https://ptxapi.io/api/gallery")
      .then((response) => {
        setGalleryImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      });
  }, []);
  console.log("https://ptxapi.io/api/gallery");


  return (
    <>
      <div className="background-color">
        <h1 className="mt-5 text-center">GALLERY</h1>
      </div>
      <br />

      <br />

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {galleryImages.map((item, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <div className="gallery-card">
                  <img src={item.url} alt={`Gallery-${index}`} />
                  <h2 className="hover-caption text-align-center">
                    {item.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
