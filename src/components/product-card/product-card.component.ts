import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from 'src/services/product.service';
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
    /*
    THERE NEEDS TO

    constructor(private productService: ProductService){}

    products: Product[] = [];

    getProducts(): void{
        this.products = this.productService.getProducts();
    }

    ngOnInit(): void {
        this.getProducts();
    }
    */



    @Input() product?: Product;
    @Input() imageURL = 'assets/default.png';
    @Input() productName = 'Product Name Not Found';
    @Input() productDetails = 'No Product Description';
    @Input() productPrice = 0.00;
    @Input() shippingPrice = 0.00;
    @Input() feesPrice = 0.00;
    @Input() totalPrice = this.productPrice + this.shippingPrice + this.feesPrice;

    addToCart(){
        const shoppingCartService = new ShoppingCartService();
        // TODO: this.productName will need to be replaced with calling this.product.productName when the product list component is built
        shoppingCartService.onAddToCartClicked(this.productName);
    }

}
