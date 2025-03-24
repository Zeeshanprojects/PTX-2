
import React, { useState } from "react";
import Image from "../Images/Image"; // Import your images
import { Link } from "react-router-dom"; // If using React Router
import Footer from "../Components/Footer";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    // Dummy Product List
    const products = [
      { image: Image.image1, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
      { image: Image.image2, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
      { image: Image.image3, title: "PREMIUM HOODIE", price: "$55.00" },
      { image: Image.image4, title: "CLASSIC DENIM JACKET", price: "$80.00" },
      { image: Image.image6, title: "SLIM FIT CHINOS", price: "$45.00" },
      { image: Image.image7, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
      { image: Image.image8, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
      { image: Image.image9, title: "PREMIUM HOODIE", price: "$55.00" },
      { image: Image.H1, title: "CLASSIC DENIM JACKET", price: "$80.00" },
      { image: Image.H2, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
      { image: Image.H3, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
      { image: Image.H4, title: "PREMIUM HOODIE", price: "$55.00" },
      { image: Image.H5, title: "CLASSIC DENIM JACKET", price: "$80.00" },
      { image: Image.H6, title: "SLIM FIT CHINOS", price: "$45.00" },
      { image: Image.H7, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
      { image: Image.H8, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
      { image: Image.H9, title: "PREMIUM HOODIE", price: "$55.00" },
      { image: Image.H10, title: "CLASSIC DENIM JACKET", price: "$80.00" },
    ];
  
    // Filter products based on search term
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
   <>
<div className="space"></div>
      <div className="container text-center">
        <h2>Search Products</h2>
        <input
          type="text"
          className="form-control w-50 mx-auto mt-3"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container mt-4">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                <div className="custom-card text-center">
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <p className="card-text">{product.title}</p>
                  <p className="text-muted">{product.price}</p>
                  <Link to="/product-details" className="btn btn-dark">View Product</Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted mt-3">No products found!</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
   </>
  )
}
