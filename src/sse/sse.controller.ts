import { Controller, Sse } from '@nestjs/common';
import { Observable, interval, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActorService } from 'src/actor/actor.service';
import { Actor } from 'src/entity/actor.entity';

@Controller('sse')
export class SseController {
  constructor(private readonly actorService: ActorService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(5000).pipe(
      switchMap(async (_) => {
        const actors = await this.actorService.findAll();
        return new MessageEvent('message', { data: JSON.stringify(actors) });
      }),
    );
  }
}
export interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}
