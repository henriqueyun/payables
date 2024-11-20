import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/UserDTO';

@Controller('integrations/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() userDTO: UserDTO) {
    return this.authService.signUp(userDTO);
  }

  @Post('signin')
  signIn(@Body() userDTO: UserDTO) {
    return this.authService.signIn(userDTO);
  }

}
