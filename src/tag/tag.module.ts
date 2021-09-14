import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { GenerateFailedListener } from './listeners/generate-failed.listener';
import { GenerateSuccessListener } from './listeners/generate-success.listener';
import { WebhookModule } from 'src/webhook/webhook.module';

@Module({
  imports: [WebhookModule],
  controllers: [TagController],
  providers: [TagService, GenerateFailedListener, GenerateSuccessListener]
})
export class TagModule {}
