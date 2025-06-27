import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/entities/cat.entity';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'NuevoChete25',
      database: 'cats_db',
      entities: [Cat],
      retryDelay: 3000,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
  exports: [TypeOrmModule],
})
export class AppModule {}
