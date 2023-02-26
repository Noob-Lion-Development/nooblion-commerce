import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    API_URL = 'https://localhost:7278/api';
    GET_URL = `${this.API_URL}/products`;
    POST_URL = this.GET_URL;

    mockProducts: Product[] = [
        {
            id: '0',
            name: 'Egg Whites',
            details: 'These are egg whites',
            imageURL: 'assets/default.png',
            price: 1.12,
        },
        {
            id: '1',
            name: 'Egg Blacks',
            details: 'These are egg blacks',
            imageURL: 'assets/default.png',
            price: 400.12,
        },
        {
            id: '2',
            name: 'Mushroom Vase',
            imageURL: 'assets/default.png',
            price: 16.09,
        },
    ];

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.GET_URL);
    }

    getProduct(id: string): Observable<Product | undefined> {
        return this.http.get<Product>(`${this.GET_URL}/${id}`);
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.POST_URL, product);
    }
}
