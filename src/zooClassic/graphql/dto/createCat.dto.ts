import { InputType, Field } from '@nestjs/graphql';
import { CreateAnimalInput } from './createAnimal.dto';

@InputType()
export class CreateCatInput extends CreateAnimalInput {
  @Field(() => Number, { nullable: true })
  numberOfLifes?: number;
}
