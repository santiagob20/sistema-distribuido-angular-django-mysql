import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_URI = 'http://127.0.0.1:8000';
  // API_URI = 'https://fdcb5563.ngrok.io';
  token = 'Basic YWRtaW46YWRtaW4xMjM0';

  constructor(private http: HttpClient) { }

  getAllPersonas(): Observable<any> {
    return this.http.get(this.API_URI + '/persona', {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }

  getPersona(id: string): Observable<any> {
    return this.http.get(this.API_URI + '/persona/${id}', {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }

  savePersona(data: Persona) {
    data.clave = sha256(data.clave);
    return this.http.post(this.API_URI + '/persona/', data, {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }

  authPersona(data:Persona){
    return this.http.post(this.API_URI + '/authuser/', data, {
      headers: new HttpHeaders().set('Authorization', this.token),
    });
  }

}
