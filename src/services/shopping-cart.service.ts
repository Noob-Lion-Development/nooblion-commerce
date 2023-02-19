import { Injectable } from '@angular/core';
import { Product } from 'src/interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  //constructor() { }

  onAddToCartClicked(productName: string){
    alert('You have added ' + productName + ' To your cart!');
  }
}
