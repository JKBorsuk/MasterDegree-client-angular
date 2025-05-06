import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'master-degree-navbar',
    styleUrl: './navbar.component.css',
    templateUrl: './navbar.component.html',
    imports: [ CommonModule ],
    standalone: true
})
export class Navbar { }