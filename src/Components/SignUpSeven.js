import React, { Component } from "react";
import logo from "../images/Logo.png";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

 class SignUpSeven extends Component {
//export default ({ handleChange, handleSubmit, post }) => {
  
   render() {
const value = this.state;
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
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="container mt-5">
                <div className="signup-form-steps">
                  <div className="MuiPaper-root MuiPaper-elevation0 MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel">
                    <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                      <button
                        tabindex="0"
                        className="MuiButtonBase-root MuiStepButton-root"
                        type="button"
                      >
                        <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                          <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                            <svg
                              className="MuiSvgIcon-root c314 MuiStepIcon-root MuiStepIcon-active"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="12" />
                              <text
                                className="c315"
                                x="12"
                                y="16"
                                text-anchor="middle"
                              >
                                1
                              </text>
                            </svg>
                          </span>
                          <span className="MuiStepLabel-labelContainer">
                            <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel MuiStepLabel-active">
                              1
                            </span>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                      </button>
                      <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                        <span
                          className="MuiStepConnector-line MuiStepConnector-lineHorizontal"
                          style={{ borderColor: "#f7d265" }}
                        />
                      </div>
                    </div>
                    <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                      <button
                        tabindex="0"
                        className="MuiButtonBase-root MuiStepButton-root"
                        type="button"
                      >
                        <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                          <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                            <svg
                              className="MuiSvgIcon-root c314 MuiStepIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              style={{
                                border: "none"
                              }}
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                style={{ color: "#f7d265" }}
                              />
                              <text
                                className="c315"
                                x="12"
                                y="16"
                                text-anchor="middle"
                              >
                                2
                              </text>
                            </svg>
                          </span>
                          <span className="MuiStepLabel-labelContainer">
                            <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                              2
                            </span>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                      </button>
                      <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                        <span
                          className="MuiStepConnector-line MuiStepConnector-lineHorizontal"
                          style={{ borderColor: "#f7d265" }}
                        />
                      </div>
                    </div>
                    <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                      <button
                        tabindex="0"
                        className="MuiButtonBase-root MuiStepButton-root"
                        type="button"
                      >
                        <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                          <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                            <svg
                              className="MuiSvgIcon-root c314 MuiStepIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              style={{
                                border: "none"
                              }}
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                style={{ color: "#f7d265" }}
                              />
                              <text
                                className="c315"
                                x="12"
                                y="16"
                                text-anchor="middle"
                              >
                                3
                              </text>
                            </svg>
                          </span>
                          <span className="MuiStepLabel-labelContainer">
                            <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                              3
                            </span>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                      </button>
                      <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                        <span
                          className="MuiStepConnector-line MuiStepConnector-lineHorizontal"
                          style={{ borderColor: "#f7d265" }}
                        />
                      </div>
                    </div>
                    <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                      <button
                        tabindex="0"
                        className="MuiButtonBase-root MuiStepButton-root"
                        type="button"
                      >
                        <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                          <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                            <svg
                              className="MuiSvgIcon-root c314 MuiStepIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              style={{ border: "none" }}
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                style={{ color: "#f7d265" }}
                              />
                              <text
                                className="c315"
                                x="12"
                                y="16"
                                text-anchor="middle"
                              >
                                4
                              </text>
                            </svg>
                          </span>
                          <span className="MuiStepLabel-labelContainer">
                            <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                              4
                            </span>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h5 style={{ color: "#29262C", fontWeight: "bold" }}>
                Your Address History
              </h5>
              <p style={{ color: "#878787", fontSize: "0.92rem" }}>
                We need your UK address history for the last 3 years
              </p>
              <h6 style={{ color: "#29262C" }}>Your postcode</h6>
              <div className="form-group">
                <div className="second mt-2">
                  <input
                    type="text"
                    name="postcode"
                   // onChange={handleChange}
                  //  value={this.props.value}
                    className=" form-control"
                    placeholder="Postcode"
                  />
                </div>
              </div>
              <NavLink
                to={{
                  pathname: "/SignUpEight"
                  //  hash: "" + postcode[0]
                }}
              >
                <a
                  className="btn find-my-quote text-center"
                 // onClick={handleSubmit}
                  style={{
                    color: " #212529",
                    backgroundColor: "#fab62d",
                    borderColor: "#fab62d",
                    marginBottom: "20px",
                    paddingLeft: ".8rem",
                    paddingRight: ".8rem",
                    fontWeight: "600",
                    borderWidth: "4px",
                    borderRadius: "2rem",
                    fontSize: "2rem",
                    paddingTop: ".2rem",
                    paddingBottom: ".2rem"
                  }}
                >
                  <i className="fa fa-refresh" />
                </a>
              </NavLink>
              <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
                <i className="fa fa-sync-alt" />
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlInline"
                />
                <label
                  className="custom-control-label"
                  for="customControlInline"
                >
                  I am happy to hear news and announcements from Payaca.
                </label>
              </div>
              <p>
                By submitting this form you agree to the terms of both our
                privacy policy and initial disclosure document. Quotes are
                subject to personal circumstances or lender criteria. You will
                be transferred to a panel of lenders.
              </p>

              <h6 style={{ color: "#29262C", fontWeight: "bold" }}>
                This won’t affect your credit score.
              </h6>
              <NavLink to="/SignUpEight">
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
                    fontSize: " 1rem",
                    paddingTop: "0.3rem",
                    paddingBottom: "0.3rem"
                  }}
                >
                  Get my Rates
                </a>
              </NavLink>
            </div>

            <div className="col-md-4" />
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
};
}

 export default SignUpSeven;
