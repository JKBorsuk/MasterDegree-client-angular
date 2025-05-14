import { Component, EventEmitter, Input, Output } from "@angular/core";
import Product from "../../model/entity/product";
import FavoriteProductDto from "../../model/dto/favoriteProductDto";
import ApiResponse from "../../model/dto/api-response";
import { ProductService } from "../../service/product.service";
import { DialogService } from "../../service/dialog.service";


@Component({
    selector: 'product-grid-item',
    styleUrl: "./product-grid-item.component.css",
    templateUrl: './product-grid-item.component.html'
})
export class ProductGridItem {
    @Input() product: Product | undefined;
    @Input() isFavorite?: boolean;
    @Output() reloadDataFunc = new EventEmitter<void>();

    constructor(public productService: ProductService, public dialogService: DialogService) {}

    public addFavorite(productId: number): void {
        let favoriteProduct: FavoriteProductDto = {
            productId: productId
        };

        this.productService.addFavorite(favoriteProduct).subscribe((response: ApiResponse<number>) => {
            if(response.errorMessage != null) {
                this.dialogService.setMessage(response.errorMessage);
            }
            else if(response.success) {
                this.dialogService.setMessage(`Z powodzeniem dodano do ulubionych produkt o id: ${favoriteProduct.productId}.`);
                if(this.reloadDataFunc != undefined) {
                    this.reloadDataFunc.emit();
                }
            }
        })
    }

    public removeFavorite(productId: number): void {
        let favoriteProduct: FavoriteProductDto = {
            productId: productId
        };
        
        this.productService.removeFavorite(favoriteProduct).subscribe((response: ApiResponse<number>) => {
            if(response.errorMessage != null) {
                this.dialogService.setMessage(response.errorMessage);
            }
            else if(response.success) {
                this.dialogService.setMessage(`Z powodzeniem usunięto z ulubionych produkt o id: ${favoriteProduct.productId}.`);
                if(this.reloadDataFunc != undefined) {
                    this.reloadDataFunc.emit();
                }
            }
        })
    }
}