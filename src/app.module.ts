import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
