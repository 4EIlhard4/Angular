import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string = "https://api-rest-5d504-default-rtdb.firebaseio.com/v1/toplist.json";

  constructor(private http: HttpClient) { }

  getLenguajes() : Observable<any>
  {
    return this.http.get(this.url)
  }
}
