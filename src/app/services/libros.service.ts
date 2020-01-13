import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  httpOptions: any;
  url: any;
  constructor(private http: HttpClient) {
    this.url = environment.url;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  /**
   * Gets libros
   * @returns libros 
   */
  public getLibros(): Observable<any> {
    return this.http.get<any>(this.url + '/libros', this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }

  /**
   * Gets libro id
   * @param idLibro 
   * @returns  
   */
  public getLibroId(idLibro){
    return this.http.get<any>(this.url + '/libros/'+idLibro , this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }

  /**
   * Adds libro
   * @param data 
   * @returns libro 
   */
  addLibro (data): Observable<any> {
    return this.http.post<any>(this.url+ '/libros', data, this.httpOptions)
      .pipe(
        catchError(this.handleError('addHero', data))
      );
  }

  /**
   * Eliminars libros service
   * @param idLibro 
   * @returns  
   */
  eliminar(idLibro){
    return this.http.delete<any>(this.url+'/libros/'+idLibro, this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }

  /**
   * Adds autor
   * @param data 
   * @returns autor 
   */
  addAutor(data): Observable<any> {
    return this.http.post<any>(this.url+ '/autores', data, this.httpOptions)
      .pipe(
        catchError(this.handleError('addHero', data))
      );
  }

  /**
   * Gets autor
   * @returns  
   */
  getAutor(){
    return this.http.get<any>(this.url + '/autores', this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }
}
