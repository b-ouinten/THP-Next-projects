import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILED } from './newsTypes';
import newsAPI from '../../api/newsAPI';

const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  news,
});

const fetchNewsFailed = (error) => ({
  type: FETCH_NEWS_FAILED,
  error,
});

const fetchNews = (criteria) => (dispatch) => {
  dispatch(fetchNewsRequest());
  newsAPI.fetching(criteria)
    .then((result) => {
      if (result.status === 'error') {
        dispatch(fetchNewsFailed(result.message));
      } else {
        dispatch(fetchNewsSuccess(result.articles));
      }
    });
};

export default fetchNews;
