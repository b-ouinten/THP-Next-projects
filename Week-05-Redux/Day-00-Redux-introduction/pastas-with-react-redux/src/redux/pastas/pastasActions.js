import { BUY_PASTAS, EAT_PASTAS } from './pastasTypes';

export const buyPastas = (weight) => ({
  type: BUY_PASTAS,
  weight,
});

export const eatPastas = (weight) => ({
  type: EAT_PASTAS,
  weight,
});
