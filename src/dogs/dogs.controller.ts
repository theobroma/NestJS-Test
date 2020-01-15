import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogDto } from './interfaces/dog.dto';
import { DogRepository } from './dogs.repository';
// import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  // constructor(
  //   @InjectRepository(DogRepository)
  //   private readonly dogRepository: DogRepository,
  //   private readonly dogService: DogService,
  // ) {}

  @Get()
  getDogs() {
    return 'we get all dogs';
  }

  @Post()
  create(@Body() dogDto: DogDto) {
    return dogDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `we get the dog with the id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `we update the dog with the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `we delete the dog with the id ${id}`;
  }
}
