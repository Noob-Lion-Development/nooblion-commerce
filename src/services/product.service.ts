import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from 'src/interfaces/productInterface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    getProducts() {
        const products: Product[] = [
            {
                productName: 'Egg Whites',
                productDetails: 'These are egg whites',
                imageURL: 'assets/default.png',
                productPrice: 1.12,
                shippingPrice: 0.96,
                feesPrice: 0.0,
            },
            {
                productName: 'Egg Blacks',
                productDetails: 'These are egg blacks',
                imageURL: 'assets/default.png',
                productPrice: 400.12,
                shippingPrice: 7000.96,
                feesPrice: 45096.0,
            },
            {
                productName: 'Mushroom Vase',
                imageURL: 'assets/default.png',
                productPrice: 16.09,
                shippingPrice: 5.0,
                feesPrice: 4.0,
            },
        ];

        return of(products);
    }
}
