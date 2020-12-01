import { MIN_QUALITY, MAX_QUALITY } from './const';

class Item {
  constructor(name, { sellIn, quality } = {}){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  
  updateQuality() {
    if (this.quality < MIN_QUALITY) this.quality = MIN_QUALITY;
    if (this.quality > MAX_QUALITY) this.quality = MAX_QUALITY;
  }
}

export default Item;