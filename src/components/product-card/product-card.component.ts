import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from 'src/interfaces/productInterface';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'nbl-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    constructor(private shoppingCartService: ShoppingCartService){}
    addToCart(product: Product){
        this.shoppingCartService.addProductToCart(product);
    }

    findTotalValue(){
        return this.product.productPrice + this.product.shippingPrice + this.product.feesPrice;
    }

    @Input() product!: Product;

}
