import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
import { SseService } from './sse.service';
import { ActorService } from 'src/actor/actor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from 'src/entity/actor.entity';

@Module({



  imports: [TypeOrmModule.forFeature([Actor])],

  controllers: [SseController],
  providers: [SseService, ActorService]
})
export class SseModule {}
