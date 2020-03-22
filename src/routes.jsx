import React from "react";
import Route from "react-router-dom/Route";
import { BrowserRouter, Switch } from "react-router-dom";
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
import Home from './components/index';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Switch>
          <main id="main">
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/facts" component={Facts} />
            <Route path="skills" component={Skills} />
            <Route path="/resume" component={Resume} />
            <Route path="/porfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/testimonial" component={Testimonial} />
            <Route path="/contact" component={Contact} />
          </main>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
