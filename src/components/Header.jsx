import React from "react";
import img1 from "../assets/img/mehdi.jpg";
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
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="" className="instagram">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="" className="google-plus">
                <i className="fab fa-google-plus"></i>
              </NavLink>
              <NavLink to="" className="linkedin">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <NavLink to="/">
                  <i className="fas fa-home"></i> <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <i className="far fa-user-circle"></i> <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume">
                  <i className="fas fa-file"></i> <span>Resume</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  <i className="fas fa-rss"></i> Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fas fa-server"></i> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <i className="fas fa-envelope"></i> Contact
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
