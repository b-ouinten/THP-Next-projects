import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Navbar,
} from "./components";
import {
  About,
  Contact,
  Works,
} from "./pages";
import { Home } from "./pages/home";
import works from "./data/works";

const App = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/works">
        <Works works={works} />
      </Route>
    </Switch>
  </Router>
);

export default App;
