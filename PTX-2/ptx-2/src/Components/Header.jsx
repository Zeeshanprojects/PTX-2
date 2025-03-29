import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../Images/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.style.css";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Function to close the navbar on small screens
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  // Function to toggle dropdown manually
  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent Bootstrap default behavior
    setDropdownOpen(!dropdownOpen);
  };

  const handleProductsClick = (event) => {
    event.preventDefault();
    navigate("/Product");
    setDropdownOpen(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Image.logo} alt="mainlogo" className="logocolor" />
          </Link>

          {/* Icons for small screens */}
          <div className="nav-icons d-flex d-lg-none">
            <Link to="/Login">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
            <Link to="/Search">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>

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

              {/* Dropdown without arrow */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  className="nav-link active" // Removed "dropdown-toggle" to remove the arrow
                  to="/Product"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded={dropdownOpen}
                  onClick={handleProductsClick}
                >
                  PRODUCTS
                </Link>

                <ul
                  className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Tshirts"
                      onClick={() => {
                        closeNavbar();
                        setDropdownOpen(false);
                      }}
                    >
                      TSHIRTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Hoodies"
                      onClick={() => {
                        closeNavbar();
                        setDropdownOpen(false);
                      }}
                    >
                      HOODIES
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/signup"
                  onClick={closeNavbar}
                >
                  WHOLESALE SIGNUP
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
                  to="/LookBook-V1"
                  onClick={closeNavbar}
                >
                  LOOKBOOK V1
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/LookBook-V2"
                  onClick={closeNavbar}
                >
                  LOOKBOOK V2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/privacypolicy"
                  onClick={closeNavbar}
                >
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>

            {/* Icons for large screens */}
            <div className="nav-icons d-none d-lg-flex">
              <Link to="/Login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
              <Link to="/Search">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </Link>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
