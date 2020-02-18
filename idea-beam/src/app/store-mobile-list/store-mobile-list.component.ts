import { Component, OnInit } from '@angular/core';
import {StoresService} from "../services/stores.service";
import {RouteServiceService} from "../services/route-service.service";

@Component({
  selector: 'app-store-mobile-list',
  templateUrl: './store-mobile-list.component.html',
  styleUrls: ['./store-mobile-list.component.sass']
})
export class StoreMobileListComponent implements OnInit {
storeDetails
  constructor(private storesService:StoresService, private routeService: RouteServiceService) { }

  ngOnInit() {
    console.error(this.routeService.getState());
    this.storeDetails=this.routeService.getState();

  }


  onclickMobile(storeDetails){

  this.routeService.setState(storeDetails);
  }



}
