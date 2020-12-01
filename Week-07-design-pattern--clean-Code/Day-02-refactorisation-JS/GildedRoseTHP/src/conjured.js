import Item from "./item";

class Conjured extends Item {
  constructor(name, { sellIn, quality } ) {
    super(name, { sellIn, quality })
  }

  updateQuality() {
    this.sellIn--;
    
    if (this.isExpired()) this.quality -=4;
      else this.quality -= 2;

    super.updateQuality();
  }

  isExpired() {
    return this.sellIn < 0;
  }
}

export default Conjured;