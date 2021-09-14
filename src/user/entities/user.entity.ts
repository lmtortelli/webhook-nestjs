import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { v4 } from 'uuid';

@Entity()
@Unique({ properties: ['email'] })
export class User { 
  @PrimaryKey()
  public id: string = v4()

  @Property()
  public email!: string;
}
