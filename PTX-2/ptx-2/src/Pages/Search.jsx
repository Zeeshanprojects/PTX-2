import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import './Search.style.css';
import ScrollReveal from "../Components/ScrollReveal";

export default function Search() {
  useEffect(() => {
    document.title = "Search - Pakistan Textile Exchange";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state for the spinner
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    axios.get("https://ptxapi.io/api/cart")
      .then(response => {
        setProducts(response.data);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);  // Set loading to false in case of error
      });
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
    
      <div className="space"></div>
      <div className="space"></div>

      <div className="container text-center">
      
        <input
          type="text"
          className="form-control w-50 mx-auto mt-3"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ScrollReveal>
      <div className="container-fluid mt-4">
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="search-custom-card text-center">
                  <img
                    src={product.url}  
                    className="card-img-top"
                    alt={product.title}
                  />
                  <p className="card-text">{product.title}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() =>
                      navigate(`/ProductDetails/${product.id}`, { state: { product } })
                    }
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
      </ScrollReveal>
      

      <Footer />
    </>
  );
}
