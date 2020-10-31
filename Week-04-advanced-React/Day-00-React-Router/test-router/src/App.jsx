import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  Navbar,
  Book
} from './components';
import books from './data/books';

const App = () => {
  return (
    <Router>
      <Navbar books={books}/>
      <br/>
      <Switch>
        <Route path={`/book/:bookSlug`}>
          <Book books={books}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
