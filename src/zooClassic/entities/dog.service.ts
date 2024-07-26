import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogEntity } from './dog.entity';
import { Args, Mutation } from '@nestjs/graphql';
import { CreateAnimalInput } from '../graphql/dto/createAnimal.dto';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(DogEntity)
    private readonly dogRepository: Repository<DogEntity>,
  ) {}

  @Mutation(() => DogEntity)
  async createDog(
    @Args('input')
    input: CreateAnimalInput,
  ): Promise<DogEntity> {
    const newDog = this.dogRepository.create(input);
    return await this.dogRepository.save(newDog);
  }
}
