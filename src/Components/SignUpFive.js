import React, { Component } from "react";
import logo from "../images/Logo.png";
import Footer from "../Footer";
import img from "../images/img.png";

class SignUpFive extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="container-fluid">
            <div className="logo-section  text-center mt-3">
              <img width="100px" src={logo} alt={""} />
              <span className="tagline">Simple, fast, finance.</span>
            </div>
          </div>
          <div className="jumbotron vertical-center">
            <div className="container text-center">
              <div className="image mb-3">
                <img width="150px" src={img} alt={""} />
              </div>
              <h3>We’re finding the best loans for you</h3>
              <p style={{ color: "#878787", fontSize: "18px" }}>
                This might take a few seconds bear with us
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    );
  }
}

export default SignUpFive;
