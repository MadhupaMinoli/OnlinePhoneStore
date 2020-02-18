import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import {ActivatedRoute} from '@angular/router';
import {RouteServiceService} from "../services/route-service.service";
@Component({
  selector: 'app-brands-tab',
  templateUrl: './brands-tab.component.html',
  styleUrls: ['./brands-tab.component.sass']
})
export class BrandsTabComponent implements OnInit {
  id;
  brands;

  constructor(private route : ActivatedRoute,private brandsService:BrandsService,private routeService: RouteServiceService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);

        this.brandsService.getAll().subscribe(res=>{
      this.brands = res;
      console.log(this.brands);
    })

  }


  onclickMobile(brand) {

  this.routeService.setState(brand);

  }

}
