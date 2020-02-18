import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private httpClient:HttpClient) { }

  public getAll(){
    return this.httpClient.get("http://localhost:8080/Brand/getAll");
  }
}
