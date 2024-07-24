import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimalDTO } from './animal.dto';
import { CAT_TYPE } from '../../entities/cat.entity';

@ObjectType(CAT_TYPE, {
  implements: [AnimalDTO],
})
export class CatDTO extends AnimalDTO {
  @FilterableField()
  numberOfLifes!: number;
}
