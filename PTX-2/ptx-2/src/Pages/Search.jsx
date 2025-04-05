import React, { useState ,useEffect} from "react";
import Image from "../Images/Image"; 
import { useNavigate } from "react-router-dom"; 
import Footer from "../Components/Footer";
import './Search.style.css'

export default function Search() {
    useEffect(()=>{
      document.title="Search - Pakistan Textile Exchnage"
    })
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Dummy Product List with Unique IDs
  const products = [
    { id: 1, image: Image.image1, title: "HEAVY BOX S/S TEE 9OZ",colors: ["black", "white", "blue"] },
    { id: 2, image: Image.image2, title: "LIGHTWEIGHT COTTON TEE", colors: ["red", "gray", "yellow"] },
    { id: 3, image: Image.image3, title: "PREMIUM HOODIE",colors: ["green", "black", "white"] },
    { id: 4, image: Image.image4, title: "CLASSIC DENIM JACKET", colors: ["blue", "brown"] },
    { id: 5, image: Image.image5, title: "HEAVY BOX S/S TEE", colors: ["black", "white", "blue"] },
    { id: 6, image: Image.image6, title: "LIGHTWEIGHT COTTON TEE", colors: ["red", "gray", "yellow"] },
    { id: 7, image: Image.image7, title: "PREMIUM HOODIE", colors: ["green", "black", "white"] },
    { id: 8, image: Image.image8, title: "CLASSIC DENIM JACKET", colors: ["blue", "brown"] },
    { id: 9, image: Image.image9, title: "PREMIUM HOODIE", colors: ["green", "black", "white"] },

  ];

  // Clean and filter products
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
    <div className="space"></div>
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
            filteredProducts.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="search-custom-card text-center">
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <p className="card-text">{product.title}</p>
                 
                  <button 
                    className="btn btn-dark"
                    onClick={() => navigate(`/ProductDetails/${product.id}`, { state: { product } })}
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h3 className="text-danger mt-3">Product Not Found</h3>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
