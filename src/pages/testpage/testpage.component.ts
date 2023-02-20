import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

import { ProductService } from 'src/services/product.service';
import { Product } from 'src/interfaces/productInterface';
import { ShoppingCartService } from 'src/services/shopping-cart.service';

@Component({
    selector: 'nbl-testpage',
    standalone: true,
    templateUrl: './testpage.component.html',
    styleUrls: ['./testpage.component.css'],
    imports: [CommonModule, TitleComponent, ProductCardComponent]
})
export class TestpageComponent implements OnInit {

    name = 'Trevor';
    addStyle = true;
    products : Product[] = [];
    cartProducts : Product[] = [];

    @Output() productAddedToCart = new EventEmitter();

    constructor(private productService: ProductService,
        private shoppingCartService: ShoppingCartService){}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => this.products=data);
        this.shoppingCartService.getShoppingCart().subscribe(data => this.cartProducts=data)
    }



}


