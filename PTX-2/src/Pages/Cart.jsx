import React, { useContext, useEffect } from "react";
import { CartContext } from "../Components/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.style.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Your Shopping Cart - Pakistan Textile Exchange";
  }, []);

  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <br />
        <h2 className="mt-5">Your Cart is Empty</h2>
        <Link to="/search">
          <button className="btn btn-dark mt-3">Go to Products Page</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="space"></div>
      <br />
      <div className="container-fluid py-5">
        <h2 className="text-center">Your Shopping Cart</h2>
        <div className="d-flex justify-content-center">
          <Link to="/search">
            <button className="btn btn-dark mt-1">Back to Products Page</button>
          </Link>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 cart-item">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.url || item.image}
                      alt={item.title}
                      className="img-fluids rounded-start"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <button
                      className="btn btn-outline-danger btn-sm mt-4"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Checkout Button */}
            <div className="text-end">
              <button
                className="btn btn-dark mt-3"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
