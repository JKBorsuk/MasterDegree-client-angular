import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import UserDto from "../model/dto/userDto";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private isLogged = new BehaviorSubject<boolean>(localStorage.getItem("is_logged") == "true");
    $isLogged = this.isLogged.asObservable();

    private authData = new BehaviorSubject<UserDto | null>(null);
    $authData = this.authData.asObservable();

    constructor() { }

    public setIsLogged(isLogged: boolean): void {
        this.isLogged.next(isLogged);
    }

    public setAuthData(authData: UserDto | null): void {
        if(authData) {
            localStorage.setItem("is_logged", "true");
            this.setIsLogged(true);
        }
        else {
            localStorage.clear();
            this.setIsLogged(false);
        }
        
        this.authData.next(authData);
    }
}