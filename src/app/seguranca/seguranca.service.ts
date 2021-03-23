import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {UsuariosModels} from '../usuarios/usuarios.models';


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  urlUsuarios = 'http://localhost:8000/api/usuarios';
  urlLogin = 'http://localhost:8000/api/login';

  constructor(private httpClient: HttpClient) {}

  async login (usuario:any) {
    const result = await this.httpClient.post<any>(this.urlLogin, JSON.stringify(usuario),this.httpOptions).toPromise();
    if(result && result.access_token){
      window.localStorage.setItem('access_token',result.access_token);
      console.log("deu certo" + true);
      return true;
    }
    console.log("login errado" + true);
    return false;
  }

  adicionar(usuario: UsuariosModels): Observable<UsuariosModels> {
    return this.httpClient.post<UsuariosModels>(this.urlUsuarios, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
