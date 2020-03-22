import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Facts from "./components/Facts";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Resume from "./components/Resume";
// import Home from "./components/index";

const renderRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Hero /> */}
        <Switch>
          {/* <main id="main"> */}
          {/* <Route
            path="/"
            render={props => (
              <AppRoute Component={Hero} props={props} />
            )}
          /> */}
          <Route path="/" component={Hero} />
          <Route path="/about" exact component={About} />
          <Route path="/facts" component={Facts} />
          <Route path="skills" component={Skills} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
          {/* </main> */}
        </Switch>
      </div>
    </BrowserRouter >
  );
};

const AppRoute = ({ Component, props }) => {
  return <Component {...props} />
};

export default renderRoutes;
