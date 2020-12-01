import Item from "./item";

class Backstage extends Item {
  constructor(name, { quality, sellIn }) {
    super(name, { quality, sellIn })
  }
  
  updateQuality() {
    this.sellIn--;
    
    if (this.isExpired()) this.quality = 0;
    else if (this.sellIn < 6) this.quality += 3;
    else if (this.sellIn < 11) this.quality += 2;
    else this.quality++;

    super.updateQuality();
  }

  isExpired() {
    return this.sellIn < 0;
  }
}

export default Backstage;