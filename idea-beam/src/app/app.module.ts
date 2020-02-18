import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { StoresTabComponent } from './stores-tab/stores-tab.component';
import { BrandsTabComponent } from './brands-tab/brands-tab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreByIdComponent } from './pages/store-by-id/store-by-id.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { StoreMobileListComponent } from './store-mobile-list/store-mobile-list.component';
import { ModelMobileListComponent } from './model-mobile-list/model-mobile-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    StoresTabComponent,
    BrandsTabComponent,
    StoreByIdComponent,
    MobileListComponent,
    BrandDetailsComponent,
    StoreMobileListComponent,
    ModelMobileListComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HomeTabComponent,
    StoresTabComponent,
    BrandsTabComponent,
  ]
})
export class AppModule {
}
