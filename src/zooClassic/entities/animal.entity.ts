import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { Field, ID, InterfaceType } from '@nestjs/graphql';

@Entity('animal')
@TableInheritance({
  column: { type: 'varchar', name: 'type' },
})
@InterfaceType()
export abstract class AnimalEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  species!: string;

  @Field(() => Boolean)
  @Column()
  living!: boolean;

  abstract die(): void;
}
