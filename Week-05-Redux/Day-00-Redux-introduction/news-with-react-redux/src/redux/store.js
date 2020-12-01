/* eslint-disable no-underscore-dangle */
import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import middleware from 'redux-thunk';
import newsReducer from './news/newsReducer';
import sourcesReducer from './sources/sourcesReducer';

const allReducers = combineReducers({
  newsState: newsReducer,
  sourcesState: sourcesReducer,
});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
