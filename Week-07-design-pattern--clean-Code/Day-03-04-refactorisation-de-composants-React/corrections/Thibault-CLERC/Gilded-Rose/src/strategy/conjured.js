import {
  decreaseQuality,
  decreaseSellIn,
  isExpired,
} from "../itemMutators";

export const updateConjured = (item) => {
  decreaseSellIn(item);
  decreaseQuality(item);
  decreaseQuality(item);

  if (isExpired(item)) {
    decreaseQuality(item);  
    decreaseQuality(item);
  }
};
