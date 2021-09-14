import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const user = this.userRepository.create({ email: userDto.email } as User);
    this.userRepository.persistAndFlush(user);

    return user;
  }

  public async find(userDto: UserDto): Promise<User> {
    return this.userRepository.findOne({ email: userDto.email });
  }
}
