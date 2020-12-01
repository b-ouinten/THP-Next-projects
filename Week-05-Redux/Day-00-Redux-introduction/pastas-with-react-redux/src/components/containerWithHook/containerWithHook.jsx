/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './containerWithHook.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  buyPastas, eatPastas, buyRice, eatRice,
} from '../../redux';

const ContainerWithHook = () => {
  const pastas = useSelector((state) => state.pastasReducer.pastas);
  const rice = useSelector((state) => state.riceReducer.rice);
  const dispatch = useDispatch();

  const handleClickToBuyPastas = () => dispatch(buyPastas(4));
  const handleClickToEatPastas = () => dispatch(eatPastas(4));
  const handleClickToBuyRice = () => dispatch(buyRice(4));
  const handleClickToEatRice = () => dispatch(eatRice(4));

  return (
    <div>
      <h1>
        Number of pastas :
        {' '}
        {pastas}
      </h1>
      <button type="button" onClick={handleClickToBuyPastas}>Buy pastas</button>
      <button type="button" onClick={handleClickToEatPastas}>Eat pastas</button>
      <h1>
        Number of rice :
        {' '}
        {rice}
      </h1>
      <button type="button" onClick={handleClickToBuyRice}>Buy rice</button>
      <button type="button" onClick={handleClickToEatRice}>Eat rice</button>
    </div>
  );
};

export default ContainerWithHook;
