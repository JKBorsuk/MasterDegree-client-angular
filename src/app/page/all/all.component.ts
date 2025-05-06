import { Component, OnInit } from "@angular/core";
import Product from "../../model/entity/product";
import ProductService from "../../service/product.service";
import ApiResponse from "../../model/dto/api-response";
import { DialogService } from "../../service/dialog.service";

@Component({
    selector: 'all-page',
    styleUrl: './all.component.css',
    templateUrl: './all.component.html'
})
export class All implements OnInit {
    constructor(public productService: ProductService, public dialogService: DialogService) {}

    public products: Array<Product> = [];

    ngOnInit(): void {
        this.productService.getAllData().subscribe((apiResponse: ApiResponse<Array<Product>>) => {
            if(apiResponse.success) {
                this.products = apiResponse.data
            }
            else if(apiResponse.errorMessage) {
                this.dialogService.setMessage(apiResponse.errorMessage);
            }
        })
    }
}