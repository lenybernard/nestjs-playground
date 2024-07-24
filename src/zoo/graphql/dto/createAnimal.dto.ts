import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnimalInput {
  @FilterableField()
  name!: string;
}
