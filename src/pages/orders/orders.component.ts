import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from 'src/interfaces/Order';
import { OrderComponent } from 'src/components/order/order.component';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'nbl-orders',
  standalone: true,
  imports: [CommonModule, OrderComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
    orders : Order[] = [];

    constructor(private orderService: OrderService){}

    ngOnInit(): void {
        this.orderService.getOrders().subscribe(data => this.orders=data);
    }
}
