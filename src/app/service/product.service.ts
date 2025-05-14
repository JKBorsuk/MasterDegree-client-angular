import { Injectable } from "@angular/core";
import { Constrains } from "../const/Constrains";
import PagingHeader from "../model/dto/pagingHeader";
import FavoriteProductDto from "../model/dto/favoriteProductDto";
import { Observable } from "rxjs";
import Product from "../model/entity/product";
import ApiResponse from "../model/dto/api-response";
import { HttpClient } from "@angular/common/http";
import PagingContent from "../model/dto/pagingContent";

@Injectable({
    providedIn: 'root'
})
export class ProductService  {
    constructor(public http: HttpClient) {}

    public getAllData(): Observable<ApiResponse<Array<Product>>> {
        return this.http.get<ApiResponse<Array<Product>>>(`${Constrains.API_URL}/data/all`);
    }

    public getProductsWithPaging(pagingHeader: PagingHeader): Observable<ApiResponse<PagingContent<Product>>> {
        return this.http.post<ApiResponse<PagingContent<Product>>>(`${Constrains.API_URL}/data/data-paging`, pagingHeader);
    }

    public getMonitorsProductsWithPaging(pagingHeader: PagingHeader): Observable<ApiResponse<PagingContent<Product>>> {
        return this.http.post<ApiResponse<PagingContent<Product>>>(`${Constrains.API_URL}/data/data-paging/monitors`, pagingHeader);
    }

    public getHeadphonesProductsWithPagingAndProductName(pagingHeader: PagingHeader): Observable<ApiResponse<PagingContent<Product>>> {
        return this.http.post<ApiResponse<PagingContent<Product>>>(`${Constrains.API_URL}/data/data-paging/headphones`, pagingHeader);
    }

    public getLaptopsProductsWithPagingAndProductName(pagingHeader: PagingHeader): Observable<ApiResponse<PagingContent<Product>>> {
        return this.http.post<ApiResponse<PagingContent<Product>>>(`${Constrains.API_URL}/data/data-paging/laptops`, pagingHeader);
    }

    public getFavorites(pagingHeader: PagingHeader): Observable<ApiResponse<PagingContent<Product>>> {
        return this.http.post<ApiResponse<PagingContent<Product>>>(`${Constrains.API_URL}/data/user-favorites`, pagingHeader);
    }

    public addFavorite(favoriteProductDto: FavoriteProductDto): Observable<ApiResponse<number>> {
        return this.http.post<ApiResponse<number>>(`${Constrains.API_URL}/data/add-favorite`, favoriteProductDto);
    }

    public removeFavorite(favoriteProductDto: FavoriteProductDto): Observable<ApiResponse<number>> {
        return this.http.post<ApiResponse<number>>(`${Constrains.API_URL}/data/remove-favorite`, favoriteProductDto);
    }
}