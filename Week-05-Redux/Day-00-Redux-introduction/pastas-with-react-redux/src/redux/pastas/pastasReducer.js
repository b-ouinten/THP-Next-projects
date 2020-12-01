import { BUY_PASTAS, EAT_PASTAS } from './pastasTypes';

const initialState = {
  pastas: 4,
};

const pastasReducer = (state = initialState, { type, weight }) => {
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

export default pastasReducer;
