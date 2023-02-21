import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/interfaces/productInterface';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'nbl-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    imports: [CommonModule, TitleComponent],
})
export class ProductDetailComponent implements OnInit {
    product?: Product;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            const productId = params['id'];
            if (productId) {
                this.productService
                    .getProduct(productId)
                    .subscribe((product) => {
                        this.product = product;
                    });
            }
        });
    }
}
