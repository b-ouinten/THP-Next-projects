/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import CounterContext from '../../context';

const Child = () => {
  const counter = useContext(CounterContext);

  return (
    <div>
      <div>
        <button type="button" onClick={counter.increment}>+</button>
        <button type="button" onClick={counter.decrement}>-</button>
      </div>
      <p>{counter.currentNumber}</p>
    </div>
  );
};

export default Child;
