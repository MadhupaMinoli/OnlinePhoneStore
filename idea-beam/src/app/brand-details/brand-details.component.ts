import { Component, OnInit } from '@angular/core';
import {BrandsService} from "../services/brands.service";
import {RouteServiceService} from "../services/route-service.service";

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.sass']
})
export class BrandDetailsComponent implements OnInit {
brandDetails
  constructor(private brandsService:BrandsService, private routeService : RouteServiceService) { }

  ngOnInit() {
    console.error(this.routeService.getState());
    this.brandDetails=this.routeService.getState();

  }

  onclickMobile(brandDetails) {

    this.routeService.setState(brandDetails);

  }

}
