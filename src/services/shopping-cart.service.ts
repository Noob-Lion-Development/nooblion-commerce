import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/interfaces/productInterface';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor(public toastService: ToastService) {}

    products: Product[] = [];

    addProductToCart(product: Product): void {
        this.products.push(product);
        this.toastService.pushToast(
            `"${product.name}" added to cart!`,
            'cart',
            { ariaLive: 'polite', autohide: true, delay: 8000 }
        );
    }

    getShoppingCart(): Observable<Product[]> {
        return of(this.products);
    }
}
