import React from "react";
import Image from "../Images/Image";
import "./Footer.style.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
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
<img src={Image.logo}></img>
  {/* <hr
    className="mb-4 mt-0 d-inline-block mx-auto"
    style={{
      width: 60,
      backgroundColor: "#7c4dff",
      height: 2,
    }}
  /> */}
<br/><br/><br/>
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
      <i className="fab fa-facebook-f " style={{ fontSize: '20px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '36px', height: '36px', textAlign: 'center' }}></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2">
      <i className="fab fa-twitter" style={{ fontSize: '20px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '36px', height: '36px', textAlign: 'center' }}></i>
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="me-2">
      <i className="fab fa-tiktok" style={{ fontSize: '20px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '36px', height: '36px', textAlign: 'center' }}></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-2">
      <i className="fab fa-instagram" style={{ fontSize: '20px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '36px', height: '36px', textAlign: 'center' }}></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2">
      <i className="fab fa-linkedin-in" style={{ fontSize: '20px', color: 'black', border: '2px solid black', borderRadius: '50%', padding: '8px', width: '36px', height: '36px', textAlign: 'center' }}></i>
    </a>
  </div>
</div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-3 col-xl-3 me-auto mb-4">
                  {/* Links */}
                  <h2 className="text ">Main menu</h2>
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
                    <Link to="/Product" className="text-dark">
                      Product
                    </Link>
                  </p>
                  <p>
                    <Link to="/signup" className="text-dark">
                      Wholesale Signup
                    </Link>
                  </p>
                  <p>
                    <Link to="/Contactus" className="text-dark">
                      Contact
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
                    <Link to="/" className="text-dark">
                      Our Story
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-dark">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link to="#" className="text-dark">
                      Account
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  {/* Links */}
  <h2 className="text">Sign Up for Email</h2>
  <hr
    className="mb-4 mt-0 d-inline-block mx-auto"
    style={{
      width: 60,
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

          <div className="text-center p-3">
            © 2025 | PTX
            {/* <Link className="text-dark" to="https://mdbootstrap.com/">
                PTX
              </Link> */}
          </div>
        </footer>
      </div>
    </>
  );
}
