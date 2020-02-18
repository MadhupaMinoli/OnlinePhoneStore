import { Component} from '@angular/core';

import { HomeTabComponent } from './home-tab/home-tab.component';
import { BrandsTabComponent } from './brands-tab/brands-tab.component';
import { StoresTabComponent } from './stores-tab/stores-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Online Mobile Store';
  tabList = [
    {id: 0, key: 'home', desc: 'Home',route: '', component: HomeTabComponent, isActive: true, args: undefined},
    {id: 1, key: 'brands', desc: 'Brands',route:'brands', component: BrandsTabComponent},
    {id: 2, key: 'stores', desc: 'Stores', route:'stores',component: StoresTabComponent}
  ];
  selectedTab = this.tabList[0];

  navigate(activeTab) {
    this.tabList.forEach(tab => tab.isActive = false);

    activeTab.isActive = true;
    this.selectedTab = activeTab;
  }
}
