import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/interfaces/productInterface';
import { ProductService } from 'src/services/product.service';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
    selector: 'nbl-productlist',
    standalone: true,
    templateUrl: './productlist.component.html',
    styleUrls: ['./productlist.component.css'],
    imports: [CommonModule, ProductCardComponent]
})
export class ProductlistComponent implements OnInit{

    products : Product[] = [];

    @Output() productAddedToCart = new EventEmitter();

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => this.products=data);
    }

}
