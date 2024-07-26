import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatEntity } from '../../entities/cat.entity';
import { CatService } from '../../entities/cat.service';
import { CreateCatInput } from '../dto/createCat.dto';

@Resolver(() => CatEntity)
export class CatResolver {
  constructor(private readonly service: CatService) {}
  @Mutation(() => CatEntity)
  createCat(
    @Args('input')
    input: CreateCatInput,
  ) {
    return this.service.createCat(input);
  }
}
