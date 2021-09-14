import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { Webhook } from './entities/webhook.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CallbackController } from './callback.controller';

@Module({
  imports: [HttpModule, MikroOrmModule.forFeature([Webhook])],
  controllers: [WebhookController, CallbackController],
  providers: [WebhookService],
  exports: [WebhookService],
})
export class WebhookModule {}
