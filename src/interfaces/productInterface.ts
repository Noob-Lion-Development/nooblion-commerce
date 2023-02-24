export interface Product {
    id: string;
    imageURL: string;
    productName: string;
    productDetails?: string; //optional property
    productPrice: number;
}
