import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnimalEntity } from '../../entities/animal.entity';
import { AnimalService } from '../../entities/animal.service';

@Resolver(() => AnimalEntity)
export class AnimalResolver {
  constructor(private readonly service: AnimalService) {}

  @Query(() => AnimalEntity, { nullable: true })
  async animal(
    @Args('id', { type: () => String }) id: string,
  ): Promise<AnimalEntity> {
    return this.service.findOneById(id);
  }

  @Query(() => [AnimalEntity])
  async animals(): Promise<Array<AnimalEntity>> {
    return this.service.findAll();
  }

  @Mutation(() => AnimalEntity)
  removeAnimal(@Args('id') id: string) {
    return this.service.remove(id);
  }
}
