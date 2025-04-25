import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    document.title = "Checkout - Pakistan Textile Exchange";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Order placed successfully!");

    // Clear cart and redirect
    setCart([]);
    navigate("/");
  };

  return (
    <>
      <div className="container py-5">
        <h2 className="text-center mb-3 mt-5">Checkout</h2>

        <div className="row">
          {/* Left: Shipping Form */}
          <div className="col-md-6 mb-3">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Shipping Details</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 fw-semibold">
                  Place Order
                </button>
              </form>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Order Summary</h4>
              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                    <div>
                      <strong>{item.title}</strong> <br />
                      Quantity: {item.quantity}
                    </div>
                    <div>
                      {/* Display the product image */}
                      <img
                        src={item.url || item.image}
                        alt={item.title}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                ))
              )}
              <hr />
              <p className="text-muted">Note: Prices are currently not available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
