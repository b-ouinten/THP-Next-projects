import './app.scss';
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import ArticleDetails from './pages/articleDetails';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/:articleSlug" component={ArticleDetails} />
  </Switch>
);

export default App;
