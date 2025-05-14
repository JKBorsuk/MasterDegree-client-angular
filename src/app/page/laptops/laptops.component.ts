import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductService } from "../../service/product.service";
import Product from "../../model/entity/product";
import PagingHeader from "../../model/dto/pagingHeader";
import ApiResponse from "../../model/dto/api-response";
import PagingContent from "../../model/dto/pagingContent";

@Component({
    selector: 'laptops-page',
    styleUrl: './laptops.component.css',
    templateUrl: './laptops.component.html'
})
export class Laptops implements OnInit {
    constructor(public productService: ProductService) {}

    public products: Array<Product> = [];
    public productsCount: number | undefined;

    public pagingHeader: PagingHeader | undefined;
    public pagingHeader$ = new BehaviorSubject<PagingHeader | undefined>(undefined);

    ngOnInit(): void {
        this.pagingHeader$.subscribe((value: PagingHeader | undefined) => {
            this.pagingHeader = value;
            if(value != null) {
                this.productService.getLaptopsProductsWithPagingAndProductName(value).subscribe((response: ApiResponse<PagingContent<Product>>) => {
                    if(response.success) {
                        this.products = response.data.content;
                        this.productsCount = response.data.count;
                    }
                })
            }
        })

        this.pagingHeader$.next({
            pageIndex: 0,
            pageSize: 12
        });
    }

    public increasePageNumber(): void {
        if(!this.pagingHeader) return;
        this.pagingHeader$.next({
            ...this.pagingHeader,
            pageIndex: this.pagingHeader.pageIndex + 1
        })
    }

    public decreasePageNumber(): void {
        if(!this.pagingHeader || this.pagingHeader.pageIndex == 0) return;
        this.pagingHeader$.next({
            ...this.pagingHeader,
            pageIndex: this.pagingHeader.pageIndex - 1
        })
    }
}