import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WebhookModule } from './webhook/webhook.module';
import { TagModule } from './tag/tag.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MikroOrmModule.forRoot(),
    AuthModule,
    UserModule,
    WebhookModule,
    TagModule,
  ],
})
export class AppModule {}
