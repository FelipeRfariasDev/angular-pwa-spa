import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  url = 'http://localhost:8000/api/login';

  constructor(private httpClient: HttpClient) {}

}
