import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import LanguageContext from "./LanguageContext";

const App = () => {
  const [local, setLocal] = useState(localStorage["local"] ? localStorage["local"] : "en");

  useEffect(() => {
    localStorage["local"] = local
  }, [local])

  return (
    <LanguageContext.Provider value={{
      local,
      swichLanguage: (language) => setLocal(language),
    }}>
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
    </LanguageContext.Provider>
  );
};
export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
