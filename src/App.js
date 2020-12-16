import React, { Component } from "react";
import SignUpOne from "./Components/SignUpOne";
import { BrowserRouter, HashRouter, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import SignUpTwo from "./Components/SignUpTwo";
import SignUpThree from "./Components/SignUpThree";
import SignUpFour from "./Components/SignUpFour";
import SignUpFive from "./Components/SignUpFive";
import SignUpSeven from "./Components/SignUpSeven";
import SignUpEight from "./Components/SignUpEight";
import SignUpSix from "./Components/SignUpSix";
import SignUpNine from "./Components/SignUpNine";
import SignUpTen from "./Components/SignUpTen";
import SignUpEleven from "./Components/SignUpEleven";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SignUpOne} />
            <Route path="/Home" component={SignUpOne} />
            <Route path="/SignUpOne" component={SignUpOne} />
            <Route path="/SignUpTwo" component={SignUpTwo} />
            <Route path="/SignUpThree" component={SignUpThree} />
            <Route path="/SignUpFour" component={SignUpFour} />
            <Route path="/SignUpFive" component={SignUpFive} />
            <Route path="/SignUpSix" component={SignUpSix} />
            <Route path="/SignUpSeven" component={SignUpSeven} />
            <Route path="/SignUpEight" component={SignUpEight} />
            <Route path="/SignUpNine" component={SignUpNine} />
            <Route path="/SignUpTen" component={SignUpTen} />
            <Route path="/SignUpEleven" component={SignUpEleven} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
