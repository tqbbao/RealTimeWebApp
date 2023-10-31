import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortPollingModule } from './short-polling/short-polling.module';

@Module({
  imports: [ShortPollingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
