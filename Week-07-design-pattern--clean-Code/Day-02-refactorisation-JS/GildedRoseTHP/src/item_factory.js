import AgedBrie from "./aged_brie";
import Backstage from "./backstage";
import Sulfuras from "./sulfuras";
import Conjured from "./conjured";
import NormalItem from "./normal_item";

class ItemFactory {
  createItem(name, sellIn, quality) {
    if (/^Aged Brie/.test(name))
      return new AgedBrie(name, { sellIn, quality });
    else if (/^Backstage/.test(name))
      return new Backstage(name, { sellIn, quality });
    else if (/^Sulfuras/.test(name))
      return new Sulfuras(name);
    else if (/^Conjured/.test(name))
      return new Conjured(name, { sellIn, quality });
    else
      return new NormalItem(name, { sellIn, quality });
  }
}

export default ItemFactory;