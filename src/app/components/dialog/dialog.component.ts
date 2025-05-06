import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DialogService } from "../../service/dialog.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'master-degree-dialog',
    styleUrl: './dialog.component.css',
    templateUrl: './dialog.component.html',
    imports: [ CommonModule ],
    standalone: true
})
export class Dialog implements OnInit {
    public message: string | undefined;

    constructor(public dialogService: DialogService) {}

    ngOnInit(): void {
        this.dialogService.$message.subscribe((message: string | undefined) => {
            this.message = message;
        })
    }

    disableDialog(): void {
        this.dialogService.setMessage(undefined);
    }
}