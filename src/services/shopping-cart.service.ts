import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    products: Product[] = [];

    addProductToCart(product: Product): void {
        alert('You have added ' + product.productName + ' To your cart!');
        this.products.push(product);
        alert(
            'You have added ' + this.products.length + ' items to your cart!'
        );
    }

    getShoppingCart(): Observable<Product[]> {
        return of(this.products);
    }
}
