import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsTabComponent } from './brands-tab/brands-tab.component';
import { StoreByIdComponent } from './pages/store-by-id/store-by-id.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import {StoresTabComponent} from "./stores-tab/stores-tab.component";
import {BrandDetailsComponent} from "./brand-details/brand-details.component";
import {StoreMobileListComponent} from "./store-mobile-list/store-mobile-list.component";
import {MobileListComponent} from "./mobile-list/mobile-list.component";
import {ModelMobileListComponent} from "./model-mobile-list/model-mobile-list.component";


const routes: Routes = [
  {path:'',
    component:HomeTabComponent,
    children:[
      {path:'storeById',
        component:StoreByIdComponent}
    ]
  },
  {path: 'brands',
    component: BrandsTabComponent
  },
  {path: 'stores',
    component: StoresTabComponent
  },

  {path: 'brands/:brand', component : BrandDetailsComponent},

  {path: 'stores/:store', component : StoreMobileListComponent},

  {path: 'mobiles/:mobile', component : MobileListComponent},

  {path: 'model/:model', component : ModelMobileListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
