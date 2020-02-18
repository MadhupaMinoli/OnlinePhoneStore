import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {
  private routeState;
  constructor() { }


  public setState(routeState){
    this.routeState = routeState;
  }

  public getState(){
    return this.routeState;
  }
}
