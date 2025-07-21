import { useEffect } from "react";
import React from "react";
import "./Login.style.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
export default function Login() {
  useEffect(()=>{
    document.title="Account - Pakistan Textile Exchange"
  })
  return (
    <>
 
      
      <div className="text-container pt-5">
        <h1>SIGN IN</h1>
        <p>Dont have an account?<Link to="/signup"> Sign up here</Link> </p>
        <div className="page-container">
          <div className="signin-container">
            <form className="signin-form">
              <input type="text" className="full-width" placeholder="Email" />
              <br />
              <input
                type="Password"
                className="full-width"
                placeholder="Passward"
              />
              <br />
              <div className="row">
                <div className="col-9 text-start">
                  <button type="button" class="btn btn-dark w-50">
                    SIGN IN
                  </button>
                </div>
                <div className="col-3">
                  <p className="text-start"><Link to="#">Forgot Password?</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
