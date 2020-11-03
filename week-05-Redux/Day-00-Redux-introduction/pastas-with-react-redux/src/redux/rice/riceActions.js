import { BUY_RICE, EAT_RICE } from './riceTypes';

export const buyRice = (weight) => ({
  type: BUY_RICE,
  weight,
});

export const eatRice = (weight) => ({
  type: EAT_RICE,
  weight,
});
