import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URI = 'http://127.0.0.1:8000';
  // API_URI = 'https://fdcb5563.ngrok.io';
  token ='Basic YWRtaW46YWRtaW4xMjM0';

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any>{
    return this.http.get(this.API_URI+'/producto',{
      headers: new HttpHeaders().set('Authorization',  this.token),
    });
  }

  getProduct(id: string): Observable<any>{
    return this.http.get(this.API_URI+'/producto/${id}',{
      headers: new HttpHeaders().set('Authorization',  this.token),
    });
  }

  addProduct(data: Producto){
    return this.http.post(this.API_URI+'/producto', data,{
      headers: new HttpHeaders().set('Authorization',  this.token),
    });
  }
}
