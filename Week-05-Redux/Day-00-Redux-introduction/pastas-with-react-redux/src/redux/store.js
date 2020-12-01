import { createStore, combineReducers } from 'redux';
import pastasReducer from './pastas/pastasReducer';
import riceReducer from './rice/riceReducer';

const allReducer = combineReducers({
  pastasReducer,
  riceReducer,
});

const store = createStore(allReducer);

export default store;
