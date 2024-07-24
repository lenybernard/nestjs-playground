import { AnimalEntity } from './animal.entity';
import { ChildEntity, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { CanRespawn } from '../graphql/types/animal.interfaces';

export const DOG_TYPE = 'Dog';

@ChildEntity(DOG_TYPE)
@ObjectType(DOG_TYPE, {
  implements: [AnimalEntity],
})
export class DogEntity extends AnimalEntity {
  constructor() {
    super();
    this.species = 'canis lupus familiaris';
  }

  die() {
    this.living = false;
  }
}
