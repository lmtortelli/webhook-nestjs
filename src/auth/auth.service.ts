import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async isAuthorized(userDto: UserDto) {
    const user = await this.userService.find(userDto);
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwtService.sign({ id: user.id }),
    };
  }
}
