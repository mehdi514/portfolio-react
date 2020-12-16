import React, { Component } from "react";
import logo from "../images/Logo.png";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class SignUpEight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: []
    };
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = `https://app.payaca.com/api/addresses/lookup?postcode=${
        this.state.term
      }`;
    fetch(proxyUrl + targetUrl, { method: "GET" })
      .then(response => response.json())
      .then(data =>
        this.setState({
          postcode: data
        })
      )
      .catch(e => console.log("error", e));
  };
  render() {
    const { postcode } = this.state;

    console.log("render of postcode:", postcode);
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
                <h6 style={{ color: "#29262C" }}>Your postcode</h6>
                <div className="form-group">
                  <div className="second mt-2 mb-4">
                    <form onSubmit={this.handleSubmit}>
                      <input
                        id="mytext"
                        type="text"
                        // value="BN124BD"
                        // value={this.state.term}
                        onChange={this.onChange}
                        className=" form-control"
                        placeholder="Postcode"
                        style={{ width: "80%" }}
                      />
                      <button> search </button>
                    </form>
                  </div>
                </div>

                <div class="panel panel-primary" id="result_panel">
                  <div class="panel-body">
                    <ul class="list-group">
                      {postcode.map(post => (
                        <span>
                          <NavLink
                            to={{
                              pathname: "/SignUpNine",
                              //search: "?" + post.ptcabs,
                              // hash:post.houseNumber + " " + post.street1+ " " +post.postTown+ " " +post.district+ " " +post.county
                              hash: post.houseNumber,
                              hash1: post.street1,
                              hash2: post.postTown,
                              hash3: post.district,
                              hash4: post.county,
                              hash5: post.postCode
                              // // "Postcode:" +
                              // post.postCode +
                              // // ", House No." +
                              // post.houseNumber +
                              // // ", Street:" +
                              // post.street1 +
                              // // ", Town:" +
                              // post.postTown +
                              // // ", District:" +
                              // post.district +
                              // // ", Country:" +
                              // post.county
                            }}
                            style={{
                              color: "#212529"
                            }}
                          >
                            <li
                              class="list-group-item"
                              style={{
                                cursor: "pointer",
                                fontSize: "0.9rem",
                                fontWeight: "500"
                              }}
                            >
                              {"Postcode: " +
                                post.postCode +
                                ", House#: " +
                                post.houseNumber +
                                ", Street1: " +
                                post.street1 +
                                ", Town: " +
                                post.postTown +
                                ", County: " +
                                post.county}
                            </li>
                          </NavLink>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>

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
                <NavLink to="/SignUpNine">
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

var text = $("#mytext");
var form = $("#myform");
text.bind("change keyup", function() {
  if ($(this).val().length >= 7) $("#myform").submit();
});

export default SignUpEight;
