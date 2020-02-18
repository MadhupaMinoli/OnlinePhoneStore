import { Component, OnInit } from '@angular/core';
import {HomeService} from "../services/home.service";
import {RouteServiceService} from "../services/route-service.service";

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.sass']
})
export class MobileListComponent implements OnInit {

  mobileDetails;
  product;
  constructor(private homeService : HomeService, private routeService : RouteServiceService) { }

  ngOnInit() {
    console.error(history.state.data);
    this.product = this.routeService.getState();
    this.homeService.getMobileDetailsById(this.product.mobileId).subscribe(res=>{
      this.mobileDetails = res;
      console.log(this.mobileDetails);
    })

  }

  onclickMobile(mobileDetails) {

    this.routeService.setState(mobileDetails);

  }

}
