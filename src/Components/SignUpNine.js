import React, { Component } from "react";
import Footer from "../Footer";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

class SignUpNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseNumber: [this.props.location.hash],
      street1: [this.props.location.hash1],
      postTown: [this.props.location.hash2],
      district: [this.props.location.hash3],
      county: [this.props.location.hash4],
      postCode: [this.props.location.hash5]
    };
  }

  onChange() {}

  componentDidMount() {
    console.log(this.props.location.hash);
    this.setState({
      houseNumber: this.props.location.hash,
      street1: this.props.location.hash1,
      postTown: this.props.location.hash2,
      district: this.props.location.hash3,
      county: this.props.location.hash4,
      postCode: this.props.location.hash5
    });
  }

  render() {
    const {
      houseNumber,
      street1,
      postTown,
      district,
      county,
      postCode
    } = this.state;
    //console.log("value: ", postTown);
    const { month } = this.state;
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
                  Your address history
                </h5>
                <p style={{ color: "#878787", fontSize: "0.92rem" }}>
                  We need your UK address history for the last 3 years
                </p>
                <h6>{"House" + houseNumber} </h6>
                <h6 style={{ marginTop: "-5px" }}>{"Street1: " + street1}</h6>
                <h6 style={{ marginTop: "-5px" }}>
                  {"Town: " + postTown},{" " + district}
                  {", " + county}
                </h6>
                <h6 style={{ marginTop: "-5px" }}>{postCode}</h6>
                <div className="row mb-3">
                  <div className="col-sm-5">
                    <select id="inputState" className="form-control">
                      <option
                        value=""
                        disabled
                        selected
                        style={{ display: "none" }}
                      >
                        Month
                      </option>
                      <option>January</option>
                      <option>Febrauary</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                  <div className="col-sm-4" style={{ marginLeft: "-20px" }}>
                    <select
                      id="inputState1"
                      className="form-control"
                      onChange={this.state.value}
                    >
                      {month}
                      <option
                        value=""
                        disabled
                        selected
                        style={{ display: "none" }}
                      >
                        Year
                      </option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>
                      <option>1989</option>
                      <option>1988</option>
                      <option>1987</option>
                      <option>1986</option>
                      <option>1985</option>
                      <option>1984</option>
                      <option>1983</option>
                      <option>1982</option>
                      <option>1981</option>
                      <option>1980</option>
                      <option>1979</option>
                      <option>1978</option>
                      <option>1977</option>
                      <option>1976</option>
                      <option>1975</option>
                      <option>1974</option>
                      <option>1973</option>
                      <option>1972</option>
                      <option>1971</option>
                      <option>1970</option>
                      <option>1969</option>
                      <option>1968</option>
                      <option>1967</option>
                      <option>1966</option>
                      <option>1965</option>
                      <option>1964</option>
                      <option>1963</option>
                      <option>1962</option>
                      <option>1961</option>
                      <option>1960</option>
                      <option>1959</option>
                      <option>1958</option>
                      <option>1957</option>
                      <option>1956</option>
                      <option>1955</option>
                      <option>1954</option>
                      <option>1953</option>
                      <option>1952</option>
                      <option>1951</option>
                      <option>1950</option>
                    </select>
                  </div>
                  <div className="col-md-3" />
                </div>
                <NavLink to={{ pathname: "/SignUpTen", hash6: month }}>
                  <a
                    className="btn payaca-quote"
                    style={{
                      color: " #212529",
                      backgroundColor: "#fff",
                      borderColor: "#fab62d",
                      marginBottom: "20px",
                      paddingLeft: "1.2rem",
                      paddingRight: "1.2rem",
                      fontWeight: "700",
                      borderWidth: "4px",
                      borderRadius: "2rem",
                      fontSize: " 1rem",
                      paddingTop: "0.2rem",
                      paddingBottom: "0.3rem"
                    }}
                  >
                    Add address
                  </a>
                </NavLink>

                <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
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
                <NavLink to="/SignUpTen">
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
  }
}

export default SignUpNine;
