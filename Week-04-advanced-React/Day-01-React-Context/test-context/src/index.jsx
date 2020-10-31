import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './context';
import Child from './components/Child/child';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  return (
    <CounterContext.Provider value={{
      currentNumber,
      increment: () => setCurrentNumber(currentNumber + 1),
      decrement: () => setCurrentNumber(currentNumber - 1),
    }}
    >
      <h1>My App</h1>
      <Child />
    </CounterContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
