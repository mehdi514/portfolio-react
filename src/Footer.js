import React, { Component } from "react";
import logo1 from "../src/images/LogoWhite@2x.png";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer id="footer">
          <div className="footer-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <a href="/" title="Payaca" rel="home" className="footer-logo">
                    <img width="210px" src={logo1} alt={""} />
                  </a>
                  <div className="copyright mt-4" style={{ color: "#DBDBDB" }}>
                    © 2019 Payaca | All rights reserved
                  </div>
                </div>
                <div className="col-md-2" />
                <div className="col-md-4" />
                <div className="col-md-2 text-center">
                  <h5>Need Help?</h5>
                  <div className="email mt-3" style={{ color: "#DBDBDB" }}>
                    hello@payaca.com
                  </div>
                  <div className="phone mt-1" style={{ color: "#DBDBDB" }}>
                    01172510004
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-12">
                  <div className="disclaimer text-center">
                    Payaca Ltd, company number 11173058. Registered with the
                    Information Commissioner’s Office in compliance with the
                    Data Protection Act 1998 under registration ZA426301.
                    Registered office at Unit 14 Greenway Farm Bath Road, Wick,
                    Bristol, Gloucestershire, England, BS30 5RL. Payaca Ltd is
                    authorised and regulated by the Financial Conduct Authority
                    811775. We act as a credit broker not a lender. We can
                    introduce you to a limited number of lenders who may be able
                    to offer you finance facilities for your purchase. We will
                    only introduce you to these lenders. We may receive a
                    commission payment from the finance provider if you decide
                    to enter into an agreement with them. You may be able to
                    obtain finance for your purchase from other lenders and you
                    are encouraged to seek alternative quotations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
