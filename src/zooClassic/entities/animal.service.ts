import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalEntity } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}

  async findOneById(id: string): Promise<AnimalEntity> {
    return await this.animalRepository.findOneOrFail({
      where: { id },
    });
  }

  async findAll(): Promise<AnimalEntity[]> {
    return await this.animalRepository.find();
  }

  async remove(id: string) {
    const animal = await this.animalRepository.findOneOrFail({
      where: { id },
    });
    await this.animalRepository.remove(animal);
    return animal;
  }
}
