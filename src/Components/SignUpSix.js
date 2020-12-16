import React, { Component } from "react";
import logo from "../images/Logo.png";
import Footer from "../Footer";
import logo1 from "../images/zopa.png";
import { NavLink } from "react-router-dom";

class SignUpSix extends Component {
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
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <br />
                <br />
                <h5 style={{ color: "#29262C" }}>Congratulations</h5>
                <p style={{ color: "#878787", fontSize: "0.92rem" }}>
                  You have been pre-approved for these loans
                </p>

                <div className="shadow-sm p-3 bg-white rounded">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <img width="100px" src={logo1} alt={""} />
                        <div
                          className="trustpilot-widget mt-4"
                          data-locale="en-GB"
                          data-template-id="53aa8807dec7e10d38f59f32"
                          data-businessunit-id="4c9328ce00006400050de080"
                          data-style-height="150px"
                          data-style-width="100%"
                          data-theme="light"
                        >
                          <a
                            href="https://uk.trustpilot.com/review/zopa.com"
                            target="_blank"
                          >
                            Trustpilot
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Loan requested:
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £12,000
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Terms
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          3 Years
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <label
                          style={{ marginBottom: "-10px", fontSize: "13x" }}
                        >
                          APR
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          0.15%
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Total Repayment
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £13,000
                        </h5>
                      </div>
                      <div className="col-md-1">
                        <hr />
                      </div>
                      <div className="col-md-3 mt-4 text-center">
                        <h6>Monthly repayment:</h6>
                        <h3 style={{ fontWeight: "bold" }}>£238</h3>
                        <a
                          className="btn payaca-quote mt-3"
                          style={{
                            color: " #212529",
                            backgroundColor: "#fff",
                            borderColor: "#fab62d",
                            marginBottom: "35px",
                            paddingLeft: "1.2rem",
                            paddingRight: "1.2rem",
                            fontWeight: "700",
                            borderWidth: "4px",
                            borderRadius: "2rem",
                            fontSize: " 1.2rem",
                            paddingTop: "0.2rem",
                            paddingBottom: "0.3rem"
                          }}
                        >
                          Select offer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing1"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing1"
                            style={{ fontWeight: "bold" }}
                          >
                            No early repayment fees
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 float-left">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing2"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing2"
                            style={{ fontWeight: "bold" }}
                          >
                            Award winning customer service
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-sm p-3 bg-white rounded">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <img width="100px" src={logo1} alt={""} />
                        <div
                          className="trustpilot-widget mt-4"
                          data-locale="en-GB"
                          data-template-id="53aa8807dec7e10d38f59f32"
                          data-businessunit-id="4c9328ce00006400050de080"
                          data-style-height="150px"
                          data-style-width="100%"
                          data-theme="light"
                        >
                          <a
                            href="https://uk.trustpilot.com/review/zopa.com"
                            target="_blank"
                          >
                            Trustpilot
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Loan requested:
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £12,000
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Terms
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          3 Years
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <label
                          style={{ marginBottom: "-10px", fontSize: "13x" }}
                        >
                          APR
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          0.15%
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Total Repayment
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £13,000
                        </h5>
                      </div>
                      <div className="col-md-1">
                        <hr />
                      </div>
                      <div className="col-md-3 mt-4 text-center">
                        <h6>Monthly repayment:</h6>
                        <h3 style={{ fontWeight: "bold" }}>£238</h3>
                        <a
                          className="btn payaca-quote mt-3"
                          style={{
                            color: " #212529",
                            backgroundColor: "#fff",
                            borderColor: "#fab62d",
                            marginBottom: "35px",
                            paddingLeft: "1.2rem",
                            paddingRight: "1.2rem",
                            fontWeight: "700",
                            borderWidth: "4px",
                            borderRadius: "2rem",
                            fontSize: " 1.2rem",
                            paddingTop: "0.2rem",
                            paddingBottom: "0.3rem"
                          }}
                        >
                          Select offer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing3"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing3"
                            style={{ fontWeight: "bold" }}
                          >
                            No early repayment fees
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 float-left">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing4"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing4"
                            style={{ fontWeight: "bold" }}
                          >
                            Award winning customer service
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-sm p-3 bg-white rounded">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <img width="100px" src={logo1} alt={""} />
                        <div
                          className="trustpilot-widget mt-4"
                          data-locale="en-GB"
                          data-template-id="53aa8807dec7e10d38f59f32"
                          data-businessunit-id="4c9328ce00006400050de080"
                          data-style-height="150px"
                          data-style-width="100%"
                          data-theme="light"
                        >
                          <a
                            href="https://uk.trustpilot.com/review/zopa.com"
                            target="_blank"
                          >
                            Trustpilot
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Loan requested:
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £12,000
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Terms
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          3 Years
                        </h5>
                      </div>
                      <div className="col-md-2">
                        <label
                          style={{ marginBottom: "-10px", fontSize: "13x" }}
                        >
                          APR
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          0.15%
                        </h5>
                        <label
                          style={{
                            marginBottom: "-10px",
                            fontSize: "12px"
                          }}
                        >
                          Total Repayment
                        </label>
                        <h5 style={{ fontWeight: "bold", marginTop: "-5px" }}>
                          £13,000
                        </h5>
                      </div>
                      <div className="col-md-1">
                        <hr />
                      </div>
                      <div className="col-md-3 mt-4 text-center">
                        <h6>Monthly repayment:</h6>
                        <h3 style={{ fontWeight: "bold" }}>£238</h3>
                        <NavLink to="/SignUpSeven">
                          <a
                            className="btn payaca-quote mt-3"
                            style={{
                              color: " #212529",
                              backgroundColor: "#fff",
                              borderColor: "#fab62d",
                              marginBottom: "35px",
                              paddingLeft: "1.2rem",
                              paddingRight: "1.2rem",
                              fontWeight: "700",
                              borderWidth: "4px",
                              borderRadius: "2rem",
                              fontSize: " 1.2rem",
                              paddingTop: "0.2rem",
                              paddingBottom: "0.3rem"
                            }}
                          >
                            Select offer
                          </a>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing5"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing5"
                            style={{ fontWeight: "bold" }}
                          >
                            No early repayment fees
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 float-left">
                        <div className="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlAutosizing6"
                          />
                          <label
                            className="custom-control-label"
                            for="customControlAutosizing6"
                            style={{ fontWeight: "bold" }}
                          >
                            Award winning customer service
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-1" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
      </body>
    );
  }
}

export default SignUpSix;
