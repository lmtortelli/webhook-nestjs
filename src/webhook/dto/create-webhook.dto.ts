import { Event } from '../../shared/enum/Event.enum';

export class CreateWebhookDto {
  public callback: string;
  public event: Event;
  public user: string;
}
