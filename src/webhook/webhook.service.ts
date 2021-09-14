import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { SendEventDto } from './dto/send-event.dto';
import { Webhook } from './entities/webhook.entity';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhook)
    private webhookRepository: EntityRepository<Webhook>,
    private httpService: HttpService,
  ) {}

  public register(webhookDto: CreateWebhookDto) {
    const webhook = this.webhookRepository.create(webhookDto);
    this.webhookRepository.persistAndFlush(webhook);
    return webhook;
  }

  public async sendEvent(sendEventDto: SendEventDto): Promise<void> {
    
    const webhookRegistered = await this.webhookRepository.findOne({
      event: sendEventDto.event,
      user: sendEventDto.userId,
    });
    
    if (!webhookRegistered) {
      return;
    }
    
    this.httpService
      .post(webhookRegistered.callback, sendEventDto.payload)
      .toPromise();
  }
}
