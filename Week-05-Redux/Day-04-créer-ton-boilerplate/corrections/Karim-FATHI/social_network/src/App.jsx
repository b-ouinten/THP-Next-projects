import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

// COMPONENTS
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile'
import Register from './pages/Register'


const App = () => {
  const pages = [
    { url: "/", name: "Home" },
    { url: "/Register", name: "Register" },
    { url: "/Login", name: "Login" },
    { url: "/Profile", name: "Profile" },
  ];

  return (
    <Router>
      <div>
        <Navbar pages={pages} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};


export default App; 

