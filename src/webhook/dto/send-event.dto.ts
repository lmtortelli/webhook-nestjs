import { Event } from '../../shared/enum/Event.enum';

export class SendEventDto {
  public event: Event;
  public userId: string;
  public payload?: any;
}
