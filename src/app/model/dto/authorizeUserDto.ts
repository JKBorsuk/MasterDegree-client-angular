import UserDto from "./userDto";

export interface AuthorizeUserDto {
    user: UserDto,
    accessToken: string
}