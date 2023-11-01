import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortPollingModule } from './short-polling/short-polling.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entity/actor.entity';
import { ActorModule } from './actor/actor.module';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'today',
      entities: [Actor],
      synchronize: false,
    }),
    ShortPollingModule,
    ActorModule,
    SseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
