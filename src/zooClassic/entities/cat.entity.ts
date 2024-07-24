import { AnimalEntity } from './animal.entity';
import { ChildEntity, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { CanRespawn } from '../graphql/types/animal.interfaces';

export const CAT_TYPE = 'Cat';

@ChildEntity(CAT_TYPE)
@ObjectType(CAT_TYPE, {
  implements: [AnimalEntity, CanRespawn],
})
export class CatEntity extends AnimalEntity implements CanRespawn {
  constructor() {
    super();
    this.numberOfLifes = 9;
    this.species = 'catus';
  }
  @Field(() => Number)
  @Column()
  numberOfLifes: number;

  die() {
    this.numberOfLifes--;
    if (this.numberOfLifes === 0) {
      this.living = false;
    }
  }
}
