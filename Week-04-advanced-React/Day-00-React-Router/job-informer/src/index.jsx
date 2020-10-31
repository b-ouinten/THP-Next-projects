import "antd/dist/antd.css";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Job from "./pages/job";
import Skill from "./pages/skill";

const App = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/job/:uuid">
      <Job />
    </Route>
    <Route path="/skill/:skill_uuid">
      <Skill />
    </Route>
  </Switch>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root"),
);
