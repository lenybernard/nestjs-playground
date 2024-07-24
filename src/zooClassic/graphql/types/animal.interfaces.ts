import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class CanRespawn {
  @Field(() => Number)
  numberOfLifes: number;
}
