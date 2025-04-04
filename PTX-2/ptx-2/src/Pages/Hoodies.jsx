import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Hoodies() {
  useEffect(() => {
    document.title = "Hoodies - Pakistan Textile Exchange";
  }, []);

  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://plm.paktex.com/api/stylesheets")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Assuming the API returns an array of products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterOptions = ["HEAVY BOX S/S TEE 9OZ", "LIGHTWEIGHT COTTON TEE", "CLASSIC DENIM JACKET", "SLIM FIT CHINOS"];

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

  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="container-fluid">
        <h2>PRODUCTS / HOODIES</h2>
        <hr style={{ borderBottom: "1px solid #ccc" }} />
        <div className="text-start mb-3">
          <button className="btn btn-outline-dark" onClick={() => setShowSidebar(!showSidebar)}>
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
                            <p className="form-check-label text-muted">{option}</p>
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
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="custom-card">
                    <img
                      src={product.imageUrl || "default-image.jpg"}
                      className="card-img-top"
                      alt="Product"
                      onClick={() =>
                        navigate(`/ProductDetails/${product.id}`, {
                          state: { product },
                        })
                      }
                    />
                  </div>
                  <p className="card-text text-center">{product.name}</p>
                  <p className="text-muted text-center">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
