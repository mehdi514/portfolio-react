import React, { Component } from "react";
import logo from "../images/Logo.png";
import img from "../images/Winmorework@2x.png";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

class SignUpEleven extends Component {
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
              <div className="col-md-3" />
              <div className="col-md-6">
                <div className="container mt-5">
                  <div className="text-center">
                    <img width="130px" src={img} alt={""} />
                    <h4 className="mt-2" style={{ fontWeight: "bold" }}>
                      Get your personalised loan rates
                    </h4>
                    <p style={{ color: "#878787" }}>
                      This won't affect your credit score
                    </p>
                  </div>
                  <br />
                  <h5 style={{ color: "#29262C" }}>Your loan</h5>
                  <br />
                  <h6 style={{ color: "#29262C" }}>Lending term (years)</h6>
                  <div className="text1">
                    <div className="form-group">
                      <input
                        id="choose"
                        type="number"
                        className="form-control"
                        placeholder="£"
                      />

                      <h6 style={{ color: "#29262C" }}>Lending Terms(years)</h6>
                      <p style={{ color: "#878787" }}>
                        Payaca offers loans of between £1,000 and £25,000
                      </p>

                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                        min="1000"
                        max="25000"
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

                    <br />
                    <h5 style={{ color: "#29262C", fontWeight: "bold" }}>
                      About you
                    </h5>
                    <br />
                    <h6 style={{ color: "#29262C" }}>Surname</h6>
                    <div className="first">
                      <div className="form-group">
                        <div className="second mt-2">
                          <input
                            type="text"
                            className=" form-control"
                            placeholder="Surname"
                            id="validationServer01"
                          />
                        </div>
                      </div>
                    </div>
                    <h6 style={{ color: "#29262C" }}>Email</h6>
                    <div className="first">
                      <div className="form-group">
                        <div className="second mt-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            id="validationServerUsername"
                          />
                        </div>
                      </div>
                    </div>
                    <h6 style={{ color: "#29262C" }}>Phone</h6>
                    <div className="first">
                      <div className="form-group">
                        <div className="second mt-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Contact Number"
                            id="phonenum"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 style={{ color: "#29262C" }}>Date of Birth</h6>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <select id="inputState" className="form-control">
                        <option
                          value=""
                          disabled
                          selected
                          style={{ display: "none" }}
                        >
                          Day
                        </option>
                        <option value="opt2">1</option>
                        <option value="opt1">2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                      <select id="inputState" className="form-control">
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
                  </div>
                  <br />
                  <h5 style={{ color: "#29262C" }}>Your Financial Status</h5>
                  <br />
                  <h6 style={{ color: "#29262C" }}>
                    What's your employment status?
                  </h6>
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
                  <h6 style={{ color: "#29262C" }}>
                    What's your annual income before tax?
                  </h6>
                  <div className="third">
                    <div className="form-group">
                      <div className="second mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="£"
                        />
                      </div>
                    </div>
                  </div>
                  <h6 style={{ color: "#29262C" }}>Do you own your home?</h6>

                  <div className="custom-control custom-radio mt-3">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio1">
                      Yes, outright owner
                    </label>
                  </div>

                  <div className="custom-control custom-radio mt-3">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio2">
                      Yes with mortgage
                    </label>
                  </div>

                  <div className="custom-control custom-radio mt-3 mb-3">
                    <input
                      type="radio"
                      id="customRadio3"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" for="customRadio3">
                      No
                    </label>
                  </div>

                  <h6 style={{ color: "#29262C" }}>
                    What is your monthly mortgage or rent contribution?
                  </h6>
                  <div className="third">
                    <div className="form-group mt-2">
                      <div className="second">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="£"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <h5 style={{ color: "#29262C" }}>Your Address History</h5>
                  <p style={{ color: "#878787", fontSize: "0.92rem" }}>
                    We need your UK address history for the last 3 years
                  </p>
                  <h6 style={{ color: "#29262C" }}>Your postcode</h6>
                  <div className="form-group">
                    <div className="second mt-2">
                      <input
                        type="text"
                        className=" form-control"
                        placeholder="Postcode"
                      />
                    </div>
                  </div>

                  <a
                    className="btn payaca-quote text-center"
                    style={{
                      color: " #212529",
                      backgroundColor: "#fff",
                      borderColor: "#fab62d",
                      marginBottom: "20px",
                      paddingLeft: ".8rem",
                      paddingRight: ".8rem",
                      fontWeight: "700",
                      borderWidth: "4px",
                      borderRadius: "2rem",
                      fontSize: " 1rem",
                      paddingTop: ".2rem",
                      paddingBottom: ".2rem"
                    }}
                  >
                    Look up
                  </a>
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
                    subject to personal circumstances or lender criteria. You
                    will be transferred to a panel of lenders.
                  </p>

                  <h6 style={{ color: "#29262C" }}>
                    This won’t affect your credit score.
                  </h6>
                  {/* <NavLink to="/SignUpSeven"> */}
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
                    Get my rates
                  </a>
                  {/* </NavLink> */}
                </div>
              </div>
            </div>
            <div className="col-md-3" />
          </div>
        </section>
        <Footer />
      </body>
    );
  }
}

export default SignUpEleven;
