import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { SendEventDto } from './dto/send-event.dto';
import { Webhook } from './entities/webhook.entity';

@Injectable()
export class WebhookService {
  constructor(
    
  ) {}

  public register(webhookDto: CreateWebhookDto) {
    throw new NotImplementedException
  }

  public async sendEvent(sendEventDto: SendEventDto): Promise<void> {
    throw new NotImplementedException
  }
}
