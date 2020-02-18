export class MobilePhone {
  constructor(key, brand, model) {
    this.key = key;
    this.brand = brand;
    this.model = model;
    this.specs = {};
  }

  key: string;
  brand: string;
  model: string;
  specs: any;
}
