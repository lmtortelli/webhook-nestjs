
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AUTH_SECRET } from '../auth.constants'
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: AUTH_SECRET,
    });
  }

  async validate(payload: any) {
    return {id : payload.id} as UserDto
  }
}