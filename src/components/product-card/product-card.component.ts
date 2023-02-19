import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nbl-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
    @Input() imageURL = 'assets/default.png';
    @Input() productName = 'Product Name Not Found';
    @Input() productDetails = 'No Product Description';
    @Input() productPrice = 0.00;
    @Input() shippingPrice = 0.00;
    @Input() feesPrice = 0.00;
    @Input() totalPrice = this.productPrice + this.shippingPrice + this.feesPrice;
}
