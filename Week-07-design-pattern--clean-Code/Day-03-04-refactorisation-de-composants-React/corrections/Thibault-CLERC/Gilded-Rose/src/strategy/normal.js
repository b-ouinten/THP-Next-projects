import {
  decreaseQuality,
  decreaseSellIn,
  isExpired,
} from "../itemMutators";

export const updateNormal = (item) => {
  decreaseSellIn(item);
  decreaseQuality(item);

  if (isExpired(item)) {
    decreaseQuality(item);  
  }
}