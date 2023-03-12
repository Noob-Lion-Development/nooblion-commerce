import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from 'src/interfaces/Order';
import { OrderItem } from 'src/interfaces/OrderItem';

@Component({
  selector: 'nbl-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
    @Input() order!: Order;
    @Input() orderItems: OrderItem[] = [];
}
