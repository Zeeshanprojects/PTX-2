import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  // faSearch,
  // faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.style.css";


export default function Header() {
  

  // Function to close the navbar on small screens
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Image.logo} alt="mainlogo" className="logocolor" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={closeNavbar}>
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Aboutus"
                  onClick={closeNavbar}
                >
                  ABOUT US
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Services"
                  onClick={closeNavbar}
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Contactus"
                  onClick={closeNavbar}
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Gallery"
                  onClick={closeNavbar}
                >
                  GALLERY
                </Link>
              </li>
           
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/LookBook-V1"
                  onClick={closeNavbar}
                >
                  LOOKBOOK
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center gap-1"
                  href="http://localhost:3001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  INVENTORY
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center gap-1"
                  href="http://localhost:3002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  STYLES
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              </li>
            </ul>
 {/* Icons for small screens */}
          <div className="nav-icons d-flex d-lg-none">
            <Link to="/Login">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
            {/* <Link to="/Search">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link> */}
          </div>
            {/* Icons for large screens */}
            <div className="nav-icons d-none d-lg-flex">
              <Link to="/Login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
              {/* <Link to="/Search">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Link>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
