import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuarios } from './usuarios.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:8000/api/usuarios';
  url_login = 'http://localhost:8000/api/login';

  constructor(private httpClient: HttpClient) { }

  async login (usuario:any) {
    const result = await this.httpClient.post<any>(this.url_login, JSON.stringify(usuario),this.httpOptions).toPromise();
    if(result && result.access_token){
      window.localStorage.setItem('access_token',result.access_token);
      return true;
    }
    return false;
  } 

   adicionar(usuario: Usuarios): Observable<Usuarios> {
    return this.httpClient.post<Usuarios>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  logina(usuario: Usuarios): Observable<Usuarios> {
    return this.httpClient.post<Usuarios>(this.url_login, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
   private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
