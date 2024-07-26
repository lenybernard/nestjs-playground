import { AnimalEntity } from './animal.entity';
import { ChildEntity } from 'typeorm';

export const DOG_TYPE = 'Dog';

@ChildEntity(DOG_TYPE)
export class DogEntity extends AnimalEntity {
  constructor() {
    super();
    this.species = 'canis lupus familiaris';
  }

  dtype = DOG_TYPE;

  die() {
    this.living = false;
  }
}
