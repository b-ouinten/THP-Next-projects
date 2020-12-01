import { FETCH_SOURCES_REQUEST, FETCH_SOURCES_SUCCESS, FETCH_SOURCES_FAILED } from './sourcesTypes';

const initialState = {
  loading: false,
  sources: [],
  error: '',
};

const sourcesReducer = (state = initialState, { type, sources, error }) => {
  switch (type) {
    case FETCH_SOURCES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        sources,
      };
    case FETCH_SOURCES_FAILED:
      return {
        ...state,
        loading: false,
        error,
      };
    default: return state;
  }
};

export default sourcesReducer;
