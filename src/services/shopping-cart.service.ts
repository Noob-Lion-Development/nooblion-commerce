import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[] = [];

   onAddToCartClicked(product: Product){
        alert('You have added ' + product.productName + ' To your cart!');
        this.products.push(product);
        alert('You have added ' + this.products.length + ' items to your cart!');
  }

  getShoppingCart(){
    return of(this.products);
  }
}
