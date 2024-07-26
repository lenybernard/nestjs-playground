import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalDTO } from './graphql/dto/animal.dto';
import { CatEntity } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './entities/dog.entity';
import { CatDTO } from './graphql/dto/cat.dto';
import { DogDTO } from './graphql/dto/dog.dto';
import { CreateAnimalInput } from './graphql/dto/createAnimal.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalEntity, CatEntity]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          AnimalEntity,
          CatEntity,
          DogEntity,
        ]),
      ],
      resolvers: [
        {
          EntityClass: AnimalEntity,
          DTOClass: AnimalDTO,
          create: { disabled: true },
          update: { disabled: true },
        },
        {
          EntityClass: CatEntity,
          DTOClass: CatDTO,
          CreateDTOClass: CreateAnimalInput,
          delete: { disabled: true },
        },
        {
          EntityClass: DogEntity,
          DTOClass: DogDTO,
          CreateDTOClass: CreateAnimalInput,
          delete: { disabled: true },
        },
      ],
    }),
  ],
  // providers: [AnimalResolver],
})
export class ZooModule {}
