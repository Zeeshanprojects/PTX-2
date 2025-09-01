import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
import "./ProductDetails.style.css";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.title = "Product Details - Pakistan Textile Exchange";
  }, []);

  if (!product) {
    return <h1 className="text-center text-danger">Product Not Found</h1>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
    navigate("/cart");
  };

  return (
    <>
      <br /><br /><br />
      <div className="container my-5">
        <div className="row align-items-start">
          {/* Left: Product Image */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={product.url}
              className="product-image"
              alt={product.title}
            />
          </div>

          {/* Right: Product Details */}
          <div className="col-md-7">
            <h2 className="fw-bold">{product.title}</h2>

            <p className="text-muted mt-2">
              {product.description || "This is a premium quality product with the best fabric and craftsmanship."}
            </p>

            <ul className="list-unstyled">
              <li>✔ 100% COTTON FLEECE</li>
              <li>✔ 15 OZ BRUSHED FLEECE</li>
              <li>✔ OVERSIZED DROP SHOULDER</li>
              <li>✔ PIGMENT DYE</li>
            </ul>

            {/* Sizes */}
           
            <div className="inventory-grid my-3">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <div key={size} className="size-quantity-box">
                  <div className="size-badge">{size}</div>
                
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="fs-5">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <button className="btn btn-success w-100 py-2 fw-semibold">
                Buy Now
              </button>
              <button
                className="btn btn-dark w-100 py-2 fw-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
