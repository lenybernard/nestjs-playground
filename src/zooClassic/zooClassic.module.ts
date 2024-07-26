import { Module } from '@nestjs/common';
import { AnimalEntity } from './entities/animal.entity';
import { CatEntity } from './entities/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalResolver } from './graphql/resolver/animal.resolver';
import { AnimalService } from './entities/animal.service';
import { CatResolver } from './graphql/resolver/cat.resolver';
import { CatService } from './entities/cat.service';
import { DogEntity } from './entities/dog.entity';
import { DogResolver } from './graphql/resolver/dog.resolver';
import { DogService } from './entities/dog.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity, CatEntity, DogEntity])],
  providers: [
    AnimalResolver,
    CatResolver,
    DogResolver,
    AnimalService,
    CatService,
    DogService,
  ],
})
export class ZooClassicModule {}
