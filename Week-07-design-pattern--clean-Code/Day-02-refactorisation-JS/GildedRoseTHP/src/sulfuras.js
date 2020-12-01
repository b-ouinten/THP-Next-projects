import Item from "./item";
import { SPECIAL_QUALITY } from "./const";

class Sulfuras extends Item {
  constructor(name) {
    super(name)
  }

  updateQuality() {
    this.quality = SPECIAL_QUALITY;
  }
}

export default Sulfuras;