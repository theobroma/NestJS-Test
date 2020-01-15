import { Injectable } from '@nestjs/common';
import { DogDto } from './interfaces/dog.dto';

@Injectable()
export class DogsService {
  private readonly dogs: DogDto[] = [];

  create(cat: DogDto) {
    this.dogs.push(cat);
  }

  findAll(): DogDto[] {
    return this.dogs;
  }
}
