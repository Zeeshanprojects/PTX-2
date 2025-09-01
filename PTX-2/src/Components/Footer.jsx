import React from "react";
import Image from "../Images/Image";
import "./Footer.style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        {/* Footer */}
        <footer className="text-center text-lg-start text-white bg-black">
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4 text-white"></section>

          <section className="">
            <div className="container-fluid p-5 text-center text-md-start mt-3">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  {/* <img src={Image.logo} alt="logo"></img> */}
                  <img
                    src={Image.logo}
                    alt="mainlogo"
                    className="logocolor mb-3"
                  />
                  <br />
                  <br />
                  <p>
                    <Link to="/" className="text-white">
                      Laguna Beach, CA 92651
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Email: david@paktex.com
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-white">
                      Phone: +1 (949) 283-9554
                    </Link>
                  </p>

                  {/* Social Media Icons */}
                  <div className="social-icons mt-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{
                          color: "white",
                          border: "2px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                          width: "15px",
                          height: "15px",
                          textAlign: "center",
                        }}
                      />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{
                          fontSize: "5px",
                          color: "white",
                          border: "2px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                          width: "15px",
                          height: "15px",
                          textAlign: "center",
                        }}
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        style={{
                          fontSize: "5px",
                          color: "white",
                          border: "2px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                          width: "15px",
                          height: "15px",
                          textAlign: "center",
                        }}
                      />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{
                          fontSize: "5px",
                          color: "white",
                          border: "2px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                          width: "15px",
                          height: "15px",
                          textAlign: "center",
                        }}
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        style={{
                          fontSize: "5px",
                          color: "white",
                          border: "2px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                          width: "15px",
                          height: "15px",
                          textAlign: "center",
                        }}
                      />
                    </a>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 col-xl-3 me-auto mb-4">
                  {/* Links */}
                  <h2 className="footertext ">Menu</h2>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#ffffff",
                      height: 2,
                    }}
                  />
                  <p>
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </p>

                  <p>
                    <Link
                      to="https://book.paktex.com/book/ptx-company-profile/PTX-C-P"
                      className="text-white"
                      target="_blank"
                    >
                      Lookbook
                    </Link>
                  </p>

                  <p>
                    <Link to="/services" className="text-white">
                      Services
                    </Link>
                  </p>
                  <p>
                    <Link to="/Gallery" className="text-white">
                      Gallery
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 me-auto mb-4">
                  {/* Links */}
                  <h2 className="footertext ">About</h2>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <Link to="/Aboutus" className="text-white">
                      Our Story
                    </Link>
                  </p>
                  <p>
                    <Link to="/ContactUS" className="text-white">
                      Contact Us
                    </Link>
                  </p>
                    <p>
                    <Link to="/inquireform" className="text-white">
                  Inquire
                    </Link>
                  </p>
                  <p>
                    <Link to="/signup" className="text-white">
                      Account
                    </Link>
                  </p>
                </div>

                <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h2 className="footertext">Sign Up for Email</h2>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 100,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    Sign up to get first dibs on new arrivals, sales, exclusive
                    content, events and more!
                  </p>

                  <div className="email-subscribe ">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="subscribe-input"
                    />
                    <button className="subscribe-btn ms-2">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="p-2 m-2" />
          <div className="text-center pb-5">
            © 2025 |
            <Link className="text-white ms-1" to="/">
              PTX
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
