import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';

@ObjectType('TodoItem')
export class TodoItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}


