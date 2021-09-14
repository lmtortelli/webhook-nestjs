import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Post()
  public login(@Body() body) { 
    return this.authService.isAuthorized(body as UserDto)
  }
}
