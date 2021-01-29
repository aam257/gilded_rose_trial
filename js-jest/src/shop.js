import NormalItems from "./normal_items";
import { specialItems, legendaryItems } from "./group";

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  reduceSellIn(item) {
    item.sellIn -= 1;
  }

  advanceDay() {
    this.items.forEach((item) => {
      if (this.isLegendary(item)) {
        return;
      }

      this.reduceSellIn(item);
      let newItem = this.itemType(item);
      newItem.reduceSellIn();
      item.quality = newItem.quality;
    });

    return this.items;
  }

  itemType(item) {
    let newItem;
    if (this.isSpecial(item)) {
      newItem = new specialItems[item.name](
        item.name,
        item.sellIn,
        item.quality
      );
    } else {
      newItem = new NormalItems(item.name, item.sellIn, item.quality);
    }

    return newItem;
  }

  isLegendary(item) {
    if (item.name in legendaryItems) {
      return true;
    }
  }
  isSpecial(item) {
    if (item.name in specialItems) {
      return true;
    }
  }
}

export default Shop;
