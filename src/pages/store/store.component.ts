import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/interfaces/productInterface';
import { ProductService } from 'src/services/product.service';
import { ProductCardComponent } from 'src/components/product-card/product-card.component';

@Component({
    selector: 'nbl-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css'],
    imports: [CommonModule, ProductCardComponent]
})
export class StoreComponent implements OnInit {
    products : Product[] = [];

    @Output() productAddedToCart = new EventEmitter();

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => this.products=data);
    }
}
