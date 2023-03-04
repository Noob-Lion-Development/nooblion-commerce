export interface Order{
    /*
    * Notice the Order interface is NOT a one for one with the Order table in our api.
    * This is due to Orders being slightly complex and actually broken into two different tables for normalization
    * 1). We don't need an ID because Entity FW will handle that for us
    * 2). We are adding a cart object here that will keep track of our list of products that will eventually be added to the OrderItem table in the DB
    */
    id: string;
    OrderCompleted: Date;
    FirstName: string;
    LastName: string;
    Country: string;
    Street: string;
    City: string;
}
