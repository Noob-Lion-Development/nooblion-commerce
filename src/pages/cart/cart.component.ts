import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";

import { Product } from 'src/interfaces/productInterface';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
    selector: 'nbl-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    imports: [CommonModule, TitleComponent, ProductCardComponent]
})
export class CartComponent implements OnInit{
    products: Product[] = [];

    constructor(private shoppingCartService: ShoppingCartService){}

    ngOnInit(): void {
        this.shoppingCartService.getShoppingCart().subscribe(data => this.cartProducts=data);
    }


}
