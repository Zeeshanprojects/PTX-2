import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from "axios";

export default function Hoodies() {
  useEffect(() => {
    document.title = "Products / Hoddies - Pakistan Textile Exchange";
  }, []);

  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://plm.paktex.com/api/stylesheets")
      .then((response) => {
        const productData = response.data;
        if (Array.isArray(productData)) {
          setProducts(productData);
        } else {
          console.error("API response is not an array:", productData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const filterOptions = [
    "HEAVY BOX S/S TEE 9OZ",
    "LIGHTWEIGHT COTTON TEE",
    "CLASSIC DENIM JACKET",
    "SLIM FIT CHINOS",
  ];

  const handleFilterChange = (option) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(option)
        ? prevFilters.filter((filter) => filter !== option)
        : [...prevFilters, option]
    );
  };

  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter((product) => selectedFilters.includes(product.title));

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="container-fluid">
        <h2>PRODUCTS / HODDIES</h2>
        <hr style={{ borderBottom: "1px solid #ccc" }} />
        <div className="text-start mb-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </button>
          <hr style={{ borderBottom: "1px solid #ccc" }} />
        </div>

        <div className="row">
          {showSidebar && (
            <div className="col-md-3" style={{ padding: "10px" }}>
              <div className="sidebar p-2">
                <h5 className="mb-3">Filter Options</h5>
                <div className="accordion" id="filterAccordion">
                  <div className="accordion-item border-0 bg-transparent">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button bg-transparent shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Styles
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#filterAccordion"
                    >
                      <div className="accordion-body">
                        {filterOptions.map((option, index) => (
                          <div key={index} className="form-check">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterChange(option)}
                            />
                            <p className="form-check-label text-muted">
                              {option}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={showSidebar ? "col-md-9" : "col-md-12"}>
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
                    <div className="custom-card">
                      <img
                        src={product.image || "default-image.jpg"} // Ensure 'image' is the correct field
                        className="card-img-top"
                        alt={product.title}
                        onClick={() =>
                          navigate(`/ProductDetails/${product.id}`, {
                            state: { product },
                          })
                        }
                      />
                    </div>
                    <p className="card-text text-center">{product.title}</p>
                    <p className="text-muted text-center">{product.subtitle}</p>
                  </div>
                ))
              ) : (
                <p className="text-center">No products available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
