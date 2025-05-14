import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DialogService } from "../../service/dialog.service";
import { DataService } from "../../service/data.service";
import { ProfileService } from "../../service/profile.service";
import { AuthenticateUserDto } from "../../model/dto/authenticateUserDto";
import { AuthorizeUserDto } from "../../model/dto/authorizeUserDto";
import ApiResponse from "../../model/dto/api-response";
import { Paths } from "../../const/Paths";

@Component({
    selector: 'register-page',
    styleUrl: './register.component.css',
    templateUrl: './register.component.html'
})
export class Register {
    constructor(public profileService: ProfileService, 
            public dataService: DataService, 
            public dialogService: DialogService, 
            public router: Router) { }
    
    public userData: AuthenticateUserDto = new AuthenticateUserDto;
    public passwordConfirm: string = "";

    updateUserData(property: keyof AuthenticateUserDto, value: string) {
        this.userData = {
            ...this.userData,
            [property]: value
        };
    }

    callDialog(message: string): void {
        this.dialogService.setMessage(message);
    }

    redirect(route: string): void {
        this.router.navigate([ route ]);
    }

    setPasswordConfirm(value: string): void {
        this.passwordConfirm = value;
    }

    register(): void {
        if(this.userData.password != this.passwordConfirm) {
            this.callDialog("Podane hasła różnią się od siebie.");
            return;
        }
        this.profileService.registerUser(this.userData).subscribe((apiResponse: ApiResponse<AuthorizeUserDto>) => {
            if(apiResponse.success) {
                this.callDialog("Z powodzeniem utworzono konto. Możesz się już na nie zalogować.");
                this.redirect(Paths.LOGIN);
            }
            else if(apiResponse.errorMessage) {
                this.callDialog(apiResponse.errorMessage);
            }
        })
    }
}