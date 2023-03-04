import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from 'src/interfaces/Order';

@Component({
  selector: 'nbl-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
    orders : Order[] = [];
}
