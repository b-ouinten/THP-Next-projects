import Item from "./item";

class NormalItem extends Item {
  constructor(name, { sellIn, quality }) {
    super(name, { sellIn, quality })
  }

  updateQuality() {
    this.sellIn--;

    if (this.isExpired()) this.quality -= 2;
      else this.quality--;

    super.updateQuality();
  }

  isExpired() {
    return this.sellIn < 0;
  }
}

export default NormalItem;