/* eslint-disable no-underscore-dangle */
// /* eslint-disable no-unused-vars */
import { createStore, combineReducers } from 'redux';

const BUY_PASTAS = 'BUY_PASTAS';
const EAT_PASTAS = 'EAT_PASTAS';
const BUY_RICE = 'BUY_RICE';
const EAT_RICE = 'EAT_RICE';

const initialStatePastas = {
  pastas: 4,
};

const initialStateRice = {
  rice: 4,
};

const pastasReducer = (state = initialStatePastas, { type, weight }) => {
  switch (type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + weight,
      };
    case EAT_PASTAS:
      return {
        ...state,
        pastas: state.pastas - weight,
      };
    default: return state;
  }
};

const riceReducer = (state = initialStateRice, { type, weight }) => {
  switch (type) {
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + weight,
      };
    case EAT_RICE:
      return {
        ...state,
        rice: state.rice - weight,
      };
    default: return state;
  }
};

const rootReducer = combineReducers({
  pastasReducer,
  riceReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => console.log(store.getState()));

const eatPastas = (weight) => ({
  type: EAT_PASTAS,
  weight,
});

const buyPastas = (weight) => ({
  type: BUY_PASTAS,
  weight,
});

const eatRice = (weight) => ({
  type: EAT_RICE,
  weight,
});

const buyRice = (weight) => ({
  type: BUY_RICE,
  weight,
});

store.dispatch(eatPastas(2));
store.dispatch(buyPastas(14));
store.dispatch(eatRice(1));
store.dispatch(buyRice(10));

const App = () => null;

export default App;
