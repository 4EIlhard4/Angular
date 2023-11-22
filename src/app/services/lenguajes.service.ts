import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  private url: string = "https://api-rest-5d504-default-rtdb.firebaseio.com/v1/toplist";

  constructor(private http: HttpClient) { }

  getLenguajes(): Observable<any[]> {
    const getUrl = `${this.url}.json`;
    return this.http.get<any[]>(getUrl)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  postLenguajes(body: any): Observable<any> {
    const postUrl = `${this.url}.json`;
    return this.http.post<any>(postUrl, body)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  deleteLenguajes(id: string): Observable<any> {
    const delUrl = `${this.url}/${id}.json`;
    return this.http.delete<any>(delUrl)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  updateLenguajes(id: string, body: any): Observable<any> {
    const uptUrl = `${this.url}/${id}.json`;
    return this.http.put<any>(uptUrl, body)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error in LenguajesService:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
