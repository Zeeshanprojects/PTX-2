import React from "react";
import "./Login.style.css";
import Footer from "../Components/Footer";
export default function Login() {
  return (
    <>
      <div className="space"></div>
      <br />
      <div className="text-container pt-5">
        <h1>Login</h1>
        <p>Dont have an account? Sign up here</p>
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
                  <p className="text-start">Forgot Password?</p>
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
