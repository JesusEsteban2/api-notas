import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // Assuming CatsService.entity is the Cat entity
  controllers: [CatsController],
  providers: [CatsService],
  exports: [TypeOrmModule, CatsService],
})
export class CatsModule {}
