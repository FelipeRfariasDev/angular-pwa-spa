import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Contatos } from './contatos.models';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  url = 'http://localhost:3000/contatos';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contatos[]> {
    return this.httpClient.get<Contatos[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getContatoById(id: number): Observable<Contatos> {
    return this.httpClient.get<Contatos>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  excluir(contato: Contatos) {
    return this.httpClient.delete<Contatos>(this.url + '/' + contato.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  adicionar(contato: Contatos): Observable<Contatos> {
    return this.httpClient.post<Contatos>(this.url, JSON.stringify(contato), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  alterar(contato: Contatos): Observable<Contatos> {
    return this.httpClient.put<Contatos>(this.url + '/' + contato.id, JSON.stringify(contato), this.httpOptions)
      .pipe(
        retry(1),
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
