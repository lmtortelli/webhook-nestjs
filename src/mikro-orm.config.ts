import { User } from "./user/entities/user.entity";
import { Webhook } from "./webhook/entities/webhook.entity";

export default {
  entities: [User, Webhook],
  dbName: 'tdealer',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: "lmtortelli",
  password: "lmtortelli"
};