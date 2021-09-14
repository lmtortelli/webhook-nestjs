import { Injectable } from '@nestjs/common';
import { TagDto } from './dto/tag.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Event } from '../shared/enum/Event.enum';
import { GenerateFailedEvent } from './events/generate-failed.event';
import { GenerateSuccessEvent } from './events/generate-success.event';
import { Response } from 'express';
import { datatype } from 'faker/locale/pt_BR'

@Injectable()
export class TagService {
  constructor(private eventEmitter: EventEmitter2) { }
  
  public generate(tagDto: TagDto, res: Response): Response {
    if (Math.random() < 0.5) {
      const eventFailed = new GenerateFailedEvent(
        tagDto.orderId,
        tagDto.userId,
      );

      setTimeout(() => { this.eventEmitter.emit(Event.TAG_GENERATE_FAILED, eventFailed) }, 1000)
      
      return res.status(200).json({
        "status": false,
        "order_id": tagDto.orderId
      });
    }

    let authorizationCode = datatype.string(10)

    const eventSuccess = new GenerateSuccessEvent(
      tagDto.orderId,
      tagDto.userId,
      authorizationCode
    );

    setTimeout(() => { this.eventEmitter.emit(Event.TAG_GENERATE_SUCCESS, eventSuccess) }, 1000)
    

    return res.status(200).json({
      "status": true,
      "order_id": tagDto.orderId,
      "authorization_code": authorizationCode
    });
  }
}
