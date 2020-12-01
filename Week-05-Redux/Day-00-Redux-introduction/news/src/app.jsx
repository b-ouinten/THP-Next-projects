/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import middleware from 'redux-thunk';

const initialState = {
  loading: false,
  news: [],
  error: '',
};

const newsReducer = (state = initialState, { type, news, error }) => {
  switch (type) {
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        loading: false,
        news,
      };
    case 'FETCH_NEWS_FAILED':
      return {
        ...state,
        error,
      };
    default: return state;
  }
};

const store = createStore(
  newsReducer,
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
store.subscribe(() => console.log(store.getState()));

const fetchNewsRequest = () => ({
  type: 'FETCH_NEWS_REQUEST',
});

const fetchNewsSuccess = (news) => ({
  type: 'FETCH_NEWS_SUCCESS',
  news,
});

const fetchNewsFailed = (error) => ({
  type: 'FETCH_NEWS_FAILED',
  error,
});

const fetchNews = () => (dispatch) => {
  dispatch(fetchNewsRequest());
  fetch(
    'http://newsapi.org/v2/everything?q=reactjs&sortBy=publishedAt&apiKey=f9c727a6fdb443be90f527b8fa794187',
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'error') {
        dispatch(fetchNewsFailed(response.message));
      } else {
        dispatch(fetchNewsSuccess(response.articles));
      }
    });
};

store.dispatch(fetchNews());

const App = () => null;

export default App;
