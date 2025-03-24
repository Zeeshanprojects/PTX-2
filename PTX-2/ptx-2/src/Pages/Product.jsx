import React, { useState } from 'react';
import Image from '../Images/Image';
import Footer from '../Components/Footer';
import "./Product.style.css"

export default function Product() {
  
  const [showSidebar, setShowSidebar] = useState(true); // Sidebar open by default
  const [selectedFilters, setSelectedFilters] = useState([]);

  const products = [
    { image: Image.image1, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
    { image: Image.image2, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
    { image: Image.image3, title: "PREMIUM HOODIE", price: "$55.00" },
    { image: Image.image4, title: "CLASSIC DENIM JACKET", price: "$80.00" },
    { image: Image.image5, title: "SLIM FIT CHINOS", price: "$45.00" },
    { image: Image.image6, title: "SPORTS JOGGERS", price: "$40.00" },
    { image: Image.image7, title: "SPORTS JOGGERS", price: "$80.00" },
    { image: Image.image8, title: "SPORTS JOGGERS", price: "$53.00" },
    { image: Image.image9, title: "SPORTS JOGGERS", price: "$75.00" },
    { image: Image.H1, title: "HEAVY BOX S/S TEE 9OZ", price: "$35.00" },
    { image: Image.H2, title: "LIGHTWEIGHT COTTON TEE", price: "$30.00" },
    { image: Image.H3, title: "PREMIUM HOODIE", price: "$55.00" },
    { image: Image.H4, title: "CLASSIC DENIM JACKET", price: "$80.00" },
    { image: Image.H5, title: "SLIM FIT CHINOS", price: "$45.00" },
    { image: Image.H6, title: "SPORTS JOGGERS", price: "$40.00" },
    { image: Image.H7, title: "SPORTS JOGGERS", price: "$80.00" },
    { image: Image.H8, title: "SPORTS JOGGERS", price: "$53.00" },
    { image: Image.H9, title: "SPORTS JOGGERS", price: "$75.00" },
    { image: Image.H10, title: "SPORTS JOGGERS", price: "$75.00" },
   
  ];

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

  return (
    <>
      <div className="space"></div>
      <div className="space"></div>


      <div className="container-fluid">
        <h2>PRODUCTS</h2>
        <hr style={{ borderBottom: "1px solid #ccc" }}></hr>
       


        <div className="text-start mb-3">
          <button
            className="btn btn-dark"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </button>
          <hr style={{ borderBottom: "1px solid #ccc" }}></hr>
       

        </div>

        <div className="row">
          {/* Sidebar (Filters) */}
{showSidebar && (
  <div className="col-md-3" style={{ padding: "10px" }}>
    <div className="sidebar p-2">
      <h5 className="mb-3">Filter Options</h5>

      <div className="accordion" id="filterAccordion">
        {/* Category 1 */}
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

        {/* Category 2 */}
        <div className="accordion-item border-0 bg-transparent">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-transparent shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            Product Type
            </button>
          </h2>
          {/* <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#filterAccordion"
          >
            <div className="accordion-body">

              <div className="form-check">
                <input className="form-check-input me-2" type="checkbox" />
                <p className="form-check-label text-muted">T-shirts</p>
              
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
)}

          

         
   
          <div className={showSidebar ? "col-md-9" : "col-md-12"}>
        
            <div className="row">
              {filteredProducts.map((product, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="custom-card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="Product"
                    />
                  </div>
                  <p className="card-text text-center">{product.title}</p>
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
