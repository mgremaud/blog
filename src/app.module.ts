import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './modules/articles/controller/articles.controller';
import { ArticlesService } from './modules/articles/service/articles.service';
import { ArticlesModule } from './modules/articles/module/articles.module';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
