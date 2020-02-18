export class Brand {
  constructor(key, name) {
    this.key = key;
    this.name = name;
    this.models = [];
  }

  key: string;
  name: string;
  models: any;
}
