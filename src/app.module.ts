import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './modules/articles/controller/articles.controller';
import { ArticlesService } from './modules/articles/service/articles.service';
import { ArticlesModule } from './modules/articles/module/articles.module';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';

const optionsMysql: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3308,
  username: 'root',
  password: 'toor',
  database: 'blog',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  keepConnectionAlive: true,
};

@Module({
  imports: [
      TypeOrmModule.forRoot(optionsMysql),
      ArticlesModule,
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
