import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'custom-button',
    styleUrl: './custom-button.component.css',
    templateUrl: './custom-button.component.html'
})
export class CustomButton {
    @Input() label: string = "";
    @Output() action = new EventEmitter<void>();
}