import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WebhookService } from '../../webhook/webhook.service';
import { Event } from '../../shared/enum/Event.enum';
import { GenerateFailedEvent } from '../events/generate-failed.event';

@Injectable()
export class GenerateFailedListener {
  constructor(private webhookService: WebhookService) {}

  @OnEvent(Event.TAG_GENERATE_FAILED)
  handle(event: GenerateFailedEvent) {
    this.webhookService.sendEvent({
      event: Event.TAG_GENERATE_SUCCESS,
      userId: event.userId,
      payload: {
        order_id: event.orderId,
        message: event.message,
      },
    });
  }
}
