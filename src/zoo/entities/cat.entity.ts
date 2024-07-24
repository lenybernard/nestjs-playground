import { AnimalEntity } from './animal.entity';
import { ChildEntity, Column } from 'typeorm';

export const CAT_TYPE = 'Cat';

@ChildEntity(CAT_TYPE)
export class CatEntity extends AnimalEntity {
  constructor() {
    super();
    this.numberOfLifes = 9;
    this.species = 'catus';
  }
  @Column()
  numberOfLifes!: number;

  dtype = CAT_TYPE;

  die() {
    this.numberOfLifes--;
    if (this.numberOfLifes === 0) {
      this.living = false;
    }
  }
}
