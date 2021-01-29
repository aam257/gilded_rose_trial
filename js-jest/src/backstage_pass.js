import Item from "./items";
import { MAX_QUALITY, MIN_QUALITY } from "./constants";

class Backstage extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }

    this.quality += 1;
    if (this.sellIn < 10) {
      this.quality += 1;
    }
    if (this.sellIn < 5) {
      this.quality += 1;
    }
    if (this.quality > MAX_QUALITY) {
      this.quality = MAX_QUALITY;
    }
  }
}

export default Backstage;
