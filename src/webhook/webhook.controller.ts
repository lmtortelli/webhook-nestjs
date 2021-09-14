import { Controller, Post, Body, UseGuards, Request, NotImplementedException } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  public register(@Body() webhookDto: CreateWebhookDto, @Request() req) {
    throw new NotImplementedException
  }
}
