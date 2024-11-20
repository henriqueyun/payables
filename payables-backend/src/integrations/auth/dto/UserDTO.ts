import { IsNotEmpty, IsString } from "class-validator"

export class UserDTO {
    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    password: string
}
