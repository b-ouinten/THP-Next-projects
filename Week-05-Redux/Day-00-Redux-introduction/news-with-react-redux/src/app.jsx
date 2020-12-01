import './app.scss';
import React, { useState } from 'react';
import Introduction from './components/introduction';
import SearchContext from './context';
import Searcher from './components/searcher';

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [source, setSource] = useState('');

  return (
    <SearchContext.Provider value={{
      keywords,
      source,
      setKeywords,
      setSource,
    }}
    >
      <div className="container">
        <h1>News engine</h1>
        <Introduction />
        <Searcher />
      </div>
    </SearchContext.Provider>
  );
};

export default App;
