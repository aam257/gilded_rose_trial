import Item from "./items";
import { MAX_QUALITY, MIN_QUALITY } from "./constants";

class NormalItems extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.name === "Conjured") {
      if (this.sellIn < 0) {
        this.quality -= 4;
      } else {
        this.quality -= 2;
      }
    } else {
      if (this.sellIn < 0) {
        this.quality -= 2;
      } else {
        this.quality -= 1;
      }
    }
    if (this.quality < MIN_QUALITY) {
      this.quality = MIN_QUALITY;
    }
  }
}

export default NormalItems;
