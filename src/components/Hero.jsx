import React from "react";

// --------- STYLES ---------
import "../assets/css/style.css";

const Hero = props => {
  return (
    <>
      {/* // <!-- ======= Hero Section ======= --> */}
      <div id="hero" className="d-flex flex-column justify-content-center align-items-center" >
        {/* <div className="hero-container"> */}
        <div className="hero-container" data-aos="fade-in">
          <h1>Muhammad Mehdi</h1>
          <p>
            UI/UX
          <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">
              Developer
          </span>
          </p>
        </div>
      </div>
    </>
    //   <!-- End Hero -->
  );
};

export default Hero;
