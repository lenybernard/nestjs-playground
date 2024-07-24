import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatEntity } from './cat.entity';
import { Args, Mutation } from '@nestjs/graphql';
import { CreateCatInput } from '../graphql/dto/createCat.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  @Mutation(() => CatEntity)
  async createCat(
    @Args('input')
    input: CreateCatInput,
  ): Promise<CatEntity> {
    const newCat = this.catRepository.create(input);
    return await this.catRepository.save(newCat);
  }
}
