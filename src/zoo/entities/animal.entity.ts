import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity('Animal')
@TableInheritance({
  column: { type: 'varchar', name: 'type' },
})
export class AnimalEntity {
  constructor() {
    this.living = true;
  }

  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  species!: string;

  @Column()
  living!: boolean;

  @Column()
  readonly dtype: string;
}
