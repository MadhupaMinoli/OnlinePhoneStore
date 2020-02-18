import {MobilePhone} from '../mobile-phone';
import utils from '../../services/utils.service';

export class MobilePhoneCollection {
  constructor() {}

  collectionKey = 'mobile-phone-collection';
  collection = {};
  mobileMapByBrand = {};
  mobileMapByStore = {};

  getMobilePhone(brand, model) {
    const mobileKey = utils.keyEncode(brand, model);
    let mobilePhone = this.collection[mobileKey];

    if (mobilePhone) {
      return mobilePhone;
    } else {
      mobilePhone = new MobilePhone(mobileKey, brand, model);
      this.collection[mobileKey] = mobilePhone;
      this.mobileMapByBrand[brand] ?
        this.mobileMapByBrand[brand].push(mobilePhone) :
        this.mobileMapByBrand[brand] = [mobilePhone];

      return mobilePhone;
    }
  }

  getMobileListByBrand(brand) {
    return this.mobileMapByBrand[brand] || [];
  }

  getMobileListByStore(storeKey) {
    return this.mobileMapByStore[storeKey] || [];
  }

  addMobileToStoreList(storeKey, mobileKey) {
    if (storeKey && mobileKey && this.collection[mobileKey]) {
      this.mobileMapByStore[storeKey] ?
        this.mobileMapByStore[storeKey].push(this.collection[mobileKey]) :
        this.mobileMapByStore[storeKey] = [this.collection[mobileKey]];
    }
  }
}
