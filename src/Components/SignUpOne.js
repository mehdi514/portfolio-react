import React, { Component } from "react";
import "../main.css";
import logo from "../images/Logo.png";
import img from "../images/Winmorework@2x.png";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

class SignUpOne extends Component {
  constructor() {
    super();
    this.state = { value: 2, value1: 2000 };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValue1Change = this.handleValue1Change.bind(this);
  }

  handleValueChange(eve) {
    this.setState({ value: eve.target.value });
  }
  handleValue1Change(event) {
    this.setState({ value1: event.target.value });
  }
  render() {
    return (
      <body>
        <section>
          <div className="container-fluid">
            <div className="logo-section  text-center mt-3">
              <NavLink to="/SignUpOne">
                <img width="100px" src={logo} alt={""} />
              </NavLink>
              <span className="tagline">Simple, fast, finance.</span>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4">
                <div className="container mt-5">
                  <div className="text-center">
                    <img width="130px" src={img} alt={""} />
                    <h4 className="mt-2" style={{ fontWeight: "bold" }}>
                      Get your personalised loan rates in 2 minutes
                    </h4>
                    <p style={{ color: "#878787" }}>
                      This won't affect your credit score
                    </p>
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
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
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
                                >
                                  <circle cx="12" cy="12" r="12" />
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
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
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
                                >
                                  <circle cx="12" cy="12" r="12" />
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
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
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
                                >
                                  <circle cx="12" cy="12" r="12" />
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
                  <h5 style={{ color: "#29262C" }}>Your loan</h5>
                  <br />
                  <h6 style={{ color: "#29262C" }}>
                    Loan amount (£1,000 - £25,000)
                  </h6>
                  <div className="text1">
                    <div className="form-group">
                      <input
                        name="value1"
                        type="number"
                        className="form-control"
                        min="1000"
                        max="25000"
                        placeholder="£"
                        value={this.state.value1}
                        onChange={this.handleValue1Change}
                      />
                      <input
                        name="value1"
                        type="range"
                        className="custom-range"
                        min="1000"
                        max="25000"
                        value={this.state.value1}
                        onChange={this.handleValue1Change}
                      />

                      <h6 style={{ color: "#29262C" }}>
                        Lending Terms (1 year - 5 years)
                      </h6>

                      <form className="form-inline">
                        <input
                          type="text"
                          name="value"
                          className="form-control"
                          placeholder="Years"
                          value={this.state.value}
                          onChange={this.handleValueChange}
                          style={{ width: "15%" }}
                        />
                        <label className="ml-2 mb-3">years</label>
                      </form>
                      <input
                        name="value"
                        className="custom-range"
                        id="typeinp"
                        type="range"
                        min="1"
                        max="5"
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        step="1"
                      />
                    </div>

                    <h6 style={{ color: "#29262C" }}>What's the loan for?</h6>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        This dropdown's menu is right-aligned
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button">
                          Action
                        </button>
                        <button className="dropdown-item" type="button">
                          Another action
                        </button>
                        <button className="dropdown-item" type="button">
                          Something else here
                        </button>
                      </div>
                    </div>
                    <NavLink to="/SignUpTwo">
                      <div className="text-center">
                        <a className="btn payaca-btn">Next</a>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </section>
        <Footer />
      </body>
    );
  }
}

export default SignUpOne;
