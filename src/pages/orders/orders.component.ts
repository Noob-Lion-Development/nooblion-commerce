import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from 'src/components/order/order.component';
import { OrderService } from 'src/services/order.service';
import { OrderObject } from 'src/interfaces/OrderObject';

@Component({
  selector: 'nbl-orders',
  standalone: true,
  imports: [CommonModule, OrderComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
    ordersObj: OrderObject = {
        orders : [],
        orderItems : []
    };

    constructor(private orderService: OrderService){}

    ngOnInit(): void {
        this.orderService.getOrders().subscribe(data => this.ordersObj=data);
    }
}

