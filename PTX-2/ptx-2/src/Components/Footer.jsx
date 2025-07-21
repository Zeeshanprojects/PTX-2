import React from "react";
import Image from "../Images/Image";
import "./Footer.style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <>
    <hr class="footer-separator" />
      <div className="container-fluid ">
        
        {/* Footer */}
        <footer className="text-center text-lg-start text-dark">
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4 text-white"></section>

          <section className="">
            <div className="container-fluid text-center text-md-start mt-3">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
  {/* Content */}
<img src={Image.logo} alt="logo"></img>


  {/* <hr
    className="mb-4 mt-0 d-inline-block mx-auto"
    style={{
      width: 60,
      backgroundColor: "#7c4dff",
      height: 2,
    }}
  /> */}
<br/><br/>
  <p>
    <Link to="/" className="text-dark">
      Laguna Beach, CA 92651
    </Link>
  </p>
  <p>
    <Link to="#" className="text-dark">
      Email: david@paktex.com
    </Link>
  </p>
  <p>
    <Link to="#" className="text-dark">
      Phone: +1 (949) 283-9554
    </Link>
  </p>

  {/* Social Media Icons */}
  <div className="social-icons mt-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">
    <FontAwesomeIcon icon={faFacebookF}  style={{color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '15px', height: '15px', textAlign: 'center' }} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2">
    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '5px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '15px', height: '15px', textAlign: 'center' }} />
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="me-2">
    <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '5px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '15px', height: '15px', textAlign: 'center' }} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-2">
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '5px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '15px', height: '15px', textAlign: 'center' }} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2">
    <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '5px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '15px', height: '15px', textAlign: 'center' }} />
    </a>
  </div>
</div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-3 col-xl-3 me-auto mb-4">
                  {/* Links */}
                  <h2 className="text ">Menu</h2>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <Link to="/" className="text-dark">
                      Home
                    </Link>
                  </p>
                
                  <p>
                    <Link to="/LookBook-V1" className="text-dark">
                      LOOKBOOK
                    </Link>
                  </p>

                  <p>
                    <Link to="/privacypolicy" className="text-dark">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div className="col-md-2 col-lg-3 col-xl-3 me-auto mb-4">
                  {/* Links */}
                  <h2 className="text ">About</h2>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: 60,
                      backgroundColor: "#7c4dff",
                      height: 2,
                    }}
                  />
                  <p>
                    <Link to="/Aboutus" className="text-dark">
                      Our Story
                    </Link>
                  </p>
                  <p>
                    <Link to="/ContactUS" className="text-dark">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link to="/signup" className="text-dark">
                      Account
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  {/* Links */}
  <h1 className="text">Sign Up for Email</h1>
  <hr
    className="mb-4 mt-0 d-inline-block mx-auto"
    style={{
      width: 100,
      backgroundColor: "#7c4dff",
      height: 2,
    }}
  />
  <p>
    Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
  </p>

  <div className="email-subscribe">
    <input
      type="email"
      placeholder="Enter your email"
      className="subscribe-input"
    />
    <button className="subscribe-btn">Subscribe</button>
  </div>
</div>

              </div>
            </div>
          </section>
          <div className="text-center p-3 ">
            © 2025 |
            <Link className="text-dark ms-1" to="/">
              PTX
              </Link>
                        </div>
        </footer>
      </div>
    </>
  );
}
