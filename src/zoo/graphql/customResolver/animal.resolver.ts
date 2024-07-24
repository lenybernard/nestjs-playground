import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnimalDTO } from '../dto/animal.dto';
import {
  Filter,
  InjectQueryService,
  QueryService,
} from '@ptc-org/nestjs-query-core';
import { AnimalConnection, AnimalQuery } from './animal.types';
import { CursorConnectionType } from '@ptc-org/nestjs-query-graphql';

@Resolver(() => AnimalDTO)
export class AnimalResolver {
  constructor(
    @InjectQueryService(AnimalDTO)
    private readonly service: QueryService<AnimalDTO>,
  ) {}

  @Query(() => AnimalDTO, { nullable: true })
  async animal(
    @Args('id', { type: () => String }) id: string,
  ): Promise<AnimalDTO> {
    return this.service.getById(id);
  }

  @Query(() => AnimalConnection, { nullable: 'items' })
  async animals(
    @Args() query: AnimalQuery,
  ): Promise<CursorConnectionType<AnimalDTO>> {
    const count = async (filter: Filter<AnimalDTO>) => {
      return this.service.count(filter);
    };

    return AnimalConnection.createFromPromise(
      (q) => this.service.query(q),
      {
        ...query,
      },
      count,
    );
  }

  @Mutation(() => AnimalDTO)
  removeAnimal(@Args('id') id: string) {
    return this.service.deleteOne(id);
  }
}
