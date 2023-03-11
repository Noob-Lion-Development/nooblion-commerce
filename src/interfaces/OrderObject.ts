import { Order } from "./Order";
import { OrderItem} from "./OrderItem";

export interface OrderObject{
    orders: Order[];
    orderItems: OrderItem[];
}
