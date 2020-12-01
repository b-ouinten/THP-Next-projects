/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './pastasContainer.scss';
import React from 'react';
import { connect } from 'react-redux';
import { buyPastas, eatPastas } from '../../redux';

const mapStateToProps = (state) => ({
  pastas: state.pastasReducer.pastas,
});

const mapDispatchToProps = (dispatch) => ({
  buyPastas: (weight) => (dispatch(buyPastas(weight))),
  eatPastas: (weight) => (dispatch(eatPastas(weight))),
});

const PastasContainer = (props) => {
  const handleClickToBuy = () => props.buyPastas(4);
  const handleClickToEat = () => props.eatPastas(4);

  return (
    <div>
      <h1>
        Number of pastas :
        {' '}
        {props.pastas}
      </h1>
      <button type="button" onClick={handleClickToBuy}>Buy pastas</button>
      <button type="button" onClick={handleClickToEat}>Eat pastas</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PastasContainer);
