import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { TagService } from './tag.service';
import { TagDto } from './dto/tag.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public generate(
    @Body() tagDto: TagDto,
    @Request() req,
    @Res() res: Response,
  ) {
    tagDto.userId = req.user.id;

    return this.tagService.generate(tagDto, res);
  }
}
