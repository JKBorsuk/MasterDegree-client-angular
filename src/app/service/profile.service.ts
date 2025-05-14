import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constrains } from "../const/Constrains";
import { Observable } from "rxjs";
import { AuthenticateUserDto } from "../model/dto/authenticateUserDto";
import { AuthorizeUserDto } from "../model/dto/authorizeUserDto";
import ApiResponse from "../model/dto/api-response";
import UserDto from "../model/dto/userDto";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(public http: HttpClient) {}

    public loginUser(userData: AuthenticateUserDto): Observable<ApiResponse<AuthorizeUserDto>> {
        return this.http.post<ApiResponse<AuthorizeUserDto>>(`${Constrains.API_URL}/user/login`, userData);
    }

    public registerUser(userData: AuthenticateUserDto): Observable<ApiResponse<AuthorizeUserDto>> {
        return this.http.post<ApiResponse<AuthorizeUserDto>>(`${Constrains.API_URL}/user/register`, userData);
    }

    public authorize(): Observable<ApiResponse<UserDto>> {
        return this.http.get<ApiResponse<UserDto>>(`${Constrains.API_URL}/user/authorize`);
    }
}