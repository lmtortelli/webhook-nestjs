import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WebhookService } from '../../webhook/webhook.service';
import { Event } from '../../shared/enum/Event.enum';
import { GenerateSuccessEvent } from '../events/generate-success.event';


@Injectable()
export class GenerateSuccessListener {
  constructor(
    private webhookService: WebhookService
  ) { }

  @OnEvent(Event.TAG_GENERATE_SUCCESS)
  handle(event: GenerateSuccessEvent) {
    this.webhookService.sendEvent({
      event: Event.TAG_GENERATE_SUCCESS,
      userId: event.userId,
      payload: {
        order_id: event.orderId
      }
    })
  }
}