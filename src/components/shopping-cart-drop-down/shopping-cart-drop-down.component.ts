import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { Product } from 'src/interfaces/productInterface';

@Component({
    selector: 'nbl-shopping-cart-drop-down',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shopping-cart-drop-down.component.html',
    styleUrls: ['./shopping-cart-drop-down.component.css'],
})
export class ShoppingCartDropDownComponent implements OnInit {
    cartProducts: Product[] = [];
    totalPrice = 0;

    constructor(private shoppingCartService: ShoppingCartService) {}

    ngOnInit(): void {
        this.shoppingCartService
            .getShoppingCart()
            .subscribe((data) => (this.cartProducts = data));
    }

    getTotal(): number {
        return this.cartProducts.reduce(
            (sum, current) => sum + current.price,
            0
        );
    }
}
