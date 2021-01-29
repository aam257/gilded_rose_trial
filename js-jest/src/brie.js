import { MAX_QUALITY, MIN_QUALITY } from "./constants";
import Item from "./items";

class Brie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn < 0 ? (this.quality += 2) : (this.quality += 1);
    if (this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY;
    }
  }
}

export default Brie;
