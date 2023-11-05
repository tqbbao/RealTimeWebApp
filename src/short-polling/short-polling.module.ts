import { Module } from '@nestjs/common';
import { ShortPollingController } from './short-polling.controller';
import { ShortPollingService } from './short-polling.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from 'src/entity/actor.entity';
import { ActorService } from 'src/actor/actor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ShortPollingController],
  providers: [ShortPollingService, ActorService]
})
export class ShortPollingModule {}
