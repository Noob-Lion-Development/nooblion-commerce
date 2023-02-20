import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  //constructor() { }
  products: Product[] = [];

   onAddToCartClicked(product: Product){
        alert('You have added ' + product.productName + ' To your cart!');
        this.products.push(product);
        alert('You have added ' + this.products.length + ' items to your cart!');
        alert(this.getShoppingCartTotal());
  }

  getShoppingCart(){

    return of(this.products);
  }

  getShoppingCartTotal(){
    console.log(this.products.reduce((sum, current) => sum + current.productPrice, 0));
     return of(this.products.reduce((sum, current) => sum + current.productPrice, 0));
  }
}
