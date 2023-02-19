import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  //constructor() { }

  onAddToCartClicked(productName: string){
    alert('You have added ' + productName + ' To your cart!');
  }
}
