import { Component, OnInit } from '@angular/core';
import { StoresService } from '../services/stores.service';
import {RouteServiceService} from "../services/route-service.service";

@Component({
  selector: 'app-stores-tab',
  templateUrl: './stores-tab.component.html',
  styleUrls: ['./stores-tab.component.sass']
})
export class StoresTabComponent implements OnInit {
 stores;

  constructor(private storesService:StoresService,private routeService:RouteServiceService) { }

  ngOnInit() {

        this.storesService.getAll().subscribe(res=>{
      this.stores = res;
      console.log(this.stores);
    })

  }
  onclickMobile(store) {

    this.routeService.setState(store);

  }


}
