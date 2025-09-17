import { useEffect } from "react";
import React from "react";
import "./Login.style.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "Account - Pakistan Textile Exchange";
  }, []);

  return (
    <>
      <div className="space"></div>

      <div className="login-container d-flex flex-column align-items-center">
        <div className="login-card shadow-lg">
          <h2 className="text-center mb-3">Welcome Back</h2>
          <p className="text-center text-muted">
            Don’t have an account? <Link to="/signup">Sign up here</Link>
          </p>

          <form className="signin-form">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <button type="button" className="btn btn-dark w-50">
                Sign In
              </button>
              <Link to="#" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
