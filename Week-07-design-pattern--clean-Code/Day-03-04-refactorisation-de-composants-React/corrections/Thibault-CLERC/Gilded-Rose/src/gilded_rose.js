import {getUpdateStrategy} from "./strategy/update";

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;

export class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const updateStrategy = getUpdateStrategy(item);
      updateStrategy(item)
    });
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
