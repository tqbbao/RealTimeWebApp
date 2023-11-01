import { Controller, Sse } from '@nestjs/common';
import { Observable, interval, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActorService } from 'src/actor/actor.service';
import { Actor } from 'src/entity/actor.entity';

@Controller('sse')
export class SseController {
  constructor(private readonly actorService: ActorService) {}

  //   @Sse('sse')
  //   sse(): Observable<MessageEvent> {
  //     let count = 0;

  //     return of(null).pipe(
  //       switchMap(async () => {
  //         count++;
  //         const actors = await this.actorService.findAll();
  //         const data = JSON.stringify(actors);
  //         return new MessageEvent('message', { data });
  //       }),
  //       switchMap((initialData) => {
  //         if (count === 1) {
  //           return of(initialData);
  //         } else {
  //           return interval(5000).pipe(
  //             switchMap(async () => {
  //               const actors = await this.actorService.findAll();
  //               const data = JSON.stringify(actors);
  //               return new MessageEvent('message', { data });
  //             }),
  //           );
  //         }
  //       }),
  //     );
  //   }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(5000).pipe(
      switchMap(async (_) => {
        const actors = await this.actorService.findAll();
        return new MessageEvent('message', { data: JSON.stringify(actors) });
      }),
    );
  }
  //   @Sse('sse')
  //   sse(): Observable<any> {
  //     return interval(5000).pipe(
  //       switchMap(async () => await this.actorService.findAll()),
  //       map((p) => ({
  //         data: {

  //         },
  //       })),
  //     );
  //   }
}
