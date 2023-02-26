import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/interfaces/productInterface';

@Component({
    selector: 'nbl-product-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
    constructor(private productService: ProductService) {}

    productForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        price: new FormControl(null, Validators.required),
        details: new FormControl(null, Validators.required),
        imageUrl: new FormControl(
            'https://picsum.photos/800/800',
            Validators.required
        ),
    });

    handleSubmit(): void {
        if (this.productForm.valid !== null) {
            const product = {
                name: this.productForm.get('name')?.value ?? '',
                price: this.productForm.get('price')?.value ?? 0,
                details: this.productForm.get('details')?.value ?? '',
                imageURL: this.productForm.get('imageUrl')?.value ?? '',
            };
            this.addProduct(product);
            this.productForm.reset();
        } else {
            console.log('Invalid form...');
        }
    }

    addProduct(product: Product): void {
        this.productService
            .addProduct(product)
            .subscribe((response) => console.log('Added product: ', response));
    }
}
