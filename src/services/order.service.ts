import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    API_URL = 'https://localhost:7278/api';
    GET_URL = `${this.API_URL}/?????`;
    POST_URL = this.GET_URL;
}
