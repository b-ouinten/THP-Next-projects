import {MAX_QUALITY, MIN_QUALITY} from './gilded_rose';

export const increaseQuality = (item) => {
  if (item.quality < MAX_QUALITY) {
    item.quality = item.quality + 1;
  }
};

export const decreaseQuality = (item) => {
  if (item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }
};

export const decreaseSellIn = (item) => {
  item.sellIn = item.sellIn - 1;
};

export const isExpired = (item) => {
  return item.sellIn < 0;
};
