export interface Product{
    imageURL: string;
    productName: string;
    productDetails?: string; //optional property
    productPrice: number;
    shippingPrice: number;
    feesPrice: number;
}

function findTotalValue(productObj: Product){
    return productObj.productPrice + productObj.shippingPrice + productObj.feesPrice;
}
