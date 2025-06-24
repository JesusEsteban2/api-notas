import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'NuevoChete25',
      database: 'Movies',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
