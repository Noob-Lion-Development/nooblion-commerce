import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    API_URL = 'https://localhost:7278/api';
    GET_ALL_ORDERS_URL = `${this.API_URL}/Orders`;
    GET_ALL_ORDER_ITEMS = `${this.API_URL}/OrderItems`;

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.GET_ALL_ORDERS_URL);
    }
}
