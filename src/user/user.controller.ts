import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() userDto: UserDto): Promise<User> {
    return this.userService.create(userDto);
  }
}
