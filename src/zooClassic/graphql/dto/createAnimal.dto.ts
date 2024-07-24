import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnimalInput {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  living: boolean;
}
