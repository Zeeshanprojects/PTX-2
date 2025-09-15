import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Image";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Image.logo} alt="mainlogo" className="logocolor" />
          </Link>

          {/* Toggler + Login Icon on small screens */}
          <div className="d-flex align-items-center d-lg-none">
            <Link to="/Login" className="me-2 text-white">
              <FontAwesomeIcon icon={faUser} size="lg" />
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
          </div>

          {/* Navbar Links */}
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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  QUALITY POLICY
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      QUALITY ASSURANCE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DYEING AND FINISHING
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FABRIC DIVISION
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GARMENT DIVISION
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FACTORY TOUR
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dyeing And Finishing Capacity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cutting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sampling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stitching
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Finishing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Laboratory
                    </a>
                  </li>
                </ul>
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
                  target="_blank"
                  className="nav-link active"
                  to="https://book.paktex.com/book/ptx-company-profile/PTX-C-P"
                  onClick={closeNavbar}
                >
                  LOOKBOOK
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center gap-1"
                  href="https://inventory.paktex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  INVENTORY
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              </li>

              {/* <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center gap-1"
                  href="https://styles.paktex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  STYLES
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
                </a>
              </li> */}
            </ul>

            {/* Login Icon on large screens */}
            <div className="nav-icons d-none d-lg-flex">
              <Link to="/Login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
