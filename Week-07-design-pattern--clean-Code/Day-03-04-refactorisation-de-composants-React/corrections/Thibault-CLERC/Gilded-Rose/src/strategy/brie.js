import {
  decreaseSellIn,
  increaseQuality,
  isExpired,
} from "../itemMutators";

export const updateBrie = (item) => {
  decreaseSellIn(item);
  increaseQuality(item);
  if (isExpired(item)) {
    increaseQuality(item)
  }
}