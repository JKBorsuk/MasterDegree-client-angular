import Product from "../entity/product";

export default interface UserDto {
    id: number,
    email: string,
    favorites: Array<Product>
}