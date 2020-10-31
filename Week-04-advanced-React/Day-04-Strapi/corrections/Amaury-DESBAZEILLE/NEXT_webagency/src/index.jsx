import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IntlProvider } from 'react-intl';
import messages from './translation';

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  const [language, setLanguage] = useState('fr');

  const handleLanguage = () => {
    if (language === 'fr') {
      setLanguage('en')
    } else {
      setLanguage('fr')
    }
  }

  return(
      <IntlProvider locale={language} messages={messages[language]}>

        <section>
          <Router>
            <Navbar selectLanguage={handleLanguage}/>
            <Switch>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>

        </section>

      </IntlProvider>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
