import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Author')
export class AuthorDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name!: string;
}


