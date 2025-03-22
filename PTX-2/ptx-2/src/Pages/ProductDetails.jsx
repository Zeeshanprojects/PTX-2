import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.style.css";

export default function ProductDetails() {
  const location = useLocation();
  const product = location.state; // Retrieve passed product data

  const [selectedColor, setSelectedColor] = useState("Black"); // Default color selection
  const [quantity, setQuantity] = useState(1); // Quantity state
  if (!product) {
    return <h2 className="text-center mt-5">No product selected.</h2>;
  }
  return (
    <>
      <div className="space"></div>
      <div className="container mt-5">
        <div className="row">
          {/* Left Column - Product Image */}
          <div className="col-md-6 text-center">
            <img src={product.image} alt="Product" className="img-fluid product-image" />
          </div>

          {/* Right Column - Product Details */}
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <h4 className="text-primary">{product.price}</h4>

            {/* Color Selection */}
            <div className="mb-3">
              <h5>Select Color:</h5>
              {["Black", "White", "Gray", "Navy"].map((color, index) => (
                <button
                  key={index}
                  className={`color-btn ${selectedColor === color ? "selected" : ""}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-3">
              <h5>Quantity:</h5>
              <input
                type="number"
                className="form-control w-25"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              />
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-primary w-50">Add to Cart</button>
              <button className="btn btn-success w-50">Buy It Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
