import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  private url: string = "https://api-rest-5d504-default-rtdb.firebaseio.com/v1/toplist";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getLenguajes(): Observable<any[]> {
    const getUrl = `${this.url}.json`;
    return this.http.get<any[]>(getUrl)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  postLenguajes(body: any): Observable<any> {
    if (this.authService.getUser() !== null) {
      const postUrl = `${this.url}.json`;
      return this.http.post<any>(postUrl, body)
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
  }

  deleteLenguajes(id: string): Observable<any> {
    if (this.authService.getUser() !== null) {
      const delUrl = `${this.url}/${id}.json`;
      return this.http.delete<any>(delUrl)
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
  }

  updateLenguajes(id: string, body: any): Observable<any> {
    if (this.authService.getUser() !== null) {
      const uptUrl = `${this.url}/${id}.json`;
      return this.http.put<any>(uptUrl, body)
        .pipe(
          catchError(error => this.handleError(error))
        );
    } else {
      // Manejar el caso cuando el usuario no está autenticado
      return throwError('Usuario no autenticado');
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('Error in LenguajesService:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
