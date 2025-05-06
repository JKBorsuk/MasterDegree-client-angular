import UserDto from "./userDto";

export default interface AuthorizeUserDto {
    user: UserDto,
    accessToken: string
}