import { Entity, Enum, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../../user/entities/user.entity';
import { v4 } from 'uuid';
import { Event } from '../../shared/enum/Event.enum';

@Entity()
export class Webhook {
  @PrimaryKey()
  public id: string = v4();

  @Property()
  public callback: string;

  @Enum(() => Event)
  public event: Event;

  @ManyToOne(() => User, { mapToPk: true })
  public user!: string;

  @Property()
  public createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();
}
