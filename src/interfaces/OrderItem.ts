import { Product } from "./productInterface";

export interface OrderItem{
    id: number;
    ProductId: string;
    OrderId: string;
    Quantity: number;
    Product: Product;
}
