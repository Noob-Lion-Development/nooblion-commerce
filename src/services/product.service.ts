import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import{ Product } from 'src/interfaces/productInterface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    const products: Product[] = [
        {
            productName : 'Egg Whites',
            productDetails : 'These are egg whites',
            imageURL : 'assets/default.png',
            productPrice : 1.12,
            shippingPrice : 0.96,
            feesPrice : 0.00
        },
        {
            productName : 'Egg Blacks',
            productDetails : 'These are egg blacks',
            imageURL : 'assets/default.png',
            productPrice : 400.12,
            shippingPrice : 7000.96,
            feesPrice : 45096.00
        },
        {
            productName : 'Mushroom Vase',
            imageURL : 'assets/default.png',
            productPrice : 16.09,
            shippingPrice : 5.00,
            feesPrice : 4.00
        },
    ];

    return of(products);
  }
}
