import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product } from 'src/interfaces/productInterface';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
    selector: 'nbl-product-card',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
    @Input() product!: Product;

    constructor(private shoppingCartService: ShoppingCartService) {}

    addToCart(product: Product): void {
        this.shoppingCartService.addProductToCart(product);
    }
}
