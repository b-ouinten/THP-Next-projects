import { FETCH_SOURCES_REQUEST, FETCH_SOURCES_SUCCESS, FETCH_SOURCES_FAILED } from './sourcesTypes';
import newsAPI from '../../api/newsAPI';

const fetchSourcesRequest = () => ({
  type: FETCH_SOURCES_REQUEST,
});

const fetchSourcesSuccess = (sources) => ({
  type: FETCH_SOURCES_SUCCESS,
  sources,
});

const fetchSourcesFailed = (error) => ({
  type: FETCH_SOURCES_FAILED,
  error,
});

const fetchSources = (criteria) => (dispatch) => {
  dispatch(fetchSourcesRequest());
  newsAPI.fetching(criteria)
    .then((result) => {
      if (result.status === 'error') {
        dispatch(fetchSourcesFailed(result.message));
      } else {
        dispatch(fetchSourcesSuccess(result.sources));
      }
    });
};

export default fetchSources;
