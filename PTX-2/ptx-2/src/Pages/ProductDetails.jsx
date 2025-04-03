import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.style.css";

export default function ProductDetails() {
  

  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h1 className="text-center text-danger">Product Not Found</h1>;
  }

  return (
    <>
     <br/><br/>
      <div className="container mt-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.image}
              className="img-fluid custom-image"
              alt={product.title}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6 p-4 shadow-sm bg-white rounded">
            <h2 className="fw-bold">{product.title}</h2>
            <h4 className="text-danger fw-semibold">{product.price}</h4>

            {/* Product Description */}
            <p className="text-muted mt-3">
              {product.description ||
                "This is a premium quality product with the best fabric and craftsmanship."}
            </p>

            <div className="mt-4">
              <h5 className="fw-semibold mb-2">Quantity:</h5>
              <div className="d-flex align-items-center gap-3">
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
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-success px-4 py-2 fw-semibold">
                Buy Now
              </button>
              <button className="btn btn-dark px-4 py-2 fw-semibold">
                Add to Cart
              </button>
            </div>

            <div className="d-flex gap-3 mt-3 ">
              <button type="button" className="btn btn-outline-dark ps-4 pe-4">
                S
              </button>
              <button type="button" className="btn btn-outline-dark ps-4 pe-4">
                M
              </button>
              <button type="button" className="btn btn-outline-dark ps-4 pe-4">
                L
              </button>
              <button type="button" className="btn btn-outline-dark ps-4 pe-4">
                XL
              </button>
            </div>
            <hr></hr>
            <p>Product Description</p>
        <ul>
          <li>100% COTTON FLEECE</li>
          <li>15 OZ BRUSHED FLEECE</li>
          <li>OVERSIZED DROP SHOULDER</li>
          <li>PIGMENT DYE</li>
        </ul>
          </div>
        </div>
      </div>
    </>
  );
}
