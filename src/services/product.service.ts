import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from 'src/interfaces/productInterface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    mockProducts: Product[] = [
        {
            id: '0',
            productName: 'Egg Whites',
            productDetails: 'These are egg whites',
            imageURL: 'assets/default.png',
            productPrice: 1.12,
            shippingPrice: 0.96,
            feesPrice: 0.0,
        },
        {
            id: '1',
            productName: 'Egg Blacks',
            productDetails: 'These are egg blacks',
            imageURL: 'assets/default.png',
            productPrice: 400.12,
            shippingPrice: 7000.96,
            feesPrice: 45096.0,
        },
        {
            id: '2',
            productName: 'Mushroom Vase',
            imageURL: 'assets/default.png',
            productPrice: 16.09,
            shippingPrice: 5.0,
            feesPrice: 4.0,
        },
    ];

    getProducts(): Observable<Product[]> {
        return of(this.mockProducts);
    }

    getProduct(id: string): Observable<Product | undefined> {
        return of(this.mockProducts.find((product) => product.id === id));
    }
}
