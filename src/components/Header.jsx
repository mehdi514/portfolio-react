import React from "react";
import img1 from "../assets/img/profile-img.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={img1} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <NavLink to="/">Muhammad Mehdi</NavLink>
            </h1>
            <div className="social-links mt-3 text-center">
              <NavLink to="" className="twitter">
                <i className="bx bxl-twitter"></i>
              </NavLink>
              <NavLink to="" className="facebook">
                <i className="bx bxl-facebook"></i>
              </NavLink>
              <NavLink to="" className="instagram">
                <i className="bx bxl-instagram"></i>
              </NavLink>
              <NavLink to="" className="google-plus">
                <i className="bx bxl-skype"></i>
              </NavLink>
              <NavLink to="" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </NavLink>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li className="active">
                <NavLink to="/">
                  <i className="bx bx-home"></i> <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <i className="bx bx-user"></i> <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  <i className="bx bx-book-content"></i> Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="bx bx-server"></i> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <i className="bx bx-envelope"></i> Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className="icofont-navigation-menu"></i>
          </button>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </React.Fragment>
  );
};

export default Header;
