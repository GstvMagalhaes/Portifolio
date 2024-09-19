import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  SERVER_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllBackEnd() {
    return this.http.get(this.SERVER_URL + 'backendLanguages');
  }

  getAllFrontEnd() {
    return this.http.get(this.SERVER_URL + 'frontendLanguages');
  }

  getAllFrameworks() {
    return this.http.get(this.SERVER_URL + 'frameworks');
  }
}
