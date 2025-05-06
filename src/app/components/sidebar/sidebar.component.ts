import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../service/data.service";
import { Paths } from "../../const/Paths";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'master-degree-sidebar',
    styleUrl: 'sidebar.component.css',
    templateUrl: 'sidebar.component.html',
    imports: [ CommonModule ],
    standalone: true
})
export class Sidebar implements OnInit {
    constructor(public router: Router, public dataService: DataService) {}

    public isLogged: boolean | undefined;
    public Paths = Paths;

    public ngOnInit(): void {
        this.dataService.$isLogged.subscribe((isLogged: boolean) => {
            this.isLogged = isLogged;
        })
    }

    public logout(): void {
        this.dataService.setAuthData(null);
    }
}