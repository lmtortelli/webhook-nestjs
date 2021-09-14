import { Injectable } from '@nestjs/common';
import { TagDto } from './dto/tag.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Event } from '../shared/enum/Event.enum';
import { GenerateFailedEvent } from './events/generate-failed.event';
import { GenerateSuccessEvent } from './events/generate-success.event';

@Injectable()
export class TagService {
  constructor(private eventEmitter: EventEmitter2) { }
  
  public generate(tagDto: TagDto): void {
    if (Math.random() < 0.5) {
      const eventFailed = new GenerateFailedEvent(
        tagDto.order_id,
        tagDto.userId,
      );
      this.eventEmitter.emit(Event.TAG_GENERATE_FAILED, eventFailed);
      return;
    }

    const eventSuccess = new GenerateSuccessEvent(
      tagDto.order_id,
      tagDto.userId,
    );

    this.eventEmitter.emit(Event.TAG_GENERATE_SUCCESS, eventSuccess);

    return;
  }
}
