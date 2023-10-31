import { Module } from '@nestjs/common';
import { ShortPollingController } from './short-polling.controller';
import { ShortPollingService } from './short-polling.service';

@Module({
  controllers: [ShortPollingController],
  providers: [ShortPollingService]
})
export class ShortPollingModule {}
