import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { ID, InterfaceType, ObjectType } from '@nestjs/graphql';

@ObjectType('Animal', {
  isAbstract: true,
})
@InterfaceType({
  resolveType: (value) => {
    return value.dtype;
  },
})
export class AnimalDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField()
  species: string;

  @FilterableField()
  living!: boolean;

  @FilterableField()
  type!: boolean;
}
