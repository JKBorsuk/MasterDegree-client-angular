import { DataService } from "../../service/data.service";
import { DialogService } from "../../service/dialog.service";
import { Router } from "@angular/router";
import { ProfileService } from "../../service/profile.service";
import { AuthenticateUserDto } from "../../model/dto/authenticateUserDto";
import { AuthorizeUserDto } from "../../model/dto/authorizeUserDto";
import { Paths } from "../../const/Paths";
import { Component } from "@angular/core";
import ApiResponse from "../../model/dto/api-response";
import UserDto from "../../model/dto/userDto";

@Component({
    selector: 'login-page',
    styleUrl: './login.component.css',
    templateUrl: './login.component.html'
})
export class Login {
    constructor(public profileService: ProfileService, 
        public dataService: DataService, 
        public dialogService: DialogService, 
        public router: Router) { }

    public userData: AuthenticateUserDto = new AuthenticateUserDto;

    setAuthData(data: UserDto): void {
        this.dataService.setAuthData(data);
    }

    callDialog(message: string): void {
        this.dialogService.setMessage(message);
    }

    redirect(route: string): void {
        this.router.navigate([ route ]);
    }

    updateUserData(property: keyof AuthenticateUserDto, value: string) {
        this.userData = {
            ...this.userData,
            [property]: value
        };
    }

    login(): void {
        this.profileService.loginUser(this.userData).subscribe((apiResponse: ApiResponse<AuthorizeUserDto>) => {
            if(apiResponse.success) {
                localStorage.setItem("access-token", apiResponse.data.accessToken);
                this.setAuthData(apiResponse.data.user);
                this.redirect(Paths.HOME);
            }
            if(apiResponse.errorMessage != null) {
                this.callDialog(apiResponse.errorMessage);
            }
        })
    }
}