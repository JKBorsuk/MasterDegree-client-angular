import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private message = new BehaviorSubject<string | undefined>(undefined);
    $message = this.message.asObservable();

    constructor() {}

    setMessage(message: string | undefined): void {
        this.message.next(message);
    }
}