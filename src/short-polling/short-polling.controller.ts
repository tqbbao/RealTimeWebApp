import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ActorService } from 'src/actor/actor.service';
import { CreateActorDTO } from 'src/actor/dto/create-actor.dto';
import { Actor } from 'src/entity/actor.entity';

@Controller('sp')
export class ShortPollingController {
  constructor(private readonly actorService: ActorService) {}

  //find all
  @Get()
  async findAll(
    @Query('ts') ts: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const data = await this.actorService.findAll();
    res.status(200).json({
      data,
    });
  }

  @Post()
  async create(
    @Body() createActor: CreateActorDTO,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const data = await this.actorService.create(createActor);

    res.status(200).json({
      data,
    });
  }
}
