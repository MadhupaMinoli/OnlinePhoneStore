import { Component, OnInit } from '@angular/core';
import {RouteServiceService} from "../services/route-service.service";
import {HomeService} from "../services/home.service";

@Component({
  selector: 'app-model-mobile-list',
  templateUrl: './model-mobile-list.component.html',
  styleUrls: ['./model-mobile-list.component.sass']
})
export class ModelMobileListComponent implements OnInit {
modelDetails;
  product;
  constructor(private homeService : HomeService, private routeService : RouteServiceService) { }

  ngOnInit() {

    console.error(history.state.data);
    this.product = this.routeService.getState();
    this.homeService.getModelsDetailsById(this.product.phoneModelId).subscribe(res=>{
      this.modelDetails = res;
      console.log(this.modelDetails);
    })
  }

}
