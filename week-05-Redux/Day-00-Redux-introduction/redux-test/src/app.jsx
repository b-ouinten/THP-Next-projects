import { createStore } from 'redux';

const initialState = [0, 0, 0];

const counter = (state = initialState, { type, value, index }) => {
  const newState = [...state];
  switch (type) {
    case 'INCREMENT':
      newState[index] += value;
      return newState;
    case 'DECREMENT':
      newState[index] -= value;
      return newState;
    default: return newState;
  }
};

const store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

const increment = (value, index) => ({
  type: 'INCREMENT',
  value,
  index,
});

const decrement = (value, index) => ({
  type: 'DECREMENT',
  value,
  index,
});

store.dispatch(increment(2, 0));
store.dispatch(increment(6, 1));
store.dispatch(increment(10, 2));
store.dispatch(decrement(5, 2));

const App = () => null;
export default App;
