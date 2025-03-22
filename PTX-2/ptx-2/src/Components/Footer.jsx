import React from "react";
import "./Footer.style.css"
import {Link} from "react-router-dom"
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
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <h2 className="text ">Newsletter</h2>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: 60,
                        backgroundColor: "#7c4dff",
                        height: 2,
                      }}
                    />
                    <p>
                      Subscribe to get special offers, free giveaways, and
                      once-in-Link-lifetime deals.
                      <br />
                      <br />
                      <div className="form-groups">
                        <input type="text" placeholder=" NAME" required />
                      </div>
                      <div className="form-groups">
                        <br />
                        <input type="email" placeholder="EMAIL" required />
                      </div>
                      <br />
                      <button
                        type="button"
                        class="btn btn-light w-100 text-muted"
                      >
                        Join
                      </button>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
                      <Link href="/" className="text-dark">
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link href="/Product" className="text-dark">
                        Product
                      </Link>
                    </p>
                    <p>
                      <Link href="/signup" className="text-dark">
                        Wholesale Signup
                      </Link>
                    </p>
                    <p>
                      <Link href="/Contact" className="text-dark">
                        Contact
                      </Link>
                    </p>
                    <p>
                      <Link href="/LookBook-V1" className="text-dark">
                        LOOKBOOK V1
                      </Link>
                    </p>
                    <p>
                      <Link href="/LookBook-V2" className="text-dark">
                        LOOKBOOK V2
                      </Link>
                    </p>
                    <p>
                      <Link href="/privacypolicy" className="text-dark">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h2 className="text ">Contact</h2>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: 60,
                        backgroundColor: "#7c4dff",
                        height: 2,
                      }}
                    />
                    <p>
                      Please email us any questions or concerns you have and
                      we’ll do our best to get back to you as quickly as
                      possible.
                    </p>
                    <p>orders@cottoncollective.org</p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-3"
              
            >
              © 2020 Copyright:
              <Link className="text-dark" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </Link>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        </div>
        {/* End of .container */}
      </>
   
  );
}
