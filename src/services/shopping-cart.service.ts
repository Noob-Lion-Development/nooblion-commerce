import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    products: Product[] = [];

    addProductToCart(product: Product): void {
        this.products.push(product);
    }

    getShoppingCart(): Observable<Product[]> {
        return of(this.products);
    }
}
