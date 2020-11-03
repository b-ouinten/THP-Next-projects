import { BUY_RICE, EAT_RICE } from './riceTypes';

const initialState = {
  rice: 4,
};

const riceReducer = (state = initialState, { type, weight }) => {
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

export default riceReducer;
