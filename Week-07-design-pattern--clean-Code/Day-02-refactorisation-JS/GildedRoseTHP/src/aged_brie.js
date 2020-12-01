import Item from './item';
import { MIN_QUALITY } from './const';

class AgedBrie extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  
  updateQuality() {
    this.sellIn--;
    this.quality++;

    if (this.isExpired())
      this.quality = MIN_QUALITY;

    super.updateQuality();
  }

  isExpired() {
    this.sellIn < 0;
  }
}

export default AgedBrie;