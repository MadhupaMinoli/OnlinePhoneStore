import {Brand} from '../brand';
import * as $ from 'jquery';

export class BrandCollection {
  collectionKey = 'mobile-brand-collection';
  collection = {};
  brandMapByStore = {};

  getBrandList() {
    const brandList  = [];

    $.each(this.collection, (brand) => {
      brandList.push(brand);
    });

    return brandList;
  }

  getBrand(brandKey) {
    let mobileBrand = this.collection[brandKey];

    if (mobileBrand) {
      return mobileBrand;
    } else {
      mobileBrand = new Brand(brandKey, brandKey);
      this.collection[brandKey] = mobileBrand;

      return mobileBrand;
    }
  }

  getBrandListByStore(storeKey) {
    return this.brandMapByStore[storeKey] || [];
  }

  addBrandToStoreList(storeKey, brandKey) {
    if (storeKey && brandKey && this.collection[brandKey]) {
      this.brandMapByStore[storeKey]  ?
        this.brandMapByStore[storeKey].push(this.collection[brandKey]) :
        this.brandMapByStore[storeKey] = [this.collection[brandKey]];
    }
  }

  setModelsToBrand(brand, models) {
    if (brand && models && this.collection[brand]) {
      models.forEach(model => this.collection[brand].push(model));
    }
  }
}
