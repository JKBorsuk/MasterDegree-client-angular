import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'custom-input',
    styleUrl: './custom-input.component.css',
    templateUrl: './custom-input.component.html'
})
export class CustomInput {
    @Input() type: "text" | "password" | undefined;
    @Input() defaultPlaceholder: boolean | undefined;
    @Input() disabled: boolean | undefined;
    @Input() placeholder: string | undefined;
    @Input() defaultValue: string | undefined;
    @Input() name: string | undefined;
    @Output() onChange = new EventEmitter<string>();

    public tmp = crypto.randomUUID();

    public change(event: Event): void {
        this.onChange.emit((event.target as HTMLInputElement).value);
    }
}