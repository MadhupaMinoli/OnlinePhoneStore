import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient:HttpClient) { }

  public getAll(){
    return this.httpClient.get("http://localhost:8080/StoreProducts/getAll");
  }

  public getMobileDetailsById(id){
    return this.httpClient.get("http://localhost:8080/mobilePhone/"+id);
  }

  public getModelsDetailsById(id){
    return this.httpClient.get("http://localhost:8080/model/"+id);
  }
}
