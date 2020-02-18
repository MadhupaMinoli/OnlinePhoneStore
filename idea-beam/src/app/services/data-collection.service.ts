import { Injectable } from '@angular/core';
import {MobilePhoneCollection} from '../models/collections/mobile-phone-collection';
import {BrandCollection} from '../models/collections/brand-collection';
import {StoreCollection} from '../models/collections/store-collection';

import {ResponseHandlerService} from './response-handler.service';
import {RequestHandlerService} from './request-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {
  constructor() { }

  mobilePhoneCollection = new MobilePhoneCollection();
  mobileBrandCollection = new BrandCollection();
}
