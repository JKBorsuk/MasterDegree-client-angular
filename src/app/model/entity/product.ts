export default interface Product {
    id: number,
    productId: string | null,
    productName: string | null,
    productCategory: string | null,
    productDescription: string | null,
    price: number,
    stockQuantity: number,
    warrantyPeriod: number,
    productDimensions: string | null,
    manufacturingDate: Date,
    expirationDate: Date,
}