import { useEffect } from "react";
import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Cart.style.css";

export default function Cart() {
    useEffect(()=>{
      document.title="Your Shopping Cart - Pakistan Textile Exchnage"
    })
  return (
    <>
      <div className="space"></div>
      
      <div className="space"></div>
      <div className="text-container pt-5 text-center">
        <h3>Cart</h3>
        <p>Your Cart is Empty</p>
        <div className="space"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <Link to="/">
              
                <button
                  type="button"
                  className="btn btn-outline-dark cart-btn btn-lg mx-3 "
                >
                  Home
                </button>
              </Link>
<Link to="/Product">
<button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3 "
              >
                PRODUCT
              </button>
</Link >
             
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">

                <Link to="/signup">
                <button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3  "
              >
                WHOLESALE SIGNUP
              </button>
                </Link>
             <Link to="/Contactus">
             <button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3 "
              >
                CONTACT
              </button>
             </Link>
              
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
                <Link to="/LookBook-V1">
                <button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3 "
              >
                LOOLBOOK V1
              </button>
                </Link>
              <Link to="/LookBook-V2"> <button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3 "
              >
                LOOKBOOK V2
              </button>
              </Link>
             
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
                <Link to="/privacypolicy">
                <button
                type="button"
                className="btn btn-outline-dark cart-btn btn-lg mx-3 "
              >
                PRIVACY POLICY
              </button>
                </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <Footer />
    </>
  );
}
