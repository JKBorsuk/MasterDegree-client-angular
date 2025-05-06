import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'master-degree-footer',
    styleUrl: './footer.component.css',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: [ CommonModule ]
})
export class Footer { }