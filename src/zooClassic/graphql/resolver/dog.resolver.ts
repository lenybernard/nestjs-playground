import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DogEntity } from '../../entities/dog.entity';
import { DogService } from '../../entities/dog.service';
import { CreateAnimalInput } from '../dto/createAnimal.dto';

@Resolver(() => DogEntity)
export class DogResolver {
  constructor(private readonly service: DogService) {}
  @Mutation(() => DogEntity)
  createDog(
    @Args('input')
    input: CreateAnimalInput,
  ) {
    return this.service.createDog(input);
  }
}
