import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from '../entity/actor.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateActorDTO } from './dto/create-actor.dto';
import { UpdateActorDTO } from './dto/update-actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private readonly actorRepository: Repository<Actor>,
  ) {}

  async findAll(): Promise<Actor[]> {
    const actor = await this.actorRepository.find();
    return actor;
  }
  async create(createActor: CreateActorDTO): Promise<Actor> {
    const actor = this.actorRepository.create(createActor);
    return await this.actorRepository.save(actor);
  }
}
