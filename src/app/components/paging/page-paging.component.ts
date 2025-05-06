import { Component, EventEmitter, Input, Output } from "@angular/core";
import PagingHeader from "../../model/dto/pagingHeader";

@Component({
    selector: 'page-paging',
    styleUrl: './page-paging.component.css',
    templateUrl: './page-paging.component.html'
})
export class PagePaging {
    @Input() pagingHeader: PagingHeader | undefined;
    @Input() productsCount: number | undefined;
    @Output() decreasePageNumber = new EventEmitter<void>();
    @Output() increasePageNumber = new EventEmitter<void>();
}