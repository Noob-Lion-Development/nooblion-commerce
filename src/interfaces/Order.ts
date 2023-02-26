import { Product } from 'src/interfaces/productInterface';

export interface Order{
    /*
    * Notice the Order interface is NOT a one for one with teh Order table in our api.
    * This is due to Orders being slightly complex and actually broken into two different tables for normalization
    * 1). We don't need an ID because Entity FW will handle that for us
    * 2). We are adding a list of products here that will be added to the OrderItem table
    */

    // TODO: figure out how I am going to push the products to the table while knowing the order ID and quantity, may require restructuring interface
    OrderCompleted: Date;
    FirstName: string;
    LastName: string;
    Country: string;
    Street: string;
    City: string;
    Products: Product[];
}
