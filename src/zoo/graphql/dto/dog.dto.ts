import { ObjectType } from '@nestjs/graphql';
import { AnimalDTO } from './animal.dto';
import { DOG_TYPE } from '../../entities/dog.entity';

@ObjectType(DOG_TYPE, {
  implements: [AnimalDTO],
})
export class DogDTO extends AnimalDTO {}
