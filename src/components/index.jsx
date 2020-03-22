import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Facts from "./Facts";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

import "../assets/css/style.css";

const Home = () => {
  return (
    <>
      {/* <Header />
      <Hero /> */}
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonial />
        <Contact />
    </>
  );
};

export default Home;
