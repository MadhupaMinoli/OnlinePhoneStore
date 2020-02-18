import { Component, OnInit } from '@angular/core';
import {DataCollectionService} from '../services/data-collection.service';
import { HomeService } from '../services/home.service';
import { from } from 'rxjs';




@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.sass']
})
export class HomeTabComponent implements OnInit {

  storeProducts;
  selectedProduct;

  constructor(private homeService:HomeService) { }

  ngOnInit() {

        this.homeService.getAll().subscribe(res=>{
      this.storeProducts = res;
      console.log(this.storeProducts);
    })

  }


}
