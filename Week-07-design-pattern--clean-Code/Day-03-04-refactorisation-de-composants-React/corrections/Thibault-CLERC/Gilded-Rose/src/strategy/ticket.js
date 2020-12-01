import {
  decreaseSellIn,
  increaseQuality,
  isExpired
} from "../itemMutators";

import {MIN_QUALITY} from "../gilded_rose";

export const updateTicket = (item) => {
  decreaseSellIn(item);
  if (isExpired(item)) {
    item.quality = MIN_QUALITY;
    return
  }
  increaseQuality(item)
  if (item.sellIn < 10) {
    increaseQuality(item);
  }
  if (item.sellIn < 5) {
    increaseQuality(item);
  }
  
}